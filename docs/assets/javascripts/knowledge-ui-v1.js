(() => {
  "use strict";
  const normalize = (value) => String(value || "").normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().replace(/đ/g, "d").trim();
  const setupLibrary = () => {
    const clusters = document.querySelector(".library-clusters");
    if (!clusters || clusters.dataset.libraryReady === "1") return;
    clusters.dataset.libraryReady = "1";
    const search = document.createElement("div");
    search.className = "library-search";
    search.innerHTML = '<label for="library-local-search">🔎 Tìm chuyên đề trong thư viện</label><div class="library-search-row"><input id="library-local-search" type="search" autocomplete="off" placeholder="Ví dụ: tam giác, phân thức, xác suất, 14…" aria-describedby="library-search-result"><span id="library-search-result" role="status" aria-live="polite">25 chuyên đề</span></div><p class="library-search-empty" hidden>Chưa có chuyên đề phù hợp. Thử một từ khóa ngắn hơn nhé.</p>';
    clusters.before(search);
    const input = search.querySelector("input");
    const count = search.querySelector("#library-search-result");
    const empty = search.querySelector(".library-search-empty");
    const groups = [...clusters.querySelectorAll(".library-cluster")];
    const tiles = [...clusters.querySelectorAll(".library-topic-tile")];
    const originalOpen = groups.map(group => group.open);
    const update = () => {
      const needle = normalize(input.value);
      let visible = 0;
      groups.forEach((group, i) => {
        let within = 0;
        group.querySelectorAll(".library-topic-tile").forEach(tile => {
          const match = !needle || normalize(tile.textContent).includes(needle);
          tile.hidden = !match;
          within += Number(match);
        });
        visible += within;
        group.hidden = !!needle && within === 0;
        group.open = needle ? within > 0 : originalOpen[i];
      });
      count.textContent = needle ? visible + " / " + tiles.length + " chuyên đề" : tiles.length + " chuyên đề";
      empty.hidden = visible !== 0;
    };
    input.addEventListener("input", update);
    update();
  };

  const setupLesson = () => {
    const m = location.pathname.match(/\/kien-thuc\/(\d{2}-[^/]+)\/(bai-tap\/|tu-kiem-tra\/)?(?:index\.html)?$/);
    if (!m) return;
    const host = document.querySelector(".md-content__inner");
    if (!host || host.dataset.lessonShellReady === "1") return;
    const heading = host.querySelector(".topic-workspace-hero h1, h1");
    if (!heading) return;
    host.dataset.lessonShellReady = "1";
    const root = location.pathname.slice(0, location.pathname.indexOf(m[1]) + m[1].length + 1);
    const current = m[2] ? m[2].replace("/", "") : "lesson";
    const block = document.createElement("div");
    block.className = "lesson-switcher";
    block.setAttribute("aria-label", "Các bước học của chuyên đề");
    if (!host.querySelector(".topic-workspace-hero")) block.classList.add("lesson-switcher-plain");
    const headingRow = document.createElement("div");
    headingRow.className = "lesson-switcher-top";
    const back = document.createElement("a");
    back.href = root.replace(/[^/]+\\/$/, "");
    back.className = "lesson-switcher-back";
    back.textContent = "← Thư viện 25 chuyên đề";
    const topic = document.createElement("span");
    topic.className = "lesson-switcher-topic";
    topic.textContent = "CHUYÊN ĐỀ " + m[1].slice(0, 2) + " / 25";
    headingRow.append(back, topic);
    const nav = document.createElement("nav");
    nav.className = "lesson-switcher-steps";
    nav.setAttribute("aria-label", "Chuyển giữa bài học, luyện tập và tự kiểm tra");
    const steps = [
      {id:"lesson", title:"01 · Đọc & hiểu", path:root},
      {id:"bai-tap", title:"02 · Luyện tập", path:root+"bai-tap/"},
      {id:"tu-kiem-tra", title:"03 · Tự kiểm tra", path:root+"tu-kiem-tra/"}
    ];
    steps.forEach(step => {
      const a = document.createElement("a");
      a.href = step.path;
      a.textContent = step.title;
      if (step.id === current) a.setAttribute("aria-current", "page");
      nav.appendChild(a);
    });
    block.append(headingRow, nav);
    const isLesson = current === "lesson";
    if (isLesson) {
      const bar = document.createElement("div");
      bar.className = "lesson-reading-bar";
      bar.setAttribute("aria-hidden","true");
      const fill = document.createElement("span");
      bar.appendChild(fill);
      block.appendChild(bar);
      let raf = 0;
      const update = () => {
        raf = 0;
        const r = host.getBoundingClientRect();
        const total = Math.max(1, host.scrollHeight - window.innerHeight + 130);
        const read = Math.min(1, Math.max(0, -r.top / total));
        fill.style.width = Math.round(read * 100) + "%";
      };
      const queue = () => {
        if (!raf) raf = window.requestAnimationFrame(update);
      };
      window.addEventListener("scroll", queue, {passive:true});
      window.addEventListener("resize", queue);
      queue();
    }
    const first = host.querySelector(".topic-workspace-hero, h1");
    host.insertBefore(block, first);
  };
  const init = () => { setupLibrary(); setupLesson(); };
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init);
  else init();
  if (typeof document$ !== "undefined") document$.subscribe(init);
})();
