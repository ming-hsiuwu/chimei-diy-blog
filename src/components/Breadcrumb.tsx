import Link from "next/link";
import type { Locale } from "@/lib/site";

export function Breadcrumb({
  items,
  lang,
}: {
  items: { label: string; href?: string }[];
  lang: Locale;
}) {
  return (
    <nav
      aria-label="breadcrumb"
      className="mb-6 text-xs text-foreground/60"
    >
      <ol className="flex flex-wrap items-center gap-1.5">
        <li>
          <Link href={`/${lang}`} className="hover:text-brand">
            首頁
          </Link>
        </li>
        {items.map((item, i) => (
          <li key={i} className="flex items-center gap-1.5">
            <span>/</span>
            {item.href ? (
              <Link href={item.href} className="hover:text-brand">
                {item.label}
              </Link>
            ) : (
              <span className="text-brand-700">{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
