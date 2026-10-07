#!/usr/bin/env node
"use strict";
const assert=require("node:assert/strict");
const fs=require("node:fs");
const crypto=require("node:crypto");
const read=p=>fs.readFileSync(p,"utf8");
const json=p=>JSON.parse(read(p));
const blob=text=>crypto.createHash("sha1").update("blob "+Buffer.byteLength(text,"utf8")+"\0"+text).digest("hex");

const path="docs/assets/data/curriculum/kntt-dimension-coverage-g6-v1.json";
const a=json(path);
assert.equal(a.schema,"kntt-dimension-coverage-audit-v1");
assert.equal(a.version,1);
assert.equal(a.grade,6);
assert.equal(a.status,"G6_WRITTEN_GAP_PRIORITY_RECONCILED_R1");
assert.equal(a.rows.length,31);

for(const lock of [
  a.source_locks.coverage_matrix,
  a.source_locks.grade6_reconciliation,
  a.source_locks.taxonomy,
  a.source_locks.written_library
]) assert.equal(blob(read(lock.path)),lock.blob_sha,"source drift: "+lock.path);

for(const ev of Object.values(a.source_locks.topic_evidence)){
  for(const k of ["workspace","micro","manifest"]) assert.equal(blob(read(ev[k].path)),ev[k].sha,"source drift: "+ev[k].path);
}

const matrix=json(a.source_locks.coverage_matrix.path);
const g6=matrix.grades.find(g=>g.grade===6);
assert.equal(g6.rows.length,31);
assert.equal(g6.semantic_reconciliation.status,"RECONCILED_REVIEWED_R1");
assert.deepEqual(a.rows.map(r=>[r.chapter,r.lesson_ref]),g6.rows.map(r=>[r.chapter,r.lesson_ref]));

const counts=a.summary.dimension_status_counts;
assert.deepEqual(counts.SKILL_MAP,{VERIFIED_SEMANTIC:31});
assert.equal(counts.LEARN_CONTENT.VERIFIED_DIRECT,23);
assert.equal(counts.LEARN_CONTENT.VERIFIED_LESSON_LOCAL,4);
assert.equal(counts.LEARN_CONTENT.VERIFIED_DIRECT_AND_LOCAL,4);
assert.equal(counts.MICRO_PRACTICE.NONE,0);
assert.equal(counts.MICRO_PRACTICE.VERIFIED_LESSON_LOCAL,4);
assert.equal(counts.MICRO_PRACTICE.VERIFIED_DIRECT_AND_LOCAL,4);
assert.equal(counts.LEARN_CONTENT.PARTIAL_SHARED_SKILL,0);
assert.equal(counts.LEARN_CONTENT.PARTIAL_PLACEMENT,0);
assert.equal(counts.MICRO_PRACTICE.PARTIAL,0);
assert.equal(counts.PRACTICE_BANK.NONE,0);
assert.equal(counts.WRITTEN_LIBRARY.VERIFIED_KNTT_PLACEMENT,4);
assert.equal(counts.WRITTEN_LIBRARY.CANDIDATE_ONLY_NO_KNTT_PLACEMENT,0);
assert.equal(counts.WRITTEN_LIBRARY.NONE,27);
assert.equal(counts.READINESS.AUTHORIZED_TOPIC_LEVEL,1);
assert.equal(counts.READINESS.NOT_VERIFIED_STRUCTURED,29);
assert.equal(counts.READINESS.REVIEWED_STRUCTURED_READINESS,1);
assert.equal(counts.READINESS.PENDING_REVIEW,0);

const written=json(a.source_locks.written_library.path);
assert.equal((written.exercises||[]).filter(e=>e.kntt_placements).length,4);
assert.equal(a.summary.written_library_kntt_placement_count,4);

const byLesson=Object.fromEntries(a.rows.map(r=>[r.lesson_ref,r]));
assert.equal(byLesson["Bài 30"].dimensions.LEARN_CONTENT.status,"VERIFIED_DIRECT");
assert.equal(byLesson["Bài 30"].dimensions.MICRO_PRACTICE.status,"VERIFIED_DIRECT");
assert.equal(byLesson["Bài 30"].dimensions.PRACTICE_BANK.status,"TOPIC_SKILL_EVIDENCE");
assert.equal(byLesson["Bài 30"].repair_evidence.status,"REPAIRED_REVIEWED_R1");
assert.equal(byLesson["Bài 30"].repair_evidence.clearance,"G6_BAI30_ROUNDING_CONTENT_REVIEW_COMPLETE");
assert.ok(a.source_locks.topic_evidence["02-so-va-phep-tinh"].micro.grade6Skills.includes("lam-tron-so"));
assert.ok(a.source_locks.topic_evidence["02-so-va-phep-tinh"].manifest.skills.includes("lam-tron-so"));
assert.ok(byLesson["Bài 30"].semantic_targets.direct_skills.includes("lam-tron-so"));

