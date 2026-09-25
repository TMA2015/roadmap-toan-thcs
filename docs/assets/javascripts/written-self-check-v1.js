(() => {
  "use strict";
  const init = () => {
    if (!/\/tu-kiem-tra\/?(?:index\.html)?$/.test(location.pathname)) return;
    const host = document.querySelector(".md-content__inner");
    if (!host || host.dataset.writtenSelfCheckReady === "1") return;
    host.dataset.writtenSelfCheckReady = "1";
    const headings = [...host.querySelectorAll("h1, h2, h3")];
    const heading = headings.find(node => /^Đáp án(?:\b|\s|$)/iu.test(node.textContent.trim()));
    if (!heading || heading.closest("details")) return;
    const level = Number(heading.tagName.slice(1));
    const details = document.createElement("details");
    details.className = "written-self-check-solution";
    const summary = document.createElement("summary");
    summary.textContent = "✅ Tôi đã làm xong — mở đáp án và hướng dẫn chấm";
    details.appendChild(summary);
    const note = document.createElement("p");
    note.className = "written-self-check-note";
    note.textContent = "Bản tự luận được đối chiếu thủ công. Hãy tự làm trước khi mở lời giải; việc mở phần này không tự tạo điểm số hoặc đánh dấu thành thạo.";
    details.appendChild(note);
    heading.parentNode.insertBefore(details, heading);
    let node = heading;
    while (node) {
      const next = node.nextSibling;
      if (node !== heading && /^H[1-3]$/.test(node.nodeName) && Number(node.nodeName.slice(1)) <= level) break;
      details.appendChild(node);
      node = next;
    }
    const openForHash = () => {
      const id = decodeURIComponent(location.hash.slice(1));
      if (!id) return;
      const target = document.getElementById(id);
      if (target && details.contains(target)) details.open = true;
    };
    addEventListener("hashchange", openForHash);
    openForHash();
  };
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init);
  else init();
  if (typeof document$ !== "undefined") document$.subscribe(init);
})();