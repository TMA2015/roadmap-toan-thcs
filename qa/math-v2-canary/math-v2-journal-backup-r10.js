/* Phase 4 R10 — browser-only QA backup of R6 event journal AND pending outbox.
 * Not imported by learner routes or production backup UI.
 */
(() => {
  "use strict";
  const DB="math-v2-qa-journal-r6",STORES=["events","outbox"];
  const SCHEMA="math-v2-journal-backup-r10",MAX_BYTES=2*1024*1024;
  const lanes=Object.freeze({
    answer_attempt:"FORMATIVE",readiness_submission:"INDEPENDENT_ASSESSMENT",
    written_self_check:"SELF_REPORTED",remediation_action:"REMEDIATION",
    exam_submission:"EXAM_ASSESSMENT"
  });
  const obj=x=>x!==null&&typeof x==="object"&&!Array.isArray(x);
  const scopeOk=s=>typeof s==="string"&&/^[A-Za-z0-9_-]{3,128}$/.test(s);
  const stable=x=>JSON.stringify(x,(_,v)=>obj(v)
    ?Object.fromEntries(Object.entries(v).sort(([a],[b])=>a.localeCompare(b))):v);
  const digest=async payload=>{
    const bytes=new TextEncoder().encode(stable(payload));
    const hash=await crypto.subtle.digest("SHA-256",bytes);
    return [...new Uint8Array(hash)].map(v=>v.toString(16).padStart(2,"0")).join("");
  };
  const validEvent=(e,scope)=>{
    if(!obj(e)||e.schema!=="math-evidence-event-v2"||e.learner_scope!==scope||
       !/^[A-Za-z0-9_-]{6,128}$/.test(e.event_id||"")||
       typeof e.item_id!=="string"||!e.item_id||e.item_id.length>160||
       !Object.hasOwn(lanes,e.kind)||lanes[e.kind]!==e.evidence_class||
       typeof e.occurred_at!=="string"||!Number.isFinite(Date.parse(e.occurred_at))||
       (e.kind==="answer_attempt"?typeof e.correct!=="boolean":Object.hasOwn(e,"correct")))
      throw Error("INVALID_JOURNAL_EVENT");
  };
  const ensureSnapshot=(snap,scope)=>{
    if(!obj(snap)||snap.schema!==SCHEMA||snap.version!==1||
       snap.learner_scope!==scope||!Number.isFinite(Date.parse(snap.created_at))||
       !Array.isArray(snap.events)||!Array.isArray(snap.pending))
       throw Error("INVALID_BACKUP_SNAPSHOT");
    if(new TextEncoder().encode(JSON.stringify(snap)).length>MAX_BYTES)
      throw Error("BACKUP_SIZE_LIMIT");
    const ids=new Set(),pending=new Set();
    for(const e of snap.events){
      validEvent(e,scope);
      if(ids.has(e.event_id))throw Error("DUPLICATE_BACKUP_EVENTS");
      ids.add(e.event_id);
    }
    for(const p of snap.pending){
      if(!obj(p)||p.learner_scope!==scope||
         !/^[A-Za-z0-9_-]{6,128}$/.test(p.event_id||"")||
         p.state!=="PENDING"||!ids.has(p.event_id)||pending.has(p.event_id))
        throw Error("INVALID_BACKUP_OUTBOX");
      pending.add(p.event_id);
    }
    return snap;
  };
  const open=()=>new Promise((resolve,reject)=>{
    let req;
    try{req=indexedDB.open(DB,1);}catch(e){reject(e);return;}
    req.onupgradeneeded=()=>{req.transaction.abort();};
    req.onerror=()=>reject(req.error||Error("JOURNAL_DB_UNAVAILABLE"));
    req.onblocked=()=>reject(Error("JOURNAL_DB_BLOCKED"));
    req.onsuccess=()=>{
      const db=req.result;
      if(!STORES.every(s=>db.objectStoreNames.contains(s))){
        db.close();reject(Error("JOURNAL_DB_SCHEMA_MISSING"));return;
      }
      resolve(db);
    };
  });
  async function create({learner_scope,enabled=false}={}){
    if(!scopeOk(learner_scope))throw Error("LEARNER_SCOPE_REQUIRED");
    const db=await open();
    const read=()=>new Promise((resolve,reject)=>{
      const tx=db.transaction(STORES,"readonly");
      const requests=STORES.map(s=>tx.objectStore(s).index("scope").getAll(learner_scope));
      tx.oncomplete=()=>{
        const values=requests.map(q=>q.result.sort((a,b)=>a.event_id.localeCompare(b.event_id)));
        resolve({events:values[0],pending:values[1]});
      };
      tx.onerror=()=>reject(tx.error||Error("BACKUP_READ_ERROR"));
      tx.onabort=()=>reject(tx.error||Error("BACKUP_READ_ABORT"));
    });
    const exportBackup=async(created_at=new Date().toISOString())=>{
      const d=await read();
      const snap=ensureSnapshot({schema:SCHEMA,version:1,learner_scope,
        created_at,events:d.events,pending:d.pending},learner_scope);
      return {...snap,sha256:await digest(snap)};
    };
    const verifyBackup=async full=>{
      if(!obj(full)||typeof full.sha256!=="string"||!/^[a-f0-9]{64}$/.test(full.sha256))
        throw Error("INVALID_BACKUP_SIGNATURE");
      const snap={schema:full.schema,version:full.version,
        learner_scope:full.learner_scope,created_at:full.created_at,
        events:full.events,pending:full.pending};
      ensureSnapshot(snap,learner_scope);
      if(await digest(snap)!==full.sha256)throw Error("BACKUP_SHA_MISMATCH");
      return snap;
    };
    const restore=async(full,{replace=false,acknowledged=false,simulateAbort=false}={})=>{
      if(!enabled)throw Error("BACKUP_RESTORE_DISABLED");
      const snap=await verifyBackup(full);
      return new Promise((resolve,reject)=>{
        const tx=db.transaction(STORES,"readwrite");
        let reason=null,ready=0,keys=[];
        const q=STORES.map(s=>tx.objectStore(s).index("scope").getAllKeys(learner_scope));
        const apply=()=>{
          const existing=keys[0].length+keys[1].length;
          if(existing&&!replace){reason=Error("BACKUP_RESTORE_CONFLICT");tx.abort();return;}
          if(existing&&replace&&!acknowledged){reason=Error("REPLACEMENT_ACK_REQUIRED");tx.abort();return;}
          STORES.forEach((s,i)=>{
            const store=tx.objectStore(s);
            keys[i].forEach(key=>store.delete(key));
            const data=i===0?snap.events:snap.pending;
            for(const row of data)store.add(JSON.parse(JSON.stringify(row)));
          });
          if(simulateAbort){reason=Error("SIMULATED_RESTORE_ABORT");tx.abort();}
        };
        q.forEach((req,i)=>{
          req.onsuccess=()=>{keys[i]=req.result;if(++ready===2)apply();};
        });
        tx.oncomplete=()=>resolve({restored_events:snap.events.length,
          restored_pending:snap.pending.length});
        tx.onerror=()=>{};
        tx.onabort=()=>reject(reason||tx.error||Error("BACKUP_RESTORE_ABORTED"));
      });
    };
    return Object.freeze({read,exportBackup,verifyBackup,restore,close:()=>db.close()});
  }
  window.MathV2JournalBackupR10=Object.freeze({create});
})();
