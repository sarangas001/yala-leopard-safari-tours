"use client";

import Image from "next/image";
import { useState } from "react";
import Reveal from "@/components/Reveal";

export default function FinalCta() {
  const [expanded, setExpanded] = useState(false);

  return (
    <section className="w-full bg-white">
      <div className="mx-auto max-w-[1600px] px-10 pt-16 sm:px-20 sm:pt-20 lg:px-40 lg:pt-24">
        <Reveal className="text-center">
          <h2 className="mx-auto max-w-2xl font-display text-3xl font-medium tracking-tight text-brand-ink sm:text-4xl lg:text-5xl">
            Your Sri Lankan Wildlife Adventure Starts Here
          </h2>
          <p
            className={
              "mx-auto mt-5 max-w-2xl text-base leading-relaxed text-brand-ink-muted " +
              (expanded ? "" : "line-clamp-3")
            }
          >
            Small-group safaris, expert local guides, and memories that last a
            lifetime. Begin your journey with us and step away from the
            beaten territories to uncover the wildlife hidden beneath the
            clichés. Whether it&apos;s your first leopard sighting or your
            fifth trip back to Yala, our guides bring decades of local
            tracking knowledge to every drive — so you leave with more than
            photos, you leave with a story worth telling. From the dry-zone
            scrub of Yala to the wetlands of Bundala and the open plains of
            Udawalawe, every itinerary is paced around the moment rather than
            the clock, so nothing about the wild ever feels rushed. Each
            safari runs in a comfortable open 4x4 jeep with a small group
            size, flexible pickup from your hotel or villa, and a guide who
            knows every waterhole, trail and favourite leopard perch by heart
            — so you can simply sit back, watch, and let Sri Lanka&apos;s
            wilderness reveal itself.
          </p>
          <button
            type="button"
            onClick={() => setExpanded((value) => !value)}
            className="mt-2 text-sm font-semibold text-brand-orange underline-offset-4 transition-colors hover:text-brand-orange-dark hover:underline"
          >
            {expanded ? "Read less" : "Read more"}
          </button>
        </Reveal>
      </div>

      {/* Scenic image. On mobile it's shown as a centered, cropped band rather
          than the full wide panorama (which would render very thin and hard
          to read); from sm: up the full image is shown at its natural
          aspect ratio, full-bleed, with its own soft cloud fade. */}
      <Reveal delay={0.1} className="mt-4 pb-8 sm:mt-5 sm:pb-10 lg:pb-12">
        <div className="relative h-64 w-full overflow-hidden sm:hidden">
          <Image
            src="/images/scenic/cta-img.png"
            alt="A leopard, elephants and a peacock gather at a waterhole in Yala National Park"
            fill
            sizes="100vw"
            quality={85}
            className="object-cover object-center"
          />
        </div>
        <Image
          src="/images/scenic/cta-img.png"
          alt="A leopard, elephants and a peacock gather at a waterhole in Yala National Park"
          width={2060}
          height={763}
          quality={85}
          className="hidden sm:block"
          style={{ width: "100%", height: "auto" }}
        />
      </Reveal>
    </section>
  );
}
