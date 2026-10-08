#!/usr/bin/env node
"use strict";
const assert=require("node:assert/strict");
const fs=require("node:fs");
const crypto=require("node:crypto");
const read=p=>fs.readFileSync(p,"utf8");
const json=p=>JSON.parse(read(p));
const blob=text=>crypto.createHash("sha1").update("blob "+Buffer.byteLength(text,"utf8")+"\0"+text).digest("hex");

const artifact=json("docs/assets/data/curriculum/kntt-g7-gap-priority-r1.json");
const packet=read("review-packets/kntt-g7-gap-priority-r1/00_NOTEBOOKLM_PACKET_R1.md");
const audit=json("docs/assets/data/curriculum/kntt-dimension-coverage-g7-v1.json");

assert.equal(artifact.packet_id,"MATH-KNTT-G7-GAP-PRIORITY-R1-20261008");
assert.equal(artifact.status,"ACADEMIC_PRIORITY_REVIEW_PENDING");
assert.equal(artifact.review_rows.length,8);

for(const lock of Object.values(artifact.source_locks)){
  assert.equal(blob(read(lock.path)),lock.sha,"source drift: "+lock.path);
}
assert.equal(artifact.source_locks.grade7_reconciliation.clearance,"G7_R2_RECONCILIATION_REVIEW_COMPLETE");

assert.equal(artifact.notebooklm_source_contract.selected_source_count,5);
assert.equal(artifact.notebooklm_source_contract.permanent_sources.length,2);
assert.equal(artifact.notebooklm_source_contract.grade7_s1_sources.length,2);
assert.equal(artifact.notebooklm_source_contract.temporary_batch_sources.length,1);
assert.deepEqual(artifact.notebooklm_source_contract.explicitly_not_selected,[
  "Written Exercise Library Contract v1",
  "Grade-7 dimension audit JSON as a separate NotebookLM Source"
]);
assert.ok(packet.includes("Select exactly 5 Sources"));
assert.ok(packet.includes("2 permanent governance sources + 2 Grade-7 SGK sources + 1 temporary packet = 5 selected Sources total."));
assert.ok(packet.includes("Do **not** add `Written Exercise Library Contract v1` as a separate Source."));
assert.ok(packet.includes("Do **not** add the Grade-7 dimension-audit JSON as a separate Source."));

assert.equal(audit.status,"G7_EXISTING_EVIDENCE_INVENTORY_R1");
assert.deepEqual(audit.summary.priority_gap_candidates.P0,["Bài 1-3","Bài 5-7","Bài 26-28"]);
assert.deepEqual(audit.summary.priority_gap_candidates.P1,["Bài 4","Bài 18-19","Bài 22-23"]);
assert.deepEqual(audit.summary.priority_gap_candidates.P2,["Bài 8","Bài 24-25"]);
assert.equal(audit.summary.written_grade7_kntt_item_count,0);
assert.deepEqual(audit.summary.dimension_status_counts.WRITTEN_LIBRARY,{NONE:21});

const ids=artifact.review_rows.map(r=>r.lesson_ref);
assert.deepEqual(ids,["Bài 1-3","Bài 5-7","Bài 26-28","Bài 4","Bài 18-19","Bài 22-23","Bài 8","Bài 24-25"]);
for(const r of artifact.review_rows){
  assert.ok(["P0","P1","P2"].includes(r.inventory_priority),r.lesson_ref+" priority");
  assert.equal(r.evidence.written.status,"NONE");
}
assert.ok(artifact.review_rows.find(r=>r.lesson_ref==="Bài 1-3").evidence.learn.direct_missing.includes("phep-tinh-so-huu-ti"));
assert.ok(artifact.review_rows.find(r=>r.lesson_ref==="Bài 5-7").evidence.learn.direct_missing.includes("so-vo-ti"));
assert.ok(artifact.review_rows.find(r=>r.lesson_ref==="Bài 26-28").evidence.learn.direct_missing.includes("chia-da-thuc-mot-bien"));

for(const token of [
  "PRIORITY|BAI1_3",
  "PRIORITY|BAI5_7",
  "PRIORITY|BAI26_28",
  "PRIORITY|BAI4",
  "PRIORITY|BAI18_19",
  "PRIORITY|BAI22_23",
  "PRIORITY|BAI8",
  "PRIORITY|BAI24_25",
  "MAX_GROUPS_WAVE1|3",
  "WRITTEN_POLICY|NO_QUOTA_EXPANSION",
  "READINESS_POLICY|NO_QUOTA_EXPANSION",
  "CLEARANCE|G7_GAP_PRIORITY_R1_REVIEW_COMPLETE"
]) assert.ok(packet.includes(token),"packet missing "+token);

for(const [k,v] of Object.entries(artifact.protected_boundaries)) assert.equal(v,false,"protected boundary changed: "+k);

console.log("PASS: Grade-7 gap-priority R1 reviews exactly 8 evidence candidates without authoring content.");
console.log("PASS: NotebookLM source invariant is exactly 5 Sources (2 permanent + 2 Grade-7 SGK + 1 packet).");
console.log("PASS: anti-inflation boundaries keep Written/Readiness NONE states from becoming quotas.");
