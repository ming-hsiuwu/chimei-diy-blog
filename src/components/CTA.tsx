import { SITE } from "@/lib/site";
import type { CategorySlug } from "@/lib/articles";
import { LineCTAButton } from "./LineCTAButton";

const CTA_BY_CATEGORY: Record<
  CategorySlug,
  { heading: string; body: string; buttonLabel: string }
> = {
  ingredients: {
    heading: "找不到這款原料？歡迎加 LINE 詢問供貨",
    body: "棋美點心屋長期代理多國烘焙原料，實體店位於台北大安，也接受企業批次採購與客製組合。",
    buttonLabel: "加 LINE 詢問原料",
  },
  tools: {
    heading: "器具現場實摸，買對一次到位",
    body: "歡迎到實體店操作日本進口器具、模具與烤箱；也可透過 LINE 預約諮詢，我們依你的預算推薦最合適的組合。",
    buttonLabel: "加 LINE 約實機體驗",
  },
  recipes: {
    heading: "想跟著老師從頭學？小班制課程接受預約",
    body: "棋美點心屋提供新手到進階的系統化教學，小班制、每堂都能獨立完成帶回一份成品。",
    buttonLabel: "加 LINE 預約課程",
  },
  storage: {
    heading: "甜點工作室、咖啡店需求？歡迎批次洽詢",
    body: "冷凍塔皮、果泥、特殊食材皆可長期供貨與客製規格，協助工作室穩定出餐。",
    buttonLabel: "加 LINE 洽談批次供貨",
  },
  business: {
    heading: "企業餐盒／會議點心／活動禮盒客製",
    body: "可依預算、主題、客群量身設計甜點與麵包餐盒，支援大安區自取或指定配送。",
    buttonLabel: "加 LINE 索取企業菜單",
  },
  course: {
    heading: "立即加入課程候補名單",
    body: "每梯次小班制教學，名額有限。加入 LINE 第一時間收到開課通知與早鳥優惠。",
    buttonLabel: "加 LINE 預約課程",
  },
};

export function CTA({ category }: { category?: CategorySlug }) {
  const preset =
    (category && CTA_BY_CATEGORY[category]) || CTA_BY_CATEGORY.recipes;

  return (
    <section
      className="mt-16 overflow-hidden rounded-3xl border border-brand-100 bg-gradient-to-br from-brand-50 via-muted to-surface p-8 md:p-10"
      aria-label="聯繫棋美點心屋"
    >
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div className="max-w-2xl">
          <div className="font-display text-xs tracking-[0.25em] text-brand-500">
            CHIMEI DIY · 棋美點心屋
          </div>
          <h3 className="mt-2 font-serif text-xl font-semibold text-brand-700 md:text-2xl">
            {preset.heading}
          </h3>
          <p className="mt-3 text-sm leading-7 text-foreground/80">{preset.body}</p>
          <p className="mt-3 text-sm text-foreground/70">
            實體店：{SITE.address}
          </p>
        </div>
        <LineCTAButton
          location="cta_block"
          category={category}
          className="inline-flex shrink-0 items-center justify-center rounded-full bg-brand px-6 py-3 text-sm font-medium text-background transition-colors hover:bg-brand-700"
        >
          {preset.buttonLabel}
        </LineCTAButton>
      </div>
    </section>
  );
}
