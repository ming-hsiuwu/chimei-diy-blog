import Link from "next/link";

export default function BakingPanMaterialsGuide() {
  return (
    <>
      <p>
        同樣的餅乾配方、同樣 180°C、同樣 12 分鐘——換一個材質的烤盤，成品可能從金黃酥脆變成底焦邊生。King Arthur Baking、Fat Daddio's 等專業品牌的共識：烤盤材質對成品的影響被嚴重低估。本文拆解四種常見材質的物理特性與家用建議。
      </p>

      <h2 id="heat-conductivity">熱傳導：鋁 vs 不鏽鋼差多少</h2>
      <p>
        熱傳導係數（thermal conductivity）決定烤盤吸熱後多快傳遞給食物：
      </p>
      <ul>
        <li><strong>純鋁：</strong>約 230 W/m·K（導熱冠軍）</li>
        <li><strong>陽極鋁：</strong>約 180 W/m·K（略低但穩定）</li>
        <li><strong>不沾塗層鋁：</strong>約 150 W/m·K（塗層減緩熱傳）</li>
        <li><strong>不鏽鋼 304：</strong>約 15 W/m·K（是鋁的 1/15）</li>
      </ul>
      <p>
        這就是為什麼同樣烤箱、不鏽鋼烤盤的餅乾要多 2–3 分鐘才上色，且容易中心還沒熟邊緣已過焦——熱能無法快速均勻傳遞。
      </p>

      <h2 id="anodized">陽極鋁：家用最均衡選擇</h2>
      <p>
        陽極鋁（anodized aluminum）是將純鋁浸入酸性電解液通電，讓表面氧化形成一層緻密的氧化鋁保護層。好處：
      </p>
      <ul>
        <li>不與番茄、檸檬、水果等酸性食材反應（純鋁會產生金屬味）</li>
        <li>耐刮、不易凹陷</li>
        <li>導熱比純鋁略低但穩定度更高</li>
        <li>不需塗層即是天然不沾（比氟素塗層更耐高溫）</li>
      </ul>
      <p>
        Fat Daddio's、USA Pan 等美國專業品牌以陽極鋁為主力。家用首選、長年不變。
      </p>

      <h2 id="nonstick">不沾塗層：方便但有壽命</h2>
      <p>
        主流不沾烤盤以 PTFE（鐵氟龍）或陶瓷塗層為主。便利性高，但必須接受以下限制：
      </p>
      <ul>
        <li>塗層壽命 3–5 年，之後會氧化脫落需更換</li>
        <li>避免金屬刮刀、避免空燒（無食物加熱）</li>
        <li>不適合 230°C 以上高溫烤焙（歐包、披薩）</li>
      </ul>
      <p>
        適合餅乾、瑪芬、塔皮等脫模容易影響成品外觀的品項。新手建議備 1 個不沾塔模、其他買陽極鋁。
      </p>

      <h2 id="stainless">不鏽鋼：專業但家用不易</h2>
      <p>
        不鏽鋼的導熱缺點明顯，但有兩個優勢讓它在專業廚房仍有地位：
      </p>
      <ul>
        <li>絕對耐久（可用 10 年以上不變形）</li>
        <li>完全不反應、食安等級最高</li>
      </ul>
      <p>
        家用若已有 3 年以上烘焙經驗、熟悉微調烤箱參數，可考慮不鏽鋼做長期投資。但新手一定會碰上熱點不均、餅乾翻車的狀況，極不建議當入門選擇。
      </p>

      <h2 id="buying-guide">採購與保養建議</h2>
      <ul>
        <li><strong>餅乾／瑪芬：</strong>陽極鋁平盤或瑪芬模</li>
        <li><strong>蛋糕／戚風：</strong>陽極鋁活底或固定底圓模</li>
        <li><strong>塔／派：</strong>不沾塗層活底塔模（脫模優先）</li>
        <li><strong>吐司／歐包：</strong>陽極鋁吐司模、耐高溫</li>
        <li><strong>商用場合：</strong>不鏽鋼或 hard-anodized 長效投資</li>
      </ul>
      <p>
        保養原則：陽極鋁與不鏽鋼不可進洗碗機（清潔劑會腐蝕陽極層）、使用後溫水輕刷、完全乾燥後收納。不沾烤盤只用矽膠或木製器具，避免刮傷塗層。
      </p>
      <p>
        買對烤盤後搭配{" "}
        <Link href="/zh/articles/home-oven-buying-guide" className="text-brand hover:underline">
          家用烤箱選購全攻略
        </Link>
        ，設備與耗材兩邊都對，烘焙才不會繞遠路。
      </p>
    </>
  );
}
