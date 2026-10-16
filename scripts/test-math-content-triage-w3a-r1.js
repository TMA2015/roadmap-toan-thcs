#!/usr/bin/env node
"use strict";
/* Academic triage provenance guard: no candidate is implicitly approved. */
const assert=require("node:assert/strict");
const fs=require("node:fs");
const crypto=require("node:crypto");
const tick=String.fromCharCode(96);
const base="review-packets/math-content-cleanup/";
const ledger=fs.readFileSync(base+"MATH-CT05-07-SOURCE-DISPOSITION-LEDGER-R1.md","utf8");
const packet=fs.readFileSync(base+"MATH-CT05-07-W3A-20261016_NOTEBOOKLM_REVIEW.md","utf8");
const specs=[
 ["05-7-hang-dang-thuc","ff4a8019b0f43e4eea0660bed0926abd89fa4c14",13],
 ["06-phan-tich-da-thuc","00e983516ba2025b2bec54d506462553e4ca9647",13],
 ["07-phan-thuc-dai-so","80b8620ada44de09ddf34e8c60c57a42adf44b6d",14],
];
const expected=[
 "05-WR-01","05-WR-02","05-WR-05","05-ENT-01",
 "06-WR-02","06-WR-03","06-ENT-02","06-CH-01",
 "07-WR-01","07-WR-07","07-WR-10","07-WR-11",
];
const rows=ledger.split("\n").filter(line=>/^\|\s*\x60\d{2}-(?:WR|ENT|CH)-\d+\x60/.test(line));
assert.equal(rows.length,40,"ledger must contain 40 source-item rows");
assert(rows.every(line=>line.trim().endsWith("| NOT_REVIEWED |")),"no implicit academic verdict");
const itemIds=[];
for (const [slug,sha,count] of specs){
 const bytes=fs.readFileSync("docs/kien-thuc/"+slug+"/bai-tap.md");
 const h=crypto.createHash("sha1").update(Buffer.from("blob "+bytes.length+"\0")).update(bytes).digest("hex");
 assert.equal(h,sha,slug+" immutable source blob mismatch");
 const src=bytes.toString("utf8");
 const ids=[...src.matchAll(/^####\s+(\d{2}-(?:WR|ENT|CH)-\d+)\b/gm)].map(m=>m[1]);
 assert.equal(ids.length,count,slug+" source IDs");
 for(const id of ids){
   itemIds.push(id);
   const row=rows.find(line=>line.startsWith("| "+tick+id+tick+" |"));
   assert(row,"ledger missing "+id);
   assert(row.includes(tick+sha+tick),"ledger SHA mismatch for "+id);
 }
}
assert.equal(new Set(itemIds).size,40,"all 40 source IDs unique");
assert.equal(new Set(rows.map(line=>line.split(tick)[1])).size,40,"ledger duplicate source ID");
const sections=[...packet.matchAll(/^### (\d{2}-(?:WR|ENT|CH)-\d+)\s*$/gm)].map(m=>m[1]);
assert.deepEqual(sections,expected,"12 reviewed items must match declared W3A order");
assert(packet.includes("NOT PASS")&&packet.includes("NO IMPLEMENTATION AUTHORIZATION"));
assert(packet.includes("28 bài còn lại CHƯA được thẩm định"));
for(const id of sections){
 assert(packet.split("\n").some(line=>line.startsWith("#### "+id+" ")),"original authored item missing "+id);
}
for(const id of ["WX05-IDN-001","WX06-FAC-001","WX07-RAT-001","WX07-RAT-002"]){
 assert(packet.includes("### "+id),"canonical WX evidence missing "+id);
}
console.log("PASS CT05–07 W3A: 40/40 source IDs locked, 12/12 reviewer items, four canonical WX sources; no migration");
