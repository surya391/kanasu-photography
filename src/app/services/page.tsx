import type { Metadata } from "next";
import Image from "next/image";
import { Check } from "lucide-react";
import { CtaBand } from "@/components/common/CtaBand";
import { PageHero } from "@/components/common/PageHero";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SERVICES } from "@/constants/services";
import { cn } from "@/lib/cn";

const title = "Services";
const description =
  "Wedding photography, pre & post wedding shoots, baby and maternity shoots, album design, photo/video editing and photo frames in Mandya.";

export const metadata: Metadata = {
  title,
  description,
  openGraph: { title, description, url: "/services" },
  twitter: { title, description },
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Everything from the first click to the framed print."
        description="Pick a single service or let us look after the whole journey — shoot, edit, album and frames."
      />
      <nav aria-label="Jump to a service" className="border-b border-line bg-white">
        <Container className="-mx-4 flex gap-2 overflow-x-auto px-4 py-4 sm:mx-auto sm:flex-wrap sm:justify-center sm:px-0">
          {SERVICES.map((service) => (
            <a
              key={service.slug}
              href={`#${service.slug}`}
              className="inline-flex min-h-11 shrink-0 items-center gap-2 rounded-full border border-ink/15 px-4 text-sm font-semibold transition-colors hover:border-brand hover:text-brand"
            >
              <service.icon className="size-4" aria-hidden />
              {service.title}
            </a>
          ))}
        </Container>
      </nav>
      <section className="py-16 sm:py-20 lg:py-24">
        <Container className="space-y-10 lg:space-y-16">
          {SERVICES.map((service, i) => (
            <Reveal key={service.slug}>
              <article
                id={service.slug}
                className="scroll-mt-28 grid overflow-hidden rounded-card border border-line bg-white shadow-card lg:grid-cols-2"
              >
                <div className={cn("relative aspect-[4/3] lg:aspect-auto lg:min-h-[32rem]", i % 2 === 1 && "lg:order-2")}>
                  <Image
                    src={service.image}
                    alt={service.imageAlt}
                    fill
                    sizes="(min-width: 1024px) 50vw, 100vw"
                    className="object-cover object-[50%_30%]"
                  />
                  <div aria-hidden className="absolute inset-0 bg-linear-to-t from-black/45 via-transparent to-transparent" />
                  <span className="absolute top-5 left-5 flex size-14 items-center justify-center rounded-2xl bg-brand text-white shadow-lg">
                    <service.icon className="size-7" aria-hidden />
                  </span>
                  <span aria-hidden className="absolute right-6 bottom-3 font-display text-7xl leading-none font-light text-white/80 sm:text-8xl">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <div className="flex flex-col justify-center p-6 sm:p-10 lg:p-12">
                  <p className="text-xs font-bold tracking-[0.25em] text-brand uppercase">{service.short}</p>
                  <h2 className="mt-3 font-display text-3xl sm:text-4xl">{service.title}</h2>
                  <p className="mt-4 text-muted">{service.description}</p>
                  <h3 className="mt-8 text-sm font-bold tracking-wide uppercase">What&apos;s included</h3>
                  <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                    {service.includes.map((item) => (
                      <li key={item} className="flex items-start gap-3 rounded-xl bg-paper p-3 text-sm font-medium">
                        <Check className="mt-0.5 size-4 shrink-0 text-brand" aria-hidden />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-8 flex flex-wrap gap-3">
                    <Button href="/contact" variant="dark">
                      Enquire about this
                    </Button>
                    <Button href="/portfolio" variant="outline">
                      See our work
                    </Button>
                  </div>
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
