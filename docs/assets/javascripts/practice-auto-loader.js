(() => {
  "use strict";

  const BANKS = {
    "04-bieu-thuc-dai-so": "04-bieu-thuc-dai-so-v2.manifest.json",
    "05-7-hang-dang-thuc": "05-7-hang-dang-thuc-v1.manifest.json",
    "06-phan-tich-da-thuc": "06-phan-tich-da-thuc-v1.manifest.json",
    "07-phan-thuc-dai-so": "07-phan-thuc-dai-so-v1.manifest.json",
    "08-phuong-trinh-bat-phuong-trinh": "08-phuong-trinh-bat-phuong-trinh-v1.manifest.json",
    "09-he-phuong-trinh": "09-he-phuong-trinh-v1.manifest.json",
    "10-ham-so-do-thi": "10-ham-so-do-thi-v1.manifest.json",
    "11-can-thuc": "11-can-thuc-v1.manifest.json",
    "12-phuong-trinh-bac-hai-viete": "12-phuong-trinh-bac-hai-viete-v1.manifest.json",
    "13-goc-va-duong-thang": "13-goc-va-duong-thang-v1.manifest.json",
    "14-tam-giac": "14-tam-giac-v1.manifest.json",
    "15-duong-dong-quy": "15-duong-dong-quy-v1.manifest.json",
    "16-tu-giac": "16-tu-giac-v1.manifest.json",
    "17-thales-dong-dang": "17-thales-dong-dang-v1.manifest.json",
    "18-he-thuc-luong": "18-he-thuc-luong-v1.manifest.json",
    "19-duong-tron": "19-duong-tron-v1.manifest.json",
    "20-hinh-hoc-tong-hop": "20-hinh-hoc-tong-hop-v1.manifest.json",
    "21-thong-ke": "21-thong-ke-v1.manifest.json",
    "22-dai-luong-dac-trung": "22-dai-luong-dac-trung-v1.manifest.json",
    "23-xac-suat": "23-xac-suat-v1.manifest.json",
    "24-bai-toan-thuc-te": "24-bai-toan-thuc-te-v1.manifest.json",
    "25-tong-hop-on-thi-10": "25-tong-hop-on-thi-10-v1.manifest.json",
  };

  const ensureStyles = (siteRoot) => {
    if (document.querySelector('link[data-practice-engine-style="v2"]')) return;
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = `${siteRoot}/assets/stylesheets/practice-engine.css`;
    link.dataset.practiceEngineStyle = "v2";
    document.head.appendChild(link);
  };

  const ensureEngine = (siteRoot) => {
    if (window.__toanThcsPracticeEngineV2Loading) return;
    if (document.querySelector('script[data-practice-engine-script="v2"]')) return;
    window.__toanThcsPracticeEngineV2Loading = true;
    const script = document.createElement("script");
    script.src = `${siteRoot}/assets/javascripts/practice-engine-v2.js`;
    script.defer = true;
    script.dataset.practiceEngineScript = "v2";
    script.addEventListener("load", () => {
      window.__toanThcsPracticeEngineV2Loading = false;
    });
    document.head.appendChild(script);
  };

  const init = () => {
    const marker = "/kien-thuc/";
    const pathname = window.location.pathname;
    if (!pathname.includes(marker) || !pathname.includes("/bai-tap")) return;

    const afterKnowledge = pathname.split(marker)[1] || "";
    const slug = afterKnowledge.split("/")[0];
    const manifest = BANKS[slug];
    if (!manifest) return;

    // Các chuyên đề cũ đã gắn engine trực tiếp trong Markdown thì giữ nguyên.
    if (document.querySelector("[data-practice-bank-v2]")) return;

    const article = document.querySelector(".md-content__inner");
    if (!article) return;

    const siteRoot = pathname.split(marker)[0] || "";
    ensureStyles(siteRoot);

    const section = document.createElement("section");
    section.className = "practice-auto-section";
    section.innerHTML = `
      <h2 id="luyen-tap-tuong-tac">A. 🎯 Luyện nhanh tương tác</h2>
      <p>Mỗi lượt hệ thống chọn một bộ câu từ ngân hàng lớn của chuyên đề. Có thể luyện hỗn hợp, bấm trực tiếp một kỹ năng để luyện riêng hoặc dùng <strong>Luyện điểm yếu</strong>. Phần này có feedback, gợi ý và Tutor nên được xem là <strong>formative practice</strong>, không phải bài kiểm tra cuối chuyên đề.</p>
      <div data-practice-bank-v2="${siteRoot}/assets/data/practice/${manifest}" data-session-size="10"></div>
      <p><em>Lưu ý: tiến độ hiện được lưu trên trình duyệt này bằng localStorage và chưa tự đồng bộ giữa các thiết bị.</em></p>
      <hr>
    `;

    const firstBlockquote = article.querySelector("blockquote");
    const h1 = article.querySelector("h1");
    const anchor = firstBlockquote || h1;
    if (anchor) anchor.insertAdjacentElement("afterend", section);
    else article.prepend(section);

    ensureEngine(siteRoot);
  };

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init);
  else init();

  if (typeof document$ !== "undefined") document$.subscribe(init);
})();
