import Image from "next/image";
import Reveal from "@/components/Reveal";

export default function PageHero({
  title,
  description,
  image,
  alt,
}: {
  title: string;
  description?: string;
  image: string;
  alt: string;
}) {
  return (
    <section className="relative w-full overflow-hidden bg-white">
      <div className="absolute inset-0">
        <Image src={image} alt={alt} fill priority sizes="100vw" quality={75} className="object-cover" />
        <div className="absolute inset-0 bg-linear-to-b from-black/65 via-black/35 to-black/55" />
      </div>

      <div className="relative z-10 mx-auto max-w-[1600px] px-10 pt-32 pb-20 text-center sm:px-20 sm:pt-40 sm:pb-24 lg:flex lg:min-h-175 lg:items-center lg:justify-center lg:px-40 lg:py-0">
        <Reveal className="mx-auto max-w-2xl">
          <h1 className="font-display text-4xl font-medium leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-6xl">
            {title}
          </h1>
          {description ? (
            <p className="mx-auto mt-5 max-w-xl text-sm leading-relaxed text-white/80 sm:text-base">
              {description}
            </p>
          ) : null}
        </Reveal>
      </div>
    </section>
  );
}
