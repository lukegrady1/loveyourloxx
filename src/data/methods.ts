export type FaqEntry = { q: string; a: React.ReactNode };

export type Method = {
  id: string;
  num: string;
  name: string;
  aka: string;
  img: string;
  img2?: string;
  alt: string;
  time: string;
  lasts: string;
  removal: string;
  short: string;
  best: string;
  caption: string;
};

export const METHODS: Method[] = [
  {
    id: "micro-bead",
    num: "01",
    name: "Micro Bead",
    aka: "also called micro link",
    img: "/img/gallery/ba-11.jpg",
    img2: "/img/method-microbead.jpg",
    alt: "Micro bead hair extensions being applied strand by strand",
    time: "1.5 – 2.5 hrs",
    lasts: "3 – 4 months",
    removal: "20 – 30 min",
    short:
      "A strand-by-strand method using tiny copper beads clamped at the root. No heat, no glue, and the hair can be reused set after set.",
    best: "Most hair types; clients who want to reuse their hair and avoid glue or heat.",
    caption:
      "Micro bead placement, strand by strand. The beads sit flat at the root and disappear under your own hair.",
  },
  {
    id: "fusion",
    num: "02",
    name: "Fusion",
    aka: "keratin strand by strand",
    img: "/img/method-fusion.jpg",
    alt: "Keratin fusion hair extension strands",
    time: "2 – 3 hrs",
    lasts: "3 – 4 months",
    removal: "30 – 45 min",
    short:
      "The original and most popular extension method. Each strand is bonded with a small keratin tip that moves and blends like your own hair.",
    best: "Maximum movement and the most natural blend; zero maintenance between sets.",
    caption:
      "Keratin fusion strands. The bond is the size of a grain of rice and shaped flat to your hair.",
  },
  {
    id: "tape-in",
    num: "03",
    name: "Tape-Ins",
    aka: "semi-permanent wefts",
    img: "/img/method-tapein.jpg",
    img2: "/img/method-tapein-2.jpg",
    alt: "Tape-in hair extension wefts",
    time: "30 – 60 min",
    lasts: "Up to 2 months",
    removal: "Re-taped at maintenance",
    short:
      "Pre-taped wefts sandwiched around thin sections of your hair. The fastest install, and the wefts can be re-taped and reused up to four times.",
    best: "Quick installs, fine hair, and anyone who wants a lighter-feeling set.",
    caption: "Tape-in wefts, before application. Thin, flat and lightweight.",
  },
  {
    id: "hand-tied",
    num: "04",
    name: "Hand Tied",
    aka: "braidless weft",
    img: "/img/method-handtied.jpg",
    alt: "Hand tied weft hair extensions sewn onto a micro bead track",
    time: "1.5 – 2 hrs",
    lasts: "4 – 6 weeks",
    removal: "Quick and gentle",
    short:
      "Long wefts of hair sewn onto a flat row of micro beads. No braids, no glue, and the kindest method on your natural hair.",
    best: "Adding thickness fast; clients who want a gentle, braid-free weft.",
    caption: "A hand tied weft sewn onto its micro bead track.",
  },
];
