import Link from "next/link";

export default function BakingChocolateGuide() {
  return (
    <>
      <p>
        走進烘焙材料行，看到包裝寫「70% 黑巧克力」「調溫巧克力」「couverture」「fève」「callet」——完全搞不懂在說什麼？烘焙巧克力的選擇牽涉 4 個變數：可可百分比、可可脂含量、是否預調溫、品牌風味輪。本文一次釐清。
      </p>

      <h2 id="cacao-pct">可可百分比：甜 vs 苦的核心指標</h2>
      <p>
        包裝上的「70%」代表可可固形物（可可脂 + 可可質）占總重比例。剩下 30% 多為糖、少量卵磷脂、香草。不同百分比的特性：
      </p>
      <ul>
        <li><strong>55–60%</strong>：甜度明顯、風味溫和，適合餅乾、蛋糕內夾、白巧克力搭配</li>
        <li><strong>65–70%</strong>：甜苦平衡，做塔、甘納許、慕斯的萬用款</li>
        <li><strong>70–75%</strong>：風味濃郁、苦味明顯，做 truffle 黑巧克力糖、單品甘納許</li>
        <li><strong>80% 以上</strong>：極苦、多人當健康食品直接吃，烘焙使用較少</li>
      </ul>
      <p>
        新手建議從 60% 或 66% 入門，成品能明顯感受巧克力風味又不過苦。</p>

      <h2 id="couverture">couverture：可可脂 32–39% 的關鍵</h2>
      <p>
        「couverture」法文意思是「覆蓋」，指可可脂含量 32–39% 的高階烘焙巧克力。可可脂含量決定：
      </p>
      <ul>
        <li><strong>融化後流動性</strong>：可可脂越多流動越順，淋面、裝飾才能薄而均勻</li>
        <li><strong>凝固後光澤</strong>：可可脂結晶形式（β 晶型）形成鏡面光澤</li>
        <li><strong>入口即化</strong>：接近人體溫度的熔點，入口快速融化釋放風味</li>
      </ul>
      <p>
        一般超市的「烘焙巧克力」或「巧克力磚」多含植物油替代部分可可脂，流動性差、光澤低。做高階甜點（馬卡龍夾餡、塔類淋面）必須用 couverture。</p>

      <h2 id="tempering">調溫 vs 非調溫：pre-tempered 的便利</h2>
      <p>
        調溫（tempering）是將巧克力加熱到 45°C，降溫至 27°C，再升溫到 31°C（黑巧克力版本），讓可可脂形成穩定的 β-5 結晶型。正確調溫的巧克力凝固後光澤高、有清脆「啪」聲、常溫下不軟化。
      </p>
      <p>
        Valrhona、Callebaut、Cacao Barry 等品牌出廠時已預先調溫（pre-tempered）。你買來時直接融化到 40°C 再降至 31°C 使用，省略複雜的升降溫過程。這也是為什麼專業烘焙首選這幾個品牌。
      </p>

      <h2 id="brands">品牌比較：Valrhona vs Callebaut</h2>
      <table>
        <thead>
          <tr>
            <th>品牌</th>
            <th>風味特色</th>
            <th>定位</th>
            <th>價格</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Valrhona（法）</td>
            <td>細膩、單一產區可選</td>
            <td>高階甜點專業首選</td>
            <td>高</td>
          </tr>
          <tr>
            <td>Callebaut（比）</td>
            <td>平衡穩定、易操作</td>
            <td>工作室日常量用</td>
            <td>中</td>
          </tr>
          <tr>
            <td>Cacao Barry（法）</td>
            <td>風味純淨、偏中性</td>
            <td>進階烘焙首選</td>
            <td>中高</td>
          </tr>
          <tr>
            <td>Guittard（美）</td>
            <td>深色香濃、不偏酸</td>
            <td>美式餅乾與 cookie 首選</td>
            <td>中</td>
          </tr>
        </tbody>
      </table>
      <p>
        新手建議從 Callebaut 811（54.5% 黑巧克力 callet）入門：風味穩定、易操作、價格合理、通路常見。熟悉後再往 Valrhona Guanaja 70%、Jivara 40%（牛奶）、Alpaco 66% 等單品嘗試。
      </p>

      <h2 id="buying-tips">家用採購建議</h2>
      <ul>
        <li><strong>形狀</strong>：fève（圓餅狀，Valrhona）、callet（小豆狀，Callebaut）、磚塊狀（需自切）——fève、callet 最方便家用。</li>
        <li><strong>包裝</strong>：真空或密封袋最佳，避免吸潮結塊。開封後倒入密封罐，陰涼乾燥處可保存 1 年。</li>
        <li><strong>不要冷藏</strong>：冷藏會在表面形成「糖 bloom」（白霜），影響外觀與融化順暢度。</li>
        <li><strong>不同百分比分開購買</strong>：小量 200g / 500g 包裝試用，熟悉後再買 1kg 量販。</li>
      </ul>
      <p>
        選對巧克力後，建議搭配{" "}
        <Link href="/zh/articles/chocolate-chip-cookies" className="text-brand hover:underline">
          零失敗濃郁巧克力餅乾
        </Link>
        ，用 Jacques Torres 與 Kenji 的配方好好發揮。
      </p>
    </>
  );
}
