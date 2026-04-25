import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArticleCard } from "@/components/ArticleCard";
import { Breadcrumb } from "@/components/Breadcrumb";
import { Pagination } from "@/components/Pagination";
import { articles } from "@/lib/articles";
import { SITE, isValidLocale } from "@/lib/site";
import { PAGE_SIZE } from "../../page";

const TOTAL_PAGES = Math.ceil(articles.length / PAGE_SIZE);

export function generateStaticParams() {
  const params: { lang: string; pageNumber: string }[] = [];
  for (const lang of SITE.locales) {
    for (let p = 2; p <= TOTAL_PAGES; p++) {
      params.push({ lang, pageNumber: String(p) });
    }
  }
  return params;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string; pageNumber: string }>;
}): Promise<Metadata> {
  const { lang, pageNumber } = await params;
  const page = Number.parseInt(pageNumber, 10);
  const title = `全部文章 第 ${page} 頁｜${SITE.brandNameShort} 烘焙部落格`;
  const description = `烘焙生活｜原料、器具、食譜、保存、創業與課程，第 ${page} 頁文章列表（共 ${TOTAL_PAGES} 頁）。`;
  return {
    title,
    description,
    alternates: {
      canonical: `${SITE.url}/${lang}/articles/page/${page}`,
    },
    openGraph: {
      title,
      description,
      url: `${SITE.url}/${lang}/articles/page/${page}`,
    },
  };
}

export default async function PaginatedArticlesPage({
  params,
}: {
  params: Promise<{ lang: string; pageNumber: string }>;
}) {
  const { lang, pageNumber } = await params;
  if (!isValidLocale(lang)) notFound();

  const page = Number.parseInt(pageNumber, 10);
  if (!Number.isFinite(page) || page < 2 || page > TOTAL_PAGES) notFound();

  const start = (page - 1) * PAGE_SIZE;
  const pageArticles = articles.slice(start, start + PAGE_SIZE);

  return (
    <div className="mx-auto max-w-6xl px-5 pb-16 pt-8">
      <Breadcrumb
        lang={lang}
        items={[
          { label: "全部文章", href: `/${lang}/articles` },
          { label: `第 ${page} 頁` },
        ]}
      />

      <header className="mb-10">
        <div className="font-display text-xs tracking-[0.25em] text-brand-500">
          ALL ARTICLES · PAGE {page}
        </div>
        <h1 className="mt-2 font-serif text-3xl font-semibold text-brand-700 md:text-4xl">
          全部文章 · 第 {page} 頁
        </h1>
        <p className="mt-3 max-w-2xl text-base leading-7 text-foreground/75">
          共 {articles.length} 篇、{TOTAL_PAGES} 頁；目前顯示第 {page} 頁。
        </p>
      </header>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {pageArticles.map((a, i) => (
          <ArticleCard key={a.slug} article={a} lang={lang} priority={i === 0} />
        ))}
      </div>

      <Pagination
        lang={lang}
        current={page}
        total={TOTAL_PAGES}
        basePath={`/${lang}/articles`}
      />
    </div>
  );
}
