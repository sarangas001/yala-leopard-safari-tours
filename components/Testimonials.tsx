import ElfsightWidget from "@/components/ElfsightWidget";
import Illustration from "@/components/Illustration";
import Reveal from "@/components/Reveal";
import { TRUST_BADGES } from "@/lib/trust-badges";

// Live Google reviews, rendered by an Elfsight "Google Reviews" widget.
// Create the widget at https://elfsight.com, then set its ID (the
// `elfsight-app-…` UUID from the embed code) in NEXT_PUBLIC_ELFSIGHT_GOOGLE_REVIEWS_ID.
// The ID is public (it appears in the page HTML), so it is safe to keep as the default.
const WIDGET_ID =
  process.env.NEXT_PUBLIC_ELFSIGHT_GOOGLE_REVIEWS_ID ?? "8a2d6268-d418-434d-bce3-940ed4ec81c6";
const GOOGLE_PROFILE_URL = TRUST_BADGES.find((b) => b.alt === "Google Business Profile")!.href;

export default function Testimonials({
  illustration = true,
  showAllLink = true,
}: {
  illustration?: boolean;
  /** Show the "Read all guest reviews" button linking to /reviews. */
  showAllLink?: boolean;
}) {
  return (
    <section className="relative w-full overflow-hidden bg-white">
      {illustration ? (
        <Illustration src="/images/parks/deer.png" side="left" width={300} offsetTop={-16} />
      ) : null}

      <div className="relative z-10 mx-auto max-w-[1600px] px-10 py-[1.5cm] sm:px-20 sm:py-[1.5cm] lg:px-40 lg:py-[2.5cm]">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-3 text-xs font-medium uppercase tracking-[0.22em] text-brand-orange">
            <span className="h-px w-6 bg-brand-orange/50" aria-hidden="true" />
            Google Reviews
            <span className="h-px w-6 bg-brand-orange/50" aria-hidden="true" />
          </span>
          <h2 className="mt-4 text-balance font-display text-3xl font-medium tracking-tight text-brand-ink sm:text-4xl lg:text-5xl">
            Don&apos;t take our word for it
          </h2>
          <p className="mt-4 text-base leading-relaxed text-brand-ink-muted">
            Real reviews from guests who explored Sri Lanka&apos;s wildlife with us, straight from Google.
          </p>
        </Reveal>

        <Reveal still className="mx-auto mt-10 max-w-6xl lg:mt-12">
          {WIDGET_ID ? (
            <ElfsightWidget widgetId={WIDGET_ID} />
          ) : (
            <div className="rounded-3xl border border-black/6 bg-brand-cream px-6 py-12 text-center">
              <p className="text-sm text-brand-ink-muted">
                Our Google reviews are loading. You can also read them directly on Google.
              </p>
            </div>
          )}
        </Reveal>

        <Reveal className="mt-10 flex flex-wrap items-center justify-center gap-4 text-center lg:mt-12">
          <a
            href={GOOGLE_PROFILE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-brand-orange px-6 py-3 text-sm font-semibold text-white shadow-md shadow-brand-orange/25 transition-colors hover:bg-brand-orange-dark"
          >
            See all reviews on Google <span aria-hidden="true">→</span>
          </a>
          {showAllLink ? (
            <a
              href="/reviews"
              className="inline-flex items-center gap-2 rounded-full border border-brand-orange px-6 py-3 text-sm font-semibold text-brand-orange transition-colors hover:bg-brand-orange hover:text-white"
            >
              Read all guest reviews <span aria-hidden="true">→</span>
            </a>
          ) : null}
        </Reveal>
      </div>
    </section>
  );
}
