#!/usr/bin/env node
"use strict";
// W1 independent academic R1 receipt validator — no student content migration.
const assert=require("node:assert/strict");
const fs=require("node:fs");
const read=f=>fs.readFileSync(f,"utf8");
const file="docs/collaboration/math-w1-notebooklm-r1-verdict-overlay-20261015.json";
const overlay=JSON.parse(read(file));
const receipt=read(overlay.source_report_path);
const full=JSON.parse(read("docs/collaboration/math-four-topic-legacy-complete-inventory-r1.json"));
const written=JSON.parse(read("docs/assets/data/written-exercises/written-exercise-library-v1.json"));
const existing=new Set(full.entries.map(x=>x.source_id));
const verdicts=Object.create(null),ids=new Set();
const rawRecords=[...receipt.matchAll(/^source_id:\s*([0-9]{2}-(?:G\d-WR|WR|M[1-4]|SUP|ENT|CH)-\d+)\s*$/gm)].map(m=>m[1]);
const rawVerdicts=[...receipt.matchAll(/^review_result:\s*(PASS|REVISE|INSUFFICIENT_EVIDENCE|NOT_REVIEWED)\s*$/gm)].map(m=>m[1]);
assert.equal(rawRecords.length,19,"raw NotebookLM report lacks 19 source records");
assert.equal(rawVerdicts.length,19,"raw NotebookLM report lacks 19 per-item verdicts");
assert.match(receipt,/OVERALL_VERDICT\|REVISIONS_REQUIRED/);
assert.match(receipt,/CLEARANCE\|BLOCKED_PENDING_RECONCILIATION/);
for(let i=0;i<19;i++){
 assert(!ids.has(rawRecords[i]),"duplicate raw report source ID");
 ids.add(rawRecords[i]);
 verdicts[rawRecords[i]]=rawVerdicts[i];
}
assert.equal(full.entries.length,75);
assert.equal(overlay.items.length,19);
assert.deepEqual(overlay.counts,{INSUFFICIENT_EVIDENCE:15,REVISE:3,PASS:1});
assert.equal(overlay.verdict,"REVISIONS_REQUIRED");
assert.equal(overlay.clearance,"BLOCKED_PENDING_RECONCILIATION");
const micro={};
const slugs={CT02:"02-so-va-phep-tinh",CT03:"03-ti-le-ti-le-thuc",CT04:"04-bieu-thuc-dai-so",CT21:"21-thong-ke"};
for(const [topic,slug] of Object.entries(slugs)){
 const bank=JSON.parse(read("docs/assets/data/practice/"+slug+"-micro-v1.json"));
 micro[topic]=new Set(bank.questions.map(x=>x.id));
}
const writtenIds=new Set(written.exercises.map(x=>x.exercise_id));
const seen=new Set();
for(const row of overlay.items){
 assert(existing.has(row.source_id),"reviewed source missing in protected 75: "+row.source_id);
 assert.equal(row.review_verdict,verdicts[row.source_id],"NotebookLM receipt contradiction for "+row.source_id);
 assert(!seen.has(row.source_id),"duplicate overlay ID");seen.add(row.source_id);
 const t="CT"+row.source_id.slice(0,2);
 const dest=row.canonical_reuse_id;
 if(dest){
  const ok=dest.startsWith("WX")?writtenIds.has(dest):micro[t].has(dest);
  assert(ok,"canonical replacement does not exist "+dest);
 }
 const compare=row.micro_or_written_comparator;
 if(compare){
  const ok=compare.startsWith("WX")?writtenIds.has(compare):micro[t].has(compare);
  assert(ok,"comparison candidate missing "+compare);
 }
 assert.equal(row.s1_placement,"UNKNOWN","R1 cannot authorize grade claim");
 assert.equal(row.academic_clearance,"BLOCKED","R1 not a release receipt");
 assert.equal(row.legacy_visibility,"PRESERVE");
 assert.equal(row.retirement_allowed,false,"premature source removal");
}
assert.deepEqual(seen,ids,"overlay excludes or invents original NotebookLM reviewed item");
const same=overlay.items.find(x=>x.source_id==="04-WR-02");
assert.equal(same.canonical_reuse_id,"ALG04MICRO_005");
assert.equal(same.comparison,"EXACT_MATCH");
const proof=overlay.items.find(x=>x.source_id==="04-CH-01");
assert.equal(proof.review_verdict,"PASS");
assert.equal(proof.academic_clearance,"BLOCKED");
console.log("PASS independent W1 receipt reconcile: 19/19 verbatim source IDs and verdicts, canonical references exist, R1 counts 1/3/15, 75 source items preserved, 0 academic activations.");
