#!/usr/bin/env node
"use strict";
const fs=require("fs"),path=require("path"),root=path.resolve(__dirname,"..");
const txt=p=>fs.readFileSync(path.join(root,p),"utf8");
const home=txt("docs/index.md"),hub=txt("docs/hoc-theo-lop/index.md"),mkdocs=txt("mkdocs.yml"),workspace=txt("docs/assets/javascripts/topic-workspace-v1.js");
const assert=(value,label)=>{if(!value)throw Error(label)};
assert(home.includes('href="hoc-theo-lop/"')&&!home.includes('href="roadmap/chuan-kntt-va-cac-tang-hoc/">Khám phá chương trình'),"student entry cannot link architecture document");
assert(mkdocs.includes("Học theo lớp: hoc-theo-lop/index.md")&&mkdocs.includes("class-learning-v1.js"),"first-class navigation");
for(let grade=6;grade<=9;grade++)assert(hub.includes('data-grade-panel="'+grade+'"')&&hub.includes('data-grade-select="'+grade+'"'),"grade panel "+grade);
assert((hub.match(/class="class-chapter"/g)||[]).length===39,"39 KNTT chapters 9+10+10+10");
assert(hub.includes("../kien-thuc/04-bieu-thuc-dai-so/#core-journey")&&hub.includes("../kien-thuc/14-tam-giac/#core-journey"),"grade entry points to teaching cards");
assert(hub.includes("không mặc định cả 5 thẻ")&&hub.includes("Chưa có bộ 5 thẻ"),"grade boundary and honest readiness labels");
assert(!hub.includes("roadmap/chuan-kntt-va-cac-tang-hoc"),"architecture docs excluded from learning CTA");
assert(workspace.includes('location.hash==="#core-journey"'),"async cards correct anchor");
console.log("PASS: KNTT 6–9 student entry, 39 chapters, honest cross-grade links and Core cards.");
