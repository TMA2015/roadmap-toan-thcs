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

const i3cPath = "docs/assets/data/curriculum/taxonomy-v2-runtime/i3c-ct02-04-r1.json";
const i3bPath = "docs/assets/data/curriculum/taxonomy-v2-runtime/i3b-ct02-03-r1.json";
const ct02Path = "docs/assets/data/curriculum/taxonomy-v2-runtime/ct02-r1.json";
const ct03Path = "docs/assets/data/curriculum/taxonomy-v2-runtime/ct03-r1.json";
const ct04Path = "docs/assets/data/curriculum/taxonomy-v2-runtime/ct04-r1.json";
const registryPath = "docs/assets/data/curriculum/skill-taxonomy-v2-registry-r1.json";
const g2Path = "docs/assets/data/curriculum/canonical-evidence-runtime-policy-04-07-v1.json";
const ownerReceiptPath = "review-packets/skill-taxonomy/implementation/I3B_CT02_03_SHADOW_OWNER_QA_PASS.md";

const policy = json(i3cPath);
const i3bPolicy = json(i3bPath);
const ct02 = json(ct02Path);
const ct03 = json(ct03Path);
const ct04 = json(ct04Path);
const registry = json(registryPath);
const g2 = json(g2Path);

const validated = obs.validatePolicy(policy);
const i3bValidated = obs.validatePolicy(i3bPolicy);

assert.equal(obs.I3C_POLICY_SCHEMA, "skill-taxonomy-v2-i3c-ct02-04-policy-r1");
assert.equal(obs.I3C_ACTIVE_STATUS, "I3C_ACTIVE");
assert.equal(obs.I3C_GUARD_STATUS, "I3C_NO_FAMILY_GUARD");
assert.equal(policy.state, "I3C_CT02_CT04_SHADOW_ACTIVE");
assert.equal(policy.capture_version, "taxonomy-v2-i3c-ct02-04-v1");
assert.equal(policy.runtime_enabled, true);
assert.equal(policy.normal_learner_ui_change, false);

assert.equal(policy.production_store.key, "toan-thcs-taxonomy-v2-evidence-v1");
assert.equal(policy.production_store.migrate_from, null);
assert.equal(policy.production_store.backfill_existing_attempts, false);
assert.equal(policy.production_store.preserve_existing_events, true);
assert.equal(policy.runtime_rules.default_capture, "NO_CAPTURE");
assert.equal(policy.runtime_rules.legacy_write_first, true);
assert.equal(policy.runtime_rules.fail_open, true);
assert.equal(policy.runtime_rules.family_mastery_threshold, null);
assert.equal(policy.runtime_rules.core_readiness_credit, false);

assert.equal(policy.prior_phase.phase, "I3B");
assert.equal(policy.prior_phase.owner_qa_receipt, ownerReceiptPath);
assert.equal(policy.prior_phase.owner_qa_receipt_blob, gitBlobSha(read(ownerReceiptPath)));
assert.equal(policy.prior_phase.store_continuity, true);

assert.equal(policy.source_registry.blob_sha, gitBlobSha(read(registryPath)));
assert.deepEqual(policy.source_topic_policies, [
  { topic_id: "CT02", path: ct02Path, blob_sha: gitBlobSha(read(ct02Path)) },
  { topic_id: "CT03", path: ct03Path, blob_sha: gitBlobSha(read(ct03Path)) },
  { topic_id: "CT04", path: ct04Path, blob_sha: gitBlobSha(read(ct04Path)) }
]);

assert.deepEqual(policy.scope.topics, ["CT02", "CT03", "CT04"]);
assert.equal(policy.scope.total_rows, 372);
assert.equal(policy.scope.active_rows, 341);
assert.equal(policy.scope.no_capture_guard_rows, 31);
assert.equal(policy.scope.family_count, 23);
assert.equal(policy.scope.max_independent_units, 177);
assert.deepEqual(policy.scope.per_topic, {
  CT02: { total_rows: 120, active_rows: 103, no_capture_guard_rows: 17 },
  CT03: { total_rows: 120, active_rows: 118, no_capture_guard_rows: 2 },
  CT04: { total_rows: 132, active_rows: 120, no_capture_guard_rows: 12 }
});

