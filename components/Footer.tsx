import Image from "next/image";
import Link from "next/link";

// Placeholder contact details — replace with the real Yala Leopard Safari
// Tours phone, WhatsApp, email and pickup/office location before launch.
const CONTACT = {
  phoneDisplay: "+94 11 234 5678",
  phoneHref: "tel:+94112345678",
  whatsappDisplay: "+94 11 234 5678",
  whatsappHref: "https://wa.me/94112345678",
  email: "info@yalaleopardsafaritours.com",
  location: "Tissamaharama, Sri Lanka",
  mapHref: "https://maps.google.com/?q=Tissamaharama+Sri+Lanka",
};

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

// Example placeholder recognition badges — replace with genuine
// certifications/ratings this business has actually received.
const TRUST_BADGES = [
  { label: "TripAdvisor", detail: "4.8 ★ sample rating", icon: "star" as const },
  { label: "Google Reviews", detail: "4.9 ★ sample rating", icon: "google" as const },
  { label: "Sri Lanka Tourism", detail: "Sample registration", icon: "shield" as const },
  { label: "Responsible Tourism", detail: "Sample certification", icon: "leaf" as const },
  { label: "Safari Excellence", detail: "Sample award", icon: "ribbon" as const },
];

type IconProps = { className?: string };

function FacebookIcon({ className = "h-4 w-4" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path
        d="M14 8.5h2V5.7h-2c-2 0-3.3 1.4-3.3 3.5v1.8H8.5v2.8h2.2V19h2.9v-5.2h2.2l.4-2.8h-2.6V9.2c0-.5.2-.7.7-.7Z"
        fill="currentColor"
      />
    </svg>
  );
}

function InstagramIcon({ className = "h-4 w-4" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <rect x="4.5" y="4.5" width="15" height="15" rx="4" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="12" cy="12" r="3.3" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="16.2" cy="7.8" r="0.9" fill="currentColor" />
    </svg>
  );
}

function YouTubeIcon({ className = "h-4 w-4" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <rect x="3" y="6.5" width="18" height="11" rx="3.5" stroke="currentColor" strokeWidth="1.5" />
      <path d="M10.5 9.8v4.4l4-2.2Z" fill="currentColor" />
    </svg>
  );
}

