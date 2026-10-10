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
  const logic = Object.freeze({ KEY, emptyState, normalizedState, appendEvidence, skillSummary, firstAttemptSummary, prepareItems, shuffle, isValidQuestion });
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
      this.session = [...questions];
      this.sessionAnswers = [];
      this.retryMode = false;
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
    startSession(items, retryMode = false) {
      this.session = [...items];
      this.sessionAnswers = [];
      this.retryMode = retryMode;
      this.index = 0;
      this.correct = 0;
      if (this.introEl) this.introEl.textContent = retryMode
        ? "Luyện lại " + this.session.length + " câu vừa sai. Đáp án đã được xem trước đó; lần làm lại giúp ôn tập nhưng không phải bằng chứng độc lập mới."
        : "14 câu thử nghiệm: 10 câu từ ngân hàng gốc và 4 câu kiểm tra ngắn. Mỗi câu chỉ cộng vào một kỹ năng chính.";
      this.renderQuestion();
    }
    render() {
      this.root.replaceChildren();
      this.introEl = textEl("p",
        "14 câu thử nghiệm: 10 câu từ ngân hàng gốc và 4 câu kiểm tra ngắn. Mỗi câu chỉ cộng vào một kỹ năng chính.",
        "skill-pilot-intro");
      this.root.appendChild(this.introEl);
      if (!this.storageAvailable) this.root.appendChild(textEl("p",
        "Trình duyệt đang chặn lưu dữ liệu; kết quả chỉ tồn tại trong phiên này.", "skill-pilot-warning"));
      this.progress = textEl("p", "", "skill-pilot-progress");
      this.card = textEl("section", "", "skill-pilot-card");
      this.root.append(this.progress, this.card);
      this.renderQuestion();
    }
    renderQuestion() {
      this.card.replaceChildren();
      if (this.index >= this.session.length) return this.renderSummary();
      this.answered = false;
      const q = this.session[this.index];
      this.progress.textContent = "Câu " + (this.index + 1) + "/" + this.session.length + " · Đúng " + this.correct;
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
      if (this.answered || this.session[this.index]?.id !== q.id) return;
      this.answered = true;
      const correct = choice === q.answer;
      if (correct) this.correct += 1;
      this.sessionAnswers.push({ question: q, choice, correct });
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
      const next = button(this.index + 1 < this.session.length ? "Câu tiếp theo" : "Xem tổng kết", "skill-pilot-primary");
      next.addEventListener("click", () => { this.index += 1; this.renderQuestion(); });
      this.actions.appendChild(next);
      typeset(this.feedback);
    }
    renderSummary() {
      const wrong = this.sessionAnswers.filter((entry) => !entry.correct);
      this.progress.textContent = "Hoàn thành: " + this.correct + "/" + this.session.length;
      this.card.appendChild(textEl("h3", this.retryMode ? "Kết quả lượt luyện lại" : "Kết quả lượt vừa làm", "skill-pilot-heading"));
      this.card.appendChild(textEl("p",
        "Đúng " + this.correct + "/" + this.session.length + " câu · " + wrong.length +
        " câu cần xem lại. Đây là nhận xét từ bài thử nghiệm ngắn, chưa phải kết luận mức độ thành thạo.",
        "skill-pilot-summary-lead"));

      if (wrong.length) {
        this.card.appendChild(textEl("h4", "Câu cần xem lại (" + wrong.length + ")", "skill-pilot-review-title"));
        this.card.appendChild(textEl("p",
          "Mở từng câu để xem đáp án và lời giải, hoặc bấm luyện lại ở dưới. Một câu sai chưa đủ để kết luận em yếu cả kỹ năng.",
          "skill-pilot-secondary"));
        wrong.forEach((entry, index) => {
          const q = entry.question;
          const item = document.createElement("details");
          item.className = "skill-pilot-review-item";
          const heading = document.createElement("summary");
          heading.textContent = (index + 1) + ". " + label(q.assessed_skill) + " · " + q.id;
          item.appendChild(heading);
          item.appendChild(textEl("p", q.question, "skill-pilot-review-question"));
          item.appendChild(textEl("p", "Em đã chọn: " + q.options[entry.choice], "skill-pilot-review-chosen"));
          item.appendChild(textEl("p", "Đáp án đúng: " + q.options[q.answer], "skill-pilot-review-answer"));
          item.appendChild(textEl("p", q.explanation || "Chưa có lời giải ngắn cho câu này.", "skill-pilot-review-explanation"));
          if (/^[0-9]{2}-[a-z0-9-]+$/.test(q.topic)) {
            const link = document.createElement("a");
            link.className = "skill-pilot-lesson-link";
            link.href = new URL("../../kien-thuc/" + q.topic + "/", document.baseURI).href;
            link.textContent = "Ôn lại bài học liên quan ↗";
            item.appendChild(link);
          }
          this.card.appendChild(item);
        });
        const retry = button("Luyện lại " + wrong.length + " câu vừa sai", "skill-pilot-primary");
        retry.addEventListener("click", () => this.startSession(wrong.map((entry) => entry.question), true));
        this.card.appendChild(retry);
        this.card.appendChild(textEl("p",
          "Luyện lại câu đã xem đáp án là hoạt động ôn tập; không được hiểu như một câu hỏi mới hoặc chứng cứ độc lập mới.",
          "skill-pilot-secondary"));
      } else {
        this.card.appendChild(textEl("p",
          "Không có câu sai trong lượt này. Em có thể mở phần lịch sử hoặc làm lại bộ thử nghiệm; không cần suy ra đã nắm chắc từ một lượt.",
          "skill-pilot-success"));
      }

      const history = document.createElement("details");
      history.className = "skill-pilot-history";
      const historyTitle = document.createElement("summary");
      historyTitle.textContent = "Lịch sử thử nghiệm (" + this.state.events.length + " lượt, gồm cả làm lại)";
      history.appendChild(historyTitle);
      history.appendChild(textEl("p",
        "Số câu khác nhau và kết quả ở lần xuất hiện đầu tiên trong dữ liệu đang giữ. Làm lại cùng câu không tạo thêm câu hỏi độc lập, dù vẫn được lưu như một lượt ôn.",
        "skill-pilot-secondary"));
      const summary = firstAttemptSummary(this.state);
      for (const skill of Object.keys(summary).sort((a, b) => label(a).localeCompare(label(b), "vi"))) {
        const record = summary[skill];
        history.appendChild(textEl("p", label(skill) + ": lần đầu đúng " +
          record.first_correct + "/" + record.distinct + " câu khác nhau · tổng " +
          record.total_attempts + " lượt" +
          (record.distinct < 3 ? " · chưa đủ bằng chứng để kết luận" : " · dữ liệu ban đầu"),
          "skill-pilot-result"));
      }
      this.card.appendChild(history);
      this.card.appendChild(textEl("p", this.storageAvailable ?
        "Lịch sử thử nghiệm được lưu riêng trên trình duyệt này. Dữ liệu luyện tập thông thường vẫn giữ nguyên." :
        "Không lưu được xuống trình duyệt; kết quả trên chỉ có trong phiên này.", "skill-pilot-secondary"));
      const again = button("Làm lại toàn bộ 14 câu", "skill-pilot-primary");
      again.addEventListener("click", () => this.startSession(this.questions, false));
      this.card.appendChild(again);
      typeset(this.card);
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
