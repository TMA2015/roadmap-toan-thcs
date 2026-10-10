#!/usr/bin/env node
"use strict";
const fs=require("node:fs");
const assert=require("node:assert/strict");
const lib=JSON.parse(fs.readFileSync("docs/assets/data/written-exercises/written-exercise-library-v1.json","utf8"));
const scope=JSON.parse(fs.readFileSync("docs/assets/data/curriculum/written-implementation-wave1-r1.json","utf8"));
const packet="MATH-WRITTEN-IMPLEMENTATION-W1-R1-20261010";
const expected=[
"WX04-ALG-003","WX19-CIR-003","WX19-CIR-004","WX16-QUAD-003","WX16-QUAD-004",
"WX11-RAD-003","WX18-TRI-003","WX17-SIM-003","WX14-TRI-003"
];
assert.equal(scope.status,"CANDIDATE_AWAITING_ACADEMIC_REVIEW");
assert.equal(scope.counts.new_written_exercises,9);
assert.equal(scope.counts.crosswalk_updates,2);
assert.equal(lib.exercises.length,63);
assert.equal(lib.published_scope.exercise_count,54);
assert.equal(lib.exercises.filter(e=>e.academic_review?.status==="APPROVED").length,54);
const cand=lib.exercises.filter(e=>expected.includes(e.exercise_id));
assert.equal(cand.length,9);
assert.equal(new Set(cand.map(e=>e.problem_type_id)).size,9);
for(const e of cand){
  assert.equal(e.learning_layer,"KNTT-Core");
  assert.equal(e.level,"CORE_BASE");
  assert.equal(e.academic_review?.status,"PENDING");
  assert.equal(e.academic_review?.packet_id,packet);
  assert.equal(e.canonical_family_ids?.length,1);
  assert.ok(e.problem_markdown);
  assert.ok((e.solution_steps||[]).length>=4);
  assert.ok((e.rubric||[]).length>=4);
  assert.equal(e.rubric_total,e.rubric.reduce((s,r)=>s+r.points,0));
  if(e.figure_uri) assert.ok(fs.existsSync("docs/"+e.figure_uri.replace("../","")));
}
const w24=lib.exercises.find(e=>e.exercise_id==="WX24-MOD-002");
const w23=lib.exercises.find(e=>e.exercise_id==="WX23-PRO-003");
assert.deepEqual(w24.canonical_family_ids,["SYS-MODEL","SYS-SOLVE"]);
assert.deepEqual(w23.canonical_family_ids,["PROB-EVENT"]);
assert.equal(w24.taxonomy_crosswalk_review?.clearance,"WRITTEN_COVERAGE_PRIORITY_R1_REVIEW_COMPLETE");
assert.equal(w23.taxonomy_crosswalk_review?.clearance,"WRITTEN_COVERAGE_PRIORITY_R1_REVIEW_COMPLETE");
const batch=lib.published_scope.batches.find(b=>b.batch_id==="WRITTEN_IMPLEMENTATION_W1_R1");
assert.equal(batch.count,9);
assert.equal(batch.status,"CANDIDATE_AWAITING_ACADEMIC_REVIEW");
console.log("PASS: Written Implementation Wave 1 contains exactly 9 bounded CORE_BASE candidates and 2 approved crosswalk updates.");
