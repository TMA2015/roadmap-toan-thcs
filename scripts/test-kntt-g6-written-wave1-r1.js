#!/usr/bin/env node
"use strict";
const assert=require("node:assert/strict");
const fs=require("node:fs");
const crypto=require("node:crypto");
const read=p=>fs.readFileSync(p,"utf8");
const json=p=>JSON.parse(read(p));
const blob=text=>crypto.createHash("sha1").update("blob "+Buffer.byteLength(text,"utf8")+"\0"+text).digest("hex");

const artifact=json("docs/assets/data/curriculum/kntt-g6-written-wave1-r1.json");
const packet=read("review-packets/kntt-g6-written-wave1-r1/00_NOTEBOOKLM_PACKET_R1.md");
const library=json("docs/assets/data/written-exercises/written-exercise-library-v1.json");

assert.equal(artifact.packet_id,"MATH-KNTT-G6-WRITTEN-WAVE1-R1-20261007");
assert.equal(artifact.status,"ACADEMIC_REVIEW_COMPLETE");
assert.equal(artifact.candidate_count,3);
assert.deepEqual(artifact.candidate_ids,["WX02-NUM-003","WX20-GEO-003","WX13-LIN-003"]);
assert.deepEqual(artifact.prior_clearance.first_authoring_wave,["Bài 27","Bài 20","Bài 34–37"]);
assert.equal(artifact.prior_clearance.max_new_items_wave1,3);

assert.equal(artifact.notebooklm_source_contract.selected_source_count,5);
assert.equal(artifact.notebooklm_source_contract.permanent_sources.length,2);
assert.equal(artifact.notebooklm_source_contract.grade6_s1_sources.length,2);
assert.equal(artifact.notebooklm_source_contract.temporary_batch_sources.length,1);
assert.deepEqual(artifact.notebooklm_source_contract.explicitly_not_selected,["Written Exercise Library Contract v1"]);
assert.ok(packet.includes("Select exactly 5 Sources"));
assert.ok(packet.includes("2 permanent governance sources + 2 Grade-6 SGK sources + 1 temporary packet = 5 selected Sources total."));
assert.ok(packet.includes("Do **not** add `Written Exercise Library Contract v1` as a separate NotebookLM Source"));

for(const lock of Object.values(artifact.source_locks)){
  assert.equal(blob(read(lock.path)),lock.sha,"source drift: "+lock.path);
}

const existing=new Set(library.exercises.map(x=>x.exercise_id));
for(const id of artifact.candidate_ids) assert.ok(existing.has(id),"reviewed item missing from canonical library: "+id);
assert.equal(library.exercises.length,53,"canonical library contains the 3 reviewed Wave-1 additions");

const byId=Object.fromEntries(artifact.candidates.map(x=>[x.exercise_id,x]));
assert.equal(byId["WX02-NUM-003"].exercise_kind,"anchor");
assert.deepEqual(byId["WX02-NUM-003"].proposed_kntt_placements,[{grade:6,chapter:6,lesson:"Bài 27 — Hai bài toán về phân số"}]);
assert.deepEqual(byId["WX02-NUM-003"].lesson_local_targets,["tim-gia-tri-phan-so-cua-so","tim-so-khi-biet-gia-tri-phan-so"]);
assert.equal(byId["WX02-NUM-003"].rubric_total,5);
assert.equal(byId["WX02-NUM-003"].hint_steps.length,3);

assert.equal(byId["WX20-GEO-003"].exercise_kind,"anchor");
assert.deepEqual(byId["WX20-GEO-003"].skills,["chu-vi-tu-giac","dien-tich-tu-giac","do-luong-thuc-te"]);
assert.deepEqual(byId["WX20-GEO-003"].proposed_kntt_placements,[{grade:6,chapter:4,lesson:"Bài 20 — Chu vi và diện tích một số tứ giác đã học"}]);
assert.equal(byId["WX20-GEO-003"].rubric_total,5);
assert.equal(byId["WX20-GEO-003"].hint_steps.length,3);

