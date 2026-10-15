#!/usr/bin/env node
"use strict";
// Read-only W2A live-bank anti-duplication gate. Never regrades or mutates learner data.
const fs=require("node:fs"),path=require("node:path"),assert=require("node:assert/strict");
const ROOT=path.resolve(__dirname,"..");
const DATA=path.join(ROOT,"docs/assets/data/practice");
const json=p=>JSON.parse(fs.readFileSync(p,"utf8"));
const all=fs.readdirSync(DATA);
const latest=new Map();
for(const name of all){
 const match=/^(.+)-v(\d+)\.manifest\.json$/.exec(name);
 if(!match)continue;
 const old=latest.get(match[1]);
 if(!old||Number(match[2])>old.v)latest.set(match[1],{v:Number(match[2]),file:name});
}
assert.equal(latest.size,25,"expected 25 active topical Practice banks");
const items=[],ids=new Set(),loaded=new Set();
for(const [slug,{file}] of latest){
 const manifest=json(path.join(DATA,file));
 let count=0;
 for(const source of manifest.sources){
  assert(!source.includes("/")&&!source.includes(".."),"bad source path");
  const name=path.join(DATA,source);
  assert(fs.existsSync(name),name);
  loaded.add(source);
  for(const q of json(name).questions){
   assert(typeof q.id==="string"&&!ids.has(q.id),"missing or colliding item_id "+q.id);
   ids.add(q.id);
   items.push({...q,bank:slug,source_file:source});
   count++;
  }
 }
 assert.equal(count,manifest.question_count,"manifest-count mismatch "+file);
}
const micro=[];
for(const name of all.filter(x=>x.endsWith("-micro-v1.json"))){
 if(loaded.has(name))continue;
 for(const q of (json(path.join(DATA,name)).questions||[])){
  assert(!ids.has(q.id),"micro duplicate ID "+q.id);
  ids.add(q.id);
  micro.push({...q,source_file:name});
 }
}
const written=json(path.join(ROOT,"docs/assets/data/written-exercises/written-exercise-library-v1.json")).exercises;
assert.equal(written.length,63,"unexpected Written canonical library size");
const byId=new Map([...items,...micro].map(q=>[q.id,q]));
const byWritten=new Map(written.map(q=>[q.exercise_id,q]));
const evidence=[
 ["02-M2-02","SPLIT_COMPOSITE_SAME_NUMBERS",["NUM02V1_047","NUM02V1_055"],[]],
 ["02-M3-02","EXACT_SAME_TASK_DIFFERENT_MODE",["NUM02V1_109"],[]],
 ["02-M4-02","EXACT_SAME_TASK_DIFFERENT_MODE",["NUM02V1_099"],[]],
 ["03-M2-03","EXACT_TASK_AND_CANONICAL_WRITTEN",["RAT03V1_076"],["WX03-RAT-002"]],
 ["03-M4-02","EXACT_SAME_TASK_DIFFERENT_MODE",["RAT03V1_108"],[]],
 ["03-M4-03","SAME_SCENARIO_PROOF_DEEPER",["NUM02V1_100"],[]],
 ["04-WR-06","SAME_FAMILY_DIFFERENT_EXPRESSIONS",["ALG04V2_071"],["WX04-ALG-003"]],
 ["04-WR-07","SAME_EXPRESSION_DOMAIN_GUARD",["ALG04V2_123"],[]],
 ["04-ENT-01","PARTIAL_PERIMETER_COVERED",["ALG04V2_111"],[]],
 ["21-M2-07","SAME_SAMPLE_SCENARIO_WRITTEN_DEEPER",["STA21V1_031"],[]],
 ["21-M3-08","SAME_50_48_SCENARIO_WRITTEN_DEEPER",["STA21V1_021"],[]],
 ["21-M4-05","COMPOSITE_REASONING_REUSES_DATA_QUALITY",["STA21V1_021","STA21V1_022"],[]]
];
assert.equal(evidence.length,12);
const sourceSlugs={"02":"02-so-va-phep-tinh","03":"03-ti-le-ti-le-thuc","04":"04-bieu-thuc-dai-so","21":"21-thong-ke"};
const canonical=s=>String(s||"").toLowerCase().replace(/\\left|\\right/g,"").replace(/\\\(/g,"(").replace(/\\\)/g,")").replace(/[\s{}$]/g,"").replaceAll("−","-");
for(const [id,category,refs,wrefs] of evidence){
 const slug=sourceSlugs[id.slice(0,2)];
 const md=fs.readFileSync(path.join(ROOT,"docs/kien-thuc",slug,"bai-tap.md"),"utf8");
 assert(md.includes(id),"missing original source "+id);
 assert(!items.some(q=>q.source_item_id===id),
        "unapproved W2A rich import discovered for "+id);
 for(const ref of refs)assert(byId.has(ref),"missing confirmed bank reference "+ref);
 for(const ref of wrefs)assert(byWritten.has(ref),"missing canonical written ID "+ref);
 console.log("W2A",id,category,"Practice:",refs.join(","),"Written:",wrefs.join(",")||"-");
}
const checks=[
 ["02-M2-02","NUM02V1_047","84","126"],
 ["02-M2-02","NUM02V1_055","84","126"],
 ["02-M3-02","NUM02V1_109","\\frac35","\\frac14"],
 ["02-M4-02","NUM02V1_099","15%","10%"],
 ["03-M2-03","RAT03V1_076","4 người","15 ngày"],
 ["03-M4-02","RAT03V1_108","180","30"],
 ["03-M4-03","NUM02V1_100","20%","20%"],
 ["04-WR-07","ALG04V2_123","12x^3y","3xy"],
 ["04-ENT-01","ALG04V2_111","2x+3","x-1"],
 ["21-M2-07","STA21V1_031","câu lạc bộ đọc sách","khảo sát"],
 ["21-M3-08","STA21V1_021","50","48"],
 ["21-M4-05","STA21V1_022","cm","m"]
];
for(const [sid,ref,a,b] of checks){
 const s=canonical(byId.get(ref).question);
 assert(s.includes(canonical(a))&&s.includes(canonical(b)),
        "evidence stem drift "+sid+" → "+ref);
}
// An exact algebra clone of W2A 04-WR-06 would invalidate its distinctness.
const exactExpression="(2x+1)(x-3)";
const clones=[...items,...micro].filter(q=>canonical(q.question).includes(exactExpression));
assert.equal(clones.length,0,
 "04-WR-06 exact task already appears in live bank: "+clones.map(x=>x.id));
const existingWritten=byWritten.get("WX03-RAT-002");
assert(existingWritten.problem_markdown.includes("15")&&existingWritten.problem_markdown.includes("6")&&
       (existingWritten.source_refs||[]).some(x=>x.includes("03-M2-03")),
       "03-M2-03 canonical written lineage unverified");
const divide=byId.get("ALG04V2_123");
assert(divide.question.includes("ne 0"),"04-WR-07 domain-protecting published variant changed");
console.log("PASS W2A bank audit:",latest.size,"latest topical banks,",items.length,
 "Practice items,",micro.length,"Micro items,",written.length,"canonical Written items");
console.log("PASS: 12 source IDs reconciled, no W2A rich import, exact W2A polynomial expression not already live.");
