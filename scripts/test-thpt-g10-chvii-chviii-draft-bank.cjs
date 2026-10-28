"use strict";
const assert=require("node:assert/strict");
const fs=require("node:fs");
const path=require("node:path");
const root=path.resolve(__dirname,"..");
const read=p=>fs.readFileSync(path.join(root,p),"utf8");
const seven=read("prototypes/thpt/shared-items/THPT_G10_CHVII_B19_B22_CORE_PRACTICE_CANDIDATES_v0.1.md");
const eight=read("prototypes/thpt/shared-items/THPT_G10_CHVIII_B23_B25_CORE_PRACTICE_CANDIDATES_v0.1.md");
const sevenWritten=read("prototypes/thpt/shared-items/THPT_G10_CHVII_WRITTEN_ANCHOR_CANDIDATES_v0.1.md");
const eightWritten=read("prototypes/thpt/shared-items/THPT_G10_CHVIII_WRITTEN_ANCHOR_CANDIDATES_v0.1.md");
const readiness=read("prototypes/thpt/shared-items/THPT_G10_CHVII_CHVIII_READINESS_BLUEPRINT_NO_ITEMS_v0.1.md");
const ch6a=read("prototypes/thpt/shared-items/THPT_G10_CHVI_B15_CANONICAL_CANDIDATES_v0.1.md");
const ch6b=read("prototypes/thpt/shared-items/THPT_G10_CHVI_B17_B18_CANONICAL_CANDIDATES_v0.1.md");

function bank(md,chapter,lessons,expected){
 const rows=[...md.matchAll(/^\| (THPT-G10-B(?:19|20|21|22|23|24|25)-[CP]\d\d) \|/gm)].map(x=>x[1]);
 assert.equal(rows.length,expected,chapter+" expected candidate count");
 assert.equal(new Set(rows).size,expected,chapter+" duplicate candidates");
 for(const lesson of lessons){
  const subset=rows.filter(x=>x.includes("-B"+lesson+"-"));
  assert.equal(subset.length,6,"B"+lesson+" must have 6 questions");
  assert.equal(subset.filter(x=>/-C\d\d$/.test(x)).length,2,"B"+lesson+" Core count");
  assert.equal(subset.filter(x=>/-P\d\d$/.test(x)).length,4,"B"+lesson+" Practice/Application count");
 }
 for(const id of rows){
  assert(md.includes("### "+id+" —"),"missing full question: "+id);
  const section=md.split("### "+id+" —")[1].split(/\n### |\n## /)[0];
  assert(section.includes("**Đề:**"),id+" no statement");
  assert(section.includes("**Đáp án"),id+" no canonical answer");
  assert(section.includes("**Lời giải:**"),id+" no solution");
  assert(section.includes("**Hint")||section.includes("**Gợi ý"),id+" no formative hint");
 }
 assert(md.includes("DRAFT_NOT_ACADEMICALLY_REVIEWED"),"not clearly draft");
 return rows;
}
const sevenIDs=bank(seven,"CHVII",[19,20,21,22],24);
const eightIDs=bank(eight,"CHVIII",[23,24,25],18);
// Count rows only inside the original register sections. In the source
// documents, held-out IDs appear again in a later detailed table.
const chviIDs=[...ch6a.split("## 2. Core")[0].matchAll(/^\| (THPT-G10-B15-[CPR]\d\d) \|/gm),
 ...ch6b.split("## B. Bài 17")[0].matchAll(/^\| (THPT-G10-B(?:17|18)-[CPR]\d\d) \|/gm)].map(x=>x[1]);
assert.equal(chviIDs.length,25,"ChVI existing candidate baseline count");
assert.equal(new Set([...sevenIDs,...eightIDs,...chviIDs]).size,67,
 "canonical ID collision across Chapters VI,VII,VIII");

const writtenIds=[
 ...sevenWritten.matchAll(/^## (THPT-G10-CHVII-W\d\d-(?:ANCHOR-)?\d\d)/gm),
 ...eightWritten.matchAll(/^## (THPT-G10-CHVIII-W\d\d-(?:ANCHOR-)?\d\d)/gm)
].map(x=>x[1]);
assert.equal(writtenIds.length,7,"7 Written candidates required");
assert.equal(new Set(writtenIds).size,7,"Written ID duplicated");
assert.equal((sevenWritten.match(/anchor_tag=true/g)||[]).length,1,"CHVII Anchor must be a Written label");
assert.equal((eightWritten.match(/anchor_tag=true/g)||[]).length,1,"CHVIII Anchor must be a Written label");
assert(readiness.includes("NO ITEMS")&&readiness.includes("NO_ASSESSMENT_DELIVERY"));
assert(!readiness.includes("**Đáp án")&&!readiness.includes("**Đề:"),
 "Readiness blueprint must contain NO answer keys or actual question bodies");
assert.equal((readiness.match(/\| CHVII-READ-/g)||[]).length,8,"CHVII blueprint 8 outcome slots");
assert.equal((readiness.match(/\| CHVIII-READ-/g)||[]).length,6,"CHVIII blueprint 6 outcome slots");
for(const userPath of ["docs/assets/javascripts/thpt-r4-preview.js",
 "docs/thpt-preview/sgk/chuong-vi/tu-kiem-tra-chuong.md"]){
 const source=read(userPath);
 for(const id of [...sevenIDs,...eightIDs,...writtenIds]){
  assert(!source.includes(id),"Internal draft item leaked into preview "+id);
 }
}
console.log("PASS THPT G10 draft bank: ChVII 24 Core/Practice + 4 Written, ChVIII 18 Core/Practice + 3 Written; unique vs ChVI 25; 14 readiness slots have no key/stem. NOT Academic PASS.");
