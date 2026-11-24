import { GENERAL_FAQ } from "@/data/faqs";
import { METHODS } from "@/data/methods";
import { BIZ, SITE_URL } from "@/data/site";

// /llms.txt (llmstxt.org): a plain-markdown summary of the salon for AI
// assistants and AI search, built from the same data as the pages and schema.
// FAQ answers are JSX, so only the questions are listed, linked to /faq.
export const dynamic = "force-static";

const url = (path: string) => `${SITE_URL}${path}`;

export function GET() {
  const lines = [
    `# ${BIZ.name}`,
    "",
    `> Hair extension salon in Scottsdale, Arizona run by Ms Manae, who has specialized in hair extensions for 28+ years. Micro bead, fusion, tape-in and hand tied extensions for length and volume. Full sets start at ${BIZ.startingPrice}; every client starts with a free consultation.`,
    "",
    "## Business details",
    "",
    `- Name: ${BIZ.name} (${BIZ.legalName})`,
    `- Address: ${BIZ.street}, ${BIZ.city}`,
    `- Cell (call or text Ms Manae): ${BIZ.cellDisplay}`,
    `- Salon phone: ${BIZ.salon}`,
    `- Hours: ${BIZ.hours} (${BIZ.hoursNote.toLowerCase()})`,
    `- Pricing: full sets start at ${BIZ.startingPrice}; the exact price depends on the method and amount of hair`,
    `- Instagram: ${BIZ.social.instagram}`,
    `- Facebook: ${BIZ.social.facebook}`,
    "",
    "## Extension methods",
    "",
    ...METHODS.map(
      (m) =>
        `- [${m.name}](${url(`/extensions/${m.id}`)}) (${m.aka}): ${m.short} Install ${m.time}; lasts ${m.lasts.toLowerCase()}. Best for: ${m.best}`,
    ),
    "",
    "## Frequently asked questions",
    "",
    `Answered in full at ${url("/faq")}:`,
    "",
    ...GENERAL_FAQ.map((f) => `- ${f.q}`),
    "",
    "## Pages",
    "",
    `- [Home](${url("/")})`,
    `- [About Ms Manae](${url("/about")})`,
    `- [Extension methods](${url("/extensions")})`,
    `- [Before and after gallery](${url("/gallery")})`,
    `- [Pricing](${url("/pricing")})`,
    `- [FAQ](${url("/faq")})`,
    `- [Book online](${url("/book")})`,
    `- [Contact and free consultation](${url("/contact")})`,
    "",
  ];

  return new Response(lines.join("\n"), {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
