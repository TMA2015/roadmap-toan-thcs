#!/usr/bin/env node
"use strict";
// Grade9 CT23 QA-only, source-locked academic verdict test; no Grade6–8 bank changes.
const fs=require("node:fs"),assert=require("node:assert/strict");
const qa=JSON.parse(fs.readFileSync("docs/assets/data/qa/ct23-g9-readiness-candidate-v1.json","utf8"));
const existing=JSON.parse(fs.readFileSync("docs/assets/data/assessment/23-xac-suat-core-v1.json","utf8"));
assert.equal(qa.schema,"roadmap-readiness-assessment-v1");
assert.equal(qa.release_status,"QA_ONLY_NO_LIVE_RELEASE");
assert.equal(qa.assessment_id,"PROB23-G9-CORE-READY-V1");
assert.equal(qa.academic_review.packet_id,"MATH-CT23-G9-NEW-READINESS-TEN-ITEM-AUTHORING-R0-20261021");
assert.equal(qa.academic_review.authorization,"NO_LIVE_RELEASE");
assert.deepEqual(qa.grade_scope,[9]);
assert.equal(qa.items.length,10);
assert.deepEqual(qa.items.map(q=>q.id),Array.from({length:10},(_,i)=>"PRO23G9READY_"+String(i+1).padStart(3,"0")));
assert.deepEqual(qa.items.map(q=>q.answer),[2,1,2,2,0,2,1,2,1,1]);
const levels=qa.items.reduce((a,q)=>(a[q.cognitive_level]=(a[q.cognitive_level]||0)+1,a),{});
assert.deepEqual(levels,{L1:2,L2:5,L3:3});
const cards={"prob23-core-g9-6":0,"prob23-core-g9-7":0};
const skills=new Set(["khong-gian-mau","bien-co","xac-suat-co-dien","kiem-tra-xac-suat"]);
for(const q of qa.items){
 assert.equal(q.type,"mcq");assert.equal(q.points,1);
 assert.equal(q.curriculum.book,"KNTT");assert.deepEqual(q.curriculum.grades,[9]);assert.equal(q.curriculum.level,"core");
 assert(q.card_id in cards);cards[q.card_id]++;
 assert(skills.has(q.skill));
 assert.deepEqual(Object.keys(q.options).map(Number),[0,1,2,3]);
 assert.equal(new Set(q.options).size,4);
 assert(q.question.length>65&&q.explanation.length>35);
 assert(/^PRO23MICRO_0(2[1-8])$/.test(q.source_micro_id));
}
assert.deepEqual(cards,{"prob23-core-g9-6":5,"prob23-core-g9-7":5});
assert.equal(existing.assessment_id,"PROB23-CORE-READY-V1");
assert.equal(existing.items.length,12);
assert.deepEqual(existing.items.map(q=>q.id),Array.from({length:12},(_,i)=>"PRO23READY_"+String(i+1).padStart(3,"0")));
assert.deepEqual(existing.items.map(q=>q.answer),[0,2,1,0,2,1,3,1,2,0,2,3]);
assert.equal(qa.policy.feedback,"after_submit");assert.equal(qa.policy.hints,false);
assert.equal(qa.policy.tutor,false);assert.equal(qa.policy.hard_gate,false);
const js=fs.readFileSync("docs/assets/javascripts/readiness-g9-qa-v1.js","utf8");
const page=fs.readFileSync("docs/kien-thuc/23-xac-suat/tu-kiem-tra-lop-9-qa.md","utf8");
assert(js.includes('const selector="[data-readiness-g9-qa]"'));
assert(js.includes("api.save(window.localStorage,attempt)"),"Grade9 bucket saved only after submit");
assert(js.includes('reason:"STORAGE_UNAVAILABLE"'),"graceful browser storage failure");
assert(!/captureReadiness|updateMastery/.test(js),"never auto-bridge into global Mastery");
const evidence=fs.readFileSync("docs/assets/javascripts/readiness-g9-evidence-qa-v1.js","utf8");
assert(evidence.includes('const KEY="toan-thcs-assessment-v1"'));
assert(evidence.includes('const ID="PROB23-G9-CORE-READY-V1"'));
assert(evidence.includes("attempts=[...before.attempts,attempt]"),"do not truncate history");
assert(page.includes("readiness-g9-evidence-qa-v1.js"));
assert(js.includes("NO_LIVE_RELEASE")&&js.includes("QA_ONLY_NO_LIVE_RELEASE"));
assert(page.includes("data-readiness-g9-qa"));
const hub=fs.readFileSync("docs/hoc-theo-lop/index.md","utf8");
const g9=hub.match(/<section class="class-grade-panel" data-grade-panel="9"[\s\S]*?<\/section>/)?.[0]||"";
assert(g9.includes('id="lop-9-chuong-8"'));
assert(g9.includes('href="../kien-thuc/23-xac-suat/tu-kiem-tra-lop-9-qa/"'));
for(const grade of [6,7,8]){
  const panel=hub.match(new RegExp('<section class="class-grade-panel" data-grade-panel="'+grade+'"[\\s\\S]*?<\\/section>'))?.[0]||"";
  assert(!panel.includes("tu-kiem-tra-lop-9-qa/"),"Grade9 check cannot be linked in Grade "+grade);
}
console.log("PASS CT23-G9: 10 exact reviewed IDs/keys, Grade9 independent persisted bucket, old 12-item bank unchanged; no Mastery bridge.");
