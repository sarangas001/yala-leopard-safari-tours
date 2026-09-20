import Reveal from "@/components/Reveal";

type Vehicle = {
  name: string;
  examples?: string;
  capacity: string;
};

const VEHICLES: Vehicle[] = [
  { name: "Sedan", examples: "Toyota Axio / Allion", capacity: "Approx. 3–4 passengers" },
  { name: "Mini Van", examples: "KDH / Dolphin", capacity: "Approx. 6–10 passengers" },
  { name: "SUV", capacity: "Capacity and model details to be confirmed" },
];

export default function TaxiVehicleOptions() {
  return (
    <section className="w-full bg-white">
      <div className="mx-auto max-w-[1600px] px-10 py-12 sm:px-20 sm:py-16 lg:px-40 lg:py-20">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-medium tracking-tight text-brand-ink sm:text-4xl lg:text-5xl">
            Vehicle Options
          </h2>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-3 lg:mt-16 lg:gap-7">
          {VEHICLES.map((vehicle, i) => (
            <Reveal key={vehicle.name} delay={(i % 3) * 0.1}>
              <div className="flex h-full flex-col items-center rounded-3xl border border-black/6 bg-white p-7 text-center shadow-sm transition-shadow duration-300 hover:shadow-md">
                <h3 className="font-display text-xl font-medium text-brand-ink sm:text-2xl">
                  {vehicle.name}
                </h3>
                {vehicle.examples ? (
                  <p className="mt-2 text-sm text-brand-ink-muted">{vehicle.examples}</p>
                ) : null}
                <p className="mt-4 text-xs font-semibold uppercase tracking-wide text-brand-ink-muted">
                  Capacity
                </p>
                <p className="mt-1 text-sm text-brand-ink-muted">{vehicle.capacity}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
