import Image from "next/image";
import Reveal from "@/components/Reveal";

// Short descriptions are draft copy — refine before launch.
const SERVICES = [
  {
    title: "Yala Leopard Safari",
    text: "Track the world's highest density of leopards across Yala's dry-zone scrub and open plains.",
    image: "/images/parks/yala.jpg",
    href: "/#park-yala",
  },
  {
    title: "Udawalawe Elephant Safari",
    text: "Watch wild elephant herds gather in full view around the Udawalawe reservoir.",
    image: "/images/parks/udawalawe.jpg",
    href: "/#park-udawalawe",
  },
  {
    title: "Bundala Bird Watching Safari",
    text: "Explore a Ramsar-listed wetland alive with flamingos and migratory birds.",
    image: "/images/parks/bundala.jpg",
    href: "/#park-bundala",
  },
  {
    title: "Hambantota Port to Yala Safari",
    text: "A convenient safari transfer for cruise and port arrivals heading straight into Yala.",
    image: "/images/scenic/guide-jeep.jpg",
    href: "/#enquire",
  },
  {
    title: "Taxi & Car Rental with Driver",
    text: "Private, air-conditioned vehicles with an experienced driver for the whole island.",
    image: "/images/scenic/parking.png",
    href: "/#enquire",
  },
  {
    title: "Airport / Hotel Transfers",
    text: "Comfortable, on-time transfers between the airport, your hotel and the parks.",
    image: "/images/scenic/safari-jeeps.jpg",
    href: "/#enquire",
  },
  {
    title: "Custom / Private Tours",
    text: "Fully tailored itineraries built around your dates, pace and interests.",
    image: "/images/wildlife/sloth-bear.jpg",
    href: "/#enquire",
  },
  {
    title: "Multi-Day Tours",
    text: "Multi-park itineraries with overnight stays, for a deeper safari experience where offered.",
    image: "/images/wildlife/spotted-deer.jpg",
    href: "/#enquire",
  },
];

export default function AboutServices() {
  return (
    <section className="w-full bg-white">
      <div className="mx-auto max-w-[1600px] px-10 py-16 sm:px-20 sm:py-20 lg:px-40 lg:py-24">
        <Reveal className="text-center">
          <h2 className="font-display text-3xl font-medium tracking-tight text-brand-ink sm:text-4xl lg:text-5xl">
            Our Services
          </h2>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:mt-16 lg:grid-cols-3 lg:gap-7">
          {SERVICES.map((service, i) => (
            <Reveal key={service.title} delay={(i % 3) * 0.08}>
              <a href={service.href} className="group block h-full">
                <div className="flex h-full flex-col overflow-hidden rounded-3xl border border-black/6 bg-white shadow-sm transition-shadow duration-300 group-hover:shadow-md">
                  <div className="relative aspect-4/3 w-full overflow-hidden">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
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
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
