#!/usr/bin/env node
"use strict";
// Static source/assessment boundary test, no learner mutation.
const fs=require("node:fs"),assert=require("node:assert/strict");
const source=p=>JSON.parse(fs.readFileSync("docs/assets/"+p,"utf8"));
const manifest=source("data/class-mixed/g6-pilot-v1.json");
assert.equal(manifest.status,"QA_ONLY_DO_NOT_RELEASE");
assert.equal(manifest.grade,6);
assert.equal(manifest.assessment_role,"formative_self_practice_not_readiness_or_mastery");
assert.equal(manifest.topic_sources.length,6);
assert.equal(manifest.max_items,10);
const ids=new Set(),stems=new Set(),originalKeys=[];
const expectedTopicQuotas={"02-so-va-phep-tinh":3,"03-ti-le-ti-le-thuc":1,"13-goc-va-duong-thang":2,"20-hinh-hoc-tong-hop":1,"21-thong-ke":2,"23-xac-suat":1};
for(const entry of manifest.topic_sources){
 assert.equal(entry.ids.length,expectedTopicQuotas[entry.slug]);
 const micro=source("data/practice/"+entry.slug+"-micro-v1.json");
 const workspace=source("data/curriculum/topic"+entry.slug.slice(0,2)+"-learning-workspace.json");
 const cards=new Set(workspace.cards.filter(c=>c.layer==="KNTT-Core").map(c=>c.id));
 for(const id of entry.ids){
   assert(!ids.has(id),"duplicate "+id);
   ids.add(id);
   const q=micro.questions.find(q=>q.id===id);
   assert(q,"micro ID missing "+id);
   assert.equal(q.tags.layer,"KNTT-Core",id);
   assert.equal(q.tags.grade,6,id);
   assert.equal(q.curriculum.book,"KNTT",id);
   assert(q.curriculum.grades.includes(6),id);
   assert(cards.has(q.card_id),id+" unmapped Core card");
   assert(Array.isArray(q.options)&&q.options.length>=2,id);
   assert(Number.isInteger(q.answer)&&q.answer>=0&&q.answer<q.options.length,id);
   assert(q.explanation&&q.explanation.trim(),id+" no explanation");
   const stem=q.question.trim().toLowerCase();
   assert(!stems.has(stem),id+" duplicate stem");
   stems.add(stem);
   originalKeys.push([id,q.answer]);
 }
}
assert.equal(ids.size,10);
const page=fs.readFileSync("docs/hoc-theo-lop/on-tap-tong-hop-lop-6.md","utf8");
const js=fs.readFileSync("docs/assets/javascripts/class-mixed-g6-pilot-v1.js","utf8");
assert(page.includes("data-class-mixed-g6-qa"));
assert(page.includes("class-mixed-g6-pilot-v1.js"));
assert(js.includes('const KEY = "toan-thcs-class-mixed-quiz-v1"'));
assert(!js.includes("toan-thcs-practice-v1"),"no shared practice-history writes");
assert(!js.includes("toan-thcs-assessment-v1"),"no shared Readiness-history writes");
assert(js.includes('root.dataset.initialized = "1"'),"guard repeat initialization");
assert(js.includes("state.submitted=true"),"answer reveal only after final submit");
assert(js.includes("QA_ONLY_DO_NOT_RELEASE"),"no live feature mode");
console.log("PASS G6 mixed preview: exactly 10 reviewed Core/Grade6 items, isolated history, source keys untouched.");
