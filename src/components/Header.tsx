"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { BIZ, NAV, QUOTE_HREF } from "@/data/site";
import { Brand } from "./Brand";
import { Socials } from "./Socials";

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.classList.toggle("overflow-hidden", open);
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.classList.remove("overflow-hidden");
    };
  }, [open]);

  const isCurrent = (href: string) => (href === "/" ? pathname === "/" : pathname.startsWith(href));

  return (
    <>
      <a
        href="#main"
        className="absolute left-4 -top-24 focus:top-4 z-[1000] bg-terracotta text-cream px-4 py-2.5 font-label text-[0.75rem] tracking-[0.1em] uppercase"
      >
        Skip to content
      </a>

      {/* Top bar */}
      <div className="bg-ink text-cream-2 font-label text-[0.66rem] tracking-[0.12em] uppercase">
        <div className="wrap flex items-center justify-center xl:justify-between gap-4 min-h-9">
          <div className="flex flex-wrap justify-center gap-x-3">
            <span className="whitespace-nowrap">
              {BIZ.street}, {BIZ.city}
            </span>
            <span className="hidden md:inline whitespace-nowrap">
              <span className="text-gold mr-3">·</span>
              {BIZ.hours} · {BIZ.hoursNote}
            </span>
          </div>
          <div className="hidden xl:flex gap-x-3">
            <span className="whitespace-nowrap">Free consultations</span>
            <span className="whitespace-nowrap">
              <span className="text-gold mr-3">·</span>
              <a href={`tel:${BIZ.salonTel}`} className="hover:text-gold">
                Salon {BIZ.salon}
              </a>
            </span>
          </div>
        </div>
      </div>

      {/* Header */}
      <header
        className={`sticky top-0 z-50 text-cream border-b border-white/5 backdrop-blur-md transition-[background-color] duration-300 ${
          scrolled ? "bg-ink/[0.98]" : "bg-ink/[0.92]"
        }`}
        style={{ ["--header-h" as string]: scrolled ? "68px" : "84px" }}
      >
        <div className="wrap grid grid-cols-[auto_auto] xl:grid-cols-[auto_1fr_auto] items-center gap-8 h-[var(--header-h)] transition-[height] duration-300">
          <Brand />
          <nav className="hidden xl:flex justify-center gap-[clamp(0.9rem,1.8vw,1.6rem)]" aria-label="Primary">
            {NAV.map(({ href, label }) => {
              const current = isCurrent(href);
              return (
                <Link
                  key={href}
                  href={href}
                  aria-current={current ? "page" : undefined}
                  className={`relative py-1.5 whitespace-nowrap font-label font-medium text-[0.7rem] tracking-[0.14em] uppercase transition-colors hover:text-cream after:content-[''] after:absolute after:left-0 after:right-0 after:bottom-0 after:h-px after:bg-gold after:origin-left after:transition-transform after:duration-300 ${
                    current ? "text-cream after:scale-x-100" : "text-cream-2 after:scale-x-0 hover:after:scale-x-100"
                  }`}
                >
                  {label}
                </Link>
              );
            })}
          </nav>
          <div className="flex items-center gap-5 justify-self-end">
            <a href={`tel:${BIZ.cellTel}`} className="hidden xl:inline font-label font-medium text-[0.95rem] tracking-[0.02em] whitespace-nowrap hover:text-gold">
              {BIZ.cell}
            </a>
            <Link href={QUOTE_HREF} className="btn hidden xl:inline-flex whitespace-nowrap !px-5 !py-3 !text-[0.72rem]">
              Request a quote
            </Link>
            <button
              type="button"
              className="xl:hidden flex flex-col justify-center items-center gap-1.5 w-11 h-11 -mr-2.5 text-cream"
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label="Menu"
              onClick={() => setOpen((v) => !v)}
            >
              <span className={`block w-6 h-[1.5px] bg-current transition-transform duration-300 ${open ? "translate-y-[7.5px] rotate-45" : ""}`} />
              <span className={`block w-6 h-[1.5px] bg-current transition-opacity duration-300 ${open ? "opacity-0" : ""}`} />
              <span className={`block w-6 h-[1.5px] bg-current transition-transform duration-300 ${open ? "-translate-y-[7.5px] -rotate-45" : ""}`} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        style={{ paddingTop: `calc(${scrolled ? 68 : 120}px + 1rem)` }}
        className={`fixed inset-0 z-40 bg-ink text-cream flex flex-col overflow-y-auto overscroll-contain px-[var(--gutter)] pb-[calc(1.25rem+env(safe-area-inset-bottom))] transition-[opacity,transform,visibility] duration-300 ${
          open ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-2"
        }`}
      >
        <nav aria-label="Mobile">
          {NAV.map(({ href, label }, i) => (
            <Link
              key={href}
              href={href}
              aria-current={isCurrent(href) ? "page" : undefined}
              onClick={() => setOpen(false)}
              style={{ transitionDelay: open ? `${0.06 + i * 0.05}s` : "0s" }}
              className={`block py-[3px] border-b border-white/[0.08] font-display text-[clamp(1.6rem,min(7.5vw,4.4vh),2.75rem)] leading-tight transition-[opacity,transform] duration-300 ${
                open ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
              } ${isCurrent(href) ? "text-gold font-light" : "text-cream"}`}
            >
              {label}
            </Link>
          ))}
        </nav>
        <div className="mt-auto pt-5">
          <span className="label !text-gold block">Call or text Ms Manae</span>
          <div className="mt-1.5 flex flex-wrap items-center justify-between gap-x-4 gap-y-3">
            <a href={`tel:${BIZ.cellTel}`} className="font-label font-medium text-[1.3rem] tracking-[0.01em]">
              {BIZ.cell}
            </a>
            <Socials />
          </div>
        </div>
      </div>
    </>
  );
}
