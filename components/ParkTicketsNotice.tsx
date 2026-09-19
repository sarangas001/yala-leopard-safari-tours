import Reveal from "@/components/Reveal";

export default function ParkTicketsNotice() {
  return (
    <section className="w-full bg-white">
      <div className="mx-auto max-w-[1600px] px-10 py-16 sm:px-20 sm:py-20 lg:px-40 lg:py-24">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-medium tracking-tight text-brand-ink sm:text-4xl lg:text-5xl">
            Park Entrance Tickets
          </h2>
          <p className="mt-4 text-base leading-relaxed text-brand-ink-muted">
            Park entrance tickets are charged separately from your safari&apos;s
            base price. Rates are set by Sri Lanka&apos;s Department of Wildlife
            Conservation and vary by park, so this cost isn&apos;t bundled into
            our package pricing — it&apos;s shown as its own line item in your
            quote whenever it applies, so the final cost is always clear before
            you confirm your booking.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
