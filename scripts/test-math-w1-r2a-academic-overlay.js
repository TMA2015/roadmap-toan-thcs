#!/usr/bin/env node
"use strict";
const assert=require("node:assert/strict");
const fs=require("node:fs");
const read=p=>fs.readFileSync(p,"utf8");
const d=JSON.parse(read("docs/collaboration/math-w1-notebooklm-r2a-erratum-overlay-20261015.json"));
const r2=JSON.parse(read(d.parent_r2_overlay));
const inv=JSON.parse(read("docs/collaboration/math-four-topic-legacy-complete-inventory-r1.json"));
assert.equal(d.schema,"math-w1-notebooklm-r2a-erratum-overlay-v1");
assert.equal(d.review_round,"R2a");
assert.deepEqual(d.reviewer_verdict.counts,{pass:14,revise:5,insufficient_evidence:0});
assert.equal(d.reviewer_verdict.deployment_verdict,"REVISE_POINTERS_AND_GRADING_CONTRACTS_REQUIRED");
assert.equal(d.items.length,19);assert.equal(inv.entries.length,75);
assert.equal(d.other_unreviewed,56);
const src=new Set(inv.entries.map(x=>x.source_id));
const r2Map=new Map(r2.items.map(x=>[x.source_id,x]));
const r2aMap=new Map(d.items.map(x=>[x.source_id,x]));
assert.equal(r2Map.size,19);assert.equal(r2aMap.size,19);
const changes=new Set();
for(const row of d.items){
  assert(src.has(row.source_id),"R2a ID outside 75 source questions "+row.source_id);
  const old=r2Map.get(row.source_id);assert(old,"missing R2 parent "+row.source_id);
  assert.equal(row.r2_verdict,old.r2_verdict);
  assert.equal(row.s1_citation_claimed,old.s1_placement_citation_reported);
  assert.equal(row.canonical_reuse_id,old.proposed_canonical_reuse_id||null);
  assert.equal(row.retirement_allowed,false);
  assert.equal(row.legacy_visibility,"PRESERVE");
  assert.equal(row.release_status,"BLOCKED_PENDING_REVIEWED_IMPLEMENTATION_AND_OWNER_QA");
  if(row.r2_verdict!==row.r2a_verdict)changes.add(row.source_id);
}
assert.deepEqual(changes,new Set(["03-M1-01","21-M4-01"]));
const source04=read("docs/kien-thuc/04-bieu-thuc-dai-so/bai-tap.md");
assert(source04.includes("Cho \\(P(x)=4x^3-2x+7\\)."));
assert(source04.includes("Hạng tử tự do là \\(7\\)."));
const correct=r2aMap.get("04-WR-01");
assert.equal(correct.r2a_verdict,"PASS");
assert.deepEqual(correct.correction.corrected_answer,{degree:3,coefficient_x3:4,constant_term:7,accepted:["7","+7"]});
assert.equal(correct.correction.r2_key_was_wrong,-7);
const ratio=r2aMap.get("03-M1-01");
assert.equal(ratio.r2a_verdict,"REVISE");
assert.deepEqual(ratio.correction.given_multiset,[3,4,15,20]);
const stats=r2aMap.get("21-M4-01");
assert.equal(stats.r2a_verdict,"REVISE");
assert.deepEqual(stats.correction.frequencies,[1,2,3,4,2]);
assert.deepEqual(stats.correction.percentages_one_decimal,[8.3,16.7,25,33.3,16.7]);
for(const [source_id,destination] of Object.entries({"04-WR-02":"ALG04MICRO_005","02-G6-WR-02":"WX02-NUM-001","02-G6-WR-04":"WX02-NUM-002"})){
 assert.equal(r2aMap.get(source_id).r2a_verdict,"REVISE");
 assert.equal(r2aMap.get(source_id).canonical_reuse_id,destination);
}
console.log("PASS W1 R2a source-locked academic overlay: 19 IDs, 14 PASS/5 REVISE, +7 correction, 2 newly blocked graders, 3 canonical pointers, 75 originals retained.");
