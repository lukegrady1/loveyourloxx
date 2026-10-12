import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Cta } from "@/components/Cta";
import { ArrowIcon } from "@/components/Icons";
import { PageHero } from "@/components/PageHero";
import { METHODS } from "@/data/methods";

export const metadata: Metadata = {
  title: "Hair Extension Methods | Micro Bead, Fusion, Tape-In & Hand Tied",
  description:
    "The four hair extension methods offered by Ms Manae in Scottsdale: micro bead, fusion, tape-in and hand tied. Pick a method to read how it works, how long it takes and how to care for it.",
  alternates: { canonical: "/extensions" },
};

export default function ExtensionsPage() {
  return (
    <>
      <PageHero
        label="Extensions offered"
        title={<>Four methods. <em>Pick yours.</em></>}
        lead="Every method has a place. The right one for you depends on your hair’s density, your lifestyle and how you like to style. Choose a method to read how it works, how long it takes and how to care for it."
        image="/img/hero-brunette.webp"
        imagePosition="50% 25%"
        center
      />

      <section className="py-[clamp(3rem,7vw,6rem)]">
        <div className="wrap">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-cream-3 border border-cream-3">
            {METHODS.map((m, i) => (
              <article key={m.id} className="reveal group relative flex flex-col gap-4 bg-cream hover:bg-paper transition-colors duration-300 px-6 pt-7 pb-8" data-delay={String(i % 4)}>
                <span className="font-display font-light text-[1.1rem] text-stone">{m.num}</span>
                <div className="relative aspect-[4/3] overflow-hidden bg-cream-2">
                  <Image
                    src={m.img}
                    alt={m.alt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover saturate-[0.9] transition-transform duration-700 ease-out-soft group-hover:scale-[1.04]"
                  />
                </div>
                <h2 className="font-display text-[1.6rem]">
                  <Link href={`/extensions/${m.id}`} className="after:absolute after:inset-0 group-hover:text-terracotta transition-colors">
                    {m.name}
                  </Link>
                </h2>
                <dl className="grid grid-cols-[auto_1fr] gap-x-3 gap-y-1 text-[0.92rem]">
                  <dt className="font-label text-[0.65rem] tracking-[0.18em] uppercase text-stone pt-1">Install</dt>
                  <dd className="text-ink-3">{m.time}</dd>
                  <dt className="font-label text-[0.65rem] tracking-[0.18em] uppercase text-stone pt-1">Lasts</dt>
                  <dd className="text-ink-3">{m.lasts}</dd>
                </dl>
                <p className="text-[0.95rem] text-ink-3 flex-1">{m.short}</p>
                <span className="link self-start" aria-hidden="true">
                  Read about {m.name.toLowerCase()} <ArrowIcon />
                </span>
              </article>
            ))}
          </div>
          <p className="text-stone text-[0.9rem] mt-5">Times are typical for a full head and vary with how much hair you need and how thick your natural hair is. Standard removals are free.</p>
        </div>
      </section>

      <Cta
        title={<>Not sure which <em>method</em> is yours?</>}
        body="That’s what the consultation is for. I’ll look at your hair and your routine and tell you honestly what will work, and what won’t."
      />
    </>
  );
}
