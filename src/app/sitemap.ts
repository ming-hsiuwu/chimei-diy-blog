import type { MetadataRoute } from "next";
import { articles, CATEGORIES } from "@/lib/articles";
import { SITE } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = SITE.url;
  const now = new Date();

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
  ];

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

  return [...staticEntries, ...categoryEntries, ...articleEntries];
}
