import Image from "next/image";
import { ArrowRight, Camera, Clapperboard, Scissors } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { SITE } from "@/constants/site";

const DISCIPLINES = [
  { icon: Camera, label: "Photography" },
  { icon: Clapperboard, label: "Videography" },
  { icon: Scissors, label: "Editing" },
] as const;

export function Hero() {
  return (
    <section className="grain relative overflow-hidden bg-ink text-paper">
      <div aria-hidden className="absolute -top-32 left-1/3 size-96 rounded-full bg-brand/25 blur-3xl" />
      <Container className="relative z-10 grid items-center gap-12 py-14 sm:py-20 lg:grid-cols-[1.1fr_1fr] lg:gap-8 lg:py-28">
        <div>
          <p className="inline-flex items-center gap-2 rounded-full border border-paper/20 px-4 py-2 text-xs font-semibold tracking-[0.2em] uppercase">
            <span className="size-2 rounded-full bg-brand" aria-hidden /> Mandya · Karnataka
          </p>
          <h1 className="mt-6 font-display text-[2.75rem] leading-[1.02] font-medium text-balance sm:text-6xl lg:text-7xl xl:text-8xl">
            Every dream <em className="font-normal text-[#ff6b77] italic">deserves</em> a frame.
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-on-ink sm:text-lg">
            <strong className="font-semibold text-paper">Kanasu</strong> means <em>dream</em>. We photograph and film
            weddings, newborns and the quiet moments in between — then edit and print them into keepsakes that last.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button href="/contact">
              Book your shoot <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" aria-hidden />
            </Button>
            <Button href="/portfolio" variant="outline-light">
              View portfolio
            </Button>
          </div>
          <ul className="mt-10 flex flex-wrap gap-x-6 gap-y-3 text-sm text-muted-on-ink">
            {DISCIPLINES.map(({ icon: Icon, label }) => (
              <li key={label} className="flex items-center gap-2">
                <Icon className="size-4 text-[#ff6b77]" aria-hidden /> {label}
              </li>
            ))}
          </ul>
        </div>

        <div className="relative mx-auto w-full max-w-md lg:max-w-none">
          <div aria-hidden className="absolute inset-0 translate-x-3 translate-y-3 rotate-3 rounded-3xl bg-brand sm:translate-x-5 sm:translate-y-5" />
          <div className="relative -rotate-2 rounded-3xl bg-paper p-3 pb-14 shadow-2xl sm:p-4 sm:pb-16">
            <Image
              src="/images/kanasu-signature.jpg"
              alt="Double-exposure portrait of a photographer holding a camera, with the Kanasu Photography wordmark"
              width={1225}
              height={700}
              priority
              sizes="(min-width: 1024px) 42vw, 90vw"
              className="h-auto w-full rounded-2xl"
            />
            <p className="absolute inset-x-0 bottom-4 text-center font-display text-lg text-ink italic sm:bottom-5 sm:text-xl">
              {SITE.owner} · Founder
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
