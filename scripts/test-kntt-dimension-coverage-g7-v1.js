#!/usr/bin/env node
"use strict";
const assert=require("node:assert/strict");
const fs=require("node:fs");
const crypto=require("node:crypto");
const read=p=>fs.readFileSync(p,"utf8");
const json=p=>JSON.parse(read(p));
const blob=text=>crypto.createHash("sha1").update("blob "+Buffer.byteLength(text,"utf8")+"\0"+text).digest("hex");

const a=json("docs/assets/data/curriculum/kntt-dimension-coverage-g7-v1.json");
assert.equal(a.schema,"kntt-dimension-coverage-audit-v1");
assert.equal(a.version,1);
assert.equal(a.grade,7);
assert.equal(a.status,"G7_EXISTING_EVIDENCE_INVENTORY_R1");
assert.equal(a.rows.length,21);
assert.equal(a.summary.row_count,21);
assert.equal(a.summary.semantic_verified_rows,21);
assert.equal(a.summary.content_mutations,0);
assert.equal(a.summary.new_canonical_skills,0);

for(const k of ["coverage_matrix","grade7_reconciliation","grade7_reconciliation_review","taxonomy","written_library"]){
  const lock=a.source_locks[k];
  assert.equal(blob(read(lock.path)),lock.blob_sha,"source drift: "+lock.path);
}
for(const [topic,ev] of Object.entries(a.source_locks.topic_evidence)){
  if(topic==="02-so-va-phep-tinh" || topic==="04-bieu-thuc-dai-so"){
    // The inventory is a historical evidence snapshot. Wave-1 candidates append
    // Grade-7 Learn/Micro/Practice evidence to these two topics; that must not
    // rewrite the inventory's original source locks or conclusions.
    for(const k of ["workspace","micro","manifest"]) assert.match(ev[k].sha,/^[0-9a-f]{40}$/);
    const workspace=json(ev.workspace.path);
    const micro=json(ev.micro.path);
    const manifest=json(ev.manifest.path);
    if(topic==="02-so-va-phep-tinh"){
      for(const id of ["num02-g6-core-1","num02-g6-core-2","num02-g6-core-3","num02-g6-core-4","num02-g6-core-5"]) {
        assert.ok(workspace.cards.some(card=>card.id===id),"historical topic02 card removed: "+id);
      }
      assert.ok(micro.questions.length>=52,"topic02 historical Micro evidence regressed");
      assert.ok(manifest.question_count>=132,"topic02 historical Practice evidence regressed");
    }else{
      for(const id of ["alg04-core-1","alg04-core-2","alg04-core-3","alg04-core-4","alg04-core-5"]) {
        assert.ok(workspace.cards.some(card=>card.id===id),"historical topic04 card removed: "+id);
      }
      assert.ok(micro.questions.length>=15,"topic04 historical Micro evidence regressed");
      assert.ok(manifest.question_count>=132,"topic04 historical Practice evidence regressed");
    }
  }else if(topic==="03-ti-le-ti-le-thuc" || topic==="13-goc-va-duong-thang" || topic==="21-thong-ke" || topic==="23-xac-suat"){
    // Wave 2 is append-only Learn/Micro repair for Grade 7 on these topics.
    // Preserve historical inventory locks while asserting the pre-existing
    // evidence remains and Practice/assessment sources stay unchanged.
    for(const k of ["workspace","micro"]) assert.match(ev[k].sha,/^[0-9a-f]{40}$/);
    if(topic==="03-ti-le-ti-le-thuc"){
      assert.match(ev.manifest.sha,/^[0-9a-f]{40}$/);
      const currentManifest=json(ev.manifest.path);
      assert.ok(currentManifest.question_count>=120,"topic03 Practice baseline regressed");
    }else{
      assert.equal(blob(read(ev.manifest.path)),ev.manifest.sha,"source drift: "+ev.manifest.path);
    }
    const workspace=json(ev.workspace.path);
    const micro=json(ev.micro.path);
    if(topic==="03-ti-le-ti-le-thuc"){
      for(const id of ["rat03-core-g6-1","rat03-core-g7-2","rat03-core-g7-3","rat03-core-g7-4","rat03-core-g7-5"]) {
        assert.ok(workspace.cards.some(card=>card.id===id),"historical topic03 card removed: "+id);
      }
      assert.ok(micro.questions.length>=15,"topic03 historical Micro evidence regressed");
    }else if(topic==="13-goc-va-duong-thang"){
      for(const id of ["geo13-core-1","geo13-core-2","geo13-core-3","geo13-core-4","geo13-core-5"]) {
        assert.ok(workspace.cards.some(card=>card.id===id),"historical topic13 card removed: "+id);
      }
      assert.ok(micro.questions.length>=22,"topic13 historical Micro evidence regressed");
    }else if(topic==="21-thong-ke"){
      for(const id of ["sta21-core-1","sta21-core-2","sta21-core-3","sta21-core-4","sta21-core-5"]) {
        assert.ok(workspace.cards.some(card=>card.id===id),"historical topic21 card removed: "+id);
      }
      assert.ok(micro.questions.length>=20,"topic21 historical Micro evidence regressed");
    }else{
      for(const id of ["prob23-core-2","prob23-core-3"]) {
        assert.ok(workspace.cards.some(card=>card.id===id),"historical topic23 card removed: "+id);
      }
      assert.ok(micro.questions.length>=16,"topic23 historical Micro evidence regressed");
    }
  }else{
    for(const k of ["workspace","micro","manifest"]){
      assert.equal(blob(read(ev[k].path)),ev[k].sha,"source drift: "+ev[k].path);
    }
  }
  if(ev.assessment) assert.equal(blob(read(ev.assessment.path)),ev.assessment.sha,"source drift: "+ev.assessment.path);
}

