/* R8 QA-only: single-source-of-truth submission contract.
 * Journal commit must succeed before any "saved" acknowledgement.
 * Not imported by docs/ or real learner routes.
 */
(() => {
  "use strict";
  const api=window.MathV2JournalR6;
  const classes=Object.freeze({
    answer_attempt:"FORMATIVE",
    readiness_submission:"INDEPENDENT_ASSESSMENT",
    written_self_check:"SELF_REPORTED",
    remediation_action:"REMEDIATION",
    exam_submission:"EXAM_ASSESSMENT"
  });
  const scopeOk=v=>typeof v==="string"&&/^[A-Za-z0-9_-]{3,128}$/.test(v);
  const makeEvent=(scope,attempt)=>{
    if(!attempt||typeof attempt!=="object"||Array.isArray(attempt)||
       !/^[A-Za-z0-9_-]{6,128}$/.test(attempt.event_id||"")||
       typeof attempt.item_id!=="string"||!attempt.item_id||
       typeof attempt.occurred_at!=="string"||
       !Number.isFinite(Date.parse(attempt.occurred_at))||
       !classes[attempt.kind]||
       (attempt.kind==="answer_attempt"?typeof attempt.correct!=="boolean":Object.hasOwn(attempt,"correct")))
       throw Error("INVALID_SUBMISSION_INTENT");
    const e={schema:"math-evidence-event-v2",event_id:attempt.event_id,
      learner_scope:scope,item_id:attempt.item_id,kind:attempt.kind,
      evidence_class:classes[attempt.kind],occurred_at:attempt.occurred_at};
    if(attempt.kind==="answer_attempt")e.correct=attempt.correct;
    return e;
  };
  async function create({enabled=false,learner_scope,createJournal}={}){
    if(!scopeOk(learner_scope))throw Error("LEARNER_SCOPE_REQUIRED");
    if(!enabled){
      return Object.freeze({enabled:false,submit:async()=>({
        state:"DISABLED",saved:false,source:"NONE"
      })});
    }
    const factory=createJournal||api?.createCanary;
    if(typeof factory!=="function")throw Error("JOURNAL_DRIVER_REQUIRED");
    let journal=null,openFailure=null;
    try {journal=await factory({learner_scope,enabled:true});}
    catch(e){openFailure=String(e?.message||e);}
    const submit=async intent=>{
      let e;
      try{e=makeEvent(learner_scope,intent);}
      catch(err){return {state:"INVALID",saved:false,reason:String(err.message)};}
      if(openFailure||!journal)return {state:"NOT_SAVED",saved:false,
        reason:"JOURNAL_UNAVAILABLE",source:"NONE"};
      try{
        const result=await journal.append(e);
        // Snapshot is computed from committed immutable events; projection
        // errors must not retroactively change a committed durable save.
        let counts=null;
        try{counts=await journal.snapshot();}catch(_){}
        return {state:"SAVED",saved:true,source:"V2_JOURNAL",
          event_id:e.event_id,duplicate:result.duplicate,
          counters:counts};
      }catch(err){
        return {state:"NOT_SAVED",saved:false,
          reason:String(err?.message||err),source:"NONE"};
      }
    };
    return Object.freeze({enabled:true,submit,
      summary:async()=>journal?journal.snapshot():null,
      pending:async()=>journal?journal.readPending():[],
      close:()=>journal?.close()});
  }
  window.MathV2JournalFirstR8=Object.freeze({create,makeEvent,classes});
})();
