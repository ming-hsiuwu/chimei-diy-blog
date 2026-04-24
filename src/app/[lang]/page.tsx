import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArticleCard } from "@/components/ArticleCard";
import { CTA } from "@/components/CTA";
import { articles, CATEGORIES } from "@/lib/articles";
import { SITE, isValidLocale } from "@/lib/site";

export const metadata: Metadata = {
  title: { absolute: SITE.defaultTitle },
  description: SITE.defaultDescription,
  alternates: {
    canonical: `${SITE.url}/zh`,
    languages: {
      "zh-TW": `${SITE.url}/zh`,
      "en": `${SITE.url}/en`,
    },
  },
  openGraph: {
    title: SITE.defaultTitle,
    description: SITE.defaultDescription,
    url: `${SITE.url}/zh`,
    images: articles[0] ? [articles[0].image] : [],
  },
};

export default async function HomePage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!isValidLocale(lang)) notFound();

  const latest = articles.slice(0, 6);
  const featured = articles[0];

  return (
    <div className="mx-auto max-w-6xl px-5 pb-16 pt-10">
      <section className="relative overflow-hidden rounded-3xl border border-brand-100 bg-gradient-to-br from-brand-50 via-muted to-surface px-6 py-14 md:px-12 md:py-20">
        <div className="max-w-3xl">
          <div className="font-display text-xs tracking-[0.3em] text-brand-500">
            CHIMEI DIY · 棋美點心屋
          </div>
          <h1 className="mt-4 font-serif text-3xl font-semibold leading-tight text-brand-700 md:text-5xl">
            烘焙，是一種<br className="hidden md:block" />傳遞溫度的生活方式
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-8 text-foreground/80 md:text-lg">
            來自麵包師傅家庭的整合型品牌，提供烘焙材料、器具、教學與企業餐盒。在這裡，我們分享從新手到專業的烘焙知識，用真實的材料故事與實作經驗陪你前進。
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href={`/${lang}/categories/recipes`}
              className="rounded-full bg-brand px-5 py-3 text-sm text-background transition-colors hover:bg-brand-700"
            >
              看最新食譜
            </Link>
            <a
              href={SITE.lineUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-brand px-5 py-3 text-sm text-brand transition-colors hover:bg-brand hover:text-background"
            >
              加 LINE 詢問課程
            </a>
          </div>
        </div>
      </section>

      <section className="mt-14">
        <div className="mb-6 flex items-end justify-between">
          <h2 className="font-serif text-2xl font-semibold text-brand-700">
            最新文章
          </h2>
          <Link
            href={`/${lang}/categories/recipes`}
            className="text-sm text-brand hover:text-brand-700"
          >
            查看全部 →
          </Link>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {latest.map((article, i) => (
            <ArticleCard
              key={article.slug}
              article={article}
              lang={lang}
              priority={i === 0}
            />
          ))}
        </div>
      </section>

      <section className="mt-16">
        <h2 className="font-serif text-2xl font-semibold text-brand-700">
          主題分類
        </h2>
        <p className="mt-2 text-sm text-foreground/70">
          從原料、器具、食譜到保存技巧，依你目前在乎的主題逛起。
        </p>
        <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {Object.values(CATEGORIES).map((c) => (
            <Link
              key={c.slug}
              href={`/${lang}/categories/${c.slug}`}
              className="group rounded-2xl border border-border bg-surface p-5 transition-all hover:border-brand hover:-translate-y-0.5 hover:shadow-md"
            >
              <div className="font-serif text-lg font-semibold text-brand-700 group-hover:text-brand">
                {c.name}
              </div>
              <p className="mt-1 text-sm leading-6 text-foreground/70">
                {c.description}
              </p>
            </Link>
          ))}
        </div>
      </section>

      {featured && <CTA category={featured.category} />}
    </div>
  );
}
