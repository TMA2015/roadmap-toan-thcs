/* Math Phase 4 R20: QA-only atomic answer-action identity journal.
 * Same single IndexedDB holds full selected-option/source/action evidence
 * in intents and events plus outbox. No site registration / real learner writes.
 * R19 validates captured identity but is not itself a durable receipt.
 */
(() => {
  "use strict";
  const DB = "math-v2-qa-exact-ledger-r20";
  const STORES = ["intents", "events", "outbox"];
  const SCHEMA = "math-v2-exact-ledger-backup-r20";
  const MAX_BYTES = 2 * 1024 * 1024;
  const scopeOK = x => typeof x === "string" && /^QA_R16_R19_R20_[A-Za-z0-9_-]{2,90}$/.test(x);
  const keyOK = x => typeof x === "string" && /^QA_R19_[a-f0-9]{64}$/.test(x);
  const idOK = x => typeof x === "string" && /^R20_[a-f0-9]{32}$/.test(x);
  const skillsOK = xs => Array.isArray(xs) && xs.length <= 8 &&
    xs.every(x => typeof x === "string" && /^[A-Za-z0-9_.:-]{2,100}$/.test(x)) &&
    new Set(xs).size === xs.length && xs.every((x,i) => i === 0 || xs[i-1] < x);
  const object = x => x !== null && typeof x === "object" && !Array.isArray(x);
  const copy = x => JSON.parse(JSON.stringify(x));
  const stable = x => JSON.stringify(x, (_,v) => object(v) ?
    Object.fromEntries(Object.entries(v).sort(([a],[b]) => a.localeCompare(b))) : v);
  const hash = async snap => {
    const digest = await crypto.subtle.digest("SHA-256",new TextEncoder().encode(stable(snap)));
    return [...new Uint8Array(digest)].map(b => b.toString(16).padStart(2,"0")).join("");
  };
  const identityFields = ["schema", "learner_scope", "session_id", "presentation_id",
    "action_id", "item_id", "source_sha256", "option_id", "correct",
    "submission_key", "answer_fingerprint"];
  function matchIdentity(i,cap) {
    return identityFields.every(k => i[k] === cap[k]) && stable(i.skill_ids) === stable(cap.skill_ids);
  }
  function eventOf(i) {
    return {
      schema:"math-evidence-event-v2", event_id:i.event_id,
      learner_scope:i.learner_scope, item_id:i.item_id,
      kind:"answer_attempt", evidence_class:"FORMATIVE", occurred_at:i.occurred_at,
      correct:i.correct, session_id:i.session_id, presentation_id:i.presentation_id,
      action_id:i.action_id, source_sha256:i.source_sha256,
      option_id:i.option_id, submission_key:i.submission_key,
      answer_fingerprint:i.answer_fingerprint, skill_ids:copy(i.skill_ids)
    };
  }
  const open = () => new Promise((resolve,reject) => {
    const req=indexedDB.open(DB,1);
    req.onupgradeneeded=()=>{
      for(const name of STORES){
        const st=req.result.createObjectStore(name,{
          keyPath:["learner_scope",name==="intents"?"submission_key":"event_id"]});
        st.createIndex("scope","learner_scope",{unique:false});
      }
    };
    req.onerror=()=>reject(req.error||Error("R20_OPEN_FAILED"));
    req.onblocked=()=>reject(Error("R20_OPEN_BLOCKED"));
    req.onsuccess=()=>resolve(req.result);
  });
  function validRecord(i,scope){
    if(!object(i)||i.learner_scope!==scope||!keyOK(i.submission_key)||
       !idOK(i.event_id)||i.schema!=="math-v2-r19-action-capture-v1"||
       !["STAGED","SAVED"].includes(i.state)||
       typeof i.occurred_at!=="string"||!Number.isFinite(Date.parse(i.occurred_at))||
       !skillsOK(i.skill_ids)||
       !/^[a-f0-9]{64}$/.test(i.answer_fingerprint)||
       !/^[a-f0-9]{64}$/.test(i.source_sha256)||
       typeof i.correct!=="boolean"||typeof i.option_id!=="string")
      throw Error("R20_INVALID_INTENT");
  }
  function validBackup(s,scope){
    if(!object(s)||s.schema!==SCHEMA||s.version!==1||s.learner_scope!==scope||
       !Array.isArray(s.intents)||!Array.isArray(s.events)||!Array.isArray(s.outbox)||
       typeof s.created_at!=="string"||!Number.isFinite(Date.parse(s.created_at))||
       new TextEncoder().encode(JSON.stringify(s)).length>MAX_BYTES)
      throw Error("R20_INVALID_BACKUP");
    const keys=new Set(), byEvent=new Map(),seenEvents=new Set(),seenOutbox=new Set();
    for(const i of s.intents){
      validRecord(i,scope);
      if(keys.has(i.submission_key)||byEvent.has(i.event_id))throw Error("R20_DUPLICATE_INTENT");
      keys.add(i.submission_key);byEvent.set(i.event_id,i);
    }
    for(const e of s.events){
      const i=byEvent.get(e?.event_id);
      if(!i||i.state!=="SAVED"||seenEvents.has(e.event_id)||stable(e)!==stable(eventOf(i)))
        throw Error("R20_BAD_EVENT_LINK");
      seenEvents.add(e.event_id);
    }
    for(const o of s.outbox){
      if(!object(o)||!seenEvents.has(o.event_id)||seenOutbox.has(o.event_id)||
         o.learner_scope!==scope||o.state!=="PENDING")throw Error("R20_BAD_OUTBOX");
      seenOutbox.add(o.event_id);
    }
    if(seenEvents.size!==seenOutbox.size || s.intents.some(i =>
      i.state==="SAVED" ? !seenEvents.has(i.event_id) : seenEvents.has(i.event_id)))
      throw Error("R20_INCOMPLETE_COMMIT");
    return s;
  }
  async function create({enabled=false,learner_scope}={}) {
    if(!enabled)return Object.freeze({enabled:false});
    if(!scopeOK(learner_scope))throw Error("R20_QA_SCOPE_ONLY");
    if(typeof window.MathV2ExactActionIdentityR19?.create!=="function")
      throw Error("R20_R19_CONTRACT_REQUIRED");
    const identity=await window.MathV2ExactActionIdentityR19.create({enabled:true,learner_scope});
    const db=await open();
    const snapshot=()=>new Promise((resolve,reject)=>{
      const tx=db.transaction(STORES,"readonly"),req={};
      for(const n of STORES)req[n]=tx.objectStore(n).index("scope").getAll(learner_scope);
      tx.oncomplete=()=>resolve(Object.fromEntries(STORES.map(n=>[n,req[n].result])));
      tx.onabort=()=>reject(tx.error||Error("R20_READ_ABORT"));
      tx.onerror=()=>{};
    });
    async function stage(input){
      if(!skillsOK(input?.skill_ids))throw Error("R20_SKILLS_INVALID");
      const cap=await identity.capture(input);
      const value={...Object.fromEntries(identityFields.map(k=>[k,cap[k]])),
        skill_ids:copy(input.skill_ids)};
      return new Promise((resolve,reject)=>{
        const tx=db.transaction("intents","readwrite");
        const st=tx.objectStore("intents");let result,reason;
        st.get([learner_scope,cap.submission_key]).onsuccess=function(){
          if(this.result){
            const prev=this.result;
            if(!matchIdentity(prev,value)){
              reason=Error("R20_EXACT_ACTION_CONFLICT");tx.abort();return;
            }
            result={reused:true,submission_key:prev.submission_key,event_id:prev.event_id,
              state:prev.state};return;
          }
          const intent={...value,event_id:"R20_"+crypto.randomUUID().replace(/-/g,""),
            occurred_at:new Date().toISOString(),state:"STAGED"};
          st.add(intent);
          result={reused:false,submission_key:intent.submission_key,
            event_id:intent.event_id,state:intent.state};
        };
        tx.oncomplete=()=>resolve(result);
        tx.onabort=()=>reject(reason||tx.error||Error("R20_STAGE_ABORT"));
        tx.onerror=()=>{};
      });
    }
    function commit(submission_key,{simulateAbort=false}={}){
      if(!keyOK(submission_key))throw Error("R20_INVALID_KEY");
      return new Promise((resolve,reject)=>{
        const tx=db.transaction(STORES,"readwrite");
        const intents=tx.objectStore("intents"),events=tx.objectStore("events"),
          outbox=tx.objectStore("outbox");let result,reason;
        intents.get([learner_scope,submission_key]).onsuccess=function(){
          const i=this.result;
          if(!i){reason=Error("R20_INTENT_NOT_FOUND");tx.abort();return;}
          const event=eventOf(i);
          events.get([learner_scope,i.event_id]).onsuccess=function(){
            if(this.result){
              if(i.state!=="SAVED"||stable(this.result)!==stable(event)){
                reason=Error("R20_COMMIT_CONFLICT");tx.abort();return;
              }
              result={saved:true,duplicate:true,event_id:i.event_id};return;
            }
            if(i.state!=="STAGED"){
              reason=Error("R20_MISSING_COMMITTED_EVENT");tx.abort();return;
            }
            events.add(event);
            outbox.add({learner_scope,event_id:i.event_id,state:"PENDING"});
            intents.put({...i,state:"SAVED"});
            result={saved:true,duplicate:false,event_id:i.event_id};
            if(simulateAbort){reason=Error("R20_SIMULATED_ABORT");tx.abort();}
          };
        };
        tx.oncomplete=()=>resolve(result);
        tx.onabort=()=>reject(reason||tx.error||Error("R20_COMMIT_ABORT"));
        tx.onerror=()=>{};
      });
    }
    async function project(){
      const rows=await snapshot();
      const intents=new Map(rows.intents.map(i=>[i.event_id,i]));
      const report={total_unique_attempts:0,total_correct:0,per_skill:Object.create(null),
        no_automatic_readiness_credit:true,legacy_v1_writes:0,
        note:"Skill counts overlap for multi-skill items; do not sum as global attempts"};
      const seen=new Set();
      for(const e of rows.events){
        const i=intents.get(e.event_id);
        if(!i||i.state!=="SAVED"||stable(e)!==stable(eventOf(i)))
          throw Error("R20_PROJECTION_LINK_INVALID");
        if(seen.has(e.event_id))continue;
        seen.add(e.event_id);
        report.total_unique_attempts++;
        if(e.correct)report.total_correct++;
        for(const skill of e.skill_ids){
          const counter=report.per_skill[skill]||(report.per_skill[skill]={attempted:0,correct:0});
          counter.attempted++;
          if(e.correct)counter.correct++;
        }
      }
      return report;
    }
    async function exportBackup(){
      const rows=await snapshot();
      const data=validBackup({schema:SCHEMA,version:1,learner_scope,
        created_at:new Date().toISOString(),...rows},learner_scope);
      return {...data,sha256:await hash(data)};
    }
    async function restore(backup,{replace=false,acknowledged=false,simulateAbort=false}={}){
      if(!object(backup)||!(/^[a-f0-9]{64}$/.test(backup.sha256||"")))
        throw Error("R20_BAD_HASH");
      const data=validBackup({schema:backup.schema,version:backup.version,
        learner_scope:backup.learner_scope,created_at:backup.created_at,
        intents:backup.intents,events:backup.events,outbox:backup.outbox},learner_scope);
      if((await hash(data))!==backup.sha256)throw Error("R20_HASH_MISMATCH");
      return new Promise((resolve,reject)=>{
        const tx=db.transaction(STORES,"readwrite");let count=0,reason;
        const keys={};
        for(const n of STORES){
          tx.objectStore(n).index("scope").getAllKeys(learner_scope).onsuccess=function(){
            keys[n]=this.result;
            if(++count<STORES.length)return;
            const exists=STORES.some(s=>keys[s].length);
            if(exists&&(!replace||!acknowledged)){
              reason=Error("R20_REPLACE_CONSENT_REQUIRED");tx.abort();return;
            }
            for(const s of STORES){
              const st=tx.objectStore(s);
              for(const key of keys[s])st.delete(key);
              for(const record of data[s])st.add(copy(record));
            }
            if(simulateAbort){reason=Error("R20_RESTORE_ABORT_SIMULATED");tx.abort();}
          };
        }
        tx.oncomplete=()=>resolve({intents:data.intents.length,
          events:data.events.length,outbox:data.outbox.length});
        tx.onabort=()=>reject(reason||tx.error||Error("R20_RESTORE_ABORT"));
        tx.onerror=()=>{};
      });
    }
    return Object.freeze({enabled:true,stage,commit,read:snapshot,project,
      exportBackup,restore,close:()=>db.close()});
  }
  window.MathV2ExactLedgerR20=Object.freeze({create});
})();
