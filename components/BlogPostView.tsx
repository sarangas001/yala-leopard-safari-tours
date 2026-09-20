import Image from "next/image";
import Reveal from "@/components/Reveal";
import BlogArticleTemplate from "@/components/BlogArticleTemplate";
import FinalCta from "@/components/FinalCta";
import { categoryLabel } from "@/lib/blog/types";
import type { BlogArticle } from "@/lib/blog/types";

export default function BlogPostView({ article }: { article: BlogArticle }) {
  return (
    <>
      <section className="w-full bg-white">
        <div className="mx-auto max-w-[1600px] px-10 py-16 sm:px-20 sm:py-20 lg:px-40 lg:py-24">
          <Reveal className="mx-auto max-w-2xl text-center">
            <span className="inline-flex items-center gap-3 text-xs font-medium uppercase tracking-[0.22em] text-brand-orange">
              <span className="h-px w-6 bg-brand-orange/50" aria-hidden="true" />
              {categoryLabel(article.category)}
              <span className="h-px w-6 bg-brand-orange/50" aria-hidden="true" />
            </span>
            <h1 className="mt-4 font-display text-4xl font-medium leading-[1.05] tracking-tight text-brand-ink sm:text-5xl">
              {article.title}
            </h1>
            <p className="mt-4 text-sm text-brand-ink-muted">{article.date}</p>
          </Reveal>

          <Reveal delay={0.1} className="mx-auto mt-10 max-w-3xl">
            <div className="relative aspect-16/9 w-full overflow-hidden rounded-3xl">
              <Image
                src={article.heroImage}
                alt={article.heroAlt}
                fill
                priority
                sizes="(min-width: 1024px) 768px, 100vw"
                quality={82}
                className="object-cover"
              />
            </div>
          </Reveal>

          <div className="mt-12">
            <BlogArticleTemplate blocks={article.blocks} />
          </div>

          <Reveal className="mx-auto mt-14 max-w-2xl text-center">
            <a
              href={article.internalLinkHref}
              className="inline-flex items-center gap-2 rounded-full bg-brand-orange px-7 py-3.5 text-sm font-semibold text-white shadow-md shadow-brand-orange/25 transition-all hover:bg-brand-orange-dark hover:shadow-lg hover:shadow-brand-orange/30"
            >
              {article.internalLinkLabel}
              <span aria-hidden="true">→</span>
            </a>
          </Reveal>
        </div>
      </section>

      <FinalCta />
    </>
  );
}
