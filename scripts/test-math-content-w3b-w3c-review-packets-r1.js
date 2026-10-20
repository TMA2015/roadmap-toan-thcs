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
 assert.equal(library.filter(x=>x.exercise_id===id).length,1,"W3B reviewed append-only Written item missing or duplicated: "+id);
}
assert(drafts.includes("NOT approved for publication"),"Historical pre-approval draft must remain immutable");
const authoring=read("MATH-CT05-07-W3B-WR-AUTHORING-R1_NOTEBOOKLM_VERDICT_RECEIPT.md");
assert(authoring.includes("OVERALL|PASS_FOR_AUTHORING_REVIEW"),"Authoring review PASS required");
assert(authoring.includes("EXPECTED=2")&&authoring.includes("REVIEWED=2"),"Review 2/2 required");
const bank05=[1,2,3,4].flatMap(n=>JSON.parse(fs.readFileSync(
  "docs/assets/data/practice/05-7-hang-dang-thuc-v1-0"+n+".json","utf8")).questions);
for(const [id,token] of [["ID05V1_041","(x-3)^3"],["ID05V1_058","8 x^{3} - 27"],["ID05V1_091","101^2"]]){
 const matches=bank05.filter(x=>x.id===id);
 assert.equal(matches.length,1,"Exact existing Practice ID missing: "+id);
 assert(matches[0].question.includes(token),"W3B exact source prompt no longer agrees with "+id);
}
assert.equal(10**2-2*21,58,"W3B transfer math oracle");
assert.equal(7**3+3**3+(-10)**3,3*7*3*(-10),"W3B challenge math oracle with sum 0");
console.log("PASS W3B R3 receipt + authoring release: 14/14 source IDs, 3 exact MCQs, 2 approved written anchors, no Practice bank append.");

// W3C post-NotebookLM placement review receipt: no W3C authoring approval yet.
const receipt3c=read("MATH-CT05-07-W3C-20261020_NOTEBOOKLM_VERDICT_RECEIPT.md");
const reconciliation3c=read("MATH-CT05-07-W3C-R1_CANONICAL_RECONCILIATION.md");
const authoring3c=read("MATH-CT05-07-W3C-R0_TWO_WRITTEN_AUTHORING_CANDIDATES.md");
assert(receipt3c.includes("PACKET_ID|MATH-CT05-07-W3C-20261016"),"W3C packet mismatch");
assert(receipt3c.includes("EXPECTED=14")&&receipt3c.includes("REVIEWED=14"),"W3C 14/14 incomplete");
assert(receipt3c.includes("OVERALL|PASS_FOR_PLACEMENT_REVIEW"),"W3C placement verdict missing");
for(const text of ["MISSING_IDS|none","DUPLICATE_IDS|none","UNEXPECTED_IDS|none"])assert(receipt3c.includes(text),"W3C ID inventory issue "+text);
const w3cReceiptIds=[...receipt3c.matchAll(/^(0[67]-(?:WR|ENT|CH)-\d+) \| MATH:PASS \|/gm)].map(x=>x[1]);
const w3cReconIds=[...reconciliation3c.matchAll(/^\| `(0[67]-(?:WR|ENT|CH)-\d+)` \|/gm)].map(x=>x[1]);
assert.deepEqual(w3cReceiptIds,groups.W3C,"W3C source 14 verdict order incomplete");
assert.deepEqual(w3cReconIds,groups.W3C,"W3C 14 source-to-live triage order incomplete");
assert.equal(library.length,67,"W3C review-only: canonical 67 Written entries preserved");
for(const [id,legacy] of [["WX07-ENT-001","07-ENT-01"],["WX07-CH-001","07-CH-01"]]){
 assert(authoring3c.includes(id)&&authoring3c.includes(legacy),"W3C written authoring proposal missing "+id);
 assert(!library.some(x=>x.exercise_id===id),"Unreviewed W3C authoring leaked to live library: "+id);
}
assert(authoring3c.includes("NOT APPROVED FOR PUBLICATION"),"W3C paper draft accidentally approved");
const authoringVerdict3c=read("MATH-CT05-07-W3C-WR-AUTHORING-R1_NOTEBOOKLM_VERDICT_RECEIPT.md");
assert(authoringVerdict3c.includes("PACKET_ID|MATH-CT05-07-W3C-WR-AUTHORING-R1"),"W3C authoring review packet mismatch");
assert(authoringVerdict3c.includes("EXPECTED=2")&&authoringVerdict3c.includes("REVIEWED=2"),"W3C authoring 2/2 incomplete");
assert(authoringVerdict3c.includes("OVERALL|PASS_FOR_AUTHORING_REVIEW"),"W3C authoring PASS missing");
const authoringLines3c=[...authoringVerdict3c.matchAll(/^(WX07-(?:ENT|CH)-001) \\| MATH:PASS \\| HINTS:PASS \\| SOLUTION:PASS \\| RUBRIC:PASS \\| GRADE_AND_LAYER:PASS \\| DISTINCT_FROM_CANONICAL_WX:PASS \\| PRECISE_REVISION:none \\| ITEM_VERDICT:PASS$/gm)].map(x=>x[1]);
assert.deepEqual(authoringLines3c,["WX07-ENT-001","WX07-CH-001"],"W3C 2 reviewed PASS rows missing or reordered");
assert(authoringVerdict3c.includes("RELEASE NOT AUTHORIZED"),"W3C owner release gate lost");

const live6=[1,2,3,4].flatMap(n=>JSON.parse(fs.readFileSync("docs/assets/data/practice/06-phan-tich-da-thuc-v1-0"+n+".json","utf8")).questions);
const live7=[1,2,3,4].flatMap(n=>JSON.parse(fs.readFileSync("docs/assets/data/practice/07-phan-thuc-dai-so-v1-0"+n+".json","utf8")).questions);
assert.equal(live6.length,120,"CT06 120 practice unchanged");
assert.equal(live7.length,120,"CT07 120 practice unchanged");
for(const [list,id,tokens] of [[live6,"FAC06V1_065",["x^{2} + 5 x + 6","tách hạng tử giữa"]],[live6,"FAC06V1_075",["x^{2} - 2 x - 8","tách hạng tử giữa"]],[live7,"RAT07V1_064",["x^2-9","x-3","x+3"]]]){
 const items=list.filter(x=>x.id===id);assert.equal(items.length,1,"Missing current W3C overlap "+id);
 for(const tok of tokens)assert(items[0].question.includes(tok),"W3C active-bank overlap changed "+id+" "+tok);
}
assert.equal((2**2+1)/(2**2-1),5/3,"W3C challenge exemplar x=2 check");
console.log("PASS W3C: 14/14 placement + 2/2 authoring PASS receipts, 240 Practice/67 WX unchanged, release NOT authorized.");

console.log("PASS 40-item W3A/W3B/W3C source-locked partition: W3C 14/14 placement PASS received, two new W3C written authoring drafts remain unpublished.");
