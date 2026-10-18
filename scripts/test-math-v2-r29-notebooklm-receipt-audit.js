#!/usr/bin/env node
"use strict";
const assert=require("node:assert/strict"),fs=require("node:fs");
const {audit,REPORT,REPORT_SHA,referenceGroups}=
 require("./prototypes/math-v2-r29-notebooklm-receipt-audit.js");
const result=audit();
assert.equal(result.schema,"math-r29-notebooklm-verbatim-claim-reconciliation-r1");
assert.equal(result.original_receipt_sha,REPORT_SHA);
assert.equal(result.packet_id,"MATH-R27-NEW-MCQ-40-20261018");
assert.equal(result.original_verdict,"PASS_CLAIMED_BY_NOTEBOOKLM");
assert.equal(result.current_academic_disposition,"S1_CITATION_CORRECTION_HOLD");
assert.deepEqual(result.summary,{
 matched_ids:40,matched_answer_indexes:40,claimed_pass:40,
 source_citation_holds:24,unflagged_not_independently_cleared:16
});
assert.equal(result.rows.length,40);
assert.equal(new Set(result.rows.map(q=>q.question_id)).size,40);
assert(result.rows.every(q=>q.academic_claim==="NOTEBOOKLM_PASS_CLAIM"));
assert(result.rows.every(q=>q.report_answer_index===q.source_answer_index));
assert(result.rows.every(q=>q.canonical_family_credit_authorized===false));
assert.equal(referenceGroups.length,4);
assert.deepEqual(Object.fromEntries(result.reference_holds.map(x=>[x.code,x.count])),
 {CT02_ROUNDING_S1_PAGE_CORRECTION:12,
 CT02_ABSOLUTE_VALUE_S1_LESSON_CORRECTION:3,
 CT04_POLYNOMIAL_S1_PAGE_CORRECTION:6,
 CT12_PARABOLA_S1_LESSON_CORRECTION:3});
const statusById=new Map(result.rows.map(r=>[r.question_id,r.evidence_status]));
assert.equal(statusById.get("NUM02V1_121"),"S1_CITATION_CORRECTION_HOLD");
assert.equal(statusById.get("NUM02V1_145"),"S1_CITATION_CORRECTION_HOLD");
assert.equal(statusById.get("ALG04V2_133"),"S1_CITATION_CORRECTION_HOLD");
assert.equal(statusById.get("QUA12V1_123"),"S1_CITATION_CORRECTION_HOLD");
assert.equal(statusById.get("NUM02V1_140"),"AWAITING_FINAL_S1_RECONCILIATION");
assert.equal(statusById.get("RAT03V1_121"),"AWAITING_FINAL_S1_RECONCILIATION");
for(const [k,v] of Object.entries(result.authorization))assert.equal(v,false,k);
const raw=fs.readFileSync(REPORT);
assert.throws(()=>audit({readBytes:rel=>rel===REPORT?
 Buffer.concat([raw,Buffer.from(" ")]):fs.readFileSync(rel)}),
 /R29_REVIEW_RECEIPT_SOURCE_CHANGED/);
const changed=Buffer.from(raw);
const s=changed.toString("utf8").replace(
 "ACADEMIC_CONTENT_VERDICT|PASS","ACADEMIC_CONTENT_VERDICT|HOLD");
assert.throws(()=>audit({readBytes:rel=>rel===REPORT?
 Buffer.from(s,"utf8"):fs.readFileSync(rel)}),
 /R29_REVIEW_RECEIPT_SOURCE_CHANGED/);
const prog=fs.readFileSync("scripts/prototypes/math-v2-r29-notebooklm-receipt-audit.js","utf8");
assert(!/localStorage|indexedDB|sessionStorage|fetch\s*\(|sendBeacon/.test(prog));
assert(!/writeFile|appendFile|unlinkSync|renameSync|rmSync/.test(prog));
assert(!fs.readFileSync("mkdocs.yml","utf8").includes("math-v2-r29-notebooklm-receipt-audit"));
assert(!fs.readFileSync("docs/assets/javascripts/practice-engine-v2.js","utf8")
 .includes("math-v2-r29-notebooklm-receipt-audit"));
console.log("PASS R29: original 40 claimed PASS and 40 answer indexes source-match; 24 S1 citation holds; original preserved, no academic/counter cutover");
console.log(JSON.stringify({summary:result.summary,holds:result.reference_holds}));
