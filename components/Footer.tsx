import Image from "next/image";
import Link from "next/link";

const CONTACT = {
  phoneDisplay: "076 043 5578",
  phoneHref: "tel:+94760435578",
  whatsappDisplay: "076 091 5578",
  whatsappHref: "https://wa.me/94760915578",
  email: "yalaleopardsafariride@gmail.com",
  location: "538/B Gagasiripura, Debarawawa, Tissamaharama, Sri Lanka",
  mapHref:
    "https://maps.google.com/?q=538/B+Gagasiripura,+Debarawawa,+Tissamaharama,+Sri+Lanka",
};

const CONTACT_ITEMS: {
  key: string;
  label: string;
  value: string;
  href: string;
  icon: string;
  external?: boolean;
}[] = [
  {
    key: "whatsapp",
    label: "WhatsApp",
    value: CONTACT.whatsappDisplay,
    href: CONTACT.whatsappHref,
    icon: "/images/icons/whatsapp.svg",
    external: true,
  },
  {
    key: "phone",
    label: "Phone",
    value: CONTACT.phoneDisplay,
    href: CONTACT.phoneHref,
    icon: "/images/icons/telephone.svg",
  },
  {
    key: "email",
    label: "Email",
    value: CONTACT.email,
    href: `mailto:${CONTACT.email}`,
    icon: "/images/icons/mail.svg",
  },
  {
    key: "location",
    label: "Location",
    value: CONTACT.location,
    href: CONTACT.mapHref,
    icon: "/images/icons/location.svg",
    external: true,
  },
];

// Placeholder destination/page anchors — swap for real routes as those pages go live.
const NAV_COLUMNS: { heading: string; links: { href: string; label: string }[] }[] = [
  {
    heading: "Explore",
    links: [
      { href: "/", label: "Home" },
      { href: "/#about", label: "About Us" },
      { href: "/#park-yala", label: "Yala National Park" },
      { href: "/#wildlife", label: "Wildlife" },
      { href: "/#gallery", label: "Safari Gallery" },
      { href: "#", label: "Travel Guide" },
      { href: "#", label: "Blog" },
      { href: "/#enquire", label: "Contact Us" },
    ],
  },
  {
    heading: "Safari Experiences",
    links: [
      { href: "/#enquire", label: "Morning Safari" },
      { href: "/#enquire", label: "Afternoon Safari" },
      { href: "/#enquire", label: "Full-Day Safari" },
      { href: "/#enquire", label: "Private Safari" },
      { href: "/#enquire", label: "Family Safari" },
      { href: "/#enquire", label: "Photography Safari" },
      { href: "/#enquire", label: "Leopard Safari" },
      { href: "/#enquire", label: "Bird-Watching Safari" },
    ],
  },
  {
    heading: "Plan Your Safari",
    links: [
      { href: "/#enquire", label: "Safari Packages" },
      { href: "#", label: "Safari Vehicles" },
      { href: "#", label: "What to Bring" },
      { href: "#", label: "Best Time to Visit" },
      { href: "#", label: "Pickup Information" },
      { href: "#", label: "Frequently Asked Questions" },
      { href: "#", label: "Booking Terms" },
      { href: "#", label: "Cancellation Policy" },
    ],
  },
  {
    heading: "Other Destinations",
    links: [
      { href: "/#park-udawalawe", label: "Udawalawe National Park" },
      { href: "/#park-bundala", label: "Bundala National Park" },
      { href: "#", label: "Lunugamvehera National Park" },
      { href: "#", label: "Wilpattu National Park" },
    ],
  },
  {
    heading: "Support & Legal",
    links: [
      { href: "/#enquire", label: "Contact Us" },
      { href: "#", label: "Privacy Policy" },
      { href: "#", label: "Cookie Policy" },
      { href: "#", label: "Terms and Conditions" },
      { href: "#", label: "Responsible Tourism" },
      { href: "#", label: "Sitemap" },
    ],
  },
];

// Trust & recognition badges — sample placeholder artwork, swap for genuine
// certifications/ratings this business has actually received before launch.
const TRUST_BADGES = [
  { src: "/images/trust/tripadvisor-reviews.svg", alt: "TripAdvisor reviews badge (sample)" },
  { src: "/images/trust/google-reviews.svg", alt: "Google reviews badge (sample)" },
  { src: "/images/trust/sri-lanka-tourism.svg", alt: "Sri Lanka Tourism badge (sample)" },
  { src: "/images/trust/responsible-tourism.svg", alt: "Responsible Tourism badge (sample)" },
  { src: "/images/trust/safari-excellence.svg", alt: "Safari Excellence badge (sample)" },
];

