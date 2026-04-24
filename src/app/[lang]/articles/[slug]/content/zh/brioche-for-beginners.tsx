import Link from "next/link";

export default function BriocheGuide() {
  return (
    <>
      <p>
        布里歐修（brioche）被稱為「麵包界的貴族」——加了大量蛋、奶油、糖的法式 enriched dough。外皮金黃、內部細膩、奶油香氣濃郁。新手第一次做 brioche 常敗在「沒耐心攪拌」與「奶油加得太快」。Ferrandi 教科書的 38% 奶油比例是經典基準，本文拆解完整流程。
      </p>

      <h2 id="what-is">什麼是 brioche（enriched dough）</h2>
      <p>
        「enriched dough」指含有大量油脂、蛋、糖、奶製品的麵團，相對於「lean dough」（法棍、歐包這類只有麵粉水鹽酵母的簡單麵包）。brioche 是 enriched dough 的代表：
      </p>
      <ul>
        <li>蛋佔麵粉重量 50–70%</li>
        <li>奶油佔麵粉重量 25–60%（不同版本差很大）</li>
        <li>糖佔麵粉重量 10–15%</li>
        <li>酵母與少量牛奶負責發酵</li>
      </ul>
      <p>
        高油脂讓麩質形成困難、發酵也較慢，所以 brioche 比一般麵包更需要耐心。
      </p>

      <h2 id="ratio">38% 奶油的黃金比例</h2>
      <p>
        Ferrandi 與 Pardon Your French 的經典版本（6 吋長條模，一次成品）：
      </p>
      <ul>
        <li>高筋麵粉 …… 250g（基數 100%）</li>
        <li>糖 …………… 25g（10%）</li>
        <li>鹽 …………… 5g（2%）</li>
        <li>速發酵母 …… 5g（2%）</li>
        <li>全蛋 ………… 150g（60%，約 3 顆）</li>
        <li>牛奶 ………… 40g（16%）</li>
        <li>無鹽奶油 …… 95g（38%）—— <strong>關鍵比例</strong></li>
      </ul>
      <p>
        38% 是「tradition brioche」的門檻，50%+ 則為「richissime」超富貴版（過於柔軟難以整形，家用不建議）。
      </p>

      <h2 id="mixing">攪拌 35 分鐘的耐心</h2>
      <p>
        brioche 的麩質形成需要桌上型攪拌機耐心操作：
      </p>
      <ol>
        <li>
          <strong>階段 1（0–10 分鐘）</strong>：粉類 + 蛋 + 牛奶用鉤子低速攪拌，麵團成塊。
        </li>
        <li>
          <strong>階段 2（10–20 分鐘）</strong>：中速攪拌，麵團開始有彈性、會離開盆壁。
        </li>
        <li>
          <strong>階段 3（20–35 分鐘）</strong>：分 5 次加入冰奶油塊，每次完全吸收後再加下一塊。最後麵團應光滑、能拉出薄膜。
        </li>
      </ol>
      <p>
        關鍵提示：奶油要冷藏硬度、不是室溫軟化。冷奶油才不會溶解進麵團影響麩質形成。家用手揉幾乎不可能做出正統 brioche，桌上型攪拌機是必備。
      </p>

      <h2 id="fermentation">兩階段發酵</h2>
      <p>
        brioche 的發酵比一般麵包慢，典型做法：
      </p>
      <ol>
        <li>
          <strong>第一次發酵（室溫 26–28°C / 1.5 小時）</strong>：麵團膨脹 1.5 倍即可。
        </li>
        <li>
          <strong>冷藏過夜（8–12 小時）</strong>：放冷藏慢速發酵，風味更複雜、麵團好整形。
        </li>
        <li>
          <strong>整形</strong>：冷藏取出後分割成小球或長條，放入模中。
        </li>
        <li>
          <strong>第二次發酵（26–28°C / 2 小時）</strong>：膨脹至模具頂端即可入爐。
        </li>
      </ol>

      <h2 id="baking">整形與烘烤</h2>
      <p>
        brioche 的經典形狀：
      </p>
      <ul>
        <li><strong>Brioche à tête</strong>：頭部小球 + 本體，法式經典造型</li>
        <li><strong>Brioche Nanterre</strong>：8 小球排列進長條模，家用最常見</li>
        <li><strong>Brioche loaf</strong>：直接整形成長條放入模中，像吐司</li>
      </ul>
      <p>
        烘烤：入爐前刷蛋液 + 牛奶（1:1）讓表皮金黃。180°C 烤 30–40 分鐘，表面深金、側面敲聲空即可。內部溫度 93°C 為熟透標準。
      </p>
      <p>
        搭配{" "}
        <Link href="/zh/articles/butter-salted-vs-unsalted" className="text-brand hover:underline">
          無鹽 vs 有鹽奶油選用指南
        </Link>
        ，選對 82% 乳脂奶油是 brioche 風味的關鍵基礎。
      </p>
    </>
  );
}
