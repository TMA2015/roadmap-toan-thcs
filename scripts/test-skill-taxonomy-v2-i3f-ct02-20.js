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

const i3fPath = "docs/assets/data/curriculum/taxonomy-v2-runtime/i3f-ct02-20-r1.json";
const i3ePath = "docs/assets/data/curriculum/taxonomy-v2-runtime/i3e-ct02-12-r1.json";
const ownerReceiptPath = "review-packets/skill-taxonomy/implementation/I3E_CT02_12_SHADOW_OWNER_QA_PASS.md";
const registryPath = "docs/assets/data/curriculum/skill-taxonomy-v2-registry-r1.json";
const g2Path = "docs/assets/data/curriculum/canonical-evidence-runtime-policy-04-07-v1.json";

const topicIds = Array.from({ length: 19 }, (_, i) => "CT" + String(i + 2).padStart(2, "0"));
const topicPaths = topicIds.map((id) =>
  "docs/assets/data/curriculum/taxonomy-v2-runtime/ct" + id.slice(2) + "-r1.json"
);
const topicPolicies = topicPaths.map(json);

const policy = json(i3fPath);
const i3ePolicy = json(i3ePath);
const registry = json(registryPath);
const g2 = json(g2Path);

const validated = obs.validatePolicy(policy);
const i3eValidated = obs.validatePolicy(i3ePolicy);

assert.equal(obs.I3F_POLICY_SCHEMA, "skill-taxonomy-v2-i3f-ct02-20-policy-r1");
assert.equal(obs.I3F_ACTIVE_STATUS, "I3F_ACTIVE");
assert.equal(obs.I3F_GUARD_STATUS, "I3F_NO_FAMILY_GUARD");
assert.equal(policy.state, "I3F_CT02_CT20_SHADOW_ACTIVE");
assert.equal(policy.capture_version, "taxonomy-v2-i3f-ct02-20-v1");
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

assert.equal(policy.prior_phase.phase, "I3E");
assert.equal(policy.prior_phase.owner_qa_receipt, ownerReceiptPath);
assert.equal(policy.prior_phase.owner_qa_receipt_blob, gitBlobSha(read(ownerReceiptPath)));
assert.equal(policy.prior_phase.store_continuity, true);

assert.equal(policy.source_registry.blob_sha, gitBlobSha(read(registryPath)));
assert.deepEqual(
  policy.source_topic_policies,
  topicPaths.map((p, i) => ({ topic_id: topicIds[i], path: p, blob_sha: gitBlobSha(read(p)) }))
);

assert.deepEqual(policy.scope.topics, topicIds);
assert.equal(policy.scope.total_rows, 2502);
assert.equal(policy.scope.active_rows, 2408);
assert.equal(policy.scope.no_capture_guard_rows, 94);
assert.equal(policy.scope.family_count, 108);
assert.equal(policy.scope.max_independent_units, 543);

const expectedPerTopic = {
  CT02: [120, 103, 17],
  CT03: [120, 118, 2],
  CT04: [132, 120, 12],
  CT05: [120, 91, 29],
  CT06: [120, 104, 16],
  CT07: [120, 112, 8],
  CT08: [132, 132, 0],
  CT09: [120, 120, 0],
  CT10: [120, 120, 0],
  CT11: [132, 132, 0],
  CT12: [120, 120, 0],
  CT13: [156, 156, 0],
  CT14: [140, 140, 0],
  CT15: [124, 124, 0],
  CT16: [120, 120, 0],
  CT17: [132, 132, 0],
  CT18: [132, 132, 0],
  CT19: [147, 147, 0],
  CT20: [195, 185, 10]
};
for (const [topic, [total, activeRows, guards]] of Object.entries(expectedPerTopic)) {
  assert.deepEqual(policy.scope.per_topic[topic], {
    total_rows: total,
    active_rows: activeRows,
    no_capture_guard_rows: guards
  }, topic + " scope drift");
}

const active = policy.rows.filter((r) => r.capture_status === obs.I3F_ACTIVE_STATUS);
const guards = policy.rows.filter((r) => r.capture_status === obs.I3F_GUARD_STATUS);
assert.equal(active.length, 2408);
assert.equal(guards.length, 94);
assert.equal(new Set(active.map((r) => r.family_id)).size, 108);
assert.equal(new Set(active.map((r) => obs.evidenceUnitKey(r))).size, 543);
assert.ok(guards.every((r) => r.family_id === null && r.diagnostic_skill_id === null));

const sourceRows = new Map(topicPolicies.flatMap((p) => p.rows).map((r) => [r.question_id, r]));
assert.equal(sourceRows.size, 2502);
assert.equal(validated.rows.size, 2502);
assert.deepEqual([...validated.rows.keys()].sort(), [...sourceRows.keys()].sort());

