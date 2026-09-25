"use client";

import Image from "next/image";
import { useRef } from "react";
import Reveal from "@/components/Reveal";

// Short descriptions are draft copy — refine before launch.
const SERVICES = [
  {
    title: "Yala Leopard Safari",
    text: "Track the world's highest density of leopards across Yala's dry-zone scrub and open plains.",
    image: "/images/new-img/8.webp",
    href: "/safaris/yala",
  },
  {
    title: "Udawalawe Elephant Safari",
    text: "Watch wild elephant herds gather in full view around the Udawalawe reservoir.",
    image: "/images/new-img/IMG_2001.jpg",
    href: "/safaris/udawalawe",
  },
  {
    title: "Bundala Bird Watching Safari",
    text: "Explore a Ramsar-listed wetland alive with flamingos and migratory birds.",
    image: "/images/parks/bundala.jpg",
    href: "/safaris/bundala",
  },
  {
    title: "Hambantota Port to Yala Safari",
    text: "A convenient safari transfer for cruise and port arrivals heading straight into Yala.",
    image: "/images/new-img/IMG_2374.jpg",
    href: "/hambantota-port-to-yala",
  },
  {
    title: "Taxi & Car Rental with Driver",
    text: "Private, air-conditioned vehicles with an experienced driver for the whole island.",
    image: "/images/new-img/9.jpg",
    href: "/taxi-car-rental",
  },
  {
    title: "Airport / Hotel Transfers",
    text: "Comfortable, on-time transfers between the airport, your hotel and the parks.",
    image: "/images/scenic/safari-jeeps.jpg",
    href: "/safaris",
  },
  {
    title: "Custom / Private Tours",
    text: "Fully tailored itineraries built around your dates, pace and interests.",
    image: "/images/new-img/IMG_2067.jpg",
    href: "/safaris",
  },
  {
    title: "Multi-Day Tours",
    text: "Multi-park itineraries with overnight stays, for a deeper safari experience where offered.",
    image: "/images/new-img/IMG_1457.jpg",
    href: "/safaris",
  },
];

function ArrowIcon({ direction }: { direction: "left" | "right" }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" aria-hidden="true">
      {direction === "left" ? (
        <path d="M15 5l-7 7 7 7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      ) : (
        <path d="M9 5l7 7-7 7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      )}
    </svg>
  );
}

export default function AboutServices() {
  const scrollerRef = useRef<HTMLDivElement | null>(null);

  const scrollByCard = (direction: 1 | -1) => {
    const el = scrollerRef.current;
    if (!el) return;
    const card = el.querySelector<HTMLElement>("[data-card]");
    const amount = card ? card.offsetWidth + 24 : el.clientWidth * 0.8;
    el.scrollBy({ left: amount * direction, behavior: "smooth" });
  };

  return (
    <section className="w-full bg-white">
      <div className="mx-auto max-w-[1600px] px-10 py-16 sm:px-20 sm:py-20 lg:px-40 lg:py-24">
        <div className="flex items-end justify-between gap-6">
          <Reveal>
            <h2 className="font-display text-3xl font-medium tracking-tight text-brand-ink sm:text-4xl lg:text-5xl">
              Our Services
            </h2>
          </Reveal>
          <div className="hidden shrink-0 gap-3 sm:flex">
            <button
              type="button"
              onClick={() => scrollByCard(-1)}
              aria-label="Scroll to previous service"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-black/10 text-brand-ink transition-colors hover:bg-sand"
            >
              <ArrowIcon direction="left" />
            </button>
            <button
              type="button"
              onClick={() => scrollByCard(1)}
              aria-label="Scroll to next service"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-black/10 text-brand-ink transition-colors hover:bg-sand"
            >
              <ArrowIcon direction="right" />
            </button>
          </div>
        </div>

        <div
          ref={scrollerRef}
          className="mt-10 flex snap-x snap-mandatory gap-6 overflow-x-auto scroll-smooth pb-4 lg:mt-14 scrollbar-none"
        >
          {SERVICES.map((service, i) => (
            <a
              key={service.title}
              data-card
              href={service.href}
              className="group block w-72 shrink-0 snap-start sm:w-80"
            >
              <div className="flex h-full flex-col overflow-hidden rounded-3xl border border-black/6 bg-white shadow-sm transition-shadow duration-300 group-hover:shadow-md">
                <div className="relative aspect-4/3 w-full overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    priority={i === 0}
                    sizes="(min-width: 640px) 320px, 288px"
                    quality={75}
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <h3 className="font-display text-xl font-medium text-brand-ink">
                    {service.title}
                  </h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-brand-ink-muted">
                    {service.text}
                  </p>
                  <span className="mt-5 inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.15em] text-brand-orange transition-colors duration-300 group-hover:text-brand-orange-dark">
                    Learn More
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
          ))}
        </div>

        <div className="mt-2 flex justify-center gap-3 sm:hidden">
          <button
            type="button"
            onClick={() => scrollByCard(-1)}
            aria-label="Scroll to previous service"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-black/10 text-brand-ink transition-colors hover:bg-sand"
          >
            <ArrowIcon direction="left" />
          </button>
          <button
            type="button"
            onClick={() => scrollByCard(1)}
            aria-label="Scroll to next service"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-black/10 text-brand-ink transition-colors hover:bg-sand"
          >
            <ArrowIcon direction="right" />
          </button>
        </div>
      </div>
    </section>
  );
}
