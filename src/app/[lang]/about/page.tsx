import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Breadcrumb } from "@/components/Breadcrumb";
import { CTA } from "@/components/CTA";
import { SITE, isValidLocale } from "@/lib/site";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  return {
    title: `關於棋美點心屋｜${SITE.brandName}`,
    description:
      "棋美點心屋 CHIMEI DIY 源自麵包師傅家庭，整合烘焙材料、器具、教學課程與企業餐盒。認識我們的品牌故事、服務項目與聯繫方式。",
    alternates: {
      canonical: `${SITE.url}/${lang}/about`,
    },
  };
}

const SERVICES = [
  { title: "烘焙原料供應", desc: "麵粉、糖類、乳製品、巧克力、堅果、果乾、餡料、果泥、預拌粉。" },
  { title: "烘焙器具販售", desc: "基礎工具、模具、專業設備與日本進口品牌，一站式購足。" },
  { title: "包裝材料與客製化", desc: "蛋糕盒、禮盒、包裝袋，支援品牌包裝設計與客製化。" },
  { title: "烘焙教學課程", desc: "小班制甜點／麵包實作課程，新手入門到進階技術。" },
  { title: "甜點・麵包企業餐盒", desc: "客製企業下午茶、會議點心、活動餐盒與品牌合作禮盒。" },
  { title: "冷凍與特殊食材供應", desc: "冷凍塔皮、果泥、無麩質、生酮食材，滿足多元飲食需求。" },
  { title: "延伸食品與進口商品", desc: "義大利麵、Pizza 材料與各式進口食品。" },
];

export default async function AboutPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!isValidLocale(lang)) notFound();

  return (
    <div className="mx-auto max-w-4xl px-5 pb-16 pt-8">
      <Breadcrumb lang={lang} items={[{ label: "關於棋美" }]} />

      <header className="mb-10">
        <div className="font-display text-xs tracking-[0.25em] text-brand-500">
          ABOUT CHIMEI DIY
        </div>
        <h1 className="mt-2 font-serif text-3xl font-semibold text-brand-700 md:text-4xl">
          源自麵包師傅家庭，<br className="hidden md:block" />整合烘焙生態系的品牌
        </h1>
      </header>

      <section className="space-y-5 text-base leading-8 text-foreground/85">
        <p>
          棋美點心屋 CHIMEI DIY 是一個結合烘焙材料供應、器具販售、教學課程與企業餐飲服務的整合型品牌。品牌源自麵包師傅家庭，我們承襲對烘焙的熱情與專業，希望讓烘焙不只是做甜點，而是一種傳遞溫度與情感的生活方式。
        </p>
        <p>
          我們提供從基礎到專業等級的完整烘焙食材、各式器具與包裝材料，並透過系統化的小班制課程，陪伴每一位從新手到進階的學習歷程。同時，我們也提供客製化的甜點與麵包企業餐盒服務，應用於企業下午茶、會議點心與活動餐盒，依照預算與需求量身打造，兼顧美味與品牌質感。
        </p>
        <p>
          透過整合「材料、器具、教學、餐盒」四大服務，我們打造一站式烘焙生態系，滿足家庭烘焙者、甜點創業者與企業客戶的多元需求，成為連結手作溫度與商業價值的烘焙平台。
        </p>
      </section>

      <section className="mt-14">
        <h2 className="font-serif text-2xl font-semibold text-brand-700">
          服務項目
        </h2>
        <div className="mt-5 grid gap-4 md:grid-cols-2">
          {SERVICES.map((s) => (
            <div
              key={s.title}
              className="rounded-2xl border border-border bg-surface p-5"
            >
              <div className="font-serif text-base font-semibold text-brand-700">
                {s.title}
              </div>
              <p className="mt-2 text-sm leading-7 text-foreground/75">
                {s.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-14 rounded-2xl border border-brand-100 bg-brand-50 p-6 md:p-8">
        <h2 className="font-serif text-xl font-semibold text-brand-700">
          聯繫方式
        </h2>
        <ul className="mt-4 space-y-2 text-sm leading-7 text-foreground/80">
          <li>
            <strong className="text-brand-700">實體店：</strong>
            {SITE.address}
          </li>
          <li>
            <strong className="text-brand-700">LINE：</strong>
            <a
              href={SITE.lineUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand underline underline-offset-2 hover:text-brand-700"
            >
              {SITE.lineId}
            </a>
          </li>
        </ul>
      </section>

      <CTA category="business" />
    </div>
  );
}
