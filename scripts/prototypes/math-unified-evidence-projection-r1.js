/* Phase 4 R1 — read-only projection of existing local math stores.
 * Pure preview; does not synchronize, rewrite history, regrade, or award mastery. */
(() => {
  "use strict";
  const isObject=x=>x!==null&&typeof x==="object"&&!Array.isArray(x);
  const validCount=x=>typeof x==="number"&&Number.isSafeInteger(x)&&x>=0;
  const keys=Object.freeze({
    practice:"toan-thcs-practice-v1",
    readiness:"toan-thcs-assessment-v1",
    readinessPilot:"toan-thcs-assessment-v2",
    taxonomy:"toan-thcs-taxonomy-v2-evidence-v1",
    canonical:"toan-thcs-canonical-evidence-v2",
    remediation:"toan-thcs-remediation-v1",
    exams:"roadmap:exam-history-v1"
  });
  const read=(storage,key)=>{
    try{
      const raw=storage.getItem(key);
      if(raw===null)return {state:"missing"};
      const value=JSON.parse(raw);
      return {state:"ok",value};
    }catch(e){return {state:e instanceof SyntaxError?"invalid":"unavailable"};}
  };
  const blank=(state,reason)=>({state,reason,available:false});
  const projectPractice=r=>{
    if(r.state!=="ok")return blank(r.state,"legacy_question_counters");
    const value=r.value;
    if(!isObject(value)||!isObject(value.questions)||!isObject(value.tags))return blank("invalid","missing_practice_fields");
    const rows=Object.entries(value.questions);
    for(const [,v] of rows){
      if(!isObject(v)||!validCount(v.attempted)||!validCount(v.correct)||v.correct>v.attempted)
        return blank("invalid","inconsistent_question_counters");
    }
    return {
      state:"ok",available:true,evidence_class:"FORMATIVE",
      unit:"answer_attempt",historical_aggregate_only:true,
      attempts:rows.reduce((n,[,v])=>n+v.attempted,0),
      correct:rows.reduce((n,[,v])=>n+v.correct,0),
      distinct_questions:rows.filter(([,v])=>v.attempted>0).length,
      time_range:"UNAVAILABLE"
    };
  };
  const projectReadiness=r=>{
    if(r.state!=="ok")return blank(r.state,"submitted_assessments");
    if(!isObject(r.value)||!isObject(r.value.assessments))return blank("invalid","missing_assessments");
    let count=0,assessments=0;
    for(const [,v] of Object.entries(r.value.assessments)){
      if(!isObject(v)||!Array.isArray(v.attempts))return blank("invalid","invalid_attempts");
      const submitted=v.attempts.filter(a=>isObject(a)&&typeof a.submitted_at==="string");
      if(submitted.length)assessments++;
      count+=submitted.length;
    }
    return {state:"ok",available:true,evidence_class:"INDEPENDENT_ASSESSMENT",
      unit:"submitted_assessment",submissions:count,distinct_assessments:assessments,
      historical_aggregate_only:false,automatic_mastery_credit:false};
  };
  const projectEvents=(r,schema,field,cls)=>{
    if(r.state!=="ok")return blank(r.state,field);
    if(!isObject(r.value)||r.value.schema!==schema||!Array.isArray(r.value[field]))return blank("invalid","schema_or_events");
    return {state:"ok",available:true,evidence_class:cls,
      unit:"source_event_unreconciled",observed_events:r.value[field].length,
      cross_store_deduplicated:false,automatic_mastery_credit:false};
  };
  const projectIndependent=r=>{
    if(r.state!=="ok")return blank(r.state,"taxonomy_independent_units");
    if(!isObject(r.value)||r.value.schema!=="taxonomy-v2-evidence-store-v1"||!isObject(r.value.independent_units))
      return blank("invalid","taxonomy_schema");
    const units=Object.values(r.value.independent_units);
    if(units.some(x=>!isObject(x)))return blank("invalid","taxonomy_units");
    return {state:"ok",available:true,evidence_class:"INDEPENDENT_EVIDENCE_DIAGNOSTIC",
      unit:"unique_source_unit",count:units.length,
      correct:units.filter(x=>x.correct===true).length,
      not_additive_to_readiness:true};
  };
  const project=(storage)=>{
    const r=Object.fromEntries(Object.entries(keys).map(([name,key])=>[name,read(storage,key)]));
    const exam=r.exams.state!=="ok"?blank(r.exams.state,"exam_history"):Array.isArray(r.exams.value)
      ?{state:"ok",available:true,evidence_class:"EXAM_HISTORY",unit:"history_entry",entries:r.exams.value.length,not_additive_to_readiness:true}
      :blank("invalid","exam_history_array");
    return {
      schema:"math-unified-evidence-projection-r1",
      mode:"READ_ONLY_FIXTURE_READY",
      practice:projectPractice(r.practice),
      readiness:projectReadiness(r.readiness),
      readiness_pilot:projectEvents(r.readinessPilot,"one-skill-assessment-events-v2","events","ASSESSMENT_PILOT"),
      taxonomy:projectIndependent(r.taxonomy),
      canonical:projectEvents(r.canonical,"canonical-skill-evidence-store-v2","recent_events","INTERNAL_CANONICAL_DIAGNOSTIC"),
      remediation:r.remediation.state!=="ok"?blank(r.remediation.state,"remediation_events"):
        (isObject(r.remediation.value)&&Array.isArray(r.remediation.value.events)
          ?{state:"ok",available:true,evidence_class:"REMEDIATION",unit:"logged_action",events:r.remediation.value.events.length}
          :blank("invalid","remediation_events")),
      exams:exam,
      written:{state:"untracked",available:false,evidence_class:"SELF_REPORTED",unit:"paper_self_check",
        automatic_readiness_credit:false},
      rules:{
        no_cross_store_sum:true,
        no_synthetic_attempts:true,
        no_assumed_timestamps:true,
        do_not_regrade:true,
        historic_snapshot_may_be_archived_before_fresh_v2_counter:true
      }
    };
  };
  const api=Object.freeze({keys,project});
  if(typeof module!=="undefined"&&module.exports)module.exports=api;
  if(typeof window!=="undefined")window.MathUnifiedEvidenceProjectionR1=api;
})();
