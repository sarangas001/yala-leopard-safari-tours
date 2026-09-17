import Image from "next/image";
import Reveal from "@/components/Reveal";

export default function FinalCta() {
  return (
    <section className="relative w-full overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/images/parks/udawalawe.jpg"
          alt="Elephant in Udawalawe National Park"
          fill
          sizes="100vw"
          quality={75}
          className="object-cover object-center"
        />
        {/* Layered overlay for depth and legibility */}
        <div className="absolute inset-0 bg-brand-ink/65" />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-ink/50 to-transparent" />
      </div>

      <Reveal className="relative mx-auto max-w-[1600px] px-6 py-24 text-center sm:px-10 sm:py-28 lg:px-20 lg:py-32">
        <span className="inline-flex items-center gap-3 text-xs font-medium uppercase tracking-[0.25em] text-white/60">
          <span className="h-px w-8 bg-white/30" aria-hidden="true" />
          Plan Your Safari
          <span className="h-px w-8 bg-white/30" aria-hidden="true" />
        </span>
        <h2 className="mx-auto mt-5 max-w-2xl font-display text-3xl font-medium tracking-tight text-white sm:text-4xl lg:text-5xl">
          Your Sri Lankan Wildlife Adventure Starts Here
        </h2>
        <p className="mx-auto mt-4 max-w-lg text-base text-white/65">
          Small-group safaris, expert local guides, and memories that last a lifetime.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <a
            href="#enquire"
            className="inline-flex items-center gap-2 rounded-full bg-brand-orange px-8 py-4 text-sm font-semibold text-white shadow-lg shadow-brand-orange/30 transition-all hover:bg-brand-orange-dark hover:shadow-xl hover:shadow-brand-orange/40"
          >
            Book Your Safari
            <span aria-hidden="true">→</span>
          </a>
          <a
            href="https://wa.me/94112345678"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/5 px-8 py-4 text-sm font-semibold text-white backdrop-blur-sm transition-all hover:border-white/60 hover:bg-white/10"
          >
            Chat on WhatsApp
          </a>
        </div>
      </Reveal>
    </section>
  );
}
