"use client";

import { useState } from "react";
import Reveal from "@/components/Reveal";

type SafariType = "yala" | "udawalawe" | "bundala" | "hambantota" | "transport";

type GuestStory = {
  name: string;
  country: string;
  safariType: SafariType;
  rating: number;
  excerpt: string;
  date: string;
  source: string;
};

// Placeholder cards — replace every entry with a real, approved guest
// review before launch. Do not edit a guest's words or invent a quote;
// each field below is instructional filler describing what to paste in,
// not a real testimonial. Mirrors the same placeholder convention used
// in Testimonials.tsx.
const STORIES: GuestStory[] = [
  {
    name: "Sample Guest",
    country: "United Kingdom",
    safariType: "yala",
    rating: 5,
    excerpt: "Add a real, approved Yala review here — a specific moment (a leopard sighting, the guide's knowledge) reads best.",
    date: "Add review date",
    source: "Add source (Google, TripAdvisor, Direct, etc.)",
  },
  {
    name: "Sample Guest",
    country: "Germany",
    safariType: "udawalawe",
    rating: 5,
    excerpt: "Add a real, approved Udawalawe review here — mention the elephant herds or the pace of the drive.",
    date: "Add review date",
    source: "Add source (Google, TripAdvisor, Direct, etc.)",
  },
  {
    name: "Sample Guest",
    country: "Australia",
    safariType: "bundala",
    rating: 5,
    excerpt: "Add a real, approved Bundala review here — birdlife, lagoons or a quieter alternative to Yala works well.",
    date: "Add review date",
    source: "Add source (Google, TripAdvisor, Direct, etc.)",
  },
  {
    name: "Sample Guest",
    country: "France",
    safariType: "hambantota",
    rating: 5,
    excerpt: "Add a real, approved review here from a cruise passenger who booked the Hambantota Port to Yala safari.",
    date: "Add review date",
    source: "Add source (Google, TripAdvisor, Direct, etc.)",
  },
  {
    name: "Sample Guest",
    country: "Netherlands",
    safariType: "transport",
    rating: 5,
    excerpt: "Add a real, approved review here about an airport transfer or private car/taxi booking.",
    date: "Add review date",
    source: "Add source (Google, TripAdvisor, Direct, etc.)",
  },
];

const FILTERS: { key: SafariType | "all"; label: string }[] = [
  { key: "all", label: "All Reviews" },
  { key: "yala", label: "Yala" },
  { key: "udawalawe", label: "Udawalawe" },
  { key: "bundala", label: "Bundala" },
  { key: "hambantota", label: "Hambantota / Cruise Safari" },
  { key: "transport", label: "Transport" },
];

function StarRow({ rating }: { rating: number }) {
  return (
    <div className="flex justify-center gap-0.5 text-brand-orange" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          viewBox="0 0 20 20"
          fill={i < rating ? "currentColor" : "none"}
          stroke="currentColor"
          strokeWidth={i < rating ? 0 : 1.2}
          className="h-3.5 w-3.5"
        >
          <path d="M10 1.5l2.6 5.4 5.9.7-4.3 4.2 1 5.9L10 14.9l-5.2 2.8 1-5.9-4.3-4.2 5.9-.7L10 1.5Z" />
        </svg>
      ))}
    </div>
  );
}

export default function ReviewsGuestStories() {
  const [active, setActive] = useState<SafariType | "all">("all");
  const filtered = active === "all" ? STORIES : STORIES.filter((s) => s.safariType === active);

  return (
    <section className="w-full bg-white">
      <div className="mx-auto max-w-[1600px] px-10 py-16 sm:px-20 sm:py-20 lg:px-40 lg:py-24">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-medium tracking-tight text-brand-ink sm:text-4xl lg:text-5xl">
            Featured Guest Stories
          </h2>
          <p className="mt-4 text-base leading-relaxed text-brand-ink-muted">
            Approved reviews from guests across every safari and service we offer — filter by the experience you&apos;re curious about.
          </p>
        </Reveal>

        <Reveal delay={0.1} className="mt-10 flex flex-wrap items-center justify-center gap-3">
          <div role="tablist" aria-label="Filter reviews by safari" className="flex flex-wrap items-center justify-center gap-3">
            {FILTERS.map((filter) => {
              const isActive = active === filter.key;
              return (
                <button
                  key={filter.key}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setActive(filter.key)}
                  className={
                    "rounded-full px-5 py-2.5 text-sm font-medium transition-colors " +
                    (isActive
                      ? "bg-brand-orange text-white shadow-md shadow-brand-orange/25"
                      : "bg-brand-cream text-brand-ink-muted hover:bg-brand-orange/10 hover:text-brand-ink")
                  }
                >
                  {filter.label}
                </button>
              );
            })}
          </div>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:mt-14 lg:grid-cols-3 lg:gap-10">
          {filtered.map((story, i) => (
            <Reveal key={`${story.name}-${i}`} delay={(i % 3) * 0.1}>
              <div className="flex h-full flex-col items-center rounded-2xl border border-black/6 bg-white p-8 text-center shadow-sm">
                <StarRow rating={story.rating} />
                <p className="mt-3 flex-1 text-sm leading-relaxed text-brand-ink-muted">{story.excerpt}</p>

                <div className="mt-6 w-full border-t border-black/[0.07] pt-5">
                  <p className="text-sm font-semibold text-brand-ink">{story.name}</p>
                  <p className="text-xs text-brand-ink-muted">{story.country}</p>
                  <p className="mt-1 text-xs text-brand-ink-muted/70">
                    {story.date} · {story.source}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
