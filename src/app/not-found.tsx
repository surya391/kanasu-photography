import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = { title: "Page not found" };

export default function NotFound() {
  return (
    <Container className="flex min-h-[60dvh] flex-col items-center justify-center py-20 text-center">
      <p className="font-display text-8xl text-brand sm:text-9xl">404</p>
      <h1 className="mt-4 font-display text-3xl sm:text-4xl">This frame is out of focus.</h1>
      <p className="mt-3 max-w-md text-muted">The page you&apos;re looking for doesn&apos;t exist or has moved.</p>
      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <Button href="/">Back to home</Button>
        <Button href="/portfolio" variant="outline">View portfolio</Button>
      </div>
    </Container>
  );
}
