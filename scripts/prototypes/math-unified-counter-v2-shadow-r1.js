/* Phase 4 R2 experimental ledger reducer. Not loaded by learner pages.
 * New v2 events only: never replay inferred historical Practice counters. */
"use strict";
const assertPlain=o=>o!==null&&typeof o==="object"&&!Array.isArray(o);
const TYPES=Object.freeze({
  ANSWER:"answer_attempt",
  READINESS:"readiness_submission",
  WRITTEN:"written_self_check",
  REMEDIATION:"remediation_action",
  EXAM:"exam_submission"
});
const classes=Object.freeze({
  [TYPES.ANSWER]:"FORMATIVE",
  [TYPES.READINESS]:"INDEPENDENT_ASSESSMENT",
  [TYPES.WRITTEN]:"SELF_REPORTED",
  [TYPES.REMEDIATION]:"REMEDIATION",
  [TYPES.EXAM]:"EXAM_ASSESSMENT"
});
function validate(e){
  if(!assertPlain(e)||e.schema!=="math-evidence-event-v2"||
     typeof e.event_id!=="string"||!/^[A-Za-z0-9_-]{6,128}$/.test(e.event_id)||
     typeof e.learner_scope!=="string"||!/^[A-Za-z0-9_-]{3,128}$/.test(e.learner_scope)||
     typeof e.item_id!=="string"||e.item_id.length<1||e.item_id.length>160||
     !Object.values(TYPES).includes(e.kind)||
     e.evidence_class!==classes[e.kind]||
     typeof e.occurred_at!=="string"||!Number.isFinite(Date.parse(e.occurred_at)))
    throw Error("INVALID_CANONICAL_V2_EVENT");
  if(e.kind===TYPES.ANSWER&&typeof e.correct!=="boolean")
    throw Error("FORMATIVE_REQUIRES_BOOLEAN_CORRECT");
  if(e.kind!==TYPES.ANSWER&&Object.hasOwn(e,"correct"))
    throw Error("NO_CROSS_LANE_GRADING");
  return e;
}
function summarize(input,{learner_scope}={}){
  if(!Array.isArray(input))throw Error("EVENTS_MUST_BE_ARRAY");
  const ids=new Map(),result={
    schema:"math-unified-counter-v2-shadow-r1",
    mode:"SHADOW_ONLY",
    learner_scope:learner_scope||null,
    formative:{answers:0,correct:0},
    readiness:{submissions:0},
    written:{self_checks:0,assessment_credit:0},
    remediation:{actions:0},
    exams:{submissions:0},
    accepted:0,duplicates:0,conflicts:0,
    legacy_imported:false
  };
  for(const raw of input){
    const e=validate(raw);
    if(learner_scope&&e.learner_scope!==learner_scope)throw Error("CROSS_LEARNER_EVENT");
    const previous=ids.get(e.event_id);
    if(previous!==undefined){
      if(previous!==JSON.stringify(e))throw Error("CONFLICTING_EVENT_ID_"+e.event_id);
      result.duplicates++;continue;
    }
    ids.set(e.event_id,JSON.stringify(e));
    result.accepted++;
    switch(e.kind){
      case TYPES.ANSWER:
        result.formative.answers++;
        if(e.correct)result.formative.correct++;
        break;
      case TYPES.READINESS:result.readiness.submissions++;break;
      case TYPES.WRITTEN:result.written.self_checks++;break;
      case TYPES.REMEDIATION:result.remediation.actions++;break;
      case TYPES.EXAM:result.exams.submissions++;break;
    }
  }
  return result;
}
module.exports=Object.freeze({TYPES,classes,validate,summarize});
