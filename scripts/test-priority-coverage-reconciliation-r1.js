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
const packet=fs.readFileSync("review-packets/priority-coverage-reconciliation-r1/00_NOTEBOOKLM_PACKET_R1.md","utf8");
const source=fs.readFileSync("review-packets/priority-coverage-reconciliation-r1/01_PRIORITY_COVERAGE_RECONCILIATION_NOTEBOOKLM_SOURCE.md","utf8");

assert.equal(rec.audit_id,"MATH-PRIORITY-COVERAGE-RECONCILIATION-R1-20261010");
assert.equal(rec.status,"REVIEW_PREP_ONLY_NO_AUTHORING");
assert.equal(rec.fixed_facts.canonical_families,131);
assert.deepEqual(rec.fixed_facts.kntt_core_priority_counts,{P0:11,P1:37,P2:52});
assert.equal(rec.fixed_facts.readiness_items,237);
assert.equal(rec.fixed_facts.readiness_core_families_covered,100);
assert.equal(rec.fixed_facts.written_core_families_covered,76);
assert.equal(rec.fixed_facts.written_core_zero_families,24);
assert.equal(rec.fixed_facts.practice_wave1_added_items,10);

const by=new Map(matrix.family_rows.map(r=>[r.family_id,r]));
assert.equal(by.size,131);

const rows=rec.reconciliation_queue.rows;
assert.equal(rec.reconciliation_queue.total,14);
assert.equal(rows.length,14);
assert.equal(new Set(rows.map(r=>r.domain+":"+r.family_id)).size,14);

const expectedReadiness=["CIRCLE-CYCLIC"];
const expectedWritten=[
  "NUM-INTEGER-OPS","NUM-ORDER","NUM-POWER","RATIO-PROP","EQ-BASIC",
  "TRI-CONGRUENCE","TRI-ORTHOCENTER","CIRCLE-POSITION","STAT-FREQUENCY","STAT-ADVANCED-DATA"
];
const expectedPractice=["RAD-EQUATION","QUAD-GRAPH","RATIO-MODEL"];
assert.deepEqual(rows.filter(r=>r.domain==="READINESS").map(r=>r.family_id),expectedReadiness);
assert.deepEqual(rows.filter(r=>r.domain==="WRITTEN").map(r=>r.family_id),expectedWritten);
assert.deepEqual(rows.filter(r=>r.domain==="PRACTICE").map(r=>r.family_id),expectedPractice);

for(const r of rows){
  const m=by.get(r.family_id);
  assert.ok(m,"unknown family "+r.family_id);
  assert.equal(r.learner_priority,m.review_decision.learner_priority);
  assert.equal(r.practice_weight_guidance,m.review_decision.practice_weight_guidance);
  assert.ok(["P0_FOUNDATION_CRITICAL","P1_HIGH_VALUE_CORE","E1_HIGH_TRANSFER","SUPPORT_HIGH_VALUE"].includes(r.learner_priority));
}

assert.ok(readiness.post_wave1.one_item_family_ids.includes("CIRCLE-CYCLIC"));
assert.equal(rows.find(r=>r.domain==="READINESS").current_coverage.readiness_primary_items,1);

for(const id of expectedWritten){
  assert.ok(written.post_wave1.remaining_zero_families.includes(id));
  assert.equal(rows.find(r=>r.domain==="WRITTEN"&&r.family_id===id).prior_decision,"KEEP_NO_WRITTEN");
}

assert.ok(practice.low_density.keep.includes("RAD-EQUATION"));
assert.equal(rows.find(r=>r.family_id==="RAD-EQUATION").current_coverage.practice_items,3);
for(const id of ["QUAD-GRAPH","RATIO-MODEL"]){
  assert.ok(practice.low_density.add.includes(id));
  const row=rows.find(r=>r.family_id===id);
  assert.equal(row.current_coverage.practice_items,impl.practice_scope[id].target_after);
  assert.equal(row.current_coverage.wave1_added_items,impl.practice_scope[id].add_items);
}

assert.equal(rec.stable_context.high_priority_dense_practice_no_more_count,13);
for(const r of rec.stable_context.high_priority_dense_practice_no_more){
  assert.ok(practice.practice_density_no_more.includes(r.family_id));
  assert.equal(r.prior_decision,"NO_MORE");
}

assert.deepEqual(rec.allowed_decisions,["KEEP_CLOSED","REOPEN_SEPARATE_REVIEW","NEEDS_MORE_EVIDENCE"]);
for(const v of Object.values(rec.protected_boundaries)) assert.equal(v,false);
assert.equal(rec.next_gate,"NOTEBOOKLM_RECONCILIATION_REVIEW");

assert.ok(packet.includes("exactly 14 unique DECISION lines"));
assert.ok(packet.includes("PRIORITY_COVERAGE_RECONCILIATION_R1_REVIEW_COMPLETE"));
assert.ok(source.includes("Exact reconciliation queue — 14 rows"));
assert.ok(!source.includes(".json` as a NotebookLM source"));

console.log("PASS: priority coverage reconciliation R1 contains exactly 14 high-priority tension rows.");
console.log("PASS: previous coverage decisions are preserved as evidence; no automatic authoring or quota is activated.");
console.log("PASS: NotebookLM review packet is bounded to KEEP_CLOSED / REOPEN_SEPARATE_REVIEW / NEEDS_MORE_EVIDENCE.");
