import type { Metadata } from "next";
import Image from "next/image";
import { Cta } from "@/components/Cta";
import { CheckIcon } from "@/components/Icons";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = {
  title: "About Ms Manae",
  description:
    "Meet Ms Manae, Scottsdale hair extension specialist with 15+ years of experience. Graduate of Earl’s Academy, certified by The Hair Shop and Hot Heads, Best of Scottsdale 2019.",
  alternates: { canonical: "/about" },
};

const CREDS = [
  <><strong>15+ years</strong> specializing exclusively in hair extensions</>,
  <>Graduate of <strong>Earl’s Academy</strong> (now Avalon)</>,
  <>Certified by <strong>The Hair Shop</strong> and <strong>Hot Heads</strong></>,
  <><strong>Best of Scottsdale 2019</strong>, Hair Extension Technician</>,
  <>Four methods: micro bead, fusion, tape-in and hand tied</>,
  <>Gentle, acetone-free removals that protect your natural hair</>,
  <>Re-tipping service so quality hair can be reused set after set</>,
  <>Every client leaves knowing exactly how to care for her hair</>,
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        label="About"
        title={<>Ms <em>Manae</em></>}
        lead="Hair extension specialist. Scottsdale, Arizona. Fifteen-plus years behind the chair, and just as many wearing extensions herself."
        image="/img/editorial-turtleneck.jpg"
      />

      <section className="py-[clamp(4rem,9vw,8rem)]">
        <div className="wrap grid md:grid-cols-2 gap-[clamp(2rem,6vw,6rem)] items-center">
          <div className="reveal frame-offset relative">
            <Image src="/img/manae-at-work.jpg" alt="Ms Manae applying hair extensions in her Scottsdale salon" width={1242} height={1369} sizes="(max-width: 768px) 100vw, 50vw" className="w-full aspect-[4/5] object-cover" priority />
            <div className="absolute right-0 md:-right-4 bottom-8 w-[120px] md:w-[150px] bg-cream p-2 shadow-[0_20px_50px_rgba(27,25,23,0.2)] rotate-3">
              <Image src="/img/award-best-of-2019.jpg" alt="Best of Scottsdale 2019 award, Hair Extension Technician" width={1200} height={1600} sizes="150px" className="aspect-[3/4] object-cover" />
            </div>
          </div>
          <div className="reveal prose-lyl" data-delay="1">
            <span className="label">My story</span>
            <h2 className="display text-h-lg mt-3 mb-5 [&_em]:text-terracotta">
              Hello, and thank you for <em>visiting.</em>
            </h2>
            <p>
              I truly hope to meet you in the future and make you a more <strong>fabulous</strong> you.
            </p>
            <p>
              I have been doing hair extensions for over 15 years, and you will not find anyone who takes more pride in her work. I am a graduate of
              Earl’s Academy (now Avalon) and have been certified in hair extensions by The Hair Shop and the Hot Heads hair extension company. Over
              the years I’ve worked with many color lines, extension methods, styling tools and hair care products, and I’m always studying what’s
              new.
            </p>
            <p>
              I’ve also worn extensions myself for many years. That makes me more educated in this field than most, because I know exactly how a set
              feels to sleep on, wash, style and live in. I have developed tricks that make my applications far more secure than others in the
              industry. Combined with a deep knowledge of placement, that lets me create results that are genuinely undetectable.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-cream-2 py-[clamp(4rem,9vw,8rem)]">
        <div className="wrap grid md:grid-cols-2 gap-[clamp(2rem,6vw,6rem)] items-start">
          <div className="reveal prose-lyl md:order-2">
            <span className="label">How I work</span>
            <h2 className="display text-h-lg mt-3 mb-5">
              Honest advice, <em>every time.</em>
            </h2>
            <p>My clients appreciate my honesty and the professional knowledge I willingly share with them, and I go above and beyond to give them their desired look.</p>
            <p>
              I am very honest when it comes to this profession and would never do anything that may cause damage to a client’s hair. If a method
              isn’t right for your hair or your lifestyle, I will tell you, and I’ll explain why. My clients trust me to do what’s best for their
              hair and for the overall look they want.
            </p>
            <blockquote>I feel it’s an honor each and every time a client sits in my chair and gives me their trust to do my magic.</blockquote>
            <p>I love making people feel better about themselves. I look forward to meeting you, and to the pleasure of making you a more fabulous version of yourself.</p>
            <p className="font-display font-light text-[1.5rem] !text-terracotta mt-6">— Ms Manae</p>
          </div>
          <div className="reveal md:order-1" data-delay="1">
            <ul className="grid gap-3">
              {CREDS.map((c, i) => (
                <li key={i} className="grid grid-cols-[22px_1fr] gap-3 items-start text-[0.98rem] text-ink-3">
                  <CheckIcon className="w-[18px] h-[18px] text-terracotta mt-1" />
                  <span>{c}</span>
                </li>
              ))}
            </ul>
            <div className="callout">
              <strong>A note on quality.</strong> The hair I supply is premium and reusable. Cheap hair looks great in the package and mattes once its
              silicone coating washes off. I don’t use it, and I’ll explain how to spot it.
            </div>
          </div>
        </div>
      </section>

      <Cta
        title={<>Let’s talk about <em>your</em> hair.</>}
        body="Consultations are always free. I’ll look at your hair, listen to what you want, and recommend the method that will get you there safely."
      />
    </>
  );
}
