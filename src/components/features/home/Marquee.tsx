import { SERVICES } from "@/constants/services";

export function Marquee() {
  const row = SERVICES.map((s) => s.title);
  return (
    <section aria-label="Services at a glance" className="overflow-hidden bg-brand py-4 text-white">
      <div className="flex w-max animate-marquee gap-10 whitespace-nowrap" aria-hidden>
        {[...row, ...row].map((title, i) => (
          <span key={`${title}-${i}`} className="flex items-center gap-10 font-display text-xl sm:text-2xl">
            {title}
            <span className="text-white/60">✦</span>
          </span>
        ))}
      </div>
      <p className="sr-only">{row.join(", ")}</p>
    </section>
  );
}
