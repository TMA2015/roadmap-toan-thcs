(() => {
  "use strict";
  const KEY = "toan-thcs-assessment-v2";
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
      attempted_at: event.attempted_at
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
        secondary_role: ref.secondary_role, topic: ref.topic, question_kind: "bank_sample" };
      if (!isValidQuestion(item)) throw new Error("Câu gốc chưa hợp lệ: " + ref.question_id);
      result.push(item);
    }
    for (const source of micro.items) {
      const item = { id: source.id, question: source.prompt, options: source.options,
        answer: source.answer_index, explanation: source.explanation,
        assessed_skill: source.assessed_skill, secondary_tag: null, secondary_role: null,
        topic: source.topic, question_kind: "micro_pilot" };
      if (!isValidQuestion(item)) throw new Error("Câu kiểm tra ngắn chưa hợp lệ: " + source.id);
      result.push(item);
    }
    if (new Set(result.map((q) => q.id)).size !== result.length) throw new Error("ID trùng trong bộ thử nghiệm");
    return result;
  };
  const logic = Object.freeze({ KEY, emptyState, normalizedState, appendEvidence, skillSummary, prepareItems, shuffle, isValidQuestion });
  if (typeof module !== "undefined" && module.exports) module.exports = logic;
  if (typeof window === "undefined" || typeof document === "undefined") return;
  window.RoadmapSkillAssessmentPilot = logic;

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
      this.questions = questions;
      this.index = 0;
      this.correct = 0;
      this.answered = false;
      this.storageAvailable = true;
      try { this.state = normalizedState(JSON.parse(localStorage.getItem(KEY))); }
      catch (_) { this.state = emptyState(); this.storageAvailable = false; }
      this.render();
    }
    save() {
      try { localStorage.setItem(KEY, JSON.stringify(this.state)); }
      catch (_) { this.storageAvailable = false; }
    }
    render() {
      this.root.replaceChildren();
      this.root.appendChild(textEl("p",
        "14 câu thử nghiệm: 10 câu từ ngân hàng gốc và 4 câu kiểm tra ngắn. Chỉ kỹ năng chính nhận điểm; dữ liệu luyện tập cũ không bị thay đổi.",
        "skill-pilot-intro"));
      if (!this.storageAvailable) this.root.appendChild(textEl("p",
        "Trình duyệt đang chặn lưu dữ liệu; kết quả chỉ tồn tại trong phiên này.", "skill-pilot-warning"));
      this.progress = textEl("p", "", "skill-pilot-progress");
      this.card = textEl("section", "", "skill-pilot-card");
      this.root.append(this.progress, this.card);
      this.renderQuestion();
    }
    renderQuestion() {
      this.card.replaceChildren();
      if (this.index >= this.questions.length) return this.renderSummary();
      this.answered = false;
      const q = this.questions[this.index];
      this.progress.textContent = "Câu " + (this.index + 1) + "/" + this.questions.length + " · Đúng " + this.correct;
      this.card.appendChild(textEl("p", (q.question_kind === "micro_pilot" ? "🔎 Kiểm tra riêng" : "📘 Câu trong ngân hàng") +
        " · " + q.topic, "skill-pilot-meta"));
      this.card.appendChild(textEl("h3", "Kỹ năng đánh giá: " + label(q.assessed_skill), "skill-pilot-heading"));
      if (q.secondary_tag) this.card.appendChild(textEl("p",
        "Liên quan: " + label(q.secondary_tag) + " (" +
        ({ category: "nhóm kiến thức", method: "phương pháp", context: "bối cảnh",
          representation: "cách biểu diễn", supporting_skill: "kiến thức hỗ trợ" })[q.secondary_role] + ") — không cộng điểm riêng.",
        "skill-pilot-secondary"));
      this.card.appendChild(textEl("p", q.question, "skill-pilot-question"));
      const choices = textEl("div", "", "skill-pilot-options");
      shuffle(q.options.map((content, i) => ({ content, index: i }))).forEach((choice) => {
        const item = button(choice.content, "skill-pilot-option");
        item.dataset.originalIndex = String(choice.index);
        item.addEventListener("click", () => this.answer(q, choice.index, choices));
        choices.appendChild(item);
      });
      this.card.appendChild(choices);
      this.feedback = textEl("div", "", "skill-pilot-feedback");
      this.feedback.hidden = true;
      this.card.appendChild(this.feedback);
      this.actions = textEl("div", "", "skill-pilot-actions");
      this.card.appendChild(this.actions);
      typeset(this.card);
    }
    answer(q, choice, choices) {
      if (this.answered || this.questions[this.index]?.id !== q.id) return;
      this.answered = true;
      const correct = choice === q.answer;
      if (correct) this.correct += 1;
      this.state = appendEvidence(this.state, {
        question_id: q.id, assessed_skill: q.assessed_skill, correct, independent: true,
        question_kind: q.question_kind,
        supporting_tags: q.secondary_tag ? [q.secondary_tag] : [],
        context: q.secondary_role === "context" ? q.secondary_tag : null,
        attempted_at: new Date().toISOString()
      });
      this.save();
      [...choices.children].forEach((element) => {
        element.disabled = true;
        const originalIndex = Number(element.dataset.originalIndex);
        if (originalIndex === q.answer) element.classList.add("is-correct");
        if (originalIndex === choice && !correct) element.classList.add("is-wrong");
      });
      this.feedback.hidden = false;
      this.feedback.className = "skill-pilot-feedback " + (correct ? "is-correct" : "is-wrong");
      this.feedback.appendChild(textEl("strong", correct ? "✓ Đúng" : "✗ Chưa đúng"));
      this.feedback.appendChild(textEl("p", q.explanation || "Chưa có giải thích trong ngân hàng."));
      this.feedback.appendChild(textEl("p", "Chỉ ghi nhận: " + label(q.assessed_skill) + ". Các tag hỗ trợ không nhận điểm.",
        "skill-pilot-secondary"));
      const next = button(this.index + 1 < this.questions.length ? "Câu tiếp theo" : "Xem tổng kết", "skill-pilot-primary");
      next.addEventListener("click", () => { this.index += 1; this.renderQuestion(); });
      this.actions.appendChild(next);
      typeset(this.feedback);
    }
    renderSummary() {
      this.progress.textContent = "Hoàn thành: " + this.correct + "/" + this.questions.length;
      this.card.appendChild(textEl("h3", "Kết quả thử nghiệm", "skill-pilot-heading"));
      this.card.appendChild(textEl("p",
        "Đây là số liệu thử nghiệm theo kỹ năng chính, chưa phải đánh giá đạt chuẩn hoặc điều kiện mở khóa chương tiếp theo."));
      const summary = skillSummary(this.state);
      for (const skill of Object.keys(summary).sort((a,b) => label(a).localeCompare(label(b), "vi"))) {
        const record = summary[skill];
        this.card.appendChild(textEl("p", label(skill) + ": " + record.correct + "/" + record.attempted +
          " · tự làm đúng " + record.independent_correct + " · " +
          (record.attempted < 3 ? "cần thêm bằng chứng" : "đã có dữ liệu ban đầu"), "skill-pilot-result"));
      }
      this.card.appendChild(textEl("p", this.storageAvailable ?
        "Các lượt thử nghiệm được lưu riêng trên trình duyệt này. Lịch sử luyện tập thông thường vẫn giữ nguyên." :
        "Không lưu được xuống trình duyệt; kết quả trên chỉ có trong phiên này.", "skill-pilot-secondary"));
      const again = button("Làm lại bộ thử nghiệm", "skill-pilot-primary");
      again.addEventListener("click", () => { this.index = 0; this.correct = 0; this.renderQuestion(); });
      this.card.appendChild(again);
    }
  }
  const init = async () => {
    for (const root of document.querySelectorAll("[data-skill-assessment-pilot]")) {
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
