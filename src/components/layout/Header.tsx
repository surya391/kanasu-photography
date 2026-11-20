"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, Phone, X } from "lucide-react";
import { Logo } from "@/components/common/Logo";
import { Button } from "@/components/ui/Button";
import { NAV_LINKS, SITE } from "@/constants/site";
import { cn } from "@/lib/cn";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const isActive = (href: string) => (href === "/" ? pathname === "/" : pathname.startsWith(href));

  return (
    <header
      className="sticky top-0 z-50 border-b border-line/70 bg-paper/90 backdrop-blur-md"
      onKeyDown={(e) => {
        if (e.key === "Escape") setOpen(false);
      }}
    >
      <div className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:h-20 lg:px-10">
        <Logo />

        <nav aria-label="Primary" className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  aria-current={isActive(link.href) ? "page" : undefined}
                  className={cn(
                    "relative rounded-full px-4 py-2 text-sm font-semibold transition-colors",
                    isActive(link.href) ? "text-brand" : "text-ink/80 hover:text-ink",
                  )}
                >
                  {link.label}
                  {isActive(link.href) ? (
                    <span className="absolute inset-x-4 -bottom-0.5 h-0.5 rounded-full bg-brand" />
                  ) : null}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={`tel:${SITE.phones[0].tel}`}
            className="flex items-center gap-2 text-sm font-semibold text-ink/80 hover:text-ink"
          >
            <Phone className="size-4" aria-hidden /> {SITE.phones[0].display}
          </a>
          <Button href="/contact" className="min-h-11 px-5">
            Book a shoot
          </Button>
        </div>

        <button
          type="button"
          className="-mr-2 flex size-12 items-center justify-center rounded-full text-ink lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </div>

      {open ? (
        <div id="mobile-menu" className="border-t border-line bg-paper lg:hidden">
          <nav aria-label="Mobile" className="mx-auto max-w-7xl px-4 pt-2 pb-6 sm:px-6">
            <ul>
              {NAV_LINKS.map((link) => (
                <li key={link.href} className="border-b border-line/70">
                  <Link
                    href={link.href}
                    onClick={() => setOpen(false)}
                    aria-current={isActive(link.href) ? "page" : undefined}
                    className={cn(
                      "flex min-h-14 items-center font-display text-2xl",
                      isActive(link.href) ? "text-brand" : "text-ink",
                    )}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Button href="/contact" onClick={() => setOpen(false)} className="flex-1">
                Book a shoot
              </Button>
              <Button href={`tel:${SITE.phones[0].tel}`} variant="outline" className="flex-1">
                <Phone className="size-4" aria-hidden /> Call {SITE.phones[0].display}
              </Button>
            </div>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
