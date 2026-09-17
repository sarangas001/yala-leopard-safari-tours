import Image from "next/image";
import Reveal from "@/components/Reveal";

const DURATIONS = ["Half Day", "7 Hours", "Full Day"];

export default function FeaturedSafari() {
  return (
    <section className="w-full bg-brand-cream">
      <div className="mx-auto max-w-[1600px] px-6 py-16 sm:px-10 sm:py-20 lg:px-20 lg:py-24">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <Reveal>
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl shadow-2xl shadow-black/10">
              <Image
                src="/images/scenic/safari-jeeps.jpg"
                alt="Safari jeep convoy in Yala National Park"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                quality={80}
                className="object-cover"
              />
            </div>
          </Reveal>

          <Reveal delay={0.12}>
            <span className="inline-flex items-center gap-3 text-xs font-medium uppercase tracking-[0.22em] text-brand-orange">
              <span className="h-px w-6 bg-brand-orange/50" aria-hidden="true" />
              Featured Safari
            </span>
            <h2 className="mt-4 font-display text-3xl font-medium tracking-tight text-brand-ink sm:text-4xl lg:text-5xl">
              The Yala Leopard Safari
            </h2>
            <p className="mt-5 max-w-md text-base leading-relaxed text-brand-ink-muted">
              Yala holds the highest density of leopards on earth. Our flagship
              safari puts you in an open 4x4 jeep with a spotting-focused local
              guide, tracking leopards, elephants and more across the dry-zone
              scrub and open plains that made this park world-famous.
            </p>

            <div className="mt-7 flex flex-wrap gap-2.5">
              {DURATIONS.map((d) => (
                <span
                  key={d}
                  className="rounded-full border border-brand-orange/25 bg-white px-4 py-1.5 text-sm font-medium text-brand-ink"
                >
                  {d}
                </span>
              ))}
            </div>

            {/* eslint-disable-next-line @next/next/no-html-link-for-pages -- same-page anchor, smooth-scrolled by SmoothScroll's hash handler */}
            <a
              href="/#park-yala"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-brand-orange px-7 py-3.5 text-sm font-semibold text-white shadow-md shadow-brand-orange/25 transition-all hover:bg-brand-orange-dark hover:shadow-lg hover:shadow-brand-orange/30"
            >
              View Yala Safari Packages
              <span aria-hidden="true" className="transition-transform duration-200 group-hover:translate-x-0.5">→</span>
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
