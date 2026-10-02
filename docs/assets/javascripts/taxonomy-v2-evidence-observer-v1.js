(() => {
  "use strict";

  const isNode = typeof module !== "undefined" && module.exports;

  const STORE_KEY = "toan-thcs-taxonomy-v2-evidence-v1";
  const STORE_SCHEMA = "taxonomy-v2-evidence-store-v1";
  const EVENT_SCHEMA = "taxonomy-v2-evidence-event-v1";
  const POLICY_SCHEMA = "skill-taxonomy-v2-i2-canary-policy-r1";
  const ACTIVE_STATUS = "I2_CANARY_ACTIVE";
  const GUARD_STATUS = "I2_CANARY_NO_CAPTURE_GUARD";
  const MAX_RECENT = 500;
  const BUILD = "taxonomy-v2-i2-ct02-canary-20261002";
  const EXPECTED_REGISTRY_BLOB = "c2f2e5b8d78a58d874f88524861326223fdbdf45";
  const EXPECTED_CT02_POLICY_BLOB = "30a4ede71d6119ffd612aef8b153f1c7d2a786d2";

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

  const seenQuestionKey = (row) => `${row.topic_id}|q:${row.question_id}`;
  const evidenceUnitKey = (row) => [
    row.family_id,
    row.topic_id,
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
    topic_id: row.topic_id,
    diagnostic_skill_id: row.diagnostic_skill_id,
    family_id: row.family_id,
    family_layer: row.family_layer,
    mapping_role: row.mapping_role,
    evidence_class: row.evidence_class,
    clone_family: row.clone_family || null,
    correct: Boolean(input.correct),
    attempted_at: now,
    source_file: row.source_file,
    source_blob: row.source_blob,
    source_registry_blob: policy.source_registry.blob_sha,
    source_topic_policy_blob: policy.source_topic_policy.blob_sha,
    assisted: assessment.assisted,
    assistance_kind: assessment.assistance_kind,
    hints_used: Math.max(0, Number(input.hintsUsed) || 0),
    full_solution_viewed: Boolean(input.fullSolutionViewed),
    practice_mode: String(input.practiceMode || "normal"),
    selected_index: Number.isInteger(input.selectedIndex) ? input.selectedIndex : null,
    independent_evidence: assessment.independent_evidence,
    independent_reason: assessment.independent_reason,
    independent_unit_key: assessment.independent_unit_key
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
        topic_id: event.topic_id,
        diagnostic_skill_id: event.diagnostic_skill_id,
        family_id: event.family_id,
        family_layer: event.family_layer,
        evidence_class: event.evidence_class,
        correct: event.correct
      };
    }

    return next;
  };

  const recordAttemptToStore = (storeLike, row, input, policy, now, eventId) => {
    if (row.capture_status !== ACTIVE_STATUS || !row.family_id) {
      throw new Error("row_not_capture_eligible");
    }
    const assessment = classifyAttempt(storeLike, row, input);
    const event = makeEvent(row, input, assessment, policy, now, eventId);
    return { assessment, event, store: appendEvent(storeLike, row, event) };
  };

  const validatePolicy = (policy) => {
    if (!plainObject(policy) || policy.schema !== POLICY_SCHEMA || policy.version !== 1) {
      throw new Error("invalid_policy_schema");
    }
    if (policy.state !== "I2_SHADOW_CANARY_ACTIVE" || policy.runtime_enabled !== true ||
        policy.normal_learner_ui_change !== false) {
      throw new Error("invalid_canary_state");
    }
    if (policy?.source_registry?.blob_sha !== EXPECTED_REGISTRY_BLOB ||
        policy?.source_topic_policy?.blob_sha !== EXPECTED_CT02_POLICY_BLOB) {
      throw new Error("source_lock_drift");
    }
    if (policy?.production_store?.key !== STORE_KEY ||
        policy?.production_store?.schema !== STORE_SCHEMA ||
        policy?.production_store?.migrate_from !== null ||
        policy?.production_store?.backfill_existing_attempts !== false) {
      throw new Error("unsafe_store_policy");
    }
    if (policy?.runtime_rules?.default_capture !== "NO_CAPTURE" ||
        policy?.runtime_rules?.legacy_write_first !== true ||
        policy?.runtime_rules?.fail_open !== true ||
        policy?.runtime_rules?.auto_retry_backfill !== false ||
        policy?.runtime_rules?.no_family_rows_never_write_events !== true ||
        policy?.runtime_rules?.family_mastery_threshold !== null ||
        policy?.runtime_rules?.core_readiness_credit !== false ||
        policy?.runtime_rules?.normal_learner_ui_change !== false) {
      throw new Error("unsafe_runtime_rules");
    }
    if (!Array.isArray(policy.rows) || policy.rows.length !== 14 ||
        policy?.scope?.topic_id !== "CT02" ||
        policy?.scope?.active_rows !== 12 ||
        policy?.scope?.no_capture_guard_rows !== 2 ||
        policy?.scope?.family_count !== 4 ||
        policy?.scope?.max_independent_units !== 8) {
      throw new Error("invalid_i2_scope");
    }

    const ids = new Set();
    const map = new Map();
    const activeFamilies = new Set();
    const activeUnits = new Set();
    let activeCount = 0;
    let guardCount = 0;

    for (const row of policy.rows) {
      if (!row?.question_id || ids.has(row.question_id) ||
          row.topic_id !== "CT02" || !row.source_file || !row.source_blob ||
          !Array.isArray(row.legacy_skill_tags) || !row.evidence_class) {
        throw new Error("invalid_policy_row");
      }
      ids.add(row.question_id);

      if (row.capture_status === ACTIVE_STATUS) {
        activeCount += 1;
        if (!row.family_id || !row.diagnostic_skill_id || !row.family_layer ||
            !row.mapping_role || row.policy_disposition !== "FAMILY_LINK_REVIEWED") {
          throw new Error("invalid_active_row");
        }
        activeFamilies.add(row.family_id);
        activeUnits.add(evidenceUnitKey(row));
      } else if (row.capture_status === GUARD_STATUS) {
        guardCount += 1;
        if (row.family_id !== null || row.diagnostic_skill_id !== null ||
            row.policy_disposition !== "FORMATIVE_ONLY_NO_FAMILY") {
          throw new Error("invalid_guard_row");
        }
      } else {
        throw new Error("unknown_capture_status");
      }

      map.set(row.question_id, Object.freeze({
        ...row,
        legacy_skill_tags: Object.freeze([...(row.legacy_skill_tags || [])])
      }));
    }

    if (activeCount !== 12 || guardCount !== 2 ||
        activeFamilies.size !== 4 || activeUnits.size !== 8) {
      throw new Error("invalid_i2_runtime_boundary");
    }

    return { policy: Object.freeze(policy), rows: map };
  };

  const api = {
    BUILD, STORE_KEY, STORE_SCHEMA, EVENT_SCHEMA, POLICY_SCHEMA,
    ACTIVE_STATUS, GUARD_STATUS, MAX_RECENT,
    emptyStore, normalizedStore, seenQuestionKey, evidenceUnitKey,
    assistanceKind, classifyAttempt, makeEvent, appendEvent,
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
    ? new URL("../data/curriculum/taxonomy-v2-runtime/i2-canary-ct02-r1.json", scriptUrl).href
    : new URL("assets/data/curriculum/taxonomy-v2-runtime/i2-canary-ct02-r1.json", document.baseURI).href;

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
    return "tv2-" + Date.now().toString(36) + "-" + Math.random().toString(36).slice(2);
  };

  const nowIso = () => new Date().toISOString();

  const refreshDebug = () => {
    if (!new URLSearchParams(window.location.search).has("taxonomyV2Debug")) return;
    let panel = document.querySelector("[data-taxonomy-v2-debug]");
    if (!panel) {
      panel = document.createElement("details");
      panel.dataset.taxonomyV2Debug = BUILD;
      panel.style.margin = "1rem 0";
      panel.style.padding = ".75rem";
      panel.style.border = "1px dashed currentColor";
      const summary = document.createElement("summary");
      summary.textContent = "QA · Skill Taxonomy v2 I2 Canary";
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
        lastCapture = { captured: false, reason: "not_in_i2_canary", question_id: question?.id || null };
        refreshDebug();
        return lastCapture;
      }
      if (row.capture_status === GUARD_STATUS) {
        lastCapture = { captured: false, reason: "no_family_guard", question_id: question.id };
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
        family_id: row.family_id,
        diagnostic_skill_id: row.diagnostic_skill_id,
        independent_evidence: result.event.independent_evidence,
        independent_reason: result.event.independent_reason
      };
      refreshDebug();
      return lastCapture;
    } catch (error) {
      lastCapture = {
        captured: false,
        reason: "taxonomy_v2_fail_open",
        error: String(error?.message || error),
        question_id: input?.question?.id || null
      };
      refreshDebug();
      return lastCapture;
    }
  };

  window.RoadmapTaxonomyV2Observer = Object.freeze({
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