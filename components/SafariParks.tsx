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
    <section className="relative w-full overflow-hidden bg-white">
      {/* Elephant illustration — large, behind all content, decorative */}
      <div
        className="pointer-events-none absolute -top-10 -right-8 z-0 hidden select-none lg:block"
        aria-hidden="true"
      >
        <Image
          src="/images/parks/elephant.png"
          alt=""
          width={400}
          height={500}
          quality={90}
          style={{ width: "380px", height: "auto", opacity: 0.92 }}
        />
      </div>

      {/* All content sits above the illustration */}
      <div className="relative z-10 mx-auto max-w-[1600px] px-10 py-20 sm:px-16 sm:py-24 lg:px-28 lg:py-28">
        {/* Heading — centered, no eyebrow label */}
        <Reveal className="text-center">
          <h2 className="font-display text-3xl font-medium tracking-tight text-brand-ink sm:text-4xl lg:text-5xl">
            Explore Sri Lanka&apos;s Wild Parks
          </h2>
        </Reveal>

        {/* Cards */}
        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:mt-16 lg:grid-cols-3 lg:gap-7">
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
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                  {/* Pill badge */}
                  <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold tracking-wide text-brand-ink backdrop-blur-sm">
                    {park.bestFor}
                  </span>

                  {/* Bottom text */}
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

