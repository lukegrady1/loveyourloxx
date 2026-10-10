import type { Metadata } from "next";
import Link from "next/link";
import { Cta } from "@/components/Cta";
import { Process } from "@/components/Process";
import { ArrowIcon, CheckIcon } from "@/components/Icons";
import { PageHero } from "@/components/PageHero";
import { BIZ, CONSULT_HREF } from "@/data/site";

export const metadata: Metadata = {
  title: "Hair Extension Pricing | From $500, Free Consultations",
  description:
    "Hair extensions in Scottsdale start at $500 and depend on the method and amount of hair. Free consultations, quotes over the phone, premium reusable hair, free standard removal. Call 480-234-7068.",
  alternates: { canonical: "/pricing" },
};

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
  ["Consultations are free", "Always. Over the phone or in person at the salon. You will never be charged to find out what your options are."],
  ["Starting price", `Full sets start at ${BIZ.startingPrice}. The final price depends on the method, the amount of hair you need and the length and color you choose, and I’ll confirm it with you before you book.`],
  ["Standard removals are free", "A normal removal takes 20 to 45 minutes depending on the method and is included. I don’t use acetone-based removers, so it’s gentle on your hair."],
  ["Overdue removals", "If a set is worn past the recommended inch of regrowth, the new growth can mat and the removal can take up to two hours. Those removals are charged at $50 per hour. Coming in on schedule avoids this entirely."],
  ["Reusing your hair", "Quality hair that has been properly cared for can be reused for future sets. I’ll teach you how to care for it at your first appointment."],
  ["Booking", `The salon is open Monday through Sunday, 9am to 6pm, by appointment. New clients talk to me first, then book online. Existing clients can book online any time, or call or text ${BIZ.cell}.`],
  ["Payment", "Payment is due at the time of service. Ask about payment options when you book."],
];

export default function PricingPage() {
  return (
    <>
      <PageHero
        label="Pricing"
        title={<>Competitive pricing. <em>Premium hair.</em></>}
        lead={`Extensions start at ${BIZ.startingPrice}. Every head of hair is different, so your exact price depends on the method, how much hair you need and what you want done. Call or text, or request a consultation, and I’ll call you with an accurate quote before you book.`}
        image="/img/hero-dark.jpg"
        center
      >
        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-5 mt-2">
          <div className="flex flex-col gap-1 items-center">
            <small className="font-label text-[0.7rem] tracking-[0.22em] uppercase text-gold">Or call or text for a quote</small>
            <a href={`tel:${BIZ.cellTel}`} className="font-label font-medium text-[clamp(1.5rem,2.8vw,2rem)] tracking-[0.01em] leading-none text-cream hover:text-gold">
              {BIZ.cellDisplay}
            </a>
          </div>
          <Link href={CONSULT_HREF} className="btn btn-light">
            Request a consultation <ArrowIcon />
          </Link>
        </div>
      </PageHero>

      <Process />

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

      <Cta title={<>Get your <em>quote</em> today.</>} body="Call or text, or send a few details about your hair, and I’ll call you with a straight answer on method and price. Then you book." />
    </>
  );
}
