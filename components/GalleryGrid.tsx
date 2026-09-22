"use client";

import Image from "next/image";
import { useState } from "react";
import Reveal from "@/components/Reveal";

type Category = "wildlife" | "parks" | "safari-life";

type GalleryImage = {
  src: string;
  alt: string;
  caption: string;
  category: Category;
};

const IMAGES: GalleryImage[] = [
  {
    src: "/images/wildlife/sloth-bear.jpg",
    alt: "A sloth bear foraging in the Sri Lankan dry-zone forest",
    caption: "Sloth Bear",
    category: "wildlife",
  },
  {
    src: "/images/parks/yala.jpg",
    alt: "Misty hills and open grassland in Yala National Park",
    caption: "Yala National Park",
    category: "parks",
  },
  {
    src: "/images/scenic/safari-jeeps.jpg",
    alt: "A line of 4x4 safari jeeps ready for a game drive",
    caption: "Ready for the Drive",
    category: "safari-life",
  },
  {
    src: "/images/wildlife/crocodile.jpg",
    alt: "A mugger crocodile resting at the water's edge",
    caption: "Mugger Crocodile",
    category: "wildlife",
  },
  {
    src: "/images/parks/udawalawe.jpg",
    alt: "Open grassland and reservoir views in Udawalawe National Park",
    caption: "Udawalawe National Park",
    category: "parks",
  },
  {
    src: "/images/wildlife/spotted-deer.jpg",
    alt: "A spotted deer grazing in open grassland",
    caption: "Spotted Deer",
    category: "wildlife",
  },
  {
    src: "/images/scenic/guide-jeep.jpg",
    alt: "A safari guide beside jeeps parked on a dirt track in Yala National Park",
    caption: "Our Local Guides",
    category: "safari-life",
  },
  {
    src: "/images/parks/bundala.jpg",
    alt: "Wetlands and lagoons in Bundala National Park",
    caption: "Bundala National Park",
    category: "parks",
  },
  {
    src: "/images/wildlife/wild-boar.jpg",
    alt: "A wild boar in the Sri Lankan dry-zone forest",
    caption: "Wild Boar",
    category: "wildlife",
  },
  {
    src: "/images/parks/kumana.jpg",
    alt: "Wetland landscape in Kumana National Park",
    caption: "Kumana National Park",
    category: "parks",
  },
  {
    src: "/images/wildlife/peacock.jpg",
    alt: "An Indian peacock displaying its plumage",
    caption: "Indian Peacock",
    category: "wildlife",
  },
  {
    src: "/images/parks/lunugamvehera.jpg",
    alt: "Reservoir and scrubland in Lunugamvehera National Park",
    caption: "Lunugamvehera National Park",
    category: "parks",
  },
  {
    src: "/images/scenic/parking.png",
    alt: "Safari jeep convoy in Yala National Park",
    caption: "Convoy on the Move",
    category: "safari-life",
  },
];

const CATEGORIES: { key: Category | "all"; label: string }[] = [
  { key: "all", label: "All" },
  { key: "wildlife", label: "Wildlife" },
  { key: "parks", label: "Parks" },
  { key: "safari-life", label: "Safari Life" },
];

export default function GalleryGrid() {
  const [active, setActive] = useState<Category | "all">("all");
  const filtered = active === "all" ? IMAGES : IMAGES.filter((img) => img.category === active);

  return (
    <section className="w-full bg-white">
      <div className="mx-auto max-w-[1600px] px-10 py-16 sm:px-20 sm:py-20 lg:px-40 lg:py-24">
        <Reveal className="flex flex-wrap items-center justify-center gap-3">
          <div role="tablist" aria-label="Gallery categories" className="flex flex-wrap items-center justify-center gap-3">
            {CATEGORIES.map((cat) => {
              const isActive = active === cat.key;
              return (
                <button
                  key={cat.key}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setActive(cat.key)}
                  className={
                    "rounded-full px-5 py-2.5 text-sm font-medium transition-colors " +
                    (isActive
                      ? "bg-brand-orange text-white shadow-md shadow-brand-orange/25"
                      : "bg-brand-cream text-brand-ink-muted hover:bg-brand-orange/10 hover:text-brand-ink")
                  }
                >
                  {cat.label}
                </button>
              );
            })}
          </div>
        </Reveal>

        <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:mt-16 lg:grid-cols-4 lg:gap-6">
          {filtered.map((img, i) => (
            <Reveal key={img.src} delay={(i % 4) * 0.06}>
              <div
                className={
                  "group relative w-full overflow-hidden rounded-2xl " +
                  (i % 4 === 0 || i % 4 === 3 ? "aspect-3/4" : "aspect-square")
                }
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  sizes="(min-width: 1024px) 25vw, (min-width: 640px) 33vw, 50vw"
                  quality={75}
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/75 via-black/0 to-transparent opacity-60 transition-opacity duration-400 group-hover:opacity-100" />
                <span className="absolute inset-x-0 bottom-0 p-3 text-sm font-medium text-white/0 transition-all duration-300 group-hover:text-white sm:p-4">
                  {img.caption}
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
