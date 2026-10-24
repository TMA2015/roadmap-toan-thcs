/* Independent built-MkDocs preview QA; no learner state, no network calls.
 * Run after mkdocs build --strict: node scripts/test-math-knowledge-native-render-r3.js
 */
"use strict";
const fs=require("node:fs");
const path=require("node:path");
const assert=require("node:assert/strict");
const root=path.resolve("site");
const plans=[
  {topic:"05-7-hang-dang-thuc",version:"r3",math:true,stale:null,phrase:"Hằng đẳng thức dùng theo hai chiều",tables:1},
  {topic:"14-tam-giac",version:"r3",math:true,stale:"Infographic này tóm tắt",phrase:"Tam giác và ký hiệu",tables:1},
  {topic:"21-thong-ke",version:"r3",math:false,stale:null,phrase:"Bảng tần số và bảng tần suất",tables:1},
  {topic:"23-xac-suat",version:"r3",math:true,stale:null,phrase:"Xác suất thực nghiệm",tables:1},
  {topic:"02-so-va-phep-tinh",version:"r9",math:true,stale:"Dùng infographic này",phrase:"Quy tắc dấu với số nguyên",tables:1,keep:"02-04-truc-so-gia-tri-tuyet-do.svg"},
  {topic:"03-ti-le-ti-le-thuc",version:"r9",math:true,stale:"Dùng infographic này",phrase:"Phân biệt tỉ lệ thuận và tỉ lệ nghịch",tables:1,keep:"03-04-ti-le-thuan-nghich.svg"},
  {topic:"06-phan-tich-da-thuc",version:"r9",math:true,stale:null,phrase:"Phối hợp nhiều phương pháp",tables:1,keep:"06-02-so-do-chon-phuong-phap.svg"},
  {topic:"09-he-phuong-trinh",version:"r9",math:true,stale:null,phrase:"Cùng một hệ, so sánh phương pháp thế và cộng đại số",tables:1,keep:"09-04-y-nghia-hinh-hoc-he.svg"}
]
let count=0;
const seen=[];
const urlRx=/(?:src|href)=["']([^"']+)["']/ig;
for(const p of plans){
 const entry=path.join(root,"kien-thuc",p.topic,"preview-composition-"+p.version,"index.html");
 assert(fs.existsSync(entry),"Missing built preview "+entry);
 const html=fs.readFileSync(entry,"utf8");
 assert(html.includes(p.phrase),"Missing pedagogical section "+p.topic);
 if(p.stale)assert(!html.includes(p.stale),"Stale removed-image caption "+p.topic);
 assert((html.match(/<table\b/g)||[]).length>=p.tables,"Missing comparison/process table "+p.topic);
 if(p.math){
  assert(/class=["']arithmatex["']/.test(html),"No preserved typeset math wrappers "+p.topic);
  assert((html.match(/class=["']arithmatex["']/g)||[]).length>=3,"Too few math wrappers "+p.topic);
 }
 // CSS and SVG assets: test only our document-specific resources, not remote MathJax.
 const wantCSS="math-knowledge-composition-v1.css";
 let hasCSS=false, localRefs=[];
 for(const x of html.matchAll(urlRx)){
  const u=x[1];
  if(/^(?:https?:|data:|#|mailto:)/.test(u))continue;
  if(!/(?:assets\/infographics\/(?:02|03|05|06|09)\/|assets\/(?:geometry|statistics|probability)\/|math-knowledge-composition-v1\.css)/.test(u))continue;
  const clean=u.split(/[?#]/,1)[0];
  const absolute=clean.startsWith("/")
     ?path.join(root,clean.replace(/^\/+/,""))
     :path.resolve(path.dirname(entry),clean);
  assert(absolute.startsWith(root+path.sep),"Asset outside website output: "+u);
  assert(fs.existsSync(absolute),"Broken deployed asset in "+p.topic+": "+u+" -> "+absolute);
  localRefs.push(u);
  if(u.includes(wantCSS))hasCSS=true;
 }
 assert(hasCSS,"Preview CSS not resolvable "+p.topic);
 if(p.topic==="05-7-hang-dang-thuc")assert(localRefs.some(u=>u.includes("05-05-")),"Missing source-linked area SVG");
 if(p.keep)assert(localRefs.some(u=>u.includes(p.keep)),"Missing expected visual "+p.keep);
 if(p.version==="r9") {
   assert(html.includes("Luyện ngay"),"Missing skill practice link "+p.topic);
   assert(html.includes("Làm tự luận"),"Missing canonical written link "+p.topic);
 }
 seen.push({topic:p.topic,byteLength:html.length,assets:localRefs.length,mathCount:(html.match(/class=["']arithmatex["']/g)||[]).length});
 count++;
}
console.log("PASS native MkDocs knowledge previews:",JSON.stringify(seen));
