#!/usr/bin/env node
"use strict";
const fs=require("node:fs");
const assert=require("node:assert/strict");
const read=p=>JSON.parse(fs.readFileSync(p,"utf8"));

const scope=read("docs/assets/data/curriculum/written-implementation-wave1-r1.json");
const cand=read("docs/assets/data/written-exercises/written-implementation-wave1-r1-candidates.json");
const lib=read("docs/assets/data/written-exercises/written-exercise-library-v1.json");
const decision=read("docs/assets/data/curriculum/written-coverage-priority-r1.json");

assert.equal(scope.packet_id,"MATH-WRITTEN-IMPLEMENTATION-W1-R1-20261010");
assert.equal(scope.status,"CANDIDATE_AWAITING_ACADEMIC_REVIEW");
assert.equal(scope.authorization.clearance,"WRITTEN_COVERAGE_PRIORITY_R1_REVIEW_COMPLETE");
assert.equal(cand.status,"CANDIDATE_AWAITING_ACADEMIC_REVIEW");
assert.equal(cand.exercise_count,9);
assert.equal(cand.exercises.length,9);

const ids=cand.exercises.map(x=>x.exercise_id);
assert.equal(new Set(ids).size,9);
const liveIds=new Set(lib.exercises.map(x=>x.exercise_id));
for(const id of ids) assert.equal(liveIds.has(id),false,"candidate ID already live: "+id);

const approved=new Set(decision.add_written);
const candidateFamilies=cand.exercises.flatMap(x=>x.canonical_family_ids||[]);
assert.equal(candidateFamilies.length,9);
assert.deepEqual(new Set(candidateFamilies),approved);

for(const e of cand.exercises){
  assert.equal(e.learning_layer,"KNTT-Core");
  assert.equal(e.level,"CORE_BASE");
  assert.equal(e.canonical_family_ids.length,1);
  assert.ok(approved.has(e.canonical_family_ids[0]));
  assert.equal(e.academic_review.status,"PENDING");
  assert.equal(e.academic_review.packet_id,"MATH-WRITTEN-IMPLEMENTATION-W1-R1-20261010");
  assert.ok(e.problem_markdown?.length>20);
  assert.ok(Array.isArray(e.solution_steps)&&e.solution_steps.length>=3);
  assert.ok(Array.isArray(e.rubric)&&e.rubric.length>=3);
  assert.equal(e.rubric_total,e.rubric.reduce((s,r)=>s+r.points,0));
  assert.ok(Array.isArray(e.common_mistakes)&&e.common_mistakes.length>=3);
  assert.ok(Array.isArray(e.remediation_links)&&e.remediation_links.length>=2);
  assert.ok(Array.isArray(e.source_refs)&&e.source_refs.length>=1);
}
assert.equal(lib.exercises.length,54);
assert.equal(lib.published_scope.exercise_count,54);
assert.deepEqual(cand.crosswalk_updates["WX24-MOD-002"],["SYS-MODEL","SYS-SOLVE"]);
assert.deepEqual(cand.crosswalk_updates["WX23-PRO-003"],["PROB-EVENT"]);
assert.equal(scope.anti_inflation.core_apply_items,0);
assert.equal(scope.anti_inflation.no_other_written_additions,true);

console.log("PASS: Written Implementation Wave 1 stages exactly 9 reviewed-family CORE_BASE candidates, with no live-library mutation.");
console.log("PASS: 2 approved crosswalk updates are staged; current live library remains 54 exercises.");
