import Image from "next/image";
import Reveal from "@/components/Reveal";

const PARKS = [
  {
    id: "yala",
    name: "Yala National Park",
    bestFor: "Leopards and diverse wildlife",
    copy: "Discover Sri Lanka's most famous wildlife park and search for leopards, elephants, sloth bears, crocodiles and more.",
    image: "/images/parks/yala.jpg",
  },
  {
    id: "udawalawe",
    name: "Udawalawe National Park",
    bestFor: "Wild elephants",
    copy: "Explore open grasslands and reservoirs in one of Sri Lanka's best parks for elephant sightings.",
    image: "/images/parks/udawalawe.jpg",
  },
  {
    id: "bundala",
    name: "Bundala National Park",
    bestFor: "Birdwatching and wetlands",
    copy: "Experience a quieter wetland safari famous for migratory birds, crocodiles, elephants and coastal landscapes.",
    image: "/images/parks/bundala.jpg",
  },
];

export default function SafariParks() {
  return (
    <section className="w-full bg-white">
      <div className="mx-auto max-w-[1600px] px-5 py-16 sm:px-8 sm:py-20 lg:px-14 lg:py-24">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-medium uppercase tracking-[0.2em] text-brand-orange">
            Choose Your Safari
          </span>
          <h2 className="mt-3 font-display text-3xl font-medium tracking-tight text-brand-ink sm:text-4xl lg:text-5xl">
            Choose Your Safari Park
          </h2>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:mt-16 lg:grid-cols-3">
          {PARKS.map((park, i) => (
            <Reveal key={park.id} delay={i * 0.1}>
              <a href={`/#park-${park.id}`} className="group block">
                <div className="relative aspect-[4/5] w-full overflow-hidden rounded-3xl">
                  <Image
                    src={park.image}
                    alt={park.name}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    quality={75}
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/10 to-transparent" />
                  <span className="absolute left-5 top-5 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-brand-ink">
                    {park.bestFor}
                  </span>
                  <div className="absolute inset-x-0 bottom-0 p-6">
                    <h3 className="font-display text-2xl font-medium text-white">{park.name}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-white/85">{park.copy}</p>
                    <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-white underline decoration-brand-orange decoration-2 underline-offset-4">
                      Explore {park.name.split(" ")[0]} Safari
                      <span aria-hidden="true">→</span>
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
