import Reveal from "@/components/Reveal";

export default function YalaWhyVisit() {
  return (
    <section className="w-full bg-white">
      <div className="mx-auto max-w-[1600px] px-10 py-12 sm:px-20 sm:py-16 lg:px-40 lg:py-20">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-medium tracking-tight text-brand-ink sm:text-4xl lg:text-5xl">
            Why Visit Yala National Park?
          </h2>
          <p className="mt-4 text-base leading-relaxed text-brand-ink-muted">
            Yala is one of Sri Lanka&apos;s best-known wildlife destinations, famous above all for its leopards — the park has one of the highest leopard densities in the world. Beyond leopards, keep an eye out for elephants, sloth bears, crocodiles, spotted deer, wild boar and abundant birdlife, all set across a striking mix of forest, grassland, lagoon and coastal landscapes. With golden light and dramatic scenery to match the wildlife, Yala is also an excellent choice for wildlife photography.
          </p>
        </Reveal>

        <Reveal delay={0.1} className="mx-auto mt-8 max-w-2xl text-center">
          <p className="text-sm text-brand-ink-muted">
            Please note: wildlife sightings are not guaranteed. Yala is home to an incredible diversity of animals, but sightings depend on the day and cannot be promised on every safari drive.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
