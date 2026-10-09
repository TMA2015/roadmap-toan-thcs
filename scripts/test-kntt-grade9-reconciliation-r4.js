#!/usr/bin/env node
"use strict";
const assert=require("node:assert/strict");
const fs=require("node:fs");
const crypto=require("node:crypto");
const read=p=>fs.readFileSync(p,"utf8");
const json=p=>JSON.parse(read(p));
const blob=text=>crypto.createHash("sha1").update("blob "+Buffer.byteLength(text,"utf8")+"\0"+text).digest("hex");

const r=json("docs/assets/data/curriculum/kntt-grade9-reconciliation-r4.json");
assert.equal(r.schema,"kntt-grade9-reconciliation-r4");
assert.equal(r.version,1);
assert.equal(r.status,"RECONCILED_REVIEWED_LAYER_CORRECTED_NO_RUNTIME_CHANGE");
assert.equal(r.summary.exact_id_unresolved_input_count,4);
assert.equal(r.summary.reconciled_count,4);
assert.equal(r.entries.length,4);
assert.deepEqual(r.summary.resolution_counts,{CANONICAL_SKILL:2,CANONICAL_FAMILY:2});
assert.deepEqual(r.summary.remaining_review_queue,[]);
assert.deepEqual(r.summary.remaining_gap_candidates,[]);
assert.equal(r.summary.semantic_matrix_6_9_closure_candidate,true);

for(const lock of [
  r.source_locks.coverage_matrix,
  r.source_locks.grade9_map,
  r.source_locks.knowledge_graph,
  r.source_locks.learning_workspace
]){
  if(lock===r.source_locks.learning_workspace && lock.path.endsWith("topic21-learning-workspace.json")){
    // Topic 21 is cross-grade. Later Grade-7 append-only Micro links must not
    // invalidate the reviewed Grade-9 semantic reconciliation.
    assert.match(lock.blob_sha,/^[0-9a-f]{40}$/);
    const current=json(lock.path);
    for(const id of ["sta21-core-1","sta21-core-2","sta21-core-3","sta21-core-4","sta21-core-5"]){
      assert.ok(current.cards.some(card=>card.id===id),"historical Topic 21 card removed: "+id);
    }
  }else{
    assert.equal(blob(read(lock.path)),lock.blob_sha,"source drift: "+lock.path);
  }
}
assert.equal(blob(read(r.source_locks.taxonomy_v2.path)),r.source_locks.taxonomy_v2.integrated_blob_sha,"integrated taxonomy drift");
assert.match(r.source_locks.taxonomy_v2.review_input_blob_sha,/^[0-9a-f]{40}$/);

const m=json(r.source_locks.coverage_matrix.path);
const g9=m.grades.find(g=>g.grade===9);
const unresolved=[...new Set(g9.rows.flatMap(x=>x.unresolved_skill_refs||[]))].sort();
assert.deepEqual(r.entries.map(e=>e.historical_ref).sort(),unresolved);
assert.equal(g9.semantic_reconciliation?.status,"RECONCILED_REVIEWED_R4");
assert.equal(g9.semantic_reconciliation?.clearance,"G9_R4_RECONCILIATION_REVIEW_COMPLETE");
assert.deepEqual(g9.semantic_reconciliation?.remaining_review_queue,[]);
assert.equal(m.global_summary.semantic_reconciliation_complete,true);
assert.deepEqual(m.global_summary.semantic_reconciliation_complete_grades,[6,7,8,9]);
assert.deepEqual(m.global_summary.remaining_semantic_reconciliation_queue,[]);

const tax=json(r.source_locks.taxonomy_v2.path);
const families=new Map(tax.families.map(f=>[f.family_id,f]));
assert.equal(families.get("STAT-FREQUENCY").layer,"KNTT-Core");
assert.ok(families.get("STAT-FREQUENCY").diagnostic_subskills.includes("tan-suat"));
assert.equal(families.get("STAT-ADVANCED-DATA").layer,"KNTT-Core");
assert.ok(families.get("STAT-ADVANCED-DATA").diagnostic_subskills.includes("du-lieu-ghep-nhom"));
assert.deepEqual(tax.family_layer_counts,{
  "KNTT-Core":100,
  "Entrance10":19,
  "Specialized-Challenge":4,
  "Core-Support":5,
  "THPT-Bridge":3
});
assert.equal(tax.runtime_enabled,false);
assert.equal(tax.learner_data_write_enabled,false);
assert.equal(tax.history_backfill_enabled,false);
assert.equal(tax.mastery_thresholds_enabled,false);
assert.equal(tax.readiness_enabled,false);

assert.equal(r.review.packet_id,"MATH-KNTT-G9-RECON-R4-20261004");
assert.equal(r.review.result,"PASS");
assert.equal(r.review.expected_ids,4);
assert.equal(r.review.reviewed_ids,4);
assert.equal(r.review.layer_decisions_reviewed,2);
assert.equal(r.review.clearance,"G9_R4_RECONCILIATION_REVIEW_COMPLETE");
assert.ok(read(r.review.result_path).includes("CLEARANCE|G9_R4_RECONCILIATION_REVIEW_COMPLETE"));

const by=Object.fromEntries(r.entries.map(e=>[e.historical_ref,e]));
assert.deepEqual(by["bang-tan-so-tuong-doi"].canonical_skill_ids,["tan-suat"]);
assert.deepEqual(by["bieu-do-tan-so"].canonical_family_ids,["STAT-REPRESENT"]);
assert.deepEqual(by["bieu-do-tan-so-tuong-doi"].canonical_family_ids,["STAT-REPRESENT"]);
assert.deepEqual(by["bang-tan-so-ghep-nhom"].canonical_skill_ids,["du-lieu-ghep-nhom"]);

assert.deepEqual(r.implementation_scope.canonical_skill_additions,[]);
assert.deepEqual(r.implementation_scope.canonical_family_additions,[]);
assert.deepEqual(r.implementation_scope.layer_changes,[
  {family_id:"STAT-FREQUENCY",from:"Core-Support",to:"KNTT-Core"},
  {family_id:"STAT-ADVANCED-DATA",from:"Entrance10",to:"KNTT-Core"}
]);
for(const key of ["learner_facing_change","taxonomy_runtime_activation","mastery_readiness_change","learner_history_migration","item_regrade"]){
  assert.equal(r.implementation_scope[key],false,"protected boundary changed: "+key);
}

console.log("PASS: Grade-9 R4 reconciles the final 4 exact-ID mismatches after NotebookLM 4/4 PASS.");
console.log("PASS: STAT-FREQUENCY and STAT-ADVANCED-DATA are S1-reviewed KNTT-Core.");
console.log("PASS: KNTT Coverage Matrix Grades 6-9 is semantically reconciled; runtime/history/Mastery/Readiness unchanged.");

require("./test-kntt-dimension-coverage-g9-v1.js");
