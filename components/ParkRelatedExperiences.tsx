import Image from "next/image";
import Reveal from "@/components/Reveal";

export type RelatedExperience = { title: string; text: string; image: string; href: string };

export default function ParkRelatedExperiences({
  heading = "Related Experiences",
  experiences,
}: {
  heading?: string;
  experiences: RelatedExperience[];
}) {
  return (
    <section className="w-full bg-white">
      <div className="mx-auto max-w-[1600px] px-10 py-12 sm:px-20 sm:py-16 lg:px-40 lg:py-20">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-medium tracking-tight text-brand-ink sm:text-4xl lg:text-5xl">
            {heading}
          </h2>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:mt-16 lg:grid-cols-3 lg:gap-7">
          {experiences.map((experience, i) => (
            <Reveal key={experience.title} delay={(i % 3) * 0.1}>
              <a
                href={experience.href}
                className="group flex h-full flex-col items-center overflow-hidden rounded-3xl border border-black/6 bg-white text-center shadow-sm transition-shadow duration-300 hover:shadow-md"
              >
                <div className="relative aspect-4/3 w-full overflow-hidden">
                  <Image
                    src={experience.image}
                    alt={experience.title}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    quality={75}
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>

                <div className="flex flex-1 flex-col items-center p-6">
                  <h3 className="font-display text-xl font-medium text-brand-ink sm:text-2xl">
                    {experience.title}
                  </h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-brand-ink-muted">
                    {experience.text}
                  </p>
                  <span className="mt-5 inline-flex items-center gap-2 rounded-full bg-brand-orange px-5 py-2.5 text-xs font-semibold text-white shadow-md shadow-brand-orange/25 transition-all group-hover:bg-brand-orange-dark group-hover:shadow-lg group-hover:shadow-brand-orange/30">
                    Read More
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
