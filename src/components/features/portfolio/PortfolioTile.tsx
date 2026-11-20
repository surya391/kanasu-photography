import Image from "next/image";
import type { PortfolioItem } from "@/types";
import { cn } from "@/lib/cn";

const TONES = [
  "from-[#2a2420] to-[#14110f] text-paper",
  "from-[#c8202f] to-[#7d1019] text-white",
  "from-[#ece4d7] to-[#d9cfc0] text-ink",
  "from-[#3a322c] to-[#1e1a17] text-paper",
] as const;

function toneFor(id: string): string {
  let sum = 0;
  for (const ch of id) sum += ch.charCodeAt(0);
  return TONES[sum % TONES.length];
}

export function PortfolioTile({ item, index }: { item: PortfolioItem; index: number }) {
  const frameNo = String(index + 1).padStart(2, "0");

  return (
    <figure
      className={cn(
        "group relative w-full overflow-hidden rounded-2xl bg-ink shadow-card",
        !item.src && (item.aspect ?? "aspect-[3/4]"),
      )}
    >
      {item.src ? (
        <Image
          src={item.src}
          alt={item.alt ?? item.title}
          width={0}
          height={0}
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="block h-auto w-full transition-transform duration-700 group-hover:scale-105"
        />
      ) : (
        <div className={cn("absolute inset-0 flex flex-col justify-between bg-linear-to-br p-5", toneFor(item.id))}>
          <div className="flex items-center justify-between text-[0.65rem] font-bold tracking-[0.3em] uppercase opacity-70">
            <span>KP · {frameNo}</span>
            <span aria-hidden>▶</span>
          </div>
          <span aria-hidden className="font-display text-7xl leading-none font-light opacity-25 transition-opacity duration-500 group-hover:opacity-50 sm:text-8xl">
            {frameNo}
          </span>
          <div className="h-px w-full bg-current opacity-20" aria-hidden />
        </div>
      )}
      <figcaption className="absolute inset-x-0 bottom-0 flex translate-y-1 items-end justify-between gap-2 bg-linear-to-t from-black/75 to-transparent p-4 pt-12 text-white opacity-95 transition-transform duration-300 group-hover:translate-y-0">
        <span className="font-display text-lg leading-tight">{item.title}</span>
        <span className="shrink-0 rounded-full bg-white/15 px-2.5 py-1 text-[0.65rem] font-semibold tracking-wide backdrop-blur">
          {item.category}
        </span>
      </figcaption>
    </figure>
  );
}
