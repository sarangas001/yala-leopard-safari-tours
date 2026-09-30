"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLenis } from "lenis/react";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

type NavLink = {
  href: string;
  label: string;
  /** Path that marks this item active when href is a hash link to another page. */
  activePath?: string;
  children?: { href: string; label: string }[];
};

const NAV_LINKS: NavLink[] = [
  { href: "/", label: "Home" },
  {
    href: "/safaris",
    label: "Safaris",
    children: [
      { href: "/safaris/yala", label: "Yala National Park" },
      { href: "/safaris/udawalawe", label: "Udawalawe National Park" },
      { href: "/safaris/bundala", label: "Bundala National Park" },
    ],
  },
  { href: "/safaris#more-services", label: "Taxi & Car Rental", activePath: "/taxi-car-rental" },
  { href: "/about", label: "About" },
  { href: "/gallery", label: "Gallery" },
  { href: "/reviews", label: "Reviews" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

function PhoneIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 20 20" fill="none" className={className} aria-hidden="true">
      <path
        d="M6.5 3.5c.4 0 .77.24.92.62l1 2.5a1 1 0 0 1-.24 1.1l-1.1 1.1a8.4 8.4 0 0 0 4.1 4.1l1.1-1.1a1 1 0 0 1 1.1-.24l2.5 1a1 1 0 0 1 .62.93v2.1a1 1 0 0 1-1.08 1A13.5 13.5 0 0 1 3.5 4.58a1 1 0 0 1 1-1.08h2Z"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ChevronIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 20 20" fill="none" className={className} aria-hidden="true">
      <path d="M5 8l5 5 5-5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function MenuIcon({ open }: { open: boolean }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" aria-hidden="true">
      {open ? (
        <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      ) : (
        <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      )}
    </svg>
  );
}

// Scroll distance (px) over which the header background ramps from
// near-transparent to fully opaque.
const SCROLL_FADE_DISTANCE = 160;

