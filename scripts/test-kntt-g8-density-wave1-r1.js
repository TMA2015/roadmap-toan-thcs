#!/usr/bin/env node
"use strict";
const assert=require("node:assert/strict");
const fs=require("node:fs");
const json=p=>JSON.parse(fs.readFileSync(p,"utf8"));

const decision=json("docs/assets/data/curriculum/kntt-g8-density-wave1-r1.json");
const inventory=json("docs/assets/data/curriculum/kntt-dimension-coverage-g8-v1.json");
const workspace=json("docs/assets/data/curriculum/topic07-learning-workspace.json");
const micro=json("docs/assets/data/practice/07-phan-thuc-dai-so-micro-v1.json");
const manifest=json("docs/assets/data/practice/07-phan-thuc-dai-so-v1.manifest.json");

assert.equal(decision.packet_id,"MATH-KNTT-G8-DENSITY-W1-R1-20261008");
assert.equal(decision.basis.independent_review_required,false);
assert.equal(decision.decision.repair.lesson_group,"Bài 21-24");
assert.equal(decision.decision.repair.dimension,"MICRO");
assert.equal(decision.decision.repair.target_skill,"giu-dieu-kien-ban-dau");
assert.equal(decision.decision.repair.maximum_new_micro_items,1);
assert.equal(decision.decision.defer.length,1);
assert.equal(decision.decision.defer[0].lesson_group,"Bài 18-20");
assert.equal(decision.decision.defer[0].status,"DEFER");

assert.deepEqual(inventory.summary.priority_gap_candidates,{P0:[],P1:["Bài 21-24"],P2:["Bài 18-20"]});
assert.ok(manifest.skill_labels["giu-dieu-kien-ban-dau"],"canonical Practice manifest skill missing");

const card=workspace.cards.find(c=>c.id==="pt07-core-2");
assert.ok(card);
assert.ok(card.skills.includes("giu-dieu-kien-ban-dau"));
assert.equal(card.skills.filter(x=>x==="giu-dieu-kien-ban-dau").length,1);
assert.equal(card.micro_practice.filter(x=>x==="RAT07MICRO_018").length,1);

assert.equal(micro.question_count,18);
assert.equal(micro.questions.length,18);
assert.deepEqual(micro.questions.slice(15).map(q=>q.id),["RAT07MICRO_016","RAT07MICRO_017","RAT07MICRO_018"]);
const q=micro.questions.find(q=>q.id==="RAT07MICRO_018");
assert.ok(q);
assert.equal(q.card_id,"pt07-core-2");
assert.equal(q.micro_role,"coverage");
assert.deepEqual(q.tags.skill,["giu-dieu-kien-ban-dau"]);
assert.equal(q.tags.grade,8);
assert.equal(q.curriculum.lesson,"Bài 22");
assert.equal(q.answer,0);
assert.equal(q.options.length,4);
assert.equal(new Set(q.options).size,4);
assert.equal(q.authoring_review.status,"PASS");
assert.equal(q.authoring_review.scope,"G8_BAI21_24_MICRO_ONLY_GIU_DIEU_KIEN_BAN_DAU");

// Exact mathematical oracle: (x^2-4)/(x-2)=x+2 only on the original domain x != 2.
for(const x of [-7,-3,0,1,5,9]){
  assert.notEqual(x,2);
  assert.equal((x*x-4)/(x-2),x+2);
}
assert.equal(2-2,0);
assert.ok(q.options[0].includes("x\\ne2"));
assert.ok(q.explanation.includes("x\\ne2"));
assert.ok(q.explanation.includes("vẫn phải giữ điều kiện"));

assert.equal(decision.protected_boundaries.learn_content_change,false);
assert.equal(decision.protected_boundaries.practice_bank_change,false);
assert.equal(decision.protected_boundaries.written_change,false);
assert.equal(decision.protected_boundaries.readiness_change,false);
assert.equal(decision.protected_boundaries.new_canonical_skill,false);
assert.equal(decision.protected_boundaries.taxonomy_runtime_change,false);
assert.equal(decision.protected_boundaries.mastery_change,false);
assert.equal(decision.protected_boundaries.learner_history_regrade,false);

console.log("PASS: Grade-8 Density Wave 1 adds exactly one CĐ07 Micro for preserving the original domain.");
console.log("PASS: Bài 18-20 remains deferred; no Learn/Practice/Written/Readiness/taxonomy expansion.");
