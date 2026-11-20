import { MessageCircle, Phone } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SITE } from "@/constants/site";

export function CtaBand() {
  return (
    <section className="py-16 sm:py-20 lg:py-24">
      <Container>
        <Reveal>
          <div className="grain relative overflow-hidden rounded-[2rem] bg-brand px-6 py-14 text-center text-white sm:px-12 lg:py-20">
            <div aria-hidden className="absolute -bottom-20 -left-20 size-72 rounded-full bg-black/15 blur-2xl" />
            <div className="relative z-10 mx-auto max-w-2xl">
              <h2 className="font-display text-3xl leading-tight font-medium text-balance sm:text-5xl">
                Got a date in mind? Let&apos;s frame it.
              </h2>
              <p className="mt-4 text-base text-white/90 sm:text-lg">
                Tell us about your celebration and we&apos;ll get back to you personally.
              </p>
              <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
                <Button href="/contact" variant="dark">
                  <MessageCircle className="size-4" aria-hidden /> Send an enquiry
                </Button>
                <Button href={`tel:${SITE.phones[0].tel}`} variant="outline-light" className="border-white/60 text-white">
                  <Phone className="size-4" aria-hidden /> {SITE.phones[0].display}
                </Button>
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
