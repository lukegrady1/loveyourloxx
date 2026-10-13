import fs from "node:fs";
import path from "node:path";

/** Before & after images live in /public/img/gallery as ba-XX.webp with a ba-XX-thumb.webp beside each. */
export function getGalleryImages(): { full: string; thumb: string; index: number }[] {
  const dir = path.join(process.cwd(), "public", "img", "gallery");
  const files = fs
    .readdirSync(dir)
    .filter((f) => /^ba-\d+\.webp$/.test(f))
    .filter((f) => f !== "ba-11.webp") // process shot, used on the micro bead method instead
    .sort((a, b) => {
      // Newest batch (ba-56 onwards, added 2026-10-12) shows first, then the original set, each in number order.
      const num = (f: string) => Number(f.match(/\d+/)?.[0] ?? 0);
      const rank = (f: string) => (num(f) >= 56 ? 0 : 1);
      return rank(a) - rank(b) || num(a) - num(b);
    });
  return files.map((f, i) => ({
    full: `/img/gallery/${f}`,
    thumb: `/img/gallery/${f.replace(".webp", "-thumb.webp")}`,
    index: i + 1,
  }));
}
