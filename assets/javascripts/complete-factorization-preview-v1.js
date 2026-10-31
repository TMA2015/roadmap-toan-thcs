(() => {
  "use strict";
  const BUILD = "complete-factor-preview-v1-20260927";
  const SCHEMA = "complete-factorization-preview-v1";
  const expectedSkill = "phan-tich-da-thuc-hoan-toan";

  const shuffle = (items, random = Math.random) => {
    const out = [...items];
    for (let i = out.length - 1; i > 0; i -= 1) {
      const j = Math.floor(random() * (i + 1));
      [out[i], out[j]] = [out[j], out[i]];
    }
    return out;
  };
  const validConfig = (config) => !!config && config.schema === SCHEMA &&
    config.status === "opt_in_unscored_no_storage" &&
    config.candidate_assessed_skill === expectedSkill &&
    config.legacy_source_tag === "phoi-hop-phuong-phap" &&
    typeof config.source_file === "string" &&
    /^06-phan-tich-da-thuc-v1-\d{2}\.json$/.test(config.source_file) &&
    /^[0-9a-f]{40}$/.test(config.source_file_blob_sha) &&
    Array.isArray(config.question_ids) && config.question_ids.length === 8 &&
    new Set(config.question_ids).size === 8;
  const prepareItems = (config, questions) => {
    if (!validConfig(config) || !Array.isArray(questions)) throw new Error("Bộ thử nghiệm chưa đúng phiên bản.");
    const byId = new Map(questions.map(q => [q.id, q]));
    return config.question_ids.map(id => {
      const q = byId.get(id);
      if (!q || !/^FAC06V1_0(7[7-9]|8[0-4])$/.test(q.id) ||
          q.tags?.skill?.length !== 1 || q.tags.skill[0] !== config.legacy_source_tag ||
          !q.question.includes("Phân tích hoàn toàn") ||
          !Array.isArray(q.options) || q.options.length !== 4 ||
          new Set(q.options).size !== 4 ||
          !Number.isInteger(q.answer) || q.answer < 0 || q.answer > 3 ||
          typeof q.explanation !== "string" || !q.explanation.trim()) {
        throw new Error("Câu nguồn không khớp hồ sơ đã kiểm định: " + id);
      }
      return { ...q, assessed_skill: config.candidate_assessed_skill, source_file: config.source_file };
    });
  };
  const summarize = answers => ({
    attempted: answers.length,
    correct: answers.filter(x => x.correct).length,
    wrong: answers.filter(x => !x.correct).map(x => x.question.id)
  });
  const logic = Object.freeze({ BUILD, validConfig, prepareItems, shuffle, summarize });
  if (typeof module !== "undefined" && module.exports) module.exports = logic;
  if (typeof window === "undefined" || typeof document === "undefined") return;
  window.SelfLearningCompleteFactorPreview = logic;

  const el = (tag, content = "", className = "") => {
    const node = document.createElement(tag);
    node.className = className;
    node.textContent = content;
    return node;
  };
  const button = (label, cls = "") => {
    const node = el("button", label, ("skill-pilot-button " + cls).trim());
    node.type = "button";
    return node;
  };
  const typeset = node => {
    if (!window.MathJax?.typesetPromise) return;
    window.MathJax.typesetClear?.([node]);
    window.MathJax.typesetPromise([node]).catch(() => {});
  };
  const getJson = async url => {
    const response = await fetch(url, { cache: "no-store" });
    if (!response.ok) throw new Error("Không tải được học liệu: HTTP " + response.status);
    return response.json();
  };
  const loadItems = async root => {
    const base = new URL(root.dataset.assetsBase || "../../assets/", document.baseURI);
    const config = await getJson(new URL("data/curriculum/complete-factorization-preview-v1.json", base));
    if (!validConfig(config)) throw new Error("Thông tin bộ thử nghiệm chưa đúng định dạng.");
    const bank = await getJson(new URL("data/practice/" + config.source_file, base));
    return prepareItems(config, bank.questions);
  };

  class Preview {
    constructor(root, items) {
      this.root = root;
      this.root.dataset.completeFactorBuild = BUILD;
      this.original = items;
      this.start(items, false);
    }
    start(items, retry) {
      this.session = [...items];
      this.answers = [];
      this.index = 0;
      this.answered = false;
      this.retry = retry;
      this.render();
    }
    render() {
      this.root.replaceChildren();
      this.intro = el("p", this.retry
        ? "Luyện lại câu đã xem đáp án; đây là hoạt động ôn tập, không phải bằng chứng mới."
        : "Beta riêng · Chọn kết quả phân tích hoàn toàn. Kết quả chỉ tồn tại trong trang đang mở; không lưu tiến độ hoặc chấm mức độ thành thạo.",
        "skill-pilot-intro");
      this.progress = el("p", "", "skill-pilot-progress");
      this.card = el("section", "", "skill-pilot-card");
      this.root.append(this.intro, this.progress, this.card);
      this.renderQuestion();
    }
    renderQuestion() {
      this.card.replaceChildren();
      if (this.index >= this.session.length) { this.renderSummary(); return; }
      this.answered = false;
      const q = this.session[this.index];
      this.progress.textContent = "Câu " + (this.index + 1) + "/" + this.session.length +
        " · Đúng " + summarize(this.answers).correct;
      this.card.append(el("p", "📘 CĐ06 · Câu nguồn " + q.id, "skill-pilot-meta"));
      this.card.append(el("h3", "Đích kiểm tra: Nhận diện kết quả phân tích hoàn toàn", "skill-pilot-heading"));
      this.card.append(el("p", "Chọn kết quả cuối ở dạng tích. Đáp án tương đương nhưng mới phân tích một phần chưa hoàn thành yêu cầu.", "skill-pilot-secondary"));
      this.card.append(el("p", q.question, "skill-pilot-question"));
      const options = el("div", "", "skill-pilot-options");
      for (const choice of shuffle(q.options.map((value,index) => ({ value,index })))) {
        const b = button(choice.value, "skill-pilot-option");
        b.dataset.originalIndex = String(choice.index);
        b.addEventListener("click", () => this.answer(q, choice.index, options));
        options.append(b);
      }
      this.card.append(options);
      this.feedback = el("div", "", "skill-pilot-feedback");
      this.feedback.hidden = true;
      this.actions = el("div", "", "skill-pilot-actions");
      this.card.append(this.feedback, this.actions);
      typeset(this.card);
    }
    answer(q, selected, options) {
      if (this.answered || this.session[this.index]?.id !== q.id) return;
      this.answered = true;
      const correct = selected === q.answer;
      this.answers.push({ question:q, selected, correct });
      for (const item of options.children) {
        item.disabled = true;
        const index = Number(item.dataset.originalIndex);
        if (index === q.answer) item.classList.add("is-correct");
        if (index === selected && !correct) item.classList.add("is-wrong");
      }
      this.feedback.hidden = false;
      this.feedback.className = "skill-pilot-feedback " + (correct ? "is-correct" : "is-wrong");
      this.feedback.append(el("strong", correct ? "✓ Đúng dạng kết quả" : "✗ Cần xem lại bước phân tích"));
      this.feedback.append(el("p", q.explanation));
      this.feedback.append(el("p", "Đúng câu này chỉ cho thấy em nhận diện được kết quả; chưa chứng minh từng thao tác trung gian.", "skill-pilot-secondary"));
      const next = button(this.index + 1 < this.session.length ? "Câu tiếp theo" : "Xem kết quả lượt này", "skill-pilot-primary");
      next.addEventListener("click", () => { this.index++; this.renderQuestion(); });
      this.actions.append(next);
      typeset(this.feedback);
    }
    renderSummary() {
      const score = summarize(this.answers);
      this.progress.textContent = "Hoàn thành: " + score.correct + "/" + score.attempted;
      this.card.append(el("h3", this.retry ? "Kết quả lượt ôn lại" : "Kết quả lượt vừa làm", "skill-pilot-heading"));
      this.card.append(el("p", "Đúng " + score.correct + "/" + score.attempted +
        " câu · " + score.wrong.length +
        " câu cần ôn. Kết quả này là phản hồi ngắn, không được lưu và không chấm Core Readiness.",
        "skill-pilot-summary-lead"));
      const wrong = this.answers.filter(a => !a.correct);
      if (wrong.length) {
        this.card.append(el("h4", "Câu vừa sai (" + wrong.length + ")", "skill-pilot-review-title"));
        for (const a of wrong) {
          const item = document.createElement("details");
          item.className = "skill-pilot-review-item";
          item.append(el("summary", a.question.id + " · Xem lại lời giải"));
          item.append(el("p", a.question.question, "skill-pilot-review-question"));
          item.append(el("p", "Em đã chọn: " + a.question.options[a.selected], "skill-pilot-review-chosen"));
          item.append(el("p", "Đáp án: " + a.question.options[a.question.answer], "skill-pilot-review-answer"));
          item.append(el("p", a.question.explanation, "skill-pilot-review-explanation"));
          this.card.append(item);
        }
        const retry = button("Luyện lại " + wrong.length + " câu vừa sai", "skill-pilot-primary");
        retry.addEventListener("click", () => this.start(wrong.map(a => a.question), true));
        this.card.append(retry);
      } else this.card.append(el("p", "✓ Không có câu sai trong lượt này. Có thể quay về bài học hoặc luyện thêm dạng mới.", "skill-pilot-success"));
      const restart = button("Làm lại cả 8 câu (ôn tập)");
      restart.addEventListener("click", () => this.start(this.original, true));
      this.card.append(restart);
      const lesson = document.createElement("a");
      lesson.className = "skill-pilot-lesson-link";
      lesson.href = new URL("../../kien-thuc/06-phan-tich-da-thuc/", document.baseURI).href;
      lesson.textContent = "Mở lại bài học CĐ06 →";
      this.card.append(lesson);
      typeset(this.card);
    }
  }
  const init = async () => {
    const root = document.querySelector("[data-complete-factor-preview]");
    if (!root || root.dataset.completeFactorInitialized) return;
    root.dataset.completeFactorInitialized = "1";
    try { new Preview(root, await loadItems(root)); }
    catch (error) {
      root.replaceChildren(el("p", "Chưa thể tải bộ câu hỏi: " + error.message +
        ". Hãy tải lại trang sau hoặc mở luyện tập CĐ06.", "skill-pilot-warning"));
    }
  };
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init, { once:true });
  else init();
})();
