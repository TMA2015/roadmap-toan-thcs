#!/usr/bin/env node
"use strict";
// Verifies the submitted NotebookLM R2 report is preserved and that its 19 decisions
// are recorded without silently endorsing contradictory answer keys or moving items.
const assert=require("node:assert/strict");
const fs=require("node:fs");
const read=p=>fs.readFileSync(p,"utf8");
const overlay=JSON.parse(read("docs/collaboration/math-w1-notebooklm-r2-verdict-overlay-20261015.json"));
const receipt=read(overlay.source_report);
const ledger=JSON.parse(read("docs/collaboration/math-four-topic-legacy-complete-inventory-r1.json"));
const written=JSON.parse(read("docs/assets/data/written-exercises/written-exercise-library-v1.json"));
const available=new Set(ledger.entries.map(q=>q.source_id));
assert.equal(ledger.entries.length,75);
assert.match(receipt,/ACADEMIC_CONTENT_VERDICT\|ACADEMIC_ITEMS_PASS/);
assert.match(receipt,/DEPLOYMENT_VERDICT\|REVISE_CANONICAL_POINTERS_REQUIRED/);
const ids=[...receipt.matchAll(/^source_id:\s*([^\s]+)\s*$/gm)].map(m=>m[1]);
const outcomes=[...receipt.matchAll(/^r2_verdict:\s*(PASS|REVISE|INSUFFICIENT_EVIDENCE)\s*$/gm)].map(m=>m[1]);
assert.equal(ids.length,19,"R2 source must contain 19 individual records");
assert.equal(outcomes.length,19,"R2 source must contain 19 individual verdicts");
const srcOutcomes=new Map(ids.map((id,i)=>[id,outcomes[i]]));
assert.equal(srcOutcomes.size,19);
assert.equal(overlay.items.length,19);
assert.equal(overlay.reviewer_summary.counts.pass,16);
assert.equal(overlay.reviewer_summary.counts.revise,3);
assert.equal(overlay.reviewer_summary.counts.insufficient_evidence,0);
assert.equal(outcomes.filter(x=>x==="PASS").length,16);
assert.equal(outcomes.filter(x=>x==="REVISE").length,3);
assert.equal(overlay.other_old_items_unreviewed,56);
const micro={};
for(const [key,slug] of Object.entries({CT02:"02-so-va-phep-tinh",CT03:"03-ti-le-ti-le-thuc",CT04:"04-bieu-thuc-dai-so",CT21:"21-thong-ke"}))
 micro[key]=new Set(JSON.parse(read("docs/assets/data/practice/"+slug+"-micro-v1.json")).questions.map(x=>x.id));
const wx=new Set(written.exercises.map(x=>x.exercise_id));
const tested=new Set();
for(const row of overlay.items){
 assert(available.has(row.source_id),"reviewed original is missing "+row.source_id);
 assert(!tested.has(row.source_id),"duplicate item "+row.source_id);
 tested.add(row.source_id);
 assert.equal(srcOutcomes.get(row.source_id),row.r2_verdict,"R2 verdict drift "+row.source_id);
 assert.notEqual(row.s1_placement_citation_reported.length,0,"missing reviewer S1 claim "+row.source_id);
 assert.equal(row.developer_source_grade_verification,"NOT_INDEPENDENTLY_VERIFIED_FROM_PDF");
 assert.equal(row.historical_source_visibility,"PRESERVE");
 assert.equal(row.implementation_release_status,"BLOCKED_PENDING_QA_AND_OWNER_ACCEPTANCE");
 assert.equal(row.retirement_allowed,false);
 if(row.proposed_canonical_reuse_id){
  const id=row.proposed_canonical_reuse_id;
  assert(id.startsWith("WX")?wx.has(id):micro["CT"+row.source_id.slice(0,2)].has(id),"unresolved reuse ID "+id);
 }
}
assert.equal(tested.size,19);
const source04=read("docs/kien-thuc/04-bieu-thuc-dai-so/bai-tap.md");
assert(source04.includes("Cho \\(P(x)=4x^3-2x+7\\)."),"authored original changed");
assert(source04.includes("Hạng tử tự do là \\(7\\)."),"source-authored +7 key changed");
const sourceRow=overlay.items.find(x=>x.source_id==="04-WR-01");
assert.equal(sourceRow.source_math_check,"REVIEWER_ANSWER_DISAGREES_WITH_AUTHORED_SOURCE");
assert.equal(overlay.critical_error.original_constant_term,7);
assert.equal(overlay.critical_error.notebooklm_r2_constant_term,-7);
assert(receipt.includes("Hạng tử tự do = -7"),"expected R2 error not preserved in raw transcript");
assert.equal(overlay.additional_release_blockers.length,3);
const locked=new Set(overlay.additional_release_blockers.map(x=>x.source_id));
assert.deepEqual(locked,new Set(["04-WR-01","03-M1-01","21-M4-01"]));
console.log("PASS W1 R2 evidence guard: 19/19 exact source verdicts, 16 PASS and 3 REVISE reported, three reuse IDs exist, 75 original items retained, source +7 != reviewer -7 flagged and blocked.");
