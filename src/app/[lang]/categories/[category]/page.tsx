import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArticleCard } from "@/components/ArticleCard";
import { CTA } from "@/components/CTA";
import { Breadcrumb } from "@/components/Breadcrumb";
import {
  articles,
  CATEGORIES,
  getArticlesByCategory,
  type CategorySlug,
} from "@/lib/articles";
import { SITE, isValidLocale } from "@/lib/site";

export function generateStaticParams() {
  const params: { lang: string; category: string }[] = [];
  for (const lang of SITE.locales) {
    for (const category of Object.keys(CATEGORIES)) {
      params.push({ lang, category });
    }
  }
  return params;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string; category: string }>;
}): Promise<Metadata> {
  const { lang, category } = await params;
  const categoryMeta = CATEGORIES[category as CategorySlug];
  if (!categoryMeta) return {};

  const title = `${categoryMeta.name}｜${SITE.brandNameShort} 烘焙部落格`;
  return {
    title,
    description: categoryMeta.description,
    alternates: {
      canonical: `${SITE.url}/${lang}/categories/${category}`,
    },
    openGraph: {
      title,
      description: categoryMeta.description,
      url: `${SITE.url}/${lang}/categories/${category}`,
    },
  };
}

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ lang: string; category: string }>;
}) {
  const { lang, category } = await params;
  if (!isValidLocale(lang)) notFound();
  const categoryMeta = CATEGORIES[category as CategorySlug];
  if (!categoryMeta) notFound();

  const categoryArticles = getArticlesByCategory(category as CategorySlug);
  const showAll = categoryArticles.length === 0;
  const displayList = showAll ? articles : categoryArticles;

  return (
    <div className="mx-auto max-w-6xl px-5 pb-16 pt-8">
      <Breadcrumb lang={lang} items={[{ label: categoryMeta.name }]} />

      <header className="mb-10">
        <div className="font-display text-xs tracking-[0.25em] text-brand-500">
          CATEGORY
        </div>
        <h1 className="mt-2 font-serif text-3xl font-semibold text-brand-700 md:text-4xl">
          {categoryMeta.name}
        </h1>
        <p className="mt-3 max-w-2xl text-base leading-7 text-foreground/75">
          {categoryMeta.description}
        </p>
      </header>

      {showAll && (
        <div className="mb-8 rounded-2xl border border-brand-100 bg-brand-50 p-5 text-sm text-brand-700">
          此分類文章還在籌備中，先逛其他主題的文章。
        </div>
      )}

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {displayList.map((a, i) => (
          <ArticleCard key={a.slug} article={a} lang={lang} priority={i === 0} />
        ))}
      </div>

      <CTA category={category as CategorySlug} />
    </div>
  );
}
