import Link from "next/link";

export default function YeastStorageGuide() {
  return (
    <>
      <p>
        酵母是活的——它是單細胞真菌，需要溫度、水分、糖份才能活。保存錯誤的酵母會失去活性，麵團怎麼發都起不來。Bob's Red Mill、Master Class 的建議一致：<strong>依酵母類型分流保存</strong>。乾酵母冷凍、新鮮酵母冷藏、老麵勤餵。本文一次整理。
      </p>

      <h2 id="types">三種酵母：活力與保存差異</h2>
      <table>
        <thead>
          <tr>
            <th>類型</th>
            <th>含水率</th>
            <th>活性</th>
            <th>用法</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>活性乾酵母（Active Dry）</td>
            <td>5–6%</td>
            <td>需先溫水活化</td>
            <td>甜麵包、歐包</td>
          </tr>
          <tr>
            <td>即發乾酵母（Instant）</td>
            <td>4–5%</td>
            <td>直接混入麵粉</td>
            <td>家用吐司、快速配方</td>
          </tr>
          <tr>
            <td>新鮮酵母（Fresh）</td>
            <td>70%</td>
            <td>塊狀、直接捏碎</td>
            <td>專業歐包、風味偏好</td>
          </tr>
        </tbody>
      </table>
      <p>
        三種的「活細胞密度」不同：新鮮酵母每克約 100 億個活細胞，乾酵母約 150 億個（因乾燥濃縮）。用量換算：1g 新鮮酵母 ≈ 0.4g 乾酵母。
      </p>

      <h2 id="dry-yeast">乾酵母：冷凍才是王道</h2>
      <p>
        乾酵母的保存期依狀態分三段：
      </p>
      <ul>
        <li><strong>未開封（常溫）</strong>：保存期 2 年</li>
        <li><strong>開封後（冷藏）</strong>：4 個月內用完</li>
        <li><strong>開封後（冷凍）</strong>：6 個月內用完</li>
      </ul>
      <p>
        The Kitchn 建議：開封後直接分裝入氣密夾鏈袋、擠出空氣、冷凍保存。酵母細胞在冷凍時進入「休眠」狀態、活細胞死亡率極低。<strong>從冷凍取出後不需退冰，可直接使用</strong>（乾酵母接觸溫水即復活）。
      </p>

      <h2 id="fresh-yeast">新鮮酵母：冷藏 2 週極限</h2>
      <p>
        新鮮酵母是塊狀、淡米色、摸起來像果凍狀。台灣較少見，專業歐包店才會大量使用。
      </p>
      <ul>
        <li><strong>冷藏（0–4°C）</strong>：2 週內用完</li>
        <li><strong>冷凍</strong>：不建議。細胞壁會被冰晶刺破，活性大幅下降</li>
        <li><strong>判斷新鮮</strong>：表面乾硬、顏色轉深褐、或有酸味時代表已失活</li>
      </ul>

      <h2 id="sourdough">天然酵種老麵：持續餵養</h2>
      <p>
        老麵（sourdough starter）是自己培養的野生酵母與乳酸菌共生體，保存邏輯完全不同於商業酵母：
      </p>
      <ul>
        <li><strong>每日使用</strong>：常溫存放、每天餵 1 次麵粉加水（1:1:1 的比例）</li>
        <li><strong>每週使用</strong>：冷藏保存、每週餵 1 次</li>
        <li><strong>暫停使用（1 個月以內）</strong>：冷藏、不餵</li>
        <li><strong>暫停使用（1 個月以上）</strong>：冷凍（先餵一次、冷藏 2 小時、再冷凍）</li>
      </ul>
      <p>
        冷凍老麵復活需要連續餵養 3 天才能恢復活性。完全凍死的老麵（6 個月以上冷凍）建議重新培養。
      </p>

      <h2 id="viability-test">酵母活性測試法</h2>
      <p>
        懷疑酵母是否還活著時做「活性測試」：
      </p>
      <ol>
        <li>取 1 小匙酵母放入杯中</li>
        <li>加入 100ml 溫水（38–43°C）+ 1 小匙砂糖，攪拌均勻</li>
        <li>靜置 10 分鐘，觀察表面</li>
        <li>活酵母：產生明顯泡沫、膨脹 2–3 倍</li>
        <li>死酵母：無變化或僅微泡</li>
      </ol>
      <p>
        這個測試花 10 分鐘，能避免整個麵團發不起來的慘劇。新買的酵母第一次使用前、或冷凍半年以上的酵母，都建議先測試。
      </p>
      <p>
        想深入了解發酵原理，接著讀{" "}
        <Link href="/zh/articles/homemade-croissants" className="text-brand hover:underline">
          家庭版可頌
        </Link>
        的三折三次操作，把酵母與麵團互動的理解一次串起來。
      </p>
    </>
  );
}
