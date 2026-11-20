import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SERVICES } from "@/constants/services";

export function ServicesPreview() {
  return (
    <section className="py-16 sm:py-20 lg:py-28">
      <Container>
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <SectionHeading
            eyebrow="What we do"
            title={<>Seven ways to keep a moment.</>}
            description="From the wedding mandap to the nursery, one team handles the shoot, the edit and the final print."
          />
          <Link href="/services" className="inline-flex min-h-12 items-center gap-2 font-semibold text-brand hover:underline">
            All services <ArrowUpRight className="size-4" aria-hidden />
          </Link>
        </div>

        <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {SERVICES.map((service, i) => (
            <li key={service.slug} className={i === 0 ? "lg:col-span-2" : undefined}>
              <Reveal delay={(i % 3) * 0.08} className="h-full">
                <Link
                  href={`/services#${service.slug}`}
                  className="group relative flex h-full min-h-56 flex-col justify-between overflow-hidden rounded-card border border-line bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-brand/40 hover:shadow-card sm:p-8"
                >
                  <div className="flex items-start justify-between">
                    <span className="flex size-12 items-center justify-center rounded-2xl bg-sand text-brand transition-colors group-hover:bg-brand group-hover:text-white">
                      <service.icon className="size-6" aria-hidden />
                    </span>
                    <ArrowUpRight className="size-5 text-muted transition-transform group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-brand" aria-hidden />
                  </div>
                  <div className="mt-10">
                    <h3 className="font-display text-2xl leading-tight">{service.title}</h3>
                    <p className="mt-2 text-muted">{service.short}</p>
                  </div>
                </Link>
              </Reveal>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
