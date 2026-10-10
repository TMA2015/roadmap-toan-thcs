#!/usr/bin/env node
"use strict";
const fs=require("node:fs");
const assert=require("node:assert/strict");
const read=p=>JSON.parse(fs.readFileSync(p,"utf8"));

const scope=read("docs/assets/data/curriculum/written-implementation-wave1-r1.json");
const cand=read("docs/assets/data/written-exercises/written-implementation-wave1-r1-candidates.json");
const lib=read("docs/assets/data/written-exercises/written-exercise-library-v1.json");
const decision=read("docs/assets/data/curriculum/written-coverage-priority-r1.json");
const receipt=fs.readFileSync("review-packets/written-implementation-wave1-r1/01_NOTEBOOKLM_RESULT_R1.md","utf8");

assert.equal(scope.packet_id,"MATH-WRITTEN-IMPLEMENTATION-W1-R1-20261010");
assert.equal(scope.status,"ACADEMIC_CONTENT_REVIEW_PASS");
assert.equal(scope.clearance,"WRITTEN_IMPLEMENTATION_W1_R1_CONTENT_REVIEW_COMPLETE");
assert.equal(scope.independent_review.verdict,"PASS");
assert.equal(cand.status,"ACADEMIC_CONTENT_REVIEW_PASS");
assert.equal(cand.clearance,"WRITTEN_IMPLEMENTATION_W1_R1_CONTENT_REVIEW_COMPLETE");
assert.equal(cand.exercise_count,9);
assert.equal(cand.exercises.length,9);

const ids=cand.exercises.map(x=>x.exercise_id);
assert.equal(new Set(ids).size,9);
const liveById=new Map(lib.exercises.map(x=>[x.exercise_id,x]));
for(const id of ids) assert.ok(liveById.has(id),"approved candidate missing from live library: "+id);

const approved=new Set(decision.add_written);
const candidateFamilies=cand.exercises.flatMap(x=>x.canonical_family_ids||[]);
assert.equal(candidateFamilies.length,9);
assert.deepEqual(new Set(candidateFamilies),approved);

for(const e of cand.exercises){
  assert.equal(e.learning_layer,"KNTT-Core");
  assert.equal(e.level,"CORE_BASE");
  assert.equal(e.canonical_family_ids.length,1);
  assert.ok(approved.has(e.canonical_family_ids[0]));
  assert.equal(e.academic_review.status,"APPROVED");
  assert.equal(e.academic_review.method,"NOTEBOOKLM_R1");
  assert.equal(e.academic_review.receipt,"review-packets/written-implementation-wave1-r1/01_NOTEBOOKLM_RESULT_R1.md");
  const live=liveById.get(e.exercise_id);
  assert.deepEqual(live,e);
  assert.ok(e.problem_markdown?.length>20);
  assert.ok(Array.isArray(e.solution_steps)&&e.solution_steps.length>=3);
  assert.ok(Array.isArray(e.rubric)&&e.rubric.length>=3);
  assert.equal(e.rubric_total,e.rubric.reduce((s,r)=>s+r.points,0));
  assert.ok(Array.isArray(e.common_mistakes)&&e.common_mistakes.length>=3);
  assert.ok(Array.isArray(e.remediation_links)&&e.remediation_links.length>=2);
  assert.ok(Array.isArray(e.source_refs)&&e.source_refs.length>=1);
}

assert.equal(lib.exercises.length,63);
assert.equal(lib.published_scope.exercise_count,63);
const batch=lib.published_scope.batches.find(x=>x.batch_id==="WRITTEN_IMPLEMENTATION_W1_R1");
assert.ok(batch);
assert.equal(batch.count,9);
assert.equal(batch.status,"PUBLISHED");
assert.deepEqual(liveById.get("WX24-MOD-002").canonical_family_ids,["SYS-MODEL","SYS-SOLVE"]);
assert.deepEqual(liveById.get("WX23-PRO-003").canonical_family_ids,["PROB-EVENT"]);
assert.equal(scope.anti_inflation.core_apply_items,0);
assert.equal(scope.anti_inflation.no_other_written_additions,true);
assert.ok(receipt.includes("OVERALL|PASS"));
assert.equal((receipt.match(/^ITEM\|/gm)||[]).length,9);
assert.equal((receipt.match(/^CROSSWALK\|/gm)||[]).length,2);
assert.ok(receipt.includes("CLEARANCE|WRITTEN_IMPLEMENTATION_W1_R1_CONTENT_REVIEW_COMPLETE"));

console.log("PASS: Written Implementation Wave 1 reconciles 9/9 NotebookLM-approved CORE_BASE items into the canonical live library.");
console.log("PASS: Written library is 63 items and contains exactly the 2 approved crosswalk updates.");
