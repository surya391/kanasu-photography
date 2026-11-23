import type { MetadataRoute } from "next";
import { NAV_LINKS, SITE } from "@/constants/site";

/** Bump when page content meaningfully changes. */
const LAST_UPDATED = new Date("2026-11-23");

export default function sitemap(): MetadataRoute.Sitemap {
  return NAV_LINKS.map((l) => ({
    url: `${SITE.url}${l.href === "/" ? "" : l.href}`,
    lastModified: LAST_UPDATED,
    changeFrequency: "monthly",
    priority: l.href === "/" ? 1 : 0.7,
  }));
}
