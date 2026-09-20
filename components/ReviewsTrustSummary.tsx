import Image from "next/image";
import Reveal from "@/components/Reveal";

// Sample placeholder artwork — swap for genuine platform badges this
// business has actually verified before launch. Deliberately not paired
// with a star rating or review count here: those numbers live on the
// platforms themselves and would go stale without a process to keep them
// updated, so we link out rather than publish a number we can't maintain.
const TRUST_BADGES = [
  { src: "/images/trust/google-reviews.svg", alt: "Google reviews badge (sample)" },
  { src: "/images/trust/tripadvisor-reviews.svg", alt: "TripAdvisor reviews badge (sample)" },
];

export default function ReviewsTrustSummary() {
  return (
    <section className="w-full bg-white">
      <div className="mx-auto max-w-[1600px] px-10 py-16 sm:px-20 sm:py-20 lg:px-40 lg:py-24">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-medium tracking-tight text-brand-ink sm:text-4xl lg:text-5xl">
            Trusted by Travelers
          </h2>
          <p className="mt-4 text-base leading-relaxed text-brand-ink-muted">
            We collect and share feedback from guests across every platform we&apos;re listed on. Ratings and review counts shown on these platforms update in real time — visit them directly for the most current numbers.
          </p>
        </Reveal>

        <Reveal delay={0.1} className="mt-12 flex flex-wrap items-center justify-center gap-10 sm:gap-12">
          {TRUST_BADGES.map((badge) => (
            <Image
              key={badge.src}
              src={badge.src}
              alt={badge.alt}
              width={360}
              height={300}
              className="h-16 w-auto sm:h-20"
            />
          ))}
        </Reveal>
      </div>
    </section>
  );
}
