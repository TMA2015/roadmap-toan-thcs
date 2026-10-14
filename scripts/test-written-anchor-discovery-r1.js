#!/usr/bin/env node
"use strict";
// UX/navigation-only guard. No learner data, maths content or IDs are mutated.
const fs = require("fs");
const path = require("path");
const assert = require("assert");
const root = path.resolve(__dirname, "..");
const read = p => fs.readFileSync(path.join(root, p), "utf8");
const exists = p => fs.existsSync(path.join(root, p));
const writtenPage = read("docs/luyen-tap/index.md");
const core02 = read("docs/kien-thuc/02-so-va-phep-tinh/bai-tap.md");
const anchors = JSON.parse(read("docs/assets/data/anchors/anchor-catalog-v1.json"));
const written = JSON.parse(read("docs/assets/data/written-exercises/written-exercise-library-v1.json"));
const manifest = JSON.parse(read("docs/assets/data/practice/02-so-va-phep-tinh-v1.manifest.json"));
const anchorDir = "docs/kien-thuc/25-tong-hop-on-thi-10/";

for (const filename of ["kho-bai-mo-neo.md", "bai-toan-kinh-dien.md"]) {
  assert(exists(anchorDir + filename), "Anchor destination missing: " + filename);
  assert(writtenPage.includes("../kien-thuc/25-tong-hop-on-thi-10/" + filename),
    "Shared written library must expose the separate canonical anchor source: " + filename);
}
assert(writtenPage.indexOf("## Bài mẫu tiêu biểu (bài mỏ neo)") <
       writtenPage.indexOf("<div data-written-exercise-library>"),
       "Anchor discovery link must precede the written exercise filter");
assert(writtenPage.includes("chưa được gộp vào cùng bộ lọc") && writtenPage.includes("?kind=anchor"),
       "Distinguish deep anchors in Written Library from separate CĐ25 catalog");
assert(Array.isArray(written.exercises) && written.exercises.length > 0,
       "Existing written exercises must remain present");
assert(written.exercises.filter(x=>x.exercise_kind==="anchor").length === 10,
       "Preserve all ten approved Written deep anchors");
const writtenUi=read("docs/assets/javascripts/written-exercise-library-v1.js");
assert(writtenUi.includes('kind=params.get("kind")') && writtenUi.includes('"Bài mỏ neo ("') && writtenUi.includes('"Bài mỏ neo · giải sâu"'),
       "Published Written Library must expose deep-anchor filter and learner label");
assert(Array.isArray(anchors.anchors) && anchors.anchors.length >= 10,
       "CĐ25 canonical anchor catalog is missing");
assert(anchors.representative_ids.length === 10 &&
       new Set(anchors.representative_ids).size === 10 &&
       new Set(anchors.anchors.map(x=>x.id)).size === anchors.anchors.length,
       "Anchor identities and 10 representative selection must remain stable");
for (const id of anchors.representative_ids)
  assert(anchors.anchors.find(x=>x.id===id), "Representative ID missing: " + id);
for (const a of anchors.anchors) {
  assert(a.id && a.title && (a.source_uri || a.deep_dive_uri), "Invalid anchor entry");
  // Routes in the manifest are relative to the CT25 folder, never duplicates in Written Library.
  if (a.source_uri) {
    const sourcePage = a.source_uri.split("#")[0].replace(/\/$/, "");
    assert(exists(anchorDir + sourcePage + ".md"),
      "Canonical anchor entry has no published source Markdown: " + a.id);
  }
  if(a.deep_dive_uri)
    assert(exists(anchorDir + a.deep_dive_uri.replace(/\/$/, "") + ".md"),
      "Deep solution not found for " + a.id);
}
assert(manifest.schema === "practice-bank-manifest-v1" && manifest.question_count > 0);
const count = manifest.sources.reduce((sum,src)=>{
  const part=JSON.parse(read("docs/assets/data/practice/"+src));
  return sum + part.questions.length;
},0);
assert(count === manifest.question_count,"Topic02 actual question count and manifest diverged");
assert(!core02.includes("120 câu"), "Topic02 must not hardcode obsolete 120-question count");
assert(core02.includes("số câu thực tế được hiển thị trong công cụ"),
       "Topic02 copy must defer to the real dynamic bank count");
console.log("PASS written-anchor navigation: CĐ25 sources, ten representatives, written source separation and Topic02 dynamic count.");
console.log("BOUNDARY: navigation/data-integrity guard only, not A2 human UX or academic content certification.");
