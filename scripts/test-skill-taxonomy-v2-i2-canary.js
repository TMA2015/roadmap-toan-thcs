"use strict";

const assert = require("node:assert/strict");
const crypto = require("node:crypto");
const fs = require("node:fs");
const path = require("node:path");

const ROOT = path.resolve(__dirname, "..");
const read = (p) => fs.readFileSync(path.join(ROOT, p));
const json = (p) => JSON.parse(read(p).toString("utf8"));
const gitBlobSha = (buffer) => crypto.createHash("sha1")
  .update(Buffer.concat([Buffer.from("blob " + buffer.length + "\0"), buffer]))
  .digest("hex");

const obs = require("../docs/assets/javascripts/taxonomy-v2-evidence-observer-v1.js");
const policyPath = "docs/assets/data/curriculum/taxonomy-v2-runtime/i2-canary-ct02-r1.json";
const policy = json(policyPath);
const validated = obs.validatePolicy(policy);
const ct02Path = "docs/assets/data/curriculum/taxonomy-v2-runtime/ct02-r1.json";
const registryPath = "docs/assets/data/curriculum/skill-taxonomy-v2-registry-r1.json";
const g2Path = "docs/assets/data/curriculum/canonical-evidence-runtime-policy-04-07-v1.json";
const ct02 = json(ct02Path);
const registry = json(registryPath);
const g2 = json(g2Path);

assert.equal(obs.STORE_KEY, "toan-thcs-taxonomy-v2-evidence-v1");
assert.equal(obs.STORE_SCHEMA, "taxonomy-v2-evidence-store-v1");
assert.equal(obs.EVENT_SCHEMA, "taxonomy-v2-evidence-event-v1");
assert.equal(policy.state, "I2_SHADOW_CANARY_ACTIVE");
assert.equal(policy.runtime_enabled, true);
assert.equal(policy.normal_learner_ui_change, false);
assert.equal(policy.production_store.backfill_existing_attempts, false);
assert.equal(policy.production_store.migrate_from, null);
assert.equal(policy.runtime_rules.default_capture, "NO_CAPTURE");
assert.equal(policy.runtime_rules.legacy_write_first, true);
assert.equal(policy.runtime_rules.fail_open, true);
assert.equal(policy.runtime_rules.family_mastery_threshold, null);
assert.equal(policy.runtime_rules.core_readiness_credit, false);

assert.equal(policy.source_registry.blob_sha, gitBlobSha(read(registryPath)));
assert.equal(policy.source_topic_policy.blob_sha, gitBlobSha(read(ct02Path)));
assert.equal(policy.rows.length, 14);
assert.equal(policy.scope.active_rows, 12);
assert.equal(policy.scope.no_capture_guard_rows, 2);
assert.equal(policy.scope.family_count, 4);
assert.equal(policy.scope.max_independent_units, 8);

const active = policy.rows.filter((r) => r.capture_status === obs.ACTIVE_STATUS);
const guards = policy.rows.filter((r) => r.capture_status === obs.GUARD_STATUS);
assert.equal(active.length, 12);
assert.equal(guards.length, 2);
assert.deepEqual(new Set(active.map((r) => r.family_id)),
  new Set(["NUM-SETS", "NUM-INTEGER-OPS", "NUM-ABS", "NUM-ORDER"]));
assert.ok(guards.every((r) => r.family_id === null && r.diagnostic_skill_id === null));

const ct02Rows = new Map(ct02.rows.map((r) => [r.question_id, r]));
const familyById = new Map(registry.families.map((f) => [f.family_id, f]));
const bankCache = new Map();

