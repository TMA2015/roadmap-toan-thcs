(() => {
 "use strict";
 const sitePrefix = () => location.pathname.startsWith("/roadmap-toan-thcs/") ? "/roadmap-toan-thcs/" : "/";
 const mainDestinations = [
   ["Trang chủ", "", "⌂"], ["Học theo lớp", "hoc-theo-lop/", "▣"],
   ["Roadmap", "roadmap/", "◇"], ["AI Tutor", "ai/ai-tutor-core-contract/", "✦"],
   ["Hướng dẫn", "huong-dan/lo-trinh-tu-hoc/", "☷"], ["Kiến thức", "kien-thuc/", "▤"]
 ];
 // Canonical 25-topic spine, generated from the current mkdocs.yml nav.
 const topics = [["01-ban-do-chuong-trinh","01. Bản đồ chương trình Toán THCS"],["02-so-va-phep-tinh","02. Số và phép tính"],["03-ti-le-ti-le-thuc","03. Tỉ lệ – Tỉ lệ thức"],["04-bieu-thuc-dai-so","04. Biểu thức đại số"],["05-7-hang-dang-thuc","05. 7 Hằng đẳng thức"],["06-phan-tich-da-thuc","06. Phân tích đa thức"],["07-phan-thuc-dai-so","07. Phân thức đại số"],["08-phuong-trinh-bat-phuong-trinh","08. Phương trình – Bất phương trình"],["09-he-phuong-trinh","09. Hệ phương trình"],["10-ham-so-do-thi","10. Hàm số và đồ thị"],["11-can-thuc","11. Căn thức"],["12-phuong-trinh-bac-hai-viete","12. Phương trình bậc hai & Viète"],["13-goc-va-duong-thang","13. Góc và đường thẳng"],["14-tam-giac","14. Tam giác"],["15-duong-dong-quy","15. Các đường đồng quy"],["16-tu-giac","16. Tứ giác"],["17-thales-dong-dang","17. Thales và đồng dạng"],["18-he-thuc-luong","18. Hệ thức lượng"],["19-duong-tron","19. Đường tròn"],["20-hinh-hoc-tong-hop","20. Hình học tổng hợp"],["21-thong-ke","21. Thống kê"],["22-dai-luong-dac-trung","22. Đại lượng đặc trưng"],["23-xac-suat","23. Xác suất"],["24-bai-toan-thuc-te","24. Bài toán thực tế"],["25-tong-hop-on-thi-10","25. Tổng hợp & ôn thi vào 10"]];
 const currentTopic = () => {
   const match = location.pathname.match(/\/kien-thuc\/(\d{2}-[^/]+)\//);
   return match ? topics.find(([slug]) => slug === match[1]) : null;
 };
 const ensureTopicDialog = () => {
   let dialog = document.querySelector("[data-roadmap-topic-dialog]");
   if (dialog) return dialog;
   dialog = document.createElement("dialog");
   dialog.className = "roadmap-topic-dialog";
   dialog.dataset.roadmapTopicDialog = "1";
   dialog.setAttribute("aria-labelledby", "roadmap-topic-dialog-title");
   const heading = document.createElement("div");
   heading.className = "roadmap-topic-dialog__heading";
   const title = document.createElement("h2");
   title.id = "roadmap-topic-dialog-title";
   title.textContent = "Chuyển nhanh chuyên đề";
   const close = document.createElement("button");
   close.type = "button";
   close.className = "roadmap-topic-dialog__close";
   close.textContent = "Đóng ✕";
   close.setAttribute("aria-label", "Đóng danh sách chuyên đề");
   close.addEventListener("click", () => dialog.close());
   heading.append(title, close);
   const hint = document.createElement("p");
   hint.className = "roadmap-topic-dialog__hint";
   hint.textContent = "Chọn một trong 25 chuyên đề để chuyển thẳng tới bài học.";
   const list = document.createElement("nav");
   list.className = "roadmap-topic-dialog__list";
   list.setAttribute("aria-label", "Danh sách 25 chuyên đề");
   const active = currentTopic();
   for (const [slug, label] of topics) {
     const a = document.createElement("a");
     a.href = sitePrefix() + "kien-thuc/" + slug + "/";
     a.textContent = label;
     if (active && active[0] === slug) a.setAttribute("aria-current", "page");
     list.appendChild(a);
   }
   dialog.append(heading, hint, list);
   dialog.addEventListener("click", event => { if (event.target === dialog) dialog.close(); });
   document.body.appendChild(dialog);
   return dialog;
 };
 const addTopicLauncher = () => {
   // Material owns the drawer's scrollwrap and translated navigation tree.
   // Mount the topic chooser in the separate page header, never inside the drawer.
   const header = document.querySelector(".md-header__inner");
   if (!header || header.querySelector("[data-roadmap-topic-launcher]")) return;
   const button = document.createElement("button");
   button.type = "button";
   button.className = "roadmap-topic-launcher";
   button.dataset.roadmapTopicLauncher = "1";
   button.setAttribute("aria-label", "Chọn nhanh một trong 25 chuyên đề Toán");
   button.setAttribute("title", "Chọn chuyên đề (25)");
   button.setAttribute("aria-haspopup", "dialog");
   const mark = document.createElement("span");
   mark.className = "roadmap-topic-launcher__mark";
   mark.setAttribute("aria-hidden", "true");
   mark.textContent = "▤";
   const count = document.createElement("span");
   count.className = "roadmap-topic-launcher__count";
   count.setAttribute("aria-hidden", "true");
   count.textContent = "25";
   const name = document.createElement("span");
   name.className = "roadmap-topic-launcher__name";
   name.setAttribute("aria-hidden", "true");
   name.textContent = "chuyên đề";
   button.append(mark, count, name);
   button.addEventListener("click", () => {
     const dialog = ensureTopicDialog();
     // Opening a fresh dialog must start from 01, not a retained iOS scroll offset.
     dialog.querySelector(".roadmap-topic-dialog__list").scrollTop = 0;
     if (!dialog.open) dialog.showModal();
   });
   const title = header.querySelector(".md-header__title");
   if (title) title.insertAdjacentElement("afterend", button);
   else header.appendChild(button);
 };
 const create = () => {
   // Keep the topic launcher and desktop dock independently guarded.
   addTopicLauncher();
   const tabs = document.querySelector(".md-tabs");
   const list = tabs && tabs.querySelector(".md-tabs__list");
   if (!tabs || !list || document.querySelector("[data-roadmap-nav-dock]")) return;
   const dock = document.createElement("nav");
   dock.className = "roadmap-nav-dock";
   dock.dataset.roadmapNavDock = "1";
   dock.setAttribute("aria-label", "Điều hướng nhanh khi cuộn trang");
   list.querySelectorAll("a.md-tabs__link").forEach((source) => {
      const item = document.createElement("a");
      item.href = source.href;
      item.textContent = source.textContent.trim();
      if (source.classList.contains("md-tabs__link--active")) item.setAttribute("aria-current","page");
      dock.appendChild(item);
   });
   if (!dock.children.length) return;
   document.body.appendChild(dock);
   const update = () => {
     const rect = tabs.getBoundingClientRect();
     const visible = window.innerWidth >= 1220 && rect.bottom <= 55 && window.scrollY > 90;
     dock.classList.toggle("is-visible", visible);
   };
   window.addEventListener("scroll", update, {passive:true});
   window.addEventListener("resize", update);
   update();
 };
 if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", create);
 else create();
 if (typeof document$ !== "undefined") document$.subscribe(create);
})();
