import Image from "next/image";
import Reveal from "@/components/Reveal";

export type IconFeatureItem = {
  title: string;
  text?: string;
  icon: string;
};

const GRID_COLS: Record<number, string> = {
  3: "lg:grid-cols-3",
  4: "lg:grid-cols-4",
};

export default function IconFeatureGrid({
  heading,
  items,
  columns = 3,
}: {
  heading: string;
  items: IconFeatureItem[];
  columns?: 3 | 4;
}) {
  return (
    <section className="w-full bg-white">
      <div className="mx-auto max-w-[1600px] px-10 py-16 sm:px-20 sm:py-20 lg:px-40 lg:py-24">
        <Reveal className="text-center">
          <h2 className="font-display text-3xl font-medium tracking-tight text-brand-ink sm:text-4xl lg:text-5xl">
            {heading}
          </h2>
        </Reveal>

        <div
          className={
            "mt-14 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:mt-16 lg:gap-x-12 lg:gap-y-14 " +
            (GRID_COLS[columns] ?? GRID_COLS[3])
          }
        >
          {items.map((item, i) => (
            <Reveal key={item.title} delay={(i % columns) * 0.08}>
              <div className="flex flex-col items-center text-center">
                <div className="flex h-20 w-20 items-center justify-center">
                  <Image
                    src={item.icon}
                    alt={item.title}
                    width={72}
                    height={72}
                    style={{ width: "72px", height: "auto" }}
                  />
                </div>
                <h3 className="mt-5 font-display text-lg font-medium text-brand-ink">
                  {item.title}
                </h3>
                {item.text ? (
                  <p className="mt-2 max-w-[22ch] text-sm leading-relaxed text-brand-ink-muted sm:max-w-none">
                    {item.text}
                  </p>
                ) : null}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
