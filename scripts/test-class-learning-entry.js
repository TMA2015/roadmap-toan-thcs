#!/usr/bin/env node
"use strict";
const fs=require("fs"),path=require("path"),root=path.resolve(__dirname,"..");
const txt=p=>fs.readFileSync(path.join(root,p),"utf8");
const home=txt("docs/index.md"),hub=txt("docs/hoc-theo-lop/index.md"),mkdocs=txt("mkdocs.yml"),workspace=txt("docs/assets/javascripts/topic-workspace-v1.js"),topicCss=txt("docs/assets/stylesheets/topic-workspace.css");
const assert=(value,label)=>{if(!value)throw Error(label)};
assert(home.includes('href="hoc-theo-lop/"')&&!home.includes('href="roadmap/chuan-kntt-va-cac-tang-hoc/">Khám phá chương trình'),"student entry cannot link architecture document");
assert(mkdocs.includes("Học theo KNTT: hoc-theo-lop/index.md")&&mkdocs.includes("class-learning-v1.js"),"first-class KNTT navigation");
for(let grade=6;grade<=9;grade++)assert(hub.includes('data-grade-panel="'+grade+'"')&&hub.includes('data-grade-select="'+grade+'"'),"grade panel "+grade);
assert((hub.match(/class="class-chapter"/g)||[]).length===39,"39 KNTT chapters 9+10+10+10");
assert(!hub.includes("/#core-journey")&&(hub.match(/href="\.\.\/kien-thuc\/[0-9]{2}-[a-z0-9-]+\/core\//g)||[]).length>=40,"grade entry points use dedicated Core pages");
assert(hub.includes("không mặc định mọi thẻ")&&!hub.includes("5 thẻ")&&!hub.includes("3 câu/thẻ")&&!hub.includes("15 câu luyện")&&(hub.split("03-ti-le-ti-le-thuc/core/").length-1)===2,"grade boundary, stable Core labels and reviewed CĐ03 links");
assert(!hub.includes("roadmap/chuan-kntt-va-cac-tang-hoc"),"architecture docs excluded from learning CTA");
assert(workspace.includes('location.hash==="#core-journey"'),"async cards correct anchor");
assert(workspace.includes("cardGradeBand")&&workspace.includes("dataset.gradeStart")&&workspace.includes("dataset.gradeEnd")&&workspace.includes("dataset.gradeCount"),"Core cards derive semantic grade bands from curriculum metadata");
for(const grade of [6,7,8,9])assert(topicCss.includes(`data-grade-start="${grade}"`)&&topicCss.includes(`data-grade-end="${grade}"`),`grade ${grade} color identity`);
assert(topicCss.includes('data-grade-count="4"')&&topicCss.includes("#4f72c8 0 25%")&&topicCss.includes("#7658b1 75% 100%"),"four-grade Core cards use segmented grade strip");
console.log("PASS: KNTT 6–9 student entry, 39 chapters, dedicated Core routes, stable labels and honest cross-grade boundaries.");
