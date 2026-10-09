#!/usr/bin/env node
"use strict";
const assert=require("node:assert/strict");
const fs=require("node:fs");
const json=p=>JSON.parse(fs.readFileSync(p,"utf8"));
const text=p=>fs.readFileSync(p,"utf8");

const a=json("docs/assets/data/curriculum/kntt-g9-repair-wave2-r1.json");
const w=json("docs/assets/data/curriculum/topic12-learning-workspace.json");
const m=json("docs/assets/data/practice/12-phuong-trinh-bac-hai-viete-micro-v1.json");
const receipt=text("review-packets/kntt-g9-repair-wave2-r1/01_NOTEBOOKLM_RESULT_R1.md");

assert.equal(a.packet_id,"MATH-KNTT-G9-REPAIR-W2-R1-20261009");
assert.equal(a.status,"ACADEMIC_CONTENT_REVIEW_PASS");
assert.equal(a.authorization.clearance,"G9_GAP_PRIORITY_R1_REVIEW_COMPLETE");
assert.equal(a.authorization.item_review["bieu-thuc-doi-xung"],"CORE_LEARN_MICRO");
assert.equal(a.authorization.item_review["dau-nghiem"],"CORE_SUPPORT_ONLY");
assert.equal(a.authorization.item_review["lien-he-do-thi"],"CORE_SUPPORT_ONLY");
assert.deepEqual(a.counts,{chapter_groups:1,learn_cards:1,micro_items:4,practice_items:0,written_items:0,readiness_items:0,new_canonical_skills:0});
assert.equal(a.independent_review.verdict,"PASS");
assert.equal(a.independent_review.clearance,"G9_REPAIR_W2_R1_CONTENT_REVIEW_COMPLETE");
assert.ok(receipt.includes("OVERALL|PASS"));
assert.ok(receipt.includes("CLEARANCE|G9_REPAIR_W2_R1_CONTENT_REVIEW_COMPLETE"));

const card=w.cards.find(x=>x.id==="qua12-core-g9-6");
assert.ok(card,"missing qua12-core-g9-6");
assert.equal(card.layer,"KNTT-Core");
assert.deepEqual(card.skills,["bieu-thuc-doi-xung"]);
assert.deepEqual(card.prerequisites,["tong-tich-nghiem"]);\nassert.deepEqual(a.group.canonical_targets,["bieu-thuc-doi-xung"]);\nassert.deepEqual(a.group.prerequisite_targets,["tong-tich-nghiem"]);
assert.deepEqual(card.micro_practice,["QUA12MICRO_016","QUA12MICRO_017","QUA12MICRO_018","QUA12MICRO_019"]);
assert.equal(card.authoring_review?.status,"PASS");
assert.equal(card.authoring_review?.clearance,"G9_REPAIR_W2_R1_CONTENT_REVIEW_COMPLETE");
assert.ok(!w.extensions.some(x=>x.id==="qua12-ent10-1"),"duplicate Entrance10 symmetric-root extension remains");
assert.ok(w.extensions.some(x=>x.id==="qua12-ent10-2"),"support extension for root sign/graph link removed");
assert.ok(!w.cards.some(c=>(c.skills||[]).includes("dau-nghiem")),"dau-nghiem was promoted to Core");
assert.ok(!w.cards.some(c=>(c.skills||[]).includes("lien-he-do-thi")),"lien-he-do-thi was promoted to Core");

assert.equal(m.question_count,m.questions.length);
assert.equal(m.question_count,19);
for(const id of a.group.micro_items){
  const q=m.questions.find(x=>x.id===id);
  assert.ok(q,"missing "+id);
  assert.equal(q.card_id,"qua12-core-g9-6");
  assert.equal(q.tags.grade,9);
  assert.equal(q.tags.layer,"KNTT-Core");
  assert.deepEqual(q.curriculum.grades,[9]);
  assert.equal(q.authoring_review?.status,"PASS");
  assert.equal(q.authoring_review?.clearance,"G9_REPAIR_W2_R1_CONTENT_REVIEW_COMPLETE");
  assert.equal(q.options.length,4);
  assert.equal(q.answer,0);
  assert.ok(q.explanation.length>=25);
}
for(const [k,v] of Object.entries(a.protected_boundaries)) assert.equal(v,false,"protected boundary changed: "+k);

console.log("PASS: Grade-9 Repair Wave 2 CH6 has exactly 1 Learn + 4 Micro with NotebookLM PASS.");
console.log("PASS: bieu-thuc-doi-xung is Core; dau-nghiem/lien-he-do-thi remain support-only; no Practice/Written/Readiness/taxonomy expansion.");
