#!/usr/bin/env node
"use strict";
const assert=require("node:assert/strict");
const fs=require("node:fs");
const json=p=>JSON.parse(fs.readFileSync(p,"utf8"));
const text=fs.readFileSync("review-packets/kntt-g9-gap-priority-r1/00_NOTEBOOKLM_PACKET_R1.md","utf8");
const a=json("docs/assets/data/curriculum/kntt-g9-gap-priority-r1.json");

assert.equal(a.packet_id,"MATH-KNTT-G9-GAP-PRIORITY-R1-20261008");
assert.equal(a.status,"ACADEMIC_SCOPE_REVIEW_PENDING");
assert.equal(a.inventory.status,"G9_EXISTING_EVIDENCE_INVENTORY_R1");
assert.equal(a.reconciliation.clearance,"G9_R4_RECONCILIATION_REVIEW_COMPLETE");
assert.equal(a.notebooklm_source_contract.selected_source_count,5);
assert.equal(a.max_groups_wave1,2);
assert.deepEqual(a.candidates.CH7.dimensions,["LEARN","MICRO"]);
assert.deepEqual(a.candidates.CH8.dimensions,["LEARN","MICRO"]);
assert.deepEqual(a.candidates.CH7.targets,["bang-tan-so","tan-suat","du-lieu-ghep-nhom","STAT-REPRESENT"]);
assert.deepEqual(a.candidates.CH8.item_review,["dong-xu-nhieu-lan","xuc-xac-hai-lan","so-do-cay","nhieu-buoc-doc-lap","khong-hoan-lai"]);
assert.deepEqual(a.item_review_queue.CH6,["bieu-thuc-doi-xung","dau-nghiem","lien-he-do-thi"]);
for(const [k,v] of Object.entries(a.protected_boundaries)) assert.equal(v,false,"protected boundary changed: "+k);
assert.ok(text.includes("Select exactly 5 Sources"));
assert.ok(text.includes("FIRST_REPAIR_WAVE|<CHAPTERS_SEMICOLON_SEPARATED>"));
assert.ok(text.includes("CLEARANCE|G9_GAP_PRIORITY_R1_REVIEW_COMPLETE"));
assert.ok(text.includes("Practice expansion merely because Learn/Micro is being repaired"));
console.log("PASS: Grade-9 gap-priority scope packet locks CH7/CH8 P0 review and CH6 item-review queue.");
console.log("PASS: exact 5-source NotebookLM contract and anti-inflation boundaries are encoded.");
