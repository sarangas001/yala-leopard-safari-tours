import Image from "next/image";
import Link from "next/link";
import { getLatestArticles } from "@/lib/blog/articles";
import { TRUST_BADGES } from "@/lib/trust-badges";

const CONTACT = {
  phoneDisplay: "076 043 5578",
  phoneHref: "tel:+94760435578",
  whatsappDisplay: "076 091 5578",
  whatsappHref: "https://wa.me/94760915578",
  email: "yalaleopardsafariride@gmail.com",
  location: "538/B Gagasiripura, Debarawawa, Tissamaharama, Sri Lanka",
  mapHref: "https://maps.app.goo.gl/ydc2xVngFDfPqSmc6?g_st=ic",
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

// Safari parks — mirrors the comparison cards on the Safaris page (components/SafariParkCards.tsx).
const SAFARI_PARK_LINKS: { href: string; label: string }[] = [
  { href: "/safaris/yala", label: "Yala National Park" },
  { href: "/safaris/udawalawe", label: "Udawalawe National Park" },
  { href: "/safaris/bundala", label: "Bundala National Park" },
  { href: "/safaris/lunugamvehera", label: "Lunugamvehera National Park" },
];

function getNavColumns(): { heading: string; links: { href: string; label: string }[] }[] {
  return [
    {
      heading: "Explore",
      links: [
        { href: "/#hero", label: "Home" },
        { href: "/about", label: "About Us" },
        { href: "/safaris", label: "Safaris" },
        { href: "/gallery", label: "Gallery" },
        { href: "/faq", label: "FAQ" },
        { href: "/book/yala", label: "Booking" },
        { href: "/blog", label: "Blog" },
        { href: "/contact", label: "Contact Us" },
      ],
    },
    {
      heading: "Safari Experiences",
      links: getLatestArticles(6).map((article) => ({
        href: `/blog/${article.slug}`,
        label: article.title,
      })),
    },
    {
      heading: "Plan Your Safari",
      links: SAFARI_PARK_LINKS,
    },
    {
      heading: "Support & Legal",
      links: [
        { href: "/contact", label: "Contact Us" },
        { href: "/legal/privacy-policy", label: "Privacy Policy" },
        { href: "/legal/cookie-policy", label: "Cookie Policy" },
        { href: "/legal/terms-and-conditions", label: "Terms & Conditions" },
        { href: "/legal/refund-cancellation-policy", label: "Refund & Cancellation" },
        { href: "/sitemap", label: "Sitemap" },
      ],
    },
  ];
}

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

const SOCIAL_LINKS = [
  { label: "Facebook", Icon: FacebookIcon, href: "https://www.facebook.com/share/18UbnPnyya/?mibextid=wwXIfr" },
  { label: "Instagram", Icon: InstagramIcon, href: "https://www.instagram.com/yalaleopardsafariride?stkn=NDc3aXQzZWQ5c2gw" },
  { label: "YouTube", Icon: YouTubeIcon, href: "https://youtube.com/@yalaleopardsafariride?si=e4u_kOLtOVT_43Ib" },
  { label: "TripAdvisor", Icon: TripAdvisorIcon, href: TRUST_BADGES[0].href },
];

function NavLink({ href, label }: { href: string; label: string }) {
  return (
    <li>
      <Link
        href={href}
        className="text-sm text-brand-ink-muted transition-colors hover:text-brand-orange focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange/40 rounded"
      >
        {label}
      </Link>
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
    <div className="flex h-full flex-col text-center lg:text-left">
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
          <div className="mx-auto max-w-sm text-center lg:mx-0 lg:text-left">
            <Image
              src="/logo-black.png"
              alt="Yala Leopard Safari Tours logo"
              width={5320}
              height={2524}
              className="mx-auto h-auto w-full max-w-65"
            />
            <p className="mt-5 text-sm leading-relaxed text-brand-ink-muted">
              Discover the untamed beauty of Yala, Udawalawe and Bundala with
              unforgettable safari experiences led by knowledgeable local
              drivers. From leopard sightings at dawn to elephant herds at the
              waterhole, we help you explore Sri Lanka&apos;s wild side
              responsibly, safely and at an unhurried pace.
            </p>
          </div>

          {/* Newsletter area */}
          <div className="mx-auto w-full max-w-md text-center lg:mx-0 lg:text-left">
            <h3 className="font-display text-2xl font-medium text-brand-ink sm:text-[1.75rem]">
              Get Safari Stories &amp; Travel Inspiration
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-brand-ink-muted">
              Sign up for Yala travel tips, wildlife updates and special
              safari offers, sent straight to your inbox.
            </p>
            <div className="mt-6 flex justify-center gap-3 lg:justify-start">
              {SOCIAL_LINKS.map(({ label, Icon, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-brand-ink/20 text-brand-ink transition-colors hover:border-brand-orange hover:bg-brand-orange hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange/40 focus-visible:ring-offset-2 focus-visible:ring-offset-white"
                >
                  <Icon className="h-6 w-6" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Contact row */}
        <div className="mt-8 grid grid-cols-1 gap-x-8 gap-y-5 sm:grid-cols-2 lg:grid-cols-4">
          {CONTACT_ITEMS.map((item) => (
            <a
              key={item.key}
              href={item.href}
              {...(item.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              className="flex items-center justify-center gap-3 rounded text-sm font-medium lg:justify-start text-brand-ink transition-colors hover:text-brand-orange focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange/40"
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
                <span className="block wrap-break-word">{item.value}</span>
              </span>
            </a>
          ))}
        </div>

        {/* Review-platform badges */}
        <div className="mt-8">
          <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-6 sm:gap-x-12">
            {TRUST_BADGES.map((badge) => (
              <a
                key={badge.src}
                href={badge.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${badge.alt} (opens in a new tab)`}
                className="rounded transition-opacity hover:opacity-80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange/40"
              >
                <Image
                  src={badge.src}
                  alt={badge.alt}
                  width={badge.width}
                  height={badge.height}
                  className="h-14 w-auto sm:h-16"
                />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* ============ SECTION 2 — Navigation links & copyright ============ */}
      <div>
        <div className="mx-auto max-w-[1600px] px-10 py-10 sm:px-20 lg:px-40 lg:py-10">
          <div className="grid grid-cols-1 gap-x-8 gap-y-8 sm:grid-cols-2 sm:gap-y-10 lg:grid-cols-4 lg:items-stretch">
            {getNavColumns().map((column) => (
              <NavColumn key={column.heading} {...column} />
            ))}
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div>
        <div className="mx-auto max-w-[1600px] px-10 py-6 sm:px-20 lg:px-40">
          <div className="flex flex-col items-center gap-4 text-center text-xs text-brand-ink-muted lg:flex-row lg:items-center lg:justify-between lg:text-left">
            <p suppressHydrationWarning>© {new Date().getFullYear()} Yala Leopard Safari Tours. All Rights Reserved.</p>
            <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 lg:justify-start">
              <Link href="/legal/privacy-policy" className="transition-colors hover:text-brand-orange">Privacy Policy</Link>
              <Link href="/legal/terms-and-conditions" className="transition-colors hover:text-brand-orange">Terms and Conditions</Link>
              <Link href="/legal/cookie-policy" className="transition-colors hover:text-brand-orange">Cookie Policy</Link>
            </div>
          </div>
          <div className="mt-4 flex flex-col items-center justify-between gap-2 text-center text-[11px] italic text-brand-ink-muted/80 lg:flex-row lg:text-left">
            <p>Designed with respect for Sri Lanka&apos;s wildlife.</p>
            <p>Site by Grow Digitally</p>
          </div>
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
        className="fixed bottom-6 right-6 z-50 flex h-16 w-16 items-center justify-center rounded-full drop-shadow-lg transition-transform hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366]/50 focus-visible:ring-offset-2"
      >
        <Image src="/images/icons/whastapp-icon.png" alt="" aria-hidden="true" width={64} height={64} quality={90} className="h-16 w-16" />
      </a>
    </footer>
  );
}
