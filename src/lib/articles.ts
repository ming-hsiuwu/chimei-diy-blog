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
    slug: "baking-certification-worth-it",
    title: "烘焙丙級、乙級證照有用嗎？誰需要、誰可省",
    seoTitle: "烘焙技術士證照指南｜丙級乙級差異、適合對象與價值",
    excerpt:
      "勞動部「烘焙食品技術士」丙乙級證照每年數萬人報考。對甜點創業者、家庭烘焙玩家分別有什麼實質意義？本文整理兩級差異、報考資格、實務價值與 CP 值分析。",
    metaDescription:
      "台灣烘焙丙級技術士面向一般作業人員、乙級面向熟練技術員與生產主管。本文整理勞動部技能檢定中心的官方規範、兩級差異、適合對象與創業／求職價值分析。",
    date: "2026-02-10",
    category: "course",
    categoryName: "課程心得",
    tags: ["烘焙證照", "丙級", "乙級", "技能檢定"],
    image:
      "https://images.unsplash.com/photo-1658235081033-ccd89cdfe77a?w=1600&q=80&auto=format&fit=crop",
    imageAlt: "身穿畢業服的女性手持畢業證書",
    readingTime: 6,
    author: "棋美點心屋編輯室",
    toc: [
      { id: "who-issues", label: "誰發證、誰管：勞動部的角色" },
      { id: "bing-level", label: "丙級：一般作業人員的入門" },
      { id: "yi-level", label: "乙級：熟練技術員的進階" },
      { id: "who-needs", label: "哪些人真的需要？" },
      { id: "cost-value", label: "報考成本與實質效益" },
    ],
    faq: [
      {
        question: "不考證照也能賣甜點嗎？",
        answer:
          "可以。依《食品安全衛生管理法》販售甜點只需完成食品業者登錄即可，沒有強制證照要求。證照對「創業販售」不是必要條件，但對「大型烘焙坊求職」「政府採購案投標」「學校或機構擔任師資」等場景有幫助。",
      },
      {
        question: "丙級跟乙級差多少？",
        answer:
          "丙級是入門級技術士，面向「一般作業人員」，項目 6 大項（產品分類、原料選用、製作、品質鑑定、包裝、貯存）。乙級面向「熟練技術員或生產主管」，多 3 項（品質管制、成本計算、烘焙 GMP），且要求操作規格與時間更嚴格。丙級通過率約 50%，乙級約 25%。",
      },
      {
        question: "家庭烘焙玩家需要考嗎？",
        answer:
          "如果純粹是興趣，不需要。丙級的術科項目較制式（甜麵包、海綿蛋糕、西點蛋糕），跟家庭烘焙的創作型配方差異大。但若想系統化學習烘焙基礎、或希望有公信力認證，考丙級是具體目標。3–6 個月準備期通常足夠。",
      },
    ],
  },
  {
    slug: "bakery-sop-writing",
    title: "烘焙小店 SOP 怎麼寫：新手店員 2 週上手的流程設計",
    seoTitle: "烘焙 SOP 設計指南｜作業流程、員工訓練、品質一致性",
    excerpt:
      "甜點店或烘焙坊雇用第一位店員時，最常見的痛點不是「找不到人」而是「教不會」。SOP（標準作業流程）能把腦中經驗寫成文件，讓新手 2 週就能獨立作業。本文整理 ClickUp、Template.net 的 SOP 框架與實務建議。",
    metaDescription:
      "烘焙小店 SOP 應涵蓋 6 大面向：原料管理、製作流程、包裝標示、清潔衛生、設備維護、客訴處理。本文提供模組化範本與新手訓練 2 週計畫。",
    date: "2026-02-09",
    category: "business",
    categoryName: "甜點創業",
    tags: ["SOP", "員工訓練", "烘焙店經營", "甜點創業"],
    image:
      "https://images.unsplash.com/photo-1773546812142-9d8b42aa207f?w=1600&q=80&auto=format&fit=crop",
    imageAlt: "商業廚房中烘焙師在烤箱與層架旁工作",
    readingTime: 7,
    author: "棋美點心屋編輯室",
    toc: [
      { id: "why-sop", label: "為什麼小店更需要 SOP" },
      { id: "six-modules", label: "SOP 的 6 大模組" },
      { id: "template", label: "實作範本：一頁版 SOP" },
      { id: "training", label: "新手 2 週訓練時程" },
      { id: "maintain", label: "SOP 的維護與更新" },
    ],
    faq: [
      {
        question: "SOP 跟配方書差在哪？",
        answer:
          "配方書記錄「做這個甜點需要什麼材料、什麼步驟」；SOP 記錄「這家店的員工要依什麼流程工作」，包含到職訓練、開店關店、結帳、冰箱溫度紀錄、客訴處理等配方外的所有事。兩者互補，缺一不可。",
      },
      {
        question: "只有 1–2 個員工也需要 SOP 嗎？",
        answer:
          "非常需要。老闆一個人腦內運作的 SOP 沒寫下來，員工離職時經驗會全部帶走。1 人小店也建議建立 SOP，這樣未來擴編、找接手、或老闆休假才不會崩潰。",
      },
      {
        question: "SOP 要寫多詳細？",
        answer:
          "以「新人看文件能獨立操作」為標準。太簡略新人會持續問問題、太詳細反而沒人看。建議以 1–2 頁 A4 為一個模組，關鍵步驟配圖、關鍵參數用粗體，平均 2–3 分鐘能讀完的長度。",
      },
    ],
  },
  {
    slug: "yeast-storage-guide",
    title: "酵母完整保存指南：乾酵母、新鮮酵母、老麵怎麼放？",
    seoTitle: "酵母保存方法｜乾酵母冷凍 6 個月、新鮮酵母冷藏 2 週",
    excerpt:
      "酵母是活的——溫度、濕度、氧氣都會影響活性。Bob's Red Mill、Master Class 的建議是依酵母類型分流保存：乾酵母冷凍、新鮮酵母冷藏、老麵勤餵。本文整理三類酵母的最佳保存邏輯。",
    metaDescription:
      "酵母保存依類型不同：未開封乾酵母 2 年、開封冷藏 4 個月、冷凍 6 個月；新鮮酵母冷藏 2 週、不可冷凍；老麵冷藏每週餵養。本文整理完整保存流程與活性測試法。",
    date: "2026-02-08",
    category: "storage",
    categoryName: "保存技巧",
    tags: ["酵母", "保存", "乾酵母", "新鮮酵母", "老麵"],
    image:
      "https://images.unsplash.com/photo-1767065887251-a3fba481c3cf?w=1600&q=80&auto=format&fit=crop",
    imageAlt: "發酵籃中正在發酵的兩個麵包麵團",
    readingTime: 5,
    author: "棋美點心屋編輯室",
    toc: [
      { id: "types", label: "三種酵母：活力與保存差異" },
      { id: "dry-yeast", label: "乾酵母：冷凍才是王道" },
      { id: "fresh-yeast", label: "新鮮酵母：冷藏 2 週極限" },
      { id: "sourdough", label: "天然酵種老麵：持續餵養" },
      { id: "viability-test", label: "酵母活性測試法" },
    ],
    relatedProducts: [
      {
        title: "法國 SAF 紅袋即發酵母 500g",
        description: "業界通用即發酵母，甜麵包、吐司、歐包通用。",
        link: "https://line.me/R/ti/p/@diy_chimei",
      },
      {
        title: "食品級氣密保鮮盒（含矽膠密封圈）",
        description: "乾酵母、麵粉等粉類原料冷藏冷凍保存首選容器。",
        link: "https://line.me/R/ti/p/@diy_chimei",
      },
    ],
    faq: [
      {
        question: "冷凍酵母拿出來要先退冰嗎？",
        answer:
          "不需要。乾酵母（active dry 或 instant）從冷凍直接取出即可使用，不需退冰。冷凍的酵母細胞處於「休眠」狀態，接觸溫水（38–43°C）會立即復活。退冰時若凝水反而會縮短保存期。",
      },
      {
        question: "過期的酵母還能用嗎？",
        answer:
          "看保存條件與過期多久。冷凍良好的乾酵母即使過期半年通常仍有活性；常溫存放的過期酵母多數失效。最可靠的判斷是做「活性測試」：取少量酵母加入 38°C 溫水加 1 小匙糖，靜置 10 分鐘，若產生明顯泡沫就還能用。",
      },
      {
        question: "新鮮酵母為什麼不能冷凍？",
        answer:
          "新鮮酵母含水率高（約 70%），冷凍時細胞壁會被冰晶刺破、死亡率極高。解凍後可能只剩原本 10–20% 的活性，發酵時間不穩定。業界做法是用完不冷凍，或改買乾酵母以冷凍方式長期保存。",
      },
    ],
  },
  {
    slug: "cream-cheese-pound-cake",
    title: "奶油乳酪磅蛋糕：不失敗的經典配方與打發技巧",
    seoTitle: "奶油乳酪磅蛋糕食譜｜奶油 cream cheese 黃金比例與打發",
    excerpt:
      "磅蛋糕是烘焙新手的友善對手——材料簡單、成功率高，加入奶油乳酪後風味層次立刻升級。本文依 Paula Deen 經典配方拆解黃金比例、打發判斷與烘烤技巧。",
    metaDescription:
      "奶油乳酪磅蛋糕的經典比例：奶油 1：奶油乳酪 1：糖 3：蛋 6：粉 3.5。本文拆解打發入氣判斷、分次加蛋的油水乳化原理、以及 60–80 分鐘烘烤的溫度控制。",
    date: "2026-02-06",
    category: "recipes",
    categoryName: "食譜實作",
    tags: ["磅蛋糕", "奶油乳酪", "cream cheese", "食譜"],
    image:
      "https://images.unsplash.com/photo-1662793295930-15702b7a1f37?w=1600&q=80&auto=format&fit=crop",
    imageAlt: "木質切板上的磅蛋糕切片，外觀金黃",
    readingTime: 6,
    author: "棋美點心屋編輯室",
    toc: [
      { id: "golden-ratio", label: "黃金比例（Paula Deen 經典版）" },
      { id: "cream-cheese-role", label: "奶油乳酪為什麼加？" },
      { id: "butter-whipping", label: "奶油打發的三個判斷點" },
      { id: "adding-eggs", label: "分次加蛋：避免油水分離" },
      { id: "baking", label: "180°C 下火加蓋烘烤 60–80 分鐘" },
    ],
    relatedProducts: [
      {
        title: "美國 Philadelphia 費城原味奶油乳酪 227g",
        description: "磅蛋糕加入後風味升級的經典選擇，穩定度與風味並重。",
        link: "https://line.me/R/ti/p/@diy_chimei",
      },
      {
        title: "法國 PRÉSIDENT 總統牌無鹽奶油 250g",
        description: "82% 乳脂、打發入氣順暢，磅蛋糕輕盈感的關鍵。",
        link: "https://line.me/R/ti/p/@diy_chimei",
      },
    ],
    faq: [
      {
        question: "奶油乳酪一定要回溫嗎？",
        answer:
          "是，非常重要。冷藏的奶油乳酪太硬，與打發奶油混合會結塊、無法均質。使用前 1 小時取出室溫回溫，捏起來像橡皮擦的硬度即可。趕時間可切小塊、放微波 10 秒（不是融化）。",
      },
      {
        question: "為什麼要分次加蛋而不是一次倒入？",
        answer:
          "奶油與蛋是油水兩相，一次倒入會「油水分離」無法均質。正確做法是分 6–8 次，每次加 1 顆蛋後攪拌至完全吸收（約 1 分鐘）再加下一顆。這樣形成穩定的 oil-in-water 乳化，蛋糕組織才會細緻。",
      },
      {
        question: "為什麼要中途加鋁箔蓋？",
        answer:
          "磅蛋糕烘烤約 40 分鐘時表面會達到目標金黃色，但中心還需要 20–40 分鐘。加蓋可避免表面過焦乾硬。判斷時機：表面已呈金黃（不是淺棕）、側邊開始有微脹裂縫時加蓋。",
      },
    ],
  },
  {
    slug: "chiffon-pan-selection",
    title: "戚風蛋糕模挑選：為什麼中空、活底、不塗層很重要？",
    seoTitle: "戚風蛋糕模指南｜中空活底、陽極鋁、不塗層的意義",
    excerpt:
      "戚風蛋糕為什麼要用中空、活底、不塗層的專用模？每個設計都有其化學與物理邏輯：中空加速熱傳、活底易脫模、不塗層讓蛋糊能「爬高」。本文完整說明。",
    metaDescription:
      "戚風模的三個關鍵設計：中空（熱傳對流）、活底（不傷組織脫模）、不塗層（蛋糊能沿壁攀爬）。本文整理陽極鋁與不沾塗層的差異、家用尺寸選擇與保養。",
    date: "2026-02-05",
    category: "tools",
    categoryName: "器具指南",
    tags: ["戚風蛋糕", "烘焙模具", "陽極鋁", "器具選購"],
    image:
      "https://images.unsplash.com/photo-1497730620907-6a4cf807bb94?w=1600&q=80&auto=format&fit=crop",
    imageAlt: "蛋糕架上展示的金黃色環型蛋糕",
    readingTime: 6,
    author: "棋美點心屋編輯室",
    toc: [
      { id: "why-tube", label: "中空設計：熱傳導效率的關鍵" },
      { id: "why-removable", label: "活底：戚風脫模的救星" },
      { id: "why-ungreased", label: "為什麼要不塗層？" },
      { id: "size-guide", label: "尺寸選擇：6 吋 vs 8 吋" },
      { id: "care", label: "保養與清潔" },
    ],
    relatedProducts: [
      {
        title: "陽極鋁 6 吋中空活底戚風模",
        description: "家用最常見尺寸，蛋糊容量 3 顆蛋左右，適合小家庭。",
        link: "https://line.me/R/ti/p/@diy_chimei",
      },
      {
        title: "陽極鋁 8 吋中空活底戚風模",
        description: "派對、送禮尺寸，蛋糊容量 6 顆蛋，切片可分 10 塊。",
        link: "https://line.me/R/ti/p/@diy_chimei",
      },
    ],
    faq: [
      {
        question: "戚風模可以用不沾塗層嗎？",
        answer:
          "強烈不建議。戚風蛋糕麵糊需要「攀爬」模壁形成氣泡結構，不沾塗層會讓蛋糊滑下、發不起來、縮腰嚴重。傳統戚風模必須是「陽極鋁裸金屬」，不能塗層、不能塗油。",
      },
      {
        question: "為什麼戚風脫模要倒扣？",
        answer:
          "戚風組織鬆軟，出爐後立即脫模會因重力下塌。倒扣冷卻讓蛋糕「懸掛」在架上，利用中空管支撐與底部朝上方向，維持組織不塌。完全冷卻（2–3 小時）後再脫模最安全。",
      },
      {
        question: "脫模時怎麼不把蛋糕弄壞？",
        answer:
          "用「脫模刀」（長而薄的不鏽鋼刀）貼著模壁從邊緣慢慢畫一圈，然後從中空管底部把蛋糕往上推出；翻面後再用脫模刀分離底盤。動作要慢、刀貼緊壁，粗暴會扯破組織。",
      },
    ],
  },
  {
    slug: "vanilla-bean-vs-extract",
    title: "天然香草莢 vs 香草精 vs 香草醬：價差 10 倍的原因",
    seoTitle: "香草莢香草精比較｜Nielsen-Massey 等級、用途與替換",
    excerpt:
      "做卡士達用香草莢、做餅乾用香草精，到底為什麼？Nielsen-Massey、McCormick 等品牌的官方建議不同產品用不同形式。本文整理三種香草產品的化學組成與價差原理。",
    metaDescription:
      "香草莢（整條）、香草精（酒精萃取）、香草醬（膏狀含籽）各有用途。本文整理 Nielsen-Massey、McCormick 官方建議的對應場景、替換比例、以及馬達加斯加、大溪地、墨西哥產區差異。",
    date: "2026-02-03",
    category: "ingredients",
    categoryName: "原料選購",
    tags: ["香草", "香草莢", "香草精", "烘焙原料"],
    image:
      "https://images.unsplash.com/photo-1682482198446-4cbf92f85a4b?w=1600&q=80&auto=format&fit=crop",
    imageAlt: "木質桌面上整束擺放的乾燥香草莢",
    readingTime: 6,
    author: "棋美點心屋編輯室",
    toc: [
      { id: "three-forms", label: "三種形式的化學差異" },
      { id: "regions", label: "產區差異：馬達加斯加／大溪地／墨西哥" },
      { id: "use-cases", label: "什麼時候用哪種？" },
      { id: "substitution", label: "替換比例" },
      { id: "storage", label: "保存與活用" },
    ],
    relatedProducts: [
      {
        title: "馬達加斯加 Bourbon 香草莢（2 支裝）",
        description: "香氣最濃郁、最經典的產區，卡士達、冰淇淋必備。",
        link: "https://line.me/R/ti/p/@diy_chimei",
      },
      {
        title: "純天然香草精（30ml 瓶裝）",
        description: "餅乾、蛋糕等不見籽的配方使用，1 小匙取代 1 支香草莢。",
        link: "https://line.me/R/ti/p/@diy_chimei",
      },
    ],
    faq: [
      {
        question: "為什麼香草莢這麼貴？",
        answer:
          "香草蘭是全球第二昂貴的香料（僅次於番紅花）。人工授粉（蘭花只開放 1 天、只能人手一朵朵授粉）、漫長的熟成（綠豆莢採收後要 6 個月發酵乾燥變黑才成香草莢）、產量極少都是價格高昂原因。1 公斤香草莢約 700–900 美元。",
      },
      {
        question: "香草精可以自製嗎？",
        answer:
          "可以。將 3–5 支香草莢縱剖裝入 250ml 伏特加或白蘭姆中，常溫靜置 8 週即成。自製香草精風味更濃厚、成本比市售低一半，且無添加糖、玉米糖漿。放置時間越長味道越深。",
      },
      {
        question: "McCormick 的香草精跟 Nielsen-Massey 的差很多嗎？",
        answer:
          "差在濃度與純度。Nielsen-Massey 用真正的香草莢酒精萃取，純度高、層次複雜；McCormick 常見款含人工香草醛（vanillin）成分，價格低、味道較單一。高階甜點（慕斯、冰淇淋）差異明顯；餅乾、磅蛋糕的掩蓋效果強，兩者差異不大。",
      },
    ],
  },
  {
    slug: "online-vs-offline-baking",
    title: "線上課 vs 實體課：家庭烘焙的 CP 值選擇",
    seoTitle: "線上 vs 實體烘焙課｜學習效果、費用、適用對象比較",
    excerpt:
      "線上 200 元看到一堂法式甜點課，實體 2,000 元一堂看似差 10 倍。但學習效果是否也差 10 倍？本文依 Park City Culinary、Escoffier 等機構的比較整理兩者的實質差異。",
    metaDescription:
      "線上課勝在費用低、彈性高、可重播；實體課勝在即時回饋、多感官學習、建立人脈。本文整理兩種課型的學習效果、適合對象與家庭烘焙者的 CP 值決策。",
    date: "2026-02-01",
    category: "course",
    categoryName: "課程心得",
    tags: ["烘焙課", "線上課", "實體課", "課程選擇"],
    image:
      "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?w=1600&q=80&auto=format&fit=crop",
    imageAlt: "黃色毛衣人坐在木桌前使用筆電",
    readingTime: 6,
    author: "棋美點心屋編輯室",
    toc: [
      { id: "online-pros", label: "線上課的 4 大優勢" },
      { id: "offline-pros", label: "實體課不可替代的 3 件事" },
      { id: "cost-compare", label: "費用換算：元／小時實作成本" },
      { id: "who-fits", label: "什麼人適合哪種？" },
      { id: "hybrid", label: "混合模式：先實體再線上" },
    ],
    relatedProducts: [
      {
        title: "棋美點心屋實體小班制課程",
        description: "4–6 人小班、一人一組設備、課後 LINE 諮詢，最適合建立手感。",
        link: "https://line.me/R/ti/p/@diy_chimei",
      },
    ],
    faq: [
      {
        question: "線上課真的能學會烘焙嗎？",
        answer:
          "看學習目標與自律程度。想「會做某個食譜」，線上課搭配自我練習 3–5 次就能做出成品；想「真正理解烘焙原理、建立手感」，沒有老師即時回饋就很難精進。LCI、Escoffier 等機構都強調：實體的手感訓練無法用影片取代。",
      },
      {
        question: "線上課的錢算不算白花？",
        answer:
          "不算，但要知道它的定位。線上課是「食譜圖書館 + 老師示範」，對擴展會做的品項範圍很有用。但別期待用它「第一次就做對從沒做過的品項」——線上看會，實作不會是常態。",
      },
      {
        question: "新手該從哪種開始？",
        answer:
          "建議先上 2–3 堂實體課建立基礎手感（餅乾、磅蛋糕、戚風），再用線上課拓展食譜庫（慕斯、泡芙、可麗露）。純線上開始的新手失敗率極高、容易挫折放棄。",
      },
    ],
  },
  {
    slug: "corporate-meal-supplier",
    title: "企業餐盒供應商怎麼選：HACCP、合約條款、專業人員要求",
    seoTitle: "企業餐盒供應商指南｜HACCP 認證、合約重點與食品標示",
    excerpt:
      "企業活動、董事會午餐、員工福委會要訂餐盒，供應商該怎麼篩？從台灣 HACCP 法規、衛福部擴大實施名單、到合約條款，本文整理採購方與供應方都該注意的關鍵。",
    metaDescription:
      "依衛福部法規，餐盒食品工廠須通過 HACCP 食品安全管制系統。企業採購時要看認證、食字號、食品技師、投保、合約條款。本文整理 5 大篩選標準與合約要點。",
    date: "2026-01-30",
    category: "business",
    categoryName: "甜點創業",
    tags: ["企業餐盒", "HACCP", "團膳", "供應商"],
    image:
      "https://images.unsplash.com/photo-1696677049263-cc38af1c7681?w=1600&q=80&auto=format&fit=crop",
    imageAlt: "木盒中盛裝的日式便當，含米飯與多樣配菜",
    readingTime: 7,
    author: "棋美點心屋編輯室",
    toc: [
      { id: "why-haccp", label: "為什麼 HACCP 是門檻" },
      { id: "checklist", label: "供應商資格 5 大檢核" },
      { id: "contract", label: "合約條款必備 4 項" },
      { id: "food-label", label: "食品標示責任歸屬" },
      { id: "supplier-side", label: "想接企業單的供應方準備" },
    ],
    relatedProducts: [
      {
        title: "棋美點心屋企業下午茶甜點餐盒",
        description: "客製化甜點／麵包餐盒，適用下午茶、會議點心、活動禮盒。",
        link: "https://line.me/R/ti/p/@diy_chimei",
      },
      {
        title: "烘焙原料量販規格批發",
        description: "為工作室與店家提供進口原料量販，降低單位成本。",
        link: "https://line.me/R/ti/p/@diy_chimei",
      },
    ],
    faq: [
      {
        question: "採購方可以要求供應商提供 HACCP 認證嗎？",
        answer:
          "可以，且強烈建議。依衛福部公告，餐盒食品工廠屬於強制實施 HACCP 的業別。採購時要求出示 HACCP 證書影本、食品業者登錄字號、食品技師證等基本文件。沒有這些文件的供應商，出問題採購方需負連帶責任。",
      },
      {
        question: "小型工作室可以接企業餐盒單嗎？",
        answer:
          "可以，但要看企業規模。中小企業單次訂單 50 盒以下、不要求 HACCP 認證的案子，合法登錄的甜點工作室可接。大型企業（上市公司、政府機關）通常要求 HACCP 加食品技師加 200 萬公共意外險，工作室無法接。建議從 30 人以下公司下午茶開始累積經驗。",
      },
      {
        question: "合約條款有沒有範本？",
        answer:
          "重點條款：(1) 交貨時間與地點、(2) 食品過敏原與特殊飲食說明（素食、清真）、(3) 溫度履歷要求、(4) 退換貨與食安保險責任歸屬。建議企業採購方準備制式條款，供應方亦須有自己的 SOP 與食安事件處理流程。",
      },
    ],
  },
  {
    slug: "leftover-whipping-cream",
    title: "鮮奶油剩下怎麼辦：打發／半發／冷凍的實戰方法",
    seoTitle: "剩鮮奶油保存｜打發穩定、冷凍再利用、半發回打技巧",
    excerpt:
      "500ml 鮮奶油做蛋糕只用一半，剩下該怎麼處理？動物性鮮奶油在冰箱放兩天就要丟可惜。本文整理 The Kitchn、Cuisine at Home 的實務做法：穩定打發延長、冷凍分裝、半發保存。",
    metaDescription:
      "剩下鮮奶油的三個處理法：加玉米粉加糖粉穩定打發（冷藏 48 小時）、擠花冷凍（2–3 個月可直接使用）、半發保存留作料理。本文整理詳細步驟與比例。",
    date: "2026-01-29",
    category: "storage",
    categoryName: "保存技巧",
    tags: ["鮮奶油", "打發", "冷凍保存", "食材活用"],
    image:
      "https://images.unsplash.com/photo-1671223842615-e990ded94de2?w=1600&q=80&auto=format&fit=crop",
    imageAlt: "盤子上的杯子蛋糕正被擠花裝飾白色鮮奶油",
    readingTime: 5,
    author: "棋美點心屋編輯室",
    toc: [
      { id: "unopened", label: "未開封：看保存期限判斷" },
      { id: "stabilized", label: "打發後冷藏：穩定化延長 48 小時" },
      { id: "frozen-piped", label: "冷凍擠花：2–3 個月的備料救星" },
      { id: "semi-whipped", label: "半發狀態：留到下次料理" },
      { id: "spoilage", label: "什麼徵兆就該丟" },
    ],
    relatedProducts: [
      {
        title: "法國 Elle & Vire 愛樂薇 35% 動物性鮮奶油",
        description: "乳脂穩定、打發性佳，適合各種甜點內餡與裝飾用途。",
        link: "https://line.me/R/ti/p/@diy_chimei",
      },
      {
        title: "食品級冷凍夾鏈袋（真空適用）",
        description: "擠花冷凍保存鮮奶油的最佳包裝，避免冷凍灼傷。",
        link: "https://line.me/R/ti/p/@diy_chimei",
      },
    ],
    faq: [
      {
        question: "動物性鮮奶油打發後冷藏能放幾天？",
        answer:
          "普通打發（只加糖）冷藏約 12 小時會開始出水；用糖粉取代細砂糖、加 1 小匙玉米粉穩定，可延長至 48 小時。若加吉利丁（½ 小匙泡水加微波融化），冷藏可達 3–4 天。The Kitchn 與 Sugar Geek Show 都有詳細配比。",
      },
      {
        question: "鮮奶油冷凍解凍後還能用嗎？",
        answer:
          "未打發的鮮奶油冷凍後解凍會油水分離，不建議直接用作打發；但可用在「加熱應用」如白醬、咖哩、濃湯等不需打發的料理。已打發的鮮奶油擠花凍結成片後，可直接放在咖啡、熱可可上當裝飾，2–3 個月內風味穩定。",
      },
      {
        question: "半發狀態的鮮奶油能做什麼？",
        answer:
          "半發（6 分發）的鮮奶油是泡芙內餡、慕斯、卡士達打發的基礎。剩下的可保鮮膜貼面冷藏，48 小時內可加進咖啡、卡士達混合成「卡士達奶油 diplomat cream」，或加融化白巧克力變成甘納許填餡。",
      },
    ],
  },
  {
    slug: "french-lemon-tart",
    title: "法式檸檬塔：Pierre Hermé 檸檬 curd 的黃金比例",
    seoTitle: "法式檸檬塔食譜｜Pierre Hermé curd 比例、檸檬奶油操作",
    excerpt:
      "巴黎 Pierre Hermé 的檸檬塔被譽為「世界最好吃」，關鍵不在祕方而在流程：讓奶油在 60°C 下慢慢乳化，形成蓬鬆的空氣感。本文拆解 Pierre Hermé 版的經典配比與操作步驟。",
    metaDescription:
      "Pierre Hermé 版檸檬塔的精髓是在 60°C 乳化奶油形成 curd。本文整理黃金比例（檸檬汁:糖:蛋:奶油）、塔皮製作、奶油乳化技巧與冷藏定型時間。",
    date: "2026-01-28",
    category: "recipes",
    categoryName: "食譜實作",
    tags: ["檸檬塔", "Tarte au Citron", "Pierre Hermé", "法式甜點"],
    image:
      "https://images.unsplash.com/photo-1543508185-225c92847541?w=1600&q=80&auto=format&fit=crop",
    imageAlt: "金黃色的檸檬塔，表面平整有光澤",
    readingTime: 7,
    author: "棋美點心屋編輯室",
    toc: [
      { id: "why-herme", label: "為什麼 Pierre Hermé 版不一樣" },
      { id: "ratio", label: "黃金比例（lemon curd）" },
      { id: "sable-crust", label: "Sablée 塔皮的脆香秘訣" },
      { id: "curd-method", label: "60°C 乳化的關鍵步驟" },
      { id: "assembly", label: "組裝與冷藏時間" },
    ],
    relatedProducts: [
      {
        title: "法國 Elle & Vire 無鹽奶油（發酵款）",
        description: "高乳脂、微發酵風味，塔皮與 lemon curd 都適用的萬用款。",
        link: "https://line.me/R/ti/p/@diy_chimei",
      },
      {
        title: "日本進口不沾活底塔模（6 吋／8 吋）",
        description: "氟素塗層脫模容易、沿邊均勻上色，做家用檸檬塔首選。",
        link: "https://line.me/R/ti/p/@diy_chimei",
      },
    ],
    faq: [
      {
        question: "Pierre Hermé 的檸檬塔真的比較好吃嗎？",
        answer:
          "最大差異在「curd 的質地」。一般檸檬塔 curd 偏濃稠像布丁；Pierre Hermé 版因為奶油在 60°C 乳化入大量空氣，curd 質地像「法式 buttercream」般蓬鬆、入口即化。這也是他被稱為「味覺畢卡索」的代表作之一。",
      },
      {
        question: "檸檬 curd 可以提前做好冷藏嗎？",
        answer:
          "可以，冷藏可保 3–5 天，冷凍 1 個月。冷凍解凍後需用料理機或手持攪拌棒重新均質，否則會出現細小油水分離。組裝後的塔成品冷藏 24 小時內最佳，超過 48 小時塔皮會被 curd 水分軟化。",
      },
      {
        question: "家用版可以省略均質機嗎？",
        answer:
          "可以但效果打折。Pierre Hermé 原配方需要站立式均質機打 3 分鐘入空氣。家用可用手持式攪拌棒，但需注意深度與角度避免噴濺。若完全無設備，改為「分次加奶油塊、攪拌至完全融化再加下一塊」，質地會稍濃但風味仍佳。",
      },
    ],
  },
  {
    slug: "toast-loaf-pan-guide",
    title: "吐司模選購：Pullman 帶蓋、鍍鋁鋼、陽極鋁差在哪？",
    seoTitle: "吐司模比較｜Pullman 帶蓋 vs 開放式、鍍鋁鋼 vs 陽極鋁",
    excerpt:
      "做一條方正吐司需要 Pullman 帶蓋模，做山形吐司用開放式就好；鍍鋁鋼便宜耐用、陽極鋁壽命更長。本文整理四款家用吐司模的差異與挑選建議。",
    metaDescription:
      "吐司模依成品形狀分帶蓋（Pullman）與開放式；材質分鍍鋁鋼、陽極鋁、不沾塗層。本文依 USA Pan、LloydPans 的專業資料整理四類吐司模的差異與家用建議。",
    date: "2026-01-26",
    category: "tools",
    categoryName: "器具指南",
    tags: ["吐司模", "Pullman", "器具選購", "烘焙器具"],
    image:
      "https://images.unsplash.com/photo-1720879958608-2d8dd437eb5f?w=1600&q=80&auto=format&fit=crop",
    imageAlt: "冷卻架上剛出爐的方形吐司",
    readingTime: 6,
    author: "棋美點心屋編輯室",
    toc: [
      { id: "shape-type", label: "形狀：帶蓋 Pullman vs 開放式" },
      { id: "materials", label: "材質：鍍鋁鋼 vs 陽極鋁 vs 不沾" },
      { id: "sizes", label: "尺寸：1 磅／1.5 磅／2 磅與台式差異" },
      { id: "recommendation", label: "家用建議與採購清單" },
      { id: "care", label: "保養與養模" },
    ],
    relatedProducts: [
      {
        title: "12 兩帶蓋吐司模（陽極鋁）",
        description: "適合做方正三明治吐司，家用最常見的台式尺寸。",
        link: "https://line.me/R/ti/p/@diy_chimei",
      },
      {
        title: "Pullman 24 兩雙份大吐司模",
        description: "商業量級帶蓋吐司模，甜點工作室或大家庭首選。",
        link: "https://line.me/R/ti/p/@diy_chimei",
      },
    ],
    faq: [
      {
        question: "帶蓋 Pullman 跟開放式吐司模差很多嗎？",
        answer:
          "成品形狀決定用途：Pullman 帶蓋烘出方正、四面等高的吐司，適合做三明治、燒肉吐司等要求平整的應用；開放式烘出「山形」或「胖山形」吐司，外觀家常、風味相同但賣相不同。工作室多備 Pullman、家用無強制需求。",
      },
      {
        question: "鍍鋁鋼（aluminized steel）跟陽極鋁哪個好？",
        answer:
          "鍍鋁鋼較重、導熱好、耐久度高、不易變形，USA Pan、LloydPans 等美系專業品牌多用此材質。陽極鋁較輕、家用手感好、價格約為鍍鋁鋼 70%。家用建議陽極鋁、工作室建議鍍鋁鋼。",
      },
      {
        question: "新吐司模要養模嗎？",
        answer:
          "鍍鋁鋼與陽極鋁首次使用建議「養模」：均勻塗一層高煙點油（如葵花籽油）薄層，放入預熱 200°C 烤箱烤 30 分鐘，取出待涼、擦除多餘油脂。這層油膜能提升不沾效果與延長壽命。不沾塗層則不需養模。",
      },
    ],
  },
  {
    slug: "baking-chocolate-selection",
    title: "烘焙巧克力怎麼挑：可可百分比、調溫與品牌一次看懂",
    seoTitle: "烘焙巧克力指南｜可可含量、調溫 vs 非調溫、Valrhona Callebaut",
    excerpt:
      "包裝上寫「70% 黑巧克力」「調溫」「couverture」到底什麼意思？可可百分比、可可脂含量、是否 pre-tempered 決定巧克力最終表現。本文整理家用選購四大關鍵。",
    metaDescription:
      "烘焙巧克力的 4 大變數：可可百分比（55% vs 70%）、是否 couverture（可可脂 32–39%）、是否預調溫（pre-tempered）、品牌風味輪（Valrhona vs Callebaut）。",
    date: "2026-01-25",
    category: "ingredients",
    categoryName: "原料選購",
    tags: ["巧克力", "couverture", "Valrhona", "Callebaut", "烘焙原料"],
    image:
      "https://images.unsplash.com/photo-1558839653-17f53527c41b?w=1600&q=80&auto=format&fit=crop",
    imageAlt: "平鋪擺放的多塊巧克力磚",
    readingTime: 7,
    author: "棋美點心屋編輯室",
    toc: [
      { id: "cacao-pct", label: "可可百分比：甜 vs 苦的核心指標" },
      { id: "couverture", label: "couverture：可可脂 32–39% 的關鍵" },
      { id: "tempering", label: "調溫 vs 非調溫：pre-tempered 的便利" },
      { id: "brands", label: "品牌比較：Valrhona vs Callebaut" },
      { id: "buying-tips", label: "家用採購建議" },
    ],
    relatedProducts: [
      {
        title: "法國 Valrhona 70% Guanaja 黑巧克力 fève",
        description: "經典深可可風味，做塔、慕斯、甘納許的黑巧克力首選。",
        link: "https://line.me/R/ti/p/@diy_chimei",
      },
      {
        title: "比利時 Callebaut 811 54.5% 黑巧克力 callet",
        description: "風味平衡、穩定度高，工作室日常量用的 CP 值王。",
        link: "https://line.me/R/ti/p/@diy_chimei",
      },
    ],
    faq: [
      {
        question: "可可百分比越高越好嗎？",
        answer:
          "不一定。70% 以上風味濃苦，適合配方需要黑巧克力明顯味的甘納許、塔、慕斯；55% 左右更甜、風味平衡，適合餅乾、蛋糕內夾巧克力塊。60% 是家用最萬用選擇。",
      },
      {
        question: "couverture 與一般烘焙巧克力差在哪？",
        answer:
          "couverture 的可可脂含量 32–39%（比一般巧克力多 10%+），融化後流動性佳、凝固後光澤高、入口即化。一般烘焙巧克力含植物油替代部分可可脂，價格低但光澤與口感打折。做裱花、淋面、淋膜必須用 couverture。",
      },
      {
        question: "Valrhona 跟 Callebaut 哪個更好？",
        answer:
          "Valrhona 風味層次細膩、適合追求特色單一產區風味的高階甜點；Callebaut 風味穩定、易操作、價格 CP 值高，適合日常工作室量產。新手建議從 Callebaut 811 入門，熟悉後再嘗試 Valrhona 單一產區款（Guanaja、Jivara、Alpaco）。",
      },
    ],
  },
  {
    slug: "beginner-starter-course",
    title: "新手烘焙從哪類課程開始：蛋糕、麵包、餅乾的順序建議",
    seoTitle: "烘焙新手課程順序｜餅乾 vs 蛋糕 vs 麵包的入門邏輯",
    excerpt:
      "「第一堂課該學什麼？」這是新手最常問的問題。餅乾容易、蛋糕有難度、麵包需要發酵耐心，依學習曲線該怎麼排？本文依 King Arthur Baking、The Kitchn 的教學架構整理建議。",
    metaDescription:
      "新手烘焙課程順序建議：餅乾（掌握配方比例）→ 磅蛋糕（學奶油打發）→ 戚風蛋糕（蛋白霜）→ 麵包（發酵）→ 法式甜點（進階）。本文整理各階段重點與常見失敗。",
    date: "2026-01-24",
    category: "course",
    categoryName: "課程心得",
    tags: ["新手入門", "烘焙學習", "課程順序", "基礎課"],
    image:
      "https://images.unsplash.com/photo-1770040792359-5d965344308c?w=1600&q=80&auto=format&fit=crop",
    imageAlt: "小孩的雙手在綠色桌面上搓揉麵團",
    readingTime: 6,
    author: "棋美點心屋編輯室",
    toc: [
      { id: "why-order-matters", label: "為什麼學習順序很重要" },
      { id: "stage-1-cookies", label: "階段 1：餅乾（掌握配方比例）" },
      { id: "stage-2-pound", label: "階段 2：磅蛋糕（奶油打發）" },
      { id: "stage-3-chiffon", label: "階段 3：戚風蛋糕（蛋白霜）" },
      { id: "stage-4-bread", label: "階段 4：麵包（發酵管理）" },
      { id: "stage-5-advanced", label: "階段 5：進階法式甜點" },
    ],
    relatedProducts: [
      {
        title: "棋美點心屋新手入門烘焙課",
        description: "從餅乾、磅蛋糕到基礎麵包的階梯式課程，4–6 人小班。",
        link: "https://line.me/R/ti/p/@diy_chimei",
      },
    ],
    faq: [
      {
        question: "為什麼要先學餅乾而非蛋糕？",
        answer:
          "餅乾配方最簡單（奶油、糖、蛋、粉四個變數）、成功率最高、立刻能看到成果。新手建立「配方比例決定成品」的基本認知，之後學蛋糕才不會迷失在步驟海中。King Arthur Baking 的初學者課也是餅乾先行。",
      },
      {
        question: "磅蛋糕跟戚風蛋糕哪個該先？",
        answer:
          "磅蛋糕先。磅蛋糕的核心技巧是「奶油打發入氣」，相對單一；戚風則需要掌握蛋白霜加油水乳化兩套複雜技巧，失敗點多。先把奶油打發做穩定後再進戚風，失敗次數會減半。",
      },
      {
        question: "跳過順序直接學可頌可以嗎？",
        answer:
          "可以上課，但別期待第一次就成功。可頌涉及「發酵加層次加冷藏節奏」三件事，每一件都是獨立技能。建議至少有做過 10 次基礎吐司、5 次蘋果塔的實作經驗後再挑戰可頌，過程才不會挫折連連。",
      },
    ],
  },
  {
    slug: "dessert-pricing-formula",
    title: "甜點定價公式：食材 30%、人工 30%、毛利 40% 的平衡",
    seoTitle: "甜點定價公式｜食材人工包材成本、食材成本 30% 原則",
    excerpt:
      "做甜點創業的第一題：這盒馬卡龍該賣多少錢？答案不是拍腦袋，而是 Toasttab、UpMenu 等業界通用的「食材成本 30% 反推法」加上人工、包材、固定成本。本文附實際計算範例。",
    metaDescription:
      "甜點定價業界通則：食材成本等於售價 × 30%（反推可得售價）。加上人工 20–30%、包材 5–10%、固定成本 10–15%、毛利 25–35%。本文附完整計算範例與定價 5 大陷阱。",
    date: "2026-01-23",
    category: "business",
    categoryName: "甜點創業",
    tags: ["甜點定價", "成本", "利潤", "甜點創業"],
    image:
      "https://images.unsplash.com/photo-1711672284661-bd70e38f31b2?w=1600&q=80&auto=format&fit=crop",
    imageAlt: "烘焙坊內陳列架上擺放多種烘焙成品",
    readingTime: 7,
    author: "棋美點心屋編輯室",
    toc: [
      { id: "food-cost-30", label: "核心原則：食材成本 30%" },
      { id: "formula", label: "完整定價公式" },
      { id: "example", label: "實際案例：6 吋巧克力蛋糕" },
      { id: "other-factors", label: "市場調性與品牌溢價" },
      { id: "common-mistakes", label: "定價 5 大陷阱" },
    ],
    faq: [
      {
        question: "食材成本 30% 是硬性規則嗎？",
        answer:
          "不是硬性，但是業界通用基準。Toasttab、Lightspeed 的餐飲定價指南都建議食材佔比 25–35%。低於 25% 你在「剝削食材品質」，高於 35% 會壓縮其他成本與利潤空間。高端手工甜點可到 40%，但必須在人工或固定成本省出來。",
      },
      {
        question: "人工成本怎麼算？",
        answer:
          "簡單算法：(你的時薪 × 實作分鐘數) ÷ 60。例如時薪訂 400 元、做一盒 6 顆馬卡龍需 30 分鐘，人工成本等於 400 × 30/60 = 200 元。初期創業者常低估自己的時薪，建議至少用 350 元起跳，避免做越多越累。",
      },
      {
        question: "可以用國外配方直接定價嗎？",
        answer:
          "不行。國外定價對應當地食材、人工、市場。台灣市場對甜點價格敏感度高、通路競爭激烈，必須獨立試算。常見案例：巴黎 6 歐元的 canelé 到台北只能賣 85–120 元，不是匯率問題，是市場接受度。",
      },
    ],
  },
  {
    slug: "meringue-macaron-storage",
    title: "蛋白霜與馬卡龍殼的保存邏輯：濕度才是真正敵人",
    seoTitle: "馬卡龍殼保存指南｜濕度控制、冷藏冷凍期限與回溫",
    excerpt:
      "做好的馬卡龍殼放幾小時就軟掉？問題不在你，而在空氣濕度。本文整理業內常見保存建議，從殼、填餡、冷藏到冷凍一次說明。",
    metaDescription:
      "馬卡龍殼最大的敵人不是時間是濕度。室溫 1–2 天、冷藏 5–7 天、冷凍 3–6 個月。本文整理氣密容器、濕度控制、退冰手法與填餡後保存期限。",
    date: "2026-01-21",
    category: "storage",
    categoryName: "保存技巧",
    tags: ["馬卡龍", "蛋白霜", "保存", "濕度"],
    image:
      "https://images.unsplash.com/photo-1702745572427-c7c772b45ff3?w=1600&q=80&auto=format&fit=crop",
    imageAlt: "粉紅色背景上擺放著各色馬卡龍",
    readingTime: 5,
    author: "棋美點心屋編輯室",
    toc: [
      { id: "humidity", label: "最大敵人：濕度與溫度的交叉影響" },
      { id: "unfilled", label: "未填餡殼：室溫／冷藏／冷凍" },
      { id: "filled", label: "已填餡：冷藏必備加回溫 30 分鐘" },
      { id: "packaging", label: "氣密包裝與乾燥劑策略" },
      { id: "common-mistakes", label: "常見保存 NG" },
    ],
    relatedProducts: [
      {
        title: "馬卡龍禮盒（6 入／12 入含內襯）",
        description: "含防震內襯與氣密封口，甜點工作室送禮與寄賣首選。",
        link: "https://line.me/R/ti/p/@diy_chimei",
      },
      {
        title: "食品級乾燥劑（除濕脫氧包）",
        description: "放置於氣密盒中吸收殘留濕氣，延長馬卡龍殼保脆時間。",
        link: "https://line.me/R/ti/p/@diy_chimei",
      },
    ],
    faq: [
      {
        question: "為什麼馬卡龍殼放久會變軟？",
        answer:
          "蛋白霜以砂糖為主結構，本身強吸濕。台灣夏天相對濕度常超過 70%，空氣中的水分會被殼表面逐漸吸收，導致外殼軟化、脆裙消失。業界解法是氣密容器加乾燥劑，將內部濕度控制在 40% 以下。",
      },
      {
        question: "馬卡龍殼冷凍解凍後會不會碎掉？",
        answer:
          "不會，只要包裝得當。未填餡殼以保鮮膜雙層包加冷凍夾鏈袋可冷凍 3–6 個月。退冰時「不開袋」放冷藏 8 小時加常溫 30 分鐘，避免冷空氣接觸殼表面結露。",
      },
      {
        question: "已填餡的馬卡龍最多能放多久？",
        answer:
          "已填餡馬卡龍必須冷藏，最佳品嚐時間是「填餡後冷藏 24–48 小時」，讓甘納許的水分滲入殼體形成濕潤的內層（maturation）。Pierre Marcolini、FAUCHON 等法國老舖都建議 3 天內食用完畢，超過 5 天殼會完全濕黏。",
      },
    ],
  },
  {
    slug: "homemade-croissants",
    title: "家庭版可頌：三折三次的層次計算與奶油片製作",
    seoTitle: "家庭可頌食譜｜三折三次層數、冷藏時機、奶油片製作",
    excerpt:
      "可頌讓家庭烘焙者又愛又怕，關鍵在「奶油與麵團同溫」與「折的次數」。本文依 Sally's Baking Addiction、The Flavor Bender 的實務做法整理三折三次的層次計算與冷藏時機。",
    metaDescription:
      "家庭版可頌的核心是三折三次 = 81 層奶油層。本文整理奶油片製作、三折摺疊步驟、各階段冷藏時間，以及 82% 高脂烘焙奶油的選擇邏輯。",
    date: "2026-01-20",
    category: "recipes",
    categoryName: "食譜實作",
    tags: ["可頌", "千層麵團", "法式甜點", "食譜"],
    image:
      "https://images.unsplash.com/photo-1693483640461-267d788b6148?w=1600&q=80&auto=format&fit=crop",
    imageAlt: "烤盤上排成一列烘烤完成的金黃色可頌",
    readingTime: 7,
    author: "棋美點心屋編輯室",
    toc: [
      { id: "layer-math", label: "層次計算：三折三次等於 81 層" },
      { id: "butter-sheet", label: "關鍵：奶油片（beurre de tourage）" },
      { id: "folding", label: "三折三次的實作步驟" },
      { id: "rest-time", label: "各階段冷藏時機" },
      { id: "bake", label: "整形、發酵、烘烤" },
    ],
    relatedProducts: [
      {
        title: "法國 82% 烘焙用奶油片（beurre de tourage）",
        description: "高脂、延展性強，避免家用 80% 奶油被壓薄時破裂斷層。",
        link: "https://line.me/R/ti/p/@diy_chimei",
      },
      {
        title: "日本日清山茶花高筋麵粉 500g",
        description: "蛋白質 12%、穩定筋性，對千層麵團支撐最有利。",
        link: "https://line.me/R/ti/p/@diy_chimei",
      },
    ],
    faq: [
      {
        question: "三折三次跟三折兩次加單折差在哪？",
        answer:
          "三折三次等於 27 × 3 = 81 層；三折兩次加單折等於 9 × 3 × 2 = 54 層。前者層次更密、口感綿細；後者層次較明顯、咀嚼感更立體。Ferrandi 教學偏好三折三次，家用新手建議也從這個版本開始。",
      },
      {
        question: "為什麼一定要用 82% 奶油而不是家用 80%？",
        answer:
          "82% 奶油含水率較低（約 16% 對比 80% 的 17%），延展性更好。在冰箱冷藏狀態下擀開時不易斷裂，這對保持「奶油層連續不破」至關重要。一旦斷層，奶油會在烘烤時融合進麵粉，層次就消失了。",
      },
      {
        question: "做可頌一定要三天？",
        answer:
          "不是，但建議至少分兩天。Day 1 做 détrempe 麵團加第一次折加冷藏過夜；Day 2 完成第二三次折加整形加發酵加烘烤。一天內完成需要高度精準的溫度控制，容易因奶油融化失敗。",
      },
    ],
  },
  {
    slug: "baking-pan-materials",
    title: "烤盤材質怎麼挑：鋁、陽極鋁、不沾、不鏽鋼一次看懂",
    seoTitle: "烤盤材質比較｜陽極鋁 vs 不沾 vs 不鏽鋼熱傳導與反應性",
    excerpt:
      "烤盤材質決定你家烘焙的成品色澤與均勻度。King Arthur Baking、Fat Daddio's 等專業品牌的觀點一致：陽極鋁是家用最均衡選擇。本文整理四種材質的熱傳導、反應性與價格差異。",
    metaDescription:
      "鋁盤導熱最好但會與酸性食材反應；不鏽鋼導熱最差、易形成熱點；陽極鋁解決兩者痛點，King Arthur 等專業品牌推薦。本文整理四種烤盤材質的熱傳導、反應性與家用建議。",
    date: "2026-01-19",
    category: "tools",
    categoryName: "器具指南",
    tags: ["烤盤", "陽極鋁", "不沾", "不鏽鋼", "器具選購"],
    image:
      "https://images.unsplash.com/photo-1586664510812-52b8306f3fb0?w=1600&q=80&auto=format&fit=crop",
    imageAlt: "深色烤盤上烘烤完成的棕色糕點",
    readingTime: 6,
    author: "棋美點心屋編輯室",
    toc: [
      { id: "heat-conductivity", label: "熱傳導：鋁 vs 不鏽鋼差多少" },
      { id: "anodized", label: "陽極鋁：家用最均衡選擇" },
      { id: "nonstick", label: "不沾塗層：方便但有壽命" },
      { id: "stainless", label: "不鏽鋼：專業但家用不易" },
      { id: "buying-guide", label: "採購與保養建議" },
    ],
    relatedProducts: [
      {
        title: "陽極鋁烤盤（全尺寸／半盤尺寸）",
        description: "耐用、不與酸性食材反應，家用烘焙黃金標配。",
        link: "https://line.me/R/ti/p/@diy_chimei",
      },
      {
        title: "日本進口不沾塔模（活底）",
        description: "氟素塗層易脫模、家用塔皮成品成功率高。",
        link: "https://line.me/R/ti/p/@diy_chimei",
      },
    ],
    faq: [
      {
        question: "為什麼不建議新手用不鏽鋼烤盤？",
        answer:
          "不鏽鋼導熱係數僅約 15 W/m·K，遠低於鋁的 230 W/m·K。實務上會導致熱點明顯、餅乾邊緣過焦中心未熟、蛋糕表面縮腰等問題。除非你有大量經驗微調烤箱溫度與位置，否則新手建議選鋁或陽極鋁。",
      },
      {
        question: "不沾塗層會不會有毒？",
        answer:
          "主流 PTFE（鐵氟龍）塗層在低於 260°C 下是穩定的，家用烘焙溫度 180–220°C 不會釋放有害物質。避免空燒（無食物加熱）、避免刮傷是使用重點。若擔心化學塗層，可選陶瓷塗層版本。",
      },
      {
        question: "陽極鋁跟 hard-anodized 差在哪？",
        answer:
          "陽極鋁（anodized）是鋁表面經電解氧化形成氧化鋁保護層；hard-anodized 則是厚度更厚（2 倍以上）的強化版，耐刮、耐酸、耐久度更高。家用烘焙一般陽極鋁已足夠，hard-anodized 用於商業廚房或高頻使用者。",
      },
    ],
  },
  {
    slug: "whipping-cream-animal-vs-vegetable",
    title: "鮮奶油動物性 vs 植物性：打發穩定度、風味與適用場景",
    seoTitle: "動物性 vs 植物性鮮奶油｜乳脂率、打發穩定度、風味差別",
    excerpt:
      "同樣是鮮奶油，動物性 35% 乳脂香氣濃但易融化；植物性含植物油與乳化劑，穩定性高但風味較薄。本文整理兩者的化學組成、打發邏輯、適用場景與常見品牌。",
    metaDescription:
      "動物性鮮奶油乳脂 30–36%、風味濃厚但溫敏；植物性含植物油與乳化劑、穩定性高但風味較薄。本文整理兩者的科學差異、打發技巧與裝飾／內餡的選擇邏輯。",
    date: "2026-01-18",
    category: "ingredients",
    categoryName: "原料選購",
    tags: ["鮮奶油", "動物性", "植物性", "烘焙原料"],
    image:
      "https://images.unsplash.com/photo-1585434891654-63ce67414d98?w=1600&q=80&auto=format&fit=crop",
    imageAlt: "透明玻璃碗中打發的白色鮮奶油",
    readingTime: 6,
    author: "棋美點心屋編輯室",
    toc: [
      { id: "composition", label: "化學組成差異" },
      { id: "whipping", label: "打發穩定度的科學" },
      { id: "flavor", label: "風味與口感" },
      { id: "use-cases", label: "適用場景分配" },
      { id: "brands", label: "台灣常見品牌與規格" },
    ],
    relatedProducts: [
      {
        title: "法國 Elle & Vire 愛樂薇 35% 動物性鮮奶油 1L",
        description: "諾曼第乳源、乳脂穩定，做香緹、慕斯、布丁的業界標準。",
        link: "https://line.me/R/ti/p/@diy_chimei",
      },
      {
        title: "植物性調味鮮奶油（裝飾用）",
        description: "穩定性高、保形佳，適合擠花裝飾與夏季高溫環境。",
        link: "https://line.me/R/ti/p/@diy_chimei",
      },
    ],
    faq: [
      {
        question: "動物性鮮奶油為什麼不容易打發？",
        answer:
          "動物性鮮奶油的打發需要「脂肪球部分結晶、相互連結」形成氣泡包覆的網絡。溫度太高會讓脂肪完全液化、打不起；太低則結晶過度、打發後油水分離。關鍵是「鋼盆與打蛋頭冰鎮、乳脂保持 4°C」，打發環境維持在 10°C 以下最穩定。",
      },
      {
        question: "植物性鮮奶油真的比較不健康嗎？",
        answer:
          "早期植物性鮮奶油含氫化植物油（反式脂肪），健康疑慮大。近 10 年多改用棕櫚油、葵花油等非氫化油脂，無反式脂肪問題，但仍含乳化劑、甜味劑、穩定劑等加工成分。追求天然風味選動物性、追求穩定裝飾選植物性，依用途各有合理場景。",
      },
      {
        question: "動物與植物鮮奶油可以混合使用嗎？",
        answer:
          "可以，比例 1:1 是常見做法。動物性提供風味、植物性提供穩定，混合後打發會有較接近純動物的風味，但保形能力接近植物性。做婚禮蛋糕、夏日裝飾時是業內常用技巧。",
      },
    ],
  },
  {
    slug: "how-to-pick-baking-class",
    title: "一堂烘焙課怎麼挑：看老師、看配方、看設備三件事",
    seoTitle: "烘焙課程選擇指南｜老師資歷、課程深度、設備環境評估",
    excerpt:
      "市面上烘焙課從體驗型 800 元到大師班 5,000 元都有，CP 值差距巨大。本文整理報名前該問的三大面向：老師資歷、配方來源、設備規格，幫你快速篩掉虛有其表的課程。",
    metaDescription:
      "報名烘焙課前看三件事：老師專業背景、配方是否有科學解釋、教室設備是否符合正規烘焙需求。本文整理可以直接問課程方的 8 個關鍵問題。",
    date: "2026-01-16",
    category: "course",
    categoryName: "課程心得",
    tags: ["烘焙課", "課程選擇", "師資", "新手入門"],
    image:
      "https://images.unsplash.com/photo-1683624328172-88fb24625ec1?w=1600&q=80&auto=format&fit=crop",
    imageAlt: "一群人在廚房中一起準備與烹調食物",
    readingTime: 5,
    author: "棋美點心屋編輯室",
    toc: [
      { id: "teacher", label: "看老師：資歷與教學風格" },
      { id: "curriculum", label: "看配方：為什麼而不只怎麼做" },
      { id: "equipment", label: "看設備：專業器材的重要性" },
      { id: "questions", label: "報名前該問的 8 個問題" },
      { id: "red-flags", label: "這些跡象代表該換課" },
    ],
    relatedProducts: [
      {
        title: "棋美點心屋小班制烘焙課",
        description: "4–6 人小班、一人一組獨立設備、課後 LINE 諮詢。",
        link: "https://line.me/R/ti/p/@diy_chimei",
      },
    ],
    faq: [
      {
        question: "老師一定要有海外經驗才是好老師嗎？",
        answer:
          "不一定。海外經驗（如法國藍帶、Ferrandi、日本製菓學校）能證明基本功，但教學能力才是關鍵。有些本土老師累積了對台灣食材、烤箱、氣候的調整經驗，反而更實用。建議看課程評價與具體教學內容，別只看證書。",
      },
      {
        question: "報名前能先問課程方試吃嗎？",
        answer:
          "多數專業烘焙課會提供「課程成品照」或「示範開放日」，部分高階課也會有免費試吃體驗會。若老師拒絕透露任何具體成品或拒絕試吃，是值得警惕的訊號——代表品質可能禁不起檢驗。",
      },
      {
        question: "線上課跟實體課能互相取代嗎？",
        answer:
          "各有適合場景。線上課適合擴展食譜庫、看老師示範手法；實體課適合建立手感、當場修正錯誤。建議新手先上 2–3 堂實體課建立基礎，再用線上課拓展。兩者結合最划算。",
      },
    ],
  },
  {
    slug: "home-to-commercial-kitchen",
    title: "從家庭廚房到商業廚房：設備、動線、法規的升級清單",
    seoTitle: "商業廚房升級｜設廠標準、動線規劃、設備升級建議",
    excerpt:
      "當 IG 甜點訂單從每週 3 盒成長到 30 盒，家庭廚房會遇到第一個瓶頸：動線混亂、冷藏不足、清潔壓力爆表。本文依〈食品工廠建築及設備設廠標準〉整理從家用到商用的升級重點。",
    metaDescription:
      "家庭廚房到商業廚房的 3 大升級：動線分區（備料／加工／包裝／儲存）、設備量級（商用冷藏、發酵箱、雙烤箱）、衛生規範（200 勒克斯光線、防病媒、洗手消毒）。",
    date: "2026-01-15",
    category: "business",
    categoryName: "甜點創業",
    tags: ["商業廚房", "甜點創業", "動線規劃", "設備升級"],
    image:
      "https://images.unsplash.com/photo-1708915965975-2a950db0e215?w=1600&q=80&auto=format&fit=crop",
    imageAlt: "現代廚房搭配不鏽鋼器具與木質枱面",
    readingTime: 7,
    author: "棋美點心屋編輯室",
    toc: [
      { id: "when-to-upgrade", label: "判斷時機：何時該升級" },
      { id: "layout", label: "動線分區：不逆流原則" },
      { id: "equipment", label: "設備升級：從家用到半商用" },
      { id: "regulations", label: "〈食品工廠設廠標準〉重點" },
      { id: "cost", label: "預算規劃：30 萬 vs 80 萬方案" },
    ],
    faq: [
      {
        question: "自宅廚房可以登記食品業者，為什麼還要升級商業廚房？",
        answer:
          "食品業者登錄是「最低門檻」，讓你合法販售；但當訂單量達到每週 50 盒以上，家用 4L 冰箱、雙口瓦斯、12L 烤箱會成為產能瓶頸。商業廚房解決的不只是法規，更是產能、效率與品質一致性。",
      },
      {
        question: "設廠標準裡「200 勒克斯光線」很重要嗎？",
        answer:
          "是衛生局稽查項目之一。實務上家用 LED 燈 5000K 色溫加 800 流明即可達到標準。關鍵是工作檯正上方要有足夠照明，避免視覺疲勞導致衛生判斷失誤。",
      },
      {
        question: "30 萬預算能做商業廚房嗎？",
        answer:
          "可以做「半商用」。30 萬大致分配：二手商用冷藏（5 萬）、雙層烤箱（6 萬）、桌上型攪拌機升級（3 萬）、不鏽鋼工作檯兩張（3 萬）、水電改裝與動線規劃（8 萬）、耗材與包材初期庫存（5 萬）。80 萬方案則可直接進商用等級雙烤箱加螺旋式商用攪拌機。",
      },
    ],
  },
  {
    slug: "custard-cream-storage",
    title: "自製卡士達醬可以放多久？FDA 溫度原則與延長技巧",
    seoTitle: "卡士達醬保存期限｜FDA 冷藏 3-4 天、冷凍可行性分析",
    excerpt:
      "自己熬的卡士達醬冰箱能放幾天？答案是 FDA 的 3–4 天原則。但有幾個細節決定你能不能真的放到 4 天——包裝方式、製程衛生、冷藏位置都是關鍵。",
    metaDescription:
      "FDA 建議卡士達醬冷藏 4°C 保存 3–4 天，冷凍可延長至 3 個月但質地會改變。本文整理製程衛生、容器選擇、表面貼膜技巧，與失敗徵兆的判別。",
    date: "2026-01-14",
    category: "storage",
    categoryName: "保存技巧",
    tags: ["卡士達", "醬料保存", "蛋奶製品", "泡芙"],
    image:
      "https://images.unsplash.com/photo-1758221617316-1fa0fab44324?w=1600&q=80&auto=format&fit=crop",
    imageAlt: "近距離拍攝金黃色的奶餡與層次分明的酥皮",
    readingTime: 5,
    author: "棋美點心屋編輯室",
    toc: [
      { id: "fda-rule", label: "FDA 的 3–4 天原則" },
      { id: "why-limited", label: "為什麼卡士達特別容易壞" },
      { id: "packaging", label: "包裝：貼膜技巧決定期限" },
      { id: "freezing", label: "冷凍可行嗎？" },
      { id: "spoilage-signs", label: "壞掉的徵兆" },
    ],
    relatedProducts: [
      {
        title: "食品級密封保鮮盒（矮扁型）",
        description: "表面積大易貼膜，卡士達冷藏不結皮的最佳容器。",
        link: "https://line.me/R/ti/p/@diy_chimei",
      },
      {
        title: "食品級保鮮膜（熱烘焙專用）",
        description: "耐 120°C 熱貼膜不融化，卡士達剛煮好即刻封存的必備。",
        link: "https://line.me/R/ti/p/@diy_chimei",
      },
    ],
    faq: [
      {
        question: "FDA 的 3–4 天是從什麼時候起算？",
        answer:
          "從「製作完成並降至 4°C 冷藏起算」。若你熬完放涼 1 小時才進冷藏，這 1 小時不算在保存期內，但若放涼超過 2 小時，就落入「危險溫度區」（4–60°C），細菌指數性增殖，保存期必須從 3–4 天下修。",
      },
      {
        question: "卡士達醬冷凍會壞掉嗎？",
        answer:
          "冷凍本身不會讓它不安全，但卡士達的澱粉與蛋黃會在冷凍時結晶分離，解凍後質地粒粒像豆腐渣，無法恢復原始滑順。若要冷凍，建議用在「再加熱應用」（如可麗露填料、麵包內餡），不適合直接使用。",
      },
      {
        question: "剛煮好的卡士達要如何快速降溫？",
        answer:
          "兩步驟：(1) 離火後倒入較淺的不鏽鋼淺盤或冰過的鋼盆，表面立即貼保鮮膜，降低接觸空氣面積；(2) 將淺盤放入冰水浴（冰塊加冷水），攪拌 15 分鐘即可降至室溫。降溫後即刻入冷藏 4°C，整體從離火到冷藏不超過 30 分鐘。",
      },
    ],
  },
  {
    slug: "japanese-castella-cake",
    title: "日式蜂蜜 Castella 蛋糕：400 年傳統的四材料經典",
    seoTitle: "長崎 Castella 食譜｜高筋麵粉、蜂蜜、蛋糖打發與冷藏倒置",
    excerpt:
      "Castella（カステラ）是 16 世紀葡萄牙傳教士經長崎港帶入日本的糕點，至今文明堂等老店仍守著「只用蛋、糖、蜂蜜、高筋麵粉」的四材料配方。本文解析關鍵打發與冷藏倒置技巧，讓家用烤箱也能烤出濕潤蜂蜜香的長崎味。",
    metaDescription:
      "Castella 長崎蜂蜜蛋糕是日本 400 年歷史的代表甜點，用高筋麵粉而非低筋、以蛋泡而非化學膨脹劑。本文整理文明堂傳承配方、蛋糖打發時間、冷藏倒置 8–12 小時的關鍵步驟。",
    date: "2026-01-13",
    category: "recipes",
    categoryName: "食譜實作",
    tags: ["蜂蜜蛋糕", "日式甜點", "Castella", "長崎", "海綿蛋糕"],
    image:
      "https://images.unsplash.com/photo-1514435390218-898a0e01517a?w=1600&q=80&auto=format&fit=crop",
    imageAlt: "白盤上一片金黃色的磅形海綿蛋糕切片",
    readingTime: 6,
    author: "棋美點心屋編輯室",
    toc: [
      { id: "history", label: "Castella 的 400 年傳承" },
      { id: "four-ingredients", label: "四材料的意義" },
      { id: "whipping", label: "關鍵步驟：蛋糖打發" },
      { id: "recipe", label: "家用烤箱版配方" },
      { id: "fridge-invert", label: "冷藏倒置 8–12 小時" },
    ],
    relatedProducts: [
      {
        title: "日本日清山茶花高筋麵粉 500g",
        description: "蛋白質 12%，做 castella 蛋糕體細緻有彈性的經典粉。",
        link: "https://line.me/R/ti/p/@diy_chimei",
      },
      {
        title: "烘焙用純蜂蜜",
        description: "風味濃、水分低，適合做 castella、蜂蜜磅蛋糕等需要蜂蜜主導風味的糕點。",
        link: "https://line.me/R/ti/p/@diy_chimei",
      },
    ],
    faq: [
      {
        question: "為什麼 castella 要用高筋麵粉而非低筋？",
        answer:
          "這是 castella 與一般海綿蛋糕最大的差異。日本老舖如文明堂、福砂屋強調高筋麵粉能形成適度麩質，讓蛋糕有「彈性加濕潤感」的獨特咀嚼口感。用低筋會太鬆散，失去 castella 的標誌性結構。",
      },
      {
        question: "castella 真的只有 4 種材料嗎？",
        answer:
          "正統長崎 castella 就是蛋、糖、高筋麵粉、蜂蜜（部分配方會加 1 小匙水飴調整質地）。不加泡打粉、不加奶油、不加牛奶，完全靠蛋泡膨脹。這也是為什麼蛋糖打發時間必須足夠，否則蛋糕體會塌。",
      },
      {
        question: "為什麼要倒扣冷藏 8–12 小時？",
        answer:
          "倒扣能讓水分向上回流、避免表皮太乾；冷藏則讓蛋糕體的糖與水分重新平衡，質地從「剛出爐的蓬鬆」轉為「經典的濕潤」。傳統店家至少會靜置一夜才切片販售。",
      },
    ],
  },
  {
    slug: "rolling-pin-selection",
    title: "擀麵棍怎麼挑：法式、木質、大理石、矽膠到底差在哪？",
    seoTitle: "擀麵棍選購指南｜法式 vs 傳統、木質大理石矽膠材質比較",
    excerpt:
      "擀麵棍只是一根木棒嗎？其實「有無手把、什麼材質」直接影響你擀塔皮、派皮、可頌的成敗。本文整理專業廚房最常用的四種擀麵棍，以及台灣家用烘焙的實際選擇建議。",
    metaDescription:
      "法式無把擀麵棍 vs 傳統帶把款、木質 vs 大理石 vs 矽膠，選錯會影響派皮與塔皮的厚薄均勻與溫度控制。本文整理四類擀麵棍的實際用途、優缺點與台灣家用建議。",
    date: "2026-01-12",
    category: "tools",
    categoryName: "器具指南",
    tags: ["擀麵棍", "器具選購", "派皮", "塔皮"],
    image:
      "https://images.unsplash.com/photo-1608874755008-2d27ecc04870?w=1600&q=80&auto=format&fit=crop",
    imageAlt: "木質擀麵棍平放在一塊白色麵團上",
    readingTime: 5,
    author: "棋美點心屋編輯室",
    toc: [
      { id: "french-vs-handled", label: "法式 vs 傳統帶把：差在手感" },
      { id: "wood", label: "木質：最萬用也最常見" },
      { id: "marble", label: "大理石：對派皮的殺手鐧" },
      { id: "silicone", label: "矽膠：薄片與造型派的好幫手" },
      { id: "recommendation", label: "新手採購建議" },
    ],
    relatedProducts: [
      {
        title: "法式無把櫸木擀麵棍 45cm",
        description: "專業甜點店首選，漸細造型方便轉彎，擀派皮最順手。",
        link: "https://line.me/R/ti/p/@diy_chimei",
      },
      {
        title: "可調厚度擀麵棍（含四組膠圈）",
        description: "餅乾、糖霜翻糖精準控制厚度，新手減少 NG 的神器。",
        link: "https://line.me/R/ti/p/@diy_chimei",
      },
    ],
    faq: [
      {
        question: "為什麼法國廚師多用無把擀麵棍？",
        answer:
          "法式無把（French pin）多由櫸木、楓木製成，微漸細兩端，讓擀麵棍能自然「轉彎」貼合圓形派皮，且手掌直接施力比透過握把更敏銳、能感受麵團厚度變化。這也是藍帶、Ferrandi 等學校教學指定的款式。",
      },
      {
        question: "大理石擀麵棍一定要冰過嗎？",
        answer:
          "不強制但強烈建議，尤其做派皮、可頌類高油脂麵團。大理石本身蓄冷強，搭配冷藏麵團能避免奶油融化導致層次消失。使用後用擰乾布擦拭即可，不建議泡水或放烘碗機。",
      },
      {
        question: "新手只能買一支，該買哪種？",
        answer:
          "建議法式櫸木擀麵棍（約 40–45cm 長）。可擀派皮、塔皮、餅乾、中式麵食，萬用且便宜。等進階做翻糖或要求厚度精準時，再補一支「可調厚度擀麵棍」。",
      },
    ],
  },
  {
    slug: "baking-sugars-complete-guide",
    title: "烘焙糖類完整對照：細砂、糖粉、二砂、黑糖到 muscovado",
    seoTitle: "烘焙糖類指南｜細砂糖粉二砂黑糖 muscovado 差別與替換",
    excerpt:
      "同樣是糖，細砂糖、黑糖、糖粉、muscovado 的化學組成差很多：含水率、糖蜜比例、結晶大小都不同，直接影響蛋糕濕度、餅乾攤開與焦糖化深度。本文一次整理 8 種常用烘焙糖的用途與替換。",
    metaDescription:
      "King Arthur Baking 等烘焙權威指出：糖不只是甜，結晶大小、糖蜜含量會直接決定成品質地。本文整理 8 種烘焙糖（細砂、糖粉、黑糖、二砂、muscovado 等）的差異、用途與替換原則。",
    date: "2026-01-11",
    category: "ingredients",
    categoryName: "原料選購",
    tags: ["糖", "烘焙原料", "黑糖", "muscovado", "糖粉"],
    image:
      "https://images.unsplash.com/photo-1758738880333-287af488b5c8?w=1600&q=80&auto=format&fit=crop",
    imageAlt: "湯匙將白糖倒入深色陶碗，旁邊有粉紅雛菊裝飾",
    readingTime: 6,
    author: "棋美點心屋編輯室",
    toc: [
      { id: "why-sugar-matters", label: "糖在烘焙裡不只是甜度" },
      { id: "white-sugars", label: "白糖家族：細砂、糖粉、caster" },
      { id: "brown-sugars", label: "紅棕糖家族：二砂、brown、muscovado" },
      { id: "substitution", label: "常見替換規則" },
      { id: "storage", label: "保存與結塊處理" },
    ],
    relatedProducts: [
      {
        title: "進口 muscovado 深色黑糖",
        description: "保留糖蜜的深色原糖，做布朗尼、sticky toffee、太妃甜點必備。",
        link: "https://line.me/R/ti/p/@diy_chimei",
      },
      {
        title: "細結晶進口細砂糖",
        description: "結晶細、融解快，適合做馬卡龍殼、蛋白霜與輕盈海綿體。",
        link: "https://line.me/R/ti/p/@diy_chimei",
      },
    ],
    faq: [
      {
        question: "糖粉、caster 糖、細砂糖可以互相替換嗎？",
        answer:
          "不完全可以。糖粉含 2–3% 玉米澱粉防結塊，直接做蛋糕會讓組織變黏糊，只建議用在糖霜、蛋白霜與撒面。caster 比細砂細但成分相同，可 1:1 互換。細砂糖是最通用的基準。",
      },
      {
        question: "brown sugar 和 muscovado 差在哪？",
        answer:
          "brown sugar 是白糖後製加入少量糖蜜而成，顏色淺、風味溫和；muscovado 則是糖蜜未精製完整保留的原糖，顏色深、風味濃，帶明顯焦糖與咖啡韻味。做 gingerbread、sticky toffee pudding 用 muscovado 味道更立體。",
      },
      {
        question: "糖結塊硬化了怎麼辦？",
        answer:
          "最常見是紅糖、黑糖放太久水分流失結塊。可放一塊切片蘋果或一片吐司在密封罐中 1–2 天，糖會重新吸水軟化。若要立刻用，隔水蒸 3 分鐘後搗散也可以。",
      },
    ],
  },
  {
    slug: "small-vs-large-class",
    title: "小班 vs 大班制烘焙課：到底哪種學習效果比較好？",
    seoTitle: "小班 vs 大班制烘焙課程｜新手學習曲線與實作時間比較",
    excerpt:
      "同樣是 3 小時、同樣是巧克力塔，小班 4 人跟大班 20 人的學習效果會差到讓人驚訝。差距不只在「老師能不能照顧到你」，更關鍵是你實際上手的時間比例。",
    metaDescription:
      "烘焙是 hands-on 技能，小班制（4–6 人）學員實作時間是大班制（15 人以上）的 2–3 倍。本文整理兩種課型的實際差異、適合對象與費用換算，讓你挑到真正學得會的課。",
    date: "2026-01-07",
    category: "course",
    categoryName: "課程心得",
    tags: ["烘焙課", "小班制", "課程選擇", "新手入門"],
    image:
      "https://images.unsplash.com/photo-1758874960663-a534d512dd1d?w=1600&q=80&auto=format&fit=crop",
    imageAlt: "三位不同年齡的女性在廚房一起裝飾杯子蛋糕",
    readingTime: 5,
    author: "棋美點心屋編輯室",
    toc: [
      { id: "what-counts", label: "判斷班型的兩個關鍵" },
      { id: "small-class", label: "小班制：實作時間最大化" },
      { id: "large-class", label: "大班制：觀摩取向的價值" },
      { id: "cost-compare", label: "費用換算：每人實作分鐘成本" },
      { id: "how-to-choose", label: "怎麼挑適合你的班型" },
    ],
    relatedProducts: [
      {
        title: "棋美點心屋小班制烘焙課（4–6 人）",
        description: "每人一組設備，老師全程照看到底，新手最快上手的課型。",
        link: "https://line.me/R/ti/p/@diy_chimei",
      },
      {
        title: "企業／社團客製烘焙團體班",
        description: "10 人起可到店或出班，活動策展、公司福委會首選。",
        link: "https://line.me/R/ti/p/@diy_chimei",
      },
    ],
    faq: [
      {
        question: "小班制真的比較好嗎？價格差一倍值得嗎？",
        answer:
          "如果你想「學會一項技能」，小班制每人實作時間是大班的 2–3 倍，CP 值更高。如果你只想「觀摩體驗」或當休閒活動，大班的價格合理，配合親友一起報名更有氣氛。關鍵在你的學習目標。",
      },
      {
        question: "一班多少人算小班？",
        answer:
          "業界慣例 4–6 人是「真小班」，8 人為臨界值，超過 10 人基本都算大班。重點不只是人數，還要看「一人一組設備 vs 共用」——共用設備的班型即便人少，實際實作時間仍會大打折扣。",
      },
      {
        question: "線上課算哪種班型？",
        answer:
          "線上課屬於「非同步大班」，一對多但沒有即時回饋。優點是可反覆觀看、單位成本低；缺點是遇到失敗無人協助調整。建議先上 1–2 堂實體小班建立手感，再用線上課拓展食譜庫。",
      },
    ],
  },
  {
    slug: "pastry-studio-legal-setup",
    title: "甜點工作室合法登記：食品業者登錄 2026 最新流程",
    seoTitle: "甜點工作室登錄指南｜食品業者登錄流程、罰則與自宅申請",
    excerpt:
      "從租屋處開始接單販售甜點，也必須完成「食品業者登錄」。這是食品安全衛生管理法的強制規定，無登錄販售最高可罰 300 萬。本文整理 2026 最新流程、所需文件與常見疑問。",
    metaDescription:
      "依《食品安全衛生管理法》，所有對外販售食品的業者都須完成食品業者登錄；從自宅廚房接單做甜點也不例外。本文整理 2026 食藥署「非登不可」平台申請流程、所需憑證與罰則細節。",
    date: "2026-01-06",
    category: "business",
    categoryName: "甜點創業",
    tags: ["食品業者登錄", "甜點創業", "合法登記", "工作室"],
    image:
      "https://images.unsplash.com/photo-1726720343295-05c8c290fa4d?w=1600&q=80&auto=format&fit=crop",
    imageAlt: "木質砧板上擺著多種糕點，旁邊有一杯咖啡",
    readingTime: 6,
    author: "棋美點心屋編輯室",
    toc: [
      { id: "who-must-register", label: "誰必須登錄？" },
      { id: "how-to-apply", label: "申請流程與所需文件" },
      { id: "penalties", label: "沒登錄的法律風險" },
      { id: "home-kitchen", label: "自宅廚房能否登錄？" },
      { id: "follow-up", label: "登錄完成後還要做什麼？" },
    ],
    faq: [
      {
        question: "我只是偶爾朋友下訂，也要登錄嗎？",
        answer:
          "只要「對外販售」就要登錄，金額多寡與頻率都不是免責條件。朋友圈團購、IG 接單、市集擺攤都屬於販售行為。食藥署非登不可平台登錄免費，處理時間通常 1–3 個工作日，申請成本低、不申請風險極高（3–300 萬罰鍰）。",
      },
      {
        question: "租屋處當作業地點可以嗎？房東簽什麼？",
        answer:
          "法規上允許自宅／租屋當作業地點，但衛生局查核會要求動線、清潔與儲存分區合規。租屋需取得房東同意（建議書面備存），部分房東會要求加註「不改變住宅用途」避免房屋稅率變動。公寓大廈管委會偶有限制，簽約前請確認管委會規章。",
      },
      {
        question: "沒有登錄被檢舉怎麼辦？",
        answer:
          "食藥署收到檢舉會通知地方衛生局稽查。首次多為命限期改正，期限內補辦登錄可免罰；若屆期仍未改正，最低 3 萬元罰鍰、重大案件可至 300 萬元。建議檢舉前就主動完成登錄，避免留下行政紀錄。",
      },
    ],
  },
  {
    slug: "bread-freezing-guide",
    title: "麵包冷凍保存完整指南：USDA 標準加實務回溫技巧",
    seoTitle: "麵包冷凍保存｜USDA 3 個月期限、包裝與回溫技巧",
    excerpt:
      "自己烤的吐司、歐包吃不完，冷凍保存是最佳選擇——但大部分人都錯在「熱著就冷凍」「沒分切就冷凍」。本文依 USDA FSIS 官方指引整理冷凍時機、包裝、期限與回溫方法。",
    metaDescription:
      "USDA FSIS 指引：麵包冷凍保存最佳品質期為 3 個月；但熱著冷凍會產生凝水、霉菌可在 –18°C 下於 72 小時發芽。本文整理正確冷凍時機、包裝方式、期限與三種回溫技巧。",
    date: "2026-01-05",
    category: "storage",
    categoryName: "保存技巧",
    tags: ["麵包", "冷凍保存", "吐司", "歐包"],
    image:
      "https://images.unsplash.com/photo-1663904460424-91895028aa9e?w=1600&q=80&auto=format&fit=crop",
    imageAlt: "木板上的一條切片麵包，旁邊有一塊已切下的麵包",
    readingTime: 5,
    author: "棋美點心屋編輯室",
    toc: [
      { id: "when-to-freeze", label: "什麼時候冷凍：越早越好" },
      { id: "packaging", label: "包裝：避免凝水與冷凍灼傷" },
      { id: "duration", label: "冷凍期限：USDA 的 3 個月原則" },
      { id: "thawing", label: "三種回溫方法" },
      { id: "common-mistakes", label: "常見 NG" },
    ],
    relatedProducts: [
      {
        title: "食品級 PE 保鮮袋（耐凍 –40°C）",
        description: "真空機適用、可手封雙層，避免冷凍灼傷與異味滲入。",
        link: "https://line.me/R/ti/p/@diy_chimei",
      },
      {
        title: "吐司冷凍切片專用夾鏈袋（10 片分層）",
        description: "分層隔水紙，退冰時可單片取用、不黏連。",
        link: "https://line.me/R/ti/p/@diy_chimei",
      },
    ],
    faq: [
      {
        question: "剛出爐的麵包可以直接冷凍嗎？",
        answer:
          "不行。麵包出爐後內部仍有高溫與水蒸氣，直接冷凍會在包裝內結冰形成凝水，USDA 研究指出這類凝水會讓霉菌在 –18°C 下 72 小時內發芽。建議麵包中心降至室溫（約 25°C）後再包裝冷凍。",
      },
      {
        question: "冷凍麵包會變難吃嗎？",
        answer:
          "USDA FSIS 指出冷凍本身不會讓食物變不安全，但品質會隨時間下降。3 個月內取出回溫後，口感幾乎與新鮮時相同；超過 3 個月雖仍安全，但會開始有輕微乾澀、風味流失。關鍵在包裝嚴密與 –18°C 穩定溫度。",
      },
      {
        question: "冷凍麵包該如何快速回溫？",
        answer:
          "三種方法依速度與口感排序：(1) 烤箱 180°C 5 分鐘直接從冷凍加熱，外脆內軟，最推薦；(2) 放冷藏退冰 8 小時後室溫回溫，最接近新鮮口感；(3) 微波 30 秒後烤 2 分鐘，最快但皮會偏軟。避免僅用微波，麵包會失去外皮脆度。",
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
    slug: "stand-mixer-guide",
    title: "桌上型攪拌機選購：KitchenAid / Kenwood / Smeg 怎麼挑？",
    seoTitle: "桌上型攪拌機比較｜KitchenAid Kenwood Smeg 馬力鍋容規格",
    excerpt:
      "同樣是桌上型攪拌機，KitchenAid Artisan 325W、Kenwood Titanium 1200W、Smeg 800W 的差距不只是數字。本文從馬達扭力、鍋容、頭部結構切入，整理三大品牌的實際差異與家用選擇建議。",
    metaDescription:
      "桌上型攪拌機不是瓦數越高越好，關鍵在馬達扭力、鍋容與頭部結構。本文比較 KitchenAid Artisan / Kenwood Chef Titanium / Smeg SMF01 三大主流機型的規格與實際適用場景。",
    date: "2026-01-03",
    category: "tools",
    categoryName: "器具指南",
    tags: ["攪拌機", "KitchenAid", "Kenwood", "Smeg", "器具選購"],
    image:
      "https://images.unsplash.com/photo-1547091267-6b2be403a763?w=1600&q=80&auto=format&fit=crop",
    imageAlt: "粉紅色的桌上型攪拌機，攪拌頭上沾著淺色麵糊",
    readingTime: 6,
    author: "棋美點心屋編輯室",
    toc: [
      { id: "wattage-myth", label: "瓦數迷思：扭力才是重點" },
      { id: "bowl-capacity", label: "鍋容：5L 是家用分水嶺" },
      { id: "head-type", label: "頭部結構：頭抬式 vs 升降式" },
      { id: "three-brands", label: "KitchenAid / Kenwood / Smeg 比較" },
      { id: "buying-tips", label: "新手採購建議" },
    ],
    faq: [
      {
        question: "瓦數越高越好嗎？",
        answer:
          "不一定。Everything Kitchens 與 Woman & Home 的評測都指出，KitchenAid Artisan 的 325W 馬達透過齒輪減速放大扭力，實際處理 1kg 吐司麵團毫無壓力。重要的不是輸入瓦數，是攪拌頭在低轉速下能產生多少扭力。大瓦數（如 Kenwood 1200W）優勢在長時間高轉連續運作不過熱。",
      },
      {
        question: "頭抬式（tilt-head）vs 升降式（bowl-lift）怎麼選？",
        answer:
          "家用 5L 以下建議頭抬式（如 KitchenAid Artisan），上下料方便、取拆鍋快。6L 以上建議升降式（如 KitchenAid Pro 或 Kenwood Chef），鍋底支撐更穩定，重物料不會讓頭在高速時輕微晃動。工作室起步建議直上升降式。",
      },
      {
        question: "Smeg SMF01 除了外觀還有什麼優勢？",
        answer:
          "Smeg 800W 10 段速、4.8L 不鏽鋼鍋，扭力表現介於 KitchenAid 與 Kenwood 之間。實測麵團揉合時間約比 KitchenAid 快 15%。其真正優勢是義大利工業設計與 Direct Drive 安靜馬達——若廚房與客廳共空間、對噪音敏感，是值得的溢價。",
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
