export default function Loading() {
  return (
    <div role="status" aria-live="polite" className="flex min-h-[60dvh] items-center justify-center">
      <span className="size-10 animate-spin rounded-full border-4 border-line border-t-brand" />
      <span className="sr-only">Loading…</span>
    </div>
  );
}
