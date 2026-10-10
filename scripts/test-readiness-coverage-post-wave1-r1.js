#!/usr/bin/env node
"use strict";
const fs=require("node:fs");
const assert=require("node:assert/strict");
const read=p=>JSON.parse(fs.readFileSync(p,"utf8"));

const artifact=read("docs/assets/data/curriculum/readiness-coverage-post-wave1-r1.json");
const decision=read("docs/assets/data/curriculum/readiness-coverage-priority-r1.json");
const impl=read("docs/assets/data/curriculum/readiness-implementation-wave1-r1.json");
const reg=read("docs/assets/data/curriculum/skill-taxonomy-v2-registry-r1.json");

assert.equal(artifact.audit_id,"MATH-READINESS-COVERAGE-POST-WAVE1-R1-20261010");
assert.equal(artifact.status,"RECONCILED_NO_FURTHER_R1_AUTHORING_AUTHORIZED");
assert.equal(decision.clearance,"READINESS_COVERAGE_PRIORITY_R1_REVIEW_COMPLETE");
assert.equal(impl.clearance,"READINESS_IMPLEMENTATION_W1_R1_CONTENT_REVIEW_COMPLETE");
assert.equal(impl.independent_review?.verdict,"PASS");

const mapByLegacy=new Map();
for(const m of reg.legacy_mappings||[]){
  const key=m.topic_id+":"+m.legacy_id;
  if(!mapByLegacy.has(key))mapByLegacy.set(key,new Set());
  if(m.family_id)mapByLegacy.get(key).add(m.family_id);
}

const rows=new Map((reg.families||[]).map(f=>[f.family_id,{family_id:f.family_id,layer:f.layer,count:0,item_ids:[]}]));
const assessmentDir="docs/assets/data/assessment";
const files=fs.readdirSync(assessmentDir).filter(n=>/^\d\d-.*-core-v1\.json$/.test(n)).sort();
let total=0,exact=0;
const ambiguous=[],unresolved=[];

for(const name of files){
  const a=read(assessmentDir+"/"+name);
  const topicId="CT"+a.topic.id.slice(0,2);
  assert.equal(a.policy?.hints,false,name+" hints");
  assert.equal(a.policy?.tutor,false,name+" tutor");
  assert.equal(a.policy?.hard_gate,false,name+" hard gate");
  assert.equal(a.readiness?.hard_gate,false,name+" readiness hard gate");
  for(const item of a.items||[]){
    total++;
    const mapped=mapByLegacy.get(topicId+":"+item.skill);
    if(mapped?.size===1){
      const fid=[...mapped][0];
      const row=rows.get(fid);
      assert.ok(row,"unknown family "+fid);
      row.count++;
      row.item_ids.push(item.id);
      exact++;
    }else if(mapped?.size>1){
      ambiguous.push({name,item_id:item.id,skill:item.skill,families:[...mapped]});
    }else{
      unresolved.push({name,item_id:item.id,skill:item.skill});
    }
  }
}

const core=[...rows.values()].filter(r=>r.layer==="KNTT-Core");
const zero=core.filter(r=>r.count===0);
const one=core.filter(r=>r.count===1).map(r=>r.family_id).sort();
const hist={};
for(const r of core)hist[r.count]=(hist[r.count]||0)+1;

assert.equal(files.length,21);
assert.equal(total,237);
assert.equal(exact,237);
assert.equal(ambiguous.length,0);
assert.equal(unresolved.length,0);
assert.equal(core.length,100);
assert.equal(zero.length,0);
assert.deepEqual(hist,{"1":12,"2":61,"3":15,"4":6,"5":4,"6":1,"8":1});
assert.deepEqual(one,[...artifact.post_wave1.one_item_family_ids].sort());
assert.deepEqual(new Set(one),new Set(decision.keep_as_is));
assert.equal(decision.add_readiness.length,18);
for(const fid of decision.add_readiness) assert.ok(rows.get(fid)?.count>=2,"ADD_READINESS family did not gain independent evidence: "+fid);
assert.equal(artifact.post_wave1.all_remaining_one_item_are_keep_as_is,true);
assert.equal(artifact.conclusion.r1_readiness_authoring_complete,true);
assert.equal(artifact.conclusion.further_wave_authorized,false);

console.log("PASS: post-Wave1 Core Readiness reconciles 237 items across 100/100 KNTT-Core families with 237/237 exact primary mappings.");
console.log("PASS: one-item families fall 30 -> 12; all 12 were independently reviewed KEEP_AS_IS.");
console.log("PASS: R1 Readiness authoring is complete; no further R1 wave is authorized.");
