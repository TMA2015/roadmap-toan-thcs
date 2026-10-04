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
assert.equal(a.status,"G6_PILOT_AUDIT_STATISTICS_REPAIRED_R1");
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
assert.equal(counts.LEARN_CONTENT.VERIFIED_DIRECT,10);
assert.equal(counts.LEARN_CONTENT.VERIFIED_LESSON_LOCAL,4);
assert.equal(counts.LEARN_CONTENT.VERIFIED_DIRECT_AND_LOCAL,1);
assert.equal(counts.MICRO_PRACTICE.NONE,0);
assert.equal(counts.MICRO_PRACTICE.VERIFIED_LESSON_LOCAL,4);
assert.equal(counts.MICRO_PRACTICE.VERIFIED_DIRECT_AND_LOCAL,1);
assert.equal(counts.PRACTICE_BANK.NONE,0);
assert.equal(counts.WRITTEN_LIBRARY.CANDIDATE_ONLY_NO_KNTT_PLACEMENT,5);
assert.equal(counts.READINESS.AUTHORIZED_TOPIC_LEVEL,1);
assert.equal(counts.READINESS.PENDING_REVIEW,2);

const written=json(a.source_locks.written_library.path);
assert.equal((written.exercises||[]).filter(e=>e.kntt_placements).length,0);
assert.equal(a.summary.written_library_kntt_placement_count,0);

const byLesson=Object.fromEntries(a.rows.map(r=>[r.lesson_ref,r]));
assert.equal(byLesson["Bài 30"].dimensions.LEARN_CONTENT.status,"VERIFIED_DIRECT");
assert.equal(byLesson["Bài 30"].dimensions.MICRO_PRACTICE.status,"VERIFIED_DIRECT");
assert.equal(byLesson["Bài 30"].dimensions.PRACTICE_BANK.status,"TOPIC_SKILL_EVIDENCE");
assert.equal(byLesson["Bài 30"].repair_evidence.status,"REPAIRED_REVIEWED_R1");
assert.equal(byLesson["Bài 30"].repair_evidence.clearance,"G6_BAI30_ROUNDING_CONTENT_REVIEW_COMPLETE");
assert.ok(a.source_locks.topic_evidence["02-so-va-phep-tinh"].micro.grade6Skills.includes("lam-tron-so"));
assert.ok(a.source_locks.topic_evidence["02-so-va-phep-tinh"].manifest.skills.includes("lam-tron-so"));
assert.ok(byLesson["Bài 30"].semantic_targets.direct_skills.includes("lam-tron-so"));

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
assert.equal(byLesson["Bài 42"].dimensions.READINESS.status,"PENDING_REVIEW");
assert.equal(byLesson["Bài 38-41"].dimensions.LEARN_CONTENT.status,"VERIFIED_DIRECT_AND_LOCAL");
assert.equal(byLesson["Bài 38-41"].dimensions.MICRO_PRACTICE.status,"VERIFIED_DIRECT_AND_LOCAL");
assert.deepEqual(byLesson["Bài 38-41"].dimensions.MICRO_PRACTICE.direct_item_ids,["STA21MICRO_016","STA21MICRO_004","STA21MICRO_017","STA21MICRO_013"]);
assert.deepEqual(byLesson["Bài 38-41"].dimensions.MICRO_PRACTICE.lesson_local_item_ids,["STA21MICRO_018","STA21MICRO_019","STA21MICRO_020"]);
assert.equal(byLesson["Bài 38-41"].repair_evidence.status,"REPAIRED_REVIEWED_R1");
assert.equal(byLesson["Bài 38-41"].repair_evidence.clearance,"G6_STATISTICS_CONTENT_REVIEW_COMPLETE");
assert.equal(byLesson["Bài 38-41"].dimensions.PRACTICE_BANK.status,"PARTIAL_TOPIC_EVIDENCE");
assert.equal(byLesson["Bài 38-41"].dimensions.READINESS.status,"AUTHORIZED_TOPIC_LEVEL");

for(const [k,v] of Object.entries(a.protected_boundaries)) assert.equal(v,false,"protected boundary changed: "+k);

console.log("PASS: Grade-6 dimension audit locks 31 KNTT rows against current semantic and learning evidence.");
console.log("PASS: Grade-6 reviewed/source-confirmed repairs now include Bài 30, Bài 42, Bài 4-5, Bài 8, Bài 27 and Bài 38-41 statistics within protected evidence boundaries.");
console.log("PASS: Written Library has no verified KNTT lesson placement in v1; readiness evidence is conservatively scoped.");
