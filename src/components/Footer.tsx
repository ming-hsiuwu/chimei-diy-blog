import Link from "next/link";
import { SITE, type Locale } from "@/lib/site";
import { CATEGORIES } from "@/lib/articles";
import { LineCTAButton } from "./LineCTAButton";

export function Footer({ lang }: { lang: Locale }) {
  const prefix = `/${lang}`;
  return (
    <footer className="mt-24 border-t border-border bg-muted">
      <div className="mx-auto max-w-6xl px-5 py-12">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="md:col-span-2">
            <div className="font-serif text-xl font-semibold text-brand-700">
              {SITE.brandNameShort}
            </div>
            <div className="font-display text-sm tracking-[0.18em] text-brand-500">
              CHIMEI DIY
            </div>
            <p className="mt-4 max-w-md text-sm leading-7 text-foreground/75">
              源自麵包師傅家庭，整合烘焙材料、器具、教學課程與企業餐盒的一站式烘焙生態系。讓烘焙不只是做甜點，而是傳遞溫度的生活方式。
            </p>
          </div>

          <div>
            <h3 className="font-serif text-base font-semibold text-brand-700">
              分類
            </h3>
            <ul className="mt-3 space-y-2 text-sm">
              {Object.values(CATEGORIES).map((c) => (
                <li key={c.slug}>
                  <Link
                    href={`${prefix}/categories/${c.slug}`}
                    className="text-foreground/80 hover:text-brand"
                  >
                    {c.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-serif text-base font-semibold text-brand-700">
              聯繫我們
            </h3>
            <ul className="mt-3 space-y-2 text-sm text-foreground/80">
              <li>地址：{SITE.address}</li>
              <li>
                LINE：
                <LineCTAButton
                  location="footer"
                  className="text-brand underline underline-offset-2 hover:text-brand-700"
                >
                  {SITE.lineId}
                </LineCTAButton>
              </li>
            </ul>
            <LineCTAButton
              location="footer"
              className="mt-4 inline-flex rounded-full bg-brand px-4 py-2 text-sm text-background hover:bg-brand-700"
            >
              加 LINE 詢問課程 / 企業餐盒
            </LineCTAButton>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-2 border-t border-border pt-6 text-xs text-foreground/60 md:flex-row md:items-center md:justify-between">
          <span>© {new Date().getFullYear()} {SITE.brandName}. All rights reserved.</span>
          <span className="font-display tracking-wider">棋美點心屋 · 烘焙的生活方式</span>
        </div>
      </div>
    </footer>
  );
}
