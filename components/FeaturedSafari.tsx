import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";

const DURATIONS = ["Half Day", "7 Hours", "Full Day"];

export default function FeaturedSafari() {
  return (
    <section className="w-full bg-white">
      <div className="mx-auto max-w-[1600px] px-5 py-16 sm:px-8 sm:py-20 lg:px-14 lg:py-24">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <div className="relative aspect-4/3 w-full overflow-hidden rounded-tl-3xl rounded-tr-[5rem] rounded-br-3xl rounded-bl-[5rem]">
              <Image
                src="/images/scenic/safari-jeeps.jpg"
                alt="Safari jeep convoy in Yala National Park"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                quality={75}
                className="object-cover"
              />
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <span className="text-sm font-medium uppercase tracking-[0.2em] text-brand-orange">
              Featured Safari
            </span>
            <h2 className="mt-3 font-display text-3xl font-medium tracking-tight text-brand-ink sm:text-4xl lg:text-5xl">
              The Yala Leopard Safari
            </h2>
            <p className="mt-5 max-w-lg text-base leading-relaxed text-brand-ink-muted sm:text-lg">
              Yala holds the highest density of leopards on earth. Our flagship
              safari puts you in an open 4x4 jeep with a spotting-focused local
              guide, tracking leopards, elephants and more across the dry-zone
              scrub and open plains that made this park famous.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              {DURATIONS.map((d) => (
                <span
                  key={d}
                  className="rounded-full border border-brand-orange/30 bg-brand-orange/5 px-4 py-2 text-sm font-medium text-brand-ink"
                >
                  {d}
                </span>
              ))}
            </div>

            <Link
              href="/#park-yala"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-brand-orange px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-brand-orange-dark"
            >
              View Yala Safari Packages
              <span aria-hidden="true">→</span>
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
