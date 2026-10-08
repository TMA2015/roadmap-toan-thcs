#!/usr/bin/env node
"use strict";
const assert=require("node:assert/strict");
const fs=require("node:fs");
const crypto=require("node:crypto");
const read=p=>fs.readFileSync(p,"utf8");
const json=p=>JSON.parse(read(p));
const blob=text=>crypto.createHash("sha1").update("blob "+Buffer.byteLength(text,"utf8")+"\0"+text).digest("hex");

const artifact=json("docs/assets/data/curriculum/kntt-g7-repair-wave1-r1.json");
const packet=read("review-packets/kntt-g7-repair-wave1-r1/00_NOTEBOOKLM_PACKET_R1.md");
const w2=json("docs/assets/data/curriculum/topic02-learning-workspace.json");
const m2=json("docs/assets/data/practice/02-so-va-phep-tinh-micro-v1.json");
const man2=json("docs/assets/data/practice/02-so-va-phep-tinh-v1.manifest.json");
const p2=json("docs/assets/data/practice/02-so-va-phep-tinh-v1-06.json");
const w4=json("docs/assets/data/curriculum/topic04-learning-workspace.json");
const m4=json("docs/assets/data/practice/04-bieu-thuc-dai-so-micro-v1.json");
const man4=json("docs/assets/data/practice/04-bieu-thuc-dai-so-v2.manifest.json");
const p4=json("docs/assets/data/practice/04-bieu-thuc-dai-so-v2-06.json");
const rec=json("docs/assets/data/curriculum/kntt-grade7-reconciliation-r2.json");

assert.equal(artifact.packet_id,"MATH-KNTT-G7-REPAIR-W1-R1-20261008");
assert.equal(artifact.status,"ACADEMIC_CONTENT_REVIEW_PENDING");
assert.deepEqual(artifact.prior_clearance.first_repair_wave,["BAI1_3","BAI5_7","BAI26_28"]);
assert.deepEqual(artifact.prior_clearance.dimensions,["LEARN","MICRO","PRACTICE"]);
assert.equal(artifact.prior_clearance.max_groups,3);
assert.deepEqual(artifact.counts,{
  lesson_groups:3,learn_cards:3,micro_items:12,practice_items:18,
  written_items:0,readiness_items:0,new_canonical_skills:0
});

for(const [path,lock] of Object.entries(artifact.source_locks)){
  assert.equal(blob(read(path)),lock.sha,"source drift: "+path);
}

assert.equal(artifact.notebooklm_source_contract.selected_source_count,5);
assert.equal(artifact.notebooklm_source_contract.permanent_sources.length,2);
assert.equal(artifact.notebooklm_source_contract.grade7_s1_sources.length,2);
assert.equal(artifact.notebooklm_source_contract.temporary_batch_sources.length,1);
assert.deepEqual(artifact.notebooklm_source_contract.explicitly_not_selected,[
  "Written Exercise Library Contract v1",
  "Grade-7 evidence inventory JSON",
  "Grade-7 priority-result receipt as a separate NotebookLM Source"
]);
assert.ok(packet.includes("Select exactly 5 Sources"));
assert.ok(packet.includes("2 permanent governance + 2 Grade-7 SGK + 1 temporary packet = 5 Sources"));
assert.ok(packet.includes("CONTENT_COUNTS|LEARN=3|MICRO=12|PRACTICE=18"));
assert.ok(packet.includes("CLEARANCE|G7_REPAIR_W1_R1_CONTENT_REVIEW_COMPLETE"));

const reviewedCanonical=new Set((rec.entries||[]).flatMap(e=>e.canonical_skill_ids||[]));
for(const skill of ["phep-tinh-so-huu-ti","so-vo-ti","can-bac-hai-so-hoc","chia-da-thuc-mot-bien"]){
  assert.ok(reviewedCanonical.has(skill),"skill not pre-reviewed canonical: "+skill);
}

const cardR=w2.cards.find(x=>x.id==="num02-g7-core-1");
const cardReal=w2.cards.find(x=>x.id==="num02-g7-core-2");
const cardDiv=w4.cards.find(x=>x.id==="alg04-g7-core-6");
assert.ok(cardR&&cardReal&&cardDiv,"all 3 Learn cards exist");
assert.deepEqual(cardR.skills,["phep-tinh-so-huu-ti"]);
assert.deepEqual(cardReal.skills,["so-vo-ti","can-bac-hai-so-hoc"]);
assert.deepEqual(cardDiv.skills,["chia-da-thuc-mot-bien"]);
for(const c of [cardR,cardReal,cardDiv]){
  assert.deepEqual(c.grades,[7]);
  assert.equal(c.layer,"KNTT-Core");
  assert.equal(c.authoring_review.status,"PENDING");
  assert.equal(c.authoring_review.packet_id,artifact.packet_id);
}

