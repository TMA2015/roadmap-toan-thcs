(() => {
  "use strict";

  const isNode = typeof module !== "undefined" && module.exports;
  const core = isNode
    ? require("./canonical-evidence-pilot-v1.js")
    : window.SelfLearningCanonicalEvidenceV4;

  if (!core) {
    if (typeof document !== "undefined") {
      document.querySelectorAll("[data-canonical-evidence-pilot-v2]").forEach((root) => {
        root.textContent = "Chưa tải được lõi Canonical Evidence.";
      });
    }
    return;
  }

  const BUILD = "canonical-evidence-beta-v5-phase-f-r1-20260930";
  const CONFIG_SCHEMA = "canonical-evidence-beta-v5-config-v1";
  const MANIFEST_SCHEMA = "canonical-evidence-phase-f-expansion-r1";
  const EXPECTED_ITEMS = 15;

  const sameArray = (a, b) => Array.isArray(a) && Array.isArray(b) &&
    a.length === b.length && a.every((value, index) => value === b[index]);

  const prepareItems = (config, manifest, sources) => {
    if (config?.schema !== CONFIG_SCHEMA ||
        manifest?.schema !== MANIFEST_SCHEMA ||
        config.storage_key !== core.KEY ||
        !Array.isArray(config.selected_item_ids) ||
        config.selected_item_ids.length !== EXPECTED_ITEMS) {
      throw new Error("Gói Beta v5 không đúng schema hoặc phạm vi");
    }
    if (config.reviewed_manifest_blob !== "5a5b339d7372068dd692b9a03dc1277758a6b6d5") {
      throw new Error("Manifest review blob không đúng");
    }
    const reviewed = manifest?.scope?.selected_items;
    if (!Array.isArray(reviewed) || reviewed.length !== EXPECTED_ITEMS) {
      throw new Error("Reviewed manifest không đủ 15 câu");
    }
    const byId = new Map(reviewed.map((item) => [item.question_id, item]));
    const out = [];
    for (const id of config.selected_item_ids) {
      const ref = byId.get(id);
      if (!ref) throw new Error("Thiếu mapping đã review: " + id);
      const questions = sources[ref.source_file];
      const source = Array.isArray(questions) ? questions.find((q) => q.id === id) : null;
      if (!source) throw new Error("Thiếu câu nguồn: " + id);
      if (source.question !== ref.question ||
          !sameArray(source.options, ref.options) ||
          source.answer !== ref.answer_index ||
          !sameArray(source.tags?.skill || [], ref.legacy_skill_tags || [])) {
        throw new Error("Source drift so với manifest đã review: " + id);
      }
      if (!ref.canonical_skill_id ||
          ref.runtime_enabled !== false ||
          ref.core_readiness_credit !== false) {
        throw new Error("Mapping runtime/readiness không an toàn: " + id);
      }
      out.push({
        id,
        question_id: id,
        question: source.question,
        options: source.options,
        answer: source.answer,
        explanation: source.explanation || "",
        canonical_skill_id: ref.canonical_skill_id,
        supporting_skills: [...(ref.supporting_skills || [])],
        evidence_class: ref.evidence_class,
        clone_family: ref.clone_family || null,
        topic: ref.topic_code,
        topic_label: ref.topic_label,
        source_file: ref.source_file,
        source_blob: ref.source_blob,
        content_version: config.content_version
      });
    }
    if (new Set(out.map((item) => item.id)).size !== EXPECTED_ITEMS) {
      throw new Error("ID trùng trong Beta v5");
    }
    return out;
  };

  const evidenceBreakdown = (state) => {
    const rows = {};
    for (const event of core.normalizedState(state).events) {
      const skill = event.canonical_skill_id;
      const row = rows[skill] || {
        attempts: 0,
        distinct_questions: new Set(),
        units: new Set(),
        correct_units: 0,
        incorrect_units: 0,
        by_class: {},
        by_topic: {}
      };
      row.attempts += 1;
      row.distinct_questions.add(event.question_id);
      if (event.independent_evidence) {
        const unit = core.evidenceUnitKey(event);
        if (!row.units.has(unit)) {
          row.units.add(unit);
          if (event.correct) row.correct_units += 1;
          else row.incorrect_units += 1;
          row.by_class[event.evidence_class] = (row.by_class[event.evidence_class] || 0) + 1;
          row.by_topic[event.topic] = (row.by_topic[event.topic] || 0) + 1;
        }
      }
      rows[skill] = row;
    }
    return Object.fromEntries(Object.entries(rows).map(([skill, row]) => [skill, {
      attempts: row.attempts,
      distinct_questions: row.distinct_questions.size,
      independent_units: row.units.size,
      independent_correct: row.correct_units,
      independent_incorrect: row.incorrect_units,
      by_class: row.by_class,
      by_topic: row.by_topic
    }]));
  };

  const logic = Object.freeze({
    BUILD, CONFIG_SCHEMA, MANIFEST_SCHEMA, EXPECTED_ITEMS,
    prepareItems, evidenceBreakdown
  });

  if (isNode) module.exports = logic;
  if (typeof window === "undefined" || typeof document === "undefined") return;
  window.SelfLearningCanonicalEvidenceV5 = logic;

  const textEl = (tag, text, css = "") => {
    const el = document.createElement(tag);
    el.className = css;
    el.textContent = text;
    return el;
  };

  const button = (text, css = "") => {
    const el = document.createElement("button");
    el.type = "button";
    el.className = "skill-pilot-button " + css;
    el.textContent = text;
    return el;
  };

  const typeset = (element) => {
    if (window.MathJax?.typesetPromise) {
      window.MathJax.typesetClear?.([element]);
      window.MathJax.typesetPromise([element]).catch(() => {});
    }
  };

  const fetchJson = async (url) => {
    const response = await fetch(url);
    if (!response.ok) throw new Error("HTTP " + response.status + ": " + url.pathname);
    return response.json();
  };

  const safeSource = (file) => typeof file === "string" && /^[a-z0-9-]+\.json$/.test(file);

  const loadBundle = async (assets) => {
    const config = await fetchJson(new URL("data/curriculum/canonical-evidence-beta-v5-config-v1.json", assets));
    const manifest = await fetchJson(new URL(config.reviewed_manifest, assets));
    const refs = manifest?.scope?.selected_items || [];
    const files = [...new Set(refs.map((item) => item.source_file))];
    if (!files.length || files.some((file) => !safeSource(file))) {
      throw new Error("Danh sách source không hợp lệ");
    }
    const chunks = await Promise.all(files.map(async (file) => {
      const source = await fetchJson(new URL("data/practice/" + file, assets));
      return [file, source.questions];
    }));
    return { config, items: prepareItems(config, manifest, Object.fromEntries(chunks)) };
  };

  class MultiTopicPilot {
    constructor(root, config, items) {
      this.root = root;
      this.config = config;
      this.items = items;
      this.skillLabels = config.labels?.skills || {};
      this.topicLabels = config.labels?.topics || {};
      this.evidenceLabels = config.labels?.evidence_classes || {};
      this.storageAvailable = true;
      try {
        this.state = core.normalizedState(JSON.parse(localStorage.getItem(core.KEY)));
      } catch (_) {
        this.state = core.emptyState();
        this.storageAvailable = false;
      }
      root.dataset.canonicalEvidenceBuild = BUILD;
      this.startSession(items, "initial");
    }

    skillLabel(id) {
      return this.skillLabels[id] || String(id || "").replaceAll("-", " ");
    }

    topicLabel(id, fallback = "") {
      if (this.topicLabels[id]) return this.topicLabels[id];
      if (id === "07-phan-thuc-dai-so") return "CĐ07 · Phân thức đại số";
      return fallback || String(id || "");
    }

    evidenceLabel(id) {
      return this.evidenceLabels[id] || String(id || "");
    }

    save() {
      try {
        localStorage.setItem(core.KEY, JSON.stringify(this.state));
      } catch (_) {
        this.storageAvailable = false;
      }
    }

    startSession(items, mode = "initial") {
      this.session = [...items];
      this.mode = mode;
      this.answers = [];
      this.choiceOrders = items.map((item) => core.shuffle(item.options.map((_, index) => index)));
      this.index = 0;
      this.render();
    }

    render() {
      this.root.replaceChildren();
      const intro = this.mode === "initial"
        ? "Beta v5 · 15 câu từ CĐ04–CĐ07 để thử theo dõi cùng một kỹ năng qua nhiều chuyên đề và nhiều loại bằng chứng. Không kết luận thành thạo."
        : "Luyện lại sau phản hồi; lượt này được lưu để ôn tập nhưng không tính thêm lần kiểm tra độc lập.";
      this.root.append(textEl("p", intro, "skill-pilot-intro"));
      if (!this.storageAvailable) {
        this.root.append(textEl("p",
          "Không lưu được trên trình duyệt; kết quả chỉ tồn tại trong phiên này.",
          "skill-pilot-warning"));
      }
      this.progress = textEl("p", "", "skill-pilot-progress");
      this.card = textEl("section", "", "skill-pilot-card");
      this.root.append(this.progress, this.card);
      this.renderQuestion();
    }

    go(index) {
      if (!Number.isInteger(index) || index < 0 || index > this.answers.length ||
          index > this.session.length) return;
      this.index = index;
      this.renderQuestion();
    }

    navBar(record) {
      const nav = textEl("nav", "", "skill-pilot-nav");
      nav.setAttribute("aria-label", "Điều hướng câu hỏi");
      const back = button("← Câu trước", "skill-pilot-nav-back");
      back.disabled = this.index === 0;
      back.addEventListener("click", () => this.go(this.index - 1));
      const counter = textEl("span", "Câu " + (this.index + 1) + "/" + this.session.length,
        "skill-pilot-nav-counter");
      const next = button(this.index + 1 === this.session.length ? "Xem tổng kết →" : "Câu tiếp →",
        "skill-pilot-nav-next skill-pilot-primary");
      next.disabled = !record;
      next.addEventListener("click", () => {
        if (this.answers[this.index]) this.go(this.index + 1);
      });
      nav.append(back, counter, next);
      return nav;
    }

    evidenceCopy(assessment) {
      if (assessment.independent_evidence) {
        return "Mẫu bài này được tính là một lần kiểm tra độc lập mới. Kết quả chỉ dùng để theo dõi quá trình học.";
      }
      if (assessment.independent_reason === "clone_family_repeat") {
        return "Câu này rất giống một câu đã làm trước đó nên vẫn lưu lượt làm nhưng không tính thêm lần kiểm tra độc lập.";
      }
      if (assessment.independent_reason === "repeat_question") {
        return "Câu này đã được làm trước đó nên được lưu như một lượt ôn tập.";
      }
      return "Đã xem phản hồi trước đó; lượt luyện lại không tính thêm lần kiểm tra độc lập.";
    }

    renderQuestion() {
      this.card.replaceChildren();
      if (this.index >= this.session.length) {
        this.renderSummary();
        return;
      }
      const q = this.session[this.index];
      const record = this.answers[this.index];
      const correct = this.answers.filter((answer) => answer.correct).length;
      this.progress.textContent = "Câu " + (this.index + 1) + "/" + this.session.length +
        " · Đã nộp " + this.answers.length + "/" + this.session.length +
        " · Đúng " + correct;

      this.card.append(textEl("p",
        "📘 " + this.topicLabel(q.topic, q.topic_label) + " · " + q.id +
        (record ? " · Đã nộp · Chỉ xem" : ""),
        "skill-pilot-meta"));
      this.card.append(textEl("h3",
        "Kỹ năng đang theo dõi: " + this.skillLabel(q.canonical_skill_id),
        "skill-pilot-heading"));
      this.card.append(textEl("p",
        "Loại kiểm tra: " + this.evidenceLabel(q.evidence_class),
        "skill-pilot-secondary"));
      if (q.clone_family) {
        this.card.append(textEl("p",
          "Câu này thuộc một nhóm mẫu bài rất giống nhau; hệ thống chỉ tính tối đa một lần kiểm tra độc lập trong nhóm.",
          "skill-pilot-secondary"));
      }

      this.card.append(textEl("p", q.question, "skill-pilot-question"));
      const options = textEl("div", "", "skill-pilot-options");
      for (const originalIndex of this.choiceOrders[this.index]) {
        const option = button(q.options[originalIndex], "skill-pilot-option");
        option.dataset.originalIndex = String(originalIndex);
        if (record) {
          option.disabled = true;
          if (originalIndex === q.answer) option.classList.add("is-correct");
          if (originalIndex === record.choice && !record.correct) option.classList.add("is-wrong");
        } else {
          option.addEventListener("click", () => this.answer(q, originalIndex));
        }
        options.append(option);
      }
      this.card.append(options);

      if (record) {
        const feedback = textEl("div", "", "skill-pilot-feedback " +
          (record.correct ? "is-correct" : "is-wrong"));
        feedback.append(textEl("strong", record.correct ? "✓ Đúng" : "✗ Chưa đúng"));
        feedback.append(textEl("p", q.explanation || "Chưa có giải thích ngắn."));
        feedback.append(textEl("p", this.evidenceCopy(record.assessment), "skill-pilot-secondary"));
        this.card.append(feedback);
      } else {
        this.card.append(textEl("p",
          "Chọn một phương án để nộp. Sau khi nộp chỉ được xem lại.",
          "skill-pilot-secondary"));
      }

      this.card.append(this.navBar(record));
      typeset(this.card);
    }

    answer(q, choice) {
      if (this.answers[this.index] || this.index !== this.answers.length ||
          this.session[this.index]?.id !== q.id) return;
      const assessment = core.classifyAttempt(this.state, q, this.mode);
      const record = { question: q, choice, correct: choice === q.answer, assessment };
      this.answers.push(record);
      const event = core.makeEvent(q, record.correct, assessment, this.config);
      this.state = core.appendEvidence(this.state, event);
      this.save();
      this.renderQuestion();
    }

    renderSummary() {
      const wrong = this.answers.filter((answer) => !answer.correct);
      const correct = this.answers.length - wrong.length;
      const newIndependent = this.answers.filter((answer) => answer.assessment.independent_evidence).length;
      this.progress.textContent = "Hoàn thành: " + correct + "/" + this.session.length;
      this.card.append(textEl("h3",
        this.mode === "initial" ? "Tổng kết Beta v5" : "Tổng kết lượt luyện lại",
        "skill-pilot-heading"));
      this.card.append(textEl("p",
        "Lượt này: đúng " + correct + "/" + this.session.length +
        " · có " + newIndependent + " mẫu bài được kiểm tra độc lập mới." +
        " Đây là thông tin theo dõi, không phải kết luận thành thạo.",
        "skill-pilot-summary-lead"));

      if (wrong.length) {
        this.card.append(textEl("h4", "Câu cần xem lại (" + wrong.length + ")", "skill-pilot-review-title"));
        for (const answer of wrong) {
          const q = answer.question;
          const details = document.createElement("details");
          details.className = "skill-pilot-review-item";
          details.append(textEl("summary",
            this.skillLabel(q.canonical_skill_id) + " · " + this.topicLabel(q.topic, q.topic_label) + " · " + q.id));
          details.append(textEl("p", q.question, "skill-pilot-review-question"));
          details.append(textEl("p", "Em đã chọn: " + q.options[answer.choice], "skill-pilot-review-chosen"));
          details.append(textEl("p", "Đáp án đúng: " + q.options[q.answer], "skill-pilot-review-answer"));
          details.append(textEl("p", q.explanation || "Chưa có giải thích ngắn.", "skill-pilot-review-explanation"));
          this.card.append(details);
        }
        const retry = button("Luyện lại " + wrong.length + " câu vừa sai", "skill-pilot-primary");
        retry.addEventListener("click", () => this.startSession(wrong.map((answer) => answer.question), "retry_misses"));
        this.card.append(retry);
      } else {
        this.card.append(textEl("p", "Không còn câu sai trong lượt này.", "skill-pilot-success"));
      }

      const history = document.createElement("details");
      history.className = "skill-pilot-history";
      history.append(textEl("summary", "Lịch sử Canonical Evidence (" + this.state.events.length + " lượt)"));
      history.append(textEl("p",
        "Lịch sử này gồm các event canonical đã được thu thập thực tế từ Beta v4 và Beta v5. Không chuyển đổi lịch sử Practice, Readiness hay Beta v3.",
        "skill-pilot-secondary"));

      const summary = evidenceBreakdown(this.state);
      for (const skill of Object.keys(summary).sort((a, b) =>
        this.skillLabel(a).localeCompare(this.skillLabel(b), "vi"))) {
        const row = summary[skill];
        const details = document.createElement("details");
        details.className = "skill-pilot-review-item";
        details.append(textEl("summary",
          this.skillLabel(skill) + ": " + row.independent_units +
          " mẫu bài kiểm tra lần đầu (" + row.independent_correct + " đúng, " +
          row.independent_incorrect + " sai)"));

        const classText = Object.entries(row.by_class)
          .sort(([a],[b]) => this.evidenceLabel(a).localeCompare(this.evidenceLabel(b), "vi"))
          .map(([id, count]) => this.evidenceLabel(id) + " " + count).join(" · ");
        details.append(textEl("p", "Loại kiểm tra: " + (classText || "Chưa có"), "skill-pilot-result"));

        const topicText = Object.entries(row.by_topic)
          .sort(([a],[b]) => this.topicLabel(a).localeCompare(this.topicLabel(b), "vi"))
          .map(([id, count]) => this.topicLabel(id) + " " + count).join(" · ");
        details.append(textEl("p", "Theo chuyên đề: " + (topicText || "Chưa có"), "skill-pilot-result"));
        details.append(textEl("p",
          row.attempts + " lượt · " + row.distinct_questions + " câu khác nhau",
          "skill-pilot-secondary"));
        history.append(details);
      }
      this.card.append(history);

      this.card.append(textEl("p",
        this.storageAvailable
          ? "Beta v5 nối tiếp cùng lịch sử canonical của Beta v4. Dữ liệu Practice, Readiness và Beta v3 vẫn giữ nguyên."
          : "Không lưu được dữ liệu; chỉ có kết quả trong phiên này.",
        "skill-pilot-secondary"));

      const back = button("Xem lại câu cuối", "skill-pilot-nav-back");
      back.addEventListener("click", () => this.go(this.session.length - 1));
      this.card.append(back);

      const restart = button("Ôn lại toàn bộ 15 câu", "skill-pilot-primary");
      restart.addEventListener("click", () => this.startSession(this.items, "review_all"));
      this.card.append(restart);
      typeset(this.card);
    }
  }

  const init = async () => {
    for (const root of document.querySelectorAll("[data-canonical-evidence-pilot-v2]")) {
      if (root.dataset.canonicalEvidenceReady) continue;
      root.dataset.canonicalEvidenceReady = "true";
      root.textContent = "Đang tải Beta v5…";
      try {
        const assets = new URL(root.dataset.pilotBase || "../../assets/", document.baseURI);
        const bundle = await loadBundle(assets);
        new MultiTopicPilot(root, bundle.config, bundle.items);
      } catch (error) {
        root.replaceChildren(textEl("p",
          "Chưa tải được Beta v5: " + error.message +
          ". Beta v4 và các trang luyện tập hiện hành vẫn hoạt động bình thường.",
          "skill-pilot-warning"));
      }
    }
  };

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init);
  else init();
  if (typeof document$ !== "undefined") document$.subscribe(init);
})();