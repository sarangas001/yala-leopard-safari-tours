"use client";

import { ReactLenis, useLenis } from "lenis/react";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState, type ReactNode } from "react";

const HEADER_OFFSET = 96;
const PARK_HASH_RE = /^#park-(.+)$/;

// Lenis owns the actual scroll position independently of Next's router, so a
// client-side navigation to a new page can otherwise leave the new page's Hero
// scrolled to wherever the previous page happened to be. Snap back to the top
// (instantly, not animated) whenever the route itself changes, but not on a
// same-page hash navigation, which HashLinkHandler already handles.
function ScrollResetOnNavigate() {
  const lenis = useLenis();
  const pathname = usePathname();
  const isFirstRender = useRef(true);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    if (lenis) {
      lenis.scrollTo(0, { immediate: true });
    } else {
      window.scrollTo(0, 0);
    }

    // Arrived via a cross-page hash link (e.g. /safaris#more-services): glide to the section.
    const hash = window.location.hash;
    const target = hash.length > 1 ? document.querySelector(hash) : null;
    if (target instanceof HTMLElement) {
      requestAnimationFrame(() => {
        if (lenis) {
          lenis.scrollTo(target, { offset: -HEADER_OFFSET, duration: 2.2 });
        } else {
          target.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      });
    }
  }, [pathname, lenis]);

  return null;
}

// Handles same-page hash links (park deep-links, footer/nav anchors) with the
// same smooth easing as regular scrolling, instead of the browser's instant jump.
function HashLinkHandler() {
  const lenis = useLenis();

  // Fresh page load with a hash already in the URL (e.g. a full navigation to
  // `/#park-yala`). Runs once Lenis exists so the scroll isn't fought and reset
  // back to the top a frame later — Hero syncs its own active state separately.
  useEffect(() => {
    if (!lenis) return;

    const hash = window.location.hash;
    if (hash.length <= 1) return;

    const parkMatch = hash.match(PARK_HASH_RE);
    const targetEl = parkMatch ? document.getElementById("safaris") : document.querySelector(hash);
    if (!targetEl) return;

    requestAnimationFrame(() => {
      lenis.scrollTo(targetEl as HTMLElement, { offset: -HEADER_OFFSET, duration: 2.2 });
    });
  }, [lenis]);

  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      if (event.defaultPrevented || event.button !== 0) return;

      const anchor = (event.target as HTMLElement)?.closest("a[href*='#']");
      if (!(anchor instanceof HTMLAnchorElement)) return;

      const href = anchor.getAttribute("href");
      if (!href) return;

      const hashIndex = href.indexOf("#");
      const hash = href.slice(hashIndex);
      const path = href.slice(0, hashIndex) || "/";
      if (hash.length <= 1 || path !== window.location.pathname) return;

      const parkMatch = hash.match(PARK_HASH_RE);
      const targetEl = parkMatch ? document.getElementById("safaris") : document.querySelector(hash);
      if (!targetEl) return;

      event.preventDefault();
      if (parkMatch) {
        window.dispatchEvent(new CustomEvent("select-park", { detail: parkMatch[1] }));
      }
      history.pushState(null, "", hash);

      if (lenis) {
        lenis.scrollTo(targetEl as HTMLElement, { offset: -HEADER_OFFSET, duration: 2.2 });
      } else {
        (targetEl as HTMLElement).scrollIntoView({ behavior: "smooth", block: "start" });
      }
    };

    // Capture phase: runs before Next's <Link> click handler, which would otherwise claim the event.
    document.addEventListener("click", handleClick, true);
    return () => document.removeEventListener("click", handleClick, true);
  }, [lenis]);

  return null;
}

export default function SmoothScroll({ children }: { children: ReactNode }) {
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    // One-time client-only read of a media query; SSR and first paint can't know
    // this, so there's nothing to keep in sync with on the server.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setReduced(window.matchMedia("(prefers-reduced-motion: reduce)").matches);
  }, []);

  return (
    <ReactLenis
      root
      options={{
        // Lerp-based smoothing keeps easing toward the target on every wheel tick,
        // so slow, small scrolls keep gliding instead of stalling mid-way like the
        // fixed-duration tween did.
        lerp: reduced ? 1 : 0.05,
        smoothWheel: !reduced,
      }}
    >
      <HashLinkHandler />
      <ScrollResetOnNavigate />
      {children}
    </ReactLenis>
  );
}
