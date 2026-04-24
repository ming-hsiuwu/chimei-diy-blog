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
