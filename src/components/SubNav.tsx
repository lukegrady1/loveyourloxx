"use client";

import { useEffect, useState } from "react";

type Item = { href: string; label: string };

export function SubNav({ items }: { items: Item[] }) {
  const [active, setActive] = useState<string>("");

  useEffect(() => {
    const targets = items.map((i) => document.querySelector<HTMLElement>(i.href)).filter((el): el is HTMLElement => Boolean(el));
    if (!targets.length) return;
    const io = new IntersectionObserver(
      (entries) => entries.forEach((en) => en.isIntersecting && setActive(`#${en.target.id}`)),
      { rootMargin: "-40% 0px -55% 0px" },
    );
    targets.forEach((t) => io.observe(t));
    return () => io.disconnect();
  }, [items]);

  return (
    <nav aria-label="Extension methods" className="sticky top-[var(--header-h)] z-40 bg-cream/90 backdrop-blur-sm border-b border-cream-3">
      <div className="wrap no-scrollbar flex gap-[clamp(1rem,3vw,2.5rem)] overflow-x-auto">
        {items.map((i) => (
          <a
            key={i.href}
            href={i.href}
            className={`whitespace-nowrap py-4 -mb-px border-b font-label text-[0.74rem] tracking-[0.2em] uppercase transition-colors ${
              active === i.href ? "text-terracotta border-terracotta" : "text-stone border-transparent hover:text-terracotta hover:border-terracotta"
            }`}
          >
            {i.label}
          </a>
        ))}
      </div>
    </nav>
  );
}
