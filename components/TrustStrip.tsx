import Reveal from "@/components/Reveal";

const ITEMS = [
  {
    label: "36+ Years of Safari Experience",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6" aria-hidden="true">
        <circle cx="12" cy="12" r="8.5" stroke="currentColor" strokeWidth="1.5" />
        <path d="M12 7.5V12l3 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    label: "Comfortable 4x4 Safari Jeeps",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6" aria-hidden="true">
        <path
          d="M4 16V12l1.8-4.2A2 2 0 0 1 7.6 6.5h8.8a2 2 0 0 1 1.8 1.3L20 12v4"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
        <path d="M4 16h16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="7.5" cy="16.5" r="1.6" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="16.5" cy="16.5" r="1.6" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    label: "Free Cancellation up to 24 Hours",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6" aria-hidden="true">
        <path
          d="M12 4.5c4.14 0 7.5 1.4 7.5 3.13v6.06c0 3.15-3.51 5.36-7.5 6.31-3.99-.95-7.5-3.16-7.5-6.31V7.63c0-1.73 3.36-3.13 7.5-3.13Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
        <path d="M9 12.2l2 2 4-4.2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    label: "24/7 WhatsApp Support",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6" aria-hidden="true">
        <path
          d="M6 19.5l1.1-3.2a7 7 0 1 1 2.6 2.5L6 19.5Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
        <path d="M9.5 10a.5.5 0 1 0 1 0 .5.5 0 0 0-1 0Zm3 0a.5.5 0 1 0 1 0 .5.5 0 0 0-1 0Z" fill="currentColor" />
      </svg>
    ),
  },
];

export default function TrustStrip() {
  return (
    <section className="w-full bg-white">
      <Reveal className="mx-auto max-w-[1600px] px-5 py-10 sm:px-8 lg:px-14">
        <div className="grid grid-cols-1 gap-6 divide-y divide-black/10 sm:grid-cols-2 sm:gap-8 sm:divide-y-0 lg:grid-cols-4">
          {ITEMS.map((item, i) => (
            <div key={item.label} className={"flex items-center gap-3 pt-6 sm:pt-0" + (i === 0 ? " pt-0" : "")}>
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-brand-orange/10 text-brand-orange">
                {item.icon}
              </span>
              <span className="text-sm font-medium text-brand-ink">{item.label}</span>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
