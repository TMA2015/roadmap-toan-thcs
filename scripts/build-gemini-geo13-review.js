#!/usr/bin/env node
"use strict";
const fs=require("fs"),path=require("path");
const ROOT=path.resolve(__dirname,"..");
const OUT=path.resolve(process.argv[2]||path.join(ROOT,"gemini-geo13-review.json"));
const files=[
 "docs/assets/data/curriculum/geometry-architecture-v1.json",
 "docs/assets/data/curriculum/geometry-core-coverage-v1.json",
 "docs/assets/data/curriculum/topic13-learning-workspace.json",
 "docs/assets/data/practice/13-goc-va-duong-thang-micro-v1.json",
 "docs/assets/data/assessment/13-goc-va-duong-thang-core-v1.json",
 "docs/assets/data/practice/13-goc-va-duong-thang-v1.manifest.json",
 "docs/assets/data/practice/13-goc-va-duong-thang-v1-05.json",
 "docs/kien-thuc/13-goc-va-duong-thang/index.md",
 "docs/kien-thuc/13-goc-va-duong-thang/bai-tap.md",
 "docs/kien-thuc/13-goc-va-duong-thang/tu-kiem-tra.md",
 "docs/assets/data/curriculum/kntt-grade6-map.json",
 "docs/assets/data/curriculum/kntt-grade7-map.json",
 "docs/assets/data/collaboration/packets/GEO13-GEMINI-REVIEW-001.json"
];
const sources=files.map(rel=>{const abs=path.join(ROOT,rel);if(!fs.existsSync(abs))throw new Error("Missing review source: "+rel);return{path:rel,content:fs.readFileSync(abs,"utf8")}});
const bundle={
 schema:"roadmap-geometry-topic-review-bundle-v1",
 packet_id:"GEO13-GEMINI-REVIEW-001",
 generated_on:new Date().toISOString(),
 topic:"13-goc-va-duong-thang",
 source_policy:{
  authority:"Embedded repository files are authoritative.",
  exact_quote_required:true,
  no_visual_inference:true,
  rule:"Every correction must cite exact source_path + exact current quote; item-level issues must also cite an existing ID. Do not infer mathematical facts from diagram appearance."
 },
 review_focus:["KNTT Core alignment G6–G7","mathematical correctness","proof-language pedagogy","Core vs Core-Support layering","distractor ambiguity","Geometry Architecture contract","MkDocs/LaTeX safety"],
 sources
};
fs.mkdirSync(path.dirname(OUT),{recursive:true});
fs.writeFileSync(OUT,JSON.stringify(bundle,null,2)+"\n");
console.log(`Wrote ${OUT} with ${sources.length} sources`);
