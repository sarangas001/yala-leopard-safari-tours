import Image from "next/image";
import Reveal from "@/components/Reveal";

export default function AboutPhilosophy() {
  return (
    <section className="relative w-full overflow-hidden bg-white">
      {/* Traveller illustration — contextual decorative graphic */}
      <div
        className="pointer-events-none absolute -top-4 -right-8 z-0 hidden select-none lg:block"
        aria-hidden="true"
      >
        <Image
          src="/images/parks/traveller.png"
          alt=""
          width={400}
          height={500}
          quality={90}
          style={{ width: "340px", height: "auto", opacity: 0.92 }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-[1600px] px-10 py-[1.5cm] sm:px-20 sm:py-[1.5cm] lg:px-40 lg:py-[2.5cm]">
        <Reveal className="mx-auto max-w-3xl text-center">
          <h2 className="font-display text-3xl font-medium tracking-tight text-brand-ink sm:text-4xl lg:text-5xl">
            Our Safari Philosophy
          </h2>
          <p className="mt-5 text-base leading-relaxed text-brand-ink-muted">
            At Yala Leopard Safari Tours, every safari is guided by one
            simple principle: the animals come first. Sightings in the wild
            are never guaranteed, we track leopards, elephants and birdlife
            with patience and respect, not by chasing a promise, and we
            follow park rules and rangers&apos; guidance on every drive.
          </p>
          <p className="mt-4 text-base leading-relaxed text-brand-ink-muted">
            We keep a responsible distance from wildlife at all times,
            prioritising safe driving and your comfort over getting closer
            than the animals are comfortable with. Our guides know how to
            position the jeep for a great photograph without disturbing the
            animal being photographed, so every memory you take home is one
            we&apos;re proud to have been part of.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
