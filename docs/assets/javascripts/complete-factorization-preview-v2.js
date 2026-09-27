(() => {
  "use strict";
  const BUILD = "complete-factor-preview-v2-20260927";
  const SCHEMA = "complete-factorization-preview-v2";
  const SKILL = "phan-tich-da-thuc-hoan-toan";
  const shuffle = (items, random = Math.random) => {
    const result = [...items];
    for (let i = result.length - 1; i > 0; i--) {
      const j = Math.floor(random() * (i + 1));
      [result[i], result[j]] = [result[j], result[i]];
    }
    return result;
  };
  const validConfig = cfg => !!cfg && cfg.schema === SCHEMA &&
    cfg.status === "opt_in_unscored_no_storage" &&
    cfg.candidate_assessed_skill === SKILL &&
    cfg.legacy_source_tag === "phoi-hop-phuong-phap" &&
    /^06-phan-tich-da-thuc-v1-\d{2}\.json$/.test(cfg.source_file || "") &&
    /^[0-9a-f]{40}$/.test(cfg.source_file_blob_sha || "") &&
    Array.isArray(cfg.initial_question_ids) && cfg.initial_question_ids.length === 8 &&
    new Set(cfg.initial_question_ids).size === 8 &&
    !!cfg.similar_question_by_initial_id &&
    Object.keys(cfg.similar_question_by_initial_id).length === 8 &&
    cfg.initial_question_ids.every(id => Object.hasOwn(cfg.similar_question_by_initial_id, id)) &&
    new Set(Object.values(cfg.similar_question_by_initial_id)).size === 8 &&
    Object.values(cfg.similar_question_by_initial_id).every(id => !cfg.initial_question_ids.includes(id));

  const validQuestion = (q, cfg) => !!q && /^FAC06V1_0(7[7-9]|8[0-9]|9[0-2])$/.test(q.id || "") &&
    Array.isArray(q.tags?.skill) && q.tags.skill.length === 1 &&
    q.tags.skill[0] === cfg.legacy_source_tag &&
    typeof q.question === "string" && q.question.includes("Phân tích hoàn toàn") &&
    Array.isArray(q.options) && q.options.length === 4 &&
    q.options.every(value => typeof value === "string" && value.trim().length > 0) &&
    new Set(q.options).size === 4 && Number.isInteger(q.answer) &&
    q.answer >= 0 && q.answer < 4 &&
    typeof q.explanation === "string" && !!q.explanation.trim();

  const prepareSets = (cfg, bank) => {
    if (!validConfig(cfg) || !Array.isArray(bank)) throw new Error("Học liệu thử nghiệm không đúng phiên bản.");
    const ids = [...cfg.initial_question_ids, ...Object.values(cfg.similar_question_by_initial_id)];
    const found = new Map(bank.map(q => [q.id, q]));
    const read = id => {
      const question = found.get(id);
      if (!validQuestion(question, cfg)) throw new Error("Câu nguồn chưa qua kiểm tra: " + id);
      return { ...question, assessed_skill: cfg.candidate_assessed_skill,
        source_file: cfg.source_file, source_blob_sha: cfg.source_file_blob_sha };
    };
    const initial = cfg.initial_question_ids.map(read);
    const similar = Object.fromEntries(cfg.initial_question_ids.map(id =>
      [id, read(cfg.similar_question_by_initial_id[id])]));
    return { initial, similar };
  };
  const summarize = answers => ({
    attempted: answers.length,
    correct: answers.filter(a => a.correct).length,
    wrong: answers.filter(a => !a.correct).map(a => a.question.id)
  });
  const evidenceKind = mode => ({
    initial: "first_exposure_in_this_page_only",
    retry_old: "review_of_seen_answer_no_new_evidence",
    similar_after_feedback: "new_question_after_feedback_assisted_transfer"
  })[mode] || "unknown_unscored";
  const logic = Object.freeze({ BUILD, validConfig, validQuestion, prepareSets,
    shuffle, summarize, evidenceKind });
  if (typeof module !== "undefined" && module.exports) module.exports = logic;
  if (typeof window === "undefined" || typeof document === "undefined") return;
  window.SelfLearningCompleteFactorPreview = logic;

  const node = (tag, content = "", cls = "") => {
    const value = document.createElement(tag);
    value.className = cls;
    value.textContent = content;
    return value;
  };
  const button = (label, cls = "") => {
    const value = node("button", label, ("skill-pilot-button " + cls).trim());
    value.type = "button";
    return value;
  };
  const typeset = root => {
    if (!window.MathJax?.typesetPromise) return;
    window.MathJax.typesetClear?.([root]);
    window.MathJax.typesetPromise([root]).catch(() => {});
  };
  const fetchJson = async url => {
    const res = await fetch(url, { cache: "no-store" });
    if (!res.ok) throw new Error("Không tải được học liệu (HTTP " + res.status + ").");
    return res.json();
  };
  const loadSets = async root => {
    const assets = new URL(root.dataset.assetsBase || "../../assets/", document.baseURI);
    const cfg = await fetchJson(new URL("data/curriculum/complete-factorization-preview-v2.json", assets));
    if (!validConfig(cfg)) throw new Error("Gói câu hỏi chưa khớp cấu hình thử nghiệm.");
    const bank = await fetchJson(new URL("data/practice/" + cfg.source_file, assets));
    return prepareSets(cfg, bank.questions);
  };

  class Preview {
    constructor(root, sets) {
      this.root = root;
      root.dataset.completeFactorBuild = BUILD;
      this.original = sets.initial;
      this.similar = sets.similar;
      this.firstScore = null;
      this.firstMisses = [];
      this.start(sets.initial, "initial");
    }
    start(items, mode) {
      this.session = [...items];
      this.mode = mode;
      this.answers = [];
      this.orders = items.map(() => shuffle([0, 1, 2, 3]));
      this.index = 0;
      this.render();
    }
    render() {
      this.root.replaceChildren();
      this.intro = node("p", this.mode === "initial"
        ? "Beta CĐ06 v2 · 8 câu lượt đầu. Câu đã nộp chỉ được xem lại, không sửa đáp án. Không lưu điểm hay hồ sơ học sinh."
        : this.mode === "retry_old"
          ? "Ôn lại đúng câu đã xem đáp án: không phải bằng chứng độc lập mới."
          : "Câu tương tự có ID khác và số liệu khác, nhưng làm ngay sau phản hồi vẫn là vận dụng có hỗ trợ; chưa chấm mức thành thạo.",
        "skill-pilot-intro");
      this.progress = node("p", "", "skill-pilot-progress");
      this.card = node("section", "", "skill-pilot-card");
      this.root.append(this.intro, this.progress, this.card);
      this.renderQuestion();
    }
    answer(q, choice) {
      // An already submitted item never receives a second submission, including after navigation.
      if (this.answers[this.index] || this.index !== this.answers.length ||
          this.session[this.index]?.id !== q.id) return;
      this.answers[this.index] = {
        question: q, selected: choice, correct: choice === q.answer,
        mode: this.mode, evidence_kind: evidenceKind(this.mode)
      };
      this.renderQuestion();
    }
    go(index) {
      if (!Number.isInteger(index) || index < 0 || index > this.answers.length ||
          index > this.session.length) return;
      this.index = index;
      this.renderQuestion();
    }
    navBar(record) {
      const nav = node("nav", "", "skill-pilot-nav");
      nav.setAttribute("aria-label", "Điều hướng câu hỏi");
      const back = button("← Câu trước", "skill-pilot-nav-back");
      back.disabled = this.index === 0;
      back.addEventListener("click", () => this.go(this.index - 1));
      const count = node("span", "Câu " + (this.index + 1) + "/" + this.session.length,
        "skill-pilot-nav-counter");
      const forward = button(this.index === this.session.length - 1 ?
        "Xem kết quả →" : "Câu tiếp →", "skill-pilot-nav-next");
      forward.disabled = !record;
      forward.addEventListener("click", () => {
        if (!this.answers[this.index]) return;
        this.go(this.index + 1);
      });
      nav.append(back, count, forward);
      return nav;
    }
    renderQuestion() {
      this.card.replaceChildren();
      if (this.index >= this.session.length) return this.renderSummary();
      const q = this.session[this.index], record = this.answers[this.index];
      const score = summarize(this.answers);
      this.progress.textContent = "Đã nộp " + score.attempted + "/" + this.session.length +
        " · Đúng " + score.correct + " · " + (this.mode === "initial" ? "Lượt đầu" :
          this.mode === "retry_old" ? "Ôn câu cũ" : "Câu tương tự sau phản hồi");
      this.card.append(node("p", "📘 CĐ06 · " + q.id + (record ? " · Đã nộp · Chỉ xem" : ""),
        "skill-pilot-meta"));
      this.card.append(node("h3", "Nhận diện kết quả phân tích hoàn toàn", "skill-pilot-heading"));
      this.card.append(node("p",
        "Chọn kết quả ở dạng tích cuối cùng; một tích vẫn còn nhân tử phân tích được thì chưa hoàn thành.",
        "skill-pilot-secondary"));
      this.card.append(node("p", q.question, "skill-pilot-question"));
      const options = node("div", "", "skill-pilot-options");
      for (const index of this.orders[this.index]) {
        const option = button(q.options[index], "skill-pilot-option");
        option.dataset.originalIndex = String(index);
        if (record) {
          option.disabled = true;
          if (index === q.answer) option.classList.add("is-correct");
          if (index === record.selected && !record.correct) option.classList.add("is-wrong");
        } else option.addEventListener("click", () => this.answer(q, index));
        options.append(option);
      }
      this.card.append(options);
      if (record) {
        const feedback = node("div", "", "skill-pilot-feedback " +
          (record.correct ? "is-correct" : "is-wrong"));
        feedback.append(node("strong", record.correct ? "✓ Đúng dạng kết quả" :
          "✗ Cần xem lại bước phân tích"));
        feedback.append(node("p", q.explanation));
        feedback.append(node("p",
          "Chỉ quan sát được việc chọn kết quả cuối; các bước trung gian chưa được chấm riêng.",
          "skill-pilot-secondary"));
        this.card.append(feedback);
      } else this.card.append(node("p", "Chọn một đáp án để nộp. Sau khi nộp, câu chỉ có thể xem lại.",
        "skill-pilot-secondary"));
      this.card.append(this.navBar(record));
      typeset(this.card);
    }
    renderSummary() {
      const score = summarize(this.answers);
      if (this.mode === "initial" && !this.firstScore) {
        this.firstScore = { ...score };
        this.firstMisses = this.answers.filter(a => !a.correct).map(a => a.question.id);
      }
      this.progress.textContent = "Hoàn thành: " + score.correct + "/" + score.attempted;
      this.card.append(node("h3", this.mode === "initial" ? "Kết quả lượt đầu" :
        this.mode === "retry_old" ? "Kết quả ôn lại câu cũ" : "Kết quả câu tương tự",
        "skill-pilot-heading"));
      const first = this.firstScore;
      this.card.append(node("p", "Lượt đầu: " + first.correct + "/" + first.attempted +
        " · Lượt này: " + score.correct + "/" + score.attempted +
        " · " + score.wrong.length + " câu cần ôn. Không cộng gộp hai lượt, không lưu điểm.",
        "skill-pilot-summary-lead"));
      if (this.mode !== "initial") this.card.append(node("p",
        this.mode === "retry_old"
          ? "Làm lại câu đã xem lời giải là ôn tập; dù đúng cũng không trở thành câu độc lập mới."
          : "Đây là câu mới theo ID, nhưng làm ngay sau khi xem lời giải là vận dụng có hỗ trợ. Muốn kiểm tra ghi nhớ độc lập cần câu khác ở một buổi sau.",
        "skill-pilot-warning"));
      const wrong = this.answers.filter(a => !a.correct);
      if (wrong.length) {
        this.card.append(node("h4", "Câu cần xem lại (" + wrong.length + ")", "skill-pilot-review-title"));
        for (const a of wrong) {
          const details = document.createElement("details");
          details.className = "skill-pilot-review-item";
          details.append(node("summary", a.question.id + " · Xem lời giải"));
          details.append(node("p", a.question.question, "skill-pilot-review-question"));
          details.append(node("p", "Em đã chọn: " + a.question.options[a.selected], "skill-pilot-review-chosen"));
          details.append(node("p", "Đáp án: " + a.question.options[a.question.answer], "skill-pilot-review-answer"));
          details.append(node("p", a.question.explanation, "skill-pilot-review-explanation"));
          this.card.append(details);
        }
        const repeat = button("Luyện lại " + wrong.length + " câu cũ vừa sai", "skill-pilot-primary");
        repeat.addEventListener("click", () => this.start(wrong.map(a => a.question), "retry_old"));
        this.card.append(repeat);
      } else this.card.append(node("p", "✓ Không có câu sai trong lượt này.", "skill-pilot-success"));
      const related = this.firstMisses.map(id => this.similar[id]).filter(Boolean);
      if (related.length && this.mode !== "similar_after_feedback") {
        const transfer = button("Luyện " + related.length + " câu tương tự mới (sau phản hồi)",
          "skill-pilot-primary");
        transfer.addEventListener("click", () => this.start(related, "similar_after_feedback"));
        this.card.append(transfer);
      }
      if (this.mode === "initial" && score.attempted === this.original.length) {
        const all = button("Xem lại câu cuối", "skill-pilot-nav-back");
        all.addEventListener("click", () => this.go(this.session.length - 1));
        this.card.append(all);
      }
      const repeatAll = button("Ôn lại toàn bộ 8 câu ban đầu");
      repeatAll.addEventListener("click", () => this.start(this.original, "retry_old"));
      this.card.append(repeatAll);
      const link = document.createElement("a");
      link.className = "skill-pilot-lesson-link";
      link.href = new URL("../../kien-thuc/06-phan-tich-da-thuc/", document.baseURI).href;
      link.textContent = "Ôn lại CĐ06 →";
      this.card.append(link);
      typeset(this.card);
    }
  }
  const init = async () => {
    const root = document.querySelector("[data-complete-factor-preview-v2]");
    if (!root || root.dataset.completeFactorInitialized) return;
    root.dataset.completeFactorInitialized = "1";
    try { new Preview(root, await loadSets(root)); }
    catch(error) {
      root.replaceChildren(node("p", "Chưa thể tải bộ câu hỏi: " + error.message,
        "skill-pilot-warning"));
    }
  };
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init, { once: true });
  else init();
})();
