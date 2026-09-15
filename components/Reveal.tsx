"use client";

import { useEffect, useRef, type ReactNode } from "react";
import gsap from "gsap";

export default function Reveal({
  children,
  className,
  y = 32,
  duration = 0.8,
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  y?: number;
  duration?: number;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    gsap.set(el, { opacity: 0, y, scale: 0.97 });

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        gsap.to(el, { opacity: 1, y: 0, scale: 1, duration, delay, ease: "power3.out" });
        observer.disconnect();
      },
      { threshold: 0.15 }
    );
    observer.observe(el);

    return () => observer.disconnect();
  }, [y, duration, delay]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
