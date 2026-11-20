import type { Metadata } from "next";
import { Check } from "lucide-react";
import { CtaBand } from "@/components/common/CtaBand";
import { PageHero } from "@/components/common/PageHero";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SERVICES } from "@/constants/services";
import { cn } from "@/lib/cn";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Wedding photography, pre & post wedding shoots, baby and maternity shoots, album design, photo/video editing and photo frames in Mandya.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Everything from the first click to the framed print."
        description="Pick a single service or let us look after the whole journey — shoot, edit, album and frames."
      />
      <section className="py-16 sm:py-20 lg:py-24">
        <Container className="space-y-6 lg:space-y-8">
          {SERVICES.map((service, i) => (
            <Reveal key={service.slug}>
              <article
                id={service.slug}
                className="scroll-mt-28 grid gap-8 rounded-card border border-line bg-white p-6 sm:p-10 lg:grid-cols-[1fr_1.2fr] lg:gap-14"
              >
                <header className={cn(i % 2 === 1 && "lg:order-2")}>
                  <span className="flex size-14 items-center justify-center rounded-2xl bg-brand text-white">
                    <service.icon className="size-7" aria-hidden />
                  </span>
                  <p className="mt-6 text-xs font-bold tracking-[0.25em] text-brand uppercase">
                    {String(i + 1).padStart(2, "0")}
                  </p>
                  <h2 className="mt-2 font-display text-3xl sm:text-4xl">{service.title}</h2>
                  <p className="mt-4 text-muted">{service.description}</p>
                  <Button href="/contact" variant="dark" className="mt-6">
                    Enquire about this
                  </Button>
                </header>
                <div className={cn("rounded-2xl bg-paper p-6 sm:p-8", i % 2 === 1 && "lg:order-1")}>
                  <h3 className="text-sm font-bold tracking-wide uppercase">What&apos;s included</h3>
                  <ul className="mt-4 space-y-3">
                    {service.includes.map((item) => (
                      <li key={item} className="flex gap-3">
                        <Check className="mt-0.5 size-5 shrink-0 text-brand" aria-hidden />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            </Reveal>
          ))}
        </Container>
      </section>
      <CtaBand />
    </>
  );
}
