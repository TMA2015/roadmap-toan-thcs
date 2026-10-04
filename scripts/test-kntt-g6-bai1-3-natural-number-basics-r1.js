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

const card=workspace.cards.find(c=>c.id==="num02-g6-core-1");
assert.ok(card);
assert.ok(card.title.includes("cách ghi"));
assert.ok(card.title.includes("thứ tự"));
const locals=Object.fromEntries((card.lesson_local_concepts||[]).map(x=>[x.id,x]));
for(const id of ["ghi-so-tu-nhien","thu-tu-so-tu-nhien"]){
  assert.ok(locals[id]);
  assert.equal(locals[id].family_id,"NUM-SETS");
  assert.equal(locals[id].grade,6);
  assert.equal(locals[id].lesson,"Bài 1-3");
}
for(const id of ["NUM02MICRO_033","NUM02MICRO_034","NUM02MICRO_035"]) assert.ok(card.micro_practice.includes(id));

assert.equal(micro.question_count,35);
assert.equal(micro.questions.length,35);
const by=Object.fromEntries(micro.questions.map(q=>[q.id,q]));
const local=[by.NUM02MICRO_033,by.NUM02MICRO_034,by.NUM02MICRO_035];
assert.ok(local.every(Boolean));
assert.deepEqual(local.map(q=>q.answer),[0,0,0]);
for(const q of local){
  assert.equal(q.card_id,"num02-g6-core-1");
  assert.equal(q.micro_role,"coverage");
  assert.equal(q.tags.topic,"02-so-va-phep-tinh");
  assert.equal(q.tags.layer,"KNTT-Core");
  assert.equal(q.tags.grade,6);
  assert.deepEqual(q.tags.skill,[]);
  assert.equal(q.evidence_role,"LESSON_LOCAL_CORE_FORMATIVE");
  assert.equal(q.gates_core,false);
  assert.equal(q.curriculum.lesson,"Bài 1-3");
  assert.equal(q.authoring_review.verdict,"SOURCE_CONFIRMED_LOW_RISK");
  assert.equal(q.authoring_review.method,"OWNER_APPROVED_RISK_BASED_REVIEW_POLICY");
}
assert.equal(by.NUM02MICRO_033.options[0],"5 000");
assert.equal(by.NUM02MICRO_034.options[0],"58 203 < 58 230");
assert.equal(by.NUM02MICRO_035.options[0],"10 000");

const entries=recon.entries.filter(e=>e.lesson_ref==="Bài 1-3");
const localEntries=entries.filter(e=>["ghi-so-tu-nhien","thu-tu-so-tu-nhien"].includes(e.historical_ref));
assert.equal(localEntries.length,2);
assert.ok(localEntries.every(e=>e.resolution==="CANONICAL_FAMILY"&&e.canonical_family_ids.includes("NUM-SETS")&&e.local_role==="LESSON_LOCAL_CONCEPT"));

assert.equal(manifest.question_count,132);
assert.ok(!manifest.skill_labels["ghi-so-tu-nhien"]);
assert.ok(!manifest.skill_labels["thu-tu-so-tu-nhien"]);

const row=audit.rows.find(r=>r.lesson_ref==="Bài 1-3");
assert.equal(row.dimensions.LEARN_CONTENT.status,"VERIFIED_DIRECT_AND_LOCAL");
assert.equal(row.dimensions.MICRO_PRACTICE.status,"VERIFIED_DIRECT_AND_LOCAL");
assert.equal(row.dimensions.PRACTICE_BANK.status,"PARTIAL_TOPIC_EVIDENCE");
assert.equal(row.dimensions.WRITTEN_LIBRARY.status,"NONE");
assert.equal(row.dimensions.READINESS.status,"NOT_VERIFIED_STRUCTURED");
assert.equal(row.repair_evidence.status,"REPAIRED_SOURCE_CONFIRMED_R1");

console.log("PASS: Bài 1-3 adds explicit Grade-6 Learn + 3 lesson-local Micro items for natural-number notation/order.");
console.log("PASS: ghi-so-tu-nhien and thu-tu-so-tu-nhien remain NUM-SETS lesson-local concepts with no canonical skill write.");
console.log("PASS: Practice Bank stays 132; Written/Readiness remain open; no new NotebookLM round is required for this deterministic reviewed-boundary repair.");
