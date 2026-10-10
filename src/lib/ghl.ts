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

export type UpsertInput = {
  firstName: string;
  phone: string;
  email: string;
  source: string;
  tags: string[];
  customFields: { key: string; field_value: string }[];
};

type UpsertResponse = {
  new: boolean;
  contact: { id: string; tags?: string[] };
};

/**
 * Create-or-update a contact (GHL dedupes on phone/email). Returns the id and
 * whether this was a brand-new contact.
 */
export function upsertContact(input: UpsertInput) {
  return ghl<UpsertResponse>("POST", "/contacts/upsert", {
    locationId: GHL_LOCATION_ID,
    ...input,
  });
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

/**
 * GHL's "Contact Tag added" workflow trigger only fires when the tag is newly
 * applied. A returning contact who already carries the tag would be silent, so
 * pull it off and put it back to re-fire the workflow.
 */
export async function retriggerTag(contactId: string, tag: string) {
  await removeTags(contactId, [tag]);
  await addTags(contactId, [tag]);
}
