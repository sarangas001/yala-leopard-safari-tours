"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import GoogleReviewCard from "@/components/GoogleReviewCard";
import type { GoogleReview } from "@/lib/google-reviews";

// Shows 3 reviews at a time on desktop (2 on tablets, 1 on phones) and slides
// one review per click. Uses native scroll-snap, so swipe works on touch too.
export default function GoogleReviewsSlider({ reviews }: { reviews: GoogleReview[] }) {
  const trackRef = useRef<HTMLDivElement | null>(null);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(false);

  const update = useCallback(() => {
    const el = trackRef.current;
    if (!el) return;
    setCanPrev(el.scrollLeft > 4);
    setCanNext(el.scrollLeft + el.clientWidth < el.scrollWidth - 4);
  }, []);

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    update();
    el.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      el.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, [update, reviews.length]);

  const slide = (dir: 1 | -1) => {
    const el = trackRef.current;
    const first = el?.firstElementChild as HTMLElement | null;
    if (!el || !first) return;
    const gap = parseFloat(getComputedStyle(el).columnGap) || 0;
    el.scrollBy({ left: dir * (first.offsetWidth + gap), behavior: "smooth" });
  };

  const arrow =
    "absolute top-1/2 z-10 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white text-brand-ink shadow-lg ring-1 ring-black/10 transition hover:bg-brand-orange hover:text-white disabled:pointer-events-none disabled:opacity-0 sm:flex";

  return (
    <div className="relative" role="region" aria-roledescription="carousel" aria-label="Google reviews">
      <div
        ref={trackRef}
        className="flex snap-x snap-mandatory items-start gap-5 overflow-x-auto scroll-smooth pb-2 [scrollbar-none] [&::-webkit-scrollbar]:hidden"
      >
        {reviews.map((review) => (
          <div
            key={`${review.name}-${review.date}`}
            className="w-full shrink-0 snap-start md:w-[calc((100%-1.25rem)/2)] lg:w-[calc((100%-2.5rem)/3)]"
          >
            <GoogleReviewCard review={review} />
          </div>
        ))}
      </div>

      <button
        type="button"
        onClick={() => slide(-1)}
        disabled={!canPrev}
        aria-label="Previous reviews"
        className={`${arrow} -left-5 lg:-left-6`}
      >
        <span aria-hidden="true">←</span>
      </button>
      <button
        type="button"
        onClick={() => slide(1)}
        disabled={!canNext}
        aria-label="Next reviews"
        className={`${arrow} -right-5 lg:-right-6`}
      >
        <span aria-hidden="true">→</span>
      </button>
    </div>
  );
}
