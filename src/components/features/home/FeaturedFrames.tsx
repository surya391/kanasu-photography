import { ArrowRight } from "lucide-react";
import { PortfolioTile } from "@/components/features/portfolio/PortfolioTile";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PORTFOLIO_ITEMS } from "@/constants/portfolio";

export function FeaturedFrames() {
  const items = PORTFOLIO_ITEMS.slice(0, 6);
  return (
    <section className="grain relative overflow-hidden bg-ink py-16 sm:py-20 lg:py-28">
      <Container className="relative z-10">
        <SectionHeading
          tone="dark"
          eyebrow="Selected frames"
          title="Stories we've had the honour of telling."
          description="A glimpse across weddings, newborns, maternity and the albums that bring them together."
        />
        <ul className="mt-12 columns-1 gap-5 sm:columns-2 lg:columns-3 [&>li]:mb-5 [&>li]:break-inside-avoid">
          {items.map((item, i) => (
            <li key={item.id}>
              <Reveal delay={(i % 3) * 0.08}>
                <PortfolioTile item={item} index={i} />
              </Reveal>
            </li>
          ))}
        </ul>
        <div className="mt-6 flex justify-center">
          <Button href="/portfolio" variant="outline-light">
            Explore full portfolio <ArrowRight className="size-4" aria-hidden />
          </Button>
        </div>
      </Container>
    </section>
  );
}
