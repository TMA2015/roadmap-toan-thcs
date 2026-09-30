(() => {
  "use strict";

  const isNode = typeof module !== "undefined" && module.exports;

  const STORE_KEY = "toan-thcs-canonical-evidence-v2";
  const BETA_V1_KEY = "toan-thcs-canonical-evidence-v1";
  const STORE_SCHEMA = "canonical-skill-evidence-store-v2";
  const EVENT_SCHEMA = "canonical-skill-evidence-event-v2";
  const POLICY_SCHEMA = "canonical-evidence-runtime-policy-v1";
  const ACTIVE_STATUS = "G1_CANARY_ACTIVE";
  const MAX_RECENT = 1000;
  const BUILD = "canonical-evidence-g1-shadow-20260930";

  const plainObject = (value) => value && typeof value === "object" && !Array.isArray(value);

  const emptyStore = () => ({
    schema: STORE_SCHEMA,
    recent_events: [],
    seen_questions: {},
    independent_units: {}
  });

  const normalizedStore = (raw) => {
    const source = plainObject(raw) && raw.schema === STORE_SCHEMA ? raw : emptyStore();
    return {
      schema: STORE_SCHEMA,
      recent_events: Array.isArray(source.recent_events) ? [...source.recent_events].slice(-MAX_RECENT) : [],
      seen_questions: plainObject(source.seen_questions) ? { ...source.seen_questions } : {},
      independent_units: plainObject(source.independent_units) ? { ...source.independent_units } : {}
    };
  };

  const seenQuestionKey = (row) => `${row.normalized_topic_key}|q:${row.question_id}`;
  const evidenceUnitKey = (row) => [
    row.canonical_skill_id,
    row.normalized_topic_key,
    row.clone_family ? "clone:" + row.clone_family : "q:" + row.question_id
  ].join("|");

  const assistanceKind = ({ hintsUsed = 0, fullSolutionViewed = false } = {}) => {
    if (fullSolutionViewed) return "full_solution";
    if (Number(hintsUsed) > 0) return "hint";
    return "none";
  };

  const classifyAttempt = (storeLike, row, input = {}) => {
    const store = normalizedStore(storeLike);
    const qKey = seenQuestionKey(row);
    const unitKey = evidenceUnitKey(row);
    const assisted = assistanceKind(input) !== "none";
    if (assisted) {
      return {
        assisted: true,
        assistance_kind: assistanceKind(input),
        independent_evidence: false,
        independent_reason: "assisted",
        seen_question_key: qKey,
        independent_unit_key: unitKey
      };
    }
    if (store.seen_questions[qKey]) {
      return {
        assisted: false,
        assistance_kind: "none",
        independent_evidence: false,
        independent_reason: "repeat_question",
        seen_question_key: qKey,
        independent_unit_key: unitKey
      };
    }
    if (store.independent_units[unitKey]) {
      return {
        assisted: false,
        assistance_kind: "none",
        independent_evidence: false,
        independent_reason: "clone_family_repeat",
        seen_question_key: qKey,
        independent_unit_key: unitKey
      };
    }
    return {
      assisted: false,
      assistance_kind: "none",
      independent_evidence: true,
      independent_reason: "first_unseen_unit",
      seen_question_key: qKey,
      independent_unit_key: unitKey
    };
  };

  const makeEvent = (row, input, assessment, policy, now, eventId) => ({
    schema: EVENT_SCHEMA,
    event_id: eventId,
    capture_version: policy.capture_version,
    origin_lane: "practice",
    question_id: row.question_id,
    canonical_skill_id: row.canonical_skill_id,
    normalized_topic_key: row.normalized_topic_key,
    evidence_class: row.evidence_class,
    clone_family: row.clone_family || null,
    correct: Boolean(input.correct),
    attempted_at: now,
    source_file: row.source_file,
    source_blob: row.source_blob,
    phase_d_overlay_blob: row.phase_d_overlay_blob,
    assisted: assessment.assisted,
    assistance_kind: assessment.assistance_kind,
    hints_used: Math.max(0, Number(input.hintsUsed) || 0),
    full_solution_viewed: Boolean(input.fullSolutionViewed),
    practice_mode: String(input.practiceMode || "normal"),
    selected_index: Number.isInteger(input.selectedIndex) ? input.selectedIndex : null,
    independent_evidence: assessment.independent_evidence,
    independent_reason: assessment.independent_reason,
    independent_unit_key: assessment.independent_unit_key,
    supporting_skills: [...(row.supporting_skills || [])]
  });

  const appendEvent = (storeLike, row, event) => {
    const store = normalizedStore(storeLike);
    const qKey = seenQuestionKey(row);
    const next = {
      schema: STORE_SCHEMA,
      recent_events: [...store.recent_events, event].slice(-MAX_RECENT),
      seen_questions: { ...store.seen_questions },
      independent_units: { ...store.independent_units }
    };

    if (!next.seen_questions[qKey]) {
      next.seen_questions[qKey] = {
        first_event_id: event.event_id,
        first_seen_at: event.attempted_at,
        first_assisted: event.assisted
      };
    }

    if (event.independent_evidence && !next.independent_units[event.independent_unit_key]) {
      next.independent_units[event.independent_unit_key] = {
        first_event_id: event.event_id,
        first_seen_at: event.attempted_at,
        question_id: event.question_id,
        canonical_skill_id: event.canonical_skill_id,
        normalized_topic_key: event.normalized_topic_key,
        evidence_class: event.evidence_class,
        correct: event.correct
      };
    }
    return next;
  };

  const recordAttemptToStore = (storeLike, row, input, policy, now, eventId) => {
    const assessment = classifyAttempt(storeLike, row, input);
    const event = makeEvent(row, input, assessment, policy, now, eventId);
    return { assessment, event, store: appendEvent(storeLike, row, event) };
  };

  const validatePolicy = (policy) => {
    if (!plainObject(policy) || policy.schema !== POLICY_SCHEMA) throw new Error("invalid_policy_schema");
    if (policy?.production_store?.key !== STORE_KEY ||
        policy?.production_store?.schema !== STORE_SCHEMA ||
        policy?.production_store?.beta_v1_key !== BETA_V1_KEY ||
        policy?.production_store?.migrate_beta_v1 !== false ||
        policy?.production_store?.backfill_beta_v1 !== false) {
      throw new Error("unsafe_store_policy");
    }
    if (!Array.isArray(policy.rows) || policy.rows.length !== 27) throw new Error("invalid_g1_scope");
    const ids = new Set();
    const map = new Map();
    for (const row of policy.rows) {
      if (!row?.question_id || ids.has(row.question_id) ||
          !row.normalized_topic_key || !row.canonical_skill_id ||
          !row.evidence_class || !row.source_file || !row.source_blob ||
          !row.phase_d_overlay_blob || row.capture_status !== ACTIVE_STATUS) {
        throw new Error("invalid_policy_row");
      }
      ids.add(row.question_id);
      map.set(row.question_id, Object.freeze({
        ...row,
        supporting_skills: Object.freeze([...(row.supporting_skills || [])]),
        legacy_skill_tags: Object.freeze([...(row.legacy_skill_tags || [])])
      }));
    }
    return { policy: Object.freeze(policy), rows: map };
  };

  const api = {
    BUILD, STORE_KEY, BETA_V1_KEY, STORE_SCHEMA, EVENT_SCHEMA, POLICY_SCHEMA,
    ACTIVE_STATUS, MAX_RECENT, emptyStore, normalizedStore, seenQuestionKey,
    evidenceUnitKey, assistanceKind, classifyAttempt, makeEvent, appendEvent,
    recordAttemptToStore, validatePolicy
  };

  if (isNode) {
    module.exports = api;
    return;
  }
  if (typeof window === "undefined" || typeof document === "undefined") return;

  let policyState = null;
  let policyError = null;
  let lastCapture = null;

  const scriptUrl = document.currentScript?.src || "";
  const policyUrl = scriptUrl
    ? new URL("../data/curriculum/canonical-evidence-runtime-policy-04-07-v1.json", scriptUrl).href
    : new URL("assets/data/curriculum/canonical-evidence-runtime-policy-04-07-v1.json", document.baseURI).href;

  const loadStore = () => {
    try {
      return normalizedStore(JSON.parse(localStorage.getItem(STORE_KEY)));
    } catch (_) {
      return emptyStore();
    }
  };

  const saveStore = (store) => {
    localStorage.setItem(STORE_KEY, JSON.stringify(store));
  };

  const eventId = () => {
    if (window.crypto?.randomUUID) return window.crypto.randomUUID();
    return "ce2-" + Date.now().toString(36) + "-" + Math.random().toString(36).slice(2);
  };

  const nowIso = () => new Date().toISOString();

  const refreshDebug = () => {
    if (!new URLSearchParams(window.location.search).has("canonicalDebug")) return;
    let panel = document.querySelector("[data-canonical-evidence-debug]");
    if (!panel) {
      panel = document.createElement("details");
      panel.dataset.canonicalEvidenceDebug = BUILD;
      panel.style.margin = "1rem 0";
      panel.style.padding = ".75rem";
      panel.style.border = "1px dashed currentColor";
      const summary = document.createElement("summary");
      summary.textContent = "QA · Canonical Evidence G1";
      const pre = document.createElement("pre");
      pre.style.whiteSpace = "pre-wrap";
      panel.append(summary, pre);
      const host = document.querySelector(".md-content__inner") || document.body;
      host.appendChild(panel);
    }
    const store = loadStore();
    panel.querySelector("pre").textContent = JSON.stringify({
      build: BUILD,
      policy_ready: Boolean(policyState),
      policy_error: policyError,
      store_key: STORE_KEY,
      beta_v1_key: BETA_V1_KEY,
      recent_events: store.recent_events.length,
      seen_questions: Object.keys(store.seen_questions).length,
      independent_units: Object.keys(store.independent_units).length,
      last_capture: lastCapture
    }, null, 2);
  };

  const ready = fetch(policyUrl, { cache: "no-store" })
    .then((response) => {
      if (!response.ok) throw new Error("policy_http_" + response.status);
      return response.json();
    })
    .then((policy) => {
      policyState = validatePolicy(policy);
      refreshDebug();
      return policyState;
    })
    .catch((error) => {
      policyError = String(error?.message || error);
      refreshDebug();
      return null;
    });

  const tagsMatch = (question, row) => {
    const actual = Array.isArray(question?.tags?.skill) ? question.tags.skill : [];
    const expected = Array.isArray(row.legacy_skill_tags) ? row.legacy_skill_tags : [];
    return actual.length === expected.length && actual.every((value, index) => value === expected[index]);
  };

  const captureAttempt = async (input = {}) => {
    try {
      const state = await ready;
      if (!state) throw new Error("policy_unavailable");
      const question = input.question;
      const row = state.rows.get(question?.id);
      if (!row) {
        lastCapture = { captured: false, reason: "not_in_g1_policy", question_id: question?.id || null };
        refreshDebug();
        return lastCapture;
      }
      if (!tagsMatch(question, row)) {
        lastCapture = { captured: false, reason: "runtime_tag_drift", question_id: question.id };
        refreshDebug();
        return lastCapture;
      }

      const before = loadStore();
      const result = recordAttemptToStore(before, row, input, state.policy, nowIso(), eventId());
      saveStore(result.store);
      lastCapture = {
        captured: true,
        question_id: question.id,
        canonical_skill_id: row.canonical_skill_id,
        independent_evidence: result.event.independent_evidence,
        independent_reason: result.event.independent_reason
      };
      refreshDebug();
      return lastCapture;
    } catch (error) {
      lastCapture = {
        captured: false,
        reason: "canonical_fail_open",
        error: String(error?.message || error),
        question_id: input?.question?.id || null
      };
      refreshDebug();
      return lastCapture;
    }
  };

  window.RoadmapCanonicalEvidenceObserver = Object.freeze({
    ...api,
    ready,
    captureAttempt,
    debugSnapshot: () => ({
      policy_ready: Boolean(policyState),
      policy_error: policyError,
      last_capture: lastCapture,
      store: loadStore()
    })
  });

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", refreshDebug, { once: true });
  } else {
    refreshDebug();
  }
})();