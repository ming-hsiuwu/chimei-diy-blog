import Link from "next/link";

export default function WhippingCreamGuide() {
  return (
    <>
      <p>
        走進烘焙材料行的冷藏櫃，看到「動物性鮮奶油 35%」「植物性鮮奶油」兩個選項，一個 500ml 賣 280 元，另一個賣 120 元。價差的原因不只是乳脂——兩者在化學組成、打發穩定度、風味表現都是完全不同的產品。本文整理兩者的本質差異與適用場景。
      </p>

      <h2 id="composition">化學組成差異</h2>
      <p>
        Palsgaard 等乳品工業文獻的定義：
      </p>
      <ul>
        <li>
          <strong>動物性鮮奶油（dairy whipping cream）：</strong>單純由牛奶分離所得、乳脂 30–36%，其餘為水、少量乳蛋白與乳糖。無額外添加物。
        </li>
        <li>
          <strong>植物性鮮奶油（non-dairy whipping cream）：</strong>以植物油（棕櫚油、椰子油為主）為脂肪基底，搭配乳化劑、穩定劑、糖、鹽、香料調製。脂肪含量多落在 25%，部分低脂版可至 12%。
        </li>
      </ul>
      <p>
        這個差異決定了兩者的所有後續行為——穩定度、風味、打發操作都是脂肪類型的延伸。
      </p>

      <h2 id="whipping">打發穩定度的科學</h2>
      <p>
        鮮奶油打發的原理是「脂肪球部分結晶、相互連結形成網絡包覆氣泡」。兩者的表現：
      </p>
      <ul>
        <li>
          <strong>動物性：</strong>需要脂肪維持部分結晶（4–10°C 之間），打發過頭會油水分離。風味濃但保形力隨時間遞減。
        </li>
        <li>
          <strong>植物性：</strong>添加乳化劑（如 DATEM、E471），讓脂肪球結晶度可控。幾乎在室溫也能打發，保形力強。
        </li>
      </ul>
      <p>
        專業蛋糕店常用「動物加植物 1:1」混合打發，取動物的風味與植物的穩定度。
      </p>

      <h2 id="flavor">風味與口感</h2>
      <p>
        動物性有明顯乳香、入口即化、甜度低但餘韻長；植物性帶明顯奶油香料味（增強感），甜度較高、入口後味偏油。做品嚐型甜點（泡芙、提拉米蘇）選動物；做擠花裝飾選植物。
      </p>

      <h2 id="use-cases">適用場景分配</h2>
      <table>
        <thead>
          <tr>
            <th>場景</th>
            <th>推薦</th>
            <th>理由</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>提拉米蘇、泡芙內餡</td>
            <td>動物性</td>
            <td>風味為主，保形要求低</td>
          </tr>
          <tr>
            <td>裱花裝飾蛋糕</td>
            <td>植物性或混合</td>
            <td>常溫保形 2–3 小時</td>
          </tr>
          <tr>
            <td>慕斯蛋糕</td>
            <td>動物性</td>
            <td>冷藏保形、風味優先</td>
          </tr>
          <tr>
            <td>夏季婚禮蛋糕</td>
            <td>植物性</td>
            <td>高溫不塌</td>
          </tr>
          <tr>
            <td>布丁、panna cotta</td>
            <td>動物性</td>
            <td>風味純淨、凝結佳</td>
          </tr>
        </tbody>
      </table>

      <h2 id="brands">台灣常見品牌與規格</h2>
      <ul>
        <li><strong>動物性：</strong>Elle & Vire 愛樂薇 35%、鐵塔 35%、Anchor 安佳 36%、PRÉSIDENT 35%。規格多為 200ml / 500ml / 1L</li>
        <li><strong>植物性：</strong>富比士、雀巢 Top 等。規格多為 1L 瓶裝</li>
      </ul>
      <p>
        新手建議先買 500ml 動物性 35% 練手感，熟悉打發判斷後再依裝飾需求試植物性。購買時留意保存期與冷鏈——動物性鮮奶油到溫度超過 10°C 就會開始乳化分離。
      </p>
      <p>
        打發前建議搭配{" "}
        <Link href="/zh/articles/butter-salted-vs-unsalted" className="text-brand hover:underline">
          無鹽 vs 有鹽奶油選用指南
        </Link>
        ，把乳製品家族整套搞懂。
      </p>
    </>
  );
}
