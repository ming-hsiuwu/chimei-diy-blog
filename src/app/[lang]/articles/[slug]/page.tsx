import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArticleJsonLd, FAQJsonLd } from "@/components/JsonLd";
import { ArticleCard } from "@/components/ArticleCard";
import { CTA } from "@/components/CTA";
import { Breadcrumb } from "@/components/Breadcrumb";
import { ArticleReadTracker } from "@/components/ArticleReadTracker";
import { FAQAccordion } from "@/components/FAQAccordion";
import { LineCTAButton } from "@/components/LineCTAButton";
import {
  articles,
  getArticle,
  getRelatedArticles,
  CATEGORIES,
} from "@/lib/articles";
import { SITE, isValidLocale } from "@/lib/site";

import FlourGuide from "./content/zh/how-to-choose-flour-for-beginners";
import OvenGuide from "./content/zh/home-oven-buying-guide";
import TartGuide from "./content/zh/tart-shell-freezing-guide";
import ButterGuide from "./content/zh/butter-salted-vs-unsalted";
import ChocolateChipCookiesGuide from "./content/zh/chocolate-chip-cookies";
import CastellaGuide from "./content/zh/japanese-castella-cake";
import RollingPinGuide from "./content/zh/rolling-pin-selection";
import BakingSugarsGuide from "./content/zh/baking-sugars-complete-guide";
import ClassSizeGuide from "./content/zh/small-vs-large-class";
import PastryLegalGuide from "./content/zh/pastry-studio-legal-setup";
import BreadFreezingGuide from "./content/zh/bread-freezing-guide";
import StandMixerGuide from "./content/zh/stand-mixer-guide";
import MacaronStorageGuide from "./content/zh/meringue-macaron-storage";
import CroissantsGuide from "./content/zh/homemade-croissants";
import BakingPanMaterialsGuide from "./content/zh/baking-pan-materials";
import WhippingCreamGuide from "./content/zh/whipping-cream-animal-vs-vegetable";
import BakingClassPickGuide from "./content/zh/how-to-pick-baking-class";
import CommercialKitchenGuide from "./content/zh/home-to-commercial-kitchen";
import CustardStorageGuide from "./content/zh/custard-cream-storage";
import CorporateMealGuide from "./content/zh/corporate-meal-supplier";
import LeftoverCreamGuide from "./content/zh/leftover-whipping-cream";
import LemonTartGuide from "./content/zh/french-lemon-tart";
import ToastPanGuide from "./content/zh/toast-loaf-pan-guide";
import BakingChocolateGuide from "./content/zh/baking-chocolate-selection";
import BeginnerStarterGuide from "./content/zh/beginner-starter-course";
import DessertPricingGuide from "./content/zh/dessert-pricing-formula";

const ZH_CONTENT: Record<string, () => React.ReactElement> = {
  "how-to-choose-flour-for-beginners": FlourGuide,
  "home-oven-buying-guide": OvenGuide,
  "tart-shell-freezing-guide": TartGuide,
  "butter-salted-vs-unsalted": ButterGuide,
  "chocolate-chip-cookies": ChocolateChipCookiesGuide,
  "japanese-castella-cake": CastellaGuide,
  "rolling-pin-selection": RollingPinGuide,
  "baking-sugars-complete-guide": BakingSugarsGuide,
  "small-vs-large-class": ClassSizeGuide,
  "pastry-studio-legal-setup": PastryLegalGuide,
  "bread-freezing-guide": BreadFreezingGuide,
  "stand-mixer-guide": StandMixerGuide,
  "meringue-macaron-storage": MacaronStorageGuide,
  "homemade-croissants": CroissantsGuide,
  "baking-pan-materials": BakingPanMaterialsGuide,
  "whipping-cream-animal-vs-vegetable": WhippingCreamGuide,
  "how-to-pick-baking-class": BakingClassPickGuide,
  "home-to-commercial-kitchen": CommercialKitchenGuide,
  "custard-cream-storage": CustardStorageGuide,
  "corporate-meal-supplier": CorporateMealGuide,
  "leftover-whipping-cream": LeftoverCreamGuide,
  "french-lemon-tart": LemonTartGuide,
  "toast-loaf-pan-guide": ToastPanGuide,
  "baking-chocolate-selection": BakingChocolateGuide,
  "beginner-starter-course": BeginnerStarterGuide,
  "dessert-pricing-formula": DessertPricingGuide,
};

