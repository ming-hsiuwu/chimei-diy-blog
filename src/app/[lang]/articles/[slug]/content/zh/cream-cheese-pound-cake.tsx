import Link from "next/link";

export default function CreamCheesePoundGuide() {
  return (
    <>
      <p>
        磅蛋糕（pound cake）得名於「1 磅奶油、1 磅糖、1 磅蛋、1 磅粉」的經典 18 世紀英式配方。加入奶油乳酪（cream cheese）的改良版是美南家庭甜點代表，Paula Deen、Southern Living 雜誌的家傳配方至今仍是家用基準。本文拆解黃金比例與關鍵技巧。
      </p>

      <h2 id="golden-ratio">黃金比例（Paula Deen 經典版）</h2>
      <p>
        適合 22cm 長條磅模或 6 吋圓模的家用版：
      </p>
      <ul>
        <li>無鹽奶油 ……… 225g（1 杯）</li>
        <li>奶油乳酪 ……… 225g（1 包 Philadelphia 8oz）</li>
        <li>細砂糖 ………… 600g（3 杯）</li>
        <li>全蛋 …………… 6 顆（300g）</li>
        <li>中筋麵粉 ……… 420g（3.5 杯）</li>
        <li>泡打粉 ………… 5g（1 小匙）</li>
        <li>鹽 ……………… 1g</li>
        <li>香草精 ………… 15ml（1 大匙）</li>
      </ul>
      <p>
        家用減半到 1/3 都可以。比例的核心：<strong>奶油:奶油乳酪:糖:蛋:粉 = 1:1:3:1.3:1.9</strong>。
      </p>

      <h2 id="cream-cheese-role">奶油乳酪為什麼加？</h2>
      <p>
        加入奶油乳酪的三個好處：
      </p>
      <ul>
        <li><strong>風味更豐富</strong>：奶油乳酪帶微微乳酸香，讓甜膩的磅蛋糕有層次</li>
        <li><strong>質地更濕潤</strong>：奶油乳酪含 30% 左右水分，讓蛋糕體不會乾澀</li>
        <li><strong>保存期延長</strong>：乳酸能延緩澱粉老化，室溫放 2 天仍保濕</li>
      </ul>
      <p>
        Philadelphia 是美國家用最常見的奶油乳酪品牌，台灣烘焙店有販售。歐系的 Kiri、Tatua 也可替代。</p>

      <h2 id="butter-whipping">奶油打發的三個判斷點</h2>
      <p>
        磅蛋糕的蓬鬆靠的是「打發入氣」（mechanical leavening），不是靠發粉。打發奶油時要看三個指標：
      </p>
      <ol>
        <li><strong>顏色</strong>：從亮黃轉為「象牙白」</li>
        <li><strong>體積</strong>：膨脹 1.5–2 倍</li>
        <li><strong>質地</strong>：呈現「蓬鬆雲霧狀」，提起攪拌頭有挺立的尖峰</li>
      </ol>
      <p>
        通常中速打 5–7 分鐘即可達到。加入奶油乳酪時要再打 2 分鐘讓兩者完全均質。
      </p>

      <h2 id="adding-eggs">分次加蛋：避免油水分離</h2>
      <p>
        磅蛋糕最常見的失敗是「油水分離」——蛋加得太快、奶油吸不住蛋液，麵糊變得粒粒分離狀。避免方法：
      </p>
      <ul>
        <li>蛋先室溫回溫（從冰箱拿出 1 小時）</li>
        <li>每次只加 1 顆蛋，攪拌至「完全吸收、看不見蛋液」再加下一顆</li>
        <li>若已經油水分離：加 1 大匙麵粉繼續攪拌通常能救回</li>
      </ul>

      <h2 id="baking">180°C 下火加蓋烘烤 60–80 分鐘</h2>
      <p>
        磅蛋糕烘烤流程：
      </p>
      <ol>
        <li>烤模鋪烘焙紙、倒入麵糊，表面用刮刀抹平。</li>
        <li>烤箱預熱 180°C，放入中層。</li>
        <li>烤 40 分鐘後表面會形成金黃色，此時加鋁箔紙蓋住表面避免過焦。</li>
        <li>繼續烤 20–40 分鐘，以「竹籤插中心不沾黏」判斷熟度。</li>
        <li>出爐立即脫模、倒扣在架上放涼（避免底部蒸氣凝結）。</li>
      </ol>
      <p>
        完全冷卻後用保鮮膜包好，室溫放 1 天風味最佳——磅蛋糕越放越好吃，奶油與蛋的風味會整合得更深。
      </p>
      <p>
        想理解奶油打發背後的科學，接著讀{" "}
        <Link href="/zh/articles/butter-salted-vs-unsalted" className="text-brand hover:underline">
          無鹽 vs 有鹽奶油選用指南
        </Link>
        ，選對奶油是打發成功的第一步。
      </p>
    </>
  );
}
