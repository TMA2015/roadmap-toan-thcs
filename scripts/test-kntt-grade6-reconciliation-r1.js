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
assert.equal(r.status, "DRAFT_RECONCILIATION_NO_RUNTIME_CHANGE");
assert.equal(r.summary.unresolved_input_count, 35);
assert.equal(r.entries.length, 35);

for (const lock of [
  r.source_locks.coverage_matrix,
  r.source_locks.grade6_map,
  r.source_locks.taxonomy_v2,
  r.source_locks.knowledge_graph,
  ...r.source_locks.learning_workspaces
]) {
  assert.equal(gitBlobSha(read(lock.path)), lock.blob_sha, "source drift: " + lock.path);
}

const matrix = json(r.source_locks.coverage_matrix.path);
const grade6 = matrix.grades.find(g => g.grade === 6);
assert.ok(grade6, "Grade 6 matrix missing");
const unresolved = [...new Set(grade6.rows.flatMap(row => row.unresolved_skill_refs || []))].sort();
const reconciled = r.entries.map(e => e.historical_ref).sort();
assert.deepEqual(reconciled, unresolved, "R1 must reconcile exactly the current 35 Grade-6 unresolved refs");

const tax = json(r.source_locks.taxonomy_v2.path);
const kg = json(r.source_locks.knowledge_graph.path);
const familyIds = new Set((tax.families || []).map(f => f.family_id));
const skillIds = new Set(Object.keys(kg.nodes || {}));
for (const f of tax.families || []) for (const s of f.diagnostic_subskills || []) skillIds.add(s);

const seen = new Set();
const counts = {};
for (const e of r.entries) {
  assert.ok(!seen.has(e.historical_ref), "duplicate historical ref: " + e.historical_ref);
  seen.add(e.historical_ref);
  counts[e.resolution] = (counts[e.resolution] || 0) + 1;

  if (e.resolution === "CANONICAL_SKILL") {
    assert.ok(e.canonical_skill_ids.length > 0, e.historical_ref + " needs canonical skill");
    for (const s of e.canonical_skill_ids) assert.ok(skillIds.has(s), "unknown canonical skill: " + s);
  } else if (e.resolution === "CANONICAL_FAMILY") {
    assert.ok(e.canonical_family_ids.length > 0, e.historical_ref + " needs canonical family");
    for (const f of e.canonical_family_ids) assert.ok(familyIds.has(f), "unknown canonical family: " + f);
  } else if (e.resolution === "NEEDS_REVIEW") {
    assert.equal(e.canonical_skill_ids.length, 0, "NEEDS_REVIEW must not assert skill mapping");
    assert.equal(e.canonical_family_ids.length, 0, "NEEDS_REVIEW must not assert family mapping");
    const c=e.review_candidates || {};
    for (const s of c.canonical_skill_ids || []) assert.ok(skillIds.has(s), "unknown review skill: " + s);
    for (const f of c.canonical_family_ids || []) assert.ok(familyIds.has(f), "unknown review family: " + f);
  } else if (e.resolution === "GAP_CANDIDATE") {
    assert.equal(e.canonical_skill_ids.length, 0, "gap candidate must not assert skill mapping");
    assert.equal(e.canonical_family_ids.length, 0, "gap candidate must not assert family mapping");
    assert.equal(e.new_skill_authorized, false, "gap candidate must not authorize a new skill");
  } else {
    assert.fail("unknown resolution: " + e.resolution);
  }
}

assert.deepEqual(counts, r.summary.resolution_counts);
assert.deepEqual(counts, {
  CANONICAL_SKILL: 16,
  CANONICAL_FAMILY: 12,
  NEEDS_REVIEW: 5,
  GAP_CANDIDATE: 2
});
assert.equal(r.summary.resolved_without_new_skill, 28);

for (const [k,v] of Object.entries(r.protected_boundaries)) assert.equal(v, false, "protected boundary changed: " + k);

console.log("PASS: Grade-6 R1 reconciles exactly 35 unresolved historical refs.");
console.log("PASS: 16 skill + 12 family + 5 review + 2 gap-candidate; no runtime or new-skill authorization.");
