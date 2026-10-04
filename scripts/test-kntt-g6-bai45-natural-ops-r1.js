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
assert.equal(card.title,"Số tự nhiên, phép tính và thứ tự thực hiện");
assert.deepEqual(card.lesson_local_concepts.map(x=>x.id),["cong-tru-so-tu-nhien","nhan-chia-so-tu-nhien"]);
assert.ok(card.lesson_local_concepts.every(x=>x.family_id==="NUM-INTEGER-OPS"&&x.grade===6&&x.lesson==="Bài 4-5"));
for(const id of ["NUM02MICRO_024","NUM02MICRO_025","NUM02MICRO_026"]) assert.ok(card.micro_practice.includes(id));
assert.match(card.teaching_copy.key_idea,/giao hoán/i);
assert.match(card.teaching_copy.key_idea,/kết hợp/i);
assert.match(card.teaching_copy.key_idea,/phân phối/i);

assert.equal(micro.question_count,26);
assert.equal(micro.questions.length,26);
const local=micro.questions.filter(q=>["NUM02MICRO_024","NUM02MICRO_025","NUM02MICRO_026"].includes(q.id));
assert.equal(local.length,3);
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
  assert.equal(q.curriculum.book,"KNTT");
  assert.deepEqual(q.curriculum.grades,[6]);
  assert.equal(q.curriculum.lesson,"Bài 4-5");
  assert.equal(q.authoring_review.verdict,"SOURCE_CONFIRMED_LOW_RISK");
  assert.equal(q.authoring_review.method,"OWNER_APPROVED_RISK_BASED_REVIEW_POLICY");
  assert.ok(q.lesson_local_targets.length>=1);
  assert.ok(q.lesson_local_targets.every(x=>["cong-tru-so-tu-nhien","nhan-chia-so-tu-nhien"].includes(x)));
}
assert.equal(local[0].options[local[0].answer],"5 625");
assert.equal(local[1].options[local[1].answer],"3 700");
assert.equal(local[2].options[local[2].answer],"2 500");

const entries=recon.entries.filter(e=>e.lesson_ref==="Bài 4-5");
assert.equal(entries.length,2);
assert.ok(entries.every(e=>e.resolution==="CANONICAL_FAMILY"&&e.canonical_family_ids.includes("NUM-INTEGER-OPS")&&e.local_role==="LESSON_LOCAL_CONCEPT"));

assert.equal(manifest.question_count,132);
assert.ok(!manifest.skill_labels["cong-tru-so-tu-nhien"]);
assert.ok(!manifest.skill_labels["nhan-chia-so-tu-nhien"]);

const row=audit.rows.find(r=>r.lesson_ref==="Bài 4-5");
assert.equal(row.dimensions.LEARN_CONTENT.status,"VERIFIED_LESSON_LOCAL");
assert.equal(row.dimensions.MICRO_PRACTICE.status,"VERIFIED_LESSON_LOCAL");
assert.equal(row.dimensions.PRACTICE_BANK.status,"FAMILY_LEVEL_TOPIC_EVIDENCE");
assert.equal(row.dimensions.WRITTEN_LIBRARY.status,"NONE");
assert.equal(row.dimensions.READINESS.status,"NOT_VERIFIED_STRUCTURED");
assert.equal(row.repair_evidence.status,"REPAIRED_SOURCE_CONFIRMED_R1");

console.log("PASS: Bài 4-5 adds explicit Grade-6 Learn + 3 lesson-local Micro items.");
console.log("PASS: natural-number operation refs remain NUM-INTEGER-OPS lesson-local concepts with no canonical skill write.");
console.log("PASS: Practice Bank stays 132; Written/Readiness remain open and no new NotebookLM round was required for this low-risk deterministic repair.");
