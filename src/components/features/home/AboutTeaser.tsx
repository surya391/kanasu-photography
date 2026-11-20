import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SITE } from "@/constants/site";

export function AboutTeaser() {
  return (
    <section className="bg-paper py-16 sm:py-20 lg:py-28">
      <Container className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
        <Reveal>
          <div className="relative">
            <div aria-hidden className="absolute -inset-3 -rotate-2 rounded-[2rem] border-2 border-brand/40" />
            <Image
              src="/images/business-card.jpg"
              alt="Kanasu Photography business card listing services, address and Instagram handle"
              width={1225}
              height={700}
              sizes="(min-width: 1024px) 45vw, 90vw"
              className="relative h-auto w-full rounded-3xl shadow-card"
            />
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <SectionHeading
            eyebrow="The studio"
            title="Small studio. Big on detail."
            description={`Kanasu Photography is led by ${SITE.owner} from Halebudanur, Mandya. The name says it all — Kanasu is “dream” in Kannada — and every shoot is treated like one.`}
          />
          <ul className="mt-6 space-y-3 text-muted">
            <li className="flex gap-3"><span className="mt-2 size-2 shrink-0 rounded-full bg-brand" aria-hidden />Photography, videography and editing under one roof</li>
            <li className="flex gap-3"><span className="mt-2 size-2 shrink-0 rounded-full bg-brand" aria-hidden />Albums designed in-house and reviewed with you</li>
            <li className="flex gap-3"><span className="mt-2 size-2 shrink-0 rounded-full bg-brand" aria-hidden />Personal service — you speak to the photographer, always</li>
          </ul>
          <Button href="/about" variant="dark" className="mt-8">
            Meet the studio <ArrowRight className="size-4" aria-hidden />
          </Button>
        </Reveal>
      </Container>
    </section>
  );
}
