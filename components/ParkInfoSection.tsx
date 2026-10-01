import Illustration from "@/components/Illustration";
import Reveal from "@/components/Reveal";

export default function ParkInfoSection({
  heading,
  paragraph,
}: {
  heading: string;
  paragraph: string;
}) {
  return (
    <section className="relative overflow-hidden w-full bg-white">
      <Illustration src="/images/parks/03-sri-lankan-peacock.png" side="left" />
      <div className="relative z-10 mx-auto max-w-[1600px] px-10 py-[1.5cm] sm:px-20 sm:py-[1.5cm] lg:px-40 lg:py-[2.5cm]">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-medium tracking-tight text-brand-ink sm:text-4xl lg:text-5xl">
            {heading}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-brand-ink-muted">{paragraph}</p>
        </Reveal>
      </div>
    </section>
  );
}
