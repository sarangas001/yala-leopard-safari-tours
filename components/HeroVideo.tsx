"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { focalClass, focalStyle } from "@/lib/focal";

type NetworkInformation = { saveData?: boolean };

/**
 * Hero background: an optimised poster image everywhere, with the video layered
 * on top for larger screens, except viewers who have asked for reduced motion or data
 * saving. Phones only get the still.
 */
export default function HeroVideo({ src, poster }: { src: string; poster: string }) {
  const [playVideo, setPlayVideo] = useState(false);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const saveData = (navigator as Navigator & { connection?: NetworkInformation }).connection?.saveData;
    // One-time preference check after mount: the server render can't read these settings.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    // Phones skip the multi-megabyte video; the optimised poster is enough there.
    const smallScreen = window.matchMedia("(max-width: 767px)").matches;
    setPlayVideo(!reduced && !saveData && !smallScreen);
  }, []);

  return (
    <>
      <Image
        src={poster}
        alt=""
        fill
        priority
        sizes="100vw"
        quality={75}
        className={`object-cover ${focalClass(poster)}`}
        style={focalStyle(poster)}
      />
      {playVideo ? (
        <video
          className="absolute inset-0 h-full w-full object-cover"
          src={src}
          poster={poster}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
        />
      ) : null}
    </>
  );
}
