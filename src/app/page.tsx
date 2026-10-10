import Image from "next/image";
import Link from "next/link";
import { Cta } from "@/components/Cta";
import { Faq } from "@/components/Faq";
import { Gallery } from "@/components/Gallery";
import { ArrowIcon, CheckIcon } from "@/components/Icons";
import { Socials } from "@/components/Socials";
import { GENERAL_FAQ } from "@/data/faqs";
import { METHODS } from "@/data/methods";
import { REVIEWS } from "@/data/reviews";
import { BIZ, QUOTE_HREF } from "@/data/site";
import { getGalleryImages } from "@/lib/gallery";

const HOME_PICKS = ["ba-04", "ba-07", "ba-24", "ba-29", "ba-32", "ba-13", "ba-52", "ba-16", "ba-33", "ba-39"];

export default function HomePage() {
  const all = getGalleryImages();
  const picks = HOME_PICKS.map((id) => all.find((g) => g.full.includes(`/${id}.jpg`))).filter((g): g is NonNullable<typeof g> => Boolean(g));

  return (
    <>
      {/* Hero */}
      <section className="hero-shade relative grid items-end overflow-hidden bg-ink text-cream min-h-[max(600px,calc(100svh-var(--header-h)-36px))]">
        <div className="absolute inset-0">
          <Image
            src="/img/hero-blonde.jpg"
            alt="Long, voluminous blonde hair extensions"
            fill
            priority
            sizes="100vw"
            className="object-cover object-[68%_20%] md:object-[72%_30%] animate-hero-zoom"
          />
        </div>
        <div className="wrap relative z-10">
          <div className="hero-stagger max-w-[720px] pt-[clamp(3rem,8vw,6rem)] pb-[clamp(3rem,7vw,5.5rem)]">
            <span className="label !text-gold">Scottsdale’s finest hair extensions · Est. 15+ years</span>
            <h1 className="display text-h-xl !text-cream my-5">
              Love Your <em className="text-gold">Loxx</em>
              <span className="block mt-3 font-display font-light tracking-normal text-[clamp(1.3rem,2.4vw,2rem)] leading-tight text-cream-2">
                Hair Extensions by Ms Manae
              </span>
            </h1>
            <p className="text-lead text-cream-2 max-w-[520px]">
              Micro bead, fusion, tape-in and hand tied extensions, applied by hand by Ms Manae. Undetectable blends, premium reusable hair, and
              honest advice about what your hair can carry.
            </p>
            <div className="flex flex-wrap items-center gap-x-8 gap-y-5 mt-8">
              <div className="flex flex-col gap-1">
                <small className="font-label text-[0.7rem] tracking-[0.22em] uppercase text-gold">Call or text for a free consultation</small>
                <a href={`tel:${BIZ.cellTel}`} className="font-label font-medium text-[clamp(1.5rem,2.8vw,2rem)] tracking-[0.01em] leading-none text-cream hover:text-gold">
                  {BIZ.cellDisplay}
                </a>
              </div>
              <Link href={QUOTE_HREF} className="btn btn-light">
                Request a free quote <ArrowIcon />
              </Link>
            </div>
          </div>
        </div>
        <span
          aria-hidden="true"
          className="scroll-cue hidden md:flex absolute right-[var(--gutter)] bottom-8 items-center gap-3 font-label text-[0.68rem] tracking-[0.25em] uppercase text-cream-2 [writing-mode:vertical-rl]"
        >
          Scroll
        </span>
      </section>

      {/* Trust bar */}
      <section className="bg-ink-2 text-cream-2 border-t border-white/5">
        <div className="wrap grid grid-cols-2 md:grid-cols-4 !w-full md:!w-[min(1240px,100%-var(--gutter)*2)]">
          {[
            ["15+", "Years of extensions"],
            ["4", "Methods, one specialist"],
            ["Best of 2019", "Scottsdale hair extension technician"],
            ["★★★★★", "Rated by clients on Google"],
          ].map(([big, small], i) => (
            <div
              key={small}
              className={`flex flex-col gap-1 px-[var(--gutter)] md:px-6 py-5 border-white/[0.08] ${
                i % 2 === 1 ? "border-l" : ""
              } ${i >= 2 ? "border-t md:border-t-0" : ""} ${i > 0 ? "md:border-l" : "md:pl-0"}`}
            >
              <strong className="font-display font-medium text-[1.7rem] leading-none text-cream">{big}</strong>
              <span className="font-label text-[0.68rem] tracking-[0.2em] uppercase text-stone-2">{small}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Intro */}
      <section className="py-[clamp(4rem,9vw,8rem)]">
        <div className="wrap grid md:grid-cols-[5fr_6fr] gap-[clamp(2rem,6vw,6rem)] items-start">
          <div className="reveal md:sticky md:top-[calc(var(--header-h)+2rem)]">
            <span className="label">Sound familiar?</span>
            <h2 className="display text-h-lg mt-4 [&_em]:text-terracotta">
              “Why won’t my hair grow past a <em>certain point?</em>”
            </h2>
          </div>
          <div className="reveal first-letter-drop prose-lyl" data-delay="1">
            <p>
              I understand the frustration of hair that just won’t grow past a certain length, no matter how patient, gentle and caring you are
              with it. If that sounds like you, or you simply want long hair, extensions are the perfect solution. The long hair you’ve been
              dreaming of can be yours in a matter of hours. I promise.
            </p>
            <p>
              Extensions don’t only add length. They add volume to fine, limp or thinning hair, let you try highlights or pops of color without
              chemicals, and can turn a bob into a mane. Below is a description of each method I offer. Please educate yourself before deciding,
              and do your hair the justice of having a highly experienced extensionist do the work. It is truly an art, and one I have mastered
              over the years.
            </p>
            <Link href="/extensions" className="link mt-2">
              Compare the four methods <ArrowIcon />
            </Link>
          </div>
        </div>
      </section>

      {/* Methods */}
      <section className="bg-cream-2 py-[clamp(3rem,6vw,5rem)]" id="methods">
        <div className="wrap">
          <div className="reveal grid md:grid-cols-[1fr_auto] items-end gap-8 mb-[clamp(2.5rem,5vw,4rem)]">
            <div>
              <span className="label">Extension education</span>
              <h2 className="display text-h-lg mt-3">
                Four methods. One <em>honest</em> recommendation.
              </h2>
            </div>
            <Link href="/extensions" className="link">
              Full comparison <ArrowIcon />
            </Link>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-cream-3 border border-cream-3">
            {METHODS.map((m, i) => (
              <article key={m.id} className="reveal group relative flex flex-col gap-4 bg-cream hover:bg-paper transition-colors duration-300 px-6 pt-7 pb-8" data-delay={String(i % 4)}>
                <span className="font-display font-light text-[1.1rem] text-stone-2">{m.num}</span>
                <div className="relative aspect-[4/3] overflow-hidden bg-cream-2">
                  <Image
                    src={m.img}
                    alt={m.alt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover saturate-[0.9] transition-transform duration-700 ease-out-soft group-hover:scale-[1.04]"
                  />
                </div>
                <h3 className="font-display text-[1.6rem]">{m.name}</h3>
                <dl className="grid grid-cols-[auto_1fr] gap-x-3 gap-y-1 text-[0.92rem]">
                  <dt className="font-label text-[0.65rem] tracking-[0.18em] uppercase text-stone pt-1">Install</dt>
                  <dd className="text-ink-3">{m.time}</dd>
                  <dt className="font-label text-[0.65rem] tracking-[0.18em] uppercase text-stone pt-1">Lasts</dt>
                  <dd className="text-ink-3">{m.lasts}</dd>
                </dl>
                <p className="text-[0.95rem] text-ink-3 flex-1">{m.short}</p>
                <Link href={`/extensions#${m.id}`} className="link self-start">
                  Learn more <ArrowIcon />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Editorial band */}
      <section className="relative isolate grid place-items-center min-h-[70vh] overflow-hidden bg-ink text-cream text-center">
        <Image src="/img/editorial-hair-closeup.jpg" alt="" fill sizes="100vw" className="object-cover -z-10" />
        <div className="absolute inset-0 bg-ink/55 -z-10" />
        <div className="reveal max-w-[900px] px-[var(--gutter)] py-[clamp(4rem,10vw,8rem)]">
          <blockquote className="font-display font-light tracking-tight text-[clamp(1.7rem,3.6vw,3rem)] leading-[1.25]">
            “The best hair extensions are the ones no one knows you’re wearing. My goal is to get you compliments on your hair, never on your
            extensions.”
            <cite className="label !text-gold block not-italic mt-6">Ms Manae</cite>
          </blockquote>
        </div>
      </section>

      {/* Before & after */}
      <section className="py-[clamp(4rem,9vw,8rem)]">
        <div className="wrap">
          <div className="reveal grid md:grid-cols-[1fr_auto] items-end gap-8 mb-[clamp(2.5rem,5vw,4rem)]">
            <div>
              <span className="label">Before &amp; after</span>
              <h2 className="display text-h-lg mt-3">
                Real clients, <em>real hair.</em>
              </h2>
            </div>
            <Link href="/gallery" className="link">
              View the full gallery <ArrowIcon />
            </Link>
          </div>
          <Gallery images={picks} featured />
          <div className="flex flex-wrap items-center justify-between gap-4 mt-8">
            <p className="text-stone m-0">Tap any photo to enlarge. Every set shown was applied by Ms Manae in the Scottsdale salon.</p>
            <Link href="/gallery" className="btn btn-ghost">
              See all {all.length} transformations
            </Link>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="bg-ink text-cream-2 py-[clamp(4rem,9vw,8rem)]">
        <div className="wrap">
          <div className="reveal text-center max-w-[720px] mx-auto mb-[clamp(2.5rem,5vw,4rem)]">
            <span className="label !text-gold">What people are saying</span>
            <h2 className="display text-h-lg !text-cream mt-3">Compliments every day.</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {REVIEWS.map((r, i) => (
              <article key={r.name} className="reveal relative flex flex-col gap-5 bg-ink-2 border border-white/[0.08] px-8 pt-9 pb-8" data-delay={String(i)}>
                <span aria-hidden="true" className="absolute top-5 left-6 font-display text-[5rem] leading-[0.6] text-gold">
                  “
                </span>
                <p className="font-light text-[1.08rem] leading-[1.55] text-cream-2 mt-6 flex-1">{r.quote}</p>
                <footer className="flex items-center justify-between gap-4">
                  <cite className="not-italic font-label text-[0.75rem] tracking-[0.18em] uppercase text-stone-2">{r.name}</cite>
                  <span className="text-gold tracking-[0.1em] text-[0.85rem]" aria-label="5 out of 5 stars">
                    ★★★★★
                  </span>
                </footer>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Meet Ms Manae */}
      <section className="py-[clamp(4rem,9vw,8rem)]">
        <div className="wrap grid md:grid-cols-2 gap-[clamp(2rem,6vw,6rem)] items-center">
          <div className="reveal frame-offset relative">
            <Image src="/img/manae-at-work.jpg" alt="Ms Manae applying hair extensions in her Scottsdale salon" width={1242} height={1369} sizes="(max-width: 768px) 100vw, 50vw" className="w-full aspect-[4/5] object-cover" />
            <div className="absolute right-0 md:-right-4 bottom-8 w-[120px] md:w-[150px] bg-cream p-2 shadow-[0_20px_50px_rgba(27,25,23,0.2)] rotate-3">
              <Image src="/img/award-best-of-2019.jpg" alt="Best of Scottsdale 2019 award, Hair Extension Technician" width={1200} height={1600} sizes="150px" className="aspect-[3/4] object-cover" />
            </div>
          </div>
          <div className="reveal" data-delay="1">
            <span className="label">Meet your extensionist</span>
            <h2 className="display text-h-lg mt-3 mb-5 [&_em]:text-terracotta">
              Hi, I’m <em>Ms Manae.</em>
            </h2>
            <p className="text-lead text-ink-3 mb-4">It’s my honor to be given the opportunity to make each and every one of my clients a more fabulous version of themselves.</p>
            <p className="text-ink-3 mb-6">
              I have specialized in hair extensions for over 15 years, and I’ve worn them myself for just as long. That first-hand experience is why
              my applications are more secure, more comfortable and better hidden than most you’ll find.
            </p>
            <ul className="grid gap-3 mb-8">
              {["Graduate of Earl’s Academy (now Avalon)", "Certified by The Hair Shop and Hot Heads", "Best of Scottsdale 2019, Hair Extension Technician"].map((c) => (
                <li key={c} className="grid grid-cols-[22px_1fr] gap-3 items-start text-[0.98rem] text-ink-3">
                  <CheckIcon className="w-[18px] h-[18px] text-terracotta mt-1" />
                  <span>{c}</span>
                </li>
              ))}
            </ul>
            <Link href="/about" className="btn btn-ghost">
              More about me <ArrowIcon />
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ teaser */}
      <section className="bg-cream-2 py-[clamp(4rem,9vw,8rem)]">
        <div className="wrap grid md:grid-cols-2 gap-[clamp(2rem,6vw,6rem)] items-start">
          <div className="reveal">
            <span className="label">Questions</span>
            <h2 className="display text-h-lg mt-3 mb-5">
              Good to know before <em>you book.</em>
            </h2>
            <p className="text-stone mb-4">Straight answers to the questions I hear most. Can’t find yours? Ask during your free consultation.</p>
            <Link href="/faq" className="link">
              All questions <ArrowIcon />
            </Link>
          </div>
          <Faq items={GENERAL_FAQ.slice(0, 4)} className="reveal" />
        </div>
      </section>

      <Cta />

      {/* Contact band */}
      <section className="py-[clamp(4rem,9vw,8rem)]">
        <div className="wrap grid md:grid-cols-2 gap-[clamp(2rem,5vw,5rem)]">
          <div className="reveal grid gap-8 content-start">
            <div>
              <span className="label">Visit the salon</span>
              <h2 className="display text-h-lg mt-3">
                Scottsdale, <em>Arizona.</em>
              </h2>
            </div>
            <div className="grid grid-cols-2 gap-x-8 gap-y-6">
              <InfoBlock title="Address">
                <a href={BIZ.mapsLink} target="_blank" rel="noopener noreferrer" className="hover:text-terracotta">
                  {BIZ.street}
                  <br />
                  {BIZ.city}
                </a>
              </InfoBlock>
              <InfoBlock title="Hours">
                {BIZ.hours}
                <br />
                {BIZ.hoursNote}
              </InfoBlock>
              <InfoBlock title="Cell (call or text)">
                <a href={`tel:${BIZ.cellTel}`} className="font-label text-[1.2rem] tracking-[0.05em] text-ink hover:text-terracotta">
                  {BIZ.cell}
                </a>
              </InfoBlock>
              <InfoBlock title="Salon">
                <a href={`tel:${BIZ.salonTel}`} className="font-label text-[1.2rem] tracking-[0.05em] text-ink hover:text-terracotta">
                  {BIZ.salon}
                </a>
              </InfoBlock>
            </div>
            <Socials />
          </div>
          <div className="reveal map-frame relative min-h-[320px] md:min-h-[420px] bg-cream-2" data-delay="1">
            <iframe
              title="Map to Love Your Loxx, 2334 N Scottsdale Rd #117"
              src={BIZ.mapsEmbed}
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
              className="absolute inset-0 w-full h-full border-0"
            />
          </div>
        </div>
      </section>
    </>
  );
}

function InfoBlock({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h4 className="font-label font-normal text-[0.7rem] tracking-[0.22em] uppercase text-terracotta mb-2">{title}</h4>
      <p className="text-ink-3 m-0">{children}</p>
    </div>
  );
}
