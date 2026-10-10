#!/usr/bin/env node
"use strict";
const fs=require("node:fs");
const path=require("node:path");
const assert=require("node:assert/strict");

const read=p=>JSON.parse(fs.readFileSync(p,"utf8"));
const root=process.cwd();
const reg=read("docs/assets/data/curriculum/skill-taxonomy-v2-registry-r1.json");
const expected=read("docs/assets/data/curriculum/readiness-coverage-audit-r1.json");
const assessmentDir=path.join(root,"docs/assets/data/assessment");
const files=fs.readdirSync(assessmentDir)
  .filter(n=>/^\d\d-.*-core-v1\.json$/.test(n))
  .sort();

const mapByLegacy=new Map();
for(const m of reg.legacy_mappings||[]){
  const key=m.topic_id+":"+m.legacy_id;
  if(!mapByLegacy.has(key))mapByLegacy.set(key,new Set());
  if(m.family_id)mapByLegacy.get(key).add(m.family_id);
}
const globalSub=new Map();
for(const f of reg.families||[]){
  for(const sk of f.diagnostic_subskills||[]){
    if(!globalSub.has(sk))globalSub.set(sk,new Set());
    globalSub.get(sk).add(f.family_id);
  }
}

const rows=new Map((reg.families||[]).map(f=>[f.family_id,{
  family_id:f.family_id,
  layer:f.layer,
  count:0,
  item_ids:[]
}]));
const mapping={exact_topic_skill:0,global_unique:0,ambiguous:[],unresolved:[]};
let totalItems=0;

for(const name of files){
  const a=read(path.join("docs/assets/data/assessment",name));
  assert.equal(a.schema,"roadmap-readiness-assessment-v1",name+" schema");
  assert.equal(a.layer,"KNTT-Core",name+" layer");
  assert.equal(a.policy?.hints,false,name+" no hints");
  assert.equal(a.policy?.tutor,false,name+" no tutor");
  assert.equal(a.policy?.hard_gate,false,name+" soft gate");
  assert.equal(a.readiness?.hard_gate,false,name+" readiness soft gate");

  const topicId="CT"+a.topic.id.slice(0,2);
  for(const item of a.items||[]){
    totalItems++;
    const exact=mapByLegacy.get(topicId+":"+item.skill);
    let familyId=null;
    if(exact?.size===1){
      familyId=[...exact][0];
      mapping.exact_topic_skill++;
    }else if(exact?.size>1){
      mapping.ambiguous.push({assessment:name,item_id:item.id,topic_id:topicId,skill:item.skill,families:[...exact]});
    }else{
      const global=globalSub.get(item.skill);
      if(global?.size===1){
        familyId=[...global][0];
        mapping.global_unique++;
      }else if(global?.size>1){
        mapping.ambiguous.push({assessment:name,item_id:item.id,topic_id:topicId,skill:item.skill,families:[...global]});
      }else{
        mapping.unresolved.push({assessment:name,item_id:item.id,topic_id:topicId,skill:item.skill});
      }
    }
    if(familyId){
      const row=rows.get(familyId);
      assert.ok(row,"unknown family "+familyId);
      row.count++;
      row.item_ids.push(item.id);
    }
  }
}

const core=[...rows.values()].filter(r=>r.layer==="KNTT-Core");
const covered=core.filter(r=>r.count>0);
const zero=core.filter(r=>r.count===0);
const hist={};
for(const r of core)hist[r.count]=String(hist[r.count]||0)==="0"?1:(hist[r.count]||0)+1;
const one=core.filter(r=>r.count===1).map(r=>r.family_id).sort();

assert.equal(files.length,21);
assert.equal(totalItems,219);
assert.equal(core.length,100);
assert.equal(covered.length,100);
assert.equal(zero.length,0);
assert.equal(mapping.exact_topic_skill,219);
assert.equal(mapping.global_unique,0);
assert.equal(mapping.ambiguous.length,0);
assert.equal(mapping.unresolved.length,0);
assert.deepEqual(hist,{"1":30,"2":43,"3":15,"4":6,"5":4,"6":1,"8":1});
assert.deepEqual(one,[...expected.thin_signal.one_item_families].sort());

assert.equal(expected.summary.assessment_files,files.length);
assert.equal(expected.summary.readiness_items,totalItems);
assert.equal(expected.summary.kntt_core_families,core.length);
assert.equal(expected.summary.families_with_primary_readiness_evidence,covered.length);
assert.equal(expected.summary.zero_readiness_families,zero.length);
assert.equal(expected.summary.exact_topic_skill_mappings,mapping.exact_topic_skill);
assert.equal(expected.summary.ambiguous_primary_mappings,mapping.ambiguous.length);
assert.equal(expected.summary.unresolved_primary_mappings,mapping.unresolved.length);
assert.equal(expected.policy.primary_skill_only,true);
assert.equal(expected.policy.supporting_skills_do_not_grant_readiness_coverage,true);
assert.equal(expected.policy.no_one_family_two_item_quota,true);

console.log("PASS: 21 Core Readiness assessments contain 219 items with 219/219 exact primary skill -> canonical family mappings.");
console.log("PASS: all 100 KNTT-Core families have Readiness evidence; zero-family gaps = 0.");
console.log("PASS: 30 one-item families are review signals only; no automatic two-item quota or authoring authorization.");
