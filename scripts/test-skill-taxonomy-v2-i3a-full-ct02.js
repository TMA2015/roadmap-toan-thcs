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
const i3aPath = "docs/assets/data/curriculum/taxonomy-v2-runtime/i3a-full-ct02-r1.json";
const i2Path = "docs/assets/data/curriculum/taxonomy-v2-runtime/i2-canary-ct02-r1.json";
const ct02Path = "docs/assets/data/curriculum/taxonomy-v2-runtime/ct02-r1.json";
const registryPath = "docs/assets/data/curriculum/skill-taxonomy-v2-registry-r1.json";
const g2Path = "docs/assets/data/curriculum/canonical-evidence-runtime-policy-04-07-v1.json";

const policy = json(i3aPath);
const i2Policy = json(i2Path);
const ct02 = json(ct02Path);
const registry = json(registryPath);
const g2 = json(g2Path);
const validated = obs.validatePolicy(policy);
const i2Validated = obs.validatePolicy(i2Policy);

assert.equal(obs.STORE_KEY, "toan-thcs-taxonomy-v2-evidence-v1");
assert.equal(obs.I3A_POLICY_SCHEMA, "skill-taxonomy-v2-i3a-ct02-policy-r1");
assert.equal(policy.state, "I3A_FULL_CT02_SHADOW_ACTIVE");
assert.equal(policy.runtime_enabled, true);
assert.equal(policy.normal_learner_ui_change, false);
assert.equal(policy.production_store.backfill_existing_attempts, false);
assert.equal(policy.production_store.migrate_from, null);
assert.equal(policy.production_store.preserve_existing_i2_events, true);
assert.equal(policy.runtime_rules.default_capture, "NO_CAPTURE");
assert.equal(policy.runtime_rules.legacy_write_first, true);
assert.equal(policy.runtime_rules.fail_open, true);
assert.equal(policy.runtime_rules.family_mastery_threshold, null);
assert.equal(policy.runtime_rules.core_readiness_credit, false);

assert.equal(policy.source_registry.blob_sha, gitBlobSha(read(registryPath)));
assert.equal(policy.source_topic_policy.blob_sha, gitBlobSha(read(ct02Path)));
assert.equal(policy.rows.length, 120);
assert.equal(policy.scope.active_rows, 103);
assert.equal(policy.scope.no_capture_guard_rows, 17);
assert.equal(policy.scope.family_count, 10);
assert.equal(policy.scope.max_independent_units, 75);

const active = policy.rows.filter((r) => r.capture_status === obs.I3A_ACTIVE_STATUS);
const guards = policy.rows.filter((r) => r.capture_status === obs.I3A_GUARD_STATUS);
assert.equal(active.length, 103);
assert.equal(guards.length, 17);
assert.equal(new Set(active.map((r) => r.family_id)).size, 10);
assert.ok(guards.every((r) => r.family_id === null && r.diagnostic_skill_id === null));

const ct02Rows = new Map(ct02.rows.map((r) => [r.question_id, r]));
const policyRows = new Map(policy.rows.map((r) => [r.question_id, r]));
const familyById = new Map(registry.families.map((f) => [f.family_id, f]));
assert.equal(policyRows.size, 120);
assert.deepEqual(
  [...policyRows.keys()].sort(),
  [...ct02Rows.keys()].sort(),
  "I3A policy must cover all 120 CT02 I1 rows exactly once"
);

for (const row of policy.rows) {
  const source = ct02Rows.get(row.question_id);
  assert.ok(source, "I3A row missing from I1 CT02 policy: " + row.question_id);
  for (const key of [
    "topic_id", "source_file", "source_blob", "diagnostic_skill_id", "family_id",
    "family_layer", "mapping_role", "evidence_class", "clone_family", "policy_disposition"
  ]) {
    assert.deepEqual(row[key], source[key], row.question_id + " drift at " + key);
  }
  assert.deepEqual(row.legacy_skill_tags, source.legacy_skill_tags, row.question_id + " legacy tags drift");
  if (row.family_id) {
    assert.equal(row.capture_status, obs.I3A_ACTIVE_STATUS);
    const family = familyById.get(row.family_id);
    assert.ok(family, "unknown family " + row.family_id);
    assert.equal(row.family_layer, family.layer, row.question_id + " family layer drift");
  } else {
    assert.equal(row.capture_status, obs.I3A_GUARD_STATUS);
    assert.equal(row.policy_disposition, "FORMATIVE_ONLY_NO_FAMILY");
  }
}

// A question that was outside the 12-row I2 canary is now active.
const q019 = validated.rows.get("NUM02V1_019");
assert.equal(q019.capture_status, obs.I3A_ACTIVE_STATUS);
assert.equal(q019.family_id, "NUM-ORDER");
assert.equal(i2Validated.rows.has("NUM02V1_019"), false);