assert.equal(byId["WX13-LIN-003"].exercise_kind,"anchor");
assert.deepEqual(byId["WX13-LIN-003"].skills,["doan-thang-do-dai","trung-diem","khai-niem-goc","do-goc","phan-loai-goc"]);
assert.deepEqual(byId["WX13-LIN-003"].proposed_kntt_placements,[
  {grade:6,chapter:8,lesson:"Bài 34–35 — Đoạn thẳng, độ dài đoạn thẳng, trung điểm"},
  {grade:6,chapter:8,lesson:"Bài 36–37 — Góc, số đo góc và phân loại góc"}
]);
assert.equal(byId["WX13-LIN-003"].rubric_total,5);
assert.equal(byId["WX13-LIN-003"].hint_steps.length,3);

for(const item of artifact.candidates){
  assert.equal(item.academic_review.status,"PENDING"); // immutable candidate snapshot before independent review
  assert.equal(item.academic_review.packet_id,artifact.packet_id);
  assert.ok(item.problem_markdown.length>100,item.exercise_id+" problem too short");
  assert.ok(item.full_solution_markdown.length>200,item.exercise_id+" solution too short");
  assert.ok(item.method_rationale_markdown.length>100,item.exercise_id+" rationale too short");
  assert.ok(item.common_mistakes.length>=4,item.exercise_id+" common mistakes too thin");
  assert.ok(item.remediation_markdown.length>80,item.exercise_id+" remediation too thin");
}

assert.equal(artifact.review_result.verdict,"PASS");
assert.equal(artifact.review_result.clearance,"G6_WRITTEN_WAVE1_R1_CONTENT_REVIEW_COMPLETE");
assert.equal(artifact.review_result.reviewed_items,3);
assert.equal(artifact.implementation.canonical_item_count,53);
assert.equal(artifact.implementation.grade6_items_with_kntt_placement,7);
assert.equal(artifact.implementation.grade6_verified_written_rows,8);
assert.equal(artifact.implementation.new_canonical_skills,0);
assert.equal(artifact.implementation.readiness_credit,false);
const canonicalById=Object.fromEntries(library.exercises.map(x=>[x.exercise_id,x]));
for(const id of artifact.candidate_ids){
  assert.ok(packet.includes(id),"packet missing "+id);
  assert.equal(canonicalById[id].academic_review.status,"APPROVED",id+" canonical review status");
  assert.equal(canonicalById[id].academic_review.receipt,"review-packets/kntt-g6-written-wave1-r1/01_NOTEBOOKLM_RESULT_R1.md",id+" receipt");
}
assert.deepEqual(canonicalById["WX02-NUM-003"].kntt_placements,[{grade:6,chapter:6,lesson:"Bài 27 — Hai bài toán về phân số"}]);
assert.deepEqual(canonicalById["WX20-GEO-003"].kntt_placements,[{grade:6,chapter:4,lesson:"Bài 20 — Chu vi và diện tích một số tứ giác đã học"}]);
assert.deepEqual(canonicalById["WX13-LIN-003"].kntt_placements,[
  {grade:6,chapter:8,lesson:"Bài 34–35 — Đoạn thẳng, độ dài đoạn thẳng, trung điểm"},
  {grade:6,chapter:8,lesson:"Bài 36–37 — Góc, số đo góc và phân loại góc"}
]);
const result=read("review-packets/kntt-g6-written-wave1-r1/01_NOTEBOOKLM_RESULT_R1.md");
assert.ok(result.includes("OVERALL|PASS"));
assert.ok(result.includes("ARCH_10|PASS"));
assert.ok(result.includes("CLEARANCE|G6_WRITTEN_WAVE1_R1_CONTENT_REVIEW_COMPLETE"));
assert.ok(packet.includes("EXPECTED_ITEMS|3"));
assert.ok(packet.includes("REVIEWED_ITEMS|3"));
assert.ok(packet.includes("CLEARANCE|G6_WRITTEN_WAVE1_R1_CONTENT_REVIEW_COMPLETE"));

for(const [k,v] of Object.entries(artifact.protected_boundaries)) assert.equal(v,false,"protected boundary changed: "+k);

console.log("PASS: Grade-6 Written Wave 1 has exactly 3 independently reviewed anchors published to the canonical library.");
console.log("PASS: NotebookLM source invariant is exactly 5 Sources (2 permanent + 2 SGK + 1 packet).");
console.log("PASS: Bài 27, Bài 20, and Bài 34–37 placements are source-locked, reviewed and reconciled.");
