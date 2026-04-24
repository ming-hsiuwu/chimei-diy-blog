import Link from "next/link";

export default function BeginnerStarterGuide() {
  return (
    <>
      <p>
        「我想學烘焙，第一堂該上什麼課？」這問題沒有標準答案，但有明確的學習曲線。King Arthur Baking、The Kitchn Baking School 等專業教學機構都推薦五階段進階法：從餅乾、磅蛋糕、戚風、麵包到法式甜點。本文整理每階段重點與常見失敗。
      </p>

      <h2 id="why-order-matters">為什麼學習順序很重要</h2>
      <p>
        烘焙是「累積型技能」，後面的課依賴前面的基礎。直接從戚風蛋糕或可頌開始的新手，失敗率極高且難以歸因——你不知道是蛋白霜、麵粉、溫度、還是手法出問題。
      </p>
      <p>
        正確的順序讓每次失敗能被歸因到單一變數，你才學得會「為什麼」。這也是 Ferrandi、藍帶等專業學校必從基礎餅乾開始的原因。
      </p>

      <h2 id="stage-1-cookies">階段 1：餅乾（掌握配方比例）</h2>
      <p>
        推薦品項：<strong>奶油香酥餅乾、美式曲奇、基礎杏仁瓦片</strong>
      </p>
      <p>
        學會的事：
      </p>
      <ul>
        <li>電子秤精準量取材料</li>
        <li>奶油室溫軟化的判斷</li>
        <li>「先打奶油糖再加蛋」的糖油打發順序</li>
        <li>用手感判斷麵團狀態（太軟、太硬）</li>
        <li>烤箱預熱與時間掌控</li>
      </ul>
      <p>
        建議至少做 5–10 次餅乾練手後再進下一階段。
      </p>

      <h2 id="stage-2-pound">階段 2：磅蛋糕（奶油打發）</h2>
      <p>
        推薦品項：<strong>原味磅蛋糕、奶油乳酪磅蛋糕、抹茶大理石</strong>
      </p>
      <p>
        學會的事：
      </p>
      <ul>
        <li>奶油打發到「膨鬆發白」的判斷</li>
        <li>雞蛋分次加入避免油水分離</li>
        <li>麵粉「拌」而非「攪」避免出筋</li>
        <li>蛋糕縮腰、下沉的原因排查</li>
      </ul>
      <p>
        磅蛋糕的成功率介於餅乾與戚風之間，做 3 次能穩定成功就可以進階。
      </p>

      <h2 id="stage-3-chiffon">階段 3：戚風蛋糕（蛋白霜）</h2>
      <p>
        推薦品項：<strong>原味戚風、檸檬戚風、抹茶戚風</strong>
      </p>
      <p>
        學會的事：
      </p>
      <ul>
        <li>蛋白霜打發「濕性 vs 乾性」的判斷</li>
        <li>蛋白霜與蛋黃糊「翻拌」技巧</li>
        <li>戚風倒扣冷卻避免塌陷</li>
        <li>戚風縮腰、裂頂、塌底的排查</li>
      </ul>
      <p>
        戚風是烘焙「第一個難關」，失敗率高但能做好後，70% 的蛋糕類技巧就通了。
      </p>

      <h2 id="stage-4-bread">階段 4：麵包（發酵管理）</h2>
      <p>
        推薦品項：<strong>吐司、蔥花麵包、布里歐、基礎歐包</strong>
      </p>
      <p>
        學會的事：
      </p>
      <ul>
        <li>酵母喚醒與發酵溫度</li>
        <li>麵團水合（autolyse）與筋性判斷</li>
        <li>第一次發酵 vs 第二次發酵的差異</li>
        <li>「手指按壓回彈」判斷發酵程度</li>
        <li>整形與割線技巧</li>
      </ul>
      <p>
        麵包是完全不同的技能樹——不再靠奶油糖蛋，靠麵粉、水、酵母的互動。需要 20 次以上實作才能穩定。
      </p>

      <h2 id="stage-5-advanced">階段 5：進階法式甜點</h2>
      <p>
        推薦品項：<strong>可頌、馬卡龍、慕斯蛋糕、泡芙、可麗露</strong>
      </p>
      <p>
        學會的事：
      </p>
      <ul>
        <li>層次千層麵團（可頌、泡芙）</li>
        <li>精準蛋白霜控制（馬卡龍）</li>
        <li>分層組裝與鏡面淋面（慕斯）</li>
        <li>高溫蜂巢組織（可麗露）</li>
      </ul>
      <p>
        這些都是「技術密集型」品項，需要前四階段的基礎才學得順。跳級學習往往變成挫折連連。
      </p>
      <p>
        想從基礎餅乾開始，建議也先搞懂原料：
        <Link href="/zh/articles/how-to-choose-flour-for-beginners" className="text-brand hover:underline">
          新手挑麵粉完整指南
        </Link>
        與{" "}
        <Link href="/zh/articles/butter-salted-vs-unsalted" className="text-brand hover:underline">
          無鹽 vs 有鹽奶油選用指南
        </Link>
        ，原料對了技術才能發揮。
      </p>
    </>
  );
}
