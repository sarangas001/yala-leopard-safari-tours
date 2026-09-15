import Image from "next/image";
import Reveal from "@/components/Reveal";

const ANIMALS = [
  { name: "Sri Lankan Leopard", image: "/images/parks/yala.jpg" },
  { name: "Asian Elephant", image: "/images/parks/udawalawe.jpg" },
  { name: "Sloth Bear", image: "/images/wildlife/sloth-bear.jpg" },
  { name: "Crocodile", image: "/images/wildlife/crocodile.jpg" },
  { name: "Spotted Deer", image: "/images/wildlife/spotted-deer.jpg" },
  { name: "Wild Boar", image: "/images/wildlife/wild-boar.jpg" },
  { name: "Peacock", image: "/images/wildlife/peacock.jpg" },
  { name: "Migratory Birds", image: "/images/parks/bundala.jpg" },
];

export default function WildlifeGrid() {
  return (
    <section className="w-full bg-white">
      <div className="mx-auto max-w-[1600px] px-6 py-16 sm:px-10 sm:py-20 lg:px-20 lg:py-24">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-medium uppercase tracking-[0.2em] text-brand-orange">
            On Your Safari
          </span>
          <h2 className="mt-3 font-display text-3xl font-medium tracking-tight text-brand-ink sm:text-4xl lg:text-5xl">
            Wildlife You May Encounter
          </h2>
        </Reveal>

        <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-4 lg:mt-16 lg:gap-5">
          {ANIMALS.map((animal, i) => (
            <Reveal key={animal.name} delay={(i % 4) * 0.06}>
              <div className="group relative aspect-square w-full overflow-hidden rounded-2xl">
                <Image
                  src={animal.image}
                  alt={animal.name}
                  fill
                  sizes="(min-width: 1024px) 25vw, 50vw"
                  quality={70}
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/0 to-transparent" />
                <span className="absolute inset-x-0 bottom-0 p-3 text-sm font-medium text-white sm:p-4">
                  {animal.name}
                </span>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-8 text-center lg:mt-10">
          <p className="mx-auto max-w-xl text-sm text-brand-ink-muted">
            Wildlife sightings are never guaranteed because animals move freely
            in their natural habitat.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
