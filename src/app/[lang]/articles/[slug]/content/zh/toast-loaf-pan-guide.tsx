import Link from "next/link";

export default function ToastPanGuide() {
  return (
    <>
      <p>
        「為什麼我的吐司出爐後沒有方正四角？」答案常常不在技術，在烤模。做日式方正吐司需要帶蓋 Pullman 模；想要山形吐司開放式就好；鍍鋁鋼跟陽極鋁差在耐用度。本文整理四類家用吐司模與業界推薦。
      </p>

      <h2 id="shape-type">形狀：帶蓋 Pullman vs 開放式</h2>
      <p>
        兩種造型的吐司模差異：
      </p>
      <ul>
        <li>
          <strong>Pullman 帶蓋吐司模：</strong>19 世紀美國鐵路列車車廂廚房為省空間設計的矩形帶蓋模，烘出四面等高的方正吐司。做三明治、燒肉吐司、切片吐司必備。
        </li>
        <li>
          <strong>開放式吐司模：</strong>無頂蓋，吐司在烘烤時向上膨脹形成「山形」或「胖山形」。組織鬆軟度較 Pullman 好，但無法切成整齊方片。
        </li>
      </ul>
      <p>
        工作室多備 Pullman（商業量產首選）；家用無固定需求，看你喜歡哪種成品造型。
      </p>

      <h2 id="materials">材質：鍍鋁鋼 vs 陽極鋁 vs 不沾</h2>
      <table>
        <thead>
          <tr>
            <th>材質</th>
            <th>優點</th>
            <th>缺點</th>
            <th>價位</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>鍍鋁鋼（aluminized steel）</td>
            <td>重、導熱佳、耐久 10 年+、上色漂亮</td>
            <td>重量大、價格較高</td>
            <td>高</td>
          </tr>
          <tr>
            <td>陽極鋁（anodized aluminum）</td>
            <td>輕、不反應酸性食材、CP 值高</td>
            <td>耐久度略低於鍍鋁鋼</td>
            <td>中</td>
          </tr>
          <tr>
            <td>不沾塗層鋁</td>
            <td>脫模容易、家用友善</td>
            <td>塗層壽命 3–5 年、不耐高溫</td>
            <td>中低</td>
          </tr>
          <tr>
            <td>矽膠</td>
            <td>脫模最容易、易保養</td>
            <td>不易上色、形狀不穩</td>
            <td>低</td>
          </tr>
        </tbody>
      </table>
      <p>
        USA Pan、LloydPans 等美系專業品牌以鍍鋁鋼為主；台灣家用通路多見陽極鋁與不沾款。
      </p>

      <h2 id="sizes">尺寸：1 磅／1.5 磅／2 磅與台式差異</h2>
      <p>
        美規以「磅」為單位標示麵團容量，台灣烘焙圈則多用「兩」：
      </p>
      <ul>
        <li><strong>1 磅（約 12 兩）</strong>：長寬高約 19×10×9cm，家用三口之家 3–4 天份量。</li>
        <li><strong>1.5 磅（約 18 兩）</strong>：長寬高約 22×11×10cm，家用最常見規格。</li>
        <li><strong>2 磅（約 24 兩）</strong>：長寬高約 30×12×10cm，工作室與大家庭用。</li>
      </ul>
      <p>
        選擇時需對應配方的麵團重量。麵團太少在大模中無法爬到頂；麵團太多則會爆出蓋緣。</p>

      <h2 id="recommendation">家用建議與採購清單</h2>
      <ul>
        <li><strong>第一支</strong>：12 兩帶蓋 Pullman 陽極鋁——可做方正吐司也可開蓋做山形，最萬用。</li>
        <li><strong>第二支</strong>：18 兩開放式陽極鋁——家庭份量剛好、配方書多以此規格為基準。</li>
        <li><strong>進階第三支</strong>：24 兩 Pullman 鍍鋁鋼——做雙倍量或送禮、耐用度高。</li>
      </ul>

      <h2 id="care">保養與養模</h2>
      <p>
        新購買的鍍鋁鋼或陽極鋁模建議「養模」一次：
      </p>
      <ol>
        <li>用中性洗劑清洗後完全乾燥。</li>
        <li>均勻塗一層高煙點油（葵花籽油、玄米油），多餘油脂用紙巾拭去。</li>
        <li>放入預熱 200°C 烤箱烤 30 分鐘，關火待涼。</li>
        <li>形成的聚合油膜能顯著改善脫模與耐用度。</li>
      </ol>
      <p>
        使用後只用溫水加軟海綿清洗，避免金屬刷、洗碗機（會損傷陽極層或鍍鋁層）。不沾塗層模則完全避免金屬刮刀、空燒。
      </p>
      <p>
        想更深入理解烤盤材質差異，接著讀{" "}
        <Link href="/zh/articles/baking-pan-materials" className="text-brand hover:underline">
          烤盤材質完整指南
        </Link>
        ，把家中所有烘焙器具的選擇邏輯串起來。
      </p>
    </>
  );
}
