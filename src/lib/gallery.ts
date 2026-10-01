import fs from "node:fs";
import path from "node:path";

/** Before & after images live in /public/img/gallery as ba-XX.jpg with a ba-XX-thumb.jpg beside each. */
export function getGalleryImages(): { full: string; thumb: string; index: number }[] {
  const dir = path.join(process.cwd(), "public", "img", "gallery");
  const files = fs
    .readdirSync(dir)
    .filter((f) => /^ba-\d+\.jpg$/.test(f))
    .filter((f) => f !== "ba-11.jpg") // process shot, used on the micro bead method instead
    .sort();
  return files.map((f, i) => ({
    full: `/img/gallery/${f}`,
    thumb: `/img/gallery/${f.replace(".jpg", "-thumb.jpg")}`,
    index: i + 1,
  }));
}
