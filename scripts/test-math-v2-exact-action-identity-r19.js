#!/usr/bin/env node
"use strict";
const assert=require("node:assert/strict");
const fs=require("node:fs");
const vm=require("node:vm");
const {webcrypto}=require("node:crypto");
const source=fs.readFileSync(
  "scripts/prototypes/math-v2-exact-action-identity-r19.js","utf8"
);
const site=fs.readFileSync("mkdocs.yml","utf8");
const practice=fs.readFileSync("docs/assets/javascripts/practice-engine-v2.js","utf8");
assert(!site.includes("math-v2-exact-action-identity-r19"));
assert(!practice.includes("MathV2ExactActionIdentityR19"));
assert(source.includes("may_commit_r16:false"));
assert(source.includes("may_write_v1:false"));
const window={};
vm.runInNewContext(source,{window,crypto:webcrypto,TextEncoder});
const api=window.MathV2ExactActionIdentityR19;
const scope="QA_R16_R19_NODE_CASE",version="a".repeat(64);
const sample={
  learner_scope:scope,session_id:"SESSION_123456",presentation_id:"PRES_000001",
  action_id:"ACTION_000001",item_id:"FAC06V1_025",source_sha256:version,
  option_id:"CANONICAL_OPTION_A",correct:false
};
(async()=>{
 assert.equal((await api.create()).enabled,false);
 await assert.rejects(api.create({enabled:true,learner_scope:"REAL_PERSON"}),/R19_QA_SCOPE_ONLY/);
 const r=await api.create({enabled:true,learner_scope:scope});
 const a=await r.capture(sample);
 const again=await r.capture({...sample});
 assert.equal(a.submission_key,again.submission_key);
 assert.equal(a.answer_fingerprint,again.answer_fingerprint);
 assert.equal(a.submission_key.length,71);
 assert.equal(a.authorization,"NONE_READ_ONLY_CONTRACT");
 assert.equal(a.persisted,false);
 assert.equal(r.compare(a,again).status,"EXACT_CAPTURE_MATCH_BUT_NOT_DURABLE");

 // Critically: two different wrong answers have identical boolean correctness.
 // R16 alone cannot distinguish them, but R19's explicit option ID must.
 const anotherWrong=await r.capture({...sample,option_id:"CANONICAL_OPTION_B"});
 assert.equal(a.submission_key,anotherWrong.submission_key);
 assert.notEqual(a.answer_fingerprint,anotherWrong.answer_fingerprint);
 assert.equal(r.compare(a,anotherWrong).status,"CHANGED_OPTION_OR_ANSWER_CONFLICT");
 assert.equal(r.compare(a,anotherWrong).may_commit_r16,false);
 const changedCorrect=await r.capture({...sample,correct:true});
 assert.equal(r.compare(a,changedCorrect).status,"CHANGED_OPTION_OR_ANSWER_CONFLICT");
 const changedAction=await r.capture({...sample,action_id:"ACTION_000002"});
 assert.equal(changedAction.submission_key,a.submission_key);
 assert.equal(r.compare(a,changedAction).status,"ACTION_OR_CONTEXT_CONFLICT");
 const changedSource=await r.capture({...sample,source_sha256:"b".repeat(64)});
 assert.equal(r.compare(a,changedSource).status,"SOURCE_OR_ITEM_CONFLICT");
 const secondPresentation=await r.capture({...sample,presentation_id:"PRES_000002"});
 assert.notEqual(secondPresentation.submission_key,a.submission_key);
 assert.equal(r.compare(a,secondPresentation).status,"DIFFERENT_PRESENTATION_NOT_A_RETRY");
 const otherSession=await r.capture({...sample,session_id:"SESSION_999999"});
 assert.notEqual(otherSession.submission_key,a.submission_key);
 const newQuestion=await r.capture({...sample,item_id:"FAC06V1_026"});
 assert.equal(newQuestion.submission_key,a.submission_key);
 assert.equal(r.compare(a,newQuestion).status,"SOURCE_OR_ITEM_CONFLICT");
 await assert.rejects(r.capture({...sample,option_id:""}),/R19_INVALID_EXACT_ACTION/);
 await assert.rejects(r.capture({...sample,source_sha256:"UNKNOWN"}),/R19_INVALID_EXACT_ACTION/);
 await assert.rejects(r.capture({...sample,learner_scope:"QA_R16_R19_OTHER"}),/R19_SCOPE_MISMATCH/);

 const weakEvent={kind:"answer_attempt",item_id:sample.item_id,
   learner_scope:scope,correct:false};
 assert.equal(r.compareR16Evidence(a,weakEvent).status,
   "R16_LACKS_EXACT_ACTION_PROVENANCE");
 assert.equal(r.compareR16Evidence(a,weakEvent).may_activate,false);
 assert.equal(r.compareR16Evidence(a,{...weakEvent,item_id:"DIFFERENT"}).status,
   "EVIDENCE_MISMATCH");

 // This is a read-only CONTRACT proof: no IndexedDB or localStorage API given.
 assert(!/localStorage\.|indexedDB\.open|fetch\(|XMLHttpRequest|navigator\.sendBeacon/.test(source));
 console.log("PASS R19 exact answer/session/presentation/action identity; same-wrong-choice conflict; no v1 write or R16 authorization");
})().catch(e=>{console.error(e);process.exitCode=1});
