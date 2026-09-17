import Image from "next/image";
import Reveal from "@/components/Reveal";

const STATS = [
  { value: "3", label: "National Parks" },
  { value: "1,000+", label: "Happy Guests" },
  { value: "24/7", label: "WhatsApp Support" },
];

export default function TrustStrip() {
  return (
    <section className="w-full bg-white">
      {/* Compact stats strip */}
      {/* <div className="border-b border-black/[0.06]">
        <div className="mx-auto max-w-[1600px] px-6 sm:px-10 lg:px-20">
          <div className="flex flex-col items-center justify-center gap-6 py-8 sm:flex-row sm:gap-0 sm:divide-x sm:divide-black/[0.07]">
            {STATS.map((stat) => (
              <div
                key={stat.label}
                className="flex items-baseline gap-2 px-10 text-center"
              >
                <span className="font-display text-3xl font-medium tracking-tight text-brand-ink">
                  {stat.value}
                </span>
                <span className="text-xs font-medium uppercase tracking-[0.15em] text-brand-ink-muted">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div> */}

      {/* Image + content section */}
      <div className="mx-auto max-w-[1600px] px-6 py-10 sm:px-10 sm:py-12 lg:px-20 lg:py-14">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Image */}
          <Reveal>
            {/* Cutout PNG — width auto, height auto, no overflow clipping anywhere */}
            <div className="flex items-center justify-center lg:justify-start">
              <Image
                src="/images/parks/yala2.png"
                alt="A Sri Lankan leopard resting on a rock in Yala National Park"
                width={600}
                height={700}
                quality={90}
                style={{ width: "100%", height: "auto", maxWidth: "640px" }}
                className=""
              />
            </div>
          </Reveal>


          {/* Text content */}
          <Reveal delay={0.12}>
            <h2 className="font-display text-3xl font-medium tracking-tight text-brand-ink sm:text-4xl lg:text-[2.75rem] lg:leading-[1.1]">
              Wild Encounters,<br />
              Memories for a Lifetime
            </h2>
            <p className="mt-5 max-w-md text-base leading-relaxed text-brand-ink-muted">
              Sri Lanka&apos;s southern parks hide some of nature&apos;s most
              extraordinary spectacles — leopards draped across ancient rocks,
              elephant herds wading through golden reservoirs, and flamingos
              painting coastal lagoons pink at dawn.
            </p>
            <p className="mt-4 max-w-md text-base leading-relaxed text-brand-ink-muted">
              Our safaris take you deep into this world with experienced local
              guides who know every trail, watering hole and favourite leopard
              perch by heart. Small groups, open jeeps and an unhurried pace
              mean you miss nothing.
            </p>
            <a
              href="#enquire"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-brand-orange px-7 py-3.5 text-sm font-semibold text-white shadow-md shadow-brand-orange/25 transition-all hover:bg-brand-orange-dark hover:shadow-lg hover:shadow-brand-orange/30"
            >
              Plan your safari
              <span aria-hidden="true">→</span>
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
