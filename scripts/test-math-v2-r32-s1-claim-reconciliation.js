#!/usr/bin/env node
"use strict";
const assert=require("node:assert/strict"),fs=require("node:fs");
const {audit,ids,flags,P}=require("./prototypes/math-v2-r32-s1-claim-reconciliation.js");
const r=audit();
assert.equal(r.status,"ACADEMIC_HOLD_R32_RECEIPT_RECONCILIATION_REQUIRED");
assert.equal(r.received_claim_rows,24);
assert.equal(r.original_R27_rows,40);
assert.equal(r.original_out_of_scope,16);
assert.deepEqual(r.reviewer_claimed_counts,{
 PASS:21,REVISE:3,INSUFFICIENT_EVIDENCE:0,NOT_REVIEWED:0
});
assert.equal(r.accepted_academic_pass_count,0);
assert.equal(r.accepted_layer_promotions,0);
assert.equal(r.source_receipt_git_blob_sha,"e396a2da2aa2e7a8af7f376c24c17c87c6c470f6");
assert.deepEqual(r.rows.map(x=>x.question_id),ids);
assert.equal(r.flagged_count,16);
assert(r.rows.every(x=>x.record_sha256.length===64&&x.source_blob_sha.length===40));
assert(r.rows.every(x=>x.academic_S1_verified_by_repository===false));
assert(r.rows.every(x=>x.academic_pass_authorized===false&&
 x.learner_skill_credit_authorized===false));
for(const id of ["NUM02V1_132","NUM02V1_147","ALG04V2_133",
 "ALG04V2_134","ALG04V2_135","ALG04V2_136","ALG04V2_137"]){
 assert(flags[id].length>0);
}
const prior=JSON.parse(fs.readFileSync(P,"utf8"));
const badDuplicate=structuredClone(prior);
badDuplicate.rows[1].question_id=badDuplicate.rows[0].question_id;
assert.throws(()=>audit({override:badDuplicate}),/R32_MISSING_DUPLICATE_OR_UNEXPECTED_ID/);
const badSummary=structuredClone(prior);
badSummary.reviewer_claimed_verdict_totals.PASS=24;
assert.throws(()=>audit({override:badSummary}),/R32_REVIEWER_SUMMARY_MISMATCH/);
const unsafe=structuredClone(prior);
unsafe.academic_pass_authorized=true;
assert.throws(()=>audit({override:unsafe}),/R32_UNSAFE_AUTHORIZATION/);
const changedLayer=structuredClone(prior);
changedLayer.rows[21].review_layer="KNTT-Core";
assert.throws(()=>audit({override:changedLayer}),/R32_UNEXPECTED_LAYER_CLAIM/);
const src=fs.readFileSync("scripts/prototypes/math-v2-r32-s1-claim-reconciliation.js","utf8");
assert(!/localStorage|indexedDB|sessionStorage|sendBeacon/.test(src));
assert(!/writeFile|appendFile|unlinkSync|renameSync|rmSync/.test(src));
assert(!fs.readFileSync("mkdocs.yml","utf8").includes("math-v2-r32-s1-claim-reconciliation.js"));
assert(!fs.readFileSync("docs/assets/javascripts/practice-engine-v2.js","utf8")
 .includes("math-v2-r32-s1-claim-reconciliation.js"));
console.log("PASS R32: 24/24 transcribed claims; reported 21 PASS/3 REVISE; "+
 "16 source-review flags; 0 academic approvals; no learner changes");
