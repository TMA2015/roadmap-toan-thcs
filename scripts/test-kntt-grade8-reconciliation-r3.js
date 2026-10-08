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

const path = "docs/assets/data/curriculum/kntt-grade8-reconciliation-r3.json";
const r = json(path);

assert.equal(r.schema, "kntt-grade8-reconciliation-r3");
assert.equal(r.version, 1);
assert.equal(r.status, "RECONCILED_NO_NEW_IDENTITY_NO_RUNTIME_CHANGE");
assert.equal(r.summary.exact_id_unresolved_input_count, 3);
assert.equal(r.summary.reconciled_count, 3);
assert.equal(r.entries.length, 3);

for (const lock of [
  r.source_locks.coverage_matrix,
  r.source_locks.grade8_map,
  r.source_locks.taxonomy_v2,
  r.source_locks.knowledge_graph,
  ...r.source_locks.learning_workspaces
]) {
  assert.equal(gitBlobSha(read(lock.path)), lock.blob_sha, "source drift: " + lock.path);
}

const matrix = json(r.source_locks.coverage_matrix.path);
const grade8 = matrix.grades.find(g => g.grade === 8);
assert.ok(grade8, "Grade 8 matrix missing");
const unresolved = [...new Set(grade8.rows.flatMap(row => row.unresolved_skill_refs || []))].sort();
const reconciled = r.entries.map(e => e.historical_ref).sort();
assert.deepEqual(reconciled, unresolved, "R3 must cover exactly the current 3 Grade-8 exact-ID mismatches");
assert.equal(grade8.semantic_reconciliation?.status, "RECONCILED_R3_NO_NEW_IDENTITY");
assert.equal(grade8.semantic_reconciliation?.historical_exact_id_unresolved_count, 3);
assert.deepEqual(grade8.semantic_reconciliation?.new_canonical_skills, []);
assert.deepEqual(grade8.semantic_reconciliation?.remaining_review_queue, []);

const tax = json(r.source_locks.taxonomy_v2.path);
const familyIds = new Set((tax.families || []).map(f => f.family_id));
assert.ok(familyIds.has("PROB-EVENT"));

const composite = (tax.legacy_mappings || []).find(m => m.legacy_id === "bieu-thuc-nhieu-phep-tinh");
assert.ok(composite, "missing reviewed composite mapping");
assert.equal(composite.role, "COMPOSITE_TASK");
assert.equal(composite.family_id, null);
assert.equal(composite.canonical_candidate, null);

const probWorkspace = json("docs/assets/data/curriculum/topic23-learning-workspace.json");
const grade8Card = (probWorkspace.cards || []).find(c => (c.kntt_lessons || []).some(x => x.includes("Lớp 8: Bài 30")));
assert.ok(grade8Card, "missing Grade-8 Bài 30 probability card");
assert.ok((grade8Card.skills || []).includes("phep-thu-ngau-nhien"));
assert.ok((grade8Card.skills || []).includes("bien-co"));

const counts = {};
for (const e of r.entries) {
  counts[e.resolution] = (counts[e.resolution] || 0) + 1;
  if (e.resolution === "CANONICAL_FAMILY") {
    assert.equal(e.canonical_skill_ids.length, 0);
    assert.ok(e.canonical_family_ids.length > 0);
    for (const f of e.canonical_family_ids) assert.ok(familyIds.has(f), "unknown family " + f);
  } else if (e.resolution === "LESSON_LOCAL") {
    assert.equal(e.canonical_skill_ids.length, 0);
    assert.equal(e.canonical_family_ids.length, 0);
  } else {
    assert.fail("unexpected Grade-8 resolution " + e.resolution);
  }
}
assert.deepEqual(counts, { LESSON_LOCAL: 1, CANONICAL_FAMILY: 2 });
assert.deepEqual(r.summary.resolution_counts, { CANONICAL_FAMILY: 2, LESSON_LOCAL: 1 });
assert.deepEqual(r.summary.new_canonical_skills, []);
assert.deepEqual(r.summary.new_canonical_families, []);
assert.deepEqual(r.summary.remaining_review_queue, []);
assert.deepEqual(r.summary.remaining_gap_candidates, []);
assert.equal(r.review_basis.independent_review_required, false);

for (const [key,value] of Object.entries(r.implementation_scope)) {
  if (Array.isArray(value)) assert.deepEqual(value, [], "unexpected identity change: " + key);
  else assert.equal(value, false, "protected boundary changed: " + key);
}

console.log("PASS: Grade-8 R3 semantically reconciles all 3 exact-ID mismatches.");
console.log("PASS: 2 canonical-family + 1 lesson-local; no new taxonomy identity and no independent review required.");
console.log("PASS: runtime, learner history, Mastery and Readiness remain unchanged.");

require("./test-kntt-dimension-coverage-g8-v1.js");
