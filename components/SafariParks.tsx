import Image from "next/image";
import Reveal from "@/components/Reveal";

const PARKS = [
  {
    id: "yala",
    name: "Yala National Park",
    bestFor: "Leopards & Wildlife",
    copy: "Discover Sri Lanka's most celebrated wildlife park — home to the world's highest density of leopards, alongside elephants, sloth bears and crocodiles.",
    image: "/images/new-img/IMG_9129.jpg",
  },
  {
    id: "udawalawe",
    name: "Udawalawe National Park",
    bestFor: "Wild Elephants",
    copy: "Open grasslands and shimmering reservoirs where elephant herds gather in full view on almost every game drive.",
    image: "/images/parks/udawalawe.jpg",
  },
  {
    id: "bundala",
    name: "Bundala National Park",
    bestFor: "Birds & Wetlands",
    copy: "A Ramsar-listed coastal sanctuary of lagoons and dunes, alive with flamingos, migratory birds, crocodiles and elephants.",
    image: "/images/new-img/IMG_9172.jpg",
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
      <div className="relative z-10 mx-auto max-w-[1600px] px-10 py-16 sm:px-20 sm:py-20 lg:px-40 lg:py-24">
        {/* Heading — centered */}
        <Reveal className="text-center">
          <h2 className="font-display text-3xl font-medium tracking-tight text-brand-ink sm:text-4xl lg:text-5xl">
            Explore Sri Lanka&apos;s Wild Parks
          </h2>
        </Reveal>

        {/* Cards — image on top, white body below */}
        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:mt-16 lg:grid-cols-3 lg:gap-7">
          {PARKS.map((park, i) => (
            <Reveal key={park.id} delay={i * 0.1}>
              <a href={`/safaris/${park.id}`} className="group block h-full">
                <div className="flex h-full flex-col overflow-hidden rounded-3xl border border-black/6 bg-white shadow-sm transition-shadow duration-300 group-hover:shadow-md">
                  {/* Image at top */}
                  <div className="relative aspect-4/3 w-full overflow-hidden">
                    <Image
                      src={park.image}
                      alt={park.name}
                      fill
                      sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                      quality={75}
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    {/* Pill badge */}
                    <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold tracking-wide text-brand-ink backdrop-blur-sm">
                      {park.bestFor}
                    </span>
                  </div>

                  {/* Card body */}
                  <div className="flex flex-1 flex-col p-6">
                    <h3 className="font-display text-xl font-medium text-brand-ink sm:text-2xl">
                      {park.name}
                    </h3>
                    <p className="mt-3 flex-1 text-sm leading-relaxed text-brand-ink-muted">
                      {park.copy}
                    </p>
                    <span className="mt-5 inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.15em] text-brand-orange transition-colors duration-300 group-hover:text-brand-orange-dark">
                      Explore Park
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
