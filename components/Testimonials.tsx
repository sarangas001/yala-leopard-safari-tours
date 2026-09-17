import Reveal from "@/components/Reveal";

// Placeholder quotes — replace with real Google/TripAdvisor reviews before launch.
const REVIEWS = [
  {
    name: "Sample Guest",
    detail: "United Kingdom",
    quote:
      "Add a real guest review here — a short, specific line about the leopard sighting or the guide's knowledge works best.",
  },
  {
    name: "Sample Guest",
    detail: "Germany",
    quote:
      "Add a real guest review here — mention the jeep, the pace of the drive, or how many parks you covered.",
  },
  {
    name: "Sample Guest",
    detail: "Australia",
    quote:
      "Add a real guest review here — pull a strong quote from Google or TripAdvisor once reviews start coming in.",
  },
];

export default function Testimonials() {
  return (
    <section className="w-full bg-brand-cream">
      <div className="mx-auto max-w-[1600px] px-6 py-16 sm:px-10 sm:py-20 lg:px-20 lg:py-24">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-3 text-xs font-medium uppercase tracking-[0.22em] text-brand-orange">
            <span className="h-px w-6 bg-brand-orange/50" aria-hidden="true" />
            Guest Reviews
            <span className="h-px w-6 bg-brand-orange/50" aria-hidden="true" />
          </span>
          <h2 className="mt-4 font-display text-3xl font-medium tracking-tight text-brand-ink sm:text-4xl lg:text-5xl">
            Loved by Travellers Worldwide
          </h2>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-10 sm:grid-cols-3 lg:mt-18 lg:gap-14">
          {REVIEWS.map((review, i) => (
            <Reveal key={i} delay={i * 0.1}>
              <div className="flex h-full flex-col">
                {/* Decorative quotation mark */}
                <span
                  className="font-display text-6xl leading-none text-brand-orange/30 select-none"
                  aria-hidden="true"
                >
                  &ldquo;
                </span>
                {/* Stars */}
                <div className="mt-1 flex gap-0.5 text-brand-orange" aria-label="5 out of 5 stars">
                  {Array.from({ length: 5 }).map((_, star) => (
                    <svg key={star} viewBox="0 0 20 20" fill="currentColor" className="h-3.5 w-3.5">
                      <path d="M10 1.5l2.6 5.4 5.9.7-4.3 4.2 1 5.9L10 14.9l-5.2 2.8 1-5.9-4.3-4.2 5.9-.7L10 1.5Z" />
                    </svg>
                  ))}
                </div>
                <p className="mt-4 flex-1 font-display text-base italic leading-relaxed text-brand-ink sm:text-lg">
                  {review.quote}
                </p>
                <div className="mt-6 flex items-center gap-3 border-t border-black/[0.07] pt-5">
                  <div className="h-9 w-9 rounded-full bg-brand-ink/10 flex items-center justify-center text-sm font-semibold text-brand-ink/40">
                    {review.name.charAt(0)}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-brand-ink">{review.name}</p>
                    <p className="text-xs text-brand-ink-muted">{review.detail}</p>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-12 text-center lg:mt-14">
          <a
            href="#"
            className="text-sm font-semibold text-brand-ink underline decoration-brand-orange decoration-2 underline-offset-4 transition-colors hover:text-brand-orange"
          >
            Read all guest reviews →
          </a>
        </Reveal>
      </div>
    </section>
  );
}
