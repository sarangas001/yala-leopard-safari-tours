import Image from "next/image";
import Reveal from "@/components/Reveal";

const INCLUSIONS = [
  "Hotel pickup/drop-off in applicable areas",
  "4x4 safari jeep",
  "Experienced English-speaking wildlife driver",
  "Drinking water",
  "Breakfast",
  "Lunch on applicable full-day packages",
  "Binoculars where provided",
  "Park entrance ticket support/add-on",
];

function CheckIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <circle cx="12" cy="12" r="9.5" stroke="currentColor" strokeWidth="1.5" />
      <path d="m8 12.3 2.6 2.6 5.4-5.8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function SafariInclusions() {
  return (
    <section className="w-full bg-white">
      <div className="mx-auto max-w-[1600px] px-10 py-16 sm:px-20 sm:py-20 lg:px-40 lg:py-24">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <Reveal>
            <div className="relative aspect-3/2 w-full max-w-lg overflow-hidden rounded-3xl mx-auto lg:mx-0">
              <Image
                src="/images/scenic/guide-jeep.jpg"
                alt="A safari guide beside jeeps parked on a dirt track in Yala National Park"
                fill
                sizes="(min-width: 1024px) 40vw, 100vw"
                quality={80}
                className="object-cover"
              />
            </div>
          </Reveal>

          <Reveal delay={0.12} className="text-center sm:text-left">
            <h2 className="font-display text-3xl font-medium tracking-tight text-brand-ink sm:text-4xl lg:text-5xl">
              What Our Safari Experience Can Include
            </h2>
            <p className="mx-auto mt-4 max-w-md text-base leading-relaxed text-brand-ink-muted sm:mx-0">
              Depending on the selected package:
            </p>

            <ul className="mx-auto mt-6 max-w-md space-y-3 sm:mx-0">
              {INCLUSIONS.map((item) => (
                <li key={item} className="flex items-start gap-3 text-left">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-orange/10 text-brand-orange">
                    <CheckIcon className="h-3.5 w-3.5" />
                  </span>
                  <span className="text-sm leading-relaxed text-brand-ink-muted">{item}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
