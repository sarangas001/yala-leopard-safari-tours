import Image from "next/image";
import Reveal from "@/components/Reveal";

export type ParkHeroCta = {
  label: string;
  href: string;
  variant?: "primary" | "whatsapp";
};

function WhatsAppIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path
        d="M12 3.5a8.4 8.4 0 0 0-7.2 12.7L3.5 20.5l4.4-1.3A8.4 8.4 0 1 0 12 3.5Z"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path
        d="M8.8 8.4c.2-.5.4-.5.6-.5h.5c.2 0 .4 0 .5.4.2.5.6 1.6.6 1.7.1.1.1.3 0 .4-.1.2-.1.3-.3.4-.1.2-.3.3-.4.5-.1.1-.3.3-.1.6.2.3.8 1.3 1.7 2.1 1.2 1 2.1 1.4 2.4 1.5.3.1.5.1.6-.1.2-.2.7-.8.9-1.1.2-.2.4-.2.6-.1l1.5.7c.2.1.4.2.4.3.1.2.1.9-.2 1.5-.3.6-1.5 1.2-2.1 1.2-.5.1-1.2.1-1.9-.1-.4-.1-1-.3-1.7-.6-3-1.3-4.9-4.3-5-4.5-.1-.2-1.2-1.6-1.2-3s.7-2.1.9-2.4Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default function ParkHero({
  title,
  description,
  video,
  image,
  ctas,
}: {
  title: string;
  description?: string;
  video?: string;
  image?: string;
  ctas?: ParkHeroCta[];
}) {
  return (
    <section className="relative w-full overflow-hidden bg-white">
      <div className="absolute inset-0">
        {video ? (
          <video
            className="h-full w-full object-cover"
            src={video}
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
          />
        ) : image ? (
          <Image src={image} alt="" fill priority sizes="100vw" quality={80} className="object-cover" />
        ) : null}
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

          {ctas && ctas.length > 0 ? (
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              {ctas.map((cta) =>
                cta.variant === "whatsapp" ? (
                  <a
                    key={cta.label}
                    href={cta.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-[#25D366] px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-black/20 transition-all hover:bg-[#1EBE5A] hover:shadow-xl"
                  >
                    <WhatsAppIcon className="h-4.5 w-4.5" />
                    {cta.label}
                  </a>
                ) : (
                  <a
                    key={cta.label}
                    href={cta.href}
                    className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-brand-ink shadow-lg shadow-black/20 transition-all hover:bg-white/95 hover:shadow-xl hover:shadow-black/25 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-ink"
                  >
                    {cta.label}
                    <span aria-hidden="true">→</span>
                  </a>
                )
              )}
            </div>
          ) : null}
        </Reveal>
      </div>
    </section>
  );
}
