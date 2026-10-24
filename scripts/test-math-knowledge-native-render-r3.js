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
  {topic:"09-he-phuong-trinh",version:"r9",math:true,stale:null,phrase:"Cùng một hệ, so sánh phương pháp thế và cộng đại số",tables:1,keep:"09-04-y-nghia-hinh-hoc-he.svg"},
  {topic:"04-bieu-thuc-dai-so",version:"r10",math:true,stale:"Dùng infographic này",phrase:"Các phép biến đổi quan trọng",tables:1},
  {topic:"07-phan-thuc-dai-so",version:"r10",math:true,minMath:2,stale:"Dùng infographic này",phrase:"Tính chất cơ bản của phân thức",tables:1},
  {topic:"08-phuong-trinh-bat-phuong-trinh",version:"r10",math:true,stale:null,phrase:"Bất đẳng thức và tính chất thứ tự",tables:1,keepAll:["08-05-truc-so-bat-phuong-trinh.svg","08-06-giao-tap-nghiem.svg"]},
  {topic:"11-can-thuc",version:"r10",math:true,stale:"Dùng infographic này",phrase:"Điều kiện xác định",tables:1},
  {topic:"12-phuong-trinh-bac-hai-viete",version:"r11",math:true,stale:"Dùng infographic này",phrase:"Biệt thức Δ",tables:1,keep:"12-05-delta-va-giao-ox.svg"},
  {topic:"13-goc-va-duong-thang",version:"r11",math:true,stale:null,phrase:"Dấu hiệu nhận biết hai đường thẳng song song",tables:1,keepAll:["13-goc-doi-dinh-v1.svg","13-hai-duong-song-song-duong-cat-v1.svg","13-goc-so-le-trong-v1.svg"]},
  {topic:"15-duong-dong-quy",version:"r11",math:true,stale:null,phrase:"Cách chọn đúng tính chất",tables:1,keepAll:["15-trong-tam-v1.svg","15-truc-tam-v1.svg","15-tam-noi-tiep-v1.svg","15-tam-ngoai-tiep-v1.svg"]},
  {topic:"16-tu-giac",version:"r11",math:false,stale:null,phrase:"Hình vuông",tables:1,keepAll:["16-hinh-thang-v1.svg","16-hinh-binh-hanh-v1.svg","16-hinh-chu-nhat-v1.svg","16-hinh-thoi-v1.svg","16-hinh-vuong-v1.svg"]},
  {topic:"17-thales-dong-dang",version:"r12",math:false,stale:null,phrase:"Ba trường hợp đồng dạng",tables:1,keepAll:["17-thales-v1.svg","17-duong-trung-binh-v1.svg","17-tam-giac-dong-dang-v1.svg"]},
  {topic:"18-he-thuc-luong",version:"r12",math:true,stale:null,phrase:"Tỉ số lượng giác của góc nhọn",tables:1,keepAll:["18-02-he-thuc-duong-cao.svg","18-03-ti-so-luong-giac.svg","18-ti-so-sin-cos-v1.svg","18-ti-so-tan-cot-v1.svg"]},
  {topic:"19-duong-tron",version:"r12",math:true,stale:null,phrase:"Tứ giác nội tiếp",tables:1,keepAll:["19-goc-noi-tiep-goc-o-tam-v1.svg","19-tiep-tuyen-v1.svg","19-hai-day-cat-nhau-v1.svg","19-tiep-tuyen-cat-tuyen-v1.svg"]},
  {topic:"20-hinh-hoc-tong-hop",version:"r12",math:true,stale:null,phrase:"Các “cầu nối” thường gặp",tables:1,keepAll:["20-02-chon-chien-luoc.svg","20-03-chuoi-suy-luan.svg","20-tu-giac-noi-tiep-v1.svg","20-hinh-non.svg","20-hinh-cau.svg"]},
  {topic:"01-ban-do-chuong-trinh",version:"r13",math:false,stale:null,phrase:"Ba trạng thái học",tables:1,actions:0,keep:"01-overview.svg"},
  {topic:"22-dai-luong-dac-trung",version:"r13",math:true,stale:null,phrase:"Giá trị ngoại lai",tables:1,actions:1,keepAll:["22-trung-binh.svg","22-trung-vi-mot.svg","22-ngoai-lai.svg"]},
  {topic:"24-bai-toan-thuc-te",version:"r13",math:false,stale:null,phrase:"Mô hình hóa toán học",tables:1,actions:2,keepAll:["24-03-chon-mo-hinh.svg","24-quang-duong-van-toc-thoi-gian.svg","24-phan-tram-giam-gia.svg","24-chieu-cao-luong-giac.svg"]},
  {topic:"25-tong-hop-on-thi-10",version:"r13",math:false,stale:null,phrase:"Ba giai đoạn ôn tập",tables:1,actions:1,keepAll:["25-03-luyen-de-so-loi.svg","25-ban-do-tong-hop.svg","25-ma-tran-uu-tien.svg","25-lo-trinh-3-giai-doan.svg"]},
  {topic:"10-ham-so-do-thi",version:"tabs-r6",fileName:"preview-tabs-r6",css:"math-topic-knowledge-tabs-pilot-r5.css",math:true,stale:null,phrase:"Hàm số và đồ thị",tables:1,keep:"10-10-tu-cong-thuc-den-do-thi-r3.svg",tabbed:true}
]
let count=0;
const seen=[];
const urlRx=/(?:src|href)=["']([^"']+)["']/ig;
for(const p of plans){
 const entry=path.join(root,"kien-thuc",p.topic,p.fileName||("preview-composition-"+p.version),"index.html");
 assert(fs.existsSync(entry),"Missing built preview "+entry);
 const html=fs.readFileSync(entry,"utf8");
 assert(html.includes(p.phrase),"Missing pedagogical section "+p.topic);
 if(p.stale)assert(!html.includes(p.stale),"Stale removed-image caption "+p.topic);
 assert((html.match(/<table\b/g)||[]).length>=p.tables,"Missing comparison/process table "+p.topic);
 if(p.math){
  assert(/class=["']arithmatex["']/.test(html),"No preserved typeset math wrappers "+p.topic);
  assert((html.match(/class=["']arithmatex["']/g)||[]).length>=(p.minMath||3),"Too few math wrappers "+p.topic);
 }
 // CSS and SVG assets: test only our document-specific resources, not remote MathJax.
 const wantCSS="math-knowledge-composition-v1.css";
 let hasCSS=false, localRefs=[];
 for(const x of html.matchAll(urlRx)){
  const u=x[1];
  if(/^(?:https?:|data:|#|mailto:)/.test(u))continue;
  if(!/(?:assets\/infographics\/|assets\/(?:geometry|statistics|probability|modeling|review)\/|math-knowledge-composition-v1\.css|math-topic-knowledge-tabs-pilot-r5\.css)/.test(u))continue;
  const clean=u.split(/[?#]/,1)[0];
  const absolute=clean.startsWith("/")
     ?path.join(root,clean.replace(/^\/+/,""))
     :path.resolve(path.dirname(entry),clean);
  assert(absolute.startsWith(root+path.sep),"Asset outside website output: "+u);
  assert(fs.existsSync(absolute),"Broken deployed asset in "+p.topic+": "+u+" -> "+absolute);
  localRefs.push(u);
  if(u.includes(p.css||wantCSS))hasCSS=true;
 }
 assert(hasCSS,"Preview CSS not resolvable "+p.topic);
 if(p.topic==="05-7-hang-dang-thuc")assert(localRefs.some(u=>u.includes("05-05-")),"Missing source-linked area SVG");
 if(p.keep)assert(localRefs.some(u=>u.includes(p.keep)),"Missing expected visual "+p.keep);
 if(p.keepAll)for(const img of p.keepAll)assert(localRefs.some(u=>u.includes(img)),"Missing visual "+img);
 if(p.version==="r9"||p.version==="r10"||p.version==="r11"||p.version==="r12") {
   assert(html.includes("Luyện ngay"),"Missing skill practice link "+p.topic);
   assert(html.includes("Làm tự luận"),"Missing canonical written link "+p.topic);
 }
 if(p.version==="r13"){
   const actualNavCount=(html.match(/class=["']math-related-practice["']/g)||[]).length;
   const expectedPanels=p.actions>0?1:0;
   assert(actualNavCount===expectedPanels,"R13 practice panel count wrong: "+p.topic);
   const actualActions=(html.match(/<a[^>]+href=["'][^"']+["'][^>]*>(?:Luyện ngay|Làm tự luận)[^<]*<\/a>/g)||[]).length;
   assert(actualActions >= p.actions,"R13 practice action links missing: "+p.topic);
   if(p.actions>0)assert(html.includes("Luyện ngay"),"R13 missing Practice CTA "+p.topic);
   if(p.actions===2)assert(html.includes("Làm tự luận"),"R13 missing approved Written CTA "+p.topic);
 }
 if(p.tabbed){
   assert((html.match(/class=["'][^"']*tabbed-set/g)||[]).length>=2,"CT10 5+5 tab layouts missing");
   assert(html.includes("2x-4=0")&&html.includes("x=2"),"CT10 intermediate x=2 lost");
   assert((html.match(/Luyện ngay/g)||[]).length>=6,"CT10 six Entrance10 CTA labels missing");
 }
 seen.push({topic:p.topic,byteLength:html.length,assets:localRefs.length,mathCount:(html.match(/class=["']arithmatex["']/g)||[]).length});
 count++;
}
console.log("PASS native MkDocs knowledge previews:",JSON.stringify(seen));
