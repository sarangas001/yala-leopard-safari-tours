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
    <section className="w-full bg-[#faf9f7]">
      <div className="mx-auto max-w-[1600px] px-6 py-16 sm:px-10 sm:py-20 lg:px-20 lg:py-24">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-medium uppercase tracking-[0.2em] text-brand-orange">
            Guest Reviews
          </span>
          <h2 className="mt-3 font-display text-3xl font-medium tracking-tight text-brand-ink sm:text-4xl lg:text-5xl">
            Loved by Travelers from Around the World
          </h2>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-3 lg:mt-16">
          {REVIEWS.map((review, i) => (
            <Reveal key={i} delay={i * 0.1}>
              <div className="h-full rounded-2xl bg-white p-6 shadow-[0_1px_2px_rgba(0,0,0,0.04)]">
                <div className="flex gap-0.5 text-brand-orange" aria-hidden="true">
                  {Array.from({ length: 5 }).map((_, star) => (
                    <svg key={star} viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4">
                      <path d="M10 1.5l2.6 5.4 5.9.7-4.3 4.2 1 5.9L10 14.9l-5.2 2.8 1-5.9-4.3-4.2 5.9-.7L10 1.5Z" />
                    </svg>
                  ))}
                </div>
                <p className="mt-4 text-sm leading-relaxed text-brand-ink-muted italic">
                  &ldquo;{review.quote}&rdquo;
                </p>
                <p className="mt-4 text-sm font-semibold text-brand-ink">
                  {review.name}
                  <span className="font-normal text-brand-ink-muted"> — {review.detail}</span>
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-10 text-center lg:mt-12">
          <a
            href="#"
            className="text-sm font-semibold text-brand-ink underline decoration-brand-orange decoration-2 underline-offset-4"
          >
            Read Guest Reviews →
          </a>
        </Reveal>
      </div>
    </section>
  );
}
