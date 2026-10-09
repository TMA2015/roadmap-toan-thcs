#!/usr/bin/env node
"use strict";
const fs=require("fs"),path=require("path"),assert=require("node:assert/strict");
const root=process.cwd();
const read=p=>JSON.parse(fs.readFileSync(path.join(root,p),"utf8"));
const exists=p=>fs.existsSync(path.join(root,p));
const reg=read("docs/assets/data/curriculum/skill-taxonomy-v2-registry-r1.json");
const idx=read("docs/assets/data/curriculum/taxonomy-v2-runtime/index-r1.json");
const written=read("docs/assets/data/written-exercises/written-exercise-library-v1.json");
const anchors=read("docs/assets/data/anchors/anchor-catalog-v1.json");

const famById=new Map(reg.families.map(f=>[f.family_id,f]));
const globalUniqueSubskill=new Map();
for(const fam of reg.families){
  for(const sk of fam.diagnostic_subskills||[]){
    if(!globalUniqueSubskill.has(sk)) globalUniqueSubskill.set(sk,new Set());
    globalUniqueSubskill.get(sk).add(fam.family_id);
  }
}
const uniqueGlobalFamily=sk=>{
  const s=globalUniqueSubskill.get(sk);
  return s&&s.size===1?[...s][0]:null;
};
const mapByLegacy=new Map();
for(const m of reg.legacy_mappings){
  const key=m.topic_id+":"+m.legacy_id;
  if(!mapByLegacy.has(key)) mapByLegacy.set(key,[]);
  if(m.family_id) mapByLegacy.get(key).push(m.family_id);
}
const rows=new Map(reg.families.map(f=>[f.family_id,{
  family_id:f.family_id,label_vi:f.label_vi,layer:f.layer,topics:f.topics||[],
  core_micro:0,practice:0,readiness:0,written:0,anchor_exact:0,
  practice_question_ids:[],micro_question_ids:[],readiness_item_ids:[],written_ids:[],anchor_ids:[]
}]));
const unresolved={practice:[],micro:[],readiness:[],written:[],anchor_tags:[]};
const inferred={practice:[],micro:[],readiness:[],written:[]};
const add=(fid,field,id)=>{const r=rows.get(fid);if(!r)return false;r[field]++;const k={practice:"practice_question_ids",core_micro:"micro_question_ids",readiness:"readiness_item_ids",written:"written_ids",anchor_exact:"anchor_ids"}[field];if(k&&!r[k].includes(id))r[k].push(id);return true};
const familiesFor=(topic,skills,allowGlobal=true)=>{
  const out=new Set();
  for(const sk of (Array.isArray(skills)?skills:[skills]).filter(Boolean)){
    for(const fid of mapByLegacy.get(topic+":"+sk)||[])out.add(fid);
    if(allowGlobal && !(mapByLegacy.get(topic+":"+sk)||[]).length){
      const fid=uniqueGlobalFamily(sk); if(fid) out.add(fid);
    }
  }
  return [...out];
};

// Current Practice Bank from manifest source files. Reviewed policy rows take precedence;
// post-taxonomy additions fall back to exact reviewed legacy->family mappings.
const policyByQ=new Map();
for(const t of idx.topics){
  const p=read(t.policy_path);
  for(const q of p.rows||[]) if(q.family_id) policyByQ.set(q.question_id,q.family_id);
}
const practiceDir=path.join(root,"docs/assets/data/practice");
const manifests=fs.readdirSync(practiceDir).filter(n=>/manifest\.json$/.test(n)).sort();
let practiceQuestions=0, postTaxonomy=0;
for(const mf of manifests){
  const man=read("docs/assets/data/practice/"+mf);
  const topicNum=(mf.match(/^(\d\d)-/)||[])[1];
  if(!topicNum)continue;
  const topic="CT"+topicNum;
  for(const src of man.sources||[]){
    const p="docs/assets/data/practice/"+src;if(!exists(p))continue;
    const bank=read(p);
    for(const q of bank.questions||[]){
      practiceQuestions++;
      const reviewed=policyByQ.get(q.id);
      const skills=q.tags?.skill||q.skill||[];
      let fids=reviewed?[reviewed]:familiesFor(topic,skills);
      if(!reviewed){
        postTaxonomy++;
        const exact=familiesFor(topic,skills,false);
        if(!exact.length&&fids.length) inferred.practice.push({topic,question_id:q.id,skills,family_ids:fids,method:"GLOBAL_UNIQUE_DIAGNOSTIC_SUBSKILL"});
      }
      if(!fids.length) unresolved.practice.push({topic,question_id:q.id,skills:q.tags?.skill||q.skill||[]});
      for(const fid of new Set(fids))add(fid,"practice",q.id);
    }
  }
}

// Core Micro
for(const n of fs.readdirSync(practiceDir).filter(n=>/-micro-v1\.json$/.test(n)).sort()){
  const topicNum=(n.match(/^(\d\d)-/)||[])[1];if(!topicNum)continue;
  const topic="CT"+topicNum,bank=read("docs/assets/data/practice/"+n);
  for(const q of bank.questions||[]){
    const skills=q.tags?.skill||q.skill||[];
    const exact=familiesFor(topic,skills,false),fids=familiesFor(topic,skills);
    if(!exact.length&&fids.length) inferred.micro.push({topic,question_id:q.id,skills,family_ids:fids,method:"GLOBAL_UNIQUE_DIAGNOSTIC_SUBSKILL"});
    if(!fids.length)unresolved.micro.push({topic,question_id:q.id,skills});
    for(const fid of new Set(fids))add(fid,"core_micro",q.id);
  }
}

