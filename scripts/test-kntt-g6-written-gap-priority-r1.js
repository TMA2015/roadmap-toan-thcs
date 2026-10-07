#!/usr/bin/env node
"use strict";
const assert=require("node:assert/strict");
const fs=require("node:fs");
const crypto=require("node:crypto");
const read=p=>fs.readFileSync(p,"utf8");
const json=p=>JSON.parse(read(p));
const blob=text=>crypto.createHash("sha1").update("blob "+Buffer.byteLength(text,"utf8")+"\0"+text).digest("hex");

const a=json("docs/assets/data/curriculum/kntt-g6-written-gap-priority-r1.json");
assert.equal(a.packet_id,"MATH-KNTT-G6-WRITTEN-GAP-PRIORITY-R1-20261007");
assert.equal(a.status,"ACADEMIC_REVIEW_COMPLETE");
assert.equal(a.current_state.grade6_verified_kntt_placements,3); // reviewed pre-reconciliation state
assert.equal(a.current_state.grade6_candidate_only_rows,0);
assert.equal(a.existing_item_reuse_candidates.length,2);
assert.deepEqual(a.existing_item_reuse_candidates.map(x=>x.exercise_id),["WX21-STA-001","WX21-STA-002"]);
assert.equal(a.explicit_non_reuse_boundaries.length,2);
assert.deepEqual(a.explicit_non_reuse_boundaries.map(x=>x.exercise_id),["WX20-GEO-001","WX23-PRO-002"]);
assert.equal(a.priority_hypothesis.filter(x=>x.priority==="P0").length,3);
assert.ok(a.principles.includes("DO_NOT_EXPAND_BY_ITEM_COUNT_OR_ONE_ITEM_PER_LESSON_QUOTA"));
for(const lock of Object.values(a.source_locks)) assert.equal(blob(read(lock.path)),lock.sha,"source drift: "+lock.path);
assert.equal(a.review_result.verdict,"PASS");
assert.equal(a.review_result.clearance,"G6_WRITTEN_GAP_PRIORITY_R1_REVIEW_COMPLETE");
assert.equal(a.review_result.reuse.approved[0].exercise_id,"WX21-STA-001");
assert.equal(a.review_result.reuse.rejected[0].exercise_id,"WX21-STA-002");
assert.deepEqual(a.review_result.first_authoring_wave,["Bài 27","Bài 20","Bài 34-37"]);
assert.equal(a.review_result.max_new_items_wave1,3);
assert.equal(a.implementation.new_wave1_items_authored,0);
const lib=json("docs/assets/data/written-exercises/written-exercise-library-v1.json");
const wx1=lib.exercises.find(x=>x.exercise_id==="WX21-STA-001");
const wx2=lib.exercises.find(x=>x.exercise_id==="WX21-STA-002");
assert.deepEqual(wx1.kntt_placements,[{grade:6,chapter:9,lesson:"Bài 38–41 — Dữ liệu, bảng thống kê, biểu đồ tranh, biểu đồ cột và cột kép"}]);
assert.ok(!wx2.kntt_placements,"WX21-STA-002 must not receive a Grade-6 placement");
const audit=json("docs/assets/data/curriculum/kntt-dimension-coverage-g6-v1.json");
assert.equal(audit.summary.written_library_kntt_placement_count,4);
assert.deepEqual(audit.summary.dimension_status_counts.WRITTEN_LIBRARY,{
  VERIFIED_KNTT_PLACEMENT:4,
  CANDIDATE_ONLY_NO_KNTT_PLACEMENT:0,
  NONE:27
});
assert.equal(audit.rows.find(r=>r.lesson_ref==="Bài 38-41").dimensions.WRITTEN_LIBRARY.status,"VERIFIED_KNTT_PLACEMENT");
const receipt=read("review-packets/kntt-g6-written-gap-priority-r1/01_NOTEBOOKLM_RESULT_R1.md");
assert.ok(receipt.includes("OVERALL|PASS"));
assert.ok(receipt.includes("REUSE|WX21-STA-001|BAI38_41|APPROVE"));
assert.ok(receipt.includes("REUSE|WX21-STA-002|BAI38_41|REJECT"));
assert.ok(receipt.includes("CLEARANCE|G6_WRITTEN_GAP_PRIORITY_R1_REVIEW_COMPLETE"));
const packet=read("review-packets/kntt-g6-written-gap-priority-r1/00_NOTEBOOKLM_PACKET_R1.md");
assert.ok(packet.includes("Select exactly 5 Sources"));
assert.ok(packet.includes("2 permanent governance sources + 2 Grade-6 SGK sources + 1 temporary review packet = 5 selected Sources total."));
assert.ok(packet.includes("Do not add `Written Exercise Library Contract v1` as a separate NotebookLM Source"));
assert.equal(a.notebooklm_source_contract.selected_source_count,5);
assert.equal(a.notebooklm_source_contract.permanent_sources.length,2);
assert.equal(a.notebooklm_source_contract.grade6_s1_sources.length,2);
assert.equal(a.notebooklm_source_contract.temporary_batch_sources.length,1);
assert.deepEqual(a.notebooklm_source_contract.explicitly_not_selected,["Written Exercise Library Contract v1"]);
assert.ok(packet.includes("WX21-STA-001"));
assert.ok(packet.includes("WX21-STA-002"));
assert.ok(packet.includes("G6_WRITTEN_GAP_PRIORITY_R1_REVIEW_COMPLETE"));
console.log("PASS: Grade-6 Written gap priority R1 is reviewed, source-locked, anti-quota and reuse-first.");
console.log("PASS: WX21-STA-001 is the only newly reconciled Grade-6 reuse placement; WX21-STA-002 remains rejected.");
console.log("PASS: Wave 1 is prioritized but no new Written item is authored in this reconciliation.");
