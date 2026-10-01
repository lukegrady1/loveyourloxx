"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

/**
 * Fades in every `.reveal` element as it scrolls into view.
 * Mounted once in the root layout; re-scans on each route change and watches
 * the DOM for elements rendered later (lightbox, lazy sections).
 */
export function RevealObserver() {
  const pathname = usePathname();

  useEffect(() => {
    const root = document.documentElement;
    root.classList.add("js-reveal");

    const showAll = () => document.querySelectorAll<HTMLElement>(".reveal:not(.in)").forEach((el) => el.classList.add("in"));

    if (!("IntersectionObserver" in window) || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      showAll();
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((en) => {
          if (en.isIntersecting) {
            en.target.classList.add("in");
            io.unobserve(en.target);
          }
        });
      },
      { rootMargin: "0px 0px -4% 0px", threshold: 0.01 },
    );

    // Track per effect instance (not on the DOM) so Strict Mode's double-invoke
    // and route changes always re-observe the current elements.
    const seen = new WeakSet<Element>();
    const observeNew = () =>
      document.querySelectorAll<HTMLElement>(".reveal:not(.in)").forEach((el) => {
        if (seen.has(el)) return;
        seen.add(el);
        io.observe(el);
      });

    observeNew();
    // Catch elements added after this effect runs (streamed/lazy content, client transitions).
    const mo = new MutationObserver(observeNew);
    mo.observe(document.body, { childList: true, subtree: true });

    // Safety net: anything still hidden after a few seconds is shown.
    const fallback = window.setTimeout(showAll, 2500);

    return () => {
      io.disconnect();
      mo.disconnect();
      window.clearTimeout(fallback);
    };
  }, [pathname]);

  return null;
}
