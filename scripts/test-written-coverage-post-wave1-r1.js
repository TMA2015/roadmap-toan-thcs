#!/usr/bin/env node
"use strict";
const fs=require("node:fs");
const assert=require("node:assert/strict");
const read=p=>JSON.parse(fs.readFileSync(p,"utf8"));

const artifact=read("docs/assets/data/curriculum/written-coverage-post-wave1-r1.json");
const decision=read("docs/assets/data/curriculum/written-coverage-priority-r1.json");
const impl=read("docs/assets/data/curriculum/written-implementation-wave1-r1.json");
const lib=read("docs/assets/data/written-exercises/written-exercise-library-v1.json");
const reg=read("docs/assets/data/curriculum/skill-taxonomy-v2-registry-r1.json");

assert.equal(artifact.audit_id,"MATH-WRITTEN-COVERAGE-POST-WAVE1-R1-20261010");
assert.equal(artifact.status,"RECONCILED_NO_FURTHER_R1_AUTHORING_AUTHORIZED");
assert.equal(decision.clearance,"WRITTEN_COVERAGE_PRIORITY_R1_REVIEW_COMPLETE");
assert.equal(impl.clearance,"WRITTEN_IMPLEMENTATION_W1_R1_CONTENT_REVIEW_COMPLETE");
assert.equal(impl.independent_review?.verdict,"PASS");
assert.equal(lib.exercises.length,63);
assert.equal(lib.published_scope.exercise_count,63);

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
  layer:f.layer,
  written:0,
  exercise_ids:[]
}]));
const unresolved=[];
for(const e of lib.exercises||[]){
  const mapped=new Set((e.canonical_family_ids||[]).filter(fid=>rows.has(fid)));
  if(!mapped.size){
    for(const sk of e.skills||[]){
      const exact=mapByLegacy.get(e.topic_id+":"+sk);
      if(exact?.size){
        for(const fid of exact)mapped.add(fid);
      }else{
        const fid=uniqueGlobal(sk);
        if(fid)mapped.add(fid);
      }
    }
  }
  if(!mapped.size)unresolved.push(e.exercise_id);
  for(const fid of mapped){
    const row=rows.get(fid);
    row.written++;
    if(!row.exercise_ids.includes(e.exercise_id))row.exercise_ids.push(e.exercise_id);
  }
}

const core=[...rows.values()].filter(r=>r.layer==="KNTT-Core");
const zero=core.filter(r=>r.written===0).map(r=>r.family_id);
const covered=core.filter(r=>r.written>0);

assert.equal(core.length,100);
assert.equal(covered.length,76);
assert.equal(zero.length,24);
assert.deepEqual(zero,artifact.post_wave1.remaining_zero_families);
assert.equal(unresolved.length,0);

assert.equal(decision.add_written.length,9);
assert.equal(decision.keep_no_written.length,25);
assert.equal(decision.needs_more_evidence.length,0);
for(const fid of decision.add_written){
  assert.ok(rows.get(fid)?.written>0,"authorized ADD_WRITTEN family still uncovered: "+fid);
}
for(const fid of zero){
  assert.ok(decision.keep_no_written.includes(fid),"remaining zero-Written family lacks prior KEEP_NO_WRITTEN decision: "+fid);
}

assert.deepEqual(lib.exercises.find(x=>x.exercise_id==="WX24-MOD-002")?.canonical_family_ids,["SYS-MODEL","SYS-SOLVE"]);
assert.deepEqual(lib.exercises.find(x=>x.exercise_id==="WX23-PRO-003")?.canonical_family_ids,["PROB-EVENT"]);
assert.ok(rows.get("PROB-EVENT")?.exercise_ids.includes("WX23-PRO-003"));
assert.ok(rows.get("SYS-MODEL")?.exercise_ids.includes("WX24-MOD-002"));
assert.ok(rows.get("SYS-SOLVE")?.exercise_ids.includes("WX24-MOD-002"));

assert.equal(artifact.baseline.zero_written_before_wave1,34);
assert.equal(artifact.post_wave1.zero_written_reduction,10);
assert.equal(artifact.post_wave1.all_remaining_zero_are_prior_keep_no_written,true);
assert.equal(artifact.conclusion.r1_written_authoring_complete,true);
assert.equal(artifact.conclusion.further_wave_authorized,false);

console.log("PASS: post-Wave1 Written coverage reconciles 63 published items to 76/100 covered KNTT-Core families.");
console.log("PASS: zero-Written falls 34 -> 24: nine reviewed additions plus PROB-EVENT existing-item crosswalk.");
console.log("PASS: all 24 remaining zero-Written families were already reviewed KEEP_NO_WRITTEN; no R1 Wave 2 authoring is authorized.");
