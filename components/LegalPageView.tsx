import Reveal from "@/components/Reveal";
import FinalCta from "@/components/FinalCta";
import type { LegalPage } from "@/lib/legal/types";

export default function LegalPageView({ page }: { page: LegalPage }) {
  return (
    <>
      <section className="w-full bg-white">
        <div className="mx-auto max-w-[1600px] px-10 py-16 sm:px-20 sm:py-20 lg:px-40 lg:py-24">
          <Reveal className="mx-auto max-w-3xl text-center">
            <h1 className="font-display text-4xl font-medium leading-[1.1] tracking-tight text-brand-ink sm:text-5xl">
              {page.title}
            </h1>
            <p className="mt-5 text-sm leading-relaxed text-brand-ink-muted">
              Website: {page.website} · Brand: {page.brand} · Operator: {page.operator}
              <br />
              Last updated: {page.lastUpdated}
            </p>
          </Reveal>

          <Reveal delay={0.08} className="mx-auto mt-8 max-w-3xl">
            <div className="rounded-2xl border border-brand-orange/25 bg-brand-orange/5 p-5">
              <p className="text-sm leading-relaxed text-brand-ink-muted">{page.draftNotice}</p>
            </div>
          </Reveal>

          <div className="mx-auto mt-14 max-w-3xl space-y-12">
            {page.sections.map((section, i) => (
              <Reveal key={section.heading} delay={Math.min(i * 0.03, 0.3)}>
                <h2 className="font-display text-xl font-medium text-brand-ink sm:text-2xl">{section.heading}</h2>
                <div className="mt-3 space-y-3">
                  {section.blocks.map((block, j) =>
                    block.type === "paragraph" ? (
                      <p key={j} className="text-base leading-relaxed text-brand-ink-muted">
                        {block.text}
                      </p>
                    ) : (
                      <ul key={j} className="list-disc space-y-1.5 pl-5">
                        {block.items.map((item) => (
                          <li key={item} className="text-base leading-relaxed text-brand-ink-muted">
                            {item}
                          </li>
                        ))}
                      </ul>
                    )
                  )}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <FinalCta />
    </>
  );
}
