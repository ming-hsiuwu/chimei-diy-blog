import Link from "next/link";

export default function BreadFreezingGuide() {
  return (
    <>
      <p>
        自家烤的吐司、歐包吃不完，放室溫 3 天就發霉、放冷藏質地變粗——最好的選擇其實是冷凍。但大部分人冷凍失敗，原因在三件事：熱著就包、沒有分切、包裝不夠密。本文依 USDA FSIS 官方冷凍食品安全指引整理正確做法。
      </p>

      <h2 id="when-to-freeze">什麼時候冷凍：越早越好</h2>
      <p>
        出爐後越早冷凍，保存品質越好。最佳時機：
      </p>
      <ul>
        <li><strong>出爐後 30 分鐘～2 小時</strong>：中心溫度降至室溫（約 25°C）、但尚未開始變乾的時間窗。</li>
        <li><strong>不要等超過 4 小時</strong>：超過後麵包開始老化（澱粉 retrogradation），冷凍只能保留「老化後的狀態」。</li>
        <li><strong>不要熱著就冷凍</strong>：內部蒸氣遇冷會在包裝內結冰，化冰後麵包濕黏，霉菌甚至能在 –18°C 下於 72 小時內發芽（USDA 研究數據）。</li>
      </ul>

      <h2 id="packaging">包裝：避免凝水與冷凍灼傷</h2>
      <p>
        冷凍麵包的敵人是「冷凍灼傷」（freezer burn）——水分升華後留下的乾硬區塊。做法：
      </p>
      <ol>
        <li><strong>分切</strong>：吐司切片、歐包對切，減少回溫時間與食用浪費。</li>
        <li><strong>第一層：保鮮膜 / 烘焙紙</strong>包緊貼合麵包表面，隔絕空氣。</li>
        <li><strong>第二層：食品級 PE 夾鏈袋或真空袋</strong>，擠出空氣密封。雙層包裝能有效避免冷凍灼傷與冰箱異味滲入。</li>
        <li><strong>標示日期</strong>：以油性筆或標籤寫入冷凍日期，管理期限。</li>
      </ol>

      <h2 id="duration">冷凍期限：USDA 的 3 個月原則</h2>
      <p>
        USDA FSIS 的食品冷凍指引明確指出：麵包類在 –18°C 穩定冷凍下可無限期安全食用（冷凍本身不會讓食物變不安全），但品質最佳期為 <strong>3 個月內</strong>。
      </p>
      <ul>
        <li>0–1 個月：幾乎與新鮮時相同</li>
        <li>1–3 個月：品質可接受，風味略微下降</li>
        <li>3–6 個月：明顯乾澀、風味流失，但仍安全</li>
        <li>6 個月+：建議丟棄</li>
      </ul>

      <h2 id="thawing">三種回溫方法</h2>
      <table>
        <thead>
          <tr>
            <th>方法</th>
            <th>時間</th>
            <th>適合對象</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>烤箱直烤</td>
            <td>180°C 5–8 分鐘</td>
            <td>吐司、歐包、法棍（最推薦）</td>
          </tr>
          <tr>
            <td>冷藏慢退冰</td>
            <td>8–12 小時 + 室溫 30 分鐘</td>
            <td>布里歐、可頌、整顆軟麵包</td>
          </tr>
          <tr>
            <td>微波 + 烤</td>
            <td>微波 30 秒 → 烤 2 分鐘</td>
            <td>吐司類緊急用</td>
          </tr>
        </tbody>
      </table>
      <p>
        烤箱直烤是萬用冠軍——不需預先退冰，直接冰凍放入預熱烤箱，外皮恢復脆度、內心軟彈，比新鮮時甚至更好。只用微波則會失去外皮脆度，建議當作「最後不得已」的選項。
      </p>

      <h2 id="common-mistakes">常見 NG</h2>
      <ul>
        <li><strong>熱著就封袋冷凍</strong>：結冰形成凝水，化冰後發霉</li>
        <li><strong>整條不切就冷凍</strong>：回溫時外皮已乾、內部還硬</li>
        <li><strong>反覆化冰再冷凍</strong>：澱粉老化、口感粗糙、風險變高</li>
        <li><strong>用普通塑膠袋單層包</strong>：冷凍灼傷快速、容易吸附冰箱異味</li>
      </ul>
      <p>
        麵包冷凍只是個起點。想把塔皮、派皮也建好冷凍庫存系統，可以接著看{" "}
        <Link href="/zh/articles/tart-shell-freezing-guide" className="text-brand hover:underline">
          塔皮冷凍保存完整指南
        </Link>
        。
      </p>
    </>
  );
}
