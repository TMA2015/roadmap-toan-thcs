/* Phase 4 R9 — QA-only pure projection for new canonical V2 event journals.
 * Never reads/writes localStorage or IndexedDB itself; no legacy score backfill.
 */
(() => {
  "use strict";
  const classes=Object.freeze({
    answer_attempt:"FORMATIVE",
    readiness_submission:"INDEPENDENT_ASSESSMENT",
    written_self_check:"SELF_REPORTED",
    remediation_action:"REMEDIATION",
    exam_submission:"EXAM_ASSESSMENT"
  });
  const isObject=x=>x!==null&&typeof x==="object"&&!Array.isArray(x);
  const isCount=n=>Number.isSafeInteger(n)&&n>=0;
  const stable=x=>JSON.stringify(x,(_,v)=>isObject(v)
    ?Object.fromEntries(Object.entries(v).sort(([a],[b])=>a.localeCompare(b))):v);
  const validate=e=>{
    if(!isObject(e)||e.schema!=="math-evidence-event-v2"||
       !/^[A-Za-z0-9_-]{6,128}$/.test(e.event_id||"")||
       !/^[A-Za-z0-9_-]{3,128}$/.test(e.learner_scope||"")||
       typeof e.item_id!=="string"||!e.item_id||e.item_id.length>160||
       !Object.hasOwn(classes,e.kind)||classes[e.kind]!==e.evidence_class||
       typeof e.occurred_at!=="string"||!Number.isFinite(Date.parse(e.occurred_at)))
      throw Error("INVALID_CANONICAL_SOURCE");
    if(e.kind==="answer_attempt"&&typeof e.correct!=="boolean")
      throw Error("INVALID_FORMATIVE_SOURCE");
    if(e.kind!=="answer_attempt"&&Object.hasOwn(e,"correct"))
      throw Error("GRADING_LANE_CROSSOVER");
    if(Object.hasOwn(e,"topic_id")&&e.topic_id!==null&&!/^CT\d{2}$/.test(e.topic_id))
      throw Error("INVALID_TOPIC_ID");
    if(e.kind==="readiness_submission"&&Object.hasOwn(e,"result")){
      const r=e.result;
      if(!isObject(r)||!isCount(r.correct)||!isCount(r.answered)||!isCount(r.total)||
         r.correct>r.answered||r.answered>r.total||r.total===0||
         (Object.hasOwn(r,"readiness_state")&&typeof r.readiness_state!=="string"))
        throw Error("INVALID_READINESS_RESULT");
    }
    return e;
  };
  function project(events,{learner_scope}={}){
    if(!Array.isArray(events))throw Error("EVENT_ARRAY_REQUIRED");
    if(!/^[A-Za-z0-9_-]{3,128}$/.test(learner_scope||""))throw Error("LEARNER_SCOPE_REQUIRED");
    const ids=new Map(),rows=[];
    for(const raw of events){
      const e=validate(raw);
      if(e.learner_scope!==learner_scope)throw Error("CROSS_LEARNER_EVENT");
      const saved=ids.get(e.event_id),serialized=stable(e);
      if(saved!==undefined){
        if(saved!==serialized)throw Error("CONFLICTING_EVENT_ID");
        continue;
      }
      ids.set(e.event_id,serialized);
      rows.push(e);
    }
    // Order by the event's original timestamp, NOT the time a browser
    // tab happened to replay the journal; stable ID breaks ties.
    rows.sort((a,b)=>Date.parse(a.occurred_at)-Date.parse(b.occurred_at)||
      a.event_id.localeCompare(b.event_id));
    const report={
      schema:"math-v2-journal-dashboard-projection-r9",
      source:"NEW_CANONICAL_V2_ONLY",mode:"READ_ONLY_QA",
      learner_scope,events:rows.length,
      formative:{answers:0,correct:0,assisted:0},
      readiness:{submissions:0,scored:0,unscored:0,latest_by_assessment:Object.create(null)},
      written:{self_checks:0,automatic_readiness_credit:0},
      remediation:{actions:0},exams:{submissions:0},
      per_topic:{},unassigned_topic_events:0,
      policy:{
        legacy_replayed:false,no_cross_lane_sum:true,
        missing_score_is_not_zero:true,
        readiness_state_not_regraded:true
      }
    };
    for(const e of rows){
      const t=e.topic_id||null;
      if(!t)report.unassigned_topic_events++;
      else if(!report.per_topic[t])report.per_topic[t]={
        formative_answers:0,formative_correct:0,
        independent_submissions:0,written_self_checks:0
      };
      const bucket=t?report.per_topic[t]:null;
      if(e.kind==="answer_attempt"){
        report.formative.answers++;
        if(e.correct)report.formative.correct++;
        if(e.assisted===true)report.formative.assisted++;
        if(bucket){
          bucket.formative_answers++;
          if(e.correct)bucket.formative_correct++;
        }
      }else if(e.kind==="readiness_submission"){
        report.readiness.submissions++;
        if(bucket)bucket.independent_submissions++;
        const assessment=e.item_id;
        const data=e.result;
        const scored=data!==undefined;
        if(scored)report.readiness.scored++;
        else report.readiness.unscored++;
        const latest={
          event_id:e.event_id,submitted_at:e.occurred_at,topic_id:t,
          score_status:scored?"SOURCE_REPORTED":"UNAVAILABLE",
          // A missing assessment result is UNKNOWN, not 0/0.
          correct:scored?data.correct:null,total:scored?data.total:null,
          answered:scored?data.answered:null,
          readiness_state:scored?(data.readiness_state||null):null
        };
        report.readiness.latest_by_assessment[assessment]=latest;
      }else if(e.kind==="written_self_check"){
        report.written.self_checks++;
        if(bucket)bucket.written_self_checks++;
      }else if(e.kind==="remediation_action"){
        report.remediation.actions++;
      }else if(e.kind==="exam_submission"){
        report.exams.submissions++;
      }
    }
    return report;
  }
  const api=Object.freeze({classes,validate,project});
  if(typeof module!=="undefined"&&module.exports)module.exports=api;
  if(typeof window!=="undefined")window.MathV2JournalDashboardR9=api;
})();
