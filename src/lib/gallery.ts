import fs from "node:fs";
import path from "node:path";

/** Before & after images live in /public/img/gallery as ba-XX.webp with a ba-XX-thumb.webp beside each. */
export function getGalleryImages(): { full: string; thumb: string; index: number }[] {
  const dir = path.join(process.cwd(), "public", "img", "gallery");
  const num = (f: string) => Number(f.match(/\d+/)?.[0] ?? 0);
  const files = fs
    .readdirSync(dir)
    .filter((f) => /^ba-\d+\.webp$/.test(f))
    .filter((f) => f !== "ba-11.webp") // process shot, used on the micro bead method instead
    .sort((a, b) => num(a) - num(b));
  return files.map((f, i) => ({
    full: `/img/gallery/${f}`,
    thumb: `/img/gallery/${f.replace(".webp", "-thumb.webp")}`,
    index: i + 1,
  }));
}
