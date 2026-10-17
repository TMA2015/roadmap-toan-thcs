/* R15: Injected QA-only gate for the REAL Practice MCQ click lifecycle.
 * The deployed student pages do not include this bridge or V2 writer scripts.
 * In QA-enabled mode, journal commit precedes legacy Practice scoring/save.
 */
(() => {
  "use strict";
  if(window.top!==window||!/^https?:$/.test(location.protocol))return;
  const config=window.__MATH_R15_QA_CONFIG__;
  if(!config?.enabled)return;
  const scope=config.learner_scope;
  if(!/^QA_R15_[A-Za-z0-9_-]{2,100}$/.test(scope||""))throw Error("R15_QA_SCOPE_ONLY");
  if(typeof window.MathV2SubmissionIntentR13?.create!=="function"||
     typeof window.MathV2JournalFirstR8?.create!=="function")
    throw Error("R15_DEPENDENCIES_MISSING");
  let captureCalls=0,commitCalls=0;
  const sdk=window.MathV2SubmissionIntentR13.create({
    enabled:true,learner_scope:scope,
    createWriter:async args=>{
      const writer=await window.MathV2JournalFirstR8.create(args);
      return Object.freeze({
        submit:async event=>{
          commitCalls++;
          if(config.failNext>0){
            config.failNext--;
            return {state:"NOT_SAVED",saved:false,reason:"R15_SIMULATED_JOURNAL_FAILURE"};
          }
          return writer.submit(event);
        },
        close:()=>writer.close()
      });
    }
  });
  const accept=async({submission_key,question_id,correct}={})=>{
    captureCalls++;
    if(typeof submission_key!=="string"||!/^QA_R15_[a-f0-9]{32}$/.test(submission_key)||
       typeof question_id!=="string"||!question_id||
       typeof correct!=="boolean")throw Error("R15_INVALID_CAPTURE");
    const client=await sdk;
    const pending=await client.pending();
    const old=pending.find(x=>x.kind==="answer_attempt"&&x.item_id===question_id);
    if(old && old.correct!==correct){
      return {state:"NOT_SAVED",saved:false,reason:"PENDING_DIFFERENT_ANSWER"};
    }
    // If a page reload lost the in-memory key, recover the old token for
    // the same unresolved question+answer instead of allocating a new event.
    const token=old?.submission_key||submission_key;
    const staged=await client.stage({submission_key:token,item_id:question_id,
      kind:"answer_attempt",correct});
    const result=await client.commit(token);
    return {...result,submission_key:token,event_id:staged.intent.event_id};
  };
  const snapshot=async()=>{
    const journal=await window.MathV2JournalR6.createCanary({learner_scope:scope});
    try{return await journal.snapshot();}finally{journal.close();}
  };
  window.MathV2PracticeCommitGateR15=Object.freeze({
    enabled:true,accept,
    qaPending:async()=>(await sdk).pending(),
    qaSnapshot:snapshot,
    qaRetryPending:async()=>{
      const client=await sdk,items=await client.pending(),results=[];
      for(const x of items)results.push(await client.commit(x.submission_key));
      return results;
    },
    qaDiagnostics:()=>({captureCalls,commitCalls,failNext:config.failNext||0})
  });
})();
