import Reveal from "@/components/Reveal";

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
      </div>
    </section>
  );
}
