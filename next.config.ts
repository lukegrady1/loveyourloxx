import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  // The previous Wix site's URLs (from its sitemap). Keep these so indexed
  // pages and old links land on the right new page instead of a 404.
  async redirects() {
    return [
      { source: "/about-me", destination: "/about", permanent: true },
      { source: "/extentions-offered", destination: "/extensions", permanent: true },
      { source: "/micro-bead", destination: "/extensions/micro-bead", permanent: true },
      { source: "/fusionmethod", destination: "/extensions/fusion", permanent: true },
      { source: "/tapeinmethod", destination: "/extensions/tape-in", permanent: true },
      { source: "/handtiedmethod", destination: "/extensions/hand-tied", permanent: true },
      { source: "/faqs", destination: "/faq", permanent: true },
      { source: "/blog", destination: "/", permanent: true },
      { source: "/post/:slug*", destination: "/", permanent: true },
      { source: "/test", destination: "/", permanent: true },
    ];
  },
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2200],
  },
};

export default nextConfig;
