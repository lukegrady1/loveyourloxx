/**
 * Minimal GoHighLevel (LeadConnector) client for the contact form.
 * Server-only: reads the Private Integration Token from the environment.
 *
 * Env vars (set in Netlify → Site configuration → Environment variables):
 *   GHL_API_TOKEN     Private Integration Token with contacts.readonly/write scopes
 *   GHL_LOCATION_ID   Sub-account id (defaults to the Love Your Loxx location)
 */

const API = "https://services.leadconnectorhq.com";
const VERSION = "2021-07-28";

export const GHL_LOCATION_ID = process.env.GHL_LOCATION_ID || "ygfr7kWTS92ddkWf3UC8";

/** Tag that fires the "new website inquiry" workflow inside GHL. */
export const INQUIRY_TAG = "website-inquiry";

/**
 * Contact custom fields created for the form (keys, not ids, so the same code
 * works if the fields are ever recreated). Field key = `contact.<key>` in GHL.
 */
export const FIELD_KEYS = {
  service: "service_interest",
  method: "preferred_extension_method",
  goals: "extension_goals",
  naturalHair: "natural_hair",
  texture: "hair_texture",
  timeline: "install_timeline",
  contactPref: "contact_preference",
} as const;

export class GhlError extends Error {
  constructor(
    public status: number,
    public body: string,
    path: string,
  ) {
    super(`GHL ${path} → ${status}: ${body.slice(0, 300)}`);
  }
}

async function ghl<T>(method: "GET" | "POST" | "PUT" | "DELETE", path: string, body?: unknown): Promise<T> {
  const token = process.env.GHL_API_TOKEN;
  if (!token) throw new Error("GHL_API_TOKEN is not set");

  const res = await fetch(`${API}${path}`, {
    method,
    headers: {
      Authorization: `Bearer ${token}`,
      Version: VERSION,
      Accept: "application/json",
      ...(body !== undefined ? { "Content-Type": "application/json" } : {}),
    },
    body: body !== undefined ? JSON.stringify(body) : undefined,
    signal: AbortSignal.timeout(10_000),
  });

  const text = await res.text();
  if (!res.ok) throw new GhlError(res.status, text, path);
  return (text ? JSON.parse(text) : {}) as T;
}

export type ContactFields = {
  firstName: string;
  phone: string;
  email: string;
  source: string;
  customFields: { key: string; field_value: string }[];
};

export type Contact = { id: string; phone?: string | null; email?: string | null; tags?: string[] };

/**
 * Find the contact that already owns this phone number, if any. GHL's upsert
 * matches on email before phone, so a returning client who uses a new email
 * would get a second record with the phone silently dropped (phones are unique
 * per location). Looking up by phone first keeps one record per person.
 */
export async function findContactByPhone(phone: string): Promise<Contact | null> {
  const q = new URLSearchParams({ locationId: GHL_LOCATION_ID, number: phone });
  const res = await ghl<{ contact: Contact | null }>("GET", `/contacts/search/duplicate?${q}`);
  return res.contact ?? null;
}

/**
 * Create-or-update a contact (GHL dedupes on email, then phone). Returns the id
 * and whether this was a brand-new contact.
 */
export function upsertContact(input: ContactFields) {
  return ghl<{ new: boolean; contact: Contact }>("POST", "/contacts/upsert", {
    locationId: GHL_LOCATION_ID,
    ...input,
  });
}

export function updateContact(contactId: string, fields: Partial<ContactFields>) {
  return ghl<{ contact: Contact }>("PUT", `/contacts/${contactId}`, fields);
}

export function addNote(contactId: string, body: string) {
  return ghl<unknown>("POST", `/contacts/${contactId}/notes`, { body });
}

export function removeTags(contactId: string, tags: string[]) {
  return ghl<unknown>("DELETE", `/contacts/${contactId}/tags`, { tags });
}

export function addTags(contactId: string, tags: string[]) {
  return ghl<unknown>("POST", `/contacts/${contactId}/tags`, { tags });
}
