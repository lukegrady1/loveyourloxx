import type { Metadata } from "next";
import { Onest } from "next/font/google";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { RevealObserver } from "@/components/Reveal";
import { BIZ, SITE_URL } from "@/data/site";
import "./globals.css";

const onest = Onest({ subsets: ["latin"], weight: ["300", "400", "500", "600", "700"], variable: "--font-onest", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Love Your Loxx | Hair Extensions in Scottsdale, AZ by Ms Manae",
    template: "%s | Love Your Loxx",
  },
  description:
    "Scottsdale’s finest hair extensions. Micro bead, fusion, tape-in and hand tied extensions by Ms Manae, 15+ years of experience. Free consultations. Call or text 480-234-7068.",
  openGraph: {
    type: "website",
    siteName: "Love Your Loxx",
    images: [{ url: "/og.jpg", width: 1200, height: 630, alt: "Love Your Loxx — Hair Extensions by Ms Manae, Scottsdale" }],
  },
  twitter: { card: "summary_large_image", images: ["/og.jpg"] },
  icons: { icon: "/img/favicon.svg" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "HairSalon",
  name: BIZ.name,
  alternateName: `${BIZ.name} ${BIZ.tagline}`,
  description:
    "Professional hair extensions in Scottsdale, Arizona. Micro bead, fusion, tape-in and hand tied methods by Ms Manae, with 15+ years of experience.",
  url: `${SITE_URL}/`,
  telephone: BIZ.cellTel,
  image: `${SITE_URL}/og.jpg`,
  priceRange: "$$",
  address: {
    "@type": "PostalAddress",
    streetAddress: BIZ.street,
    addressLocality: "Scottsdale",
    addressRegion: "AZ",
    postalCode: "85257",
    addressCountry: "US",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      opens: "09:00",
      closes: "18:00",
    },
  ],
  sameAs: Object.values(BIZ.social),
  founder: { "@type": "Person", name: "Ms Manae" },
  areaServed: ["Scottsdale", "Phoenix", "Tempe", "Paradise Valley", "Arizona"],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={onest.variable}>
      <head>
        <meta name="theme-color" content="#1b1917" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </head>
      <body>
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <RevealObserver />
      </body>
    </html>
  );
}
