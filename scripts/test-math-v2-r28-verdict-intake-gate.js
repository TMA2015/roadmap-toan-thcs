#!/usr/bin/env node
"use strict";
const assert=require("node:assert/strict"),fs=require("node:fs");
const {template,evaluate}=require("./prototypes/math-v2-r28-verdict-intake-gate.js");
const draft=template();
const copy=x=>JSON.parse(JSON.stringify(x));
assert.equal(draft.verdicts.length,40);
assert.equal(new Set(draft.verdicts.map(x=>x.question_id)).size,40);
assert(draft.verdicts.every(x=>x.verdict==="NOT_REVIEWED"&&
 x.source_references.length===0));
let r=evaluate(draft);
assert.equal(r.state,"REVIEW_INCOMPLETE");
assert.deepEqual(r.counts,{PASS:0,REVISE:0,
 INSUFFICIENT_EVIDENCE:0,NOT_REVIEWED:40});
assert.equal(r.covered,40);
assert.equal(r.academic_pass_authorized,false);
assert.equal(r.production_skill_counter_authorized,false);
assert.equal(r.historical_regrade_or_backfill_authorized,false);
function pass(entry){
 entry.verdict="PASS";
 entry.review_layer="KNTT-Core";
 entry.grade=7;
 entry.S1_grade_and_lesson="KNTT class / lesson synthetic fixture ONLY";
 entry.source_references=[{
  source_class:"S1",title:"SYNTHETIC_TEST_NOT_A_REAL_SGK",
  locator:"synthetic page, no real citation",
  supported_claim:"Synthetic record used to verify validator only"
 }];
 entry.math_correct=true;
 entry.unique_correct_option=true;
 entry.distractors_valid=true;
 entry.explanation_correct=true;
 entry.structure_distinctness="DISTINCT";
 entry.issue="Synthetic test-only reason: no academic review was made.";
}
let t=copy(draft);
t.reviewer="SYNTHETIC_TEST_NOT_NOTEBOOKLM";
pass(t.verdicts[0]);
r=evaluate(t);
assert.equal(r.counts.PASS,1);
assert.equal(r.counts.NOT_REVIEWED,39);
assert.equal(r.academic_pass_authorized,false);
assert.equal(r.external_receipt_present,false);
t=copy(draft);t.verdicts[0].source_git_blob_sha="0".repeat(40);
assert.throws(()=>evaluate(t),/R28_SOURCE_IDENTITY_CHANGED/);
t=copy(draft);t.verdicts[0].source_record_sha256="f".repeat(64);
assert.throws(()=>evaluate(t),/R28_SOURCE_IDENTITY_CHANGED/);
t=copy(draft);t.verdicts[1].question_id=t.verdicts[0].question_id;
assert.throws(()=>evaluate(t),/R28_DUPLICATE_OR_UNKNOWN_ID/);
t=copy(draft);t.verdicts.pop();
assert.throws(()=>evaluate(t),/R28_NOT_EXACT_40_ROWS/);
t=copy(draft);t.verdicts[0].verdict="APPROVED";
assert.throws(()=>evaluate(t),/R28_INVALID_STATUS/);
t=copy(draft);t.verdicts[0].math_correct=true;
assert.throws(()=>evaluate(t),/R28_DRAFT_HAS_REVIEW_CLAIMS/);
t=copy(draft);t.reviewer="SYNTHETIC_TEST";
pass(t.verdicts[0]);t.verdicts[0].source_references=[];
assert.throws(()=>evaluate(t),/R28_PASS_NOT_SUPPORTED/);
t=copy(draft);t.reviewer="SYNTHETIC_TEST";
pass(t.verdicts[0]);t.verdicts[0].source_references=[{
 source_class:"S2",title:"SYNTHETIC_ONLY",
 locator:"synthetic page",supported_claim:"synthetic"
}];
assert.throws(()=>evaluate(t),/R28_CORE_WITHOUT_S1/);
t=copy(draft);t.reviewer="SYNTHETIC_TEST";
t.verdicts[0].verdict="REVISE";
t.verdicts[0].review_layer="Core-Support";
t.verdicts[0].grade="NOT_VERIFIED";
t.verdicts[0].issue="Synthetic issue requiring explicit revision.";
assert.throws(()=>evaluate(t),/R28_REVISION_WITHOUT_FIX/);
t.verdicts[0].proposed_fix="Synthetic fix; not academic approval";
r=evaluate(t);
assert.equal(r.counts.REVISE,1);
assert.equal(r.non_pass_items.length,1);
const all=copy(draft);all.reviewer="SYNTHETIC_TEST_ONLY";
all.submitted_receipt="SYNTHETIC_EXAMPLE_NO_EXTERNAL_REVIEW";
all.verdicts.forEach(pass);
r=evaluate(all);
assert.equal(r.counts.PASS,40);
assert.equal(r.state,"VERDICTS_PRESENT_REQUIRE_INDEPENDENT_RECONCILIATION");
assert.equal(r.external_receipt_present,true);
assert.equal(r.academic_pass_authorized,false,
 "Even 40 synthetically completed PASS rows cannot grant academic approval");
assert.equal(r.canonical_skill_mapping_authorized,false);
assert.equal(r.production_skill_counter_authorized,false);
const c=fs.readFileSync("scripts/prototypes/math-v2-r28-verdict-intake-gate.js","utf8");
const site=fs.readFileSync("mkdocs.yml","utf8");
const practice=fs.readFileSync("docs/assets/javascripts/practice-engine-v2.js","utf8");
assert(!/localStorage|indexedDB|sessionStorage|fetch\s*\(|sendBeacon/.test(c));
assert(!/writeFile|appendFile|unlinkSync|rmSync|renameSync/.test(c));
assert(!site.includes("math-v2-r28-verdict-intake-gate"));
assert(!practice.includes("math-v2-r28-verdict-intake-gate"));
console.log("PASS R28 exact 40 review IDs and hashes; incomplete/duplicate/stale/uncited/unreviewed hold; even synthetic 40 PASS cannot authorize learner counters");
