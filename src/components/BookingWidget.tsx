"use client";

import Script from "next/script";
import { useEffect, useRef } from "react";
import { BIZ } from "@/data/site";

const FRAME_ID = "loveyourloxx-booking";
const MIN_HEIGHT = 1000;
const PADDING = 8;

/**
 * GoHighLevel's embed script sizes the iframe from the widget body's offset
 * height. On the "Enter details" step, and whenever the widget stacks into one
 * column, the widget's inner panel sizes itself to the iframe instead, so the
 * reported height stops growing and the "Schedule meeting" button is clipped.
 *
 * The widget also posts its own `highlevel.setHeight` measurement. We listen for
 * both and enforce the larger one as a min-height, which wins over the inline
 * height the embed script writes. Scrolling stays enabled as a last resort.
 */
export function BookingWidget() {
  const frameRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    const frame = frameRef.current;
    if (!frame) return;

    let fromWidget = 0;
    let fromResizer = 0;

    const apply = () => {
      const target = Math.max(MIN_HEIGHT, fromWidget + PADDING, fromResizer + PADDING);
      frame.style.minHeight = `${target}px`;
    };

    const onMessage = (event: MessageEvent) => {
      if (event.source !== frame.contentWindow) return;
      const { data } = event;

      if (typeof data === "string" && data.startsWith(`[iFrameSizer]${FRAME_ID}:`)) {
        const height = Number(data.split(":")[1]);
        if (Number.isFinite(height) && height > 0) {
          fromResizer = height;
          apply();
        }
        return;
      }

      if (Array.isArray(data) && data[0] === "highlevel.setHeight") {
        const height = Number(data[1]?.height);
        if (Number.isFinite(height) && height > 0) {
          fromWidget = height;
          apply();
        }
      }
    };

    window.addEventListener("message", onMessage);
    return () => window.removeEventListener("message", onMessage);
  }, []);

  return (
    <>
      <iframe
        ref={frameRef}
        src={BIZ.bookingUrl}
        title="Book an appointment with Ms Manae at Love Your Loxx"
        id={FRAME_ID}
        loading="eager"
        className="block w-full border-0"
        style={{ minHeight: MIN_HEIGHT }}
      />
      <Script src={BIZ.bookingEmbedScript} strategy="afterInteractive" />
    </>
  );
}
