import Image from "next/image";
import Reveal from "@/components/Reveal";

export default function AboutPreview() {
  return (
    <section className="w-full bg-white">
      <div className="mx-auto max-w-[1600px] px-5 py-16 sm:px-8 sm:py-20 lg:px-14 lg:py-24">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <Reveal className="lg:order-2">
            <div className="relative aspect-4/3 w-full overflow-hidden rounded-3xl">
              <Image
                src="/images/scenic/guide-jeep.jpg"
                alt="Safari guide and jeep in Yala National Park"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                quality={75}
                className="object-cover"
              />
            </div>
          </Reveal>

          <Reveal delay={0.1} className="lg:order-1">
            <span className="text-sm font-medium uppercase tracking-[0.2em] text-brand-orange">
              About Us
            </span>
            <h2 className="mt-3 font-display text-3xl font-medium tracking-tight text-brand-ink sm:text-4xl lg:text-5xl">
              Local Safari Experience Since 1990
            </h2>
            <p className="mt-5 max-w-lg text-base leading-relaxed text-brand-ink-muted sm:text-lg">
              Founded by Kumara, Yala Leopard Safari Tours draws on more than 36
              years of local safari experience across Sri Lanka&apos;s southern
              parks. Our goal has always been simple: share the island&apos;s
              wildlife responsibly, with guides who know these parks like home.
            </p>
            <a
              href="#"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-brand-orange px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-brand-orange-dark"
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
