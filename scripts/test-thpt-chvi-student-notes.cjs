#!/usr/bin/env node
"use strict";
// ChVI student-first lesson information: editorial review logs must not leak into student HTML.
const assert=require("node:assert/strict"),fs=require("node:fs"),path=require("node:path");
const root=path.resolve(__dirname,".."),read=p=>fs.readFileSync(path.join(root,p),"utf8");
const banned=/NOTEBOOKLM|ACADEMIC_CLEARANCE|SNAPSHOT_PASS|TÍCH HỢP ĐANG QA|BÀI MẪU R4|Chỉ là bài học trình diễn|chờ review delta|Giới hạn nguồn và phát hành|chưa có cấp phép phát hành website/i;
const pedagogical={15:"Khái niệm hàm số",16:"Chuyển động theo phương thẳng đứng",17:"Bất phương trình có tham số",18:"nghiệm ngoại lai"};
const built=process.argv.includes("--built");
for(const [lesson,anchor] of Object.entries(pedagogical)){
 const source=read("docs/thpt-preview/sgk/chuong-vi/bai-"+lesson+".md");
 assert(source.includes(anchor),"B"+lesson+" lost pedagogical content");
 assert(!banned.test(source),"B"+lesson+" has project management text in lesson");
 assert(source.includes('thpt-r4-eyebrow')&&source.includes('thpt-r4-lead'),"B"+lesson+" lacks learner intro");
 assert(!source.includes("!!! warning"),"B"+lesson+" contains an old alarming review callout");
 if(built){
  const html=read("site/thpt-preview/sgk/chuong-vi/bai-"+lesson+"/index.html");
  const start=html.indexOf('<article class="md-content__inner md-typeset">'),end=html.indexOf("</article>",start);
  assert(start>=0&&end>start,"B"+lesson+" compiled article missing");
  const article=html.slice(start,end);
  assert(!banned.test(article),"B"+lesson+" published student article leaks review metadata");
  assert(!article.includes('class="admonition warning"'),"B"+lesson+" student page still has large admin warning");
  if(lesson==="17"){
   const matches=[...article.matchAll(/<details class="thpt-r4-pedagogical-note"([^>]*)>/g)];
   assert.equal(matches.length,1,"B17 compact extension note missing");
   assert(!/\bopen\b/.test(matches[0][1]),"B17 note must begin collapsed");
   const noteStart=article.indexOf('<details class="thpt-r4-pedagogical-note"');
   const noteEnd=article.indexOf("</details>",noteStart);
   assert(noteStart>=0&&noteEnd>noteStart,"B17 approved R02 note missing");
   const note=article.slice(noteStart,noteEnd);
   assert(note.includes("hệ số bậc hai a cố định khác 0")
       &&note.includes("thuộc phạm vi vận dụng kiến thức Core"),
       "B17 R02: fixed nonzero leading coefficient must be Core application");
   assert(note.includes("Nếu a phụ thuộc tham số và có thể bằng 0")
       &&note.includes("phần nâng cao"),
       "B17 R02: variable leading coefficient a=0 must be specialized");
   assert(note.includes("SGK trang 24, bài 6.17")
       &&note.includes("SBT trang 17 Ví dụ 3 và trang 18 bài 6.24"),
       "B17 R02: exact original S1 source citations missing");
   assert(!note.includes("Phần bất phương trình có tham số là nội dung luyện tập mở rộng"),
       "B17 R02: prior blanket non-Core tier wording reintroduced");
  }
 }
 console.log("PASS B"+lesson+" student-first notes"+(built?" compiled HTML":""));
}
