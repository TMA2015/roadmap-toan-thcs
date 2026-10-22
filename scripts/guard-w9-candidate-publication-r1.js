#!/usr/bin/env node
"use strict";
// Fail closed before GitHub Pages publication: approved source bank must equal
// declared published count, carry a specific Owner approval, and have NO draft.
const fs=require("node:fs"),assert=require("node:assert/strict");
const data=JSON.parse(fs.readFileSync("docs/assets/data/written-exercises/written-exercise-library-v1.json","utf8"));
const total=data.exercises.length,published=data.published_scope?.exercise_count;
const candidate=data.candidate_scope;
const pending=candidate?.new_exercise_count||0;
const batch=data.published_scope?.batches?.find(x=>x.batch_id==="W9_G6_NUMABS_WRITTEN_20261022");
const receipt=fs.readFileSync("review-packets/math-w9-core-coverage/04_W9_OWNER_RELEASE_APPROVAL_20261022.md","utf8");
const origin=fs.readFileSync("review-packets/math-w9-core-coverage/02_NOTEBOOKLM_W9_S1_RECHECK_OWNER_RECEIPT_20261022.md","utf8");
const check=()=>{
 assert.equal(pending,0,"BLOCKED: unapproved W9 candidate still pending");
 assert(!candidate,"BLOCKED: candidate_scope must be absent after finalized approval");
 assert(Number.isInteger(published)&&published===total&&published>=75,
   "BLOCKED: actual Written bank and published_scope disagree");
 assert.equal(new Set(data.exercises.map(x=>x.exercise_id)).size,total,"BLOCKED: duplicate Written IDs");
 assert.equal(data.exercises[74]?.exercise_id,"WX02-NUM-004","BLOCKED: first 74 canonical sources have shifted");
 assert(batch,"BLOCKED: W9 published batch not found");
 assert.equal(batch.count,1);
 assert.equal(batch.status,"PUBLISHED");
 assert.equal(batch.packet_id,"MATH-W9-CONSOLIDATED-NOTEBOOKLM-ONE-UPLOAD-R1-20261021");
 assert.equal(batch.owner_release_authorization,"OWNER_APPROVED_RELEASE_20261022");
 assert.equal(data.exercises[74].academic_review?.release_gate,"OWNER_RELEASE_APPROVED_20261022");
 assert(receipt.includes("OWNER_DECISION|APPROVE_W9_RELEASE"),
   "BLOCKED: explicit W9 Owner approval receipt is missing");
 assert(receipt.includes("W8_GRADE9_READINESS_RELEASE|NOT_AUTHORIZED"),
   "BLOCKED: W8 Grade9 boundary must remain separate");
 assert(origin.includes("ACADEMIC_OVERALL|PASS")&&origin.includes("AUTHORIZATION|NO_LIVE_RELEASE"),
   "BLOCKED: independent academic receipt must not be rewritten as release approval");
 assert.equal(data.auto_readiness_credit,false);
 assert.equal(data.self_marking_only,true);
};
if(process.argv.includes("--release-check")||process.argv.includes("--deploy")){
 check();
 console.log("PASS W9 approved publication guard: 75+ Writer source entries match published catalog, W9 Owner authorization recorded, no pending candidate or independent Readiness credit.");
}else{
 console.error("Usage: node scripts/guard-w9-candidate-publication-r1.js --release-check | --deploy");
 process.exitCode=2;
}
