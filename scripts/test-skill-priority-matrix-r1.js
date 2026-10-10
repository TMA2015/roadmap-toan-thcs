#!/usr/bin/env node
"use strict";
const fs=require("node:fs");
const assert=require("node:assert/strict");
const read=p=>JSON.parse(fs.readFileSync(p,"utf8"));

const matrix=read("docs/assets/data/curriculum/skill-priority-matrix-r1.json");
const reg=read("docs/assets/data/curriculum/skill-taxonomy-v2-registry-r1.json");
const exam=read("docs/assets/data/curriculum/exam-frequency-hanoi-seed-r1.json");
const packet=fs.readFileSync("review-packets/skill-priority-matrix-r1/00_NOTEBOOKLM_PACKET_R1.md","utf8");

assert.equal(matrix.audit_id,"MATH-SKILL-PRIORITY-MATRIX-R1-20261010");
assert.equal(matrix.status,"REVIEW_PREP_ONLY_NO_PRIORITY_ACTIVATION");
assert.equal(matrix.family_rows.length,131);
assert.equal(reg.families.length,131);

const regIds=reg.families.map(f=>f.family_id);
const matrixIds=matrix.family_rows.map(f=>f.family_id);
assert.equal(new Set(matrixIds).size,131);
assert.deepEqual(new Set(matrixIds),new Set(regIds));

const layerCounts={};
for(const f of matrix.family_rows) layerCounts[f.layer]=(layerCounts[f.layer]||0)+1;
assert.deepEqual(layerCounts,{"KNTT-Core":100,"Entrance10":19,"Specialized-Challenge":4,"Core-Support":5,"THPT-Bridge":3});
assert.deepEqual(matrix.current_project_facts.layer_counts,layerCounts);

for(const row of matrix.family_rows){
  const src=reg.families.find(f=>f.family_id===row.family_id);
  assert.ok(src,"unknown family "+row.family_id);
  assert.equal(row.label_vi,src.label_vi);
  assert.equal(row.layer,src.layer);
  assert.deepEqual(row.topics,src.topics);
  assert.deepEqual(row.diagnostic_subskills,src.diagnostic_subskills||[]);
  assert.equal(row.review_decision.foundation_importance,"PENDING_REVIEW");
  assert.equal(row.review_decision.learner_priority,"PENDING_REVIEW");
  assert.equal(row.review_decision.practice_weight_guidance,"PENDING_REVIEW");
  assert.equal(row.review_decision.rationale,null);
}

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
for(const fid of observed){
  const row=matrix.family_rows.find(r=>r.family_id===fid);
  assert.ok(row.official_hanoi_entrance_seed_2024_2026.archetypes.length>=1);
}

for(const v of Object.values(matrix.protected_boundaries)) assert.equal(v,false);

assert.ok(packet.includes("exactly 131 FAMILY lines"));
assert.ok(packet.includes("HANOI_SEED_NOT_NATIONAL_FREQUENCY"));
assert.ok(packet.includes("SPECIALIST_REMAINS_OPTIONAL"));
assert.ok(packet.includes("SKILL_PRIORITY_MATRIX_R1_REVIEW_COMPLETE"));

console.log("PASS: Skill Priority Matrix R1 contains exactly 131 canonical families with frozen identity/layer metadata.");
console.log("PASS: official Hanoi 2024-2026 seed signals are copied as bounded observed evidence only, not national frequency.");
console.log("PASS: all priority fields remain PENDING_REVIEW; no runtime or learner-facing priority activation occurred.");
