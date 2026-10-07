#!/usr/bin/env node
"use strict";
const assert=require("node:assert/strict");
const fs=require("node:fs");
const crypto=require("node:crypto");
const read=p=>fs.readFileSync(p,"utf8");
const json=p=>JSON.parse(read(p));
const blob=text=>crypto.createHash("sha1").update("blob "+Buffer.byteLength(text,"utf8")+"\0"+text).digest("hex");

const artifact=json("docs/assets/data/curriculum/kntt-g6-written-bai42-r1.json");
const packet=read("review-packets/kntt-g6-written-bai42-r1/00_NOTEBOOKLM_PACKET_R1.md");
const library=json("docs/assets/data/written-exercises/written-exercise-library-v1.json");

assert.equal(artifact.packet_id,"MATH-KNTT-G6-WRITTEN-BAI42-R1-20261007");
assert.equal(artifact.status,"ACADEMIC_REVIEW_PENDING");
assert.equal(artifact.candidate_count,1);
assert.deepEqual(artifact.candidate_ids,["WX23-PRO-003"]);
assert.equal(artifact.prior_priority.priority,"P1");
assert.equal(artifact.prior_priority.lesson,"Bài 42");

assert.equal(artifact.notebooklm_source_contract.selected_source_count,5);
assert.equal(artifact.notebooklm_source_contract.permanent_sources.length,2);
assert.equal(artifact.notebooklm_source_contract.grade6_s1_sources.length,2);
assert.equal(artifact.notebooklm_source_contract.temporary_batch_sources.length,1);
assert.deepEqual(artifact.notebooklm_source_contract.explicitly_not_selected,["Written Exercise Library Contract v1"]);
assert.ok(packet.includes("Select exactly 5 Sources"));
assert.ok(packet.includes("2 permanent governance sources + 2 Grade-6 SGK sources + 1 temporary packet = 5 selected Sources total."));
assert.ok(packet.includes("Do **not** add `Written Exercise Library Contract v1` as a separate NotebookLM Source"));

for(const k of ["written_library","grade6_dimension_audit","topic23_workspace","topic23_micro"]){
  const lock=artifact.source_locks[k];
  assert.equal(blob(read(lock.path)),lock.sha,"source drift: "+lock.path);
}
const prior=read(artifact.source_locks.prior_bai42_review.path);
assert.ok(prior.includes(artifact.source_locks.prior_bai42_review.clearance),"prior Bài 42 clearance missing");

assert.equal(library.exercises.length,53);
assert.ok(!library.exercises.some(x=>x.exercise_id==="WX23-PRO-003"),"candidate must not exist in canonical library before review");

const x=artifact.candidates[0];
assert.equal(x.exercise_id,"WX23-PRO-003");
assert.equal(x.exercise_kind,"anchor");
assert.equal(x.topic_id,"CT23");
assert.equal(x.learning_layer,"KNTT-Core");
assert.deepEqual(x.skills,[]);
assert.deepEqual(x.lesson_local_targets,["ket-qua-co-the","su-kien-don-gian"]);
assert.deepEqual(x.proposed_kntt_placements,[{grade:6,chapter:9,lesson:"Bài 42 — Kết quả có thể và sự kiện trong trò chơi, thí nghiệm"}]);
assert.equal(x.hint_steps.length,3);
assert.equal(x.rubric_total,5);
assert.equal(x.rubric.reduce((n,r)=>n+Number(r.points||0),0),5);
assert.ok(x.problem_markdown.includes("Không tính xác suất"));
assert.ok(!x.problem_markdown.includes("biến cố"));
assert.ok(x.full_solution_markdown.includes("Bài này không cần tính xác suất"));
assert.ok(x.method_rationale_markdown.includes("Bài 43"));
assert.ok(x.common_mistakes.length>=4);
assert.ok(x.remediation_links.length>=2);
assert.equal(x.academic_review.status,"PENDING");

assert.equal(artifact.protected_boundaries.mutate_production_written_library,false);
assert.equal(artifact.protected_boundaries.create_canonical_skill,false);
assert.equal(artifact.protected_boundaries.use_grade7_bien_co_terminology,false);
assert.equal(artifact.protected_boundaries.introduce_probability_calculation,false);
assert.equal(artifact.protected_boundaries.readiness_credit,false);
assert.equal(artifact.protected_boundaries.mastery_change,false);
assert.equal(artifact.protected_boundaries.learner_history_regrade,false);
assert.equal(artifact.protected_boundaries.runtime_taxonomy_change,false);

assert.ok(packet.includes("EXPECTED_ITEMS|1"));
assert.ok(packet.includes("REVIEWED_ITEMS|1"));
assert.ok(packet.includes("BOUNDARY|G6_SU_KIEN_NOT_G7_BIEN_CO"));
assert.ok(packet.includes("BOUNDARY|BAI42_NOT_BAI43_PROBABILITY"));
assert.ok(packet.includes("BOUNDARY|NO_NEW_CANONICAL_SKILL"));
assert.ok(packet.includes("CLEARANCE|G6_WRITTEN_BAI42_R1_CONTENT_REVIEW_COMPLETE"));

console.log("PASS: Grade-6 Bài 42 Written R1 contains exactly one review-pending deep anchor and does not mutate the canonical library.");
console.log("PASS: Grade-6 'sự kiện' terminology, Bài42/Bài43 boundary, and no-new-skill boundary are locked.");
console.log("PASS: NotebookLM source invariant is exactly 5 Sources (2 permanent + 2 SGK + 1 packet).");
