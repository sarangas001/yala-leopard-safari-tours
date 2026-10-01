import Image from "next/image";

/**
 * Decorative corner illustration for a section. The parent section must be
 * `relative overflow-hidden`, with its content sitting above at `relative z-10`.
 */
export default function Illustration({
  src,
  side = "right",
  width = 340,
  offsetTop = -16,
}: {
  src: string;
  side?: "left" | "right";
  width?: number;
  offsetTop?: number;
}) {
  return (
    <div
      className={
        "pointer-events-none absolute z-0 hidden select-none lg:block " +
        (side === "left" ? "-left-8" : "-right-8")
      }
      style={{ top: offsetTop }}
      aria-hidden="true"
    >
      <Image
        src={src}
        alt=""
        width={400}
        height={500}
        quality={90}
        style={{ width: `${width}px`, height: "auto", opacity: 0.92 }}
      />
    </div>
  );
}