export default function Header() {
  const lenis = useLenis();
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const mobilePanelRef = useRef<HTMLDivElement | null>(null);
  const scrolledLayerRef = useRef<HTMLDivElement | null>(null);
  const reducedMotionRef = useRef(false);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(href + "/");

  useEffect(() => {
    reducedMotionRef.current = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  }, []);

  // Continuously fade the nav from near-transparent-over-hero to a dark scrim
  // as the page scrolls, instead of snapping at a fixed threshold — keeps the
  // header readable while staying unobtrusive at the very top on every viewport.
  useEffect(() => {
    let ticking = false;
    const update = () => {
      const progress = Math.min(window.scrollY / SCROLL_FADE_DISTANCE, 1);
      if (scrolledLayerRef.current) {
        scrolledLayerRef.current.style.opacity = String(progress);
      }
      ticking = false;
    };
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(update);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    update();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Animate the mobile menu panel open/closed and lock body scroll while open.
  useEffect(() => {
    const panel = mobilePanelRef.current;
    if (!panel) return;
    const reduced = reducedMotionRef.current;

    gsap.killTweensOf(panel);
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
      lenis?.stop();
      gsap.set(panel, { display: "block" });
      gsap.fromTo(
        panel,
        { height: 0, opacity: 0 },
        { height: "auto", opacity: 1, duration: reduced ? 0.01 : 0.35, ease: "power2.out" }
      );
    } else {
      document.body.style.overflow = "";
      lenis?.start();
      gsap.to(panel, {
        height: 0,
        opacity: 0,
        duration: reduced ? 0.01 : 0.25,
        ease: "power2.in",
        onComplete: () => gsap.set(panel, { display: "none" }),
      });
    }

    return () => {
      document.body.style.overflow = "";
      lenis?.start();
    };
  }, [mobileOpen, lenis]);

  const closeAll = () => {
    setMobileOpen(false);
    setDropdownOpen(false);
  };

  const navLinkClass = (active: boolean) =>
    "whitespace-nowrap text-sm font-medium tracking-wide transition-colors " +
    (active
      ? "text-white underline decoration-white decoration-2 underline-offset-8"
      : "text-white/85 hover:text-white");

  return (
    <header className="fixed inset-x-0 top-0 z-50 w-full">
      <div className="pointer-events-none absolute inset-0 bg-linear-to-b from-black/30 via-black/10 to-transparent" />
      <div ref={scrolledLayerRef} className="pointer-events-none absolute inset-0 bg-linear-to-b from-black/95 via-black/70 to-black/30 opacity-0" />

      <div className="relative">
        <div className="relative mx-auto flex max-w-[1600px] items-center justify-between gap-4 px-10 py-3 sm:px-20 xl:px-20 2xl:px-40">
          <Link href="/" onClick={closeAll} className="shrink-0">
            <Image
              src="/logo-lockup.png"
              alt="Yala Leopard Safari Tours"
              width={1478}
              height={720}
              priority
              className="h-11 w-auto sm:h-14"
            />
          </Link>

          <nav aria-label="Primary" className="hidden items-center gap-6 xl:flex 2xl:gap-8">
            {NAV_LINKS.map((link) => {
              const active = isActive(link.activePath ?? link.href);

              if (!link.children) {
                return (
                  <Link key={link.href} href={link.href} onClick={closeAll} className={navLinkClass(active)}>
                    {link.label}
                  </Link>
                );
              }

              return (
                <div
                  key={link.href}
                  className="relative"
                  onMouseEnter={() => setDropdownOpen(true)}
                  onMouseLeave={() => setDropdownOpen(false)}
                  onBlur={(event) => {
                    if (!event.currentTarget.contains(event.relatedTarget)) setDropdownOpen(false);
                  }}
                  onKeyDown={(event) => {
                    if (event.key === "Escape") setDropdownOpen(false);
                  }}
                >
                  <Link
                    href={link.href}
                    onClick={closeAll}
                    onFocus={() => setDropdownOpen(true)}
                    aria-haspopup="menu"
                    aria-expanded={dropdownOpen}
                    className={navLinkClass(active) + " inline-flex items-center gap-1"}
                  >
                    {link.label}
                    <ChevronIcon
                      className={"h-4 w-4 transition-transform duration-200 " + (dropdownOpen ? "rotate-180" : "")}
                    />
                  </Link>

                  {/* pt-4 keeps the hover area continuous between the trigger and the panel. */}
                  <div
                    className={
                      "absolute left-1/2 top-full w-64 -translate-x-1/2 pt-4 transition-all duration-200 " +
                      (dropdownOpen ? "visible translate-y-0 opacity-100" : "invisible -translate-y-1 opacity-0")
                    }
                  >
                    <ul
                      role="menu"
                      className="overflow-hidden rounded-2xl border border-white/10 bg-black/90 p-2 shadow-xl shadow-black/30 backdrop-blur"
                    >
                      {link.children.map((child) => (
                        <li key={child.href} role="none">
                          <Link
                            href={child.href}
                            role="menuitem"
                            onClick={closeAll}
                            className={
                              "block rounded-xl px-4 py-2.5 text-sm font-medium transition-colors hover:bg-white/10 hover:text-white " +
                              (isActive(child.href) ? "text-white" : "text-white/80")
                            }
                          >
                            {child.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </nav>

          <div className="flex items-center gap-3">
            <Link
              href="/contact"
              aria-label="Call us"
              className="hidden h-10 w-10 items-center justify-center rounded-full bg-white/15 text-white transition-colors hover:bg-white/25 sm:inline-flex"
            >
              <PhoneIcon className="h-4 w-4" />
            </Link>

            <Link
              href="/safaris"
              onClick={closeAll}
              className="hidden items-center gap-2 rounded-full bg-brand-orange px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-brand-orange-dark sm:inline-flex"
            >
              Plan your safari
            </Link>

            <button
              type="button"
              aria-expanded={mobileOpen}
              aria-controls="mobile-menu"
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              onClick={() => setMobileOpen((open) => !open)}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-black/10 bg-white text-brand-ink shadow-sm transition-colors hover:bg-white/90 xl:hidden"
            >
              <MenuIcon open={mobileOpen} />
            </button>
          </div>
        </div>
      </div>

      <div
        id="mobile-menu"
        ref={mobilePanelRef}
        style={{ height: 0, opacity: 0, display: "none", overflow: "hidden" }}
        className="relative border-t border-white/10 bg-black xl:hidden"
      >
        <nav
          aria-label="Mobile"
          data-lenis-prevent
          className="flex max-h-[calc(100dvh-4.5rem)] flex-col gap-1 overflow-y-auto overscroll-contain px-5 py-4"
        >
          {NAV_LINKS.map((link) => {
            const active = isActive(link.activePath ?? link.href);
            const mobileLinkClass =
              "block rounded-lg px-3 py-2.5 text-sm font-medium " + (active ? "text-white" : "text-white/85");

            return (
              <div key={link.href}>
                <Link href={link.href} onClick={closeAll} className={mobileLinkClass}>
                  {link.label}
                </Link>
                {link.children ? (
                  <div className="ml-3 flex flex-col border-l border-white/15 pl-2">
                    {link.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        onClick={closeAll}
                        className={
                          "block rounded-lg px-3 py-2 text-sm " +
                          (isActive(child.href) ? "text-white" : "text-white/70")
                        }
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                ) : null}
              </div>
            );
          })}

          <Link
            href="/safaris"
            onClick={closeAll}
            className="mt-3 inline-flex items-center justify-center gap-2 rounded-full bg-brand-orange px-5 py-3 text-sm font-semibold text-white"
          >
            Plan your safari
          </Link>
        </nav>
      </div>
    </header>
  );
}
