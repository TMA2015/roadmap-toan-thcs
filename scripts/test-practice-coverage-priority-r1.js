#!/usr/bin/env node
"use strict";
const assert=require("node:assert/strict"),fs=require("node:fs");
const j=p=>JSON.parse(fs.readFileSync(p,"utf8"));
const d=j("docs/assets/data/curriculum/practice-coverage-priority-r1.json");
const receipt=fs.readFileSync("review-packets/practice-coverage-priority-r1/03_NOTEBOOKLM_RESULT_R1.md","utf8");

assert.equal(d.decision_id,"MATH-PRACTICE-COVERAGE-PRIORITY-R1-20261009");
assert.equal(d.status,"ACADEMIC_PRIORITY_REVIEW_PASS");
assert.equal(d.clearance,"PRACTICE_COVERAGE_PRIORITY_R1_REVIEW_COMPLETE");
assert.equal(d.independent_review.verdict,"PASS");

assert.equal(d.readiness.families.length,11);
assert.equal(new Set(d.readiness.families).size,11);
assert.equal(d.practice_density_no_more.length,17);
assert.equal(new Set(d.practice_density_no_more).size,17);
assert.deepEqual(d.low_density.add,["QUAD-GRAPH","NUM-ABS","RATIO-MODEL"]);
assert.deepEqual(d.low_density.optional,["RATEX-INTEGER","EQ-PARAM"]);
assert.deepEqual(d.low_density.keep,["RAD-EQUATION","RAD-COMPARE","ID-PROOF","RATEX-EVALUATE","INEQ-MODEL"]);
assert.equal(Object.keys(d.anchor_crosswalk).length,11);
for(const [id,fams] of Object.entries(d.anchor_crosswalk)){
  assert.match(id,/^A25-0(0[1-9]|1[01])$/);
  assert.ok(Array.isArray(fams)&&fams.length>=1);
}
for(const v of Object.values(d.boundaries)) assert.equal(v,false);
assert.match(receipt,/OVERALL\|PASS/);
assert.match(receipt,/CLEARANCE\|PRACTICE_COVERAGE_PRIORITY_R1_REVIEW_COMPLETE/);
assert.equal((receipt.match(/^READINESS\|/gm)||[]).length,11);
assert.equal((receipt.match(/^DENSITY\|/gm)||[]).length,17);
assert.equal((receipt.match(/^LOW_DENSITY\|/gm)||[]).length,10);
assert.equal((receipt.match(/^ANCHOR\|/gm)||[]).length,11);
console.log("PASS: Practice Coverage Priority R1 reconciles exactly 11 Readiness, 17 density, 10 low-density and 11 Anchor decisions.");
console.log("PASS: boundaries preserve taxonomy, existing questions, quotas and learner history.");
