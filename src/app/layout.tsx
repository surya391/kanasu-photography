import type { Metadata, Viewport } from "next";
import { Fraunces, Manrope } from "next/font/google";
import { WhatsAppButton } from "@/components/common/WhatsAppButton";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { SITE } from "@/constants/site";
import "./globals.css";

const manrope = Manrope({ variable: "--font-manrope", subsets: ["latin"], display: "swap" });
const fraunces = Fraunces({ variable: "--font-fraunces", subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: `${SITE.name} — Wedding, Baby & Maternity Photography in Mandya`,
    template: `%s · ${SITE.name}`,
  },
  description: SITE.description,
  alternates: { canonical: "./" },
  keywords: [
    "wedding photographer Mandya",
    "pre wedding shoot",
    "baby shoot",
    "maternity shoot",
    "album design",
    "photo frames",
    "Kanasu Photography",
  ],
  authors: [{ name: SITE.owner }],
  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: SITE.name,
    url: "/",
    title: SITE.name,
    description: SITE.description,
    images: [{ url: "/images/kanasu-signature.jpg", width: 1225, height: 700, alt: SITE.name }],
  },
  twitter: { card: "summary_large_image", title: SITE.name, description: SITE.description },
};

export const viewport: Viewport = {
  themeColor: "#14110f",
  width: "device-width",
  initialScale: 1,
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Photographer",
  "@id": `${SITE.url}/#business`,
  url: SITE.url,
  image: `${SITE.url}/images/kanasu-signature.jpg`,
  name: SITE.name,
  areaServed: SITE.address.city,
  founder: SITE.owner,
  description: SITE.description,
  email: SITE.email,
  telephone: SITE.phones.map((p) => p.tel),
  sameAs: [SITE.instagram.url],
  address: {
    "@type": "PostalAddress",
    streetAddress: SITE.address.lines.join(", "),
    addressLocality: SITE.address.city,
    addressRegion: SITE.address.region,
    addressCountry: SITE.address.country,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${manrope.variable} ${fraunces.variable} antialiased`}>
      <body className="flex min-h-dvh flex-col">
        <a
          href="#main"
          className="sr-only z-[60] rounded-full bg-brand px-5 py-3 font-semibold text-white focus:not-sr-only focus:fixed focus:top-3 focus:left-3"
        >
          Skip to content
        </a>
        <Header />
        <main id="main" className="flex-1">
          {children}
        </main>
        <Footer />
        <WhatsAppButton />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }} />
      </body>
    </html>
  );
}
