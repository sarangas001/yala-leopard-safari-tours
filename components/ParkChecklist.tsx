import Reveal from "@/components/Reveal";

export type ChecklistColumn = {
  heading?: string;
  items: string[];
  icon?: "check" | "info";
};

function CheckIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path d="M5 12.5l4.5 4.5L19 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function InfoIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <circle cx="12" cy="12" r="8.5" stroke="currentColor" strokeWidth="1.5" />
      <path d="M12 11v5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="12" cy="8" r="0.75" fill="currentColor" />
    </svg>
  );
}

function ItemIcon({ icon }: { icon: "check" | "info" }) {
  if (icon === "info") {
    return <InfoIcon className="mt-0.5 h-4 w-4 shrink-0 text-brand-ink-muted" />;
  }
  return <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-brand-orange" />;
}

export default function ParkChecklist({
  heading,
  intro,
  columns,
}: {
  heading: string;
  intro?: string;
  columns: ChecklistColumn[];
}) {
  const isSingleColumn = columns.length === 1;

  return (
    <section className="w-full bg-white">
      <div className="mx-auto max-w-[1600px] px-10 py-12 sm:px-20 sm:py-16 lg:px-40 lg:py-20">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-medium tracking-tight text-brand-ink sm:text-4xl lg:text-5xl">
            {heading}
          </h2>
          {intro ? <p className="mt-4 text-base leading-relaxed text-brand-ink-muted">{intro}</p> : null}
        </Reveal>

        {isSingleColumn ? (
          <Reveal delay={0.1} className="mx-auto mt-10 max-w-md">
            <ul className="space-y-3">
              {columns[0].items.map((item) => (
                <li key={item} className="flex gap-3">
                  <ItemIcon icon={columns[0].icon ?? "check"} />
                  <span className="text-sm leading-relaxed text-brand-ink-muted">{item}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        ) : (
          <div className="mx-auto mt-14 grid max-w-4xl grid-cols-1 gap-x-16 gap-y-12 sm:grid-cols-2 lg:mt-16">
            {columns.map((column, i) => (
              <Reveal key={column.heading ?? i} delay={i * 0.1}>
                {column.heading ? (
                  <>
                    <h3 className="font-display text-xl font-medium text-brand-ink sm:text-2xl">{column.heading}</h3>
                    <span
                      className={
                        "mt-2 block h-0.5 w-10 " + ((column.icon ?? "check") === "check" ? "bg-brand-orange" : "bg-brand-ink/20")
                      }
                      aria-hidden="true"
                    />
                  </>
                ) : null}
                <ul className={column.heading ? "mt-6 space-y-4" : "space-y-4"}>
                  {column.items.map((item) => (
                    <li key={item} className="flex gap-3">
                      <ItemIcon icon={column.icon ?? "check"} />
                      <span className="text-sm leading-relaxed text-brand-ink-muted">{item}</span>
                    </li>
                  ))}
                </ul>
              </Reveal>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
