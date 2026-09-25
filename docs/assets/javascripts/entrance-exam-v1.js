(() => {
  "use strict";
  const KEY = "toan-thcs-entrance10-exams-v1";
  const pathMatch = () => location.pathname.match(/\/kien-thuc\/25-tong-hop-on-thi-10\/(de-luyen-0[1-3])\/?(?:index\.html)?$/);
  const cssClass = (name, text = "") => {
    const node = document.createElement("div"); node.className = name; node.textContent = text; return node;
  };
  const button = (label, name) => {
    const node = document.createElement("button"); node.type = "button"; node.className = name || "exam-btn";
    node.textContent = label; return node;
  };
  const load = () => { try { return JSON.parse(localStorage.getItem(KEY) || "{}"); } catch (_) { return {}; } };
  const save = data => { try { localStorage.setItem(KEY, JSON.stringify(data)); } catch (_) {} };
  const format = number => Number(number || 0).toLocaleString("vi-VN", {maximumFractionDigits:2});
  const clock = seconds => {
    const n = Math.max(0, Math.floor(seconds));
    return [Math.floor(n/3600), Math.floor(n%3600/60), n%60].map(x => String(x).padStart(2,"0")).join(":");
  };
  let interval = null;
  const init = async () => {
    if (interval) clearInterval(interval);
    interval = null;
    const match = pathMatch();
    if (!match) return;
    const root = document.querySelector(".md-content__inner .md-typeset");
    if (!root || root.dataset.examUiMounted === match[1]) return;
    const script = document.querySelector('script[src*="entrance-exam-v1.js"]');
    if (!script) return;
    let manifest;
    try {
      const url = new URL("../data/exams/entrance10-v1.json", script.src);
      const response = await fetch(url);
      if (!response.ok) throw Error("Không tải được thang điểm.");
      manifest = await response.json();
    } catch (error) {
      console.warn("Entrance exam rubric unavailable", error);
      return; // Static paper + closed answer are still readable without JS.
    }
    const exam = (manifest.exams || []).find(item => item.slug === match[1]);
    const details = [...root.querySelectorAll("details")].find(x =>
      /Đáp án và hướng dẫn chấm/i.test(x.querySelector("summary")?.textContent || "")
    );
    if (!exam || !details) return;
    root.dataset.examUiMounted = match[1];
    details.classList.add("exam-answer-key");
    const banner = document.createElement("section");
    banner.className = "exam-workspace";
    banner.setAttribute("aria-label", "Phòng luyện đề tự luận");
    const top = cssClass("exam-workspace-heading", "📝 Phòng luyện đề · " + exam.title);
    const note = cssClass("exam-workspace-note",
      "Bài làm viết trên giấy. Đồng hồ và tự chấm chỉ phục vụ luyện tập; điểm tự chấm không phải bằng chứng thành thạo độc lập hay điểm thi chính thức.");
    const time = cssClass("exam-workspace-timer");
    time.setAttribute("role", "timer");
    const controls = cssClass("exam-workspace-controls");
    const start = button("Bắt đầu 120 phút", "exam-btn exam-btn-primary");
    const submit = button("Nộp bài / Kết thúc", "exam-btn");
    const retry = button("Làm lượt mới", "exam-btn");
    const print = button("In đề (không đáp án)", "exam-btn");
    controls.append(start, submit, retry, print);
    const feedback = cssClass("exam-workspace-feedback");
    feedback.setAttribute("role", "status");
    const rubric = cssClass("exam-self-mark");
    rubric.hidden = true;
    banner.append(top,note,time,controls,feedback,rubric);
    const mainHeading = root.querySelector("h1");
    mainHeading?.insertAdjacentElement("afterend", banner);

    // The published answer key remains in the static DOM, so this is an
    // educational/honor-system gate, not a secure exam proctoring mechanism.
    details.open = false;
    const store = load();
    let current = store[exam.id] || null;
    const persist = () => { store[exam.id] = current; save(store); };
    const finished = () => Boolean(current?.submittedAt);
    const unlock = () => {
      if (finished()) return;
      details.open = false;
      feedback.textContent = "Hãy nộp bài hoặc chờ hết giờ rồi mới mở đáp án.";
    };
    details.querySelector("summary")?.addEventListener("click", event => {
      if (!finished()) { event.preventDefault(); unlock(); }
    });

    const setRubric = () => {
      rubric.replaceChildren();
      if (!finished()) { rubric.hidden = true; return; }
      rubric.hidden = false;
      const heading = document.createElement("h3");
      heading.textContent = "Tự chấm theo từng bước (0–10 điểm)";
      const description = document.createElement("p");
      description.textContent = "Chỉ đánh dấu bước đã viết đúng trong bài làm gốc trước khi xem lời giải. Không tick vì vừa hiểu lời giải sau khi nộp.";
      rubric.append(heading,description);
      const list = cssClass("exam-rubric-list");
      const awarded = current.awarded || {};
      exam.rubric.forEach(item => {
        const row = document.createElement("label");
        row.className = "exam-rubric-item";
        const check = document.createElement("input");
        check.type = "checkbox";
        check.checked = Boolean(awarded[item.id]);
        check.setAttribute("aria-label", item.label);
        check.addEventListener("change", () => {
          current.awarded[item.id] = check.checked;
          current.selfScore = exam.rubric.reduce((n, part) => n + (current.awarded[part.id] ? part.points : 0), 0);
          persist(); setTotal();
        });
        const span = document.createElement("span");
        span.textContent = item.label + " · " + format(item.points) + " điểm";
        row.append(check,span);
        list.appendChild(row);
      });
      const total = cssClass("exam-rubric-total");
      total.setAttribute("aria-live","polite");
      total.dataset.examScore = "1";
      rubric.append(list,total);
      const gapTitle = document.createElement("h4");
      gapTitle.textContent = "Nếu còn bước chưa đạt, quay về học gì?";
      const gaps = document.createElement("div");
      gaps.className = "exam-gap-links";
      const refs = [...new Set(exam.rubric.filter(x => !current.awarded[x.id]).map(x => x.anchor_reference))];
      refs.forEach(ref => {
        const row = document.createElement("div");
        row.textContent = "• " + ref + " – ";
        const link = document.createElement("a");
        link.href = ref.startsWith("CLASSIC_") ? "../bai-toan-kinh-dien/" : "../bai-tap/";
        link.textContent = ref.startsWith("CLASSIC_") ? "mở bài mỏ neo" : "mở luyện tập kiến thức";
        row.appendChild(link);
        gaps.appendChild(row);
      });
      rubric.append(gapTitle,gaps);
      const totalNode = () => rubric.querySelector("[data-exam-score]");
      function setTotal() { const node = totalNode(); if (node) node.textContent = "Điểm tự chấm: " + format(current.selfScore) + " / 10"; }
      setTotal();
      details.open = true;
    };
    const finish = reason => {
      if (finished() || !current?.startedAt) return;
      current.submittedAt = Date.now();
      current.reason = reason;
      current.awarded = {};
      current.selfScore = 0;
      persist();
      if (interval) clearInterval(interval);
      interval = null;
      redraw();
    };
    const redraw = () => {
      const hasStarted = Boolean(current?.startedAt);
      const isDone = finished();
      start.hidden = hasStarted;
      submit.hidden = !hasStarted || isDone;
      retry.hidden = !isDone;
      if (!hasStarted) {
        time.textContent = clock(exam.duration_minutes * 60);
        feedback.textContent = "Bắt đầu đồng hồ khi em sẵn sàng làm trên giấy.";
      } else if (isDone) {
        time.textContent = "Đã nộp bài";
        feedback.textContent = current.reason === "time" ? "Hết 120 phút · đáp án đã mở." : "Đã nộp bài · đối chiếu và tự chấm từng bước.";
      } else {
        const remaining = exam.duration_minutes * 60 - Math.floor((Date.now() - current.startedAt)/1000);
        time.textContent = clock(remaining);
        feedback.textContent = "Đang làm bài. Đáp án bị thu gọn cho tới khi nộp hoặc hết giờ.";
        if (remaining <= 0) { finish("time"); return; }
      }
      setRubric();
    };
    start.addEventListener("click", () => {
      if (current?.startedAt && !finished()) return;
      current = { startedAt: Date.now(), submittedAt: null, awarded:{}, selfScore:0 };
      persist(); redraw();
    });
    submit.addEventListener("click", () => {
      if (!current?.startedAt || finished()) return;
      if (confirm("Em đã hoàn thành bài làm trên giấy và muốn mở đáp án để tự chấm?")) finish("submitted");
    });
    retry.addEventListener("click", () => {
      if (!finished()) return;
      if (confirm("Bắt đầu lượt mới? Điểm tự chấm trước đó sẽ được lưu vào lịch sử lượt làm, không xóa các kết quả bài luyện khác.")) {
        const history = store.history || [];
        history.push({ exam_id: exam.id, startedAt:current.startedAt, submittedAt:current.submittedAt, score:current.selfScore });
        store.history = history.slice(-30);
        current = { startedAt:Date.now(), submittedAt:null, awarded:{}, selfScore:0 };
        details.open = false; persist(); redraw();
      }
    });
    print.addEventListener("click", () => window.print());
    interval = setInterval(redraw,1000);
    redraw();
  };
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init);
  else init();
  if (typeof document$ !== "undefined") document$.subscribe(init);
})();