const familyById = new Map(registry.families.map((f) => [f.family_id, f]));
for (const row of policy.rows) {
  const source = sourceRows.get(row.question_id);
  assert.ok(source, "I3F row missing from I1 source policy: " + row.question_id);
  for (const key of [
    "topic_id", "source_file", "source_blob", "diagnostic_skill_id", "family_id",
    "family_layer", "mapping_role", "evidence_class", "clone_family", "policy_disposition"
  ]) {
    assert.deepEqual(row[key], source[key], row.question_id + " drift at " + key);
  }
  assert.deepEqual(row.legacy_skill_tags, source.legacy_skill_tags, row.question_id + " legacy tags drift");
  if (row.family_id) {
    assert.equal(row.capture_status, obs.I3F_ACTIVE_STATUS);
    assert.equal(row.family_layer, familyById.get(row.family_id)?.layer, row.question_id + " family layer drift");
  } else {
    assert.equal(row.capture_status, obs.I3F_GUARD_STATUS);
    assert.equal(row.policy_disposition, "FORMATIVE_ONLY_NO_FAMILY");
  }
}

const expectedNewFamilies = {
  CT13: ["GEO-LINE-FOUND","GEO-ANGLE-REL","GEO-TRANSVERSAL","GEO-PARALLEL","GEO-PROOF-BASIC"],
  CT14: ["TRI-SPECIAL","GEO-PLANE-MEASURE","TRI-ANGLE-SIDE","RIGHT-PYTHAGORE","TRI-CONGRUENCE","TRI-PERPBISECTOR"],
  CT15: ["TRI-CENTROID","TRI-ORTHOCENTER","TRI-INCENTER","TRI-PERPBISECTOR","TRI-CIRCUMCENTER","TRI-CENTERS"],
  CT16: ["QUAD-TRAPEZOID","QUAD-PARALLELOGRAM","QUAD-RECTANGLE","QUAD-RHOMBUS","QUAD-SQUARE-HIER"],
  CT17: ["SIM-THALES","SIM-MID-BISECTOR","SIM-CRITERIA","SIM-LENGTH","SIM-RATIO-EXT","SIM-CHAIN"],
  CT18: ["RIGHT-PYTHAGORE","RIGHT-ALTITUDE","RIGHT-TRIG-RATIO","RIGHT-SOLVE","RIGHT-APPLICATION"],
  CT19: ["CIRCLE-ANGLES","CIRCLE-CHORD-ARC","CIRCLE-TANGENT","CIRCLE-CYCLIC","CIRCLE-POWER","CIRCLE-MEASURE","CIRCLE-POSITION","TRI-CIRCUMCENTER","TRI-INCENTER","GEO-REGULAR-SYMM"],
  CT20: ["SIM-CHAIN","GEO-SYNTHESIS","CIRCLE-TANGENT","SOLID-PRISM","TRI-SPECIAL","QUAD-SQUARE-HIER","GEO-REGULAR-SYMM","GEO-PLANE-MEASURE","SOLID-PYRAMID","SOLID-CYL-CONE","SOLID-SPHERE"]
};
for (const [topic, expected] of Object.entries(expectedNewFamilies)) {
  assert.deepEqual(
    new Set(policy.rows.filter((r) => r.topic_id === topic && r.family_id).map((r) => r.family_id)),
    new Set(expected),
    topic + " family set drift"
  );
}
for (const topic of ["CT13","CT14","CT15","CT16","CT17","CT18","CT19"]) {
  assert.equal(policy.rows.filter((r) => r.topic_id === topic && !r.family_id).length, 0,
    topic + " must have zero NO_FAMILY rows in reviewed S3");
}
assert.equal(policy.rows.filter((r) => r.topic_id === "CT20" && !r.family_id).length, 10);

// Preserve accepted I3E evidence, then append S3 evidence.
const prior = i3eValidated.rows.get("FUN10V1_004");
let store = obs.emptyStore();
let rec = obs.recordAttemptToStore(store, prior, {
  correct: true, hintsUsed: 0, fullSolutionViewed: false, selectedIndex: 0, practiceMode: "normal"
}, i3ePolicy, "2026-10-03T00:30:00+07:00", "i3e-owner");
store = rec.store;
assert.equal(rec.event.family_id, "FUNC-BASIC");
assert.equal(rec.event.independent_evidence, true);

// One representative from every newly opened topic.
for (const [id, family] of [
  ["GEO13V1_001", "GEO-LINE-FOUND"],
  ["TRI14V1_001", "TRI-SPECIAL"],
  ["CTR15V1_001", "TRI-CENTROID"],
  ["QUAD16V1_001", "QUAD-TRAPEZOID"],
  ["GEO17V1_001", "SIM-THALES"],
  ["GEO18V1_001", "RIGHT-PYTHAGORE"],
  ["GEO19V1_001", "CIRCLE-ANGLES"],
  ["GEO20V1_002", "SIM-CHAIN"]
]) {
  const row = validated.rows.get(id);
  rec = obs.recordAttemptToStore(store, row, {
    correct: true, hintsUsed: 0, fullSolutionViewed: false, selectedIndex: 0, practiceMode: "normal"
  }, policy, "2026-10-03T00:31:00+07:00", "i3f-" + id);
  store = rec.store;
  assert.equal(rec.event.family_id, family);
  assert.equal(rec.event.independent_evidence, true);
  const topicIndex = Number(row.topic_id.slice(2)) - 2;
  assert.equal(rec.event.source_topic_policy_blob, gitBlobSha(read(topicPaths[topicIndex])));
}
assert.equal(store.recent_events[0].event_id, "i3e-owner");

