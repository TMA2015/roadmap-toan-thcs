(() => {
  "use strict";

  const KEY = "toan-thcs-canonical-evidence-v1";
  const BUILD = "canonical-evidence-beta-v4-copy1-20260930";
  const MAX_EVENTS = 500;
  const STORE_SCHEMA = "canonical-skill-evidence-store-v1";
  const EVENT_SCHEMA = "canonical-skill-evidence-event-v1";

  const emptyState = () => ({ schema: STORE_SCHEMA, events: [] });

  const normalizeEvent = (event) => {
    if (!event || typeof event.question_id !== "string" ||
        typeof event.canonical_skill_id !== "string" ||
        typeof event.correct !== "boolean") return null;
    return {
      schema: EVENT_SCHEMA,
      event_id: String(event.event_id || ""),
      pilot_version: String(event.pilot_version || ""),
      question_id: event.question_id,
      canonical_skill_id: event.canonical_skill_id,
      topic: String(event.topic || ""),
      evidence_class: String(event.evidence_class || ""),
      clone_family: event.clone_family || null,
      correct: event.correct,
      attempted_at: String(event.attempted_at || ""),
      content_version: String(event.content_version || ""),
      source_file: String(event.source_file || ""),
      source_blob: String(event.source_blob || ""),
      assisted: event.assisted === true,
      attempt_kind: String(event.attempt_kind || ""),
      independent_evidence: event.independent_evidence === true,
      independent_reason: String(event.independent_reason || ""),
      supporting_skills: Array.isArray(event.supporting_skills) ? [...event.supporting_skills] : []
    };
  };

  const normalizedState = (value) => {
    const events = Array.isArray(value?.events)
      ? value.events.map(normalizeEvent).filter(Boolean).slice(-MAX_EVENTS)
      : [];
    return { schema: STORE_SCHEMA, events };
  };

  const evidenceUnitKey = (value) => value?.clone_family
    ? "clone:" + value.clone_family
    : "question:" + value?.question_id;

  const appendEvidence = (state, event) => {
    const normalized = normalizeEvent(event);
    if (!normalized || !normalized.event_id || !normalized.pilot_version ||
        !normalized.topic || !normalized.evidence_class || !normalized.attempted_at ||
        !normalized.content_version || !normalized.source_file || !normalized.source_blob ||
        !normalized.attempt_kind || !normalized.independent_reason) {
      throw new Error("Bằng chứng canonical chưa đủ trường bắt buộc");
    }
    return normalizedState({ events: [...normalizedState(state).events, normalized] });
  };

  const classifyAttempt = (state, item, mode = "initial") => {
    if (mode !== "initial") {
      return {
        independent_evidence: false,
        assisted: true,
        attempt_kind: "retry_after_feedback",
        independent_reason: "assisted"
      };
    }
    const events = normalizedState(state).events;
    const sameQuestionSeen = events.some((event) =>
      event.question_id === item.question_id &&
      event.canonical_skill_id === item.canonical_skill_id);
    if (sameQuestionSeen) {
      return {
        independent_evidence: false,
        assisted: true,
        attempt_kind: "repeat_question",
        independent_reason: "repeat_question"
      };
    }
    const unit = evidenceUnitKey(item);
    const unitAlreadyIndependent = events.some((event) =>
      event.canonical_skill_id === item.canonical_skill_id &&
      event.independent_evidence === true &&
      evidenceUnitKey(event) === unit);
    if (unitAlreadyIndependent) {
      return {
        independent_evidence: false,
        assisted: false,
        attempt_kind: "new_question_same_clone",
        independent_reason: "clone_family_repeat"
      };
    }
    return {
      independent_evidence: true,
      assisted: false,
      attempt_kind: "first_unseen_unit",
      independent_reason: "first_unseen_unit"
    };
  };

  const descriptiveSummary = (state) => {
    const rows = {};
    for (const event of normalizedState(state).events) {
      const row = rows[event.canonical_skill_id] || {
        attempts: 0,
        distinct_questions: 0,
        independent_units: 0,
        independent_correct: 0,
        independent_incorrect: 0,
        _questions: new Set(),
        _units: new Set()
      };
      row.attempts += 1;
      row._questions.add(event.question_id);
      if (event.independent_evidence) {
        const unit = evidenceUnitKey(event);
        if (!row._units.has(unit)) {
          row._units.add(unit);
          row.independent_units += 1;
          if (event.correct) row.independent_correct += 1;
          else row.independent_incorrect += 1;
        }
      }
      rows[event.canonical_skill_id] = row;
    }
    return Object.fromEntries(Object.entries(rows).map(([skill, row]) => [skill, {
      attempts: row.attempts,
      distinct_questions: row._questions.size,
      independent_units: row.independent_units,
      independent_correct: row.independent_correct,
      independent_incorrect: row.independent_incorrect
    }]));
  };

  const shuffle = (items, random = Math.random) => {
    const out = [...items];
    for (let i = out.length - 1; i > 0; i -= 1) {
      const j = Math.floor(random() * (i + 1));
      [out[i], out[j]] = [out[j], out[i]];
    }
    return out;
  };

  const sameArray = (a, b) => Array.isArray(a) && Array.isArray(b) &&
    a.length === b.length && a.every((value, index) => value === b[index]);

  const prepareItems = (config, manifest, sources) => {
    if (config?.schema !== "canonical-evidence-beta-v4-config-v1" ||
        manifest?.schema !== "canonical-skill-evidence-pilot-core07-r1" ||
        config.storage_key !== KEY ||
        !Array.isArray(config.selected_item_ids) || config.selected_item_ids.length !== 12) {
      throw new Error("Gói Beta v4 không đúng schema hoặc phạm vi");
    }
    const reviewed = manifest?.pilot_scope?.selected_items;
    if (!Array.isArray(reviewed) || reviewed.length !== 12) {
      throw new Error("Reviewed manifest không đủ 12 câu");
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
      if (!ref.canonical_skill_id || ref.runtime_enabled !== false ||
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
        topic: manifest.topic,
        source_file: ref.source_file,
        source_blob: ref.source_blob,
        content_version: config.content_version
      });
    }
    if (new Set(out.map((item) => item.id)).size !== 12) {
      throw new Error("ID trùng trong Beta v4");
    }
    return out;
  };

  const makeEvent = (item, correct, assessment, config, now = new Date().toISOString(), eventId = null) => ({
    schema: EVENT_SCHEMA,
    event_id: eventId || ((globalThis.crypto?.randomUUID?.()) ||
      (Date.now().toString(36) + "-" + Math.random().toString(36).slice(2))),
    pilot_version: config.pilot_version,
    question_id: item.question_id,
    canonical_skill_id: item.canonical_skill_id,
    topic: item.topic,
    evidence_class: item.evidence_class,
    clone_family: item.clone_family,
    correct: correct === true,
    attempted_at: now,
    content_version: item.content_version,
    source_file: item.source_file,
    source_blob: item.source_blob,
    assisted: assessment.assisted === true,
    attempt_kind: assessment.attempt_kind,
    independent_evidence: assessment.independent_evidence === true,
    independent_reason: assessment.independent_reason,
    supporting_skills: [...item.supporting_skills]
  });

  const logic = Object.freeze({
    KEY, BUILD, MAX_EVENTS, STORE_SCHEMA, EVENT_SCHEMA,
    emptyState, normalizedState, appendEvidence, evidenceUnitKey,
    classifyAttempt, descriptiveSummary, prepareItems, makeEvent, shuffle
  });

  if (typeof module !== "undefined" && module.exports) module.exports = logic;
  if (typeof window === "undefined" || typeof document === "undefined") return;
  window.SelfLearningCanonicalEvidenceV4 = logic;

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
    const config = await fetchJson(new URL("data/curriculum/canonical-evidence-beta-v4-config-v1.json", assets));
    const manifest = await fetchJson(new URL(config.reviewed_manifest, assets));
    const refs = manifest?.pilot_scope?.selected_items || [];
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

  class CanonicalEvidencePilot {
    constructor(root, config, items) {
      this.root = root;
      this.config = config;
      this.items = items;
      this.labels = config.labels || {};
      this.storageAvailable = true;
      try {
        this.state = normalizedState(JSON.parse(localStorage.getItem(KEY)));
      } catch (_) {
        this.state = emptyState();
        this.storageAvailable = false;
      }
      this.originalScore = null;
      root.dataset.canonicalEvidenceBuild = BUILD;
      this.startSession(items, "initial");
    }

    label(id) {
      return this.labels[id] || String(id || "").replaceAll("-", " ");
    }

    save() {
      try {
        localStorage.setItem(KEY, JSON.stringify(this.state));
      } catch (_) {
        this.storageAvailable = false;
      }
    }

    startSession(items, mode = "initial") {
      this.session = [...items];
      this.mode = mode;
      this.answers = [];
      this.choiceOrders = items.map((item) => shuffle(item.options.map((_, index) => index)));
      this.index = 0;
      this.render();
    }

    render() {
      this.root.replaceChildren();
      const intro = this.mode === "initial"
        ? "Beta v4 · 12 câu CĐ07 để thử cách theo dõi quá trình học theo kỹ năng. Kết quả dùng để theo dõi, không kết luận thành thạo."
        : "Luyện lại sau khi đã xem phản hồi; các lượt này giúp ôn tập nhưng không tính thêm lần kiểm tra độc lập.";
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
        return "Lần kiểm tra độc lập đầu tiên cho mẫu bài này. Kết quả được lưu để theo dõi quá trình học, chưa dùng để kết luận đã thành thạo.";
      }
      if (assessment.independent_reason === "clone_family_repeat") {
        return "Câu này rất giống một câu đã làm trước đó. Kết quả vẫn được lưu để ôn tập, nhưng không tính thêm một lần kiểm tra độc lập.";
      }
      if (assessment.independent_reason === "repeat_question") {
        return "Câu này đã được làm trước đó. Kết quả được lưu như một lượt ôn tập, không tính thêm một lần kiểm tra độc lập.";
      }
      return "Đã xem phản hồi trước đó. Lượt luyện lại được lưu để ôn tập, không tính thêm một lần kiểm tra độc lập.";
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
        "📘 Câu ngân hàng · CĐ07 · " + q.id + (record ? " · Đã nộp · Chỉ xem" : ""),
        "skill-pilot-meta"));
      this.card.append(textEl("h3",
        "Kỹ năng đang theo dõi: " + this.label(q.canonical_skill_id),
        "skill-pilot-heading"));
      if (q.supporting_skills.length) {
        this.card.append(textEl("p",
          "Kiến thức hỗ trợ: " + q.supporting_skills.map((id) => this.label(id)).join(", ") +
          " — giúp giải bài này nhưng không được tính thành một kỹ năng riêng.",
          "skill-pilot-secondary"));
      }
      if (q.clone_family) {
        this.card.append(textEl("p",
          "Mẫu bài tương tự đã được gom cùng nhóm — hệ thống chỉ tính tối đa một lần kiểm tra độc lập cho các câu rất giống nhau.",
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
      const assessment = classifyAttempt(this.state, q, this.mode);
      const record = { question: q, choice, correct: choice === q.answer, assessment };
      this.answers.push(record);
      const event = makeEvent(q, record.correct, assessment, this.config);
      this.state = appendEvidence(this.state, event);
      this.save();
      this.renderQuestion();
    }

    renderSummary() {
      const wrong = this.answers.filter((answer) => !answer.correct);
      const correct = this.answers.length - wrong.length;
      const newIndependent = this.answers.filter((answer) => answer.assessment.independent_evidence).length;
      if (this.mode === "initial" && !this.originalScore) {
        this.originalScore = { attempted: this.session.length, correct };
      }
      this.progress.textContent = "Hoàn thành: " + correct + "/" + this.session.length;
      this.card.append(textEl("h3",
        this.mode === "initial" ? "Tổng kết lượt đầu" : "Tổng kết lượt luyện lại",
        "skill-pilot-heading"));
      this.card.append(textEl("p",
        "Lượt này: đúng " + correct + "/" + this.session.length +
        " · có " + newIndependent + " mẫu bài được kiểm tra độc lập." +
        " Đây là thông tin theo dõi, không phải kết luận thành thạo.",
        "skill-pilot-summary-lead"));

      if (wrong.length) {
        this.card.append(textEl("h4", "Câu cần xem lại (" + wrong.length + ")", "skill-pilot-review-title"));
        for (const answer of wrong) {
          const q = answer.question;
          const details = document.createElement("details");
          details.className = "skill-pilot-review-item";
          details.append(textEl("summary", this.label(q.canonical_skill_id) + " · " + q.id));
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
      history.append(textEl("summary", "Lịch sử Beta v4 (" + this.state.events.length + " lượt)"));
      history.append(textEl("p",
        "Lịch sử này chỉ dùng để theo dõi Beta v4. Không gộp với lịch sử luyện tập thường, Core Readiness hoặc Beta v3.",
        "skill-pilot-secondary"));
      const summary = descriptiveSummary(this.state);
      for (const skill of Object.keys(summary).sort((a, b) => this.label(a).localeCompare(this.label(b), "vi"))) {
        const row = summary[skill];
        history.append(textEl("p",
          this.label(skill) + ": " +
          row.attempts + " lượt · " +
          row.distinct_questions + " câu khác nhau · " +
          row.independent_units + " mẫu bài đã kiểm tra lần đầu (" +
          row.independent_correct + " đúng, " + row.independent_incorrect + " sai)",
          "skill-pilot-result"));
      }
      this.card.append(history);

      this.card.append(textEl("p",
        this.storageAvailable
          ? "Đã lưu riêng cho Beta v4. Dữ liệu luyện tập và kiểm tra cũ vẫn giữ nguyên."
          : "Không lưu được dữ liệu; chỉ có kết quả trong phiên này.",
        "skill-pilot-secondary"));

      const back = button("Xem lại câu cuối", "skill-pilot-nav-back");
      back.addEventListener("click", () => this.go(this.session.length - 1));
      this.card.append(back);

      const restart = button("Ôn lại toàn bộ 12 câu", "skill-pilot-primary");
      restart.addEventListener("click", () => this.startSession(this.items, "review_all"));
      this.card.append(restart);
      typeset(this.card);
    }
  }

  const init = async () => {
    for (const root of document.querySelectorAll("[data-canonical-evidence-pilot-v1]")) {
      if (root.dataset.canonicalEvidenceReady) continue;
      root.dataset.canonicalEvidenceReady = "true";
      root.textContent = "Đang tải Beta v4…";
      try {
        const assets = new URL(root.dataset.pilotBase || "../../assets/", document.baseURI);
        const bundle = await loadBundle(assets);
        new CanonicalEvidencePilot(root, bundle.config, bundle.items);
      } catch (error) {
        root.replaceChildren(textEl("p",
          "Chưa tải được Beta v4: " + error.message +
          ". Các trang luyện tập hiện hành vẫn hoạt động bình thường.",
          "skill-pilot-warning"));
      }
    }
  };

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init);
  else init();
  if (typeof document$ !== "undefined") document$.subscribe(init);
})();