import type { Metadata } from "next";
import Image from "next/image";
import type { ReactNode } from "react";
import { Cta } from "@/components/Cta";
import { Faq } from "@/components/Faq";
import { PageHero } from "@/components/PageHero";
import { SubNav } from "@/components/SubNav";
import { METHOD_FAQ } from "@/data/faqs";
import { METHODS, type Method } from "@/data/methods";

export const metadata: Metadata = {
  title: "Hair Extension Methods | Micro Bead, Fusion, Tape-In & Hand Tied",
  description:
    "Compare micro bead, fusion, tape-in and hand tied hair extensions: install time, how long they last, removal and care. Honest guidance from Scottsdale specialist Ms Manae.",
  alternates: { canonical: "/extensions" },
};

const BODY: Record<string, ReactNode> = {
  "micro-bead": (
    <>
      <p>
        Micro bead extensions, also known as micro link extensions, are a strand-by-strand method using small copper beads clamped onto your natural
        hair. A crochet hook loaded with a bead is slid up to the root, an extension strand is placed inside the bead, and the bead is clamped flat
        to lock it in place. Done properly, the result is natural and undetectable to the eye, and hiding the strands is something I am a master at.
      </p>
      <p>A full head takes 1.5 to 2.5 hours and lasts 3 to 4 months. I ask clients to come back once the beads have grown about an inch from the scalp.</p>
      <div className="callout">
        <strong>Why I don’t do “move-ups.”</strong> Many stylists open the beads and slide them back up as your hair grows. I don’t believe in it.
        Your hair cuticle runs downward, and dragging an open bead up against it can damage your existing hair. It also means your ends go untrimmed
        for months, so you end up with thin, jagged ends when the set finally comes out. I prefer to remove the set, trim your hair, and reapply
        with fresh beads. New beads are needed each time, and I keep them in stock.
      </div>
      <p>
        My preferred beads are Euro Loc, because their hold is more secure than anything else I’ve used over the years. There are many beads on the
        market and we can talk through your preferences at your free consultation.
      </p>
      <p>Removal takes 20 to 30 minutes. If you’re reusing your hair, I may re-tip or re-form the strands so they slide back into the beads easily.</p>
    </>
  ),
  fusion: (
    <>
      <p>
        Fusion is the most popular technique in the industry, and where hair extensions began. Each strand is attached with a small keratin protein
        bond that is melted and shaped around your natural hair. Because our own hair is made of keratin and protein, the bond is non-damaging. The
        result blends completely with your natural hair and is undetectable.
      </p>
      <p>
        A full head takes 2 to 3 hours and lasts 3 to 4 months, depending on how fast your hair grows. Once the bonds have grown about an inch from
        the scalp, it’s time for a new set. In between, there is <strong>no maintenance required</strong>. Treat the extensions like your own hair
        and enjoy them.
      </p>
      <p>
        Remember that extension hair isn’t attached to your scalp, so it needs to be fed with moisturizing products. I’ll recommend what to use
        during your appointment. Once a month I suggest a clarifying treatment followed by coating your hair in raw organic coconut oil overnight.
        It’s fabulous for your own hair and for the health of the extensions.
      </p>
      <div className="callout">
        <strong>A gentler removal.</strong> Most stylists soften keratin bonds with an acetone-based solution, which is very drying. I don’t. I break
        the bonds with pliers and carefully slide them down the hair shaft, which means the least possible stress on your hair. A standard removal
        takes 30 to 45 minutes and is free.
      </div>
      <p>
        Quality hair that has been cared for can be reused. I cut off the old keratin tip, add a new one, and reapply the strand as if it were new.
        I’m one of the few stylists in the area willing to offer this because it’s tedious work, but I like to save my clients as much money as
        possible.
      </p>
    </>
  ),
  "tape-in": (
    <>
      <p>
        Tape-in extensions are exactly what they sound like. Pre-taped wefts of hair are sandwiched on either side of a thin section of your natural
        hair, with no tools, beads, clips or keratin. Applied correctly they cause no damage and the result is seamless.
      </p>
      <p>
        Tape-ins are semi-permanent and last up to two months before maintenance. At your maintenance visit the wefts are removed, washed and
        re-taped. If the hair quality is good you can reuse them again and again, up to four times.
      </p>
      <p>
        Application takes 30 to 60 minutes, and a full head needs 40 to 60 wefts. This method isn’t right for everyone, so we’ll discuss whether it
        suits your hair and routine at your free consultation.
      </p>
      <div className="callout">
        <strong>The one rule with tape-ins.</strong> Be careful with conditioners and products near the tape. Oily products like argan or coconut oil
        can cause the wefts to loosen or slip, which is a common issue with tape-ins and not with the other methods. I’ll show you where and how to
        apply product safely.
      </div>
    </>
  ),
  "hand-tied": (
    <>
      <p>
        Hand tied extensions are long weft tracks of hair attached to a row of micro beads placed side by side with very small gaps between them.
        The beads are clamped flat with pliers and the weft is sewn onto the track. Unlike a traditional braided weave, where a cornrow is made from
        your own hair and the weft is sewn onto it, there are no braids and no tension on your scalp.
      </p>
      <p>
        The method is very kind to your natural hair, though it isn’t suited to every hair type. It does limit the movement of your hair a little,
        and ponytails are more difficult, but it’s a wonderful way to thicken your hair quickly.
      </p>
      <p>A full head takes 1.5 to 2 hours and can be worn 4 to 6 weeks, depending on how quickly the wefts grow away from your scalp.</p>
      <p>Caring for hand tied extensions is just like caring for your own hair. You don’t have to worry about shampoo, conditioner or argan oil affecting the attachment.</p>
    </>
  ),
};

