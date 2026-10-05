import Image from "next/image";
import Reveal from "@/components/Reveal";
import { TRUST_BADGES } from "@/lib/trust-badges";

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
            <a
              key={badge.src}
              href={badge.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${badge.alt} (opens in a new tab)`}
              className="rounded transition-opacity hover:opacity-80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange/40"
            >
              <Image
                src={badge.src}
                alt={badge.alt}
                width={badge.width}
                height={badge.height}
                className="h-16 w-auto sm:h-20"
              />
            </a>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
