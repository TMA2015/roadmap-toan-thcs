#!/usr/bin/env node
"use strict";
// Read-only Grade-6 composite CORE pilot, not a live learner feature or approved exam.
// Every source ID/answer is inherited intact. No learner evidence or publication.
const fs=require("node:fs"),assert=require("node:assert/strict");
const root="docs/assets/data/";
const topics=[
 ["02","02-so-va-phep-tinh",3],
 ["03","03-ti-le-ti-le-thuc",1],
 ["13","13-goc-va-duong-thang",2],
 ["20","20-hinh-hoc-tong-hop",1],
 ["21","21-thong-ke",2],
 ["23","23-xac-suat",1]
];
const read=path=>JSON.parse(fs.readFileSync(root+path,"utf8"));
const normalized=text=>String(text||"").toLowerCase().replace(/\s+/g," ").trim();
const rows=[],pool=[];
for(const [ct,slug,quota] of topics){
  const cards=read("curriculum/topic"+ct+"-learning-workspace.json").cards.filter(c=>c.layer==="KNTT-Core");
  const ids=new Set(cards.map(c=>c.id));
  const micro=read("practice/"+slug+"-micro-v1.json").questions;
  const tagged=micro.filter(q=>q.tags?.grade===6&&q.tags?.layer==="KNTT-Core"
    &&q.curriculum?.book==="KNTT"&&q.curriculum?.grades?.includes(6));
  const eligible=tagged.filter(q=>ids.has(q.card_id)
    &&Array.isArray(q.options)&&q.options.length>=2&&Number.isInteger(q.answer)
    &&q.answer>=0&&q.answer<q.options.length&&String(q.explanation||"").trim());
  const excluded=tagged.filter(q=>!eligible.includes(q)).map(q=>q.id);
  assert(eligible.length>=quota,ct+": insufficient eligible Grade-6 items");
  rows.push({ct,slug,tagged:tagged.length,linked:eligible.length,excluded,quota});
  pool.push({ct,quota,items:eligible});
}
assert.equal(rows.reduce((sum,x)=>sum+x.tagged,0),87);
assert.equal(rows.reduce((sum,x)=>sum+x.linked,0),81);
assert.equal(rows.reduce((sum,x)=>sum+x.quota,0),10);
const ids=new Set(),stems=new Set(),groups=new Set(),chosen=[];
for(const {ct,quota,items} of pool){
  let added=0;
  for(const q of items){
    if(added>=quota)break;
    if(ids.has(q.id)||stems.has(normalized(q.question))||q.variant_group&&groups.has(q.variant_group))continue;
    ids.add(q.id);stems.add(normalized(q.question));
    if(q.variant_group)groups.add(q.variant_group);
    chosen.push({ct,id:q.id,card:q.card_id,skill:q.tags.skill[0],question:q.question});
    added++;
  }
  assert.equal(added,quota,ct+": not enough distinct draft candidates");
}
assert.equal(chosen.length,10);
assert.equal(new Set(chosen.map(x=>x.ct)).size,6);
console.log(JSON.stringify({stage:"SOURCE_AUDIT_ONLY_NO_LEARNER_QUIZ",topicCounts:rows,pilotCandidateIds:chosen},null,2));
console.log("PASS: Grade-6 10-item pool is structurally scoped to KNTT-Core card-linked Micro. Academic composition NOT YET APPROVED.");
