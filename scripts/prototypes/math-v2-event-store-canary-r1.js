/* Phase 4 R3 — OPT-IN TEST-ONLY canary store. Not imported by learner UI. */
"use strict";
const crypto=require("node:crypto");
const Reducer=require("./math-unified-counter-v2-shadow-r1.js");
const KEY="math-unified-events-v2-canary";
const SCHEMA="math-unified-events-v2-canary-r1";
const BACKUP="math-unified-events-v2-canary-backup-r1";
const MAX_BYTES=1024*1024;
const isObject=x=>x!==null&&typeof x==="object"&&!Array.isArray(x);
const stable=x=>JSON.stringify(x,(_,value)=>{
  if(!isObject(value))return value;
  return Object.fromEntries(Object.keys(value).sort().map(k=>[k,value[k]]));
});
const sha=s=>crypto.createHash("sha256").update(s).digest("hex");
const validScope=x=>typeof x==="string"&&/^[A-Za-z0-9_-]{3,128}$/.test(x);
const fresh=scope=>({schema:SCHEMA,version:1,learner_scope:scope,events:[]});
function validateSnapshot(x,scope){
  if(!isObject(x)||x.schema!==SCHEMA||x.version!==1||x.learner_scope!==scope||!Array.isArray(x.events))
    throw Error("INVALID_CANARY_SNAPSHOT");
  Reducer.summarize(x.events,{learner_scope:scope});
  if(Buffer.byteLength(JSON.stringify(x),"utf8")>MAX_BYTES)throw Error("CANARY_SIZE_LIMIT");
  return x;
}
function createCanary(storage,{enabled=false,learner_scope}={}){
  if(!validScope(learner_scope))throw Error("LOCAL_SCOPE_REQUIRED");
  if(!storage||typeof storage.getItem!=="function")throw Error("STORAGE_REQUIRED");
  const read=()=>{
    let raw=storage.getItem(KEY);
    if(raw===null)return fresh(learner_scope);
    if(typeof raw!=="string"||Buffer.byteLength(raw,"utf8")>MAX_BYTES)throw Error("CANARY_SIZE_LIMIT");
    let parsed;
    try{parsed=JSON.parse(raw);}catch(_){throw Error("INVALID_CANARY_JSON");}
    return validateSnapshot(parsed,learner_scope);
  };
  // One key per transaction; no legacy writes, no half-written collection.
  const persist=doc=>{
    if(!enabled)throw Error("CANARY_FLAG_DISABLED");
    validateSnapshot(doc,learner_scope);
    const next=JSON.stringify(doc);
    const old=storage.getItem(KEY);
    if(old===next)return;
    let attempted=false;
    try{
      attempted=true;
      storage.setItem(KEY,next);
      if(storage.getItem(KEY)!==next)throw Error("CANARY_READBACK_MISMATCH");
    }catch(e){
      if(attempted){
        try{
          // A rejected single-key write generally preserves old data; avoid
          // unnecessarily rewriting it when the attempted write never landed.
          if(storage.getItem(KEY)!==old){
            if(old===null)storage.removeItem(KEY);
            else storage.setItem(KEY,old);
          }
        }catch(_){throw Error("CANARY_WRITE_AND_ROLLBACK_FAILED");}
      }
      throw Error("CANARY_WRITE_ABORTED: "+String(e.message||e));
    }
  };
  const append=event=>{
    if(!enabled)throw Error("CANARY_FLAG_DISABLED");
    Reducer.validate(event);
    if(event.learner_scope!==learner_scope)throw Error("CROSS_LEARNER_EVENT");
    const doc=read();
    const present=doc.events.find(e=>e.event_id===event.event_id);
    if(present){
      if(stable(present)!==stable(event))throw Error("CONFLICTING_EVENT_ID");
      return {written:false,duplicate:true,summary:Reducer.summarize(doc.events,{learner_scope})};
    }
    const next={...doc,events:[...doc.events,JSON.parse(JSON.stringify(event))]};
    persist(next);
    return {written:true,duplicate:false,summary:Reducer.summarize(next.events,{learner_scope})};
  };
  const exportBackup=(timestamp)=>{
    const doc=read();
    const created_at=timestamp||new Date().toISOString();
    if(!Number.isFinite(Date.parse(created_at)))throw Error("INVALID_BACKUP_DATE");
    const payload={schema:BACKUP,version:1,created_at,snapshot:doc};
    return {...payload,sha256:sha(stable(payload))};
  };
  const verifyBackup=backup=>{
    if(!isObject(backup)||backup.schema!==BACKUP||backup.version!==1||
       typeof backup.created_at!=="string"||!Number.isFinite(Date.parse(backup.created_at))||
       typeof backup.sha256!=="string"||!/^[0-9a-f]{64}$/.test(backup.sha256))
      throw Error("INVALID_CANARY_BACKUP");
    validateSnapshot(backup.snapshot,learner_scope);
    const payload={schema:backup.schema,version:backup.version,created_at:backup.created_at,snapshot:backup.snapshot};
    if(sha(stable(payload))!==backup.sha256)throw Error("CANARY_BACKUP_SHA_MISMATCH");
    return backup.snapshot;
  };
  const restore=(backup,{replace=false,backupAcknowledged=false}={})=>{
    if(!enabled)throw Error("CANARY_FLAG_DISABLED");
    const data=verifyBackup(backup);
    const current=read();
    if(current.events.length&&!replace)throw Error("CANARY_RESTORE_CONFLICT");
    if(current.events.length&&replace&&!backupAcknowledged)throw Error("BACKUP_ACKNOWLEDGEMENT_REQUIRED");
    persist(data);
    return {restored:data.events.length};
  };
  return Object.freeze({read,append,exportBackup,verifyBackup,restore,
    summarize:()=>Reducer.summarize(read().events,{learner_scope})});
}
module.exports=Object.freeze({KEY,SCHEMA,BACKUP,createCanary});
