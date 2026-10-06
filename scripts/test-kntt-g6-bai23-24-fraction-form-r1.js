#!/usr/bin/env node
"use strict";
const assert=require("node:assert/strict");
const fs=require("node:fs");
const json=p=>JSON.parse(fs.readFileSync(p,"utf8"));

const workspace=json("docs/assets/data/curriculum/topic02-learning-workspace.json");
const micro=json("docs/assets/data/practice/02-so-va-phep-tinh-micro-v1.json");
const manifest=json("docs/assets/data/practice/02-so-va-phep-tinh-v1.manifest.json");
const recon=json("docs/assets/data/curriculum/kntt-grade6-reconciliation-r1.json");
const audit=json("docs/assets/data/curriculum/kntt-dimension-coverage-g6-v1.json");

const card=workspace.cards.find(c=>c.id==="num02-g6-core-4");
assert.ok(card);
const locals=Object.fromEntries((card.lesson_local_concepts||[]).map(x=>[x.id,x]));
for(const id of ["phan-so-bang-nhau","hon-so-duong"]){
  assert.ok(locals[id]);
  assert.equal(locals[id].family_id,"NUM-FRACTION-FORM");
  assert.equal(locals[id].role,"LESSON_LOCAL_CONCEPT");
  assert.equal(locals[id].grade,6);
  assert.equal(locals[id].lesson,"Bài 23-24");
}
for(const id of ["NUM02MICRO_039","NUM02MICRO_040","NUM02MICRO_041"]) assert.ok(card.micro_practice.includes(id));
assert.match(card.teaching_copy.key_idea,/phân số bằng nhau/i);
assert.match(card.teaching_copy.key_idea,/hỗn số dương/i);

assert.equal(micro.question_count,52);
assert.equal(micro.questions.length,52);
const by=Object.fromEntries(micro.questions.map(q=>[q.id,q]));
const local=[by.NUM02MICRO_039,by.NUM02MICRO_040,by.NUM02MICRO_041];
assert.ok(local.every(Boolean));
assert.deepEqual(local.map(q=>q.answer),[0,0,0]);
for(const q of local){
  assert.equal(q.card_id,"num02-g6-core-4");
  assert.equal(q.micro_role,"coverage");
  assert.equal(q.tags.topic,"02-so-va-phep-tinh");
  assert.equal(q.tags.layer,"KNTT-Core");
  assert.equal(q.tags.grade,6);
  assert.deepEqual(q.tags.skill,[]);
  assert.equal(q.evidence_role,"LESSON_LOCAL_CORE_FORMATIVE");
  assert.equal(q.gates_core,false);
  assert.equal(q.curriculum.lesson,"Bài 23-24");
  assert.equal(q.authoring_review.verdict,"SOURCE_CONFIRMED_LOW_RISK");
  assert.equal(q.authoring_review.method,"OWNER_APPROVED_RISK_BASED_REVIEW_POLICY");
}
assert.equal(by.NUM02MICRO_039.options[0],"6/8");
assert.equal(by.NUM02MICRO_040.options[0],"7/3");
assert.equal(by.NUM02MICRO_041.options[0],"2 3/4");

for(const [ref,family] of [["phan-so-bang-nhau","NUM-FRACTION-FORM"],["hon-so-duong","NUM-FRACTION-FORM"]]){
  const rec=recon.entries.find(e=>e.lesson_ref==="Bài 23-24"&&e.historical_ref===ref);
  assert.ok(rec);
  assert.equal(rec.resolution,"CANONICAL_FAMILY");
  assert.ok(rec.canonical_family_ids.includes(family));
  assert.equal(rec.local_role,"LESSON_LOCAL_CONCEPT");
}

assert.equal(manifest.question_count,132);
assert.ok(!manifest.skill_labels["phan-so-bang-nhau"]);
assert.ok(!manifest.skill_labels["hon-so-duong"]);

const row=audit.rows.find(r=>r.lesson_ref==="Bài 23-24");
assert.equal(row.dimensions.LEARN_CONTENT.status,"VERIFIED_DIRECT_AND_LOCAL");
assert.equal(row.dimensions.MICRO_PRACTICE.status,"VERIFIED_DIRECT_AND_LOCAL");
assert.equal(row.dimensions.PRACTICE_BANK.status,"PARTIAL_TOPIC_EVIDENCE");
assert.equal(row.dimensions.WRITTEN_LIBRARY.status,"NONE");
assert.equal(row.dimensions.READINESS.status,"NOT_VERIFIED_STRUCTURED");
assert.equal(row.repair_evidence.status,"REPAIRED_SOURCE_CONFIRMED_R1");

console.log("PASS: Bài 23-24 adds explicit Grade-6 Learn + 3 lesson-local Micro items for equivalent fractions and positive mixed numbers.");
console.log("PASS: phan-so-bang-nhau and hon-so-duong remain NUM-FRACTION-FORM lesson-local concepts with no canonical skill write.");
console.log("PASS: Practice Bank stays 132; Written/Readiness remain open; no new NotebookLM round is required for this deterministic reviewed-boundary repair.");
