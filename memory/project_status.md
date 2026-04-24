---
name: 專案啟動狀態
description: 棋美點心屋部落格外站的技術棧、內容策略、進度備忘
type: project
---

# 專案狀態 Project Status

## 專案定位
棋美點心屋（CHIMEI DIY）**部落格外站**，主題：烘焙生活｜材料・器具・食譜・教學。

## 內容策略決議（2026-04-24）
- **主題**：烘焙生活｜材料・器具・食譜・教學（對應七大服務）
- **目標讀者**：全客群（主站以家庭烘焙者為主，另開分類給甜點創業者／企業客戶）
- **主要目標**：SEO 自然流量 + LINE `@diy_chimei` 詢課／詢問企業餐盒 + 實體店（台北大安）導流；CTA 按文章主題切換
- **語系**：先做 `/zh`，`[lang]` 路由結構預留 `/en`
- **Production domain**：尚未提供，先用 Vercel preview URL

## 技術棧（固定）
- Next.js（App Router, TypeScript）
- Tailwind CSS（v4，@tailwindcss/postcss）
- 部署：Vercel（push main 自動部署）
- 多語：`src/app/[lang]/...` 動態路由
- 文章格式：**TSX 元件**（不是 Markdown），放 `src/app/[lang]/articles/[slug]/content/{zh,en}/[slug].tsx`
- 文章 metadata：`src/lib/articles.ts`（zh）、`src/lib/articles-en.ts`（en）
- 圖片：Unsplash CDN 直鏈（`https://images.unsplash.com/photo-XXXX...`）

## SEO 規範
- 每頁有 JSON-LD（Article schema + FAQ schema）
- `seoTitle` ≤ 60 字、`metaDescription` ≤ 155 字，獨立撰寫
- 文章之間內部連結（每篇至少 2-3 篇相關）
- hreflang + sitemap.xml + robots.txt 自動產生

## 內容品質鐵律
- 圖片必須逐張驗證與主題相符才能 commit
- 文章要有實際參考來源（獸醫／研究／官方指南等）
- 不用 emoji 除非品牌需求

## 首批範例文章（各打一服務類別）
1. 新手挑麵粉指南（→ 對應服務 1. 烘焙原料）
2. 家用烤箱選購（→ 對應服務 2. 烘焙器具）
3. 塔皮冷凍保存祕訣（→ 對應服務 6. 冷凍食材）

## 進度記錄
- 2026-04-24：專案骨架建立中（Next.js + Tailwind + src/ + App Router）
- 2026-04-24：**事故備忘**：搬檔時 zsh `nomatch` 讓 `mv` 中止 → 接續的 `rm -rf /tmp/chimei_backup` 誤刪 logo。已由使用者重新放回。**教訓**：搬檔一律用 `cp -a` + 逐檔驗證，或先 `rm` 來源後再 `mv`；不要在同指令混用 glob 與 `rm`。