assert.equal(byLesson["Bài 1-3"].dimensions.LEARN_CONTENT.status,"VERIFIED_DIRECT_AND_LOCAL");
assert.equal(byLesson["Bài 1-3"].dimensions.MICRO_PRACTICE.status,"VERIFIED_DIRECT_AND_LOCAL");
assert.deepEqual(byLesson["Bài 1-3"].dimensions.MICRO_PRACTICE.lesson_local_item_ids,["NUM02MICRO_033","NUM02MICRO_034","NUM02MICRO_035"]);
assert.deepEqual(byLesson["Bài 1-3"].dimensions.MICRO_PRACTICE.lesson_local_hits,["ghi-so-tu-nhien","thu-tu-so-tu-nhien"]);
assert.equal(byLesson["Bài 1-3"].dimensions.MICRO_PRACTICE.lesson_local_gates_core,false);
assert.equal(byLesson["Bài 1-3"].repair_evidence.status,"REPAIRED_SOURCE_CONFIRMED_R1");
assert.equal(byLesson["Bài 1-3"].dimensions.PRACTICE_BANK.status,"PARTIAL_TOPIC_EVIDENCE");
assert.equal(byLesson["Bài 1-3"].dimensions.READINESS.status,"NOT_VERIFIED_STRUCTURED");

assert.equal(byLesson["Bài 4-5"].dimensions.LEARN_CONTENT.status,"VERIFIED_LESSON_LOCAL");
assert.equal(byLesson["Bài 4-5"].dimensions.MICRO_PRACTICE.status,"VERIFIED_LESSON_LOCAL");
assert.deepEqual(byLesson["Bài 4-5"].dimensions.MICRO_PRACTICE.item_ids,["NUM02MICRO_024","NUM02MICRO_025","NUM02MICRO_026"]);
assert.equal(byLesson["Bài 4-5"].dimensions.MICRO_PRACTICE.gates_core,false);
assert.equal(byLesson["Bài 4-5"].repair_evidence.status,"REPAIRED_SOURCE_CONFIRMED_R1");
assert.equal(byLesson["Bài 4-5"].dimensions.PRACTICE_BANK.status,"FAMILY_LEVEL_TOPIC_EVIDENCE");
assert.equal(byLesson["Bài 4-5"].dimensions.READINESS.status,"NOT_VERIFIED_STRUCTURED");

assert.equal(byLesson["Bài 8"].dimensions.LEARN_CONTENT.status,"VERIFIED_LESSON_LOCAL");
assert.equal(byLesson["Bài 8"].dimensions.MICRO_PRACTICE.status,"VERIFIED_LESSON_LOCAL");
assert.deepEqual(byLesson["Bài 8"].dimensions.MICRO_PRACTICE.item_ids,["NUM02MICRO_027","NUM02MICRO_028","NUM02MICRO_029"]);
assert.equal(byLesson["Bài 8"].dimensions.MICRO_PRACTICE.gates_core,false);
assert.equal(byLesson["Bài 8"].repair_evidence.status,"REPAIRED_SOURCE_CONFIRMED_R1");
assert.equal(byLesson["Bài 8"].dimensions.PRACTICE_BANK.status,"FAMILY_LEVEL_TOPIC_EVIDENCE");
assert.equal(byLesson["Bài 8"].dimensions.READINESS.status,"NOT_VERIFIED_STRUCTURED");

assert.equal(byLesson["Bài 11-12"].dimensions.LEARN_CONTENT.status,"VERIFIED_DIRECT_AND_LOCAL");
assert.equal(byLesson["Bài 11-12"].dimensions.MICRO_PRACTICE.status,"VERIFIED_DIRECT_AND_LOCAL");
assert.deepEqual(byLesson["Bài 11-12"].dimensions.MICRO_PRACTICE.lesson_local_item_ids,["NUM02MICRO_036","NUM02MICRO_037","NUM02MICRO_038"]);
assert.deepEqual(byLesson["Bài 11-12"].dimensions.MICRO_PRACTICE.lesson_local_hits,["bai-toan-ucln-bcnn"]);
assert.equal(byLesson["Bài 11-12"].dimensions.MICRO_PRACTICE.lesson_local_gates_core,false);
assert.equal(byLesson["Bài 11-12"].repair_evidence.status,"REPAIRED_SOURCE_CONFIRMED_R1");
assert.equal(byLesson["Bài 11-12"].dimensions.PRACTICE_BANK.status,"PARTIAL_TOPIC_EVIDENCE");
assert.equal(byLesson["Bài 11-12"].dimensions.WRITTEN_LIBRARY.status,"VERIFIED_KNTT_PLACEMENT");
assert.equal(byLesson["Bài 11-12"].dimensions.READINESS.status,"NOT_VERIFIED_STRUCTURED");

