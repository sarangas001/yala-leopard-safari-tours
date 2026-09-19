import Reveal from "@/components/Reveal";

export default function AboutStory() {
  return (
    <section className="w-full bg-white">
      <div className="mx-auto max-w-[1600px] px-10 py-16 sm:px-20 sm:py-20 lg:px-40 lg:py-24">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-medium tracking-tight text-brand-ink sm:text-4xl lg:text-5xl">
            Our Story
          </h2>
          <p className="mt-5 text-base leading-relaxed text-brand-ink-muted">
            Yala Leopard Safari Tours was founded in 1990 with the goal of
            sharing Sri Lanka&apos;s wildlife and natural landscapes with
            travelers in a responsible, comfortable and memorable way. Over
            the years, the team has guided local and international guests
            through some of the country&apos;s best-known national parks.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
