import type { MetadataRoute } from "next";
import { articles, CATEGORIES } from "@/lib/articles";
import { SITE } from "@/lib/site";

const ARTICLES_PAGE_SIZE = 12;

export default function sitemap(): MetadataRoute.Sitemap {
  const base = SITE.url;
  const now = new Date();

  const totalArticlePages = Math.ceil(articles.length / ARTICLES_PAGE_SIZE);

  const staticEntries: MetadataRoute.Sitemap = [
    {
      url: `${base}/zh`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${base}/zh/about`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${base}/zh/articles`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },
  ];

  const articlePagedEntries: MetadataRoute.Sitemap = [];
  for (let p = 2; p <= totalArticlePages; p++) {
    articlePagedEntries.push({
      url: `${base}/zh/articles/page/${p}`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.7,
    });
  }

  const categoryEntries: MetadataRoute.Sitemap = Object.keys(CATEGORIES).map(
    (slug) => ({
      url: `${base}/zh/categories/${slug}`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.7,
    }),
  );

  const articleEntries: MetadataRoute.Sitemap = articles.map((a) => ({
    url: `${base}/zh/articles/${a.slug}`,
    lastModified: new Date(a.updatedDate || a.date),
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  return [
    ...staticEntries,
    ...articlePagedEntries,
    ...categoryEntries,
    ...articleEntries,
  ];
}