assert.equal(byLesson["Bài 23-24"].dimensions.LEARN_CONTENT.status,"VERIFIED_DIRECT_AND_LOCAL");
assert.equal(byLesson["Bài 23-24"].dimensions.MICRO_PRACTICE.status,"VERIFIED_DIRECT_AND_LOCAL");
assert.deepEqual(byLesson["Bài 23-24"].dimensions.MICRO_PRACTICE.lesson_local_item_ids,["NUM02MICRO_039","NUM02MICRO_040","NUM02MICRO_041"]);
assert.deepEqual(byLesson["Bài 23-24"].dimensions.MICRO_PRACTICE.lesson_local_hits,["phan-so-bang-nhau","hon-so-duong"]);
assert.equal(byLesson["Bài 23-24"].dimensions.MICRO_PRACTICE.lesson_local_gates_core,false);
assert.equal(byLesson["Bài 23-24"].repair_evidence.status,"REPAIRED_SOURCE_CONFIRMED_R1");
assert.equal(byLesson["Bài 23-24"].dimensions.PRACTICE_BANK.status,"PARTIAL_TOPIC_EVIDENCE");
assert.equal(byLesson["Bài 23-24"].dimensions.WRITTEN_LIBRARY.status,"NONE");
assert.equal(byLesson["Bài 23-24"].dimensions.READINESS.status,"NOT_VERIFIED_STRUCTURED");

for(const ref of ["Bài 13","Bài 14","Bài 15","Bài 16","Bài 17","Bài 25-26","Bài 28-29"]){
  assert.equal(byLesson[ref].dimensions.LEARN_CONTENT.status,"VERIFIED_DIRECT");
  assert.equal(byLesson[ref].dimensions.MICRO_PRACTICE.status,"VERIFIED_DIRECT");
  assert.equal(byLesson[ref].repair_evidence.status,"REPAIRED_REVIEWED_R1");
  assert.equal(byLesson[ref].repair_evidence.clearance,"G6_SHARED_SKILL_DENSITY_R1_CONTENT_REVIEW_COMPLETE");
}
assert.equal(a.summary.shared_skill_rerank_r1.status,"REPAIRED_REVIEWED_R1");
assert.equal(a.summary.shared_skill_rerank_r1.clearance,"G6_SHARED_SKILL_DENSITY_R1_CONTENT_REVIEW_COMPLETE");
assert.equal(a.summary.priority_gap_rows.length,0);

for(const ref of ["Bài 18","Bài 19","Bài 20","Bài 21","Bài 22"]){
  assert.equal(byLesson[ref].dimensions.LEARN_CONTENT.status,"VERIFIED_DIRECT");
  assert.equal(byLesson[ref].dimensions.LEARN_CONTENT.placement_strength,"KNTT_G6_EXACT_PLACEMENT_OVERLAY");
  assert.equal(byLesson[ref].repair_evidence.status,"RECONCILED_EXISTING_PLACEMENT_R1");
}
assert.equal(a.summary.topic20_placement_r1.status,"RECONCILED_EXISTING_PLACEMENT_R1");

assert.equal(byLesson["Bài 27"].dimensions.LEARN_CONTENT.status,"VERIFIED_LESSON_LOCAL");
assert.equal(byLesson["Bài 27"].dimensions.MICRO_PRACTICE.status,"VERIFIED_LESSON_LOCAL");
assert.deepEqual(byLesson["Bài 27"].dimensions.MICRO_PRACTICE.item_ids,["NUM02MICRO_030","NUM02MICRO_031","NUM02MICRO_032"]);
assert.equal(byLesson["Bài 27"].dimensions.MICRO_PRACTICE.gates_core,false);
assert.equal(byLesson["Bài 27"].repair_evidence.status,"REPAIRED_SOURCE_CONFIRMED_R1");
assert.equal(byLesson["Bài 27"].dimensions.PRACTICE_BANK.status,"FAMILY_LEVEL_TOPIC_EVIDENCE");
assert.equal(byLesson["Bài 27"].dimensions.READINESS.status,"NOT_VERIFIED_STRUCTURED");

