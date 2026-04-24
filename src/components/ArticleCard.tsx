import Link from "next/link";
import Image from "next/image";
import type { ArticleMeta } from "@/lib/articles";
import type { Locale } from "@/lib/site";

export function ArticleCard({
  article,
  lang,
  priority = false,
}: {
  article: ArticleMeta;
  lang: Locale;
  priority?: boolean;
}) {
  return (
    <Link
      href={`/${lang}/articles/${article.slug}`}
      className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-surface transition-all hover:-translate-y-1 hover:shadow-lg"
    >
      <div className="relative aspect-[16/10] overflow-hidden bg-muted">
        <Image
          src={article.image}
          alt={article.imageAlt}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          priority={priority}
        />
      </div>
      <div className="flex flex-1 flex-col gap-3 p-5">
        <div className="flex items-center gap-3 text-xs text-brand-600">
          <span className="rounded-full bg-brand-50 px-2.5 py-1 font-medium">
            {article.categoryName}
          </span>
          <time dateTime={article.date} className="text-foreground/50">
            {article.date}
          </time>
          <span className="text-foreground/50">· {article.readingTime} 分鐘</span>
        </div>
        <h3 className="font-serif text-lg font-semibold leading-snug text-brand-700 group-hover:text-brand">
          {article.title}
        </h3>
        <p className="text-sm leading-7 text-foreground/75 line-clamp-3">
          {article.excerpt}
        </p>
      </div>
    </Link>
  );
}
