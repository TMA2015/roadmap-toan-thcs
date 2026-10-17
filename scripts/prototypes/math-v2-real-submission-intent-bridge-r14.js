/* Phase 4 R14 — inject-only observer bridge: real Practice / Readiness saves
 * stage durable R13 intents and optionally commit to R8/R6 QA journals.
 *
 * NOT A PRODUCTION COUNTER: the real legacy localStorage write occurs FIRST.
 * If the tab closes before this asynchronous stage completes, the original
 * legacy save may exist without any R13/R6 event. No cutover is authorized.
 */
(() => {
  "use strict";
  if (window.top!==window || !/^https?:$/.test(location.protocol)) return;
  const config=window.__MATH_R14_QA_CONFIG__;
  if(!config?.enabled) return;
  const scope=config.learner_scope;
  if(!/^[A-Za-z0-9_-]{3,128}$/.test(scope||""))throw Error("R14_SCOPE_REQUIRED");
  if(!window.MathV2SubmissionIntentR13?.create ||
     !window.MathV2JournalR6?.createCanary)throw Error("R14_DEPENDENCIES_MISSING");
  // Only a test-injected, non-production learner scope may be used.
  if(!scope.startsWith("QA_R14_"))throw Error("R14_QA_SCOPE_ONLY");
  const waiting=window.MathV2SubmissionIntentR13.create({enabled:true,learner_scope:scope});
  const inFlight=new Set();
  const problems=[];
  const captured=[];
  const submit=async(kind,item_id,correct)=>{
    if(typeof item_id!=="string"||!item_id||item_id.length>160 ||
       !["answer_attempt","readiness_submission"].includes(kind)||
       (kind==="answer_attempt"&&typeof correct!=="boolean"))
      throw Error("R14_INVALID_SOURCE_SUBMISSION");
    // This UUID denotes one *successful legacy write callback*. It is never
    // regenerated on a subsequent retry of the STAGED QA intent.
    const submission_key="R14_"+crypto.randomUUID().replace(/-/g,"");
    const work=(async()=>{
      const client=await waiting;
      const data={submission_key,item_id,kind};
      if(kind==="answer_attempt")data.correct=correct;
      const stage=await client.stage(data);
      captured.push({submission_key,event_id:stage.intent.event_id,kind,item_id});
      if(config.deferCommit)return {state:"STAGED_ONLY",saved:false,submission_key};
      return await client.commit(submission_key);
    })();
    inFlight.add(work);
    try{return await work;}
    catch(err){problems.push(String(err?.message||err));throw err;}
    finally{inFlight.delete(work);}
  };
  const capturePractice=({question_id,correct}={})=>submit("answer_attempt",question_id,correct);
  const captureReadiness=({assessment_id,submitted_at}={})=>{
    if(typeof submitted_at!=="string"||!Number.isFinite(Date.parse(submitted_at)))
      throw Error("R14_INVALID_READINESS_TIMESTAMP");
    return submit("readiness_submission",assessment_id);
  };
  const clientPending=async()=>(await waiting).pending();
  const retry=async()=>{
    // R5 callbacks are intentionally fail-open. R14 recovery is explicit QA,
    // not an automatic repair of every legacy attempt or a backfill.
    const client=await waiting, queued=await client.pending();
    const results=[];
    for(const event of queued)results.push(await client.commit(event.submission_key));
    return results;
  };
  const counts=async()=>{
    const store=await window.MathV2JournalR6.createCanary({learner_scope:scope});
    try{return await store.snapshot();}finally{store.close();}
  };
  window.MathV2CanaryBridgeR5=Object.freeze({capturePractice,captureReadiness});
  window.MathV2RealIntentBridgeR14=Object.freeze({
    qaPending:clientPending,qaRecover:retry,qaSnapshot:counts,
    qaDiagnostics:()=>({captured:captured.map(x=>({...x})),errors:[...problems],in_flight:inFlight.size}),
    qaIdle:async()=>{while(inFlight.size)await Promise.allSettled([...inFlight]);}
  });
})();
