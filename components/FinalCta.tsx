import Image from "next/image";
import Reveal from "@/components/Reveal";

export default function FinalCta() {
  return (
    <section className="w-full bg-white">
      <div className="mx-auto max-w-[1600px] px-10 pt-16 sm:px-20 sm:pt-20 lg:px-40 lg:pt-24">
        <Reveal className="text-center">
          <h2 className="mx-auto max-w-2xl font-display text-3xl font-medium tracking-tight text-brand-ink sm:text-4xl lg:text-5xl">
            Your Sri Lankan Wildlife Adventure Starts Here
          </h2>
          <p className="mt-5 text-base leading-relaxed text-brand-ink-muted">
            Small-group safaris, expert local guides, and memories that last a
            lifetime. Begin your journey with us and step away from the
            beaten territories to uncover the wildlife hidden beneath the
            clichés. Whether it&apos;s your first leopard sighting or your
            fifth trip back to Yala, our guides bring decades of local
            tracking knowledge to every drive — so you leave with more than
            photos, you leave with a story worth telling. From the dry-zone
            scrub of Yala to the wetlands of Bundala and the open plains of
            Udawalawe, every itinerary is paced around the moment rather than
            the clock, so nothing about the wild ever feels rushed.
          </p>
        </Reveal>
      </div>

      {/* Scenic image — full-bleed, its own soft cloud fade blends into the white section */}
      <Reveal
        delay={0.1}
        className="mt-6 pb-16 sm:mt-8 sm:pb-20 lg:pb-24"
      >
        <Image
          src="/images/scenic/cta-img.png"
          alt="A leopard, elephants and a peacock gather at a waterhole in Yala National Park"
          width={2060}
          height={763}
          quality={85}
          style={{ width: "100%", height: "auto", display: "block" }}
        />
      </Reveal>
    </section>
  );
}