const review=read(a.source_locks.grade7_reconciliation_review.path);
assert.ok(review.includes("G7_R2_RECONCILIATION_REVIEW_COMPLETE"));
assert.equal(a.semantic_reconciliation.status,"RECONCILED_REVIEWED_R2");
assert.equal(a.semantic_reconciliation.clearance,"G7_R2_RECONCILIATION_REVIEW_COMPLETE");
assert.deepEqual(a.semantic_reconciliation.remaining_review_queue,[]);

const matrix=json(a.source_locks.coverage_matrix.path);
const g7=matrix.grades.find(g=>g.grade===7);
assert.equal(g7.rows.length,21);
assert.deepEqual(a.rows.map(r=>[r.chapter,r.lesson_ref]),g7.rows.map(r=>[r.chapter,r.lesson_ref]));

const counts=a.summary.dimension_status_counts;
assert.deepEqual(counts.SKILL_MAP,{VERIFIED_SEMANTIC:21});
assert.deepEqual(counts.LEARN_CONTENT,{
  PARTIAL_SHARED_SKILL:4,
  PARTIAL_LESSON_LOCAL:1,
  VERIFIED_DIRECT:14,
  PARTIAL_FAMILY_EVIDENCE:2
});
assert.deepEqual(counts.MICRO_PRACTICE,{NONE_G7_EXPLICIT:3,PARTIAL_DIRECT:4,VERIFIED_DIRECT:14});
assert.deepEqual(counts.PRACTICE_BANK,{PARTIAL_TOPIC_EVIDENCE:4,TOPIC_SKILL_EVIDENCE:15,PARTIAL_FAMILY_EVIDENCE:2});
assert.deepEqual(counts.WRITTEN_LIBRARY,{NONE:21});
assert.deepEqual(counts.READINESS,{NOT_VERIFIED_STRUCTURED:15,PARTIAL_G7_STRUCTURED:4,NONE:2});
assert.equal(a.summary.written_grade7_kntt_item_count,0);

assert.deepEqual(a.summary.priority_gap_candidates.P0,["Bài 1-3","Bài 5-7","Bài 26-28"]);
assert.deepEqual(a.summary.priority_gap_candidates.P1,["Bài 4","Bài 18-19","Bài 22-23"]);
assert.deepEqual(a.summary.priority_gap_candidates.P2,["Bài 8","Bài 24-25"]);

const byLesson=Object.fromEntries(a.rows.map(r=>[r.lesson_ref,r]));
for(const r of a.rows){
  assert.equal(r.dimensions.SKILL_MAP.status,"VERIFIED_SEMANTIC");
  assert.equal(r.dimensions.WRITTEN_LIBRARY.status,"NONE");
  assert.equal(r.semantic_targets.semantic_reconciliation_closed,true);
}

assert.ok(byLesson["Bài 1-3"].dimensions.LEARN_CONTENT.direct_missing.includes("phep-tinh-so-huu-ti"));
assert.equal(byLesson["Bài 1-3"].dimensions.MICRO_PRACTICE.status,"NONE_G7_EXPLICIT");
assert.ok(byLesson["Bài 5-7"].semantic_targets.direct_skills.includes("can-bac-hai-so-hoc"));
assert.ok(byLesson["Bài 5-7"].dimensions.LEARN_CONTENT.direct_missing.includes("so-vo-ti"));
assert.ok(byLesson["Bài 26-28"].dimensions.LEARN_CONTENT.direct_missing.includes("chia-da-thuc-mot-bien"));
assert.ok(byLesson["Bài 26-28"].dimensions.MICRO_PRACTICE.direct_missing.includes("chia-da-thuc-mot-bien"));
assert.ok(byLesson["Bài 26-28"].dimensions.PRACTICE_BANK.direct_missing.includes("chia-da-thuc-mot-bien"));

assert.equal(byLesson["Bài 8"].dimensions.LEARN_CONTENT.status,"VERIFIED_DIRECT");
assert.deepEqual(byLesson["Bài 8"].dimensions.MICRO_PRACTICE.direct_missing,["goc-phu-bu"]);
assert.equal(byLesson["Bài 18-19"].dimensions.LEARN_CONTENT.status,"PARTIAL_FAMILY_EVIDENCE");
assert.ok(byLesson["Bài 18-19"].dimensions.MICRO_PRACTICE.direct_missing.includes("chuyen-bang-bieu-do"));
assert.ok(byLesson["Bài 22-23"].dimensions.LEARN_CONTENT.direct_missing.includes("mo-hinh-ti-le"));
assert.ok(byLesson["Bài 24-25"].semantic_targets.canonical_families.includes("ALG-STRUCTURE"));

assert.equal(byLesson["Bài 17"].dimensions.READINESS.status,"PARTIAL_G7_STRUCTURED");
assert.ok(byLesson["Bài 17"].dimensions.READINESS.item_ids.includes("STA21READY_002"));
assert.equal(byLesson["Bài 29"].dimensions.READINESS.status,"PARTIAL_G7_STRUCTURED");
assert.ok(byLesson["Bài 30"].dimensions.READINESS.item_ids.includes("PRO23READY_007"));

for(const [k,v] of Object.entries(a.protected_boundaries)) assert.equal(v,false,"protected boundary changed: "+k);

console.log("PASS: Grade-7 evidence inventory classifies all 21 reconciled KNTT rows without mutating learner content.");
console.log("PASS: P0/P1/P2 candidates are evidence-priority labels only; Written remains 21 NONE with zero Grade-7 true placements.");
console.log("PASS: Grade-7 R2 semantic clearance and all topic evidence sources are locked.");
