import Image from "next/image";
import Reveal from "@/components/Reveal";

const STATS = [
  { value: "36+", label: "Years guiding" },
  { value: "3", label: "Parks covered" },
  { value: "1,000+", label: "Guests hosted" },
];

export default function AboutPreview() {
  return (
    <section id="about" className="w-full bg-white">
      <div className="mx-auto max-w-[1600px] px-6 py-16 sm:px-10 sm:py-20 lg:px-20 lg:py-24">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <Reveal className="lg:order-2">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl shadow-2xl shadow-black/10">
              <Image
                src="/images/scenic/guide-jeep.jpg"
                alt="Safari guide and jeep in Yala National Park"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                quality={80}
                className="object-cover"
              />
            </div>
          </Reveal>

          <Reveal delay={0.12} className="lg:order-1">
            <span className="inline-flex items-center gap-3 text-xs font-medium uppercase tracking-[0.22em] text-brand-orange">
              <span className="h-px w-6 bg-brand-orange/50" aria-hidden="true" />
              About Us
            </span>
            <h2 className="mt-4 font-display text-3xl font-medium tracking-tight text-brand-ink sm:text-4xl lg:text-5xl">
              Local Safari Experience Since 1990
            </h2>
            <p className="mt-5 max-w-md text-base leading-relaxed text-brand-ink-muted">
              Founded by Kumara, Yala Leopard Safari Tours draws on more than 36
              years of local safari experience across Sri Lanka&apos;s southern
              parks. Our goal has always been simple: share the island&apos;s
              wildlife responsibly, with guides who know these parks like home.
            </p>

            {/* Inline stats */}
            <div className="mt-8 flex flex-wrap gap-8 border-t border-black/[0.07] pt-8">
              {STATS.map((stat) => (
                <div key={stat.label}>
                  <span className="font-display text-3xl font-medium text-brand-ink">
                    {stat.value}
                  </span>
                  <p className="mt-0.5 text-xs font-medium uppercase tracking-[0.15em] text-brand-ink-muted">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>

            <a
              href="#"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-brand-orange px-7 py-3.5 text-sm font-semibold text-white shadow-md shadow-brand-orange/25 transition-all hover:bg-brand-orange-dark hover:shadow-lg hover:shadow-brand-orange/30"
            >
              Our Story
              <span aria-hidden="true">→</span>
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
