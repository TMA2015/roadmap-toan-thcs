/* Math Phase 4 R13 — QA-only retry-safe submission intent for R8 journal-first.
 * No real learner-page imports, no use of original localStorage, no migration.
 * The intent DB and R6 journal are separate transactions by design: replay
 * with exactly the same event_id recovers after a crash between the writes.
 */
(() => {
  "use strict";
  const DB="math-v2-qa-submission-intents-r13", STORE="intents", VALID=/^[A-Za-z0-9_-]{6,128}$/;
  const validScope=s=>typeof s==="string"&&/^[A-Za-z0-9_-]{3,128}$/.test(s);
  const validId=s=>typeof s==="string"&&VALID.test(s);
  const driver=window.MathV2JournalFirstR8;
  const copy=v=>JSON.parse(JSON.stringify(v));
  function checkInput(input,scope){
    if(!input||typeof input!=="object"||Array.isArray(input)||
       !validId(input.submission_key)||typeof input.item_id!=="string"||
       !input.item_id||input.item_id.length>160||
       !["answer_attempt","readiness_submission","written_self_check"].includes(input.kind)||
       (input.kind==="answer_attempt"?typeof input.correct!=="boolean":Object.hasOwn(input,"correct")))
      throw Error("INVALID_R13_INTENT");
    // This checks the exact compatibility of an event with the R8 contract.
    if(typeof driver?.makeEvent!=="function")throw Error("R8_DRIVER_REQUIRED");
    const synthetic={event_id:"R13_VALIDATION",item_id:input.item_id,
      kind:input.kind,occurred_at:"2026-10-17T00:00:00Z"};
    if(input.kind==="answer_attempt")synthetic.correct=input.correct;
    driver.makeEvent(scope,synthetic);
  }
  const open=()=>new Promise((resolve,reject)=>{
    const req=indexedDB.open(DB,1);
    req.onupgradeneeded=()=>{
      const store=req.result.createObjectStore(STORE,{keyPath:["learner_scope","submission_key"]});
      store.createIndex("scope","learner_scope",{unique:false});
    };
    req.onerror=()=>reject(req.error||Error("R13_IDB_OPEN_FAILED"));
    req.onblocked=()=>reject(Error("R13_IDB_BLOCKED"));
    req.onsuccess=()=>resolve(req.result);
  });
  async function create({enabled=false,learner_scope,createWriter,simulateReceiptFailure=false}={}){
    if(!validScope(learner_scope))throw Error("R13_LEARNER_SCOPE_REQUIRED");
    if(!enabled)return Object.freeze({enabled:false,stage:async()=>({state:"DISABLED",saved:false}),
      commit:async()=>({state:"DISABLED",saved:false}),pending:async()=>[]});
    if(typeof driver?.create!=="function")throw Error("R8_DRIVER_REQUIRED");
    const db=await open();
    const writer=await (createWriter||driver.create)({enabled:true,learner_scope});
    const byKey=key=>new Promise((resolve,reject)=>{
      const tx=db.transaction(STORE,"readonly"),q=tx.objectStore(STORE).get([learner_scope,key]);
      tx.oncomplete=()=>resolve(q.result||null);
      tx.onabort=()=>reject(tx.error||Error("R13_READ_ABORT"));
      tx.onerror=()=>reject(tx.error||Error("R13_READ_ERROR"));
    });
    const stage=input=>{
      checkInput(input,learner_scope);
      return new Promise((resolve,reject)=>{
        const tx=db.transaction(STORE,"readwrite"),store=tx.objectStore(STORE);
        let result=null,reason=null;
        const q=store.get([learner_scope,input.submission_key]);
        q.onsuccess=()=>{
          if(q.result){
            const prior=q.result;
            if(prior.item_id!==input.item_id||prior.kind!==input.kind||
               (prior.kind==="answer_attempt"&&prior.correct!==input.correct)){
              reason=Error("R13_SUBMISSION_KEY_CONFLICT");tx.abort();return;
            }
            result={reused:true,intent:prior};return;
          }
          const intent={
            learner_scope,submission_key:input.submission_key,
            event_id:"R13_"+crypto.randomUUID().replace(/-/g,""),
            item_id:input.item_id,kind:input.kind,
            occurred_at:new Date().toISOString(),state:"STAGED"
          };
          if(input.kind==="answer_attempt")intent.correct=input.correct;
          store.add(intent);
          result={reused:false,intent};
        };
        tx.oncomplete=()=>resolve(copy(result));
        tx.onabort=()=>reject(reason||tx.error||Error("R13_STAGE_ABORT"));
        tx.onerror=()=>{};
      });
    };
    const markSaved=key=>new Promise((resolve,reject)=>{
      const tx=db.transaction(STORE,"readwrite"),store=tx.objectStore(STORE);
      let reason=null;
      const q=store.get([learner_scope,key]);
      q.onsuccess=()=>{
        if(!q.result){reason=Error("R13_MISSING_RECEIPT");tx.abort();return;}
        if(q.result.state!=="SAVED")store.put({...q.result,state:"SAVED"});
      };
      tx.oncomplete=()=>resolve(true);
      tx.onabort=()=>reject(reason||tx.error||Error("R13_RECEIPT_ABORT"));
      tx.onerror=()=>{};
    });
    const commit=async submission_key=>{
      if(!validId(submission_key))throw Error("R13_INVALID_SUBMISSION_KEY");
      const intent=await byKey(submission_key);
      if(!intent)return {state:"MISSING",saved:false};
      const input={event_id:intent.event_id,item_id:intent.item_id,
        kind:intent.kind,occurred_at:intent.occurred_at};
      if(intent.kind==="answer_attempt")input.correct=intent.correct;
      // Only R8 journal transaction completion can set saved=true.
      const result=await writer.submit(input);
      if(!result.saved)return {state:"NOT_SAVED",saved:false,
        event_id:intent.event_id,reason:result.reason||result.state};
      let receipt_persisted=false;
      try{
        if(simulateReceiptFailure)throw Error("R13_SIMULATED_RECEIPT_FAILURE");
        await markSaved(submission_key);
        receipt_persisted=true;
      }catch(_){
        // Source journal is durably committed; replaying after reload yields
        // a duplicate event ID, then retries the receipt without extra credit.
      }
      return {state:"SAVED",saved:true,event_id:intent.event_id,
        duplicate:Boolean(result.duplicate),receipt_persisted};
    };
    const pending=()=>new Promise((resolve,reject)=>{
      const tx=db.transaction(STORE,"readonly"),q=tx.objectStore(STORE).index("scope").getAll(learner_scope);
      tx.oncomplete=()=>resolve(q.result.filter(e=>e.state!=="SAVED").sort((a,b)=>
        a.submission_key.localeCompare(b.submission_key)).map(copy));
      tx.onabort=()=>reject(tx.error||Error("R13_PENDING_ABORT"));
      tx.onerror=()=>reject(tx.error||Error("R13_PENDING_ERROR"));
    });
    return Object.freeze({enabled:true,stage,commit,pending,lookup:byKey,
      close:()=>{writer.close?.();db.close();}});
  }
  window.MathV2SubmissionIntentR13=Object.freeze({create});
})();
