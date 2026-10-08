#!/usr/bin/env node
"use strict";
const assert=require("node:assert/strict");
const fs=require("node:fs");
const crypto=require("node:crypto");
const read=p=>fs.readFileSync(p,"utf8");
const json=p=>JSON.parse(read(p));
const blob=text=>crypto.createHash("sha1").update("blob "+Buffer.byteLength(text,"utf8")+"\0"+text).digest("hex");

const path="docs/assets/data/curriculum/kntt-dimension-coverage-g8-v1.json";
const a=json(path);
assert.equal(a.schema,"kntt-dimension-coverage-audit-v1");
assert.equal(a.version,1);
assert.equal(a.grade,8);
assert.equal(a.status,"G8_EXISTING_EVIDENCE_INVENTORY_R1");
assert.equal(a.rows.length,16);
assert.equal(a.summary.row_count,16);
assert.equal(a.summary.semantic_verified_rows,16);

for(const lock of [a.source_locks.coverage_matrix,a.source_locks.grade8_reconciliation,a.source_locks.taxonomy,a.source_locks.written_library]){
  assert.equal(blob(read(lock.path)),lock.blob_sha,"source drift: "+lock.path);
}
for(const [topic,ev] of Object.entries(a.source_locks.topic_evidence)){
  for(const k of ["workspace","micro","manifest","assessment"]){
    if(topic==="07-phan-thuc-dai-so" && (k==="workspace" || k==="micro")){
      // Inventory R1 preserves its historical input SHA. The later bounded
      // density wave may append one existing canonical skill + one Micro item.
      assert.match(ev[k].sha,/^[0-9a-f]{40}$/);
      const current=json(ev[k].path);
      if(k==="workspace"){
        for(const id of ["pt07-core-1","pt07-core-2","pt07-core-3","pt07-core-4","pt07-core-5"])
          assert.ok(current.cards.some(c=>c.id===id),"historical Grade-8 Topic07 card removed: "+id);
      }else{
        assert.ok(current.questions.length>=17,"historical Grade-8 Topic07 Micro evidence regressed");
        assert.deepEqual(current.questions.slice(15,17).map(q=>q.id),["RAT07MICRO_016","RAT07MICRO_017"]);
      }
    }else{
      assert.equal(blob(read(ev[k].path)),ev[k].sha,"source drift: "+topic+" "+k);
    }
  }
}

const matrix=json(a.source_locks.coverage_matrix.path);
const g8=matrix.grades.find(g=>g.grade===8);
assert.ok(g8);
assert.equal(g8.rows.length,16);
assert.equal(g8.semantic_reconciliation?.status,"RECONCILED_R3_NO_NEW_IDENTITY");
assert.deepEqual(g8.semantic_reconciliation?.remaining_review_queue,[]);

const written=json(a.source_locks.written_library.path);
const g8Written=(written.exercises||[]).filter(ex=>(ex.kntt_placements||[]).some(p=>p.grade===8));
assert.equal(g8Written.length,0);
assert.equal(a.summary.written_grade8_kntt_item_count,0);

const counts={};
for(const row of a.rows){
  assert.equal(row.dimensions.SKILL_MAP.status,"VERIFIED_SEMANTIC");
  for(const dim of ["SKILL_MAP","LEARN_CONTENT","MICRO_PRACTICE","PRACTICE_BANK","WRITTEN_LIBRARY","READINESS"]){
    counts[dim]??={};
    const s=row.dimensions[dim].status;
    counts[dim][s]=(counts[dim][s]||0)+1;
  }
  assert.equal(row.dimensions.WRITTEN_LIBRARY.status,"NONE");
}
assert.deepEqual(counts,a.summary.dimension_status_counts);

assert.deepEqual(a.summary.priority_gap_candidates,{P0:[],P1:["Bài 21-24"],P2:["Bài 18-20"]});
const b21=a.rows.find(r=>r.lesson_ref==="Bài 21-24");
assert.ok(b21);
assert.equal(b21.dimensions.LEARN_CONTENT.status,"VERIFIED_DIRECT");
assert.equal(b21.dimensions.MICRO_PRACTICE.status,"PARTIAL_DIRECT");
assert.deepEqual(b21.dimensions.MICRO_PRACTICE.direct_missing,["giu-dieu-kien-ban-dau"]);
assert.ok(b21.semantic_targets.lesson_local_refs.some(x=>x.historical_ref==="bieu-thuc-nhieu-phep-tinh"));

const b30=a.rows.find(r=>r.lesson_ref==="Bài 30");
assert.ok(b30);
assert.equal(b30.dimensions.LEARN_CONTENT.status,"VERIFIED_FAMILY_LOCAL");
assert.equal(b30.dimensions.MICRO_PRACTICE.status,"PARTIAL_FAMILY_EVIDENCE");
assert.deepEqual(b30.semantic_targets.canonical_families,["PROB-EVENT"]);
assert.deepEqual(b30.semantic_targets.lesson_local_refs.map(x=>x.historical_ref),["ket-qua-co-the","ket-qua-thuan-loi"]);
assert.equal(b30.audit_priority,"NONE");

const b38=a.rows.find(r=>r.lesson_ref==="Bài 38-39");
assert.ok(b38);
assert.equal(b38.dimensions.MICRO_PRACTICE.status,"PARTIAL_DIRECT");
assert.deepEqual(b38.dimensions.MICRO_PRACTICE.direct_missing,["dien-tich-day","doi-don-vi-do-luong"]);
assert.equal(b38.audit_priority,"NONE");

for(const [k,v] of Object.entries(a.protected_boundaries)) assert.equal(v,false,"protected boundary changed: "+k);
assert.equal(a.summary.content_mutations,0);
assert.equal(a.summary.new_canonical_skills,0);

console.log("PASS: Grade-8 dimension audit inventories all 16 KNTT rows without learner-content mutation.");
console.log("PASS: no P0 gap; Bài 21-24 is P1, Bài 18-20 is P2, and shared-foundation density is not treated as a quota.");
console.log("PASS: Bài 30 family/local probability semantics remain reconciled without new canonical skills.");
