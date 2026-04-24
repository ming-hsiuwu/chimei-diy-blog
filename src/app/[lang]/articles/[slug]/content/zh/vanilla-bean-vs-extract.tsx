import Link from "next/link";

export default function VanillaGuide() {
  return (
    <>
      <p>
        走進烘焙材料區，同樣標示「香草」的產品：香草莢一支賣 150 元、香草精 30ml 賣 200 元、香草醬 60g 賣 550 元。價差 10 倍的原因？不同形式的香草在化學成分、保存、用途上差異極大。Nielsen-Massey、McCormick 等香草大廠有明確的使用建議。
      </p>

      <h2 id="three-forms">三種形式的化學差異</h2>
      <table>
        <thead>
          <tr>
            <th>形式</th>
            <th>組成</th>
            <th>風味強度</th>
            <th>可見籽</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>香草莢</td>
            <td>整條未處理的發酵蘭花莢</td>
            <td>最強</td>
            <td>有（刮籽使用）</td>
          </tr>
          <tr>
            <td>香草精</td>
            <td>香草莢酒精萃取（透明液）</td>
            <td>中</td>
            <td>無</td>
          </tr>
          <tr>
            <td>香草醬</td>
            <td>香草籽加糖漿加黃原膠</td>
            <td>強</td>
            <td>有</td>
          </tr>
          <tr>
            <td>人工香草精（vanillin）</td>
            <td>化學合成香草醛</td>
            <td>單薄</td>
            <td>無</td>
          </tr>
        </tbody>
      </table>
      <p>
        天然香草含超過 250 種揮發性化合物，人工 vanillin 只是其中 1 種。這是為什麼天然香草風味遠比人工合成豐富。
      </p>

      <h2 id="regions">產區差異：馬達加斯加／大溪地／墨西哥</h2>
      <ul>
        <li>
          <strong>馬達加斯加（Bourbon）</strong>：全球 80% 產量，風味「經典香草」——濃郁、圓潤、帶焦糖尾韻。做卡士達、冰淇淋、焦糖布丁首選。
        </li>
        <li>
          <strong>大溪地（Tahitian）</strong>：含較多茴香酚（anethole），風味「花香、果香、櫻桃味」。適合搭配水果、海鮮。
        </li>
        <li>
          <strong>墨西哥</strong>：香草的原產地，風味「深厚、帶木質與煙燻香」。適合巧克力甜點、慕斯。
        </li>
        <li>
          <strong>烏干達、印尼</strong>：新興產區，風味偏平實、價格較親民，適合大量使用。
        </li>
      </ul>

      <h2 id="use-cases">什麼時候用哪種？</h2>
      <p>
        根據成品特性選擇：
      </p>
      <ul>
        <li><strong>卡士達、冰淇淋、焦糖布丁</strong>：香草莢（需見籽、風味濃）</li>
        <li><strong>餅乾、蛋糕、馬芬</strong>：香草精（不需見籽、風味被蓋過無所謂）</li>
        <li><strong>馬卡龍、奶油霜、白巧克力甘納許</strong>：香草醬（需要明顯可見的香草籽點綴）</li>
        <li><strong>糖霜、蛋白霜</strong>：香草精（香草醬的膠質會影響質地）</li>
      </ul>
      <p>
        Martha Stewart、McCormick 的基本原則：<strong>「能被看到籽的場景用香草莢或醬、會被融入麵糊的場景用精」</strong>。
      </p>

      <h2 id="substitution">替換比例</h2>
      <ul>
        <li>1 支香草莢 ≈ 1 大匙香草精 ≈ 1 大匙香草醬</li>
        <li>1 大匙天然香草精 ≈ 1 大匙人工 vanillin（但風味層次差）</li>
        <li>替換香草莢時：用 1 小匙濃縮香草萃取液（extra strong）效果最接近</li>
      </ul>

      <h2 id="storage">保存與活用</h2>
      <p>
        三種香草產品的保存：
      </p>
      <ul>
        <li>
          <strong>香草莢</strong>：原包裝密封、陰涼避光保存，可放 2 年。若變乾硬可泡牛奶或白蘭姆中復軟。
        </li>
        <li>
          <strong>香草精</strong>：瓶口旋緊、常溫保存可達 5 年以上。酒精含量 35%+ 本身就是防腐劑。
        </li>
        <li>
          <strong>香草醬</strong>：開封後冷藏保存 6 個月。久放會析出糖晶、搖勻後可繼續使用。
        </li>
      </ul>
      <p>
        活用：用過的香草莢（已刮出籽）<strong>不要丟</strong>——放入細砂糖罐中，2 週後變成「香草糖」，做餅乾、巧克力都有淡淡香草香。也可放入酒中浸泡再製成自製香草精。
      </p>
      <p>
        想深入掌握各種烘焙原料，接著讀{" "}
        <Link href="/zh/articles/baking-sugars-complete-guide" className="text-brand hover:underline">
          烘焙糖類完整對照
        </Link>
        ，糖類家族一次搞懂。
      </p>
    </>
  );
}
