"use client";

import { useMemo, useState } from "react";
import { Search, SearchX } from "lucide-react";
import { PortfolioTile } from "@/components/features/portfolio/PortfolioTile";
import { Button } from "@/components/ui/Button";
import { PORTFOLIO_CATEGORIES, PORTFOLIO_ITEMS } from "@/constants/portfolio";
import { cn } from "@/lib/cn";
import type { PortfolioCategory } from "@/types";

type Filter = "All" | PortfolioCategory;

export function PortfolioGallery() {
  const [filter, setFilter] = useState<Filter>("All");
  const [query, setQuery] = useState("");

  const items = useMemo(() => {
    const q = query.trim().toLowerCase();
    return PORTFOLIO_ITEMS.filter(
      (item) =>
        (filter === "All" || item.category === filter) &&
        (q === "" || `${item.title} ${item.category}`.toLowerCase().includes(q)),
    );
  }, [filter, query]);

  const reset = () => {
    setFilter("All");
    setQuery("");
  };

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

        <label className="relative block w-full lg:w-72">
          <span className="sr-only">Search the portfolio</span>
          <Search aria-hidden className="pointer-events-none absolute top-1/2 left-4 size-4 -translate-y-1/2 text-muted" />
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search frames…"
            className="min-h-11 w-full rounded-full border border-ink/20 bg-white pr-4 pl-11 text-sm placeholder:text-muted focus:border-brand focus:outline-none"
          />
        </label>
      </div>

      <p className="mt-6 text-sm text-muted" aria-live="polite">
        Showing {items.length} of {PORTFOLIO_ITEMS.length} frames
      </p>

      {items.length === 0 ? (
        <div className="mt-8 flex flex-col items-center rounded-3xl border border-dashed border-line px-6 py-16 text-center">
          <SearchX className="size-10 text-muted" aria-hidden />
          <h3 className="mt-4 font-display text-2xl">No frames match your search</h3>
          <p className="mt-2 max-w-sm text-muted">Try another category or a different keyword.</p>
          <Button variant="dark" className="mt-6" onClick={reset}>
            Clear filters
          </Button>
        </div>
      ) : (
        <ul className="mt-6 columns-1 gap-5 sm:columns-2 lg:columns-3 [&>li]:mb-5 [&>li]:break-inside-avoid">
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
