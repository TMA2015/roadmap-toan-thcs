#!/usr/bin/env node
"use strict";
const assert=require("node:assert/strict");
const fs=require("node:fs");
const json=p=>JSON.parse(fs.readFileSync(p,"utf8"));

const workspace=json("docs/assets/data/curriculum/topic02-learning-workspace.json");
const micro=json("docs/assets/data/practice/02-so-va-phep-tinh-micro-v1.json");
const manifest=json("docs/assets/data/practice/02-so-va-phep-tinh-v1.manifest.json");
const audit=json("docs/assets/data/curriculum/kntt-dimension-coverage-g6-v1.json");

const cards=Object.fromEntries(workspace.cards.map(c=>[c.id,c]));
for(const id of ["num02-g6-core-3","num02-g6-core-4","num02-g6-core-5"]) assert.ok(cards[id]);

assert.match(cards["num02-g6-core-3"].teaching_copy.key_idea,/trục số/i);
assert.match(cards["num02-g6-core-3"].teaching_copy.key_idea,/dấu ngoặc/i);
assert.match(cards["num02-g6-core-3"].teaching_copy.key_idea,/ước/i);
assert.match(cards["num02-g6-core-4"].teaching_copy.key_idea,/phân số nghịch đảo/i);
assert.match(cards["num02-g6-core-5"].teaching_copy.key_idea,/số thập phân/i);
assert.match(cards["num02-g6-core-5"].teaching_copy.key_idea,/số chia trở thành số tự nhiên/i);

const ids=Array.from({length:11},(_,i)=>`NUM02MICRO_${String(42+i).padStart(3,"0")}`);
for(const id of ids) assert.ok(micro.questions.some(q=>q.id===id),id);
assert.equal(micro.question_count,52);
assert.equal(micro.questions.length,52);
const by=Object.fromEntries(micro.questions.map(q=>[q.id,q]));
assert.deepEqual(ids.map(id=>by[id].answer),[0,0,0,0,0,0,0,0,0,0,0]);
for(const id of ids){
  const q=by[id];
  assert.equal(q.micro_role,"coverage");
  assert.equal(q.tags.topic,"02-so-va-phep-tinh");
  assert.equal(q.tags.layer,"KNTT-Core");
  assert.equal(q.tags.grade,6);
  assert.equal(q.curriculum.book,"KNTT");
  assert.equal(q.curriculum.grades[0],6);
  assert.equal(q.authoring_review.verdict,"PENDING_INDEPENDENT_REVIEW");
  assert.equal(q.authoring_review.packet,"MATH-KNTT-G6-SHARED-SKILL-DENSITY-R1-20261006");
}
assert.deepEqual(by.NUM02MICRO_042.tags.skill,["so-nguyen-phep-tinh"]);
assert.deepEqual(by.NUM02MICRO_048.tags.skill,["phep-tinh-phan-so"]);
assert.deepEqual(by.NUM02MICRO_050.tags.skill,["so-huu-ti-thap-phan"]);
assert.equal(by.NUM02MICRO_042.curriculum.lesson,"Bài 13");
assert.equal(by.NUM02MICRO_045.curriculum.lesson,"Bài 15");
assert.equal(by.NUM02MICRO_047.curriculum.lesson,"Bài 17");
assert.equal(by.NUM02MICRO_048.curriculum.lesson,"Bài 25-26");
assert.equal(by.NUM02MICRO_050.curriculum.lesson,"Bài 28-29");

assert.equal(manifest.question_count,132);
assert.equal(audit.summary.dimension_status_counts.LEARN_CONTENT.PARTIAL_SHARED_SKILL,0);
assert.equal(audit.summary.dimension_status_counts.LEARN_CONTENT.VERIFIED_DIRECT,23);
assert.equal(audit.summary.dimension_status_counts.MICRO_PRACTICE.PARTIAL,0);
assert.equal(audit.summary.dimension_status_counts.MICRO_PRACTICE.VERIFIED_DIRECT,23);
assert.equal(audit.summary.shared_skill_rerank_r1.status,"REPAIRED_REVIEWED_R1");
assert.equal(audit.summary.shared_skill_rerank_r1.clearance,"G6_SHARED_SKILL_DENSITY_R1_CONTENT_REVIEW_COMPLETE");
assert.ok(fs.existsSync("review-packets/kntt-g6-shared-skill-density-r1/01_NOTEBOOKLM_RESULT_R1.md"));
assert.equal(audit.summary.priority_gap_rows.length,0);
assert.equal(audit.summary.shared_skill_rerank_r1.no_new_skills,true);
assert.equal(audit.summary.shared_skill_rerank_r1.proposed_micro_ids.length,11);

console.log("PASS: Grade-6 shared-skill density R1 preserves the reviewed 11 Micro bytes and records NotebookLM clearance separately.");
console.log("PASS: Practice remains 132; 7 shared-skill Learn/Micro rows are promoted after clearance while protected dimensions stay unchanged.");
