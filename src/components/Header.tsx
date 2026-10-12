"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { BIZ, NAV, CONSULT_HREF } from "@/data/site";
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
            <span className="whitespace-nowrap">Consultations</span>
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
            {NAV.map(({ href, label, children }) => {
              const current = isCurrent(href);
              const linkClass = `relative py-1.5 whitespace-nowrap font-label font-medium text-[0.7rem] tracking-[0.14em] uppercase transition-colors hover:text-cream after:content-[''] after:absolute after:left-0 after:right-0 after:bottom-0 after:h-px after:bg-gold after:origin-left after:transition-transform after:duration-300 ${
                current ? "text-cream after:scale-x-100" : "text-cream-2 after:scale-x-0 hover:after:scale-x-100"
              }`;
              if (!children) {
                return (
                  <Link key={href} href={href} aria-current={current ? "page" : undefined} className={linkClass}>
                    {label}
                  </Link>
                );
              }
              return (
                <div key={href} className="group relative">
                  <Link href={href} aria-current={current ? "page" : undefined} className={`${linkClass} inline-flex items-center gap-1.5`}>
                    {label}
                    <svg aria-hidden="true" viewBox="0 0 10 6" className="w-2 h-2 fill-none stroke-current stroke-[1.5] transition-transform duration-300 group-hover:rotate-180 group-focus-within:rotate-180">
                      <path d="M1 1l4 4 4-4" />
                    </svg>
                  </Link>
                  <ul className="absolute left-1/2 top-full -translate-x-1/2 pt-3 min-w-[12rem] opacity-0 invisible translate-y-1 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 group-focus-within:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 transition-[opacity,transform,visibility] duration-200">
                    <li className="bg-ink border border-white/10 shadow-[0_18px_40px_-16px_rgba(0,0,0,0.6)] py-2">
                      {children.map((c) => (
                        <Link
                          key={c.href}
                          href={c.href}
                          aria-current={pathname === c.href ? "page" : undefined}
                          className={`block px-5 py-2.5 whitespace-nowrap font-label font-medium text-[0.7rem] tracking-[0.14em] uppercase transition-colors hover:text-gold hover:bg-white/[0.04] ${
                            pathname === c.href ? "text-gold" : "text-cream-2"
                          }`}
                        >
                          {c.label}
                        </Link>
                      ))}
                    </li>
                  </ul>
                </div>
              );
            })}
          </nav>
          <div className="flex items-center gap-5 justify-self-end">
            <a href={`tel:${BIZ.cellTel}`} className="hidden xl:inline font-label font-medium text-[0.95rem] tracking-[0.02em] whitespace-nowrap hover:text-gold">
              {BIZ.cell}
            </a>
            <Link href={CONSULT_HREF} className="btn hidden xl:inline-flex whitespace-nowrap !px-5 !py-3 !text-[0.72rem]">
              Request a consultation
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
          {NAV.map(({ href, label, children }, i) => (
            <div key={href} className="border-b border-white/[0.08]">
              <Link
                href={href}
                aria-current={isCurrent(href) ? "page" : undefined}
                onClick={() => setOpen(false)}
                style={{ transitionDelay: open ? `${0.06 + i * 0.05}s` : "0s" }}
                className={`block py-[3px] font-display text-[clamp(1.5rem,min(7vw,4vh),2.6rem)] leading-tight transition-[opacity,transform] duration-300 ${
                  open ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
                } ${isCurrent(href) ? "text-gold font-light" : "text-cream"}`}
              >
                {label}
              </Link>
              {children && (
                <div className="flex flex-wrap gap-x-5 gap-y-1 pb-3 -mt-0.5">
                  {children.map((c) => (
                    <Link
                      key={c.href}
                      href={c.href}
                      aria-current={pathname === c.href ? "page" : undefined}
                      onClick={() => setOpen(false)}
                      style={{ transitionDelay: open ? `${0.1 + i * 0.05}s` : "0s" }}
                      className={`font-label text-[0.72rem] tracking-[0.16em] uppercase transition-[opacity,transform] duration-300 ${
                        open ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
                      } ${pathname === c.href ? "text-gold" : "text-cream-2"}`}
                    >
                      {c.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
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
