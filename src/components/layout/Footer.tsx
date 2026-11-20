import Link from "next/link";
import { AtSign, MapPin, Phone, Mail } from "lucide-react";
import { Logo } from "@/components/common/Logo";
import { Container } from "@/components/ui/Container";
import { MAPS_URL, NAV_LINKS, SITE } from "@/constants/site";
import { SERVICES } from "@/constants/services";

export function Footer() {
  return (
    <footer className="grain relative overflow-hidden bg-ink text-paper">
      <Container className="relative z-10 py-14 lg:py-20">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.3fr]">
          <div>
            <Logo tone="dark" />
            <p className="mt-5 max-w-xs font-display text-2xl leading-snug text-paper/90">
              {SITE.tagline}
            </p>
            <p className="mt-3 text-sm text-muted-on-ink">
              Photography · Videography · Editing
            </p>
          </div>

          <nav aria-label="Footer">
            <h2 className="text-xs font-bold tracking-[0.25em] text-[#ff6b77] uppercase">Explore</h2>
            <ul className="mt-5 space-y-1">
              {NAV_LINKS.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="inline-block py-1.5 text-muted-on-ink transition-colors hover:text-paper">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="text-xs font-bold tracking-[0.25em] text-[#ff6b77] uppercase">Services</h2>
            <ul className="mt-5 space-y-1">
              {SERVICES.map((s) => (
                <li key={s.slug}>
                  <Link href={`/services#${s.slug}`} className="inline-block py-1.5 text-muted-on-ink transition-colors hover:text-paper">
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <address className="not-italic">
            <h2 className="text-xs font-bold tracking-[0.25em] text-[#ff6b77] uppercase">Visit & say hello</h2>
            <ul className="mt-5 space-y-4 text-muted-on-ink">
              <li className="flex gap-3">
                <MapPin className="mt-0.5 size-5 shrink-0 text-paper" aria-hidden />
                <a href={MAPS_URL} target="_blank" rel="noopener noreferrer" className="hover:text-paper">
                  {SITE.address.lines.join(", ")}, {SITE.address.city}
                </a>
              </li>
              {SITE.phones.map((p) => (
                <li key={p.tel} className="flex gap-3">
                  <Phone className="mt-0.5 size-5 shrink-0 text-paper" aria-hidden />
                  <a href={`tel:${p.tel}`} className="hover:text-paper">{p.display}</a>
                </li>
              ))}
              <li className="flex gap-3">
                <Mail className="mt-0.5 size-5 shrink-0 text-paper" aria-hidden />
                <a href={`mailto:${SITE.email}`} className="break-all hover:text-paper">{SITE.email}</a>
              </li>
              <li className="flex gap-3">
                <AtSign className="mt-0.5 size-5 shrink-0 text-paper" aria-hidden />
                <a href={SITE.instagram.url} target="_blank" rel="noopener noreferrer" className="break-all hover:text-paper">
                  {SITE.instagram.handle}
                </a>
              </li>
            </ul>
          </address>
        </div>

        <div className="mt-14 flex flex-col gap-2 border-t border-paper/10 pt-6 text-sm text-muted-on-ink sm:flex-row sm:justify-between">
          <p>© Kanasu Photography. All rights reserved.</p>
          <p>Proprietor: {SITE.owner} · Mandya, Karnataka</p>
        </div>
      </Container>
    </footer>
  );
}
