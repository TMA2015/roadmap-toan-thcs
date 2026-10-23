#!/usr/bin/env node
"use strict";
const assert=require("node:assert/strict");
const fs=require("node:fs");
const crypto=require("node:crypto");
const read=p=>fs.readFileSync(p);
const parse=p=>JSON.parse(read(p).toString("utf8"));
const dir="docs/assets/data/practice/";
const prefix="07-phan-thuc-dai-so-v1-";
const sha=["3bf6305a57286b92c9c6a2486c94eadcff0d9163","2294a3f9d93b01b70036167713a3940fea367dca","9297d644a65c09b8c8ca8cc4b3f81cc194764360","b1ba2cc3664cfc2cda13fdafe4655f744130c833"];
const blob=b=>crypto.createHash("sha1").update(Buffer.concat([Buffer.from("blob "+b.length),Buffer.from([0])])).update(b).digest("hex");
const old=[];
for(let i=1;i<=4;i++){
 const p=dir+prefix+"0"+i+".json";
 const raw=read(p);
 assert.equal(blob(raw),sha[i-1],"original CT07 shard changed "+i);
 const questions=JSON.parse(raw).questions;
 assert.equal(questions.length,30);
 old.push(...questions);
}
assert.equal(old.length,120);
assert.deepEqual(old.map(q=>q.id),Array.from({length:120},(_,i)=>"RAT07V1_"+String(i+1).padStart(3,"0")));
const newBank=parse(dir+prefix+"05.json");
const manifest=parse(dir+"07-phan-thuc-dai-so-v1.manifest.json");
assert.equal(newBank.questions.length,1);
const q=newBank.questions[0];
assert.equal(q.id,"RAT07V1_121");
assert.equal(q.answer,2);
assert.equal(q.options.length,4);
assert.equal(q.difficulty,"intermediate");
assert.deepEqual(q.tags.skill,["dieu-kien-xac-dinh","chia-phan-thuc"]);
assert.equal(q.tags.type,"giu-dieu-kien");
assert.equal(q.authoring_review.status,"PASS");
assert.equal(q.authoring_review.packet_id,"MATH-CT05-07-W3-D1D6-P1-MINIMAL-DELTA-R0-20261020");
assert.equal(q.authoring_review.original_candidate_id,"P1-CT07-DIV-DOMAIN-R0");
assert(!q.option_evidence,"No unaudited automated diagnoses");
assert(!q.response_type,"MCQ only");
assert.equal(manifest.question_count,121);
assert.deepEqual(manifest.sources,Array.from({length:5},(_,i)=>prefix+"0"+(i+1)+".json"));
const all=manifest.sources.flatMap(p=>parse(dir+p).questions);
assert.deepEqual(all.slice(0,120),old);
assert.deepEqual(all[120],q);
assert.equal(new Set(all.map(q=>q.id)).size,121);
const receipt=fs.readFileSync("review-packets/math-content-cleanup/MATH-CT05-07-W3-P1-MCQ-R1-RESULT.md","utf8");
assert(receipt.includes("OVERALL|PASS_FOR_AUTHORING_REVIEW"));
assert(receipt.includes("EXPECTED=1")&&receipt.includes("REVIEWED=1"));
const written=parse("docs/assets/data/written-exercises/written-exercise-library-v1.json");
assert(written.exercises.length>=69,"historical 69 Written entries must not be removed");
const historic=JSON.parse(JSON.stringify(written));
historic.exercises=historic.exercises.slice(0,69);
const w9Ids=new Set(["WX03-RAT-001","WX03-RAT-002","WX13-LIN-001","WX14-TRI-001","WX14-TRI-002","WX15-CEN-002","WX04-ALG-003","WX05-IDN-001","WX06-FAC-001","WX07-RAT-001","WX16-QUAD-001","WX17-SIM-001","WX09-SYS-003","WX10-FUN-002","WX11-RAD-001","WX12-QUA-001","WX18-TRI-002","WX19-CIR-002"]);
for(const item of historic.exercises){
  if(w9Ids.has(item.exercise_id))delete item.kntt_placements;
  if(item.exercise_id==="WX21-STA-001"){item.grade_overlay=[8];item.kntt_placements=[{grade:6,chapter:9,lesson:"Bài 38–41 — Dữ liệu, bảng thống kê, biểu đồ tranh, biểu đồ cột và cột kép"}];}
}
delete historic.candidate_scope;
historic.published_scope.exercise_count=69;
historic.snapshot_date="2026-10-20";
const appended=historic.published_scope.batches.filter(x=>x.batch_id==="W4_CT08_12_WRITTEN_R1");
assert(appended.length<=1);
if(appended.length) {
 assert(appended[0].count===5 && appended[0].status==="PUBLISHED" && written.exercises.length===84 && written.published_scope.exercise_count===84 && !written.candidate_scope,"W4 five published plus independent later approved W9 Written");
 historic.published_scope.batches=historic.published_scope.batches.filter(x=>!["W4_CT08_12_WRITTEN_R1","W9_G6_NUMABS_WRITTEN_20261022","GAP9_NEW_STRUCTURES_20261023"].includes(x.batch_id));
}
assert.equal(blob(Buffer.from(JSON.stringify(historic,null,2)+"\n")),"eed3fa0cbae29fd4fdb9daaeac9ef36c3744b665","Historical 69 Written JSON records + metadata must remain unchanged");
for(const topic of ["05-7-hang-dang-thuc","06-phan-tich-da-thuc"]){
 assert.equal([1,2,3,4].flatMap(i=>parse(dir+topic+"-v1-0"+i+".json").questions).length,120);
}
console.log("PASS CT07: 120 original questions source-locked; +1 canonical MCQ; manifest 121; Written 69, CT05/CT06 240 preserved.");
