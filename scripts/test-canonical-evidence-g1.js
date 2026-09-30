"use strict";

const assert = require("node:assert/strict");
const crypto = require("node:crypto");
const fs = require("node:fs");
const path = require("node:path");

const ROOT = path.resolve(__dirname, "..");
const read = (file) => fs.readFileSync(path.join(ROOT, file));
const json = (file) => JSON.parse(read(file).toString("utf8"));
const gitBlobSha = (buffer) => crypto.createHash("sha1")
  .update(Buffer.concat([Buffer.from("blob " + buffer.length + "\0"), buffer]))
  .digest("hex");

const obs = require("../docs/assets/javascripts/canonical-evidence-observer-v2.js");
const policyPath = "docs/assets/data/curriculum/canonical-evidence-runtime-policy-04-07-v1.json";
const policy = json(policyPath);
const validated = obs.validatePolicy(policy);

assert.equal(obs.STORE_KEY, "toan-thcs-canonical-evidence-v2");
assert.equal(obs.BETA_V1_KEY, "toan-thcs-canonical-evidence-v1");
assert.equal(policy.rows.length, 101);
assert.equal(new Set(policy.rows.map((r) => r.question_id)).size, 101);
assert.equal(new Set(policy.rows.map((r) => r.canonical_skill_id)).size, 7);
assert.equal(new Set(policy.rows.map(obs.evidenceUnitKey)).size, 23);
assert.equal(policy.runtime_rules.normal_learner_ui_change, false);
assert.equal(policy.runtime_rules.mastery_threshold, null);
assert.equal(policy.runtime_rules.core_readiness_credit, false);
assert.equal(policy.runtime_rules.auto_retry_backfill, false);

const v4Config = json("docs/assets/data/curriculum/canonical-evidence-beta-v4-config-v1.json");
const v5Config = json("docs/assets/data/curriculum/canonical-evidence-beta-v5-config-v1.json");
const accepted = new Set([...v4Config.selected_item_ids, ...v5Config.selected_item_ids]);
assert.equal(accepted.size, 27);
const g1Rows = policy.rows.filter((r) => r.capture_status === "G1_CANARY_ACTIVE");
assert.equal(g1Rows.length, 27);
assert.deepEqual(new Set(g1Rows.map((r) => r.question_id)), accepted);
assert.equal(policy.rows.filter((r) => r.capture_status === "G2_PROVEN_SKILLS_ACTIVE").length, 74);

const files = [...new Set(policy.rows.map((r) => r.source_file))];
const banks = {};
for (const file of files) {
  const rows = policy.rows.filter((r) => r.source_file === file);
  const full = "docs/assets/data/practice/" + file;
  const sha = gitBlobSha(read(full));
  for (const row of rows) assert.equal(sha, row.source_blob, file + " source blob drift");
  banks[file] = json(full).questions;
}
for (const row of policy.rows) {
  const q = banks[row.source_file].find((item) => item.id === row.question_id);
  assert.ok(q, "missing source question " + row.question_id);
  assert.deepEqual(q.tags?.skill || [], row.legacy_skill_tags, row.question_id + " legacy tags drift");
  assert.ok(["G1_CANARY_ACTIVE", "G2_PROVEN_SKILLS_ACTIVE"].includes(row.capture_status));
}

// Negative first-unassisted evidence stays independent.
let store = obs.emptyStore();
const q089 = validated.rows.get("ALG04V2_089");
let a = obs.classifyAttempt(store, q089, { hintsUsed: 0, fullSolutionViewed: false });
assert.equal(a.independent_evidence, true);
let rec = obs.recordAttemptToStore(store, q089, {
  correct: false, hintsUsed: 0, fullSolutionViewed: false, selectedIndex: 0, practiceMode: "normal"
}, policy, "2026-09-30T10:00:00Z", "evt-neg");
store = rec.store;
assert.equal(rec.event.correct, false);
assert.equal(rec.event.independent_evidence, true);
assert.ok(store.independent_units[obs.evidenceUnitKey(q089)]);

// Same question never independent again.
a = obs.classifyAttempt(store, q089, { hintsUsed: 0, fullSolutionViewed: false });
assert.equal(a.independent_evidence, false);
assert.equal(a.independent_reason, "repeat_question");

