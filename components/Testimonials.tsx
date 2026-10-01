"use client";

import { useRef, useState } from "react";
import Illustration from "@/components/Illustration";
import Reveal from "@/components/Reveal";

// Placeholder quotes — replace with real Google/TripAdvisor reviews before launch.
const REVIEWS = [
  {
    name: "Sample Guest",
    detail: "United Kingdom",
    headline: "Add a short, punchy headline here",
    quote:
      "Add a real guest review here, a short, specific line about the leopard sighting or the guide's knowledge works best. Mention how many parks you visited, how the guide spotted wildlife other jeeps drove straight past, and how the whole day felt paced rather than rushed.",
  },
  {
    name: "Sample Guest",
    detail: "Germany",
    headline: "Add a short, punchy headline here",
    quote:
      "Add a real guest review here, mention the jeep, the pace of the drive, or how many parks you covered. A note on the early pickup, the guide's local knowledge, or a specific animal encounter (elephants at the waterhole, a leopard on a rock) makes the quote feel real and specific.",
  },
  {
    name: "Sample Guest",
    detail: "Australia",
    headline: "Add a short, punchy headline here",
    quote:
      "Add a real guest review here, pull a strong quote from Google or TripAdvisor once reviews start coming in. The best quotes describe a specific moment: a close leopard sighting, a knowledgeable guide, or a small-group experience that felt personal rather than rushed.",
  },
];

function Stars() {
  return (
    <div className="flex justify-center gap-1 text-brand-orange" aria-label="5 out of 5 stars">
      {Array.from({ length: 5 }).map((_, star) => (
        <svg key={star} viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5">
          <path d="M10 1.5l2.6 5.4 5.9.7-4.3 4.2 1 5.9L10 14.9l-5.2 2.8 1-5.9-4.3-4.2 5.9-.7L10 1.5Z" />
        </svg>
      ))}
    </div>
  );
}

function ArrowIcon({ direction }: { direction: "prev" | "next" }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" aria-hidden="true">
      <path
        d={direction === "prev" ? "M15 5l-7 7 7 7" : "M9 5l7 7-7 7"}
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function Testimonials({ illustration = true }: { illustration?: boolean }) {
  const [index, setIndex] = useState(0);
  const touchStartX = useRef<number | null>(null);
  const last = REVIEWS.length - 1;

  const go = (next: number) => setIndex(next < 0 ? last : next > last ? 0 : next);

  const buttonClass =
    "flex h-12 w-12 items-center justify-center rounded-full border border-black/10 bg-white text-brand-ink shadow-sm transition-colors hover:border-brand-orange hover:bg-brand-orange hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-orange";

  return (
    <section className="relative w-full overflow-hidden bg-white">
      {illustration ? (
        <Illustration src="/images/parks/deer.png" side="left" width={300} offsetTop={-16} />
      ) : null}

      <div className="relative z-10 mx-auto max-w-[1600px] px-10 py-[1.5cm] sm:px-20 sm:py-[1.5cm] lg:px-40 lg:py-[2.5cm]">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-3 text-xs font-medium uppercase tracking-[0.22em] text-brand-orange">
            <span className="h-px w-6 bg-brand-orange/50" aria-hidden="true" />
            Guest Reviews
            <span className="h-px w-6 bg-brand-orange/50" aria-hidden="true" />
          </span>
          <h2 className="mt-4 text-balance font-display text-3xl font-medium tracking-tight text-brand-ink sm:text-4xl lg:text-5xl">
            Don&apos;t take our word for it
          </h2>
        </Reveal>

        <Reveal className="mx-auto mt-6 max-w-3xl lg:mt-10">
          <div
            role="region"
            aria-roledescription="carousel"
            aria-label="Guest reviews"
            className="overflow-hidden"
            onTouchStart={(e) => {
              touchStartX.current = e.touches[0].clientX;
            }}
            onTouchEnd={(e) => {
              if (touchStartX.current === null) return;
              const delta = e.changedTouches[0].clientX - touchStartX.current;
              touchStartX.current = null;
              if (Math.abs(delta) > 50) go(index + (delta < 0 ? 1 : -1));
            }}
          >
            <div
              className="flex transition-transform duration-1000 ease-in-out"
              style={{ transform: `translateX(-${index * 100}%)` }}
            >
              {REVIEWS.map((review, i) => (
                <figure
                  key={i}
                  role="group"
                  aria-roledescription="slide"
                  aria-label={`${i + 1} of ${REVIEWS.length}`}
                  aria-hidden={i !== index}
                  className="w-full shrink-0 px-1 pb-2 pt-8"
                >
                  <div className="relative flex h-full flex-col items-center rounded-3xl border border-black/6 bg-white px-6 pb-8 pt-14 text-center shadow-lg shadow-black/5 sm:px-12">
                    <span
                      className="absolute left-1/2 top-0 flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-brand-orange font-display text-4xl leading-none text-white shadow-lg shadow-brand-orange/30"
                      aria-hidden="true"
                    >
                      <span className="translate-y-1">&ldquo;</span>
                    </span>
                    <Stars />
                    <h3 className="mt-5 font-display text-xl font-medium text-brand-ink sm:text-2xl">
                      {review.headline}
                    </h3>
                    <blockquote className="mt-4 text-sm leading-relaxed text-brand-ink-muted sm:text-base">
                      {review.quote}
                    </blockquote>
                    <figcaption className="mt-6 w-full border-t border-brand-orange/20 pt-5">
                      <span className="block text-sm font-semibold text-brand-ink">{review.name}</span>
                      <span className="block text-xs text-brand-ink-muted">{review.detail}</span>
                    </figcaption>
                  </div>
                </figure>
              ))}
            </div>
          </div>

          <div className="mt-8 flex items-center justify-center gap-5">
            <button type="button" aria-label="Previous review" onClick={() => go(index - 1)} className={buttonClass}>
              <ArrowIcon direction="prev" />
            </button>
            <div className="flex items-center gap-2">
              {REVIEWS.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  aria-label={`Show review ${i + 1}`}
                  aria-current={i === index}
                  onClick={() => setIndex(i)}
                  className={
                    "h-2.5 rounded-full transition-all duration-700 " +
                    (i === index ? "w-8 bg-brand-orange" : "w-2.5 bg-black/15 hover:bg-black/30")
                  }
                />
              ))}
            </div>
            <button type="button" aria-label="Next review" onClick={() => go(index + 1)} className={buttonClass}>
              <ArrowIcon direction="next" />
            </button>
          </div>
        </Reveal>

        <Reveal className="mt-10 text-center lg:mt-12">
          <a
            href="/reviews"
            className="inline-flex items-center gap-2 rounded-full bg-brand-orange px-6 py-3 text-sm font-semibold text-white shadow-md shadow-brand-orange/25 transition-colors hover:bg-brand-orange-dark"
          >
            Read all guest reviews <span aria-hidden="true">→</span>
          </a>
        </Reveal>
      </div>
    </section>
  );
}
