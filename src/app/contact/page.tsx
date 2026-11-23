import type { Metadata } from "next";
import { AtSign, Mail, MapPin, Phone } from "lucide-react";
import { PageHero } from "@/components/common/PageHero";
import { InquiryForm } from "@/components/features/contact/InquiryForm";
import { Container } from "@/components/ui/Container";
import { MAPS_URL, SITE } from "@/constants/site";

const title = "Contact & Booking";
const description =
  "Book Kanasu Photography in Mandya — call, WhatsApp, email or send an enquiry online.";

export const metadata: Metadata = {
  title,
  description,
  openGraph: { title, description, url: "/contact" },
  twitter: { title, description },
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Let's plan something unforgettable."
        description="Share a few details and we'll reach out. Prefer to talk? Call us directly."
      />
      <section className="py-12 sm:py-16 lg:py-24">
        <Container className="grid gap-10 lg:grid-cols-[1.5fr_1fr] lg:gap-14">
          <InquiryForm />

          <aside className="space-y-5">
            <address className="rounded-card bg-ink p-7 text-paper not-italic sm:p-8">
              <h2 className="font-display text-2xl">Studio details</h2>
              <ul className="mt-6 space-y-5 text-muted-on-ink">
                <li className="flex gap-3">
                  <MapPin className="mt-0.5 size-5 shrink-0 text-[#ff6b77]" aria-hidden />
                  <a href={MAPS_URL} target="_blank" rel="noopener noreferrer" className="hover:text-paper">
                    {SITE.address.lines.join(", ")}, {SITE.address.city}, {SITE.address.region}
                  </a>
                </li>
                {SITE.phones.map((p) => (
                  <li key={p.tel} className="flex gap-3">
                    <Phone className="mt-0.5 size-5 shrink-0 text-[#ff6b77]" aria-hidden />
                    <a href={`tel:${p.tel}`} className="hover:text-paper">{p.display}</a>
                  </li>
                ))}
                <li className="flex gap-3">
                  <Mail className="mt-0.5 size-5 shrink-0 text-[#ff6b77]" aria-hidden />
                  <a href={`mailto:${SITE.email}`} className="break-all hover:text-paper">{SITE.email}</a>
                </li>
                <li className="flex gap-3">
                  <AtSign className="mt-0.5 size-5 shrink-0 text-[#ff6b77]" aria-hidden />
                  <a href={SITE.instagram.url} target="_blank" rel="noopener noreferrer" className="break-all hover:text-paper">
                    {SITE.instagram.handle}
                  </a>
                </li>
              </ul>
            </address>
            <p className="rounded-card border border-line bg-white p-6 text-sm text-muted">
              Contact: <strong className="text-ink">{SITE.owner}</strong>. We usually reply the same day — for urgent
              dates, call or WhatsApp.
            </p>
          </aside>
        </Container>
      </section>
    </>
  );
}
