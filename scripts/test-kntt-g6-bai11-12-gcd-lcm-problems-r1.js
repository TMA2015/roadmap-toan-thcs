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
const pt=(card.lesson_local_problem_types||[]).find(x=>x.id==="bai-toan-ucln-bcnn");
assert.ok(pt);
assert.equal(pt.family_id,"NUM-GCD-LCM");
assert.equal(pt.role,"PROBLEM_TYPE");
assert.equal(pt.grade,6);
assert.equal(pt.lesson,"Bài 11-12");
for(const id of ["NUM02MICRO_036","NUM02MICRO_037","NUM02MICRO_038"]) assert.ok(card.micro_practice.includes(id));
assert.match(card.teaching_copy.key_idea,/ƯCLN/i);
assert.match(card.teaching_copy.key_idea,/BCNN/i);
assert.match(card.teaching_copy.key_idea,/chu kỳ/i);

assert.equal(micro.question_count,38);
assert.equal(micro.questions.length,38);
const by=Object.fromEntries(micro.questions.map(q=>[q.id,q]));
const local=[by.NUM02MICRO_036,by.NUM02MICRO_037,by.NUM02MICRO_038];
assert.ok(local.every(Boolean));
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
  assert.equal(q.curriculum.lesson,"Bài 11-12");
  assert.equal(q.authoring_review.verdict,"SOURCE_CONFIRMED_LOW_RISK");
  assert.equal(q.authoring_review.method,"OWNER_APPROVED_RISK_BASED_REVIEW_POLICY");
  assert.deepEqual(q.lesson_local_targets,["bai-toan-ucln-bcnn"]);
}
assert.equal(by.NUM02MICRO_036.options[0],"14");
assert.equal(by.NUM02MICRO_037.options[0],"36 phút");
assert.match(by.NUM02MICRO_038.options[0],/hai chu kỳ/);

const rec=recon.entries.find(e=>e.lesson_ref==="Bài 11-12"&&e.historical_ref==="bai-toan-ucln-bcnn");
assert.ok(rec);
assert.equal(rec.resolution,"CANONICAL_FAMILY");
assert.ok(rec.canonical_family_ids.includes("NUM-GCD-LCM"));
assert.equal(rec.local_role,"PROBLEM_TYPE");

assert.equal(manifest.question_count,132);
assert.ok(!manifest.skill_labels["bai-toan-ucln-bcnn"]);

const row=audit.rows.find(r=>r.lesson_ref==="Bài 11-12");
assert.equal(row.dimensions.LEARN_CONTENT.status,"VERIFIED_DIRECT_AND_LOCAL");
assert.equal(row.dimensions.MICRO_PRACTICE.status,"VERIFIED_DIRECT_AND_LOCAL");
assert.equal(row.dimensions.PRACTICE_BANK.status,"PARTIAL_TOPIC_EVIDENCE");
assert.equal(row.dimensions.WRITTEN_LIBRARY.status,"CANDIDATE_ONLY_NO_KNTT_PLACEMENT");
assert.equal(row.dimensions.READINESS.status,"NOT_VERIFIED_STRUCTURED");
assert.equal(row.repair_evidence.status,"REPAIRED_SOURCE_CONFIRMED_R1");

console.log("PASS: Bài 11-12 adds explicit Grade-6 Learn + 3 UCLN/BCNN application problem-type Micro items.");
console.log("PASS: bai-toan-ucln-bcnn remains a NUM-GCD-LCM problem type with no canonical skill write.");
console.log("PASS: Practice Bank stays 132; Written placement and Readiness remain open; no new NotebookLM round is required for this deterministic reviewed-boundary repair.");
