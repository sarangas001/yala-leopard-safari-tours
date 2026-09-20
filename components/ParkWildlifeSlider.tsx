"use client";

import Image from "next/image";
import { useRef } from "react";
import Reveal from "@/components/Reveal";

export type WildlifeAnimal = { name: string; image: string };

function ArrowIcon({ direction }: { direction: "left" | "right" }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" aria-hidden="true">
      {direction === "left" ? (
        <path d="M15 5l-7 7 7 7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      ) : (
        <path d="M9 5l7 7-7 7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      )}
    </svg>
  );
}

export default function ParkWildlifeSlider({
  heading = "Wildlife You May See",
  animals,
}: {
  heading?: string;
  animals: WildlifeAnimal[];
}) {
  const scrollerRef = useRef<HTMLDivElement | null>(null);

  const scrollByCard = (direction: 1 | -1) => {
    const el = scrollerRef.current;
    if (!el) return;
    const card = el.querySelector<HTMLElement>("[data-card]");
    const amount = card ? card.offsetWidth + 24 : el.clientWidth * 0.8;
    el.scrollBy({ left: amount * direction, behavior: "smooth" });
  };

  return (
    <section className="w-full bg-white">
      <div className="mx-auto max-w-[1600px] px-10 py-12 sm:px-20 sm:py-16 lg:px-40 lg:py-20">
        <div className="flex items-end justify-between gap-6">
          <Reveal>
            <h2 className="font-display text-3xl font-medium tracking-tight text-brand-ink sm:text-4xl lg:text-5xl">
              {heading}
            </h2>
          </Reveal>
          <div className="hidden shrink-0 gap-3 sm:flex">
            <button
              type="button"
              onClick={() => scrollByCard(-1)}
              aria-label="Scroll to previous animal"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-black/10 text-brand-ink transition-colors hover:bg-sand"
            >
              <ArrowIcon direction="left" />
            </button>
            <button
              type="button"
              onClick={() => scrollByCard(1)}
              aria-label="Scroll to next animal"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-black/10 text-brand-ink transition-colors hover:bg-sand"
            >
              <ArrowIcon direction="right" />
            </button>
          </div>
        </div>

        <div
          ref={scrollerRef}
          className="mt-10 flex snap-x snap-mandatory gap-6 overflow-x-auto scroll-smooth pb-4 lg:mt-14 scrollbar-none"
        >
          {animals.map((animal, i) => (
            <div key={animal.name} data-card className="group w-64 shrink-0 snap-start sm:w-72">
              <div className="flex h-full flex-col overflow-hidden rounded-3xl border border-black/6 bg-white shadow-sm transition-shadow duration-300 group-hover:shadow-md">
                <div className="relative aspect-4/3 w-full overflow-hidden">
                  <Image
                    src={animal.image}
                    alt={animal.name}
                    fill
                    priority={i === 0}
                    sizes="(min-width: 640px) 288px, 256px"
                    quality={75}
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="p-5">
                  <h3 className="font-display text-lg font-medium text-brand-ink">{animal.name}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-2 flex justify-center gap-3 sm:hidden">
          <button
            type="button"
            onClick={() => scrollByCard(-1)}
            aria-label="Scroll to previous animal"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-black/10 text-brand-ink transition-colors hover:bg-sand"
          >
            <ArrowIcon direction="left" />
          </button>
          <button
            type="button"
            onClick={() => scrollByCard(1)}
            aria-label="Scroll to next animal"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-black/10 text-brand-ink transition-colors hover:bg-sand"
          >
            <ArrowIcon direction="right" />
          </button>
        </div>
      </div>
    </section>
  );
}
