#!/usr/bin/env node
"use strict";
const assert=require("node:assert/strict");
const fs=require("node:fs");
const crypto=require("node:crypto");
const read=p=>fs.readFileSync(p,"utf8");
const json=p=>JSON.parse(read(p));
const blob=text=>crypto.createHash("sha1").update("blob "+Buffer.byteLength(text,"utf8")+"\0"+text).digest("hex");

const path="docs/assets/data/curriculum/kntt-dimension-coverage-g9-v1.json";
const a=json(path);
assert.equal(a.schema,"kntt-dimension-coverage-audit-v1");
assert.equal(a.version,1);
assert.equal(a.grade,9);
assert.equal(a.status,"G9_EXISTING_EVIDENCE_INVENTORY_R1");
assert.equal(a.rows.length,10);
assert.equal(a.summary.row_count,10);
assert.equal(a.summary.semantic_verified_rows,10);

for(const lock of [a.source_locks.coverage_matrix,a.source_locks.grade9_reconciliation,a.source_locks.grade9_reconciliation_review,a.source_locks.taxonomy,a.source_locks.written_library]){
  assert.equal(blob(read(lock.path)),lock.blob_sha,"source drift: "+lock.path);
}
for(const lock of Object.values(a.source_locks.longform_sources)){
  assert.equal(blob(read(lock.path)),lock.sha,"source drift: "+lock.path);
}
for(const [topic,ev] of Object.entries(a.source_locks.topic_evidence)){
  for(const k of ["workspace","micro","manifest","assessment"]){
    assert.equal(blob(read(ev[k].path)),ev[k].sha,"source drift: "+topic+" "+k);
  }
}

const matrix=json(a.source_locks.coverage_matrix.path);
const g9=matrix.grades.find(g=>g.grade===9);
assert.ok(g9);
assert.equal(g9.rows.length,10);
assert.equal(g9.semantic_reconciliation?.status,"RECONCILED_REVIEWED_R4");
assert.equal(g9.semantic_reconciliation?.clearance,"G9_R4_RECONCILIATION_REVIEW_COMPLETE");
assert.deepEqual(g9.semantic_reconciliation?.remaining_review_queue,[]);

const written=json(a.source_locks.written_library.path);
const g9Written=(written.exercises||[]).filter(ex=>(ex.kntt_placements||[]).some(p=>p.grade===9));
assert.equal(g9Written.length,0);
assert.equal(a.summary.written_grade9_kntt_item_count,0);

const counts={};
for(const row of a.rows){
  assert.equal(row.dimensions.SKILL_MAP.status,"VERIFIED_SEMANTIC");
  assert.equal(row.dimensions.WRITTEN_LIBRARY.status,"NONE");
  for(const dim of ["SKILL_MAP","LEARN_CONTENT","MICRO_PRACTICE","PRACTICE_BANK","WRITTEN_LIBRARY","READINESS"]){
    counts[dim]??={};
    const s=row.dimensions[dim].status;
    counts[dim][s]=(counts[dim][s]||0)+1;
  }
}
assert.deepEqual(counts,a.summary.dimension_status_counts);

assert.deepEqual(a.summary.priority_gap_candidates,{
  P0:["Chương 7 · Tần số và tần số tương đối","Chương 8 · Xác suất trong các mô hình đơn giản"],
  P1_ITEM_REVIEW:["Chương 6 · Hàm số y=ax² và phương trình bậc hai"],
  P2:[]
});

const ch6=a.rows.find(r=>r.chapter===6);
assert.ok(ch6);
assert.deepEqual(ch6.roadmap.map(x=>x.topic_id),["10-ham-so-do-thi","12-phuong-trinh-bac-hai-viete","24-bai-toan-thuc-te"]);
assert.equal(ch6.dimensions.LEARN_CONTENT.status,"PARTIAL_ITEM_REVIEW");
assert.equal(ch6.dimensions.MICRO_PRACTICE.status,"PARTIAL_ITEM_REVIEW");
assert.deepEqual(ch6.semantic_targets.explicit_item_review_refs,["bieu-thuc-doi-xung","dau-nghiem","lien-he-do-thi"]);
assert.equal(ch6.audit_priority,"P1_ITEM_REVIEW");

const ch7=a.rows.find(r=>r.chapter===7);
assert.ok(ch7);
assert.equal(ch7.dimensions.LEARN_CONTENT.status,"PARTIAL_LONGFORM_SOURCE");
assert.equal(ch7.dimensions.MICRO_PRACTICE.status,"NONE_G9_EXPLICIT");
assert.deepEqual(ch7.semantic_targets.canonical_families,["STAT-FREQUENCY","STAT-REPRESENT","STAT-ADVANCED-DATA"]);
assert.equal(ch7.audit_priority,"P0");

const ch8=a.rows.find(r=>r.chapter===8);
assert.ok(ch8);
assert.equal(ch8.dimensions.LEARN_CONTENT.status,"PARTIAL_LONGFORM_SOURCE");
assert.equal(ch8.dimensions.MICRO_PRACTICE.status,"NONE_G9_EXPLICIT");
assert.deepEqual(ch8.semantic_targets.explicit_item_review_refs,["dong-xu-nhieu-lan","xuc-xac-hai-lan","so-do-cay","nhieu-buoc-doc-lap","khong-hoan-lai"]);
assert.equal(ch8.audit_priority,"P0");

const ch10=a.rows.find(r=>r.chapter===10);
assert.ok(ch10);
assert.equal(ch10.dimensions.LEARN_CONTENT.status,"VERIFIED_DIRECT");
assert.equal(ch10.dimensions.MICRO_PRACTICE.status,"PARTIAL_DIRECT");
assert.deepEqual(ch10.dimensions.MICRO_PRACTICE.direct_missing,["doi-don-vi-do-luong"]);
assert.equal(ch10.audit_priority,"NONE");

for(const [k,v] of Object.entries(a.protected_boundaries)) assert.equal(v,false,"protected boundary changed: "+k);
assert.equal(a.summary.content_mutations,0);
assert.equal(a.summary.new_canonical_skills,0);

console.log("PASS: Grade-9 dimension audit inventories all 10 KNTT chapter rows without learner-content mutation.");
console.log("PASS: Ch.7 and Ch.8 are P0 Core-path/Micro gaps with long-form sources already present; Ch.6 remains item-review-only, not automatic repair.");
console.log("PASS: shared unit-conversion density in Ch.10 is not inflated into a repair quota.");
