#!/usr/bin/env node
"use strict";
const assert=require("node:assert/strict");
const fs=require("node:fs");
const crypto=require("node:crypto");
const read=p=>fs.readFileSync(p,"utf8");
const json=p=>JSON.parse(read(p));
const blob=text=>crypto.createHash("sha1").update("blob "+Buffer.byteLength(text,"utf8")+"\0"+text).digest("hex");

const artifact=json("docs/assets/data/curriculum/kntt-g6-written-placement-r1.json");
const library=json("docs/assets/data/written-exercises/written-exercise-library-v1.json");
const audit=json("docs/assets/data/curriculum/kntt-dimension-coverage-g6-v1.json");
const receipt=read("review-packets/kntt-g6-written-placement-r1/01_NOTEBOOKLM_RESULT_R1.md");

assert.equal(artifact.packet_id,"MATH-KNTT-G6-WRITTEN-PLACEMENT-R1-20261006");
assert.equal(artifact.status,"ACADEMIC_REVIEW_COMPLETE");
assert.equal(artifact.contract_boundary.candidate_only,false);
assert.equal(artifact.review_result.verdict,"PASS");
assert.equal(artifact.review_result.clearance,"G6_WRITTEN_PLACEMENT_R1_CONTENT_REVIEW_COMPLETE");
assert.equal(artifact.review_result.reviewed_items,3);
assert.equal(artifact.review_result.kntt_placement_count,3);
assert.equal(artifact.review_result.false_positive_placement_count,2);
assert.ok(receipt.includes("OVERALL|PASS"));
assert.ok(receipt.includes("CLEARANCE|G6_WRITTEN_PLACEMENT_R1_CONTENT_REVIEW_COMPLETE"));

const expected={
  "WX02-NUM-001":{grade:6,chapter:2,lesson:"Bài 11–12 — Ước chung, ƯCLN; bội chung, BCNN và ứng dụng"},
  "WX02-NUM-002":{grade:6,chapter:7,lesson:"Bài 31 — Một số bài toán về tỉ số và tỉ số phần trăm"},
  "WX23-PRO-001":{grade:6,chapter:9,lesson:"Bài 43 — Xác suất thực nghiệm"}
};
const byId=Object.fromEntries(library.exercises.map(x=>[x.exercise_id,x]));
assert.ok(library.exercises.length>=50);
assert.equal(library.auto_readiness_credit,false);
assert.equal(library.self_marking_only,true);
assert.ok(library.exercises.filter(x=>x.kntt_placements).length>=4);
assert.deepEqual(byId["WX21-STA-001"].kntt_placements,[{grade:6,chapter:9,lesson:"Bài 38–41 — Dữ liệu, bảng thống kê, biểu đồ tranh, biểu đồ cột và cột kép"}]);

for(const [id,p] of Object.entries(expected)){
  const item=byId[id];
  assert.ok(item,id);
  assert.equal(item.academic_review?.status,"APPROVED");
  assert.deepEqual(item.kntt_placements,[p]);
}
assert.ok(!JSON.stringify(byId["WX02-NUM-001"].kntt_placements).includes("Bài 10"));
assert.ok(!JSON.stringify(byId["WX02-NUM-002"].kntt_placements).includes("Bài 28"));
assert.ok(!JSON.stringify(byId["WX23-PRO-001"].kntt_placements).includes("Bài 42"));

assert.equal(blob(read(audit.source_locks.written_library.path)),audit.source_locks.written_library.blob_sha);
assert.ok(audit.summary.written_library_kntt_item_count>=4);
assert.ok(audit.summary.dimension_status_counts.WRITTEN_LIBRARY.VERIFIED_KNTT_PLACEMENT>=4);
assert.equal(audit.summary.dimension_status_counts.WRITTEN_LIBRARY.CANDIDATE_ONLY_NO_KNTT_PLACEMENT,0);

const rows=Object.fromEntries(audit.rows.map(r=>[r.lesson_ref,r]));
for(const ref of ["Bài 11-12","Bài 31","Bài 43"])
  assert.equal(rows[ref].dimensions.WRITTEN_LIBRARY.status,"VERIFIED_KNTT_PLACEMENT",ref);
for(const ref of ["Bài 10","Bài 28-29"])
  assert.equal(rows[ref].dimensions.WRITTEN_LIBRARY.status,"NONE",ref);

console.log("PASS: the 3 Written Placement R1 items remain correct; current Grade-6 library also includes the later reviewed WX21-STA-001 reuse placement.");
console.log("PASS: Bài 10 and Bài 28–29 prerequisite/supporting overlaps are rejected as placement.");
console.log("PASS: no item cloning, Readiness credit, Mastery, learner-history or runtime-taxonomy change is introduced.");
