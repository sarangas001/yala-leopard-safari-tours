import Image from "next/image";
import Reveal from "@/components/Reveal";

type PhotoCard = {
  src: string;
  alt: string;
  caption: string;
};

const GUEST_PHOTOS: PhotoCard[] = [
  {
    src: "/images/new-img/IMG_2561.jpg",
    alt: "Two guests posing beside the safari jeep after their Yala game drive",
    caption: "Guest Photo",
  },
  {
    src: "/images/new-img/14.jpg",
    alt: "A family posing together on their safari jeep",
    caption: "Guest Photo",
  },
  {
    src: "/images/new-img/IMG_2067.jpg",
    alt: "A group of friends posing beside the safari jeep",
    caption: "Guest Photo",
  },
  {
    src: "/images/new-img/IMG_2365.jpg",
    alt: "A guest and her daughter posing beside the safari jeep",
    caption: "Guest Photo",
  },
  {
    src: "/images/new-img/IMG_2374.jpg",
    alt: "A young family enjoying their safari jeep experience",
    caption: "Guest Photo",
  },
  {
    src: "/images/new-img/9.jpg",
    alt: "Guests smiling from their safari jeep before a game drive",
    caption: "Guest Photo",
  },
  {
    src: "/images/new-img/IMG_4846.jpg",
    alt: "A couple posing together on their safari jeep",
    caption: "Guest Photo",
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
            Real moments from guests who joined us on safari. Add yours when you submit your review below.
          </p>
        </Reveal>

        <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-4 lg:mt-16 lg:gap-6">
          {GUEST_PHOTOS.map((photo, i) => (
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
