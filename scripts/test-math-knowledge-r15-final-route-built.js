#!/usr/bin/env node
"use strict";
/* R15: validate real output routes after strict MkDocs build; no network, account, or learner-data writes. */
const fs=require("node:fs");
const path=require("node:path");
const assert=require("node:assert/strict");
const root=path.resolve("site");
const topics={
 "05-7-hang-dang-thuc":{imgs:1,paper:"WX05-IDN-001",keep:"05-05-mo-hinh-dien-tich-binh-phuong-r2.svg"},
 "14-tam-giac":{imgs:2,paper:"WX14-TRI-003",keep:"14-pythagore-v1.svg"},
 "21-thong-ke":{imgs:8,paper:null,keep:"21-bieu-do-cot.svg"},
 "23-xac-suat":{imgs:4,paper:"WX23-PRO-001",keep:"23-so-do-cay.svg"}
};
function resolveAsset(htmlPath,url){
 const p=url.split(/[?#]/)[0];
 return p.startsWith("/")?path.join(root,p.replace(/^\/+/, "")):path.resolve(path.dirname(htmlPath),p);
}
for(const [topic,expected] of Object.entries(topics)){
 const p=path.join(root,"kien-thuc",topic,"index.html");
 assert(fs.existsSync(p),"missing published topic output "+p);
 const html=fs.readFileSync(p,"utf8");
 assert(!/BẢN THỬ BỐ CỤC R3|CHƯA PHÁT HÀNH/.test(html),"preview notice leaked on "+topic);
 assert(html.includes("math-knowledge-composition-v1.css"),"topic CSS missing "+topic);
 assert((html.match(/class=["'][^"']*math-related-practice/g)||[]).length===1,"expected exactly one contextual learning panel "+topic);
 const imgs=[...html.matchAll(/<img\b[^>]*src=["']([^"']+)["']/g)]
  .filter(m=>m[1].includes("/assets/")||m[1].includes("../assets/"))
  .map(m=>m[1]);
 assert(imgs.length>=expected.imgs,topic+" lost genuine math graphics: "+imgs.length);
 assert(imgs.some(s=>s.includes(expected.keep)),"essential math diagram removed: "+topic);
 for(const src of imgs){
  const local=resolveAsset(p,src);
  assert(local.startsWith(root+path.sep) && fs.existsSync(local),topic+" broken figure path "+src+" -> "+local);
 }
 const hrefs=[...html.matchAll(/<a\b[^>]*href=["']([^"']+)["'][^>]*>([^<]*)<\/a>/g)];
 const filtered=hrefs.map(m=>({href:m[1].replaceAll("&amp;","&"),text:m[2]}))
   .filter(m=>m.text.includes("Luyện ngay")||m.text.includes("Làm tự luận"));
 assert(filtered.filter(m=>m.text.includes("Luyện ngay")).length===1,topic+": expected one active practice button");
 const practice=filtered.find(m=>m.text.includes("Luyện ngay")).href;
 assert(practice.startsWith("bai-tap/?mode=remediation&focus="),topic+": wrong real-route Practice href "+practice);
 assert(!practice.startsWith("../"),topic+": preview-only Practice href");
 const practicePath=resolveAsset(p,practice.split("?")[0]+"index.html");
 assert(fs.existsSync(practicePath),topic+": active Practice route is missing: "+practicePath);
 const papers=filtered.filter(m=>m.text.includes("Làm tự luận"));
 assert(papers.length===(expected.paper?1:0),topic+": mismatch Written buttons");
 if(expected.paper){
  const written=papers[0].href;
  assert(written.startsWith("../../luyen-tap/tu-luan/?topic="),topic+": wrong real-route Written href "+written);
  assert(written.includes("#"+expected.paper.toLowerCase()),topic+": wrong canonical Written item "+written);
  assert(fs.existsSync(path.join(root,"luyen-tap","tu-luan","index.html")),topic+": shared Written library route missing");
 }
 assert((html.match(/class=["']arithmatex["']/g)||[]).length>=2,topic+": typeset math wrappers absent");
 console.log("PASS R15 built published route",topic,{images:imgs.length,practice,approvedWritten:expected.paper||"none"});
}
