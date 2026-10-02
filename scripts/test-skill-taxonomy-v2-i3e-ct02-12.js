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

const i3ePath = "docs/assets/data/curriculum/taxonomy-v2-runtime/i3e-ct02-12-r1.json";
const i3dPath = "docs/assets/data/curriculum/taxonomy-v2-runtime/i3d-ct02-07-r1.json";
const ownerReceiptPath = "review-packets/skill-taxonomy/implementation/I3D_CT02_07_SHADOW_OWNER_QA_PASS.md";
const registryPath = "docs/assets/data/curriculum/skill-taxonomy-v2-registry-r1.json";
const g2Path = "docs/assets/data/curriculum/canonical-evidence-runtime-policy-04-07-v1.json";

const topicIds = Array.from({ length: 11 }, (_, i) => "CT" + String(i + 2).padStart(2, "0"));
const topicPaths = topicIds.map((id) =>
  "docs/assets/data/curriculum/taxonomy-v2-runtime/ct" + id.slice(2) + "-r1.json"
);
const topicPolicies = topicPaths.map(json);

const policy = json(i3ePath);
const i3dPolicy = json(i3dPath);
const registry = json(registryPath);
const g2 = json(g2Path);

const validated = obs.validatePolicy(policy);
const i3dValidated = obs.validatePolicy(i3dPolicy);

assert.equal(obs.I3E_POLICY_SCHEMA, "skill-taxonomy-v2-i3e-ct02-12-policy-r1");
assert.equal(obs.I3E_ACTIVE_STATUS, "I3E_ACTIVE");
assert.equal(obs.I3E_GUARD_STATUS, "I3E_NO_FAMILY_GUARD");
assert.equal(policy.state, "I3E_CT02_CT12_SHADOW_ACTIVE");
assert.equal(policy.capture_version, "taxonomy-v2-i3e-ct02-12-v1");
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

assert.equal(policy.prior_phase.phase, "I3D");
assert.equal(policy.prior_phase.owner_qa_receipt, ownerReceiptPath);
assert.equal(policy.prior_phase.owner_qa_receipt_blob, gitBlobSha(read(ownerReceiptPath)));
assert.equal(policy.prior_phase.store_continuity, true);

assert.equal(policy.source_registry.blob_sha, gitBlobSha(read(registryPath)));
assert.deepEqual(
  policy.source_topic_policies,
  topicPaths.map((p, i) => ({ topic_id: topicIds[i], path: p, blob_sha: gitBlobSha(read(p)) }))
);

assert.deepEqual(policy.scope.topics, topicIds);
assert.equal(policy.scope.total_rows, 1356);
assert.equal(policy.scope.active_rows, 1272);
assert.equal(policy.scope.no_capture_guard_rows, 84);
assert.equal(policy.scope.family_count, 64);
assert.equal(policy.scope.max_independent_units, 375);
assert.deepEqual(policy.scope.per_topic, {
  CT02: { total_rows: 120, active_rows: 103, no_capture_guard_rows: 17 },
  CT03: { total_rows: 120, active_rows: 118, no_capture_guard_rows: 2 },
  CT04: { total_rows: 132, active_rows: 120, no_capture_guard_rows: 12 },
  CT05: { total_rows: 120, active_rows: 91, no_capture_guard_rows: 29 },
  CT06: { total_rows: 120, active_rows: 104, no_capture_guard_rows: 16 },
  CT07: { total_rows: 120, active_rows: 112, no_capture_guard_rows: 8 },
  CT08: { total_rows: 132, active_rows: 132, no_capture_guard_rows: 0 },
  CT09: { total_rows: 120, active_rows: 120, no_capture_guard_rows: 0 },
  CT10: { total_rows: 120, active_rows: 120, no_capture_guard_rows: 0 },
  CT11: { total_rows: 132, active_rows: 132, no_capture_guard_rows: 0 },
  CT12: { total_rows: 120, active_rows: 120, no_capture_guard_rows: 0 }
});

const active = policy.rows.filter((r) => r.capture_status === obs.I3E_ACTIVE_STATUS);
const guards = policy.rows.filter((r) => r.capture_status === obs.I3E_GUARD_STATUS);
assert.equal(active.length, 1272);
assert.equal(guards.length, 84);
assert.equal(new Set(active.map((r) => r.family_id)).size, 64);
assert.equal(new Set(active.map((r) => obs.evidenceUnitKey(r))).size, 375);
assert.ok(guards.every((r) => r.family_id === null && r.diagnostic_skill_id === null));

