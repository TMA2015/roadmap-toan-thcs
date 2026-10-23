#!/usr/bin/env node
"use strict";
// Strict Grade9 independent Readiness candidate. No data mutation or auto-Mastery.
const fs=require("node:fs"),assert=require("node:assert/strict");
const bank=JSON.parse(fs.readFileSync("docs/assets/data/assessment/23-xac-suat-g9-core-v1.json","utf8"));
const prior=JSON.parse(fs.readFileSync("docs/assets/data/assessment/23-xac-suat-core-v1.json","utf8"));
assert.equal(bank.schema,"roadmap-readiness-assessment-v1");
assert.equal(bank.release_status,"GRADE9_RELEASE_CANDIDATE_DRAFT");
assert.equal(bank.release_decision,"OWNER_APPROVAL_PENDING__DO_NOT_MERGE");
assert.equal(bank.academic_review.verdict,"PASS");
assert.equal(bank.academic_review.authorization,"NO_LIVE_RELEASE");
assert.equal(bank.academic_review.packet_id,"MATH-CT23-G9-NEW-READINESS-TEN-ITEM-AUTHORING-R0-20261021");
assert.equal(bank.assessment_id,"PROB23-G9-CORE-READY-V1");
assert.deepEqual(bank.grade_scope,[9]);assert.equal(bank.items.length,10);
const ids=Array.from({length:10},(_,i)=>"PRO23G9READY_"+String(i+1).padStart(3,"0"));
assert.deepEqual(bank.items.map(q=>q.id),ids);
assert.deepEqual(bank.items.map(q=>q.answer),[2,1,2,2,0,2,1,2,1,1]);
assert.deepEqual(bank.items.reduce((a,q)=>(a[q.cognitive_level]=(a[q.cognitive_level]||0)+1,a),{}),{L1:2,L2:5,L3:3});
const cards={"prob23-core-g9-6":0,"prob23-core-g9-7":0};
for(const q of bank.items){
  assert.equal(q.type,"mcq");assert.equal(q.points,1);assert(q.card_id in cards);cards[q.card_id]++;
  assert.equal(q.curriculum.book,"KNTT");assert.deepEqual(q.curriculum.grades,[9]);
  assert.equal(q.curriculum.level,"core");assert.equal(q.options.length,4);
  assert(new Set(q.options).size===4&&q.question&&q.explanation);
  assert(/^PRO23MICRO_02[1-8]$/.test(q.source_micro_id));
}
assert.deepEqual(cards,{"prob23-core-g9-6":5,"prob23-core-g9-7":5});
assert.equal(prior.assessment_id,"PROB23-CORE-READY-V1");
assert.equal(prior.items.length,12);
assert.deepEqual(prior.items.map(q=>q.id),Array.from({length:12},(_,i)=>"PRO23READY_"+String(i+1).padStart(3,"0")));
assert.deepEqual(prior.items.map(q=>q.answer),[0,2,1,0,2,1,3,1,2,0,2,3]);
assert.equal(bank.policy.feedback,"after_submit");assert.equal(bank.policy.hints,false);
assert.equal(bank.policy.tutor,false);assert.equal(bank.policy.hard_gate,false);
const js=fs.readFileSync("docs/assets/javascripts/readiness-g9-v1.js","utf8");
const evidence=fs.readFileSync("docs/assets/javascripts/readiness-g9-evidence-v1.js","utf8");
const page=fs.readFileSync("docs/kien-thuc/23-xac-suat/tu-kiem-tra-lop-9.md","utf8");
assert(js.includes('const selector="[data-readiness-g9]"'));
assert(js.includes('role:"independent_grade9_readiness"'));
assert(js.includes('api.save(window.localStorage,attempt)'));
assert(!/captureReadiness|updateMastery/.test(js));
assert(evidence.includes('const ID="PROB23-G9-CORE-READY-V1"'));
assert(evidence.includes('const ROLE="independent_grade9_readiness"'));
assert(evidence.includes("attempts=[...before.attempts,attempt]"));
assert(page.includes("readiness-g9-evidence-v1.js")&&page.includes('data-readiness-g9'));
const hub=fs.readFileSync("docs/hoc-theo-lop/index.md","utf8");
const g9=hub.match(/<section class="class-grade-panel" data-grade-panel="9"[\s\S]*?<\/section>/)?.[0]||"";
assert(g9.includes('id="lop-9-chuong-8"')&&g9.includes('href="../kien-thuc/23-xac-suat/tu-kiem-tra-lop-9/"'));
for(const grade of [6,7,8]){
 const panel=hub.match(new RegExp('<section class="class-grade-panel" data-grade-panel="'+grade+'"[\\s\\S]*?<\\/section>'))?.[0]||"";
 assert(!panel.includes("tu-kiem-tra-lop-9/"));
}
assert(hub.includes('href="on-tap-tong-hop-lop-6/"'),"merged Grade6 route must be kept");
console.log("PASS W8 Grade9: 10/10 academic-locked independent Readiness, separate grade scope, original 12-item CT23 untouched.");
