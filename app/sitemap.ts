import type { MetadataRoute } from "next";
import { getArticleSlugs } from "@/lib/blog/articles";
import { ROUTE_SEO, SITE_URL } from "@/lib/seo";

// No lastModified: dates are only worth publishing when they come from real content updates.
export default function sitemap(): MetadataRoute.Sitemap {
  const pages = Object.keys(ROUTE_SEO).map((path) => (path === "/" ? SITE_URL : `${SITE_URL}${path}`));
  const articles = getArticleSlugs().map((slug) => `${SITE_URL}/blog/${slug}`);
  return [...pages, ...articles].map((url) => ({ url }));
}
