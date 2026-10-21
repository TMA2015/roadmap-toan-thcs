/* Independent Grade9 Readiness evidence lane. Never credit Skill/Mastery or alter Grade6–8. */
(() => {
  "use strict";
  const KEY="toan-thcs-assessment-v1";
  const ID="PROB23-G9-CORE-READY-V1";
  const ROLE="independent_grade9_readiness";
  const LEGACY_QA_ROLE="independent_grade9_readiness_qa";
  const EXPECTED_IDS=Object.freeze(Array.from({length:10},(_,i)=>"PRO23G9READY_"+String(i+1).padStart(3,"0")));
  const isObj=x=>x!==null&&typeof x==="object"&&!Array.isArray(x);
  const error=reason=>({ok:false,reason});
  const read=storage=>{
    try{
      const raw=storage.getItem(KEY);
      if(raw===null)return {ok:true,store:{assessments:{}}};
      const store=JSON.parse(raw);
      if(!isObj(store)||!isObj(store.assessments))return error("INVALID_EXISTING_STORE");
      const bucket=store.assessments[ID];
      if(bucket!==undefined){
        if(!isObj(bucket)||!Array.isArray(bucket.attempts))return error("INVALID_G9_HISTORY");
        for(const a of bucket.attempts){
          if(!isObj(a)||a.assessment_id!==ID||a.grade!==9||a.form_version!==1||
            ![ROLE,LEGACY_QA_ROLE].includes(a.role)||!Array.isArray(a.items)||a.items.length!==10||
            typeof a.attempt_id!=="string"||!a.attempt_id)return error("INVALID_G9_HISTORY");
        }
      }
      return {ok:true,store};
    }catch(_){return error("CORRUPT_EXISTING_DATA");}
  };
  const validAttempt=a=>isObj(a)&&a.assessment_id===ID&&a.grade===9&&a.form_version===1&&a.role===ROLE&&
    typeof a.attempt_id==="string"&&a.attempt_id.length>5&&
    typeof a.source_git_blob==="string"&&a.source_git_blob.length>20&&
    typeof a.started_at==="string"&&typeof a.submitted_at==="string"&&
    Number.isInteger(a.duration_seconds)&&a.duration_seconds>=0&&
    a.total===10&&a.answered===10&&Number.isInteger(a.correct)&&a.correct>=0&&a.correct<=10&&
    a.accuracy===a.correct/10&&a.readiness_state===(a.correct>=8?"READY":"REVIEW_RECOMMENDED")&&
    Array.isArray(a.items)&&a.items.length===10&&a.items.every((v,i)=>isObj(v)&&
      v.id===EXPECTED_IDS[i]&&Number.isInteger(v.selected)&&v.selected>=0&&v.selected<=3&&
      typeof v.correct==="boolean"&&typeof v.skill==="string"&&v.skill.length>0);
  const save=(storage,attempt)=>{
    if(!validAttempt(attempt))return error("INVALID_ATTEMPT");
    const current=read(storage);
    if(!current.ok)return current;
    const store=current.store;
    const before=store.assessments[ID]||{attempts:[]};
    const collision=before.attempts.find(a=>a.attempt_id===attempt.attempt_id);
    if(collision)return collision.role===ROLE&&JSON.stringify(collision)===JSON.stringify(attempt)
      ?{ok:true,alreadySaved:true,totalAttempts:before.attempts.length}
      :error("ATTEMPT_ID_CONFLICT");
    const attempts=[...before.attempts,attempt];
    const official=attempts.filter(a=>a.role===ROLE);
    const best=official.reduce((a,b)=>!a||b.accuracy>a.accuracy?b:a,null);
    // Preserve old QA summary objects (if any); never retroactively count QA
    // as an official result, even if QA reached 10/10.
    const oldQaSummary={};
    if(before.latest?.role===LEGACY_QA_ROLE&&!before.legacy_qa_latest)
      oldQaSummary.legacy_qa_latest=before.latest;
    if(before.best&&before.latest?.role===LEGACY_QA_ROLE&&!before.legacy_qa_best)
      oldQaSummary.legacy_qa_best=before.best;
    store.assessments[ID]={...before,...oldQaSummary,attempts,latest:attempt,
      best:{accuracy:best.accuracy,submitted_at:best.submitted_at,readiness_state:best.readiness_state}};
    try{
      storage.setItem(KEY,JSON.stringify(store));
      return {ok:true,alreadySaved:false,totalAttempts:official.length};
    }catch(_){return error("WRITE_FAILED");}
  };
  const history=storage=>{
    const state=read(storage);
    if(!state.ok)return state;
    const all=state.store.assessments[ID]?.attempts||[];
    const official=all.filter(a=>a.role===ROLE);
    return {ok:true,attempts:official,latest:official.length?official[official.length-1]:null};
  };
  const api=Object.freeze({KEY,ID,ROLE,LEGACY_QA_ROLE,EXPECTED_IDS,read,save,history});
  if(typeof module!=="undefined"&&module.exports)module.exports=api;
  if(typeof window!=="undefined")window.MathCT23G9Evidence=api;
})();
