import type { ReactNode } from "react";
import Illustration from "@/components/Illustration";

/**
 * Puts a corner illustration behind the section(s) it wraps. The wrapped
 * sections have their white background removed so the illustration shows
 * through, and are lifted above it so content stays on top.
 */
export default function IllustratedBlock({
  src,
  side,
  children,
}: {
  src: string;
  side: "left" | "right";
  children: ReactNode;
}) {
  return (
    <div className="relative isolate overflow-hidden bg-white [&>section]:relative [&>section]:z-10 [&>section]:bg-transparent">
      <Illustration src={src} side={side} />
      {children}
    </div>
  );
}
