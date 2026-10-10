#!/usr/bin/env node
"use strict";
const fs=require("node:fs");
const path=require("node:path");
const assert=require("node:assert/strict");

const root=process.cwd();
const read=p=>JSON.parse(fs.readFileSync(path.join(root,p),"utf8"));
const reg=read("docs/assets/data/curriculum/skill-taxonomy-v2-registry-r1.json");
const lib=read("docs/assets/data/written-exercises/written-exercise-library-v1.json");
const contract=fs.readFileSync(path.join(root,"docs/collaboration/written-exercise-library-v1.md"),"utf8");
const auditBaselineExercises=(lib.exercises||[]).filter(e=>e.academic_review?.packet_id!=="MATH-WRITTEN-IMPLEMENTATION-W1-R1-20261010");

const mapByLegacy=new Map();
for(const m of reg.legacy_mappings||[]){
  const key=m.topic_id+":"+m.legacy_id;
  if(!mapByLegacy.has(key)) mapByLegacy.set(key,new Set());
  if(m.family_id) mapByLegacy.get(key).add(m.family_id);
}
const globalSub=new Map();
for(const f of reg.families||[]){
  for(const sk of f.diagnostic_subskills||[]){
    if(!globalSub.has(sk)) globalSub.set(sk,new Set());
    globalSub.get(sk).add(f.family_id);
  }
}
const uniqueGlobal=sk=>{
  const set=globalSub.get(sk);
  return set&&set.size===1?[...set][0]:null;
};
const rows=new Map((reg.families||[]).map(f=>[f.family_id,{
  family_id:f.family_id,
  label_vi:f.label_vi,
  layer:f.layer,
  topics:f.topics||[],
  written:0,
  exercise_ids:[]
}]));
const add=(fid,id)=>{
  const r=rows.get(fid); if(!r)return;
  r.written++;
  if(!r.exercise_ids.includes(id))r.exercise_ids.push(id);
};

const unresolved=[];
const inferred=[];
const topicCounts={};
const layerCounts={};
const levelCounts={};
const problemTypeCounts={};
for(const e of auditBaselineExercises){
  topicCounts[e.topic_id]=(topicCounts[e.topic_id]||0)+1;
  layerCounts[e.learning_layer]=(layerCounts[e.learning_layer]||0)+1;
  levelCounts[e.level]=(levelCounts[e.level]||0)+1;
  problemTypeCounts[e.problem_type_id]=(problemTypeCounts[e.problem_type_id]||0)+1;

  const mapped=new Set();
  for(const sk of e.skills||[]){
    const exact=mapByLegacy.get(e.topic_id+":"+sk);
    if(exact?.size){
      for(const fid of exact)mapped.add(fid);
    }else{
      const fid=uniqueGlobal(sk);
      if(fid){
        mapped.add(fid);
        inferred.push({exercise_id:e.exercise_id,topic_id:e.topic_id,skill:sk,family_id:fid,method:"GLOBAL_UNIQUE_DIAGNOSTIC_SUBSKILL"});
      }
    }
  }
  if(!mapped.size){
    unresolved.push({
      exercise_id:e.exercise_id,
      topic_id:e.topic_id,
      learning_layer:e.learning_layer,
      problem_type_id:e.problem_type_id,
      problem_type_title:e.problem_type_title,
      skills:e.skills||[]
    });
  }
  for(const fid of mapped)add(fid,e.exercise_id);
}

const families=[...rows.values()];
const core=families.filter(r=>r.layer==="KNTT-Core");
const coreZero=core.filter(r=>r.written===0);
const covered=families.filter(r=>r.written>0);
const duplicateProblemTypes=Object.entries(problemTypeCounts).filter(([,n])=>n>1).map(([id,n])=>({problem_type_id:id,count:n}));

const summary={
  audit_id:"MATH-WRITTEN-COVERAGE-R1-20261010",
  generated_at:new Date().toISOString(),
  exercises:auditBaselineExercises.length,
  topics:Object.keys(topicCounts).length,
  unique_problem_types:Object.keys(problemTypeCounts).length,
  duplicate_problem_types:duplicateProblemTypes.length,
  layer_counts:layerCounts,
  level_counts:levelCounts,
  mapped_families:covered.length,
  kntt_core_families:core.length,
  kntt_core_written_families:core.length-coreZero.length,
  kntt_core_zero_written_families:coreZero.length,
  unresolved_written_items:unresolved.length,
  inferred_written_skill_links:inferred.length,
  self_marking_only:lib.self_marking_only,
  auto_readiness_credit:lib.auto_readiness_credit
};

const decision_prep={
  policy:"REVIEW_SIGNAL_ONLY_NO_AUTOMATIC_AUTHORING",
  kntt_core_zero_written_review:coreZero.map(r=>({
    family_id:r.family_id,label_vi:r.label_vi,topics:r.topics
  })),
  unresolved_crosswalk_review:unresolved,
  topic_inventory:Object.entries(topicCounts).sort((a,b)=>a[0].localeCompare(b[0])).map(([topic_id,count])=>({topic_id,count})),
  rules:{
    zero_written_is_not_gap:true,
    one_family_one_exercise_quota_forbidden:true,
    add_only_if_complete_written_solution_observes_reasoning_not_visible_in_micro_or_mcq:true,
    preserve_anchor_source_of_truth:true,
    no_mastery_or_readiness_credit:true
  }
};

const report={
  schema:"written-coverage-audit-r1",
  summary,
  families,
  decision_prep,
  unresolved,
  inferred,
  note:"Inventory only. Written coverage follows problem types and reasoning observability; zero family coverage does not authorize ADD."
};

assert.match(contract,/1 Core Base problem/);
assert.match(contract,/add \*\*1 Core Apply problem\*\* only when a second level is pedagogically useful/);
assert.equal(summary.exercises,54);
assert.equal(summary.topics,22);
assert.equal(summary.unique_problem_types,54);
assert.equal(summary.duplicate_problem_types,0);
assert.deepEqual(summary.layer_counts,{"KNTT-Core":50,"Core-Support":2,"Entrance10":2});
assert.equal(summary.mapped_families,67);
assert.equal(summary.kntt_core_families,100);
assert.equal(summary.kntt_core_written_families,66);
assert.equal(summary.kntt_core_zero_written_families,34);
assert.equal(summary.unresolved_written_items,2);
assert.equal(summary.self_marking_only,true);
assert.equal(summary.auto_readiness_credit,false);

const out=process.argv[2];
if(out)fs.writeFileSync(out,JSON.stringify(report,null,2)+"\n");
console.log(JSON.stringify({summary,decision_prep},null,2));
