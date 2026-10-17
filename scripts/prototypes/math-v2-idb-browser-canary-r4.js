/* QA-ONLY. Explicit test injection; NEVER imported by a student page.
 * IndexedDB transaction-based v2 event canary, no legacy data access. */
(() => {
  "use strict";
  const DB_NAME="math-v2-qa-idb-r4", STORE="events", BACKUP="math-v2-idb-backup-r4";
  const classFor=Object.freeze({
    answer_attempt:"FORMATIVE",
    readiness_submission:"INDEPENDENT_ASSESSMENT",
    written_self_check:"SELF_REPORTED",
    remediation_action:"REMEDIATION",
    exam_submission:"EXAM_ASSESSMENT"
  });
  const stable=x=>JSON.stringify(x,(_,v)=>v&&typeof v==="object"&&!Array.isArray(v)
    ?Object.fromEntries(Object.entries(v).sort(([a],[b])=>a.localeCompare(b))):v);
  const valid=e=>{
    if(!e||typeof e!=="object"||Array.isArray(e)||e.schema!=="math-evidence-event-v2"||
       !/^[A-Za-z0-9_-]{6,128}$/.test(e.event_id||"")||
       !/^[A-Za-z0-9_-]{3,128}$/.test(e.learner_scope||"")||
       typeof e.item_id!=="string"||!e.item_id||e.item_id.length>160||
       !classFor[e.kind]||e.evidence_class!==classFor[e.kind]||
       typeof e.occurred_at!=="string"||!Number.isFinite(Date.parse(e.occurred_at))||
       (e.kind==="answer_attempt"?typeof e.correct!=="boolean":Object.hasOwn(e,"correct")))
       throw Error("INVALID_V2_EVENT");
    return e;
  };
  const digest=async data=>{
    const bytes=new TextEncoder().encode(data);
    const result=await crypto.subtle.digest("SHA-256",bytes);
    return [...new Uint8Array(result)].map(x=>x.toString(16).padStart(2,"0")).join("");
  };
  const openDB=()=>new Promise((resolve,reject)=>{
    const req=indexedDB.open(DB_NAME,1);
    req.onupgradeneeded=()=>{
      const store=req.result.createObjectStore(STORE,{keyPath:["learner_scope","event_id"]});
      store.createIndex("scope","learner_scope",{unique:false});
    };
    req.onerror=()=>reject(req.error||Error("IDB_OPEN_FAILED"));
    req.onblocked=()=>reject(Error("IDB_UPGRADE_BLOCKED"));
    req.onsuccess=()=>resolve(req.result);
  });
  async function createCanary({learner_scope,enabled=false}={}){
    if(!/^[A-Za-z0-9_-]{3,128}$/.test(learner_scope||""))throw Error("SCOPE_REQUIRED");
    const db=await openDB();
    const read=()=>new Promise((resolve,reject)=>{
      const tx=db.transaction(STORE,"readonly");
      const req=tx.objectStore(STORE).index("scope").getAll(learner_scope);
      tx.oncomplete=()=>resolve(req.result.sort((a,b)=>a.event_id.localeCompare(b.event_id)));
      tx.onerror=()=>reject(tx.error||Error("IDB_READ_FAILED"));
      tx.onabort=()=>reject(tx.error||Error("IDB_READ_ABORTED"));
    });
    const append=e=>{
      if(!enabled)throw Error("CANARY_FLAG_OFF");
      valid(e);
      if(e.learner_scope!==learner_scope)throw Error("CROSS_SCOPE_EVENT");
      return new Promise((resolve,reject)=>{
        const tx=db.transaction(STORE,"readwrite");
        const store=tx.objectStore(STORE);
        let written=false,duplicate=false,reason=null;
        const got=store.get([learner_scope,e.event_id]);
        got.onsuccess=()=>{
          const prior=got.result;
          if(prior){
            if(stable(prior)!==stable(e)){
              reason=Error("EVENT_ID_CONFLICT");tx.abort();return;
            }
            duplicate=true;
          }else{
            written=true;
            store.add(JSON.parse(JSON.stringify(e)));
          }
        };
        tx.oncomplete=()=>resolve({written,duplicate});
        tx.onabort=()=>reject(reason||tx.error||Error("IDB_WRITE_ABORTED"));
        tx.onerror=()=>{};
      });
    };
    const exportBackup=async(created_at=new Date().toISOString())=>{
      if(!Number.isFinite(Date.parse(created_at)))throw Error("INVALID_DATE");
      const events=await read();
      const payload={schema:BACKUP,created_at,learner_scope,events};
      return {...payload,sha256:await digest(stable(payload))};
    };
    const verifyBackup=async candidate=>{
      if(!candidate||candidate.schema!==BACKUP||candidate.learner_scope!==learner_scope||
         !Number.isFinite(Date.parse(candidate.created_at))||
         !Array.isArray(candidate.events)||typeof candidate.sha256!=="string")
         throw Error("INVALID_BACKUP");
      const seen=new Set();
      for(const e of candidate.events){
        valid(e);
        if(e.learner_scope!==learner_scope||seen.has(e.event_id))throw Error("INVALID_BACKUP_EVENTS");
        seen.add(e.event_id);
      }
      const payload={schema:candidate.schema,created_at:candidate.created_at,
        learner_scope:candidate.learner_scope,events:candidate.events};
      if(await digest(stable(payload))!==candidate.sha256)throw Error("BACKUP_HASH_MISMATCH");
      return payload;
    };
    const restore=async(backup,{replace=false,acknowledged=false,simulateAbort=false}={})=>{
      if(!enabled)throw Error("CANARY_FLAG_OFF");
      const data=await verifyBackup(backup);
      return new Promise((resolve,reject)=>{
        const tx=db.transaction(STORE,"readwrite"),store=tx.objectStore(STORE),
              idx=store.index("scope");
        let reason=null;
        const count=idx.count(learner_scope);
        count.onsuccess=()=>{
          if(count.result&&(!replace||!acknowledged)){
            reason=Error(!replace?"RESTORE_CONFLICT":"ACK_REQUIRED");tx.abort();return;
          }
          const insert=()=>{
            for(const e of data.events)store.add(JSON.parse(JSON.stringify(e)));
            if(simulateAbort){reason=Error("SIMULATED_ATOMIC_ABORT");tx.abort();}
          };
          if(!count.result){insert();return;}
          const cursor=idx.openCursor(learner_scope);
          cursor.onsuccess=()=>{
            const c=cursor.result;
            if(c){c.delete();c.continue();}
            else insert();
          };
        };
        tx.oncomplete=()=>resolve({restored:data.events.length});
        tx.onabort=()=>reject(reason||tx.error||Error("RESTORE_ABORTED"));
        tx.onerror=()=>{};
      });
    };
    const summarize=async()=>{
      const events=await read(),ids=new Set();
      const metrics={formative:{answers:0,correct:0},readiness:{submissions:0},
        written:{self_checks:0,assessment_credit:0},remediation:{actions:0},
        exams:{submissions:0}};
      for(const e of events){
        valid(e);
        if(ids.has(e.event_id))throw Error("DUPLICATE_STORED_ID");
        ids.add(e.event_id);
        if(e.kind==="answer_attempt"){
          metrics.formative.answers++;if(e.correct)metrics.formative.correct++;
        }else if(e.kind==="readiness_submission")metrics.readiness.submissions++;
        else if(e.kind==="written_self_check")metrics.written.self_checks++;
        else if(e.kind==="remediation_action")metrics.remediation.actions++;
        else if(e.kind==="exam_submission")metrics.exams.submissions++;
      }
      return metrics;
    };
    return Object.freeze({read,append,exportBackup,verifyBackup,restore,summarize,close:()=>db.close()});
  }
  window.MathV2IDBCanaryR4=Object.freeze({createCanary});
})();
