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
      if (!question?.id || ids.has(question.id)) {
        throw new Error(`ID câu hỏi không hợp lệ hoặc bị trùng: ${question?.id || "(trống)"}`);
      }
      ids.add(question.id);
      if (!Array.isArray(question.options) || question.options.length < 2) {
        throw new Error(`Câu ${question.id} thiếu phương án`);
      }
      if (!Number.isInteger(question.answer) || question.answer < 0 || question.answer >= question.options.length) {
        throw new Error(`Câu ${question.id} có answer không hợp lệ`);
      }
      if (question.diagram !== undefined) {
        if (!question.diagram || typeof question.diagram !== "object" || Array.isArray(question.diagram)) {
          throw new Error(`Câu ${question.id} có diagram không hợp lệ`);
        }
        if (!String(question.diagram.src || "").trim() || !String(question.diagram.alt || "").trim()) {
          throw new Error(`Câu ${question.id} có diagram nhưng thiếu src/alt`);
        }
      }
      if (question.hints !== undefined) {
        if (!Array.isArray(question.hints) || !question.hints.length || question.hints.some((hint) => !String(hint || "").trim())) {
          throw new Error(`Câu ${question.id} có hints không hợp lệ`);
        }
      }
    }
  };

  const fetchJson = async (url) => {
    const response = await fetch(url);
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    return response.json();
  };

  const normalizeQuestion = (question, baseUrl) => {
    if (!question?.diagram?.src) return question;
    return {
      ...question,
      diagram: {
        ...question.diagram,
        resolvedSrc: new URL(question.diagram.src, baseUrl).href
      }
    };
  };

  const loadBank = async (source) => {
    const manifestUrl = new URL(source, document.baseURI);
    const data = await fetchJson(manifestUrl);

    if (data.schema !== "practice-bank-manifest-v1") {
      const questions = (data.questions || []).map((question) => normalizeQuestion(question, manifestUrl));
      validateQuestions(questions);
      return { ...data, questions };
    }

    if (!Array.isArray(data.sources) || !data.sources.length) {
      throw new Error("Manifest chưa khai báo sources");
    }

    const chunks = await Promise.all(
      data.sources.map((relativePath) => fetchJson(new URL(relativePath, manifestUrl)))
    );
    const questions = chunks
      .flatMap((chunk) => chunk.questions || [])
      .map((question) => normalizeQuestion(question, manifestUrl));
    validateQuestions(questions);

    if (data.question_count && questions.length !== data.question_count) {
      throw new Error(`Manifest khai báo ${data.question_count} câu nhưng tải được ${questions.length}`);
    }

    return { ...data, questions };
  };

  const weightedQuestionPool = (questions, stats) => {
    const expanded = [];
    questions.forEach((question) => {
      const record = stats.questions[question.id];
      let weight = 6;
      if (!record?.attempted) weight = 10;
      else if (accuracy(record) < 0.7) weight = 8;
      else weight = 3;
      for (let i = 0; i < weight; i += 1) expanded.push(question);
    });

    const picked = [];
    const used = new Set();
    for (const question of shuffle(expanded)) {
      if (!used.has(question.id)) {
        picked.push(question);
        used.add(question.id);
      }
      if (picked.length >= questions.length) break;
    }
    return picked;
  };

  const buildSkillGroups = (bank, bankSkills) => {
    const configured = Array.isArray(bank.skill_groups) ? bank.skill_groups : [];
    const groups = [];
    const seen = new Set();

    configured.forEach((group, index) => {
      if (!group || !Array.isArray(group.skills)) return;
      const skills = group.skills.filter((skill) => bankSkills.includes(skill) && !seen.has(skill));
      if (!skills.length) return;
      skills.forEach((skill) => seen.add(skill));
      groups.push({
        id: group.id || `group-${index + 1}`,
        label: group.label || `Nhóm ${index + 1}`,
        skills
      });
    });

    const leftovers = bankSkills.filter((skill) => !seen.has(skill));
    if (leftovers.length) groups.push({ id: "other", label: "Kỹ năng khác", skills: leftovers });
    if (!groups.length) groups.push({ id: "skills", label: "Kỹ năng", skills: [...bankSkills] });
    return groups;
  };

  const rankWeakSkills = (stats, bankSkills, skillOrder) => {
    const allowed = new Set(bankSkills);
    const order = new Map(skillOrder.map((skill, index) => [skill, index]));
    return Object.entries(stats.tags)
      .filter(([skill, record]) => allowed.has(skill) && record.attempted >= 3 && accuracy(record) < 0.75)
      .sort((a, b) => {
        const accuracyDiff = (accuracy(a[1]) ?? 1) - (accuracy(b[1]) ?? 1);
        if (Math.abs(accuracyDiff) > 1e-9) return accuracyDiff;
        const attemptsDiff = b[1].attempted - a[1].attempted;
        if (attemptsDiff) return attemptsDiff;
        return (order.get(a[0]) ?? 999) - (order.get(b[0]) ?? 999);
      })
      .map(([skill]) => skill);
  };

  const pickFromPool = (pool, count, used) => {
    const result = [];
    for (const question of pool) {
      if (used.has(question.id)) continue;
      result.push(question);
      used.add(question.id);
      if (result.length >= count) break;
    }
    return result;
  };

  const buildFocusedSession = (questions, stats, skills, sessionSize) => {
    const focus = skills.filter(Boolean).slice(0, 2);
    if (!focus.length) return [];

    const used = new Set();
    const selected = [];
    const firstQuota = focus.length === 2 ? Math.ceil(sessionSize / 2) : sessionSize;
    const quotas = focus.length === 2 ? [firstQuota, sessionSize - firstQuota] : [sessionSize];

    focus.forEach((skill, index) => {
      const subset = questions.filter((question) => questionSkills(question).includes(skill));
      const pool = weightedQuestionPool(subset, stats);
      selected.push(...pickFromPool(pool, quotas[index], used));
    });

    if (selected.length < sessionSize) {
      const focusSet = new Set(focus);
      const union = questions.filter((question) => questionSkills(question).some((skill) => focusSet.has(skill)));
      selected.push(...pickFromPool(weightedQuestionPool(union, stats), sessionSize - selected.length, used));
    }

    if (selected.length < sessionSize) {
      selected.push(...pickFromPool(weightedQuestionPool(questions, stats), sessionSize - selected.length, used));
    }

    return shuffle(selected).slice(0, sessionSize);
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
      this.skillGroups = buildSkillGroups(bank, this.bankSkills);
      this.skillOrder = this.skillGroups.flatMap((group) => group.skills);
      this.stats = loadStats();
      this.session = [];
      this.index = 0;
      this.score = 0;
      this.answered = false;
      this.hintLevel = 0;
      this.mode = "normal";
      this.focusSkills = [];
      this.renderShell();
      this.startNormalSession();
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
          <div class="practice-diagram" hidden></div>
          <div class="practice-options"></div>
          <div class="practice-hints" hidden></div>
          <div class="practice-feedback" hidden></div>
          <div class="practice-actions"></div>
        </div>
        <details class="practice-stats-panel">
          <summary>📊 Xem tiến độ theo kỹ năng</summary>
          <div class="practice-stats-note">Thứ tự kỹ năng cố định theo lộ trình học. Bấm vào một kỹ năng để luyện riêng.</div>
          <div class="practice-stats"></div>
        </details>
      `;

      this.subtitleEl = this.root.querySelector(".practice-subtitle");
      this.toolbarActionsEl = this.root.querySelector(".practice-toolbar-actions");
      this.progressEl = this.root.querySelector(".practice-progress");
      this.cardEl = this.root.querySelector(".practice-card");
      this.metaEl = this.root.querySelector(".practice-meta");
      this.questionEl = this.root.querySelector(".practice-question");
      this.diagramEl = this.root.querySelector(".practice-diagram");
      this.optionsEl = this.root.querySelector(".practice-options");
      this.hintsEl = this.root.querySelector(".practice-hints");
      this.feedbackEl = this.root.querySelector(".practice-feedback");
      this.actionsEl = this.root.querySelector(".practice-actions");
      this.statsEl = this.root.querySelector(".practice-stats");

      const normalBtn = createButton("Bộ 10 câu mới", "practice-btn-secondary");
      normalBtn.addEventListener("click", () => this.startNormalSession());
      const weakBtn = createButton("Luyện điểm yếu", "practice-btn-secondary");
      weakBtn.addEventListener("click", () => this.startWeakSession());
      this.toolbarActionsEl.append(normalBtn, weakBtn);
    }

    setSession(session, mode, focusSkills, subtitle) {
      this.session = session;
      this.mode = mode;
      this.focusSkills = focusSkills;
      this.index = 0;
      this.score = 0;
      this.answered = false;
      this.subtitleEl.textContent = subtitle;
      this.renderQuestion();
      this.renderStats();
    }

    startNormalSession() {
      this.stats = loadStats();
      const pool = weightedQuestionPool(this.questions, this.stats);
      const session = pool.slice(0, Math.min(this.sessionSize, pool.length));
      this.setSession(
        session,
        "normal",
        [],
        `Ngân hàng ${this.questions.length} câu · mỗi lượt ${session.length} câu; câu chưa làm và câu từng làm sai được ưu tiên xuất hiện lại.`
      );
    }

    startWeakSession() {
      this.stats = loadStats();
      const weakSkills = rankWeakSkills(this.stats, this.bankSkills, this.skillOrder).slice(0, 2);
      if (!weakSkills.length) {
        const pool = weightedQuestionPool(this.questions, this.stats);
        const session = pool.slice(0, Math.min(this.sessionSize, pool.length));
        this.setSession(
          session,
          "weak",
          [],
          `Chưa có kỹ năng đủ ít nhất 3 lượt và dưới 75%. Hệ thống tạm dùng bộ hỗn hợp để thu thập thêm dữ liệu.`
        );
        return;
      }

      const session = buildFocusedSession(this.questions, this.stats, weakSkills, this.sessionSize);
      const labels = weakSkills.map((skill) => this.prettyTag(skill));
      this.setSession(
        session,
        "weak",
        weakSkills,
        `Luyện điểm yếu · ưu tiên ${labels.join(" + ")} theo thứ tự độ chính xác thấp nhất.`
      );
    }

    startSkillSession(skill) {
      this.stats = loadStats();
      const subset = this.questions.filter((question) => questionSkills(question).includes(skill));
      const pool = weightedQuestionPool(subset, this.stats);
      const session = pool.slice(0, Math.min(this.sessionSize, pool.length));
      this.setSession(
        session,
        "skill",
        [skill],
        `Luyện riêng: ${this.prettyTag(skill)} · ${session.length} câu được ưu tiên theo lịch sử làm bài của bạn.`
      );
      this.root.scrollIntoView({ behavior: "smooth", block: "start" });
    }

    currentQuestion() {
      return this.session[this.index];
    }

    renderDiagram(question) {
      this.diagramEl.hidden = true;
      this.diagramEl.innerHTML = "";
      const diagram = question?.diagram;
      if (!diagram?.resolvedSrc) return;

      const figure = document.createElement("figure");
      figure.className = "practice-diagram-figure";
      const img = document.createElement("img");
      img.src = diagram.resolvedSrc;
      img.alt = diagram.alt || "Hình minh họa cho câu hỏi";
      img.loading = "lazy";
      img.decoding = "async";
      img.addEventListener("error", () => {
        this.diagramEl.hidden = true;
      });
      figure.appendChild(img);

      if (String(diagram.caption || "").trim()) {
        const caption = document.createElement("figcaption");
        caption.textContent = diagram.caption;
        figure.appendChild(caption);
      }

      this.diagramEl.appendChild(figure);
      this.diagramEl.hidden = false;
    }

    renderQuestion() {
      if (!this.session.length) {
        this.cardEl.innerHTML = "<p>Chưa có câu hỏi phù hợp trong ngân hàng.</p>";
        return;
      }
      if (this.index >= this.session.length) {
        this.renderSummary();
        return;
      }

      const question = this.currentQuestion();
      this.answered = false;
      this.hintLevel = 0;
      this.progressEl.textContent = `Câu ${this.index + 1}/${this.session.length} · Đúng ${this.score}`;
      this.metaEl.textContent = `${this.difficultyLabel(question.difficulty)} · ${this.skillLabel(question)}`;
      this.questionEl.textContent = question.question;
      this.renderDiagram(question);
      this.optionsEl.innerHTML = "";
      this.hintsEl.hidden = true;
      this.hintsEl.innerHTML = "";
      this.feedbackEl.hidden = true;
      this.feedbackEl.className = "practice-feedback";
      this.feedbackEl.innerHTML = "";
      this.actionsEl.innerHTML = "";

      const displayOptions = shuffle(question.options.map((text, originalIndex) => ({ text, originalIndex })));
      displayOptions.forEach(({ text, originalIndex }) => {
        const button = createButton(text, "practice-option");
        button.dataset.originalIndex = String(originalIndex);
        button.addEventListener("click", () => this.answer(originalIndex));
        this.optionsEl.appendChild(button);
      });

      if (Array.isArray(question.hints) && question.hints.length) {
        const hintBtn = createButton("💡 Xem gợi ý", "practice-btn-secondary");
        hintBtn.addEventListener("click", () => this.showNextHint(question, hintBtn));
        this.actionsEl.appendChild(hintBtn);
      }

      typeset(this.cardEl);
    }

    showNextHint(question, button) {
      if (this.answered || !Array.isArray(question.hints) || this.hintLevel >= question.hints.length) return;

      this.hintLevel += 1;
      this.hintsEl.hidden = false;

      const hint = document.createElement("div");
      hint.className = "practice-hint";
      const label = document.createElement("strong");
      label.textContent = `Gợi ý ${this.hintLevel}`;
      const body = document.createElement("div");
      body.textContent = question.hints[this.hintLevel - 1];
      hint.append(label, body);
      this.hintsEl.appendChild(hint);

      if (this.hintLevel >= question.hints.length) {
        button.textContent = "Đã xem hết gợi ý";
        button.disabled = true;
      } else {
        button.textContent = `💡 Gợi ý tiếp (${this.hintLevel + 1}/${question.hints.length})`;
      }
      typeset(this.hintsEl);
    }

    answer(selectedIndex) {
      if (this.answered) return;
      this.answered = true;
      const question = this.currentQuestion();
      const correct = selectedIndex === question.answer;
      if (correct) this.score += 1;
      this.record(question, correct, this.hintLevel);

      const optionButtons = [...this.optionsEl.querySelectorAll(".practice-option")];
      optionButtons.forEach((button) => {
        const originalIndex = Number(button.dataset.originalIndex);
        button.disabled = true;
        if (originalIndex === question.answer) button.classList.add("is-correct");
        if (originalIndex === selectedIndex && !correct) button.classList.add("is-wrong");
      });

      this.feedbackEl.hidden = false;
      this.feedbackEl.classList.add(correct ? "is-correct" : "is-wrong");
      const heading = document.createElement("strong");
      heading.textContent = correct ? "✓ Chính xác" : "✗ Chưa đúng";
      const explanation = document.createElement("div");
      explanation.className = "practice-explanation";
      explanation.textContent = question.explanation;
      this.feedbackEl.append(heading, explanation);
      this.actionsEl.innerHTML = "";

      if (!correct && this.index < this.session.length - 1) {
        const similarBtn = createButton("Làm câu tương tự", "practice-btn-primary");
        similarBtn.addEventListener("click", () => this.replaceNextWithSimilar(question));
        this.actionsEl.appendChild(similarBtn);
      }

      const nextBtn = createButton(this.index === this.session.length - 1 ? "Xem kết quả" : "Câu tiếp theo", "practice-btn-primary");
      nextBtn.addEventListener("click", () => {
        this.index += 1;
        this.renderQuestion();
      });
      this.actionsEl.appendChild(nextBtn);
      this.progressEl.textContent = `Câu ${this.index + 1}/${this.session.length} · Đúng ${this.score}`;
      this.renderStats(questionSkills(question));
      typeset(this.cardEl);
    }

    replaceNextWithSimilar(question) {
      if (this.index >= this.session.length - 1) return;
      const wanted = new Set(questionSkills(question));
      const protectedIds = new Set(this.session.filter((_, i) => i !== this.index + 1).map((item) => item.id));
      let candidates = this.questions.filter((candidate) =>
        candidate.id !== question.id &&
        !protectedIds.has(candidate.id) &&
        questionSkills(candidate).some((skill) => wanted.has(skill))
      );
      if (!candidates.length) {
        candidates = this.questions.filter((candidate) =>
          candidate.id !== question.id && questionSkills(candidate).some((skill) => wanted.has(skill))
        );
      }
      if (candidates.length) this.session[this.index + 1] = shuffle(candidates)[0];
      this.index += 1;
      this.renderQuestion();
    }

    record(question, correct, hintsUsed = 0) {
      const questionRecord = this.stats.questions[question.id] || { attempted: 0, correct: 0 };
      questionRecord.attempted += 1;
      if (correct) questionRecord.correct += 1;
      if (hintsUsed > 0) {
        questionRecord.hinted_attempts = (questionRecord.hinted_attempts || 0) + 1;
        questionRecord.hints_used = (questionRecord.hints_used || 0) + hintsUsed;
      }
      if (correct) {
        if (hintsUsed > 0) questionRecord.correct_with_hint = (questionRecord.correct_with_hint || 0) + 1;
        else questionRecord.correct_without_hint = (questionRecord.correct_without_hint || 0) + 1;
      }
      this.stats.questions[question.id] = questionRecord;

      questionSkills(question).forEach((skill) => {
        const record = this.stats.tags[skill] || { attempted: 0, correct: 0 };
        record.attempted += 1;
        if (correct) record.correct += 1;
        if (hintsUsed > 0) {
          record.hinted_attempts = (record.hinted_attempts || 0) + 1;
          record.hints_used = (record.hints_used || 0) + hintsUsed;
        }
        if (correct) {
          if (hintsUsed > 0) record.correct_with_hint = (record.correct_with_hint || 0) + 1;
          else record.correct_without_hint = (record.correct_without_hint || 0) + 1;
        }
        this.stats.tags[skill] = record;
      });
      saveStats(this.stats);
    }

    renderStats(updatedSkills = []) {
      const updated = new Set(updatedSkills);
      const weak = new Set(rankWeakSkills(this.stats, this.bankSkills, this.skillOrder));
      this.statsEl.innerHTML = "";

      this.skillGroups.forEach((group) => {
        const groupEl = document.createElement("section");
        groupEl.className = "practice-skill-group";

        const heading = document.createElement("div");
        heading.className = "practice-skill-group-title";
        heading.textContent = group.label;
        groupEl.appendChild(heading);

        group.skills.forEach((skill) => {
          const record = this.stats.tags[skill] || { attempted: 0, correct: 0 };
          const percent = record.attempted ? Math.round((record.correct / record.attempted) * 100) : 0;
          const status = record.attempted
            ? `${record.correct}/${record.attempted} · ${percent}%`
            : "Chưa luyện";
          const note = weak.has(skill)
            ? "⚠ Cần luyện thêm"
            : record.attempted < 3 && record.attempted > 0
              ? "Đang thu thập dữ liệu"
              : "";

          const button = document.createElement("button");
          button.type = "button";
          button.className = "practice-skill-row";
          if (weak.has(skill)) button.classList.add("is-weak");
          if (updated.has(skill)) button.classList.add("is-updated");
          if (this.focusSkills.includes(skill)) button.classList.add("is-focus");
          button.setAttribute("aria-label", `Luyện kỹ năng ${this.prettyTag(skill)}. Kết quả ${status}`);
          button.innerHTML = `
            <span class="practice-skill-main">
              <strong>${this.prettyTag(skill)}</strong>
              <span>${status}</span>
            </span>
            <span class="practice-skill-note">${note || "Bấm để luyện riêng kỹ năng này"}</span>
            <progress max="100" value="${percent}">${percent}%</progress>
          `;
          button.addEventListener("click", () => this.startSkillSession(skill));
          groupEl.appendChild(button);
        });

        this.statsEl.appendChild(groupEl);
      });
    }

    renderSummary() {
      const percent = Math.round((this.score / this.session.length) * 100);
      this.progressEl.textContent = `Hoàn thành · ${this.score}/${this.session.length} câu đúng`;
      if (this.mode === "weak") this.metaEl.textContent = "Kết quả lượt luyện điểm yếu";
      else if (this.mode === "skill") this.metaEl.textContent = `Kết quả luyện riêng · ${this.prettyTag(this.focusSkills[0])}`;
      else this.metaEl.textContent = "Kết quả lượt luyện tập";
      this.questionEl.textContent = `Bạn đạt ${percent}%.`;
      this.diagramEl.hidden = true;
      this.diagramEl.innerHTML = "";
      this.hintsEl.hidden = true;
      this.hintsEl.innerHTML = "";
      this.optionsEl.innerHTML = "";
      this.feedbackEl.hidden = false;
      this.feedbackEl.className = `practice-feedback ${percent >= 80 ? "is-correct" : "is-wrong"}`;
      this.feedbackEl.textContent = percent >= 80
        ? "Nền tảng khá chắc. Có thể làm một bộ mới hoặc chọn kỹ năng khác trong bảng tiến độ."
        : "Hãy xem bảng tiến độ, chọn kỹ năng cần luyện hoặc dùng “Luyện điểm yếu”.";
      this.actionsEl.innerHTML = "";

      const restartBtn = createButton("Làm bộ 10 câu mới", "practice-btn-primary");
      restartBtn.addEventListener("click", () => this.startNormalSession());
      const weakBtn = createButton("Luyện điểm yếu", "practice-btn-secondary");
      weakBtn.addEventListener("click", () => this.startWeakSession());
      this.actionsEl.append(restartBtn, weakBtn);
      this.renderStats();
    }

    difficultyLabel(level) {
      return ({ basic: "Cơ bản", intermediate: "Thông hiểu", advanced: "Vận dụng" })[level] || level || "Luyện tập";
    }

    skillLabel(question) {
      return questionSkills(question).slice(0, 3).map((skill) => this.prettyTag(skill)).join(" · ");
    }

    prettyTag(skill) {
      return this.skillLabels[skill] || skill.replaceAll("-", " ");
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