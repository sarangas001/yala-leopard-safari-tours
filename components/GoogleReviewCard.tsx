"use client";

import { useState } from "react";
import type { GoogleReview } from "@/lib/google-reviews";

const COLLAPSED_CHARS = 200;
const AVATAR_COLORS = ["#8d6e63", "#5c6bc0", "#00897b", "#c2185b", "#6d4c41", "#455a64"];

function GoogleG({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" className={className} aria-hidden="true">
      <path fill="#FFC107" d="M43.6 20.1H42V20H24v8h11.3C33.7 32.7 29.2 36 24 36c-6.6 0-12-5.4-12-12s5.4-12 12-12c3.1 0 5.8 1.2 8 3l5.7-5.7C34 6.1 29.3 4 24 4 13 4 4 13 4 24s9 20 20 20 20-9 20-20c0-1.3-.1-2.6-.4-3.9z" />
      <path fill="#FF3D00" d="M6.3 14.7l6.6 4.8C14.7 15.1 19 12 24 12c3.1 0 5.8 1.2 8 3l5.7-5.7C34 6.1 29.3 4 24 4 16.3 4 9.7 8.3 6.3 14.7z" />
      <path fill="#4CAF50" d="M24 44c5.2 0 9.9-2 13.4-5.2l-6.2-5.2C29.2 35.1 26.7 36 24 36c-5.2 0-9.6-3.3-11.3-8l-6.5 5C9.5 39.6 16.2 44 24 44z" />
      <path fill="#1976D2" d="M43.6 20.1H42V20H24v8h11.3c-.8 2.2-2.2 4.2-4.1 5.6l6.2 5.2C37 39.2 44 34 44 24c0-1.3-.1-2.6-.4-3.9z" />
    </svg>
  );
}

function Stars({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5" role="img" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }, (_, i) => (
        <svg
          key={i}
          viewBox="0 0 24 24"
          className={`h-5 w-5 ${i < rating ? "text-[#fbbc04]" : "text-black/15"}`}
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  );
}

export default function GoogleReviewCard({ review }: { review: GoogleReview }) {
  const [expanded, setExpanded] = useState(false);
  const isLong = review.text.length > COLLAPSED_CHARS;
  const shown =
    isLong && !expanded ? `${review.text.slice(0, COLLAPSED_CHARS).trimEnd()}…` : review.text;
  const color = AVATAR_COLORS[review.name.charCodeAt(0) % AVATAR_COLORS.length];

  return (
    <article className="rounded-2xl bg-[#f3f4f8] p-5 sm:p-6">
      <header className="flex items-center gap-3">
        <div className="relative shrink-0">
          {review.avatar ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={review.avatar} alt="" className="h-12 w-12 rounded-full object-cover" />
          ) : (
            <span
              className="flex h-12 w-12 items-center justify-center rounded-full text-xl font-medium text-white"
              style={{ backgroundColor: color }}
              aria-hidden="true"
            >
              {review.name.charAt(0).toUpperCase()}
            </span>
          )}
          <span className="absolute -bottom-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-white shadow">
            <GoogleG className="h-3.5 w-3.5" />
          </span>
        </div>
        <div className="min-w-0">
          <p className="flex items-center gap-1.5 font-semibold text-brand-ink">
            <span className="truncate">{review.name}</span>
            <svg viewBox="0 0 24 24" className="h-4 w-4 shrink-0 text-[#1a73e8]" aria-label="Verified" role="img">
              <path
                fill="currentColor"
                d="M23 12l-2.44-2.79.34-3.69-3.61-.82-1.89-3.2L12 2.96 8.6 1.5 6.71 4.69 3.1 5.5l.34 3.7L1 12l2.44 2.79-.34 3.7 3.61.82L8.6 22.5l3.4-1.47 3.4 1.46 1.89-3.19 3.61-.82-.34-3.69L23 12zm-12.91 4.72l-3.8-3.81 1.48-1.48 2.32 2.33 5.85-5.87 1.48 1.48-7.33 7.35z"
              />
            </svg>
          </p>
          <p className="text-sm text-brand-ink-muted">{review.date}</p>
        </div>
      </header>

      <div className="mt-4">
        <Stars rating={review.rating} />
      </div>

      <p className="mt-3 whitespace-pre-line text-[15px] leading-relaxed text-brand-ink">{shown}</p>

      {isLong ? (
        <button
          type="button"
          onClick={() => setExpanded((v) => !v)}
          aria-expanded={expanded}
          className="mt-1 text-[15px] font-medium text-[#1a73e8] hover:underline"
        >
          {expanded ? "Show less" : "Read more"}
        </button>
      ) : null}
    </article>
  );
}
