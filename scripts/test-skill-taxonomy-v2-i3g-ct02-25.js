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

const i3gPath = "docs/assets/data/curriculum/taxonomy-v2-runtime/i3g-ct02-25-r1.json";
const i3fPath = "docs/assets/data/curriculum/taxonomy-v2-runtime/i3f-ct02-20-r1.json";
const ownerReceiptPath = "review-packets/skill-taxonomy/implementation/I3F_CT02_20_SHADOW_OWNER_QA_PASS.md";
const registryPath = "docs/assets/data/curriculum/skill-taxonomy-v2-registry-r1.json";
const g2Path = "docs/assets/data/curriculum/canonical-evidence-runtime-policy-04-07-v1.json";

const topicIds = Array.from({ length: 24 }, (_, i) => "CT" + String(i + 2).padStart(2, "0"));
const topicPaths = topicIds.map((id) =>
  "docs/assets/data/curriculum/taxonomy-v2-runtime/ct" + id.slice(2) + "-r1.json"
);
const topicPolicies = topicPaths.map(json);

const policy = json(i3gPath);
const i3fPolicy = json(i3fPath);
const registry = json(registryPath);
const g2 = json(g2Path);

const validated = obs.validatePolicy(policy);
const i3fValidated = obs.validatePolicy(i3fPolicy);

assert.equal(obs.I3G_POLICY_SCHEMA, "skill-taxonomy-v2-i3g-ct02-25-policy-r1");
assert.equal(obs.I3G_ACTIVE_STATUS, "I3G_ACTIVE");
assert.equal(obs.I3G_GUARD_STATUS, "I3G_NO_FAMILY_GUARD");
assert.equal(policy.state, "I3G_CT02_CT25_SHADOW_ACTIVE");
assert.equal(policy.capture_version, "taxonomy-v2-i3g-ct02-25-v1");
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

assert.equal(policy.prior_phase.phase, "I3F");
assert.equal(policy.prior_phase.owner_qa_receipt, ownerReceiptPath);
assert.equal(policy.prior_phase.owner_qa_receipt_blob, gitBlobSha(read(ownerReceiptPath)));
assert.equal(policy.prior_phase.store_continuity, true);

assert.equal(policy.source_registry.blob_sha, gitBlobSha(read(registryPath)));
assert.deepEqual(
  policy.source_topic_policies,
  topicPaths.map((p, i) => ({ topic_id: topicIds[i], path: p, blob_sha: gitBlobSha(read(p)) }))
);

assert.deepEqual(policy.scope.topics, topicIds);
assert.equal(policy.scope.total_rows, 3114);
assert.equal(policy.scope.active_rows, 2900);
assert.equal(policy.scope.no_capture_guard_rows, 214);
assert.equal(policy.scope.family_count, 127);
assert.equal(policy.scope.max_independent_units, 650);

const expectedFinalPerTopic = {
  CT21: [132, 132, 0],
  CT22: [120, 120, 0],
  CT23: [120, 120, 0],
  CT24: [120, 80, 40],
  CT25: [120, 40, 80]
};
for (const [topic, [total, activeRows, guards]] of Object.entries(expectedFinalPerTopic)) {
  assert.deepEqual(policy.scope.per_topic[topic], {
    total_rows: total,
    active_rows: activeRows,
    no_capture_guard_rows: guards
  }, topic + " scope drift");
}

const active = policy.rows.filter((r) => r.capture_status === obs.I3G_ACTIVE_STATUS);
const guards = policy.rows.filter((r) => r.capture_status === obs.I3G_GUARD_STATUS);
assert.equal(active.length, 2900);
assert.equal(guards.length, 214);
assert.equal(new Set(active.map((r) => r.family_id)).size, 127);
assert.equal(new Set(active.map((r) => obs.evidenceUnitKey(r))).size, 650);
assert.ok(guards.every((r) => r.family_id === null && r.diagnostic_skill_id === null));

const sourceRows = new Map(topicPolicies.flatMap((p) => p.rows).map((r) => [r.question_id, r]));
assert.equal(sourceRows.size, 3114);
assert.equal(validated.rows.size, 3114);
assert.deepEqual([...validated.rows.keys()].sort(), [...sourceRows.keys()].sort());

