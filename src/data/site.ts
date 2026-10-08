/**
 * Canonical origin used for absolute URLs (Open Graph image, sitemap, JSON-LD).
 * Resolved at build time: an explicit NEXT_PUBLIC_SITE_URL wins, then Netlify's
 * primary site URL (the *.netlify.app address now, the custom domain once attached),
 * then the production domain.
 */
export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL || process.env.URL || "https://www.loveyourloxx.com").replace(/\/$/, "");

export const BIZ = {
  name: "Love Your Loxx",
  legalName: "Love Your Loxx Hair Extensions LLC",
  tagline: "Hair Extensions by Ms Manae",
  cell: "480-234-7068",
  cellDisplay: "(480) 234-7068",
  cellTel: "+14802347068",
  salon: "480-947-0025",
  salonTel: "+14809470025",
  street: "2334 N Scottsdale Rd #117",
  city: "Scottsdale, AZ 85257",
  hours: "Monday – Sunday, 9am – 6pm",
  hoursNote: "By appointment",
  social: {
    facebook: "https://www.facebook.com/LoveYourLoxxAZ",
    instagram: "https://www.instagram.com/loveyourloxxaz/",
    pinterest: "https://www.pinterest.com/loveyourloxxaz/",
  },
  mapsLink:
    "https://www.google.com/maps/search/?api=1&query=2334+N+Scottsdale+Rd+%23117+Scottsdale+AZ+85257",
  mapsEmbed:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3328.0215849167944!2d-111.9275991!3d33.4747888!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x872b0afc453188e5%3A0x2613b8dd36fabc6e!2sLove%20Your%20Loxx%20Hair%20Extension%20Salon!5e0!3m2!1sen!2sus!4v1790874607473!5m2!1sen!2sus",
  /**
   * Contact form endpoint.
   * Leave as-is on Netlify: the form posts to /__forms.html and Netlify Forms collects it.
   * Elsewhere, replace YOUR_FORM_ID with a Formspree form id.
   */
  formEndpoint: "https://formspree.io/f/YOUR_FORM_ID",
  /**
   * GoHighLevel online booking. The group widget lists every service calendar
   * in the "Love Your Loxx Services" menu (sub-account ygfr7kWTS92ddkWf3UC8).
   */
  bookingUrl: "https://api.leadconnectorhq.com/widget/groups/loveyourloxx-scottsdale",
  bookingEmbedScript: "https://link.msgsndr.com/js/form_embed.js",
} as const;

export const NAV = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/extensions", label: "Extensions" },
  { href: "/gallery", label: "Before & After" },
  { href: "/pricing", label: "Pricing" },
  { href: "/faq", label: "FAQ" },
  { href: "/book", label: "Book Online" },
  { href: "/contact", label: "Contact" },
] as const;
