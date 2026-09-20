import Reveal from "@/components/Reveal";

export default function ParkWhyVisit({
  heading,
  paragraph,
  disclaimer,
}: {
  heading: string;
  paragraph: string;
  disclaimer?: string;
}) {
  return (
    <section className="w-full bg-white">
      <div className="mx-auto max-w-[1600px] px-10 py-12 sm:px-20 sm:py-16 lg:px-40 lg:py-20">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-medium tracking-tight text-brand-ink sm:text-4xl lg:text-5xl">
            {heading}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-brand-ink-muted">{paragraph}</p>
        </Reveal>

        {disclaimer ? (
          <Reveal delay={0.1} className="mx-auto mt-8 max-w-2xl text-center">
            <p className="text-sm text-brand-ink-muted">{disclaimer}</p>
          </Reveal>
        ) : null}
      </div>
    </section>
  );
}
