import Image from "next/image";
import Reveal from "@/components/Reveal";
import { focalClass, focalStyle } from "@/lib/focal";

export default function SafariInclusions() {
  return (
    <section className="relative w-full overflow-hidden bg-white">
      {/* Leopard illustration — right-aligned decorative graphic */}
      <div
        className="pointer-events-none absolute -top-10 -right-8 z-0 hidden select-none lg:block"
        aria-hidden="true"
      >
        <Image
          src="/images/parks/leopard.png"
          alt=""
          width={400}
          height={500}
          quality={90}
          style={{ width: "380px", height: "auto", opacity: 0.92 }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-[1600px] px-10 py-[1.5cm] sm:px-20 sm:py-[1.5cm] lg:px-40 lg:py-[2.5cm]">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <Reveal>
            <div className="relative aspect-3/2 w-full max-w-lg overflow-hidden rounded-3xl mx-auto lg:mx-0">
              <Image
                src="/images/new-img/12.jpg"
                alt="A safari driver beside jeeps parked on a dirt track in Yala National Park"
                fill
                sizes="(min-width: 1024px) 40vw, 100vw"
                quality={80}
                className={`object-cover ${focalClass("/images/new-img/12.jpg")}`}
                style={focalStyle("/images/new-img/12.jpg")}
              />
            </div>
          </Reveal>

          <Reveal delay={0.12} className="text-center lg:text-left">
            <h2 className="font-display text-3xl font-medium tracking-tight text-brand-ink sm:text-4xl lg:text-5xl">
              What Our Safari Experience Can Include
            </h2>
            <p className="mx-auto mt-4 max-w-md text-base leading-relaxed text-brand-ink-muted lg:mx-0">
              Depending on the selected package, your safari can include hotel
              pickup and drop-off in applicable areas, a 4x4 safari jeep and an
              experienced English-speaking wildlife driver, plus drinking
              water, and binoculars are provided where available. We
              can further support or add on park entrance tickets as part of
              your booking.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