// Full reviewed practice coverage is complete, while four registry families intentionally
// lack direct independent runtime evidence in the current bank.
assert.equal(registry.families.length, 131);
assert.equal(registry.counts.reviewed_practice_questions, 3114);
const activeFamilies = new Set(active.map((r) => r.family_id));
const missingEvidenceFamilies = registry.families
  .map((f) => f.family_id)
  .filter((id) => !activeFamilies.has(id))
  .sort();
assert.deepEqual(missingEvidenceFamilies, [
  "ID-APPLY",
  "ID-PROOF",
  "RATEX-INTEGER",
  "RATIO-MODEL"
]);
for (const id of missingEvidenceFamilies) {
  assert.equal(policy.rows.some((r) => r.family_id === id), false, id + " must remain without direct runtime credit");
}

const familyById = new Map(registry.families.map((f) => [f.family_id, f]));
for (const row of policy.rows) {
  const source = sourceRows.get(row.question_id);
  assert.ok(source, "I3G row missing from source topic policy: " + row.question_id);
  for (const key of [
    "topic_id", "source_file", "source_blob", "diagnostic_skill_id", "family_id",
    "family_layer", "mapping_role", "evidence_class", "clone_family", "policy_disposition"
  ]) {
    assert.deepEqual(row[key], source[key], row.question_id + " drift at " + key);
  }
  assert.deepEqual(row.legacy_skill_tags, source.legacy_skill_tags, row.question_id + " legacy tags drift");
  if (row.family_id) {
    assert.equal(row.capture_status, obs.I3G_ACTIVE_STATUS);
    assert.equal(row.family_layer, familyById.get(row.family_id)?.layer, row.question_id + " family layer drift");
  } else {
    assert.equal(row.capture_status, obs.I3G_GUARD_STATUS);
    assert.equal(row.policy_disposition, "FORMATIVE_ONLY_NO_FAMILY");
  }
}

const expectedFinalFamilies = {
  CT21: ["STAT-DATA","STAT-QUALITY","STAT-CHART-READ","STAT-FREQUENCY","STAT-REPRESENT","STAT-ADVANCED-DATA","STAT-INFER"],
  CT22: ["STAT-CENTER","STAT-SPREAD-OUTLIER","STAT-COMPARE-MEASURE"],
  CT23: ["PROB-EVENT","PROB-SPACE-SUPPORT","PROB-EXPERIMENTAL","PROB-CLASSICAL","PROB-MULTISTEP"],
  CT24: ["MODEL-SETUP","NUM-PERCENT","EQ-MODEL","SYS-MODEL","RIGHT-APPLICATION","PROB-EXPERIMENTAL","MODEL-VALIDATE"],
  CT25: ["EXAM-STRATEGY","EXAM-REVIEW"]
};
for (const [topic, expected] of Object.entries(expectedFinalFamilies)) {
  assert.deepEqual(
    new Set(policy.rows.filter((r) => r.topic_id === topic && r.family_id).map((r) => r.family_id)),
    new Set(expected),
    topic + " family set drift"
  );
}

// Reconstruct the owner's accepted I3F clone-repeat case, then continue into the final batch.
const firstCyclic = i3fValidated.rows.get("GEO19V1_008");
const ownerCyclic = i3fValidated.rows.get("GEO19V1_060");
let store = obs.emptyStore();
let rec = obs.recordAttemptToStore(store, firstCyclic, {
  correct: true, hintsUsed: 0, fullSolutionViewed: false
}, i3fPolicy, "2026-10-03T00:48:00+07:00", "i3f-first-cyclic");
store = rec.store;
assert.equal(rec.event.independent_evidence, true);
rec = obs.recordAttemptToStore(store, ownerCyclic, {
  correct: true, hintsUsed: 0, fullSolutionViewed: false
}, i3fPolicy, "2026-10-03T00:49:00+07:00", "i3f-owner-cyclic");
store = rec.store;
assert.equal(rec.event.family_id, "CIRCLE-CYCLIC");
assert.equal(rec.event.independent_evidence, false);
assert.equal(rec.event.independent_reason, "clone_family_repeat");

