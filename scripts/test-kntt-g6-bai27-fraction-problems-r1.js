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
assert.equal(card.title,"Phân số, phép tính và hai bài toán về phân số");
assert.deepEqual(card.lesson_local_problem_types.map(x=>x.id),["tim-gia-tri-phan-so-cua-so","tim-so-khi-biet-gia-tri-phan-so"]);
assert.ok(card.lesson_local_problem_types.every(x=>x.family_id==="NUM-FRACTION-OPS"&&x.role==="PROBLEM_TYPE"&&x.grade===6&&x.lesson==="Bài 27"));
for(const id of ["NUM02MICRO_030","NUM02MICRO_031","NUM02MICRO_032"]) assert.ok(card.micro_practice.includes(id));
assert.match(card.teaching_copy.key_idea,/muốn tìm m\/n của số b/i);
assert.match(card.teaching_copy.key_idea,/a ÷ m\/n/i);

assert.equal(micro.question_count,32);
assert.equal(micro.questions.length,32);
const local=micro.questions.filter(q=>["NUM02MICRO_030","NUM02MICRO_031","NUM02MICRO_032"].includes(q.id));
assert.equal(local.length,3);
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
  assert.equal(q.curriculum.book,"KNTT");
  assert.deepEqual(q.curriculum.grades,[6]);
  assert.equal(q.curriculum.lesson,"Bài 27");
  assert.equal(q.authoring_review.verdict,"SOURCE_CONFIRMED_LOW_RISK");
  assert.equal(q.authoring_review.method,"OWNER_APPROVED_RISK_BASED_REVIEW_POLICY");
  assert.ok(q.lesson_local_targets.length>=1);
  assert.ok(q.lesson_local_targets.every(x=>["tim-gia-tri-phan-so-cua-so","tim-so-khi-biet-gia-tri-phan-so"].includes(x)));
}
assert.equal(local[0].options[local[0].answer],"24");
assert.equal(local[1].options[local[1].answer],"27");
assert.equal(local[2].options[local[2].answer],"24 cây");

const entries=recon.entries.filter(e=>e.lesson_ref==="Bài 27");
assert.equal(entries.length,2);
assert.ok(entries.every(e=>e.resolution==="CANONICAL_FAMILY"&&e.canonical_family_ids.includes("NUM-FRACTION-OPS")&&e.local_role==="PROBLEM_TYPE"));

assert.equal(manifest.question_count,132);
assert.ok(!manifest.skill_labels["tim-gia-tri-phan-so-cua-so"]);
assert.ok(!manifest.skill_labels["tim-so-khi-biet-gia-tri-phan-so"]);

const row=audit.rows.find(r=>r.lesson_ref==="Bài 27");
assert.equal(row.dimensions.LEARN_CONTENT.status,"VERIFIED_LESSON_LOCAL");
assert.equal(row.dimensions.MICRO_PRACTICE.status,"VERIFIED_LESSON_LOCAL");
assert.equal(row.dimensions.PRACTICE_BANK.status,"FAMILY_LEVEL_TOPIC_EVIDENCE");
assert.equal(row.dimensions.WRITTEN_LIBRARY.status,"NONE");
assert.equal(row.dimensions.READINESS.status,"NOT_VERIFIED_STRUCTURED");
assert.equal(row.repair_evidence.status,"REPAIRED_SOURCE_CONFIRMED_R1");

console.log("PASS: Bài 27 adds explicit Grade-6 Learn + 3 problem-type Micro items.");
console.log("PASS: both Bài 27 forms remain NUM-FRACTION-OPS problem types with no canonical skill write.");
console.log("PASS: Practice Bank stays 132; Written/Readiness remain open and no new NotebookLM round is required for this low-risk deterministic repair.");
