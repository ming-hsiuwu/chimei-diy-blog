import Link from "next/link";

interface PaginationProps {
  lang: string;
  current: number;
  total: number;
  basePath: string;
}

function pageUrl(basePath: string, page: number) {
  return page === 1 ? basePath : `${basePath}/page/${page}`;
}

export function Pagination({ lang, current, total, basePath }: PaginationProps) {
  if (total <= 1) return null;

  const prev = current > 1 ? current - 1 : null;
  const next = current < total ? current + 1 : null;
  const pages = Array.from({ length: total }, (_, i) => i + 1);

  return (
    <nav
      aria-label="文章分頁"
      className="mt-12 flex items-center justify-center gap-2"
    >
      {prev ? (
        <Link
          href={pageUrl(basePath, prev)}
          rel="prev"
          className="rounded-full border border-border px-4 py-2 text-sm text-foreground/80 transition-colors hover:border-brand hover:text-brand"
        >
          ← 上一頁
        </Link>
      ) : (
        <span className="rounded-full border border-border px-4 py-2 text-sm text-foreground/40">
          ← 上一頁
        </span>
      )}

      <ul className="flex items-center gap-1">
        {pages.map((p) =>
          p === current ? (
            <li key={p}>
              <span
                aria-current="page"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-brand text-sm font-semibold text-background"
              >
                {p}
              </span>
            </li>
          ) : (
            <li key={p}>
              <Link
                href={pageUrl(basePath, p)}
                aria-label={`第 ${p} 頁`}
                className="flex h-10 w-10 items-center justify-center rounded-full text-sm text-foreground/80 transition-colors hover:bg-brand-50 hover:text-brand"
              >
                {p}
              </Link>
            </li>
          ),
        )}
      </ul>

      {next ? (
        <Link
          href={pageUrl(basePath, next)}
          rel="next"
          className="rounded-full border border-border px-4 py-2 text-sm text-foreground/80 transition-colors hover:border-brand hover:text-brand"
        >
          下一頁 →
        </Link>
      ) : (
        <span className="rounded-full border border-border px-4 py-2 text-sm text-foreground/40">
          下一頁 →
        </span>
      )}
    </nav>
  );
}
