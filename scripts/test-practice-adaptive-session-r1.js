#!/usr/bin/env node
"use strict";
// Unit-style QA of selector actually embedded in the learner Practice Engine.
// No browser, network, actual learner history writes or live deployment.
const assert=require("node:assert/strict");
const fs=require("node:fs"),vm=require("node:vm");
const source=fs.readFileSync("docs/assets/javascripts/practice-engine-v2.js","utf8");
const marker="  class PracticeEngineV2 {";
assert.equal(source.split(marker).length,2,"Selector injection location shifted");
const storage=new Map();
const sandbox={
 window:{},
 document:{readyState:"loading",addEventListener:()=>{}},
 sessionStorage:{getItem:key=>storage.get(key)||null,setItem:(key,value)=>storage.set(key,value)},
 localStorage:{getItem:()=>null,setItem:()=>{throw Error("selector must not mutate learner evidence")}},
 Math,JSON,Set,Map,URL,Date,console
};
vm.runInNewContext(source.replace(marker,
 "  window.__selectorQA = {buildAdaptiveSelection,loadRecentSets,saveRecentSets};\n"+marker),sandbox,{timeout:1500});
const {buildAdaptiveSelection,loadRecentSets,saveRecentSets}=sandbox.window.__selectorQA;
const q=Array.from({length:60},(_,i)=>({id:"Q"+i,tags:{skill:["s"+i%6]},variant_group:"variant-"+i}));
const bank={bank_id:"SYN-A",skill_labels:Object.fromEntries(Array.from({length:6},(_,i)=>["s"+i,"Skill"+i])),
 skill_groups:[{id:"g1",skills:["s0","s1"]},{id:"g2",skills:["s2","s3"]},{id:"g3",skills:["s4","s5"]}]};
const stats={questions:{},tags:{}};
for(let i=0;i<30;i++)stats.questions["Q"+i]={attempted:4,correct:i%6===0?0:4};
for(let i=0;i<6;i++)stats.tags["s"+i]={attempted:20,correct:i===0?5:20};
const serial=JSON.stringify(stats);
const recent=[Array.from({length:10},(_,i)=>"Q"+i),Array.from({length:10},(_,i)=>"Q"+(i+10))];
const adaptive=buildAdaptiveSelection(q,stats,bank,10,recent);
assert.equal(adaptive.length,10);
assert.equal(new Set(adaptive.map(x=>x.id)).size,10,"no repeated IDs within set");
assert(adaptive.filter(x=>!stats.questions[x.id]?.attempted).length>=3,"exposure to >=3 never-answered questions");
assert(adaptive.filter(x=>(stats.questions[x.id]?.attempted>stats.questions[x.id]?.correct) || x.tags.skill.includes("s0")).length>=3,"weak questions get priority");
assert(adaptive.every(x=>!recent.flat().includes(x.id)),"avoid two most recent sets where sufficient choices exist");
assert(new Set(adaptive.map(x=>x.tags.skill[0])).size>=2,"avoid all-ten same skill");
assert.equal(JSON.stringify(stats),serial,"no student history mutation");
saveRecentSets(bank,[...recent,adaptive.map(x=>x.id)]);
assert.deepEqual(Array.from(loadRecentSets(bank),set=>Array.from(set)),[recent[1],Array.from(adaptive,x=>x.id)]);
const next=buildAdaptiveSelection(q,stats,bank,10,loadRecentSets(bank));
assert(next.every(x=>!adaptive.some(y=>y.id===x.id)),"avoid immediate repeated practice set");
const unseen=q.filter(x=>!stats.questions[x.id]?.attempted);
const freshSet=buildAdaptiveSelection(unseen,stats,bank,10,recent);
assert.equal(freshSet.length,10);
assert(freshSet.every(x=>!stats.questions[x.id]?.attempted),"new-set button means never answered");
const small=buildAdaptiveSelection(unseen.slice(0,3),stats,bank,10,[]);
assert.equal(small.length,3,"do not silently fill fewer than ten with already answered questions");
assert.equal(buildAdaptiveSelection([],stats,bank,10,[]).length,0,"explicitly exhausted fresh pool");
assert(source.includes("startNewOnlySession()"),"dedicated user-requested new-only action");
assert(source.includes("this.startNewOnlySession()"),"new button must call new-only selection");
assert(source.includes("this.startNormalSession()"),"default adaptive flow remains available");
console.log("PASS practice selection: adaptive weak+fresh, separate unseen-only, anti-repeat, diverse skills, immutable learner evidence.");
