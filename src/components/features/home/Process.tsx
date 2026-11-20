import { CalendarCheck, Camera, MessagesSquare, PackageCheck } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

const STEPS = [
  { icon: MessagesSquare, title: "Say hello", text: "Call, WhatsApp or send an enquiry. Tell us the occasion, date and what matters most." },
  { icon: CalendarCheck, title: "Plan together", text: "We agree on coverage, locations and timings so nothing is left to chance." },
  { icon: Camera, title: "The shoot", text: "We stay unobtrusive, direct only when needed, and keep everyone at ease." },
  { icon: PackageCheck, title: "Edit & deliver", text: "Colour, cuts, album design and frames — finished and handed over with care." },
] as const;

export function Process() {
  return (
    <section className="bg-sand py-16 sm:py-20 lg:py-28">
      <Container>
        <SectionHeading eyebrow="How it works" title="Simple from first call to final print." align="center" />
        <ol className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((step, i) => (
            <li key={step.title}>
              <Reveal delay={i * 0.08} className="relative h-full rounded-card bg-paper p-6 sm:p-7">
                <span aria-hidden className="absolute top-4 right-5 font-display text-6xl leading-none text-brand/15">
                  {i + 1}
                </span>
                <step.icon className="size-8 text-brand" aria-hidden />
                <h3 className="mt-6 font-display text-2xl">{step.title}</h3>
                <p className="mt-2 text-muted">{step.text}</p>
              </Reveal>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
