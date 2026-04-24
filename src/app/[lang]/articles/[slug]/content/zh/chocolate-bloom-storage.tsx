import Link from "next/link";

export default function ChocolateBloomGuide() {
  return (
    <>
      <p>
        打開一盒久違的巧克力，發現表面出現白色霧狀斑塊——這是「白化」（chocolate bloom），巧克力保存最常見的狀況。Bakers Authority、Hill Country Chocolate 等專業資源指出：白化雖不影響食安，但會讓口感與外觀嚴重下降。本文拆解兩種白化與預防方法。
      </p>

      <h2 id="two-types">兩種白化：脂霜 vs 糖霜</h2>
      <p>
        白化分兩類，成因完全不同：
      </p>
      <table>
        <thead>
          <tr>
            <th>類型</th>
            <th>英文</th>
            <th>成因</th>
            <th>外觀</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>脂霜</td>
            <td>Fat Bloom</td>
            <td>溫度變動</td>
            <td>均勻灰白霧狀</td>
          </tr>
          <tr>
            <td>糖霜</td>
            <td>Sugar Bloom</td>
            <td>濕度過高</td>
            <td>不均勻白點顆粒</td>
          </tr>
        </tbody>
      </table>

      <h2 id="fat-bloom">脂霜：溫度變動的結果</h2>
      <p>
        脂霜發生機制：可可脂在巧克力中以多種結晶形式存在（α、β'、β 等）。<strong>β 晶型</strong>是最穩定的結構，當巧克力經歷「加熱→冷卻→加熱→冷卻」的溫度循環時：
      </p>
      <ol>
        <li>可可脂部分融化（超過 25°C）</li>
        <li>融化的可可脂向表面遷移</li>
        <li>在表面重新結晶成「非 β 晶型」（多為 α 或 β'）</li>
        <li>不穩定晶型呈現灰白色、失去原本光澤</li>
      </ol>
      <p>
        常見原因：夏天機車運送、冬天暖氣房溫差、冰箱拿出常溫再放回等重複過程。
      </p>

      <h2 id="sugar-bloom">糖霜：濕度惹的禍</h2>
      <p>
        糖霜的化學機制：巧克力表面的糖遇到空氣中水蒸氣時：
      </p>
      <ol>
        <li>水分在巧克力表面凝結</li>
        <li>糖（蔗糖）溶解在水中</li>
        <li>水分蒸發後，糖重新結晶成粗粒</li>
        <li>表面形成粗糙、不均勻的白點</li>
      </ol>
      <p>
        常見原因：從冷藏直接取出巧克力（結露）、梅雨季或海邊倉儲、包裝破損。
      </p>

      <h2 id="storage">理想保存條件</h2>
      <p>
        依 Hill Country Chocolate、Zucchero Canada 等業界資源的共識：
      </p>
      <ul>
        <li><strong>溫度</strong>：16–20°C（60–68°F）</li>
        <li><strong>濕度</strong>：相對濕度 &lt; 55%</li>
        <li><strong>避光</strong>：陽光或強光會加速可可脂氧化</li>
        <li><strong>避味</strong>：巧克力吸味極強，避開油性、濃味食材</li>
        <li><strong>包裝</strong>：原包裝密封後再放氣密罐（雙層保護）</li>
      </ul>
      <p>
        <strong>台灣夏天高溫高濕是巧克力保存最難的季節</strong>。若室溫超過 25°C，建議：
      </p>
      <ul>
        <li>大量巧克力放到冷藏（4–8°C）</li>
        <li>冷藏前用保鮮膜緊密包裹（避免結露）</li>
        <li>取出使用時不拆包裝、靜置 1 小時回溫至室溫再拆封</li>
      </ul>

      <h2 id="fix">白化巧克力如何修復？</h2>
      <p>
        白化的巧克力<strong>完全無食安疑慮、仍可吃</strong>，但外觀與口感確實下降。處理方式：
      </p>
      <ul>
        <li>
          <strong>直接吃</strong>：脂霜影響口感（失去脆度），糖霜影響質地（粗粒感），但風味相近原本。
        </li>
        <li>
          <strong>融化重做</strong>：加熱融化後重新調溫（黑巧克力：45°C→27°C→31°C），可恢復光澤與脆度。但重複調溫會讓風味漸弱。
        </li>
        <li>
          <strong>烘焙使用</strong>：最推薦——做布朗尼、巧克力餅乾、甘納許等烘焙應用，白化完全看不出來，風味也不受影響。
        </li>
      </ul>
      <p>
        想深入了解巧克力選購邏輯，接著讀{" "}
        <Link href="/zh/articles/baking-chocolate-selection" className="text-brand hover:underline">
          烘焙巧克力完整指南
        </Link>
        ，從選購到保存一次掌握。
      </p>
    </>
  );
}
