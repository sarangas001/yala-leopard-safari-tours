import Image from "next/image";
import Reveal from "@/components/Reveal";

const PARKS = [
  {
    id: "yala",
    name: "Yala National Park",
    bestFor: "Leopards & Wildlife",
    image: "/images/parks/yala.jpg",
  },
  {
    id: "udawalawe",
    name: "Udawalawe National Park",
    bestFor: "Wild Elephants",
    image: "/images/parks/udawalawe.jpg",
  },
  {
    id: "bundala",
    name: "Bundala National Park",
    bestFor: "Birds & Wetlands",
    image: "/images/parks/bundala.jpg",
  },
];

export default function SafariParks() {
  return (
    <section className="w-full bg-white">
      <div className="mx-auto max-w-[1600px] px-6 py-16 sm:px-10 sm:py-20 lg:px-20 lg:py-24">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-3 text-xs font-medium uppercase tracking-[0.22em] text-brand-orange">
            <span className="h-px w-6 bg-brand-orange/50" aria-hidden="true" />
            Choose Your Safari
            <span className="h-px w-6 bg-brand-orange/50" aria-hidden="true" />
          </span>
          <h2 className="mt-4 font-display text-3xl font-medium tracking-tight text-brand-ink sm:text-4xl lg:text-5xl">
            Explore Sri Lanka&apos;s Wild Parks
          </h2>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:mt-16 lg:grid-cols-3">
          {PARKS.map((park, i) => (
            <Reveal key={park.id} delay={i * 0.1}>
              <a href={`/#park-${park.id}`} className="group block">
                <div className="relative aspect-[3/4] w-full overflow-hidden rounded-3xl">
                  <Image
                    src={park.image}
                    alt={park.name}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    quality={75}
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  {/* subtle gradient – bottom only */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                  {/* pill badge top-left */}
                  <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold tracking-wide text-brand-ink backdrop-blur-sm">
                    {park.bestFor}
                  </span>

                  {/* bottom text */}
                  <div className="absolute inset-x-0 bottom-0 p-6">
                    <h3 className="font-display text-xl font-medium text-white sm:text-2xl">
                      {park.name}
                    </h3>
                    <span className="mt-3 inline-flex items-center gap-1.5 text-sm font-medium text-white/70 transition-colors duration-300 group-hover:text-white">
                      Explore
                      <span
                        aria-hidden="true"
                        className="transition-transform duration-300 group-hover:translate-x-1"
                      >
                        →
                      </span>
                    </span>
                  </div>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
