import type { LucideIcon } from "lucide-react";

export type ServiceSlug =
  | "wedding-photography"
  | "pre-post-wedding"
  | "baby-shoot"
  | "maternity-shoot"
  | "album-design"
  | "video-photo-editing"
  | "photo-frames";

export interface Service {
  slug: ServiceSlug;
  title: string;
  short: string;
  description: string;
  includes: readonly string[];
  icon: LucideIcon;
  image: string;
  imageAlt: string;
}

export type PortfolioCategory =
  | "Wedding"
  | "Pre & Post Wedding"
  | "Baby"
  | "Maternity"
  | "Albums"
  | "Editing";

export interface PortfolioItem {
  id: string;
  title: string;
  category: PortfolioCategory;
  /** Path under /public. When omitted a typographic contact-sheet frame is shown. */
  src?: string;
  alt?: string;
  /** Only used for placeholder frames (no `src`). Real photos keep their own shape. */
  aspect?:"aspect-[3/4]" | "aspect-square" | "aspect-[4/3]" | "aspect-[2/3]";
}

export interface NavLink {
  href: string;
  label: string;
}
