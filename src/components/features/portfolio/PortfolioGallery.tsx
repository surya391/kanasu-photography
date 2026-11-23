"use client";

import { useMemo, useState } from "react";
import { ImageOff } from "lucide-react";
import { PortfolioTile } from "@/components/features/portfolio/PortfolioTile";
import { Button } from "@/components/ui/Button";
import { PORTFOLIO_CATEGORIES, PORTFOLIO_ITEMS } from "@/constants/portfolio";
import { cn } from "@/lib/cn";
import type { PortfolioCategory } from "@/types";

type Filter = "All" | PortfolioCategory;

export function PortfolioGallery() {
  const [filter, setFilter] = useState<Filter>("All");

  const items = useMemo(() => {
    return PORTFOLIO_ITEMS.filter((item) => filter === "All" || item.category === filter);
  }, [filter]);

  return (
    <div>
      <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
        <div role="group" aria-label="Filter by category" className="-mx-4 flex gap-2 overflow-x-auto px-4 pb-1 sm:mx-0 sm:flex-wrap sm:px-0">
          {(["All", ...PORTFOLIO_CATEGORIES] as const).map((cat) => (
            <button
              key={cat}
              type="button"
              aria-pressed={filter === cat}
              onClick={() => setFilter(cat)}
              className={cn(
                "min-h-11 shrink-0 rounded-full border px-5 text-sm font-semibold transition-colors",
                filter === cat
                  ? "border-brand bg-brand text-white"
                  : "border-ink/20 text-ink hover:border-ink",
              )}
            >
              {cat}
            </button>
          ))}
        </div>

      </div>

      <p className="mt-6 text-sm text-muted" aria-live="polite">
        Showing {items.length} of {PORTFOLIO_ITEMS.length} frames
      </p>

      {items.length === 0 ? (
        <div className="mt-8 flex flex-col items-center rounded-3xl border border-dashed border-line px-6 py-16 text-center">
          <ImageOff className="size-10 text-muted" aria-hidden />
          <h3 className="mt-4 font-display text-2xl">No frames in this category yet</h3>
          <p className="mt-2 max-w-sm text-muted">Try another category.</p>
          <Button variant="dark" className="mt-6" onClick={() => setFilter("All")}>
            Show all frames
          </Button>
        </div>
      ) : (
        <ul className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item, i) => (
            <li key={item.id}>
              <PortfolioTile item={item} index={i} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
