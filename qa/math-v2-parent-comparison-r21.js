/* Phase 4 R21 — parent-facing READ-ONLY comparison of synthetic evidence.
 * No real learner storage, no backfill, no write, no migration, no network.
 * Real legacy per-question aggregates have no event IDs: even equal totals
 * MUST remain NOT_COMPARABLE without a separately verified common lineage.
 */
(() => {
  "use strict";
  const isObj = x => x !== null && typeof x === "object" && !Array.isArray(x);
  const count = n => Number.isSafeInteger(n) && n >= 0;
  const scopeOk = s => typeof s === "string" &&
    /^QA_R16_R19_R20_[A-Za-z0-9_-]{2,90}$/.test(s);
  const safe = (n) => { if (!count(n)) throw Error("R21_BAD_COUNT"); return n; };
  const copy = x => JSON.parse(JSON.stringify(x));
  const fail = (code, legacy=null, current=null) => Object.freeze({
    schema:"math-r21-compare-report-v1", status:"INSUFFICIENT_EVIDENCE",
    reason:code, legacy, current, readiness:"NOT_COMPARABLE",
    written:"NOT_COMPARABLE", learner_cutover_allowed:false,
    historical_merge_allowed:false, writes:0
  });
  function legacyView(raw) {
    if (!isObj(raw) || raw.schema !== "math-v1-aggregate-synthetic-r21" ||
        !scopeOk(raw.learner_scope) || !isObj(raw.questions) ||
        !["UNLINKED_AGGREGATE","PAIRED_FIXTURE"].includes(raw.provenance) ||
        (raw.fixture_id !== null && typeof raw.fixture_id !== "string"))
      throw Error("R21_LEGACY_SOURCE_INVALID");
    let attempted=0,correct=0;
    for (const [item,entry] of Object.entries(raw.questions)) {
      if (!/^[A-Za-z0-9_.:-]{2,160}$/.test(item) ||
          !isObj(entry) || !count(entry.attempted) ||
          !count(entry.correct) || entry.correct>entry.attempted)
        throw Error("R21_LEGACY_AGGREGATE_INVALID");
      attempted=safe(attempted+entry.attempted);
      correct=safe(correct+entry.correct);
    }
    if (raw.readiness_submissions !== null && !count(raw.readiness_submissions))
      throw Error("R21_READINESS_SOURCE_INVALID");
    return {source:"SYNTHETIC_V1_AGGREGATE",attempted,correct,
      readiness_submissions:raw.readiness_submissions};
  }
  function v2View(raw) {
    if (!isObj(raw) || raw.schema!=="math-v2-events-synthetic-r21" ||
        !scopeOk(raw.learner_scope) || !Array.isArray(raw.events) ||
        !["UNLINKED_JOURNAL","PAIRED_FIXTURE"].includes(raw.provenance) ||
        (raw.fixture_id !== null && typeof raw.fixture_id !== "string"))
      throw Error("R21_V2_SOURCE_INVALID");
    const ids=new Set(),per_skill=Object.create(null);
    let attempted=0,correct=0,untagged=0;
    for(const e of raw.events){
      if(!isObj(e)||e.schema!=="math-evidence-event-v2" ||
         !/^R20_[a-f0-9]{32}$/.test(e.event_id||"") ||
         e.learner_scope!==raw.learner_scope ||
         e.kind!=="answer_attempt" || e.evidence_class!=="FORMATIVE" ||
         typeof e.item_id!=="string" || !/^[A-Za-z0-9_.:-]{2,160}$/.test(e.item_id) ||
         typeof e.correct!=="boolean" || !Array.isArray(e.skill_ids) ||
         e.skill_ids.length>8 || new Set(e.skill_ids).size!==e.skill_ids.length ||
         e.skill_ids.some((s,i)=> !/^[A-Za-z0-9_.:-]{2,100}$/.test(s) ||
             (i>0 && e.skill_ids[i-1]>=s)))
        throw Error("R21_V2_EVENT_INVALID");
      if(ids.has(e.event_id))throw Error("R21_DUPLICATE_EVENT_ID");
      ids.add(e.event_id);
      attempted=safe(attempted+1);
      if(e.correct)correct=safe(correct+1);
      if(!e.skill_ids.length)untagged=safe(untagged+1);
      for(const skill of e.skill_ids){
        const row=per_skill[skill]||(per_skill[skill]={attempted:0,correct:0});
        row.attempted=safe(row.attempted+1);
        if(e.correct)row.correct=safe(row.correct+1);
      }
    }
    return {source:"SYNTHETIC_R20_EVENTS",attempted,correct,
      per_skill:copy(per_skill),untagged};
  }
  function checkExactPaired(legacy,v2,proof) {
    if(!isObj(proof)||proof.schema!=="math-r21-synthetic-common-lineage-v1" ||
       proof.synthetic_only!==true||!scopeOk(proof.learner_scope)||
       proof.learner_scope!==legacy.learner_scope||
       proof.learner_scope!==v2.learner_scope||
       typeof proof.fixture_id!=="string"||!proof.fixture_id ||
       proof.fixture_id!==legacy.fixture_id||
       proof.fixture_id!==v2.fixture_id||
       !Array.isArray(proof.attempts))
      return "UNVERIFIED_PAIRING";
    const byId=new Map(),byItem=Object.create(null);
    for(const e of v2.events)byId.set(e.event_id,e);
    if(proof.attempts.length!==v2.events.length)return "MISSING_EVENT_COVERAGE";
    const used=new Set();
    for(const a of proof.attempts){
      if(!isObj(a)||typeof a.event_id!=="string"||used.has(a.event_id))
        return "REPEATED_OR_INVALID_PROOF_ID";
      used.add(a.event_id);
      const e=byId.get(a.event_id);
      if(!e || e.item_id!==a.item_id || e.correct!==a.correct)
        return "EVENT_OR_ANSWER_MISMATCH";
      const item=byItem[a.item_id]||(byItem[a.item_id]={attempted:0,correct:0});
      item.attempted++;
      if(a.correct)item.correct++;
    }
    const keysA=Object.keys(byItem).sort();
    const keysB=Object.keys(legacy.questions).sort();
    if(JSON.stringify(keysA)!==JSON.stringify(keysB))return "ITEM_COVERAGE_MISMATCH";
    for(const k of keysA){
      const a=byItem[k],b=legacy.questions[k];
      if(a.attempted!==b.attempted||a.correct!==b.correct)
        return "LEGACY_TOTALS_MISMATCH";
    }
    return null;
  }
  function compare({legacy,v2,proof=null}={}) {
    let oldCount,newCount;
    try {oldCount=legacyView(legacy);newCount=v2View(v2);}
    catch(e){return fail(String(e?.message||e));}
    if(legacy.learner_scope!==v2.learner_scope)
      return fail("DIFFERENT_LEARNER_SCOPE",oldCount,newCount);
    let status="NOT_COMPARABLE",reason="NO_COMMON_EVENT_IDENTITIES";
    if(legacy.provenance==="PAIRED_FIXTURE"&&v2.provenance==="PAIRED_FIXTURE"){
      const issue=checkExactPaired(legacy,v2,proof);
      if(issue){status="QA_MISMATCH";reason=issue;}
      else {status="QA_MATCH";reason="FULL_SYNTHETIC_EVENT_RECONCILIATION";}
    }
    return Object.freeze({
      schema:"math-r21-compare-report-v1",status,reason,
      legacy:oldCount,current:newCount,
      readiness:"NOT_COMPARABLE",written:"NOT_COMPARABLE",
      skill_mastery:"NOT_INFERRED",source_type:"SYNTHETIC_QA_ONLY",
      learner_cutover_allowed:false,historical_merge_allowed:false,writes:0
    });
  }
  const api=Object.freeze({compare});
  if(typeof module!=="undefined"&&module.exports)module.exports=api;
  if(typeof window!=="undefined")window.MathV2ParentComparisonR21=api;
})();
