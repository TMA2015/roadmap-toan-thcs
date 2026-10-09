#!/usr/bin/env node
"use strict";
const assert=require("node:assert/strict");
const fs=require("node:fs");
const json=p=>JSON.parse(fs.readFileSync(p,"utf8"));
const text=p=>fs.readFileSync(p,"utf8");

const a=json("docs/assets/data/curriculum/kntt-g9-repair-wave1-r1.json");
const w21=json("docs/assets/data/curriculum/topic21-learning-workspace.json");
const m21=json("docs/assets/data/practice/21-thong-ke-micro-v1.json");
const w23=json("docs/assets/data/curriculum/topic23-learning-workspace.json");
const m23=json("docs/assets/data/practice/23-xac-suat-micro-v1.json");
const packet=text("review-packets/kntt-g9-repair-wave1-r1/00_NOTEBOOKLM_PACKET_R1.md");

assert.equal(a.packet_id,"MATH-KNTT-G9-REPAIR-W1-R1-20261009");
assert.equal(a.status,"ACADEMIC_CONTENT_REVIEW_PENDING");
assert.equal(a.authorization.clearance,"G9_GAP_PRIORITY_R1_REVIEW_COMPLETE");
assert.deepEqual(a.authorization.first_repair_wave,["CH7","CH8"]);
assert.deepEqual(a.counts,{chapter_groups:2,learn_cards:4,micro_items:16,practice_items:0,written_items:0,readiness_items:0,new_canonical_skills:0});
assert.equal(a.notebooklm_source_contract.selected_source_count,5);
assert.ok(packet.includes("CLEARANCE|G9_REPAIR_W1_R1_CONTENT_REVIEW_COMPLETE"));

const cids=["sta21-core-g9-6","sta21-core-g9-7"];
const pids=["prob23-core-g9-6","prob23-core-g9-7"];
for(const id of cids){
  const c=w21.cards.find(x=>x.id===id);
  assert.ok(c,"missing "+id);
  assert.equal(c.layer,"KNTT-Core");
  assert.equal(c.authoring_review?.status,"PENDING");
  assert.equal(c.authoring_review?.packet_id,a.packet_id);
  assert.equal(c.micro_practice.length,4);
}
for(const id of pids){
  const c=w23.cards.find(x=>x.id===id);
  assert.ok(c,"missing "+id);
  assert.equal(c.layer,"KNTT-Core");
  assert.equal(c.authoring_review?.status,"PENDING");
  assert.equal(c.authoring_review?.packet_id,a.packet_id);
  assert.equal(c.micro_practice.length,4);
}

const sids=a.groups.CH7.micro_items;
const qids=a.groups.CH8.micro_items;
assert.equal(new Set(sids).size,8);
assert.equal(new Set(qids).size,8);

for(const id of sids){
  const q=m21.questions.find(x=>x.id===id);
  assert.ok(q,"missing "+id);
  assert.equal(q.tags.grade,9);
  assert.deepEqual(q.curriculum.grades,[9]);
  assert.equal(q.authoring_review?.status,"PENDING");
  assert.equal(q.authoring_review?.packet_id,a.packet_id);
  assert.equal(q.options.length,4);
  assert.ok(Number.isInteger(q.answer)&&q.answer>=0&&q.answer<4);
  assert.ok(q.explanation.length>=25);
}
for(const id of qids){
  const q=m23.questions.find(x=>x.id===id);
  assert.ok(q,"missing "+id);
  assert.equal(q.tags.grade,9);
  assert.deepEqual(q.curriculum.grades,[9]);
  assert.equal(q.authoring_review?.status,"PENDING");
  assert.equal(q.authoring_review?.packet_id,a.packet_id);
  assert.equal(q.options.length,4);
  assert.ok(Number.isInteger(q.answer)&&q.answer>=0&&q.answer<4);
  assert.ok(q.explanation.length>=25);
}

assert.equal(m21.question_count,m21.questions.length);
assert.equal(m21.question_count,32);
assert.equal(m23.question_count,m23.questions.length);
assert.equal(m23.question_count,28);

const p6=w23.cards.find(x=>x.id==="prob23-core-g9-6");
const p7=w23.cards.find(x=>x.id==="prob23-core-g9-7");
const local=[...(p6.lesson_local_problem_types||[]),...(p7.lesson_local_problem_types||[])].map(x=>x.id);
for(const id of ["dong-xu-nhieu-lan","xuc-xac-hai-lan","so-do-cay","nhieu-buoc-doc-lap","khong-hoan-lai"]){
  assert.ok(local.includes(id),"missing CH8 model ref "+id);
}

assert.equal(a.groups.CH7.learn_cards.length,2);
assert.equal(a.groups.CH8.learn_cards.length,2);
assert.equal(a.groups.CH7.micro_items.length,8);
assert.equal(a.groups.CH8.micro_items.length,8);
for(const [k,v] of Object.entries(a.protected_boundaries)) assert.equal(v,false,"protected boundary changed: "+k);

console.log("PASS: Grade-9 Repair Wave 1 candidate has exactly 4 Learn + 16 Micro across CH7/CH8.");
console.log("PASS: no Practice/Written/Readiness/taxonomy expansion; all candidate content awaits NotebookLM review.");
