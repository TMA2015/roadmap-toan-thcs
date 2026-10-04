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
assert.equal(r.status, "DRAFT_RECONCILIATION_REVIEW_PENDING_NO_RUNTIME_CHANGE");
assert.equal(r.summary.exact_id_unresolved_input_count, 11);
assert.equal(r.entries.length, 11);

for (const lock of [
  r.source_locks.coverage_matrix,
  r.source_locks.grade7_map,
  r.source_locks.taxonomy_v2,
  r.source_locks.knowledge_graph,
  ...r.source_locks.learning_workspaces
]) {
  assert.equal(gitBlobSha(read(lock.path)), lock.blob_sha, "source drift: " + lock.path);
}

const matrix = json(r.source_locks.coverage_matrix.path);
const grade7 = matrix.grades.find(g => g.grade === 7);
assert.ok(grade7, "Grade 7 matrix missing");
const unresolved = [...new Set(grade7.rows.flatMap(row => row.unresolved_skill_refs || []))].sort();
const reconciled = r.entries.map(e => e.historical_ref).sort();
assert.deepEqual(reconciled, unresolved, "R2 must cover exactly the current 11 Grade-7 exact-ID mismatches");

const tax = json(r.source_locks.taxonomy_v2.path);
const kg = json(r.source_locks.knowledge_graph.path);
const familyIds = new Set((tax.families || []).map(f => f.family_id));
const skillIds = new Set(Object.keys(kg.nodes || {}));
for (const f of tax.families || []) for (const s of f.diagnostic_subskills || []) skillIds.add(s);

const expectedReview = new Set([
  "phep-tinh-so-huu-ti",
  "quy-tac-chuyen-ve",
  "so-vo-ti",
  "tap-hop-so-thuc",
  "chia-da-thuc-mot-bien"
]);

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
    assert.equal(e.canonical_skill_ids.length, 0, "family mapping must not assert a skill");
    assert.ok(e.canonical_family_ids.length > 0, e.historical_ref + " needs canonical family");
    for (const f of e.canonical_family_ids) assert.ok(familyIds.has(f), "unknown canonical family: " + f);
  } else if (e.resolution === "NEEDS_REVIEW") {
    assert.ok(expectedReview.has(e.historical_ref), "unexpected review ref: " + e.historical_ref);
    assert.equal(e.canonical_skill_ids.length, 0, "review item must not assert skill mapping");
    assert.equal(e.canonical_family_ids.length, 0, "review item must not assert family mapping");
    const c=e.review_candidates || {};
    for (const s of c.canonical_skill_ids || []) assert.ok(skillIds.has(s), "unknown review skill: " + s);
    for (const f of c.canonical_family_ids || []) assert.ok(familyIds.has(f), "unknown review family: " + f);
  } else {
    assert.fail("unknown resolution: " + e.resolution);
  }
}
assert.deepEqual(new Set(r.summary.review_queue), expectedReview);
assert.deepEqual(counts, r.summary.resolution_counts);
assert.deepEqual(counts, { NEEDS_REVIEW: 5, CANONICAL_SKILL: 3, CANONICAL_FAMILY: 3 });
assert.equal(r.summary.closed_without_new_identity, 6);

for (const [k,v] of Object.entries(r.protected_boundaries)) assert.equal(v, false, "protected boundary changed: " + k);

console.log("PASS: Grade-7 R2 covers exactly 11 historical exact-ID mismatches.");
console.log("PASS: 3 skill + 3 family + 5 review; no runtime or new-identity authorization.");
