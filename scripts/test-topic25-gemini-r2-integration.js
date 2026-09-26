#!/usr/bin/env node
"use strict";
const fs=require("fs"),path=require("path");
const base=path.resolve(__dirname,".."),read=p=>fs.readFileSync(path.join(base,p),"utf8"),json=p=>JSON.parse(read(p));
const assert=(ok,what)=>{if(!ok)throw new Error("Topic25 Gemini R2 integration: "+what)};
const folder="docs/kien-thuc/25-tong-hop-on-thi-10/";
const cat=json("docs/assets/data/anchors/anchor-catalog-v1.json");
const unique=(a)=>new Set(a).size===a.length;
assert(cat.anchors.length===11&&cat.representative_ids.length===10&&unique(cat.representative_ids),"stable catalog count");
assert(unique(cat.anchors.map(a=>a.id)),"anchor IDs unique");
assert(cat.anchors.filter(a=>a.representative).map(a=>a.id).sort().join()===cat.representative_ids.slice().sort().join(),"representative IDs consistent");
const library=read(folder+"kho-bai-mo-neo.md"),overview=read(folder+"bai-toan-kinh-dien.md");
for(const n of ["006","007","010"]){
 const a=cat.anchors.find(a=>a.id==="A25-"+n),name="anchor-25-"+n;
 assert(a && a.deep_dive_uri===name+"/" && a.content_depth==="full_solution_with_variants","deep catalog "+n);
 const body=read(folder+name+".md");
 assert(body.includes("A25-"+n) && body.includes("## Lời giải") && body.includes("## Biến thể") && body.includes("bai-toan-kinh-dien.md#"+name),"deep solution outline "+n);
 assert(library.includes("("+name+".md)") && overview.includes("("+name+".md)"),"library and overview routes "+n);
 assert(a.representative===true,"retains curated status "+n);
}
const exams=json("docs/assets/data/exams/topic25-exams-v1.json").exams;
for(const exam of exams){
 assert(exam.duration_minutes===120&&exam.total_points===10,"120min 10pt "+exam.id);
 let sum=0;
 for(const item of exam.items){
   sum+=item.points;
   const subtotal=item.criteria.reduce((acc,c)=>acc+c.points,0);
   assert(Math.abs(subtotal-item.points)<1e-9,"rubric subtotal "+exam.id+"/"+item.id);
   for(const id of item.anchor_ids||[])assert(cat.anchors.some(a=>a.id===id),"missing anchor "+id);
 }
 assert(Math.abs(sum-10)<1e-9,"exam total "+exam.id);
}
const report=read("review-packets/topic25/REVIEW_INTEGRATION_2026-09-26.md");
assert(report.includes("17/23")&&report.includes("anchor-25-011.md")&&report.includes("không nói rằng chính các trang mới đã được Gemini duyệt"),"review coverage caveat");
assert(report.includes("04b275cb5870a2fbd8f540333b96529285277883"),"source-lock");
console.log("PASS Topic25 R2: 11 stable anchors, 10 representative, 3 deep pages, all exam rubrics, explicit limited review provenance.");
