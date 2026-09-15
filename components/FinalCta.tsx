import Image from "next/image";
import Reveal from "@/components/Reveal";

export default function FinalCta() {
  return (
    <section className="relative w-full overflow-hidden bg-brand-ink">
      <div className="absolute inset-0">
        <Image
          src="/images/parks/udawalawe.jpg"
          alt="Elephant in Udawalawe National Park"
          fill
          sizes="100vw"
          quality={70}
          className="object-cover"
        />
        <div className="absolute inset-0 bg-brand-ink/70" />
      </div>

      <Reveal className="relative mx-auto max-w-[1600px] px-5 py-20 text-center sm:px-8 sm:py-24 lg:px-14 lg:py-28">
        <h2 className="mx-auto max-w-2xl font-display text-3xl font-medium tracking-tight text-white sm:text-4xl lg:text-5xl">
          Your Sri Lankan Wildlife Adventure Starts Here
        </h2>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <a
            href="#enquire"
            className="inline-flex items-center gap-2 rounded-full bg-brand-orange px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-brand-orange-dark"
          >
            Book Your Safari
            <span aria-hidden="true">→</span>
          </a>
          <a
            href="https://wa.me/94112345678"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-white/40 px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:border-white"
          >
            Chat on WhatsApp
          </a>
        </div>
      </Reveal>
    </section>
  );
}
