export interface ArticleFAQ {
  question: string;
  answer: string;
}

export interface ArticleTocItem {
  id: string;
  label: string;
}

export interface RelatedProduct {
  title: string;
  description: string;
  link: string;
}

export interface ArticleMeta {
  slug: string;
  title: string;
  seoTitle: string;
  excerpt: string;
  metaDescription: string;
  date: string;
  updatedDate?: string;
  category: CategorySlug;
  categoryName: string;
  tags: string[];
  image: string;
  imageAlt: string;
  relatedProducts?: RelatedProduct[];
  faq?: ArticleFAQ[];
  toc?: ArticleTocItem[];
  readingTime: number;
  author?: string;
}

export const CATEGORIES = {
  ingredients: {
    slug: "ingredients",
    name: "原料選購",
    description: "麵粉、糖、乳製品、果泥等食材的選購與用途指南",
  },
  tools: {
    slug: "tools",
    name: "器具指南",
    description: "烤箱、模具、攪拌器等烘焙器具的選購與使用",
  },
  recipes: {
    slug: "recipes",
    name: "食譜實作",
    description: "從新手到進階的甜點與麵包食譜",
  },
  storage: {
    slug: "storage",
    name: "保存技巧",
    description: "冷凍、常溫、冷藏等食材與成品保存方法",
  },
  business: {
    slug: "business",
    name: "甜點創業",
    description: "為甜點工作室、店家、企業餐盒客戶的商業內容",
  },
  course: {
    slug: "course",
    name: "課程心得",
    description: "小班制教學課程資訊與學習分享",
  },
} as const;

export type CategorySlug = keyof typeof CATEGORIES;