// Clone-family de-duplication remains active inside S3.
const geo13First = validated.rows.get("GEO13V1_001");
const geo13Clone = validated.rows.get("GEO13V1_002");
assert.equal(geo13First.clone_family, geo13Clone.clone_family);
rec = obs.recordAttemptToStore(store, geo13Clone, {
  correct: true, hintsUsed: 0, fullSolutionViewed: false
}, policy, "2026-10-03T00:32:00+07:00", "i3f-geo13-clone");
store = rec.store;
assert.equal(rec.event.family_id, "GEO-LINE-FOUND");
assert.equal(rec.event.independent_evidence, false);
assert.equal(rec.event.independent_reason, "clone_family_repeat");

// Same family reused across different topics remains independently observable.
const triPerp14 = validated.rows.get("TRI14V1_125");
const triPerp15 = validated.rows.get("CTR15V1_079");
rec = obs.recordAttemptToStore(store, triPerp14, {
  correct: true, hintsUsed: 0, fullSolutionViewed: false
}, policy, "2026-10-03T00:33:00+07:00", "i3f-perp14");
store = rec.store;
assert.equal(rec.event.family_id, "TRI-PERPBISECTOR");
assert.equal(rec.event.independent_evidence, true);
rec = obs.recordAttemptToStore(store, triPerp15, {
  correct: true, hintsUsed: 0, fullSolutionViewed: false
}, policy, "2026-10-03T00:34:00+07:00", "i3f-perp15");
store = rec.store;
assert.equal(rec.event.family_id, "TRI-PERPBISECTOR");
assert.equal(rec.event.independent_evidence, true);
assert.notEqual(obs.evidenceUnitKey(triPerp14), obs.evidenceUnitKey(triPerp15));

// CT20 intentional formative rows remain no-write guards.
for (const id of ["GEO20V1_001", "GEO20V1_118"]) {
  const guard = validated.rows.get(id);
  assert.equal(guard.capture_status, obs.I3F_GUARD_STATUS);
  assert.throws(() => obs.recordAttemptToStore(store, guard, {
    correct: true, hintsUsed: 0, fullSolutionViewed: false
  }, policy, "2026-10-03T00:35:00+07:00", "guard-" + id), /row_not_capture_eligible/);
}

// CT21+ remains outside this controlled phase.
assert.equal(validated.rows.has("STA21V1_001"), false);

// G2 remains frozen to CT04-CT07 and is not expanded into S3.
assert.equal(g2.production_store.key, "toan-thcs-canonical-evidence-v2");
assert.equal(g2.scope.rows, 101);
assert.equal(g2.scope.canonical_skills, 7);
assert.equal(g2.runtime_rules.mastery_threshold, null);
assert.equal(g2.runtime_rules.core_readiness_credit, false);
assert.notEqual(g2.production_store.key, obs.STORE_KEY);
const g2Ids = new Set(g2.rows.map((r) => r.question_id));
for (const id of ["GEO13V1_001","TRI14V1_001","CTR15V1_001","QUAD16V1_001","GEO17V1_001","GEO18V1_001","GEO19V1_001","GEO20V1_002"]) {
  assert.equal(g2Ids.has(id), false, id + " must not be added to frozen G2");
}

const practice = read("docs/assets/javascripts/practice-engine-v2.js").toString("utf8");
const legacyAt = practice.indexOf("RoadmapLearnerEvidence.recordAnswer");
const g2At = practice.indexOf("RoadmapCanonicalEvidenceObserver?.captureAttempt");
const tv2At = practice.indexOf("RoadmapTaxonomyV2Observer?.captureAttempt");
assert.ok(legacyAt >= 0 && g2At > legacyAt && tv2At > g2At, "shadow capture order changed");

const observerSource = read("docs/assets/javascripts/taxonomy-v2-evidence-observer-v1.js").toString("utf8");
assert.ok(observerSource.includes("taxonomy-v2-runtime/i3g-ct02-25-r1.json"));
for (let n = 2; n <= 20; n += 1) {
  const file = "ct" + String(n).padStart(2, "0") + "-r1.json";
  assert.ok(!observerSource.includes('new URL("../data/curriculum/taxonomy-v2-runtime/' + file + '"'));
}
assert.ok(!observerSource.includes('new URL("../data/curriculum/taxonomy-v2-runtime/index-r1.json"'));

console.log("PASS Taxonomy v2 I3F CT02-CT20 policy: 2408 active + 94 NO_FAMILY guards.");
console.log("PASS exact 2502-row coverage / 108 families / max 543 independent units.");
console.log("PASS I3E store continuity and S3 topic-scoped family reuse.");
console.log("PASS S3 clone-family de-duplication and CT20 10 NO_FAMILY guards.");
console.log("PASS G2 remains frozen to CT04-CT07; CT21+ excluded; mastery, Readiness, backfill and learner UI remain off.");
