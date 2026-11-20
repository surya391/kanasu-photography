import { SITE } from "@/constants/site";
import type { InquiryData } from "@/lib/validation";

/**
 * Integration layer for booking enquiries.
 *
 * No backend or email-service credentials exist for this project, so enquiries
 * are handed off through channels the studio already uses: WhatsApp and email.
 * To store enquiries or send them through a provider (Resend, SendGrid, a CRM…),
 * replace `submitInquiry` with a call to a Server Action / route handler that
 * uses the provider's API key from environment variables.
 */

export function formatInquiryMessage(data: InquiryData): string {
  const lines = [
    "Hello Kanasu Photography,",
    "",
    `I'd like to enquire about: ${data.service}`,
    `Name: ${data.name}`,
    `Phone: ${data.phone}`,
    data.email ? `Email: ${data.email}` : null,
    data.eventDate ? `Date: ${data.eventDate}` : null,
    data.location ? `Location: ${data.location}` : null,
    "",
    data.message,
  ];
  return lines.filter((l): l is string => l !== null).join("\n");
}

export function buildWhatsAppUrl(message: string, phone: string = SITE.phones[0].wa): string {
  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
}

export function buildMailtoUrl(data: InquiryData): string {
  const subject = encodeURIComponent(`${data.service} enquiry — ${data.name}`);
  const body = encodeURIComponent(formatInquiryMessage(data));
  return `mailto:${SITE.email}?subject=${subject}&body=${body}`;
}

export interface InquiryHandoff {
  whatsappUrl: string;
  mailtoUrl: string;
}

export function submitInquiry(data: InquiryData): InquiryHandoff {
  return {
    whatsappUrl: buildWhatsAppUrl(formatInquiryMessage(data)),
    mailtoUrl: buildMailtoUrl(data),
  };
}
