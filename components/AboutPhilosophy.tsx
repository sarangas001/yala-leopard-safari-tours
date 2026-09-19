import Reveal from "@/components/Reveal";

export default function AboutPhilosophy() {
  return (
    <section className="w-full bg-white">
      <div className="mx-auto max-w-[1600px] px-10 py-16 sm:px-20 sm:py-20 lg:px-40 lg:py-24">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-medium tracking-tight text-brand-ink sm:text-4xl lg:text-5xl">
            Our Safari Philosophy
          </h2>
          <p className="mt-5 text-base leading-relaxed text-brand-ink-muted">
            At Yala Leopard Safari Tours, every safari is guided by one
            simple principle: the animals come first. Sightings in the wild
            are never guaranteed — we track leopards, elephants and birdlife
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
