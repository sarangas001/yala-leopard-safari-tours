import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Reveal from "@/components/Reveal";
import { getPark, getParkSlugs } from "@/lib/parks";

export function generateStaticParams() {
  return getParkSlugs().map((park) => ({ park }));
}

export const metadata: Metadata = {
  title: "Booking Confirmation | Yala Leopard Safari Tours",
  description: "Your safari booking request has been received.",
};

export default async function BookingConfirmation({
  params,
  searchParams,
}: {
  params: Promise<{ park: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const { park } = await params;
  if (!getPark(park)) notFound();

  const sp = await searchParams;
  const rawRef = Array.isArray(sp.ref) ? sp.ref[0] : sp.ref;
  const reference = rawRef && /^[A-Z0-9-]{4,24}$/.test(rawRef) ? rawRef : null;

  return (
    <main className="flex flex-1 flex-col bg-white">
      <section className="w-full bg-white">
        <div className="mx-auto max-w-[1600px] px-10 py-[1.5cm] sm:px-20 sm:py-[1.5cm] lg:px-40 lg:py-[2.5cm]">
          <Reveal className="mx-auto max-w-2xl text-center">
            <span className="inline-flex items-center gap-3 text-xs font-medium uppercase tracking-[0.22em] text-brand-orange">
              <span className="h-px w-6 bg-brand-orange/50" aria-hidden="true" />
              Booking Request Received
              <span className="h-px w-6 bg-brand-orange/50" aria-hidden="true" />
            </span>
            <h1 className="mt-4 font-display text-4xl font-medium leading-[1.1] tracking-tight text-brand-ink sm:text-5xl">
              Thank You: We&apos;ve Got Your Request
            </h1>
            <p className="mt-4 text-base leading-relaxed text-brand-ink-muted">
              Our team has received your booking details and will contact you shortly to confirm availability and arrange payment.
              {reference ? (
                <>
                  {" "}Your reference is <span className="font-semibold text-brand-ink">{reference}</span>.
                </>
              ) : null}
            </p>
          </Reveal>

          <Reveal delay={0.15} className="mx-auto mt-8 max-w-2xl">
            <p className="text-sm leading-relaxed text-brand-ink-muted">
              <span className="font-semibold text-brand-ink">Good to know:</span> your safari is not confirmed until we reply. We usually respond by email or WhatsApp within a few hours. For anything urgent, message us directly.
            </p>
          </Reveal>

          <Reveal delay={0.2} className="mx-auto mt-10 flex max-w-2xl flex-wrap items-center justify-center gap-3">
            <a
              href="https://wa.me/94760915578"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-[#25D366] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#1EBE5A]"
            >
              WhatsApp Us
            </a>
            <a
              href={`/book/${park}`}
              className="inline-flex items-center gap-2 rounded-full border border-earth/25 px-6 py-3 text-sm font-semibold text-brand-ink transition-colors hover:bg-sand"
            >
              Start Another Booking
            </a>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
