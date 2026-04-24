import Link from "next/link";
import Image from "next/image";
import { SITE, type Locale } from "@/lib/site";
import { CATEGORIES } from "@/lib/articles";

export function Header({ lang }: { lang: Locale }) {
  const prefix = `/${lang}`;
  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/85 backdrop-blur supports-[backdrop-filter]:bg-background/70">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
        <Link
          href={prefix}
          className="flex items-center gap-3 text-brand-700 hover:text-brand"
          aria-label={SITE.brandName}
        >
          <Image
            src="/logo.png"
            alt={SITE.brandName}
            width={44}
            height={44}
            priority
            className="h-11 w-11 rounded-full"
          />
          <span className="flex flex-col leading-tight">
            <span className="font-serif text-[1.05rem] font-semibold">
              {SITE.brandNameShort}
            </span>
            <span className="font-display text-[0.75rem] tracking-[0.18em] text-brand-500">
              CHIMEI DIY
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-6 text-sm md:flex">
          <Link href={`${prefix}/about`} className="text-foreground/80 hover:text-brand">
            關於棋美
          </Link>
          {Object.values(CATEGORIES)
            .slice(0, 4)
            .map((c) => (
              <Link
                key={c.slug}
                href={`${prefix}/categories/${c.slug}`}
                className="text-foreground/80 hover:text-brand"
              >
                {c.name}
              </Link>
            ))}
          <a
            href={SITE.lineUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-brand px-4 py-2 text-background transition-colors hover:bg-brand-700"
          >
            加 LINE 詢問
          </a>
        </nav>

        <a
          href={SITE.lineUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full bg-brand px-3 py-1.5 text-xs text-background md:hidden"
        >
          LINE
        </a>
      </div>
    </header>
  );
}
