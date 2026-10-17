#!/usr/bin/env node
"use strict";
/*
 Read-only 25-topic Markdown + auto-loader + Readiness + Written inventory.
 Run: node scripts/audit-exercise-placement-v1.js [--json]
*/
const fs=require("fs"),path=require("path"),assert=require("assert");
const root=path.resolve(__dirname,"..");
const read=file=>fs.readFileSync(path.join(root,file),"utf8");
const readJson=file=>JSON.parse(read(file));
const nav=read("mkdocs.yml");
const topics=[...nav.matchAll(/-\s+Luyện tập:\s+(kien-thuc\/([0-2]\d)-([^ \n]+)\/bai-tap\.md)/g)].map(m=>({path:m[1],number:m[2],slug:m[2]+"-"+m[3]}));
const loader=read("docs/assets/javascripts/practice-auto-loader.js");
const written=readJson("docs/assets/data/written-exercises/written-exercise-library-v1.json").exercises;
assert(topics.length===25,"Expected 25 topic practice pages; found "+topics.length);
assert(new Set(topics.map(x=>x.number)).size===25,"Topic number collision");
const entries=[];
for(const t of topics){
  const pathToPractice="docs/"+t.path;
  const markdown=read(pathToPractice);
  const headers=[...markdown.matchAll(/^(#{1,5})\s+(.+)$/gm)].map(m=>m[2].trim());
  const explicit=markdown.includes("data-practice-bank-v2");
  const auto=loader.includes('"'+t.slug+'":');
  const ids=headers.filter(h=>/^(\d{2}-(?:G\d-WR|WR|M[1-4]|SUP|ENT|CH)|Câu\s+\d+\b)/i.test(h));
  const levels=headers.filter(h=>/^Mức\s*[1-4]\b/i.test(h));
  const academicLayerHeadings=headers.filter(h=>/Core KNTT|Core-Support|Entrance10|Challenge|THPT-Bridge/i.test(h));
  const paperWording=/tự luận|trình bày|trên giấy|trên vở|bài luyện bổ sung/i.test(markdown);
  const check="docs/kien-thuc/"+t.slug+"/tu-kiem-tra.md";
  const checkText=fs.existsSync(path.join(root,check))?read(check):"";
  let assessmentFile=null,assessmentCount=null,assessmentGradeCounts={};
  const marker=checkText.match(/data-readiness-check-v1="([^"]+)"/);
  if(marker){
    assessmentFile="docs/"+marker[1].replace(/^\/+/,"");
    if(fs.existsSync(path.join(root,assessmentFile))){
      const test=readJson(assessmentFile);
      assessmentCount=Array.isArray(test.items)?test.items.length:0;
      for(const q of test.items||[]){
        const g=Array.isArray(q.curriculum?.grades)?q.curriculum.grades:(q.grade!=null?[q.grade]:[]);
        const label=g.length?g.join(","):"UNSPECIFIED";
        assessmentGradeCounts[label]=(assessmentGradeCounts[label]||0)+1;
      }
    }
  }
  const writtenItems=written.filter(w=>w.topic_id==="CT"+t.number);
  entries.push({
    topic:t.number,slug:t.slug,sourcePath:pathToPractice,
    practice:{interactive:explicit||auto,explicit,autoInjected:auto},
    legacy:{paperWording,exerciseHeadingCount:ids.length,cognitiveLevelCount:levels.length,
      hasQuickAnswers:markdown.includes("Đáp án nhanh"),hasAuthorHints:markdown.includes("??? tip"),
      hasAuthoredSolutions:markdown.includes("??? example"),academicLayerHeadings},
    writtenLibrary:{canonicalCount:writtenItems.length,approvedCount:writtenItems.filter(w=>w.academic_review?.status==="APPROVED").length},
    readiness:{path:check,exists:!!checkText,interactive:!!marker,assessmentFile,questionCount:assessmentCount,gradeDistribution:assessmentGradeCounts},
    disposition:"REVIEW_REQUIRED"
  });
}
const summary={
 topicCount:entries.length,
 interactivePracticeTopics:entries.filter(x=>x.practice.interactive).length,
 autoInjectedTopics:entries.filter(x=>x.practice.autoInjected).length,
 directPracticeTopics:entries.filter(x=>x.practice.explicit).length,
 paperWordingTopics:entries.filter(x=>x.legacy.paperWording).length,
 fourLevelLegacyTopics:entries.filter(x=>x.legacy.cognitiveLevelCount===4).length,
 interactiveReadinessTopics:entries.filter(x=>x.readiness.interactive).length,
 paperOnlyReadinessTopics:entries.filter(x=>!x.readiness.interactive).map(x=>x.topic),
 canonicalWrittenCount:written.length
};
assert(written.length===65,"Written catalog must reflect exact reviewed 63+2 publication");
assert.deepStrictEqual(written.slice(63).map(x=>x.exercise_id),["WX05-ENT-001","WX06-CH-001"],"Expected two reviewed W3A-WR additions only");
assert(summary.interactiveReadinessTopics>=20,"Unexpected Readiness drop");
if(process.argv.includes("--json"))console.log(JSON.stringify({schema:"math-exercise-placement-inventory-r1",summary,topics:entries},null,2));
else{
  console.log("MATH EXERCISE PLACEMENT INVENTORY — READ ONLY");
  console.log(JSON.stringify(summary));
  console.log("CĐ | Practice auto/direct | legacy item headings | M1-M4 | readiness | WX canonical | review");
  for(const x of entries)console.log([x.topic,x.practice.autoInjected?"AUTO":x.practice.explicit?"DIRECT":"PAPER",x.legacy.exerciseHeadingCount,
    x.legacy.cognitiveLevelCount,x.readiness.interactive?"INTERACTIVE":"PAPER",x.writtenLibrary.canonicalCount,x.disposition].join(" | "));
  console.log("BOUNDARY: No automatic math conversion, grade placement or readiness credit is authorized.");
}
