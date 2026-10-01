import type { Metadata } from "next";
import Link from "next/link";
import { Cta } from "@/components/Cta";
import { Faq } from "@/components/Faq";
import { PageHero } from "@/components/PageHero";
import { GENERAL_FAQ } from "@/data/faqs";

export const metadata: Metadata = {
  title: "Hair Extension FAQ",
  description:
    "Answers to common hair extension questions: who wears them, volume vs length, which method suits your hair, damage, washing, heat styling, coloring and more. By Ms Manae, Scottsdale.",
  alternates: { canonical: "/faq" },
};

export default function FaqPage() {
  return (
    <>
      <PageHero
        label="FAQ"
        title={<>Everything you wanted <em>to ask.</em></>}
        lead={
          <>
            Straight answers from 15+ years of doing nothing but extensions. For method-specific questions, see the{" "}
            <Link href="/extensions" className="text-gold underline underline-offset-4">
              extensions page
            </Link>
            .
          </>
        }
        image="/img/editorial-hair-closeup.jpg"
        center
      />
      <section className="py-[clamp(4rem,9vw,8rem)]">
        <div className="wrap !max-w-[860px]">
          <Faq items={GENERAL_FAQ} className="reveal" />
        </div>
      </section>
      <Cta
        title={<>Still have a <em>question?</em></>}
        body="Ask me directly. Call or text any day of the week, or send it through the contact form and I’ll reply personally."
      />
    </>
  );
}