for (const row of policy.rows) {
  const source = ct02Rows.get(row.question_id);
  assert.ok(source, "canary row missing from I1 CT02 policy: " + row.question_id);
  for (const key of [
    "topic_id", "source_file", "source_blob", "diagnostic_skill_id", "family_id",
    "family_layer", "mapping_role", "evidence_class", "clone_family", "policy_disposition"
  ]) {
    assert.deepEqual(row[key], source[key], row.question_id + " drift at " + key);
  }
  assert.deepEqual(row.legacy_skill_tags, source.legacy_skill_tags, row.question_id + " legacy tags drift");

  if (!bankCache.has(row.source_file)) {
    const bankPath = "docs/assets/data/practice/" + row.source_file;
    assert.equal(gitBlobSha(read(bankPath)), row.source_blob, row.source_file + " bank blob drift");
    bankCache.set(row.source_file, json(bankPath).questions);
  }
  const q = bankCache.get(row.source_file).find((x) => x.id === row.question_id);
  assert.ok(q, "missing bank question " + row.question_id);
  assert.deepEqual(q.tags?.skill || [], row.legacy_skill_tags, row.question_id + " source tag drift");

  if (row.family_id) {
    const family = familyById.get(row.family_id);
    assert.ok(family, "unknown family " + row.family_id);
    assert.equal(row.family_layer, family.layer, row.question_id + " family layer drift");
  }
}

const q001 = validated.rows.get("NUM02V1_001");
const q002 = validated.rows.get("NUM02V1_002");
const q004 = validated.rows.get("NUM02V1_004");
const q005 = validated.rows.get("NUM02V1_005");
const q006 = validated.rows.get("NUM02V1_006");
const guard059 = validated.rows.get("NUM02V1_059");

assert.equal(q001.clone_family, q002.clone_family);
assert.equal(q001.clone_family, q005.clone_family);
assert.equal(q004.clone_family, null);
assert.equal(guard059.capture_status, obs.GUARD_STATUS);

// Assisted first exposure: stored, but not independent.
let store = obs.emptyStore();
let rec = obs.recordAttemptToStore(store, q001, {
  correct: true, hintsUsed: 1, fullSolutionViewed: false, selectedIndex: 0, practiceMode: "normal"
}, policy, "2026-10-02T14:00:00Z", "tv2-assisted");
store = rec.store;
assert.equal(rec.event.assisted, true);
assert.equal(rec.event.independent_evidence, false);
assert.equal(rec.event.independent_reason, "assisted");
assert.equal(rec.event.family_id, "NUM-SETS");
assert.equal(Object.keys(store.independent_units).length, 0);

// Unseen sibling in same clone may establish the unit.
rec = obs.recordAttemptToStore(store, q002, {
  correct: true, hintsUsed: 0, fullSolutionViewed: false, selectedIndex: 0, practiceMode: "normal"
}, policy, "2026-10-02T14:01:00Z", "tv2-transfer");
store = rec.store;
assert.equal(rec.event.independent_evidence, true);
assert.equal(rec.event.independent_reason, "first_unseen_unit");
assert.equal(Object.keys(store.independent_units).length, 1);

// Another sibling is clone repeat.
rec = obs.recordAttemptToStore(store, q005, {
  correct: true, hintsUsed: 0, fullSolutionViewed: false, selectedIndex: 0, practiceMode: "normal"
}, policy, "2026-10-02T14:02:00Z", "tv2-clone");
store = rec.store;
assert.equal(rec.event.independent_evidence, false);
assert.equal(rec.event.independent_reason, "clone_family_repeat");

// Standalone row is a separate independent unit in the same family.
rec = obs.recordAttemptToStore(store, q004, {
  correct: true, hintsUsed: 0, fullSolutionViewed: false, selectedIndex: 0, practiceMode: "normal"
}, policy, "2026-10-02T14:03:00Z", "tv2-standalone");
store = rec.store;
assert.equal(rec.event.independent_evidence, true);
assert.notEqual(obs.evidenceUnitKey(q004), obs.evidenceUnitKey(q001));

// Negative first unassisted evidence remains independent.
rec = obs.recordAttemptToStore(store, q006, {
  correct: false, hintsUsed: 0, fullSolutionViewed: false, selectedIndex: 1, practiceMode: "normal"
}, policy, "2026-10-02T14:04:00Z", "tv2-negative");
store = rec.store;
assert.equal(rec.event.correct, false);
assert.equal(rec.event.independent_evidence, true);

