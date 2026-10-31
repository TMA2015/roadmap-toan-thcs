(() => {
  "use strict";

  const STORAGE_KEY = "toan-thcs-practice-v1";
  const KNOWLEDGE_GRAPH_PATH = "assets/data/curriculum/knowledge-graph-v1.json";
  const DIAGNOSIS_MIN_ATTEMPTS = 3;
  const DIAGNOSIS_WEAK_ACCURACY = 0.75;
  const REMEDIATION_SESSION_SIZE = 6;
  const RECOVERY_KEY = "toan-thcs-remediation-v1";
  let knowledgeGraphPromise = null;

  const loadStats = () => {
    if (window.RoadmapLearnerEvidence?.load) return window.RoadmapLearnerEvidence.load();
    try {
      return JSON.parse(localStorage.getItem(STORAGE_KEY)) || { questions: {}, tags: {}, observed_signals: [] };
    } catch (_) {
      return { questions: {}, tags: {}, observed_signals: [] };
    }
  };

  const saveStats = (stats) => {
    if (window.RoadmapLearnerEvidence?.save) {
      const result = window.RoadmapLearnerEvidence.save(stats);
      return result && typeof result === "object" ? result : { ok: true, reason: null };
    }
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw !== null) {
        try { JSON.parse(raw); }
        catch (_) { return { ok: false, reason: "CORRUPT_PREVIOUS_DATA" }; }
      }
      localStorage.setItem(STORAGE_KEY, JSON.stringify(stats));
      return { ok: true, reason: null };
    } catch (_) { return { ok: false, reason: "WRITE_FAILED" }; }
  };
  const loadRecovery = () => {
    try { return JSON.parse(localStorage.getItem(RECOVERY_KEY)) || { events: [] }; }
    catch (_) { return { events: [] }; }
  };
  const saveRecovery = (data) => {
    try {
      const raw = localStorage.getItem(RECOVERY_KEY);
      if (raw !== null) {
        try { JSON.parse(raw); }
        catch (_) { return false; }
      }
      localStorage.setItem(RECOVERY_KEY, JSON.stringify(data));
      return true;
    } catch (_) { return false; }
  };
  const snapshotSkill = (stats, skill) => {
    const record = stats?.tags?.[skill] || { attempted: 0, correct: 0 };
    return { attempted: record.attempted || 0, correct: record.correct || 0, accuracy: accuracy(record) };
  };
  const accuracy = (record) => record && record.attempted ? record.correct / record.attempted : null;

  const questionSkills = (question) => {
    const value = question?.tags?.skill;
    return Array.isArray(value) ? value.filter(Boolean) : [value].filter(Boolean);
  };

  const questionVariantGroup = (question) => {
    const value = String(question?.variant_group || "").trim();
    return value || null;
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
      if (question.response_type) {
        if (!window.RoadmapRichPracticeAnswerV1?.validate(question) || !question.source_item_id) {
          throw new Error(`Câu nhập kết quả ${question.id} thiếu hợp đồng chấm/nguồn gốc`);
        }
        continue;
      }
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
      if (question.variant_group !== undefined && !String(question.variant_group || "").trim()) {
        throw new Error(`Câu ${question.id} có variant_group không hợp lệ`);
      }
    }
  };

  const fetchJson = async (url) => {
    const response = await fetch(url);
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    return response.json();
  };

  const siteRootFromPath = () => {
    const marker = "/kien-thuc/";
    const pathname = window.location.pathname;
    return pathname.includes(marker) ? (pathname.split(marker)[0] || "") : "";
  };

  const loadKnowledgeGraph = () => {
    if (!knowledgeGraphPromise) {
      const siteRoot = siteRootFromPath();
      knowledgeGraphPromise = fetchJson(`${siteRoot}/${KNOWLEDGE_GRAPH_PATH}`).catch(() => null);
    }
    return knowledgeGraphPromise;
  };

  const evidenceForSkill = (stats, skill) => {
    const record = stats?.tags?.[skill];
    if (!record?.attempted) return { skill, attempted: 0, correct: 0, accuracy: null, hintedRate: null, sufficient: false };
    return {
      skill,
      attempted: record.attempted,
      correct: record.correct || 0,
      accuracy: accuracy(record),
      hintedRate: record.hinted_attempts ? record.hinted_attempts / record.attempted : 0,
      sufficient: record.attempted >= DIAGNOSIS_MIN_ATTEMPTS
    };
  };

  const diagnoseRemediation = (graph, stats, targetSkill) => {
    if (!graph || !targetSkill) return null;
    const target = evidenceForSkill(stats, targetSkill);
    if (!target.sufficient || target.accuracy >= DIAGNOSIS_WEAK_ACCURACY) return null;

    const rule = (graph.remediation_rules || []).find((item) => item?.when?.skill === targetSkill);
    const directPrereqs = (graph.edges || [])
      .filter((edge) => edge.to === targetSkill && edge.type === "PREREQUISITE" && edge.confidence === "high")
      .map((edge) => edge.from);
    const candidates = [...new Set([...(rule?.recommend || []), ...directPrereqs])]
      .map((skill) => evidenceForSkill(stats, skill));

    const evidencedWeak = candidates
      .filter((item) => item.sufficient && item.accuracy < DIAGNOSIS_WEAK_ACCURACY)
      .sort((a, b) => (a.accuracy - b.accuracy) || (b.attempted - a.attempted));
    const needsEvidence = candidates.filter((item) => !item.sufficient);

    if (evidencedWeak.length) {
      return { target, kind: "evidenced", candidates: evidencedWeak.slice(0, 3), message: rule?.message || "" };
    }
    if (needsEvidence.length) {
      return { target, kind: "needs-evidence", candidates: needsEvidence.slice(0, 3), message: "" };
    }
    return { target, kind: "target-only", candidates: [], message: "" };
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

  const pickFromPool = (pool, count, used, usedVariantGroups = new Set()) => {
    const result = [];
    const deferred = [];

    for (const question of pool) {
      if (used.has(question.id)) continue;
      const variantGroup = questionVariantGroup(question);
      if (variantGroup && usedVariantGroups.has(variantGroup)) {
        deferred.push(question);
        continue;
      }
      result.push(question);
      used.add(question.id);
      if (variantGroup) usedVariantGroups.add(variantGroup);
      if (result.length >= count) return result;
    }

    for (const question of deferred) {
      if (used.has(question.id)) continue;
      result.push(question);
      used.add(question.id);
      const variantGroup = questionVariantGroup(question);
      if (variantGroup) usedVariantGroups.add(variantGroup);
      if (result.length >= count) break;
    }
    return result;
  };

  const buildDiverseSession = (pool, count) =>
    pickFromPool(pool, count, new Set(), new Set());

  const buildFocusedSession = (questions, stats, skills, sessionSize) => {
    const focus = skills.filter(Boolean).slice(0, 2);
    if (!focus.length) return [];

    const used = new Set();
    const usedVariantGroups = new Set();
    const selected = [];
    const firstQuota = focus.length === 2 ? Math.ceil(sessionSize / 2) : sessionSize;
    const quotas = focus.length === 2 ? [firstQuota, sessionSize - firstQuota] : [sessionSize];

    focus.forEach((skill, index) => {
      const subset = questions.filter((question) => questionSkills(question).includes(skill));
      const pool = weightedQuestionPool(subset, stats);
      selected.push(...pickFromPool(pool, quotas[index], used, usedVariantGroups));
    });

    if (selected.length < sessionSize) {
      const focusSet = new Set(focus);
      const union = questions.filter((question) => questionSkills(question).some((skill) => focusSet.has(skill)));
      selected.push(...pickFromPool(weightedQuestionPool(union, stats), sessionSize - selected.length, used, usedVariantGroups));
    }

    if (selected.length < sessionSize) {
      selected.push(...pickFromPool(weightedQuestionPool(questions, stats), sessionSize - selected.length, used, usedVariantGroups));
    }

    return shuffle(selected).slice(0, sessionSize);
  };


  // Selection-only policy: preserve question ID, answer keys, and v1 grading/history.
  // This cache stores only the IDs SHOWN in the last two sets, per tab and per bank.
  // It is never learner performance data and never changes Readiness or Mastery.
  const RECENT_SETS_PREFIX = "toan-thcs-practice-recent-sets-v1:";
  const recentSetsKey = (bank) => RECENT_SETS_PREFIX + String(bank?.bank_id || bank?.topic?.id || "unknown");
  const loadRecentSets = (bank) => {
    try {
      const value = JSON.parse(sessionStorage.getItem(recentSetsKey(bank)) || "[]");
      return Array.isArray(value) ? value.filter(Array.isArray).slice(-2).map(set => set.filter(id => typeof id === "string")) : [];
    } catch (_) { return []; }
  };
  const saveRecentSets = (bank, history) => {
    try { sessionStorage.setItem(recentSetsKey(bank), JSON.stringify(history.slice(-2))); }
    catch (_) { /* optional repetition preference; learner evidence is untouched */ }
  };

  const buildAdaptiveSelection = (questions, stats, bank, sessionSize, recentSets = []) => {
    const count = Math.min(Math.max(0, sessionSize), questions.length);
    if (!count) return [];
    const recent = new Set(recentSets.flat());
    const canAvoidRecent = questions.filter(q => !recent.has(q.id)).length >= count;
    const used = new Set(), variants = new Set(), selected = [];
    const skillHits = new Map(), groupHits = new Map();
    const groups = new Map();
    (bank.skill_groups || []).forEach(group => (group.skills || []).forEach(skill => groups.set(skill, group.id)));
    const qSkills = q => questionSkills(q);
    const quality = q => {
      const primary = qSkills(q)[0] || "__unmapped__";
      const rec = stats.questions?.[q.id];
      return (recent.has(q.id) ? 1000 : 0)
        + (skillHits.get(primary) || 0) * 13
        + (groupHits.get(groups.get(primary) || primary) || 0) * 5
        + (rec?.attempted && accuracy(rec) >= 0.8 ? 2 : 0);
    };
    const take = (pool, quota) => {
      const goal = Math.min(count, selected.length + Math.max(0, quota));
      while (selected.length < goal) {
        let available = pool.filter(q => !used.has(q.id) && (!canAvoidRecent || !recent.has(q.id)));
        if (!available.length) break;
        const variantSafe = available.filter(q => !questionVariantGroup(q) || !variants.has(questionVariantGroup(q)));
        if (variantSafe.length) available = variantSafe;
        // Prefer a never-shown-in-recent-sets question when alternatives exist.
        const notRecent = available.filter(q => !recent.has(q.id));
        if (notRecent.length) available = notRecent;
        const lowest = Math.min(...available.map(quality));
        const tied = available.filter(q => quality(q) === lowest);
        const question = tied[Math.floor(Math.random() * tied.length)];
        selected.push(question);
        used.add(question.id);
        const variant = questionVariantGroup(question);
        if (variant) variants.add(variant);
        const primary = qSkills(question)[0] || "__unmapped__";
        skillHits.set(primary, (skillHits.get(primary) || 0) + 1);
        const group = groups.get(primary) || primary;
        groupHits.set(group, (groupHits.get(group) || 0) + 1);
      }
    };
    const unseen = questions.filter(q => !(stats.questions?.[q.id]?.attempted > 0));
    const weakSkills = new Set(rankWeakSkills(stats, Object.keys(bank.skill_labels || {}), 
      (bank.skill_groups || []).flatMap(g => g.skills || [])).slice(0, 4));
    const weak = questions.filter(q => {
      const rec = stats.questions?.[q.id];
      return (rec?.attempted > 0 && rec.correct < rec.attempted) || qSkills(q).some(skill => weakSkills.has(skill));
    });
    const freshQuota = Math.min(unseen.length, Math.max(1, Math.ceil(count * 0.3)));
    const weakQuota = Math.min(weak.length, Math.ceil(count * 0.5), count - freshQuota);
    take(weak, weakQuota);
    // Always reserve exposure to questions never answered, even for weak learners.
    take(unseen, freshQuota);
    take(questions, count);
    return shuffle(selected);
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
      this.knowledgeGraph = null;
      this.session = [];
      this.index = 0;
      this.score = 0;
      this.answered = false;
      this.hintLevel = 0;
      this.hintsCollapsed = false;
      this.fullSolutionViewed = false;
      this.hintButton = null;
      this.geminiPending = false;
      this.mode = "normal";
      this.recentSets = loadRecentSets(bank);
      this.focusSkills = [];
      this.renderShell();
      loadKnowledgeGraph().then((graph) => {
        this.knowledgeGraph = graph;
        this.renderRemediation();
      });
      if (!this.applyRequestedFocus()) this.startNormalSession();
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
        <div class="practice-tutor" hidden aria-live="polite"></div>
        <div class="practice-remediation" hidden aria-live="polite"></div>
        <details class="practice-stats-panel">
          <summary>📊 Xem tiến độ theo kỹ năng</summary>
          <div class="practice-stats-note">Bộ mặc định ưu tiên câu từng sai/kỹ năng yếu và câu chưa làm; nút “Bộ 10 câu mới” chỉ chọn câu chưa làm. Tỉ lệ đúng gồm cả lượt có trợ giúp. Mục “tự làm” tách riêng lượt làm đúng không xem gợi ý/lời giải; dữ liệu cũ chưa phân loại sẽ được ghi rõ. Bấm kỹ năng để luyện riêng.</div>
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
      this.remediationEl = this.root.querySelector(".practice-remediation");
      this.tutorEl = this.root.querySelector(".practice-tutor");

      const normalBtn = createButton("Bộ 10 câu mới", "practice-btn-secondary");
      normalBtn.addEventListener("click", () => this.startNewOnlySession());
      const weakBtn = createButton("Luyện điểm yếu", "practice-btn-secondary");
      weakBtn.addEventListener("click", () => this.startWeakSession());
      this.toolbarActionsEl.append(normalBtn, weakBtn);
      if (this.questions.some(q => q.response_type)) {
        const richBtn = createButton("✍️ Thử dạng nhập đáp án", "practice-btn-secondary practice-rich-focus-btn");
        richBtn.addEventListener("click", () => {
          this.stats = loadStats();
          const subset = this.questions.filter(q => q.response_type);
          this.setSession(subset, "rich", [], "Thử bài nhập trực tiếp · kết quả ghi vào tiến độ Luyện tập, không phải Tự kiểm tra.");
          this.root.scrollIntoView({ behavior: "smooth", block: "start" });
        });
        this.toolbarActionsEl.appendChild(richBtn);
      }
    }

    setSession(session, mode, focusSkills, subtitle) {
      this.session = session;
      this.mode = mode;
      this.focusSkills = focusSkills;
      this.root.dataset.sessionQuestionIds = session.map((question) => question.id).join(",");
      this.root.dataset.sessionVariantGroups = session.map(questionVariantGroup).filter(Boolean).join(",");
      this.index = 0;
      this.score = 0;
      this.answered = false;
      this.subtitleEl.textContent = subtitle;
      this.renderQuestion();
      this.renderStats();
    }

    startNormalSession() {
      this.stats = loadStats();
      const questions = this.questions.filter(q => !q.response_type);
      const session = buildAdaptiveSelection(questions, this.stats, this.bank, this.sessionSize, this.recentSets);
      const unseen = questions.filter(q => !(this.stats.questions?.[q.id]?.attempted > 0)).length;
      this.setSession(session, "normal", [], "Bộ đề " + questions.length + " câu");
    }

    startNewOnlySession() {
      this.stats = loadStats();
      const unseen = this.questions.filter(q => !q.response_type && !(this.stats.questions?.[q.id]?.attempted > 0));
      const session = buildAdaptiveSelection(unseen, this.stats, this.bank, this.sessionSize, this.recentSets);
      this.setSession(session, "new", [],
        session.length
          ? "Bộ câu chưa làm · " + session.length + " câu mới (còn " + unseen.length + " trong ngân hàng)."
          : "Bạn đã làm hết câu trắc nghiệm trong ngân hàng này. Hãy chọn Luyện điểm yếu hoặc luyện lại kiến thức.");
    }

    startWeakSession() {
      this.stats = loadStats();
      const weakSkills = rankWeakSkills(this.stats, this.bankSkills, this.skillOrder).slice(0, 2);
      if (!weakSkills.length) {
        const pool = weightedQuestionPool(this.questions.filter(q => !q.response_type), this.stats);
        const session = buildDiverseSession(pool, Math.min(this.sessionSize, pool.length));
        this.setSession(
          session,
          "weak",
          [],
          `Chưa có kỹ năng đủ ít nhất 3 lượt và dưới 75%. Hệ thống tạm dùng bộ hỗn hợp để thu thập thêm dữ liệu.`
        );
        return;
      }

      const session = buildFocusedSession(this.questions.filter(q => !q.response_type), this.stats, weakSkills, this.sessionSize);
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
      const subset = this.questions.filter((question) => !question.response_type && questionSkills(question).includes(skill));
      const pool = weightedQuestionPool(subset, this.stats);
      const session = buildDiverseSession(pool, Math.min(this.sessionSize, pool.length));
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
        this.cardEl.textContent = this.mode === "new"
          ? "Không còn câu chưa làm. Chọn Luyện điểm yếu hoặc mở một bộ luyện thích ứng."
          : "Chưa có câu hỏi phù hợp trong ngân hàng.";
        return;
      }
      if (this.index >= this.session.length) {
        this.renderSummary();
        return;
      }

      const question = this.currentQuestion();
      this.answered = false;
      this.hintLevel = 0;
      this.hintsCollapsed = false;
      this.fullSolutionViewed = false;
      this.hintButton = null;
      this.progressEl.textContent = `Câu ${this.index + 1}/${this.session.length} · Đúng ${this.score}`;
      this.metaEl.textContent = [question?.tags?.layer && question.tags.layer !== "KNTT-Core" ? question.tags.layer : null, this.difficultyLabel(question.difficulty), this.skillLabel(question)].filter(Boolean).join(" · ");
      this.questionEl.textContent = question.question;
      this.renderDiagram(question);
      this.optionsEl.innerHTML = "";
      this.hintsEl.hidden = true;
      this.hintsEl.innerHTML = "";
      this.feedbackEl.hidden = true;
      if (this.tutorEl) { this.tutorEl.hidden = true; this.tutorEl.innerHTML = ""; }
      this.feedbackEl.className = "practice-feedback";
      this.feedbackEl.innerHTML = "";
      this.actionsEl.innerHTML = "";

      if (question.response_type) {
        this.renderRichAnswerFields(question);
      } else {
        const displayOptions = shuffle(question.options.map((text, originalIndex) => ({ text, originalIndex })));
        displayOptions.forEach(({ text, originalIndex }) => {
          const button = createButton(text, "practice-option");
          button.dataset.originalIndex = String(originalIndex);
          button.addEventListener("click", () => this.answer(originalIndex));
          this.optionsEl.appendChild(button);
        });
      }

      const tutorBtn = createButton("🤖 Chọn cách được giúp", "practice-btn-secondary");
      tutorBtn.setAttribute("aria-expanded", "false");
      tutorBtn.addEventListener("click", () => this.toggleTutorMenu(question, tutorBtn));
      this.actionsEl.appendChild(tutorBtn);

      if (Array.isArray(question.hints) && question.hints.length) {
        const hintBtn = createButton("💡 Xem gợi ý", "practice-btn-secondary");
        hintBtn.setAttribute("aria-expanded", "false");
        hintBtn.addEventListener("click", () => this.showNextHint(question, hintBtn));
        this.actionsEl.appendChild(hintBtn);
        this.hintButton = hintBtn;
      }

      typeset(this.cardEl);
    }


    toggleTutorMenu(question, button) {
      if (this.currentQuestion()?.id !== question?.id) return;
      const panel = this.tutorEl;
      const openedByThisButton = !panel.hidden && (!button || button.getAttribute("aria-expanded") === "true");
      if (openedByThisButton) {
        panel.hidden = true;
        panel.innerHTML = "";
        if (button) button.setAttribute("aria-expanded", "false");
        return;
      }
      if (button) button.setAttribute("aria-expanded", "true");
      this.openTutorMenu(question);
    }

    openTutorMenu(question) {
      if (this.currentQuestion()?.id !== question?.id) return;
      const panel = this.tutorEl;
      panel.hidden = false;
      panel.innerHTML = "";
      const title = document.createElement("strong");
      title.textContent = "📘 Em muốn được hỗ trợ thế nào?";
      const note = document.createElement("p");
      note.className = "practice-tutor-note";
      note.textContent = window.RoadmapGemini?.isConfigured() ? "Lời giải có sẵn và Gemini là hai nguồn khác nhau. Gemini chỉ gửi bài hiện tại sau khi em chủ động bấm hỏi." : "Bản offline dùng lời giải và gợi ý có trong ngân hàng; Gemini đang chờ hoàn thiện cấu hình.";
      const choices = document.createElement("div");
      choices.className = "practice-tutor-choices";
      const modes = [
        ["HINT", "💡 Gợi ý nhỏ", "Chỉ gợi hướng để em tự thử."],
        ["STEP_BY_STEP", "🪜 Hướng dẫn từng bước", "Xem lần lượt các gợi ý hiện có."],
        ["FULL_SOLUTION", "📖 Xem lời giải hiện có", "Có thể mở ngay, không phải dùng hết gợi ý."],
        ["TEACH_FROM_START", "🎓 Giảng lại từ đầu", "Trở về bài học và ví dụ mẫu." ]
      ];
      modes.forEach(([mode, label, description]) => {
        const button = createButton(label, "practice-btn-secondary practice-help-choice");
        button.setAttribute("aria-label", label + ". " + description);
        button.addEventListener("click", () => this.showHelpMode(question, mode));
        choices.appendChild(button);
      });
      const diagnosis = createButton("🧭 Gợi ý theo tiến độ · QA offline", "practice-btn-secondary");
      diagnosis.addEventListener("click", () => this.askTutor(question, diagnosis));
      panel.append(title, note, choices, diagnosis);
    }

    showHelpMode(question, mode) {
      if (this.currentQuestion()?.id !== question?.id) return;
      if (!window.RoadmapTutor?.helpModes?.includes(mode)) return;
      const panel = this.tutorEl;
      panel.hidden = false;
      panel.innerHTML = "";
      const title = document.createElement("strong");
      title.textContent = ({
        HINT: "💡 Gợi ý nhỏ",
        STEP_BY_STEP: "🪜 Hướng dẫn từng bước",
        FULL_SOLUTION: "📖 Lời giải từ ngân hàng",
        TEACH_FROM_START: "🎓 Học lại từ đầu"
      })[mode];
      panel.appendChild(title);
      const info = document.createElement("p");
      info.className = "practice-tutor-note";
      panel.appendChild(info);
      const addBack = () => {
        const back = createButton("← Chọn cách khác", "practice-btn-secondary");
        back.addEventListener("click", () => this.openTutorMenu(question));
        panel.appendChild(back);
      };
      const addGemini = () => {
        if (!window.RoadmapGemini?.isConfigured()) return;
        const labels = { HINT: "🤖 Gemini gợi ý", STEP_BY_STEP: "🤖 Gemini hướng dẫn từng bước", FULL_SOLUTION: "🤖 Gemini giải chi tiết", TEACH_FROM_START: "🤖 Gemini giảng lại từ đầu" };
        const ask = createButton(labels[mode], "practice-btn-primary practice-gemini-ask");
        ask.addEventListener("click", () => this.askGemini(question, ask, mode));
        panel.appendChild(ask);
      };
      if (mode === "HINT" || mode === "STEP_BY_STEP") {
        const count = (question.hints || []).length;
        info.textContent = count
          ? "Chỉ dùng các gợi ý do người biên soạn cung cấp; chưa tiết lộ đáp án."
          : "Câu này chưa có gợi ý từng bước trong ngân hàng. Em có thể xem bài giảng hoặc yêu cầu lời giải hiện có.";
        const next = createButton(mode === "HINT" ? "Xem gợi ý" : "Xem bước tiếp", "practice-btn-primary");
        const advance = () => {
          if (this.answered || !this.hintButton || this.hintLevel >= count) {
            next.disabled = true;
            next.textContent = this.answered ? "Đã nộp câu trả lời" : "Đã hết gợi ý";
            return;
          }
          this.showNextHint(question, this.hintButton);
          if (this.hintLevel >= count) {
            next.disabled = true;
            next.textContent = "Đã hết gợi ý";
          }
        };
        next.addEventListener("click", advance);
        if (!count || this.answered) next.disabled = true;
        panel.appendChild(next);
        addGemini();
        addBack();
        return;
      }
      if (mode === "TEACH_FROM_START") {
        info.textContent = "Hãy mở bài học, xem kiến thức cốt lõi, ví dụ mẫu và lỗi thường gặp. Nếu cần chính đáp án của câu này, chọn mục lời giải riêng.";
        const link = document.createElement("a");
        link.className = "practice-btn practice-btn-primary";
        link.href = "../#core-journey";
        link.textContent = "Mở bài giảng và các thẻ học (nếu có) ↗";
        panel.appendChild(link);
        addGemini();
        addBack();
        return;
      }
      if (!this.answered && !this.fullSolutionViewed) {
        info.textContent = "Nếu xem đáp án trước khi nộp, lần làm câu này sẽ được ghi là có trợ giúp, không tính là tự làm độc lập.";
        const confirm = createButton("Tôi muốn mở lời giải ngay", "practice-btn-primary");
        confirm.addEventListener("click", () => {
          this.fullSolutionViewed = true;
          this.hintLevel = Math.max(1, this.hintLevel);
          this.showHelpMode(question, "FULL_SOLUTION");
        });
        panel.appendChild(confirm);
        addBack();
        return;
      }
      info.textContent = this.answered
        ? "Lời giải được xem sau khi đã trả lời; không thay đổi kết quả đã lưu."
        : "Đã mở đáp án trước khi nộp: kết quả câu này sẽ được ghi nhận là có trợ giúp.";
      const answer = document.createElement("div");
      answer.className = "practice-help-answer";
      const answerLabel = document.createElement("strong");
      answerLabel.textContent = "Đáp án trong ngân hàng:";
      const answerText = document.createElement("p");
      answerText.textContent = question.response_type
        ? String(question.worked_answer || "Hãy xem lời giải của bài này.")
        : (Array.isArray(question.options) ? question.options[question.answer] || "Chưa có đáp án được biên soạn." : "Chưa có đáp án được biên soạn.");
      answer.append(answerLabel, answerText);
      panel.appendChild(answer);
      const steps = Array.isArray(question.solution_steps) ? question.solution_steps.filter(step => typeof step === "string" && step.trim()) : [];
      if (steps.length) {
        const list = document.createElement("ol");
        list.className = "practice-help-steps";
        steps.forEach(step => { const item = document.createElement("li"); item.textContent = step; list.appendChild(item); });
        panel.appendChild(list);
      } else {
        const brief = document.createElement("div");
        brief.className = "practice-help-answer";
        const label = document.createElement("strong");
        label.textContent = "Giải thích hiện có:";
        const body = document.createElement("p");
        body.textContent = String(question.explanation || "Chưa có phần giải thích được biên soạn.");
        const caveat = document.createElement("small");
        caveat.textContent = "Ngân hàng câu này chưa có lời giải từng bước được kiểm duyệt; phần trên là giải thích ngắn, không phải lời giải AI chi tiết.";
        brief.append(label, body, caveat);
        panel.appendChild(brief);
      }
      addGemini();
      addBack();
      typeset(panel);
    }

    async askGemini(question, button, mode, learnerRequest = "") {
      if (!window.RoadmapGemini?.isConfigured() || !window.RoadmapTutor || this.currentQuestion()?.id !== question?.id) return;
      const skills = questionSkills(question), skill = skills[0];
      if (!skill) return;
      // Count AI help only if an answer is actually delivered before submission.
      // A network/quota error must not turn an independent attempt into assisted evidence.
      if (this.geminiPending) return;
      this.geminiPending = true;
      button.disabled = true;
      const original = button.textContent;
      button.textContent = "Gemini đang giảng bài…";
      try {
        const context = window.RoadmapTutor.buildContext({
          projectContextVersion: "1.0.17",
          layer: question?.tags?.layer || "KNTT-Core",
          gradeOverlay: question?.tags?.grade || null,
          skill,
          question,
          learnerRequest,
          helpMode: mode,
          activity: "practice",
          submitted: this.answered,
          hintLevel: this.hintLevel,
          stats: this.stats,
          graph: this.knowledgeGraph,
          recovery: loadRecovery()
        });
        const response = await window.RoadmapTutor.run({ provider: "gemini", context });
        if (this.currentQuestion()?.id !== question?.id) return;
        if (!this.answered) {
          this.hintLevel = Math.max(1, this.hintLevel);
          if (mode === "FULL_SOLUTION") this.fullSolutionViewed = true;
        }
        this.renderGeminiResponse(response, question, mode);
      } catch (error) {
        if (this.currentQuestion()?.id !== question?.id) return;
        const note = document.createElement("p");
        note.className = "practice-tutor-note";
        note.textContent = "Chưa kết nối được Gemini (" + (error?.message || "lỗi kết nối") + "). Em vẫn có thể xem lời giải có sẵn hoặc học tiếp.";
        this.tutorEl.appendChild(note);
        this.tutorEl.hidden = false;
      } finally {
        this.geminiPending = false;
        button.disabled = false;
        button.textContent = original;
      }
    }

    renderGeminiResponse(response, question, mode) {
      const panel = this.tutorEl;
      panel.innerHTML = "";
      const title = document.createElement("strong");
      title.textContent = "🤖 Gemini · " + (window.RoadmapGemini?.model() || "AI Tutor");
      const message = document.createElement("div");
      message.className = "practice-gemini-message";
      if (window.RoadmapRichMath?.render) window.RoadmapRichMath.render(response.message, message);
      else message.textContent = response.message;
      const caution = document.createElement("p");
      caution.className = "practice-tutor-note";
      caution.textContent = "Nội dung do AI tạo có thể sai. Hãy so sánh với bài giảng/lời giải đã biên soạn; nếu chưa hiểu, hỏi tiếp bước cụ thể.";
      const followup = document.createElement("textarea");
      followup.className = "practice-gemini-followup";
      followup.rows = 2;
      followup.maxLength = 300;
      followup.placeholder = "Em chưa hiểu bước nào? (không nhập thông tin cá nhân)";
      followup.setAttribute("aria-label", "Câu hỏi tiếp theo cho Gemini");
      const ask = createButton("Hỏi tiếp", "practice-btn-secondary");
      ask.addEventListener("click", () => {
        const questionText = followup.value.trim();
        if (questionText) this.askGemini(question, ask, mode, questionText);
      });
      const back = createButton("← Các mức trợ giúp", "practice-btn-secondary");
      back.addEventListener("click", () => this.openTutorMenu(question));
      panel.append(title, message, caution, followup, ask, back);
      panel.hidden = false;
      typeset(panel);
    }

    async askTutor(question, button) {
      if (!window.RoadmapTutor) return;
      const skills = questionSkills(question);
      const skill = skills[0];
      if (!skill) return;
      button.disabled = true;
      const oldLabel = button.textContent;
      button.textContent = "Gia sư đang xem dữ liệu…";
      try {
        const context = window.RoadmapTutor.buildContext({
          projectContextVersion: "1.0.17",
          layer: question?.tags?.layer || "KNTT-Core",
          gradeOverlay: question?.tags?.grade || null,
          skill,
          question,
          hintLevel: this.hintLevel,
          stats: this.stats,
          graph: this.knowledgeGraph,
          recovery: loadRecovery()
        });
        const response = await window.RoadmapTutor.run({ provider: "mock", context });
        this.renderTutorResponse(response, question);
      } catch (_) {
        this.tutorEl.innerHTML = "<strong>🤖 Gia sư</strong><div>Chưa thể mở trợ giúp lúc này. Bạn vẫn có thể dùng gợi ý của câu hỏi hoặc tiếp tục làm bài.</div>";
        this.tutorEl.hidden = false;
      } finally {
        button.disabled = false;
        button.textContent = oldLabel;
      }
    }

    renderTutorResponse(response, question) {
      this.tutorEl.innerHTML = "";
      const title = document.createElement("strong");
      title.textContent = "🤖 Gia sư · bản QA local";
      const message = document.createElement("div");
      message.textContent = response.message;
      this.tutorEl.append(title, message);

      const actions = document.createElement("div");
      actions.className = "practice-tutor-actions";
      if (response.action_type === "HINT" && Array.isArray(question.hints) && question.hints.length && this.hintLevel < question.hints.length) {
        const hintBtn = createButton("Cho tôi một gợi ý nhỏ", "practice-btn-secondary");
        hintBtn.addEventListener("click", () => {
          const existing = [...this.actionsEl.querySelectorAll("button")].find((item) => item.textContent.includes("gợi ý"));
          if (existing) existing.click();
        });
        actions.appendChild(hintBtn);
      }
      if (response.action_type === "REMEDIATE" && response.target_skill) {
        const node = this.knowledgeGraph?.nodes?.[response.target_skill];
        const remediateBtn = createButton(`Ôn ngay: ${this.prettyTag(response.target_skill)}`, "practice-btn-secondary");
        remediateBtn.addEventListener("click", () => this.startRemediation(response.target_skill, node?.topic));
        actions.appendChild(remediateBtn);
      }
      const continueBtn = createButton("Tiếp tục câu này", "practice-btn-secondary");
      continueBtn.addEventListener("click", () => { this.tutorEl.hidden = true; });
      actions.appendChild(continueBtn);
      this.tutorEl.appendChild(actions);

      const note = document.createElement("div");
      note.className = "practice-tutor-note";
      note.textContent = response.confidence === "evidenced"
        ? "Gợi ý này dựa trên learner evidence đã có; không phải điều kiện bắt buộc."
        : "Chưa đủ evidence để xác định một điểm nghẽn nền tảng cụ thể.";
      this.tutorEl.appendChild(note);
      this.tutorEl.hidden = false;
    }

    showNextHint(question, button) {
      if (this.answered || !Array.isArray(question.hints) || !question.hints.length) return;

      if (this.hintLevel >= question.hints.length) {
        this.hintsCollapsed = !this.hintsCollapsed;
        this.hintsEl.hidden = this.hintsCollapsed;
        button.setAttribute("aria-expanded", String(!this.hintsCollapsed));
        button.textContent = this.hintsCollapsed
          ? `💡 Xem lại gợi ý (${this.hintLevel}/${question.hints.length})`
          : "▴ Thu gọn gợi ý";
        if (!this.hintsCollapsed) typeset(this.hintsEl);
        return;
      }

      this.hintLevel += 1;
      this.hintsCollapsed = false;
      this.hintsEl.hidden = false;
      button.setAttribute("aria-expanded", "true");

      const hint = document.createElement("div");
      hint.className = "practice-hint";
      const label = document.createElement("strong");
      label.textContent = `Gợi ý ${this.hintLevel}`;
      const body = document.createElement("div");
      body.textContent = question.hints[this.hintLevel - 1];
      hint.append(label, body);
      this.hintsEl.appendChild(hint);

      if (this.hintLevel >= question.hints.length) {
        button.textContent = "▴ Thu gọn gợi ý";
      } else {
        button.textContent = `💡 Gợi ý tiếp (${this.hintLevel + 1}/${question.hints.length})`;
      }
      typeset(this.hintsEl);
    }

    renderRichAnswerFields(question) {
      const grader = window.RoadmapRichPracticeAnswerV1;
      const fields = question.response_type === "numeric_fields"
        ? question.answer_contract.fields
        : [{ label: question.answer_contract?.field_label || (question.response_type === "rational" ? "Giá trị của x" : "Kết quả") }];
      const form = document.createElement("form");
      form.className = "practice-rich-answer-form";
      form.dataset.richPracticeQuestion = question.id;
      const buildInput = (field, i) => {
        const input = document.createElement("input");
        input.type = "text";
        input.className = "practice-rich-input";
        input.inputMode = "decimal";
        input.autocomplete = "off";
        input.spellcheck = false;
        input.maxLength = 80;
        input.name = `rich-field-${i + 1}`;
        input.setAttribute("aria-label", field.label);
        return input;
      };
      const tableView = question.response_type === "numeric_fields"
        ? question.answer_contract?.table_view : null;
      let inputs;
      if (tableView?.kind === "frequency") {
        form.classList.add("practice-rich-frequency-form");
        const table = document.createElement("table");
        table.className = "practice-rich-frequency-table";
        const caption = document.createElement("caption");
        caption.textContent = "Bảng tần số – điền vào cột Tần số";
        table.appendChild(caption);
        const header = document.createElement("thead");
        const headerRow = document.createElement("tr");
        [tableView.value_header, tableView.frequency_header].forEach(text => {
          const cell = document.createElement("th");
          cell.scope = "col";
          cell.textContent = text;
          headerRow.appendChild(cell);
        });
        header.appendChild(headerRow);
        table.appendChild(header);
        const body = document.createElement("tbody");
        inputs = fields.map((field, i) => {
          const row = document.createElement("tr");
          const value = document.createElement("th");
          value.scope = "row";
          value.textContent = tableView.row_values[i];
          const answer = document.createElement("td");
          const input = buildInput(field, i);
          answer.appendChild(input);
          row.append(value, answer);
          body.appendChild(row);
          return input;
        });
        table.appendChild(body);
        form.appendChild(table);
      } else {
        inputs = fields.map((field, i) => {
          const label = document.createElement("label");
          label.className = "practice-rich-field";
          const title = document.createElement("span");
          title.textContent = field.label;
          const input = buildInput(field, i);
          label.append(title, input);
          form.appendChild(label);
          return input;
        });
      }
      const message = document.createElement("p");
      message.className = "practice-rich-input-message";
      message.setAttribute("role", "alert");
      message.hidden = true;
      const submit = createButton("Chấm bài", "practice-btn-primary");
      submit.type = "submit";
      form.append(message, submit);
      form.addEventListener("submit", (event) => {
        event.preventDefault();
        if (this.answered || this.currentQuestion()?.id !== question.id) return;
        const raw = inputs.map(input => input.value);
        const result = grader?.grade(question, raw) || { status: "INVALID_CONTRACT" };
        if (result.status === "INCOMPLETE" || result.status === "INVALID_INPUT" || result.status === "INVALID_CONTRACT") {
          message.hidden = false;
          message.textContent = result.status === "INCOMPLETE"
            ? "Em hãy nhập đầy đủ các ô trước khi chấm. Lượt này chưa được tính."
            : "Định dạng chưa hợp lệ. Hãy nhập số, phân số hoặc số thập phân (không nhập chữ); lượt này chưa được tính.";
          return;
        }
        message.hidden = true;
        this.answerRich(question, raw, result, inputs);
      });
      this.optionsEl.appendChild(form);
    }

    answerRich(question, raw, result, inputs) {
      if (this.answered || this.currentQuestion()?.id !== question.id) return;
      this.answered = true;
      const correct = result.status === "CORRECT";
      if (correct) this.score += 1;
      const persistence = this.record(question, correct, this.hintLevel, null, this.fullSolutionViewed);
      inputs.forEach(input => { input.disabled = true; });
      const formSubmit = this.optionsEl.querySelector("button[type=submit]");
      if (formSubmit) formSubmit.disabled = true;
      let richSaved = { ok: true };
      if (persistence.ok) {
        richSaved = window.RoadmapRichPracticeAnswerV1?.saveAttempt({
          item_id: question.id, item_version: "1.0.0", source_item_id: question.source_item_id,
          response_type: question.response_type, raw, normalized: result.normalized,
          correct, hints_used: this.hintLevel, full_solution_viewed: this.fullSolutionViewed,
          submitted_at: new Date().toISOString(), lane: "formative_practice"
        }) || { ok: false };
      }
      this.feedbackEl.hidden = false;
      this.feedbackEl.className = "practice-feedback " + (correct ? "is-correct" : "is-wrong");
      const heading = document.createElement("strong");
      heading.textContent = correct ? "✓ Chính xác" : "✗ Chưa đúng";
      const explain = document.createElement("div");
      explain.className = "practice-explanation";
      explain.textContent = String(question.explanation || "");
      this.feedbackEl.append(heading, explain);
      if (!persistence.ok || !richSaved.ok) {
        const warning = document.createElement("p");
        warning.className = "practice-save-warning";
        warning.setAttribute("role", "alert");
        warning.textContent = "Có dữ liệu tiến độ hoặc bài làm chưa lưu được đầy đủ trên thiết bị; hệ thống không ghi đè dữ liệu cũ bị lỗi.";
        this.feedbackEl.appendChild(warning);
      }
      if (this.fullSolutionViewed) {
        const info = document.createElement("p");
        info.className = "practice-help-assisted";
        info.textContent = "Đã xem lời giải trước khi trả lời · lượt này có trợ giúp, không phải Tự kiểm tra độc lập.";
        this.feedbackEl.appendChild(info);
      }
      this.actionsEl.innerHTML = "";
      const help = createButton("📘 Xem hướng dẫn / lời giải", "practice-btn-secondary");
      help.addEventListener("click", () => this.toggleTutorMenu(question, help));
      this.actionsEl.appendChild(help);
      const next = createButton(this.index === this.session.length - 1 ? "Xem kết quả" : "Câu tiếp theo", "practice-btn-primary");
      next.addEventListener("click", () => { this.index += 1; this.renderQuestion(); });
      this.actionsEl.appendChild(next);
      this.progressEl.textContent = `Câu ${this.index + 1}/${this.session.length} · Đúng ${this.score}`;
      this.renderStats(questionSkills(question));
      this.renderRemediation(questionSkills(question));
      typeset(this.cardEl);
    }

    // Phase 4 R15: optional journal-first QA gate for ONE real MCQ answer.
    // The gate is not loaded anywhere in the deployed learner app. Without it,
    // the established v1 path below runs byte-for-byte as before.
    async answerJournalFirst(selectedIndex) {
      const gate = window.MathV2PracticeCommitGateR15;
      if (!gate?.enabled || this.answered || this.__r15Busy) return;
      const question = this.currentQuestion();
      if (!question || question.response_type) return;
      const sessionIndex = this.index;
      const pending = this.__r15Pending;
      if (pending && (pending.question_id !== question.id || pending.selected_index !== selectedIndex)) {
        return; // A failed save may be retried, never silently changed to a new answer.
      }
      if (!pending) {
        this.__r15Pending = {
          question_id: question.id,
          selected_index: selectedIndex,
          submission_key: "QA_R15_" + crypto.randomUUID().replace(/-/g, "")
        };
      }
      this.__r15Busy = true;
      const buttons = [...this.optionsEl.querySelectorAll(".practice-option")];
      buttons.forEach(button => { button.disabled = true; });
      this.actionsEl.innerHTML = "";
      this.feedbackEl.hidden = false;
      this.feedbackEl.textContent = "Đang lưu lượt thử nghiệm v2 trước khi xác nhận bài…";
      let saved = false;
      let reason = "UNKNOWN_SAVE_ERROR";
      try {
        const result = await gate.accept({
          submission_key: this.__r15Pending.submission_key,
          question_id: question.id,
          correct: selectedIndex === question.answer
        });
        saved = result?.saved === true;
        reason = result?.reason || result?.state || reason;
      } catch (error) {
        reason = String(error?.message || error);
      }
      this.__r15Busy = false;
      if (this.answered || this.index !== sessionIndex || this.currentQuestion()?.id !== question.id) {
        // The journal is authoritative if committed; never credit another
        // on-screen question after the learner navigates elsewhere.
        return;
      }
      if (saved) {
        this.__r15Pending = null;
        this.feedbackEl.hidden = true;
        this.feedbackEl.textContent = "";
        // Only now run existing Practice grading, feedback and legacy save.
        // If the *later* legacy save fails, the original warning still appears.
        this.answer(selectedIndex, true);
        return;
      }
      // Persisted score/session counters and answered flag are untouched.
      // The same submission_key is reused if the parent retries this attempt.
      this.feedbackEl.textContent = "";
      const warning = document.createElement("p");
      warning.className = "practice-save-warning";
      warning.setAttribute("role", "alert");
      warning.textContent = "Chưa lưu được lượt thử nghiệm v2 (" + reason +
        "). Câu này chưa được ghi điểm. Hãy thử lưu lại; hệ thống dùng cùng mã lượt.";
      this.feedbackEl.appendChild(warning);
      const retry = createButton("Thử lưu lại lượt này", "practice-btn-primary");
      retry.addEventListener("click", () => this.answerJournalFirst(selectedIndex));
      this.actionsEl.appendChild(retry);
    }

    answer(selectedIndex, r15JournalApproved = false) {
      if (!r15JournalApproved && window.MathV2PracticeCommitGateR15?.enabled === true) {
        void this.answerJournalFirst(selectedIndex);
        return;
      }
      if (this.answered) return;
      this.answered = true;
      const question = this.currentQuestion();
      const correct = selectedIndex === question.answer;
      if (correct) this.score += 1;
      const persistence = this.record(question, correct, this.hintLevel, selectedIndex, this.fullSolutionViewed);

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
      if (!persistence.ok) {
        const warning = document.createElement("p");
        warning.className = "practice-save-warning";
        warning.setAttribute("role", "alert");
        warning.textContent = persistence.reason === "CORRUPT_PREVIOUS_DATA"
          ? "Dữ liệu cũ trên trình duyệt không đọc được. Hệ thống không ghi đè. Kết quả câu này chưa được lưu; hãy nhờ người lớn kiểm tra."
          : "Không lưu được kết quả câu này trên thiết bị. Em vẫn có thể xem lời giải và học tiếp, nhưng lượt này chưa được ghi vào tiến độ.";
        this.feedbackEl.appendChild(warning);
      }
      if (this.fullSolutionViewed) {
        const assisted = document.createElement("div");
        assisted.className = "practice-help-assisted";
        assisted.textContent = "Đã xem lời giải trước khi trả lời · ghi nhận là có trợ giúp, không tính tự làm độc lập.";
        this.feedbackEl.appendChild(assisted);
      }
      this.actionsEl.innerHTML = "";
      const reviewBtn = createButton("📘 Xem hướng dẫn / lời giải", "practice-btn-secondary");
      reviewBtn.setAttribute("aria-expanded", "false");
      reviewBtn.addEventListener("click", () => this.toggleTutorMenu(question, reviewBtn));
      this.actionsEl.appendChild(reviewBtn);

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
      this.renderRemediation(questionSkills(question));
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

    record(question, correct, hintsUsed = 0, selectedIndex = null, fullSolutionViewed = false) {
      let persistence = { ok: true, reason: null };
      if (window.RoadmapLearnerEvidence?.recordAnswer) {
        const result = window.RoadmapLearnerEvidence.recordAnswer({
          question,
          correct,
          hintsUsed,
          fullSolutionViewed,
          selectedIndex,
          stats: this.stats
        });
        this.stats = result.stats;
        persistence = { ok: result.saved !== false, reason: result.save_error || null };
      } else {
        const questionRecord = this.stats.questions[question.id] || { attempted: 0, correct: 0 };
        questionRecord.attempted += 1;
        if (fullSolutionViewed) questionRecord.full_solution_views = (questionRecord.full_solution_views || 0) + 1;
        if (correct) questionRecord.correct += 1;
        if (hintsUsed > 0 || fullSolutionViewed) {
          questionRecord.hinted_attempts = (questionRecord.hinted_attempts || 0) + 1;
          questionRecord.hints_used = (questionRecord.hints_used || 0) + Math.max(hintsUsed, Number(fullSolutionViewed));
        }
        if (correct) {
          if (fullSolutionViewed) questionRecord.correct_after_full_solution = (questionRecord.correct_after_full_solution || 0) + 1;
          if (hintsUsed > 0 || fullSolutionViewed) questionRecord.correct_with_hint = (questionRecord.correct_with_hint || 0) + 1;
          else questionRecord.correct_without_hint = (questionRecord.correct_without_hint || 0) + 1;
        }
        this.stats.questions[question.id] = questionRecord;

        questionSkills(question).forEach((skill) => {
          const record = this.stats.tags[skill] || { attempted: 0, correct: 0 };
          record.attempted += 1;
          if (fullSolutionViewed) record.full_solution_views = (record.full_solution_views || 0) + 1;
          if (correct) record.correct += 1;
          if (hintsUsed > 0 || fullSolutionViewed) {
            record.hinted_attempts = (record.hinted_attempts || 0) + 1;
            record.hints_used = (record.hints_used || 0) + Math.max(hintsUsed, Number(fullSolutionViewed));
          }
          if (correct) {
            if (fullSolutionViewed) record.correct_after_full_solution = (record.correct_after_full_solution || 0) + 1;
            if (hintsUsed > 0 || fullSolutionViewed) record.correct_with_hint = (record.correct_with_hint || 0) + 1;
            else record.correct_without_hint = (record.correct_without_hint || 0) + 1;
          }
          this.stats.tags[skill] = record;
        });
        persistence = saveStats(this.stats);
      }

      // ONE active Practice counter: RoadmapLearnerEvidence is the only
      // learner-facing formative writer. Historical G2/Taxonomy observers
      // remain available for isolated QA but must not duplicate live attempts.
      // Missing/unreviewed Family is never a reason to block ordinary Practice.

      // Phase 4 R5: observer-only hook after the original Practice write succeeded.
      // No R5 bridge is loaded on learner pages. Errors must never regrade,
      // block feedback, or create canonical Readiness evidence.
      if (persistence.ok) try {
        const observer = window.MathV2CanaryBridgeR5?.capturePractice;
        if (typeof observer === "function") {
          Promise.resolve(observer({question_id: question.id, correct: Boolean(correct),
            hints_used: hintsUsed, full_solution_viewed: Boolean(fullSolutionViewed)})).catch(() => {});
        }
      } catch (_) { /* QA-only bridge must never interrupt Practice */ }

      questionSkills(question).forEach((skill) => this.closePendingRecoveryOnTarget(skill));
      return persistence;
    }

    renderRemediation(updatedSkills = []) {
      if (!this.remediationEl || !this.knowledgeGraph) return;
      const candidateTargets = [...new Set([
        ...updatedSkills,
        ...rankWeakSkills(this.stats, Object.keys(this.knowledgeGraph.nodes || {}), Object.keys(this.knowledgeGraph.nodes || {}))
      ])];

      let diagnosis = null;
      for (const skill of candidateTargets) {
        diagnosis = diagnoseRemediation(this.knowledgeGraph, this.stats, skill);
        if (diagnosis?.kind === "evidenced") break;
        if (!diagnosis) continue;
      }

      if (!diagnosis || diagnosis.kind !== "evidenced") {
        this.remediationEl.hidden = true;
        this.remediationEl.innerHTML = "";
        return;
      }

      this.lastDiagnosisTarget = diagnosis.target.skill;
      const targetLabel = this.prettyTag(diagnosis.target.skill);
      const weakLabels = diagnosis.candidates.map((item) =>
        `${this.prettyTag(item.skill)} (${Math.round(item.accuracy * 100)}%, ${item.attempted} lượt)`
      );
      this.remediationEl.innerHTML = `
        <strong>🧭 Gợi ý ôn nền tảng</strong>
        <div>Bạn đang gặp khó khăn ở <strong>${targetLabel}</strong>. Dữ liệu hiện tại cho thấy nên ưu tiên ôn: <strong>${weakLabels.join(" → ")}</strong>.</div>
        <div class="practice-remediation-actions"></div>
        <div class="practice-remediation-note">Đây là gợi ý dựa trên lịch sử làm bài, không phải điều kiện bắt buộc. Bạn vẫn có thể tiếp tục học bình thường.</div>
      `;
      const actions = this.remediationEl.querySelector(".practice-remediation-actions");
      diagnosis.candidates.forEach((item) => {
        const node = this.knowledgeGraph.nodes?.[item.skill];
        const button = createButton(`Ôn ngay: ${this.prettyTag(item.skill)}`, "practice-btn-secondary");
        button.addEventListener("click", () => this.startRemediation(item.skill, node?.topic));
        actions.appendChild(button);
      });
      this.remediationEl.hidden = false;
    }

    startRemediation(skill, topic) {
      if (!skill || !topic) return;
      const recovery = loadRecovery();
      recovery.events.push({
        id: `rem-${Date.now()}-${skill}`,
        remediation_skill: skill,
        source_skill: this.lastDiagnosisTarget || null,
        source_before: this.lastDiagnosisTarget ? snapshotSkill(this.stats, this.lastDiagnosisTarget) : null,
        topic,
        started_at: new Date().toISOString(),
        before: snapshotSkill(this.stats, skill),
        status: "started"
      });
      recovery.events = recovery.events.slice(-100);
      saveRecovery(recovery);
      if (this.bankSkills.includes(skill)) {
        const subset = this.questions.filter((question) => questionSkills(question).includes(skill));
        const pool = weightedQuestionPool(subset, this.stats);
        const session = buildDiverseSession(pool, Math.min(REMEDIATION_SESSION_SIZE, pool.length));
        if (session.length) {
          this.setSession(session, "remediation", [skill], `Ôn nền tảng: ${this.prettyTag(skill)} · ${session.length} câu.`);
          this.root.scrollIntoView({ behavior: "smooth", block: "start" });
          return;
        }
      }

      const siteRoot = siteRootFromPath();
      const destination = `${siteRoot}/kien-thuc/${topic}/bai-tap/?focus=${encodeURIComponent(skill)}&mode=remediation`;
      window.location.assign(destination);
    }

    applyRequestedFocus() {
      const params = new URLSearchParams(window.location.search);
      if (params.get("mode") !== "remediation") return false;
      const skill = params.get("focus");
      if (!skill || !this.bankSkills.includes(skill)) return false;
      const subset = this.questions.filter((question) => questionSkills(question).includes(skill));
      if (!subset.length) return false;
      const pool = weightedQuestionPool(subset, this.stats);
      const session = buildDiverseSession(pool, Math.min(REMEDIATION_SESSION_SIZE, pool.length));
      this.setSession(session, "remediation", [skill], `Ôn nền tảng: ${this.prettyTag(skill)} · ${session.length} câu.`);
      return true;
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
          const independent = Number.isFinite(record.correct_without_hint)
            ? Number(record.correct_without_hint)
            : Number.isFinite(record.correct_with_hint)
              ? Math.max(0, Number(record.correct || 0) - Number(record.correct_with_hint))
              : null;
          const status = record.attempted
            ? `${record.correct}/${record.attempted} · ${percent}% đúng · tự làm: ${independent === null ? "chưa phân loại" : independent}`
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

    closePendingRecoveryOnTarget(skill) {
      if (!skill) return;
      const recovery = loadRecovery();
      const event = [...recovery.events].reverse().find((item) => item.source_skill === skill && item.status === "completed" && !item.target_recheck);
      if (!event) return;
      const current = snapshotSkill(this.stats, skill);
      if (!event.source_before || current.attempted <= event.source_before.attempted) return;
      event.target_recheck = { at: new Date().toISOString(), evidence: current };
      event.target_accuracy_change = event.source_before.accuracy === null || current.accuracy === null ? null : current.accuracy - event.source_before.accuracy;
      saveRecovery(recovery);
    }

    recordRecoveryResult() {
      if (this.mode !== "remediation" || !this.focusSkills[0]) return null;
      const skill = this.focusSkills[0];
      const recovery = loadRecovery();
      const event = [...recovery.events].reverse().find((item) => item.remediation_skill === skill && item.status === "started");
      if (!event) return null;
      const after = snapshotSkill(this.stats, skill);
      event.after = after;
      event.completed_at = new Date().toISOString();
      event.status = "completed";
      event.session_score = { correct: this.score, attempted: this.session.length };
      event.accuracy_change = event.before.accuracy === null || after.accuracy === null ? null : after.accuracy - event.before.accuracy;
      saveRecovery(recovery);
      return event;
    }

    renderSummary() {
      // Cache a recently COMPLETED set only. Incomplete sessions must remain
      // deterministic across reload so pending atomic answers can be replayed.
      if (this.session.length && ["normal", "new", "weak", "skill"].includes(this.mode)) {
        this.recentSets = [...this.recentSets, this.session.map(q => q.id)].slice(-2);
        saveRecentSets(this.bank, this.recentSets);
      }
      const recoveryEvent = this.recordRecoveryResult();
      const percent = Math.round((this.score / this.session.length) * 100);
      this.progressEl.textContent = `Hoàn thành · ${this.score}/${this.session.length} câu đúng`;
      if (this.mode === "remediation") this.metaEl.textContent = `Kết quả ôn nền tảng · ${this.prettyTag(this.focusSkills[0])}`;
      else if (this.mode === "weak") this.metaEl.textContent = "Kết quả lượt luyện điểm yếu";
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

      const restartBtn = createButton("Luyện tiếp · ưu tiên điểm yếu", "practice-btn-primary");
      restartBtn.addEventListener("click", () => this.startNormalSession());
      const newBtn = createButton("Bộ 10 câu mới", "practice-btn-secondary");
      newBtn.addEventListener("click", () => this.startNewOnlySession());
      const weakBtn = createButton("Luyện điểm yếu", "practice-btn-secondary");
      weakBtn.addEventListener("click", () => this.startWeakSession());
      this.actionsEl.append(restartBtn, newBtn, weakBtn);
      this.renderStats();
      this.renderRemediation(this.focusSkills);
    }

    difficultyLabel(level) {
      return ({ basic: "Cơ bản", intermediate: "Thông hiểu", advanced: "Vận dụng", application: "Vận dụng" })[level] || level || "Luyện tập";
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
        root.dataset.practiceQuestionCount = String(bank.questions.length);
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