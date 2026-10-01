import Image from "next/image";
import Reveal from "@/components/Reveal";
import { focalClass, focalStyle } from "@/lib/focal";

type Park = {
  id: string;
  name: string;
  bestFor: string;
  available: string;
  tourTypes: string;
  cta: string;
  image: string;
  alt: string;
};

const PARKS: Park[] = [
  {
    id: "yala",
    name: "Yala National Park",
    bestFor: "Best for leopards, diverse wildlife and iconic safari landscapes.",
    available: "Half Day, 7 Hours, Full Day",
    tourTypes: "Private and selected Shared options",
    cta: "View Yala Safari Packages",
    image: "/images/new-img/8.webp",
    alt: "A leopard resting on a rock in Yala National Park",
  },
  {
    id: "udawalawe",
    name: "Udawalawe National Park",
    bestFor: "Best for elephant-focused safaris and open landscapes.",
    available: "Half Day, 7 Hours, Full Day",
    tourTypes: "Private",
    cta: "View Udawalawe Safari Packages",
    image: "/images/new-img/IMG_2001.jpg",
    alt: "Wild elephants grazing on open grassland in Udawalawe National Park",
  },
  {
    id: "bundala",
    name: "Bundala National Park",
    bestFor: "Best for birdwatching, wetlands and a quieter safari.",
    available: "Half Day, 7 Hours, Full Day",
    tourTypes: "Private",
    cta: "View Bundala Safari Packages",
    image: "/images/parks/bundala.jpg",
    alt: "A blue-tailed bee-eater in Bundala National Park's wetlands",
  },
];

export default function SafariParkCards() {
  return (
    <section id="compare-parks" className="relative w-full scroll-mt-20 overflow-hidden bg-white">
      {/* Safari jeep illustration — decorative graphic, right-aligned */}
      <div
        className="pointer-events-none absolute -top-4 -right-8 z-0 hidden select-none lg:block"
        aria-hidden="true"
      >
        <Image
          src="/images/parks/04-safari-jeep-tour.png"
          alt=""
          width={400}
          height={500}
          quality={90}
          style={{ width: "340px", height: "auto", opacity: 0.92 }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-[1600px] px-10 py-[1.5cm] sm:px-20 sm:py-[1.5cm] lg:px-40 lg:py-[2.5cm]">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-medium tracking-tight text-brand-ink sm:text-4xl lg:text-5xl">
            Compare Sri Lanka&apos;s Safari Parks
          </h2>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:mt-16 lg:grid-cols-3 lg:gap-7">
          {PARKS.map((park, i) => (
            <Reveal key={park.id} delay={(i % 3) * 0.1}>
              <a
                href={`/safaris/${park.id}`}
                className="group flex h-full flex-col overflow-hidden rounded-3xl border border-black/6 bg-white shadow-sm transition-shadow duration-700 hover:shadow-md"
              >
                <div className="relative aspect-4/3 w-full overflow-hidden">
                  <Image
                    src={park.image}
                    alt={park.alt}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    quality={75}
                    className={`object-cover transition-transform duration-1500 group-hover:scale-105 ${focalClass(park.image)}`}
                    style={focalStyle(park.image)}
                  />
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <h3 className="font-display text-xl font-medium text-brand-ink sm:text-2xl">
                    {park.name}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-brand-ink-muted">
                    {park.bestFor}
                  </p>

                  <dl className="mt-4 space-y-1.5 text-xs text-brand-ink-muted">
                    <div className="flex gap-1.5">
                      <dt className="font-semibold text-brand-ink">Available:</dt>
                      <dd>{park.available}</dd>
                    </div>
                    <div className="flex gap-1.5">
                      <dt className="font-semibold text-brand-ink">Tour type:</dt>
                      <dd>{park.tourTypes}</dd>
                    </div>
                  </dl>

                  <span className="mt-5 inline-flex w-fit items-center gap-2 rounded-full bg-brand-orange px-5 py-2.5 text-xs font-semibold text-white shadow-md shadow-brand-orange/25 transition-all group-hover:bg-brand-orange-dark group-hover:shadow-lg group-hover:shadow-brand-orange/30">
                    {park.cta}
                    <span aria-hidden="true">→</span>
                  </span>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
