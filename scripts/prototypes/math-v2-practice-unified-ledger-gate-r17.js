/* Math Phase 4 R17: injected QA-only bridge from the real R15 Practice
 * journal-first click to R16's SINGLE database (intent + event + outbox).
 * Never loaded by MkDocs/app. Real learner progress remains legacy v1.
 */
(() => {
  "use strict";
  if (window.top !== window || !/^https?:$/.test(location.protocol)) return;
  const cfg=window.__MATH_R17_QA_CONFIG__;
  if (!cfg?.enabled) return;
  const scope=cfg.learner_scope;
  if (!/^QA_R16_R17_[A-Za-z0-9_-]{2,90}$/.test(scope||""))
    throw Error("R17_QA_SCOPE_ONLY");
  if (typeof window.MathV2UnifiedLedgerR16?.create!=="function")
    throw Error("R17_R16_LEDGER_REQUIRED");
  const api=window.MathV2UnifiedLedgerR16;
  const ledger=api.create({learner_scope:scope,enabled:true});
  let calls=0,commits=0,failures=0;
  const accept=async({submission_key,question_id,correct}={})=>{
    calls++;
    if (!/^QA_R15_[a-f0-9]{32}$/.test(submission_key||"")||
        typeof question_id!=="string"||!question_id||
        question_id.length>160||typeof correct!=="boolean")
      throw Error("R17_INVALID_PRACTICE_CAPTURE");
    const db=await ledger;
    const data=await db.read();
    // The existing Practice session generates a fresh token for a fresh
    // click; an interrupted QA session after reload must resume an unresolved
    // intent instead of creating another event ID. Reject ambiguous states.
    const pending=data.intents.filter(x=>x.state==="STAGED" &&
      x.kind==="answer_attempt" && x.item_id===question_id);
    if(pending.some(x=>x.correct!==correct)||pending.length>1)
      return {state:"NOT_SAVED",saved:false,reason:"R17_PENDING_ANSWER_CONFLICT"};
    const token=pending.length===1?pending[0].submission_key:submission_key;
    const staged=await db.stage({
      submission_key:token,item_id:question_id,kind:"answer_attempt",correct
    });
    try{
      commits++;
      const result=await db.commit(token,{
        simulateAbort:(cfg.failNext>0 && !!cfg.failNext--)
      });
      return {...result,submission_key:token,event_id:staged.intent.event_id};
    }catch(err){
      failures++;
      return {state:"NOT_SAVED",saved:false,reason:String(err?.message||err),
        submission_key:token,event_id:staged.intent.event_id};
    }
  };
  window.MathV2PracticeCommitGateR15=Object.freeze({
    enabled:true,accept,
    qaPending:async()=> (await ledger).read().then(x=>x.intents.filter(v=>v.state==="STAGED")),
    qaSnapshot:async()=> (await ledger).summary(),
    qaRead:async()=> (await ledger).read(),
    qaExport:async()=> (await ledger).exportBackup(),
    qaImport:async(snapshot,opts)=> (await ledger).restore(snapshot,opts),
    qaDiagnostics:()=>({calls,commits,failures,failNext:cfg.failNext||0})
  });
})();
