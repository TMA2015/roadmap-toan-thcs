#!/usr/bin/env node
"use strict";
const assert=require("node:assert/strict");
const fs=require("node:fs");
const json=p=>JSON.parse(fs.readFileSync(p,"utf8"));

const workspace=json("docs/assets/data/curriculum/topic02-learning-workspace.json");
const micro=json("docs/assets/data/practice/02-so-va-phep-tinh-micro-v1.json");
const chunk=json("docs/assets/data/practice/02-so-va-phep-tinh-v1-05.json");
const manifest=json("docs/assets/data/practice/02-so-va-phep-tinh-v1.manifest.json");

const card=workspace.cards.find(c=>c.id==="num02-g6-core-5");
assert.ok(card);
assert.ok(card.skills.includes("lam-tron-so"));
assert.ok(card.kntt_lessons.some(x=>x.includes("Bài 28–31")));
for(const id of ["NUM02MICRO_021","NUM02MICRO_022","NUM02MICRO_023"]) assert.ok(card.micro_practice.includes(id));
assert.match(card.teaching_copy.key_idea,/làm tròn/i);
assert.match(card.teaching_copy.key_idea,/nhỏ hơn 5/i);
assert.match(card.teaching_copy.key_idea,/5 trở lên/i);

assert.equal(micro.question_count,23);
const newMicro=micro.questions.filter(q=>/^NUM02MICRO_02[1-3]$/.test(q.id));
assert.equal(newMicro.length,3);
assert.deepEqual(newMicro.map(q=>q.id),["NUM02MICRO_021","NUM02MICRO_022","NUM02MICRO_023"]);
for(const q of newMicro){
  assert.deepEqual(q.tags.skill,["lam-tron-so"]);
  assert.equal(q.tags.grade,6);
  assert.equal(q.tags.layer,"KNTT-Core");
  assert.equal(q.authoring_review.verdict,"PENDING_NOTEBOOKLM");
  assert.ok(q.answer>=0 && q.answer<q.options.length);
}
assert.equal(newMicro[2].tags.type,"uoc-luong-tu-lam-tron");
assert.ok(!newMicro.some(q=>q.tags.skill.includes("uoc-luong")));

assert.equal(chunk.schema,"practice-question-chunk-v1");
assert.equal(chunk.bank_id,"NUM02-V1-05");
assert.equal(chunk.questions.length,12);
assert.deepEqual(chunk.questions.map(q=>q.id),Array.from({length:12},(_,i)=>`NUM02V1_${121+i}`));
assert.deepEqual(chunk.questions.map(q=>q.answer),[0,1,1,1,0,1,1,1,2,2,0,1]);
for(const q of chunk.questions){
  assert.deepEqual(q.tags.skill,["lam-tron-so"]);
  assert.equal(q.authoring_review.verdict,"PENDING_NOTEBOOKLM");
  assert.ok(q.answer>=0 && q.answer<q.options.length);
  assert.equal(new Set(q.options).size,q.options.length);
}

assert.equal(manifest.question_count,132);
assert.equal(manifest.skill_labels["lam-tron-so"],"Làm tròn số");
assert.ok(manifest.sources.includes("02-so-va-phep-tinh-v1-05.json"));
assert.ok(manifest.skill_groups.some(g=>g.skills.includes("lam-tron-so")));

console.log("PASS: Bài 30 candidate adds Learn + 3 micro + 12 Practice rounding items.");
console.log("PASS: uoc-luong remains lesson-local; no uoc-luong canonical skill tag is introduced.");
console.log("PASS: candidate remains academic-review pending before release.");
