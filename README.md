# Love Your Loxx — loveyourloxx.com

Rebuild of the Love Your Loxx (Hair Extensions by Ms Manae, Scottsdale AZ) website.
Next.js 16 (App Router) · TypeScript · Tailwind CSS v4.

## Develop

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm run lint
```

## Structure

| Path | What |
| --- | --- |
| `src/app/` | Routes: `/`, `/about`, `/extensions`, `/gallery`, `/pricing`, `/faq`, `/contact`, plus `sitemap.ts`, `robots.ts`, `not-found.tsx` |
| `src/components/` | Header, Footer, Cta, PageHero, Faq, Gallery (with lightbox), ContactForm, SubNav, Reveal, icons |
| `src/data/site.ts` | **Business details** — phone numbers, address, hours, social links, form endpoint. Edit here, it flows everywhere. |
| `src/data/methods.ts` | The four extension methods (times, durations, copy) |
| `src/data/faqs.tsx` | General and per-method FAQs |
| `src/data/reviews.ts` | Testimonials |
| `src/app/globals.css` | Tailwind theme tokens (colors, font: Onest throughout; type scale) and small component layer |
| `public/img/` | Client photography. `gallery/ba-XX.jpg` + `ba-XX-thumb.jpg` pairs are picked up automatically by `src/lib/gallery.ts`. |

## Contact form

The form posts to `/api/contact` (`src/app/api/contact/route.ts`), which creates or updates the
contact in GoHighLevel via `src/lib/ghl.ts`:

- name / phone / email → the contact record (GHL dedupes on phone and email)
- service, method, goals, natural hair, texture, timeline, contact preference → contact custom
  fields (`contact.service_interest`, `contact.preferred_extension_method`, `contact.extension_goals`,
  `contact.natural_hair`, `contact.hair_texture`, `contact.install_timeline`, `contact.contact_preference`)
- a formatted note with everything, on the contact's timeline
- tag `website-inquiry`, which triggers the notification workflow in GHL. For a returning contact
  the tag is removed and re-added so the workflow fires again.

**Environment variables** (Netlify → Site configuration → Environment variables, and `.env.local` for dev):

| Var | Value |
| --- | --- |
| `GHL_API_TOKEN` | GHL Private Integration Token (sub-account level) with Contacts read/write scopes |
| `GHL_LOCATION_ID` | optional, defaults to the Love Your Loxx sub-account |

The route rejects honeypot hits (hidden `company` field) with a fake success, validates name /
phone / service, and returns 502 if GHL is unreachable. The browser also posts a copy to Netlify Forms
(static definition in `public/__forms.html`) as a backup; if you add or rename a field, update the
form component, the route and that file together.

## Adding before & after photos

Drop a square `ba-NN.jpg` (≈1200px) and a `ba-NN-thumb.jpg` (≈640px) into `public/img/gallery/`. Rebuild. The gallery, count and homepage picks (`HOME_PICKS` in `src/app/page.tsx`) update automatically.

## Deploy

Vercel: import the repo, no config needed. Netlify: build command `npm run build`, uses the Next.js runtime automatically.
Absolute URLs (share image, sitemap, structured data) follow `SITE_URL` in `src/data/site.ts`, which reads `NEXT_PUBLIC_SITE_URL`, then Netlify's `URL`, then falls back to `https://www.loveyourloxx.com`. On Netlify nothing needs setting: it uses the `*.netlify.app` address until the custom domain is attached, then switches automatically.

**Netlify Forms:** form detection must be enabled once in the Netlify UI (Project configuration → Forms → Enable form detection), then redeploy. Without it, submissions return 404.
