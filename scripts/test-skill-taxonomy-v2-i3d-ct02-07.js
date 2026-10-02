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

const i3dPath = "docs/assets/data/curriculum/taxonomy-v2-runtime/i3d-ct02-07-r1.json";
const i3cPath = "docs/assets/data/curriculum/taxonomy-v2-runtime/i3c-ct02-04-r1.json";
const topicPaths = [
  "docs/assets/data/curriculum/taxonomy-v2-runtime/ct02-r1.json",
  "docs/assets/data/curriculum/taxonomy-v2-runtime/ct03-r1.json",
  "docs/assets/data/curriculum/taxonomy-v2-runtime/ct04-r1.json",
  "docs/assets/data/curriculum/taxonomy-v2-runtime/ct05-r1.json",
  "docs/assets/data/curriculum/taxonomy-v2-runtime/ct06-r1.json",
  "docs/assets/data/curriculum/taxonomy-v2-runtime/ct07-r1.json"
];
const registryPath = "docs/assets/data/curriculum/skill-taxonomy-v2-registry-r1.json";
const g2Path = "docs/assets/data/curriculum/canonical-evidence-runtime-policy-04-07-v1.json";
const ownerReceiptPath = "review-packets/skill-taxonomy/implementation/I3C_CT02_04_SHADOW_OWNER_QA_PASS.md";

const policy = json(i3dPath);
const i3cPolicy = json(i3cPath);
const topicPolicies = topicPaths.map(json);
const registry = json(registryPath);
const g2 = json(g2Path);

const validated = obs.validatePolicy(policy);
const i3cValidated = obs.validatePolicy(i3cPolicy);

assert.equal(obs.I3D_POLICY_SCHEMA, "skill-taxonomy-v2-i3d-ct02-07-policy-r1");
assert.equal(obs.I3D_ACTIVE_STATUS, "I3D_ACTIVE");
assert.equal(obs.I3D_GUARD_STATUS, "I3D_NO_FAMILY_GUARD");
assert.equal(policy.state, "I3D_CT02_CT07_SHADOW_ACTIVE");
assert.equal(policy.capture_version, "taxonomy-v2-i3d-ct02-07-v1");
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

assert.equal(policy.prior_phase.phase, "I3C");
assert.equal(policy.prior_phase.owner_qa_receipt, ownerReceiptPath);
assert.equal(policy.prior_phase.owner_qa_receipt_blob, gitBlobSha(read(ownerReceiptPath)));
assert.equal(policy.prior_phase.store_continuity, true);

assert.equal(policy.source_registry.blob_sha, gitBlobSha(read(registryPath)));
assert.deepEqual(
  policy.source_topic_policies,
  topicPaths.map((p, i) => ({ topic_id: "CT" + String(i + 2).padStart(2, "0"), path: p, blob_sha: gitBlobSha(read(p)) }))
);

assert.deepEqual(policy.scope.topics, ["CT02", "CT03", "CT04", "CT05", "CT06", "CT07"]);
assert.equal(policy.scope.total_rows, 732);
assert.equal(policy.scope.active_rows, 648);
assert.equal(policy.scope.no_capture_guard_rows, 84);
assert.equal(policy.scope.family_count, 35);
assert.equal(policy.scope.max_independent_units, 240);
assert.deepEqual(policy.scope.per_topic, {
  CT02: { total_rows: 120, active_rows: 103, no_capture_guard_rows: 17 },
  CT03: { total_rows: 120, active_rows: 118, no_capture_guard_rows: 2 },
  CT04: { total_rows: 132, active_rows: 120, no_capture_guard_rows: 12 },
  CT05: { total_rows: 120, active_rows: 91, no_capture_guard_rows: 29 },
  CT06: { total_rows: 120, active_rows: 104, no_capture_guard_rows: 16 },
  CT07: { total_rows: 120, active_rows: 112, no_capture_guard_rows: 8 }
});

const active = policy.rows.filter((r) => r.capture_status === obs.I3D_ACTIVE_STATUS);
const guards = policy.rows.filter((r) => r.capture_status === obs.I3D_GUARD_STATUS);
assert.equal(active.length, 648);
assert.equal(guards.length, 84);
assert.equal(new Set(active.map((r) => r.family_id)).size, 35);
assert.equal(new Set(active.map((r) => obs.evidenceUnitKey(r))).size, 240);
assert.ok(guards.every((r) => r.family_id === null && r.diagnostic_skill_id === null));

const sourceRows = new Map(topicPolicies.flatMap((p) => p.rows).map((r) => [r.question_id, r]));
assert.equal(sourceRows.size, 732);
assert.equal(validated.rows.size, 732);
assert.deepEqual([...validated.rows.keys()].sort(), [...sourceRows.keys()].sort());