// Readiness
const assessDir=path.join(root,"docs/assets/data/assessment");
for(const n of fs.readdirSync(assessDir).filter(n=>/^\d\d-.*-core-v1\.json$/.test(n)).sort()){
  const topic="CT"+n.slice(0,2),a=read("docs/assets/data/assessment/"+n);
  for(const q of a.items||[]){
    const skills=q.skill||q.skills||[];
    const exact=familiesFor(topic,skills,false),fids=familiesFor(topic,skills);
    if(!exact.length&&fids.length) inferred.readiness.push({topic,item_id:q.id||q.item_id,skills,family_ids:fids,method:"GLOBAL_UNIQUE_DIAGNOSTIC_SUBSKILL"});
    if(!fids.length)unresolved.readiness.push({topic,item_id:q.id||q.item_id,skill:skills});
    for(const fid of new Set(fids))add(fid,"readiness",q.id||q.item_id);
  }
}

// Written
for(const e of written.exercises||[]){
  const topic=e.topic_id;
  const skills=e.skills||[],exact=familiesFor(topic,skills,false),fids=familiesFor(topic,skills);
  if(!exact.length&&fids.length) inferred.written.push({topic,exercise_id:e.exercise_id,skills,family_ids:fids,method:"GLOBAL_UNIQUE_DIAGNOSTIC_SUBSKILL"});
  if(!fids.length)unresolved.written.push({topic,exercise_id:e.exercise_id,skills});
  for(const fid of new Set(fids))add(fid,"written",e.exercise_id);
}

// Anchors: exact taxonomy mapping only; unresolved semantic tags go to manual queue.
for(const a of anchors.anchors||[]){
  let mapped=new Set();
  for(const topic of a.topic_ids||[]){
    for(const fid of familiesFor(topic,a.skill_tags||[]))mapped.add(fid);
  }
  if(!mapped.size)unresolved.anchor_tags.push({anchor_id:a.id,topic_ids:a.topic_ids,skill_tags:a.skill_tags});
  for(const fid of mapped)add(fid,"anchor_exact",a.id);
}

const arr=[...rows.values()];
const zero=(field,layer)=>arr.filter(r=>(!layer||r.layer===layer)&&r[field]===0).map(r=>r.family_id);
const q=(vals,p)=>{if(!vals.length)return 0;const s=[...vals].sort((a,b)=>a-b);return s[Math.min(s.length-1,Math.floor((s.length-1)*p))];};
const corePractice=arr.filter(r=>r.layer==="KNTT-Core").map(r=>r.practice);
const summary={
  audit_id:"MATH-PRACTICE-COVERAGE-MATRIX-R1-20261009",
  generated_at:new Date().toISOString(),
  families:arr.length,
  practice_questions:practiceQuestions,
  reviewed_policy_questions:policyByQ.size,
  post_taxonomy_practice_rows:postTaxonomy,
  coverage:{
    core_micro_families:arr.filter(r=>r.core_micro>0).length,
    practice_families:arr.filter(r=>r.practice>0).length,
    readiness_families:arr.filter(r=>r.readiness>0).length,
    written_families:arr.filter(r=>r.written>0).length,
    anchor_exact_families:arr.filter(r=>r.anchor_exact>0).length
  },
  kntt_core_zero:{
    core_micro:zero("core_micro","KNTT-Core"),
    practice:zero("practice","KNTT-Core"),
    readiness:zero("readiness","KNTT-Core"),
    written:zero("written","KNTT-Core")
  },
  kntt_core_practice_distribution:{
    min:Math.min(...corePractice),q25:q(corePractice,.25),median:q(corePractice,.5),q75:q(corePractice,.75),max:Math.max(...corePractice)
  },
  unresolved_counts:Object.fromEntries(Object.entries(unresolved).map(([k,v])=>[k,v.length])),
  exam_frequency_status:"PENDING_OFFICIAL_CORPUS"
};
const report={schema:"practice-coverage-matrix-r1",summary,families:arr,unresolved,inferred,
 decision_note:"Inventory signals only. Zero/low/high counts do not automatically authorize ADD/REMOVE. Review curriculum layer, duplication, remediation value and source evidence first."};
assert.equal(arr.length,131);
assert.equal(practiceQuestions,3153);
assert.equal((written.exercises||[]).length,54);
assert.equal((anchors.anchors||[]).length,11);
const out=process.argv[2];
if(out){fs.writeFileSync(out,JSON.stringify(report,null,2)+"\n");}
const groupUnresolved=list=>{
  const m=new Map();
  for(const x of list){
    const skills=(x.skills||x.skill||x.skill_tags||[]); const arr=Array.isArray(skills)?skills:[skills];
    const key=(x.topic||x.topic_id||"NA")+"|"+arr.filter(Boolean).join(",");
    const r=m.get(key)||{key,count:0,ids:[]}; r.count++; if(r.ids.length<8)r.ids.push(x.question_id||x.item_id||x.exercise_id||x.anchor_id); m.set(key,r);
  }
  return [...m.values()].sort((a,b)=>b.count-a.count||a.key.localeCompare(b.key));
};
const unresolved_groups=Object.fromEntries(Object.entries(unresolved).map(([k,v])=>[k,groupUnresolved(v)]));
summary.kntt_core_zero.practice_family_ids=summary.kntt_core_zero.practice;
summary.inferred_counts=Object.fromEntries(Object.entries(inferred).map(([k,v])=>[k,v.length]));
console.log(JSON.stringify({summary,unresolved_groups},null,2));
