/* Math Phase 4 R19 — exact answer-action identity CONTRACT, QA only.
 * Pure, read-only identity captures; no persistence, UI hook or v1 replay.
 * A production writer MUST atomically store this entire envelope in the
 * same transaction as the intent/event/outbox (R16 cannot do so yet).
 */
(() => {
  "use strict";
  const SCHEMA="math-v2-r19-action-capture-v1";
  const scopeOk=s=>typeof s==="string" &&
    /^QA_R16_R19_[A-Za-z0-9_-]{2,90}$/.test(s);
  const tokenOk=s=>typeof s==="string" &&
    /^[A-Za-z0-9_-]{6,128}$/.test(s);
  const itemOk=s=>typeof s==="string" &&
    s.length>0 && s.length<=160 && /^[A-Za-z0-9_.:-]+$/.test(s);
  const sourceOk=s=>typeof s==="string" && /^[a-f0-9]{64}$/.test(s);
  const freeze=Object.freeze;
  const digest=async parts=>{
    if(typeof crypto?.subtle?.digest!=="function")
      throw Error("R19_SECURE_CRYPTO_REQUIRED");
    const bytes=new TextEncoder().encode(JSON.stringify(parts));
    const hash=await crypto.subtle.digest("SHA-256",bytes);
    return [...new Uint8Array(hash)].map(v=>v.toString(16).padStart(2,"0")).join("");
  };
  const captureKeys=[
    "learner_scope","session_id","presentation_id","action_id",
    "item_id","source_sha256","option_id","correct"
  ];
  const validate=i=>{
    if(!i||typeof i!=="object"||Array.isArray(i)||
      !scopeOk(i.learner_scope)||!tokenOk(i.session_id)||
      !tokenOk(i.presentation_id)||!tokenOk(i.action_id)||
      !itemOk(i.item_id)||!sourceOk(i.source_sha256)||
      !tokenOk(i.option_id)||typeof i.correct!=="boolean")
      throw Error("R19_INVALID_EXACT_ACTION");
  };
  async function create({enabled=false,learner_scope}={}){
    if(!enabled)return freeze({enabled:false});
    if(!scopeOk(learner_scope))throw Error("R19_QA_SCOPE_ONLY");
    async function capture(input){
      if(input?.learner_scope!==learner_scope)
        throw Error("R19_SCOPE_MISMATCH");
      validate(input);
      // ONE presentation = ONE submission_key. Neither action nor answer
      // is part of the key, so a second click cannot obtain a new key.
      const submission_key="QA_R19_"+await digest([
        SCHEMA,"submission",learner_scope,input.session_id,input.presentation_id
      ]);
      const answer_fingerprint=await digest([
        SCHEMA,"exact_answer",input.item_id,input.source_sha256,
        input.option_id,input.correct
      ]);
      return freeze({
        schema:SCHEMA,...Object.fromEntries(captureKeys.map(k=>[k,input[k]])),
        submission_key,answer_fingerprint,
        persisted:false,authorization:"NONE_READ_ONLY_CONTRACT"
      });
    }
    function compare(prior,next){
      if(!prior||prior.schema!==SCHEMA)
        return freeze({status:"MISSING_DURABLE_RECEIPT",may_write_v1:false,
          may_commit_r16:false});
      if(!next||next.schema!==SCHEMA)
        return freeze({status:"INVALID_NEW_CAPTURE",may_write_v1:false,
          may_commit_r16:false});
      const common={may_write_v1:false,may_commit_r16:false};
      if(prior.learner_scope!==learner_scope||
         next.learner_scope!==learner_scope)
        return freeze({...common,status:"SCOPE_CONFLICT"});
      if(prior.submission_key!==next.submission_key)
        return freeze({...common,status:"DIFFERENT_PRESENTATION_NOT_A_RETRY"});
      if(prior.session_id!==next.session_id||
         prior.presentation_id!==next.presentation_id||
         prior.action_id!==next.action_id)
        return freeze({...common,status:"ACTION_OR_CONTEXT_CONFLICT"});
      if(prior.item_id!==next.item_id||
         prior.source_sha256!==next.source_sha256)
        return freeze({...common,status:"SOURCE_OR_ITEM_CONFLICT"});
      if(prior.option_id!==next.option_id||
         prior.correct!==next.correct||
         prior.answer_fingerprint!==next.answer_fingerprint)
        return freeze({...common,status:"CHANGED_OPTION_OR_ANSWER_CONFLICT"});
      return freeze({...common,status:"EXACT_CAPTURE_MATCH_BUT_NOT_DURABLE"});
    }
    function compareR16Evidence(captureRecord,event){
      if(!captureRecord||captureRecord.schema!==SCHEMA||
         !event||event.kind!=="answer_attempt")
        return freeze({status:"INSUFFICIENT_CANONICAL_EVIDENCE",
          may_activate:false});
      if(captureRecord.item_id!==event.item_id||
         captureRecord.correct!==event.correct||
         captureRecord.learner_scope!==event.learner_scope)
        return freeze({status:"EVIDENCE_MISMATCH",may_activate:false});
      // R16 event lacks option_id, action_id, presentation_id and source hash;
      // matching item/correct cannot prove an exact answer-action binding.
      return freeze({status:"R16_LACKS_EXACT_ACTION_PROVENANCE",
        may_activate:false});
    }
    return freeze({enabled:true,capture,compare,compareR16Evidence});
  }
  window.MathV2ExactActionIdentityR19=freeze({create});
})();
