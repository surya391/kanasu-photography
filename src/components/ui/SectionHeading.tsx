import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

interface SectionHeadingProps {
  eyebrow: string;
  title: ReactNode;
  description?: string;
  align?: "left" | "center";
  tone?: "light" | "dark";
  className?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  tone = "light",
  className,
}: SectionHeadingProps) {
  return (
    <div className={cn("max-w-2xl", align === "center" && "mx-auto text-center", className)}>
      <p
        className={cn(
          "text-xs font-bold uppercase tracking-[0.25em]",
          tone === "dark" ? "text-[#ff6b77]" : "text-brand",
        )}
      >
        {eyebrow}
      </p>
      <h2
        className={cn(
          "mt-3 font-display text-3xl leading-tight font-medium text-balance sm:text-4xl lg:text-5xl",
          tone === "dark" ? "text-paper" : "text-ink",
        )}
      >
        {title}
      </h2>
      {description ? (
        <p
          className={cn(
            "mt-4 text-base leading-relaxed text-pretty sm:text-lg",
            tone === "dark" ? "text-muted-on-ink" : "text-muted",
          )}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}
