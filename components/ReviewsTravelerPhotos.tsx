import Image from "next/image";
import Reveal from "@/components/Reveal";

type PhotoCard = {
  src: string;
  alt: string;
  caption: string;
};

// Sample placeholder photos — replace with real, permission-cleared guest
// submissions as they come in. Mirrors the placeholder convention used in
// ReviewsGuestStories.tsx (STORIES) and Footer.tsx (TRUST_BADGES).
const SAMPLE_PHOTOS: PhotoCard[] = [
  {
    src: "/images/parks/yala.jpg",
    alt: "Misty hills and open grassland in Yala National Park",
    caption: "Add a real, approved guest photo here",
  },
  {
    src: "/images/wildlife/spotted-deer.jpg",
    alt: "A spotted deer grazing in open grassland",
    caption: "Add a real, approved guest photo here",
  },
  {
    src: "/images/scenic/safari-jeeps.jpg",
    alt: "A line of 4x4 safari jeeps ready for a game drive",
    caption: "Add a real, approved guest photo here",
  },
  {
    src: "/images/wildlife/peacock.jpg",
    alt: "An Indian peacock displaying its plumage",
    caption: "Add a real, approved guest photo here",
  },
];

export default function ReviewsTravelerPhotos() {
  return (
    <section className="w-full bg-white">
      <div className="mx-auto max-w-[1600px] px-10 py-16 sm:px-20 sm:py-20 lg:px-40 lg:py-24">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-medium tracking-tight text-brand-ink sm:text-4xl lg:text-5xl">
            Traveler Photos
          </h2>
          <p className="mt-4 text-base leading-relaxed text-brand-ink-muted">
            As guests share their own photos from the trip, with permission, we&apos;ll feature them here. Check back soon — or add yours when you submit your review below.
          </p>
        </Reveal>

        <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-4 lg:mt-16 lg:gap-6">
          {SAMPLE_PHOTOS.map((photo, i) => (
            <Reveal key={photo.src} delay={(i % 4) * 0.06}>
              <div className="group relative aspect-square w-full overflow-hidden rounded-2xl">
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  sizes="(min-width: 1024px) 25vw, 50vw"
                  quality={75}
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/0 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <span className="absolute inset-x-0 bottom-0 p-3 text-xs font-medium text-white/0 transition-all duration-300 group-hover:text-white">
                  {photo.caption}
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
