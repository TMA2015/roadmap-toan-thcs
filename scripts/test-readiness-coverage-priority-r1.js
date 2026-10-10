#!/usr/bin/env node
"use strict";
const fs=require("node:fs");
const assert=require("node:assert/strict");
const d=JSON.parse(fs.readFileSync("docs/assets/data/curriculum/readiness-coverage-priority-r1.json","utf8"));
const receipt=fs.readFileSync("review-packets/readiness-coverage-priority-r1/03_NOTEBOOKLM_RESULT_R1.md","utf8");
const audit=JSON.parse(fs.readFileSync("docs/assets/data/curriculum/readiness-coverage-audit-r1.json","utf8"));

assert.equal(d.decision_id,"MATH-READINESS-COVERAGE-PRIORITY-R1-20261010");
assert.equal(d.status,"ACADEMIC_PRIORITY_REVIEW_PASS");
assert.equal(d.clearance,"READINESS_COVERAGE_PRIORITY_R1_REVIEW_COMPLETE");
assert.equal(d.independent_review.verdict,"PASS");
assert.equal(d.add_readiness.length,18);
assert.equal(new Set(d.add_readiness).size,18);
assert.equal(d.keep_as_is.length,12);
assert.equal(new Set(d.keep_as_is).size,12);
assert.equal(d.needs_more_evidence.length,0);
assert.equal(Object.keys(d.add_scope).length,18);
assert.deepEqual(new Set([...d.add_readiness,...d.keep_as_is]),new Set(audit.thin_signal.one_item_families));
assert.equal([...d.add_readiness,...d.keep_as_is].length,30);
for(const fid of d.add_readiness) assert.ok(d.add_scope[fid],"missing ADD_SCOPE for "+fid);
for(const v of Object.values(d.boundaries)) assert.equal(v,false);
assert.ok(receipt.includes("OVERALL|PASS"));
assert.equal((receipt.match(/^FAMILY\|/gm)||[]).length,30);
assert.equal((receipt.match(/^ADD_SCOPE\|/gm)||[]).length,18);
assert.ok(receipt.includes("CLEARANCE|READINESS_COVERAGE_PRIORITY_R1_REVIEW_COMPLETE"));
console.log("PASS: Readiness Coverage Priority R1 reconciles exactly 18 ADD_READINESS and 12 KEEP_AS_IS decisions.");
