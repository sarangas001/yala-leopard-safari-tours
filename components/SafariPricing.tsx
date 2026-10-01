import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import { focalClass, focalStyle } from "@/lib/focal";

export type PriceTier = { group: string; price: string };

export type SafariPackage = {
  name: string;
  time: string;
  duration: string;
  includes: string;
  tiers?: PriceTier[];
  flatPrice?: string;
  image?: string;
};

export default function SafariPricing({
  heading,
  description,
  packages,
  note,
  parkSlug,
  image,
}: {
  heading: string;
  description?: string;
  packages: SafariPackage[];
  note?: string;
  parkSlug?: string;
  image?: string;
}) {
  return (
    <section className="w-full bg-white">
      <div className="mx-auto max-w-[1600px] px-10 py-[1.5cm] sm:px-20 sm:py-[1.5cm] lg:px-40 lg:py-[2.5cm]">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-medium tracking-tight text-brand-ink sm:text-4xl lg:text-5xl">
            {heading}
          </h2>
          {description ? (
            <p className="mt-4 text-base leading-relaxed text-brand-ink-muted">{description}</p>
          ) : null}
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:mt-16 lg:grid-cols-3 lg:gap-7">
          {packages.map((pkg, i) => (
            <Reveal key={pkg.name} delay={(i % 3) * 0.1}>
              <div className="flex h-full flex-col overflow-hidden rounded-3xl border border-black/6 bg-white shadow-sm transition-shadow duration-700 hover:shadow-md">
                {pkg.image ?? image ? (
                  <div className="relative aspect-4/3 w-full overflow-hidden">
                    <Image
                      src={(pkg.image ?? image)!}
                      alt=""
                      fill
                      sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                      quality={75}
                      className={`object-cover ${focalClass((pkg.image ?? image)!)}`}
                      style={focalStyle((pkg.image ?? image)!)}
                    />
                  </div>
                ) : null}
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="font-display text-xl font-medium text-brand-ink">{pkg.name}</h3>

                  <dl className="mt-3 space-y-1 text-xs text-brand-ink-muted">
                    <div className="flex gap-1.5">
                      <dt className="font-semibold text-brand-ink">Time:</dt>
                      <dd>{pkg.time}</dd>
                    </div>
                    <div className="flex gap-1.5">
                      <dt className="font-semibold text-brand-ink">Duration:</dt>
                      <dd>{pkg.duration}</dd>
                    </div>
                  </dl>

                  <div className="mt-4 flex-1">
                    {pkg.flatPrice ? (
                      <p className="font-display text-2xl font-medium text-brand-orange">{pkg.flatPrice}</p>
                    ) : (
                      <dl className="grid grid-cols-2 gap-x-4 gap-y-1.5">
                        {pkg.tiers?.map((tier) => (
                          <div
                            key={tier.group}
                            className="flex items-baseline justify-between gap-2 border-b border-black/5 pb-1 text-xs"
                          >
                            <dt className="text-brand-ink-muted">{tier.group}</dt>
                            <dd className="font-semibold text-brand-ink">{tier.price}</dd>
                          </div>
                        ))}
                      </dl>
                    )}
                  </div>

                  <p className="mt-4 text-xs text-brand-ink-muted">
                    <span className="font-semibold text-brand-ink">Includes:</span> {pkg.includes}
                  </p>

                  <Link
                    href={parkSlug ? `/book/${parkSlug}?package=${encodeURIComponent(pkg.name)}` : "/#enquire"}
                    className="mt-5 inline-flex w-fit items-center gap-2 rounded-full bg-brand-orange px-5 py-2.5 text-xs font-semibold text-white shadow-md shadow-brand-orange/25 transition-all hover:bg-brand-orange-dark hover:shadow-lg hover:shadow-brand-orange/30"
                  >
                    Book Now
                    <span aria-hidden="true">→</span>
                  </Link>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {note ? (
          <Reveal delay={0.2} className="mx-auto mt-10 max-w-2xl text-center">
            <p className="text-sm text-brand-ink-muted">{note}</p>
          </Reveal>
        ) : null}
      </div>
    </section>
  );
}
