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
    src: "/images/new-img/IMG_2392.jpg",
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
    src: "/images/new-img/IMG_1906.jpg",
    alt: "Safari jeep convoy in Yala National Park",
    caption: "Convoy on the Move",
    category: "safari-life",
  },
  {
    src: "/images/new-img/11.jpg",
    alt: "A leopard mother and her cub in the forest undergrowth",
    caption: "Leopard Mother & Cub",
    category: "wildlife",
  },
  {
    src: "/images/new-img/12.jpg",
    alt: "A leopard running along a forest trail at dusk",
    caption: "Leopard on the Move",
    category: "wildlife",
  },
  {
    src: "/images/new-img/13.jpg",
    alt: "A spotted deer stag drinking at a waterhole",
    caption: "At the Waterhole",
    category: "wildlife",
  },
  {
    src: "/images/new-img/8.webp",
    alt: "A herd of spotted deer gathered at a waterhole",
    caption: "Deer Herd",
    category: "wildlife",
  },
  {
    src: "/images/new-img/9.webp",
    alt: "A leopard resting on a tree branch",
    caption: "Leopard at Rest",
    category: "wildlife",
  },
  {
    src: "/images/new-img/4-A-Kumana-leopard.jpg",
    alt: "A leopard resting on a fallen log in Kumana National Park",
    caption: "Leopard in Kumana",
    category: "wildlife",
  },
  {
    src: "/images/new-img/IMG_7940.jpg",
    alt: "A Sri Lankan leopard on the prowl at dusk",
    caption: "Leopard on the Prowl",
    category: "wildlife",
  },
  {
    src: "/images/new-img/IMG_9129.jpg",
    alt: "A leopard resting on a sandy forest track",
    caption: "Leopard Resting",
    category: "wildlife",
  },
  {
    src: "/images/new-img/IMG_9172.jpg",
    alt: "Spotted deer stags sparring in the forest",
    caption: "Sparring Stags",
    category: "wildlife",
  },
  {
    src: "/images/new-img/IMG_1606.jpg",
    alt: "A wild Asian elephant approaching on a forest track",
    caption: "Asian Elephant",
    category: "wildlife",
  },
  {
    src: "/images/new-img/IMG_2001.jpg",
    alt: "Two elephants greeting each other trunk to trunk",
    caption: "Elephants Greeting",
    category: "wildlife",
  },
  {
    src: "/images/new-img/IMG_2015.jpg",
    alt: "A close encounter with a tusker elephant on a dirt road",
    caption: "Tusker Up Close",
    category: "wildlife",
  },
  {
    src: "/images/new-img/IMG_1021.jpg",
    alt: "A black-necked stork wading through a wetland",
    caption: "Black-Necked Stork",
    category: "wildlife",
  },
  {
    src: "/images/new-img/black-necked-stork.jpeg",
    alt: "A black-necked stork foraging in a wetland",
    caption: "Stork in the Wetlands",
    category: "wildlife",
  },
  {
    src: "/images/new-img/IMG_8909.jpg",
    alt: "A brown fish owl perched on a branch",
    caption: "Brown Fish Owl",
    category: "wildlife",
  },
  {
    src: "/images/new-img/Spoonbill.jpeg",
    alt: "A Eurasian spoonbill wading in a lagoon",
    caption: "Eurasian Spoonbill",
    category: "wildlife",
  },
  {
    src: "/images/new-img/Spot-Billed-pelican.jpeg",
    alt: "A spot-billed pelican resting near the water",
    caption: "Spot-Billed Pelican",
    category: "wildlife",
  },
  {
    src: "/images/new-img/pelicans.jpg",
    alt: "Pelicans gathered on the water's edge",
    caption: "Pelicans on the Water",
    category: "wildlife",
  },
  {
    src: "/images/new-img/flamingos.jpeg",
    alt: "Greater flamingos wading in a coastal lagoon",
    caption: "Flamingos in the Lagoon",
    category: "wildlife",
  },
  {
    src: "/images/new-img/grey-heron.jpg",
    alt: "A grey heron standing at the water's edge",
    caption: "Grey Heron",
    category: "wildlife",
  },
  {
    src: "/images/new-img/herons-egrets.jpeg",
    alt: "Herons and egrets gathered near a wetland",
    caption: "Herons & Egrets",
    category: "wildlife",
  },
  {
    src: "/images/new-img/painted-storks.jpg",
    alt: "A flock of painted storks feeding in the wetlands",
    caption: "Painted Storks",
    category: "wildlife",
  },
  {
    src: "/images/new-img/monkey-species.jpg",
    alt: "A monkey resting in the dry-zone forest",
    caption: "Monkey in the Wild",
    category: "wildlife",
  },
  {
    src: "/images/new-img/water-baffalo.jpg",
    alt: "A water buffalo wallowing in a lagoon",
    caption: "Water Buffalo",
    category: "wildlife",
  },
  {
    src: "/images/new-img/wild-boar.jpeg",
    alt: "A wild boar foraging in the dry-zone scrub",
    caption: "Wild Boar in the Scrub",
    category: "wildlife",
  },
  {
    src: "/images/new-img/crocodile.jpg",
    alt: "A mugger crocodile resting on the riverbank",
    caption: "Crocodile on the Bank",
    category: "wildlife",
  },
  {
    src: "/images/new-img/crocodile-1.jpg",
    alt: "A mugger crocodile basking near the water's edge",
    caption: "Basking Crocodile",
    category: "wildlife",
  },
  {
    src: "/images/new-img/IMG_1457.jpg",
    alt: "Safari jeeps parked and ready before a game drive",
    caption: "Safari Fleet",
    category: "safari-life",
  },
  {
    src: "/images/new-img/IMG_2170.jpg",
    alt: "A convoy of safari jeeps driving into the sunset",
    caption: "Sunset Safari Convoy",
    category: "safari-life",
  },
  {
    src: "/images/new-img/IMG_4365-1.jpg",
    alt: "A wildlife photographer capturing the action with a telephoto lens",
    caption: "Wildlife Photographer at Work",
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
              <div className="group relative aspect-square w-full overflow-hidden rounded-2xl">
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
