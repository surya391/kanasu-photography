import type { PortfolioCategory, PortfolioItem } from "@/types";

export const PORTFOLIO_CATEGORIES: readonly PortfolioCategory[] = [
  "Wedding",
  "Pre & Post Wedding",
  "Baby",
  "Maternity",
  "Albums",
  "Editing",
];

/**
 * Add real photographs by dropping files in /public/portfolio and setting
 * `src` + `alt` on the matching entry (e.g. src: "/portfolio/wedding-01.jpg").
 * Entries without `src` render as numbered contact-sheet frames.
 */
export const PORTFOLIO_ITEMS: readonly PortfolioItem[] = [
  {
    id: "w-01",
    title: "The Muhurtha",
    category: "Wedding",
    aspect: "aspect-[3/4]",
  },
  {
    id: "pw-01",
    title: "Golden Hour Walk",
    category: "Pre & Post Wedding",
    aspect: "aspect-[4/3]",
  },
  {
    id: "b-01",
    title: "First Smiles",
    category: "Baby",
    aspect: "aspect-square",
  },
  {
    id: "w-02",
    title: "Sacred Fire",
    category: "Wedding",
    aspect: "aspect-[2/3]",
  },
  {
    id: "m-01",
    title: "Waiting for You",
    category: "Maternity",
    aspect: "aspect-[3/4]",
  },
  {
    id: "al-01",
    title: "Heirloom Spreads",
    category: "Albums",
    aspect: "aspect-[4/3]",
  },
  {
    id: "pw-02",
    title: "Quiet Together",
    category: "Pre & Post Wedding",
    aspect: "aspect-[3/4]",
  },
  {
    id: "b-02",
    title: "Little Hands",
    category: "Baby",
    aspect: "aspect-[4/3]",
  },
  {
    id: "ed-01",
    title: "Colour Grade Study",
    category: "Editing",
    aspect: "aspect-square",
  },
  {
    id: "w-03",
    title: "Bridal Portrait",
    category: "Wedding",
    aspect: "aspect-[2/3]",
  },
  {
    id: "m-02",
    title: "Soft Light",
    category: "Maternity",
    aspect: "aspect-square",
  },
  {
    id: "ed-02",
    title: "Highlight Reel",
    category: "Editing",
    aspect: "aspect-[4/3]",
  },
];
