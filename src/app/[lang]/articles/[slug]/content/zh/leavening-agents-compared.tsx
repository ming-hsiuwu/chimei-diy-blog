import Link from "next/link";

export default function LeaveningAgentsGuide() {
  return (
    <>
      <p>
        「這配方要加泡打粉還是小蘇打？加酵母可以嗎？」——這些其實是完全不同的膨脹劑，背後的化學原理差異極大。K-State、Bob's Red Mill 等烘焙科學資源把三者分成兩大類：化學膨脹（泡打粉、小蘇打）與生物膨脹（酵母）。本文拆解反應機制與使用邏輯。
      </p>

      <h2 id="three-types">三類膨脹劑的本質差異</h2>
      <table>
        <thead>
          <tr>
            <th>種類</th>
            <th>反應類型</th>
            <th>CO₂ 產出時機</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>小蘇打</td>
            <td>遇酸的化學反應</td>
            <td>遇濕立即釋放</td>
          </tr>
          <tr>
            <td>泡打粉</td>
            <td>自帶酸的雙段反應</td>
            <td>遇濕＋遇熱兩次釋放</td>
          </tr>
          <tr>
            <td>酵母</td>
            <td>活細胞發酵</td>
            <td>發酵 1–4 小時持續釋放</td>
          </tr>
        </tbody>
      </table>

      <h2 id="baking-soda">小蘇打：單段鹼性反應</h2>
      <p>
        小蘇打（sodium bicarbonate, NaHCO₃）是鹼性鹽類。化學方程式：
      </p>
      <p>
        <strong>NaHCO₃ + 酸 → CO₂ + H₂O + 鈉鹽</strong>
      </p>
      <p>
        必須「有酸」才會反應。常見酸性材料：優酪乳、白脫牛奶（buttermilk）、檸檬汁、醋、紅糖、可可粉（未鹼化）、糖蜜、果泥。<strong>無酸性材料的配方加小蘇打會留下「鹼味」</strong>，這是最常見的錯誤。
      </p>
      <p>
        小蘇打反應快速——拌入濕性材料後 CO₂ 立即產生，若麵糊放置超過 15 分鐘會「洩氣」，所以使用小蘇打的配方必須「即拌即烤」。
      </p>

      <h2 id="baking-powder">泡打粉：雙段自帶酸</h2>
      <p>
        泡打粉 = 小蘇打 + 酸粉末（monocalcium phosphate, sodium aluminum sulfate）+ 玉米澱粉（隔離劑）。「雙效泡打粉」（double-acting）是最常見類型，分兩階段作用：
      </p>
      <ol>
        <li><strong>第一階段（遇水）</strong>：混合液體時，一部分酸與小蘇打反應產生 CO₂</li>
        <li><strong>第二階段（遇熱 60°C+）</strong>：烤箱加熱後，另一部分酸才啟動反應，補第二波膨脹</li>
      </ol>
      <p>
        這個雙段設計讓麵糊即便放置 30–60 分鐘再烤，仍有足夠膨脹力。適合需要「提前準備」的配方，如瑪芬、磅蛋糕、司康。
      </p>

      <h2 id="yeast">酵母：活細胞發酵</h2>
      <p>
        酵母（Saccharomyces cerevisiae）是活的單細胞真菌。透過「糖 + 酵母 → CO₂ + 乙醇」的發酵反應產氣。
      </p>
      <p>
        與化學膨脹劑的關鍵差異：
      </p>
      <ul>
        <li><strong>時間</strong>：發酵需 1–4 小時（依溫度、糖份、酵母量）</li>
        <li><strong>風味</strong>：副產物（乙醇、有機酸、酯類）讓麵包有豐富風味</li>
        <li><strong>筋性強化</strong>：發酵過程中的酸性環境讓麩質網絡更有彈性</li>
        <li><strong>受溫度影響</strong>：25–35°C 最活躍、40°C+ 死亡、4°C 以下休眠</li>
      </ul>

      <h2 id="substitution">互換原則與計算</h2>
      <p>
        三者不能完全替換，但有部分轉換公式：
      </p>
      <ul>
        <li>
          <strong>1 小匙泡打粉</strong> ≈ <strong>0.25 小匙小蘇打 + 0.5 小匙白醋／檸檬汁</strong>
        </li>
        <li>
          <strong>1 小匙小蘇打</strong>（含酸性配方）≈ <strong>4 小匙泡打粉</strong>（體積較多、可能影響口感）
        </li>
        <li>
          <strong>酵母與化學膨脹劑無法互換</strong>——麵包用化學膨脹做不出風味；蛋糕用酵母會有怪味與筋性過強。
        </li>
      </ul>
      <p>
        想深入了解酵母保存，接著讀{" "}
        <Link href="/zh/articles/yeast-storage-guide" className="text-brand hover:underline">
          酵母完整保存指南
        </Link>
        ，三類膨脹劑的理解就完整了。
      </p>
    </>
  );
}
