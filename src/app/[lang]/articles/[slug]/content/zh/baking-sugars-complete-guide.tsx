import Link from "next/link";

export default function BakingSugarsGuide() {
  return (
    <>
      <p>
        King Arthur Baking 的烘焙科學欄目有句話：「糖不是單一成分，它是家族。」同樣稱為「糖」，細砂、糖粉、二砂、muscovado 的化學組成差異極大——結晶大小決定融解速度、糖蜜比例決定保水度、含水率決定成品密度。這篇完整整理烘焙用的 8 種常見糖。
      </p>

      <h2 id="why-sugar-matters">糖在烘焙裡不只是甜度</h2>
      <p>
        糖在烘焙中至少扮演四個角色：
      </p>
      <ul>
        <li><strong>甜度來源</strong>：這個最明顯</li>
        <li><strong>梅納反應與焦糖化</strong>：決定上色與香氣</li>
        <li><strong>保水性</strong>：吸收水分、延緩澱粉老化</li>
        <li><strong>氣泡穩定</strong>：蛋白霜中糖的粒徑與濃度決定結構穩定性</li>
      </ul>
      <p>
        所以換糖不是單純「換甜度」。用糖粉做戚風會讓組織變緊實、用 muscovado 替代 brown sugar 會讓風味立刻提升一個層次，這些都來自糖的物理化學差異。
      </p>

      <h2 id="white-sugars">白糖家族：細砂、糖粉、caster</h2>
      <table>
        <thead>
          <tr>
            <th>名稱</th>
            <th>結晶大小</th>
            <th>用途</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>細砂糖（Granulated）</td>
            <td>0.5–1mm</td>
            <td>通用烘焙首選、奶油打發、簡易糖漿</td>
          </tr>
          <tr>
            <td>Caster 糖（Superfine）</td>
            <td>0.2–0.5mm</td>
            <td>蛋白霜、馬卡龍、瑪德蓮、慕斯</td>
          </tr>
          <tr>
            <td>糖粉（Confectioners）</td>
            <td>極細粉 + 2–3% 玉米澱粉</td>
            <td>糖霜、翻糖、撒面、糖衣</td>
          </tr>
        </tbody>
      </table>
      <p>
        Caster 比細砂細，融解快 30%，對 egg foam 類配方影響最明顯。糖粉因含澱粉，直接拿來做蛋糕會讓組織變稠黏，只用在糖霜、撒面、無蛋蛋白霜。
      </p>

      <h2 id="brown-sugars">紅棕糖家族：二砂、brown、muscovado</h2>
      <p>
        台灣家用最常見的紅糖是「二砂糖」（台糖產品）；西式烘焙則常見 light / dark brown sugar 與 muscovado。三者的糖蜜含量是關鍵差異：
      </p>
      <ul>
        <li>
          <strong>二砂糖</strong>：精製度介於細砂與 brown 之間，糖蜜殘留 2–3%，風味溫和帶甘蔗香。適合台式甜點、滷煮、太妃。
        </li>
        <li>
          <strong>Light brown sugar</strong>：白糖 + 3–4% 糖蜜後製，淺棕色、風味較溫和。美式餅乾、布朗尼最常用。
        </li>
        <li>
          <strong>Dark brown sugar</strong>：糖蜜 5–7%，顏色深、焦糖味濃。做 gingerbread、BBQ 醬、sticky toffee 首選。
        </li>
        <li>
          <strong>Muscovado</strong>：未精製原糖、糖蜜 10%+，深棕色、質地濕潤像濕沙，風味帶明顯咖啡、黑糖蜜與焦糖的複雜層次。做布朗尼、Christmas cake、rum cake 最推薦。
        </li>
      </ul>

      <h2 id="substitution">常見替換規則</h2>
      <ul>
        <li><strong>細砂 ↔ caster：</strong>1:1 互換，除了做馬卡龍、蛋白霜建議 caster，其餘可互代。</li>
        <li><strong>細砂 → 糖粉：</strong>不建議直接換，若真的要，糖粉用量 × 0.9，因為含澱粉會增加黏度。</li>
        <li><strong>Light brown → dark brown：</strong>可替換，成品顏色較深、風味較明顯。</li>
        <li><strong>Brown sugar → muscovado：</strong>可替換，建議用量 × 0.85，因為 muscovado 風味更濃易過頭。</li>
        <li><strong>蜂蜜／楓糖替糖：</strong>需同時減少配方液體量 20%，且烤溫降 10°C 避免過度上色。</li>
      </ul>

      <h2 id="storage">保存與結塊處理</h2>
      <p>
        細砂糖、糖粉保存簡單：密封、陰涼、乾燥即可無期限。紅糖、黑糖、muscovado 因含糖蜜會因水分流失結塊，處理方法：
      </p>
      <ul>
        <li><strong>長期保存：</strong>裝入密封罐 + 放一小塊切片蘋果或一片吐司（每 2–3 天換一次），糖蜜水分就不會流失。</li>
        <li><strong>結塊急救：</strong>把結硬的紅糖與一小片濕布一起放密封罐，冷藏 12 小時即可軟化。</li>
        <li><strong>微波救急：</strong>結塊紅糖放微波專用碗、蓋濕紙巾，10 秒加熱即可立刻軟化使用。</li>
      </ul>
      <p>
        想深入懂如何挑最搭配 cookie 的糖比例，可以接著看{" "}
        <Link href="/zh/articles/chocolate-chip-cookies" className="text-brand hover:underline">
          零失敗濃郁巧克力餅乾
        </Link>
        ，Kenji 的黃金糖比例一次上手。
      </p>
    </>
  );
}
