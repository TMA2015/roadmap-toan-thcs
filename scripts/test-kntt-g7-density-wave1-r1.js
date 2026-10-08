#!/usr/bin/env node
"use strict";
const assert=require("node:assert/strict");
const fs=require("node:fs");
const json=p=>JSON.parse(fs.readFileSync(p,"utf8"));

const artifact=json("docs/assets/data/curriculum/kntt-g7-density-wave1-scope-r1.json");
const workspace=json("docs/assets/data/curriculum/topic13-learning-workspace.json");
const micro=json("docs/assets/data/practice/13-goc-va-duong-thang-micro-v1.json");

assert.equal(artifact.packet_id,"MATH-KNTT-G7-DENSITY-W1-SCOPE-R1-20261008");
assert.equal(artifact.status,"OWNER_AUTHORIZED_IMPLEMENTED");
assert.equal(artifact.owner_authorization.authorized_group,"BAI8");
assert.equal(artifact.owner_authorization.authorized_dimension,"MICRO");
assert.equal(artifact.owner_authorization.authorized_target,"goc-phu-bu");
assert.equal(artifact.owner_authorization.maximum_new_micro_items,1);

assert.deepEqual(artifact.implementation,{
  item_id:"GEO13MICRO_023",
  card_id:"geo13-core-2",
  micro_role:"coverage",
  grade:7,
  target_skill:"goc-phu-bu",
  item_count_added:1,
  learn_added:0,
  practice_added:0,
  written_added:0,
  readiness_added:0,
  new_canonical_skills:0
});

const card=workspace.cards.find(c=>c.id==="geo13-core-2");
assert.ok(card);
assert.ok(card.skills.includes("goc-phu-bu"));
assert.equal(card.micro_practice.filter(id=>id==="GEO13MICRO_023").length,1);

const q=micro.questions.find(q=>q.id==="GEO13MICRO_023");
assert.ok(q);
assert.equal(q.card_id,"geo13-core-2");
assert.equal(q.micro_role,"coverage");
assert.equal(q.target,"goc-phu-bu");
assert.deepEqual(q.tags.skill,["goc-phu-bu"]);
assert.equal(q.tags.grade,7);
assert.deepEqual(q.curriculum.grades,[7]);
assert.equal(q.curriculum.lesson,"Bài 8");
assert.equal(q.answer,0);
assert.equal(q.options.length,4);
assert.equal(q.authoring_review.status,"PASS");
assert.equal(q.authoring_review.scope,"BAI8_MICRO_ONLY_GOC_PHU_BU");

for(const [k,v] of Object.entries(artifact.protected_boundaries)) assert.equal(v,false,"protected boundary changed: "+k);

console.log("PASS: Grade-7 Density Wave 1 adds exactly one BAI8 coverage Micro for goc-phu-bu.");
console.log("PASS: no Learn/Practice/Written/Readiness/taxonomy expansion.");
