#!/usr/bin/env node
"use strict";
const assert=require("node:assert/strict"),fs=require("node:fs"),vm=require("node:vm");
const {webcrypto}=require("node:crypto");
const {audit,bindDisplayOptions,selectByAuthoredOptionId,idFor,PROPOSAL,PIN}=
 require("./prototypes/math-v2-r37-static-option-identity-review.js");
const {gitBlob}=require("./prototypes/math-v2-source-locked-skill-audit-r22.js");
const result=audit();
assert.equal(gitBlob(fs.readFileSync(PROPOSAL)),PIN);
assert.equal(result.source_locked_items,40);
assert.equal(result.proposed_authored_option_ids,160);
assert.equal(result.unique_option_ids,160);
assert.equal(result.R34_live_stem_preserved,1);
assert.equal(result.initial_display_shuffle_id_binding_verified,true);
assert.equal(result.canonical_source_sha256_per_item_in_R19_format,true);
assert.equal(result.option_ids_authored_and_approved_in_live_bank,false);
assert.equal(result.production_presentation_option_ids_verified,false);
assert.equal(result.runtime_identity_writer_authorized,false);
assert.equal(result.source_reviewed_family_assignment_authorized,false);
assert.equal(result.skill_readiness_mastery_allowed,false);
assert.equal(result.historical_learner_backfill_allowed,false);
assert.equal(result.entries.length,40);
assert.equal(result.entries.flatMap(x=>x.authored_choices).length,160);
assert(result.entries.every(x=>/^[0-9a-f]{64}$/.test(x.current_source_sha256)));
const first=result.entries[0];
assert.equal(first.authored_choices[0].option_id,idFor(first.item_id,0));
assert.throws(()=>bindDisplayOptions(first,[0,0,1,2]),/R37_BAD_DISPLAY_PERMUTATION/);
assert.throws(()=>bindDisplayOptions(first,[0,1,2]),/R37_BAD_DISPLAY_PERMUTATION/);
assert.throws(()=>selectByAuthoredOptionId(first,"OPT_NOT_REAL_V1_S1"),/R37_UNKNOWN_OR_DUPLICATE_OPTION_ID/);
const permutations=[
 [0,1,2,3],[2,0,3,1],[3,2,1,0],[1,3,0,2],[1,0,2,3],[3,1,2,0]];
for(const entry of result.entries){
 for(const permutation of permutations){
  const rendered=bindDisplayOptions(entry,permutation);
  for(const shown of rendered){
   const target=selectByAuthoredOptionId(entry,shown.option_id);
   assert.equal(target.correct,shown.correct);
   assert.equal(target.source_sha256,entry.current_source_sha256);
   assert.equal(entry.authored_choices.some(x=>x.option_id===shown.option_id&&x.text===shown.text),true);
  }
  assert.equal(rendered.filter(x=>x.correct).length,1);
 }
}
const original=JSON.parse(fs.readFileSync(PROPOSAL,"utf8"));
const changedText=structuredClone(original);
changedText.entries[0].authored_choices[0].text="UNREVIEWED_COPY_EDIT";
assert.throws(()=>audit({override:changedText}),/R37_OPTION_BINDING_CHANGED_/);
const changedSlot=structuredClone(original);
changedSlot.entries[0].authored_choices[1].authored_slot=3;
assert.throws(()=>audit({override:changedSlot}),/R37_OPTION_BINDING_CHANGED_/);
const forgedApproval=structuredClone(original);
forgedApproval.owner_option_identity_approved=true;
assert.throws(()=>audit({override:forgedApproval}),/R37_UNAPPROVED_IDENTITY_AUTHORITY/);
const forgedRuntime=structuredClone(original);
forgedRuntime.production_r19_event_writer_authorized=true;
assert.throws(()=>audit({override:forgedRuntime}),/R37_UNAPPROVED_IDENTITY_AUTHORITY/);
const collision=structuredClone(original);
collision.entries[0].authored_choices[2].option_id=collision.entries[0].authored_choices[0].option_id;
assert.throws(()=>audit({override:collision}),/R37_OPTION_BINDING_CHANGED_/);
const editedSource=structuredClone(original);
editedSource.entries[0].historical_bank_git_blob="0".repeat(40);
assert.throws(()=>audit({override:editedSource}),/R37_UNPINNED_ITEM_/);

// Explicit R19 contract bridge in a sandboxed QA-only window; nothing persisted.
const r19Code=fs.readFileSync("scripts/prototypes/math-v2-exact-action-identity-r19.js","utf8");
const window={};
vm.runInNewContext(r19Code,{window,crypto:webcrypto,TextEncoder});
(async()=>{
 const api=window.MathV2ExactActionIdentityR19;
 const capture=await api.create({enabled:true,learner_scope:"QA_R16_R19_R37_AUDIT"});
 const shuffled=bindDisplayOptions(first,[2,0,3,1]);
 const correct=selectByAuthoredOptionId(first,shuffled[1].option_id);
 const incorrect=selectByAuthoredOptionId(first,shuffled[0].option_id);
 const common={learner_scope:"QA_R16_R19_R37_AUDIT",session_id:"SESSION_R37_001",
  presentation_id:"PRESENT_R37_001",action_id:"ANSWER_R37_001",
  item_id:first.item_id};
 const ok=await capture.capture({...common,...correct});
 const no=await capture.capture({...common,...incorrect});
 assert.equal(ok.persisted,false);
 assert.equal(ok.authorization,"NONE_READ_ONLY_CONTRACT");
 assert.equal(ok.submission_key,no.submission_key);
 assert.notEqual(ok.answer_fingerprint,no.answer_fingerprint);
 assert.equal(capture.compare(ok,no).status,"CHANGED_OPTION_OR_ANSWER_CONFLICT");
 assert.equal(capture.compare(ok,no).may_commit_r16,false);
 const retry=await capture.capture({...common,...correct});
 assert.equal(capture.compare(ok,retry).status,"EXACT_CAPTURE_MATCH_BUT_NOT_DURABLE");
 assert.equal(capture.compare(ok,retry).may_write_v1,false);
 const src=fs.readFileSync("scripts/prototypes/math-v2-r37-static-option-identity-review.js","utf8");
 assert(!/localStorage|indexedDB|sessionStorage|sendBeacon|writeFile|appendFile|renameSync|unlinkSync/.test(src));
 console.log("PASS R37: 40 pinned records / 160 provisional option IDs, shuffle-safe R19 QA capture, no owner identity or learner credit");
})().catch(e=>{console.error(e);process.exitCode=1;});
