import Image from "next/image";
import Reveal from "@/components/Reveal";
import { getArticle } from "@/lib/blog/articles";
import { categoryLabel } from "@/lib/blog/types";

const FEATURED_SLUGS = [
  "complete-guide-to-yala-national-park-safari",
  "yala-vs-udawalawe-vs-bundala-which-safari-should-you-choose",
];

export default function BlogFeatured() {
  const featured = FEATURED_SLUGS.map(getArticle).filter((article) => article !== undefined);

  return (
    <section className="w-full bg-white">
      <div className="mx-auto max-w-[1600px] px-10 py-16 sm:px-20 sm:py-20 lg:px-40 lg:py-24">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-medium tracking-tight text-brand-ink sm:text-4xl lg:text-5xl">
            Featured Guide
          </h2>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:mt-16 lg:gap-7">
          {featured.map((article, i) => (
            <Reveal key={article.slug} delay={i * 0.1}>
              <a
                href={`/blog/${article.slug}`}
                className="group flex h-full flex-col overflow-hidden rounded-3xl border border-black/6 bg-white shadow-sm transition-shadow duration-300 hover:shadow-md"
              >
                <div className="relative aspect-4/3 w-full overflow-hidden">
                  <Image
                    src={article.heroImage}
                    alt={article.heroAlt}
                    fill
                    sizes="(min-width: 1024px) 50vw, 100vw"
                    quality={75}
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold tracking-wide text-brand-ink backdrop-blur-sm">
                    {categoryLabel(article.category)}
                  </span>
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <p className="text-xs text-brand-ink-muted">{article.date}</p>
                  <h3 className="mt-2 font-display text-xl font-medium text-brand-ink sm:text-2xl">
                    {article.title}
                  </h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-brand-ink-muted">{article.excerpt}</p>
                  <span className="mt-5 inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.15em] text-brand-orange transition-colors duration-300 group-hover:text-brand-orange-dark">
                    Read More
                    <span aria-hidden="true" className="transition-transform duration-300 group-hover:translate-x-1">
                      →
                    </span>
                  </span>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
