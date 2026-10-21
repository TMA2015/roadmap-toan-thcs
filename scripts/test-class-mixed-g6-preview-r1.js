#!/usr/bin/env node
"use strict";
// Static source/assessment boundary test, no learner mutation.
const fs=require("node:fs"),assert=require("node:assert/strict");
const source=p=>JSON.parse(fs.readFileSync("docs/assets/"+p,"utf8"));
const manifest=source("data/class-mixed/g6-pilot-v1.json");
assert.equal(manifest.status,"LIVE_FORMATIVE_RELEASE");
assert.equal(manifest.release_authority,"OWNER_CONDITIONAL_APPROVAL_20261021_SUBJECT_TO_ALL_REQUIRED_QA");
assert.equal(manifest.grade,6);
assert.equal(manifest.assessment_role,"formative_self_practice_not_readiness_or_mastery");
assert.equal(manifest.topic_sources.length,6);
assert.equal(manifest.max_items,10);
const ids=new Set(),stems=new Set(),originalKeys=[];
const expectedTopicQuotas={"02-so-va-phep-tinh":4,"03-ti-le-ti-le-thuc":1,"13-goc-va-duong-thang":1,"20-hinh-hoc-tong-hop":1,"21-thong-ke":1,"23-xac-suat":2};
const exactReviewedIds=[
"NUM02MICRO_004","RAT03MICRO_001","GEO20MICRO_003","PRO23MICRO_001",
"NUM02MICRO_015","GEO13MICRO_019","STA21MICRO_001","PRO23MICRO_002",
"NUM02MICRO_006","NUM02MICRO_032"
];
assert.equal(manifest.version,"1.3.0");
assert.equal(manifest.source_review,"MATH-G6-MIXED-L3-5SOURCE-RECHECK-R1-20261021");
assert.equal(manifest.cognitive_review_status,"NOTEBOOKLM_L3_5SOURCE_RECHECK_PASS__QA_ONLY_NO_LIVE_RELEASE");
assert.equal(manifest.cognitive_levels.NUM02MICRO_032,"L3");
assert(!Object.hasOwn(manifest.cognitive_levels,"STA21MICRO_013"),"correct L2 CĐ21 item cannot be mislabeled L3 in ten-item candidate");
const cognitive=Object.values(manifest.cognitive_levels).reduce((acc,level)=>(acc[level]=(acc[level]||0)+1,acc),{});
assert.deepEqual(cognitive,{L1:4,L2:4,L3:2});
assert.deepEqual(new Set(manifest.topic_sources.flatMap(t=>t.ids)),new Set(exactReviewedIds));
assert.equal(manifest.selection_groups.length,8,"eight Core/lesson selections");
const selectedIds=manifest.selection_groups.flatMap(g=>g.ids);
assert.equal(selectedIds.length,10);
assert.deepEqual(new Set(selectedIds),new Set(exactReviewedIds),"group selection must partition original ten reviewed questions");
assert.equal(new Set(manifest.selection_groups.map(g=>g.group_id)).size,8);
assert.equal(manifest.selection_groups.filter(g=>g.topic==="02-so-va-phep-tinh").length,3,
 "CT02 divisibility B8–12, inverse fraction B27, decimals B28–31 must be selectable independently");
const fractionGroup=manifest.selection_groups.find(g=>g.group_id==="g6-fractions-b27");
assert(fractionGroup && fractionGroup.card_id==="num02-g6-core-4" && fractionGroup.lesson_scope==="Bài 27" &&
  fractionGroup.ids.length===1 && fractionGroup.ids[0]==="NUM02MICRO_032","Bài 27 must be its own learner-selectable Core lesson");
assert(!selectedIds.includes("STA21MICRO_013"),"old Grade6 statistics item remains in canonical bank, not this QA set");
assert.deepEqual(new Set(manifest.selection_groups.map(g=>g.topic)),
  new Set(manifest.topic_sources.map(t=>t.slug)),"all six topic families remain");
for(const g of manifest.selection_groups){
  assert(g.label&&g.lesson_scope&&g.card_id&&g.group_id);
  const topic=manifest.topic_sources.find(t=>t.slug===g.topic);
  assert(topic,"group topic must exist");
  assert(g.ids.every(id=>topic.ids.includes(id)),"selection group cannot insert an unreviewed question");
  const micro=source("data/practice/"+g.topic+"-micro-v1.json");
  const workspace=source("data/curriculum/topic"+g.topic.slice(0,2)+"-learning-workspace.json");
  const card=workspace.cards.find(c=>c.id===g.card_id);
  assert(card&&card.layer==="KNTT-Core","group must refer to Core card "+g.group_id);
  for(const id of g.ids){
    const q=micro.questions.find(q=>q.id===id);
    assert(q&&q.card_id===g.card_id,"selected question must stay within reviewed card's lesson "+id);
    assert.equal(q.tags.grade,6);
    assert(q.curriculum.grades.includes(6));
  }
}
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
   if(id==="NUM02MICRO_032"){
     assert.equal(q.card_id,"num02-g6-core-4");
     assert.equal(q.curriculum.lesson,"Bài 27");
     assert.equal(q.answer,0,"approved canonical Grade6 fraction item key must not change");
     assert.deepEqual(q.options,["24 cây","13,5 cây","21 cây","72 cây"]);
     assert(q.question.includes("18 cây")&&q.question.includes("3/4"),"approved original problem context retained");
   }
 }
}
assert.equal(ids.size,10);
assert.equal(originalKeys.length,10,"all original source keys were read unchanged");
const page=fs.readFileSync("docs/hoc-theo-lop/on-tap-tong-hop-lop-6.md","utf8");
const js=fs.readFileSync("docs/assets/javascripts/class-mixed-g6-pilot-v1.js","utf8");
assert(page.includes("data-class-mixed-g6-qa"));
const hub=fs.readFileSync("docs/hoc-theo-lop/index.md","utf8");
const g6=hub.match(/<section class="class-grade-panel" data-grade-panel="6"[\s\S]*?<\/section>/)?.[0]||"";
const g9=hub.match(/<section class="class-grade-panel" data-grade-panel="9"[\s\S]*?<\/section>/)?.[0]||"";
assert(g6.includes('href="on-tap-tong-hop-lop-6/"'),"grade6 entry must stay inside grade6 panel");
assert(!g9.includes("on-tap-tong-hop-lop-6/"),"grade6 composite must not appear in grade9 panel");
assert(page.includes("class-mixed-g6-pilot-v1.js"));
assert(js.includes('const KEY = "toan-thcs-class-mixed-quiz-v1"'));
assert(!js.includes("toan-thcs-practice-v1"),"no shared practice-history writes");
assert(!js.includes("toan-thcs-assessment-v1"),"no shared Readiness-history writes");
assert(js.includes('root.dataset.initialized = "1"'),"guard repeat initialization");
assert(js.includes("state.submitted=true"),"answer reveal only after final submit");
assert(js.includes("LIVE_FORMATIVE_RELEASE"),"player must require exact formative release status");
assert(!page.includes("bản kiểm thử")&&!page.includes("chưa phát hành"),"live page must not be labeled as QA-only");
assert(!g6.includes("(bản kiểm thử)"),"Grade6 live hub label must be clear");
assert(js.includes("typesetMath()")&&js.includes("typesetClear"),"dynamically inserted math must be rendered");
console.log("PASS G6 mixed preview: exactly 10 reviewed Core/Grade6 items, isolated history, source keys untouched.");