export function generateStaticParams() {
  const params: { lang: string; slug: string }[] = [];
  for (const article of articles) {
    params.push({ lang: "zh", slug: article.slug });
  }
  return params;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string; slug: string }>;
}): Promise<Metadata> {
  const { lang, slug } = await params;
  const article = getArticle(slug);
  if (!article) return {};

  const url = `${SITE.url}/${lang}/articles/${slug}`;
  return {
    title: article.seoTitle || article.title,
    description: article.metaDescription,
    alternates: {
      canonical: url,
      languages: {
        "zh-TW": `${SITE.url}/zh/articles/${slug}`,
      },
    },
    openGraph: {
      type: "article",
      title: article.seoTitle || article.title,
      description: article.metaDescription,
      url,
      images: [{ url: article.image, alt: article.imageAlt }],
      publishedTime: article.date,
      modifiedTime: article.updatedDate || article.date,
      tags: article.tags,
    },
    keywords: article.tags,
  };
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ lang: string; slug: string }>;
}) {
  const { lang, slug } = await params;
  if (!isValidLocale(lang)) notFound();
  const article = getArticle(slug);
  if (!article) notFound();

  const Content = ZH_CONTENT[slug];
  if (!Content) notFound();

  const related = getRelatedArticles(slug);
  const categoryMeta = CATEGORIES[article.category];

  return (
    <article className="mx-auto max-w-3xl px-5 pb-16 pt-8">
      <ArticleJsonLd article={article} lang={lang === "en" ? "en" : "zh"} />
      <FAQJsonLd article={article} />

      <Breadcrumb
        lang={lang}
        items={[
          { label: categoryMeta.name, href: `/${lang}/categories/${article.category}` },
          { label: article.title },
        ]}
      />

      <header className="mb-8">
        <div className="flex flex-wrap items-center gap-3 text-xs text-brand-600">
          <Link
            href={`/${lang}/categories/${article.category}`}
            className="rounded-full bg-brand-50 px-2.5 py-1 font-medium hover:bg-brand-100"
          >
            {article.categoryName}
          </Link>
          <time dateTime={article.date} className="text-foreground/60">
            {article.date}
          </time>
          <span className="text-foreground/60">· {article.readingTime} 分鐘閱讀</span>
        </div>
        <h1 className="mt-4 font-serif text-3xl font-semibold leading-tight text-brand-700 md:text-4xl">
          {article.title}
        </h1>
        <p className="mt-4 text-base leading-8 text-foreground/80">
          {article.excerpt}
        </p>
      </header>

      <div className="relative mb-10 aspect-[16/9] overflow-hidden rounded-2xl bg-muted">
        <Image
          src={article.image}
          alt={article.imageAlt}
          fill
          sizes="(max-width: 768px) 100vw, 768px"
          className="object-cover"
          priority
        />
      </div>

      {article.toc && article.toc.length > 0 && (
        <nav
          aria-label="目錄"
          className="mb-10 rounded-2xl border border-brand-100 bg-brand-50 p-5"
        >
          <div className="mb-2 font-serif text-sm font-semibold text-brand-700">
            目錄
          </div>
          <ol className="space-y-1.5 text-sm text-brand-700">
            {article.toc.map((item, i) => (
              <li key={item.id}>
                <a href={`#${item.id}`} className="hover:text-brand-700 hover:underline">
                  {i + 1}. {item.label}
                </a>
              </li>
            ))}
          </ol>
        </nav>
      )}

      <div className="prose-chimei">
        <Content />
      </div>

      {article.faq && article.faq.length > 0 && (
        <section
          id="faq"
          className="mt-14 rounded-2xl border border-border bg-surface p-6 md:p-8"
        >
          <h2 className="font-serif text-2xl font-semibold text-brand-700">
            常見問題 FAQ
          </h2>
          <FAQAccordion items={article.faq} articleSlug={article.slug} />
        </section>
      )}

      <ArticleReadTracker slug={article.slug} category={article.category} />

      {article.relatedProducts && article.relatedProducts.length > 0 && (
        <section className="mt-12 rounded-2xl border border-brand-100 bg-brand-50 p-6 md:p-8">
          <h2 className="font-serif text-xl font-semibold text-brand-700">
            棋美點心屋相關商品
          </h2>
          <div className="mt-5 grid gap-4 md:grid-cols-2">
            {article.relatedProducts.map((p, i) => (
              <LineCTAButton
                key={i}
                location="related_product"
                category={article.category}
                href={p.link}
                className="block rounded-xl border border-border bg-surface p-4 transition-all hover:border-brand hover:shadow-md"
              >
                <div className="font-serif text-base font-semibold text-brand-700">
                  {p.title}
                </div>
                <p className="mt-1 text-sm text-foreground/75">{p.description}</p>
                <div className="mt-2 text-xs text-brand">加 LINE 詢問 →</div>
              </LineCTAButton>
            ))}
          </div>
        </section>
      )}

      <CTA category={article.category} />

      {related.length > 0 && (
        <section className="mt-14">
          <h2 className="mb-6 font-serif text-xl font-semibold text-brand-700">
            延伸閱讀
          </h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {related.map((r) => (
              <ArticleCard key={r.slug} article={r} lang={lang} />
            ))}
          </div>
        </section>
      )}
    </article>
  );
}
