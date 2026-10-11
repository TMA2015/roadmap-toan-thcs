#!/usr/bin/env node
"use strict";
const fs=require("node:fs");
const assert=require("node:assert/strict");
const read=p=>JSON.parse(fs.readFileSync(p,"utf8"));

const rec=read("docs/assets/data/curriculum/priority-coverage-reconciliation-r1.json");
const matrix=read("docs/assets/data/curriculum/skill-priority-matrix-r1.json");
const practice=read("docs/assets/data/curriculum/practice-coverage-priority-r1.json");
const impl=read("docs/assets/data/curriculum/practice-implementation-wave1-r1.json");
const readiness=read("docs/assets/data/curriculum/readiness-coverage-post-wave1-r1.json");
const written=read("docs/assets/data/curriculum/written-coverage-post-wave1-r1.json");
const result=fs.readFileSync("review-packets/priority-coverage-reconciliation-r1/04_NOTEBOOKLM_RESULT_R1.md","utf8");

assert.equal(rec.audit_id,"MATH-PRIORITY-COVERAGE-RECONCILIATION-R1-20261010");
assert.equal(rec.status,"ACADEMIC_RECONCILIATION_PASS_ALL_CLOSED");
assert.equal(rec.fixed_facts.canonical_families,131);
assert.deepEqual(rec.fixed_facts.kntt_core_priority_counts,{P0:11,P1:37,P2:52});
assert.equal(rec.reconciliation_queue.total,14);
assert.equal(rec.reconciliation_queue.rows.length,14);
assert.equal(new Set(rec.reconciliation_queue.rows.map(r=>r.domain+":"+r.family_id)).size,14);

const by=new Map(matrix.family_rows.map(r=>[r.family_id,r]));
for(const r of rec.reconciliation_queue.rows){
  assert.ok(by.has(r.family_id));
  assert.equal(r.final_review_decision,"KEEP_CLOSED");
  assert.ok(r.final_review_rationale);
}

const expectedWritten=["NUM-INTEGER-OPS","NUM-ORDER","NUM-POWER","RATIO-PROP","EQ-BASIC","TRI-CONGRUENCE","TRI-ORTHOCENTER","CIRCLE-POSITION","STAT-FREQUENCY","STAT-ADVANCED-DATA"];
for(const id of expectedWritten) assert.ok(written.post_wave1.remaining_zero_families.includes(id));
assert.ok(readiness.post_wave1.one_item_family_ids.includes("CIRCLE-CYCLIC"));
assert.ok(practice.low_density.keep.includes("RAD-EQUATION"));
for(const id of ["QUAD-GRAPH","RATIO-MODEL"]){
  assert.ok(practice.low_density.add.includes(id));
  const row=rec.reconciliation_queue.rows.find(r=>r.family_id===id);
  assert.equal(row.current_coverage.practice_items,impl.practice_scope[id].target_after);
}

assert.equal(rec.stable_context.high_priority_dense_practice_no_more_count,13);
assert.equal(rec.independent_review.reviewer,"NotebookLM");
assert.equal(rec.independent_review.verdict,"PASS");
assert.equal(rec.independent_review.clearance,"PRIORITY_COVERAGE_RECONCILIATION_R1_REVIEW_COMPLETE");
assert.deepEqual(rec.independent_review.decision_counts,{total:14,KEEP_CLOSED:14,REOPEN_SEPARATE_REVIEW:0,NEEDS_MORE_EVIDENCE:0});
assert.equal(rec.conclusion.all_14_rows_closed,true);
assert.equal(rec.conclusion.new_bounded_reviews_authorized,0);
assert.equal(rec.conclusion.new_content_authorized,false);
assert.equal(rec.next_gate,"R1_PRIORITY_COVERAGE_RECONCILIATION_COMPLETE");

for(const v of Object.values(rec.protected_boundaries)) assert.equal(v,false);
assert.ok(result.includes("OVERALL|PASS"));
assert.ok(result.includes("CLEARANCE|PRIORITY_COVERAGE_RECONCILIATION_R1_REVIEW_COMPLETE"));

console.log("PASS: priority coverage reconciliation R1 records exactly 14/14 KEEP_CLOSED decisions.");
console.log("PASS: no new bounded review or content authoring is authorized.");
console.log("PASS: taxonomy, readiness/mastery behavior, and learner history remain unchanged.");
