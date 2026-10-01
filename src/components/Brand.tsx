import Link from "next/link";
import { BIZ } from "@/data/site";

export function Brand({ className = "" }: { className?: string }) {
  return (
    <Link href="/" className={`inline-flex items-center text-cream hover:text-cream ${className}`} aria-label={`${BIZ.name} home`}>
      <span className="flex flex-col leading-none whitespace-nowrap">
        <span className="font-display text-[1.35rem] font-semibold tracking-[-0.02em]">
          Love Your <em className="not-italic font-light text-gold">Loxx</em>
        </span>
        <span className="font-label font-medium text-[0.58rem] tracking-[0.2em] uppercase text-stone-2 mt-1.5">{BIZ.tagline}</span>
      </span>
    </Link>
  );
}
