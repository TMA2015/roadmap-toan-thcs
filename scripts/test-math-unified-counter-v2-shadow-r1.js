#!/usr/bin/env node
"use strict";
const assert=require("node:assert/strict");
const Core=require("./prototypes/math-unified-counter-v2-shadow-r1.js");
const id="LOCAL1";
const event=(event_id,kind,extra={})=>({
 schema:"math-evidence-event-v2",event_id,learner_scope:id,
 item_id:"Q-MATH-01",kind,evidence_class:Core.classes[kind],
 occurred_at:"2026-10-17T01:00:00+07:00",...extra
});
const original=[
 event("EVENT_0001",Core.TYPES.ANSWER,{correct:true}),
 event("EVENT_0002",Core.TYPES.ANSWER,{correct:false}),
 event("EVENT_0003",Core.TYPES.READINESS),
 event("EVENT_0004",Core.TYPES.WRITTEN),
 event("EVENT_0005",Core.TYPES.REMEDIATION),
 event("EVENT_0006",Core.TYPES.EXAM)
],before=JSON.stringify(original);
const report=Core.summarize([...original,original[0]],{learner_scope:id});
assert.equal(JSON.stringify(original),before,"shadow projection cannot mutate source events");
assert.equal(report.schema,"math-unified-counter-v2-shadow-r1");
assert.equal(report.mode,"SHADOW_ONLY");
assert.deepEqual(report.formative,{answers:2,correct:1});
assert.deepEqual(report.readiness,{submissions:1});
assert.deepEqual(report.written,{self_checks:1,assessment_credit:0});
assert.deepEqual(report.remediation,{actions:1});
assert.deepEqual(report.exams,{submissions:1});
assert.equal(report.accepted,6);
assert.equal(report.duplicates,1);
assert.equal(report.legacy_imported,false);
const zero=Core.summarize([],{learner_scope:id});
assert.equal(zero.formative.answers,0);
assert.equal(zero.readiness.submissions,0);
assert.equal(zero.written.assessment_credit,0);
assert.throws(()=>Core.summarize([original[0],{...original[0],correct:false}]),/CONFLICTING_EVENT_ID/);
assert.throws(()=>Core.summarize([event("EVENT_0007",Core.TYPES.READINESS,{correct:true})]),/NO_CROSS_LANE_GRADING/);
assert.throws(()=>Core.summarize([event("EVENT_0008",Core.TYPES.ANSWER)]),/FORMATIVE_REQUIRES_BOOLEAN_CORRECT/);
assert.throws(()=>Core.summarize([event("EVENT_0009",Core.TYPES.ANSWER,{correct:true,learner_scope:"OTHER"})],{learner_scope:id}),/CROSS_LEARNER_EVENT/);
assert.throws(()=>Core.summarize([event("EVENT_0010",Core.TYPES.WRITTEN,{evidence_class:"INDEPENDENT_ASSESSMENT"})]),/INVALID_CANONICAL_V2_EVENT/);
assert.throws(()=>Core.summarize([event("EVENT_0011",Core.TYPES.ANSWER,{correct:true,occurred_at:"not-a-date"})]),/INVALID_CANONICAL_V2_EVENT/);
assert.throws(()=>Core.summarize({}),/EVENTS_MUST_BE_ARRAY/);
console.log("PASS: canonical v2 shadow-only new-event counts; idempotent replay; conflicting IDs reject; self-check cannot credit Readiness; no legacy imports");
