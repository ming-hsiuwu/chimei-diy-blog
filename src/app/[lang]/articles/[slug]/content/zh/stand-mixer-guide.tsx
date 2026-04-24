import Link from "next/link";

export default function StandMixerGuide() {
  return (
    <>
      <p>
        「買 KitchenAid 才是烘焙人的標配」這句話你可能聽過很多次。但實際上桌上型攪拌機的選擇遠不只看品牌——馬達扭力、鍋容、頭部結構才是決定你用得順不順的核心。本文整理 KitchenAid Artisan、Kenwood Chef Titanium、Smeg SMF01 三大主流機型的實際差異與家用建議。
      </p>

      <h2 id="wattage-myth">瓦數迷思：扭力才是重點</h2>
      <p>
        你會看到 KitchenAid Artisan 325W、Kenwood Titanium Chef 1200W、Smeg 800W 這樣的差距，以為 Kenwood 強 4 倍。實際上根據 Everything Kitchens 與 Woman & Home 的評測：<strong>輸入瓦數只是參考，真正重要的是馬達在低轉速下能產生的扭力</strong>。
      </p>
      <p>
        KitchenAid 透過齒輪減速機構，讓 325W 馬達在慢速攪拌時能產生穩定扭力，1kg 吐司麵團完全應付得了。大瓦數（如 Kenwood 1200W）優勢在長時間高轉速不過熱，適合甜點工作室每天連揉 3–5 批麵團的使用強度。家用一週 1–2 次烘焙，325W–575W 已足夠。
      </p>

      <h2 id="bowl-capacity">鍋容：5L 是家用分水嶺</h2>
      <p>
        不同容量的對應用量：
      </p>
      <ul>
        <li><strong>3.3L（KitchenAid Mini）</strong>：一次打 2 顆蛋白、500g 麵粉為限。單身或雙人家庭可，但做 6 吋戚風可能會溢出。</li>
        <li><strong>4.8L（KitchenAid Artisan / Smeg SMF01）</strong>：家用黃金規格。一次打 8 顆蛋的戚風、1 條吐司麵團毫無壓力。</li>
        <li><strong>5.7L（Kenwood Chef 750W）</strong>：中型家用或接單初期甜點工作室。</li>
        <li><strong>6.7L+（Kenwood Chef XL / KitchenAid Pro）</strong>：工作室起步以上、一次兩條吐司或雙倍配方。</li>
      </ul>

      <h2 id="head-type">頭部結構：頭抬式 vs 升降式</h2>
      <p>
        兩種結構的差異：
      </p>
      <ul>
        <li>
          <strong>頭抬式（tilt-head）</strong>：KitchenAid Artisan、Smeg SMF01 都是這類，上方攪拌頭可翻起。優點是取拆鍋快、加料直觀；缺點是處理大量重物料時，頭部會在高速下微晃。
        </li>
        <li>
          <strong>升降式（bowl-lift）</strong>：KitchenAid Pro、Kenwood Chef 屬此類，鍋子可上下升降、攪拌頭固定。優點是穩定度高、適合重物料；缺點是體積大、操作手感較笨重。
        </li>
      </ul>
      <p>
        家用、5L 以下選頭抬式；工作室起步、6L 以上選升降式。這是業界通則。
      </p>

      <h2 id="three-brands">KitchenAid / Kenwood / Smeg 比較</h2>
      <table>
        <thead>
          <tr>
            <th>品牌機型</th>
            <th>瓦數 / 鍋容</th>
            <th>頭部結構</th>
            <th>定位</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>KitchenAid Artisan</td>
            <td>325W / 4.8L</td>
            <td>頭抬式</td>
            <td>家用經典、配件最多</td>
          </tr>
          <tr>
            <td>KitchenAid Pro 600</td>
            <td>575W / 5.7L</td>
            <td>升降式</td>
            <td>重度家用、入門工作室</td>
          </tr>
          <tr>
            <td>Kenwood Chef Titanium XL</td>
            <td>1200W / 6.7L</td>
            <td>升降式</td>
            <td>工作室首選、歐包連揉</td>
          </tr>
          <tr>
            <td>Smeg SMF01</td>
            <td>800W / 4.8L</td>
            <td>頭抬式</td>
            <td>設計優先、安靜低噪</td>
          </tr>
        </tbody>
      </table>

      <h2 id="buying-tips">新手採購建議</h2>
      <ul>
        <li><strong>預算 15,000–20,000 元</strong>：KitchenAid Artisan 經典款，配件易取得、二手保值。</li>
        <li><strong>預算 20,000–30,000 元</strong>：看重設計選 Smeg、看重扭力選 Kenwood Chef、要求配件生態選 KitchenAid Pro。</li>
        <li><strong>甜點工作室起步</strong>：直上 Kenwood Chef XL 或 KitchenAid Pro 以上升降式機型。</li>
        <li><strong>噪音敏感</strong>：Smeg Direct Drive 是最安靜選擇。</li>
      </ul>
      <p>
        買完攪拌機建議搭配{" "}
        <Link href="/zh/articles/how-to-choose-flour-for-beginners" className="text-brand hover:underline">
          新手挑麵粉完整指南
        </Link>
        ，把基礎原料也搞懂再開始練吐司、蛋糕。
      </p>
    </>
  );
}
