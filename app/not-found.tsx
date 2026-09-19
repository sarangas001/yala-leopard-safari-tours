import Image from "next/image";
import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex flex-1 flex-col bg-white">
      <section className="relative w-full flex-1 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/parks/yala.jpg"
            alt=""
            fill
            priority
            aria-hidden="true"
            sizes="100vw"
            quality={70}
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/65" />
        </div>

        <div className="relative z-10 mx-auto flex min-h-150 max-w-[1600px] flex-col items-center justify-center px-10 py-32 text-center sm:px-20 lg:px-40">
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-white/70">
            Error 404
          </p>
          <h1 className="mt-4 font-display text-4xl font-medium tracking-tight text-white sm:text-5xl lg:text-6xl">
            This Trail Leads Nowhere
          </h1>
          <p className="mx-auto mt-5 max-w-md text-base leading-relaxed text-white/80">
            The page you&apos;re looking for has wandered off — much like
            the wildlife it&apos;s named after. Let&apos;s get you back on
            track.
          </p>
          <Link
            href="/"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-brand-ink shadow-lg shadow-black/20 transition-all hover:bg-white/90 hover:shadow-xl hover:shadow-black/25"
          >
            Back to Home
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </section>
    </main>
  );
}
