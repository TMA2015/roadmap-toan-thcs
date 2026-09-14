(() => {
  "use strict";

  const STORAGE_KEY = "toan-thcs-practice-v1";

  const loadStats = () => {
    try {
      return JSON.parse(localStorage.getItem(STORAGE_KEY)) || { questions: {}, tags: {} };
    } catch (_) {
      return { questions: {}, tags: {} };
    }
  };

  const saveStats = (stats) => localStorage.setItem(STORAGE_KEY, JSON.stringify(stats));
  const accuracy = (record) => record && record.attempted ? record.correct / record.attempted : null;

  const questionSkills = (question) => {
    const value = question?.tags?.skill;
    return Array.isArray(value) ? value.filter(Boolean) : [value].filter(Boolean);
  };

  const shuffle = (items) => {
    const result = [...items];
    for (let i = result.length - 1; i > 0; i -= 1) {
      const j = Math.floor(Math.random() * (i + 1));
      [result[i], result[j]] = [result[j], result[i]];
    }
    return result;
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
    button.className = `practice-btn ${className}`.trim();
    button.textContent = label;
    return button;
  };

  const validateQuestions = (questions) => {
    const ids = new Set();
    for (const question of questions) {
      if (!question?.id || ids.has(question.id)) throw new Error(`ID câu hỏi không hợp lệ hoặc bị trùng: ${question?.id || "(trống)"}`);
      ids.add(question.id);
      if (!Array.isArray(question.options) || question.options.length < 2) throw new Error(`Câu ${question.id} thiếu phương án`);
      if (!Number.isInteger(question.answer) || question.answer < 0 || question.answer >= question.options.length) {
        throw new Error(`Câu ${question.id} có answer không hợp lệ`);
      }
    }
  };

  const fetchJson = async (url) => {
    const response = await fetch(url);
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    return response.json();
  };

  const loadBank = async (source) => {
    const manifestUrl = new URL(source, document.baseURI);
    const data = await fetchJson(manifestUrl);

    if (data.schema !== "practice-bank-manifest-v1") {
      const questions = data.questions || [];
      validateQuestions(questions);
      return { ...data, questions };
    }

    if (!Array.isArray(data.sources) || !data.sources.length) throw new Error("Manifest chưa khai báo sources");
    const chunks = await Promise.all(
      data.sources.map((relativePath) => fetchJson(new URL(relativePath, manifestUrl)))
    );
    const questions = chunks.flatMap((chunk) => chunk.questions || []);
    validateQuestions(questions);

    if (data.question_count && questions.length !== data.question_count) {
      throw new Error(`Manifest khai báo ${data.question_count} câu nhưng tải được ${questions.length}`);
    }

    return { ...data, questions };
  };

  const weightedPool = (questions, stats, bankSkills, weakOnly = false) => {
    const allowedSkills = new Set(bankSkills);
    const weakTags = Object.entries(stats.tags)
      .filter(([tag, rec]) => allowedSkills.has(tag) && rec.attempted >= 3 && accuracy(rec) < 0.75)
      .map(([tag]) => tag);

    let source = questions;
    if (weakOnly && weakTags.length) {
      const weakSet = new Set(weakTags);
      const weakQuestions = questions.filter((q) => questionSkills(q).some((tag) => weakSet.has(tag)));
      if (weakQuestions.length >= 5) source = weakQuestions;
    }

    const expanded = [];
    source.forEach((q) => {
      const record = stats.questions[q.id];
      let weight = 6;
      if (!record?.attempted) weight = 10;
      else if (accuracy(record) < 0.7) weight = 8;
      else weight = 3;
      for (let i = 0; i < weight; i += 1) expanded.push(q);
    });

    const picked = [];
    const used = new Set();
    for (const q of shuffle(expanded)) {
      if (!used.has(q.id)) {
        picked.push(q);
        used.add(q.id);
      }
      if (picked.length >= source.length) break;
    }
    return picked;
  };

  class PracticeEngineV2 {
    constructor(root, bank) {
      this.root = root;
      this.bank = bank;
      this.questions = bank.questions || [];
      this.sessionSize = Number(root.dataset.sessionSize || bank.session_size || 10);
      this.skillLabels = bank.skill_labels || {};
      this.bankSkills = Object.keys(this.skillLabels);
      if (!this.bankSkills.length) {
        this.bankSkills = [...new Set(this.questions.flatMap(questionSkills))];
      }
      this.stats = loadStats();
      this.session = [];
      this.index = 0;
      this.score = 0;
      this.answered = false;
      this.mode = "normal";
      this.renderShell();
      this.startSession(false);
    }

    renderShell() {
      this.root.classList.add("practice-engine");
      this.root.innerHTML = `
        <div class="practice-toolbar">
          <div>
            <strong class="practice-title">🎯 Luyện tập tương tác</strong>
            <div class="practice-subtitle"></div>
          </div>
          <div class="practice-toolbar-actions"></div>
        </div>
        <div class="practice-progress" aria-live="polite"></div>
        <div class="practice-card">
          <div class="practice-meta"></div>
          <div class="practice-question"></div>
          <div class="practice-options"></div>
          <div class="practice-feedback" hidden></div>
          <div class="practice-actions"></div>
        </div>
        <details class="practice-stats-panel">
          <summary>📊 Xem tiến độ theo kỹ năng</summary>
          <div class="practice-stats"></div>
        </details>
      `;

      this.subtitleEl = this.root.querySelector(".practice-subtitle");
      this.toolbarActionsEl = this.root.querySelector(".practice-toolbar-actions");
      this.progressEl = this.root.querySelector(".practice-progress");
      this.cardEl = this.root.querySelector(".practice-card");
      this.metaEl = this.root.querySelector(".practice-meta");
      this.questionEl = this.root.querySelector(".practice-question");
      this.optionsEl = this.root.querySelector(".practice-options");
      this.feedbackEl = this.root.querySelector(".practice-feedback");
      this.actionsEl = this.root.querySelector(".practice-actions");
      this.statsEl = this.root.querySelector(".practice-stats");

      const normalBtn = createButton("Bộ 10 câu mới", "practice-btn-secondary");
      normalBtn.addEventListener("click", () => this.startSession(false));
      const weakBtn = createButton("Luyện điểm yếu", "practice-btn-secondary");
      weakBtn.addEventListener("click", () => this.startSession(true));
      this.toolbarActionsEl.append(normalBtn, weakBtn);
    }

    startSession(weakOnly) {
      this.stats = loadStats();
      this.mode = weakOnly ? "weak" : "normal";
      const pool = weightedPool(this.questions, this.stats, this.bankSkills, weakOnly);
      this.session = pool.slice(0, Math.min(this.sessionSize, pool.length));
      this.index = 0;
      this.score = 0;
      this.answered = false;
      const total = this.questions.length;
      this.subtitleEl.textContent = weakOnly
        ? `Ngân hàng ${total} câu · ưu tiên kỹ năng có độ chính xác dưới 75%. Nếu chưa đủ dữ liệu, hệ thống dùng bộ hỗn hợp.`
        : `Ngân hàng ${total} câu · mỗi lượt ${this.session.length} câu; câu chưa làm và câu từng làm sai được ưu tiên xuất hiện lại.`;
      this.renderQuestion();
      this.renderStats();
    }

    currentQuestion() {
      return this.session[this.index];
    }

    renderQuestion() {
      if (!this.session.length) {
        this.cardEl.innerHTML = "<p>Chưa có câu hỏi trong ngân hàng.</p>";
        return;
      }
      if (this.index >= this.session.length) {
        this.renderSummary();
        return;
      }

      const q = this.currentQuestion();
      this.answered = false;
      this.progressEl.textContent = `Câu ${this.index + 1}/${this.session.length} · Đúng ${this.score}`;
      this.metaEl.textContent = `${this.difficultyLabel(q.difficulty)} · ${this.skillLabel(q)}`;
      this.questionEl.textContent = q.question;
      this.optionsEl.innerHTML = "";
      this.feedbackEl.hidden = true;
      this.feedbackEl.className = "practice-feedback";
      this.feedbackEl.innerHTML = "";
      this.actionsEl.innerHTML = "";

      const displayOptions = shuffle(q.options.map((text, originalIndex) => ({ text, originalIndex })));
      displayOptions.forEach(({ text, originalIndex }) => {
        const button = createButton(text, "practice-option");
        button.dataset.originalIndex = String(originalIndex);
        button.addEventListener("click", () => this.answer(originalIndex));
        this.optionsEl.appendChild(button);
      });
      typeset(this.cardEl);
    }

    answer(selectedIndex) {
      if (this.answered) return;
      this.answered = true;
      const q = this.currentQuestion();
      const correct = selectedIndex === q.answer;
      if (correct) this.score += 1;
      this.record(q, correct);

      const optionButtons = [...this.optionsEl.querySelectorAll(".practice-option")];
      optionButtons.forEach((button) => {
        const originalIndex = Number(button.dataset.originalIndex);
        button.disabled = true;
        if (originalIndex === q.answer) button.classList.add("is-correct");
        if (originalIndex === selectedIndex && !correct) button.classList.add("is-wrong");
      });

      this.feedbackEl.hidden = false;
      this.feedbackEl.classList.add(correct ? "is-correct" : "is-wrong");
      const heading = document.createElement("strong");
      heading.textContent = correct ? "✓ Chính xác" : "✗ Chưa đúng";
      const explanation = document.createElement("div");
      explanation.className = "practice-explanation";
      explanation.textContent = q.explanation;
      this.feedbackEl.append(heading, explanation);

      if (!correct && this.index < this.session.length - 1) {
        const similarBtn = createButton("Làm câu tương tự", "practice-btn-primary");
        similarBtn.addEventListener("click", () => this.replaceNextWithSimilar(q));
        this.actionsEl.appendChild(similarBtn);
      }

      const nextBtn = createButton(this.index === this.session.length - 1 ? "Xem kết quả" : "Câu tiếp theo", "practice-btn-primary");
      nextBtn.addEventListener("click", () => {
        this.index += 1;
        this.renderQuestion();
      });
      this.actionsEl.appendChild(nextBtn);
      this.progressEl.textContent = `Câu ${this.index + 1}/${this.session.length} · Đúng ${this.score}`;
      this.renderStats();
      typeset(this.cardEl);
    }

    replaceNextWithSimilar(question) {
      if (this.index >= this.session.length - 1) return;
      const wanted = new Set(questionSkills(question));
      const protectedIds = new Set(this.session.filter((_, i) => i !== this.index + 1).map((q) => q.id));
      let candidates = this.questions.filter((candidate) =>
        candidate.id !== question.id &&
        !protectedIds.has(candidate.id) &&
        questionSkills(candidate).some((tag) => wanted.has(tag))
      );
      if (!candidates.length) {
        candidates = this.questions.filter((candidate) =>
          candidate.id !== question.id && questionSkills(candidate).some((tag) => wanted.has(tag))
        );
      }
      if (candidates.length) this.session[this.index + 1] = shuffle(candidates)[0];
      this.index += 1;
      this.renderQuestion();
    }

    record(question, correct) {
      const qRecord = this.stats.questions[question.id] || { attempted: 0, correct: 0 };
      qRecord.attempted += 1;
      if (correct) qRecord.correct += 1;
      this.stats.questions[question.id] = qRecord;

      questionSkills(question).forEach((tag) => {
        const record = this.stats.tags[tag] || { attempted: 0, correct: 0 };
        record.attempted += 1;
        if (correct) record.correct += 1;
        this.stats.tags[tag] = record;
      });
      saveStats(this.stats);
    }

    renderStats() {
      const rows = this.bankSkills
        .map((tag) => [tag, this.stats.tags[tag]])
        .filter(([, record]) => record?.attempted)
        .sort((a, b) => (accuracy(a[1]) ?? 1) - (accuracy(b[1]) ?? 1));

      if (!rows.length) {
        this.statsEl.innerHTML = "<p>Chưa có dữ liệu. Hãy làm vài câu để hệ thống bắt đầu theo dõi kỹ năng.</p>";
        return;
      }

      this.statsEl.innerHTML = "";
      rows.forEach(([tag, record]) => {
        const percent = Math.round((record.correct / record.attempted) * 100);
        const row = document.createElement("div");
        row.className = "practice-stat-row";
        row.innerHTML = `
          <div><strong>${this.prettyTag(tag)}</strong><span>${record.correct}/${record.attempted} · ${percent}%</span></div>
          <progress max="100" value="${percent}">${percent}%</progress>
        `;
        this.statsEl.appendChild(row);
      });
    }

    renderSummary() {
      const percent = Math.round((this.score / this.session.length) * 100);
      this.progressEl.textContent = `Hoàn thành · ${this.score}/${this.session.length} câu đúng`;
      this.metaEl.textContent = this.mode === "weak" ? "Kết quả lượt luyện điểm yếu" : "Kết quả lượt luyện tập";
      this.questionEl.textContent = `Bạn đạt ${percent}%.`;
      this.optionsEl.innerHTML = "";
      this.feedbackEl.hidden = false;
      this.feedbackEl.className = `practice-feedback ${percent >= 80 ? "is-correct" : "is-wrong"}`;
      this.feedbackEl.textContent = percent >= 80
        ? "Nền tảng khá chắc. Có thể làm một bộ mới để tăng độ ổn định."
        : "Hãy mở bảng tiến độ, xem kỹ năng có tỉ lệ thấp và chọn “Luyện điểm yếu”.";
      this.actionsEl.innerHTML = "";
      const restartBtn = createButton("Làm bộ 10 câu mới", "practice-btn-primary");
      restartBtn.addEventListener("click", () => this.startSession(false));
      const weakBtn = createButton("Luyện điểm yếu", "practice-btn-secondary");
      weakBtn.addEventListener("click", () => this.startSession(true));
      this.actionsEl.append(restartBtn, weakBtn);
      this.renderStats();
    }

    difficultyLabel(level) {
      return ({ basic: "Cơ bản", intermediate: "Thông hiểu", advanced: "Vận dụng" })[level] || level || "Luyện tập";
    }

    skillLabel(question) {
      return questionSkills(question).slice(0, 2).map((tag) => this.prettyTag(tag)).join(" · ");
    }

    prettyTag(tag) {
      return this.skillLabels[tag] || tag.replaceAll("-", " ");
    }
  }

  const init = async () => {
    const roots = [...document.querySelectorAll("[data-practice-bank-v2]")];
    for (const root of roots) {
      if (root.dataset.practiceReadyV2 === "true") continue;
      root.dataset.practiceReadyV2 = "true";
      try {
        const bank = await loadBank(root.dataset.practiceBankV2);
        new PracticeEngineV2(root, bank);
      } catch (error) {
        root.classList.add("practice-engine", "practice-load-error");
        root.textContent = `Không tải được ngân hàng câu hỏi (${error.message}).`;
      }
    }
  };

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init);
  else init();

  if (typeof document$ !== "undefined") document$.subscribe(init);
})();
