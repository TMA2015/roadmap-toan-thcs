#!/usr/bin/env node
"use strict";

const assert = require("node:assert/strict");
const fs = require("node:fs");
const crypto = require("node:crypto");

const read = p => fs.readFileSync(p, "utf8");
const json = p => JSON.parse(read(p));
const gitBlobSha = text => crypto.createHash("sha1")
  .update("blob " + Buffer.byteLength(text, "utf8") + "\0" + text)
  .digest("hex");

const path = "docs/assets/data/curriculum/kntt-grade7-reconciliation-r2.json";
const r = json(path);

assert.equal(r.schema, "kntt-grade7-reconciliation-r2");
assert.equal(r.version, 1);
assert.equal(r.status, "RECONCILED_REVIEWED_NO_RUNTIME_CHANGE");
assert.equal(r.summary.exact_id_unresolved_input_count, 11);
assert.equal(r.summary.reconciled_count, 11);
assert.equal(r.entries.length, 11);

for (const lock of [
  r.source_locks.coverage_matrix,
  r.source_locks.grade7_map,
  r.source_locks.knowledge_graph,
  ...r.source_locks.learning_workspaces
]) {
  assert.equal(gitBlobSha(read(lock.path)), lock.blob_sha, "source drift: " + lock.path);
}
assert.equal(
  gitBlobSha(read(r.source_locks.taxonomy_v2.path)),
  r.source_locks.taxonomy_v2.integrated_blob_sha,
  "integrated taxonomy drift"
);
assert.match(r.source_locks.taxonomy_v2.review_input_blob_sha, /^[0-9a-f]{40}$/);

const matrix = json(r.source_locks.coverage_matrix.path);
const grade7 = matrix.grades.find(g => g.grade === 7);
assert.ok(grade7, "Grade 7 matrix missing");
const currentUnresolved = [...new Set(grade7.rows.flatMap(row => row.unresolved_skill_refs || []))].sort();
const allHistoricalRefs = new Set(grade7.rows.flatMap(row => row.historical_skill_refs || []));
const reconciled = r.entries.map(e => e.historical_ref).sort();
assert.equal(reconciled.length, 11, "R2 historical reconciliation scope must stay 11 refs");
assert.ok(reconciled.every(ref => allHistoricalRefs.has(ref)), "R2 ref missing from Grade-7 historical map");
assert.ok(currentUnresolved.every(ref => reconciled.includes(ref)), "current unresolved ref falls outside R2 historical scope");
assert.equal(grade7.semantic_reconciliation?.historical_exact_id_unresolved_count, 11);
assert.equal(grade7.semantic_reconciliation?.status, "RECONCILED_REVIEWED_R2");
assert.equal(grade7.semantic_reconciliation?.clearance, "G7_R2_RECONCILIATION_REVIEW_COMPLETE");
assert.deepEqual(grade7.semantic_reconciliation?.new_canonical_skills, [
  "phep-tinh-so-huu-ti",
  "so-vo-ti",
  "chia-da-thuc-mot-bien"
]);
assert.deepEqual(grade7.semantic_reconciliation?.remaining_review_queue, []);

const tax = json(r.source_locks.taxonomy_v2.path);
const kg = json(r.source_locks.knowledge_graph.path);
const familyIds = new Set((tax.families || []).map(f => f.family_id));
const skillIds = new Set(Object.keys(kg.nodes || {}));
for (const f of tax.families || []) for (const s of f.diagnostic_subskills || []) skillIds.add(s);

const fam = id => (tax.families || []).find(f => f.family_id === id);
assert.ok(fam("NUM-FRACTION-OPS")?.diagnostic_subskills.includes("phep-tinh-so-huu-ti"));
assert.ok(fam("NUM-SETS")?.diagnostic_subskills.includes("so-vo-ti"));
assert.ok(fam("ALG-DIV-MONOMIAL")?.diagnostic_subskills.includes("chia-da-thuc-mot-bien"));

assert.equal(tax.runtime_enabled, false);
assert.equal(tax.learner_data_write_enabled, false);
assert.equal(tax.history_backfill_enabled, false);
assert.equal(tax.mastery_thresholds_enabled, false);
assert.equal(tax.readiness_enabled, false);

assert.equal(r.review?.packet_id, "MATH-KNTT-G7-RECON-R2-20261004");
assert.equal(r.review?.result, "PASS");
assert.equal(r.review?.expected_ids, 5);
assert.equal(r.review?.reviewed_ids, 5);
assert.equal(r.review?.clearance, "G7_R2_RECONCILIATION_REVIEW_COMPLETE");
assert.ok(read(r.review.result_path).includes("CLEARANCE|G7_R2_RECONCILIATION_REVIEW_COMPLETE"));

