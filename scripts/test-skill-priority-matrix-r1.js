#!/usr/bin/env node
"use strict";
const fs=require("node:fs");
const assert=require("node:assert/strict");
const read=p=>JSON.parse(fs.readFileSync(p,"utf8"));

const matrix=read("docs/assets/data/curriculum/skill-priority-matrix-r1.json");
const reg=read("docs/assets/data/curriculum/skill-taxonomy-v2-registry-r1.json");
const exam=read("docs/assets/data/curriculum/exam-frequency-hanoi-seed-r1.json");
const packet=fs.readFileSync("review-packets/skill-priority-matrix-r1/00_NOTEBOOKLM_PACKET_R1.md","utf8");
const finalResult=fs.readFileSync("review-packets/skill-priority-matrix-r1/04_NOTEBOOKLM_FINAL_RESULT_R1.md","utf8");

assert.equal(matrix.audit_id,"MATH-SKILL-PRIORITY-MATRIX-R1-20261010");
assert.equal(matrix.status,"ACADEMIC_PRIORITY_REVIEW_PASS_NO_RUNTIME_ACTIVATION");
assert.equal(matrix.review?.reviewer,"NotebookLM");
assert.equal(matrix.review?.correction,"PASS");
assert.equal(matrix.review?.final_clearance,"SKILL_PRIORITY_MATRIX_R1_REVIEW_COMPLETE");
assert.equal(matrix.review?.family_decisions_unchanged,131);
assert.deepEqual(matrix.review?.core_counts,{
  P0_FOUNDATION_CRITICAL:11,
  P1_HIGH_VALUE_CORE:37,
  P2_STANDARD_CORE:52
});
assert.equal(matrix.family_rows.length,131);
assert.equal(reg.families.length,131);

const regIds=reg.families.map(f=>f.family_id);
const matrixIds=matrix.family_rows.map(f=>f.family_id);
assert.equal(new Set(matrixIds).size,131);
assert.deepEqual(new Set(matrixIds),new Set(regIds));

const layerCounts={};
const priorityCounts={};
let rationaleCount=0;
for(const row of matrix.family_rows){
  layerCounts[row.layer]=(layerCounts[row.layer]||0)+1;
  priorityCounts[row.review_decision.learner_priority]=(priorityCounts[row.review_decision.learner_priority]||0)+1;
  if(row.review_decision.rationale) rationaleCount++;
}
assert.deepEqual(layerCounts,{"KNTT-Core":100,"Entrance10":19,"Specialized-Challenge":4,"Core-Support":5,"THPT-Bridge":3});
assert.deepEqual(matrix.current_project_facts.layer_counts,layerCounts);
assert.deepEqual(priorityCounts,{
  P2_STANDARD_CORE:52,
  P0_FOUNDATION_CRITICAL:11,
  P1_HIGH_VALUE_CORE:37,
  E1_HIGH_TRANSFER:10,
  E2_STANDARD_ENTRANCE:9,
  OPTIONAL_SPECIALIST:4,
  SUPPORT_ON_DEMAND:3,
  OPTIONAL_BRIDGE:3,
  SUPPORT_HIGH_VALUE:2
});
assert.equal(rationaleCount,60);

const allowedFoundation=new Set(["HIGH","MEDIUM","LOW","INSUFFICIENT_EVIDENCE"]);
const allowedWeight=new Set(["HIGH","MEDIUM","LOW","OPTIONAL","INSUFFICIENT_EVIDENCE"]);
for(const row of matrix.family_rows){
  const src=reg.families.find(f=>f.family_id===row.family_id);
  assert.ok(src,"unknown family "+row.family_id);
  assert.equal(row.label_vi,src.label_vi);
  assert.equal(row.layer,src.layer);
  assert.deepEqual(row.topics,src.topics);
  assert.deepEqual(row.diagnostic_subskills,src.diagnostic_subskills||[]);
  assert.ok(allowedFoundation.has(row.review_decision.foundation_importance),"foundation vocabulary "+row.family_id);
  assert.ok(allowedWeight.has(row.review_decision.practice_weight_guidance),"weight vocabulary "+row.family_id);
}

const p0p1e1Support=new Set([
  "P0_FOUNDATION_CRITICAL","P1_HIGH_VALUE_CORE","E1_HIGH_TRANSFER","SUPPORT_HIGH_VALUE"
]);
for(const row of matrix.family_rows){
  if(p0p1e1Support.has(row.review_decision.learner_priority) ||
     row.review_decision.foundation_importance==="INSUFFICIENT_EVIDENCE" ||
     row.review_decision.learner_priority==="INSUFFICIENT_EVIDENCE" ||
     row.review_decision.practice_weight_guidance==="INSUFFICIENT_EVIDENCE"){
    assert.ok(row.review_decision.rationale,"required rationale missing "+row.family_id);
  }
}

assert.equal(
  matrix.family_rows.find(r=>r.family_id==="SYS-MODEL").review_decision.rationale,
  "High-value modeling skill translating two-variable word problems into linear systems within the KNTT Grade 9 core algebra curriculum."
);
assert.equal(
  matrix.family_rows.find(r=>r.family_id==="CIRCLE-CYCLIC").review_decision.rationale,
  "Critical geometric synthesis bottleneck for cyclic quadrilateral proof criteria, observed in 3/3 papers of the declared Hanoi 2024–2026 seed."
);

assert.equal(exam.status,"OFFICIAL_SOURCE_SEED_ONLY");
assert.equal(exam.sources.length,3);
assert.deepEqual(exam.sources.map(x=>x.year),[2024,2025,2026]);
assert.equal(matrix.corpus_limits.hanoi_seed_denominator,3);
assert.equal(matrix.corpus_limits.city_specific,true);
assert.equal(matrix.corpus_limits.national_model,false);
assert.equal(matrix.corpus_limits.specialist_exam_corpus_included,false);

const expectedExamFamilies=new Set((exam.observed_archetypes||[]).flatMap(x=>x.taxonomy_candidates||[]));
const observed=new Set(matrix.family_rows.filter(r=>r.official_hanoi_entrance_seed_2024_2026.status==="OBSERVED_IN_SEED").map(r=>r.family_id));
assert.deepEqual(observed,expectedExamFamilies);

for(const v of Object.values(matrix.protected_boundaries)) assert.equal(v,false);
assert.ok(packet.includes("exactly 131 FAMILY lines"));
assert.ok(finalResult.includes("CORRECTION|PASS"));
assert.ok(finalResult.includes("CORE_COUNTS|P0=11|P1=37|P2=52"));
assert.ok(finalResult.includes("FAMILY_DECISIONS|UNCHANGED|131"));
assert.ok(finalResult.includes("CLEARANCE|SKILL_PRIORITY_MATRIX_R1_REVIEW_COMPLETE"));

console.log("PASS: Skill Priority Matrix R1 records 131/131 NotebookLM-reviewed family decisions.");
console.log("PASS: Core priority counts reconcile to P0=11, P1=37, P2=52 and corrected rationales are source-bounded.");
console.log("PASS: no taxonomy/layer/runtime/Mastery/history activation is introduced by this review artifact.");
