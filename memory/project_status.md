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
- 2026-04-24：專案骨架建立完成並部署上線
- 2026-04-24：**正式網域**：`https://chimei-diy.ms-wu.com`（網域主機 Cloudflare，CNAME → `cname.vercel-dns.com`，**必須維持 DNS only 灰雲，不可橘雲**）
- 2026-04-24：favicon / icon.png / apple-icon.png 從 `棋美logo.ai` 轉出（AI 內容是 PDF wrapper，`sips` 直接吃 .ai 會 error，要先 `cp` 成 `.pdf` 再 sips，或用 qlmanage。最後用 Python PIL 自動 trim whitespace + 產多尺寸）
- 2026-04-24：**事故備忘**：搬檔時 zsh `nomatch` 讓 `mv` 中止 → 接續的 `rm -rf /tmp/chimei_backup` 誤刪 logo。已由使用者重新放回。**教訓**：搬檔一律用 `cp -a` + 逐檔驗證，或先 `rm` 來源後再 `mv`；不要在同指令混用 glob 與 `rm`。
- 2026-04-24：**Vercel CLI `env add` pipe bug**：`printf "val" | vercel env add ...` 會收到空值而不是實際值。遇到 single-value env 建議直接寫進程式碼預設值（SITE.url 已改為寫死 fallback + trim 防禦）。
- 2026-04-24：**80 篇擴充計畫第一階段（40 篇）完成**，採方案 A（分批寫 + 中途審）。日期分佈於 2026-01-01 ~ 2026-04-24。
  - **分類分佈**：原料 9、器具 7、食譜 8、保存 7、創業 5、課程 4（加舊 3 篇共 40 篇）
  - **5 批完成**：Batch 1（01-03~13）、Batch 2（01-14~21）、Batch 3（01-23~30）、Batch 4（02-01~10）、Batch 5（02-12~23）
  - **商品策略**（依 services.md）：只推棋美服務範圍內的品類，不推大型電器（烤箱、攪拌機）、不編造諮詢／組合包等服務；具體進口品牌限常見款（Elle & Vire、PRÉSIDENT、Valrhona、Callebaut、Philadelphia、日清山茶花等）
  - **導購語規則**：文章內文不得出現「到棋美體驗／選購／試用」棋美沒販售的品項（烤箱篇已移除這類句子）
  - **一手來源涵蓋**：FDA 21 CFR、USDA AMS/FSIS、衛福部食藥署、勞動部技能檢定中心、法國藍帶、Ferrandi、Pierre Hermé、King Arthur Baking、Serious Eats、Nielsen-Massey、Valrhona/Callebaut 官方等
  - **剩 40 篇**：清單已定（見歷史 Jan–Apr 對話），待第二階段生產
- 2026-04-24：**規則補充**：JSX 內避免在 `<li>` 裡直接用 `>` 符號（會被 parser 誤認標籤），改寫「超過」或 `&gt;`。
- 2026-04-24：**全域規則同步**（CLAUDE.md 更新）：所有時間溝通採 UTC+8、回報時自動換算。

## 外部資源
- Vercel project：`minghsiuwus-projects/chimei-diy-blog`（GitHub 已連結，push main 自動部署）
- Cloudflare zone ID (ms-wu.com)：`69a3602b54c2a09f764ec9f7e4b19470`
- GitHub repo：`ming-hsiuwu/chimei-diy-blog`