type IconProps = { className?: string };

function FacebookIcon({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path
        d="M14 8.5h2V5.7h-2c-2 0-3.3 1.4-3.3 3.5v1.8H8.5v2.8h2.2V19h2.9v-5.2h2.2l.4-2.8h-2.6V9.2c0-.5.2-.7.7-.7Z"
        fill="currentColor"
      />
    </svg>
  );
}

function InstagramIcon({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <rect x="4.5" y="4.5" width="15" height="15" rx="4" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="12" cy="12" r="3.3" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="16.2" cy="7.8" r="0.9" fill="currentColor" />
    </svg>
  );
}

function YouTubeIcon({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <rect x="3" y="6.5" width="18" height="11" rx="3.5" stroke="currentColor" strokeWidth="1.5" />
      <path d="M10.5 9.8v4.4l4-2.2Z" fill="currentColor" />
    </svg>
  );
}

function TikTokIcon({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path
        d="M14 4v9.6a2.6 2.6 0 1 1-2-2.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M14 4c.3 2 1.8 3.5 3.8 3.7"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

function TripAdvisorIcon({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <circle cx="8.2" cy="13" r="3" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="15.8" cy="13" r="3" stroke="currentColor" strokeWidth="1.5" />
      <path d="M8.2 13a3.8 3.8 0 0 1 7.6 0" stroke="currentColor" strokeWidth="1.5" />
      <path d="M4 8.5c1.6-1 3.9-1.5 8-1.5s6.4.5 8 1.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function WhatsAppIcon({ className = "h-5 w-5" }: IconProps) {
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

function ArrowRightIcon({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path d="M4 12h15M13 6l6 6-6 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

const SOCIAL_LINKS = [
  { label: "Facebook", Icon: FacebookIcon },
  { label: "Instagram", Icon: InstagramIcon },
  { label: "YouTube", Icon: YouTubeIcon },
  { label: "TikTok", Icon: TikTokIcon },
  { label: "TripAdvisor", Icon: TripAdvisorIcon },
];

function NavLink({ href, label }: { href: string; label: string }) {
  if (href === "/") {
    return (
      <li>
        <Link
          href={href}
          className="text-sm text-brand-ink-muted transition-colors hover:text-forest focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest/40 rounded"
        >
          {label}
        </Link>
      </li>
    );
  }
  return (
    <li>
      <a
        href={href}
        className="text-sm text-brand-ink-muted transition-colors hover:text-forest focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest/40 rounded"
      >
        {label}
      </a>
    </li>
  );
}

function NavColumn({
  heading,
  links,
}: {
  heading: string;
  links: { href: string; label: string }[];
}) {
  return (
    <div className="text-center sm:text-left">
      <h3 className="text-sm font-semibold uppercase tracking-[0.14em] text-brand-ink">
        {heading}
      </h3>
      <ul className="mt-4 space-y-2.5">
        {links.map((link) => (
          <NavLink key={link.label} {...link} />
        ))}
      </ul>
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="w-full bg-white text-brand-ink">
      {/* ============ SECTION 1 — Brand, newsletter, contact & trust ============ */}
      <div className="mx-auto max-w-[1600px] px-10 py-10 sm:px-20 sm:py-12 lg:px-40 lg:py-14">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:justify-center-safe lg:gap-14">
          {/* Brand area */}
          <div className="mx-auto max-w-sm text-center sm:mx-0 sm:text-left">
            <Image
              src="/logo-black.png"
              alt="Yala Leopard Safari Tours logo"
              width={5320}
              height={2524}
              className="h-auto w-full max-w-65"
            />
            <p className="mt-5 text-sm leading-relaxed text-brand-ink-muted">
              Discover the untamed beauty of Yala, Udawalawe and Bundala with
              unforgettable safari experiences led by knowledgeable local
              guides. From leopard sightings at dawn to elephant herds at the
              waterhole, we help you explore Sri Lanka&apos;s wild side
              responsibly, safely and at an unhurried pace.
            </p>
            <div className="mt-6 flex justify-center gap-3 sm:justify-start">
              {SOCIAL_LINKS.map(({ label, Icon }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-brand-ink/20 text-brand-ink transition-colors hover:border-brand-ink hover:bg-brand-ink hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-ink/40 focus-visible:ring-offset-2 focus-visible:ring-offset-white"
                >
                  <Icon className="h-6 w-6" />
                </a>
              ))}
            </div>
          </div>

          {/* Newsletter area */}
          <div className="mx-auto w-full max-w-md text-center sm:mx-0 sm:text-left">
            <h3 className="font-display text-2xl font-medium text-brand-ink sm:text-[1.75rem]">
              Get Safari Stories &amp; Travel Inspiration
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-brand-ink-muted">
              Sign up for Yala travel tips, wildlife updates and special
              safari offers — sent straight to your inbox.
            </p>
            <form className="mt-5 flex items-center gap-2 rounded-full border border-earth/20 bg-white p-1.5 pl-5">
              <label htmlFor="footer-newsletter-email" className="sr-only">
                Email address
              </label>
              <input
                id="footer-newsletter-email"
                type="email"
                required
                placeholder="Your email address"
                autoComplete="email"
                suppressHydrationWarning
                className="w-full bg-transparent text-sm text-black placeholder:text-brand-ink-muted/70 focus:outline-none"
              />
              <button
                type="submit"
                aria-label="Subscribe"
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-black text-white transition-colors hover:bg-black/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/50 focus-visible:ring-offset-2 focus-visible:ring-offset-white"
              >
                <ArrowRightIcon className="h-4 w-4" />
              </button>
            </form>
          </div>
        </div>

        {/* Contact row */}
        <div className="mt-8 grid grid-cols-1 gap-x-8 gap-y-5 sm:grid-cols-2 lg:grid-cols-4">
          {CONTACT_ITEMS.map((item) => (
            <a
              key={item.key}
              href={item.href}
              {...(item.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              className="flex items-center justify-center gap-3 rounded text-sm font-medium text-brand-ink transition-colors hover:text-forest focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest/40 sm:justify-start"
            >
              <Image
                src={item.icon}
                alt=""
                aria-hidden="true"
                width={34}
                height={34}
                className="h-10 w-10 shrink-0"
              />
              <span className="min-w-0 text-left">
                <span className="block text-xs uppercase tracking-wide text-brand-ink-muted">{item.label}</span>
                <span className="block truncate">{item.value}</span>
              </span>
            </a>
          ))}
        </div>

        {/* Trust & recognition row — sample placeholder artwork, see comment above TRUST_BADGES */}
        <div className="mt-8">
          <div className="flex flex-wrap items-center justify-center gap-10 sm:gap-12">
            {TRUST_BADGES.map((badge) => (
              <Image
                key={badge.src}
                src={badge.src}
                alt={badge.alt}
                width={360}
                height={300}
                className="h-16 w-auto sm:h-20"
              />
            ))}
          </div>
        </div>
      </div>

      {/* ============ SECTION 2 — Navigation links & copyright ============ */}
      <div>
        <div className="mx-auto max-w-[1600px] px-10 py-10 sm:px-20 lg:px-40 lg:py-10">
          <div className="grid grid-cols-1 gap-x-8 gap-y-8 sm:grid-cols-2 sm:gap-y-10 lg:grid-cols-5">
            {NAV_COLUMNS.map((column) => (
              <NavColumn key={column.heading} {...column} />
            ))}
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div>
        <div className="mx-auto max-w-[1600px] px-10 py-6 sm:px-20 lg:px-40">
          <div className="flex flex-col items-center gap-4 text-center text-xs text-brand-ink-muted sm:flex-row sm:items-center sm:justify-between sm:text-left">
            <p suppressHydrationWarning>© {new Date().getFullYear()} Yala Leopard Safari Tours. All Rights Reserved.</p>
            <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 sm:justify-start">
              <a href="#" className="transition-colors hover:text-forest">Privacy Policy</a>
              <a href="#" className="transition-colors hover:text-forest">Terms and Conditions</a>
              <a href="#" className="transition-colors hover:text-forest">Cookie Policy</a>
            </div>
          </div>
          <p className="mt-4 text-center text-[11px] italic text-brand-ink-muted/80 sm:text-left">
            Designed with respect for Sri Lanka&apos;s wildlife.
          </p>
        </div>
      </div>

      {/* Floating WhatsApp button — placeholder number, see CONTACT above.
          suppressHydrationWarning: fixed, bottom-right floating buttons are a
          common target for browser/OS chrome (e.g. a floating PIP or
          translate control) to reposition via an injected inline `translate`
          style after the initial paint but before React hydrates — that's a
          client-side DOM mutation outside our render, not a real mismatch. */}
      <a
        href={CONTACT.whatsappHref}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with us on WhatsApp"
        suppressHydrationWarning
        className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-[#25D366]/40 transition-colors hover:bg-[#1EBE5A] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366]/50 focus-visible:ring-offset-2"
      >
        <WhatsAppIcon className="h-6 w-6" />
      </a>
    </footer>
  );
}
