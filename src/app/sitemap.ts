import type { MetadataRoute } from "next";
import { NAV, SITE_URL } from "@/data/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = [...NAV.map(({ href }) => href), "/book"];
  return paths.map((href) => ({
    url: `${SITE_URL}${href === "/" ? "" : href}`,
    changeFrequency: "monthly",
    priority: href === "/" ? 1 : 0.8,
  }));
}
