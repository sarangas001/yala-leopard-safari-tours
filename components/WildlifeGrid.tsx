import Image from "next/image";
import Reveal from "@/components/Reveal";

const ANIMALS = [
  { name: "Sri Lankan Leopard", image: "/images/parks/yala.jpg" },
  { name: "Asian Elephant", image: "/images/parks/udawalawe.jpg" },
  { name: "Sloth Bear", image: "/images/wildlife/sloth-bear.jpg" },
  { name: "Mugger Crocodile", image: "/images/wildlife/crocodile.jpg" },
  { name: "Spotted Deer", image: "/images/wildlife/spotted-deer.jpg" },
  { name: "Wild Boar", image: "/images/wildlife/wild-boar.jpg" },
  { name: "Indian Peacock", image: "/images/wildlife/peacock.jpg" },
  { name: "Migratory Birds", image: "/images/parks/bundala.jpg" },
];

export default function WildlifeGrid() {
  return (
    <section className="w-full bg-white">
      <div className="mx-auto max-w-[1600px] px-6 py-16 sm:px-10 sm:py-20 lg:px-20 lg:py-24">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-3 text-xs font-medium uppercase tracking-[0.22em] text-brand-orange">
            <span className="h-px w-6 bg-brand-orange/50" aria-hidden="true" />
            On Your Safari
            <span className="h-px w-6 bg-brand-orange/50" aria-hidden="true" />
          </span>
          <h2 className="mt-4 font-display text-3xl font-medium tracking-tight text-brand-ink sm:text-4xl lg:text-5xl">
            Wildlife You May Encounter
          </h2>
        </Reveal>

        <div className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-4 lg:mt-16 lg:gap-4">
          {ANIMALS.map((animal, i) => (
            <Reveal key={animal.name} delay={(i % 4) * 0.06}>
              {/* Alternate heights for an editorial feel */}
              <div
                className={
                  "group relative w-full overflow-hidden rounded-2xl " +
                  (i % 4 === 0 || i % 4 === 3
                    ? "aspect-3/4"
                    : "aspect-square")
                }
              >
                <Image
                  src={animal.image}
                  alt={animal.name}
                  fill
                  sizes="(min-width: 1024px) 25vw, 50vw"
                  quality={70}
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* Overlay hidden by default, revealed on hover */}
                <div className="absolute inset-0 bg-linear-to-t from-black/75 via-black/0 to-transparent opacity-60 transition-opacity duration-400 group-hover:opacity-100" />
                <span className="absolute inset-x-0 bottom-0 p-3 text-sm font-medium text-white/0 transition-all duration-300 group-hover:text-white sm:p-4">
                  {animal.name}
                </span>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-8 text-center lg:mt-10">
          <p className="mx-auto max-w-sm text-xs text-brand-ink-muted/70">
            Wildlife sightings are never guaranteed — animals move freely in their natural habitat.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
