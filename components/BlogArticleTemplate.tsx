import Image from "next/image";
import Reveal from "@/components/Reveal";
import type { ArticleBlock } from "@/lib/blog/types";

export default function BlogArticleTemplate({ blocks }: { blocks: ArticleBlock[] }) {
  return (
    <div className="mx-auto max-w-2xl">
      {blocks.map((block, i) => {
        switch (block.type) {
          case "heading":
            return (
              <Reveal key={i} className="mt-10 first:mt-0">
                <h2 className="font-display text-2xl font-medium text-brand-ink sm:text-3xl">{block.text}</h2>
              </Reveal>
            );
          case "paragraph":
            return (
              <Reveal key={i} className="mt-5 first:mt-0">
                <p className="text-base leading-relaxed text-brand-ink-muted">{block.text}</p>
              </Reveal>
            );
          case "quote":
            return (
              <Reveal key={i} className="mt-8 first:mt-0">
                <blockquote className="border-l-2 border-brand-orange py-1 pl-6 font-display text-xl font-medium italic leading-snug text-brand-ink">
                  {block.text}
                </blockquote>
              </Reveal>
            );
          case "image":
            return (
              <Reveal key={i} className="mt-8 first:mt-0">
                <figure>
                  <div className="relative aspect-3/2 w-full overflow-hidden rounded-3xl">
                    <Image
                      src={block.src}
                      alt={block.alt}
                      fill
                      sizes="(min-width: 640px) 672px, 100vw"
                      quality={80}
                      className="object-cover"
                    />
                  </div>
                  {block.caption ? (
                    <figcaption className="mt-3 text-center text-sm text-brand-ink-muted">{block.caption}</figcaption>
                  ) : null}
                </figure>
              </Reveal>
            );
          default:
            return null;
        }
      })}
    </div>
  );
}
