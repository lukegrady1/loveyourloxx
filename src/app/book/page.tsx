import type { Metadata } from "next";
import Link from "next/link";
import { BookingWidget } from "@/components/BookingWidget";
import { ArrowIcon, CheckIcon } from "@/components/Icons";
import { PageHero } from "@/components/PageHero";
import { BIZ } from "@/data/site";

export const metadata: Metadata = {
  title: "Book Online | Free Consultations & Hair Extension Appointments",
  description:
    "Book a free hair extension consultation, a new set of micro bead, fusion, tape-in or hand tied extensions, or a removal with Ms Manae in Scottsdale. Open 7 days, 9am to 6pm, by appointment.",
  alternates: { canonical: "/book" },
};

const SERVICES = [
  ["Free consultation", "30 min"],
  ["Micro bead extensions, full set", "2.5 hrs"],
  ["Fusion extensions, full set", "3 hrs"],
  ["Tape-in extensions, install", "1 hr"],
  ["Tape-in maintenance, re-tape", "1 hr"],
  ["Hand tied extensions, full set", "2 hrs"],
  ["Standard removal, free", "45 min"],
  ["Overdue removal, $50 per hour", "Up to 2 hrs"],
];

const NOTES = [
  "New to extensions? Start with a free consultation. Ms Manae will color-match your hair and confirm the right method and amount before you commit to a set.",
  "Already know what you want? Book the set directly and we will confirm the details by text before your visit.",
  "Removals are free when you come in on schedule, around one inch of regrowth.",
];

export default function BookPage() {
  return (
    <>
      <PageHero
        label="Book online"
        title={<>Pick a service. <em>Pick a time.</em></>}
        lead="Choose what you need, see Ms Manae’s live availability, and lock in your appointment in under a minute. Consultations are always free."
        image="/img/hero-dark.jpg"
      >
        <div className="flex flex-wrap items-center gap-x-8 gap-y-5 mt-2">
          <div className="flex flex-col gap-1">
            <small className="font-label text-[0.7rem] tracking-[0.22em] uppercase text-gold">Prefer to call or text?</small>
            <a href={`tel:${BIZ.cellTel}`} className="font-label font-medium text-[clamp(1.5rem,2.8vw,2rem)] tracking-[0.01em] leading-none text-cream hover:text-gold">
              {BIZ.cellDisplay}
            </a>
          </div>
        </div>
      </PageHero>

      <section className="py-[clamp(3rem,7vw,6rem)]">
        <div className="wrap grid lg:grid-cols-[4fr_8fr] gap-[clamp(2.5rem,6vw,5rem)] items-start">
          <aside className="reveal grid gap-8 lg:sticky lg:top-[calc(var(--header-h)+2rem)]">
            <div>
              <span className="label">What you can book</span>
              <h2 className="display text-h-md mt-2 mb-5">
                Every service, <em>one calendar.</em>
              </h2>
              <ul className="grid gap-2.5">
                {SERVICES.map(([name, time]) => (
                  <li key={name} className="grid grid-cols-[22px_1fr_auto] gap-3 items-baseline text-[0.97rem] text-ink-3 border-b border-cream-3 pb-2.5">
                    <CheckIcon className="w-[18px] h-[18px] text-terracotta self-center" />
                    <span>{name}</span>
                    <span className="font-label text-[0.68rem] tracking-[0.14em] uppercase text-stone whitespace-nowrap">{time}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="grid gap-4 bg-cream-2 border-l-2 border-terracotta p-6">
              {NOTES.map((n) => (
                <p key={n} className="text-ink-3 text-[0.95rem] m-0">
                  {n}
                </p>
              ))}
              <Link href="/pricing" className="link self-start">
                How pricing works <ArrowIcon />
              </Link>
            </div>
            <p className="text-stone text-[0.9rem] m-0">
              {BIZ.hours}, {BIZ.hoursNote.toLowerCase()}. {BIZ.street}, {BIZ.city}.
            </p>
          </aside>

          <div className="reveal" data-delay="1">
            <div className="booking-frame bg-cream border border-cream-3">
              <BookingWidget />
            </div>
            <p className="text-stone text-[0.9rem] mt-4">
              Trouble with the calendar?{" "}
              <a href={BIZ.bookingUrl} target="_blank" rel="noopener noreferrer" className="link">
                Open the booking page in a new tab
              </a>{" "}
              or{" "}
              <Link href="/contact" className="link">
                send Ms Manae a message
              </Link>
              .
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
