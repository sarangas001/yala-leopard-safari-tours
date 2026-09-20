import Image from "next/image";
import Reveal from "@/components/Reveal";

// Sample placeholder artwork, matching the same badges used in TrustSummary
// and the Footer — swap for genuine embedded review widgets once approved.
const PRIMARY_SOURCES = [
  { src: "/images/trust/google-reviews.svg", alt: "Google reviews badge (sample)" },
  { src: "/images/trust/tripadvisor-reviews.svg", alt: "TripAdvisor reviews badge (sample)" },
];

export default function ReviewsSources() {
  return (
    <section className="w-full bg-white">
      <div className="mx-auto max-w-[1600px] px-10 py-16 sm:px-20 sm:py-20 lg:px-40 lg:py-24">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-medium tracking-tight text-brand-ink sm:text-4xl lg:text-5xl">
            Where Our Reviews Come From
          </h2>
          <p className="mt-4 text-base leading-relaxed text-brand-ink-muted">
            We feature approved reviews from the platforms our guests use most, alongside feedback shared directly with us.
          </p>
        </Reveal>

        <Reveal delay={0.1} className="mt-12 flex flex-wrap items-center justify-center gap-10 sm:gap-12">
          {PRIMARY_SOURCES.map((source) => (
            <Image
              key={source.src}
              src={source.src}
              alt={source.alt}
              width={360}
              height={300}
              className="h-16 w-auto sm:h-20"
            />
          ))}
        </Reveal>

        <Reveal delay={0.15} className="mx-auto mt-8 max-w-xl text-center">
          <p className="text-sm leading-relaxed text-brand-ink-muted">
            You can also find guest feedback on GetYourGuide, Airbnb Experiences and Facebook.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
