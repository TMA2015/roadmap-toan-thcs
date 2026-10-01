#!/usr/bin/env node
"use strict";
const fs=require("fs");
const path=require("path");
const read=p=>fs.readFileSync(p,"utf8");
const json=p=>JSON.parse(read(p));
const ok=(v,m)=>{if(!v)throw Error(m)};

const data=json("docs/assets/data/written-exercises/written-exercise-library-v1.json");
ok(data.schema_version==="1.0.0","schema version");
ok(data.status==="PILOT_CANDIDATE_PENDING_NOTEBOOKLM_R1","pilot review gate");
ok(data.auto_readiness_credit===false,"no readiness credit");
ok(data.self_marking_only===true,"self marking only");
ok(Array.isArray(data.exercises)&&data.exercises.length===6,"exact six pilot items");

const expected=[
  "WX07-RAT-001","WX07-RAT-002",
  "WX14-TRI-001","WX14-TRI-002",
  "WX24-MOD-001","WX24-MOD-002"
];
ok(JSON.stringify(data.exercises.map(x=>x.exercise_id))===JSON.stringify(expected),"exact stable IDs");

for(const topic of ["CT07","CT14","CT24"]){
  const items=data.exercises.filter(x=>x.topic_id===topic);
  ok(items.length===2,topic+" exactly two items");
  ok(items.some(x=>x.level==="CORE_BASE"),topic+" CORE_BASE");
  ok(items.some(x=>x.level==="CORE_APPLY"),topic+" CORE_APPLY");
}
for(const x of data.exercises){
  ok(x.exercise_kind==="standard","kind "+x.exercise_id);
  ok(x.learning_layer==="KNTT-Core"||x.learning_layer==="Core-Support","layer "+x.exercise_id);
  ok(Array.isArray(x.solution_steps)&&x.solution_steps.length>=4,"solution depth "+x.exercise_id);
  ok(Array.isArray(x.rubric)&&x.rubric.length>=4,"rubric "+x.exercise_id);
  const sum=x.rubric.reduce((n,r)=>n+Number(r.points||0),0);
  ok(sum===x.rubric_total,"rubric total "+x.exercise_id);
  ok(Array.isArray(x.common_mistakes)&&x.common_mistakes.length>=3,"common mistakes "+x.exercise_id);
  ok(Array.isArray(x.remediation_links)&&x.remediation_links.length>=2,"remediation "+x.exercise_id);
  ok(x.academic_review?.status==="PENDING_NOTEBOOKLM_R1","review status "+x.exercise_id);
  for(const l of x.remediation_links)ok(/^\.\.\/kien-thuc\//.test(l.href),"relative remediation href "+x.exercise_id);
}

const byId=Object.fromEntries(data.exercises.map(x=>[x.exercise_id,x]));
ok(byId["WX07-RAT-001"].solution_steps.at(-1).content_markdown.includes("\\frac{x+3}{x}")&&byId["WX07-RAT-001"].solution_steps.at(-1).content_markdown.includes("x\\ne0,3"),"WX07-001 result");
ok(byId["WX07-RAT-002"].solution_steps.at(-1).content_markdown.includes("=1,\\qquad")&&byId["WX07-RAT-002"].solution_steps.at(-1).content_markdown.includes("x\\ne\\pm1"),"WX07-002 result");
ok(byId["WX14-TRI-001"].solution_steps.at(-1).content_markdown.includes("AM\\perp BC"),"WX14-001 conclusion");
ok(byId["WX14-TRI-002"].solution_steps.at(-1).content_markdown.includes("BE=CD"),"WX14-002 conclusion");
ok(byId["WX24-MOD-001"].solution_steps.at(-1).content_markdown.includes("40\\,\\text{km/h}"),"WX24-001 result");
ok(byId["WX24-MOD-002"].solution_steps.at(-1).content_markdown.includes("70")&&byId["WX24-MOD-002"].solution_steps.at(-1).content_markdown.includes("50"),"WX24-002 result");

for(const x of data.exercises.filter(x=>x.topic_id==="CT14")){
  ok(x.figure_uri&&fs.existsSync(path.join("docs",x.figure_uri.replace(/^\.\.\//,""))),"geometry figure "+x.exercise_id);
}
const page=read("docs/luyen-tap/index.md");
ok(page.includes("data-written-exercise-library"),"library page mount");
const yaml=read("mkdocs.yml");
ok(yaml.includes("Thư viện bài tập: luyen-tap/index.md"),"nav entry");
ok(yaml.includes("written-exercise-library-v1.css"),"css wired");
ok(yaml.includes("written-exercise-library-v1.js"),"js wired");
const ui=read("docs/assets/javascripts/written-exercise-library-v1.js");
const uiCss=read("docs/assets/stylesheets/written-exercise-library-v1.css");
ok(ui.includes("written-help-actions")&&ui.includes("data-help-target")&&ui.includes("written-help-panel"),"compact three-action support UI wired");
ok(ui.includes("initTopicLibraryLink")&&ui.includes('luyen-tap/?topic='),"topic lesson deep link with topic auto-filter wired");
ok(uiCss.includes("grid-template-columns:repeat(3,minmax(0,1fr))"),"help actions use one three-column row");
ok(uiCss.includes(".written-topic-library-link"),"topic-to-library CTA styled");

console.log("PASS: written exercise pilot schema = 6 items / 3 topics / Base+Apply.");
console.log("PASS: rubric, remediation, geometry assets and no-readiness boundary validated.");
console.log("PASS: exact pilot conclusions and UI wiring validated.");\nconsole.log("PASS: compact 3-action help row and topic-filter deep links validated.");
