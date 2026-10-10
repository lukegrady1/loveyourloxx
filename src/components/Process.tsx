import Link from "next/link";
import { BIZ, CONSULT_HREF, PROCESS } from "@/data/site";
import { ArrowIcon } from "./Icons";

/**
 * The three-step path from first contact to appointment. New clients always
 * talk to Ms Manae before booking because pricing depends on their hair.
 */
export function Process({ tone = "paper" }: { tone?: "paper" | "cream" }) {
  return (
    <section className={`${tone === "cream" ? "bg-cream-2" : ""} py-[clamp(4rem,9vw,8rem)]`}>
      <div className="wrap">
        <div className="reveal grid md:grid-cols-[1fr_auto] gap-x-12 gap-y-6 items-end mb-[clamp(2.5rem,5vw,4rem)]">
          <div>
            <span className="label">How it works</span>
            <h2 className="display text-h-lg mt-3">
              Three steps to <em>your new hair.</em>
            </h2>
            <p className="text-stone mt-4 max-w-[58ch] m-0">
              Every head of hair is different, so every price is too. That’s why every new client talks to Ms Manae before booking. Extensions
              start at {BIZ.startingPrice} and your exact price depends on the method, how much hair you need and what you want done.
            </p>
          </div>
          <div className="flex flex-wrap gap-x-6 gap-y-3 items-center">
            <Link href={CONSULT_HREF} className="btn">
              Request a consultation <ArrowIcon />
            </Link>
            <a href={`tel:${BIZ.cellTel}`} className="link">
              Or call or text {BIZ.cell}
            </a>
          </div>
        </div>
        <ol className="grid md:grid-cols-3 gap-6 m-0 p-0 list-none">
          {PROCESS.map((step, i) => (
            <li key={step.title} className="reveal flex flex-col gap-4 bg-cream border border-cream-3 px-7 py-8" data-delay={String(i)}>
              <span className="font-display font-light text-[2.6rem] leading-none text-terracotta">{i + 1}</span>
              <h3 className="font-display text-[1.5rem]">{step.title}</h3>
              <p className="text-ink-3 text-[0.97rem] m-0">{step.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
