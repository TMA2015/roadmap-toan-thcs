#!/usr/bin/env node
"use strict";
const assert=require("node:assert/strict");
const fs=require("node:fs");
const crypto=require("node:crypto");
const read=p=>fs.readFileSync(p,"utf8");
const json=p=>JSON.parse(read(p));
const blob=text=>crypto.createHash("sha1").update("blob "+Buffer.byteLength(text,"utf8")+"\0"+text).digest("hex");

const READINESS_W1_PACKET="MATH-READINESS-IMPLEMENTATION-W1-R1-20261010";
const READINESS_W1_NEW_LABELS=new Set(["bcnn","rut-gon-phan-so","he-so-ti-le-thuan","giu-dieu-kien-ban-dau","nhan-chia-can","tam-giac-deu","goc-o-tam","tan-suat"]);
function assertHistoricalAssessmentLock(lock){
  const currentText=read(lock.path);
  const current=JSON.parse(currentText);
  // Owner-directed CT17 correction: preserve the exact historical Grade-8 blob
  // after reversing ONLY the four independently identified incomplete premises.
  if(lock.path==="docs/assets/data/assessment/17-thales-dong-dang-core-v1.json"){
    assert.equal(lock.sha,"c41dfb3e95c1ab8298d546a914b2adda88757d17");
    assert.equal(blob(currentText),"2daa14678a75159421ee3b5a9110544da41db572",
      "unapproved CT17 readiness content change");
    const original={
      "GEO17READY_001":["DE∥BC. Hệ thức:","Thales thuận."],
      "GEO17READY_002":["AD/AB=AE/AC suy ra:","Thales đảo."],
      "GEO17READY_004":["AD phân giác góc A. Hệ thức:","Định lý phân giác."],
      "GEO17READY_006":["Hai góc tương ứng bằng →","g-g."]
    };
    assert.equal(current.items.length,10);
    for(const [id,[question,explanation]] of Object.entries(original)){
      const item=current.items.find(q=>q.id===id);
      assert.ok(item,id+" missing");
      item.question=question;
      item.explanation=explanation;
    }
    assert.equal(blob(JSON.stringify(current,null,2)+"\n"),lock.sha,
      "CT17 readiness changed outside the four exact source wording fields");
    return;
  }
  const hasWave1=(current.items||[]).some(q=>q.authoring_review?.packet_id===READINESS_W1_PACKET);
  if(!hasWave1){
    assert.equal(blob(currentText),lock.sha,"source drift: "+lock.path);
    return;
  }
  const baseline=JSON.parse(JSON.stringify(current));
  baseline.items=(baseline.items||[]).filter(q=>q.authoring_review?.packet_id!==READINESS_W1_PACKET);
  for(const skill of READINESS_W1_NEW_LABELS) delete baseline.skill_labels?.[skill];
  const baselineText=JSON.stringify(baseline,null,2)+"\n";
  assert.equal(blob(baselineText),lock.sha,"historical assessment drift beyond approved Readiness append: "+lock.path);
}

const path="docs/assets/data/curriculum/kntt-dimension-coverage-g8-v1.json";
const a=json(path);
assert.equal(a.schema,"kntt-dimension-coverage-audit-v1");
assert.equal(a.version,1);
assert.equal(a.grade,8);
assert.equal(a.status,"G8_EXISTING_EVIDENCE_INVENTORY_R1");
assert.equal(a.rows.length,16);
assert.equal(a.summary.row_count,16);
assert.equal(a.summary.semantic_verified_rows,16);

