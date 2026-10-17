(() => {
  "use strict";

  const STORE_KEY = "toan-thcs-taxonomy-v2-evidence-v1";
  const LEGACY_KEY = "toan-thcs-practice-v1";
  const BUILD = "skill-map-v2-preview-i4-r1-20261003";
  const CONTROLLED_BUILD = "skill-map-v2-i6b-learner-r1-20261003";
  const LAYER_ORDER = ["KNTT-Core", "Core-Support", "Entrance10", "THPT-Bridge", "Specialized-Challenge"];
  const OPTIONAL_LAYERS = new Set(["Entrance10", "THPT-Bridge", "Specialized-Challenge"]);
  const NO_DIRECT_EVIDENCE_FAMILIES = new Set(["RATIO-MODEL", "ID-APPLY", "ID-PROOF", "RATEX-INTEGER"]);
  const LAYER_LABELS = Object.freeze({
    "KNTT-Core": "KNTT Core",
    "Core-Support": "Core Support",
    "Entrance10": "Ôn thi vào 10",
    "THPT-Bridge": "Cầu nối THPT",
    "Specialized-Challenge": "Chuyên / Challenge"
  });
  const LEARNER_LAYER_LABELS = Object.freeze({
    "KNTT-Core": "Kiến thức cốt lõi",
    "Core-Support": "Kiến thức hỗ trợ",
    "Entrance10": "Ôn thi vào 10",
    "THPT-Bridge": "Cầu nối THPT",
    "Specialized-Challenge": "Chuyên / Thử thách"
  });
  const TOPIC_LABELS = Object.freeze({
    CT02: "02 · Số và phép tính",
    CT03: "03 · Tỉ lệ – Tỉ lệ thức",
    CT04: "04 · Biểu thức đại số",
    CT05: "05 · 7 Hằng đẳng thức",
    CT06: "06 · Phân tích đa thức",
    CT07: "07 · Phân thức đại số",
    CT08: "08 · Phương trình – Bất phương trình",
    CT09: "09 · Hệ phương trình",
    CT10: "10 · Hàm số và đồ thị",
    CT11: "11 · Căn thức",
    CT12: "12 · Phương trình bậc hai & Viète",
    CT13: "13 · Góc và đường thẳng",
    CT14: "14 · Tam giác",
    CT15: "15 · Các đường đồng quy",
    CT16: "16 · Tứ giác",
    CT17: "17 · Thales và đồng dạng",
    CT18: "18 · Hệ thức lượng",
    CT19: "19 · Đường tròn",
    CT20: "20 · Hình học tổng hợp",
    CT21: "21 · Thống kê",
    CT22: "22 · Đại lượng đặc trưng",
    CT23: "23 · Xác suất",
    CT24: "24 · Bài toán thực tế",
    CT25: "25 · Tổng hợp & ôn thi vào 10"
  });

  const text = (value) => String(value ?? "");
  const safeNumber = (value) => Number.isFinite(Number(value)) ? Number(value) : 0;
  const topicIdFromSlug = (slug) => {
    const match = String(slug || "").match(/^(\d{2})-/);
    return match ? "CT" + match[1] : null;
  };
  const normalizedStore = (raw) => ({
    schema: raw?.schema || null,
    recent_events: Array.isArray(raw?.recent_events) ? raw.recent_events.filter(Boolean) : [],
    seen_questions: raw?.seen_questions && typeof raw.seen_questions === "object" ? raw.seen_questions : {},
    independent_units: raw?.independent_units && typeof raw.independent_units === "object" ? raw.independent_units : {}
  });
  const normalizedLegacy = (raw) => ({
    questions: raw?.questions && typeof raw.questions === "object" ? raw.questions : {},
    tags: raw?.tags && typeof raw.tags === "object" ? raw.tags : {},
    observed_signals: Array.isArray(raw?.observed_signals) ? raw.observed_signals : []
  });
  const parseStored = (storage, key, fallback) => {
    try {
      const value = storage?.getItem?.(key);
      return value ? JSON.parse(value) : fallback;
    } catch (_) {
      return fallback;
    }
  };

  const topicMetaFromSpine = (spine) => {
    const result = {};
    const strands = spine?.strands && typeof spine.strands === "object" ? spine.strands : {};
    for (const [strandId, strand] of Object.entries(strands)) {
      const sequence = Array.isArray(strand?.sequence) ? strand.sequence : [];
      for (const slug of sequence) {
        const topicId = topicIdFromSlug(slug);
        if (!topicId) continue;
        result[topicId] = {
          topic_id: topicId,
          slug,
          label: TOPIC_LABELS[topicId] || topicId,
          strand_id: strandId,
          strand_label: strand?.label || strandId
        };
      }
    }
    if (!result.CT25) {
      result.CT25 = {
        topic_id: "CT25",
        slug: "25-tong-hop-on-thi-10",
        label: TOPIC_LABELS.CT25,
        strand_id: "exam_integration",
        strand_label: "Tổng hợp – Ôn thi"
      };
    }
    return result;
  };

  const summarizeEvidence = (registry, storeLike) => {
    const store = normalizedStore(storeLike);
    const families = Array.isArray(registry?.families) ? registry.families : [];
    const summaries = new Map(families.map((family) => [family.family_id, {
      family_id: family.family_id,
      independent_units: 0,
      independent_correct: 0,
      evidence_accuracy: null,
      recent_events: 0,
      assisted_recent_events: 0,
      latest_at: null,
      observed_topics: new Set()
    }]));

    for (const unit of Object.values(store.independent_units)) {
      const row = summaries.get(unit?.family_id);
      if (!row) continue;
      row.independent_units += 1;
      if (unit.correct === true) row.independent_correct += 1;
      if (unit.topic_id) row.observed_topics.add(unit.topic_id);
    }

    for (const event of store.recent_events) {
      const row = summaries.get(event?.family_id);
      if (!row) continue;
      row.recent_events += 1;
      if (event.assisted === true) row.assisted_recent_events += 1;
      if (event.topic_id) row.observed_topics.add(event.topic_id);
      if (event.attempted_at && (!row.latest_at || event.attempted_at > row.latest_at)) {
        row.latest_at = event.attempted_at;
      }
    }

    for (const row of summaries.values()) {
      row.evidence_accuracy = row.independent_units > 0
        ? row.independent_correct / row.independent_units
        : null;
      row.observed_topics = [...row.observed_topics].sort();
    }

    return {
      summaries,
      totals: {
        recent_events: store.recent_events.length,
        seen_questions: Object.keys(store.seen_questions).length,
        independent_units: Object.keys(store.independent_units).length,
        independent_correct: Object.values(store.independent_units).filter((unit) => unit?.correct === true).length,
        assisted_recent_events: store.recent_events.filter((event) => event?.assisted === true).length,
        evidence_families: [...summaries.values()].filter((row) => row.independent_units > 0).length,
        no_evidence_families: [...summaries.values()].filter((row) => row.independent_units === 0).length
      }
    };
  };

  const evidenceDisplay = (summaryLike) => {
    const independentUnits = safeNumber(summaryLike?.independent_units);
    const independentCorrect = safeNumber(summaryLike?.independent_correct);
    const evidenceAccuracy = independentUnits > 0 ? independentCorrect / independentUnits : null;
    if (independentUnits <= 0) {
      return Object.freeze({
        state: "NO_EVIDENCE",
        label: "Chưa có bằng chứng",
        show_percent: false,
        evidence_accuracy: null
      });
    }
    if (independentUnits <= 2) {
      return Object.freeze({
        state: "SPARSE_DATA",
        label: "Dữ liệu còn ít",
        show_percent: false,
        evidence_accuracy: evidenceAccuracy
      });
    }
    return Object.freeze({
      state: "PRACTICE_TREND_REVIEWABLE",
      label: "Đã có dữ liệu để xem xu hướng",
      show_percent: true,
      evidence_accuracy: evidenceAccuracy
    });
  };

  const filterFamilies = (families, filters = {}) => {
    const layer = filters.layer || "ALL";
    const topic = filters.topic || "ALL";
    const evidenceOnly = filters.evidenceOnly === true;
    const evidence = filters.evidence instanceof Map ? filters.evidence : new Map();
    return (Array.isArray(families) ? families : []).filter((family) => {
      if (layer !== "ALL" && family.layer !== layer) return false;
      if (topic !== "ALL" && !(Array.isArray(family.topics) && family.topics.includes(topic))) return false;
      if (evidenceOnly && safeNumber(evidence.get(family.family_id)?.independent_units) <= 0) return false;
      return true;
    });
  };

  const layerRank = (layer) => {
    const index = LAYER_ORDER.indexOf(layer);
    return index >= 0 ? index : LAYER_ORDER.length;
  };
  const familySort = (a, b) => {
    const layerDelta = layerRank(a.layer) - layerRank(b.layer);
    if (layerDelta) return layerDelta;
    const aTopic = Array.isArray(a.topics) && a.topics[0] ? a.topics[0] : "ZZ";
    const bTopic = Array.isArray(b.topics) && b.topics[0] ? b.topics[0] : "ZZ";
    const topicDelta = aTopic.localeCompare(bTopic, "vi");
    if (topicDelta) return topicDelta;
    return text(a.label_vi || a.family_id).localeCompare(text(b.label_vi || b.family_id), "vi");
  };

  const legacyRows = (legacyLike) => {
    const legacy = normalizedLegacy(legacyLike);
    return Object.entries(legacy.tags).map(([tag, stat]) => ({
      tag,
      attempted: safeNumber(stat?.attempted),
      correct: safeNumber(stat?.correct),
      hinted_attempts: safeNumber(stat?.hinted_attempts)
    })).sort((a, b) => b.attempted - a.attempted || a.tag.localeCompare(b.tag, "vi"));
  };

  const logic = Object.freeze({
    STORE_KEY,
    LEGACY_KEY,
    BUILD,
    CONTROLLED_BUILD,
    LAYER_ORDER,
    LAYER_LABELS,
    LEARNER_LAYER_LABELS,
    OPTIONAL_LAYERS,
    NO_DIRECT_EVIDENCE_FAMILIES,
    TOPIC_LABELS,
    normalizedStore,
    normalizedLegacy,
    topicMetaFromSpine,
    summarizeEvidence,
    evidenceDisplay,
    filterFamilies,
    familySort,
    legacyRows,
    parseStored
  });
  if (typeof module !== "undefined" && module.exports) module.exports = logic;
  if (typeof window === "undefined" || typeof document === "undefined") return;
  window.SkillMapV2Preview = logic;

  const el = (tag, css = "", content = null) => {
    const node = document.createElement(tag);
    if (css) node.className = css;
    if (content !== null) node.textContent = content;
    return node;
  };
  const option = (value, label) => {
    const node = document.createElement("option");
    node.value = value;
    node.textContent = label;
    return node;
  };
  const formatPercent = (ratio) => ratio === null ? "—" : Math.round(ratio * 100) + "%";
  const formatDate = (value) => {
    if (!value) return "—";
    const date = new Date(value);
    return Number.isNaN(date.getTime()) ? "—" : new Intl.DateTimeFormat("vi-VN", {
      day: "2-digit", month: "2-digit", year: "numeric"
    }).format(date);
  };
  const hrefFor = (assetsBase, slug, practice = false) =>
    new URL("../kien-thuc/" + slug + "/" + (practice ? "bai-tap/" : ""), assetsBase).href;

  class Preview {
    constructor(root, registry, spine, storage) {
      this.root = root;
      this.mode = root.dataset.skillMapV2Mode === "learner" ? "learner" : "owner";
      this.registry = registry;
      this.assetsBase = new URL(root.dataset.assetsBase || "../../assets/", document.baseURI);
      this.topicMeta = topicMetaFromSpine(spine);
      this.storage = storage;
      this.store = normalizedStore(parseStored(storage, STORE_KEY, {}));
      this.legacy = normalizedLegacy(parseStored(storage, LEGACY_KEY, {}));
      this.evidence = summarizeEvidence(registry, this.store);
      this.filters = { layer: "ALL", topic: "ALL", evidenceOnly: false, evidence: this.evidence.summaries };
      this.render();
    }

    render() {
      const learnerMode = this.mode === "learner";
      this.root.dataset.skillMapBuild = learnerMode ? CONTROLLED_BUILD : BUILD;
      this.root.replaceChildren();

      const intro = el("div", "skill-map-v2-intro");
      if (learnerMode) {
        intro.append(
          el("strong", "", "Bản đồ kỹ năng"),
          el("p", "", "Trang này giúp em xem dữ liệu luyện tập đã ghi nhận. Đây là xu hướng luyện tập, không phải kết luận thành thạo hay điểm sẵn sàng.")
        );
      } else {
        intro.append(
          el("strong", "", "Preview I4 · Bằng chứng kỹ năng, chưa phải Mastery"),
          el("p", "", "Trang này chỉ đọc dữ liệu shadow Taxonomy v2 trên trình duyệt hiện tại. Không backfill, không chấm Readiness, không sửa thống kê Practice cũ.")
        );
      }
      this.root.append(intro);

      const totals = el("section", "skill-map-v2-totals");
      const totalCards = learnerMode ? [
        ["Lượt luyện độc lập", this.evidence.totals.independent_units],
        ["Lượt làm đúng", this.evidence.totals.independent_correct],
        ["Kỹ năng đã có dữ liệu", this.evidence.totals.evidence_families],
        ["Kỹ năng chưa có dữ liệu", this.evidence.totals.no_evidence_families]
      ] : [
        ["Đơn vị độc lập", this.evidence.totals.independent_units],
        ["Đúng trên đơn vị độc lập", this.evidence.totals.independent_correct],
        ["Câu đã thấy", this.evidence.totals.seen_questions],
        ["Sự kiện gần đây", this.evidence.totals.recent_events]
      ];
      for (const [label, value] of totalCards) {
        const card = el("div", "skill-map-v2-total-card");
        card.append(el("span", "skill-map-v2-total-value", String(value)), el("span", "skill-map-v2-total-label", label));
        totals.append(card);
      }
      this.root.append(totals);

      this.controls = el("section", "skill-map-v2-controls");
      const layerWrap = el("label", "skill-map-v2-control");
      layerWrap.append(el("span", "", "Tầng"));
      this.layerSelect = document.createElement("select");
      this.layerSelect.append(option("ALL", "Tất cả tầng"));
      const layerLabels = learnerMode ? LEARNER_LAYER_LABELS : LAYER_LABELS;
      for (const layer of LAYER_ORDER) this.layerSelect.append(option(layer, layerLabels[layer] || layer));
      this.layerSelect.addEventListener("change", () => { this.filters.layer = this.layerSelect.value; this.renderFamilies(); });
      layerWrap.append(this.layerSelect);

      const topicWrap = el("label", "skill-map-v2-control");
      topicWrap.append(el("span", "", "Chuyên đề"));
      this.topicSelect = document.createElement("select");
      this.topicSelect.append(option("ALL", "Tất cả chuyên đề"));
      for (let n = 2; n <= 25; n += 1) {
        const id = "CT" + String(n).padStart(2, "0");
        this.topicSelect.append(option(id, TOPIC_LABELS[id] || id));
      }
      this.topicSelect.addEventListener("change", () => { this.filters.topic = this.topicSelect.value; this.renderFamilies(); });
      topicWrap.append(this.topicSelect);

      const evidenceWrap = el("label", "skill-map-v2-control skill-map-v2-check");
      this.evidenceOnly = document.createElement("input");
      this.evidenceOnly.type = "checkbox";
      this.evidenceOnly.addEventListener("change", () => { this.filters.evidenceOnly = this.evidenceOnly.checked; this.renderFamilies(); });
      evidenceWrap.append(this.evidenceOnly, el("span", "", learnerMode ? "Chỉ kỹ năng đã có dữ liệu luyện tập" : "Chỉ kỹ năng đã có bằng chứng độc lập"));

      this.controls.append(layerWrap, topicWrap, evidenceWrap);
      this.root.append(this.controls);

      this.list = el("div", "skill-map-v2-list");
      this.root.append(this.list);
      this.renderFamilies();
      this.renderLegacy();
    }

    renderFamilies() {
      this.list.replaceChildren();
      const families = filterFamilies(this.registry.families, this.filters).sort(familySort);
      const count = el("p", "skill-map-v2-count",
        this.mode === "learner"
          ? "Hiển thị " + families.length + "/" + (this.registry.families?.length || 0) + " kỹ năng."
          : "Hiển thị " + families.length + "/" + (this.registry.families?.length || 0) + " family.");
      this.list.append(count);

      if (!families.length) {
        this.list.append(el("p", "skill-map-v2-empty", this.mode === "learner" ? "Không có kỹ năng phù hợp bộ lọc hiện tại." : "Không có family phù hợp bộ lọc hiện tại."));
        return;
      }

      const byLayer = new Map();
      for (const family of families) {
        if (!byLayer.has(family.layer)) byLayer.set(family.layer, []);
        byLayer.get(family.layer).push(family);
      }

      for (const layer of LAYER_ORDER) {
        const rows = byLayer.get(layer);
        if (!rows?.length) continue;
        const isOptional = OPTIONAL_LAYERS.has(layer);
        const forceOpen = this.filters.layer !== "ALL" || this.filters.topic !== "ALL" || this.filters.evidenceOnly;
        const container = isOptional ? document.createElement("details") : el("section", "skill-map-v2-layer");
        container.className = "skill-map-v2-layer" + (isOptional ? " is-optional" : "");
        if (isOptional && forceOpen) container.open = true;
        const layerLabels = this.mode === "learner" ? LEARNER_LAYER_LABELS : LAYER_LABELS;
        const headingText = (layerLabels[layer] || layer) + " · " + rows.length + (this.mode === "learner" ? " kỹ năng" : " family");
        if (isOptional) {
          const summary = el("summary", "skill-map-v2-layer-title", headingText);
          container.append(summary);
        } else {
          container.append(el("h2", "skill-map-v2-layer-title", headingText));
        }

        const groups = new Map();
        for (const family of rows) {
          const primaryTopic = Array.isArray(family.topics) && family.topics[0] ? family.topics[0] : "OTHER";
          const meta = this.topicMeta[primaryTopic];
          const groupKey = (meta?.strand_id || "other") + "::" + primaryTopic;
          if (!groups.has(groupKey)) groups.set(groupKey, { primaryTopic, meta, families: [] });
          groups.get(groupKey).families.push(family);
        }

        const groupWrap = el("div", "skill-map-v2-groups");
        for (const group of [...groups.values()].sort((a, b) =>
          text(a.primaryTopic).localeCompare(text(b.primaryTopic), "vi"))) {
          const section = el("section", "skill-map-v2-topic");
          const title = group.meta?.label || TOPIC_LABELS[group.primaryTopic] || group.primaryTopic;
          section.append(el("h3", "skill-map-v2-topic-title", title));
          if (group.meta?.strand_label) section.append(el("p", "skill-map-v2-strand", group.meta.strand_label));
          const cards = el("div", "skill-map-v2-cards");
          for (const family of group.families.sort(familySort)) cards.append(this.familyCard(family));
          section.append(cards);
          groupWrap.append(section);
        }
        container.append(groupWrap);
        this.list.append(container);
      }
    }

    familyCard(family) {
      const summary = this.evidence.summaries.get(family.family_id) || {
        independent_units: 0, independent_correct: 0, evidence_accuracy: null,
        recent_events: 0, assisted_recent_events: 0, latest_at: null, observed_topics: []
      };
      const card = el("article", "skill-map-v2-card");
      card.dataset.familyId = family.family_id;
      const header = el("div", "skill-map-v2-card-header");
      const title = el("h4", "skill-map-v2-card-title", family.label_vi || family.family_id);
      const layerLabels = this.mode === "learner" ? LEARNER_LAYER_LABELS : LAYER_LABELS;
      const badge = el("span", "skill-map-v2-layer-badge", layerLabels[family.layer] || family.layer);
      header.append(title, badge);
      card.append(header);
      if (this.mode !== "learner") card.append(el("p", "skill-map-v2-family-id", family.family_id));

      const topics = Array.isArray(family.topics) ? family.topics : [];
      card.append(el("p", "skill-map-v2-topics",
        "Chuyên đề: " + topics.map((id) => TOPIC_LABELS[id] || id).join(" · ")));

      if (this.mode === "learner") {
        const display = evidenceDisplay(summary);
        card.dataset.evidenceState = display.state;
        if (summary.independent_units > 0) {
          const status = el("p", "skill-map-v2-status " + (display.show_percent ? "is-trend" : "is-sparse"), display.label);
          const metrics = el("div", "skill-map-v2-metrics");
          metrics.append(
            el("span", "skill-map-v2-metric", summary.independent_units + " lượt luyện độc lập"),
            el("span", "skill-map-v2-metric", summary.independent_correct + "/" + summary.independent_units + " đúng")
          );
          if (display.show_percent) {
            metrics.append(el("span", "skill-map-v2-metric", "Tỷ lệ đúng quan sát " + formatPercent(display.evidence_accuracy)));
          }
          card.append(status, metrics);
          card.append(el("p", "skill-map-v2-recent", "Lần luyện gần nhất: " + formatDate(summary.latest_at)));
        } else if (NO_DIRECT_EVIDENCE_FAMILIES.has(family.family_id)) {
          card.dataset.evidenceState = "NO_DIRECT_EVIDENCE";
          card.append(el("p", "skill-map-v2-no-evidence",
            "Hiện chưa có bài luyện trực tiếp cho kỹ năng này. Trạng thái này không có nghĩa là em yếu."));
        } else {
          card.append(el("p", "skill-map-v2-no-evidence",
            "Chưa có bằng chứng. Trạng thái này không có nghĩa là em yếu; hãy luyện tập để bắt đầu ghi nhận xu hướng."));
        }
      } else if (summary.independent_units > 0) {
        const metrics = el("div", "skill-map-v2-metrics");
        metrics.append(
          el("span", "skill-map-v2-metric", summary.independent_units + " đơn vị độc lập"),
          el("span", "skill-map-v2-metric", summary.independent_correct + "/" + summary.independent_units + " đúng"),
          el("span", "skill-map-v2-metric", "Evidence accuracy " + formatPercent(summary.evidence_accuracy))
        );
        card.append(metrics);
        card.append(el("p", "skill-map-v2-recent",
          "Sự kiện gần đây: " + summary.recent_events +
          " · Có hỗ trợ: " + summary.assisted_recent_events +
          " · Lần gần nhất: " + formatDate(summary.latest_at)));
      } else {
        card.append(el("p", "skill-map-v2-no-evidence",
          "Chưa có bằng chứng độc lập trong store hiện tại. Không suy ra yếu/mạnh từ trạng thái này."));
      }

      if (topics.length) {
        const meta = this.topicMeta[topics[0]];
        if (meta?.slug) {
          const actions = el("div", "skill-map-v2-actions");
          const learn = el("a", "skill-map-v2-link", "Học chuyên đề");
          learn.href = hrefFor(this.assetsBase, meta.slug, false);
          const practice = el("a", "skill-map-v2-link", "Luyện tập");
          practice.href = hrefFor(this.assetsBase, meta.slug, true);
          actions.append(learn, practice);
          card.append(actions);
        }
      }
      return card;
    }

    renderLegacy() {
      const details = document.createElement("details");
      details.className = "skill-map-v2-legacy";
      details.dataset.skillMapLegacy = "true";
      const rows = legacyRows(this.legacy);
      const learnerMode = this.mode === "learner";
      details.append(el("summary", "", learnerMode ? "Thống kê luyện tập cũ — xem riêng (" + rows.length + " nhóm)" : "Thống kê Practice cũ — tách riêng (" + rows.length + " tag)"));
      details.append(el("p", "skill-map-v2-legacy-note", learnerMode
        ? "Phần này là thống kê cũ và được giữ riêng. Hệ thống không cộng các số này vào Bản đồ kỹ năng mới."
        : "Các số dưới đây lấy từ toan-thcs-practice-v1. Không cộng gộp với Evidence accuracy của Taxonomy v2."));
      if (!rows.length) {
        details.append(el("p", "skill-map-v2-empty", "Chưa có thống kê tag Practice cũ trên trình duyệt này."));
      } else {
        const table = el("div", "skill-map-v2-legacy-list");
        for (const row of rows) {
          const accuracy = row.attempted > 0 ? Math.round(100 * row.correct / row.attempted) + "%" : "—";
          table.append(el("p", "skill-map-v2-legacy-row",
            row.tag + ": " + row.correct + "/" + row.attempted + " đúng · " + accuracy +
            (row.hinted_attempts ? " · có hỗ trợ " + row.hinted_attempts : "")));
        }
        details.append(table);
      }
      this.root.append(details);
    }
  }

  const fetchJson = async (url) => {
    const response = await fetch(url, { cache: "no-store" });
    if (!response.ok) throw new Error("HTTP " + response.status);
    return response.json();
  };

  const init = async () => {
    for (const root of document.querySelectorAll("[data-skill-map-v2-preview], [data-skill-map-v2-controlled]")) {
      if (root.dataset.skillMapReady) continue;
      root.dataset.skillMapReady = "loading";
      root.textContent = root.dataset.skillMapV2Mode === "learner" ? "Đang tải Bản đồ kỹ năng…" : "Đang tải Skill Map v2 preview…";
      try {
        const assets = new URL(root.dataset.assetsBase || "../../assets/", document.baseURI);
        const [registry, spine] = await Promise.all([
          fetchJson(new URL("data/curriculum/skill-taxonomy-v2-registry-r1.json", assets)),
          fetchJson(new URL("data/curriculum/vertical-spine.json", assets))
        ]);
        if (registry?.schema !== "skill-taxonomy-v2-registry-r1" || registry?.families?.length !== 131) {
          throw new Error("Registry v2 không đúng checkpoint 131 family");
        }
        new Preview(root, registry, spine, localStorage);
        root.dataset.skillMapReady = "true";
      } catch (error) {
        root.dataset.skillMapReady = "error";
        root.replaceChildren(el("p", "skill-map-v2-error",
          (root.dataset.skillMapV2Mode === "learner" ? "Không tải được Bản đồ kỹ năng: " : "Không tải được Skill Map v2 preview: ") + error.message + ". Practice bình thường không bị ảnh hưởng."));
      }
    }
  };

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init);
  else init();
  if (typeof document$ !== "undefined") document$.subscribe(init);
})();
