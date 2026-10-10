#!/usr/bin/env node
"use strict";
const fs=require("node:fs");
const assert=require("node:assert/strict");
const d=JSON.parse(fs.readFileSync("docs/assets/data/curriculum/written-coverage-priority-r1.json","utf8"));
const receipt=fs.readFileSync("review-packets/written-coverage-priority-r1/05_NOTEBOOKLM_RESULT_R1.md","utf8");

assert.equal(d.decision_id,"MATH-WRITTEN-COVERAGE-PRIORITY-R1-20261010");
assert.equal(d.status,"ACADEMIC_PRIORITY_REVIEW_PASS");
assert.equal(d.clearance,"WRITTEN_COVERAGE_PRIORITY_R1_REVIEW_COMPLETE");
assert.equal(d.independent_review.verdict,"PASS");
assert.equal(d.add_written.length,9);
assert.equal(new Set(d.add_written).size,9);
assert.equal(d.keep_no_written.length,25);
assert.equal(new Set(d.keep_no_written).size,25);
assert.equal(d.needs_more_evidence.length,0);
assert.deepEqual(d.crosswalk["WX24-MOD-002"],["SYS-MODEL","SYS-SOLVE"]);
assert.deepEqual(d.crosswalk["WX23-PRO-003"],["PROB-EVENT"]);
for(const v of Object.values(d.boundaries)) assert.equal(v,false);
assert.ok(receipt.includes("OVERALL|PASS"));
assert.equal((receipt.match(/^WRITTEN\|/gm)||[]).length,34);
assert.equal((receipt.match(/^CROSSWALK\|/gm)||[]).length,2);
assert.ok(receipt.includes("CLEARANCE|WRITTEN_COVERAGE_PRIORITY_R1_REVIEW_COMPLETE"));
console.log("PASS: Written Coverage Priority R1 reconciles exactly 9 ADD_WRITTEN, 25 KEEP_NO_WRITTEN and 2 approved crosswalks.");
