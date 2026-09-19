"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLenis } from "lenis/react";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

const PARKS = [
  { id: "yala", name: "Yala National Park" },
  { id: "udawalawe", name: "Udawalawe National Park" },
  { id: "bundala", name: "Bundala National Park" },
];

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/safaris", label: "Safaris", hasDropdown: true },
  { href: "/about", label: "About" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact" },
];

function ChevronIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 16 16" fill="none" className={className} aria-hidden="true">
      <path d="M4 6l4 4 4-4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

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

export default function Header() {
  const lenis = useLenis();
  const pathname = usePathname();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const dropdownWrapRef = useRef<HTMLDivElement | null>(null);
  const dropdownPanelRef = useRef<HTMLDivElement | null>(null);
  const mobilePanelRef = useRef<HTMLDivElement | null>(null);
  const scrolledLayerRef = useRef<HTMLDivElement | null>(null);
  const reducedMotionRef = useRef(false);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(href + "/");

  useEffect(() => {
    reducedMotionRef.current = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  }, []);

  // Fade the nav from transparent-over-hero to a dark scrim once the page scrolls.
  useEffect(() => {
    let ticking = false;
    const update = () => {
      setScrolled(window.scrollY > 40);
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

  useEffect(() => {
    const layer = scrolledLayerRef.current;
    if (!layer) return;
    gsap.to(layer, {
      opacity: scrolled ? 1 : 0,
      duration: reducedMotionRef.current ? 0.01 : 0.4,
      ease: "power2.out",
    });
  }, [scrolled]);

  // Animate the "Safaris" dropdown panel open/closed.
  useEffect(() => {
    const panel = dropdownPanelRef.current;
    if (!panel) return;
    const reduced = reducedMotionRef.current;

    gsap.killTweensOf(panel);
    if (dropdownOpen) {
      gsap.fromTo(
        panel,
        { autoAlpha: 0, y: reduced ? 0 : -6 },
        { autoAlpha: 1, y: 0, duration: reduced ? 0.01 : 0.22, ease: "power2.out" }
      );
    } else {
      gsap.to(panel, { autoAlpha: 0, y: reduced ? 0 : -6, duration: reduced ? 0.01 : 0.16, ease: "power2.in" });
    }
  }, [dropdownOpen]);

  // Close the dropdown on outside click or Escape.
  useEffect(() => {
    if (!dropdownOpen) return;

    const onPointerDown = (event: PointerEvent) => {
      if (!dropdownWrapRef.current?.contains(event.target as Node)) {
        setDropdownOpen(false);
      }
    };
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setDropdownOpen(false);
    };

    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [dropdownOpen]);

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
    setDropdownOpen(false);
    setMobileOpen(false);
  };

  const navLinkClass = (active: boolean) =>
    "text-sm font-medium tracking-wide transition-colors " +
    (active
      ? "text-white underline decoration-white decoration-2 underline-offset-8"
      : "text-white/85 hover:text-white");

  return (
    <header className="fixed inset-x-0 top-0 z-50 w-full">
      <div className="absolute inset-0 bg-linear-to-b from-black/55 via-black/20 to-transparent" />
      <div ref={scrolledLayerRef} className="absolute inset-0 bg-linear-to-b from-black/95 via-black/70 to-black/30 opacity-0" />

      <div className="relative">
        <div className="relative mx-auto flex max-w-[1600px] items-center justify-between gap-4 px-10 py-3 sm:px-20 lg:px-40">
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

          <nav aria-label="Primary" className="hidden items-center gap-8 lg:flex">
            {NAV_LINKS.map((link) => {
              const active = isActive(link.href);

              if (link.hasDropdown) {
                return (
                  <div key={link.href} ref={dropdownWrapRef} className="relative flex items-center gap-1.5">
                    <Link href={link.href} onClick={closeAll} className={navLinkClass(active)}>
                      {link.label}
                    </Link>
                    <button
                      type="button"
                      aria-expanded={dropdownOpen}
                      aria-haspopup="true"
                      aria-label="Toggle safari parks menu"
                      onClick={() => setDropdownOpen((open) => !open)}
                      className={
                        "transition-colors " + (active ? "text-white" : "text-white/85 hover:text-white")
                      }
                    >
                      <ChevronIcon
                        className={"h-3.5 w-3.5 transition-transform duration-200 " + (dropdownOpen ? "rotate-180" : "")}
                      />
                    </button>

                    <div
                      ref={dropdownPanelRef}
                      className="invisible absolute left-1/2 top-full mt-4 w-64 -translate-x-1/2 rounded-2xl border border-white/10 bg-brand-ink/90 p-2 opacity-0 shadow-2xl backdrop-blur-xl"
                    >
                      {PARKS.map((park) => (
                        <a
                          key={park.id}
                          href={`/#park-${park.id}`}
                          onClick={closeAll}
                          className="block rounded-xl px-4 py-3 text-sm text-white/80 transition-colors hover:bg-white/10 hover:text-white"
                        >
                          {park.name}
                        </a>
                      ))}
                    </div>
                  </div>
                );
              }

              return (
                <Link key={link.href} href={link.href} onClick={closeAll} className={navLinkClass(active)}>
                  {link.label}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="tel:+94112345678"
              aria-label="Call us"
              className="hidden h-10 w-10 items-center justify-center rounded-full bg-white/15 text-white transition-colors hover:bg-white/25 sm:inline-flex"
            >
              <PhoneIcon className="h-4 w-4" />
            </a>

            {/* Same-page anchor: plain <a> so SmoothScroll's hash handler owns the smooth-scroll, not next/link. */}
            {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
            <a
              href="/#enquire"
              className="hidden items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-brand-ink transition-colors hover:bg-white/90 sm:inline-flex"
            >
              Plan your safari
            </a>

            <button
              type="button"
              aria-expanded={mobileOpen}
              aria-controls="mobile-menu"
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              onClick={() => setMobileOpen((open) => !open)}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-black/10 bg-white text-brand-ink shadow-sm transition-colors hover:bg-white/90 lg:hidden"
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
        className="border-t border-white/10 bg-black lg:hidden"
      >
        <nav aria-label="Mobile" className="flex flex-col gap-1 px-5 py-4">
          {NAV_LINKS.map((link) => {
            const active = isActive(link.href);
            const mobileLinkClass =
              "rounded-lg px-3 py-2.5 text-sm font-medium " + (active ? "text-white" : "text-white/85");

            if (link.hasDropdown) {
              return (
                <div key={link.href}>
                  <Link href={link.href} onClick={closeAll} className={mobileLinkClass}>
                    {link.label}
                  </Link>
                  {PARKS.map((park) => (
                    <a
                      key={park.id}
                      href={`/#park-${park.id}`}
                      onClick={closeAll}
                      className="block rounded-lg px-6 py-2 text-sm text-white/70"
                    >
                      {park.name}
                    </a>
                  ))}
                </div>
              );
            }

            return (
              <Link key={link.href} href={link.href} onClick={closeAll} className={mobileLinkClass}>
                {link.label}
              </Link>
            );
          })}

          {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
          <a
            href="/#enquire"
            onClick={closeAll}
            className="mt-3 inline-flex items-center justify-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-brand-ink"
          >
            Plan your safari
          </a>
        </nav>
      </div>
    </header>
  );
}
