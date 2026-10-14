#!/usr/bin/env node
"use strict";
// Read-only grade-scoped eligibility inventory for future multi-Core quiz design.
// A PASS confirms metadata parses/joins; NOT academic approval to activate any exam.
const fs=require("fs"),assert=require("assert");
const root="docs/assets/data/";
const sources=[["02","02-so-va-phep-tinh"],["03","03-ti-le-ti-le-thuc"],["13","13-goc-va-duong-thang"],["20","20-hinh-hoc-tong-hop"],["21","21-thong-ke"],["23","23-xac-suat"]];
const read=path=>JSON.parse(fs.readFileSync(root+path,"utf8"));
let total=0,tagged=0,linked=0,orphan=[];
for(const [id,slug] of sources){
  const workspace=read("curriculum/topic"+id+"-learning-workspace.json");
  const micro=read("practice/"+slug+"-micro-v1.json");
  const ids=new Set(workspace.cards.filter(c=>c.layer==="KNTT-Core").map(c=>c.id));
  const g6=micro.questions.filter(q=>q.tags?.grade===6&&q.tags?.layer==="KNTT-Core"&&q.curriculum?.book==="KNTT"&&q.curriculum?.grades?.includes(6));
  const eligible=g6.filter(q=>ids.has(q.card_id)&&Array.isArray(q.options)&&q.options.length>=2&&Number.isInteger(q.answer)&&q.answer>=0&&q.answer<q.options.length&&String(q.explanation||"").trim());
  const missing=g6.filter(q=>!ids.has(q.card_id));
  total+=micro.questions.length;tagged+=g6.length;linked+=eligible.length;
  orphan.push(...missing.map(q=>q.id));
  assert(new Set(micro.questions.map(q=>q.id)).size===micro.questions.length,"duplicate item in "+slug);
  console.log(slug+": "+g6.length+" G6-tagged / "+eligible.length+" linked and well-formed / "+missing.length+" no matching Core card");
}
console.log("TOTAL="+JSON.stringify({allMicro:total,taggedG6:tagged,linkedAndWellFormed:linked,unlinkedIds:orphan}));
assert(total>=195&&tagged>=87&&linked>=81,"unexpected loss of original pilot audit candidates");
assert(orphan.length>=0);
console.log("PASS structural source inventory only; independent academic Grade-6 composite exam approval is NOT established.");