export const articles: ArticleMeta[] = [
  {
    slug: "how-to-choose-flour-for-beginners",
    title: "新手挑麵粉完整指南：高筋、中筋、低筋到底差在哪？",
    seoTitle: "新手挑麵粉指南｜高筋中筋低筋差別、蛋白質含量與用途對照",
    excerpt:
      "做麵包用高筋、蛋糕用低筋，這句話背後藏著什麼科學？本篇從蛋白質含量切入，整理三種麵粉的實際差異、常見用途與新手採購建議。",
    metaDescription:
      "高筋、中筋、低筋麵粉差別在蛋白質含量（約 7–13%），直接影響筋性與成品口感。本指南整理新手常用麵粉的蛋白質對照、適合成品與採購判斷，5 分鐘讀懂選粉邏輯。",
    date: "2026-04-24",
    category: "ingredients",
    categoryName: "原料選購",
    tags: ["麵粉", "烘焙原料", "新手入門", "高筋", "低筋"],
    image:
      "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=1600&q=80&auto=format&fit=crop",
    imageAlt: "烘焙工作檯面上的麵粉、麵團與擀麵棍",
    readingTime: 6,
    author: "棋美點心屋編輯室",
    toc: [
      { id: "why-flour-matters", label: "為什麼麵粉是烘焙的靈魂？" },
      { id: "protein-content", label: "關鍵指標：蛋白質含量" },
      { id: "three-types", label: "高筋／中筋／低筋對照表" },
      { id: "use-cases", label: "常見成品怎麼選粉" },
      { id: "buying-tips", label: "新手採購 3 個判斷點" },
    ],
    relatedProducts: [
      {
        title: "日本日清山茶花高筋麵粉（烘焙用）",
        description: "蛋白質 12% 左右，筋性穩定，吐司、貝果首選。",
        link: "https://line.me/R/ti/p/@diy_chimei",
      },
      {
        title: "法國 T45 低筋麵粉",
        description: "灰分低、粉質細，適合戚風、瑪德蓮等追求輕盈口感的甜點。",
        link: "https://line.me/R/ti/p/@diy_chimei",
      },
    ],
    faq: [
      {
        question: "做吐司一定要用進口高筋麵粉嗎？",
        answer:
          "不一定。國產高筋麵粉（如聯華駱駝）蛋白質約 12% 也足以做出彈性良好的吐司；進口粉（如日清山茶花、法國 T65）多半在風味與穩定性上較突出，適合要追求特定口感的玩家。",
      },
      {
        question: "中筋麵粉可以代替高筋做麵包嗎？",
        answer:
          "短時間發酵的麵包（如蔥花麵包）可以用中筋代替，但需接受體積較小、組織較緊實。需要長時間發酵或高含水量（如歐包、吐司）的配方建議仍使用高筋，成品筋度與延展性才足夠。",
      },
      {
        question: "麵粉開封後該怎麼保存？",
        answer:
          "麵粉建議移至密封罐，置於陰涼乾燥處，開封後 3 個月內用完。夏天或南部潮濕地區可冷藏保存，但回溫後再使用以避免水氣凝結。",
      },
    ],
  },
  {
    slug: "home-oven-buying-guide",
    title: "家用烤箱選購全攻略：上下火、旋風、溫控怎麼看？",
    seoTitle: "家用烤箱選購指南｜容量、上下火、旋風、溫控實測重點",
    excerpt:
      "家用烤箱從 12 公升到 42 公升都有，差別不只在大小。本文從容量、上下火、旋風與溫控四個面向，帶你看懂為什麼烘焙人會特別挑烤箱。",
    metaDescription:
      "家用烤箱挑選看四大重點：容量（建議 32L 以上）、獨立上下火、旋風功能、精準溫控。本篇整理烘焙愛好者實際使用的判斷標準與常見 NG 款，避免買完後才後悔。",
    date: "2026-04-23",
    category: "tools",
    categoryName: "器具指南",
    tags: ["烤箱", "器具選購", "家用烘焙", "新手入門"],
    image:
      "https://images.unsplash.com/photo-1653404267191-e314df0fec4f?w=1600&q=80&auto=format&fit=crop",
    imageAlt: "透過烤箱玻璃看到內部烤架上正在烘烤的可頌",
    readingTime: 7,
    author: "棋美點心屋編輯室",
    toc: [
      { id: "why-size-matters", label: "容量：為什麼建議 32L 起跳" },
      { id: "top-bottom-heat", label: "上下火獨立控制有多重要" },
      { id: "convection", label: "旋風功能：什麼時候真的用得到" },
      { id: "temperature-accuracy", label: "溫控精準度：買家最容易忽略的指標" },
      { id: "price-range", label: "預算落點與常見品牌" },
    ],
    relatedProducts: [
      {
        title: "日本 dretec 家用多功能烤箱（42L）",
        description: "獨立上下火、熱風循環，適合從吐司到戚風的多用途家庭烘焙。",
        link: "https://line.me/R/ti/p/@diy_chimei",
      },
      {
        title: "專業級烘焙溫度計",
        description: "校正烤箱實際溫度與刻度落差，烘焙新手必備的第一個投資。",
        link: "https://line.me/R/ti/p/@diy_chimei",
      },
    ],
    faq: [
      {
        question: "預算 3000 元內有推薦的入門烤箱嗎？",
        answer:
          "3000 元內多為小烤箱（12-20L），溫控精度有限，做簡單餅乾、烤土司可以，但戚風蛋糕、吐司等對溫控敏感的配方容易失敗。建議預算拉到 5000–8000 元購買 32L 以上有獨立上下火的機型，學習曲線會順利很多。",
      },
      {
        question: "旋風功能（熱風循環）是必備嗎？",
        answer:
          "不是必備，但有旋風會讓多層烘烤、餅乾、派類的成品更均勻。一般蛋糕類若開旋風反而容易乾裂，所以建議挑選旋風「可開可關」的機型最為彈性。",
      },
      {
        question: "水波爐跟專業烤箱哪個好？",
        answer:
          "水波爐（蒸氣烤箱）多功能且適合日常料理，但在穩定高溫烘焙（如吐司、歐包）上，專業烘焙用烤箱的爐內熱對流與蓄熱通常更優。若預算只能二選一，純烘焙需求高建議選烘焙烤箱。",
      },
    ],
  },
  {
    slug: "tart-shell-freezing-guide",
    title: "塔皮冷凍保存完整指南：一次做一批，隨時都能開工",
    seoTitle: "塔皮冷凍保存指南｜麵團與成型塔殼的冷凍期限與回烤技巧",
    excerpt:
      "塔皮最耗時的是鬆弛與壓模，其實一次做一批冷凍起來，臨時要烤就能快速應戰。本文整理塔皮麵團、壓好模的生塔皮、烤熟塔殼三階段的冷凍保存方法。",
    metaDescription:
      "塔皮冷凍保存依階段不同，麵團可冷凍 1 個月、成型生塔皮 2 個月、烤熟塔殼 2 週。本文整理每階段的包裝方式、退冰與回烤溫度，讓你一次做一批省下重複工序。",
    date: "2026-04-22",
    category: "storage",
    categoryName: "保存技巧",
    tags: ["塔皮", "冷凍保存", "麵團管理", "甜點工作室"],
    image:
      "https://images.unsplash.com/photo-1519915028121-7d3463d20b13?w=1600&q=80&auto=format&fit=crop",
    imageAlt: "未烘烤的塔皮在塔模內，表面有摺邊紋路",
    readingTime: 5,
    author: "棋美點心屋編輯室",
    toc: [
      { id: "three-stages", label: "冷凍塔皮的三個階段" },
      { id: "dough-freezing", label: "階段 1：麵團冷凍" },
      { id: "shaped-freezing", label: "階段 2：成型生塔皮冷凍" },
      { id: "baked-freezing", label: "階段 3：烤熟塔殼冷凍" },
      { id: "common-mistakes", label: "常見 NG 操作" },
    ],
    relatedProducts: [
      {
        title: "法國進口冷凍生塔皮",
        description: "已成型、可直接入烤箱，小量工作室與咖啡店常備品。",
        link: "https://line.me/R/ti/p/@diy_chimei",
      },
      {
        title: "食品級真空保鮮袋",
        description: "家用真空機適用，減少冷凍庫異味滲入與冷凍灼傷。",
        link: "https://line.me/R/ti/p/@diy_chimei",
      },
    ],
    faq: [
      {
        question: "冷凍過的塔皮跟現做的口感會差很多嗎？",
        answer:
          "若包裝與退冰得當，冷凍塔皮與現做的成品差異極小，甚至因為冷凍讓麵筋更穩定，反而比現揉的更不容易縮。關鍵是包裝要隔絕水氣，並在建議期限內用完。",
      },
      {
        question: "從冷凍庫拿出來可以直接進烤箱嗎？",
        answer:
          "成型生塔皮可直接冷凍入烤箱（不需退冰），只需多烤 3–5 分鐘；麵團狀態則需先冷藏退冰至可擀壓的硬度再操作。烤熟塔殼則靠回烤 5 分鐘即可恢復酥脆。",
      },
      {
        question: "冷凍塔皮一般可以放多久？",
        answer:
          "麵團狀態（包緊）約 1 個月、成型生塔皮（含模冷凍後取出）2 個月、烤熟塔殼（真空）2 週內風味最佳。超過期限雖未必壞，但塔皮容易吸附異味、油脂氧化影響風味。",
      },
    ],
  },
  {
    slug: "chocolate-chip-cookies",
    title: "零失敗濃郁巧克力餅乾：美式曲奇黃金比例完整解析",
    seoTitle: "美式巧克力餅乾配方｜糖比、冷藏熟成、Torres 與 Kenji 解析",
    excerpt:
      "一樣是巧克力餅乾，為什麼 NYT 與 Serious Eats 的食譜都要冷藏 24–36 小時？從糖比、麵粉混搭到熟成化學，本文拆解兩大經典配方的科學原理，讓你做得出脆邊濕心的名店版本。",
    metaDescription:
      "紐時 Jacques Torres 版與 Serious Eats Kenji 版巧克力餅乾，用不同邏輯追求脆邊濕心。本篇從糖比、麵粉混搭、冷藏熟成、焦化奶油四個變數，拆解為什麼同一款餅乾會有天差地別的口感。",
    date: "2026-01-04",
    category: "recipes",
    categoryName: "食譜實作",
    tags: ["巧克力餅乾", "美式曲奇", "冷藏熟成", "食譜", "新手入門"],
    image:
      "https://images.unsplash.com/photo-1568051243858-533a607809a5?w=1600&q=80&auto=format&fit=crop",
    imageAlt: "盤上排列的巧克力豆餅乾，餅面可見大顆深色巧克力塊",
    readingTime: 7,
    author: "棋美點心屋編輯室",
    toc: [
      { id: "two-classics", label: "兩大經典：Torres 派 vs Kenji 派" },
      { id: "sugar-ratio", label: "糖的比例：決定口感走向" },
      { id: "flour-blend", label: "麵粉混搭：高筋 + 低筋的巧思" },
      { id: "rest-time", label: "冷藏熟成 24–72 小時的化學變化" },
      { id: "recipe", label: "家用推薦版配方（12 片）" },
      { id: "common-mistakes", label: "新手常見 NG" },
    ],
    relatedProducts: [
      {
        title: "法國 Valrhona 64% 調溫巧克力粒",
        description:
          "Torres 原版的關鍵：≥60% 可可的大顆 fève，烤後形成明顯巧克力池。",
        link: "https://line.me/R/ti/p/@diy_chimei",
      },
      {
        title: "法國 PRÉSIDENT 總統牌無鹽奶油 250g",
        description:
          "82% 乳脂、微發酵風味，做焦化奶油版巧克力餅乾香氣最明顯。",
        link: "https://line.me/R/ti/p/@diy_chimei",
      },
    ],
    faq: [
      {
        question: "為什麼 NYT 配方一定要冷藏 36 小時？",
        answer:
          "這是 Jacques Torres 於 2008 年 New York Times 專題文章中說明的核心技巧：冷藏讓麵粉蛋白質與澱粉充分吸收液體、糖也開始部分水解成轉化糖，帶出更深的梅納與焦糖化風味。Torres 建議最少 24 小時、最佳 36 小時，超過 72 小時風味不再明顯提升。",
      },
      {
        question: "brown sugar 與白砂糖的比例為什麼關鍵？",
        answer:
          "Kenji Lopez-Alt 在 Serious Eats Food Lab 的實驗指出：brown sugar 含糖蜜，帶水分與微酸，會讓餅乾嚼勁高、顏色深；白砂糖較乾，讓餅乾攤得薄、邊緣更脆。1:1 是平衡版，想嚼勁高就拉高 brown 比例到 2:1。",
      },
      {
        question: "巧克力一定要用調溫巧克力豆嗎？",
        answer:
          "不強制，但大顆 fève 或 chunk 效果最好。Jacques Torres 強調用 feves（法文「豆」）而非小 chips，讓烘烤後形成明顯的巧克力池。Valrhona、Cacao Barry、Callebaut 的 60% 以上調溫巧克力都是推薦選擇；若用超市巧克力塊，自己切成約 1.5cm 大小即可。",
      },
    ],
  },
  {
    slug: "butter-salted-vs-unsalted",
    title: "無鹽 vs 有鹽奶油：烘焙時到底該用哪一款？",
    seoTitle: "烘焙奶油選擇｜無鹽 vs 有鹽差異、含鹽量、替代換算公式",
    excerpt:
      "配方書一律寫「無鹽奶油」不是任性。不同品牌的有鹽奶油含鹽量可差到 2 倍，會直接影響麩質、酵母與成品鹹度。本文整理官方標準、台灣常見品牌實際規格，以及手邊只有有鹽奶油時的替代換算。",
    metaDescription:
      "烘焙配方指定無鹽奶油不是任性——不同品牌有鹽奶油含鹽量差異可達 2 倍，會直接影響麩質與風味。本文整理 FDA、台灣食藥署的奶油定義、常見品牌實際規格、以及手邊只有有鹽奶油時的替代換算。",
    date: "2026-01-01",
    category: "ingredients",
    categoryName: "原料選購",
    tags: ["奶油", "無鹽奶油", "有鹽奶油", "烘焙原料", "新手入門"],
    image:
      "https://images.unsplash.com/photo-1603596311044-f19158b61f28?w=1600&q=80&auto=format&fit=crop",
    imageAlt: "深色木桌上放著一塊塊切片的奶油，奶油呈現淡黃色",
    readingTime: 6,
    author: "棋美點心屋編輯室",
    toc: [
      { id: "what-is-butter", label: "奶油的官方定義：不是越貴越好" },
      { id: "salt-difference", label: "有鹽 vs 無鹽的三個實際差距" },
      { id: "why-unsalted", label: "為什麼配方幾乎都要求無鹽" },
      { id: "taiwan-brands", label: "台灣常見品牌規格對照" },
      { id: "substitution", label: "沒無鹽時的緊急替代公式" },
    ],
    relatedProducts: [
      {
        title: "法國 Elle & Vire 愛樂薇無鹽奶油條 500g",
        description:
          "諾曼第產區、乳脂 82%，奶香中性乾淨，做可頌、磅蛋糕首選。",
        link: "https://line.me/R/ti/p/@diy_chimei",
      },
      {
        title: "法國 PRÉSIDENT 總統牌無鹽發酵奶油條 500g",
        description:
          "微帶優格酸香的發酵奶油，適合丹麥、塔皮與追求風味層次的配方。",
        link: "https://line.me/R/ti/p/@diy_chimei",
      },
    ],
    faq: [
      {
        question: "家裡只有有鹽奶油，可以直接做餅乾嗎？",
        answer:
          "可以，但要扣掉配方裡的額外鹽量。台灣常見有鹽奶油含鹽約 1.2–1.8%，以 100g 奶油估算約等於 1.2–1.8g 鹽；若配方原本加 2g 鹽，建議只加 0.2g 或直接省略，否則整盤容易鹹過頭。",
      },
      {
        question: "發酵奶油 vs 一般奶油差在哪？也有無鹽版嗎？",
        answer:
          "發酵奶油（cultured butter）在攪拌前讓鮮奶油經乳酸菌發酵，風味帶優格般微酸奶香，常見品牌如 Elle & Vire、PRÉSIDENT 均有無鹽發酵版。一般奶油（sweet cream butter）未發酵，風味更乾淨。做塔皮、千層酥用發酵款香氣層次較佳。",
      },
      {
        question: "為什麼同樣是無鹽奶油，進口價格差那麼多？",
        answer:
          "主要差在乳源、乳脂率與工藝。台灣多數國產奶油乳脂 80–82%，進口法國品牌多為 82%，部分「烘焙專用（Beurre de Tourage）」標示 84% 以上，筋性與延展性更佳，做丹麥、可頌的層次會更明顯。一般餅乾蛋糕用 82% 已足夠。",
      },
    ],
  },
];

export const articlesBySlug = new Map(articles.map((a) => [a.slug, a]));

export function getArticle(slug: string): ArticleMeta | undefined {
  return articlesBySlug.get(slug);
}

export function getArticlesByCategory(category: CategorySlug): ArticleMeta[] {
  return articles.filter((a) => a.category === category);
}

export function getRelatedArticles(
  slug: string,
  limit = 3,
): ArticleMeta[] {
  const current = getArticle(slug);
  if (!current) return [];
  const sameCategory = articles.filter(
    (a) => a.slug !== slug && a.category === current.category,
  );
  const sameTag = articles.filter(
    (a) =>
      a.slug !== slug &&
      a.category !== current.category &&
      a.tags.some((t) => current.tags.includes(t)),
  );
  return [...sameCategory, ...sameTag].slice(0, limit);
}
