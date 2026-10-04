#!/usr/bin/env node
"use strict";

const assert = require("node:assert/strict");
const fs = require("node:fs");
const crypto = require("node:crypto");

const read = (p) => fs.readFileSync(p, "utf8");
const json = (p) => JSON.parse(read(p));
const gitBlobSha = (text) => crypto.createHash("sha1")
  .update("blob " + Buffer.byteLength(text, "utf8") + "\0" + text)
  .digest("hex");

const matrixPath = "docs/assets/data/curriculum/kntt-coverage-matrix-6-9-v1.json";
const matrix = json(matrixPath);

assert.equal(matrix.schema, "kntt-coverage-matrix-6-9-v1");
assert.equal(matrix.version, 1);
assert.equal(matrix.status, "FRAMEWORK_RECONCILIATION_ONLY_NOT_LEARNER_RUNTIME");
assert.equal(matrix.grades.length, 4);
assert.deepEqual(matrix.grades.map(g => g.grade), [6,7,8,9]);

const taxPath = matrix.source_universe.taxonomy_v2.path;
const kgPath = matrix.source_universe.knowledge_graph.path;
const taxText = read(taxPath);
const kgText = read(kgPath);
assert.equal(gitBlobSha(taxText), matrix.source_universe.taxonomy_v2.blob_sha, "taxonomy source drift");
assert.equal(gitBlobSha(kgText), matrix.source_universe.knowledge_graph.blob_sha, "knowledge graph source drift");

const tax = JSON.parse(taxText);
const kg = JSON.parse(kgText);
const universe = new Set(Object.keys(kg.nodes || {}));
for (const family of tax.families || []) {
  for (const skill of family.diagnostic_subskills || []) universe.add(skill);
}

let totalRows = 0;
const statusCounts = {};
for (const grade of matrix.grades) {
  const srcText = read(grade.source_map.path);
  assert.equal(gitBlobSha(srcText), grade.source_map.blob_sha, "KNTT Grade " + grade.grade + " source-map drift");
  const src = JSON.parse(srcText);
  assert.equal(src.grade, grade.grade);

  totalRows += grade.rows.length;
  assert.equal(grade.row_count, grade.rows.length);

  const uniqueRefs = new Set();
  const uniqueCurrent = new Set();
  const uniqueUnresolved = new Set();

  for (const row of grade.rows) {
    for (const skill of row.historical_skill_refs) uniqueRefs.add(skill);
    const expectedCurrent = row.historical_skill_refs.filter(s => universe.has(s));
    const expectedUnresolved = row.historical_skill_refs.filter(s => !universe.has(s));
    assert.deepEqual(row.current_skill_matches, expectedCurrent, "current skill drift G" + grade.grade + " " + row.chapter + " " + row.lesson_ref);
    assert.deepEqual(row.unresolved_skill_refs, expectedUnresolved, "unresolved skill drift G" + grade.grade + " " + row.chapter + " " + row.lesson_ref);
    for (const skill of expectedCurrent) uniqueCurrent.add(skill);
    for (const skill of expectedUnresolved) uniqueUnresolved.add(skill);

    let expectedStatus;
    if (expectedUnresolved.length === 0) {
      expectedStatus = row.explicit_item_review_refs.length ? "CURRENT_MAPPED_ITEM_REVIEW" : "CURRENT_MAPPED";
    } else {
      expectedStatus = expectedCurrent.length === 0 ? "RECONCILE_REQUIRED" : "PARTIAL_RECONCILE";
    }
    assert.equal(row.coverage_status, expectedStatus, "coverage status drift G" + grade.grade + " " + row.chapter + " " + row.lesson_ref);
    statusCounts[row.coverage_status] = (statusCounts[row.coverage_status] || 0) + 1;
  }

  assert.equal(grade.unique_skill_refs, uniqueRefs.size);
  assert.equal(grade.unique_current_matches, uniqueCurrent.size);
  assert.equal(grade.unique_unresolved_refs, uniqueUnresolved.size);
}

assert.equal(matrix.global_summary.total_rows, totalRows);
assert.deepEqual(matrix.global_summary.status_counts, statusCounts);
assert.equal(totalRows, 78);

assert.equal(matrix.protected_boundaries.learner_facing_change, false);
assert.equal(matrix.protected_boundaries.mastery_readiness_change, false);
assert.equal(matrix.protected_boundaries.history_migration, false);
assert.equal(matrix.protected_boundaries.item_regrade, false);
assert.equal(matrix.protected_boundaries.taxonomy_runtime_activation, false);

console.log("PASS: KNTT Coverage Matrix 6-9 matches reviewed grade maps and current skill universe.");
console.log("PASS: 78 curriculum rows are reconciled without learner/runtime changes.");
