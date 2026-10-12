import type { Metadata } from "next";
import { Cta } from "@/components/Cta";
import { Gallery } from "@/components/Gallery";
import { PageHero } from "@/components/PageHero";
import { Socials } from "@/components/Socials";
import { BIZ } from "@/data/site";
import { getGalleryImages } from "@/lib/gallery";

export const metadata: Metadata = {
  title: "Before & After Hair Extensions",
  description:
    "Browse real before and after photos of hair extensions by Ms Manae in Scottsdale, AZ. Length, volume and seamless blends on every hair type.",
  alternates: { canonical: "/gallery" },
};

export default function GalleryPage() {
  const images = getGalleryImages();
  return (
    <>
      <PageHero
        label="Before & after"
        title={
          <>
            <span className="sm:whitespace-nowrap">Countless transformations,</span> <em>zero filters.</em>
          </>
        }
        lead="Every photo here is a real client, taken in the salon on the day of her appointment. No studio lighting, no filters, no retouching. Length, volume, color, blends on fine hair and thick hair. Tap any photo to enlarge."
        image="/img/editorial-red.webp"
        center
      />
      <section className="py-[clamp(4rem,9vw,8rem)]">
        <div className="wrap">
          <div className="reveal grid md:grid-cols-[auto_1fr] gap-x-10 gap-y-3 items-start border-l-2 border-terracotta bg-cream-2 px-6 py-6 mb-[clamp(2.5rem,5vw,4rem)]">
            <span className="label pt-1">Real results, honestly shown</span>
            <p className="text-ink-3 m-0 max-w-[68ch]">
              I don’t believe in showing off hair under perfect lighting with a professional camera and a round of editing. These photos are
              taken on my phone, in the salon, the moment the set is finished. What you see here is exactly what your hair will look like when
              you walk out of my door.
            </p>
          </div>
          <Gallery images={images} />
          <div className="flex flex-wrap items-center justify-between gap-4 mt-8">
            <p className="text-stone m-0">
              Want to see more? Follow{" "}
              <a href={BIZ.social.instagram} target="_blank" rel="noopener noreferrer" className="text-terracotta underline underline-offset-4">
                @loveyourloxxaz on Instagram
              </a>{" "}
              for the latest sets.
            </p>
            <Socials />
          </div>
        </div>
      </section>
      <Cta
        title={<>Ready to be the <em>next</em> one?</>}
        body="Call or text for a consultation. Bring inspiration photos if you have them, and we’ll talk about what your hair can do."
      />
    </>
  );
}
