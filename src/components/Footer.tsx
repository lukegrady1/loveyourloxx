import Link from "next/link";
import { BIZ, NAV, QUOTE_HREF } from "@/data/site";
import { Brand } from "./Brand";
import { Socials } from "./Socials";
import { ArrowIcon } from "./Icons";

export function Footer() {
  return (
    <footer className="bg-ink text-stone-2 pt-[clamp(3rem,6vw,5rem)] pb-24 xl:pb-8">
      <div className="wrap grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr] gap-10">
        <div>
          <Brand className="mb-4" />
          <p className="font-display font-light text-[1.2rem] text-cream-2 max-w-[30ch] mb-5">Sexier, longer, fuller hair is a call away.</p>
          <Socials className="text-cream-2" />
        </div>
        <div>
          <h4 className="font-label font-normal text-[0.68rem] tracking-[0.24em] uppercase text-gold mb-4">Explore</h4>
          <ul className="grid gap-2">
            {NAV.map(({ href, label }) => (
              <li key={href}>
                <Link href={href} className="text-cream-2 hover:text-gold">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="font-label font-normal text-[0.68rem] tracking-[0.24em] uppercase text-gold mb-4">Visit</h4>
          <p className="text-[0.95rem] mb-2">
            <a href={BIZ.mapsLink} target="_blank" rel="noopener noreferrer" className="text-cream-2 hover:text-gold">
              {BIZ.street}
              <br />
              {BIZ.city}
            </a>
          </p>
          <p className="text-[0.95rem]">
            {BIZ.hours}
            <br />
            {BIZ.hoursNote}
          </p>
        </div>
        <div>
          <h4 className="font-label font-normal text-[0.68rem] tracking-[0.24em] uppercase text-gold mb-4">Call or text</h4>
          <p className="text-[0.95rem] mb-2">
            Cell{" "}
            <a href={`tel:${BIZ.cellTel}`} className="text-cream-2 hover:text-gold">
              {BIZ.cell}
            </a>
          </p>
          <p className="text-[0.95rem] mb-4">
            Salon{" "}
            <a href={`tel:${BIZ.salonTel}`} className="text-cream-2 hover:text-gold">
              {BIZ.salon}
            </a>
          </p>
          <div className="flex flex-col gap-2 items-start">
            <Link href={QUOTE_HREF} className="link !text-cream-2 hover:!text-gold">
              Request a free quote <ArrowIcon />
            </Link>
            <Link href="/book" className="link !text-cream-2 hover:!text-gold">
              Existing clients: book online <ArrowIcon />
            </Link>
          </div>
        </div>
        <div className="sm:col-span-2 lg:col-span-4 border-t border-white/[0.08] mt-8 pt-6 flex flex-wrap justify-between gap-4 font-label text-[0.8rem] tracking-[0.12em] uppercase">
          <span>
            © {new Date().getFullYear()} {BIZ.legalName} · Scottsdale, Arizona
          </span>
          <span>Best of Scottsdale 2019 · Hair Extension Technician</span>
        </div>
      </div>
    </footer>
  );
}