const sourceRows = new Map(topicPolicies.flatMap((p) => p.rows).map((r) => [r.question_id, r]));
assert.equal(sourceRows.size, 1356);
assert.equal(validated.rows.size, 1356);
assert.deepEqual([...validated.rows.keys()].sort(), [...sourceRows.keys()].sort());

const familyById = new Map(registry.families.map((f) => [f.family_id, f]));
for (const row of policy.rows) {
  const source = sourceRows.get(row.question_id);
  assert.ok(source, "I3E row missing from I1 source policy: " + row.question_id);
  for (const key of [
    "topic_id", "source_file", "source_blob", "diagnostic_skill_id", "family_id",
    "family_layer", "mapping_role", "evidence_class", "clone_family", "policy_disposition"
  ]) {
    assert.deepEqual(row[key], source[key], row.question_id + " drift at " + key);
  }
  assert.deepEqual(row.legacy_skill_tags, source.legacy_skill_tags, row.question_id + " legacy tags drift");
  if (row.family_id) {
    assert.equal(row.capture_status, obs.I3E_ACTIVE_STATUS);
    assert.equal(row.family_layer, familyById.get(row.family_id)?.layer, row.question_id + " family layer drift");
  } else {
    assert.equal(row.capture_status, obs.I3E_GUARD_STATUS);
    assert.equal(row.policy_disposition, "FORMATIVE_ONLY_NO_FAMILY");
  }
}

const expectedNewFamilies = {
  CT08: ["EQ-BASIC","EQ-RATIONAL","INEQ-SOLVE","EQ-MODEL","INEQ-MODEL","EQ-PARAM","INEQ-ORDER"],
  CT09: ["SYS-CONCEPT","SYS-SOLVE","SYS-PARAM","SYS-MODEL"],
  CT10: ["FUNC-BASIC","GRAPH-POINT","LINEAR-FUNC","GRAPH-INTERSECTION","PARABOLA-BASIC"],
  CT11: ["RAD-BASIC","RAD-TRANSFORM","RAD-OPERATE","RAD-RATIONALIZE","RAD-EQUATION","RAD-COMPARE","RAD-CUBEROOT"],
  CT12: ["QUAD-STRUCTURE","QUAD-SOLVE","VIETE-CORE","VIETE-APPLY","QUAD-PARAM","QUAD-GRAPH"]
};
for (const [topic, expected] of Object.entries(expectedNewFamilies)) {
  assert.deepEqual(
    new Set(policy.rows.filter((r) => r.topic_id === topic && r.family_id).map((r) => r.family_id)),
    new Set(expected),
    topic + " family set drift"
  );
  assert.equal(policy.rows.filter((r) => r.topic_id === topic && !r.family_id).length, 0,
    topic + " must have zero NO_FAMILY rows in the reviewed S2 bank");
}

// Preserve accepted I3D history including the owner's clone-family repeat semantics.
const firstCombine = i3dValidated.rows.get("FAC06V1_077");
const repeatCombine = i3dValidated.rows.get("FAC06V1_081");
let store = obs.emptyStore();
let rec = obs.recordAttemptToStore(store, firstCombine, {
  correct: true, hintsUsed: 0, fullSolutionViewed: false, selectedIndex: 0, practiceMode: "normal"
}, i3dPolicy, "2026-10-03T00:10:00+07:00", "i3d-first");
store = rec.store;
assert.equal(rec.event.independent_evidence, true);
rec = obs.recordAttemptToStore(store, repeatCombine, {
  correct: true, hintsUsed: 0, fullSolutionViewed: false, selectedIndex: 0, practiceMode: "normal"
}, i3dPolicy, "2026-10-03T00:11:00+07:00", "i3d-repeat");
store = rec.store;
assert.equal(rec.event.family_id, "FAC-COMBINE");
assert.equal(rec.event.independent_evidence, false);
assert.equal(rec.event.independent_reason, "clone_family_repeat");

