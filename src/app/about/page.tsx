import type { Metadata } from "next";
import Image from "next/image";
import { AtSign, Heart, Eye, Sparkles } from "lucide-react";
import { CtaBand } from "@/components/common/CtaBand";
import { PageHero } from "@/components/common/PageHero";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SITE } from "@/constants/site";

const title = "About";
const description =
  `Meet ${SITE.owner} and the story behind Kanasu Photography, Mandya.`;

export const metadata: Metadata = {
  title,
  description,
  openGraph: { title, description, url: "/about" },
  twitter: { title, description },
};

const VALUES = [
  { icon: Heart, title: "Feeling first", text: "We chase emotion, not perfection — the laugh before the pose, the glance between rituals." },
  { icon: Eye, title: "Eye for detail", text: "Light, colour and composition are considered in every frame, then refined in the edit." },
  { icon: Sparkles, title: "Made to last", text: "Albums and frames are designed and finished to be handed down, not just posted." },
] as const;

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title="Kanasu means dream. We take that seriously."
        description="A Mandya studio built around one idea: the moments you'll want most are the ones that pass fastest."
      />

      <section className="py-16 sm:py-20 lg:py-28">
        <Container className="grid items-center gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-20">
          <Reveal>
            <Image
              src="/images/kanasu-signature.jpg"
              alt="Double-exposure portrait of a photographer holding a camera"
              width={1225}
              height={700}
              sizes="(min-width: 1024px) 45vw, 90vw"
              className="h-auto w-full rounded-3xl shadow-card"
            />
          </Reveal>
          <Reveal delay={0.1}>
            <SectionHeading eyebrow="The photographer" title={SITE.owner} />
            <div className="mt-6 space-y-4 text-lg leading-relaxed text-muted">
              <p>
                Kanasu Photography is run by {SITE.owner} from Halebudanur, Mandya. The studio covers photography,
                videography and editing — so a single team looks after your story from the first frame to the final edit.
              </p>
              <p>
                Weddings, pre- and post-wedding shoots, baby and maternity sessions, album design and photo frames:
                each is handled personally, because every one is somebody&apos;s once-in-a-lifetime.
              </p>
            </div>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button href="/contact">Work with us</Button>
              <Button href={SITE.instagram.url} variant="outline">
                <AtSign className="size-4" aria-hidden /> Follow on Instagram
              </Button>
            </div>
          </Reveal>
        </Container>
      </section>

      <section className="bg-sand py-16 sm:py-20 lg:py-28">
        <Container>
          <SectionHeading eyebrow="What we believe" title="Three promises behind every shoot." align="center" />
          <ul className="mt-12 grid gap-6 md:grid-cols-3">
            {VALUES.map((v, i) => (
              <li key={v.title}>
                <Reveal delay={i * 0.08} className="h-full rounded-card bg-paper p-8">
                  <v.icon className="size-9 text-brand" aria-hidden />
                  <h3 className="mt-6 font-display text-2xl">{v.title}</h3>
                  <p className="mt-2 text-muted">{v.text}</p>
                </Reveal>
              </li>
            ))}
          </ul>
        </Container>
      </section>
      <CtaBand />
    </>
  );
}
