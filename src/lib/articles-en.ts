import type { ArticleMeta } from "./articles";

export const articlesEn: ArticleMeta[] = [];

export const articlesEnBySlug = new Map(articlesEn.map((a) => [a.slug, a]));

export function getArticleEn(slug: string): ArticleMeta | undefined {
  return articlesEnBySlug.get(slug);
}
