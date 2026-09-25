import Image from "next/image";
import Reveal from "@/components/Reveal";

export default function SafariInclusions() {
  return (
    <section className="w-full bg-white">
      <div className="mx-auto max-w-[1600px] px-10 py-16 sm:px-20 sm:py-20 lg:px-40 lg:py-24">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <Reveal>
            <div className="relative aspect-3/2 w-full max-w-lg overflow-hidden rounded-3xl mx-auto lg:mx-0">
              <Image
                src="/images/new-img/12.jpg"
                alt="A safari guide beside jeeps parked on a dirt track in Yala National Park"
                fill
                sizes="(min-width: 1024px) 40vw, 100vw"
                quality={80}
                className="object-cover"
              />
            </div>
          </Reveal>

          <Reveal delay={0.12} className="text-center sm:text-left">
            <h2 className="font-display text-3xl font-medium tracking-tight text-brand-ink sm:text-4xl lg:text-5xl">
              What Our Safari Experience Can Include
            </h2>
            <p className="mx-auto mt-4 max-w-md text-base leading-relaxed text-brand-ink-muted sm:mx-0">
              Depending on the selected package, your safari can include hotel
              pickup and drop-off in applicable areas, a 4x4 safari jeep and an
              experienced English-speaking wildlife driver, plus drinking
              water and breakfast to start the day. Full-day packages also
              include lunch, and binoculars are provided where available. We
              can further support or add on park entrance tickets as part of
              your booking.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
