(() => {
  "use strict";

  const STORAGE_KEY = "toan-thcs-assessment-v1";
  const MARKER = "[data-readiness-check-v1]";
  const MAX_ATTEMPTS_PER_ASSESSMENT = 20;

  const siteRootFromPath = () => {
    const marker = "/kien-thuc/";
    const pathname = window.location.pathname;
    return pathname.includes(marker) ? (pathname.split(marker)[0] || "") : "";
  };

  const resolveSource = (source) => {
    if (/^https?:\/\//i.test(source)) return source;
    const clean = String(source || "").replace(/^\/+/, "");
    return `${siteRootFromPath()}/${clean}`;
  };

  const fetchJson = async (url) => {
    const response = await fetch(url);
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    return response.json();
  };

  const loadStore = () => {
    try {
      const value = JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};
      if (!value.assessments || typeof value.assessments !== "object") value.assessments = {};
      return value;
    } catch (_) {
      return { assessments: {} };
    }
  };

  const saveStore = (store) => localStorage.setItem(STORAGE_KEY, JSON.stringify(store));

  const shuffleIndices = (length) => {
    const arr = Array.from({ length }, (_, i) => i);
    for (let i = arr.length - 1; i > 0; i -= 1) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  };

  const typeset = (element) => {
    if (window.MathJax?.typesetPromise) {
      window.MathJax.typesetClear?.([element]);
      window.MathJax.typesetPromise([element]).catch(() => {});
    }
  };

  const createButton = (label, className = "") => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = `readiness-btn ${className}`.trim();
    button.textContent = label;
    return button;
  };

  const validate = (data) => {
    if (data?.schema !== "roadmap-readiness-assessment-v1") throw new Error("Schema assessment không hợp lệ.");
    if (!data.assessment_id || !Array.isArray(data.items) || !data.items.length) throw new Error("Assessment thiếu ID hoặc câu hỏi.");
    const ids = new Set();
    data.items.forEach((item) => {
      if (!item.id || ids.has(item.id)) throw new Error(`ID assessment bị trùng: ${item.id || "(trống)"}`);
      ids.add(item.id);
      if (item.type !== "mcq") throw new Error(`Câu ${item.id}: v1 hiện chỉ hỗ trợ mcq.`);
      if (!Array.isArray(item.options) || item.options.length < 2) throw new Error(`Câu ${item.id}: thiếu phương án.`);
      if (!Number.isInteger(item.answer) || item.answer < 0 || item.answer >= item.options.length) throw new Error(`Câu ${item.id}: answer không hợp lệ.`);
      if (!item.skill) throw new Error(`Câu ${item.id}: thiếu skill.`);
    });
  };

  const readinessState = (data, answered, total, correct) => {
    const minimum = Number(data.readiness?.minimum_answered_ratio ?? 0.8);
    const threshold = Number(data.readiness?.ready_threshold ?? 0.8);
    const answeredRatio = total ? answered / total : 0;
    const accuracy = total ? correct / total : 0;
    if (answeredRatio < minimum) return "MORE_EVIDENCE_NEEDED";
    if (accuracy >= threshold) return "READY";
    return "REVIEW_RECOMMENDED";
  };

  const stateCopy = (state) => {
    if (state === "READY") return {
      title: "Sẵn sàng học tiếp",
      text: "Kết quả Core hiện tại cho thấy bạn đã xử lý được phần lớn yêu cầu cốt lõi. Hãy chữa các câu sai rồi có thể tiếp tục Roadmap."
    };
    if (state === "REVIEW_RECOMMENDED") return {
      title: "Nên củng cố thêm một vài kỹ năng",
      text: "Bạn vẫn có thể học tiếp, nhưng nên luyện lại đúng các kỹ năng còn sai trước hoặc trong quá trình học chuyên đề sau."
    };
    return {
      title: "Chưa đủ evidence cho readiness",
      text: "Bạn chưa trả lời đủ phần lớn bài kiểm tra. Hãy làm thêm câu hoặc luyện thêm rồi thử lại; đây không phải hard gate."
    };
  };

  class ReadinessAssessment {
    constructor(root, data) {
      this.root = root;
      this.data = data;
      this.items = data.items;
      this.answers = new Map();
      this.optionOrders = new Map(this.items.map((item) => [item.id, shuffleIndices(item.options.length)]));
      this.index = 0;
      this.startedAt = Date.now();
      this.submitted = false;
      this.timerId = null;
      this.renderShell();
      this.startTimer();
      this.renderQuestion();
    }

    renderShell() {
      this.root.classList.add("readiness-engine");
      this.root.innerHTML = `
        <section class="readiness-intro">
          <div>
            <div class="readiness-kicker">KNTT Core · Readiness Check</div>
            <h2>${this.data.title || this.data.topic?.title || "Tự kiểm tra"}</h2>
            <p>Không gợi ý · không Tutor · chỉ chấm sau khi nộp. Kết quả dùng để định hướng ôn tập, không khóa việc học tiếp.</p>
          </div>
          <div class="readiness-time" aria-live="polite"></div>
        </section>
        <div class="readiness-progress" aria-live="polite"></div>
        <section class="readiness-card">
          <div class="readiness-meta"></div>
          <div class="readiness-question"></div>
          <div class="readiness-options"></div>
          <div class="readiness-nav"></div>
        </section>
        <section class="readiness-result" hidden aria-live="polite"></section>
      `;
      this.timeEl = this.root.querySelector(".readiness-time");
      this.progressEl = this.root.querySelector(".readiness-progress");
      this.cardEl = this.root.querySelector(".readiness-card");
      this.metaEl = this.root.querySelector(".readiness-meta");
      this.questionEl = this.root.querySelector(".readiness-question");
      this.optionsEl = this.root.querySelector(".readiness-options");
      this.navEl = this.root.querySelector(".readiness-nav");
      this.resultEl = this.root.querySelector(".readiness-result");
    }

    startTimer() {
      const render = () => {
        const elapsed = Math.floor((Date.now() - this.startedAt) / 1000);
        const mm = String(Math.floor(elapsed / 60)).padStart(2, "0");
        const ss = String(elapsed % 60).padStart(2, "0");
        const target = Number(this.data.policy?.target_minutes || 0);
        this.timeEl.textContent = target ? `Đã làm ${mm}:${ss} · gợi ý ~${target} phút` : `Đã làm ${mm}:${ss}`;
      };
      render();
      this.timerId = window.setInterval(render, 1000);
    }

    renderQuestion() {
      if (this.submitted) return;
      const item = this.items[this.index];
      const answered = this.answers.size;
      this.progressEl.textContent = `Câu ${this.index + 1}/${this.items.length} · Đã trả lời ${answered}/${this.items.length}`;
      this.metaEl.textContent = this.data.skill_labels?.[item.skill] || item.skill;
      this.questionEl.textContent = item.question;
      this.optionsEl.innerHTML = "";
      const order = this.optionOrders.get(item.id);
      order.forEach((originalIndex) => {
        const label = document.createElement("label");
        label.className = "readiness-option";
        const input = document.createElement("input");
        input.type = "radio";
        input.name = `readiness-${item.id}`;
        input.value = String(originalIndex);
        input.checked = this.answers.get(item.id) === originalIndex;
        input.addEventListener("change", () => {
          this.answers.set(item.id, originalIndex);
          this.progressEl.textContent = `Câu ${this.index + 1}/${this.items.length} · Đã trả lời ${this.answers.size}/${this.items.length}`;
        });
        const text = document.createElement("span");
        text.textContent = item.options[originalIndex];
        label.append(input, text);
        this.optionsEl.appendChild(label);
      });

      this.navEl.innerHTML = "";
      const prev = createButton("← Câu trước", "readiness-btn-secondary");
      prev.disabled = this.index === 0;
      prev.addEventListener("click", () => { this.index -= 1; this.renderQuestion(); });
      const next = createButton(this.index === this.items.length - 1 ? "Xem lại từ đầu" : "Câu tiếp →", "readiness-btn-secondary");
      next.addEventListener("click", () => {
        this.index = this.index === this.items.length - 1 ? 0 : this.index + 1;
        this.renderQuestion();
      });
      const submit = createButton("Nộp bài", "readiness-btn-primary");
      submit.addEventListener("click", () => this.submit());
      this.navEl.append(prev, next, submit);
      typeset(this.cardEl);
    }

    submit() {
      if (this.submitted) return;
      const unanswered = this.items.length - this.answers.size;
      if (unanswered > 0 && !window.confirm(`Bạn còn ${unanswered} câu chưa trả lời. Vẫn nộp bài?`)) return;

      this.submitted = true;
      if (this.timerId) window.clearInterval(this.timerId);
      const submittedAt = new Date().toISOString();
      const durationSeconds = Math.floor((Date.now() - this.startedAt) / 1000);
      let correct = 0;
      const skillMap = {};
      const itemResults = this.items.map((item) => {
        const selected = this.answers.has(item.id) ? this.answers.get(item.id) : null;
        const ok = selected === item.answer;
        if (ok) correct += 1;
        if (!skillMap[item.skill]) skillMap[item.skill] = { attempted: 0, correct: 0 };
        if (selected !== null) {
          skillMap[item.skill].attempted += 1;
          if (ok) skillMap[item.skill].correct += 1;
        }
        return { id: item.id, selected, correct: ok };
      });
      const state = readinessState(this.data, this.answers.size, this.items.length, correct);
      const attempt = {
        assessment_id: this.data.assessment_id,
        topic: this.data.topic?.id || null,
        layer: this.data.layer || "KNTT-Core",
        submitted_at: submittedAt,
        duration_seconds: durationSeconds,
        answered: this.answers.size,
        total: this.items.length,
        correct,
        accuracy: this.items.length ? correct / this.items.length : 0,
        readiness_state: state,
        skills: skillMap,
        items: itemResults
      };
      this.persist(attempt);
      this.renderResult(attempt);
    }

    persist(attempt) {
      const store = loadStore();
      const bucket = store.assessments[this.data.assessment_id] || { attempts: [] };
      bucket.attempts = [...(bucket.attempts || []), attempt].slice(-MAX_ATTEMPTS_PER_ASSESSMENT);
      bucket.latest = attempt;
      const best = bucket.best;
      if (!best || attempt.accuracy > best.accuracy) bucket.best = {
        accuracy: attempt.accuracy,
        submitted_at: attempt.submitted_at,
        readiness_state: attempt.readiness_state
      };
      store.assessments[this.data.assessment_id] = bucket;
      saveStore(store);
    }

    renderResult(attempt) {
      this.cardEl.hidden = true;
      const copy = stateCopy(attempt.readiness_state);
      const percent = Math.round(attempt.accuracy * 100);
      const minutes = Math.floor(attempt.duration_seconds / 60);
      const seconds = String(attempt.duration_seconds % 60).padStart(2, "0");
      this.resultEl.hidden = false;
      this.resultEl.innerHTML = `
        <div class="readiness-result-hero">
          <div class="readiness-score">${attempt.correct}/${attempt.total} · ${percent}%</div>
          <h3>${copy.title}</h3>
          <p>${copy.text}</p>
          <div class="readiness-result-meta">Thời gian: ${minutes}:${seconds} · Core only · không hard gate</div>
        </div>
        <div class="readiness-skill-results"></div>
        <div class="readiness-result-actions"></div>
        <div class="readiness-review"></div>
      `;

      const skillResults = this.resultEl.querySelector(".readiness-skill-results");
      Object.entries(attempt.skills).forEach(([skill, record]) => {
        const row = document.createElement("div");
        row.className = "readiness-skill-row";
        const pct = record.attempted ? Math.round(record.correct / record.attempted * 100) : 0;
        row.innerHTML = `<span><strong>${this.data.skill_labels?.[skill] || skill}</strong></span><span>${record.correct}/${record.attempted} · ${pct}%</span>`;
        skillResults.appendChild(row);
      });

      const actions = this.resultEl.querySelector(".readiness-result-actions");
      const wrongSkills = [...new Set(this.items
        .filter((item) => this.answers.get(item.id) !== item.answer)
        .map((item) => item.skill))];
      wrongSkills.slice(0, 3).forEach((skill) => {
        const a = document.createElement("a");
        a.className = "readiness-action-link";
        a.href = `${siteRootFromPath()}/kien-thuc/${this.data.topic.id}/bai-tap/?focus=${encodeURIComponent(skill)}&mode=remediation`;
        a.textContent = `🎯 Luyện lại: ${this.data.skill_labels?.[skill] || skill}`;
        actions.appendChild(a);
      });
      const retry = createButton("Làm lại Readiness Check", "readiness-btn-secondary");
      retry.addEventListener("click", () => window.location.reload());
      actions.appendChild(retry);

      if (this.data.next_topic?.id) {
        const next = document.createElement("a");
        next.className = "readiness-action-link";
        next.href = `${siteRootFromPath()}/kien-thuc/${this.data.next_topic.id}/`;
        next.textContent = `→ Học tiếp: ${this.data.next_topic.title || this.data.next_topic.id}`;
        actions.appendChild(next);
      }

      const review = this.resultEl.querySelector(".readiness-review");
      const heading = document.createElement("h3");
      heading.textContent = "Chữa bài sau khi nộp";
      review.appendChild(heading);
      this.items.forEach((item, idx) => {
        const selected = this.answers.has(item.id) ? this.answers.get(item.id) : null;
        const details = document.createElement("details");
        details.className = "readiness-review-item";
        const summary = document.createElement("summary");
        const ok = selected === item.answer;
        summary.textContent = `${ok ? "✓" : "✗"} Câu ${idx + 1} · ${this.data.skill_labels?.[item.skill] || item.skill}`;
        const body = document.createElement("div");
        const learner = selected === null ? "Chưa trả lời" : item.options[selected];
        body.innerHTML = `
          <p><strong>Đề:</strong> ${item.question}</p>
          <p><strong>Bạn chọn:</strong> ${learner}</p>
          <p><strong>Đáp án:</strong> ${item.options[item.answer]}</p>
          <p><strong>Giải thích:</strong> ${item.explanation || ""}</p>
        `;
        details.append(summary, body);
        review.appendChild(details);
      });
      typeset(this.resultEl);
    }
  }

  const init = async () => {
    const roots = [...document.querySelectorAll(MARKER)].filter((root) => !root.dataset.readinessInitialized);
    for (const root of roots) {
      root.dataset.readinessInitialized = "1";
      try {
        const source = root.dataset.readinessCheckV1;
        const data = await fetchJson(resolveSource(source));
        validate(data);
        new ReadinessAssessment(root, data);
      } catch (error) {
        root.innerHTML = `<div class="readiness-error">Không thể tải Readiness Check: ${error.message}</div>`;
      }
    }
  };

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init);
  else init();

  if (typeof document$ !== "undefined") document$.subscribe(init);
})();