#!/usr/bin/env node
"use strict";
const assert=require("node:assert/strict"),fs=require("node:fs");
const {intake,getReceipt,ERRATUM,ERRATUM_BLOB_SHA}=require("./prototypes/math-v2-r30-notebooklm-s1-erratum-intake.js");
const r=intake();
const raw=fs.readFileSync(ERRATUM);
assert.equal(r.receipt_git_blob_sha,ERRATUM_BLOB_SHA);
assert.equal(r.schema,"math-v2-r30-targeted-erratum-intake-v1");
assert.equal(r.packet_id,"MATH-R27-NEW-MCQ-40-20261018");
assert.equal(r.status,"RECEIPT_IMPORTED__R28_PENDING_S1_PROOF_AND_OWNER");
assert.equal(r.original_notebooklm_pass_claims_preserved,40);
assert.equal(r.receipt_revision_claims,24);
assert.equal(r.out_of_scope_original_claims_preserved,16);
assert.equal(r.correction_rows.length,24);
assert.equal(new Set(r.correction_rows.map(v=>v.question_id)).size,24);
assert.equal(r.r28_provisional_intake.verdicts.length,40);
assert.equal(r.r28_provisional_diagnostic.covered,40);
assert.deepEqual(r.r28_provisional_diagnostic.counts,{
 PASS:0,REVISE:24,INSUFFICIENT_EVIDENCE:0,NOT_REVIEWED:16
});
assert.equal(r.r28_provisional_diagnostic.state,"REVIEW_INCOMPLETE");
assert.equal(r.r28_provisional_diagnostic.non_pass_items.length,24);
assert.equal(r.r28_provisional_diagnostic.academic_pass_authorized,false);
assert.equal(r.r28_provisional_diagnostic.production_skill_counter_authorized,false);
assert.equal(r.r28_provisional_diagnostic.historical_regrade_or_backfill_authorized,false);
assert(r.correction_rows.every(x=>x.claim_status===
 "REPORTED_CITATION_REVISION_NOT_INDEPENDENTLY_S1_VERIFIED"));
assert(r.correction_rows.every(x=>x.content_edits_authorized===false));
assert(r.r28_provisional_intake.verdicts.every(x=>
 x.source_record_sha256.length===64&&x.source_git_blob_sha.length===40));
const changed=r.r28_provisional_intake.verdicts.filter(x=>x.verdict==="REVISE");
const untouched=r.r28_provisional_intake.verdicts.filter(x=>x.verdict==="NOT_REVIEWED");
assert(changed.every(x=>x.source_references.length===0 &&
 x.math_correct===null&&x.unique_correct_option===null&&
 x.distractors_valid===null&&x.explanation_correct===null&&
 x.proposed_fix.includes("Citation metadata only")));
assert(untouched.every(x=>x.issue===null&&x.proposed_fix===null));
assert.equal(changed.filter(x=>x.question_id.startsWith("NUM02V1_12")).length,9);
assert.deepEqual(new Set(changed.map(x=>x.grade)),new Set([6,7,9]));
assert.equal(changed.filter(x=>x.question_id.startsWith("QUA12V1")).length,3);
for(const [name,value] of Object.entries(r.limits))assert.equal(value,false,name);
const mutated=Buffer.concat([raw,Buffer.from(" ")]);
assert.throws(()=>getReceipt({readBytes:p=>p===ERRATUM?mutated:fs.readFileSync(p)}),
 /R30_RECEIPT_WAS_ALTERED/);
assert.throws(()=>intake({readBytes:p=>p===ERRATUM?mutated:fs.readFileSync(p)}),
 /R30_RECEIPT_WAS_ALTERED/);
const js=fs.readFileSync("scripts/prototypes/math-v2-r30-notebooklm-s1-erratum-intake.js","utf8");
assert(!/localStorage|indexedDB|sessionStorage|fetch\s*\(|sendBeacon/.test(js));
assert(!/writeFile|appendFile|unlinkSync|renameSync|rmSync/.test(js));
assert(!fs.readFileSync("mkdocs.yml","utf8").includes("math-v2-r30-notebooklm-s1-erratum-intake"));
assert(!fs.readFileSync("docs/assets/javascripts/practice-engine-v2.js","utf8")
 .includes("math-v2-r30-notebooklm-s1-erratum-intake"));
console.log("PASS R30: 24 immutable NotebookLM S1 revision claims and 16 untouched R29 claims, 40/40 SHA-linked R28 provisional gate; no academic, Skill or learner authorization");
console.log(JSON.stringify({summary:r.r28_provisional_diagnostic.counts,
 reported_corrections:getReceipt().group_counts,protected:r.limits}));
