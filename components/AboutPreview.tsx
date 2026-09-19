import Image from "next/image";
import Reveal from "@/components/Reveal";

export default function AboutPreview() {
  return (
    <section id="about" className="relative w-full overflow-hidden bg-white">
      {/* Peacock illustration — large, behind all content, decorative */}
      {/* <div
        className="pointer-events-none absolute bottom-16 right-10 z-0 hidden select-none sm:bottom-20 sm:right-20 lg:bottom-24 lg:right-40 lg:block"
        aria-hidden="true"
      >
        <Image
          src="/images/parks/peocock.png"
          alt=""
          width={420}
          height={502}
          quality={90}
          style={{ width: "320px", height: "auto", opacity: 0.92 }}
        />
      </div> */}

      <div className="relative z-10 mx-auto max-w-[1600px] px-10 py-16 sm:px-20 sm:py-20 lg:px-40 lg:py-24">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <Reveal className="lg:order-2">
            <div className="relative aspect-4/3 w-full overflow-hidden rounded-3xl shadow-2xl shadow-black/10">
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

          <Reveal delay={0.12} className="text-center lg:order-1 sm:text-left">
            <h2 className="font-display text-3xl font-medium tracking-tight text-brand-ink sm:text-4xl lg:text-5xl">
              Local Safari Experience Since 1990
            </h2>
            <p className="mx-auto mt-5 max-w-md text-base leading-relaxed text-brand-ink-muted sm:mx-0">
              Founded by Kumara, Yala Leopard Safari Tours draws on more than 36
              years of local safari experience across Sri Lanka&apos;s southern
              parks. Our goal has always been simple: share the island&apos;s
              wildlife responsibly, with guides who know these parks like home.
            </p>

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
