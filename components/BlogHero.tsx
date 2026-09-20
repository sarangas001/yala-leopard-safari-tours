import Reveal from "@/components/Reveal";

export default function BlogHero() {
  return (
    <section className="w-full bg-white">
      <div className="mx-auto max-w-[1600px] px-10 py-16 text-center sm:px-20 sm:py-20 lg:px-40 lg:py-24">
        <Reveal className="mx-auto max-w-3xl">
          <h1 className="font-display text-4xl font-medium leading-[1.1] tracking-tight text-brand-ink sm:text-5xl lg:text-6xl">
            <span className="block font-normal">Discover Yala</span>
            <span className="block">Through Stories That Inspire Your Trip</span>
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-brand-ink-muted">
            Every safari begins with a story. Our travel journal brings together practical guides, wildlife insights and first-hand tips from across Yala, Udawalawe, Bundala and beyond.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
