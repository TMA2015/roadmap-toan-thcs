/* R7 QA-only: capture real Practice + Readiness saves into R6 atomic journal/outbox.
 * Injected by Playwright only; no learner page loads this script.
 */
(() => {
  "use strict";
  if (window.top !== window || !/^https?:$/.test(location.protocol)) return;
  const cfg = window.__MATH_R7_QA_CONFIG__;
  if (!cfg?.enabled) return;
  const api = window.MathV2JournalR6;
  if (!api?.createCanary) throw Error("R7_JOURNAL_DEPENDENCY_MISSING");
  const scope = cfg.learner_scope;
  if (!/^[A-Za-z0-9_-]{3,128}$/.test(scope || "")) throw Error("R7_SCOPE_REQUIRED");
  const journal = api.createCanary({learner_scope:scope,enabled:true});
  const failures = [];
  const receipts = new Set();
  const audit = {capture_started:0,capture_committed:0};
  const event=(kind,item,evidence_class,extra={})=>({
    schema:"math-evidence-event-v2",
    event_id:"QA_R7_"+crypto.randomUUID().replace(/-/g,""),
    learner_scope:scope,item_id:item,kind,evidence_class,
    occurred_at:new Date().toISOString(),...extra
  });
  const record = async source => {
    audit.capture_started++;
    try {
      if (cfg.simulateJournalFailure) throw Error("R7_QA_JOURNAL_UNAVAILABLE");
      const result=await (await journal).append(source);
      if (result.written) audit.capture_committed++;
      return result;
    } catch(err) {
      failures.push(String(err?.message||err));
      throw err;
    }
  };
  const capturePractice=({question_id,correct,hints_used=0,full_solution_viewed=false}={})=>{
    if(typeof question_id!=="string"||!question_id||typeof correct!=="boolean")
      throw Error("R7_INVALID_PRACTICE_CAPTURE");
    return record(event("answer_attempt",question_id,"FORMATIVE",{
      correct,assisted:Boolean(hints_used>0||full_solution_viewed)
    }));
  };
  const captureReadiness=({assessment_id,submitted_at}={})=>{
    if(typeof assessment_id!=="string"||!assessment_id||
       typeof submitted_at!=="string"||!Number.isFinite(Date.parse(submitted_at)))
      throw Error("R7_INVALID_READINESS_CAPTURE");
    return record(event("readiness_submission",assessment_id,"INDEPENDENT_ASSESSMENT",{
      occurred_at:submitted_at
    }));
  };
  const qaCrashOnce=async()=>{
    let crashed=false;
    try{
      await (await journal).drain(async e=>{
        receipts.add(e.event_id);
        throw Error("R7_SIMULATED_ACK_INTERRUPTION");
      });
    }catch(err){crashed=err?.message==="R7_SIMULATED_ACK_INTERRUPTION";}
    return {crashed,receipt_count:receipts.size,snapshot:await (await journal).snapshot()};
  };
  const qaRetry=async()=>{
    let delivered=0,duplicateReceiver=0;
    const done=await (await journal).drain(async e=>{
      if(receipts.has(e.event_id)) duplicateReceiver++;
      else {receipts.add(e.event_id);delivered++;}
    });
    return {done,delivered,duplicateReceiver,receipt_count:receipts.size,
      snapshot:await (await journal).snapshot()};
  };
  // The observer names exist only in this injected QA frame. When absent,
  // legacy Practice/Readiness continue unchanged; this is NOT a live cutover.
  window.MathV2CanaryBridgeR5=Object.freeze({capturePractice,captureReadiness});
  window.MathV2JournalBridgeR7=Object.freeze({
    qaSnapshot:async()=>await (await journal).snapshot(),
    qaEvents:async()=>await (await journal).readEvents(),
    qaPending:async()=>await (await journal).readPending(),
    qaCrashOnce,qaRetry,
    qaDiagnostics:()=>({started:audit.capture_started,committed:audit.capture_committed,
      failures:[...failures]})
  });
})();
