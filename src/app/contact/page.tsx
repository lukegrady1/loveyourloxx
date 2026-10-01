import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";
import { ArrowIcon } from "@/components/Icons";
import { PageHero } from "@/components/PageHero";
import { Socials } from "@/components/Socials";
import { BIZ } from "@/data/site";

export const metadata: Metadata = {
  title: "Contact Ms Manae | Book a Free Consultation",
  description:
    "Book a free hair extension consultation in Scottsdale. Call or text Ms Manae at 480-234-7068, or request a quote online. 2334 N Scottsdale Rd #117, open 7 days by appointment.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        label="Contact"
        title={<>Let’s make you a more <em>fabulous you.</em></>}
        lead="Call, text or send a few details below. Consultations are always free, and the more you tell me about your hair, the more accurate your quote will be."
        image="/img/hero-blonde.jpg"
        imagePosition="70% 30%"
      />
      <section className="py-[clamp(4rem,9vw,8rem)]">
        <div className="wrap grid lg:grid-cols-[5fr_7fr] gap-[clamp(2.5rem,6vw,6rem)] items-start">
          <aside className="reveal grid gap-8 lg:sticky lg:top-[calc(var(--header-h)+2rem)]">
            <div className="grid gap-1 bg-cream-2 border-l-2 border-terracotta p-6">
              <span className="label mb-1">Fastest: call or text Ms Manae</span>
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
            <Socials />
          </aside>
          <div className="reveal" data-delay="1">
            <span className="label">Request a quote</span>
            <h2 className="display text-h-md mt-2 mb-6">Submit your info to Ms Manae</h2>
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
