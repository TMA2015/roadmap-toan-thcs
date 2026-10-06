#!/usr/bin/env node
"use strict";
const assert=require("node:assert/strict");
const fs=require("node:fs");
const crypto=require("node:crypto");
const read=p=>fs.readFileSync(p,"utf8");
const json=p=>JSON.parse(read(p));
const blob=text=>crypto.createHash("sha1").update("blob "+Buffer.byteLength(text,"utf8")+"\0"+text).digest("hex");

const candidate=json("docs/assets/data/curriculum/kntt-g6-written-placement-r1.json");
const library=json("docs/assets/data/written-exercises/written-exercise-library-v1.json");

assert.equal(candidate.packet_id,"MATH-KNTT-G6-WRITTEN-PLACEMENT-R1-20261006");
assert.equal(candidate.status,"ACADEMIC_REVIEW_PENDING");
assert.equal(candidate.contract_boundary.candidate_only,true);
assert.equal(candidate.placements.length,3);
assert.equal(candidate.proposed_repository_action_after_clearance.item_count,3);
assert.equal(candidate.proposed_repository_action_after_clearance.no_item_duplication,true);
assert.equal(candidate.proposed_repository_action_after_clearance.no_solution_duplication,true);
assert.equal(candidate.proposed_repository_action_after_clearance.no_rubric_duplication,true);

assert.equal(blob(read(candidate.source_locks.written_library.path)),candidate.source_locks.written_library.sha);
assert.equal(blob(read(candidate.source_locks.grade6_reconciliation.path)),candidate.source_locks.grade6_reconciliation.sha);
assert.equal(blob(read(candidate.source_locks.grade6_dimension_audit.path)),candidate.source_locks.grade6_dimension_audit.sha);

const expected=[
  ["WX02-NUM-001",6,2,"Bài 11–12 — Ước chung, ƯCLN; bội chung, BCNN và ứng dụng","Bài 10 — Số nguyên tố và hợp số; phân tích ra thừa số nguyên tố"],
  ["WX02-NUM-002",6,7,"Bài 31 — Tỉ số và tỉ số phần trăm; bài toán phần trăm","Bài 28–29 — Số thập phân và tính toán với số thập phân"],
  ["WX23-PRO-001",6,9,"Bài 43 — Xác suất thực nghiệm","Bài 42 — Kết quả có thể và sự kiện trong trò chơi, thí nghiệm"]
];
assert.deepEqual(candidate.placements.map(x=>[
  x.exercise_id,
  x.proposed_kntt_placement.grade,
  x.proposed_kntt_placement.chapter,
  x.proposed_kntt_placement.lesson,
  x.reject_as_placement[0].lesson
]),expected);

const byId=Object.fromEntries(library.exercises.map(x=>[x.exercise_id,x]));
for(const [id] of expected){
  assert.ok(byId[id],id);
  assert.equal(byId[id].academic_review?.status,"APPROVED");
  assert.equal(byId[id].kntt_placements,undefined,"Written Library must remain unmutated before placement clearance: "+id);
}
assert.equal(library.exercises.filter(x=>x.kntt_placements).length,0);
assert.equal(library.exercises.length,50);
assert.equal(library.auto_readiness_credit,false);
assert.equal(library.self_marking_only,true);

assert.ok(fs.existsSync("review-packets/kntt-g6-written-placement-r1/00_NOTEBOOKLM_PACKET_R1.md"));
const packet=read("review-packets/kntt-g6-written-placement-r1/00_NOTEBOOKLM_PACKET_R1.md");
assert.ok(packet.includes("G6_WRITTEN_PLACEMENT_R1_CONTENT_REVIEW_COMPLETE"));
assert.ok(packet.includes("BAI10_NOT_PLACEMENT"));
assert.ok(packet.includes("BAI28_29_NOT_PLACEMENT"));
assert.ok(packet.includes("BAI42_NOT_PLACEMENT"));

console.log("PASS: Grade-6 Written placement candidate maps exactly 3 approved canonical items and rejects 3 prerequisite/supporting-skill overplacements.");
console.log("PASS: canonical Written Library remains byte-locked and unmutated pending NotebookLM clearance.");
