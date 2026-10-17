/* Phase4 R6 QA-only. IndexedDB authoritative event journal + outbox in ONE tx.
 * Never loaded by student routes. No legacy store reads or migration.
 */
(() => {
  "use strict";
  const DB="math-v2-qa-journal-r6", EVENTS="events", OUTBOX="outbox";
  const lane=Object.freeze({
    answer_attempt:"FORMATIVE", readiness_submission:"INDEPENDENT_ASSESSMENT",
    written_self_check:"SELF_REPORTED",remediation_action:"REMEDIATION",
    exam_submission:"EXAM_ASSESSMENT"
  });
  const stable=x=>JSON.stringify(x,(_,v)=>v&&typeof v==="object"&&!Array.isArray(v)
    ?Object.fromEntries(Object.entries(v).sort(([a],[b])=>a.localeCompare(b))):v);
  const validate=e=>{
    if(!e||Array.isArray(e)||typeof e!=="object"||e.schema!=="math-evidence-event-v2"||
       !/^[A-Za-z0-9_-]{6,128}$/.test(e.event_id||"")||
       !/^[A-Za-z0-9_-]{3,128}$/.test(e.learner_scope||"")||
       typeof e.item_id!=="string"||!e.item_id||e.item_id.length>160||
       !lane[e.kind]||lane[e.kind]!==e.evidence_class||
       typeof e.occurred_at!=="string"||!Number.isFinite(Date.parse(e.occurred_at))||
       (e.kind==="answer_attempt"?typeof e.correct!=="boolean":Object.hasOwn(e,"correct")))
       throw Error("INVALID_V2_EVENT");
    return e;
  };
  const open=()=>new Promise((resolve,reject)=>{
    let req;
    try{req=indexedDB.open(DB,1);}catch(e){reject(e);return;}
    req.onupgradeneeded=()=>{
      for(const name of [EVENTS,OUTBOX]){
        const s=req.result.createObjectStore(name,{keyPath:["learner_scope","event_id"]});
        s.createIndex("scope","learner_scope",{unique:false});
      }
    };
    req.onerror=()=>reject(req.error||Error("IDB_OPEN_FAILED"));
    req.onblocked=()=>reject(Error("IDB_BLOCKED"));
    req.onsuccess=()=>resolve(req.result);
  });
  async function createCanary({learner_scope,enabled=false}={}){
    if(!/^[A-Za-z0-9_-]{3,128}$/.test(learner_scope||""))throw Error("SCOPE_REQUIRED");
    const db=await open();
    const read=storeName=>new Promise((resolve,reject)=>{
      const tx=db.transaction(storeName,"readonly");
      const q=tx.objectStore(storeName).index("scope").getAll(learner_scope);
      tx.oncomplete=()=>resolve(q.result.sort((a,b)=>a.event_id.localeCompare(b.event_id)));
      tx.onerror=()=>reject(tx.error||Error("IDB_READ_FAILED"));
      tx.onabort=()=>reject(tx.error||Error("IDB_READ_ABORTED"));
    });
    const append=(event,{simulateAbort=false}={})=>{
      if(!enabled)throw Error("R6_FLAG_OFF");
      validate(event);
      if(event.learner_scope!==learner_scope)throw Error("CROSS_LEARNER");
      const copy=JSON.parse(JSON.stringify(event));
      return new Promise((resolve,reject)=>{
        const tx=db.transaction([EVENTS,OUTBOX],"readwrite");
        const eventStore=tx.objectStore(EVENTS),pendingStore=tx.objectStore(OUTBOX);
        let duplicate=false,reason=null;
        const q=eventStore.get([learner_scope,event.event_id]);
        q.onsuccess=()=>{
          if(q.result){
            if(stable(q.result)!==stable(copy)){
              reason=Error("EVENT_ID_CONFLICT");tx.abort();return;
            }
            duplicate=true;return;
          }
          eventStore.add(copy);
          pendingStore.add({learner_scope,event_id:event.event_id,state:"PENDING"});
          if(simulateAbort){reason=Error("SIMULATED_ATOMIC_ABORT");tx.abort();}
        };
        tx.oncomplete=()=>resolve({written:!duplicate,duplicate});
        tx.onabort=()=>reject(reason||tx.error||Error("R6_TX_ABORTED"));
        tx.onerror=()=>{};
      });
    };
    const ack=id=>{
      if(!enabled)throw Error("R6_FLAG_OFF");
      return new Promise((resolve,reject)=>{
        const tx=db.transaction([EVENTS,OUTBOX],"readwrite"),
          events=tx.objectStore(EVENTS),outbox=tx.objectStore(OUTBOX);
        let reason=null,wasPending=false;
        const found=events.get([learner_scope,id]);
        found.onsuccess=()=>{
          if(!found.result){reason=Error("NO_SOURCE_EVENT");tx.abort();return;}
          const q=outbox.get([learner_scope,id]);
          q.onsuccess=()=>{wasPending=Boolean(q.result);if(wasPending)outbox.delete([learner_scope,id]);};
        };
        tx.oncomplete=()=>resolve({wasPending});
        tx.onabort=()=>reject(reason||tx.error||Error("R6_ACK_ABORTED"));
        tx.onerror=()=>{};
      });
    };
    const drain=async process=>{
      if(!enabled)throw Error("R6_FLAG_OFF");
      if(typeof process!=="function")throw Error("PROCESSOR_REQUIRED");
      const queue=await read(OUTBOX);
      let acknowledged=0;
      for(const task of queue){
        const source=await new Promise((resolve,reject)=>{
          const tx=db.transaction(EVENTS,"readonly");
          const q=tx.objectStore(EVENTS).get([learner_scope,task.event_id]);
          tx.oncomplete=()=>resolve(q.result);
          tx.onabort=()=>reject(tx.error||Error("R6_SOURCE_READ_FAILED"));
          tx.onerror=()=>reject(tx.error||Error("R6_SOURCE_READ_FAILED"));
        });
        if(!source)throw Error("OUTBOX_SOURCE_MISSING");
        // Delivery may succeed before acknowledgment fails. Consumer MUST
        // deduplicate using event_id. We intentionally claim AT-LEAST-ONCE.
        await process(JSON.parse(JSON.stringify(source)));
        const result=await ack(task.event_id);
        if(result.wasPending)acknowledged++;
      }
      return {acknowledged};
    };
    const snapshot=async()=>{
      const events=await read(EVENTS),pending=await read(OUTBOX);
      const result={formative:{answers:0,correct:0},readiness:{submissions:0},
        written:{self_checks:0,assessment_credit:0},remediation:{actions:0},
        exams:{submissions:0},events:events.length,pending:pending.length};
      for(const e of events){
        validate(e);
        if(e.kind==="answer_attempt"){result.formative.answers++;if(e.correct)result.formative.correct++;}
        else if(e.kind==="readiness_submission")result.readiness.submissions++;
        else if(e.kind==="written_self_check")result.written.self_checks++;
        else if(e.kind==="remediation_action")result.remediation.actions++;
        else if(e.kind==="exam_submission")result.exams.submissions++;
      }
      return result;
    };
    return Object.freeze({append,ack,drain,snapshot,readEvents:()=>read(EVENTS),
      readPending:()=>read(OUTBOX),close:()=>db.close()});
  }
  window.MathV2JournalR6=Object.freeze({createCanary});
})();
