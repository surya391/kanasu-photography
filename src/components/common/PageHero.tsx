import type { ReactNode } from "react";
import { Container } from "@/components/ui/Container";

interface PageHeroProps {
  eyebrow: string;
  title: ReactNode;
  description: string;
}

export function PageHero({ eyebrow, title, description }: PageHeroProps) {
  return (
    <section className="grain relative overflow-hidden bg-ink text-paper">
      <div aria-hidden className="absolute -top-24 -right-24 size-72 rounded-full bg-brand/30 blur-3xl sm:size-96" />
      <Container className="relative z-10 py-16 sm:py-20 lg:py-28">
        <p className="text-xs font-bold tracking-[0.25em] text-[#ff6b77] uppercase">{eyebrow}</p>
        <h1 className="mt-4 max-w-3xl font-display text-4xl leading-[1.05] font-medium text-balance sm:text-5xl lg:text-7xl">
          {title}
        </h1>
        <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-on-ink sm:text-lg">{description}</p>
      </Container>
    </section>
  );
}
