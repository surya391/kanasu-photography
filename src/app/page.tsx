import { CtaBand } from "@/components/common/CtaBand";
import { AboutTeaser } from "@/components/features/home/AboutTeaser";
import { Faq } from "@/components/features/home/Faq";
import { FeaturedFrames } from "@/components/features/home/FeaturedFrames";
import { Hero } from "@/components/features/home/Hero";
import { Marquee } from "@/components/features/home/Marquee";
import { Process } from "@/components/features/home/Process";
import { ServicesPreview } from "@/components/features/home/ServicesPreview";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Marquee />
      <ServicesPreview />
      <FeaturedFrames />
      <Process />
      <AboutTeaser />
      <Faq />
      <CtaBand />
    </>
  );
}
