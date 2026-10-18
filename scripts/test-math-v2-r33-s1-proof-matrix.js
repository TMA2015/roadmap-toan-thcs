#!/usr/bin/env node
"use strict";
const assert=require("node:assert/strict"),fs=require("node:fs");
const {audit,TARGETS,FLAGGED,RECEIPT,PIN}=require("./prototypes/math-v2-r33-s1-proof-matrix.js");
const a=audit();
assert.equal(a.schema,"math-v2-r33-provisional-24-row-S1-evidence-matrix-v1");
assert.equal(a.input_rows,24);
assert.equal(a.flagged_priority_ids,16);
assert.equal(a.residual_primary_S1_ids,8);
assert.equal(a.academic_S1_accepted,0);
assert.equal(a.source_receipt_pin,PIN);
assert.equal(a.source_R27_originals_verified,true);
assert.equal(a.reviewer_R32_pass_claims_not_imported,true);
assert.deepEqual(a.rows.map(r=>r.question_id),TARGETS);
assert.deepEqual(a.rows.filter(r=>r.audit_priority.startsWith("P1"))
 .map(r=>r.question_id),FLAGGED);
assert(a.rows.every(r=>r.source_git_blob_sha.length===40&&r.exact_record_sha256.length===64));
assert(a.rows.every(r=>!r.primary_S1_verified&&
 r.final_citation_verdict==="INSUFFICIENT_EVIDENCE"&&
 r.approved_curriculum_layer===null&&
 !r.academic_pass_authorized&&!r.production_skill_counter_authorized&&!r.mastery_credit_authorized));
const original=JSON.parse(fs.readFileSync(RECEIPT,"utf8"));
const modified=structuredClone(original);
modified.observations[1].question_id=modified.observations[0].question_id;
assert.throws(()=>audit({override:modified}),/R33_PRIORITY_SET_CHANGED_OR_DUPLICATE/);
const promoted=structuredClone(original);
promoted.owner_academic_approval=true;
assert.throws(()=>audit({override:promoted}),/R33_UNSAFE_AUTHORIZATION_OR_SOURCE_CHANGE/);
const fakeS1=structuredClone(original);
fakeS1.observations[0].primary_S1_page_scan_verified=true;
assert.throws(()=>audit({override:fakeS1}),/R33_INVALID_OBSERVATION_OR_FAKE_S1/);
const fakeVerdict=structuredClone(original);
fakeVerdict.observations[0].academic_verdict="PASS";
assert.throws(()=>audit({override:fakeVerdict}),/R33_INVALID_OBSERVATION_OR_FAKE_S1/);
const src=fs.readFileSync("scripts/prototypes/math-v2-r33-s1-proof-matrix.js","utf8");
assert(!/localStorage|indexedDB|sessionStorage|sendBeacon/.test(src));
assert(!/writeFile|appendFile|unlinkSync|renameSync|rmSync/.test(src));
assert(!fs.readFileSync("mkdocs.yml","utf8").includes("math-v2-r33-s1-proof-matrix.js"));
assert(!fs.readFileSync("docs/assets/javascripts/practice-engine-v2.js","utf8")
 .includes("math-v2-r33-s1-proof-matrix.js"));
console.log("PASS R33: 24/24 IDs source-locked; 16 priority S2 flags, 8 routine S1 checks; "+
 "zero academic approval and learner mutation");
