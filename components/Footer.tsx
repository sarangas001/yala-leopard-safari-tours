import Image from "next/image";
import Link from "next/link";

const EXPLORE_LINKS = [
  { href: "/", label: "Home" },
  { href: "/#park-yala", label: "Yala National Park" },
  { href: "/#park-udawalawe", label: "Udawalawe National Park" },
  { href: "/#park-bundala", label: "Bundala National Park" },
  { href: "/#about", label: "About Us" },
  { href: "/#gallery", label: "Gallery" },
  { href: "/#enquire", label: "Contact" },
];

function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4" aria-hidden="true">
      <path
        d="M14 8.5h2V5.7h-2c-2 0-3.3 1.4-3.3 3.5v1.8H8.5v2.8h2.2V19h2.9v-5.2h2.2l.4-2.8h-2.6V9.2c0-.5.2-.7.7-.7Z"
        fill="currentColor"
      />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4" aria-hidden="true">
      <rect x="4.5" y="4.5" width="15" height="15" rx="4" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="12" cy="12" r="3.3" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="16.2" cy="7.8" r="0.9" fill="currentColor" />
    </svg>
  );
}

function TripAdvisorIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4" aria-hidden="true">
      <circle cx="8.2" cy="13" r="3" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="15.8" cy="13" r="3" stroke="currentColor" strokeWidth="1.5" />
      <path d="M8.2 13a3.8 3.8 0 0 1 7.6 0" stroke="currentColor" strokeWidth="1.5" />
      <path d="M4 8.5c1.6-1 3.9-1.5 8-1.5s6.4.5 8 1.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="w-full bg-brand-ink text-white">
      {/* Thin orange accent top border */}
      <div className="h-[3px] w-full bg-gradient-to-r from-brand-orange/0 via-brand-orange to-brand-orange/0" />

      <div className="mx-auto max-w-[1600px] px-6 py-16 sm:px-10 lg:px-20">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-[1.4fr_1fr_1fr]">
          {/* Brand column */}
          <div>
            <Image
              src="/logo-lockup.png"
              alt="Yala Leopard Safari Tours"
              width={1478}
              height={720}
              className="h-12 w-auto opacity-90"
            />
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-white/55">
              Small-group leopard and wildlife safaris across Yala, Udawalawe
              and Bundala National Parks, led by local Sri Lankan guides.
            </p>
            <div className="mt-7 flex gap-3">
              {[FacebookIcon, InstagramIcon, TripAdvisorIcon].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-white/60 transition-all hover:border-white/50 hover:text-white"
                >
                  <Icon />
                </a>
              ))}
            </div>
          </div>

          {/* Explore column */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-white/40">
              Explore
            </h3>
            <ul className="mt-5 space-y-3.5">
              {EXPLORE_LINKS.map((link) =>
                link.href === "/" ? (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-white/65 transition-colors hover:text-white"
                    >
                      {link.label}
                    </Link>
                  </li>
                ) : (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="text-sm text-white/65 transition-colors hover:text-white"
                    >
                      {link.label}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Contact column */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-white/40">
              Contact
            </h3>
            <ul className="mt-5 space-y-3.5 text-sm text-white/65">
              <li>
                <a href="tel:+94112345678" className="transition-colors hover:text-white">
                  +94 11 234 5678
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/94112345678"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-white"
                >
                  WhatsApp Us
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@yalaleopardsafaritours.com"
                  className="transition-colors hover:text-white"
                >
                  info@yalaleopardsafaritours.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-3 border-t border-white/[0.08] pt-6 text-xs text-white/35 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Yala Leopard Safari Tours. All rights reserved.</p>
          <p>Wildlife photography via Wikimedia Commons — see /images/CREDITS.md</p>
        </div>
      </div>
    </footer>
  );
}
