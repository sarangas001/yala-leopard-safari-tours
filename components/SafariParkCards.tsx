import Image from "next/image";
import Reveal from "@/components/Reveal";

type Park = {
  id: string;
  name: string;
  bestFor: string;
  available: string;
  tourTypes: string;
  cta: string;
  image: string;
  alt: string;
  comingSoon?: boolean;
};

const PARKS: Park[] = [
  {
    id: "yala",
    name: "Yala National Park",
    bestFor: "Best for leopards, diverse wildlife and iconic safari landscapes.",
    available: "Half Day, 7 Hours, Full Day",
    tourTypes: "Private and selected Shared options",
    cta: "See Yala Details",
    image: "/images/new-img/8.webp",
    alt: "A leopard resting on a rock in Yala National Park",
  },
  {
    id: "udawalawe",
    name: "Udawalawe National Park",
    bestFor: "Best for elephant-focused safaris and open landscapes.",
    available: "Half Day, 7 Hours, Full Day",
    tourTypes: "Private",
    cta: "See Udawalawe Details",
    image: "/images/new-img/IMG_2001.jpg",
    alt: "Wild elephants grazing on open grassland in Udawalawe National Park",
  },
  {
    id: "bundala",
    name: "Bundala National Park",
    bestFor: "Best for birdwatching, wetlands and a quieter safari.",
    available: "Half Day, 7 Hours, Full Day",
    tourTypes: "Private",
    cta: "See Bundala Details",
    image: "/images/parks/bundala.jpg",
    alt: "A blue-tailed bee-eater in Bundala National Park's wetlands",
  },
  {
    id: "kumana",
    name: "Kumana National Park",
    bestFor: "Best for birdwatching, nesting colonies, and remote wetland wilderness.",
    available: "Half Day, 7 Hours, Full Day",
    tourTypes: "Private",
    cta: "See Kumana Details",
    image: "/images/new-img/IMG_1021.jpg",
    alt: "A black-necked stork wading through Kumana National Park's wetlands",
    comingSoon: true,
  },
  {
    id: "lunugamvehera",
    name: "Lunugamvehera National Park (Yala Block 5-6)",
    bestFor: "Best for elephant migratory corridors, quiet safaris, and reservoir birding.",
    available: "Half Day, 7 Hours, Full Day",
    tourTypes: "Private",
    cta: "See Lunugamvehera Details",
    image: "/images/new-img/11.jpg",
    alt: "Dry-zone forest landscape at Lunugamvehera National Park",
    comingSoon: true,
  },
];

export default function SafariParkCards() {
  return (
    <section id="compare-parks" className="w-full scroll-mt-20 bg-white">
      <div className="mx-auto max-w-[1600px] px-10 py-16 sm:px-20 sm:py-20 lg:px-40 lg:py-24">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-medium tracking-tight text-brand-ink sm:text-4xl lg:text-5xl">
            Compare Sri Lanka&apos;s Safari Parks
          </h2>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:mt-16 lg:grid-cols-3 lg:gap-7">
          {PARKS.map((park, i) => {
            const cardBody = (
              <>
                <div className="relative aspect-4/3 w-full overflow-hidden">
                  <Image
                    src={park.image}
                    alt={park.alt}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    quality={75}
                    className={
                      "object-cover transition-transform duration-700 " +
                      (park.comingSoon ? "grayscale" : "group-hover:scale-105")
                    }
                  />
                  {park.comingSoon ? (
                    <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold tracking-wide text-brand-ink backdrop-blur-sm">
                      Coming Soon
                    </span>
                  ) : null}
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
                      <dd>{park.comingSoon ? "Temporarily unavailable" : park.available}</dd>
                    </div>
                    <div className="flex gap-1.5">
                      <dt className="font-semibold text-brand-ink">Tour type:</dt>
                      <dd>{park.tourTypes}</dd>
                    </div>
                  </dl>

                  {park.comingSoon ? (
                    <span className="mt-5 inline-flex w-fit items-center gap-2 rounded-full bg-black/5 px-5 py-2.5 text-xs font-semibold text-brand-ink-muted">
                      Not currently available
                    </span>
                  ) : (
                    <span className="mt-5 inline-flex w-fit items-center gap-2 rounded-full bg-brand-orange px-5 py-2.5 text-xs font-semibold text-white shadow-md shadow-brand-orange/25 transition-all group-hover:bg-brand-orange-dark group-hover:shadow-lg group-hover:shadow-brand-orange/30">
                      {park.cta}
                      <span aria-hidden="true">→</span>
                    </span>
                  )}
                </div>
              </>
            );

            return (
              <Reveal key={park.id} delay={(i % 3) * 0.1}>
                {park.comingSoon ? (
                  <div
                    aria-disabled="true"
                    className="group flex h-full flex-col overflow-hidden rounded-3xl border border-black/6 bg-white shadow-sm opacity-75"
                  >
                    {cardBody}
                  </div>
                ) : (
                  <a
                    href={`/safaris/${park.id}`}
                    className="group flex h-full flex-col overflow-hidden rounded-3xl border border-black/6 bg-white shadow-sm transition-shadow duration-300 hover:shadow-md"
                  >
                    {cardBody}
                  </a>
                )}
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
