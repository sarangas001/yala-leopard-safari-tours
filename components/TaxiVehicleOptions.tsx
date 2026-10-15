"use client";

import { useState } from "react";
import Image from "next/image";
import Reveal from "@/components/Reveal";
import TransferBookingForm from "@/components/TransferBookingForm";

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
    name: "Van",
    examples: "KDH / Dolphin",
    capacity: "Approx. 6–10 passengers",
    image: "/images/new-img/mini-van (2).png",
    alt: "A white Toyota van parked on a gravel forecourt",
  },
  {
    name: "SUV",
    capacity: "Capacity and model details to be confirmed",
    image: "/images/new-img/SUV.png",
    alt: "A white Toyota SUV parked on a gravel forecourt",
  },
];

export default function TaxiVehicleOptions() {
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <section className="relative overflow-hidden w-full bg-white">
      <div className="relative z-10 mx-auto max-w-[1600px] px-10 py-[1.5cm] sm:px-20 sm:py-[1.5cm] lg:px-40 lg:py-[2.5cm]">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-medium tracking-tight text-brand-ink sm:text-4xl lg:text-5xl">
            Vehicle Options
          </h2>
          <p className="mt-4 text-base leading-relaxed text-brand-ink-muted">
            Select the vehicle you need to open the booking form.
          </p>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-3 lg:mt-16 lg:gap-7">
          {VEHICLES.map((vehicle, i) => (
            <Reveal key={vehicle.name} delay={(i % 3) * 0.1}>
              <button
                type="button"
                onClick={() => setSelected(vehicle.name)}
                aria-pressed={selected === vehicle.name}
                className={
                  "group flex h-full w-full cursor-pointer flex-col overflow-hidden rounded-3xl border bg-white text-left shadow-sm transition-all duration-700 hover:shadow-md " +
                  (selected === vehicle.name ? "border-brand-orange ring-2 ring-brand-orange/40" : "border-black/6")
                }
              >
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
                  <p className="mt-2 min-h-5 text-sm text-brand-ink-muted">{vehicle.examples ?? ""}</p>
                  <span className="mt-5 mb-5 inline-flex min-h-24 flex-col items-center justify-center rounded-2xl bg-brand-orange/8 px-5 py-3">
                    <span className="text-xs font-semibold uppercase tracking-wide text-brand-orange">
                      Capacity
                    </span>
                    <span className="mt-1 text-sm text-brand-ink-muted">{vehicle.capacity}</span>
                  </span>
                  <span
                    className={
                      "mt-auto inline-flex rounded-full px-5 py-2 text-xs font-semibold transition-colors " +
                      (selected === vehicle.name ? "bg-brand-orange text-white" : "bg-brand-cream text-brand-ink")
                    }
                  >
                    {selected === vehicle.name ? "Selected" : "Select this vehicle"}
                  </span>
                </div>
              </button>
            </Reveal>
          ))}
        </div>

        {selected ? (
          <div id="book-taxi" className="mx-auto mt-14 max-w-3xl scroll-mt-28 lg:mt-16">
            <h3 className="font-display text-2xl font-medium text-brand-ink sm:text-3xl">Book Your {selected}</h3>
            <p className="mt-2 mb-6 text-sm text-brand-ink-muted">
              Tell us where and when you need to travel and we&apos;ll confirm your booking and fare.
            </p>
            <TransferBookingForm type="taxi" vehicle={selected} />
          </div>
        ) : null}
      </div>
    </section>
  );
}
