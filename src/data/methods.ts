export type FaqEntry = { q: string; a: React.ReactNode };

export type Method = {
  id: string;
  num: string;
  name: string;
  aka: string;
  img: string;
  /** Further photos shown on the method page, in order. */
  extraImages?: string[];
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
    img: "/img/micro-bead-install.webp",
    extraImages: ["/img/gallery/ba-11.webp"],
    alt: "Micro bead hair extensions clamped at the root, with the top section clipped up",
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
    img: "/img/fusion-install.webp",
    alt: "Fusion hair extensions, with the top section pinned up to show the strands",
    time: "2 – 3 hrs",
    lasts: "3 – 4 months",
    removal: "30 – 45 min",
    short:
      "The original and most popular extension method. Each strand is bonded with a small keratin tip that moves and blends like your own hair.",
    best: "Maximum movement and the most natural blend; zero maintenance between sets.",
    caption:
      "A fusion set in progress. Each strand is bonded individually and sits flat against your own hair.",
  },
  {
    id: "tape-in",
    num: "03",
    name: "Tape-Ins",
    aka: "semi-permanent wefts",
    img: "/img/tape-in-weft.webp",
    alt: "A tape-in weft sandwiched around a thin section of natural hair",
    time: "30 – 60 min",
    lasts: "Up to 2 months",
    removal: "Re-taped at maintenance",
    short:
      "Pre-taped wefts sandwiched around thin sections of your hair. The fastest install, and the wefts can be re-taped and reused up to four times.",
    best: "Quick installs, fine hair, and anyone who wants a lighter-feeling set.",
    caption: "A tape-in weft in place. Thin, flat and lightweight.",
  },
  {
    id: "hand-tied",
    num: "04",
    name: "Hand Tied",
    aka: "braidless weft",
    img: "/img/hand-tied-result.webp",
    extraImages: ["/img/hand-tied-weft-beads.webp", "/img/hand-tied-weft-sewn.webp", "/img/hand-tied-bead-row.webp"],
    alt: "Hand tied weft hair extensions lifted to show the rows underneath",
    time: "1.5 – 2 hrs",
    lasts: "4 – 6 weeks",
    removal: "Quick and gentle",
    short:
      "Long wefts of hair sewn onto a flat row of micro beads. No braids, no glue, and the kindest method on your natural hair.",
    best: "Adding thickness fast; clients who want a gentle, braid-free weft.",
    caption: "Hand tied wefts: the rows of beads they sit on, a weft sewn onto its track, and the finished result.",
  },
];
