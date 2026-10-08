"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowIcon } from "./Icons";

/**
 * Sticky "Book online" button for phones and tablets, where the header's
 * booking button is hidden. Slides up once the visitor scrolls past the top
 * of the page and stays out of the way on the booking page itself.
 */
export function MobileBookBar() {
  const pathname = usePathname();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > window.innerHeight * 0.6);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [pathname]);

  if (pathname.startsWith("/book")) return null;

  return (
    <div
      inert={!visible}
      aria-hidden={!visible}
      className={`xl:hidden fixed inset-x-0 bottom-0 z-30 flex px-[var(--gutter)] pt-3 pb-[calc(0.75rem+env(safe-area-inset-bottom))] pointer-events-none transition-[opacity,transform] duration-300 ease-out-soft ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-full"
      }`}
    >
      <Link
        href="/book"
        className="btn pointer-events-auto mx-auto !px-8 !py-3.5 shadow-[0_10px_30px_rgba(27,25,23,0.28)]"
      >
        Book online now <ArrowIcon />
      </Link>
    </div>
  );
}
