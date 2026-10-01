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

The form posts to `BIZ.formEndpoint` in `src/data/site.ts`.

- **Netlify:** nothing to do. The Next.js runtime needs a static form definition, which lives in `public/__forms.html`; the React form posts to it and submissions appear under Forms in the Netlify dashboard. Set up an email notification there. If you add or rename a field, update both files.
- **Vercel / anywhere else:** create a free form at [formspree.io](https://formspree.io), paste the endpoint URL into `formEndpoint`. The form then submits via fetch and shows an inline thank-you.

## Adding before & after photos

Drop a square `ba-NN.jpg` (≈1200px) and a `ba-NN-thumb.jpg` (≈640px) into `public/img/gallery/`. Rebuild. The gallery, count and homepage picks (`HOME_PICKS` in `src/app/page.tsx`) update automatically.

## Deploy

Vercel: import the repo, no config needed. Netlify: build command `npm run build`, uses the Next.js runtime automatically.
Absolute URLs (share image, sitemap, structured data) follow `SITE_URL` in `src/data/site.ts`, which reads `NEXT_PUBLIC_SITE_URL`, then Netlify's `URL`, then falls back to `https://www.loveyourloxx.com`. On Netlify nothing needs setting: it uses the `*.netlify.app` address until the custom domain is attached, then switches automatically.

**Netlify Forms:** form detection must be enabled once in the Netlify UI (Project configuration → Forms → Enable form detection), then redeploy. Without it, submissions return 404.