const seen = new Set();
const counts = {};
for (const e of r.entries) {
  assert.ok(!seen.has(e.historical_ref), "duplicate historical ref: " + e.historical_ref);
  seen.add(e.historical_ref);
  counts[e.resolution] = (counts[e.resolution] || 0) + 1;

  if (e.resolution === "CANONICAL_SKILL") {
    assert.ok(e.canonical_skill_ids.length > 0, e.historical_ref + " needs canonical skill");
    for (const s of e.canonical_skill_ids) assert.ok(skillIds.has(s), "unknown canonical skill: " + s);
    for (const f of e.canonical_family_ids) assert.ok(familyIds.has(f), "unknown canonical family: " + f);
  } else if (e.resolution === "CANONICAL_FAMILY") {
    assert.equal(e.canonical_skill_ids.length, 0);
    assert.ok(e.canonical_family_ids.length > 0, e.historical_ref + " needs canonical family");
    for (const f of e.canonical_family_ids) assert.ok(familyIds.has(f), "unknown canonical family: " + f);
  } else if (e.resolution === "LESSON_LOCAL") {
    assert.equal(e.canonical_skill_ids.length, 0);
    assert.equal(e.canonical_family_ids.length, 0);
  } else {
    assert.fail("unclosed/unknown resolution: " + e.resolution);
  }
}

assert.deepEqual(counts, r.summary.resolution_counts);
assert.deepEqual(counts, {
  CANONICAL_SKILL: 6,
  LESSON_LOCAL: 1,
  CANONICAL_FAMILY: 4
});
assert.deepEqual(r.summary.remaining_review_queue, []);
assert.deepEqual(r.summary.remaining_gap_candidates, []);
assert.equal(r.summary.new_canonical_skill_count, 3);
assert.deepEqual(r.summary.new_canonical_skills, [
  "phep-tinh-so-huu-ti",
  "so-vo-ti",
  "chia-da-thuc-mot-bien"
]);
assert.equal(r.summary.resolved_without_new_global_skill, 8);

assert.deepEqual(r.implementation_scope.canonical_skill_additions, [
  "phep-tinh-so-huu-ti",
  "so-vo-ti",
  "chia-da-thuc-mot-bien"
]);
assert.deepEqual(r.implementation_scope.canonical_family_additions, []);
assert.deepEqual(r.implementation_scope.canonical_family_renames, []);
assert.deepEqual(r.implementation_scope.canonical_skill_renames, []);
for (const key of [
  "learner_facing_change",
  "taxonomy_runtime_activation",
  "mastery_readiness_change",
  "learner_history_migration",
  "item_regrade"
]) assert.equal(r.implementation_scope[key], false, "protected implementation boundary changed: " + key);

console.log("PASS: Grade-7 R2 semantically reconciles all 11 historical refs after NotebookLM 5/5 PASS.");
console.log("PASS: 6 skill + 4 family + 1 lesson-local; exactly 3 reviewed canonical skills added.");
console.log("PASS: runtime, learner history, Mastery and Readiness remain unchanged.");

const g7Audit = json("docs/assets/data/curriculum/kntt-dimension-coverage-g7-v1.json");
assert.equal(g7Audit.grade, 7);
assert.equal(g7Audit.status, "G7_EVIDENCE_AUDIT_BASELINE_PENDING");
assert.equal(g7Audit.rows.length, 21);
assert.equal(g7Audit.summary.row_count, 21);
assert.equal(g7Audit.summary.evidence_audit_pending_rows, 21);
assert.deepEqual(g7Audit.rows.map(row => [row.chapter, row.lesson_ref]), grade7.rows.map(row => [row.chapter, row.lesson_ref]));
for (const row of g7Audit.rows) {
  assert.equal(row.dimensions.SKILL_MAP.status, "BASELINE_FROM_RECONCILED_MATRIX");
  for (const d of ["LEARN_CONTENT","MICRO_PRACTICE","PRACTICE_BANK","WRITTEN_LIBRARY","READINESS"]) {
    assert.equal(row.dimensions[d].status, "AUDIT_PENDING", row.lesson_ref + " " + d);
  }
}
for (const [key,value] of Object.entries(g7Audit.protected_boundaries)) {
  assert.equal(value, false, "Grade-7 audit protected boundary changed: " + key);
}
console.log("PASS: Grade-7 dimension-audit baseline loads all 21 reconciled rows with evidence dimensions pending and no content mutation.");
