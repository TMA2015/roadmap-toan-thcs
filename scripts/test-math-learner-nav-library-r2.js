#!/usr/bin/env node
"use strict";
// R2 is a learner-facing information architecture change only.
// Preserve all existing lesson/bank routes and the two canonical exercise sources.
const assert=require("node:assert/strict"),fs=require("node:fs");
const read=p=>fs.readFileSync(p,"utf8");
const mk=read("mkdocs.yml");
const nav=mk.slice(mk.indexOf("nav:"),mk.indexOf("markdown_extensions:"));
const titles=["Trang chủ","Học theo lớp","Học theo chuyên đề","Thư viện bài tập","Tiến độ học tập","Hướng dẫn"];
const actual=[...nav.matchAll(/^  - ([^:\n]+):/gm)].map(m=>m[1]);
assert.deepEqual(actual,titles,"learner menu has exactly six top-level choices");
for(const blocked of ["Công cụ nội bộ","Beta v","Collaboration Hub","Knowledge Graph v1","Mapping KNTT","Tutor Core Contract","Blueprint 25 chuyên đề"]){
  assert(!nav.includes(blocked),"developer-only tool leaked into learner menu: "+blocked);
}
assert(nav.includes("Bản đồ học tập: roadmap/index.md"),"old Roadmap remains available in guide");
assert(nav.includes("Hướng dẫn AI Tutor: ai/index.md"),"AI Help route preserved");
assert((nav.match(/Luyện tập: kien-thuc\/\d\d-[^\n]+\/bai-tap\.md/g)||[]).length===25,"25 topic practice links preserved");
for(const route of ["luyen-tap/index.md","luyen-tap/tu-luan.md","luyen-tap/bai-mau-tieu-bieu.md","ban-do-ky-nang/index.md"]){
  assert(nav.includes(route),"missing library route "+route);
}
const index=read("docs/luyen-tap/index.md");
const paper=read("docs/luyen-tap/tu-luan.md");
const models=read("docs/luyen-tap/bai-mau-tieu-bieu.md");
assert((index.match(/class="math-library-entry"/g)||[]).length===4,"two choices at both ends of landing");
assert(!index.includes("data-written-exercise-library"),"intro must not contain a live question bank");
assert(index.includes("written-library-legacy-links-v1.js"),"legacy link redirect loaded");
assert(paper.includes('data-written-exercise-library')&&paper.includes("?kind=anchor"),"filter and deep anchor located on paper page");
assert(models.includes('data-model-examples-library')&&models.includes("../tu-luan/"),"models and canonical written link");
const script=read("docs/assets/javascripts/written-library-legacy-links-v1.js");
assert(script.includes("window.location.replace")&&script.includes("target.search = window.location.search")&&script.includes("target.hash = window.location.hash"),"legacy filtered/hash route preserved");
const wxjs=read("docs/assets/javascripts/written-exercise-library-v1.js");
const examplesjs=read("docs/assets/javascripts/model-examples-library-v1.js");
assert(wxjs.includes("luyen-tap/tu-luan/?topic="),"topic deep links go to new page");
assert(examplesjs.includes("luyen-tap/tu-luan/?kind=anchor#"),"WX example links go to new page");
assert(read("docs/roadmap/index.md").includes("Học theo lớp")&&read("docs/roadmap/index.md").includes("Học theo chuyên đề"),"Roadmap now explains both paths");
assert(read("docs/huong-dan/index.md").includes("Tự kiểm tra"),"learning guide keeps independent assessment distinction");
const written=JSON.parse(read("docs/assets/data/written-exercises/written-exercise-library-v1.json"));
const anchors=JSON.parse(read("docs/assets/data/anchors/anchor-catalog-v1.json"));
assert(written.exercises.length===63&&anchors.anchors.length===11,"preserve existing canonical item counts");
console.log("PASS learner menu 6 lanes, library 4 pages, legacy routes and 63 Written / 11 A25 unchanged");
