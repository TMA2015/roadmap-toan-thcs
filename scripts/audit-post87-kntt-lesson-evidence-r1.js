#!/usr/bin/env node
"use strict";
/*
 * Non-mutating CURRENT-SOURCE evidence census for 78 KNTT grade/lesson-group rows.
 * Statuses identify EXISTING AUTHORING SOURCE, not academic PASS or observed learning.
 * In particular, topic-level Practice/Readiness cannot certify lesson-level coverage.
 */
const fs=require("node:fs"),path=require("node:path"),assert=require("node:assert/strict");
const root="docs/assets/data", curriculum=root+"/curriculum",practice=root+"/practice",assessment=root+"/assessment";
const exists=p=>fs.existsSync(p),read=p=>JSON.parse(fs.readFileSync(p,"utf8"));
const matrix=read(curriculum+"/kntt-coverage-matrix-6-9-v1.json");
const written=read(root+"/written-exercises/written-exercise-library-v1.json");
assert.equal(written.exercises.length,87,"POST87 source lock");
assert.equal(matrix.global_summary.total_rows,78,"historical KNTT coverage row identity");
const allManifests=fs.readdirSync(practice).filter(f=>f.endsWith(".manifest.json"));
const audit=[];
const numRef=s=>{
 const out=new Set();
 for(const m of String(s||"").replace(/[–—]/g,"-").matchAll(/Bài\s*(\d+)(?:\s*-\s*(\d+))?/gi)){
  const start=Number(m[1]),end=Number(m[2]||m[1]);
  if(end-start>100||end<start)continue;
  for(let i=start;i<=end;i++)out.add(i);
 }
 return out;
};
const overlaps=(a,b)=>a.size&&b.size&&[...a].some(x=>b.has(x));
function cardCoverage(c,grade,rowNums){
 const lesson=Array.isArray(c.kntt_lessons)?c.kntt_lessons:[];
 const gradeViaExplicit=Array.isArray(c.grades)&&c.grades.includes(grade);
 const gradeViaText=lesson.some(s=>new RegExp("(?:Lớp|lớp)\\s*"+grade+"(?:\\b|\\s*[–-])").test(s));
 const direct=lesson.some(t=>{
  const tgrade=new RegExp("(?:Lớp|lớp)\\s*"+grade+"(?:\\b|\\s*[–-])").test(t);
  return tgrade&&overlaps(numRef(t),rowNums);
 });
 const lessonUnscoped=lesson.some(t=>!/(?:Lớp|lớp)\s*\d/.test(t)&&overlaps(numRef(t),rowNums));
 return {direct:!!direct,grade:!!gradeViaExplicit||!!gradeViaText,unscoped:!!lessonUnscoped};
}
function inspectTopic(topic){
 const n=String(topic).slice(0,2);const slug=String(topic);
 const workspacePath=curriculum+"/topic"+n+"-learning-workspace.json";
 const workspace=exists(workspacePath)?read(workspacePath):null;
 const cards=Array.isArray(workspace?.cards)?workspace.cards:[];
 const overlayPath=curriculum+"/topic20-core-display-v2.json";
 const overlay=n==="20"&&exists(overlayPath)?read(overlayPath):null;
 const microPath=practice+"/"+slug+"-micro-v1.json";
 const micro=exists(microPath)?read(microPath):null;
 const itemIds=new Set(Array.isArray(micro?.questions)?micro.questions.map(x=>x.id):[]);
 const mf=allManifests.filter(f=>f.startsWith(slug+"-")&&f.endsWith(".manifest.json"));
 const versions=mf.map(f=>({f,ver:Number(f.match(/-v(\d+)\.manifest\.json$/)?.[1]||0)})).sort((a,b)=>b.ver-a.ver);
 const manifestName=versions[0]?.f;
 const manifest=manifestName?read(practice+"/"+manifestName):null;
 const assessmentPath=assessment+"/"+slug+"-core-v1.json";
 const ready=exists(assessmentPath)?read(assessmentPath):null;
 return {topic,workspacePath,workspace,cards,microPath,micro,itemIds,overlay,manifestName,manifest,assessmentPath,ready};
}
const cache=new Map();
function topicDetail(id){if(!cache.has(id))cache.set(id,inspectTopic(id));return cache.get(id);}
for(const grade of matrix.grades){
 for(const row of grade.rows){
  const g=grade.grade,rowNums=numRef(row.lesson_ref);
  const primary=row.roadmap.filter(r=>r.relation!=="SECONDARY"&&r.relation!=="PREREQUISITE"&&r.relation!=="SUPPORT");
  const ids=[...new Set((primary.length?primary:row.roadmap.slice(0,1)).map(x=>x.topic_id))];
  const examined=ids.map(topicDetail);
  const matches=examined.flatMap(x=>x.cards.map(c=>({c,topic:x.topic,source:x,match:cardCoverage(c,g,rowNums)})));
  const direct=matches.filter(x=>x.match.direct);
  const contextual=matches.filter(x=>x.match.grade||x.match.unscoped);
  const directTeaching=direct.filter(x=>!!x.c.teaching_copy);
  const localTeaching=contextual.filter(x=>!!x.c.teaching_copy);
  const coreStatus=directTeaching.length?"CARD_WITH_LESSON_RANGE_OVERLAP":localTeaching.length?"GRADE_OR_LESSON_CONTEXT_CARD":examined.some(x=>x.cards.some(c=>c.teaching_copy)||x.overlay?.cards?.length)?"SHARED_TOPIC_TEACHING_ONLY":"NOT_VERIFIED_FROM_WORKSPACE";
  const directMicro=direct.filter(x=>Array.isArray(x.c.micro_practice)&&x.c.micro_practice.some(id=>x.source.itemIds.has(id)));
  const contextualMicro=contextual.filter(x=>Array.isArray(x.c.micro_practice)&&x.c.micro_practice.some(id=>x.source.itemIds.has(id)));
  const microStatus=directMicro.length?"CARD_WITH_LESSON_RANGE_OVERLAP":contextualMicro.length?"GRADE_OR_LESSON_CONTEXT_MICRO":examined.some(x=>x.micro?.questions?.length)?"SHARED_TOPIC_MICRO_ONLY":"NOT_VERIFIED_FROM_BANK";
  const practiceManifests=examined.filter(x=>x.manifest?.question_count>0).map(x=>({topic:x.topic,manifest:x.manifestName,questions:x.manifest.question_count}));
  const readiness=examined.filter(x=>x.ready?.items?.length).map(x=>({topic:x.topic,items:x.ready.items.length,gradeScope:x.ready.grade_scope||null}));
  const readinessGrade=readiness.filter(x=>x.gradeScope?.includes(g));
  const placed=written.exercises.filter(x=>Array.isArray(x.kntt_placements)&&x.kntt_placements.some(p=>{
   if(p.grade!==g||p.chapter!==row.chapter)return false;
   const nums=numRef(p.lesson);
   return !rowNums.size||!nums.size||overlaps(rowNums,nums);
  })).map(x=>x.exercise_id);
  const scopes=examined.map(x=>({topic:x.topic,workspace:exists(x.workspacePath),cards:x.cards.length,microBank:exists(x.microPath),microCount:x.micro?.questions?.length||0,hasPracticeManifest:!!x.manifestName,hasReadiness:!!x.ready}));
  audit.push({grade:g,chapter:row.chapter,chapter_title:row.chapter_title,lesson_ref:row.lesson_ref||"CHAPTER_LEVEL",lesson_summary:row.curriculum_summary,primary_topics:ids,
   learn:{status:coreStatus,cards:(directTeaching.length?directTeaching:localTeaching.length?localTeaching:matches.filter(m=>m.c.teaching_copy)).map(x=>x.c.id).slice(0,8),source_scope:"WORKSPACE_PLUS_CT20_OVERLAY; not full content review"},
   micro:{status:microStatus,cards:(directMicro.length?directMicro:contextualMicro).map(x=>x.c.id).slice(0,8)},
   practice:{status:practiceManifests.length?"TOPIC_BANK_PRESENT_NOT_LESSON_VERIFIED":"NO_PRIMARY_TOPIC_BANK_VERIFIED",sources:practiceManifests},
   written:{status:placed.length?"REVIEWED_ITEM_KNTT_PLACEMENT_INTERSECTS":"NO_PLACED_ITEM_REQUIRED_BY_DEFAULT",item_ids:placed},
   readiness:{status:readinessGrade.length?"GRADE_SCOPE_ITEMS_NOT_LESSON_VERIFIED":readiness.length?"TOPIC_ITEMS_NOT_LESSON_VERIFIED":"NO_PRIMARY_TOPIC_ASSESSMENT_VERIFIED",sources:readiness},
   source_evidence:scopes
  });
 }
}
assert.equal(audit.length,78);
for(const r of audit){assert(r.primary_topics.length>=1,"missing topic "+r.grade+" "+r.lesson_ref);assert(r.learn.status&&r.micro.status&&r.practice.status&&r.readiness.status);}
function countBy(field){const v={};for(const r of audit){const status=r[field].status;v[status]=(v[status]||0)+1;}return v;}
const report={
 schema:"post87-kntt-lesson-evidence-r1",source:"current main data snapshot, no learner instrumentation",as_of:"2026-10-23",
 guard:{written_count:87,curriculum_rows:78,chapters:39,assessment_is_not_lessons:true,zero_written_is_not_an_error:true},
 summary:{learn:countBy("learn"),micro:countBy("micro"),practice:countBy("practice"),written:countBy("written"),readiness:countBy("readiness"),
  rows_per_grade:Object.fromEntries([6,7,8,9].map(g=>[g,audit.filter(r=>r.grade===g).length]))},
 rows:audit,
 limits:["CARD_WITH_LESSON_RANGE_OVERLAP may cover many lessons and is not each lesson's content quality PASS.",
 "Grade9 rows are chapter-level; a chapter-level Written match does not verify every sublesson.",
 "Topic Bank and Readiness presence never certify lesson-specific practice or score.",
 "No demonstration of learner A2 understanding, no Mastery credits, no new content authorization.",
 "No file writes, no learner interaction, no manifest mutation."]
};
const snapshot="review-packets/math-post87-curriculum-ux/01_LIVE_78_ROW_SOURCE_EVIDENCE_MATRIX_R1.json";
if(process.argv.includes("--verify-snapshot")){
 assert(exists(snapshot),"source-locked 78-row audit artifact missing");
 assert.deepEqual(read(snapshot),report,"current-source D1–D6 snapshot diverges: review and regenerate, never silently fix scores");
}
if(process.argv.includes("--emit-json"))console.log("MATH_POST87_SNAPSHOT_JSON|"+JSON.stringify(report));
else console.log("PASS POST87 source-backed 78 KNTT rows; "+JSON.stringify(report.summary));
