#!/usr/bin/env node
"use strict";
/* Guard the user-provided 12-item academic verdict against mistaken deployment. */
const assert=require("node:assert/strict");
const fs=require("node:fs");
const b="review-packets/math-content-cleanup/";
const verdict=fs.readFileSync(b+"MATH-CT05-07-W3A-20261016_NOTEBOOKLM_SUBMITTED_VERDICT.md","utf8");
const reconcile=fs.readFileSync(b+"MATH-CT05-07-W3A-20261016_RECONCILIATION_R2.md","utf8");
const candidate=fs.readFileSync(b+"MATH-CT05-07-W3A_WRITTEN_CANDIDATES_R0.md","utf8");
const wanted=[
 "05-WR-01","05-WR-02","05-WR-05","05-ENT-01",
 "06-WR-02","06-WR-03","06-ENT-02","06-CH-01",
 "07-WR-01","07-WR-07","07-WR-10","07-WR-11"
];
assert(verdict.includes("PACKET_ID|MATH-CT05-07-W3A-20261016"));
assert(verdict.includes("EXPECTED=12")&&verdict.includes("REVIEWED=12"));
assert(verdict.includes("OVERALL|PASS_FOR_PLACEMENT_REVIEW"));
assert(verdict.includes("KHÔNG")&&verdict.includes("data migration"));
const lines=verdict.split("\n").filter(line=>/^\d{2}-(?:WR|ENT|CH)-\d+\s*\|\s*PASS\s*\|/.test(line));
const ids=lines.map(line=>line.split("|")[0].trim());
assert.deepEqual(ids,wanted,"12 original verdict rows/ordering");
assert.equal(new Set(ids).size,12);
const decision=line=>(line.includes("CONVERT_INTERACTIVE:")?"CONVERT_INTERACTIVE":
 line.includes("ARCHIVE_DUPLICATE:")?"ARCHIVE_DUPLICATE":
 line.includes("KEEP_WRITTEN:")?"KEEP_WRITTEN":"UNKNOWN");
const decisions=lines.map(decision);
assert.equal(decisions.filter(x=>x==="CONVERT_INTERACTIVE").length,7);
assert.equal(decisions.filter(x=>x==="ARCHIVE_DUPLICATE").length,2);
assert.equal(decisions.filter(x=>x==="KEEP_WRITTEN").length,3);
for(const id of ids) assert(reconcile.includes("| "+String.fromCharCode(96)+id+String.fromCharCode(96)+" |"),"Missing reconciliation "+id);
assert(reconcile.includes("28 ID còn lại NOT_REVIEWED"));
const wx=JSON.parse(fs.readFileSync("docs/assets/data/written-exercises/written-exercise-library-v1.json","utf8")).exercises;
for(const id of ["WX06-FAC-001","WX07-RAT-002","WX05-IDN-001","WX07-RAT-001"]){
 assert(wx.some(x=>x.exercise_id===id),"Missing canonical WX "+id);
}
const existing={
 "05-7-hang-dang-thuc":["ID05V1_002","ID05V1_019","ID05V1_032"],
 "06-phan-tich-da-thuc":["FAC06V1_025"],
 "07-phan-thuc-dai-so":["RAT07V1_012","RAT07V1_063"]
};
for(const [slug,desired] of Object.entries(existing)){
 let found=[];
 for(let i=1;i<=4;i++){
  const path="docs/assets/data/practice/"+slug+"-v1-0"+i+".json";
  const chunk=JSON.parse(fs.readFileSync(path,"utf8"));
  found.push(...chunk.questions.map(q=>q.id));
 }
 assert(desired.every(id=>found.includes(id)),"Expected reused canonical MCQ not found "+slug);
}
for(const id of ["PROPOSED-WX05-ENT-001","PROPOSED-WX06-CH-001","PROPOSED-WX07-CONCEPT-001"])
 assert(candidate.includes("## "+id),"Missing source-backed draft "+id);
assert(candidate.includes("NOT_PUBLISHED")&&candidate.includes("CHƯA"));
assert(!wx.some(x=>x.exercise_id.startsWith("PROPOSED-")),"Drafts must not enter production Written Library");
console.log("PASS W3A reconciliation: 12/12 verdict rows, 7/2/3 classification, canonical WX/MCQ present, draft-only content");