function TikTokIcon({ className = "h-4 w-4" }: IconProps) {
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

function TripAdvisorIcon({ className = "h-4 w-4" }: IconProps) {
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

function PhoneIcon({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path
        d="M7.3 4.5 9.7 9l-1.9 1.9a12.5 12.5 0 0 0 5.3 5.3l1.9-1.9 4.5 2.4-.5 3.1c-.1.8-.8 1.4-1.6 1.3-3.7-.5-7.2-2.3-9.8-4.9C4.9 15.6 3.1 12.1 2.6 8.4c-.1-.8.5-1.5 1.3-1.6l3.4-.3Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function MailIcon({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <rect x="3.5" y="5.5" width="17" height="13" rx="2.5" stroke="currentColor" strokeWidth="1.5" />
      <path d="m4.5 7 7.5 6 7.5-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function MapPinIcon({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path
        d="M12 21s7-6.1 7-11.5A7 7 0 0 0 5 9.5C5 14.9 12 21 12 21Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <circle cx="12" cy="9.5" r="2.4" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

function ChevronDownIcon({ className = "h-4 w-4" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path d="m6 9 6 6 6-6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
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

function StarIcon({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg viewBox="0 0 20 20" fill="currentColor" className={className} aria-hidden="true">
      <path d="M10 1.5l2.6 5.4 5.9.7-4.3 4.2 1 5.9L10 14.9l-5.2 2.8 1-5.9-4.3-4.2 5.9-.7L10 1.5Z" />
    </svg>
  );
}

function GoogleIcon({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5" />
      <path d="M12 12h6.5c.1.6.2 1.2.2 1.8 0 3.9-2.7 6.7-6.7 6.7A8.5 8.5 0 1 1 17 6.4l-2 1.9a5.8 5.8 0 1 0 2 7.3H12v-3.6Z" fill="currentColor" />
    </svg>
  );
}

function ShieldIcon({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path
        d="M12 3.5 19 6v5.5c0 4.6-3 8.1-7 9.5-4-1.4-7-4.9-7-9.5V6l7-2.5Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path d="m8.7 12 2.2 2.2 4.4-4.4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function LeafIcon({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path
        d="M19 5C10 5 5 10 5 17c0 .7 0 1.3.1 2 6.8 0 12-4.9 13.6-11.3.2-.9.3-1.8.3-2.7Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path d="M6 18c3-4 6.5-7 12.5-11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function RibbonIcon({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <circle cx="12" cy="9" r="5.5" stroke="currentColor" strokeWidth="1.4" />
      <path d="M9 13.5 7.5 20l4.5-2 4.5 2-1.5-6.5" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
    </svg>
  );
}

const BADGE_ICONS = {
  star: StarIcon,
  google: GoogleIcon,
  shield: ShieldIcon,
  leaf: LeafIcon,
  ribbon: RibbonIcon,
};

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
    <div className="border-b border-earth/10 py-4 sm:border-0 sm:py-0">
      {/* Mobile: accessible accordion using native <details>/<summary> */}
      <details className="group sm:hidden">
        <summary className="flex cursor-pointer list-none items-center justify-between rounded text-sm font-semibold uppercase tracking-[0.14em] text-brand-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest/40">
          {heading}
          <ChevronDownIcon className="h-4 w-4 shrink-0 text-brand-ink-muted transition-transform duration-200 group-open:rotate-180" />
        </summary>
        <ul className="mt-4 space-y-3 pl-0.5">
          {links.map((link) => (
            <NavLink key={link.label} {...link} />
          ))}
        </ul>
      </details>

      {/* Tablet / desktop: always-visible column */}
      <div className="hidden sm:block">
        <h3 className="text-sm font-semibold uppercase tracking-[0.14em] text-brand-ink">
          {heading}
        </h3>
        <ul className="mt-5 space-y-3">
          {links.map((link) => (
            <NavLink key={link.label} {...link} />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="w-full bg-sand text-brand-ink">
      {/* ============ SECTION 1 — Brand, newsletter, contact & trust ============ */}
      <div className="mx-auto max-w-[1600px] px-10 py-16 sm:px-20 sm:py-20 lg:px-40 lg:py-20">
        <div className="flex flex-col gap-14 lg:flex-row lg:items-start lg:justify-between lg:gap-20">
          {/* Brand area */}
          <div className="max-w-sm">
            <Image
              src="/logo-lockup.png"
              alt="Yala Leopard Safari Tours logo"
              width={1478}
              height={720}
              className="h-12 w-auto"
            />
            <p className="mt-5 text-sm leading-relaxed text-brand-ink-muted">
              Discover the untamed beauty of Yala with unforgettable safari
              experiences led by knowledgeable local guides.
            </p>
            <div className="mt-6 flex gap-3">
              {SOCIAL_LINKS.map(({ label, Icon }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-earth/20 text-forest transition-colors hover:border-forest hover:bg-forest hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest/40 focus-visible:ring-offset-2 focus-visible:ring-offset-sand"
                >
                  <Icon />
                </a>
              ))}
            </div>
          </div>

          {/* Newsletter area */}
          <div className="w-full max-w-md">
            <h3 className="font-display text-2xl font-medium text-brand-ink sm:text-[1.75rem]">
              Get Safari Stories &amp; Travel Inspiration
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-brand-ink-muted">
              Sign up for Yala travel tips, wildlife updates and special
              safari offers — sent straight to your inbox.
            </p>
            <form className="mt-5 flex items-center gap-2 rounded-full border border-earth/25 bg-white/70 p-1.5 pl-5 transition-colors focus-within:border-forest">
              <label htmlFor="footer-newsletter-email" className="sr-only">
                Email address
              </label>
              <input
                id="footer-newsletter-email"
                type="email"
                required
                placeholder="Your email address"
                className="w-full bg-transparent text-sm text-brand-ink placeholder:text-brand-ink-muted/70 focus:outline-none"
              />
              <button
                type="submit"
                aria-label="Subscribe"
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-forest text-white transition-colors hover:bg-forest-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest/50 focus-visible:ring-offset-2 focus-visible:ring-offset-sand"
              >
                <ArrowRightIcon className="h-4 w-4" />
              </button>
            </form>
          </div>
        </div>

        {/* Contact row */}
        <div className="mt-14 grid grid-cols-1 gap-x-8 gap-y-6 border-t border-earth/15 pt-10 sm:grid-cols-2 lg:grid-cols-4">
          <a
            href={CONTACT.whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 rounded text-sm font-medium text-brand-ink transition-colors hover:text-forest focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest/40"
          >
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-forest/10 text-forest">
              <WhatsAppIcon />
            </span>
            <span className="min-w-0">
              <span className="block text-xs uppercase tracking-wide text-brand-ink-muted">WhatsApp</span>
              <span className="block truncate">{CONTACT.whatsappDisplay}</span>
            </span>
          </a>

          <a
            href={CONTACT.phoneHref}
            className="flex items-center gap-3 rounded text-sm font-medium text-brand-ink transition-colors hover:text-forest focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest/40"
          >
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-forest/10 text-forest">
              <PhoneIcon />
            </span>
            <span className="min-w-0">
              <span className="block text-xs uppercase tracking-wide text-brand-ink-muted">Phone</span>
              <span className="block truncate">{CONTACT.phoneDisplay}</span>
            </span>
          </a>

          <a
            href={`mailto:${CONTACT.email}`}
            className="flex items-center gap-3 rounded text-sm font-medium text-brand-ink transition-colors hover:text-forest focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest/40"
          >
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-forest/10 text-forest">
              <MailIcon />
            </span>
            <span className="min-w-0">
              <span className="block text-xs uppercase tracking-wide text-brand-ink-muted">Email</span>
              <span className="block truncate">{CONTACT.email}</span>
            </span>
          </a>

          <a
            href={CONTACT.mapHref}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 rounded text-sm font-medium text-brand-ink transition-colors hover:text-forest focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest/40"
          >
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-forest/10 text-forest">
              <MapPinIcon />
            </span>
            <span className="min-w-0">
              <span className="block text-xs uppercase tracking-wide text-brand-ink-muted">Location</span>
              <span className="block truncate">{CONTACT.location}</span>
            </span>
          </a>
        </div>

        {/* Trust & recognition row — sample placeholders, see comment above TRUST_BADGES */}
        <div className="mt-10 border-t border-earth/15 pt-10">
          <p className="text-xs font-medium uppercase tracking-[0.14em] text-brand-ink-muted">
            Trust &amp; Recognition
          </p>
          <div className="mt-5 flex flex-wrap gap-4">
            {TRUST_BADGES.map(({ label, detail, icon }) => {
              const Icon = BADGE_ICONS[icon];
              return (
                <div
                  key={label}
                  className="flex items-center gap-3 rounded-2xl border border-earth/15 bg-white/60 px-4 py-3"
                >
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gold/15 text-gold">
                    <Icon className="h-4.5 w-4.5" />
                  </span>
                  <span>
                    <span className="block text-sm font-semibold text-brand-ink">{label}</span>
                    <span className="block text-[11px] text-brand-ink-muted">{detail} · placeholder</span>
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* ============ SECTION 2 — Navigation links & copyright ============ */}
      <div className="border-t border-earth/15">
        <div className="mx-auto max-w-[1600px] px-10 py-12 sm:px-20 lg:px-40 lg:py-14">
          <div className="grid grid-cols-1 gap-x-8 sm:grid-cols-2 sm:gap-y-10 lg:grid-cols-5">
            {NAV_COLUMNS.map((column) => (
              <NavColumn key={column.heading} {...column} />
            ))}
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-earth/15">
        <div className="mx-auto max-w-[1600px] px-10 py-6 sm:px-20 lg:px-40">
          <div className="flex flex-col gap-4 text-xs text-brand-ink-muted sm:flex-row sm:items-center sm:justify-between">
            <p>© {new Date().getFullYear()} Yala Leopard Safari Tours. All Rights Reserved.</p>
            <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
              <a href="#" className="transition-colors hover:text-forest">Privacy Policy</a>
              <a href="#" className="transition-colors hover:text-forest">Terms and Conditions</a>
              <a href="#" className="transition-colors hover:text-forest">Cookie Policy</a>
            </div>
          </div>
          <p className="mt-4 text-[11px] italic text-brand-ink-muted/80">
            Designed with respect for Sri Lanka&apos;s wildlife.
          </p>
        </div>
      </div>

      {/* Floating WhatsApp button — placeholder number, see CONTACT above */}
      <a
        href={CONTACT.whatsappHref}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with us on WhatsApp"
        className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-forest text-white shadow-lg shadow-forest/30 transition-colors hover:bg-forest-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest/50 focus-visible:ring-offset-2"
      >
        <WhatsAppIcon className="h-6 w-6" />
      </a>
    </footer>
  );
}
