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

// Incremental v0.2: 14 new Practice candidates (P05/P06 in each B19–B25),
// 35 provisional outcomes and 4 original editable SVG diagrams.
const advanced=read("prototypes/thpt/shared-items/THPT_G10_CHVII_CHVIII_ADVANCED_PRACTICE_CANDIDATES_v0.2.md");
const matrix=read("prototypes/thpt/THPT_G10_CHVII_CHVIII_OUTCOME_PLACEMENT_MATRIX_v0.2.md");
const advancedIds=[...advanced.matchAll(/^\| (THPT-G10-B(?:19|20|21|22|23|24|25)-P0[56]) \|/gm)].map(x=>x[1]);
assert.equal(advancedIds.length,14,"advanced candidate count must be 14");
assert.equal(new Set(advancedIds).size,14,"advanced duplicate IDs");
for(const n of [19,20,21,22,23,24,25]){
 assert.equal(advancedIds.filter(x=>x.includes("-B"+n+"-")).length,2,
  "two new advanced practice questions per B"+n);
}
const allIds=[...sevenIDs,...eightIDs,...advancedIds,...writtenIds];
assert.equal(allIds.length,63,"63 authored items across two chapters");
assert.equal(new Set([...allIds,...chviIDs]).size,88,
 "canonical ID collision across ChVI/VII/VIII");
assert(advanced.includes("DRAFT_NOT_ACADEMICALLY_REVIEWED"));
for(const id of advancedIds){
 const marker="### "+id+" —";
 assert(advanced.includes(marker),"missing advanced question "+id);
 const section=advanced.split(marker)[1].split(/\n### |\n## /)[0];
 for(const label of ["**Đề:**","**Đáp án chuẩn:**","**Lời giải:**","**Gợi ý:**"]){
  assert(section.includes(label),id+" missing "+label);
 }
 for(const studentPath of ["docs/assets/javascripts/thpt-r4-preview.js",
 "docs/thpt-preview/sgk/chuong-vi/tu-kiem-tra-chuong.md"]){
  assert(!read(studentPath).includes(id),"advanced draft leaked to preview "+id);
 }
}
const outcomeRows=[...matrix.matchAll(/^\| (G10-B(?:19|20|21|22|23|24|25)-[A-Z_]+) \|/gm)].map(x=>x[1]);
assert.equal(outcomeRows.length,35,"35 provisional outcome rows");
assert.equal(new Set(outcomeRows).size,35,"duplicate outcome row");
for(const id of allIds){
 assert(matrix.includes(id),"canonical item unmapped in outcome matrix "+id);
}
assert(matrix.includes("NO_MASTERY_CREDIT")&&matrix.includes("NO_MERGE_DEPLOY"));
for(const [file,expected] of [
 ["THPT_G10_B19_LINE_INTERSECTION_DRAFT.svg","I(2; 2)"],
 ["THPT_G10_B21_CIRCLE_TANGENT_DRAFT.svg","H(3; −1)"],
 ["THPT_G10_B22_PARABOLA_FOCUS_DIRECTRIX_DRAFT.svg","y² = 8x"],
 ["THPT_G10_B23_COUNTING_TREE_DRAFT.svg","3 áo × 2 quần = 6 bộ"]
]){
 const s=read("prototypes/thpt/visuals/"+file);
 assert(s.includes("<svg ")&&s.includes("</svg>")&&s.includes("<title ")&&s.includes("<desc "),
  "SVG must have accessible root/title/description "+file);
 assert(s.includes(expected),"diagram missing mathematical landmark "+file);
 assert(!/<script\b|<foreignObject\b|(?:href|xlink:href)\s*=\s*["']https?:\/\/|onload\s*=|onclick\s*=/i.test(s),
  "SVG must not contain executable or remote content "+file);
}
assert(!readiness.includes("THPT-G10-B19-P05"),
 "Readiness blueprint must not embed advanced Practice item IDs");

console.log("PASS THPT G10 draft bank v0.2: 56 Core/Practice + 7 Written = 63 unique candidate items; 35 mapped provisional outcomes; 4 original SVGs; 14 readiness blueprint slots with no keys. NOT Academic PASS.");
