import Image from "next/image";
import Reveal from "@/components/Reveal";

const BUSINESS = {
  name: "Yala Leopard Safari Tours",
  address: "538/B Gagasiripura, Debarawawa, Tissamaharama, Sri Lanka",
  phoneDisplay: "076 043 5578",
  phoneHref: "tel:+94760435578",
  email: "yalaleopardsafariride@gmail.com",
};

// Keyless "output=embed" query map — swap for the real Google Business
// Profile embed snippet (Share > Embed a map) once you have it, so the
// verified pin, name and reviews show up instead of a plain address search.
const MAP_EMBED_SRC =
  "https://www.google.com/maps?q=" + encodeURIComponent(BUSINESS.address) + "&output=embed";

export default function ContactMapSection() {
  return (
    <section className="w-full bg-white">
      <div className="mx-auto max-w-[1600px] px-10 py-16 sm:px-20 sm:py-20 lg:px-40 lg:py-24">
        <div className="grid grid-cols-1 overflow-hidden rounded-3xl border border-black/6 shadow-sm lg:grid-cols-2">
          <Reveal className="flex flex-col justify-center bg-white p-8 sm:p-10 lg:p-12">
            <h2 className="font-display text-2xl font-medium text-brand-ink sm:text-3xl">
              General Contacts
            </h2>

            <div className="mt-8 space-y-6">
              <div className="flex items-start gap-4">
                <Image
                  src="/images/icons/location.svg"
                  alt=""
                  aria-hidden="true"
                  width={34}
                  height={34}
                  className="h-9 w-9 shrink-0"
                />
                <div>
                  <p className="font-semibold text-brand-ink">{BUSINESS.name}</p>
                  <p className="mt-1 text-sm leading-relaxed text-brand-ink-muted">
                    {BUSINESS.address}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Image
                  src="/images/icons/telephone.svg"
                  alt=""
                  aria-hidden="true"
                  width={34}
                  height={34}
                  className="h-9 w-9 shrink-0"
                />
                <div>
                  <p className="font-semibold text-brand-ink">Phone</p>
                  <a
                    href={BUSINESS.phoneHref}
                    className="mt-1 block text-sm text-brand-ink-muted transition-colors hover:text-forest"
                  >
                    {BUSINESS.phoneDisplay}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Image
                  src="/images/icons/mail.svg"
                  alt=""
                  aria-hidden="true"
                  width={34}
                  height={34}
                  className="h-9 w-9 shrink-0"
                />
                <div>
                  <p className="font-semibold text-brand-ink">Email</p>
                  <a
                    href={`mailto:${BUSINESS.email}`}
                    className="mt-1 block text-sm text-brand-ink-muted transition-colors hover:text-forest"
                  >
                    {BUSINESS.email}
                  </a>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.12} className="relative min-h-100 w-full">
            <iframe
              src={MAP_EMBED_SRC}
              title={`${BUSINESS.name} location map`}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0 h-full w-full border-0"
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
