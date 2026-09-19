import Reveal from "@/components/Reveal";

export default function AboutFounder() {
  return (
    <section className="w-full bg-white">
      <div className="mx-auto max-w-[1600px] px-10 py-16 sm:px-20 sm:py-20 lg:px-40 lg:py-24">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-medium tracking-tight text-brand-ink sm:text-4xl lg:text-5xl">
            Meet the Founder
          </h2>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 items-center gap-12 lg:mt-16 lg:grid-cols-2 lg:gap-20">
          <Reveal>
            {/* Placeholder — swap for a real photo of Kumara before launch */}
            <div className="relative aspect-4/3 w-full overflow-hidden rounded-3xl bg-sand shadow-2xl shadow-black/10">
              <div className="flex h-full flex-col items-center justify-center gap-3 text-brand-ink-muted">
                <svg viewBox="0 0 24 24" fill="none" className="h-16 w-16" aria-hidden="true">
                  <circle cx="12" cy="8.5" r="4" stroke="currentColor" strokeWidth="1.5" />
                  <path
                    d="M4 20c0-4.4 3.6-7 8-7s8 2.6 8 7"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                </svg>
                <span className="text-xs font-medium uppercase tracking-[0.14em]">
                  Photo coming soon
                </span>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.12} className="text-center sm:text-left">
            <h3 className="font-display text-3xl font-medium tracking-tight text-brand-ink sm:text-4xl">
              Kumara
            </h3>
            <p className="mt-2 text-sm font-semibold uppercase tracking-[0.12em] text-brand-orange">
              Head Safari Guide &amp; Driver
            </p>
            <p className="mt-1 text-sm text-brand-ink-muted">
              36+ Years of Experience
            </p>
            <p className="mx-auto mt-5 max-w-md text-base leading-relaxed text-brand-ink-muted sm:mx-0">
              An experienced local safari driver and guide with extensive
              knowledge of Yala National Park, wildlife routes and animal
              behavior.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
