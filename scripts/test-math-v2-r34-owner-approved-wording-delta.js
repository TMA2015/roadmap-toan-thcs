#!/usr/bin/env node
"use strict";
const assert=require("node:assert/strict"),fs=require("node:fs");
const {audit,FILE,FINGERPRINT}=require("./prototypes/math-v2-r34-owner-approved-wording-delta.js");
const {R34_WORDING,PINS,inspect:inspectR27,historicalBytesForR27}=
 require("./prototypes/math-v2-r27-mcq-source-review.js");
const {gitBlob}=require("./prototypes/math-v2-source-locked-skill-audit-r22.js");
const a=audit();
assert.equal(a.schema,"math-r34-owner-approved-wording-delta-v1");
assert.equal(a.item_id,"QUA12V1_121");
assert.equal(a.old_git_blob_sha,"22c73f3d24020a7db1ead9b8b90c6488c8379ce0");
assert.equal(a.approved_live_git_blob_sha,"89b50fb32c6ebd04d57e41f6c2d5ae1f70384c08");
assert.equal(a.answer_index,0);
assert.equal(a.current_record_sha256.length,64);
assert.equal(a.old_record_sha256.length,64);
assert.notEqual(a.old_record_sha256,a.current_record_sha256);
assert.equal(a.all_4_options_unchanged,true);
assert.equal(a.other_2_questions_unchanged,true);
assert.equal(a.all_40_historical_R27_ids_source_locked,true);
assert.equal(a.content_wording_approved_by_owner,true);
assert.equal(a.revised_item_academic_pass_after_change,false);
assert.equal(a.CT12_primary_curriculum_layer_approved,false);
assert.equal(a.student_history_changed,false);
assert.equal(a.production_deployment_authorized,false);
assert.equal(a.skills_readiness_mastery_or_credit_changed,false);
const raw=fs.readFileSync(FILE);
const old=historicalBytesForR27(R34_WORDING.source_file,raw).bytes;
assert.equal(gitBlob(old),PINS[R34_WORDING.source_file]);
assert.equal(gitBlob(raw),R34_WORDING.live_blob_sha);
const current=JSON.parse(raw);
const before=JSON.parse(old);
assert.deepEqual(current.questions[0].options,before.questions[0].options);
assert.equal(current.questions[0].answer,before.questions[0].answer);
assert.deepEqual(current.questions.slice(1),before.questions.slice(1));
assert.equal(current.questions[0].question,R34_WORDING.approved);
assert.equal(FINGERPRINT(current.questions[0]),a.current_record_sha256);
assert.equal(FINGERPRINT(before.questions[0]),a.old_record_sha256);
const baseline=inspectR27();
assert.equal(baseline.rows.length,40);
assert.equal(baseline.rows.find(x=>x.id==="QUA12V1_121").question.question,R34_WORDING.old);
// Negative regression: altered options, other question, formatting, or new wording are not approved.
const simulate=mutated=>audit({readBytes:p=>p===FILE?
 Buffer.from(mutated,"utf8"):fs.readFileSync(p)});
let hacked=raw.toString("utf8").replace('"x²−3x−4=0"','"x²−3x−5=0"');
assert.throws(()=>simulate(hacked),/R34_LIVE_BLOB_CHANGED/);
hacked=raw.toString("utf8").replace(R34_WORDING.approved,R34_WORDING.approved+"!");
assert.throws(()=>simulate(hacked),/R34_LIVE_BLOB_CHANGED/);
hacked=raw.toString("utf8")+" ";
assert.throws(()=>simulate(hacked),/R34_LIVE_BLOB_CHANGED/);
const src=fs.readFileSync("scripts/prototypes/math-v2-r34-owner-approved-wording-delta.js","utf8");
assert(!/localStorage|indexedDB|sessionStorage|sendBeacon|fetch\s*\(/.test(src));
assert(!/writeFile|appendFile|renameSync|unlinkSync|rmSync/.test(src));
const engine=fs.readFileSync("docs/assets/javascripts/practice-engine-v2.js","utf8");
assert(!engine.includes("math-v2-r34-owner-approved-wording-delta"));
console.log("PASS R34: exact approved question string, old/new blob source-lock, "+ 
 "old/new record SHA-256, four unchanged options, unchanged siblings/history, no academic or learner credit");
console.log(JSON.stringify({id:a.item_id,oldBlob:a.old_git_blob_sha,newBlob:a.approved_live_git_blob_sha,
 oldRecord:a.old_record_sha256,newRecord:a.current_record_sha256}));
