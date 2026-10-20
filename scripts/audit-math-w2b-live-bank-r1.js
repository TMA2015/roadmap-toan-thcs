#!/usr/bin/env node
"use strict";
// Read-only reproducible W2B anti-clone gate. Does not alter learner state, MCQ, Written, Readiness.
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const ROOT=path.resolve(__dirname,"..");
const DATA=path.join(ROOT,"docs/assets/data/practice");
const parse=p=>JSON.parse(fs.readFileSync(p,"utf8"));
const normalize=s=>String(s||"").toLowerCase()
 .normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/đ/g,"d")
 .replace(/\\left|\\right/g,"").replace(/\\\(/g,"(").replace(/\\\)/g,")")
 .replace(/[{}$\s,.]/g,"").replace(/[−–]/g,"-");
const files=fs.readdirSync(DATA);
const manifests=new Map();
for(const f of files){
 const m=/^(.+)-v(\d+)\.manifest\.json$/.exec(f);
 if(!m)continue;
 const prev=manifests.get(m[1]);
 if(!prev||Number(m[2])>prev.n)manifests.set(m[1],{file:f,n:Number(m[2])});
}
assert.equal(manifests.size,24,"24 manifest-backed topics (the roadmap has 25 topics)");
const questions=[],allIds=new Set(),loaded=new Set();
for(const [slug,{file}] of manifests){
 const m=parse(path.join(DATA,file));let count=0;
 for(const chunk of m.sources){
   assert(!chunk.includes("/")&&!chunk.includes(".."),"invalid manifest source");
   loaded.add(chunk);
   for(const q of parse(path.join(DATA,chunk)).questions){
     assert(q.id&&!allIds.has(q.id),"colliding active bank id "+q.id);
     questions.push({...q,bank_slug:slug,source_file:chunk});
     allIds.add(q.id);count++;
   }
 }
 assert.equal(count,m.question_count,"manifest count "+file);
}
const micro=[];
for(const file of files.filter(n=>n.endsWith("-micro-v1.json")&&!loaded.has(n))){
 for(const q of parse(path.join(DATA,file)).questions||[]){
  assert(q.id&&!allIds.has(q.id),"colliding Micro id "+q.id);
  micro.push({...q,source_file:file});allIds.add(q.id);
 }
}
const byId=new Map([...questions,...micro].map(x=>[x.id,x]));
const written=parse(path.join(ROOT,"docs/assets/data/written-exercises/written-exercise-library-v1.json")).exercises;
assert(written.length>=65,"W3A-WR canonical historical 65 must remain");
assert.deepEqual(written.slice(63,65).map(x=>x.exercise_id),["WX05-ENT-001","WX06-CH-001"],"W3A-WR exact two reviewed additions");
assert.equal(new Set(written.map(x=>x.exercise_id)).size,written.length,"canonical Written IDs unique");
const writtenById=new Map(written.map(x=>[x.exercise_id,x]));
const entries=[
 // ID, relation, grounded bank ID(s), additional Written IDs
 ["02-M3-01","EXACT_MCQ",[ "NUM02V1_049" ],["WX02-NUM-001"]],
 ["02-M4-01","EXACT_MCQ",[ "NUM02V1_058" ],[]],
 ["02-M4-03","EXACT_MCQ",[ "NUM02V1_060" ],[]],
 ["03-M2-02","EXACT_MCQ",[ "RAT03V1_068" ],[]],
 ["03-M3-02","EXACT_MCQ",[ "RAT03V1_051" ],[]],
 ["03-M3-03","EXACT_MCQ",[ "RAT03V1_111" ],[]],
 ["04-WR-08","SAME_EXPRESSION_DIFFERENT_INPUT",[ "ALG04MICRO_015" ],["WX04-ALG-002"]],
 ["04-WR-09","SAME_SKILL_DIFFERENT_EXPRESSION",[ "ALG04MICRO_002","ALG04V2_011" ],[]],
 ["04-WR-10","PARTIAL_EXPANSION_DIFFERENT_PROBLEM",[ "ALG04MICRO_012" ],[]],
 ["21-M2-08","SAME_DATA_UNIT_ISSUE",[ "STA21V1_022","STA21V1_111" ],[]],
 ["21-M3-06","SAME_TRUNCATED_AXIS_SCENARIO",[ "STA21V1_118" ],[]],
 ["21-M4-04","RELATED_SAMPLING_REPRESENTATIVENESS",[ "STA21NEW_005" ],[]]
];
const sourceSlugs={"02":"02-so-va-phep-tinh","03":"03-ti-le-ti-le-thuc","04":"04-bieu-thuc-dai-so","21":"21-thong-ke"};
assert.equal(entries.length,12);
const unique=new Set();
const checkFragments={
 "NUM02V1_049":["36","48","nhom"],
 "NUM02V1_058":["100","12","18","5"],
 "NUM02V1_060":["ba","thua","6"],
 "RAT03V1_068":["6","54","10"],
 "RAT03V1_051":["750","5","2"],
 "RAT03V1_111":["12","8","16"],
 "ALG04MICRO_015":["x^3","x^2","x=3"],
 "ALG04MICRO_002":["x^4","bac"],
 "ALG04V2_011":["x^4","bac"],
 "ALG04MICRO_012":["(x+1)(x-2)"],
 "STA21V1_022":["cm","m"],
 "STA21V1_111":["m","cm"],
 "STA21V1_118":["90","truc"],
 "STA21NEW_005":["dai","dien"]
};
for(const [source,relation,ids,writtenIds] of entries){
 assert(!unique.has(source),"duplicate W2B source "+source);unique.add(source);
 const slug=sourceSlugs[source.slice(0,2)];
 const md=fs.readFileSync(path.join(ROOT,"docs/kien-thuc",slug,"bai-tap.md"),"utf8");
 assert(new RegExp("^#{2,4}\\s+"+source+"(?:\\b| ·)","m").test(md),"legacy problem missing "+source);
 if(source==="04-WR-10"){
  const variants=questions.filter(q=>q.source_item_id===source);
  assert.equal(variants.length,1,"only one reviewed W2B formative pilot permitted");
  assert.equal(variants[0].id,"ALG04-RICH-W2B-01-V1");
 } else {
  assert(!questions.some(q=>q.source_item_id===source),"unexpected W2B import "+source);
 }
 for(const id of ids){
   const q=byId.get(id); assert(q,"stale reference "+source+" → "+id);
   const qStem=normalize(q.question);
   for(const fragment of checkFragments[id]||[])
     assert(qStem.includes(normalize(fragment)),"bank fingerprint drift "+source+" → "+id+"; "+fragment);
 }
 for(const id of writtenIds)assert(writtenById.has(id),"written item missing "+id);
 console.log("W2B",source,relation,ids.join(","),"Written="+(writtenIds.join(",")||"-"));
}
assert((writtenById.get("WX04-ALG-002").source_refs||[]).some(x=>x.includes("04-WR-08")),
 "original division/evaluation exercise must stay linked to existing canonical Written");
assert(!questions.some(q=>q.source_item_id==="21-M2-08"||q.source_item_id==="21-M3-06"||q.source_item_id==="21-M4-04"),
 "reviewed explanatory items must stay separate from objective-only Practice");
console.log("PASS W2B: 12 reviewed source IDs; six exact existing MCQs; 04-WR-08 partially covered; 04-WR-09/10 still have distinct original expressions; 3 full Written tasks preserved.");
console.log("PASS scan:",manifests.size,"active manifests,",questions.length,"Practice,",micro.length,"additional Micro,",written.length,"canonical Written items.");
