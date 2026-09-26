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
    back.href = root.slice(0, root.lastIndexOf("/", root.length - 2) + 1);
    back.className = "lesson-switcher-back";
    back.textContent = "← Thư viện 25 chuyên đề";
    const topic = document.createElement("span");
    topic.className = "lesson-switcher-topic";
    topic.textContent = "CHUYÊN ĐỀ " + m[1].slice(0, 2) + " / 25";
    const controls = document.createElement("div");
    controls.className = "lesson-switcher-controls";
    controls.appendChild(topic);
    const focusButton = document.createElement("button");
    focusButton.type = "button";
    focusButton.className = "lesson-focus-toggle";
    focusButton.setAttribute("aria-label", "Bật chế độ đọc tập trung, ẩn hai cột mục lục");
    const focusKey = "roadmap.ui.focus.v1";
    const readFocus = () => { try { return localStorage.getItem(focusKey) === "1"; } catch (_) { return false; } };
    const storeFocus = (enabled) => { try { localStorage.setItem(focusKey, enabled ? "1" : "0"); } catch (_) { /* Browsing without storage remains usable. */ } };
    const updateFocus = (enabled) => {
      document.body.classList.toggle("roadmap-focus-mode", enabled);
      focusButton.setAttribute("aria-pressed", String(enabled));
      focusButton.textContent = enabled ? "↩ Hiện mục lục" : "⛶ Đọc tập trung";
      focusButton.setAttribute("aria-label", enabled
        ? "Thoát chế độ đọc tập trung và hiện hai cột mục lục"
        : "Bật chế độ đọc tập trung, ẩn hai cột mục lục");
    };
    focusButton.addEventListener("click", () => {
      const next = !document.body.classList.contains("roadmap-focus-mode");
      updateFocus(next);
      storeFocus(next);
    });
    updateFocus(readFocus());
    controls.appendChild(focusButton);
    headingRow.append(back, controls);
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

  const setupSkillConnections = async () => {
    const match = location.pathname.match(/\/kien-thuc\/(\d{2}-[^/]+)\/(?:index\.html)?$/);
    if (!match) return;
    const host = document.querySelector(".md-content__inner");
    if (!host || host.querySelector("[data-skill-connections]")) return;
    const root = location.pathname.slice(0, location.pathname.indexOf(match[1]) + match[1].length + 1);
    const panel = document.createElement("details");
    panel.className = "skill-connections";
    panel.dataset.skillConnections = "1";
    panel.setAttribute("aria-label", "Các mối nối kiến thức");
    const title = document.createElement("summary");
    title.textContent = "🧭 Mối nối kiến thức · xem kỹ năng nền và hướng học";
    const note = document.createElement("p");
    note.textContent = "Các kỹ năng liên quan giúp em chọn đường học và ôn bù. Đây không phải điều kiện khóa bài học.";
    panel.append(title, note);
    const anchor = host.querySelector(".lesson-switcher");
    if (anchor) anchor.after(panel);
    else host.prepend(panel);
    try {
      const graphUrl = new URL("../../assets/data/curriculum/knowledge-graph-v1.json", location.origin + root);
      const response = await fetch(graphUrl.href);
      if (!response.ok) throw new Error("Graph unavailable");
      const graph = await response.json();
      if (graph.schema !== "roadmap-knowledge-graph-v1" || !graph.nodes || !Array.isArray(graph.edges)) throw new Error("Invalid graph schema");
      if (!panel.isConnected || !location.pathname.includes("/" + match[1] + "/")) return;
      const nodes = graph.nodes || {};
      const ids = Object.keys(nodes).filter(id => nodes[id].topic === match[1]);
      if (!ids.length) { panel.remove(); return; }
      const edges = graph.edges || [];
      const groups = [
        {label:"Kỹ năng trong chuyên đề", ids, explanation:"Các kỹ năng hiện có trong bản đồ; không phải danh sách đầy đủ mọi bài học."},
        {label:"Kiến thức nền đã xác nhận", ids:[...new Set(edges.filter(e => e.type === "PREREQUISITE" && e.confidence === "high" && ids.includes(e.to) && nodes[e.from]?.topic !== match[1]).map(e => e.from))], explanation:"Chỉ áp dụng cho kỹ năng đích cụ thể, không bắt buộc hoàn thành cả chuyên đề nguồn."},
        {label:"Hướng học tiếp", ids:[...new Set(edges.filter(e => e.type === "PREREQUISITE" && e.confidence === "high" && ids.includes(e.from) && nodes[e.to]?.topic !== match[1]).map(e => e.to))], explanation:"Gợi ý kỹ năng sử dụng kiến thức hiện tại; có thể học theo nhiều nhánh."}
      ];
      const labelFor = id => id.replace(/-/g, " ");
      const topicHref = id => new URL("../" + nodes[id].topic + "/", location.origin + root).href;
      const visibleGroups = groups.filter(group => group.ids.length);
      visibleGroups.forEach(group => {
        const section = document.createElement("div");
        section.className = "skill-connections-group";
        const heading = document.createElement("h3");
        heading.textContent = group.label;
        const description = document.createElement("p");
        description.textContent = group.explanation;
        const list = document.createElement("ul");
        group.ids.forEach(id => {
          const item = document.createElement("li");
          if (nodes[id].topic === match[1]) item.textContent = labelFor(id);
          else {
            const link = document.createElement("a");
            link.href = topicHref(id);
            const targets = edges.filter(e => e.type === "PREREQUISITE" && e.confidence === "high" && ((group.label === "Kiến thức nền đã xác nhận" && e.from === id && ids.includes(e.to)) || (group.label === "Hướng học tiếp" && e.to === id && ids.includes(e.from))));
            link.textContent = labelFor(id);
            link.title = "Mở chuyên đề " + nodes[id].topic.slice(0,2);
            if (targets.length) {
              const detail = document.createElement("small");
              detail.textContent = group.label === "Kiến thức nền đã xác nhận" ? " → dùng cho: " + targets.map(e => labelFor(e.to)).join(", ") : " ← tiếp nối: " + targets.map(e => labelFor(e.from)).join(", ");
              item.appendChild(detail);
            }
            item.prepend(link);
          }
          list.appendChild(item);
        });
        section.append(heading, description, list);
        panel.appendChild(section);
      });
      if (!visibleGroups.length) panel.remove();
    } catch (_) {
      panel.remove(); // A missing graph must never block reading the lesson.
    }
  };

  const init = () => {
    if (!location.pathname.includes("/kien-thuc/") || !location.pathname.match(/\/[0-9][0-9]-[^/]+\//)) document.body.classList.remove("roadmap-focus-mode");
    setupLibrary();
    setupLesson();
    setupSkillConnections();
  };
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init);
  else init();
  if (typeof document$ !== "undefined") document$.subscribe(init);
})();
