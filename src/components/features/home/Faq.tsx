import { ChevronDown } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

const FAQS = [
  {
    q: "Do you travel outside Mandya for shoots?",
    a: "Yes. We're based in Mandya and shoot weddings and pre-wedding sessions at other locations too — share your venue when you enquire and we'll confirm.",
  },
  {
    q: "Can you handle both photography and video?",
    a: "Absolutely. Photography, videography and editing are all handled by the same studio, so the look and feel stays consistent.",
  },
  {
    q: "I only need editing or an album design. Is that possible?",
    a: "Yes. Photo/video editing and album design are available as standalone services, even for footage shot by someone else.",
  },
  {
    q: "How do I get a quote?",
    a: "Send an enquiry from the Contact page or call/WhatsApp us. We'll discuss your requirements and share a quote personally.",
  },
  {
    q: "Do you sell photo frames?",
    a: "Yes, all photo frames are available — choose your favourite shots and we'll print and frame them.",
  },
] as const;

export function Faq() {
  return (
    <section className="py-16 sm:py-20 lg:py-28">
      <Container className="grid gap-12 lg:grid-cols-[1fr_1.4fr]">
        <SectionHeading eyebrow="Questions" title="Before you book." description="Quick answers to the things people ask most." />
        <div className="divide-y divide-line border-y border-line">
          {FAQS.map((item) => (
            <details key={item.q} className="group py-1">
              <summary className="flex min-h-16 cursor-pointer list-none items-center justify-between gap-4 font-display text-lg sm:text-xl [&::-webkit-details-marker]:hidden">
                {item.q}
                <ChevronDown className="size-5 shrink-0 text-brand transition-transform group-open:rotate-180" aria-hidden />
              </summary>
              <p className="pb-5 text-muted">{item.a}</p>
            </details>
          ))}
        </div>
      </Container>
    </section>
  );
}