for(const lock of [a.source_locks.coverage_matrix,a.source_locks.grade8_reconciliation,a.source_locks.taxonomy]){
  assert.equal(blob(read(lock.path)),lock.blob_sha,"source drift: "+lock.path);
}
{
  const lock=a.source_locks.written_library;
  assert.match(lock.blob_sha,/^[0-9a-f]{40}$/);
  const current=json(lock.path);
  assert.ok((current.exercises||[]).length>=54,"Written Library historical baseline regressed");
  assert.ok((current.exercises||[]).filter(e=>e.academic_review?.status==="APPROVED").length>=54,"approved Written baseline regressed");
}
for(const [topic,ev] of Object.entries(a.source_locks.topic_evidence)){
  for(const k of ["workspace","micro","manifest","assessment"]){
    if(topic==="21-thong-ke" && k==="assessment"){
      assert.match(ev[k].sha,/^[0-9a-f]{40}$/);
      const current=json(ev[k].path);
      for(let n=1;n<=12;n++){
        const id="STA21READY_"+String(n).padStart(3,"0");
        assert.ok(current.items.some(q=>q.id===id),"historical Grade-8 Topic21 Readiness baseline missing: "+id);
      }
    }else if(["07-phan-thuc-dai-so","21-thong-ke","23-xac-suat"].includes(topic) && (k==="workspace" || k==="micro")){
      // These are shared cross-grade topics. Later bounded append-only repair
      // may extend higher-grade Learn/Micro evidence while historical Grade-8
      // cards and formative evidence remain intact.
      assert.match(ev[k].sha,/^[0-9a-f]{40}$/);
      const current=json(ev[k].path);
      if(topic==="07-phan-thuc-dai-so"){
        if(k==="workspace"){
          for(const id of ["pt07-core-1","pt07-core-2","pt07-core-3","pt07-core-4","pt07-core-5"])
            assert.ok(current.cards.some(c=>c.id===id),"historical Grade-8 Topic07 card removed: "+id);
        }else{
          assert.ok(current.questions.length>=17,"historical Grade-8 Topic07 Micro evidence regressed");
          assert.deepEqual(current.questions.slice(15,17).map(q=>q.id),["RAT07MICRO_016","RAT07MICRO_017"]);
        }
      }else if(topic==="21-thong-ke"){
        if(k==="workspace"){
          for(const id of ["sta21-core-2","sta21-core-3","sta21-core-4","sta21-core-5"])
            assert.ok(current.cards.some(c=>c.id===id),"historical Grade-8 Topic21 card removed: "+id);
        }else{
          assert.ok(current.questions.length>=24,"historical Grade-8 Topic21 Micro evidence regressed");
          for(const id of ["STA21MICRO_015","STA21MICRO_021","STA21MICRO_022","STA21MICRO_023","STA21MICRO_024"])
            assert.ok(current.questions.some(q=>q.id===id),"historical Grade-8 Topic21 Micro removed: "+id);
        }
      }else{
        if(k==="workspace"){
          for(const id of ["prob23-core-4","prob23-core-5"])
            assert.ok(current.cards.some(c=>c.id===id),"historical Grade-8 Topic23 card removed: "+id);
        }else{
          assert.ok(current.questions.length>=20,"historical Grade-8 Topic23 Micro evidence regressed");
          for(const id of ["PRO23MICRO_010","PRO23MICRO_011","PRO23MICRO_012","PRO23MICRO_013","PRO23MICRO_014","PRO23MICRO_015","PRO23MICRO_017"])
            assert.ok(current.questions.some(q=>q.id===id),"historical Grade-8 Topic23 Micro removed: "+id);
        }
      }
    }else if(topic==="07-phan-thuc-dai-so" && k==="manifest"){
      // Owner-approved P1 append adds one concept MCQ; retain the exact
      // original Grade-8 manifest byte fingerprint by reconstructing it.
      assert.equal(ev[k].sha,"5939cac274f5133c474423b949340d136e976e5d");
      const current=json(ev[k].path);
      assert.equal(current.question_count,121,"only one CT07 new P1 question is approved");
      assert.equal(current.sources.length,5);
      assert.equal(current.sources[4],"07-phan-thuc-dai-so-v1-05.json");
      const historical=JSON.parse(JSON.stringify(current));
      historical.question_count=120;
      historical.sources=historical.sources.slice(0,4);
      assert.equal(blob(JSON.stringify(historical,null,2)+"\n"),ev[k].sha,
        "historical Grade-8 CT07 manifest changed beyond approved append");
      const appended=json("docs/assets/data/practice/"+current.sources[4]).questions;
      assert.deepEqual(appended.map(q=>q.id),["RAT07V1_121"]);
      assert.equal(appended[0].authoring_review?.packet_id,
        "MATH-CT05-07-W3-D1D6-P1-MINIMAL-DELTA-R0-20261020");
    }else if(k==="assessment"){
      assertHistoricalAssessmentLock(ev[k]);
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
// Preserve historical Grade8 audit snapshot, plus two separately approved GAP9 S1 items.
assert.deepEqual(g8Written.map(x=>x.exercise_id).sort(),
  ["WX04-ALG-003","WX05-IDN-001","WX06-FAC-001","WX07-RAT-001","WX16-QUAD-001","WX17-SIM-001","WX20-GEO-004","WX24-MOD-003"].sort());
assert.equal(a.summary.written_grade8_kntt_item_count,0,"historical Grade8 R1 audit remains unchanged");

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
