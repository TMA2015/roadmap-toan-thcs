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

  const flatTags = (question) => {
    const tags = question.tags || {};
    return Object.values(tags).flat().filter(Boolean);
  };

  const accuracy = (record) => record && record.attempted ? record.correct / record.attempted : null;

  const shuffle = (items) => {
    const result = [...items];
    for (let i = result.length - 1; i > 0; i -= 1) {
      const j = Math.floor(Math.random() * (i + 1));
      [result[i], result[j]] = [result[j], result[i]];
    }
    return result;
  };

  const weightedPool = (questions, stats, weakOnly = false) => {
    const weakTags = Object.entries(stats.tags)
      .filter(([, rec]) => rec.attempted >= 3 && accuracy(rec) < 0.75)
      .map(([tag]) => tag);

    let source = questions;
    if (weakOnly && weakTags.length) {
      const weakQuestions = questions.filter((q) => flatTags(q).some((tag) => weakTags.includes(tag)));
      if (weakQuestions.length >= 5) source = weakQuestions;
    }

    const expanded = [];
    source.forEach((q) => {
      const rec = stats.questions[q.id];
      let weight = 6;
      if (!rec || !rec.attempted) weight = 10;
      else if (accuracy(rec) < 0.7) weight = 8;
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

  class PracticeEngine {
    constructor(root, bank) {
      this.root = root;
      this.bank = bank;
      this.questions = bank.questions || [];
      this.sessionSize = Number(root.dataset.sessionSize || bank.session_size || 10);
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
      const pool = weightedPool(this.questions, this.stats, weakOnly);
      this.session = pool.slice(0, Math.min(this.sessionSize, pool.length));
      this.index = 0;
      this.score = 0;
      this.answered = false;
      this.subtitleEl.textContent = weakOnly
        ? "Ưu tiên câu thuộc các kỹ năng có độ chính xác dưới 75%. Nếu chưa đủ dữ liệu, hệ thống dùng bộ câu hỗn hợp."
        : "Mỗi lượt gồm 10 câu; câu chưa làm và câu từng làm sai được ưu tiên xuất hiện lại.";
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

      q.options.forEach((option, optionIndex) => {
        const button = createButton(option, "practice-option");
        button.dataset.index = String(optionIndex);
        button.addEventListener("click", () => this.answer(optionIndex));
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
      optionButtons.forEach((button, index) => {
        button.disabled = true;
        if (index === q.answer) button.classList.add("is-correct");
        if (index === selectedIndex && !correct) button.classList.add("is-wrong");
      });

      this.feedbackEl.hidden = false;
      this.feedbackEl.classList.add(correct ? "is-correct" : "is-wrong");
      const heading = document.createElement("strong");
      heading.textContent = correct ? "✓ Chính xác" : "✗ Chưa đúng";
      const explanation = document.createElement("div");
      explanation.className = "practice-explanation";
      explanation.textContent = q.explanation;
      this.feedbackEl.append(heading, explanation);

      if (!correct) {
        const similarBtn = createButton("Làm câu tương tự", "practice-btn-primary");
        similarBtn.addEventListener("click", () => this.insertSimilarQuestion(q));
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

    insertSimilarQuestion(question) {
      const currentTags = new Set(flatTags(question));
      const candidates = this.questions.filter((candidate) =>
        candidate.id !== question.id && flatTags(candidate).some((tag) => currentTags.has(tag))
      );
      if (!candidates.length) return;
      const candidate = shuffle(candidates)[0];
      const alreadyLater = this.session.slice(this.index + 1).some((q) => q.id === candidate.id);
      if (!alreadyLater) this.session.splice(this.index + 1, 0, candidate);
      this.index += 1;
      this.renderQuestion();
    }

    record(question, correct) {
      const qRecord = this.stats.questions[question.id] || { attempted: 0, correct: 0 };
      qRecord.attempted += 1;
      if (correct) qRecord.correct += 1;
      this.stats.questions[question.id] = qRecord;

      flatTags(question).forEach((tag) => {
        const record = this.stats.tags[tag] || { attempted: 0, correct: 0 };
        record.attempted += 1;
        if (correct) record.correct += 1;
        this.stats.tags[tag] = record;
      });
      saveStats(this.stats);
    }

    renderStats() {
      const skillTags = [
        "nhan-biet-don-thuc", "nhan-biet-da-thuc", "he-so-bac", "hang-tu-dong-dang",
        "thu-gon-da-thuc", "cong-tru-da-thuc", "bo-ngoac-dau", "nhan-bieu-thuc",
        "tinh-phan-phoi", "tinh-gia-tri-bieu-thuc", "dieu-kien-xac-dinh",
        "bien-doi-nhieu-buoc", "lap-bieu-thuc", "bai-toan-thuc-te"
      ];
      const rows = skillTags
        .map((tag) => [tag, this.stats.tags[tag]])
        .filter(([, rec]) => rec?.attempted)
        .sort((a, b) => (accuracy(a[1]) ?? 1) - (accuracy(b[1]) ?? 1));

      if (!rows.length) {
        this.statsEl.innerHTML = "<p>Chưa có dữ liệu. Hãy làm vài câu để hệ thống bắt đầu theo dõi kỹ năng.</p>";
        return;
      }

      this.statsEl.innerHTML = "";
      rows.forEach(([tag, rec]) => {
        const percent = Math.round((rec.correct / rec.attempted) * 100);
        const row = document.createElement("div");
        row.className = "practice-stat-row";
        row.innerHTML = `
          <div><strong>${this.prettyTag(tag)}</strong><span>${rec.correct}/${rec.attempted} · ${percent}%</span></div>
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
        ? "Nền tảng khá chắc. Có thể tiếp tục một bộ mới để tăng độ ổn định."
        : "Nên mở bảng tiến độ, xem kỹ năng có tỉ lệ thấp và chọn “Luyện điểm yếu”.";
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
      const skills = Array.isArray(question.tags?.skill) ? question.tags.skill : [question.tags?.skill].filter(Boolean);
      return skills.slice(0, 2).map((tag) => this.prettyTag(tag)).join(" · ");
    }

    prettyTag(tag) {
      const labels = {
        "nhan-biet-don-thuc": "Nhận biết đơn thức",
        "nhan-biet-da-thuc": "Nhận biết đa thức",
        "he-so-bac": "Hệ số và bậc",
        "hang-tu-dong-dang": "Hạng tử đồng dạng",
        "thu-gon-da-thuc": "Thu gọn đa thức",
        "cong-tru-da-thuc": "Cộng – trừ đa thức",
        "bo-ngoac-dau": "Bỏ ngoặc và dấu",
        "nhan-bieu-thuc": "Nhân biểu thức",
        "tinh-phan-phoi": "Tính phân phối",
        "tinh-gia-tri-bieu-thuc": "Tính giá trị biểu thức",
        "dieu-kien-xac-dinh": "Điều kiện xác định",
        "bien-doi-nhieu-buoc": "Biến đổi nhiều bước",
        "lap-bieu-thuc": "Lập biểu thức",
        "bai-toan-thuc-te": "Bài toán thực tế"
      };
      return labels[tag] || tag.replaceAll("-", " ");
    }
  }

  const init = async () => {
    const roots = [...document.querySelectorAll("[data-practice-bank]")];
    for (const root of roots) {
      if (root.dataset.practiceReady === "true") continue;
      root.dataset.practiceReady = "true";
      try {
        const source = root.dataset.practiceBank;
        const response = await fetch(new URL(source, document.baseURI));
        if (!response.ok) throw new Error(`HTTP ${response.status}`);
        const bank = await response.json();
        new PracticeEngine(root, bank);
      } catch (error) {
        root.classList.add("practice-engine", "practice-load-error");
        root.textContent = `Không tải được bộ câu hỏi luyện tập (${error.message}).`;
      }
    }
  };

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init);
  else init();

  if (typeof document$ !== "undefined") document$.subscribe(init);
})();
