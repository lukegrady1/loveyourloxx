#!/usr/bin/env node
/*
  Sync the service menu in GoHighLevel's *Services* module (Calendars >
  Services tab) for Love Your Loxx. Idempotent: matches by slug, creates what
  is missing, updates the rest. Mirrors the SERVICES list on /book.

    node --env-file=.env.local scripts/ghl-services.mjs --dry-run
    node --env-file=.env.local scripts/ghl-services.mjs
*/
const API = "https://services.leadconnectorhq.com";
const TOKEN = process.env.GHL_API_TOKEN;
const LOCATION_ID = process.env.GHL_LOCATION_ID;
const MANAE = "tpALrTUKPKBhTYb9wdTL";
const DRY = process.argv.includes("--dry-run");
if (!TOKEN || !LOCATION_ID) { console.error("Set GHL_API_TOKEN and GHL_LOCATION_ID"); process.exit(1); }

const CATEGORIES = [
  { slug: "consultation", name: "Consultation", description: "Start here if you are new. Ms Manae talks through your hair and gives you a price." },
  { slug: "extensions", name: "Extensions", description: "Full sets start at $500. Your exact price depends on the method and the amount of hair, and is agreed on your call." },
  { slug: "maintenance-removal", name: "Maintenance & Removal", description: "Re-tapes and removals. Standard removal is $75 per hour, overdue removal $100 per hour." },
];

/* slug, category, name, price, minutes, description */
const SERVICES = [
  ["consultation", "consultation", "Consultation", 0, 30, "Free. In-person consultation. Bring inspiration photos if you have them."],
  ["micro-bead-extensions", "extensions", "Micro Bead Extensions (Full Set)", 500, 150, "Starting at $500. Final price quoted by Ms Manae on your call."],
  ["fusion-extensions", "extensions", "Fusion Extensions (Full Set)", 500, 180, "Starting at $500. Final price quoted by Ms Manae on your call."],
  ["tape-in-extensions", "extensions", "Tape-In Extensions (Install)", 500, 60, "Starting at $500. Final price quoted by Ms Manae on your call."],
  ["hand-tied-extensions", "extensions", "Hand Tied Extensions (Full Set)", 500, 120, "Starting at $500. Final price quoted by Ms Manae on your call."],
  ["tape-in-maintenance", "maintenance-removal", "Tape-In Maintenance (Re-tape)", 0, 60, "Price quoted by Ms Manae based on your set. Book after your call."],
  ["extension-removal", "maintenance-removal", "Extension Removal ($75/hr)", 75, 45, "$75 per hour when you come in on schedule, around one inch of regrowth."],
  ["overdue-removal", "maintenance-removal", "Overdue Removal ($100/hr)", 100, 120, "$100 per hour for overdue sets. Allow up to two hours."],
].map(([slug, category, name, price, minutes, description]) => ({ slug, category, name, price, minutes, description }));

async function api(method, path, body) {
  const res = await fetch(`${API}${path}`, {
    method,
    headers: { Authorization: `Bearer ${TOKEN}`, Version: "2021-04-15", "Content-Type": "application/json", Accept: "application/json", "User-Agent": "curl/8.0" },
    body: body ? JSON.stringify(body) : undefined,
  });
  const text = await res.text();
  let json; try { json = text ? JSON.parse(text) : {}; } catch { json = { raw: text }; }
  if (!res.ok) throw new Error(`${method} ${path} -> ${res.status}: ${JSON.stringify(json).slice(0, 400)}`);
  return json;
}
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

(async () => {
  const cats = await api("GET", `/calendars/service-categories?locationId=${LOCATION_ID}`);
  const catList = cats.serviceCategories ?? cats.categories ?? cats;
  const catBySlug = new Map(catList.map((c) => [c.slug, c]));
  for (const c of CATEGORIES) {
    if (catBySlug.has(c.slug)) continue;
    if (DRY) { console.log(`[dry-run] create category ${c.name}`); continue; }
    const r = await api("POST", "/calendars/service-categories", { locationId: LOCATION_ID, ...c, isActive: true });
    const created = r.serviceCategory ?? r.category ?? r;
    catBySlug.set(c.slug, created);
    console.log(`Category created ${c.name} ${created._id ?? created.id}`);
  }
  const catId = (slug) => { const c = catBySlug.get(slug); return c?._id ?? c?.id; };

  const existing = (await api("GET", `/calendars/services?locationId=${LOCATION_ID}`)).services ?? [];
  const bySlug = new Map(existing.map((s) => [s.slug, s]));
  for (const s of SERVICES) {
    const payload = {
      name: s.name,
      description: `<p>${s.description}</p>`,
      slug: s.slug,
      serviceDuration: s.minutes,
      serviceDurationUnit: "mins",
      payment: { amount: s.price, description: "" },
      serviceCategoryId: catId(s.category),
      teamMembers: [{ id: MANAE, price: s.price, serviceDuration: s.minutes, serviceDurationUnit: "mins" }],
      isActive: true,
      isPrivate: false,
      industryType: "service",
    };
    const found = bySlug.get(s.slug);
    if (DRY) { console.log(`[dry-run] ${found ? "update" : "create"} ${s.name} $${s.price} ${s.minutes}m -> ${s.category}`); continue; }
    if (found) {
      await api("PUT", `/calendars/services/${found._id}`, payload);
      console.log(`Updated ${s.name.padEnd(34)} ${found._id}`);
    } else {
      const r = await api("POST", "/calendars/services", { locationId: LOCATION_ID, ...payload });
      const created = r.service ?? r;
      console.log(`Created ${s.name.padEnd(34)} ${created._id}`);
    }
    await sleep(250);
  }
})().catch((e) => { console.error("\nFailed:", e.message); process.exit(1); });