// All ten CT02 families are represented.
assert.deepEqual(
  new Set(active.map((r) => r.family_id)),
  new Set([
    "NUM-SETS", "NUM-INTEGER-OPS", "NUM-ABS", "NUM-ORDER", "NUM-POWER",
    "NUM-DIV-PRIME", "NUM-GCD-LCM", "NUM-FRACTION-FORM",
    "NUM-FRACTION-OPS", "NUM-PERCENT"
  ])
);

// Store continuity: an existing I2 event/de-dup unit survives I3A capture.
const i2q001 = i2Validated.rows.get("NUM02V1_001");
let store = obs.emptyStore();
let rec = obs.recordAttemptToStore(store, i2q001, {
  correct: true, hintsUsed: 0, fullSolutionViewed: false, selectedIndex: 0, practiceMode: "normal"
}, i2Policy, "2026-10-02T13:00:00Z", "i2-existing");
store = rec.store;
assert.equal(store.recent_events.length, 1);
assert.equal(Object.keys(store.independent_units).length, 1);

rec = obs.recordAttemptToStore(store, q019, {
  correct: true, hintsUsed: 0, fullSolutionViewed: false, selectedIndex: 0, practiceMode: "normal"
}, policy, "2026-10-02T16:00:00Z", "i3a-new");
store = rec.store;
assert.equal(store.recent_events.length, 2);
assert.equal(store.recent_events[0].event_id, "i2-existing");
assert.equal(store.recent_events[1].capture_version, "taxonomy-v2-i3a-full-ct02-v1");
assert.equal(store.recent_events[1].independent_evidence, true);
assert.equal(store.recent_events[1].family_id, "NUM-ORDER");

// I2 de-dup still applies under I3A.
const q001 = validated.rows.get("NUM02V1_001");
const repeatAcrossPhases = obs.classifyAttempt(store, q001, { hintsUsed: 0, fullSolutionViewed: false });
assert.equal(repeatAcrossPhases.independent_evidence, false);
assert.equal(repeatAcrossPhases.independent_reason, "repeat_question");

// A newly opened family outside I2 captures normally.
const q021 = validated.rows.get("NUM02V1_021");
rec = obs.recordAttemptToStore(store, q021, {
  correct: false, hintsUsed: 0, fullSolutionViewed: false, selectedIndex: 1, practiceMode: "normal"
}, policy, "2026-10-02T16:01:00Z", "i3a-power");
store = rec.store;
assert.equal(rec.event.family_id, "NUM-POWER");
assert.equal(rec.event.correct, false);
assert.equal(rec.event.independent_evidence, true);

// NO_FAMILY guards remain impossible to write.
for (const id of ["NUM02V1_059", "NUM02V1_103", "NUM02V1_119"]) {
  const guard = validated.rows.get(id);
  assert.equal(guard.capture_status, obs.I3A_GUARD_STATUS);
  assert.throws(() => obs.recordAttemptToStore(store, guard, {
    correct: true, hintsUsed: 0, fullSolutionViewed: false
  }, policy, "2026-10-02T16:02:00Z", "guard-" + id), /row_not_capture_eligible/);
}

// Independent-unit cardinality matches the reviewed clone structure.
assert.equal(
  new Set(active.map((r) => obs.evidenceUnitKey(r))).size,
  75
);

// Existing G2 boundary remains exact and separate.
assert.equal(g2.production_store.key, "toan-thcs-canonical-evidence-v2");
assert.equal(g2.scope.rows, 101);
assert.equal(g2.scope.canonical_skills, 7);
assert.equal(g2.runtime_rules.mastery_threshold, null);
assert.equal(g2.runtime_rules.core_readiness_credit, false);
assert.notEqual(g2.production_store.key, obs.STORE_KEY);

// Practice integration remains legacy -> G2 -> Taxonomy v2.
const practice = read("docs/assets/javascripts/practice-engine-v2.js").toString("utf8");
const legacyAt = practice.indexOf("RoadmapLearnerEvidence.recordAnswer");
const g2At = practice.indexOf("RoadmapCanonicalEvidenceObserver?.captureAttempt");
const tv2At = practice.indexOf("RoadmapTaxonomyV2Observer?.captureAttempt");
assert.ok(legacyAt >= 0 && g2At > legacyAt && tv2At > g2At, "shadow capture order changed");

// Runtime observer loads only I3A bounded policy; it does not load I1 index/full policy.
const observerSource = read("docs/assets/javascripts/taxonomy-v2-evidence-observer-v1.js").toString("utf8");
assert.ok(observerSource.includes("taxonomy-v2-runtime/i3a-full-ct02-r1.json"));
assert.ok(!observerSource.includes('new URL("../data/curriculum/taxonomy-v2-runtime/index-r1.json"'));
assert.ok(!observerSource.includes('new URL("../data/curriculum/taxonomy-v2-runtime/ct02-r1.json"'));

console.log("PASS Taxonomy v2 I3A full CT02 policy: 103 active + 17 NO_FAMILY guards.");
console.log("PASS 10 families / max 75 independent units / exact 120-row CT02 coverage.");
console.log("PASS I2 store continuity and cross-phase de-dup semantics.");
console.log("PASS G2 isolation; mastery, Readiness and backfill remain off.");
