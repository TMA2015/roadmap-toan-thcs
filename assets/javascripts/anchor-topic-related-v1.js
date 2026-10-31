(() => {
  "use strict";
  // Navigation-only view. Canonical source: A25 anchor catalog; no scoring or learner writes.
  const path = location.pathname.replace(/\/index\.html$/, "/");
  const match = path.match(/\/kien-thuc\/(\d{2})-[^/]+\/$/);
  if (!match || match[1] === "25") return;

  const topicId = "CT" + match[1];
  const projectMatch = path.match(/^\/(roadmap-toan-thcs|self-learning-math)\//);
  const siteBase = projectMatch ? "/" + projectMatch[1] + "/" : "/";
  const catalogUrl = siteBase + "assets/data/anchors/anchor-catalog-v1.json";
  const article = () => document.querySelector(".md-content__inner");

  const init = async () => {
    const main = article();
    if (!main || main.querySelector("[data-a25-topic-related]")) return;
    try {
      const response = await fetch(catalogUrl);
      if (!response.ok) return;
      const data = await response.json();
      if (!Array.isArray(data.anchors)) return;
      const linked = data.anchors.filter(item => item.publication_status === "published" &&
        Array.isArray(item.topic_ids) && item.topic_ids.includes(topicId));
      if (!linked.length) return;

      // Use the existing approved topic_ids only. No inferred KNTT grade placement.
      const block = document.createElement("section");
      block.dataset.a25TopicRelated = topicId;
      block.className = "a25-topic-related";
      const heading = document.createElement("h2");
      heading.textContent = "Bài mẫu vận dụng thêm · Ôn thi vào lớp 10";
      const note = document.createElement("p");
      note.textContent = "Những bài sau sử dụng kiến thức của chuyên đề này. Đây là phần mở rộng tự chọn, không phải bài bắt buộc hoặc điểm Tự kiểm tra Core của lớp đang học.";
      const list = document.createElement("ul");
      linked.forEach(item => {
        if (!item.deep_dive_uri && !item.source_uri) return;
        const li = document.createElement("li");
        const a = document.createElement("a");
        a.href = siteBase + "kien-thuc/25-tong-hop-on-thi-10/" + (item.deep_dive_uri || item.source_uri);
        a.textContent = item.title + " →";
        li.appendChild(a);
        list.appendChild(li);
      });
      const all = document.createElement("a");
      all.href = siteBase + "kien-thuc/25-tong-hop-on-thi-10/kho-bai-mo-neo/?topic=" + encodeURIComponent(topicId);
      all.textContent = "Xem các bài mẫu liên hệ với chuyên đề này →";
      block.append(heading, note, list, all);
      if (!list.children.length || !main.isConnected || main.querySelector("[data-a25-topic-related]")) return;
      main.appendChild(block);
    } catch (_) {
      // Optional navigation may be unavailable offline; core learning must remain usable.
    }
  };
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init);
  else init();
  if (typeof document$ !== "undefined") document$.subscribe(init);
})();
