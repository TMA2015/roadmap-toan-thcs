/* CT23 Grade9 candidate Readiness — isolated assessment bucket and safe evidence writes.
   NOTE: this is Draft QA only; no Core/Mastery/bridge or other assessment writes. */
(() => {
  "use strict";
  const KEY="toan-thcs-assessment-v1";
  const ID="PROB23-G9-CORE-READY-V1";
  const isObj=x=>x!==null&&typeof x==="object"&&!Array.isArray(x);
  const error=reason=>({ok:false,reason});
  const read=(storage)=>{
    try{
      const raw=storage.getItem(KEY);
      if(raw===null)return {ok:true,store:{assessments:{}}};
      const store=JSON.parse(raw);
      if(!isObj(store)||!isObj(store.assessments))return error("INVALID_EXISTING_STORE");
      const existing=store.assessments[ID];
      if(existing!==undefined&&(!isObj(existing)||!Array.isArray(existing.attempts)||
        existing.attempts.some(a=>!isObj(a)||a.assessment_id!==ID||a.grade!==9||a.form_version!==1)))
        return error("INVALID_G9_HISTORY");
      return {ok:true,store};
    }catch(_){return error("CORRUPT_EXISTING_DATA");}
  };
  const save=(storage,attempt)=>{
    if(!isObj(attempt)||attempt.assessment_id!==ID||attempt.grade!==9||attempt.form_version!==1||
      typeof attempt.attempt_id!=="string"||!attempt.attempt_id||
      !Array.isArray(attempt.items)||attempt.items.length!==10||
      attempt.total!==10||!Number.isInteger(attempt.correct)||attempt.correct<0||attempt.correct>10||
      typeof attempt.submitted_at!=="string"||!attempt.source_git_blob)
      return error("INVALID_ATTEMPT");
    const current=read(storage);
    if(!current.ok)return current;
    const store=current.store;
    const before=store.assessments[ID]||{attempts:[]};
    if(before.attempts.some(a=>a.attempt_id===attempt.attempt_id))
      return {ok:true,alreadySaved:true,totalAttempts:before.attempts.length};
    // No slice/truncation: never silently discard prior Grade9 or old Grade6–8 evidence.
    const attempts=[...before.attempts,attempt];
    const best=(before.best&&typeof before.best.accuracy==="number"&&
      before.best.accuracy>=attempt.accuracy)?before.best:{
        accuracy:attempt.accuracy,submitted_at:attempt.submitted_at,readiness_state:attempt.readiness_state};
    store.assessments[ID]={...before,attempts,latest:attempt,best};
    try{
      storage.setItem(KEY,JSON.stringify(store));
      return {ok:true,alreadySaved:false,totalAttempts:attempts.length};
    }catch(_){return error("WRITE_FAILED");}
  };
  const history=storage=>{
    const state=read(storage);
    if(!state.ok)return state;
    const bucket=state.store.assessments[ID];
    return {ok:true,attempts:bucket?.attempts||[],latest:bucket?.latest||null};
  };
  const api=Object.freeze({KEY,ID,read,save,history});
  if(typeof module!=="undefined"&&module.exports)module.exports=api;
  if(typeof window!=="undefined")window.MathCT23G9EvidenceQA=api;
})();