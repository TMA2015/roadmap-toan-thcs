#!/usr/bin/env node
"use strict";
const assert=require("node:assert/strict");
const fs=require("node:fs");
const json=p=>JSON.parse(fs.readFileSync(p,"utf8"));

const workspace=json("docs/assets/data/curriculum/topic23-learning-workspace.json");
const micro=json("docs/assets/data/practice/23-xac-suat-micro-v1.json");
const manifest=json("docs/assets/data/practice/23-xac-suat-v1.manifest.json");
const audit=json("docs/assets/data/curriculum/kntt-dimension-coverage-g6-v1.json");
const receipt=fs.readFileSync("review-packets/kntt-g6-bai42-event-outcome-r1/01_NOTEBOOKLM_RESULT_R1.md","utf8");

const card=workspace.cards.find(c=>c.id==="prob23-core-1");
assert.ok(card);
assert.equal(card.title,"Kết quả có thể, sự kiện và xác suất thực nghiệm");
assert.deepEqual(card.skills,["xac-suat-thuc-nghiem"]);
assert.deepEqual(card.lesson_local_concepts.map(x=>x.id),["ket-qua-co-the","su-kien-don-gian"]);
assert.ok(card.lesson_local_concepts.every(x=>x.family_id==="PROB-EVENT"&&x.grade===6&&x.lesson==="Bài 42"));
for(const id of ["PRO23MICRO_018","PRO23MICRO_019","PRO23MICRO_020"]) assert.ok(card.micro_practice.includes(id));
assert.match(card.teaching_copy.key_idea,/kết quả có thể/i);
assert.match(card.teaching_copy.key_idea,/sự kiện/i);
assert.match(card.teaching_copy.summary,/Bài 42/i);
assert.match(card.teaching_copy.summary,/Bài 43/i);

assert.equal(micro.question_count,20);
assert.equal(micro.questions.length,20);
assert.deepEqual(micro.questions.slice(0,17).map(q=>q.id),Array.from({length:17},(_,i)=>`PRO23MICRO_${String(i+1).padStart(3,"0")}`));
const local=micro.questions.slice(17);
assert.deepEqual(local.map(q=>q.id),["PRO23MICRO_018","PRO23MICRO_019","PRO23MICRO_020"]);
assert.deepEqual(local.map(q=>q.answer),[0,0,0]);
for(const q of local){
  assert.equal(q.card_id,"prob23-core-1");
  assert.equal(q.micro_role,"coverage");
  assert.equal(q.tags.topic,"23-xac-suat");
  assert.equal(q.tags.layer,"KNTT-Core");
  assert.equal(q.tags.grade,6);
  assert.deepEqual(q.tags.skill,[]);
  assert.equal(q.evidence_role,"LESSON_LOCAL_CORE_FORMATIVE");
  assert.equal(q.gates_core,false);
  assert.equal(q.curriculum.book,"KNTT");
  assert.deepEqual(q.curriculum.grades,[6]);
  assert.equal(q.curriculum.lesson,"Bài 42");
  assert.equal(q.authoring_review.packet,"MATH-KNTT-G6-BAI42-EVENT-OUTCOME-R1-20261004");
  assert.equal(q.authoring_review.verdict,"PASS");
  assert.equal(q.authoring_review.clearance,"G6_BAI42_EVENT_OUTCOME_CONTENT_REVIEW_COMPLETE");
  assert.ok(q.lesson_local_targets.length>=1);
  assert.ok(q.lesson_local_targets.every(x=>["ket-qua-co-the","su-kien-don-gian"].includes(x)));
  assert.equal(q.options.length,4);
  assert.equal(new Set(q.options).size,4);
  assert.ok(q.explanation.length>20);
  assert.equal(q.hints.length,2);
}
assert.deepEqual(local[0].lesson_local_targets,["ket-qua-co-the"]);
assert.deepEqual(local[1].lesson_local_targets,["su-kien-don-gian"]);
assert.deepEqual(local[2].lesson_local_targets,["ket-qua-co-the","su-kien-don-gian"]);

assert.equal(manifest.question_count,120);
assert.equal(manifest.sources.length,4);
assert.ok(!manifest.skill_labels["ket-qua-co-the"]);
assert.ok(!manifest.skill_labels["su-kien-don-gian"]);

const bai42=audit.rows.find(r=>r.lesson_ref==="Bài 42");
assert.equal(bai42.dimensions.LEARN_CONTENT.status,"VERIFIED_LESSON_LOCAL");
assert.equal(bai42.dimensions.MICRO_PRACTICE.status,"VERIFIED_LESSON_LOCAL");
assert.equal(bai42.dimensions.PRACTICE_BANK.status,"FAMILY_LEVEL_TOPIC_EVIDENCE");
assert.equal(bai42.dimensions.READINESS.status,"PENDING_REVIEW");
assert.match(receipt,/OVERALL\|PASS/);
assert.match(receipt,/BOUNDARY\|LESSON_LOCAL_NO_CANONICAL_SKILL\|PASS/);
assert.match(receipt,/TERMINOLOGY\|G6_SU_KIEN_NOT_G7_BIEN_CO\|PASS/);
assert.match(receipt,/B42_B43_BOUNDARY\|PASS/);
assert.match(receipt,/CLEARANCE\|G6_BAI42_EVENT_OUTCOME_CONTENT_REVIEW_COMPLETE/);

console.log("PASS: Bài 42 reviewed candidate adds explicit Learn + 3 Grade-6 lesson-local Micro items.");
console.log("PASS: ket-qua-co-the and su-kien-don-gian remain PROB-EVENT lesson-local concepts with no canonical skill write.");
console.log("PASS: Practice Bank stays 120; NotebookLM academic review is complete and technical CI remains the release gate.");
