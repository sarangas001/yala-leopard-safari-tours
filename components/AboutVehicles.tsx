import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";

export default function AboutVehicles() {
  return (
    <section className="w-full bg-white">
      <div className="mx-auto max-w-[1600px] px-10 py-16 sm:px-20 sm:py-20 lg:px-40 lg:py-24">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <Reveal>
            <div className="relative aspect-4/3 w-full overflow-hidden rounded-3xl shadow-2xl shadow-black/10">
              <Image
                src="/images/new-img/9.jpg"
                alt="Open-top safari jeeps parked on a dirt track in Yala National Park"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                quality={80}
                className="object-cover"
              />
            </div>
          </Reveal>

          <Reveal delay={0.12} className="text-center sm:text-left">
            <h2 className="font-display text-3xl font-medium tracking-tight text-brand-ink sm:text-4xl lg:text-5xl">
              Our Safari Vehicles
            </h2>
            <p className="mx-auto mt-5 max-w-md text-base leading-relaxed text-brand-ink-muted sm:mx-0">
              Every safari runs in an open 4x4 jeep, built to handle
              Yala&apos;s dry-zone tracks while keeping you comfortable for
              the whole drive. Raised, cushioned seating and an open
              sides-and-roof design give everyone a clear, unobstructed view
              of the action — and plenty of room to raise a camera the
              moment a leopard steps into view. Every vehicle in our fleet
              is kept clean, well-maintained and safety-checked before it
              takes you out.
            </p>

            <Link
              href="/safaris"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-brand-orange px-7 py-3.5 text-sm font-semibold text-white shadow-md shadow-brand-orange/25 transition-all hover:bg-brand-orange-dark hover:shadow-lg hover:shadow-brand-orange/30"
            >
              Plan Your Safari
              <span aria-hidden="true">→</span>
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
