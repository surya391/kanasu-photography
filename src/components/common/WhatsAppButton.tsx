import { MessageCircle } from "lucide-react";
import { buildWhatsAppUrl } from "@/lib/inquiry";

export function WhatsAppButton() {
  const href = buildWhatsAppUrl("Hello Kanasu Photography, I'd like to enquire about a shoot.");
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="fixed right-4 bottom-4 z-50 inline-flex min-h-12 items-center gap-2 rounded-full bg-[#1fa855] px-4 text-sm font-semibold text-white shadow-xl transition-transform hover:scale-105 sm:right-6 sm:bottom-6 sm:px-5"
    >
      <MessageCircle className="size-5" aria-hidden />
      <span className="hidden sm:inline">Chat on WhatsApp</span>
    </a>
  );
}
