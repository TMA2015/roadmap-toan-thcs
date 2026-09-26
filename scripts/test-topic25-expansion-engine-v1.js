#!/usr/bin/env node
"use strict";
const fs=require("fs"),path=require("path"),root=path.resolve(__dirname,"..");
const read=p=>fs.readFileSync(path.join(root,p),"utf8");
const exists=p=>fs.existsSync(path.join(root,p));
const check=(cond,msg)=>{if(!cond)throw Error(msg);};
const catalog=JSON.parse(read("docs/assets/data/anchors/anchor-catalog-v1.json"));
const exams=JSON.parse(read("docs/assets/data/exams/topic25-exams-v1.json"));
const folder="docs/kien-thuc/25-tong-hop-on-thi-10/";
check(catalog.anchors.length>=11,"catalog should already extend beyond ten anchors");
check(catalog.representative_ids.length===10&&new Set(catalog.representative_ids).size===10,"exactly ten curated IDs");
const ids=new Set(catalog.anchors.map(a=>a.id));
check(ids.size===catalog.anchors.length,"stable unique anchor IDs");
for(const id of catalog.representative_ids)check(ids.has(id),"representative id missing "+id);
const original=read(folder+"bai-toan-kinh-dien.md");
for(const a of catalog.anchors){
  check(a.topic_ids.length>0&&a.skill_tags.length>0,a.id+" needs topic/skill tags");
  check(a.independent_math_review==="pending_Gemini",a.id+" must not fake external approval");
  for(const x of a.related_anchor_ids)check(ids.has(x),a.id+" broken relation "+x);
  if(a.source_uri){const hash=a.source_uri.split("#")[1];check(original.includes('id="'+hash+'"'),a.id+" missing stable anchor "+hash);}
  if(a.deep_dive_uri){
    const doc=folder+a.deep_dive_uri.replace(/\/$/,".md");
    check(exists(doc),a.id+" missing deep lesson "+doc);
    const s=read(doc);
    check(s.includes("Lời giải chi tiết")&&s.includes("Tư duy")&&s.includes("Biến thể"),a.id+" lacks deep proof/reflection/variation");
  }
  for(const fig of a.figure_uris){
    const file=path.resolve(root,folder,fig);
    check(fs.existsSync(file),a.id+" missing SVG "+fig);
    const svg=fs.readFileSync(file,"utf8");
    check(svg.includes("<svg")&&svg.includes("<title")&&svg.includes("<desc")&&svg.includes("viewBox"),a.id+" SVG must be accessible");
  }
}
check(catalog.anchors.some(a=>!a.representative),"library needs at least one nonrepresentative extension");
check(exams.exams.length===3,"3 complete mock exams");
const anchorRefs=new Set();
for(const exam of exams.exams){
  check(exam.duration_minutes===120&&exam.total_points===10,exam.id+" exam settings");
  check(exam.items.length>=10,exam.id+" meaningful answer parts");
  check(exists("docs/"+exam.exam_uri+"../de-luyen-"+exam.no+".md") || exists(folder+"de-luyen-"+exam.no+".md"),exam.id+" source exam");
  check(exists(folder+"de-luyen-"+exam.no+"-dap-an.md"),exam.id+" separate key");
  const total=exam.items.reduce((n,x)=>n+x.points,0);
  check(Math.abs(total-10)<1e-8,exam.id+" points total "+total);
  const unique=new Set();
  for(const item of exam.items){
    check(!unique.has(item.id),exam.id+" repeated question id "+item.id);unique.add(item.id);
    const rubric=item.criteria.reduce((n,x)=>n+x.points,0);
    check(Math.abs(rubric-item.points)<1e-8,exam.id+"/"+item.id+" broken rubric");
    check(item.criteria.every(x=>x.text&&x.points>0),exam.id+"/"+item.id+" empty step");
    for(const a of item.anchor_ids){check(ids.has(a),exam.id+" broken gap anchor "+a);anchorRefs.add(a);}
    for(const p of item.topic_uris)check(exists("docs/"+p+"index.md"),exam.id+" missing gap page "+p);
  }
}
check(anchorRefs.has("A25-011"),"new anchor must link from a full exam");
const code=read("docs/assets/javascripts/topic25-exam-engine-v1.js");
for(const token of ["deadline_at","localStorage","submitted","finalized","answer_opened","confirm(","anchorHref","timed_out"]){
  check(code.includes(token),"engine missing "+token);
}
check(!code.includes("innerHTML")&&!code.includes("eval("),"no untrusted markup or eval");
check(code.includes("Static")&&code.includes("NOT a security boundary"),"do not misrepresent GitHub Pages security");
const packet=read("review-packets/topic25/GEMINI_REVIEW_PACKET_2026-09-26.txt");
check((packet.match(/BEGIN SOURCE FILE:/g)||[]).length===13,"Gemini packet includes exact original 13 sources");
console.log("PASS: 10 curated of 11+ anchors, geometry SVG and proof links, 3x120min 10-point exam rubrics, gap mapping and source packet.");
