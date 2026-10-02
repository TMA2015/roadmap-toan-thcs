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
const i3bPath = "docs/assets/data/curriculum/taxonomy-v2-runtime/i3b-ct02-03-r1.json";
const i3aPath = "docs/assets/data/curriculum/taxonomy-v2-runtime/i3a-full-ct02-r1.json";
const ct02Path = "docs/assets/data/curriculum/taxonomy-v2-runtime/ct02-r1.json";
const ct03Path = "docs/assets/data/curriculum/taxonomy-v2-runtime/ct03-r1.json";
const registryPath = "docs/assets/data/curriculum/skill-taxonomy-v2-registry-r1.json";
const g2Path = "docs/assets/data/curriculum/canonical-evidence-runtime-policy-04-07-v1.json";

const policy = json(i3bPath);
const i3aPolicy = json(i3aPath);
const ct02 = json(ct02Path);
const ct03 = json(ct03Path);
const registry = json(registryPath);
const g2 = json(g2Path);
const validated = obs.validatePolicy(policy);
const i3aValidated = obs.validatePolicy(i3aPolicy);

assert.equal(obs.I3B_POLICY_SCHEMA, "skill-taxonomy-v2-i3b-ct02-03-policy-r1");
assert.equal(obs.I3B_ACTIVE_STATUS, "I3B_ACTIVE");
assert.equal(obs.I3B_GUARD_STATUS, "I3B_NO_FAMILY_GUARD");
assert.equal(policy.state, "I3B_CT02_CT03_SHADOW_ACTIVE");
assert.equal(policy.capture_version, "taxonomy-v2-i3b-ct02-03-v1");
assert.equal(policy.runtime_enabled, true);
assert.equal(policy.normal_learner_ui_change, false);
assert.equal(policy.production_store.key, "toan-thcs-taxonomy-v2-evidence-v1");
assert.equal(policy.production_store.backfill_existing_attempts, false);
assert.equal(policy.production_store.migrate_from, null);
assert.equal(policy.production_store.preserve_existing_events, true);
assert.equal(policy.runtime_rules.default_capture, "NO_CAPTURE");
assert.equal(policy.runtime_rules.legacy_write_first, true);
assert.equal(policy.runtime_rules.fail_open, true);
assert.equal(policy.runtime_rules.family_mastery_threshold, null);
assert.equal(policy.runtime_rules.core_readiness_credit, false);

assert.equal(policy.source_registry.blob_sha, gitBlobSha(read(registryPath)));
assert.deepEqual(
  policy.source_topic_policies,
  [
    { topic_id: "CT02", path: ct02Path, blob_sha: gitBlobSha(read(ct02Path)) },
    { topic_id: "CT03", path: ct03Path, blob_sha: gitBlobSha(read(ct03Path)) }
  ]
);

assert.deepEqual(policy.scope.topics, ["CT02", "CT03"]);
assert.equal(policy.scope.total_rows, 240);
assert.equal(policy.scope.active_rows, 221);
assert.equal(policy.scope.no_capture_guard_rows, 19);
assert.equal(policy.scope.family_count, 16);
assert.equal(policy.scope.max_independent_units, 149);
assert.deepEqual(policy.scope.per_topic, {
  CT02: { total_rows: 120, active_rows: 103, no_capture_guard_rows: 17 },
  CT03: { total_rows: 120, active_rows: 118, no_capture_guard_rows: 2 }
});

const active = policy.rows.filter((r) => r.capture_status === obs.I3B_ACTIVE_STATUS);
const guards = policy.rows.filter((r) => r.capture_status === obs.I3B_GUARD_STATUS);
assert.equal(active.length, 221);
assert.equal(guards.length, 19);
assert.equal(new Set(active.map((r) => r.family_id)).size, 16);
assert.equal(new Set(active.map((r) => obs.evidenceUnitKey(r))).size, 149);
assert.ok(guards.every((r) => r.family_id === null && r.diagnostic_skill_id === null));

const sourceRows = new Map([...ct02.rows, ...ct03.rows].map((r) => [r.question_id, r]));
assert.equal(sourceRows.size, 240);
assert.equal(validated.rows.size, 240);
assert.deepEqual([...validated.rows.keys()].sort(), [...sourceRows.keys()].sort());

const familyById = new Map(registry.families.map((f) => [f.family_id, f]));
for (const row of policy.rows) {
  const source = sourceRows.get(row.question_id);
  assert.ok(source, "I3B row missing from I1 source policy: " + row.question_id);
  for (const key of [
    "topic_id", "source_file", "source_blob", "diagnostic_skill_id", "family_id",
    "family_layer", "mapping_role", "evidence_class", "clone_family", "policy_disposition"
  ]) {
    assert.deepEqual(row[key], source[key], row.question_id + " drift at " + key);
  }
  assert.deepEqual(row.legacy_skill_tags, source.legacy_skill_tags, row.question_id + " legacy tags drift");
  if (row.family_id) {
    assert.equal(row.capture_status, obs.I3B_ACTIVE_STATUS);
    assert.equal(row.family_layer, familyById.get(row.family_id)?.layer, row.question_id + " family layer drift");
  } else {
    assert.equal(row.capture_status, obs.I3B_GUARD_STATUS);
    assert.equal(row.policy_disposition, "FORMATIVE_ONLY_NO_FAMILY");
  }
}

