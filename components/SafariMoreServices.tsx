import Image from "next/image";
import Reveal from "@/components/Reveal";
import { focalClass, focalStyle } from "@/lib/focal";

type ServiceCard = {
  title: string;
  text: string;
  image: string;
  alt: string;
  href: string;
  cta: string;
};

const SERVICES: ServiceCard[] = [
  {
    title: "Hambantota Port to Yala Safari",
    text: "Picked up from Hambantota Cruise Port or your Hambantota hotel, straight into a Yala safari and back again.",
    image: "/images/new-img/IMG_2374.jpg",
    alt: "A safari guide standing beside a 4x4 jeep in Yala National Park",
    href: "/hambantota-port-to-yala",
    cta: "View Safari Package",
  },
  {
    title: "Taxi and Car Rental",
    text: "Private car and van rental with an English-speaking driver, for transfers and long-distance travel across Sri Lanka.",
    image: "/images/new-img/taxi-car-2.jpeg",
    alt: "A row of private vehicles available for hire in Sri Lanka",
    href: "/taxi-car-rental",
    cta: "View Safari Package",
  },
];

export default function SafariMoreServices() {
  return (
    <section id="more-services" className="relative w-full scroll-mt-20 overflow-hidden bg-white">
      {/* Photographer illustration — decorative graphic, left-aligned */}
      <div
        className="pointer-events-none absolute -top-4 -left-8 z-0 hidden select-none lg:block"
        aria-hidden="true"
      >
        <Image
          src="/images/parks/05-safari-wildlife-photographer.png"
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
            More Safari Services
          </h2>
        </Reveal>

        <div className="mx-auto mt-14 grid max-w-4xl grid-cols-1 gap-6 sm:grid-cols-2 lg:mt-16 lg:gap-7">
          {SERVICES.map((service, i) => (
            <Reveal key={service.title} delay={i * 0.1}>
              <a
                href={service.href}
                className="group flex h-full flex-col overflow-hidden rounded-3xl border border-black/6 bg-white shadow-sm transition-shadow duration-700 hover:shadow-md"
              >
                <div className="relative aspect-4/3 w-full overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.alt}
                    fill
                    sizes="(min-width: 1024px) 50vw, 100vw"
                    quality={75}
                    className={`object-cover transition-transform duration-1500 group-hover:scale-105 ${focalClass(service.image)}`}
                    style={focalStyle(service.image)}
                  />
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <h3 className="font-display text-xl font-medium text-brand-ink sm:text-2xl">
                    {service.title}
                  </h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-brand-ink-muted">
                    {service.text}
                  </p>

                  <span className="mt-5 inline-flex w-fit items-center gap-2 rounded-full bg-brand-orange px-5 py-2.5 text-xs font-semibold text-white shadow-md shadow-brand-orange/25 transition-all group-hover:bg-brand-orange-dark group-hover:shadow-lg group-hover:shadow-brand-orange/30">
                    {service.cta}
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
