import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Cta } from "@/components/Cta";
import { Faq } from "@/components/Faq";
import { ArrowIcon } from "@/components/Icons";
import { PageHero } from "@/components/PageHero";
import { METHODS } from "@/data/methods";
import { METHOD_PAGES } from "@/data/method-pages";
import { BIZ, CONSULT_HREF } from "@/data/site";

type Params = { method: string };

export function generateStaticParams(): Params[] {
  return METHODS.map((m) => ({ method: m.id }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { method } = await params;
  const page = METHOD_PAGES[method];
  if (!page) return {};
  return {
    title: page.title,
    description: page.description,
    alternates: { canonical: `/extensions/${method}` },
  };
}

export default async function MethodPage({ params }: { params: Promise<Params> }) {
  const { method } = await params;
  const m = METHODS.find((x) => x.id === method);
  const page = METHOD_PAGES[method];
  if (!m || !page) notFound();

  const others = METHODS.filter((x) => x.id !== m.id);

  return (
    <>
      <PageHero label={`Extension method ${m.num}`} title={page.heading} image="/img/hero-brunette.webp" imagePosition="50% 25%" />

      <section className="py-[clamp(3.5rem,8vw,7rem)]">
        <div className="wrap grid md:grid-cols-[5fr_7fr] gap-[clamp(2rem,6vw,6rem)] items-start">
          <div className="reveal grid gap-4 md:sticky md:top-[calc(var(--header-h)+80px)]">
            <Image src={m.img} alt={m.alt} width={1200} height={900} sizes="(max-width: 768px) 100vw, 40vw" className="w-full aspect-[4/3] object-cover" />
            {m.extraImages?.map((src) => (
              <Image key={src} src={src} alt="" width={800} height={600} sizes="(max-width: 768px) 100vw, 40vw" className="w-full aspect-[4/3] object-cover" />
            ))}
            <p className="font-light text-[0.95rem] text-stone m-0">{m.caption}</p>
            <div className="grid gap-4 bg-cream-2 border-l-2 border-terracotta p-6 mt-2">
              <p className="text-ink-3 text-[0.95rem] m-0">
                Every new client starts with a consultation. Call or text Ms Manae at{" "}
                <a href={`tel:${BIZ.cellTel}`} className="text-terracotta whitespace-nowrap">
                  {BIZ.cell}
                </a>{" "}
                or send your details and she will call you.
              </p>
              <Link href={CONSULT_HREF} className="btn self-start">
                Request a consultation <ArrowIcon />
              </Link>
            </div>
          </div>

          <div className="reveal" data-delay="1">
            <div className="prose-lyl">{page.body}</div>

            {page.faqs.length > 0 && (
              <>
                <h2 className="display text-h-md mt-12 mb-5">Frequently asked questions</h2>
                <Faq items={page.faqs} compact />
              </>
            )}

            <div className="mt-12 border-t border-cream-3 pt-8">
              <span className="label">Other methods</span>
              <ul className="grid sm:grid-cols-3 gap-4 mt-4">
                {others.map((o) => (
                  <li key={o.id}>
                    <Link href={`/extensions/${o.id}`} className="group block border border-cream-3 hover:bg-paper transition-colors p-5 h-full">
                      <span className="font-display font-light text-[1rem] text-stone">{o.num}</span>
                      <span className="block font-display text-[1.35rem] text-ink mt-1 group-hover:text-terracotta">{o.name}</span>
                      <span className="block text-[0.88rem] text-stone mt-1">{o.time}</span>
                    </Link>
                  </li>
                ))}
              </ul>
              <Link href="/extensions" className="link mt-6">
                All extension methods <ArrowIcon />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Cta />
    </>
  );
}
