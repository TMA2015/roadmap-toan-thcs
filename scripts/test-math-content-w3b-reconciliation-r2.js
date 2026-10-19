#!/usr/bin/env node
"use strict";
// Source-locked documentary intake: W3B placement PASS does not authorize new learner items.
const assert=require("node:assert/strict"),fs=require("node:fs"),crypto=require("node:crypto"),path=require("node:path");
const ROOT=path.resolve(__dirname,".."),read=p=>fs.readFileSync(path.join(ROOT,p),"utf8");
const sha=text=>crypto.createHash("sha1").update("blob "+Buffer.byteLength(text)+"\0"+text).digest("hex");
const root="review-packets/math-content-cleanup/";
const review=read(root+"MATH-CT05-07-W3B-20261019_NOTEBOOKLM_RECEIPT_RECONCILIATION_R2.md");
const expected=[
"05-WR-03","05-WR-04","05-WR-06","05-WR-07","05-WR-08","05-WR-09","05-WR-10",
"05-ENT-02","05-CH-01","06-WR-01","06-WR-04","06-WR-05","06-WR-06","06-WR-07"];
const rows=[...review.matchAll(/^\| \x60(\d{2}-(?:WR|ENT|CH)-\d+)\x60 \| \x60([A-Z_]+)\x60 \| \*\*([A-Z_]+)\*\* \|/gm)]
  .map(x=>({id:x[1],role:x[2],action:x[3]}));
assert.deepEqual(rows.map(x=>x.id),expected,"W3B source IDs must reconcile exactly once and in original order");
const count=(key,value)=>rows.filter(x=>x[key]===value).length;
assert.equal(count("role","CONVERT_INTERACTIVE"),10);
assert.equal(count("role","ARCHIVE_DUPLICATE"),2);
assert.equal(count("role","KEEP_WRITTEN"),2);
assert.equal(count("action","REUSE_EXISTING_MCQ"),3);
assert.equal(count("action","CANDIDATE_ONLY"),7);
assert.equal(count("action","REUSE_WX_SOURCE_REF"),2);
assert.equal(count("action","AUTHORING_PROPOSAL_ONLY"),2);
assert(review.includes("PASS_FOR_PLACEMENT_REVIEW")&&review.includes("NO release yet"));
for(const [slug,hash] of [
["05-7-hang-dang-thuc","ff4a8019b0f43e4eea0660bed0926abd89fa4c14"],
["06-phan-tich-da-thuc","00e983516ba2025b2bec54d506462553e4ca9647"],
["07-phan-thuc-dai-so","80b8620ada44de09ddf34e8c60c57a42adf44b6d"]]){
 assert.equal(sha(read("docs/kien-thuc/"+slug+"/bai-tap.md")),hash,"Immutable authored exercise source changed: "+slug);
}
const all=["05-7-hang-dang-thuc","06-phan-tich-da-thuc"].flatMap(slug=>[1,2,3,4].flatMap(n=>{
 const p="docs/assets/data/practice/"+slug+"-v1-0"+n+".json";
 return JSON.parse(read(p)).questions;
}));
assert.equal(all.length,240,"CT05/06 bank size changed; reassess exact comparisons");
const norm=s=>String(s||"").replace(/[{}$\\\s]/g,"").toLowerCase();
for(const [source,id,stem,correct] of [
["05-WR-06","ID05V1_041","(x-3)^3","x^3-9x^2+27x-27"],
["05-WR-08","ID05V1_058","8x^3-27","(2x-3)(4x^2+6x+9)"],
["05-WR-09","ID05V1_091","101^2","10201"]
]){
 const matches=all.filter(q=>q.id===id);assert.equal(matches.length,1,"Exact MCQ missing or duplicated: "+id);
 const q=matches[0],a=q.options?.[q.answer];
 assert.ok(norm(q.question).includes(norm(stem)),"MCQ stem drift: "+id);
 assert.ok(norm(a).includes(norm(correct)),"MCQ correct answer drift: "+id);
 assert.ok(review.includes(id)&&review.includes(source),"Receipt must cite original source and reused MCQ "+id);
}
const wx=JSON.parse(read("docs/assets/data/written-exercises/written-exercise-library-v1.json")).exercises;
assert(wx.length>=65,"Previously published 65 WX must not be lost");
assert.equal(new Set(wx.map(x=>x.exercise_id)).size,wx.length,"Duplicate canonical WX IDs");
for(const [historical,id] of [
["05-WR-03","WX05-IDN-001"],["05-WR-04","WX05-IDN-002"],
["05-WR-10","WX05-IDN-002"],["06-WR-01","WX06-FAC-001"],["06-WR-06","WX06-FAC-002"]]){
 const x=wx.find(q=>q.exercise_id===id);
 assert(x?.source_refs?.some(s=>s.endsWith("#"+historical)),"Canonical WX missing protected historical source ref "+historical);
}
assert(wx.some(x=>x.exercise_id==="WX05-ENT-001")&&wx.some(x=>x.exercise_id==="WX06-CH-001"),"Reviewed W3A items disappeared");
const w3c=read(root+"MATH-CT05-07-W3C-20261016_NOTEBOOKLM_REVIEW.md");
assert(w3c.includes("NOT_PASSED")&&w3c.includes("EXPECTED=14"),"W3C remains a separately gated review");
console.log("PASS W3B receipt: 14/14 review roles; 3 exact reused MCQ, 7 candidates, 2 WX pointers, 2 authoring proposals; 65+ published WX and protected original sources.");