// Append one representative event from every newly opened topic.
for (const [id, family] of [
  ["EQ08V1_001", "EQ-BASIC"],
  ["SYS09V1_001", "SYS-CONCEPT"],
  ["FUN10V1_001", "FUNC-BASIC"],
  ["RAD11V1_001", "RAD-BASIC"],
  ["QUA12V1_001", "QUAD-STRUCTURE"]
]) {
  const row = validated.rows.get(id);
  rec = obs.recordAttemptToStore(store, row, {
    correct: true, hintsUsed: 0, fullSolutionViewed: false, selectedIndex: 0, practiceMode: "normal"
  }, policy, "2026-10-03T00:12:00+07:00", "i3e-" + id);
  store = rec.store;
  assert.equal(rec.event.family_id, family);
  assert.equal(rec.event.independent_evidence, true);
  const topicIndex = Number(row.topic_id.slice(2)) - 2;
  assert.equal(rec.event.source_topic_policy_blob, gitBlobSha(read(topicPaths[topicIndex])));
}
assert.equal(store.recent_events[0].event_id, "i3d-first");
assert.equal(store.recent_events[1].event_id, "i3d-repeat");

// Existing guards from the pre-S2 band remain protected.
for (const id of ["ALG04V2_099", "ID05V1_091", "FAC06V1_093", "RAT07V1_109"]) {
  const guard = validated.rows.get(id);
  assert.equal(guard.capture_status, obs.I3E_GUARD_STATUS);
  assert.throws(() => obs.recordAttemptToStore(store, guard, {
    correct: true, hintsUsed: 0, fullSolutionViewed: false
  }, policy, "2026-10-03T00:13:00+07:00", "guard-" + id), /row_not_capture_eligible/);
}

// CT13+ remains outside this controlled phase.
assert.equal(validated.rows.has("GEO13V1_001"), false);

// G2 remains frozen to its existing CT04–CT07 scope and is not expanded into S2.
assert.equal(g2.production_store.key, "toan-thcs-canonical-evidence-v2");
assert.deepEqual(g2.scope.topics, [
  "04-bieu-thuc-dai-so",
  "05-7-hang-dang-thuc",
  "06-phan-tich-da-thuc",
  "07-phan-thuc-dai-so"
]);
assert.equal(g2.scope.rows, 101);
assert.equal(g2.scope.canonical_skills, 7);
assert.equal(g2.runtime_rules.mastery_threshold, null);
assert.equal(g2.runtime_rules.core_readiness_credit, false);
assert.notEqual(g2.production_store.key, obs.STORE_KEY);

const g2Ids = new Set(g2.rows.map((r) => r.question_id));
for (const id of ["EQ08V1_001", "SYS09V1_001", "FUN10V1_001", "RAD11V1_001", "QUA12V1_001"]) {
  assert.equal(g2Ids.has(id), false, id + " must not be added to frozen G2");
}

const practice = read("docs/assets/javascripts/practice-engine-v2.js").toString("utf8");
const legacyAt = practice.indexOf("RoadmapLearnerEvidence.recordAnswer");
const g2At = practice.indexOf("RoadmapCanonicalEvidenceObserver?.captureAttempt");
const tv2At = practice.indexOf("RoadmapTaxonomyV2Observer?.captureAttempt");
assert.ok(legacyAt >= 0 && g2At > legacyAt && tv2At > g2At, "shadow capture order changed");

const observerSource = read("docs/assets/javascripts/taxonomy-v2-evidence-observer-v1.js").toString("utf8");
assert.ok(observerSource.includes("taxonomy-v2-runtime/i3e-ct02-12-r1.json"));
for (let n = 2; n <= 12; n += 1) {
  const file = "ct" + String(n).padStart(2, "0") + "-r1.json";
  assert.ok(!observerSource.includes('new URL("../data/curriculum/taxonomy-v2-runtime/' + file + '"'));
}
assert.ok(!observerSource.includes('new URL("../data/curriculum/taxonomy-v2-runtime/index-r1.json"'));

console.log("PASS Taxonomy v2 I3E CT02-CT12 policy: 1272 active + 84 NO_FAMILY guards.");
console.log("PASS exact 1356-row coverage / 64 families / max 375 independent units.");
console.log("PASS I3D store continuity including live clone-family-repeat semantics.");
console.log("PASS CT08-CT12 adds 624/624 reviewed family-linked rows with zero guards.");
console.log("PASS G2 remains frozen to CT04-CT07; CT13+ excluded; mastery, Readiness, backfill and learner UI remain off.");
