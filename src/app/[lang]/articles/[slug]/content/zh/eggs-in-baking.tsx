import Link from "next/link";

export default function EggsInBakingGuide() {
  return (
    <>
      <p>
        配方寫「3 顆全蛋」「2 個蛋白」「4 顆蛋黃」——為什麼這麼區分？Puratos、Serious Eats 的蛋科學文獻指出：蛋白與蛋黃在化學組成上差異極大，它們在烘焙中各有不可取代的角色。本文拆解三種型態的功能與使用邏輯。
      </p>

      <h2 id="composition">蛋白與蛋黃的化學組成</h2>
      <table>
        <thead>
          <tr>
            <th>成分</th>
            <th>蛋白</th>
            <th>蛋黃</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>水</td>
            <td>88%</td>
            <td>49%</td>
          </tr>
          <tr>
            <td>蛋白質</td>
            <td>10%</td>
            <td>17%</td>
          </tr>
          <tr>
            <td>脂肪</td>
            <td>0%</td>
            <td>32%</td>
          </tr>
          <tr>
            <td>礦物質</td>
            <td>微量</td>
            <td>2%</td>
          </tr>
        </tbody>
      </table>
      <p>
        這個差異決定了兩者在烘焙中的不同角色：蛋白以水分與蛋白質為主、蛋黃含大量脂肪與乳化劑（卵磷脂）。
      </p>

      <h2 id="egg-whites">蛋白：起泡、結構、乾度</h2>
      <p>
        蛋白在烘焙中的三個主要功能：
      </p>
      <ul>
        <li>
          <strong>起泡（leavening）</strong>：打發蛋白時，蛋白質解開摺疊形成網狀結構，包覆空氣。烘烤時氣泡膨脹，成品變得蓬鬆。戚風、蛋白霜、馬卡龍、舒芙蕾都靠蛋白起泡。
        </li>
        <li>
          <strong>提供結構</strong>：蛋白凝固後形成堅實骨架，支撐成品形狀。
        </li>
        <li>
          <strong>降低濕度</strong>：蛋白的 88% 水分在烘烤中會蒸發，讓成品偏乾爽。天使蛋糕、舒芙蕾的輕盈感來自此。
        </li>
      </ul>

      <h2 id="egg-yolks">蛋黃：乳化、豐腴、保濕</h2>
      <p>
        蛋黃含 32% 脂肪，功能與蛋白相反：
      </p>
      <ul>
        <li>
          <strong>乳化劑</strong>：蛋黃中的卵磷脂（lecithin）是天然乳化劑，讓油脂與水分均勻結合。美乃滋、卡士達、冰淇淋、蛋奶醬都靠蛋黃乳化。
        </li>
        <li>
          <strong>豐腴風味</strong>：脂肪帶來濃郁口感與香氣，是高階甜點（法式奶醬、布里歐修、巧克力慕斯）風味的基礎。
        </li>
        <li>
          <strong>保濕效果</strong>：脂肪與蛋黃中的糖結合，延緩澱粉老化、讓成品濕潤度高。布朗尼、磅蛋糕常多加蛋黃增加保濕。
        </li>
        <li>
          <strong>上色</strong>：蛋黃中的類胡蘿蔔素讓成品呈金黃色。麵包刷蛋液（brush wash）就是利用此特性。
        </li>
      </ul>

      <h2 id="whole-eggs">全蛋：萬用結構</h2>
      <p>
        全蛋是蛋白與蛋黃的平衡體，適合「中庸需求」：
      </p>
      <ul>
        <li>
          <strong>日式海綿蛋糕</strong>：全蛋打發（whole egg foam），取蛋白的氣泡與蛋黃的乳化。
        </li>
        <li>
          <strong>磅蛋糕、餅乾</strong>：全蛋結構剛好（不需要特別蓬鬆或特別豐腴）。
        </li>
        <li>
          <strong>布丁、卡士達</strong>：全蛋為凝固主力，蛋黃補乳化與風味。
        </li>
      </ul>
      <p>
        全蛋打發比純蛋白打發穩定度略低，但速度快、一次取材、成品平衡。日系甜點愛用全蛋打發法。
      </p>

      <h2 id="size-conversion">蛋的大小換算</h2>
      <p>
        配方中的「1 顆蛋」常指「去殼 50g 的 L 號蛋」（美系與歐系標準）。台灣蛋的分級：
      </p>
      <ul>
        <li><strong>XL 特大</strong>：去殼 &gt; 60g</li>
        <li><strong>L 大</strong>：去殼 50–60g（國際配方基準）</li>
        <li><strong>M 中</strong>：去殼 42–50g</li>
        <li><strong>S 小</strong>：去殼 35–42g</li>
      </ul>
      <p>
        精準配方建議用秤量克數（如「蛋黃 60g」），不要用顆數。配方若只給顆數而你只有 M 號蛋，需要多加 1 顆補足；若有 XL 號蛋則減蛋白或量取所需重量。
      </p>
      <p>
        想應用蛋白打發到戚風，接著讀{" "}
        <Link href="/zh/articles/japanese-castella-cake" className="text-brand hover:underline">
          日式蜂蜜 Castella
        </Link>
        ，看蛋糖全蛋打發的實際操作。
      </p>
    </>
  );
}
