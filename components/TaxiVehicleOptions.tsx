import Image from "next/image";
import Reveal from "@/components/Reveal";

type Vehicle = {
  name: string;
  examples?: string;
  capacity: string;
  image: string;
  alt: string;
};

const VEHICLES: Vehicle[] = [
  {
    name: "Sedan",
    examples: "Toyota Axio / Allion",
    capacity: "Approx. 3–4 passengers",
    image: "/images/new-img/axio-yala-1080x1080.png",
    alt: "A white Toyota sedan parked on a gravel forecourt",
  },
  {
    name: "Mini Van",
    examples: "KDH / Dolphin",
    capacity: "Approx. 6–10 passengers",
    image: "/images/new-img/mini-van (2).png",
    alt: "A white Toyota mini van parked on a gravel forecourt",
  },
  {
    name: "SUV",
    capacity: "Capacity and model details to be confirmed",
    image: "/images/new-img/SUV.png",
    alt: "A white Toyota SUV parked on a gravel forecourt",
  },
];

export default function TaxiVehicleOptions() {
  return (
    <section className="relative overflow-hidden w-full bg-white">
      <div className="relative z-10 mx-auto max-w-[1600px] px-10 py-[1.5cm] sm:px-20 sm:py-[1.5cm] lg:px-40 lg:py-[2.5cm]">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-medium tracking-tight text-brand-ink sm:text-4xl lg:text-5xl">
            Vehicle Options
          </h2>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-3 lg:mt-16 lg:gap-7">
          {VEHICLES.map((vehicle, i) => (
            <Reveal key={vehicle.name} delay={(i % 3) * 0.1}>
              <div className="group flex h-full flex-col overflow-hidden rounded-3xl border border-black/6 bg-white shadow-sm transition-shadow duration-700 hover:shadow-md">
                <div className="relative aspect-square w-full overflow-hidden">
                  <Image
                    src={vehicle.image}
                    alt={vehicle.alt}
                    fill
                    sizes="(min-width: 640px) 33vw, 100vw"
                    quality={75}
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>

                <div className="flex flex-1 flex-col items-center p-6 text-center">
                  <h3 className="font-display text-xl font-medium text-brand-ink sm:text-2xl">
                    {vehicle.name}
                  </h3>
                  {vehicle.examples ? (
                    <p className="mt-2 text-sm text-brand-ink-muted">{vehicle.examples}</p>
                  ) : null}
                  <span className="mt-5 inline-flex flex-col items-center rounded-2xl bg-brand-orange/8 px-5 py-3">
                    <span className="text-xs font-semibold uppercase tracking-wide text-brand-orange">
                      Capacity
                    </span>
                    <span className="mt-1 text-sm text-brand-ink-muted">{vehicle.capacity}</span>
                  </span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
