import Image from "next/image";
import HeroVideo from "@/components/HeroVideo";
import Reveal from "@/components/Reveal";
import { focalClass, focalStyle } from "@/lib/focal";

export type ParkHeroCta = {
  label: string;
  href: string;
  variant?: "primary" | "whatsapp";
};

export default function ParkHero({
  title,
  description,
  video,
  poster,
  image,
  ctas,
}: {
  title: string;
  description?: string;
  video?: string;
  /** Still shown while (or instead of) the video; required to avoid downloading video on phones. */
  poster?: string;
  image?: string;
  ctas?: ParkHeroCta[];
}) {
  return (
    <>
    <section className="relative w-full overflow-hidden bg-white">
      <div className="absolute inset-0">
        {video && poster ? (
          <HeroVideo src={video} poster={poster} />
        ) : image ? (
          <Image src={image} alt="" fill priority sizes="100vw" quality={80} className={`object-cover ${focalClass(image)}`} style={focalStyle(image)} />
        ) : null}
        <div className="absolute inset-0 bg-linear-to-b from-black/65 via-black/35 to-black/55" />
      </div>

      <div className="relative z-10 mx-auto max-w-[1600px] px-10 pt-32 pb-20 text-center sm:px-20 sm:pt-40 sm:pb-24 lg:flex lg:min-h-185 lg:items-center lg:justify-center lg:px-40 lg:py-0">
        <Reveal className="mx-auto max-w-2xl">
          <h1 className="font-display text-4xl font-medium leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-6xl">
            {title}
          </h1>
          {description ? (
            <p className="mx-auto mt-5 max-w-xl text-sm leading-relaxed text-white/80 sm:text-base">
              {description}
            </p>
          ) : null}

          {ctas && ctas.length > 0 ? (
            <div className="mx-auto mt-8 grid w-fit grid-cols-1 gap-3 sm:auto-cols-fr sm:grid-flow-col">
              {ctas.map((cta) =>
                cta.variant === "whatsapp" ? (
                  <a
                    key={cta.label}
                    href={cta.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-[#25D366] px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-black/20 transition-all hover:bg-[#1EBE5A] hover:shadow-xl"
                  >
                    <Image src="/images/icons/whatsapp-50.png" alt="" aria-hidden="true" width={50} height={50} className="h-6 w-6" />
                    {cta.label}
                  </a>
                ) : (
                  <a
                    key={cta.label}
                    href={cta.href}
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-brand-orange px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-brand-orange/30 transition-all hover:bg-brand-orange-dark hover:shadow-xl hover:shadow-brand-orange/35 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                  >
                    {cta.label}
                    <span aria-hidden="true">→</span>
                  </a>
                )
              )}
            </div>
          ) : null}
        </Reveal>
      </div>
    </section>
    {/* Scroll target for the hero CTAs: the first section below the hero. */}
    <div id="park-content" className="scroll-mt-20" />
    </>
  );
}
