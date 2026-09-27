(() => {
  "use strict";
  const KEY = "toan-thcs-assessment-v2";
  const BUILD = "learner-review-v3-20260927";
  const MAX_EVENTS = 500;
  const LABELS = Object.freeze({
    "cong-tru-da-thuc": "Cộng – trừ đa thức",
    "nhan-bieu-thuc": "Nhân biểu thức",
    "lap-bieu-thuc": "Lập biểu thức",
    "binh-phuong-hoan-chinh": "Bình phương hoàn chỉnh",
    "hieu-hai-binh-phuong": "Hiệu hai bình phương",
    "hai-phan-thuc-bang-nhau": "Hai phân thức bằng nhau",
    "so-nghiem-he": "Số nghiệm của hệ",
    "lap-he-bai-toan": "Lập hệ từ bài toán",
    "giao-diem-do-thi": "Giao điểm hai đồ thị",
    "dua-thua-so-ra": "Đưa thừa số ra ngoài căn",
    "bo-ngoac-dau": "Bỏ ngoặc và dấu",
    "khai-phuong-tich": "Khai phương một tích"
  });
  const label = (id) => LABELS[id] || String(id || "").replaceAll("-", " ");
  const emptyState = () => ({ schema: "one-skill-assessment-events-v2", events: [] });
  const normalizedState = (value) => ({
    schema: "one-skill-assessment-events-v2",
    events: Array.isArray(value?.events) ? value.events.filter((event) =>
      event && typeof event.question_id === "string" &&
      typeof event.assessed_skill === "string" && typeof event.correct === "boolean"
    ).slice(-MAX_EVENTS) : []
  });
  const appendEvidence = (state, event) => {
    if (!event || !event.question_id || !event.assessed_skill || typeof event.correct !== "boolean") {
      throw new Error("Bằng chứng kỹ năng không hợp lệ");
    }
    return normalizedState({ events: [...normalizedState(state).events, {
      schema: "one-skill-assessment-event-v2",
      question_id: event.question_id,
      assessed_skill: event.assessed_skill,
      correct: event.correct,
      independent: event.independent === true,
      question_kind: event.question_kind,
      supporting_tags: Array.isArray(event.supporting_tags) ? [...event.supporting_tags] : [],
      context: event.context || null,
      attempted_at: event.attempted_at,
      attempt_kind: event.attempt_kind || null,
      assisted: event.assisted === true,
      evidence_policy: event.evidence_policy || null,
      source_file: event.source_file || null
    }] });
  };
  const skillSummary = (state) => {
    const result = {};
    for (const event of normalizedState(state).events) {
      const row = result[event.assessed_skill] || { attempted: 0, correct: 0, independent_correct: 0 };
      row.attempted += 1;
      if (event.correct) row.correct += 1;
      if (event.correct && event.independent) row.independent_correct += 1;
      result[event.assessed_skill] = row;
    }
    return result;
  };
  // Distinct-question evidence prevents same-item retries from looking like new coverage.
  // For histories longer than MAX_EVENTS, this summarizes the retained window only.
  const firstAttemptSummary = (state) => {
    const result = {};
    const seen = new Set();
    for (const event of normalizedState(state).events) {
      const row = result[event.assessed_skill] || { distinct: 0, first_correct: 0, total_attempts: 0 };
      row.total_attempts += 1;
      const key = event.assessed_skill + "\\u0000" + event.question_id;
      if (!seen.has(key)) {
        seen.add(key);
        row.distinct += 1;
        if (event.correct) row.first_correct += 1;
      }
      result[event.assessed_skill] = row;
    }
    return result;
  };

  // v2 history remains unchanged: old independent flags may be optimistic. Only new v3 events
  // can claim a fresh unassisted exposure, and every score remains low-stakes/formative.
  const classifyAttempt = (mode, seenBefore) => {
    if (mode !== "initial") return { independent: false, assisted: true, attempt_kind: "retry_after_feedback" };
    if (seenBefore) return { independent: false, assisted: true, attempt_kind: "repeat_seen_question" };
    return { independent: true, assisted: false, attempt_kind: "first_unseen" };
  };
  const verifiedV3Summary = (state) => {
    const result = {};
    const seen = new Set();
    for (const event of normalizedState(state).events) {
      if (event.evidence_policy !== "formative_v3" || event.attempt_kind !== "first_unseen" ||
          event.independent !== true || event.assisted === true) continue;
      const key = event.assessed_skill + "\\u0000" + event.question_id;
      if (seen.has(key)) continue;
      seen.add(key);
      const row = result[event.assessed_skill] || { distinct_first: 0, correct_first: 0 };
      row.distinct_first += 1;
      if (event.correct) row.correct_first += 1;
      result[event.assessed_skill] = row;
    }
    return result;
  };

  const shuffle = (items, random = Math.random) => {
    const out = [...items];
    for (let i = out.length - 1; i > 0; i -= 1) {
      const j = Math.floor(random() * (i + 1));
      [out[i], out[j]] = [out[j], out[i]];
    }
    return out;
  };
  const isValidQuestion = (item) => !!item && typeof item.id === "string" &&
    typeof item.question === "string" && Array.isArray(item.options) &&
    item.options.length === 4 && item.options.every((x) => typeof x === "string" && x.trim()) &&
    Number.isInteger(item.answer) && item.answer >= 0 && item.answer < 4 &&
    typeof item.assessed_skill === "string" && item.assessed_skill.length > 0;

  const prepareItems = (config, sources, micro) => {
    if (config?.schema !== "one-skill-evidence-pilot-config-v1" ||
        micro?.schema !== "skill-diagnostic-micro-pilot-v1" ||
        !Array.isArray(config.sample_questions) || config.sample_questions.length !== 10 ||
        !Array.isArray(micro.items) || micro.items.length !== 4) {
      throw new Error("Gói thí điểm chưa đúng phiên bản hoặc chưa đủ câu");
    }
    const result = [];
    for (const ref of config.sample_questions) {
      const questions = sources[ref.source_file];
      const source = Array.isArray(questions) ? questions.find((q) => q.id === ref.question_id) : null;
      if (!source || !Array.isArray(source.tags?.skill) ||
          !source.tags.skill.includes(ref.assessed_skill) ||
          !source.tags.skill.includes(ref.secondary_tag)) {
        throw new Error("Thiếu câu gốc hoặc ánh xạ tag không hợp lệ: " + ref.question_id);
      }
      const item = { ...source, assessed_skill: ref.assessed_skill, secondary_tag: ref.secondary_tag,
        secondary_role: ref.secondary_role, topic: ref.topic, question_kind: "bank_sample", source_file: ref.source_file };
      if (!isValidQuestion(item)) throw new Error("Câu gốc chưa hợp lệ: " + ref.question_id);
      result.push(item);
    }
    for (const source of micro.items) {
      const item = { id: source.id, question: source.prompt, options: source.options,
        answer: source.answer_index, explanation: source.explanation,
        assessed_skill: source.assessed_skill, secondary_tag: null, secondary_role: null,
        topic: source.topic, question_kind: "micro_pilot", source_file: config.micro_source };
      if (!isValidQuestion(item)) throw new Error("Câu kiểm tra ngắn chưa hợp lệ: " + source.id);
      result.push(item);
    }
    if (new Set(result.map((q) => q.id)).size !== result.length) throw new Error("ID trùng trong bộ thử nghiệm");
    return result;
  };
  const logic = Object.freeze({ KEY, BUILD, emptyState, normalizedState, appendEvidence, skillSummary, firstAttemptSummary, classifyAttempt, verifiedV3Summary, prepareItems, shuffle, isValidQuestion });
  if (typeof module !== "undefined" && module.exports) module.exports = logic;
  if (typeof window === "undefined" || typeof document === "undefined") return;
  window.SelfLearningSkillAssessmentV3 = logic;

  const typeset = (element) => {
    if (window.MathJax?.typesetPromise) {
      window.MathJax.typesetClear?.([element]);
      window.MathJax.typesetPromise([element]).catch(() => {});
    }
  };
  const button = (text, extra = "") => {
    const element = document.createElement("button");
    element.type = "button";
    element.className = "skill-pilot-button " + extra;
    element.textContent = text;
    return element;
  };
  const textEl = (tag, text, css = "") => {
    const element = document.createElement(tag);
    element.className = css;
    element.textContent = text;
    return element;
  };
  const fetchData = async (url) => {
    const response = await fetch(url);
    if (!response.ok) throw new Error("HTTP " + response.status + ": " + url.pathname);
    return response.json();
  };
  const safeSource = (file) => typeof file === "string" && /^[a-z0-9-]+\.json$/.test(file);
  const loadItems = async (assets) => {
    const config = await fetchData(new URL("data/curriculum/skill-assessment-pilot-config-v1.json", assets));
    const micro = await fetchData(new URL(config.micro_source, assets));
    const files = [...new Set(config.sample_questions.map((item) => item.source_file))];
    if (files.some((file) => !safeSource(file))) throw new Error("Đường dẫn câu gốc chưa hợp lệ");
    const chunks = await Promise.all(files.map(async (file) => {
      const source = await fetchData(new URL("data/practice/" + file, assets));
      return [file, source.questions];
    }));
    return prepareItems(config, Object.fromEntries(chunks), micro);
  };

  class Pilot {
    constructor(root, questions) {
      this.root = root;
      root.dataset.skillPilotVersion = BUILD;
      this.questions = questions;
      this.storageAvailable = true;
      try { this.state = normalizedState(JSON.parse(localStorage.getItem(KEY))); }
      catch (_) { this.state = emptyState(); this.storageAvailable = false; }
      this.originalScore = null;
      this.startSession(questions, "initial");
    }
    save() {
      try { localStorage.setItem(KEY, JSON.stringify(this.state)); }
      catch (_) { this.storageAvailable = false; }
    }
    startSession(items, mode = "initial") {
      this.session = [...items];
      this.mode = mode;
      this.sessionAnswers = [];
      this.choiceOrders = items.map(q => shuffle(q.options.map((_, index) => index)));
      this.index = 0;
      this.render();
    }
    render() {
      this.root.replaceChildren();
      const title = this.mode === "initial"
        ? "Beta v3 · 14 câu thử nghiệm. Có thể quay lại câu đã nộp để xem, không sửa điểm."
        : this.mode === "retry_misses"
          ? "Luyện lại chính các câu vừa sai; đã xem lời giải nên không phải bằng chứng độc lập mới."
          : "Ôn lại bộ câu cũ; lượt này không cộng thêm bằng chứng độc lập mới.";
      this.introEl = textEl("p", title, "skill-pilot-intro");
      this.root.append(this.introEl);
      if (!this.storageAvailable) this.root.append(textEl("p",
        "Không lưu được vào trình duyệt; kết quả chỉ tồn tại trong phiên này.", "skill-pilot-warning"));
      this.progress = textEl("p", "", "skill-pilot-progress");
      this.card = textEl("section", "", "skill-pilot-card");
      this.root.append(this.progress, this.card);
      this.renderQuestion();
    }
    go(index) {
      if (!Number.isInteger(index) || index < 0 || index > this.sessionAnswers.length ||
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
      const labelText = textEl("span", "Câu " + (this.index + 1) + "/" + this.session.length,
        "skill-pilot-nav-counter");
      const next = button(this.index + 1 === this.session.length ? "Xem tổng kết →" : "Câu tiếp →",
        "skill-pilot-nav-next skill-pilot-primary");
      next.disabled = !record;
      next.addEventListener("click", () => {
        if (this.sessionAnswers[this.index]) this.go(this.index + 1);
      });
      nav.append(back, labelText, next);
      return nav;
    }
    renderQuestion() {
      this.card.replaceChildren();
      if (this.index >= this.session.length) { this.renderSummary(); return; }
      const q = this.session[this.index];
      const record = this.sessionAnswers[this.index];
      const score = this.sessionAnswers.filter(a => a.correct).length;
      this.progress.textContent = "Câu " + (this.index + 1) + "/" + this.session.length +
        " · Đã nộp " + this.sessionAnswers.length + "/" + this.session.length + " · Đúng " + score;
      this.card.append(textEl("p", (q.question_kind === "micro_pilot" ? "🔎 Kiểm tra riêng" : "📘 Câu trong ngân hàng") +
        " · " + q.topic + (record ? " · Đã nộp · Chỉ xem" : ""), "skill-pilot-meta"));
      this.card.append(textEl("h3", "Kỹ năng đánh giá: " + label(q.assessed_skill), "skill-pilot-heading"));
      if (q.secondary_tag) this.card.append(textEl("p",
        "Liên quan: " + label(q.secondary_tag) + " (" +
        ({ category:"nhóm kiến thức", method:"phương pháp", context:"bối cảnh",
           representation:"cách biểu diễn", supporting_skill:"kiến thức hỗ trợ" })[q.secondary_role] +
        ") — không cộng điểm riêng.", "skill-pilot-secondary"));
      this.card.append(textEl("p", q.question, "skill-pilot-question"));
      const choices = textEl("div", "", "skill-pilot-options");
      for (const index of this.choiceOrders[this.index]) {
        const option = button(q.options[index], "skill-pilot-option");
        option.dataset.originalIndex = String(index);
        if (record) {
          option.disabled = true;
          if (index === q.answer) option.classList.add("is-correct");
          if (index === record.choice && !record.correct) option.classList.add("is-wrong");
        } else option.addEventListener("click", () => this.answer(q, index));
        choices.append(option);
      }
      this.card.append(choices);
      if (record) {
        const feedback = textEl("div", "", "skill-pilot-feedback " +
          (record.correct ? "is-correct" : "is-wrong"));
        feedback.append(textEl("strong", record.correct ? "✓ Đúng" : "✗ Chưa đúng"));
        feedback.append(textEl("p", q.explanation || "Chưa có lời giải ngắn."));
        feedback.append(textEl("p", record.assessment.independent
          ? "Bài đầu tiên chưa từng ghi nhận cho ID này; dữ liệu chỉ dùng thử nghiệm formative."
          : "Câu đã xem/luyện lại: có ghi lượt ôn nhưng không cộng bằng chứng độc lập.",
          "skill-pilot-secondary"));
        this.card.append(feedback);
      } else this.card.append(textEl("p",
        "Chọn một phương án để nộp. Sau khi nộp chỉ được xem lại.", "skill-pilot-secondary"));
      this.card.append(this.navBar(record));
      typeset(this.card);
    }
    answer(q, choice) {
      if (this.sessionAnswers[this.index] || this.index !== this.sessionAnswers.length ||
          this.session[this.index]?.id !== q.id) return;
      const seenBefore = this.state.events.some(event =>
        event.question_id === q.id && event.assessed_skill === q.assessed_skill);
      const assessment = classifyAttempt(this.mode, seenBefore);
      const record = { question:q, choice, correct:choice===q.answer, assessment };
      this.sessionAnswers.push(record);
      this.state = appendEvidence(this.state, {
        question_id:q.id, assessed_skill:q.assessed_skill, correct:record.correct,
        independent:assessment.independent, assisted:assessment.assisted,
        attempt_kind:assessment.attempt_kind, evidence_policy:"formative_v3",
        source_file:q.source_file,
        question_kind:q.question_kind,
        supporting_tags:q.secondary_tag ? [q.secondary_tag] : [],
        context:q.secondary_role === "context" ? q.secondary_tag : null,
        attempted_at:new Date().toISOString()
      });
      this.save();
      this.renderQuestion();
    }
    renderSummary() {
      const wrong = this.sessionAnswers.filter(a => !a.correct);
      const correct = this.sessionAnswers.length - wrong.length;
      if (this.mode === "initial" && !this.originalScore) {
        this.originalScore = { attempted:this.session.length, correct };
      }
      this.progress.textContent = "Hoàn thành: " + correct + "/" + this.session.length;
      this.card.append(textEl("h3", this.mode === "initial" ? "Kết quả lượt đầu" :
        "Kết quả lượt luyện lại", "skill-pilot-heading"));
      this.card.append(textEl("p", "Lượt đầu: " + this.originalScore.correct + "/" +
        this.originalScore.attempted + " · Lượt này: " + correct + "/" + this.session.length +
        " · " + wrong.length + " câu cần xem lại. Không cộng gộp điểm luyện lại vào lượt đầu.",
        "skill-pilot-summary-lead"));
      if (this.mode !== "initial") this.card.append(textEl("p",
        "Các câu đã xem lời giải: lượt luyện này chỉ phục vụ ôn tập, không tạo bằng chứng độc lập mới.",
        "skill-pilot-warning"));
      if (wrong.length) {
        this.card.append(textEl("h4", "Câu cần xem lại (" + wrong.length + ")", "skill-pilot-review-title"));
        for (const a of wrong) {
          const q = a.question;
          const item = document.createElement("details");
          item.className = "skill-pilot-review-item";
          item.append(textEl("summary", label(q.assessed_skill) + " · " + q.id));
          item.append(textEl("p", q.question, "skill-pilot-review-question"));
          item.append(textEl("p", "Em đã chọn: " + q.options[a.choice], "skill-pilot-review-chosen"));
          item.append(textEl("p", "Đáp án đúng: " + q.options[q.answer], "skill-pilot-review-answer"));
          item.append(textEl("p", q.explanation || "Chưa có lời giải ngắn.", "skill-pilot-review-explanation"));
          this.card.append(item);
        }
        const retry = button("Luyện lại " + wrong.length + " câu vừa sai", "skill-pilot-primary");
        retry.addEventListener("click", () => this.startSession(wrong.map(a => a.question), "retry_misses"));
        this.card.append(retry);
      } else this.card.append(textEl("p", "Không còn câu sai trong lượt này.", "skill-pilot-success"));
      this.card.append(textEl("p",
        "Câu tương tự mới sẽ chỉ được bổ sung khi học liệu của từng kỹ năng qua QA. Hiện không tự sinh đề từ các tag chưa được duyệt.",
        "skill-pilot-secondary"));
      const history = document.createElement("details");
      history.className = "skill-pilot-history";
      history.append(textEl("summary", "Lịch sử thử nghiệm (" + this.state.events.length +
        " lượt, gồm ôn lại)"));
      history.append(textEl("p",
        "Kết quả lần đầu của mỗi ID trong cửa sổ lịch sử đang giữ. Lịch sử Beta v2 được giữ nguyên, không sửa lại cờ independent trước đây.",
        "skill-pilot-secondary"));
      const historical = firstAttemptSummary(this.state);
      for (const skill of Object.keys(historical).sort((a,b) => label(a).localeCompare(label(b),"vi"))) {
        const stat = historical[skill];
        history.append(textEl("p", label(skill) + ": lần đầu đúng " +
          stat.first_correct + "/" + stat.distinct + " câu khác nhau · tổng " +
          stat.total_attempts + " lượt" + (stat.distinct < 3 ? " · cần thêm bằng chứng" :
          " · dữ liệu ban đầu"), "skill-pilot-result"));
      }
      this.card.append(history);
      this.card.append(textEl("p", this.storageAvailable ?
        "Đã lưu riêng trong lịch sử thử nghiệm. Dữ liệu Practice v1 vẫn giữ nguyên." :
        "Không lưu được dữ liệu; chỉ có kết quả trong phiên này.", "skill-pilot-secondary"));
      const reviewLast = button("Xem lại câu cuối", "skill-pilot-nav-back");
      reviewLast.addEventListener("click", () => this.go(this.session.length - 1));
      this.card.append(reviewLast);
      const restart = button("Ôn lại toàn bộ 14 câu", "skill-pilot-primary");
      restart.addEventListener("click", () => this.startSession(this.questions, "review_all"));
      this.card.append(restart);
      typeset(this.card);
    }
  }
  const init = async () => {
    for (const root of document.querySelectorAll("[data-skill-assessment-pilot-v3]")) {
      if (root.dataset.skillPilotReady) continue;
      root.dataset.skillPilotReady = "true";
      root.textContent = "Đang tải bộ đánh giá thử nghiệm…";
      try {
        const assets = new URL(root.dataset.pilotBase || "../../assets/", document.baseURI);
        new Pilot(root, await loadItems(assets));
      } catch (error) {
        root.replaceChildren(textEl("p", "Chưa tải được bài thử nghiệm: " + error.message +
          ". Trang luyện tập thông thường vẫn hoạt động bình thường.", "skill-pilot-warning"));
      }
    }
  };
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init);
  else init();
  if (typeof document$ !== "undefined") document$.subscribe(init);
})();
