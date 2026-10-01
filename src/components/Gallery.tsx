"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { ChevronLeftIcon, ChevronRightIcon, CloseIcon } from "./Icons";

export type GalleryImage = { full: string; thumb: string; index: number };

type Props = {
  images: GalleryImage[];
  /** Home layout: 6-col grid with two featured tiles. */
  featured?: boolean;
};

export function Gallery({ images, featured }: Props) {
  const [open, setOpen] = useState(false);
  const [idx, setIdx] = useState(0);
  const closeRef = useRef<HTMLButtonElement>(null);
  const lastFocus = useRef<HTMLElement | null>(null);
  const touchX = useRef(0);

  const show = useCallback((i: number) => setIdx((i + images.length) % images.length), [images.length]);

  const openAt = (i: number) => {
    lastFocus.current = document.activeElement as HTMLElement;
    setIdx(i);
    setOpen(true);
  };
  const close = useCallback(() => {
    setOpen(false);
    lastFocus.current?.focus();
  }, []);

  useEffect(() => {
    if (!open) return;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") show(idx + 1);
      if (e.key === "ArrowLeft") show(idx - 1);
    };
    document.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", onKey);
    };
  }, [open, idx, show, close]);

  const current = images[idx];

  return (
    <>
      <div
        className={
          featured
            ? "grid grid-cols-3 md:grid-cols-6 gap-[clamp(0.6rem,1.2vw,1.1rem)] [&>*:nth-child(1)]:md:col-span-2 [&>*:nth-child(1)]:md:row-span-2 [&>*:nth-child(4)]:md:col-span-2 [&>*:nth-child(4)]:md:row-span-2"
            : "grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-[clamp(0.6rem,1.2vw,1.1rem)]"
        }
      >
        {images.map((img, i) => (
          <button
            key={img.full}
            type="button"
            onClick={() => openAt(i)}
            aria-label={`Open before and after photo ${img.index}`}
            className="tile-shade reveal group relative aspect-square overflow-hidden bg-cream-2 cursor-zoom-in"
          >
            <Image
              src={img.thumb}
              alt={`Before and after hair extensions by Ms Manae, set ${img.index}`}
              fill
              sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
              className="object-cover transition-transform duration-700 ease-out-soft group-hover:scale-[1.04]"
            />
            <span className="absolute left-3.5 bottom-3 z-10 font-label text-[0.62rem] tracking-[0.22em] uppercase text-cream opacity-0 translate-y-1.5 transition-[opacity,transform] duration-300 group-hover:opacity-100 group-hover:translate-y-0">
              Before &amp; after
            </span>
          </button>
        ))}
      </div>

      {/* Lightbox */}
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Photo viewer"
        aria-hidden={!open}
        onClick={(e) => e.target === e.currentTarget && close()}
        onTouchStart={(e) => (touchX.current = e.changedTouches[0].clientX)}
        onTouchEnd={(e) => {
          const dx = e.changedTouches[0].clientX - touchX.current;
          if (Math.abs(dx) > 50) show(dx < 0 ? idx + 1 : idx - 1);
        }}
        className={`fixed inset-0 z-[100] grid place-items-center p-4 md:p-8 bg-ink/[0.96] transition-[opacity,visibility] duration-300 ${
          open ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        {open && current && (
          <div className="relative w-[min(92vw,1100px)] h-[80vh] md:h-[86vh]">
            <Image
              src={current.full}
              alt={`Before and after hair extensions by Ms Manae, set ${current.index}`}
              fill
              sizes="(max-width: 1100px) 92vw, 1100px"
              className="object-contain drop-shadow-[0_30px_80px_rgba(0,0,0,0.5)]"
              priority
            />
          </div>
        )}
        <button ref={closeRef} type="button" onClick={close} aria-label="Close" className={lbBtn + " top-5 right-5"}>
          <CloseIcon className="w-[18px] h-[18px]" />
        </button>
        <button type="button" onClick={() => show(idx - 1)} aria-label="Previous photo" className={lbBtn + " left-4 bottom-4 md:bottom-auto md:top-1/2 md:-translate-y-1/2"}>
          <ChevronLeftIcon className="w-[18px] h-[18px]" />
        </button>
        <button type="button" onClick={() => show(idx + 1)} aria-label="Next photo" className={lbBtn + " right-4 bottom-4 md:bottom-auto md:top-1/2 md:-translate-y-1/2"}>
          <ChevronRightIcon className="w-[18px] h-[18px]" />
        </button>
        <span className="absolute bottom-7 md:bottom-5 left-1/2 -translate-x-1/2 font-label text-[0.72rem] tracking-[0.25em] text-stone-2">
          {idx + 1} / {images.length}
        </span>
      </div>
    </>
  );
}

const lbBtn =
  "absolute grid place-items-center w-12 h-12 rounded-full border border-white/25 text-cream bg-transparent transition-colors duration-200 hover:bg-terracotta hover:border-terracotta";