const active = policy.rows.filter((r) => r.capture_status === obs.I3C_ACTIVE_STATUS);
const guards = policy.rows.filter((r) => r.capture_status === obs.I3C_GUARD_STATUS);
assert.equal(active.length, 341);
assert.equal(guards.length, 31);
assert.equal(new Set(active.map((r) => r.family_id)).size, 23);
assert.equal(new Set(active.map((r) => obs.evidenceUnitKey(r))).size, 177);
assert.ok(guards.every((r) => r.family_id === null && r.diagnostic_skill_id === null));

const sourceRows = new Map([...ct02.rows, ...ct03.rows, ...ct04.rows].map((r) => [r.question_id, r]));
assert.equal(sourceRows.size, 372);
assert.equal(validated.rows.size, 372);
assert.deepEqual([...validated.rows.keys()].sort(), [...sourceRows.keys()].sort());

const familyById = new Map(registry.families.map((f) => [f.family_id, f]));
for (const row of policy.rows) {
  const source = sourceRows.get(row.question_id);
  assert.ok(source, "I3C row missing from I1 source policy: " + row.question_id);
  for (const key of [
    "topic_id", "source_file", "source_blob", "diagnostic_skill_id", "family_id",
    "family_layer", "mapping_role", "evidence_class", "clone_family", "policy_disposition"
  ]) {
    assert.deepEqual(row[key], source[key], row.question_id + " drift at " + key);
  }
  assert.deepEqual(row.legacy_skill_tags, source.legacy_skill_tags, row.question_id + " legacy tags drift");
  if (row.family_id) {
    assert.equal(row.capture_status, obs.I3C_ACTIVE_STATUS);
    assert.equal(row.family_layer, familyById.get(row.family_id)?.layer, row.question_id + " family layer drift");
  } else {
    assert.equal(row.capture_status, obs.I3C_GUARD_STATUS);
    assert.equal(row.policy_disposition, "FORMATIVE_ONLY_NO_FAMILY");
  }
}

const ct04Families = new Set(policy.rows.filter((r) => r.topic_id === "CT04" && r.family_id).map((r) => r.family_id));
assert.deepEqual(ct04Families, new Set([
  "ALG-STRUCTURE",
  "ALG-SIMPLIFY-ADD-SUB",
  "ALG-MULTIPLY",
  "ALG-EVALUATE",
  "RATEX-DOMAIN",
  "ALG-MODEL-EXPR",
  "ALG-DIV-MONOMIAL"
]));
assert.equal(policy.rows.filter((r) => r.topic_id === "CT04" && !r.family_id).length, 12);
assert.ok(policy.rows.filter((r) => r.topic_id === "CT04" && !r.family_id)
  .every((r) => /^ALG04V2_(099|10[0-9]|110)$/.test(r.question_id)));

// Store continuity: an accepted I3B CT03 event survives the first I3C CT04 append.
const oldCt03 = i3bValidated.rows.get("RAT03V1_088");
let store = obs.emptyStore();
let rec = obs.recordAttemptToStore(store, oldCt03, {
  correct: true, hintsUsed: 0, fullSolutionViewed: false, selectedIndex: 0, practiceMode: "normal"
}, i3bPolicy, "2026-10-02T16:00:00Z", "i3b-existing");
store = rec.store;
assert.equal(rec.event.family_id, "RATIO-DISTINGUISH");

