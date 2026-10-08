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

const path = "docs/assets/data/curriculum/kntt-grade6-reconciliation-r1.json";
const r = json(path);

assert.equal(r.schema, "kntt-grade6-reconciliation-r1");
assert.equal(r.version, 1);
assert.equal(r.status, "RECONCILED_REVIEWED_NO_RUNTIME_CHANGE");
assert.equal(r.summary.unresolved_input_count, 35);
assert.equal(r.summary.reconciled_count, 35);
assert.equal(r.entries.length, 35);

for (const lock of [
  r.source_locks.coverage_matrix,
  r.source_locks.grade6_map,
  r.source_locks.knowledge_graph
]) {
  assert.equal(gitBlobSha(read(lock.path)), lock.blob_sha, "source drift: " + lock.path);
}
for (const lock of r.source_locks.learning_workspaces) {
  if (lock.path.endsWith("topic02-learning-workspace.json")) {
    // Grade-6 reconciliation locks the historical review input. Later Grade-7
    // append-only Learn cards may extend this shared workspace without
    // invalidating the reviewed Grade-6 semantic decision.
    assert.match(lock.blob_sha, /^[0-9a-f]{40}$/);
    const current = json(lock.path);
    for (const id of ["num02-g6-core-1","num02-g6-core-2","num02-g6-core-3","num02-g6-core-4","num02-g6-core-5"]) {
      assert.ok(current.cards.some(card => card.id === id), "historical Grade-6 card removed: " + id);
    }
  } else if (lock.path.endsWith("topic21-learning-workspace.json")) {
    // Topic 21 is also cross-grade. Grade-7 append-only Micro links may extend
    // Grade-7-only cards without invalidating the reviewed Grade-6 semantics.
    assert.match(lock.blob_sha, /^[0-9a-f]{40}$/);
    const current = json(lock.path);
    for (const id of ["sta21-core-1","sta21-core-2","sta21-core-5"]) {
      assert.ok(current.cards.some(card => card.id === id), "historical Grade-6 statistics card removed: " + id);
    }
  } else {
    assert.equal(gitBlobSha(read(lock.path)), lock.blob_sha, "source drift: " + lock.path);
  }
}
assert.equal(
  gitBlobSha(read(r.source_locks.taxonomy_v2.path)),
  r.source_locks.taxonomy_v2.integrated_blob_sha,
  "integrated taxonomy drift"
);
assert.match(r.source_locks.taxonomy_v2.review_input_blob_sha, /^[0-9a-f]{40}$/);

const matrix = json(r.source_locks.coverage_matrix.path);
const grade6 = matrix.grades.find(g => g.grade === 6);
assert.ok(grade6, "Grade 6 matrix missing");
const unresolved = [...new Set(grade6.rows.flatMap(row => row.unresolved_skill_refs || []))].sort();
const reconciled = r.entries.map(e => e.historical_ref).sort();
assert.deepEqual(reconciled, unresolved, "R1 must reconcile exactly the 35 original Grade-6 exact-ID mismatches");
assert.equal(grade6.semantic_reconciliation?.status, "RECONCILED_REVIEWED_R1");
assert.equal(grade6.semantic_reconciliation?.clearance, "G6_R1_RECONCILIATION_REVIEW_COMPLETE");
assert.deepEqual(grade6.semantic_reconciliation?.new_canonical_skills, ["lam-tron-so"]);
assert.deepEqual(grade6.semantic_reconciliation?.remaining_review_queue, []);

const tax = json(r.source_locks.taxonomy_v2.path);
const kg = json(r.source_locks.knowledge_graph.path);
const familyIds = new Set((tax.families || []).map(f => f.family_id));
const skillIds = new Set(Object.keys(kg.nodes || {}));
for (const f of tax.families || []) for (const s of f.diagnostic_subskills || []) skillIds.add(s);

const numSets = (tax.families || []).find(f => f.family_id === "NUM-SETS");
assert.ok(numSets, "NUM-SETS missing");
assert.ok(numSets.diagnostic_subskills.includes("lam-tron-so"), "reviewed skill lam-tron-so missing from NUM-SETS");
assert.equal(tax.runtime_enabled, false, "taxonomy runtime must remain disabled");
assert.equal(tax.learner_data_write_enabled, false, "learner-data writes must remain disabled");
assert.equal(tax.history_backfill_enabled, false, "history backfill must remain disabled");
assert.equal(tax.mastery_thresholds_enabled, false, "mastery thresholds must remain disabled");
assert.equal(tax.readiness_enabled, false, "readiness must remain disabled");

assert.equal(r.review?.packet_id, "MATH-KNTT-G6-RECON-R1-20261004");
assert.equal(r.review?.result, "PASS");
assert.equal(r.review?.expected_ids, 7);
assert.equal(r.review?.reviewed_ids, 7);
assert.equal(r.review?.clearance, "G6_R1_RECONCILIATION_REVIEW_COMPLETE");
assert.ok(read(r.review.result_path).includes("CLEARANCE|G6_R1_RECONCILIATION_REVIEW_COMPLETE"), "review receipt missing clearance");

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
    assert.equal(e.canonical_skill_ids.length, 0, "family resolution must not assert skill mapping");
    assert.ok(e.canonical_family_ids.length > 0, e.historical_ref + " needs canonical family");
    for (const f of e.canonical_family_ids) assert.ok(familyIds.has(f), "unknown canonical family: " + f);
  } else if (e.resolution === "LESSON_LOCAL") {
    assert.equal(e.canonical_skill_ids.length, 0, "lesson-local must not assert skill mapping");
    assert.equal(e.canonical_family_ids.length, 0, "lesson-local must not assert family mapping");
  } else {
    assert.fail("unclosed/unknown resolution: " + e.resolution);
  }
}

assert.deepEqual(counts, r.summary.resolution_counts);
assert.deepEqual(counts, {
  CANONICAL_SKILL: 18,
  CANONICAL_FAMILY: 16,
  LESSON_LOCAL: 1
});
assert.equal(r.summary.new_canonical_skill_count, 1);
assert.deepEqual(r.summary.new_canonical_skills, ["lam-tron-so"]);
assert.equal(r.summary.resolved_without_new_global_skill, 34);
assert.deepEqual(r.summary.remaining_review_queue, []);
assert.deepEqual(r.summary.remaining_gap_candidates, []);

assert.deepEqual(r.implementation_scope.canonical_skill_additions, ["lam-tron-so"]);
assert.deepEqual(r.implementation_scope.canonical_family_additions, []);
assert.deepEqual(r.implementation_scope.canonical_skill_renames, []);
for (const key of [
  "learner_facing_change",
  "taxonomy_runtime_activation",
  "mastery_readiness_change",
  "learner_history_migration",
  "item_regrade"
]) assert.equal(r.implementation_scope[key], false, "protected implementation boundary changed: " + key);

console.log("PASS: Grade-6 R1 semantically reconciles all 35 historical refs after NotebookLM 7/7 PASS.");
console.log("PASS: 18 skill + 16 family + 1 lesson-local; only lam-tron-so added to durable registry.");
console.log("PASS: runtime, learner history, Mastery and Readiness remain unchanged.");
