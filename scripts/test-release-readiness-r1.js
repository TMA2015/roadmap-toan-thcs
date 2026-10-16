#!/usr/bin/env node
"use strict";
const fs=require("node:fs"),path=require("node:path"),assert=require("node:assert/strict");
const ROOT=path.resolve(__dirname,"..");
const read=(p)=>fs.readFileSync(path.join(ROOT,p),"utf8");
const exists=(p)=>fs.existsSync(path.join(ROOT,p));
const hub=read("docs/hoc-theo-lop/index.md");
const home=read("docs/index.md");
const guide=read("docs/roadmap/index.md");
const allGrades=[6,7,8,9];
const expectedChapters={6:9,7:10,8:10,9:10};
const journeys=[
 {grade:6,topic:"02-so-va-phep-tinh",theme:"arithmetic"},
 {grade:7,topic:"14-tam-giac",theme:"geometry"},
 {grade:8,topic:"07-phan-thuc-dai-so",theme:"rational-expressions"},
 {grade:9,topic:"09-he-phuong-trinh",theme:"system-modeling"}
];
assert(home.includes('href="hoc-theo-lop/"'),"Homepage must link to grade learning");
assert(guide.includes("../hoc-theo-lop/")&&guide.includes("Core theo chặng → Luyện tập tương tác → Tự kiểm tra")&&guide.includes("Tiến độ học tập"),"Learner guide must state a real journey");
let chapters=0,links=0;
const gradeRouteCounts={};
for(const grade of allGrades){
  const marker='data-grade-panel="'+grade+'"';
  const at=hub.indexOf(marker);
  assert(at!==-1,"Missing Grade "+grade+" panel");
  const next=grade===9?hub.length:hub.indexOf('data-grade-panel="'+(grade+1)+'"',at+marker.length);
  assert(next!==-1,"Next grade panel missing");
  const part=hub.slice(at,next);
  const number=(part.match(/class="class-chapter"/g)||[]).length;
  assert.equal(number,expectedChapters[grade],"KNTT chapter count for Grade "+grade);
  chapters+=number;
  assert(hub.includes('data-grade-select="'+grade+'"'),"Grade "+grade+" selector absent");
  const slugs=[...part.matchAll(/href="\.\.\/kien-thuc\/([0-9]{2}-[a-z0-9-]+)\/core\//g)].map(m=>m[1]);
  assert(slugs.length>0,"Grade "+grade+" has no Core entry");
  gradeRouteCounts[grade]=slugs.length;
  links+=slugs.length;
  for(const slug of slugs){
    for(const [segment,file] of [
      ["lesson","docs/kien-thuc/"+slug+"/core/index.md"],
      ["practice","docs/kien-thuc/"+slug+"/bai-tap.md"],
      ["readiness","docs/kien-thuc/"+slug+"/tu-kiem-tra.md"]
    ]) assert(exists(file),"Missing "+segment+" source for Grade "+grade+": "+file);
  }
  const sample=journeys.find(j=>j.grade===grade);
  assert(slugs.includes(sample.topic),"Representative Grade "+grade+" journey missing "+sample.topic);
}
assert.equal(chapters,39);
assert.equal(allGrades.reduce((n,g)=>n+gradeRouteCounts[g],0),links);

const priority=JSON.parse(read("docs/assets/data/curriculum/skill-priority-matrix-r1.json"));
const taxonomy=JSON.parse(read("docs/assets/data/curriculum/skill-taxonomy-v2-registry-r1.json"));
assert.equal(priority.family_rows.length,131);
assert.equal(taxonomy.counts.families,131);
assert.equal(priority.review.final_clearance,"SKILL_PRIORITY_MATRIX_R1_REVIEW_COMPLETE");
assert.equal(taxonomy.runtime_enabled,false,"Do not quietly activate Taxonomy v2 grading");

const course=read("docs/assets/javascripts/class-learning-v1.js");
assert(course.includes('["6","7","8","9"].includes(grade)'),"The current KNTT entry is deliberately grade-specific");
const readiness=read("docs/assets/javascripts/assessment-engine-v1.js");
const practice=read("docs/assets/javascripts/practice-engine-v2.js");
assert(readiness.includes("localStorage")&&practice.includes("localStorage"),"Local device history path changed; re-audit required");
assert(readiness.includes("loadStore")&&readiness.includes("saveStore"),"Readiness storage needs its own durability review");
assert(practice.includes("load")&&practice.includes("saveRecovery"),"Practice storage needs its own durability review");

console.log("PASS: Release Readiness R1 static KNTT paths: "+chapters+" chapters / "+links+" Core links.");
console.log("PASS: Representative Grade 6–9 lesson, practice and Readiness source routes exist.");
console.log("PASS: 131 priority families reviewed; Taxonomy v2 runtime grading remains disabled.");
console.log("AUDIT OPEN: manual student comprehension, backup/restore, offline/no-AI, and future curriculum adapters remain unverified.");
