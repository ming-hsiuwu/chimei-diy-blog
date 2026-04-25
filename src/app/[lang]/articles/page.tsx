import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArticleCard } from "@/components/ArticleCard";
import { Breadcrumb } from "@/components/Breadcrumb";
import { Pagination } from "@/components/Pagination";
import { articles } from "@/lib/articles";
import { SITE, isValidLocale } from "@/lib/site";

export const PAGE_SIZE = 12;

export function generateStaticParams() {
  return SITE.locales.map((lang) => ({ lang }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const title = `全部文章｜${SITE.brandNameShort} 烘焙部落格`;
  const description =
    "烘焙生活｜原料、器具、食譜、保存、創業與課程，所有文章依發佈日期排序。";
  return {
    title,
    description,
    alternates: {
      canonical: `${SITE.url}/${lang}/articles`,
      languages: {
        "zh-TW": `${SITE.url}/zh/articles`,
      },
    },
    openGraph: {
      title,
      description,
      url: `${SITE.url}/${lang}/articles`,
    },
  };
}

export default async function AllArticlesPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!isValidLocale(lang)) notFound();

  const totalPages = Math.ceil(articles.length / PAGE_SIZE);
  const pageArticles = articles.slice(0, PAGE_SIZE);

  return (
    <div className="mx-auto max-w-6xl px-5 pb-16 pt-8">
      <Breadcrumb lang={lang} items={[{ label: "全部文章" }]} />

      <header className="mb-10">
        <div className="font-display text-xs tracking-[0.25em] text-brand-500">
          ALL ARTICLES
        </div>
        <h1 className="mt-2 font-serif text-3xl font-semibold text-brand-700 md:text-4xl">
          全部文章
        </h1>
        <p className="mt-3 max-w-2xl text-base leading-7 text-foreground/75">
          從原料、器具、食譜到保存、創業與課程，共 {articles.length} 篇文章依發佈日期由新到舊排序。
        </p>
      </header>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {pageArticles.map((a, i) => (
          <ArticleCard key={a.slug} article={a} lang={lang} priority={i === 0} />
        ))}
      </div>

      <Pagination
        lang={lang}
        current={1}
        total={totalPages}
        basePath={`/${lang}/articles`}
      />
    </div>
  );
}