function MethodDetail({ m, reverse }: { m: Method; reverse: boolean }) {
  return (
    <section id={m.id} className="border-t border-cream-3 py-[clamp(4rem,8vw,7rem)] scroll-mt-[calc(var(--header-h)+60px)]">
      <div className="wrap grid md:grid-cols-[5fr_7fr] gap-[clamp(2rem,6vw,6rem)] items-start">
        <div className={`reveal grid gap-4 md:sticky md:top-[calc(var(--header-h)+80px)] ${reverse ? "md:order-2" : ""}`}>
          <Image src={m.img} alt={m.alt} width={1200} height={900} sizes="(max-width: 768px) 100vw, 40vw" className="w-full aspect-[4/3] object-cover" />
          {m.img2 && <Image src={m.img2} alt="" width={480} height={360} sizes="(max-width: 768px) 100vw, 40vw" className="w-full aspect-[4/3] object-cover" />}
          <p className="font-light text-[0.95rem] text-stone m-0">{m.caption}</p>
        </div>
        <div className={`reveal ${reverse ? "md:order-1" : ""}`} data-delay="1">
          <span className="label">
            {m.num} · {m.aka}
          </span>
          <h2 className="display text-h-lg mt-3 mb-5 [&_em]:text-terracotta">
            {m.name} <em>method</em>
          </h2>
          <dl className="grid grid-cols-2 sm:grid-cols-3 gap-4 my-7">
            {[
              ["Install time", m.time],
              ["Lasts", m.lasts],
              ["Removal", m.removal],
            ].map(([k, v]) => (
              <div key={k} className="border-t border-ink pt-3">
                <dt className="font-label text-[0.65rem] tracking-[0.2em] uppercase text-stone">{k}</dt>
                <dd className="font-display text-[1.35rem] leading-[1.2] text-ink mt-1 m-0">{v}</dd>
              </div>
            ))}
          </dl>
          <div className="prose-lyl">{BODY[m.id]}</div>
          <h3 className="font-label font-normal text-[0.72rem] tracking-[0.22em] uppercase text-terracotta mt-9 mb-4">Questions about {m.name.toLowerCase()} extensions</h3>
          <Faq items={METHOD_FAQ[m.id]} compact />
        </div>
      </div>
    </section>
  );
}

export default function ExtensionsPage() {
  return (
    <>
      <PageHero
        label="Extension education"
        title={<>Four methods, <em>explained honestly.</em></>}
        lead="Every method has a place. The right one for you depends on your hair’s density, your lifestyle and how you like to style. Here is how each one works, how long it takes, how long it lasts, and what I really think about it."
        image="/img/hero-brunette.jpg"
        imagePosition="50% 25%"
        center
      />
      <SubNav items={[...METHODS.map((m) => ({ href: `#${m.id}`, label: `${m.num} · ${m.name}` })), { href: "#compare", label: "Compare" }]} />

      <section id="compare" className="py-[clamp(3rem,6vw,5rem)] scroll-mt-[calc(var(--header-h)+60px)]">
        <div className="wrap">
          <div className="reveal mb-[clamp(2.5rem,5vw,4rem)]">
            <span className="label">At a glance</span>
            <h2 className="display text-h-lg mt-3">Side by side.</h2>
          </div>
          <div className="reveal overflow-x-auto" data-delay="1">
            <table className="w-full min-w-[720px] border-collapse text-[0.95rem]">
              <thead>
                <tr className="[&>th]:font-label [&>th]:font-normal [&>th]:text-[0.68rem] [&>th]:tracking-[0.2em] [&>th]:uppercase [&>th]:text-stone [&>th]:text-left [&>th]:px-4 [&>th]:py-4 [&>th]:border-b [&>th]:border-ink">
                  <th scope="col">Method</th>
                  <th scope="col">Install</th>
                  <th scope="col">Lasts</th>
                  <th scope="col">Removal</th>
                  <th scope="col">Best for</th>
                </tr>
              </thead>
              <tbody>
                {METHODS.map((m) => (
                  <tr key={m.id} className="hover:bg-paper [&>*]:px-4 [&>*]:py-4 [&>*]:border-b [&>*]:border-cream-3 [&>*]:align-top [&>*]:text-left">
                    <th scope="row" className="font-display font-medium text-[1.25rem] text-ink">
                      <a href={`#${m.id}`} className="hover:text-terracotta">
                        {m.name}
                      </a>
                    </th>
                    <td>{m.time}</td>
                    <td>{m.lasts}</td>
                    <td>{m.removal}</td>
                    <td>{m.best}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-stone text-[0.9rem] mt-5">Times are typical for a full head and vary with how much hair you need and how thick your natural hair is. Standard removals are free.</p>
        </div>
      </section>

      {METHODS.map((m, i) => (
        <MethodDetail key={m.id} m={m} reverse={i % 2 === 1} />
      ))}

      <Cta
        title={<>Not sure which <em>method</em> is yours?</>}
        body="That’s what the consultation is for. I’ll look at your hair and your routine and tell you honestly what will work, and what won’t."
      />
    </>
  );
}
