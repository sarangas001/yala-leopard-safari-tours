import Image from "next/image";

export default function ComingSoon({
  title,
  image,
  alt,
}: {
  title: string;
  image: string;
  alt: string;
}) {
  return (
    <>
      <section className="relative w-full overflow-hidden bg-white">
        <div className="absolute inset-0">
          <Image src={image} alt={alt} fill priority sizes="100vw" quality={70} className="object-cover" />
          <div className="absolute inset-0 bg-black/55" />
        </div>
        <div className="relative z-10 mx-auto flex min-h-100 max-w-[1600px] items-center justify-center px-10 pt-24 pb-16 text-center sm:px-20 sm:pt-28 sm:pb-20 lg:px-40 lg:pt-32 lg:pb-24">
          <h1 className="font-display text-4xl font-medium tracking-tight text-white sm:text-5xl lg:text-6xl">
            {title}
          </h1>
        </div>
      </section>

      <section className="w-full bg-white">
        <div className="mx-auto max-w-[1600px] px-10 py-16 text-center sm:px-20 sm:py-20 lg:px-40 lg:py-24">
          <p className="mx-auto max-w-md text-base leading-relaxed text-brand-ink-muted">
            This page is being built. In the meantime, get in touch and
            we&apos;ll help you plan your safari.
          </p>
          {/* eslint-disable-next-line @next/next/no-html-link-for-pages -- cross-page anchor to the Home page's enquiry form */}
          <a
            href="/#enquire"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-brand-orange px-7 py-3.5 text-sm font-semibold text-white shadow-md shadow-brand-orange/25 transition-all hover:bg-brand-orange-dark hover:shadow-lg hover:shadow-brand-orange/30"
          >
            Contact Us
            <span aria-hidden="true">→</span>
          </a>
        </div>
      </section>
    </>
  );
}
