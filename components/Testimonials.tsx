import Image from "next/image";
import Reveal from "@/components/Reveal";

// Placeholder quotes — replace with real Google/TripAdvisor reviews before launch.
const REVIEWS = [
  {
    name: "Sample Guest",
    detail: "United Kingdom",
    headline: "Add a short, punchy headline here",
    quote:
      "Add a real guest review here — a short, specific line about the leopard sighting or the guide's knowledge works best. Mention how many parks you visited, how the guide spotted wildlife other jeeps drove straight past, and how the whole day felt paced rather than rushed.",
  },
  {
    name: "Sample Guest",
    detail: "Germany",
    headline: "Add a short, punchy headline here",
    quote:
      "Add a real guest review here — mention the jeep, the pace of the drive, or how many parks you covered. A note on the early pickup, the guide's local knowledge, or a specific animal encounter (elephants at the waterhole, a leopard on a rock) makes the quote feel real and specific.",
  },
  {
    name: "Sample Guest",
    detail: "Australia",
    headline: "Add a short, punchy headline here",
    quote:
      "Add a real guest review here — pull a strong quote from Google or TripAdvisor once reviews start coming in. The best quotes describe a specific moment — a close leopard sighting, a knowledgeable guide, or a small-group experience that felt personal rather than rushed.",
  },
];

export default function Testimonials() {
  return (
    <section className="relative w-full overflow-hidden bg-white">
      {/* Scenic background image, framed by its own soft cloud fade.
          Rendered at its natural aspect ratio (never stretched taller than
          the section) so it's only ever scaled down, not upscaled — upscaling
          a wide, comparatively low-resolution source with object-cover is
          what caused the blurry/pixelated look on tall mobile layouts. */}
        <Image
          src="/images/scenic/review-bg.png"
          alt=""
          fill
          aria-hidden="true"
          sizes="100vw"
          quality={85}
          className="object-cover"
        />
      {/* <div className="absolute inset-x-0 top-0" aria-hidden="true">
        <div className="absolute inset-0 bg-white/10" />
      </div> */}

      <div className="relative z-10 mx-auto max-w-[1600px] px-10 py-16 sm:px-20 sm:py-20 lg:px-40 lg:py-24">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-medium tracking-tight text-brand-ink sm:text-4xl lg:text-5xl">
            Don&apos;t take our word for it
          </h2>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-3 lg:mt-18 lg:gap-10">
          {REVIEWS.map((review, i) => (
            <Reveal key={i} delay={i * 0.1}>
              <div className="flex h-full flex-col items-center rounded-2xl bg-white/90 p-8 text-center shadow-xl shadow-black/5">
                <h3 className="font-display text-lg font-medium text-brand-ink">
                  {review.headline}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-brand-ink-muted sm:text-base">
                  {review.quote}
                </p>

                <div className="mt-6 border-t border-black/[0.07] pt-5">
                  <p className="text-sm font-semibold text-brand-ink">{review.name}</p>
                  <p className="text-xs text-brand-ink-muted">{review.detail}</p>
                  {/* Stars */}
                  <div className="mt-2 flex justify-center gap-0.5 text-brand-orange" aria-label="5 out of 5 stars">
                    {Array.from({ length: 5 }).map((_, star) => (
                      <svg key={star} viewBox="0 0 20 20" fill="currentColor" className="h-3.5 w-3.5">
                        <path d="M10 1.5l2.6 5.4 5.9.7-4.3 4.2 1 5.9L10 14.9l-5.2 2.8 1-5.9-4.3-4.2 5.9-.7L10 1.5Z" />
                      </svg>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-12 text-center lg:mt-14">
          <a
            href="#"
            className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-brand-ink shadow-md shadow-black/5 transition-colors hover:text-brand-orange"
          >
            Read all guest reviews →
          </a>
        </Reveal>
      </div>
    </section>
  );
}