const familyById = new Map(registry.families.map((f) => [f.family_id, f]));
for (const row of policy.rows) {
  const source = sourceRows.get(row.question_id);
  assert.ok(source, "I3D row missing from I1 source policy: " + row.question_id);
  for (const key of [
    "topic_id", "source_file", "source_blob", "diagnostic_skill_id", "family_id",
    "family_layer", "mapping_role", "evidence_class", "clone_family", "policy_disposition"
  ]) {
    assert.deepEqual(row[key], source[key], row.question_id + " drift at " + key);
  }
  assert.deepEqual(row.legacy_skill_tags, source.legacy_skill_tags, row.question_id + " legacy tags drift");
  if (row.family_id) {
    assert.equal(row.capture_status, obs.I3D_ACTIVE_STATUS);
    assert.equal(row.family_layer, familyById.get(row.family_id)?.layer, row.question_id + " family layer drift");
  } else {
    assert.equal(row.capture_status, obs.I3D_GUARD_STATUS);
    assert.equal(row.policy_disposition, "FORMATIVE_ONLY_NO_FAMILY");
  }
}

const expectedNewFamilies = {
  CT05: ["ID-STRUCTURE"],
  CT06: ["FAC-COMMON", "FAC-IDENTITY", "FAC-GROUP", "FAC-SPLIT-MIDDLE", "FAC-COMBINE", "EQ-ZERO-PRODUCT"],
  CT07: ["RATEX-CONCEPT", "RATEX-DOMAIN", "RATEX-SIMPLIFY", "RATEX-ADD-SUB", "RATEX-MULT-DIV", "RATEX-EVALUATE"]
};
for (const [topic, expected] of Object.entries(expectedNewFamilies)) {
  assert.deepEqual(
    new Set(policy.rows.filter((r) => r.topic_id === topic && r.family_id).map((r) => r.family_id)),
    new Set(expected),
    topic + " family set drift"
  );
}

// Preserve accepted I3C evidence, then append one new topic event from CT05, CT06 and CT07.
const oldCt04 = i3cValidated.rows.get("ALG04V2_053");
let store = obs.emptyStore();
let rec = obs.recordAttemptToStore(store, oldCt04, {
  correct: true, hintsUsed: 0, fullSolutionViewed: false, selectedIndex: 0, practiceMode: "normal"
}, i3cPolicy, "2026-10-02T16:50:00Z", "i3c-existing");
store = rec.store;
assert.equal(rec.event.family_id, "ALG-MULTIPLY");

for (const [id, family] of [
  ["ID05V1_001", "ID-STRUCTURE"],
  ["FAC06V1_001", "FAC-COMMON"],
  ["RAT07V1_001", "RATEX-CONCEPT"]
]) {
  const row = validated.rows.get(id);
  rec = obs.recordAttemptToStore(store, row, {
    correct: true, hintsUsed: 0, fullSolutionViewed: false, selectedIndex: 0, practiceMode: "normal"
  }, policy, "2026-10-02T16:51:00Z", "i3d-" + id);
  store = rec.store;
  assert.equal(rec.event.family_id, family);
  assert.equal(rec.event.independent_evidence, true);
  const topicIndex = Number(row.topic_id.slice(2)) - 2;
  assert.equal(rec.event.source_topic_policy_blob, gitBlobSha(read(topicPaths[topicIndex])));
}
assert.equal(store.recent_events[0].event_id, "i3c-existing");

// Representative guards from all newly opened topics cannot write.
for (const id of ["ID05V1_091", "FAC06V1_093", "RAT07V1_109"]) {
  const guard = validated.rows.get(id);
  assert.equal(guard.capture_status, obs.I3D_GUARD_STATUS);
  assert.throws(() => obs.recordAttemptToStore(store, guard, {
    correct: true, hintsUsed: 0, fullSolutionViewed: false
  }, policy, "2026-10-02T16:52:00Z", "guard-" + id), /row_not_capture_eligible/);
}

// CT08+ remains outside this controlled phase.
assert.equal(validated.rows.has("LIN08V1_001"), false);

// G2 already covers selected CT05–CT07 questions. Both shadow lanes remain separate.
const g2Ids = new Set(g2.rows.map((r) => r.question_id));
for (const id of ["ID05V1_023", "FAC06V1_021", "RAT07V1_009"]) {
  assert.equal(g2Ids.has(id), true, id + " must remain in G2");
  assert.equal(validated.rows.has(id), true, id + " must also be in I3D");
}
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
assert.ok(observerSource.includes("taxonomy-v2-runtime/i3g-ct02-25-r1.json"));
for (const topic of ["ct02-r1.json", "ct03-r1.json", "ct04-r1.json", "ct05-r1.json", "ct06-r1.json", "ct07-r1.json"]) {
  assert.ok(!observerSource.includes('new URL("../data/curriculum/taxonomy-v2-runtime/' + topic + '"'));
}
assert.ok(!observerSource.includes('new URL("../data/curriculum/taxonomy-v2-runtime/index-r1.json"'));

console.log("PASS Taxonomy v2 I3D CT02-CT07 policy: 648 active + 84 NO_FAMILY guards.");
console.log("PASS exact 732-row coverage / 35 families / max 240 independent units.");
console.log("PASS I3C store continuity across newly opened CT05–CT07.");
console.log("PASS G2 coexistence remains isolated across the full CT04–CT07 overlap band.");
console.log("PASS CT08+ excluded; mastery, Readiness, backfill and learner UI remain off.");
