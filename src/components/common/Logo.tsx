import Link from "next/link";
import { Crown } from "lucide-react";
import { cn } from "@/lib/cn";

export function Logo({ tone = "light", className }: { tone?: "light" | "dark"; className?: string }) {
  return (
    <Link href="/" className={cn("inline-flex items-center gap-3", className)} aria-label="Kanasu Photography — home">
      <span
        aria-hidden
        className="relative flex size-11 items-end justify-center rounded-xl bg-brand pb-1 font-display text-lg leading-none font-bold text-white"
      >
        <Crown className="absolute top-1 size-4" strokeWidth={2.2} />
        KP
      </span>
      <span className="flex flex-col leading-none">
        <span
          className={cn(
            "font-display text-lg font-semibold tracking-wide uppercase",
            tone === "dark" ? "text-paper" : "text-ink",
          )}
        >
          Kanasu
        </span>
        <span
          className={cn(
            "mt-1 text-[0.65rem] font-semibold tracking-[0.35em] uppercase",
            tone === "dark" ? "text-muted-on-ink" : "text-muted",
          )}
        >
          Photography
        </span>
      </span>
    </Link>
  );
}
