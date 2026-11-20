import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";
import { cn } from "@/lib/cn";

type Variant = "primary" | "dark" | "outline" | "outline-light";

const VARIANTS: Record<Variant, string> = {
  primary: "bg-brand text-white hover:bg-brand-dark",
  dark: "bg-ink text-paper hover:bg-ink-soft",
  outline: "border border-ink/25 text-ink hover:border-ink hover:bg-ink hover:text-paper",
  "outline-light":
    "border border-paper/30 text-paper hover:border-paper hover:bg-paper hover:text-ink",
};

const BASE =
  "group inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-6 text-sm font-semibold tracking-wide transition-colors duration-200 disabled:pointer-events-none disabled:opacity-60";

interface CommonProps {
  variant?: Variant;
  className?: string;
  children: ReactNode;
}

type ButtonProps = CommonProps & { href?: undefined } & Omit<ComponentProps<"button">, "className" | "children">;
type LinkProps = CommonProps & { href: string } & Omit<ComponentProps<"a">, "className" | "children" | "href">;

export function Button(props: ButtonProps | LinkProps) {
  const { variant = "primary", className, children } = props;
  const classes = cn(BASE, VARIANTS[variant], className);

  if (props.href !== undefined) {
    const { href, variant: _v, className: _c, children: _ch, ...rest } = props;
    void _v;
    void _c;
    void _ch;
    const external = /^(https?:|mailto:|tel:)/.test(href);
    if (external) {
      const isWeb = href.startsWith("http");
      return (
        <a
          href={href}
          className={classes}
          {...(isWeb ? { target: "_blank", rel: "noopener noreferrer" } : {})}
          {...rest}
        >
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={classes} {...rest}>
        {children}
      </Link>
    );
  }

  const { variant: _v, className: _c, children: _ch, href: _h, ...rest } = props;
  void _v;
  void _c;
  void _ch;
  void _h;
  return (
    <button type="button" className={classes} {...rest}>
      {children}
    </button>
  );
}
