/* Math Phase 4 R16: QA-only SINGLE IndexedDB transactional ledger.
 * Staged intents, committed events and pending outbox live in ONE DB.
 * No production registration, localStorage reads, account sync or v1 migration.
 */
(() => {
  "use strict";
  const DB="math-v2-qa-unified-ledger-r16";
  const STORES=["intents","events","outbox"];
  const SCHEMA="math-v2-unified-ledger-backup-r16";
  const MAX_BYTES=2*1024*1024;
  const LANES=Object.freeze({
    answer_attempt:"FORMATIVE",readiness_submission:"INDEPENDENT_ASSESSMENT",
    written_self_check:"SELF_REPORTED"
  });
  const object=v=>v!==null&&typeof v==="object"&&!Array.isArray(v);
  const validScope=s=>typeof s==="string"&&/^[A-Za-z0-9_-]{3,128}$/.test(s);
  const validKey=s=>typeof s==="string"&&/^[A-Za-z0-9_-]{6,128}$/.test(s);
  const copy=x=>JSON.parse(JSON.stringify(x));
  const stable=x=>JSON.stringify(x,(_,v)=>object(v)?
    Object.fromEntries(Object.entries(v).sort(([a],[b])=>a.localeCompare(b))):v);
  const eventFromIntent=i=>{
    const e={schema:"math-evidence-event-v2",event_id:i.event_id,
      learner_scope:i.learner_scope,item_id:i.item_id,
      kind:i.kind,evidence_class:LANES[i.kind],occurred_at:i.occurred_at};
    if(i.kind==="answer_attempt")e.correct=i.correct;
    return e;
  };
  function validInput(i){
    if(!object(i)||!validKey(i.submission_key)||
       typeof i.item_id!=="string"||!i.item_id||i.item_id.length>160||
       !Object.hasOwn(LANES,i.kind)||
       (i.kind==="answer_attempt"?typeof i.correct!=="boolean":Object.hasOwn(i,"correct")))
      throw Error("R16_INVALID_SUBMISSION");
  }
  function validIntent(i,scope){
    validInput(i);
    if(i.learner_scope!==scope||!validKey(i.event_id)||
       typeof i.occurred_at!=="string"||!Number.isFinite(Date.parse(i.occurred_at))||
       !["STAGED","SAVED"].includes(i.state))
      throw Error("R16_INVALID_INTENT");
  }
  function validArchive(x,scope){
    if(!object(x)||x.schema!==SCHEMA||x.version!==1||
       x.learner_scope!==scope||
       typeof x.created_at!=="string"||!Number.isFinite(Date.parse(x.created_at))||
       !Array.isArray(x.intents)||!Array.isArray(x.events)||!Array.isArray(x.outbox))
      throw Error("R16_INVALID_ARCHIVE");
    if(new TextEncoder().encode(JSON.stringify(x)).length>MAX_BYTES)
      throw Error("R16_ARCHIVE_TOO_LARGE");
    const keys=new Set(),byId=new Map(),eventIds=new Set(),outboxIds=new Set();
    for(const i of x.intents){
      validIntent(i,scope);
      if(keys.has(i.submission_key)||byId.has(i.event_id))throw Error("R16_DUPLICATE_INTENT");
      keys.add(i.submission_key);byId.set(i.event_id,i);
    }
    for(const e of x.events){
      const i=byId.get(e?.event_id);
      if(!i||i.state!=="SAVED"||eventIds.has(e.event_id)||
         stable(e)!==stable(eventFromIntent(i)))
        throw Error("R16_INVALID_EVENT_LINK");
      eventIds.add(e.event_id);
    }
    for(const i of x.intents){
      if(i.state==="SAVED"&&!eventIds.has(i.event_id))throw Error("R16_SAVED_EVENT_MISSING");
      if(i.state==="STAGED"&&eventIds.has(i.event_id))throw Error("R16_STAGED_EVENT_CONFLICT");
    }
    for(const o of x.outbox){
      if(!object(o)||o.learner_scope!==scope||o.state!=="PENDING"||
         !eventIds.has(o.event_id)||outboxIds.has(o.event_id))
        throw Error("R16_INVALID_OUTBOX_LINK");
      outboxIds.add(o.event_id);
    }
    return x;
  }
  const sha256=async snap=>{
    const bytes=new TextEncoder().encode(stable(snap));
    const hash=await crypto.subtle.digest("SHA-256",bytes);
    return [...new Uint8Array(hash)].map(b=>b.toString(16).padStart(2,"0")).join("");
  };
  const open=()=>new Promise((resolve,reject)=>{
    let req;
    try{req=indexedDB.open(DB,1);}catch(e){reject(e);return;}
    req.onupgradeneeded=()=>{
      for(const name of STORES){
        const store=req.result.createObjectStore(name,{
          keyPath:["learner_scope",name==="intents"?"submission_key":"event_id"]
        });
        store.createIndex("scope","learner_scope",{unique:false});
      }
    };
    req.onerror=()=>reject(req.error||Error("R16_DB_OPEN_FAILED"));
    req.onblocked=()=>reject(Error("R16_DB_BLOCKED"));
    req.onsuccess=()=>resolve(req.result);
  });
  async function create({enabled=false,learner_scope}={}){
    if(!validScope(learner_scope)||!learner_scope.startsWith("QA_R16_"))
      throw Error("R16_QA_SCOPE_ONLY");
    if(!enabled)return Object.freeze({enabled:false,
      stage:async()=>({state:"DISABLED",saved:false}),
      commit:async()=>({state:"DISABLED",saved:false}),
      read:async()=>({intents:[],events:[],outbox:[]})});
    const db=await open();
    function stage(input){
      validInput(input);
      return new Promise((resolve,reject)=>{
        const tx=db.transaction("intents","readwrite");
        const store=tx.objectStore("intents");
        let result=null,reason=null;
        store.get([learner_scope,input.submission_key]).onsuccess=function(){
          if(this.result){
            const prior=this.result;
            if(prior.item_id!==input.item_id||prior.kind!==input.kind||
               (prior.kind==="answer_attempt"&&prior.correct!==input.correct)){
              reason=Error("R16_SUBMISSION_KEY_CONFLICT");tx.abort();return;
            }
            result={reused:true,intent:prior};return;
          }
          const intent={learner_scope,submission_key:input.submission_key,
            event_id:"R16_"+crypto.randomUUID().replace(/-/g,""),
            item_id:input.item_id,kind:input.kind,
            occurred_at:new Date().toISOString(),state:"STAGED"};
          if(input.kind==="answer_attempt")intent.correct=input.correct;
          store.add(intent);result={reused:false,intent};
        };
        tx.oncomplete=()=>resolve(copy(result));
        tx.onabort=()=>reject(reason||tx.error||Error("R16_STAGE_ABORTED"));
        tx.onerror=()=>{};
      });
    }
    function commit(submission_key,{simulateAbort=false}={}){
      if(!validKey(submission_key))throw Error("R16_INVALID_SUBMISSION_KEY");
      return new Promise((resolve,reject)=>{
        const tx=db.transaction(STORES,"readwrite");
        const intents=tx.objectStore("intents"),
          events=tx.objectStore("events"),outbox=tx.objectStore("outbox");
        let result=null,reason=null;
        intents.get([learner_scope,submission_key]).onsuccess=function(){
          const i=this.result;
          if(!i){reason=Error("R16_INTENT_NOT_FOUND");tx.abort();return;}
          const event=eventFromIntent(i);
          events.get([learner_scope,i.event_id]).onsuccess=function(){
            if(this.result){
              if(stable(this.result)!==stable(event)||i.state!=="SAVED"){
                reason=Error("R16_EVENT_CONFLICT");tx.abort();return;
              }
              result={state:"SAVED",saved:true,duplicate:true,event_id:i.event_id};return;
            }
            if(i.state!=="STAGED"){
              reason=Error("R16_MISSING_SAVED_EVENT");tx.abort();return;
            }
            events.add(event);
            outbox.add({learner_scope,event_id:i.event_id,state:"PENDING"});
            intents.put({...i,state:"SAVED"});
            result={state:"SAVED",saved:true,duplicate:false,event_id:i.event_id};
            if(simulateAbort){reason=Error("R16_SIMULATED_ATOMIC_ABORT");tx.abort();}
          };
        };
        tx.oncomplete=()=>resolve(result);
        tx.onabort=()=>reject(reason||tx.error||Error("R16_COMMIT_ABORTED"));
        tx.onerror=()=>{};
      });
    }
    const read=()=>new Promise((resolve,reject)=>{
      // The THREE stores are snapshotted by a single readonly transaction.
      const tx=db.transaction(STORES,"readonly"),requests={};
      for(const name of STORES)
        requests[name]=tx.objectStore(name).index("scope").getAll(learner_scope);
      tx.oncomplete=()=>{
        const r={};
        for(const name of STORES)
          r[name]=requests[name].result.sort((a,b)=>
            (a.submission_key||a.event_id).localeCompare(b.submission_key||b.event_id));
        resolve(r);
      };
      tx.onabort=()=>reject(tx.error||Error("R16_READ_ABORTED"));
      tx.onerror=()=>reject(tx.error||Error("R16_READ_FAILED"));
    });
    const summary=async()=>{
      const {intents,events,outbox}=await read();
      const result={intents:intents.length,staged:intents.filter(x=>x.state==="STAGED").length,
        saved:intents.filter(x=>x.state==="SAVED").length,
        events:events.length,pending:outbox.length,
        formative:{answers:0,correct:0},readiness:{submissions:0},
        written:{self_checks:0,automatic_readiness_credit:0}};
      for(const e of events){
        if(e.kind==="answer_attempt"){result.formative.answers++;if(e.correct)result.formative.correct++;}
        else if(e.kind==="readiness_submission")result.readiness.submissions++;
        else if(e.kind==="written_self_check")result.written.self_checks++;
      }
      return result;
    };
    const exportBackup=async(created_at=new Date().toISOString())=>{
      const data=await read();
      const snap=validArchive({schema:SCHEMA,version:1,learner_scope,
        created_at,...data},learner_scope);
      return {...snap,sha256:await sha256(snap)};
    };
    const verifyBackup=async full=>{
      if(!object(full)||typeof full.sha256!=="string"||
         !/^[a-f0-9]{64}$/.test(full.sha256))throw Error("R16_INVALID_SIGNATURE");
      const snap={schema:full.schema,version:full.version,
        learner_scope:full.learner_scope,created_at:full.created_at,
        intents:full.intents,events:full.events,outbox:full.outbox};
      validArchive(snap,learner_scope);
      if(await sha256(snap)!==full.sha256)throw Error("R16_SHA_MISMATCH");
      return snap;
    };
    const restore=async(full,{replace=false,acknowledged=false,simulateAbort=false}={})=>{
      const snap=await verifyBackup(full);
      return new Promise((resolve,reject)=>{
        const tx=db.transaction(STORES,"readwrite"),queries={},keys={};
        let ready=0,reason=null;
        for(const name of STORES){
          queries[name]=tx.objectStore(name).index("scope").getAllKeys(learner_scope);
          queries[name].onsuccess=()=>{
            keys[name]=queries[name].result;
            if(++ready!==STORES.length)return;
            const existing=STORES.reduce((sum,n)=>sum+keys[n].length,0);
            if(existing&&!replace){reason=Error("R16_RESTORE_CONFLICT");tx.abort();return;}
            if(existing&&!acknowledged){reason=Error("R16_REPLACE_ACK_REQUIRED");tx.abort();return;}
            for(const n of STORES){
              const store=tx.objectStore(n);
              for(const key of keys[n])store.delete(key);
              for(const record of snap[n])store.add(copy(record));
            }
            if(simulateAbort){reason=Error("R16_SIMULATED_RESTORE_ABORT");tx.abort();}
          };
        }
        tx.oncomplete=()=>resolve({restored_intents:snap.intents.length,
          restored_events:snap.events.length,restored_pending:snap.outbox.length});
        tx.onabort=()=>reject(reason||tx.error||Error("R16_RESTORE_ABORTED"));
        tx.onerror=()=>{};
      });
    };
    return Object.freeze({enabled:true,stage,commit,read,summary,
      exportBackup,verifyBackup,restore,close:()=>db.close()});
  }
  window.MathV2UnifiedLedgerR16=Object.freeze({create});
})();