// Exact repeat never becomes independent again.
const repeat = obs.classifyAttempt(store, q006, { hintsUsed: 0, fullSolutionViewed: false });
assert.equal(repeat.independent_evidence, false);
assert.equal(repeat.independent_reason, "repeat_question");

// NO_FAMILY guard cannot be passed to the writer.
assert.throws(() => obs.recordAttemptToStore(store, guard059, {
  correct: true, hintsUsed: 0, fullSolutionViewed: false
}, policy, "2026-10-02T14:05:00Z", "tv2-guard"), /row_not_capture_eligible/);

// Event provenance is family-first but keeps diagnostic/source locks.
const last = store.recent_events.at(-1);
assert.equal(last.schema, "taxonomy-v2-evidence-event-v1");
assert.equal(last.family_id, "NUM-INTEGER-OPS");
assert.equal(last.diagnostic_skill_id, "so-nguyen-phep-tinh");
assert.equal(last.family_layer, "KNTT-Core");
assert.equal(last.source_registry_blob, policy.source_registry.blob_sha);
assert.equal(last.source_topic_policy_blob, policy.source_topic_policy.blob_sha);

// Retention: recent event trimming must not erase de-dup indexes.
store = obs.emptyStore();
for (let i = 0; i < 620; i += 1) {
  const row = {
    question_id: "SYNTH_" + i,
    topic_id: "CT02",
    diagnostic_skill_id: "synth-diagnostic",
    family_id: "SYNTH-FAMILY",
    family_layer: "KNTT-Core",
    mapping_role: "ASSESSED_SKILL",
    evidence_class: "MCQ_FINAL_ANSWER_ONLY",
    clone_family: null,
    source_file: "synthetic.json",
    source_blob: "synthetic",
    legacy_skill_tags: ["synth"],
    policy_disposition: "FAMILY_LINK_REVIEWED",
    capture_status: obs.ACTIVE_STATUS
  };
  const result = obs.recordAttemptToStore(store, row, {
    correct: i % 2 === 0, hintsUsed: 0, fullSolutionViewed: false, practiceMode: "normal"
  }, policy, "2026-10-02T15:00:00Z", "stress-" + i);
  store = result.store;
}
assert.equal(store.recent_events.length, 500);
assert.equal(Object.keys(store.seen_questions).length, 620);
assert.equal(Object.keys(store.independent_units).length, 620);
assert.ok(Buffer.byteLength(JSON.stringify(store), "utf8") < 4 * 1024 * 1024);

// Existing G2 boundary remains exact and separate.
assert.equal(g2.production_store.key, "toan-thcs-canonical-evidence-v2");
assert.equal(g2.scope.rows, 101);
assert.equal(g2.scope.canonical_skills, 7);
assert.equal(g2.runtime_rules.mastery_threshold, null);
assert.equal(g2.runtime_rules.core_readiness_credit, false);
assert.notEqual(g2.production_store.key, obs.STORE_KEY);

// Practice integration must keep both shadow lanes after the legacy write.
const practice = read("docs/assets/javascripts/practice-engine-v2.js").toString("utf8");
const legacyAt = practice.indexOf("RoadmapLearnerEvidence.recordAnswer");
const g2At = practice.indexOf("RoadmapCanonicalEvidenceObserver?.captureAttempt");
const tv2At = practice.indexOf("RoadmapTaxonomyV2Observer?.captureAttempt");
assert.ok(legacyAt >= 0 && g2At > legacyAt && tv2At > g2At, "shadow capture order changed");

console.log("PASS Taxonomy v2 I2 policy: 12 active + 2 NO_FAMILY guards / 4 families / max 8 units.");
console.log("PASS I2 assistance, clone, repeat and negative-evidence semantics.");
console.log("PASS source locks, I1 reconciliation, legacy-first order and G2 isolation.");
console.log("PASS Taxonomy v2 store remains shadow-only with no mastery or Readiness credit.");
