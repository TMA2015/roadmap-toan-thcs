#!/usr/bin/env node
"use strict";
const assert=require("node:assert/strict");
const R9=require("./prototypes/math-v2-journal-dashboard-projection-r9.js");
const scope="QA_R9_OWNER";
const event=(id,kind,extra={})=>({
 schema:"math-evidence-event-v2",event_id:id,learner_scope:scope,
 item_id:"QA_ASSESSMENT_02",kind,evidence_class:R9.classes[kind],
 occurred_at:"2026-10-17T08:00:00+07:00",...extra
});
const source=[
 event("EVENT_0001","answer_attempt",{item_id:"Q1",topic_id:"CT02",correct:true,assisted:true}),
 event("EVENT_0002","answer_attempt",{item_id:"Q2",correct:false}),
 event("EVENT_0003","readiness_submission",{topic_id:"CT02",
   occurred_at:"2026-10-17T08:05:00+07:00"}),
 event("EVENT_0004","readiness_submission",{topic_id:"CT02",
   occurred_at:"2026-10-17T08:10:00+07:00",
   result:{correct:6,answered:7,total:8,readiness_state:"PRACTICE_MORE"}}),
 event("EVENT_0005","readiness_submission",{topic_id:"CT02",
   occurred_at:"2026-10-17T08:15:00+07:00",
   result:{correct:7,answered:8,total:8,readiness_state:"READY"}}),
 event("EVENT_0006","written_self_check",{item_id:"WX01",topic_id:"CT02"}),
 event("EVENT_0007","remediation_action",{item_id:"SKILL01"}),
 event("EVENT_0008","exam_submission",{item_id:"EXAM01"})
];
const before=JSON.stringify(source);
const report=R9.project([...source,structuredClone(source[0])],{learner_scope:scope});
assert.equal(JSON.stringify(source),before,"pure projector may not modify or reorder stored events");
assert.equal(report.source,"NEW_CANONICAL_V2_ONLY");
assert.equal(report.events,8,"exact ID repeat must not count twice");
assert.deepEqual(report.formative,{answers:2,correct:1,assisted:1});
assert.equal(report.readiness.submissions,3);
assert.equal(report.readiness.scored,2);
assert.equal(report.readiness.unscored,1);
assert.equal(report.readiness.latest_by_assessment.QA_ASSESSMENT_02.correct,7);
assert.equal(report.readiness.latest_by_assessment.QA_ASSESSMENT_02.total,8);
assert.equal(report.readiness.latest_by_assessment.QA_ASSESSMENT_02.readiness_state,"READY");
assert.deepEqual(report.written,{self_checks:1,automatic_readiness_credit:0});
assert.deepEqual(report.per_topic.CT02,{
 formative_answers:1,formative_correct:1,independent_submissions:3,written_self_checks:1
});
assert.equal(report.unassigned_topic_events,3);
assert.equal(report.remediation.actions,1);
assert.equal(report.exams.submissions,1);
assert.equal(report.policy.legacy_replayed,false);
assert.equal(report.policy.missing_score_is_not_zero,true);
assert.equal(report.policy.readiness_state_not_regraded,true);
const oldEvent=[event("EVENT_0010","readiness_submission")];
const unknown=R9.project(oldEvent,{learner_scope:scope});
assert.equal(unknown.readiness.latest_by_assessment.QA_ASSESSMENT_02.correct,null);
assert.equal(unknown.readiness.latest_by_assessment.QA_ASSESSMENT_02.score_status,"UNAVAILABLE");
assert.equal(unknown.readiness.scored,0);
assert.equal(unknown.readiness.unscored,1);
assert.throws(()=>R9.project([...source, {...source[0],correct:false}],{learner_scope:scope}),/CONFLICTING_EVENT_ID/);
assert.throws(()=>R9.project([event("EVENT_0011","answer_attempt",{correct:true,learner_scope:"OTHER"})],{learner_scope:scope}),/CROSS_LEARNER_EVENT/);
assert.throws(()=>R9.project([event("EVENT_0012","readiness_submission",{correct:true})],{learner_scope:scope}),/GRADING_LANE_CROSSOVER/);
assert.throws(()=>R9.project([event("EVENT_0013","readiness_submission",{result:{correct:9,answered:8,total:8}})],{learner_scope:scope}),/INVALID_READINESS_RESULT/);
assert.throws(()=>R9.project([event("EVENT_0014","answer_attempt",{correct:true,topic_id:"wrong"})],{learner_scope:scope}),/INVALID_TOPIC_ID/);
assert.throws(()=>R9.project(null,{learner_scope:scope}),/EVENT_ARRAY_REQUIRED/);
assert.throws(()=>R9.project(source,{}),/LEARNER_SCOPE_REQUIRED/);
const shuffled=[source[4],source[0],source[6],source[2],source[3],source[1],source[7],source[5]];
assert.deepEqual(R9.project(shuffled,{learner_scope:scope}),R9.project(source,{learner_scope:scope}),
  "latest Readiness and counters must not depend on array append order");
console.log("PASS R9 journal projection: separated readiness vs practice vs self-check, no fake scores, no replay, dedup, immutable sources, chronological latest");
