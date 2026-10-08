#!/usr/bin/env node
"use strict";
const assert=require("node:assert/strict");
const fs=require("node:fs");
const crypto=require("node:crypto");
const read=p=>fs.readFileSync(p,"utf8");
const json=p=>JSON.parse(read(p));
const blob=text=>crypto.createHash("sha1").update("blob "+Buffer.byteLength(text,"utf8")+"\0"+text).digest("hex");

const a=json("docs/assets/data/curriculum/kntt-dimension-coverage-g7-v1.json");
assert.equal(a.schema,"kntt-dimension-coverage-audit-v1");
assert.equal(a.version,1);
assert.equal(a.grade,7);
assert.equal(a.status,"G7_EVIDENCE_AUDIT_BASELINE_PENDING");
assert.equal(a.rows.length,21);
assert.equal(a.summary.row_count,21);
assert.equal(a.summary.semantic_baseline_rows,21);
assert.equal(a.summary.evidence_audit_pending_rows,21);
assert.equal(a.summary.content_mutations,0);
assert.equal(a.summary.new_canonical_skills,0);

for(const k of ["coverage_matrix","grade7_reconciliation","grade7_reconciliation_review","taxonomy","written_library"]){
  const lock=a.source_locks[k];
  assert.equal(blob(read(lock.path)),lock.blob_sha,"source drift: "+lock.path);
}
const review=read(a.source_locks.grade7_reconciliation_review.path);
assert.ok(review.includes("G7_R2_RECONCILIATION_REVIEW_COMPLETE"));
assert.equal(a.semantic_reconciliation.status,"RECONCILED_REVIEWED_R2");
assert.equal(a.semantic_reconciliation.clearance,"G7_R2_RECONCILIATION_REVIEW_COMPLETE");
assert.deepEqual(a.semantic_reconciliation.remaining_review_queue,[]);

const matrix=json(a.source_locks.coverage_matrix.path);
const g7=matrix.grades.find(g=>g.grade===7);
assert.equal(g7.rows.length,21);
assert.deepEqual(a.rows.map(r=>[r.chapter,r.lesson_ref]),g7.rows.map(r=>[r.chapter,r.lesson_ref]));

for(const r of a.rows){
  assert.equal(r.dimensions.SKILL_MAP.status,"BASELINE_FROM_RECONCILED_MATRIX");
  for(const d of ["LEARN_CONTENT","MICRO_PRACTICE","PRACTICE_BANK","WRITTEN_LIBRARY","READINESS"]){
    assert.equal(r.dimensions[d].status,"AUDIT_PENDING",r.lesson_ref+" "+d);
  }
  assert.equal(r.semantic_targets.semantic_reconciliation_closed,true);
}

for(const [k,v] of Object.entries(a.protected_boundaries)) assert.equal(v,false,"protected boundary changed: "+k);

console.log("PASS: Grade-7 dimension audit baseline contains exactly 21 semantically reconciled KNTT rows.");
console.log("PASS: all five learner-evidence dimensions remain audit-pending; no content mutation or taxonomy expansion is implied.");
console.log("PASS: Grade-7 R2 reconciliation clearance is source-locked.");
