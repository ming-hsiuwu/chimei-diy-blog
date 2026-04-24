import Link from "next/link";

export default function TartPanGuide() {
  return (
    <>
      <p>
        塔模（tart pan）、派模（pie dish）、鹹派模（quiche pan）在台灣烘焙器具行時常混用，但它們在形狀、材質、底部設計上差異極大。America's Test Kitchen、Fat Daddio's 的器具評測整理了專業建議。本文依家用場景拆解選購邏輯。
      </p>

      <h2 id="shape">形狀：菊花邊 vs 平邊</h2>
      <p>
        兩種邊緣的差異：
      </p>
      <ul>
        <li>
          <strong>菊花邊（fluted edge）</strong>：邊緣為波浪狀花紋，法式塔（tarte）與鹹派（quiche）的經典造型。波浪結構增加塔皮受熱面積，上色均勻且視覺精美。
        </li>
        <li>
          <strong>平邊（straight edge）</strong>：邊緣平直的圓模，美式派（pie）最常見。家庭感強，適合做南瓜派、蘋果派、檸檬派。
        </li>
      </ul>
      <p>
        法式甜點約 95% 使用菊花邊、美式家常派約 80% 使用平邊。兩者不可互換——換模會改變整體氛圍。
      </p>

      <h2 id="bottom">底部：活底 vs 固定底</h2>
      <p>
        底部設計影響脫模難易：
      </p>
      <ul>
        <li>
          <strong>活底（removable bottom）</strong>：塔模底部可與側壁分離。脫模時從下方向上推出，塔完整保留在底盤上。法式 tarte 必須活底，因為塔皮酥脆經不起翻倒。
        </li>
        <li>
          <strong>固定底（fixed）</strong>：一體成形，脫模需從側面切分。美式派塔皮較厚、內餡較多，通常不脫模直接在模中切食。
        </li>
      </ul>

      <h2 id="materials">材質：金屬 vs 陶瓷 vs 玻璃</h2>
      <table>
        <thead>
          <tr>
            <th>材質</th>
            <th>導熱</th>
            <th>適用</th>
            <th>特色</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>陽極鋁（金屬）</td>
            <td>高</td>
            <td>法式 tarte、quiche</td>
            <td>上色快、塔皮酥脆</td>
          </tr>
          <tr>
            <td>碳鋼（金屬）</td>
            <td>高</td>
            <td>專業商用、深盤派</td>
            <td>耐久、重</td>
          </tr>
          <tr>
            <td>陶瓷</td>
            <td>慢</td>
            <td>長時間慢烤、美式派</td>
            <td>蓄熱穩、可直接上桌</td>
          </tr>
          <tr>
            <td>玻璃（Pyrex）</td>
            <td>慢</td>
            <td>美式派、鹹派</td>
            <td>自帶不沾、可看上色</td>
          </tr>
        </tbody>
      </table>

      <h2 id="sizes">尺寸：從 4 吋到 10 吋</h2>
      <ul>
        <li><strong>4 吋迷你塔模</strong>：單人份、送禮、試作、市集販售。通常 6 只一組。</li>
        <li><strong>6 吋塔模（15cm）</strong>：2–3 人份、家用最常見規格。</li>
        <li><strong>8 吋塔模（20cm）</strong>：4–6 人份、請客、切片分 8 塊。</li>
        <li><strong>9.5 吋鹹派模（24cm）</strong>：quiche lorraine 標準規格。</li>
        <li><strong>10 吋以上</strong>：工作室量產與大家庭。</li>
      </ul>

      <h2 id="recommendation">家用最實用 3 種組合</h2>
      <ol>
        <li>
          <strong>入門基本：</strong>陽極鋁 8 吋菊花邊活底塔模（法式檸檬塔、蘋果塔、巧克力塔）。
        </li>
        <li>
          <strong>進階補充：</strong>陶瓷 9.5 吋菊花邊固定底（quiche、焗烤派、家用美式南瓜派）。
        </li>
        <li>
          <strong>送禮／市集：</strong>陽極鋁 4 吋迷你塔模 × 6 只（小型塔、下午茶、市集單品）。
        </li>
      </ol>
      <p>
        購買時注意活底塔模的「緊密度」——側壁與底盤不可有明顯縫隙，否則 quiche 液體會滲出。
      </p>
      <p>
        搭配{" "}
        <Link href="/zh/articles/tart-shell-freezing-guide" className="text-brand hover:underline">
          塔皮冷凍保存指南
        </Link>
        ，能延長塔皮使用效率、不浪費備料。
      </p>
    </>
  );
}