assert.equal(byLesson["Bài 42"].dimensions.LEARN_CONTENT.status,"VERIFIED_LESSON_LOCAL");
assert.equal(byLesson["Bài 42"].dimensions.MICRO_PRACTICE.status,"VERIFIED_LESSON_LOCAL");
assert.deepEqual(byLesson["Bài 42"].dimensions.MICRO_PRACTICE.item_ids,["PRO23MICRO_018","PRO23MICRO_019","PRO23MICRO_020"]);
assert.equal(byLesson["Bài 42"].dimensions.MICRO_PRACTICE.gates_core,false);
assert.equal(byLesson["Bài 42"].repair_evidence.status,"REPAIRED_REVIEWED_R1");
assert.equal(byLesson["Bài 42"].repair_evidence.clearance,"G6_BAI42_EVENT_OUTCOME_CONTENT_REVIEW_COMPLETE");
assert.equal(byLesson["Bài 42"].dimensions.READINESS.status,"NOT_VERIFIED_STRUCTURED");
assert.equal(byLesson["Bài 43"].dimensions.READINESS.status,"REVIEWED_STRUCTURED_READINESS");
assert.equal(byLesson["Bài 31"].dimensions.LEARN_CONTENT.status,"VERIFIED_DIRECT");
assert.equal(byLesson["Bài 31"].dimensions.MICRO_PRACTICE.status,"VERIFIED_DIRECT");
assert.equal(byLesson["Bài 31"].dimensions.PRACTICE_BANK.status,"TOPIC_SKILL_EVIDENCE");
assert.deepEqual(byLesson["Bài 31"].dimensions.LEARN_CONTENT.card_skill_evidence,["ti-so","ti-so-phan-tram","phan-tram"]);
assert.deepEqual(byLesson["Bài 31"].dimensions.MICRO_PRACTICE.item_ids,["RAT03MICRO_001","RAT03MICRO_003","NUM02MICRO_014","NUM02MICRO_015"]);
assert.equal(byLesson["Bài 31"].repair_evidence.status,"RECONCILED_EXISTING_MULTI_TOPIC_EVIDENCE_R1");
assert.equal(byLesson["Bài 31"].dimensions.WRITTEN_LIBRARY.status,"VERIFIED_KNTT_PLACEMENT");
assert.equal(byLesson["Bài 31"].dimensions.READINESS.status,"NOT_VERIFIED_STRUCTURED");

assert.equal(byLesson["Bài 38-41"].dimensions.LEARN_CONTENT.status,"VERIFIED_DIRECT_AND_LOCAL");
assert.equal(byLesson["Bài 38-41"].dimensions.MICRO_PRACTICE.status,"VERIFIED_DIRECT_AND_LOCAL");
assert.deepEqual(byLesson["Bài 38-41"].dimensions.MICRO_PRACTICE.direct_item_ids,["STA21MICRO_016","STA21MICRO_004","STA21MICRO_017","STA21MICRO_013"]);
assert.deepEqual(byLesson["Bài 38-41"].dimensions.MICRO_PRACTICE.lesson_local_item_ids,["STA21MICRO_018","STA21MICRO_019","STA21MICRO_020"]);
assert.equal(byLesson["Bài 38-41"].repair_evidence.status,"REPAIRED_REVIEWED_R1");
assert.equal(byLesson["Bài 38-41"].repair_evidence.clearance,"G6_STATISTICS_CONTENT_REVIEW_COMPLETE");
assert.equal(byLesson["Bài 38-41"].dimensions.PRACTICE_BANK.status,"PARTIAL_TOPIC_EVIDENCE");
assert.equal(byLesson["Bài 38-41"].dimensions.WRITTEN_LIBRARY.status,"VERIFIED_KNTT_PLACEMENT");
assert.equal(byLesson["Bài 38-41"].dimensions.WRITTEN_LIBRARY.placements[0].exercise_id,"WX21-STA-001");
assert.equal(byLesson["Bài 38-41"].dimensions.READINESS.status,"AUTHORIZED_TOPIC_LEVEL");

for(const [k,v] of Object.entries(a.protected_boundaries)) assert.equal(v,false,"protected boundary changed: "+k);

console.log("PASS: Grade-6 dimension audit locks 31 KNTT rows against current semantic and learning evidence.");
console.log("PASS: Grade-6 audit closes lesson-local/family, shared-skill and Topic20 placement Learn queues within protected boundaries.");
assert.equal(byLesson["Bài 43"].dimensions.WRITTEN_LIBRARY.status,"VERIFIED_KNTT_PLACEMENT");
assert.equal(byLesson["Bài 10"].dimensions.WRITTEN_LIBRARY.status,"NONE");
assert.equal(byLesson["Bài 28-29"].dimensions.WRITTEN_LIBRARY.status,"NONE");
console.log("PASS: Written Library has 4 independently reviewed Grade-6 KNTT placements; prerequisite overlap rows remain NONE.");
