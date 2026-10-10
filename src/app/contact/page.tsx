import type { Metadata } from "next";
import Link from "next/link";
import { ContactForm } from "@/components/ContactForm";
import { ArrowIcon } from "@/components/Icons";
import { PageHero } from "@/components/PageHero";
import { Socials } from "@/components/Socials";
import { BIZ, PROCESS } from "@/data/site";

export const metadata: Metadata = {
  title: "Request a Free Consultation | Contact Ms Manae",
  description:
    "Request a free hair extension consultation in Scottsdale. Call or text Ms Manae at 480-234-7068, or send a few details and she will call you with options and pricing before you book. 2334 N Scottsdale Rd #117, open 7 days by appointment.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        label="Contact"
        title={<>Let’s make you a more <em>fabulous you.</em></>}
        lead="Call or text me, or send a few details below, and I’ll call you to talk through your options and your price before you book anything. Consultations are always free, and the more you tell me about your hair, the more accurate your quote will be."
        image="/img/hero-blonde.jpg"
        imagePosition="70% 30%"
      />
      <section className="py-[clamp(4rem,9vw,8rem)]">
        <div className="wrap grid lg:grid-cols-[5fr_7fr] gap-[clamp(2.5rem,6vw,6rem)] items-start">
          <aside className="reveal grid gap-8 lg:sticky lg:top-[calc(var(--header-h)+2rem)]">
            <div className="grid gap-4 bg-cream-2 border-l-2 border-terracotta p-6">
              <span className="label">How it works</span>
              <ol className="grid gap-3 m-0 p-0 list-none">
                {PROCESS.map((step, i) => (
                  <li key={step.title} className="grid grid-cols-[2rem_1fr] gap-3 items-baseline">
                    <span className="font-display font-light text-[1.9rem] leading-none text-terracotta">{i + 1}</span>
                    <span className="text-ink-3">
                      <strong className="block font-display font-normal text-ink text-[1.15rem]">{step.title}</strong>
                      {step.body}
                    </span>
                  </li>
                ))}
              </ol>
              <a href="#consult" className="btn self-start lg:hidden">
                Request a consultation <ArrowIcon />
              </a>
            </div>
            <div className="grid gap-1 bg-cream-2 border-l-2 border-terracotta p-6">
              <span className="label mb-1">Prefer to call or text?</span>
              <a href={`tel:${BIZ.cellTel}`} className="font-label text-[1.5rem] tracking-[0.05em] text-ink hover:text-terracotta">
                {BIZ.cell}
              </a>
              <a href={`sms:${BIZ.cellTel}`} className="link mt-2 self-start">
                Send a text message <ArrowIcon />
              </a>
            </div>
            <div className="grid grid-cols-2 gap-x-8 gap-y-6">
              <div>
                <h4 className="font-label font-normal text-[0.7rem] tracking-[0.22em] uppercase text-terracotta mb-2">Salon line</h4>
                <a href={`tel:${BIZ.salonTel}`} className="font-label text-[1.2rem] tracking-[0.05em] text-ink hover:text-terracotta">
                  {BIZ.salon}
                </a>
              </div>
              <div>
                <h4 className="font-label font-normal text-[0.7rem] tracking-[0.22em] uppercase text-terracotta mb-2">Hours</h4>
                <p className="text-ink-3 m-0">
                  {BIZ.hours}
                  <br />
                  {BIZ.hoursNote}
                </p>
              </div>
              <div className="col-span-2">
                <h4 className="font-label font-normal text-[0.7rem] tracking-[0.22em] uppercase text-terracotta mb-2">Address</h4>
                <p className="text-ink-3 m-0">
                  <a href={BIZ.mapsLink} target="_blank" rel="noopener noreferrer" className="hover:text-terracotta">
                    {BIZ.street}
                    <br />
                    {BIZ.city}
                  </a>
                </p>
              </div>
            </div>
            <div className="map-frame relative min-h-[280px] bg-cream-2">
              <iframe title="Map to Love Your Loxx" src={BIZ.mapsEmbed} loading="lazy" referrerPolicy="strict-origin-when-cross-origin" className="absolute inset-0 w-full h-full border-0" />
            </div>
            <p className="text-stone text-[0.9rem] m-0">
              Already spoken with Ms Manae?{" "}
              <Link href="/book" className="link">
                Book your appointment online <ArrowIcon />
              </Link>
            </p>
            <Socials />
          </aside>
          <div id="consult" className="reveal scroll-mt-[calc(var(--header-h)+1.5rem)]" data-delay="1">
            <span className="label">Request a free consultation</span>
            <h2 className="display text-h-md mt-2 mb-6">Tell Ms Manae about your hair</h2>
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