for (const [id, family] of [
  ["STA21V1_001", "STAT-DATA"],
  ["STAT22V1_001", "STAT-CENTER"],
  ["PRO23V1__001", "PROB-EVENT"],
  ["MOD24V1__001", "MODEL-SETUP"],
  ["REV25V1_001", "EXAM-STRATEGY"]
]) {
  const row = validated.rows.get(id);
  rec = obs.recordAttemptToStore(store, row, {
    correct: true, hintsUsed: 0, fullSolutionViewed: false
  }, policy, "2026-10-03T00:50:00+07:00", "i3g-" + id);
  store = rec.store;
  assert.equal(rec.event.family_id, family);
  assert.equal(rec.event.independent_evidence, true);
  const topicIndex = Number(row.topic_id.slice(2)) - 2;
  assert.equal(rec.event.source_topic_policy_blob, gitBlobSha(read(topicPaths[topicIndex])));
}

// CT24 and CT25 formative-only rows remain no-write guards.
for (const id of ["MOD24V1__021", "MOD24V1__121", "REV25V1_011", "REV25V1_020"]) {
  const guard = validated.rows.get(id);
  assert.equal(guard.capture_status, obs.I3G_GUARD_STATUS);
  assert.throws(() => obs.recordAttemptToStore(store, guard, {
    correct: true, hintsUsed: 0, fullSolutionViewed: false
  }, policy, "2026-10-03T00:51:00+07:00", "guard-" + id), /row_not_capture_eligible/);
}

// G2 remains frozen to CT04-CT07.
assert.equal(g2.production_store.key, "toan-thcs-canonical-evidence-v2");
assert.equal(g2.scope.rows, 101);
assert.equal(g2.scope.canonical_skills, 7);
assert.equal(g2.runtime_rules.mastery_threshold, null);
assert.equal(g2.runtime_rules.core_readiness_credit, false);
assert.notEqual(g2.production_store.key, obs.STORE_KEY);
const g2Ids = new Set(g2.rows.map((r) => r.question_id));
for (const id of ["STA21V1_001","STAT22V1_001","PRO23V1__001","MOD24V1__001","REV25V1_001"]) {
  assert.equal(g2Ids.has(id), false, id + " must not be added to frozen G2");
}

const practice = read("docs/assets/javascripts/practice-engine-v2.js").toString("utf8");
const legacyAt = practice.indexOf("RoadmapLearnerEvidence.recordAnswer");
const g2At = practice.indexOf("RoadmapCanonicalEvidenceObserver?.captureAttempt");
const tv2At = practice.indexOf("RoadmapTaxonomyV2Observer?.captureAttempt");
assert.ok(legacyAt >= 0 && g2At > legacyAt && tv2At > g2At, "shadow capture order changed");

const observerSource = read("docs/assets/javascripts/taxonomy-v2-evidence-observer-v1.js").toString("utf8");
assert.ok(observerSource.includes("taxonomy-v2-runtime/i3g-ct02-25-r1.json"));
for (let n = 2; n <= 25; n += 1) {
  const file = "ct" + String(n).padStart(2, "0") + "-r1.json";
  assert.ok(!observerSource.includes('new URL("../data/curriculum/taxonomy-v2-runtime/' + file + '"'));
}
assert.ok(!observerSource.includes('new URL("../data/curriculum/taxonomy-v2-runtime/index-r1.json"'));

console.log("PASS Taxonomy v2 I3G full CT02-CT25 shadow: 2900 active + 214 NO_FAMILY guards.");
console.log("PASS exact 3114-row reviewed practice coverage / 127 evidence-bearing families / max 650 independent units.");
console.log("PASS registry remains 131 families; four intentionally have no direct runtime evidence in the current bank.");
console.log("PASS I3F owner clone-repeat semantics and final CT21-CT25 evidence continuity.");
console.log("PASS G2 frozen; mastery, Readiness, backfill and learner-facing Taxonomy v2 UI remain off.");
