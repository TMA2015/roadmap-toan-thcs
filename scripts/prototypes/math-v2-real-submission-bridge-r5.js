/* R5: QA INJECTION ONLY; intentionally excluded from docs/assets and site builds.
 * Practice/Readiness runtime hooks are inert unless this QA bridge is injected.
 */
(() => {
  "use strict";
  // add_init_script also executes inside MathJax/sandboxed subframes.
  // IndexedDB is inaccessible in opaque-origin frames: capture only the
  // secure-or-localhost first-party top-level learner page.
  if(window.top!==window||!/^https?:$/.test(location.protocol))return;
  const config=window.__MATH_R5_QA_CONFIG__;
  if(!config?.enabled)return;
  if(!window.MathV2IDBCanaryR4?.createCanary)throw Error("QA_IDB_R4_DEPENDENCY_MISSING");
  if(!/^[A-Za-z0-9_-]{3,128}$/.test(config.learner_scope||""))throw Error("QA_SCOPE_REQUIRED");
  const scope=config.learner_scope;
  const open=window.MathV2IDBCanaryR4.createCanary({learner_scope:scope,enabled:true});
  const base=(kind,item_id,evidence_class)=>({
    schema:"math-evidence-event-v2",
    event_id:"QA_R5_"+crypto.randomUUID().replace(/-/g,""),
    learner_scope:scope,item_id,kind,evidence_class,occurred_at:new Date().toISOString()
  });
  const capturePractice=async ({question_id,correct,hints_used=0,full_solution_viewed=false}={})=>{
    if(typeof question_id!=="string"||!question_id||typeof correct!=="boolean")throw Error("INVALID_PRACTICE_CAPTURE");
    const e={...base("answer_attempt",question_id,"FORMATIVE"),correct,
      assisted:Boolean(hints_used>0||full_solution_viewed)};
    return (await open).append(e);
  };
  const captureReadiness=async ({assessment_id,submitted_at}={})=>{
    if(typeof assessment_id!=="string"||!assessment_id||
       typeof submitted_at!=="string"||!Number.isFinite(Date.parse(submitted_at)))throw Error("INVALID_READINESS_CAPTURE");
    const e={...base("readiness_submission",assessment_id,"INDEPENDENT_ASSESSMENT"),
      occurred_at:submitted_at};
    return (await open).append(e);
  };
  // Use only in the ephemeral QA browser context. This is NOT a production
  // opt-in UI, not a portable learner API, and not a durable error queue.
  window.MathV2CanaryBridgeR5=Object.freeze({
    capturePractice,captureReadiness,
    qaRead:async()=>(await open).read(),
    qaSummarize:async()=>(await open).summarize()
  });
})();
