"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState, type KeyboardEvent } from "react";
import gsap from "gsap";

type Destination = {
  id: string;
  name: string;
  eyebrow: string;
  description: string;
  image: string;
};

const DESTINATIONS: Destination[] = [
  {
    id: "yala",
    name: "Yala National Park",
    eyebrow: "The world's leopard capital",
    description:
      "Yala holds the highest density of leopards on earth, prowling dry-zone scrub and open plains a few hours from the south coast.",
    image: "/images/parks/yala.jpg",
  },
  {
    id: "udawalawe",
    name: "Udawalawe National Park",
    eyebrow: "Wild elephant herds",
    description:
      "Open grassland around the Udawalawe reservoir where elephant herds gather in full view on almost every game drive.",
    image: "/images/parks/udawalawe.jpg",
  },
  {
    id: "bundala",
    name: "Bundala National Park",
    eyebrow: "Wetlands and migratory birds",
    description:
      "A Ramsar-listed coastal sanctuary of lagoons and dunes, home to flamingos, elephants and hundreds of bird species.",
    image: "/images/parks/bundala.jpg",
  },
];

const AUTO_ADVANCE_MS = 6500;
const COUNT = DESTINATIONS.length;

export default function Hero() {
  const [active, setActive] = useState(0);

  const rootRef = useRef<HTMLElement | null>(null);
  const introRef = useRef<HTMLDivElement | null>(null);
  const cardsRef = useRef<HTMLDivElement | null>(null);
  const layerRefs = useRef<(HTMLDivElement | null)[]>([]);
  const frameRefs = useRef<(HTMLDivElement | null)[]>([]);
  const panelRefs = useRef<(HTMLDivElement | null)[]>([]);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);

  const pausedRef = useRef(false);
  const reducedMotionRef = useRef(false);

  // Entrance animation, scoped so it fully reverts on unmount.
  useEffect(() => {
    const reduceMq = window.matchMedia("(prefers-reduced-motion: reduce)");
    reducedMotionRef.current = reduceMq.matches;
    const onChange = () => {
      reducedMotionRef.current = reduceMq.matches;
    };
    reduceMq.addEventListener("change", onChange);

    const ctx = gsap.context(() => {
      if (!reducedMotionRef.current) {
        gsap.set([introRef.current, cardsRef.current], { opacity: 0, y: 18 });
        gsap
          .timeline({ defaults: { ease: "power2.out", duration: 0.8 } })
          .to(introRef.current, { opacity: 1, y: 0, delay: 0.1 })
          .to(cardsRef.current, { opacity: 1, y: 0 }, "-=0.5");
      }
    }, rootRef);

    return () => {
      reduceMq.removeEventListener("change", onChange);
      ctx.revert();
    };
  }, []);

  // Crossfade image layers, Ken Burns drift and text panels whenever the active park changes.
  useEffect(() => {
    const reduced = reducedMotionRef.current;
    const fadeDuration = reduced ? 0.15 : 0.9;

    layerRefs.current.forEach((el, i) => {
      if (!el) return;
      gsap.to(el, {
        opacity: i === active ? 1 : 0,
        duration: fadeDuration,
        ease: "power2.inOut",
        overwrite: "auto",
      });
    });

    const frame = frameRefs.current[active];
    if (frame) {
      gsap.killTweensOf(frame);
      if (reduced) {
        gsap.set(frame, { scale: 1 });
      } else {
        gsap.fromTo(
          frame,
          { scale: 1.08 },
          { scale: 1, duration: 7, ease: "power1.out" }
        );
      }
    }

    panelRefs.current.forEach((el, i) => {
      if (!el) return;
      gsap.to(el, {
        opacity: i === active ? 1 : 0,
        y: i === active ? 0 : 10,
        duration: reduced ? 0.15 : 0.5,
        ease: "power2.out",
        overwrite: "auto",
      });
    });
  }, [active]);

  // Autoplay, paused on hover, keyboard focus, hidden tabs and reduced motion.
  useEffect(() => {
    const container = rootRef.current;
    if (!container) return;

    const reduceMq = window.matchMedia("(prefers-reduced-motion: reduce)");

    const tick = () => {
      if (pausedRef.current || document.hidden || reduceMq.matches) return;
      setActive((prev) => (prev + 1) % COUNT);
    };

    const id = window.setInterval(tick, AUTO_ADVANCE_MS);
    const pause = () => {
      pausedRef.current = true;
    };
    const resume = () => {
      pausedRef.current = false;
    };
    const onVisibility = () => {
      pausedRef.current = document.hidden;
    };

    container.addEventListener("pointerenter", pause);
    container.addEventListener("pointerleave", resume);
    container.addEventListener("focusin", pause);
    container.addEventListener("focusout", resume);
    document.addEventListener("visibilitychange", onVisibility);

    return () => {
      window.clearInterval(id);
      container.removeEventListener("pointerenter", pause);
      container.removeEventListener("pointerleave", resume);
      container.removeEventListener("focusin", pause);
      container.removeEventListener("focusout", resume);
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, []);

  const selectDestination = useCallback((index: number) => {
    setActive(index);
  }, []);

  const handleTabKeyDown = (event: KeyboardEvent<HTMLButtonElement>, index: number) => {
    let next: number | null = null;
    if (event.key === "ArrowRight") next = (index + 1) % COUNT;
    else if (event.key === "ArrowLeft") next = (index - 1 + COUNT) % COUNT;
    else if (event.key === "Home") next = 0;
    else if (event.key === "End") next = COUNT - 1;

    if (next !== null) {
      event.preventDefault();
      setActive(next);
      tabRefs.current[next]?.focus();
    }
  };

  const activeDestination = DESTINATIONS[active];

  return (
    <section ref={rootRef} aria-label="Featured national parks" className="relative w-full bg-white">
      <p className="sr-only" role="status" aria-live="polite">
        Now showing {activeDestination.name}
      </p>

      <div className="relative h-[92svh] min-h-[600px] max-h-[880px] w-full overflow-hidden">
        <div className="absolute inset-0">
          {DESTINATIONS.map((destination, i) => (
            <div
              key={destination.id}
              ref={(el) => {
                layerRefs.current[i] = el;
              }}
              className={i === 0 ? "absolute inset-0 opacity-100" : "absolute inset-0 opacity-0"}
              style={{ willChange: "opacity" }}
              aria-hidden={i !== active}
            >
              <div
                ref={(el) => {
                  frameRefs.current[i] = el;
                }}
                className="absolute inset-0"
                style={{ willChange: "transform" }}
              >
                <Image
                  src={destination.image}
                  alt={`${destination.name} — Sri Lanka safari destination`}
                  fill
                  priority={i === 0}
                  loading={i === 0 ? undefined : "eager"}
                  quality={72}
                  sizes="100vw"
                  className="object-cover"
                />
              </div>
            </div>
          ))}
          <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-black/5" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/5 to-transparent" />
        </div>

        <div className="relative z-10 flex h-full flex-col justify-between px-5 py-8 sm:px-8 sm:py-10 lg:px-14 lg:py-12">
          <div ref={introRef} className="max-w-xl text-white">
            <span className="text-sm font-medium uppercase tracking-[0.2em] text-brand-orange-light">
              Sri Lanka Safari Tours
            </span>

            <div className="mt-4 grid">
              {DESTINATIONS.map((destination, i) => (
                <div
                  key={destination.id}
                  ref={(el) => {
                    panelRefs.current[i] = el;
                  }}
                  id={`park-panel-${destination.id}`}
                  role="tabpanel"
                  aria-labelledby={`park-tab-${destination.id}`}
                  aria-hidden={i !== active}
                  className={
                    "col-start-1 row-start-1 " +
                    (i === 0 ? "opacity-100" : "pointer-events-none opacity-0")
                  }
                >
                  <h1 className="font-display text-4xl font-medium leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
                    {destination.name}
                  </h1>
                  <p className="mt-4 max-w-md text-base leading-relaxed text-white/85 sm:text-lg">
                    {destination.description}
                  </p>
                </div>
              ))}
            </div>

            <a
              href="#enquire"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-brand-orange px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-orange-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white sm:mt-8"
            >
              Plan your safari
              <span aria-hidden="true">→</span>
            </a>
          </div>

          <div ref={cardsRef} className="w-full">
            <div
              role="tablist"
              aria-label="Choose a national park to view"
              className="flex w-full items-end justify-start gap-3 sm:gap-4"
            >
              {DESTINATIONS.map((destination, i) => (
                <button
                  key={destination.id}
                  ref={(el) => {
                    tabRefs.current[i] = el;
                  }}
                  role="tab"
                  id={`park-tab-${destination.id}`}
                  aria-selected={i === active}
                  aria-controls={`park-panel-${destination.id}`}
                  tabIndex={i === active ? 0 : -1}
                  onClick={() => selectDestination(i)}
                  onKeyDown={(event) => handleTabKeyDown(event, i)}
                  className="group text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                  <span
                    className={
                      "relative block h-24 w-16 overflow-hidden rounded-xl ring-2 transition-[ring-color,transform] duration-300 sm:h-32 sm:w-24 " +
                      (i === active
                        ? "ring-brand-orange-light"
                        : "ring-white/30 group-hover:ring-white/70")
                    }
                  >
                    <Image
                      src={destination.image}
                      alt=""
                      fill
                      sizes="96px"
                      quality={55}
                      className={
                        "object-cover transition-opacity duration-300 " +
                        (i === active ? "opacity-100" : "opacity-60 group-hover:opacity-90")
                      }
                    />
                  </span>
                  <span
                    className={
                      "mt-2 block max-w-[6.5rem] text-xs font-medium leading-tight transition-colors duration-300 sm:text-sm " +
                      (i === active ? "text-white" : "text-white/70 group-hover:text-white")
                    }
                  >
                    {destination.name}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      <p className="px-5 py-2 text-right text-[11px] text-brand-ink-muted sm:px-8">
        Wildlife photography via Wikimedia Commons, CC BY-SA 4.0 / FAL
      </p>
    </section>
  );
}
