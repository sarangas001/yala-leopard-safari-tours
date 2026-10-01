"use client";

import { useEffect, useRef, type ReactNode } from "react";
import gsap from "gsap";

// Global pacing for scroll-reveal animations — raise to slow the whole site down.
const SLOWDOWN = 2;

export default function Reveal({
  children,
  className,
  y = 32,
  duration = 0.8,
  delay = 0,
  still = false,
}: {
  children: ReactNode;
  className?: string;
  y?: number;
  duration?: number;
  delay?: number;
  /** Render with no animation — used around image-heavy grids. */
  still?: boolean;
}) {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // A still block must always be fully visible — also clears any hidden state
    // left on the element by an earlier animated render (e.g. after a hot reload).
    if (still) {
      gsap.set(el, { clearProps: "opacity,transform" });
      return;
    }

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    gsap.set(el, { opacity: 0, y, scale: 0.97 });

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        gsap.to(el, {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: duration * SLOWDOWN,
          delay: delay * SLOWDOWN,
          ease: "power3.out",
        });
        observer.disconnect();
      },
      { threshold: 0.15 }
    );
    observer.observe(el);

    return () => observer.disconnect();
  }, [y, duration, delay, still]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
