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

const card=workspace.cards.find(c=>c.id==="num02-g6-core-2");
assert.ok(card);
assert.equal(card.title,"Quan hệ chia hết, số nguyên tố, ƯCLN và BCNN");
assert.deepEqual(card.lesson_local_concepts.map(x=>x.id),["quan-he-chia-het","tinh-chat-chia-het"]);
assert.ok(card.lesson_local_concepts.every(x=>x.family_id==="NUM-DIV-PRIME"&&x.grade===6&&x.lesson==="Bài 8"));
for(const id of ["NUM02MICRO_027","NUM02MICRO_028","NUM02MICRO_029"]) assert.ok(card.micro_practice.includes(id));
assert.match(card.teaching_copy.key_idea,/chia hết/i);
assert.match(card.teaching_copy.key_idea,/tổng/i);
assert.match(card.teaching_copy.key_idea,/hiệu/i);

assert.equal(micro.question_count,29);
assert.equal(micro.questions.length,29);
const local=micro.questions.filter(q=>["NUM02MICRO_027","NUM02MICRO_028","NUM02MICRO_029"].includes(q.id));
assert.equal(local.length,3);
assert.deepEqual(local.map(q=>q.answer),[0,0,0]);
for(const q of local){
  assert.equal(q.card_id,"num02-g6-core-2");
  assert.equal(q.micro_role,"coverage");
  assert.equal(q.tags.topic,"02-so-va-phep-tinh");
  assert.equal(q.tags.layer,"KNTT-Core");
  assert.equal(q.tags.grade,6);
  assert.deepEqual(q.tags.skill,[]);
  assert.equal(q.evidence_role,"LESSON_LOCAL_CORE_FORMATIVE");
  assert.equal(q.gates_core,false);
  assert.equal(q.curriculum.book,"KNTT");
  assert.deepEqual(q.curriculum.grades,[6]);
  assert.equal(q.curriculum.lesson,"Bài 8");
  assert.equal(q.authoring_review.verdict,"SOURCE_CONFIRMED_LOW_RISK");
  assert.equal(q.authoring_review.method,"OWNER_APPROVED_RISK_BASED_REVIEW_POLICY");
  assert.ok(q.lesson_local_targets.length>=1);
  assert.ok(q.lesson_local_targets.every(x=>["quan-he-chia-het","tinh-chat-chia-het"].includes(x)));
}
assert.equal(local[0].options[local[0].answer],"84 chia hết cho 7");
assert.equal(local[1].options[local[1].answer],"18 + 30 chia hết cho 6");
assert.equal(local[2].options[local[2].answer],"72 − 24 chia hết cho 8");

const entries=recon.entries.filter(e=>e.lesson_ref==="Bài 8");
assert.equal(entries.length,2);
assert.ok(entries.every(e=>e.resolution==="CANONICAL_FAMILY"&&e.canonical_family_ids.includes("NUM-DIV-PRIME")&&e.local_role==="LESSON_LOCAL_CONCEPT"));

assert.equal(manifest.question_count,132);
assert.ok(!manifest.skill_labels["quan-he-chia-het"]);
assert.ok(!manifest.skill_labels["tinh-chat-chia-het"]);

const row=audit.rows.find(r=>r.lesson_ref==="Bài 8");
assert.equal(row.dimensions.LEARN_CONTENT.status,"VERIFIED_LESSON_LOCAL");
assert.equal(row.dimensions.MICRO_PRACTICE.status,"VERIFIED_LESSON_LOCAL");
assert.equal(row.dimensions.PRACTICE_BANK.status,"FAMILY_LEVEL_TOPIC_EVIDENCE");
assert.equal(row.dimensions.WRITTEN_LIBRARY.status,"NONE");
assert.equal(row.dimensions.READINESS.status,"NOT_VERIFIED_STRUCTURED");
assert.equal(row.repair_evidence.status,"REPAIRED_SOURCE_CONFIRMED_R1");

console.log("PASS: Bài 8 adds explicit Grade-6 Learn + 3 lesson-local Micro items.");
console.log("PASS: divisibility relation/properties remain NUM-DIV-PRIME lesson-local concepts with no canonical skill write.");
console.log("PASS: Practice Bank stays 132; Written/Readiness remain open and no new NotebookLM round is required for this low-risk deterministic repair.");
