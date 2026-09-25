import Image from "next/image";
import Reveal from "@/components/Reveal";

type ServiceCard = {
  title: string;
  text: string;
  image: string;
  alt: string;
  href: string;
};

const SERVICES: ServiceCard[] = [
  {
    title: "Hambantota Port to Yala Safari",
    text: "Picked up from Hambantota Cruise Port or your Hambantota hotel, straight into a Yala safari and back again.",
    image: "/images/new-img/IMG_2374.jpg",
    alt: "A safari guide standing beside a 4x4 jeep in Yala National Park",
    href: "/hambantota-port-to-yala",
  },
  {
    title: "Taxi and Car Rental",
    text: "Private car and van rental with an English-speaking driver, for transfers and long-distance travel across Sri Lanka.",
    image: "/images/new-img/9.jpg",
    alt: "A row of private vehicles available for hire in Sri Lanka",
    href: "/taxi-car-rental",
  },
];

export default function SafariMoreServices() {
  return (
    <section className="w-full bg-white">
      <div className="mx-auto max-w-[1600px] px-10 py-16 sm:px-20 sm:py-20 lg:px-40 lg:py-24">
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
                className="group flex h-full flex-col overflow-hidden rounded-3xl border border-black/6 bg-white shadow-sm transition-shadow duration-300 hover:shadow-md"
              >
                <div className="relative aspect-4/3 w-full overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.alt}
                    fill
                    sizes="(min-width: 1024px) 50vw, 100vw"
                    quality={75}
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
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
                    Explore
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
