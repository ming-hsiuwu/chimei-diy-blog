import type { ArticleMeta } from "@/lib/articles";
import { SITE } from "@/lib/site";

export function ArticleJsonLd({
  article,
  lang,
}: {
  article: ArticleMeta;
  lang: "zh" | "en";
}) {
  const url = `${SITE.url}/${lang}/articles/${article.slug}`;
  const data = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.seoTitle || article.title,
    description: article.metaDescription,
    image: [article.image],
    datePublished: article.date,
    dateModified: article.updatedDate || article.date,
    author: {
      "@type": "Organization",
      name: article.author || SITE.brandName,
    },
    publisher: {
      "@type": "Organization",
      name: SITE.brandName,
      logo: {
        "@type": "ImageObject",
        url: `${SITE.url}/logo.png`,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": url,
    },
    keywords: article.tags.join(", "),
    inLanguage: lang === "zh" ? "zh-Hant" : "en",
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function FAQJsonLd({ article }: { article: ArticleMeta }) {
  if (!article.faq || article.faq.length === 0) return null;
  const data = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: article.faq.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: f.answer,
      },
    })),
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function OrganizationJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: SITE.brandName,
    alternateName: SITE.brandNameEn,
    url: SITE.url,
    address: {
      "@type": "PostalAddress",
      streetAddress: "復興南路二段 292 號",
      addressLocality: "大安區",
      addressRegion: "台北市",
      addressCountry: "TW",
    },
    sameAs: [SITE.lineUrl],
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
