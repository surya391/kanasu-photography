import type { Metadata } from "next";
import { CtaBand } from "@/components/common/CtaBand";
import { PageHero } from "@/components/common/PageHero";
import { PortfolioGallery } from "@/components/features/portfolio/PortfolioGallery";
import { Container } from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Browse wedding, pre-wedding, baby, maternity, album and editing work by Kanasu Photography.",
};

export default function PortfolioPage() {
  return (
    <>
      <PageHero
        eyebrow="Portfolio"
        title="Frames worth a second look."
        description="Filter by occasion or search by title. Follow our Instagram for the latest work."
      />
      <section className="py-12 sm:py-16 lg:py-20">
        <Container>
          <PortfolioGallery />
        </Container>
      </section>
      <CtaBand />
    </>
  );
}
