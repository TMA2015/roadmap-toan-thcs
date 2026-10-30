#!/usr/bin/env node
"use strict";
/* DELTA_A_UI: Guard interactive public Core/Practice from becoming Readiness/Mastery.
 * Uses the existing canonical public banks; no held-out item data is loaded.
 */
const assert=require("node:assert/strict");
const fs=require("node:fs"),path=require("node:path"),vm=require("node:vm");
const root=path.resolve(__dirname,"..");
const read=p=>fs.readFileSync(path.join(root,p),"utf8");
const script=read("docs/assets/javascripts/thpt-r4-preview.js");
new vm.Script(script,{filename:"thpt-r4-preview.js"});
const from=script.indexOf("const showReviewed=(items,requestedItem)=>{");
const end=script.indexOf("// Cumulative exercises remain",from);
assert(from>=0&&end>from,"Canonical public quiz renderer missing");
const renderer=script.slice(from,end);
for(const token of [
 "const responses=new Map()","const canAutoCheck=Array.isArray(item.options)",
 "response.value===item.answerKey","radio.type=\"radio\"",
 "const textarea=document.createElement(\"textarea\")",
 "answerForm.addEventListener(\"submit\"",
 "if(!canAutoCheck)solution.open=true",
 "answerForm","feedback.setAttribute(\"role\",\"status\")"
])assert(renderer.includes(token),"Interactive formative element missing: "+token);
// Scan executable code, not textual comments such as "no localStorage".
const executable=renderer.replace(/\/\*[^]*?\*\//g,"").replace(/\/\/[^\n]*/g,"");
assert(!/\b(localStorage|sessionStorage|SkillMastery|masteryCredit)\b/.test(executable),
 "Formative renderer must not access storage or Mastery");
assert(!/\b(score|masteryScore|earnedPoints)\s*=|\.(setItem|recordScore|updateMastery)\s*\(/.test(executable),
 "Formative renderer must not write scores, points or Mastery");
assert(renderer.includes("void window.THPTFormativeExposure?.record"),
 "Preserve existing QUESTION_SHOWN exposure behavior");

const bankPaths=[
 "thpt-chi-reviewed-formative-v1.js",
 "thpt-chii-reviewed-formative-v1.js",
 "thpt-chiii-reviewed-formative-v1.js",
 "thpt-chiv-b07-b08-reviewed-formative-v1.js",
 "thpt-chiv-b09-b11-reviewed-formative-v1.js",
 "thpt-chvi-reviewed-formative-v1.js",
 "thpt-chvii-reviewed-formative-v1.js",
 "thpt-chviii-reviewed-formative-v1.js",
 "thpt-chix-reviewed-formative-v1.js"
];
const ids=new Set();
let count=0,auto=0,typed=0;
for(const file of bankPaths){
 const context={window:{}};vm.createContext(context);
 vm.runInContext(read("docs/assets/javascripts/"+file),context,{filename:file,timeout:1000});
 const bank=Object.values(context.window).find(x=>x&&typeof x.forLesson==="function");
 assert(bank,"Public canonical bank missing for "+file);
 assert.equal(bank.validate().valid,true,"Existing canonical bank invalid: "+file);
 const items=bank.records||bank.items;
 assert(items&&items.length>0,"Public canonical bank empty: "+file);
 for(const item of items){
  assert(!ids.has(item.item_id),"Duplicate canonical item across G10 banks: "+item.item_id);
  ids.add(item.item_id);count++;
  assert(item.stem&&item.solution,"Missing reviewed formative question/solution");
  assert(!/RD1-|READINESS/.test(item.item_id),"Protected item cannot enter public quiz");
  const keyed=Array.isArray(item.options)&&item.options.length===4&&/^[ABCD]$/.test(item.answerKey||"");
  if(keyed)auto++;else typed++;
 }
}
assert(auto>0&&typed>0,"Both reviewed MCQ and typed comparison modes required");
console.log("PASS G10 interactive public formative renderer: "+count+
 " original canonical items, "+auto+" key-checked MCQ, "+typed+
 " typed response comparison; NO_SCORE/NO_MASTERY.");
