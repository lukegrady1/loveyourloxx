import { NextResponse } from "next/server";
import { FIELD_KEYS, INQUIRY_TAG, GhlError, addNote, addTags, findContactByPhone, removeTags, updateContact, upsertContact } from "@/lib/ghl";

/**
 * POST /api/contact
 * Receives the consultation request form (multipart or url-encoded FormData),
 * drops honeypot hits, validates, then creates/updates the contact in
 * GoHighLevel with custom fields, a formatted note and the `website-inquiry`
 * tag that triggers the notification workflow.
 */

const MAX_FIELD = 2000;
const SOURCE = "Website contact form";

type Fields = {
  name: string;
  phone: string;
  email: string;
  service: string;
  method: string;
  goals: string;
  naturalHair: string;
  texture: string[];
  timeline: string;
  contactPref: string;
  company: string; // honeypot
};

function str(data: FormData, key: string): string {
  const v = data.get(key);
  return typeof v === "string" ? v.trim().slice(0, MAX_FIELD) : "";
}

function strs(data: FormData, key: string): string[] {
  return data
    .getAll(key)
    .filter((v): v is string => typeof v === "string")
    .map((v) => v.trim().slice(0, 100))
    .filter(Boolean)
    .slice(0, 20);
}

async function readFields(req: Request): Promise<Fields | null> {
  const type = req.headers.get("content-type") || "";
  let data: FormData;
  try {
    if (type.includes("application/json")) {
      const json = (await req.json()) as Record<string, unknown>;
      data = new FormData();
      for (const [k, v] of Object.entries(json)) {
        if (Array.isArray(v)) v.forEach((x) => data.append(k, String(x)));
        else if (v != null) data.append(k, String(v));
      }
    } else {
      data = await req.formData();
    }
  } catch {
    return null;
  }
  return {
    name: str(data, "name"),
    phone: str(data, "phone"),
    email: str(data, "email"),
    service: str(data, "service"),
    method: str(data, "method"),
    goals: str(data, "goals"),
    naturalHair: str(data, "natural_hair"),
    texture: strs(data, "texture[]").concat(strs(data, "texture")),
    timeline: str(data, "timeline"),
    contactPref: str(data, "contact_pref"),
    company: str(data, "company"),
  };
}

/** Normalise US numbers to E.164 so GHL dedupes reliably; leave anything else as typed. */
function normalisePhone(raw: string): string {
  const digits = raw.replace(/\D/g, "");
  if (digits.length === 10) return `+1${digits}`;
  if (digits.length === 11 && digits.startsWith("1")) return `+${digits}`;
  if (raw.trim().startsWith("+") && digits.length >= 8) return `+${digits}`;
  return raw.trim();
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function buildNote(f: Fields, phone: string): string {
  const lines = [
    "New consultation request from loveyourloxx.com",
    "",
    `Name: ${f.name}`,
    `Phone: ${phone}`,
    `Email: ${f.email}`,
    `Best way to reach: ${f.contactPref || "—"}`,
    "",
    `Interested in: ${f.service}`,
    `Preferred method: ${f.method || "Not sure yet"}`,
    `Timeline: ${f.timeline || "No preference"}`,
    `Natural hair: ${f.naturalHair || "—"}`,
    `Texture: ${f.texture.length ? f.texture.join(", ") : "—"}`,
    "",
    "Goals:",
    f.goals || "—",
  ];
  return lines.join("\n");
}

export async function POST(req: Request) {
  const f = await readFields(req);
  if (!f) return NextResponse.json({ ok: false, error: "Bad request" }, { status: 400 });

  // Honeypot: bots fill the hidden "company" field. Pretend it worked.
  if (f.company) return NextResponse.json({ ok: true });

  const errors: string[] = [];
  if (!f.name) errors.push("name");
  if (!f.phone || f.phone.replace(/\D/g, "").length < 7) errors.push("phone");
  if (!f.service) errors.push("service");
  if (!EMAIL_RE.test(f.email)) errors.push("email");
  if (errors.length) {
    return NextResponse.json({ ok: false, error: "Missing or invalid fields", fields: errors }, { status: 422 });
  }

  const phone = normalisePhone(f.phone);
  const customFields = [
    { key: FIELD_KEYS.service, field_value: f.service },
    { key: FIELD_KEYS.method, field_value: f.method || "Not sure yet" },
    { key: FIELD_KEYS.goals, field_value: f.goals },
    { key: FIELD_KEYS.naturalHair, field_value: f.naturalHair },
    { key: FIELD_KEYS.texture, field_value: f.texture.join(", ") },
    { key: FIELD_KEYS.timeline, field_value: f.timeline },
    { key: FIELD_KEYS.contactPref, field_value: f.contactPref },
  ].filter((c) => c.field_value);

  try {
    const fields = { firstName: f.name, phone, email: f.email, source: SOURCE, customFields };

    // Phone is the identifier that matters for a salon. If someone we already
    // know submits with a different email, update their record rather than
    // letting GHL's email-first upsert create a duplicate without a phone.
    const existing = await findContactByPhone(phone);
    let id: string;
    let isNew = false;
    if (existing) {
      id = existing.id;
      try {
        await updateContact(id, fields);
      } catch (err) {
        // The new email already belongs to another contact. GHL rejects the whole
        // update, so save everything else and leave the email in the note.
        if (!(err instanceof GhlError && err.status === 400 && /duplicat/i.test(err.body))) throw err;
        await updateContact(id, { ...fields, email: undefined });
      }
    } else {
      const result = await upsertContact(fields);
      id = result.contact.id;
      isNew = result.new;
    }

    // Note first so it's on the record when the workflow fires.
    await addNote(id, buildNote(f, phone));

    // Tag last, once every field is saved, so the workflow sees the full record.
    // GHL's "tag added" trigger only fires when the tag is newly applied, so a
    // returning contact gets it removed and re-added.
    if (!isNew) await removeTags(id, [INQUIRY_TAG]);
    await addTags(id, [INQUIRY_TAG]);

    return NextResponse.json({ ok: true });
  } catch (err) {
    if (err instanceof GhlError) {
      console.error("[contact] GHL request failed:", err.message);
    } else {
      console.error("[contact] Unexpected error:", err);
    }
    return NextResponse.json({ ok: false, error: "Could not deliver your message" }, { status: 502 });
  }
}
