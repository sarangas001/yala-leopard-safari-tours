import Image from "next/image";
import Reveal from "@/components/Reveal";

export default function PageHero({
  eyebrow,
  title,
  description,
  image,
  alt,
  cta,
  compact = false,
  imageClassName = "object-right",
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  image: string;
  alt: string;
  cta?: { label: string; href: string };
  /** Shorter hero for transactional pages (booking, checkout). */
  compact?: boolean;
  /** Tailwind object-position class for the background image. */
  imageClassName?: string;
}) {
  return (
    <section className="relative w-full overflow-hidden bg-white">
      <div className="absolute inset-0">
        <Image src={image} alt={alt} fill priority sizes="100vw" quality={75} className={"object-cover " + imageClassName} />
        <div className="absolute inset-0 bg-linear-to-b from-black/65 via-black/35 to-black/45" />
      </div>

      <div
        className={
          "relative z-10 mx-auto max-w-[1600px] px-10 pt-32 pb-20 text-center sm:px-20 sm:pt-40 sm:pb-24 lg:flex lg:items-center lg:justify-center lg:px-40 lg:py-0 " +
          (compact ? "lg:min-h-120" : "lg:min-h-185")
        }
      >
        <Reveal className="mx-auto max-w-2xl">
          {eyebrow ? (
            <span className="mb-4 inline-flex items-center gap-3 text-xs font-medium uppercase tracking-[0.22em] text-white/80">
              <span className="h-px w-6 bg-white/50" aria-hidden="true" />
              {eyebrow}
              <span className="h-px w-6 bg-white/50" aria-hidden="true" />
            </span>
          ) : null}
          <h1 className="font-display text-4xl font-medium leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-6xl">
            {title}
          </h1>
          {description ? (
            <p className="mx-auto mt-5 max-w-xl text-sm leading-relaxed text-white/80 sm:text-base">
              {description}
            </p>
          ) : null}
          {cta ? (
            <a
              href={cta.href}
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-brand-orange px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-brand-orange/30 transition-all hover:bg-brand-orange-dark hover:shadow-xl hover:shadow-brand-orange/35 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              {cta.label}
              <span aria-hidden="true">→</span>
            </a>
          ) : null}
        </Reveal>
      </div>
    </section>
  );
}
