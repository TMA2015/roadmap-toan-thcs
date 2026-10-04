#!/usr/bin/env node
"use strict";
const assert=require("node:assert/strict");
const fs=require("node:fs");
const json=p=>JSON.parse(fs.readFileSync(p,"utf8"));

const workspace=json("docs/assets/data/curriculum/topic21-learning-workspace.json");
const micro=json("docs/assets/data/practice/21-thong-ke-micro-v1.json");
const manifest=json("docs/assets/data/practice/21-thong-ke-v1.manifest.json");
const audit=json("docs/assets/data/curriculum/kntt-dimension-coverage-g6-v1.json");

const c1=workspace.cards.find(c=>c.id==="sta21-core-1");
const c2=workspace.cards.find(c=>c.id==="sta21-core-2");
assert.ok(c1&&c2);
assert.deepEqual(c1.lesson_local_concepts.map(x=>x.id),["du-lieu"]);
assert.deepEqual(c2.lesson_local_representations.map(x=>x.id),["bang-thong-ke","bieu-do-tranh"]);
assert.ok(c1.lesson_local_concepts.every(x=>x.family_id==="STAT-DATA"&&x.grade===6));
assert.ok(c2.lesson_local_representations[0].family_id==="STAT-REPRESENT");
assert.ok(c2.lesson_local_representations[1].family_id==="STAT-CHART-READ");

for(const id of ["STA21MICRO_016","STA21MICRO_018"]) assert.ok(c1.micro_practice.includes(id));
for(const id of ["STA21MICRO_017","STA21MICRO_019","STA21MICRO_020"]) assert.ok(c2.micro_practice.includes(id));

assert.equal(micro.question_count,20);
assert.equal(micro.questions.length,20);
const by=Object.fromEntries(micro.questions.map(q=>[q.id,q]));
const expected=["STA21MICRO_016","STA21MICRO_017","STA21MICRO_018","STA21MICRO_019","STA21MICRO_020"];
for(const id of expected){
  const q=by[id];
  assert.ok(q,id+" missing");
  assert.equal(q.micro_role,"coverage");
  assert.equal(q.tags.topic,"21-thong-ke");
  assert.equal(q.tags.layer,"KNTT-Core");
  assert.equal(q.tags.grade,6);
  assert.equal(q.authoring_review.packet,"MATH-KNTT-G6-STATISTICS-R1-20261004");
  assert.equal(q.authoring_review.verdict,"PASS");
  assert.equal(q.authoring_review.clearance,"G6_STATISTICS_CONTENT_REVIEW_COMPLETE");
  assert.equal(q.options.length,4);
  assert.equal(new Set(q.options).size,4);
  assert.ok(Number.isInteger(q.answer)&&q.answer>=0&&q.answer<4);
}
assert.deepEqual(by.STA21MICRO_016.tags.skill,["thu-thap-du-lieu"]);
assert.deepEqual(by.STA21MICRO_017.tags.skill,["doc-bieu-do-cot-kep"]);
for(const id of ["STA21MICRO_018","STA21MICRO_019","STA21MICRO_020"]){
  assert.deepEqual(by[id].tags.skill,[]);
  assert.equal(by[id].evidence_role,"LESSON_LOCAL_CORE_FORMATIVE");
  assert.equal(by[id].gates_core,false);
  assert.ok(by[id].lesson_local_targets.length>=1);
}
assert.equal(by.STA21MICRO_016.options[by.STA21MICRO_016.answer],"Phát phiếu hỏi từng bạn và ghi lại số cuốn sách đã đọc");
assert.equal(by.STA21MICRO_017.options[by.STA21MICRO_017.answer],"2 cây");
assert.equal(by.STA21MICRO_018.options[by.STA21MICRO_018.answer],"Dữ liệu thu được");
assert.equal(by.STA21MICRO_019.options[by.STA21MICRO_019.answer],"8 bạn");
assert.equal(by.STA21MICRO_020.options[by.STA21MICRO_020.answer],"8 cuốn");

assert.equal(manifest.question_count,132);
assert.ok(!manifest.skill_labels["du-lieu"]);
assert.ok(!manifest.skill_labels["bang-thong-ke"]);
assert.ok(!manifest.skill_labels["bieu-do-tranh"]);

const row=audit.rows.find(r=>r.lesson_ref==="Bài 38-41");
assert.equal(row.dimensions.LEARN_CONTENT.status,"VERIFIED_DIRECT_AND_LOCAL");
assert.equal(row.dimensions.MICRO_PRACTICE.status,"VERIFIED_DIRECT_AND_LOCAL");
assert.equal(row.repair_evidence.clearance,"G6_STATISTICS_CONTENT_REVIEW_COMPLETE");
assert.equal(row.dimensions.PRACTICE_BANK.status,"PARTIAL_TOPIC_EVIDENCE");
assert.equal(row.dimensions.READINESS.status,"AUTHORIZED_TOPIC_LEVEL");

console.log("PASS: Grade-6 statistics reviewed repair adds 2 missing direct-skill Micro items + 3 local concept/representation items.");
console.log("PASS: NotebookLM clearance recorded; Practice Bank and Readiness remain unchanged in scope.");
