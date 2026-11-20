# Kanasu Photography

Website for Kanasu Photography, Mandya — Next.js (App Router), TypeScript, Tailwind CSS v4, Motion, React Hook Form + Zod.

## Commands

```bash
pnpm install
pnpm dev
pnpm exec tsc --noEmit
pnpm lint
pnpm build
```

## Structure

`src/app` routes · `src/components/{ui,common,layout,features}` · `src/constants` (site info, services, portfolio) · `src/lib` (validation, inquiry hand-off) · `src/types`.

## Things to configure

- **Portfolio photos** — drop files into `public/portfolio/` and set `src` + `alt` on entries in `src/constants/portfolio.ts`. Photos keep their own shape (no aspect ratio needed). Entries without `src` render as numbered contact-sheet frames.
- **Site URL** — set `NEXT_PUBLIC_SITE_URL` (e.g. `https://kanasuphotography.in`) for correct canonical, sitemap and social URLs.
- **Enquiry form** — there is no backend. `src/lib/inquiry.ts` hands the validated enquiry to WhatsApp (pre-filled) with an email fallback. To store enquiries or send email, replace `submitInquiry` with a Server Action / route handler using a provider API key from environment variables.
