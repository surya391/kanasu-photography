"use client";

import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export default function Error({ unstable_retry }: { error: Error & { digest?: string }; unstable_retry: () => void }) {
  return (
    <Container className="flex min-h-[60dvh] flex-col items-center justify-center py-20 text-center">
      <h1 className="font-display text-4xl sm:text-5xl">Something went wrong.</h1>
      <p className="mt-3 max-w-md text-muted">An unexpected error occurred. Please try again.</p>
      <Button className="mt-8" onClick={() => unstable_retry()}>
        Try again
      </Button>
    </Container>
  );
}