const ct04Domain = validated.rows.get("ALG04V2_089");
rec = obs.recordAttemptToStore(store, ct04Domain, {
  correct: true, hintsUsed: 0, fullSolutionViewed: false, selectedIndex: 0, practiceMode: "normal"
}, policy, "2026-10-02T16:10:00Z", "i3c-ct04");
store = rec.store;
assert.equal(store.recent_events[0].event_id, "i3b-existing");
assert.equal(store.recent_events[1].event_id, "i3c-ct04");
assert.equal(rec.event.family_id, "RATEX-DOMAIN");
assert.equal(rec.event.topic_id, "CT04");
assert.equal(rec.event.source_topic_policy_blob, gitBlobSha(read(ct04Path)));
assert.equal(rec.event.independent_evidence, true);

// Representative CT04 negative first-unassisted event is valid independent evidence.
const ct04Structure = validated.rows.get("ALG04V2_001");
rec = obs.recordAttemptToStore(store, ct04Structure, {
  correct: false, hintsUsed: 0, fullSolutionViewed: false, selectedIndex: 1, practiceMode: "normal"
}, policy, "2026-10-02T16:11:00Z", "i3c-negative");
store = rec.store;
assert.equal(rec.event.family_id, "ALG-STRUCTURE");
assert.equal(rec.event.correct, false);
assert.equal(rec.event.independent_evidence, true);

// CT04 formative rows stay no-write guards.
for (const id of ["ALG04V2_099", "ALG04V2_110"]) {
  const guard = validated.rows.get(id);
  assert.equal(guard.capture_status, obs.I3C_GUARD_STATUS);
  assert.throws(() => obs.recordAttemptToStore(store, guard, {
    correct: true, hintsUsed: 0, fullSolutionViewed: false
  }, policy, "2026-10-02T16:12:00Z", "guard-" + id), /row_not_capture_eligible/);
}

// CT05+ remains outside this controlled phase.
assert.equal(validated.rows.has("ID05V1_001"), false);

// CT04 intentionally overlaps the already accepted G2 shadow lane, but stores remain isolated.
const g2Ids = new Set(g2.rows.map((r) => r.question_id));
assert.equal(g2Ids.has("ALG04V2_013"), true);
assert.equal(validated.rows.has("ALG04V2_013"), true);
assert.equal(g2.production_store.key, "toan-thcs-canonical-evidence-v2");
assert.equal(g2.scope.rows, 101);
assert.equal(g2.scope.canonical_skills, 7);
assert.equal(g2.runtime_rules.mastery_threshold, null);
assert.equal(g2.runtime_rules.core_readiness_credit, false);
assert.notEqual(g2.production_store.key, obs.STORE_KEY);

const practice = read("docs/assets/javascripts/practice-engine-v2.js").toString("utf8");
const legacyAt = practice.indexOf("RoadmapLearnerEvidence.recordAnswer");
const g2At = practice.indexOf("RoadmapCanonicalEvidenceObserver?.captureAttempt");
const tv2At = practice.indexOf("RoadmapTaxonomyV2Observer?.captureAttempt");
assert.ok(legacyAt >= 0 && g2At > legacyAt && tv2At > g2At, "shadow capture order changed");

const observerSource = read("docs/assets/javascripts/taxonomy-v2-evidence-observer-v1.js").toString("utf8");
assert.ok(observerSource.includes("taxonomy-v2-runtime/i3e-ct02-12-r1.json"));
for (const topic of ["ct02-r1.json", "ct03-r1.json", "ct04-r1.json", "ct05-r1.json", "ct06-r1.json", "ct07-r1.json"]) {
  assert.ok(!observerSource.includes('new URL("../data/curriculum/taxonomy-v2-runtime/' + topic + '"'));
}
assert.ok(!observerSource.includes('new URL("../data/curriculum/taxonomy-v2-runtime/index-r1.json"'));

console.log("PASS Taxonomy v2 I3C CT02-CT04 policy: 341 active + 31 NO_FAMILY guards.");
console.log("PASS exact 372-row coverage / 23 families / max 177 independent units.");
console.log("PASS I3B store continuity and CT04 source-policy provenance.");
console.log("PASS CT04 G2 overlap remains dual-shadow with separate stores.");
console.log("PASS mastery, Readiness, backfill and learner-facing Taxonomy v2 UI remain off.");
