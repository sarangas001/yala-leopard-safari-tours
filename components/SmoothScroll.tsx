"use client";

import { ReactLenis, useLenis } from "lenis/react";
import { useEffect, useState, type ReactNode } from "react";

const HEADER_OFFSET = 96;
const PARK_HASH_RE = /^#park-(.+)$/;

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
      lenis.scrollTo(targetEl as HTMLElement, { offset: -HEADER_OFFSET, duration: 1.2 });
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
        lenis.scrollTo(targetEl as HTMLElement, { offset: -HEADER_OFFSET, duration: 1.2 });
      } else {
        (targetEl as HTMLElement).scrollIntoView({ behavior: "smooth", block: "start" });
      }
    };

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
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
        duration: reduced ? 0 : 1.15,
        smoothWheel: !reduced,
        easing: (t: number) => 1 - Math.pow(1 - t, 3),
      }}
    >
      <HashLinkHandler />
      {children}
    </ReactLenis>
  );
}
