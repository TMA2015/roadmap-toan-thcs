#!/usr/bin/env node
"use strict";
const assert=require("node:assert/strict");
const fs=require("node:fs");
const crypto=require("node:crypto");
const p="review-packets/math-content-cleanup/";
const read=n=>fs.readFileSync(p+n,"utf8");
const a=read("MATH-CT05-07-W3A-20261016_NOTEBOOKLM_REVIEW.md");
const wr=read("MATH-CT05-07-W3A-WR-R1-20261016_NOTEBOOKLM_REVIEW.md");
const b=read("MATH-CT05-07-W3B-20261016_NOTEBOOKLM_REVIEW.md");
const c=read("MATH-CT05-07-W3C-20261016_NOTEBOOKLM_REVIEW.md");
const groups={
  W3A:["05-WR-01","05-WR-02","05-WR-05","05-ENT-01",
       "06-WR-02","06-WR-03","06-ENT-02","06-CH-01",
       "07-WR-01","07-WR-07","07-WR-10","07-WR-11"],
  W3B:["05-WR-03","05-WR-04","05-WR-06","05-WR-07","05-WR-08","05-WR-09","05-WR-10","05-ENT-02","05-CH-01",
       "06-WR-01","06-WR-04","06-WR-05","06-WR-06","06-WR-07"],
  W3C:["06-WR-08","06-WR-09","06-WR-10","06-ENT-01",
       "07-WR-02","07-WR-03","07-WR-04","07-WR-05","07-WR-06","07-WR-08","07-WR-09","07-ENT-01","07-ENT-02","07-CH-01"]
};
const batches={W3A:a,W3B:b,W3C:c};
const corpus=[];
for(const [slug,sha,count] of [
 ["05-7-hang-dang-thuc","ff4a8019b0f43e4eea0660bed0926abd89fa4c14",13],
 ["06-phan-tich-da-thuc","00e983516ba2025b2bec54d506462553e4ca9647",13],
 ["07-phan-thuc-dai-so","80b8620ada44de09ddf34e8c60c57a42adf44b6d",14],
]){
 const raw=fs.readFileSync("docs/kien-thuc/"+slug+"/bai-tap.md");
 const got=crypto.createHash("sha1").update(Buffer.from("blob "+raw.length+"\0")).update(raw).digest("hex");
 assert.equal(got,sha,"Old authored source changed: "+slug);
 const ids=[...raw.toString("utf8").matchAll(/^####\s+(\d{2}-(?:WR|ENT|CH)-\d+)\b/gm)].map(m=>m[1]);
 assert.equal(ids.length,count,"Expected source exercise count");
 corpus.push(...ids);
}
const all=Object.values(groups).flat();
assert.equal(new Set(all).size,40,"W3A/W3B/W3C overlap or missing");
assert.deepEqual([...all].sort(),[...corpus].sort(),"Full 40 exercise corpus must be partitioned");
for(const batch of ["W3B","W3C"]){
 const src=batches[batch];
 const ids=[...src.matchAll(/^### (\d{2}-(?:WR|ENT|CH)-\d+)\s*$/gm)].map(x=>x[1]);
 assert.deepEqual(ids,groups[batch],batch+" strict 14 item order");
 assert(src.includes("EXPECTED=14")&&src.includes("REVIEWED=14"));
 assert(src.includes("NOT")&&src.includes("NO")&&src.includes("INSUFFICIENT_EVIDENCE"));
 for(const id of ids){
  assert(src.includes(id),"Missing source evidence "+id);
 }
}
const originalWr=[...wr.matchAll(/^### Original source: (\d{2}-(?:WR|ENT|CH)-\d+)\s*$/gm)].map(m=>m[1]);
assert.deepEqual(originalWr,["05-ENT-01","06-CH-01","07-WR-11"]);
for(const id of ["PROPOSED-WX05-ENT-001","PROPOSED-WX06-CH-001","PROPOSED-WX07-CONCEPT-001"])
 assert(wr.includes(id),"Missing reviewed draft "+id);
assert(wr.includes("EXPECTED=3")&&wr.includes("REVIEWED=3"));
assert(wr.includes("NOT PASSED")&&wr.includes("NO DEPLOY"));
const library=JSON.parse(fs.readFileSync("docs/assets/data/written-exercises/written-exercise-library-v1.json","utf8")).exercises;
assert(!library.some(x=>x.exercise_id?.startsWith("PROPOSED-")),"Draft leaked into live WX");
// Post-review W3B R3 is a source/placement decision, not a permission
// to change learner-facing MCQ, Written, Skill, Readiness or answer history.
const receipt=read("MATH-CT05-07-W3B-20261019_NOTEBOOKLM_VERDICT_RECEIPT.md");
const recon=read("MATH-CT05-07-W3B-R3_CANONICAL_RECONCILIATION.md");
const drafts=read("MATH-CT05-07-W3B-R0_TWO_WRITTEN_AUTHORING_CANDIDATES.md");
assert(receipt.includes("PASS_FOR_PLACEMENT_REVIEW"),"W3B verdict missing");
assert(receipt.includes("REVIEWED=14")&&receipt.includes("EXPECTED=14"),"14-item reviewer count missing");
const idsInReceipt=[...receipt.matchAll(/^\| (0[56]-(?:WR|ENT|CH)-\d+) \| PASS \|/gm)].map(x=>x[1]);
const idsInRecon=[...recon.matchAll(/^\| \x60(0[56]-(?:WR|ENT|CH)-\d+)\x60 \|/gm)].map(x=>x[1]);
assert.deepEqual(idsInReceipt,groups.W3B,"W3B independent 14-ID receipt missing or reordered");
assert.deepEqual(idsInRecon,groups.W3B,"W3B R3 deployment reconciliation incomplete");
for(const [label,count] of [["REUSE_EXACT_PRACTICE",3],["REUSE_WRITTEN_CONTEXT",3],["LINK_EXISTING_WX",2],["HOLD_NEW_MCQ",4]]){
  const rows=recon.split("\n").filter(x=>x.startsWith("| "+String.fromCharCode(96))).join("\n");
  const got=(rows.match(new RegExp("\\x60"+label+"\\x60","g"))||[]).length;
  assert.equal(got,count,label+" partition drift");
}
for(const id of ["WX05-ENT-002","WX05-CH-001"]){
 assert(drafts.includes(id),"W3B written authoring draft missing "+id);
 assert(!library.some(x=>x.exercise_id===id),"Unreviewed W3B draft prematurely entered live library: "+id);
}
assert(drafts.includes("NOT approved for publication"),"Do not conflate W3B placement and authoring PASS");
const bank05=[1,2,3,4].flatMap(n=>JSON.parse(fs.readFileSync(
  "docs/assets/data/practice/05-7-hang-dang-thuc-v1-0"+n+".json","utf8")).questions);
for(const [id,token] of [["ID05V1_041","(x-3)^3"],["ID05V1_058","8 x^{3} - 27"],["ID05V1_091","101^2"]]){
 const matches=bank05.filter(x=>x.id===id);
 assert.equal(matches.length,1,"Exact existing Practice ID missing: "+id);
 assert(matches[0].question.includes(token),"W3B exact source prompt no longer agrees with "+id);
}
assert.equal(10**2-2*21,58,"W3B transfer math oracle");
assert.equal(7**3+3**3+(-10)**3,3*7*3*(-10),"W3B challenge math oracle with sum 0");
console.log("PASS W3B R3 receipt + canonical reconciliation: 14/14 source IDs, 3 exact MCQs, 2 non-live written drafts, no bank append.");

console.log("PASS W3A-WR/W3B/W3C: 3 written drafts, 28 remaining unique, full 40-ID source-locked partition; no live changes");
