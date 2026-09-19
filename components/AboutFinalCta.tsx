import Image from "next/image";
import Reveal from "@/components/Reveal";

export default function AboutFinalCta() {
  return (
    <section className="relative w-full overflow-hidden bg-white">
      <div className="relative w-full overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/wildlife/peacock.jpg"
            alt="A peacock crossing a clearing in a Sri Lankan national park"
            fill
            sizes="100vw"
            quality={75}
            className="object-cover"
          />
          <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/30 to-black/15" />
          <div className="absolute inset-0 bg-linear-to-r from-black/60 via-black/15 to-transparent" />
        </div>

        <div className="relative z-10 mx-auto max-w-[1600px] px-10 py-24 sm:px-20 sm:py-28 lg:px-40 lg:py-32">
          <Reveal className="max-w-xl text-center sm:text-left">
            <h2 className="font-display text-3xl font-medium leading-[1.05] tracking-tight text-white sm:text-4xl lg:text-5xl">
              Explore Sri Lanka&apos;s Wildlife with a Local Safari Team
            </h2>

            <div className="mt-8 flex flex-wrap justify-center gap-4 sm:justify-start">
              {/* eslint-disable-next-line @next/next/no-html-link-for-pages -- cross-page anchor to the Home page's park selector, not handled by SmoothScroll's same-page hash logic */}
              <a
                href="/#safaris"
                className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-brand-ink shadow-lg shadow-black/20 transition-all hover:bg-white/90 hover:shadow-xl hover:shadow-black/25"
              >
                Choose Your Safari
                <span aria-hidden="true">→</span>
              </a>
              {/* eslint-disable-next-line @next/next/no-html-link-for-pages -- cross-page anchor to the Home page's enquiry form */}
              <a
                href="/#enquire"
                className="inline-flex items-center gap-2 rounded-full border border-white/70 px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-white/10"
              >
                Contact Us
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
