#!/usr/bin/env node
"use strict";
const assert=require("node:assert/strict");
const fs=require("node:fs");
const crypto=require("node:crypto");
const read=p=>fs.readFileSync(p,"utf8");
const json=p=>JSON.parse(read(p));
const blob=text=>crypto.createHash("sha1").update("blob "+Buffer.byteLength(text,"utf8")+"\0"+text).digest("hex");

const artifact=json("docs/assets/data/curriculum/kntt-g7-repair-wave2-r1.json");
const packet=read("review-packets/kntt-g7-repair-wave2-r1/00_NOTEBOOKLM_PACKET_R1.md");
const w2=json("docs/assets/data/curriculum/topic02-learning-workspace.json");
const m2=json("docs/assets/data/practice/02-so-va-phep-tinh-micro-v1.json");
const w3=json("docs/assets/data/curriculum/topic03-learning-workspace.json");
const m3=json("docs/assets/data/practice/03-ti-le-ti-le-thuc-micro-v1.json");
const w21=json("docs/assets/data/curriculum/topic21-learning-workspace.json");
const m21=json("docs/assets/data/practice/21-thong-ke-micro-v1.json");

assert.equal(artifact.packet_id,"MATH-KNTT-G7-REPAIR-W2-R1-20261008");
assert.equal(artifact.status,"ACADEMIC_CONTENT_REVIEW_PASS");
assert.deepEqual(artifact.prior_clearance.second_repair_wave,["BAI4","BAI18_19","BAI22_23"]);
assert.deepEqual(artifact.counts,{
  lesson_groups:3,learn_cards:2,micro_items:12,practice_items:0,
  written_items:0,readiness_items:0,new_canonical_skills:0
});
for(const [path,lock] of Object.entries(artifact.source_locks)){
  if(path.endsWith("topic21-learning-workspace.json")){
    assert.match(lock.sha,/^[0-9a-f]{40}$/);
    const current=json(path);
    assert.ok(current.cards.some(card=>card.id==="sta21-core-4"),"historical Wave-2 Topic21 card removed");
  }else if(path.endsWith("21-thong-ke-micro-v1.json")){
    assert.match(lock.sha,/^[0-9a-f]{40}$/);
    const current=json(path);
    for(const id of ["STA21MICRO_021","STA21MICRO_022","STA21MICRO_023","STA21MICRO_024"]){
      assert.ok(current.questions.some(q=>q.id===id),"historical Wave-2 Topic21 Micro removed: "+id);
    }
  }else{
    assert.equal(blob(read(path)),lock.sha,"source drift: "+path);
  }
}
assert.equal(artifact.notebooklm_source_contract.selected_source_count,5);
assert.equal(artifact.independent_review.verdict,"PASS");
assert.equal(artifact.independent_review.clearance,"G7_REPAIR_W2_R1_CONTENT_REVIEW_COMPLETE");
assert.ok(packet.includes("Select exactly 5 Sources"));
assert.ok(packet.includes("CONTENT_COUNTS|LEARN=2|MICRO=12|PRACTICE=0"));
assert.ok(packet.includes("CLEARANCE|G7_REPAIR_WAVE2_R1_CONTENT_REVIEW_COMPLETE"));

const card4=w2.cards.find(x=>x.id==="num02-g7-core-3");
const card23=w3.cards.find(x=>x.id==="rat03-core-g7-6");
assert.ok(card4&&card23);
assert.deepEqual(card4.skills,["thu-tu-phep-tinh"]);
assert.deepEqual(card23.skills,["mo-hinh-ti-le"]);
for(const c of [card4,card23]){
  assert.deepEqual(c.grades,[7]);
  assert.equal(c.layer,"KNTT-Core");
  assert.equal(c.authoring_review.status,"PASS");
  assert.equal(c.authoring_review.packet_id,artifact.packet_id);
}

assert.equal(m2.question_count,m2.questions.length);
assert.equal(m2.question_count,64);
assert.equal(m3.question_count,m3.questions.length);
assert.equal(m3.question_count,19);
assert.equal(m21.question_count,m21.questions.length);
assert.ok(m21.question_count>=24,"Topic21 Micro count regressed below Wave-2 baseline");

const ids2=["NUM02MICRO_061","NUM02MICRO_062","NUM02MICRO_063","NUM02MICRO_064"];
const ids21=["STA21MICRO_021","STA21MICRO_022","STA21MICRO_023","STA21MICRO_024"];
const ids3=["RAT03MICRO_016","RAT03MICRO_017","RAT03MICRO_018","RAT03MICRO_019"];
const all=[
  ...m2.questions.filter(x=>ids2.includes(x.id)),
  ...m21.questions.filter(x=>ids21.includes(x.id)),
  ...m3.questions.filter(x=>ids3.includes(x.id))
];
assert.equal(all.length,12);
assert.equal(new Set(all.map(x=>x.id)).size,12);
for(const q of all){
  assert.equal(q.tags.grade,7);
  assert.deepEqual(q.curriculum.grades,[7]);
  assert.ok(Array.isArray(q.options)&&q.options.length===4);
  assert.ok(Number.isInteger(q.answer)&&q.answer>=0&&q.answer<4);
  assert.ok(q.explanation&&q.explanation.length>20);
  assert.equal(q.authoring_review.status,"PASS");
  assert.equal(q.authoring_review.packet_id,artifact.packet_id);
}
assert.ok(card4.lesson_local_concepts.some(x=>x.id==="quy-tac-chuyen-ve"&&x.role==="PREREQUISITE_TECHNIQUE"));
assert.ok(w21.cards.find(x=>x.id==="sta21-core-4").micro_practice.includes("STA21MICRO_024"));
assert.ok(!JSON.stringify(artifact.candidates).includes('"PRACTICE"'));
assert.ok(!JSON.stringify(artifact.candidates).includes('"WRITTEN"'));
assert.ok(!JSON.stringify(artifact.candidates).includes('"READINESS"'));
for(const [k,v] of Object.entries(artifact.protected_boundaries)) assert.equal(v,false,"protected boundary changed: "+k);

console.log("PASS: Grade-7 Repair Wave 2 has exactly 2 Learn + 12 Micro candidates after NotebookLM PASS.");
console.log("PASS: no Practice/Written/Readiness/new-skill expansion is encoded.");
