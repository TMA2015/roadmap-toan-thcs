#!/usr/bin/env node
"use strict";
const fs=require("fs");
const assert=require("node:assert/strict");
const dir="review-packets/math-content-cleanup/";
const report=fs.readFileSync(dir+"MATH-CT05-07-W3A-WR-R1-20261016_NOTEBOOKLM_VERDICT.md","utf8");
const plan=fs.readFileSync(dir+"MATH-CT05-07-W3A-WR-INTEGRATION_CANDIDATE_R1.md","utf8");
assert(report.includes("PACKET_ID|MATH-CT05-07-W3A-WR-R1-20261016"));
assert(report.includes("EXPECTED=3") && report.includes("REVIEWED=3"));
assert(report.includes("OVERALL|PASS_FOR_AUTHORING_REVIEW"));
const rows=report.split("\n").filter(x=>/^(05-ENT-01|06-CH-01|07-WR-11)\s*\|\s*PASS\s*\|/.test(x));
assert.deepEqual(rows.map(x=>x.split("|")[0].trim()),["05-ENT-01","06-CH-01","07-WR-11"]);
assert(rows[0].includes("APPROVE_NEW_WX"));
assert(rows[1].includes("APPROVE_NEW_WX"));
assert(rows[2].includes("PLACE_CORE_ONLY"));
assert(report.includes("MISSING_IDS|NONE")&&report.includes("DUPLICATE_IDS|NONE")&&report.includes("UNEXPECTED_IDS|NONE"));
for(const id of ["WX05-ENT-001","WX06-CH-001","pt07-core-2"]){
 assert(plan.includes(id),"missing nonduplicative target "+id);
}
assert(plan.includes("Owner explicitly accepts"));
assert(plan.includes("NO PRODUCTION CHANGE") && report.includes("**Not** a deployment authorization"));
const lib=JSON.parse(fs.readFileSync("docs/assets/data/written-exercises/written-exercise-library-v1.json","utf8"));
assert.equal(lib.exercises.length,63,"documentation PR must not modify production Written Library");
for(const id of ["WX05-ENT-001","WX06-CH-001"]){
 assert(!lib.exercises.some(x=>x.exercise_id===id),"proposed WX published without owner release gate: "+id);
}
const core=JSON.parse(fs.readFileSync("docs/assets/data/curriculum/topic07-learning-workspace.json","utf8"));
const card=core.cards.find(x=>x.id==="pt07-core-2");
assert(card && card.teaching_copy.key_idea.includes("miền xác định ban đầu"));
assert(card.teaching_copy.worked_example.solution.includes("Giữ nguyên"),"existing Core domain restriction explanation must be retained");
assert(!core.cards.some(x=>x.id==="pt07-core-6"),"do not duplicate Core cards");
console.log("PASS W3A-WR: exact 3/3 authoring PASS, two proposed WX only, CT07 existing Core, no published content or learner data changes.");
