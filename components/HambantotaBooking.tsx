import Reveal from "@/components/Reveal";
import TransferBookingForm from "@/components/TransferBookingForm";

export default function HambantotaBooking() {
  return (
    <section id="book-transfer" className="w-full scroll-mt-20 bg-white">
      <div className="mx-auto max-w-[1600px] px-10 pb-[1.5cm] sm:px-20 sm:pb-[1.5cm] lg:px-40 lg:pb-[2.5cm]">
        <Reveal className="mx-auto max-w-3xl">
          <h2 className="text-center font-display text-3xl font-medium tracking-tight text-brand-ink sm:text-4xl">
            Book Your Hambantota to Yala Transfer
          </h2>
          <p className="mt-4 mb-8 text-center text-sm leading-relaxed text-brand-ink-muted">
            Share your pickup details and we&apos;ll confirm your booking by email or WhatsApp.
          </p>
          <TransferBookingForm type="hambantota" />
        </Reveal>
      </div>
    </section>
  );
}
