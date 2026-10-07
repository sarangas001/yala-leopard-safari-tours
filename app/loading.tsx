// Shown by Next while a route segment loads: a paw print inside a softly
// spinning brand-orange ring, on the site's white background.
export default function Loading() {
  return (
    <main
      role="status"
      aria-live="polite"
      className="flex min-h-svh flex-1 flex-col items-center justify-center gap-5 bg-white"
    >
      <div className="relative h-20 w-20">
        <div className="absolute inset-0 rounded-full border-4 border-brand-orange/15" />
        <div className="absolute inset-0 animate-spin rounded-full border-4 border-transparent border-t-brand-orange [animation-duration:1.1s]" />
        <svg
          viewBox="0 0 24 24"
          fill="currentColor"
          className="absolute inset-0 m-auto h-9 w-9 animate-pulse text-brand-orange"
          aria-hidden="true"
        >
          <ellipse cx="5.2" cy="10.2" rx="2" ry="2.6" />
          <ellipse cx="9.4" cy="5.6" rx="2" ry="2.7" />
          <ellipse cx="14.6" cy="5.6" rx="2" ry="2.7" />
          <ellipse cx="18.8" cy="10.2" rx="2" ry="2.6" />
          <path d="M12 11c-3 0-5.6 3-5.6 5.6 0 1.8 1.3 2.8 2.9 2.8 1 0 1.6-.4 2.7-.4s1.7.4 2.7.4c1.6 0 2.9-1 2.9-2.8C17.6 14 15 11 12 11Z" />
        </svg>
      </div>
      <p className="text-xs font-medium uppercase tracking-[0.25em] text-brand-ink-muted">
        Loading
      </p>
    </main>
  );
}
