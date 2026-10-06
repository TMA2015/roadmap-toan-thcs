#!/usr/bin/env node
"use strict";
// Technical gate only; NotebookLM gate remains external until clearance is reconciled.
const assert=require("node:assert/strict");
const fs=require("node:fs");
const read=p=>JSON.parse(fs.readFileSync(p,"utf8"));

const audit=read("docs/assets/data/curriculum/kntt-dimension-coverage-g6-v1.json");
const rerank=read("docs/assets/data/curriculum/kntt-g6-nonlearn-rerank-r1.json");
const written=read("docs/assets/data/written-exercises/written-exercise-library-v1.json");
const ready=read("docs/assets/data/assessment/23-xac-suat-core-v1.json");

const byLesson=Object.fromEntries(audit.rows.map(r=>[r.lesson_ref,r]));
assert.equal(audit.summary.dimension_status_counts.LEARN_CONTENT.PARTIAL_PLACEMENT,0);
assert.equal(audit.summary.dimension_status_counts.MICRO_PRACTICE.PARTIAL,0);
assert.equal(audit.summary.dimension_status_counts.READINESS.NOT_VERIFIED_STRUCTURED,29);
assert.equal(audit.summary.dimension_status_counts.READINESS.AUTHORIZED_TOPIC_LEVEL,1);
assert.equal(audit.summary.dimension_status_counts.READINESS.REVIEWED_STRUCTURED_READINESS,1);
assert.equal(audit.summary.dimension_status_counts.READINESS.PENDING_REVIEW,0);

assert.equal(byLesson["Bài 42"].dimensions.READINESS.status,"NOT_VERIFIED_STRUCTURED");
assert.equal(byLesson["Bài 43"].dimensions.READINESS.status,"REVIEWED_STRUCTURED_READINESS");
assert.equal(byLesson["Bài 43"].dimensions.READINESS.evidence.clearance,"G6_PROB23_READINESS_R1_CONTENT_REVIEW_COMPLETE");
assert.deepEqual(byLesson["Bài 43"].dimensions.READINESS.evidence.item_ids,["PRO23READY_001","PRO23READY_002","PRO23READY_003","PRO23READY_004"]);
assert.equal(byLesson["Bài 38-41"].dimensions.READINESS.status,"AUTHORIZED_TOPIC_LEVEL");

assert.equal(rerank.practice_rerank.conclusion,"NO_IMMEDIATE_AUTHORING_QUEUE");
assert.equal(rerank.practice_rerank.counts.NONE,0);
assert.equal(rerank.written_rerank.true_placement_candidates.length,3);
assert.equal(rerank.written_rerank.false_positive_row_matches.length,2);
assert.deepEqual(
  rerank.written_rerank.true_placement_candidates.map(x=>[x.exercise_id,x.kntt_lesson_ref]),
  [["WX02-NUM-001","Bài 11-12"],["WX02-NUM-002","Bài 31"],["WX23-PRO-001","Bài 43"]]
);
assert.deepEqual(
  rerank.written_rerank.false_positive_row_matches.map(x=>[x.lesson_ref,x.exercise_id]),
  [["Bài 10","WX02-NUM-001"],["Bài 28-29","WX02-NUM-002"]]
);

const writtenIds=new Set(written.exercises.map(x=>x.exercise_id));
for(const id of ["WX02-NUM-001","WX02-NUM-002","WX23-PRO-001"]) assert.ok(writtenIds.has(id),id);

const g6=ready.items.filter(q=>q.curriculum?.grades?.includes(6));
assert.equal(g6.length,4);
assert.deepEqual(g6.map(q=>q.id),["PRO23READY_001","PRO23READY_002","PRO23READY_003","PRO23READY_004"]);
assert.ok(g6.every(q=>q.skill==="xac-suat-thuc-nghiem"));
assert.ok(!g6.some(q=>["ket-qua-co-the","su-kien-don-gian"].includes(q.skill)));
assert.equal(ready.policy.hints,false);
assert.equal(ready.policy.tutor,false);
assert.equal(ready.policy.feedback,"after_submit");
assert.equal(ready.readiness.hard_gate,false);

assert.equal(rerank.readiness_rerank.academic_review_candidate.lesson_ref,"Bài 43");
assert.equal(rerank.readiness_rerank.academic_review_candidate.status,"REVIEWED_STRUCTURED_READINESS");
assert.equal(rerank.readiness_rerank.academic_review_candidate.clearance,"G6_PROB23_READINESS_R1_CONTENT_REVIEW_COMPLETE");
assert.equal(rerank.readiness_rerank.corrected_false_pending[0].lesson_ref,"Bài 42");
assert.equal(rerank.next_gate.packet,"MATH-KNTT-G6-PROB23-READINESS-R1-20261006");
assert.ok(fs.existsSync("review-packets/kntt-g6-prob23-readiness-r1/00_NOTEBOOKLM_PACKET_R1.md"));
assert.ok(fs.existsSync("review-packets/kntt-g6-prob23-readiness-r1/01_NOTEBOOKLM_RESULT_R1.md"));

console.log("PASS: Grade-6 non-Learn rerank keeps Practice shared, separates true Written placement from prerequisite overlap, and records reviewed structured Readiness for Bài 43 while Bài 42 remains unverified.");