// CT03 is newly opened and all seven reviewed families are represented.
assert.deepEqual(
  new Set(policy.rows.filter((r) => r.topic_id === "CT03" && r.family_id).map((r) => r.family_id)),
  new Set([
    "RATIO-BASIC", "RATIO-PROP", "RATIO-SPLIT", "RATIO-DIRECT",
    "RATIO-INVERSE", "RATIO-DISTINGUISH", "NUM-PERCENT"
  ])
);
assert.deepEqual(
  policy.rows.filter((r) => r.topic_id === "CT03" && !r.family_id).map((r) => r.question_id).sort(),
  ["RAT03V1_105", "RAT03V1_113"]
);

// Store continuity: create an existing I3A CT02 event, then append an I3B CT03 event.
const oldCt02 = i3aValidated.rows.get("NUM02V1_091");
let store = obs.emptyStore();
let rec = obs.recordAttemptToStore(store, oldCt02, {
  correct: true, hintsUsed: 0, fullSolutionViewed: false, selectedIndex: 0, practiceMode: "normal"
}, i3aPolicy, "2026-10-02T20:00:00Z", "i3a-existing");
store = rec.store;
assert.equal(rec.event.family_id, "NUM-PERCENT");
assert.equal(rec.event.source_topic_policy_blob, gitBlobSha(read(ct02Path)));

const ct03Percent = validated.rows.get("RAT03V1_099");
rec = obs.recordAttemptToStore(store, ct03Percent, {
  correct: true, hintsUsed: 0, fullSolutionViewed: false, selectedIndex: 0, practiceMode: "normal"
}, policy, "2026-10-02T22:00:00Z", "i3b-ct03");
store = rec.store;
assert.equal(store.recent_events[0].event_id, "i3a-existing");
assert.equal(store.recent_events[1].event_id, "i3b-ct03");
assert.equal(rec.event.family_id, "NUM-PERCENT");
assert.equal(rec.event.topic_id, "CT03");
assert.equal(rec.event.source_topic_policy_blob, gitBlobSha(read(ct03Path)));
assert.equal(rec.event.independent_evidence, true);

// Cross-topic canonical family reuse must not collapse topic-scoped evidence units.
assert.notEqual(obs.evidenceUnitKey(oldCt02), obs.evidenceUnitKey(ct03Percent));
assert.equal(Object.keys(store.independent_units).length, 2);

// Representative new CT03 family captures negative independent evidence.
const ratioBasic = validated.rows.get("RAT03V1_001");
rec = obs.recordAttemptToStore(store, ratioBasic, {
  correct: false, hintsUsed: 0, fullSolutionViewed: false, selectedIndex: 1, practiceMode: "normal"
}, policy, "2026-10-02T22:01:00Z", "i3b-ratio-basic");
store = rec.store;
assert.equal(rec.event.family_id, "RATIO-BASIC");
assert.equal(rec.event.correct, false);
assert.equal(rec.event.independent_evidence, true);
assert.equal(rec.event.source_topic_policy_blob, gitBlobSha(read(ct03Path)));

// CT02 remains active under the same I3B policy.
const ct02Power = validated.rows.get("NUM02V1_021");
rec = obs.recordAttemptToStore(store, ct02Power, {
  correct: true, hintsUsed: 0, fullSolutionViewed: false, selectedIndex: 0, practiceMode: "normal"
}, policy, "2026-10-02T22:02:00Z", "i3b-ct02");
store = rec.store;
assert.equal(rec.event.topic_id, "CT02");
assert.equal(rec.event.family_id, "NUM-POWER");
assert.equal(rec.event.source_topic_policy_blob, gitBlobSha(read(ct02Path)));

// CT03 NO_FAMILY guards cannot write.
for (const id of ["RAT03V1_105", "RAT03V1_113"]) {
  const guard = validated.rows.get(id);
  assert.equal(guard.capture_status, obs.I3B_GUARD_STATUS);
  assert.throws(() => obs.recordAttemptToStore(store, guard, {
    correct: true, hintsUsed: 0, fullSolutionViewed: false
  }, policy, "2026-10-02T22:03:00Z", "guard-" + id), /row_not_capture_eligible/);
}

// Existing production boundaries remain exact.
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
assert.ok(observerSource.includes("taxonomy-v2-runtime/i3d-ct02-07-r1.json"));
assert.ok(!observerSource.includes('new URL("../data/curriculum/taxonomy-v2-runtime/index-r1.json"'));
assert.ok(!observerSource.includes('new URL("../data/curriculum/taxonomy-v2-runtime/ct02-r1.json"'));
assert.ok(!observerSource.includes('new URL("../data/curriculum/taxonomy-v2-runtime/ct03-r1.json"'));
assert.ok(!observerSource.includes('new URL("../data/curriculum/taxonomy-v2-runtime/ct04-r1.json"'));
assert.ok(!observerSource.includes('new URL("../data/curriculum/taxonomy-v2-runtime/ct05-r1.json"'));
assert.ok(!observerSource.includes('new URL("../data/curriculum/taxonomy-v2-runtime/ct06-r1.json"'));
assert.ok(!observerSource.includes('new URL("../data/curriculum/taxonomy-v2-runtime/ct07-r1.json"'));

console.log("PASS Taxonomy v2 I3B CT02-CT03 policy: 221 active + 19 NO_FAMILY guards.");
console.log("PASS exact 240-row coverage / 16 families / max 149 independent units.");
console.log("PASS CT02 evidence continuity and CT03 source-policy provenance.");
console.log("PASS cross-topic NUM-PERCENT reuse remains topic-scoped for evidence units.");
console.log("PASS G2 isolation; mastery, Readiness, backfill and learner UI remain off.");
