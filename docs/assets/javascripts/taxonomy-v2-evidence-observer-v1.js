(() => {
  "use strict";

  const isNode = typeof module !== "undefined" && module.exports;

  const STORE_KEY = "toan-thcs-taxonomy-v2-evidence-v1";
  const STORE_SCHEMA = "taxonomy-v2-evidence-store-v1";
  const EVENT_SCHEMA = "taxonomy-v2-evidence-event-v1";
  const I2_POLICY_SCHEMA = "skill-taxonomy-v2-i2-canary-policy-r1";
  const I3A_POLICY_SCHEMA = "skill-taxonomy-v2-i3a-ct02-policy-r1";
  const I3B_POLICY_SCHEMA = "skill-taxonomy-v2-i3b-ct02-03-policy-r1";
  const I3C_POLICY_SCHEMA = "skill-taxonomy-v2-i3c-ct02-04-policy-r1";
  const I3D_POLICY_SCHEMA = "skill-taxonomy-v2-i3d-ct02-07-policy-r1";
  const I3E_POLICY_SCHEMA = "skill-taxonomy-v2-i3e-ct02-12-policy-r1";
  const I3F_POLICY_SCHEMA = "skill-taxonomy-v2-i3f-ct02-20-policy-r1";
  const I3G_POLICY_SCHEMA = "skill-taxonomy-v2-i3g-ct02-25-policy-r1";
  const CT09_P1C2_EXTENSION_SCHEMA = "skill-taxonomy-v2-ct09-p1c2-extension-r1";
  const EXPECTED_CT09_P1C2_EXTENSION_BLOB = "40cefdbd5fc6975e2a2b35ae41fe93d6b3541483";
  const EXPECTED_CT09_P1C2_SOURCE_BLOB = "ad330dac682d6cb271748c85ef900dcbe7b9b439";
  const ACTIVE_STATUS = "I2_CANARY_ACTIVE";
  const GUARD_STATUS = "I2_CANARY_NO_CAPTURE_GUARD";
  const I3A_ACTIVE_STATUS = "I3A_CT02_ACTIVE";
  const I3A_GUARD_STATUS = "I3A_CT02_NO_FAMILY_GUARD";
  const I3B_ACTIVE_STATUS = "I3B_ACTIVE";
  const I3B_GUARD_STATUS = "I3B_NO_FAMILY_GUARD";
  const I3C_ACTIVE_STATUS = "I3C_ACTIVE";
  const I3C_GUARD_STATUS = "I3C_NO_FAMILY_GUARD";
  const I3D_ACTIVE_STATUS = "I3D_ACTIVE";
  const I3D_GUARD_STATUS = "I3D_NO_FAMILY_GUARD";
  const I3E_ACTIVE_STATUS = "I3E_ACTIVE";
  const I3E_GUARD_STATUS = "I3E_NO_FAMILY_GUARD";
  const I3F_ACTIVE_STATUS = "I3F_ACTIVE";
  const I3F_GUARD_STATUS = "I3F_NO_FAMILY_GUARD";
  const I3G_ACTIVE_STATUS = "I3G_ACTIVE";
  const I3G_GUARD_STATUS = "I3G_NO_FAMILY_GUARD";
  const MAX_RECENT = 500;
  const BUILD = "taxonomy-v2-i3g-ct02-25-20261003";
  const EXPECTED_REGISTRY_BLOB = "16113e910cc451cd69b72c5f2f86f579237bf60f";
  const EXPECTED_CT02_POLICY_BLOB = "30a4ede71d6119ffd612aef8b153f1c7d2a786d2";
  const EXPECTED_CT03_POLICY_BLOB = "46190fb4c3f7402879e0b3803cd851971d8cee51";
  const EXPECTED_CT04_POLICY_BLOB = "f5d85c6fb32e7f5177c41567f453f7df8537b834";
  const EXPECTED_CT05_POLICY_BLOB = "a48b4dd22dfe5150a6784c4e02dc482c875d75f5";
  const EXPECTED_CT06_POLICY_BLOB = "a59ee1b57d25d7083ba273fba77e45fb03b86048";
  const EXPECTED_CT07_POLICY_BLOB = "d2e6637bb0b0ca6815ac2261c35fe260ced097a9";
  const EXPECTED_CT08_POLICY_BLOB = "72dbbe86610894fac9efceed1e030e9ffd340afb";
  const EXPECTED_CT09_POLICY_BLOB = "16a464ed209a6b5059307a86e0a7be5a525f5ffd";
  const EXPECTED_CT10_POLICY_BLOB = "17a1d99498672a49280a2536a560d3d26457b88c";
  const EXPECTED_CT11_POLICY_BLOB = "60760b7f576c35d49a11d38c988d8f131b26893d";
  const EXPECTED_CT12_POLICY_BLOB = "4140c39713e72104b1ae1af0d24db4735769382f";
  const EXPECTED_CT13_POLICY_BLOB = "9eaac507745c5117c76b2a3796f5135263078316";
  const EXPECTED_CT14_POLICY_BLOB = "c6de8d5d1b5665216b2b2cefbacd9bbda95e7475";
  const EXPECTED_CT15_POLICY_BLOB = "50828925659b11a426933d5959d38411bcf87952";
  const EXPECTED_CT16_POLICY_BLOB = "c4922ef12e50e6a0270f493accfacc41687d300b";
  const EXPECTED_CT17_POLICY_BLOB = "ede989cbb5f7824fed34f3b77ec54cffd73c9d60";
  const EXPECTED_CT18_POLICY_BLOB = "9f2a305dc68733c0e7ac619bb0bcc4ce9bb5b6ed";
  const EXPECTED_CT19_POLICY_BLOB = "2180cef5f91f0b8e2d9b550c86df92c33b81de50";
  const EXPECTED_CT20_POLICY_BLOB = "d6205a8b5c1367461d6661f0100f615b245ad146";
  const EXPECTED_CT21_POLICY_BLOB = "4cd3f727a0ae8f55199e6e1ef9528ce77615d734";
  const EXPECTED_CT22_POLICY_BLOB = "0e0cd0c21e18e8135ee84354a73d188ee4569f7a";
  const EXPECTED_CT23_POLICY_BLOB = "cfa4042267312d58fae02033fbfead1614c2f356";
  const EXPECTED_CT24_POLICY_BLOB = "6035dcd4998da6a9282365c3b31257a0100ee626";
  const EXPECTED_CT25_POLICY_BLOB = "bf88c4c8b1cb8aa28b06ad6b8d809808eb1c5c64";
  const EXPECTED_TOPIC_POLICY_BLOBS = Object.freeze({
    CT02: EXPECTED_CT02_POLICY_BLOB,
    CT03: EXPECTED_CT03_POLICY_BLOB,
    CT04: EXPECTED_CT04_POLICY_BLOB,
    CT05: EXPECTED_CT05_POLICY_BLOB,
    CT06: EXPECTED_CT06_POLICY_BLOB,
    CT07: EXPECTED_CT07_POLICY_BLOB,
    CT08: EXPECTED_CT08_POLICY_BLOB,
    CT09: EXPECTED_CT09_POLICY_BLOB,
    CT10: EXPECTED_CT10_POLICY_BLOB,
    CT11: EXPECTED_CT11_POLICY_BLOB,
    CT12: EXPECTED_CT12_POLICY_BLOB,
    CT13: EXPECTED_CT13_POLICY_BLOB,
    CT14: EXPECTED_CT14_POLICY_BLOB,
    CT15: EXPECTED_CT15_POLICY_BLOB,
    CT16: EXPECTED_CT16_POLICY_BLOB,
    CT17: EXPECTED_CT17_POLICY_BLOB,
    CT18: EXPECTED_CT18_POLICY_BLOB,
    CT19: EXPECTED_CT19_POLICY_BLOB,
    CT20: EXPECTED_CT20_POLICY_BLOB,
    CT21: EXPECTED_CT21_POLICY_BLOB,
    CT22: EXPECTED_CT22_POLICY_BLOB,
    CT23: EXPECTED_CT23_POLICY_BLOB,
    CT24: EXPECTED_CT24_POLICY_BLOB,
    CT25: EXPECTED_CT25_POLICY_BLOB
  });

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

  const sourceTopicPolicyBlob = (policy, row) => {
    if (row?.source_topic_policy_blob_override) return row.source_topic_policy_blob_override;
    if (policy?.source_topic_policy?.blob_sha) return policy.source_topic_policy.blob_sha;
    if (Array.isArray(policy?.source_topic_policies)) {
      return policy.source_topic_policies.find((item) => item.topic_id === row.topic_id)?.blob_sha || null;
    }
    return null;
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
    source_topic_policy_blob: sourceTopicPolicyBlob(policy, row),
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

  const isActiveCaptureStatus = (status) =>
    status === ACTIVE_STATUS || status === I3A_ACTIVE_STATUS || status === I3B_ACTIVE_STATUS || status === I3C_ACTIVE_STATUS || status === I3D_ACTIVE_STATUS || status === I3E_ACTIVE_STATUS || status === I3F_ACTIVE_STATUS || status === I3G_ACTIVE_STATUS;

  const isGuardCaptureStatus = (status) =>
    status === GUARD_STATUS || status === I3A_GUARD_STATUS || status === I3B_GUARD_STATUS || status === I3C_GUARD_STATUS || status === I3D_GUARD_STATUS || status === I3E_GUARD_STATUS || status === I3F_GUARD_STATUS || status === I3G_GUARD_STATUS;

  const recordAttemptToStore = (storeLike, row, input, policy, now, eventId) => {
    if (!isActiveCaptureStatus(row.capture_status) || !row.family_id) {
      throw new Error("row_not_capture_eligible");
    }
    const assessment = classifyAttempt(storeLike, row, input);
    const event = makeEvent(row, input, assessment, policy, now, eventId);
    return { assessment, event, store: appendEvent(storeLike, row, event) };
  };

  const policyProfile = (policy) => {
    if (policy?.schema === I2_POLICY_SCHEMA) {
      return {
        schema: I2_POLICY_SCHEMA,
        state: "I2_SHADOW_CANARY_ACTIVE",
        active_status: ACTIVE_STATUS,
        guard_status: GUARD_STATUS,
        topics: ["CT02"],
        rows: 14,
        active_rows: 12,
        guard_rows: 2,
        family_count: 4,
        max_independent_units: 8
      };
    }
    if (policy?.schema === I3A_POLICY_SCHEMA) {
      return {
        schema: I3A_POLICY_SCHEMA,
        state: "I3A_FULL_CT02_SHADOW_ACTIVE",
        active_status: I3A_ACTIVE_STATUS,
        guard_status: I3A_GUARD_STATUS,
        topics: ["CT02"],
        rows: 120,
        active_rows: 103,
        guard_rows: 17,
        family_count: 10,
        max_independent_units: 75
      };
    }
    if (policy?.schema === I3B_POLICY_SCHEMA) {
      return {
        schema: I3B_POLICY_SCHEMA,
        state: "I3B_CT02_CT03_SHADOW_ACTIVE",
        active_status: I3B_ACTIVE_STATUS,
        guard_status: I3B_GUARD_STATUS,
        topics: ["CT02", "CT03"],
        rows: 240,
        active_rows: 221,
        guard_rows: 19,
        family_count: 16,
        max_independent_units: 149
      };
    }
    if (policy?.schema === I3C_POLICY_SCHEMA) {
      return {
        schema: I3C_POLICY_SCHEMA,
        state: "I3C_CT02_CT04_SHADOW_ACTIVE",
        active_status: I3C_ACTIVE_STATUS,
        guard_status: I3C_GUARD_STATUS,
        topics: ["CT02", "CT03", "CT04"],
        rows: 372,
        active_rows: 341,
        guard_rows: 31,
        family_count: 23,
        max_independent_units: 177
      };
    }
    if (policy?.schema === I3D_POLICY_SCHEMA) {
      return {
        schema: I3D_POLICY_SCHEMA,
        state: "I3D_CT02_CT07_SHADOW_ACTIVE",
        active_status: I3D_ACTIVE_STATUS,
        guard_status: I3D_GUARD_STATUS,
        topics: ["CT02", "CT03", "CT04", "CT05", "CT06", "CT07"],
        rows: 732,
        active_rows: 648,
        guard_rows: 84,
        family_count: 35,
        max_independent_units: 240
      };
    }
    if (policy?.schema === I3E_POLICY_SCHEMA) {
      return {
        schema: I3E_POLICY_SCHEMA,
        state: "I3E_CT02_CT12_SHADOW_ACTIVE",
        active_status: I3E_ACTIVE_STATUS,
        guard_status: I3E_GUARD_STATUS,
        topics: ["CT02", "CT03", "CT04", "CT05", "CT06", "CT07", "CT08", "CT09", "CT10", "CT11", "CT12"],
        rows: 1356,
        active_rows: 1272,
        guard_rows: 84,
        family_count: 64,
        max_independent_units: 375
      };
    }
    if (policy?.schema === I3F_POLICY_SCHEMA) {
      return {
        schema: I3F_POLICY_SCHEMA,
        state: "I3F_CT02_CT20_SHADOW_ACTIVE",
        active_status: I3F_ACTIVE_STATUS,
        guard_status: I3F_GUARD_STATUS,
        topics: ["CT02", "CT03", "CT04", "CT05", "CT06", "CT07", "CT08", "CT09", "CT10", "CT11", "CT12", "CT13", "CT14", "CT15", "CT16", "CT17", "CT18", "CT19", "CT20"],
        rows: 2502,
        active_rows: 2408,
        guard_rows: 94,
        family_count: 108,
        max_independent_units: 543
      };
    }
    if (policy?.schema === I3G_POLICY_SCHEMA) {
      return {
        schema: I3G_POLICY_SCHEMA,
        state: "I3G_CT02_CT25_SHADOW_ACTIVE",
        active_status: I3G_ACTIVE_STATUS,
        guard_status: I3G_GUARD_STATUS,
        topics: ["CT02", "CT03", "CT04", "CT05", "CT06", "CT07", "CT08", "CT09", "CT10", "CT11", "CT12", "CT13", "CT14", "CT15", "CT16", "CT17", "CT18", "CT19", "CT20", "CT21", "CT22", "CT23", "CT24", "CT25"],
        rows: 3114,
        active_rows: 2900,
        guard_rows: 214,
        family_count: 127,
        max_independent_units: 650
      };
    }
    return null;
  };

  const validateSourceLocks = (policy, profile) => {
    if (policy?.source_registry?.blob_sha !== EXPECTED_REGISTRY_BLOB) {
      throw new Error("source_lock_drift");
    }
    if (Array.isArray(policy?.source_topic_policies)) {
      const locks = new Map(policy.source_topic_policies.map((item) => [item.topic_id, item.blob_sha]));
      if (locks.size !== profile.topics.length ||
          profile.topics.some((topic) => locks.get(topic) !== EXPECTED_TOPIC_POLICY_BLOBS[topic])) {
        throw new Error("source_lock_drift");
      }
      return;
    }
    if (policy?.source_topic_policy?.blob_sha !== EXPECTED_CT02_POLICY_BLOB) {
      throw new Error("source_lock_drift");
    }
  };

  const validatePolicy = (policy) => {
    const profile = policyProfile(policy);
    if (!plainObject(policy) || !profile || policy.version !== 1) {
      throw new Error("invalid_policy_schema");
    }
    if (policy.state !== profile.state || policy.runtime_enabled !== true ||
        policy.normal_learner_ui_change !== false) {
      throw new Error("invalid_shadow_state");
    }
    validateSourceLocks(policy, profile);
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
    const scopeTopics = Array.isArray(policy?.scope?.topics)
      ? policy.scope.topics
      : (policy?.scope?.topic_id ? [policy.scope.topic_id] : []);
    if (!Array.isArray(policy.rows) || policy.rows.length !== profile.rows ||
        JSON.stringify(scopeTopics) !== JSON.stringify(profile.topics) ||
        policy?.scope?.active_rows !== profile.active_rows ||
        policy?.scope?.no_capture_guard_rows !== profile.guard_rows ||
        policy?.scope?.family_count !== profile.family_count ||
        policy?.scope?.max_independent_units !== profile.max_independent_units) {
      throw new Error("invalid_shadow_scope");
    }

    const ids = new Set();
    const map = new Map();
    const activeFamilies = new Set();
    const activeUnits = new Set();
    let activeCount = 0;
    let guardCount = 0;

    for (const row of policy.rows) {
      if (!row?.question_id || ids.has(row.question_id) ||
          !profile.topics.includes(row.topic_id) || !row.source_file || !row.source_blob ||
          !Array.isArray(row.legacy_skill_tags) || !row.evidence_class) {
        throw new Error("invalid_policy_row");
      }
      ids.add(row.question_id);

      if (row.capture_status === profile.active_status) {
        activeCount += 1;
        if (!row.family_id || !row.diagnostic_skill_id || !row.family_layer ||
            !row.mapping_role || row.policy_disposition !== "FAMILY_LINK_REVIEWED") {
          throw new Error("invalid_active_row");
        }
        activeFamilies.add(row.family_id);
        activeUnits.add(evidenceUnitKey(row));
      } else if (row.capture_status === profile.guard_status) {
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

    if (activeCount !== profile.active_rows || guardCount !== profile.guard_rows ||
        activeFamilies.size !== profile.family_count ||
        activeUnits.size !== profile.max_independent_units) {
      throw new Error("invalid_shadow_runtime_boundary");
    }

    return { policy: Object.freeze(policy), rows: map, profile: Object.freeze(profile) };
  };

  const extendWithCt09P1c2 = (baseState, extension, extensionBlob = EXPECTED_CT09_P1C2_EXTENSION_BLOB) => {
    if (!baseState?.policy || !(baseState.rows instanceof Map) || !baseState.profile) {
      throw new Error("invalid_p1c2_base_state");
    }
    if (!plainObject(extension) ||
        extension.schema !== CT09_P1C2_EXTENSION_SCHEMA ||
        extension.status !== "P1C2_REVIEWED_SHADOW_EXTENSION" ||
        extension.topic_id !== "CT09" ||
        extension.shadow_capture_enabled !== true ||
        extension.learner_mastery_write_enabled !== false ||
        extension.mastery_readiness_credit !== false ||
        extension.backfill_existing_attempts !== false ||
        extension.source_review?.verdict !== "PASS" ||
        extension.source_review?.authorization !== "CLEARED_FOR_CT09_P1C2_INTEGRATION_ONLY" ||
        extension.source_file?.blob_sha !== EXPECTED_CT09_P1C2_SOURCE_BLOB ||
        extension.source_file?.question_count !== 9 ||
        !Array.isArray(extension.rows) || extension.rows.length !== 9 ||
        extensionBlob !== EXPECTED_CT09_P1C2_EXTENSION_BLOB) {
      throw new Error("invalid_ct09_p1c2_extension");
    }

    const rows = new Map(baseState.rows);
    const ids = new Set();
    const clones = new Set();
    for (const rawRow of extension.rows) {
      if (!rawRow?.question_id || ids.has(rawRow.question_id) || rows.has(rawRow.question_id) ||
          rawRow.topic_id !== "CT09" ||
          rawRow.source_file !== extension.source_file.name ||
          rawRow.source_blob !== EXPECTED_CT09_P1C2_SOURCE_BLOB ||
          !Array.isArray(rawRow.legacy_skill_tags) || !rawRow.legacy_skill_tags.length ||
          !rawRow.diagnostic_skill_id ||
          !["SYS-CONCEPT","SYS-SOLVE","SYS-MODEL"].includes(rawRow.family_id) ||
          rawRow.family_layer !== "KNTT-Core" ||
          rawRow.mapping_role !== "ASSESSED_SKILL" ||
          rawRow.policy_disposition !== "FAMILY_LINK_REVIEWED" ||
          !rawRow.evidence_class ||
          !rawRow.clone_family ||
          rawRow.independent_credit_authorized !== false ||
          rawRow.capture_status !== I3G_ACTIVE_STATUS) {
        throw new Error("invalid_ct09_p1c2_row");
      }
      ids.add(rawRow.question_id);
      clones.add(rawRow.clone_family);
      rows.set(rawRow.question_id, Object.freeze({
        ...rawRow,
        source_topic_policy_blob_override: extensionBlob,
        legacy_skill_tags: Object.freeze([...rawRow.legacy_skill_tags])
      }));
    }
    if (ids.size !== 9 || clones.size !== 9) throw new Error("invalid_ct09_p1c2_units");

    return {
      policy: baseState.policy,
      rows,
      profile: baseState.profile,
      extension: Object.freeze({
        schema: extension.schema,
        blob_sha: extensionBlob,
        topic_id: extension.topic_id,
        rows: extension.rows.length,
        clone_families: clones.size
      })
    };
  };

  const api = {
    BUILD, STORE_KEY, STORE_SCHEMA, EVENT_SCHEMA,
    I2_POLICY_SCHEMA, I3A_POLICY_SCHEMA, I3B_POLICY_SCHEMA, I3C_POLICY_SCHEMA, I3D_POLICY_SCHEMA, I3E_POLICY_SCHEMA, I3F_POLICY_SCHEMA, I3G_POLICY_SCHEMA,
    CT09_P1C2_EXTENSION_SCHEMA, EXPECTED_CT09_P1C2_EXTENSION_BLOB, EXPECTED_CT09_P1C2_SOURCE_BLOB,
    ACTIVE_STATUS, GUARD_STATUS, I3A_ACTIVE_STATUS, I3A_GUARD_STATUS,
    I3B_ACTIVE_STATUS, I3B_GUARD_STATUS, I3C_ACTIVE_STATUS, I3C_GUARD_STATUS,
    I3D_ACTIVE_STATUS, I3D_GUARD_STATUS, I3E_ACTIVE_STATUS, I3E_GUARD_STATUS,
    I3F_ACTIVE_STATUS, I3F_GUARD_STATUS, I3G_ACTIVE_STATUS, I3G_GUARD_STATUS, MAX_RECENT,
    emptyStore, normalizedStore, seenQuestionKey, evidenceUnitKey,
    assistanceKind, classifyAttempt, sourceTopicPolicyBlob, makeEvent, appendEvent,
    recordAttemptToStore, validatePolicy, extendWithCt09P1c2
  };

  if (isNode) {
    module.exports = api;
    return;
  }
  if (typeof window === "undefined" || typeof document === "undefined") return;

  let policyState = null;
  let policyError = null;
  let extensionError = null;
  let lastCapture = null;

  const scriptUrl = document.currentScript?.src || "";
  const policyUrl = scriptUrl
    ? new URL("../data/curriculum/taxonomy-v2-runtime/i3g-ct02-25-r1.json", scriptUrl).href
    : new URL("assets/data/curriculum/taxonomy-v2-runtime/i3g-ct02-25-r1.json", document.baseURI).href;
  const ct09P1c2ExtensionUrl = scriptUrl
    ? new URL("../data/curriculum/taxonomy-v2-runtime/ct09-p1c2-extension-r1.json", scriptUrl).href
    : new URL("assets/data/curriculum/taxonomy-v2-runtime/ct09-p1c2-extension-r1.json", document.baseURI).href;

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
      summary.textContent = "QA · Skill Taxonomy v2 I3G CT02–CT25 Shadow";
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
      ct09_p1c2_extension: policyState?.extension || null,
      ct09_p1c2_extension_error: extensionError,
      last_capture: lastCapture
    }, null, 2);
  };

  const ready = fetch(policyUrl, { cache: "no-store" })
    .then((response) => {
      if (!response.ok) throw new Error("policy_http_" + response.status);
      return response.json();
    })
    .then(async (policy) => {
      const baseState = validatePolicy(policy);
      try {
        const extensionResponse = await fetch(ct09P1c2ExtensionUrl, { cache: "no-store" });
        if (!extensionResponse.ok) throw new Error("ct09_p1c2_http_" + extensionResponse.status);
        const extension = await extensionResponse.json();
        extensionError = null;
        policyState = extendWithCt09P1c2(baseState, extension);
      } catch (error) {
        // The additive P1-C2 lane is fail-open. A transient extension failure
        // must never disable the already-approved I3G CT02-CT25 shadow lane.
        extensionError = String(error?.message || error);
        policyState = baseState;
      }
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
        lastCapture = { captured: false, reason: "not_in_i3g_scope", question_id: question?.id || null };
        refreshDebug();
        return lastCapture;
      }
      if (isGuardCaptureStatus(row.capture_status)) {
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
      ct09_p1c2_extension: policyState?.extension || null,
      ct09_p1c2_extension_error: extensionError,
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