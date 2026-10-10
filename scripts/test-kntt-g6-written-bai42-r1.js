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
assert.equal(artifact.status,"ACADEMIC_REVIEW_COMPLETE");
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

{
  const lock=artifact.source_locks.written_library;
  assert.match(lock.sha,/^[0-9a-f]{40}$/);
  const current=json(lock.path);
  assert.ok((current.exercises||[]).length>=54,"Written Library historical baseline regressed");
  assert.ok((current.exercises||[]).filter(e=>e.academic_review?.status==="APPROVED").length>=54,"approved Written baseline regressed");
}
{
  const lock=artifact.source_locks.grade6_dimension_audit;
  assert.equal(blob(read(lock.path)),lock.sha,"source drift: "+lock.path);
}
for(const k of ["topic23_workspace","topic23_micro"]){
  const lock=artifact.source_locks[k];
  assert.match(lock.sha,/^[0-9a-f]{40}$/);
  const current=json(lock.path);
  if(k==="topic23_workspace"){
    assert.ok(current.cards.some(card=>card.id==="prob23-core-1"),"historical Bài 42 probability card removed");
  }else{
    for(const id of ["PRO23MICRO_018","PRO23MICRO_019","PRO23MICRO_020"]){
      assert.ok(current.questions.some(q=>q.id===id),"historical Bài 42 Micro removed: "+id);
    }
  }
}
const prior=read(artifact.source_locks.prior_bai42_review.path);
assert.ok(prior.includes(artifact.source_locks.prior_bai42_review.clearance),"prior Bài 42 clearance missing");

assert.ok(library.exercises.length>=54);
const canonical=library.exercises.find(x=>x.exercise_id==="WX23-PRO-003");
assert.ok(canonical,"reviewed Bài 42 item missing from canonical library");
assert.equal(canonical.academic_review.status,"APPROVED");
assert.equal(canonical.academic_review.receipt,"review-packets/kntt-g6-written-bai42-r1/01_NOTEBOOKLM_RESULT_R1.md");
assert.deepEqual(canonical.kntt_placements,[{grade:6,chapter:9,lesson:"Bài 42 — Kết quả có thể và sự kiện trong trò chơi, thí nghiệm"}]);

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
assert.ok(x.full_solution_markdown.includes("Không cần và không được dùng phép tính xác suất"));
assert.ok(x.method_rationale_markdown.includes("Bài 43"));
assert.ok(x.common_mistakes.length>=4);
assert.ok(x.remediation_links.length>=2);
assert.equal(x.academic_review.status,"PENDING"); // immutable pre-review candidate snapshot

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
assert.equal(artifact.review_result.verdict,"PASS");
assert.equal(artifact.review_result.clearance,"G6_WRITTEN_BAI42_R1_CONTENT_REVIEW_COMPLETE");
assert.equal(artifact.review_result.reviewed_items,1);
assert.equal(artifact.implementation.canonical_item_count,54);
assert.equal(artifact.implementation.grade6_items_with_kntt_placement,8);
assert.equal(artifact.implementation.grade6_verified_written_rows,9);
assert.equal(artifact.implementation.new_canonical_skills,0);
assert.equal(artifact.implementation.readiness_credit,false);
const audit=json("docs/assets/data/curriculum/kntt-dimension-coverage-g6-v1.json");
assert.equal(audit.status,"G6_WRITTEN_BAI42_RECONCILED_R1");
assert.equal(audit.summary.written_library_kntt_item_count,8);
assert.equal(audit.summary.written_library_kntt_placement_row_count,9);
assert.deepEqual(audit.summary.dimension_status_counts.WRITTEN_LIBRARY,{
  VERIFIED_KNTT_PLACEMENT:9,
  CANDIDATE_ONLY_NO_KNTT_PLACEMENT:0,
  NONE:22
});
const row42=audit.rows.find(r=>r.lesson_ref==="Bài 42");
assert.equal(row42.dimensions.WRITTEN_LIBRARY.status,"VERIFIED_KNTT_PLACEMENT");
assert.equal(row42.dimensions.WRITTEN_LIBRARY.placements[0].exercise_id,"WX23-PRO-003");
const receipt=read("review-packets/kntt-g6-written-bai42-r1/01_NOTEBOOKLM_RESULT_R1.md");
assert.ok(receipt.includes("OVERALL|PASS"));
assert.ok(receipt.includes("BOUNDARY|G6_SU_KIEN_NOT_G7_BIEN_CO|PASS"));
assert.ok(receipt.includes("BOUNDARY|BAI42_NOT_BAI43_PROBABILITY|PASS"));
assert.ok(receipt.includes("BOUNDARY|NO_NEW_CANONICAL_SKILL|PASS"));
assert.ok(receipt.includes("CLEARANCE|G6_WRITTEN_BAI42_R1_CONTENT_REVIEW_COMPLETE"));

console.log("PASS: Grade-6 Bài 42 Written R1 publishes exactly one independently reviewed deep anchor.");
console.log("PASS: Grade-6 'sự kiện' terminology, Bài42/Bài43 boundary, and no-new-skill boundary are locked.");
console.log("PASS: NotebookLM source invariant is exactly 5 Sources (2 permanent + 2 SGK + 1 packet).");
