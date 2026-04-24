export const SITE = {
  brandName: "棋美點心屋 CHIMEI DIY",
  brandNameShort: "棋美點心屋",
  brandNameEn: "CHIMEI DIY",
  defaultTitle: "棋美點心屋 CHIMEI DIY｜烘焙生活．材料．器具．教學",
  defaultDescription:
    "棋美點心屋 CHIMEI DIY 是整合烘焙材料、器具、教學課程與企業餐盒的一站式烘焙品牌。部落格分享從新手到進階的烘焙知識、食材選購與食譜。",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://chimei-diy-blog.vercel.app",
  address: "台北市大安區復興南路二段 292 號",
  lineId: "@diy_chimei",
  lineUrl: "https://line.me/R/ti/p/@diy_chimei",
  locales: ["zh", "en"] as const,
  defaultLocale: "zh" as const,
} as const;

export type Locale = (typeof SITE.locales)[number];

export const isValidLocale = (lang: string): lang is Locale =>
  (SITE.locales as readonly string[]).includes(lang);
