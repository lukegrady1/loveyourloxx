import Link from "next/link";
import type { ReactNode } from "react";
import { BIZ } from "@/data/site";
import { ArrowIcon } from "./Icons";

type Props = { title?: ReactNode; body?: ReactNode };

export function Cta({
  title = (
    <>
      Ready for <em>longer, fuller</em> hair?
    </>
  ),
  body = "Every new client starts with a free consultation. Call or text Ms Manae, or send a few details through the contact form and she will get back to you with a quote.",
}: Props) {
  return (
    <section className="cta-glow relative overflow-hidden bg-terracotta text-cream">
      <div className="wrap relative grid md:grid-cols-[1fr_auto] gap-8 items-center py-[clamp(3rem,6vw,5rem)]">
        <div className="reveal">
          <span className="label !text-blush">Free consultation</span>
          <h2 className="display text-h-lg !text-cream mt-3 [&_em]:text-blush">{title}</h2>
          <p className="text-[#fbe9e0] mt-3 max-w-[56ch]">{body}</p>
        </div>
        <div className="reveal flex flex-col gap-3 md:items-end" data-delay="1">
          <a href={`tel:${BIZ.cellTel}`} className="font-label font-medium text-2xl tracking-[0.01em] text-cream hover:text-blush">
            {BIZ.cell}
          </a>
          <Link href="/contact" className="btn btn-paper">
            Request a quote <ArrowIcon />
          </Link>
        </div>
      </div>
    </section>
  );
}