// Assisted first exposure blocks exact question but not unseen sibling transfer.
store = obs.emptyStore();
const q013 = validated.rows.get("ALG04V2_013");
const q014 = validated.rows.get("ALG04V2_014");
rec = obs.recordAttemptToStore(store, q013, {
  correct: true, hintsUsed: 1, fullSolutionViewed: false, selectedIndex: 0, practiceMode: "normal"
}, policy, "2026-09-30T10:01:00Z", "evt-assisted");
store = rec.store;
assert.equal(rec.event.independent_evidence, false);
assert.equal(rec.event.independent_reason, "assisted");
assert.ok(store.seen_questions[obs.seenQuestionKey(q013)]);
assert.equal(store.independent_units[obs.evidenceUnitKey(q013)], undefined);

a = obs.classifyAttempt(store, q014, { hintsUsed: 0, fullSolutionViewed: false });
assert.equal(a.independent_evidence, true, "unseen sibling may become first independent unit");
rec = obs.recordAttemptToStore(store, q014, {
  correct: true, hintsUsed: 0, fullSolutionViewed: false, selectedIndex: 0, practiceMode: "normal"
}, policy, "2026-09-30T10:02:00Z", "evt-transfer");
store = rec.store;
assert.equal(rec.event.independent_evidence, true);

// Once unit is independently seen, sibling repeats are non-independent.
store = obs.emptyStore();
rec = obs.recordAttemptToStore(store, q013, {
  correct: true, hintsUsed: 0, fullSolutionViewed: false, selectedIndex: 0, practiceMode: "normal"
}, policy, "2026-09-30T10:03:00Z", "evt-unit");
store = rec.store;
a = obs.classifyAttempt(store, q014, { hintsUsed: 0, fullSolutionViewed: false });
assert.equal(a.independent_evidence, false);
assert.equal(a.independent_reason, "clone_family_repeat");

// Shared skill across topics must not cross-topic de-dup.
store = obs.emptyStore();
const q009 = validated.rows.get("RAT07V1_009");
rec = obs.recordAttemptToStore(store, q009, {
  correct: true, hintsUsed: 0, fullSolutionViewed: false, selectedIndex: 0, practiceMode: "normal"
}, policy, "2026-09-30T10:04:00Z", "evt-cd07");
store = rec.store;
a = obs.classifyAttempt(store, q089, { hintsUsed: 0, fullSolutionViewed: false });
assert.equal(q009.canonical_skill_id, q089.canonical_skill_id);
assert.notEqual(q009.normalized_topic_key, q089.normalized_topic_key);
assert.equal(a.independent_evidence, true);

// Legacy tag order must never select canonical primary.
const q120 = validated.rows.get("ID05V1_120");
assert.deepEqual(q120.legacy_skill_tags, ["phan-tich-hdt", "hieu-hai-binh-phuong"]);
assert.equal(q120.canonical_skill_id, "hieu-hai-binh-phuong");

// Retention stress: trimming recent_events must not erase de-dup indexes.
store = obs.emptyStore();
for (let i = 0; i < 1105; i += 1) {
  const row = {
    question_id: "SYNTH_" + i,
    normalized_topic_key: "synthetic-topic",
    canonical_skill_id: "synthetic-skill",
    evidence_class: "MCQ_FINAL_OUTPUT_ONLY",
    clone_family: null,
    supporting_skills: [],
    source_file: "synthetic.json",
    source_blob: "synthetic",
    phase_d_overlay_blob: "synthetic"
  };
  const assessment = obs.classifyAttempt(store, row, { hintsUsed: 0, fullSolutionViewed: false });
  const event = obs.makeEvent(row, { correct: i % 2 === 0, practiceMode: "normal" },
    assessment, { capture_version: "stress" }, "2026-09-30T11:00:00Z", "stress-" + i);
  store = obs.appendEvent(store, row, event);
}
assert.equal(store.recent_events.length, 1000);
assert.equal(Object.keys(store.seen_questions).length, 1105);
assert.equal(Object.keys(store.independent_units).length, 1105);
assert.ok(store.seen_questions["synthetic-topic|q:SYNTH_0"]);
assert.ok(store.independent_units["synthetic-skill|synthetic-topic|q:SYNTH_0"]);
const bytes = Buffer.byteLength(JSON.stringify(store), "utf8");
assert.ok(bytes < 4 * 1024 * 1024, "synthetic v2 store exceeds 4 MiB: " + bytes);

console.log("PASS G1 regression subset: 27 accepted rows preserved inside G2 101-row policy.");
console.log("PASS assistance, negative evidence, repeat, clone and cross-topic semantics.");
console.log("PASS retention stress: 1000 recent events retained; 1105 de-dup indexes preserved.");
console.log("PASS synthetic store size bytes:", bytes);
