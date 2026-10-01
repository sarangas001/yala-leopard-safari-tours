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
    <section className="relative w-full overflow-hidden bg-white">
      {/* Deer illustration — right-aligned decorative graphic */}
      <div
        className="pointer-events-none absolute -top-10 -right-8 z-0 hidden select-none lg:block"
        aria-hidden="true"
      >
        <Image
          src="/images/parks/deer.png"
          alt=""
          width={400}
          height={500}
          quality={90}
          style={{ width: "340px", height: "auto", opacity: 0.92 }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-[1600px] px-10 py-[1.5cm] sm:px-20 sm:py-[1.5cm] lg:px-40 lg:py-[2.5cm]">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-medium tracking-tight text-brand-ink sm:text-4xl lg:text-5xl">
            Trusted by Travelers
          </h2>
          <p className="mt-4 text-base leading-relaxed text-brand-ink-muted">
            We collect and share feedback from guests across every platform we&apos;re listed on. Ratings and review counts shown on these platforms update in real time, visit them directly for the most current numbers.
          </p>
        </Reveal>

        <Reveal still delay={0.1} className="mt-12 flex flex-wrap items-center justify-center gap-10 sm:gap-12">
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
