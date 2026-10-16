#!/usr/bin/env node
"use strict";
const assert=require("node:assert/strict");
const Projection=require("./prototypes/math-unified-evidence-projection-r1.js");
const encode=JSON.stringify;
class ReadOnlyStorage{
  constructor(entries={}){this.entries=structuredClone(entries);this.reads=[];}
  getItem(k){this.reads.push(k);return Object.hasOwn(this.entries,k)?this.entries[k]:null;}
  setItem(){throw Error("PROJECTION_MUST_NOT_WRITE");}
  removeItem(){throw Error("PROJECTION_MUST_NOT_DELETE");}
}
const seed={
  "toan-thcs-practice-v1":encode({questions:{Q1:{attempted:3,correct:2},Q2:{attempted:1,correct:1}},tags:{}}),
  "toan-thcs-assessment-v1":encode({assessments:{A1:{attempts:[{submitted_at:"2026-10-01",correct:2,total:3},{correct:3,total:3}]},A2:{attempts:[{submitted_at:"2026-10-02"}]}}}),
  "toan-thcs-assessment-v2":encode({schema:"one-skill-assessment-events-v2",events:[{id:"same-as-legacy?=unknown"}]}),
  "toan-thcs-taxonomy-v2-evidence-v1":encode({schema:"taxonomy-v2-evidence-store-v1",independent_units:{U1:{correct:true},U2:{correct:false}},recent_events:[],seen_questions:{}}),
  "toan-thcs-canonical-evidence-v2":encode({schema:"canonical-skill-evidence-store-v2",recent_events:[{id:"CE1"}],seen_questions:{},independent_units:{}}),
  "toan-thcs-remediation-v1":encode({events:[{id:"R1"}]}),
  "roadmap:exam-history-v1":encode([{id:"EX1"}])
};
const source=new ReadOnlyStorage(seed), before=structuredClone(source.entries);
const p=Projection.project(source);
assert.deepEqual(source.entries,before,"projection must preserve stored bytes");
assert.equal(source.reads.length,Object.keys(Projection.keys).length,"each allowlisted source read exactly once");
assert.equal(p.schema,"math-unified-evidence-projection-r1");
assert.equal(p.mode,"READ_ONLY_FIXTURE_READY");
assert.equal(p.practice.attempts,4);
assert.equal(p.practice.correct,3);
assert.equal(p.practice.distinct_questions,2);
assert.equal(p.practice.historical_aggregate_only,true);
assert.equal(p.practice.time_range,"UNAVAILABLE");
assert.equal(p.readiness.submissions,2);
assert.equal(p.readiness.distinct_assessments,2);
assert.equal(p.readiness_pilot.observed_events,1);
assert.equal(p.taxonomy.count,2);
assert.equal(p.taxonomy.not_additive_to_readiness,true);
assert.equal(p.canonical.observed_events,1);
assert.equal(p.remediation.events,1);
assert.equal(p.exams.entries,1);
assert.equal(p.written.state,"untracked");
assert.equal(p.written.automatic_readiness_credit,false);
assert.equal(p.rules.no_cross_store_sum,true);
assert.equal(p.rules.no_synthetic_attempts,true);
assert.equal(p.rules.historic_snapshot_may_be_archived_before_fresh_v2_counter,true);
const empty=Projection.project(new ReadOnlyStorage());
assert.equal(empty.practice.state,"missing");
assert.equal(empty.readiness.state,"missing");
assert.equal(empty.practice.attempts,undefined,"missing evidence is not a measured zero");
const corrupted=Projection.project(new ReadOnlyStorage({
  ...seed,"toan-thcs-practice-v1":encode({questions:{Q1:{attempted:2,correct:3}},tags:{}}),
  "toan-thcs-assessment-v1":"{not json"
}));
assert.equal(corrupted.practice.state,"invalid");
assert.equal(corrupted.readiness.state,"invalid");
const unreachable={getItem(){throw Error("storage denied");}};
assert.equal(Projection.project(unreachable).practice.state,"unavailable");
console.log("PASS Phase4 R1: fixture-only read projection, separate counter semantics, no writes, no synthetic history, missing/invalid/unavailable distinguished");