assert.equal(m2.question_count,m2.questions.length);
assert.equal(m2.question_count,60);
assert.equal(m4.question_count,m4.questions.length);
assert.equal(m4.question_count,19);
assert.equal(man2.question_count,144);
assert.equal(man4.question_count,138);
assert.ok(man2.sources.includes("02-so-va-phep-tinh-v1-06.json"));
assert.ok(man4.sources.includes("04-bieu-thuc-dai-so-v2-06.json"));
assert.equal(p2.questions.length,12);
assert.equal(p4.questions.length,6);

const ids2=["NUM02MICRO_053","NUM02MICRO_054","NUM02MICRO_055","NUM02MICRO_056","NUM02MICRO_057","NUM02MICRO_058","NUM02MICRO_059","NUM02MICRO_060"];
const ids4=["ALG04MICRO_016","ALG04MICRO_017","ALG04MICRO_018","ALG04MICRO_019"];
for(const id of ids2){
  const q=m2.questions.find(x=>x.id===id);
  assert.ok(q,id+" missing");
  assert.equal(q.tags.grade,7);
  assert.deepEqual(q.curriculum.grades,[7]);
  assert.equal(q.authoring_review.status,"PENDING");
}
for(const id of ids4){
  const q=m4.questions.find(x=>x.id===id);
  assert.ok(q,id+" missing");
  assert.equal(q.tags.grade,7);
  assert.deepEqual(q.curriculum.grades,[7]);
  assert.equal(q.authoring_review.status,"PENDING");
}

const allCandidate=[...m2.questions.filter(x=>ids2.includes(x.id)),...m4.questions.filter(x=>ids4.includes(x.id)),...p2.questions,...p4.questions];
for(const q of allCandidate){
  assert.ok(Array.isArray(q.options)&&q.options.length===4,q.id+" must have 4 options");
  assert.ok(Number.isInteger(q.answer)&&q.answer>=0&&q.answer<4,q.id+" answer index");
  assert.ok(q.explanation&&q.explanation.length>20,q.id+" explanation too thin");
  assert.equal(q.authoring_review.status,"PENDING");
  assert.equal(q.authoring_review.packet_id,artifact.packet_id);
}
assert.equal(new Set(allCandidate.map(x=>x.id)).size,30,"candidate question IDs unique");

assert.ok(man2.skill_labels["phep-tinh-so-huu-ti"]);
assert.ok(man2.skill_labels["so-vo-ti"]);
assert.ok(man2.skill_labels["can-bac-hai-so-hoc"]);
assert.ok(man4.skill_labels["chia-da-thuc-mot-bien"]);

// Key academic boundaries encoded in candidate copy
assert.equal(m2.questions.find(x=>x.id==="NUM02MICRO_058").answer,0); // sqrt(49)=7, not ±7
assert.ok(cardReal.teaching_copy.misconception.includes("√49 = ±7"));
assert.ok(cardReal.teaching_copy.summary.includes("lớp 7"));
assert.equal(m4.questions.find(x=>x.id==="ALG04MICRO_016").answer,0);
assert.ok(cardDiv.teaching_copy.key_idea.includes("hạng tử bậc cao nhất"));
assert.ok(cardDiv.teaching_copy.misconception.includes("không"));
assert.ok(!JSON.stringify(artifact.candidates).includes('"WRITTEN"'));
assert.ok(!JSON.stringify(artifact.candidates).includes('"READINESS"'));

for(const [k,v] of Object.entries(artifact.protected_boundaries)) assert.equal(v,false,"protected boundary changed: "+k);

console.log("PASS: Grade-7 Repair Wave 1 has exactly 3 Learn + 12 Micro + 18 Practice candidates.");
console.log("PASS: all candidate skills are already reviewed canonical Grade-7 skills; no Written/Readiness/new-skill expansion.");
console.log("PASS: NotebookLM source contract is exactly 5 Sources and content review is still pending.");
