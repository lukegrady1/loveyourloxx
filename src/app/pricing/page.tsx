import type { Metadata } from "next";
import Link from "next/link";
import { Cta } from "@/components/Cta";
import { ArrowIcon, CheckIcon } from "@/components/Icons";
import { PageHero } from "@/components/PageHero";
import { BIZ } from "@/data/site";

export const metadata: Metadata = {
  title: "Hair Extension Pricing | Free Consultations",
  description:
    "How hair extension pricing works at Love Your Loxx in Scottsdale. Free consultations, quotes over the phone, premium reusable hair, free standard removal. Call 480-234-7068.",
  alternates: { canonical: "/pricing" },
};

const STEPS = [
  ["Tell me about your hair", "Your current length, color, texture and density, and what you’re hoping for: length, volume, color, or all three. A quick call or the contact form works."],
  ["Get a range over the phone", "With a few answers I can give you an accurate quote or a high-and-low figure right away, so there are no surprises when you come in."],
  ["Free in-person consultation", "I’ll look at your hair, color-match the extension hair, confirm the method and the amount of hair you need, and lock in your exact price."],
];

const INCLUDED = [
  <><strong>Premium, reusable hair</strong> supplied and color-matched to you</>,
  <><strong>Full application</strong> with cutting, layering and blending</>,
  <><strong>Care education</strong> so your set lasts and your hair stays healthy</>,
  <><strong>Free standard removal</strong> when you come in on schedule</>,
  <><strong>Re-tipping</strong> so quality hair can be reapplied as a new set</>,
];

const VARIABLES = [
  ["Method", "Micro bead, fusion, tape-in and hand tied each use different hair and take different amounts of time."],
  ["How much hair you need", "Adding volume to fine hair needs less than taking a bob to a mane. Thick natural hair needs more to blend."],
  ["Length and color", "Longer lengths and custom color blends (rooted, balayage, multiple tones) cost more than a single shade."],
  ["New hair or reused", "If your previous set was cared for, we can re-tip and reapply it, which saves you money."],
];

const POLICIES = [
  ["Consultations are free", "Always. In person at the salon or over the phone. You will never be charged to find out what your options are."],
  ["Standard removals are free", "A normal removal takes 20 to 45 minutes depending on the method and is included. I don’t use acetone-based removers, so it’s gentle on your hair."],
  ["Overdue removals", "If a set is worn past the recommended inch of regrowth, the new growth can mat and the removal can take up to two hours. Those removals are charged at $50 per hour. Coming in on schedule avoids this entirely."],
  ["Reusing your hair", "Quality hair that has been properly cared for can be reused for future sets. I’ll teach you how to care for it at your first appointment."],
  ["Booking", `The salon is open Monday through Sunday, 9am to 6pm, by appointment. Book online, or call or text ${BIZ.cell} to schedule.`],
  ["Payment", "Payment is due at the time of service. Ask about payment options when you book."],
];

export default function PricingPage() {
  return (
    <>
      <PageHero
        label="Pricing"
        title={<>Competitive pricing. <em>Premium hair.</em></>}
        lead="Every head of hair is different, so every quote is too. Call or text and after a few quick questions I can give you an accurate quote or a high-and-low range right over the phone."
        image="/img/hero-dark.jpg"
        center
      >
        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-5 mt-2">
          <div className="flex flex-col gap-1 items-center">
            <small className="font-label text-[0.7rem] tracking-[0.22em] uppercase text-gold">Call or text for a quote</small>
            <a href={`tel:${BIZ.cellTel}`} className="font-label font-medium text-[clamp(1.5rem,2.8vw,2rem)] tracking-[0.01em] leading-none text-cream hover:text-gold">
              {BIZ.cellDisplay}
            </a>
          </div>
          <Link href="/contact" className="btn btn-light">
            Request a quote online <ArrowIcon />
          </Link>
          <Link href="/book" className="link !text-cream-2 hover:!text-gold">
            Or book a free consultation <ArrowIcon />
          </Link>
        </div>
      </PageHero>

      <section className="py-[clamp(4rem,9vw,8rem)]">
        <div className="wrap">
          <div className="reveal mb-[clamp(2.5rem,5vw,4rem)]">
            <span className="label">How it works</span>
            <h2 className="display text-h-lg mt-3">
              Three steps to <em>your quote.</em>
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {STEPS.map(([t, b], i) => (
              <article key={t} className="reveal flex flex-col gap-4 bg-cream border border-cream-3 px-7 py-8" data-delay={String(i)}>
                <span className="font-display font-light text-[2.6rem] leading-none text-terracotta">{i + 1}</span>
                <h3 className="font-display text-[1.5rem]">{t}</h3>
                <p className="text-ink-3 text-[0.97rem] m-0">{b}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-cream-2 py-[clamp(4rem,9vw,8rem)]">
        <div className="wrap grid md:grid-cols-2 gap-[clamp(2rem,6vw,6rem)] items-start">
          <div className="reveal">
            <span className="label">What’s included</span>
            <h2 className="display text-h-lg mt-3 mb-5">
              More than <em>just hair.</em>
            </h2>
            <p className="text-stone mb-6">My pricing is competitive, and it guarantees you receive quality hair. Please visit my reviews for validation.</p>
            <ul className="grid gap-3">
              {INCLUDED.map((c, i) => (
                <li key={i} className="grid grid-cols-[22px_1fr] gap-3 items-start text-[0.98rem] text-ink-3">
                  <CheckIcon className="w-[18px] h-[18px] text-terracotta mt-1" />
                  <span>{c}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="reveal" data-delay="1">
            <span className="label">What affects the price</span>
            <h2 className="display text-h-lg mt-3 mb-5">
              Honest <em>variables.</em>
            </h2>
            <div className="grid gap-6">
              {VARIABLES.map(([t, b]) => (
                <div key={t}>
                  <h3 className="font-display text-[1.4rem] mb-1.5">{t}</h3>
                  <p className="text-ink-3 text-[0.97rem] m-0">{b}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-[clamp(4rem,9vw,8rem)]">
        <div className="wrap">
          <div className="reveal mb-[clamp(2.5rem,5vw,4rem)]">
            <span className="label">Policies</span>
            <h2 className="display text-h-lg mt-3">
              The <em>fine print,</em> in plain English.
            </h2>
          </div>
          <div className="reveal grid md:grid-cols-2 gap-x-12 gap-y-8" data-delay="1">
            {POLICIES.map(([t, b]) => (
              <div key={t}>
                <h3 className="font-display text-[1.4rem] mb-1.5">{t}</h3>
                <p className="text-ink-3 text-[0.97rem] m-0">{b}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Cta title={<>Get your <em>quote</em> today.</>} body="A quick call or text is all it takes. I’ll ask a few questions about your hair and give you a straight answer." />
    </>
  );
}
