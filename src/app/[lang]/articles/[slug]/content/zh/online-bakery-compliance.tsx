import Link from "next/link";

export default function OnlineBakeryComplianceGuide() {
  return (
    <>
      <p>
        IG 接單、蝦皮上架、FB 團購——這些網路販售甜點的方式在台灣都受《食品安全衛生管理法》規範。食藥署與衛福部的網路販售指引明確，但大多數自家接單的業者對法規一知半解。本文整理 5 個必須合規的面向。
      </p>

      <h2 id="registration">食品業者登錄是基本門檻</h2>
      <p>
        依食藥署規範，<strong>只要對外販售食品，全部業者都必須完成「食品業者登錄」</strong>——無論販售金額、通路、頻率。登錄流程簡單：
      </p>
      <ul>
        <li>備齊自然人憑證或工商憑證加讀卡機</li>
        <li>上食藥署「非登不可」平台填寫基本資料</li>
        <li>1–3 個工作日取得食字號</li>
        <li>費用：<strong>免費</strong></li>
      </ul>
      <p>
        登錄後取得「食字第 XXXXXXXXXX 號」，需標示於販售頁面與產品包裝。詳情可參考{" "}
        <Link href="/zh/articles/pastry-studio-legal-setup" className="text-brand hover:underline">
          甜點工作室合法登記指南
        </Link>
        。
      </p>

      <h2 id="labeling">包裝食品 9 項標示必備</h2>
      <p>
        依《食品安全衛生管理法》第 22 條，完整包裝食品必須以「繁體中文」標示：
      </p>
      <ol>
        <li>品名</li>
        <li>內容物名稱（多至少排列）</li>
        <li>淨重、容量或數量</li>
        <li>食品添加物名稱</li>
        <li>製造廠商、國內負責廠商名稱、電話、地址</li>
        <li>原產地（國）</li>
        <li>有效日期</li>
        <li>營養標示（部分品項強制）</li>
        <li>過敏原標示（蛋奶花生堅果貝類等）</li>
      </ol>
      <p>
        標示不符會被開罰 3 萬–300 萬。食藥署提供「食品標示諮詢服務平台」，可查範本與疑義。
      </p>

      <h2 id="invoice">發票與稅籍登記</h2>
      <p>
        發票規範依營業規模不同：
      </p>
      <ul>
        <li>
          <strong>月營業額 &lt; 8 萬（免稅標準）</strong>：可申請「小規模營業人」，不需開發票，只需向國稅局報稅。
        </li>
        <li>
          <strong>月營業額 8 萬–20 萬</strong>：須辦理稅籍登記、開立「普通發票」。
        </li>
        <li>
          <strong>月營業額 20 萬+</strong>：須開立「三聯式發票」，適用 5% 營業稅。
        </li>
      </ul>
      <p>
        蝦皮、PChome、foodpanda 等平台通常要求商家能開發票才可上架。平台會代收代繳營業稅，降低業者結算壓力。
      </p>

      <h2 id="imported">代購進口食品的特殊規範</h2>
      <p>
        代購日本甜點、韓國零食等進口食品在台販售屬「進口業務」，規範更嚴：
      </p>
      <ul>
        <li><strong>少量自用代購</strong>（每人每日 &lt; 6 公斤）：原則允許，但不得大量販售</li>
        <li><strong>大量網路販售</strong>：須走正式進口報關、向食藥署申請查驗、取得進口許可</li>
        <li><strong>貼中文標籤</strong>：進口食品需在台灣境內補貼中文標籤（9 項資訊）才能販售</li>
        <li><strong>特殊食品</strong>：含酒精、保健食品、嬰兒食品需另外申請專屬許可</li>
      </ul>

      <h2 id="penalties">違規的實際風險</h2>
      <p>
        違反網路販售食品規範的實際後果：
      </p>
      <ul>
        <li><strong>未登錄食品業者</strong>：3 萬–300 萬罰鍰（食安法第 47 條）</li>
        <li><strong>標示不符</strong>：3 萬–300 萬</li>
        <li><strong>未辦稅籍登記</strong>：罰補繳稅額 1–10 倍</li>
        <li><strong>未報關進口食品</strong>：依《海關緝私條例》處 1–10 倍貨價罰鍰</li>
        <li><strong>食安事件</strong>：除罰鍰外可能併刑事責任，品牌信用嚴重受損</li>
      </ul>
      <p>
        合規成本低（多數是文件與申報工作）、不合規風險極高。建議從開業第一天就依法規走，長期經營才有穩定基礎。
      </p>
    </>
  );
}
