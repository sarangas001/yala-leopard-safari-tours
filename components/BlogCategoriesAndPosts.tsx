"use client";

import Image from "next/image";
import { useState } from "react";
import Reveal from "@/components/Reveal";
import { ARTICLES } from "@/lib/blog/articles";
import { CATEGORIES, categoryLabel, type CategoryKey } from "@/lib/blog/types";

export default function BlogCategoriesAndPosts() {
  const [active, setActive] = useState<CategoryKey | "all">("all");
  const filtered = active === "all" ? ARTICLES : ARTICLES.filter((article) => article.category === active);

  return (
    <>
      <section className="w-full bg-white">
        <div className="mx-auto max-w-[1600px] px-10 py-16 sm:px-20 sm:py-20 lg:px-40 lg:py-24">
          <Reveal className="mx-auto max-w-2xl text-center">
            <h2 className="font-display text-3xl font-medium tracking-tight text-brand-ink sm:text-4xl lg:text-5xl">
              Explore Categories
            </h2>
          </Reveal>

          <Reveal delay={0.1} className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <div role="tablist" aria-label="Filter articles by category" className="flex flex-wrap items-center justify-center gap-3">
              <button
                type="button"
                role="tab"
                aria-selected={active === "all"}
                onClick={() => setActive("all")}
                className={
                  "rounded-full px-5 py-2.5 text-sm font-medium transition-colors " +
                  (active === "all"
                    ? "bg-brand-orange text-white shadow-md shadow-brand-orange/25"
                    : "bg-brand-cream text-brand-ink-muted hover:bg-brand-orange/10 hover:text-brand-ink")
                }
              >
                All Articles
              </button>
              {CATEGORIES.map((category) => {
                const isActive = active === category.key;
                return (
                  <button
                    key={category.key}
                    type="button"
                    role="tab"
                    aria-selected={isActive}
                    onClick={() => setActive(category.key)}
                    className={
                      "rounded-full px-5 py-2.5 text-sm font-medium transition-colors " +
                      (isActive
                        ? "bg-brand-orange text-white shadow-md shadow-brand-orange/25"
                        : "bg-brand-cream text-brand-ink-muted hover:bg-brand-orange/10 hover:text-brand-ink")
                    }
                  >
                    {category.label}
                  </button>
                );
              })}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="w-full bg-white">
        <div className="mx-auto max-w-[1600px] px-10 pb-16 sm:px-20 sm:pb-20 lg:px-40 lg:pb-24">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-7">
            {filtered.map((article, i) => (
              <Reveal key={article.slug} delay={(i % 3) * 0.08}>
                <a
                  href={`/blog/${article.slug}`}
                  className="group flex h-full flex-col overflow-hidden rounded-3xl border border-black/6 bg-white shadow-sm transition-shadow duration-300 hover:shadow-md"
                >
                  <div className="relative aspect-4/3 w-full overflow-hidden">
                    <Image
                      src={article.heroImage}
                      alt={article.heroAlt}
                      fill
                      sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                      quality={72}
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold tracking-wide text-brand-ink backdrop-blur-sm">
                      {categoryLabel(article.category)}
                    </span>
                  </div>

                  <div className="flex flex-1 flex-col p-6">
                    <p className="text-xs text-brand-ink-muted">{article.date}</p>
                    <h3 className="mt-2 font-display text-lg font-medium text-brand-ink">{article.title}</h3>
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
    </>
  );
}
