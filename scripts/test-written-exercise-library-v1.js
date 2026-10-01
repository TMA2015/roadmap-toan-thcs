#!/usr/bin/env node
"use strict";
const fs=require("fs");
const path=require("path");
const read=p=>fs.readFileSync(p,"utf8");
const json=p=>JSON.parse(read(p));
const ok=(v,m)=>{if(!v)throw Error(m)};

const data=json("docs/assets/data/written-exercises/written-exercise-library-v1.json");
ok(data.schema_version==="1.0.0","schema version");
ok(data.status==="ACTIVE_APPEND_ONLY","active append-only catalog");
ok(data.auto_readiness_credit===false,"no readiness credit");
ok(data.self_marking_only===true,"self marking only");
ok(Array.isArray(data.exercises)&&data.exercises.length===30,"exact thirty published items");

const expected=[
  "WX07-RAT-001","WX07-RAT-002",
  "WX14-TRI-001","WX14-TRI-002",
  "WX24-MOD-001","WX24-MOD-002",
  "WX08-EQI-001","WX08-EQI-002",
  "WX17-SIM-001","WX17-SIM-002",
  "WX19-CIR-001","WX19-CIR-002",
  "WX09-SYS-001","WX09-SYS-002",
  "WX16-QUAD-001","WX16-QUAD-002",
  "WX18-TRI-001","WX18-TRI-002",
  "WX10-FUN-001","WX10-FUN-002",
  "WX11-RAD-001","WX11-RAD-002",
  "WX12-QUA-001","WX12-QUA-002",
  "WX13-LIN-001","WX13-LIN-002",
  "WX15-CEN-001","WX15-CEN-002",
  "WX23-PRO-001","WX23-PRO-002"
];
ok(JSON.stringify(data.exercises.map(x=>x.exercise_id))===JSON.stringify(expected),"exact stable IDs");

for(const topic of ["CT07","CT08","CT09","CT10","CT11","CT12","CT13","CT14","CT15","CT16","CT17","CT18","CT19","CT23","CT24"]){
  const items=data.exercises.filter(x=>x.topic_id===topic);
  ok(items.length===2,topic+" exactly two items");
  ok(items.some(x=>x.level==="CORE_BASE"),topic+" CORE_BASE");
  ok(items.some(x=>x.level==="CORE_APPLY"),topic+" CORE_APPLY");
}
for(const x of data.exercises){
  ok(x.exercise_kind==="standard","kind "+x.exercise_id);
  ok(x.learning_layer==="KNTT-Core"||x.learning_layer==="Core-Support","layer "+x.exercise_id);
  ok(Array.isArray(x.solution_steps)&&x.solution_steps.length>=3,"solution depth "+x.exercise_id);
  ok(new Set(x.solution_steps.map(s=>s.step_id)).size===x.solution_steps.length,"unique solution step IDs "+x.exercise_id);
  ok(x.solution_steps.every(s=>String(s.title||"").trim()&&String(s.content_markdown||"").trim()),"complete solution steps "+x.exercise_id);
  ok(Array.isArray(x.rubric)&&x.rubric.length>=4,"rubric "+x.exercise_id);
  const sum=x.rubric.reduce((n,r)=>n+Number(r.points||0),0);
  ok(sum===x.rubric_total,"rubric total "+x.exercise_id);
  ok(Array.isArray(x.common_mistakes)&&x.common_mistakes.length>=3,"common mistakes "+x.exercise_id);
  ok(Array.isArray(x.remediation_links)&&x.remediation_links.length>=2,"remediation "+x.exercise_id);
  ok(x.academic_review?.status==="APPROVED","review status "+x.exercise_id);
  for(const l of x.remediation_links)ok(/^\.\.\/kien-thuc\//.test(l.href),"relative remediation href "+x.exercise_id);
}

const byId=Object.fromEntries(data.exercises.map(x=>[x.exercise_id,x]));
ok(byId["WX07-RAT-001"].solution_steps.at(-1).content_markdown.includes("\\frac{x+3}{x}")&&byId["WX07-RAT-001"].solution_steps.at(-1).content_markdown.includes("x\\ne0,3"),"WX07-001 result");
ok(byId["WX07-RAT-002"].solution_steps.at(-1).content_markdown.includes("=1,\\qquad")&&byId["WX07-RAT-002"].solution_steps.at(-1).content_markdown.includes("x\\ne\\pm1"),"WX07-002 result");
ok(byId["WX14-TRI-001"].solution_steps.at(-1).content_markdown.includes("AM\\perp BC"),"WX14-001 conclusion");
ok(byId["WX14-TRI-002"].solution_steps.at(-1).content_markdown.includes("BE=CD"),"WX14-002 conclusion");
ok(byId["WX24-MOD-001"].solution_steps.at(-1).content_markdown.includes("40\\,\\text{km/h}"),"WX24-001 result");
ok(byId["WX24-MOD-002"].solution_steps.at(-1).content_markdown.includes("70")&&byId["WX24-MOD-002"].solution_steps.at(-1).content_markdown.includes("50"),"WX24-002 result");
ok(byId["WX08-EQI-001"].solution_steps.at(-1).content_markdown.includes("varnothing"),"WX08-001 result");
ok(byId["WX08-EQI-002"].solution_steps.at(-1).content_markdown.includes("-\\frac15"),"WX08-002 result");
ok(byId["WX17-SIM-001"].solution_steps.at(-1).content_markdown.includes("DE\\parallel BC"),"WX17-001 conclusion");
ok(byId["WX17-SIM-002"].solution_steps.at(-1).content_markdown.includes("DE=8\\text{ cm}"),"WX17-002 result");
ok(byId["WX19-CIR-001"].solution_steps.some(s=>s.content_markdown.includes("60\\pi")),"WX19-001 result");
ok(byId["WX19-CIR-002"].solution_steps.at(-1).content_markdown.includes("62^\\circ"),"WX19-002 result");
ok(byId["WX09-SYS-001"].solution_steps.at(-1).content_markdown.includes("(5;1)"),"WX09-001 result");
ok(byId["WX09-SYS-002"].solution_steps.at(-1).content_markdown.includes("8 nghìn")&&byId["WX09-SYS-002"].solution_steps.at(-1).content_markdown.includes("10 nghìn"),"WX09-002 result");
ok(byId["WX16-QUAD-001"].solution_steps.at(-1).content_markdown.includes("hình chữ nhật"),"WX16-001 conclusion");
ok(byId["WX16-QUAD-002"].solution_steps.at(-1).content_markdown.includes("hình vuông"),"WX16-002 conclusion");
ok(byId["WX18-TRI-001"].solution_steps.at(-1).content_markdown.includes("10\\sqrt3"),"WX18-001 result");
ok(byId["WX18-TRI-002"].solution_steps.at(-1).content_markdown.includes("15{,}4"),"WX18-002 result");
ok(byId["WX10-FUN-001"].solution_steps.at(-1).content_markdown.includes("A(0;4)")&&byId["WX10-FUN-001"].solution_steps.at(-1).content_markdown.includes("B(2;0)"),"WX10-001 result");
ok(byId["WX10-FUN-002"].solution_steps.at(-1).content_markdown.includes("P(6;18)")&&byId["WX10-FUN-002"].solution_steps.at(-1).content_markdown.includes("thuộc parabol"),"WX10-002 result");
ok(byId["WX11-RAD-001"].solution_steps.at(-1).content_markdown.includes("=1"),"WX11-001 result");
ok(byId["WX11-RAD-002"].solution_steps.some(s=>s.content_markdown.includes("\\frac{\\sqrt5}{2}")),"WX11-002 result");
ok(byId["WX12-QUA-001"].solution_steps.some(s=>s.content_markdown.includes("x_1=\\frac23")&&s.content_markdown.includes("x_2=-1")),"WX12-001 result");
ok(byId["WX12-QUA-002"].solution_steps.at(-1).content_markdown.includes("x^2-7x+10=0")&&byId["WX12-QUA-002"].solution_steps.at(-1).content_markdown.includes("2")&&byId["WX12-QUA-002"].solution_steps.at(-1).content_markdown.includes("5"),"WX12-002 result");
ok(byId["WX13-LIN-001"].solution_steps.at(-1).content_markdown.includes("a\\parallel b"),"WX13-001 conclusion");
ok(byId["WX13-LIN-002"].solution_steps.at(-1).content_markdown.includes("c\\perp b"),"WX13-002 conclusion");
ok(byId["WX15-CEN-001"].solution_steps.some(s=>s.content_markdown.includes("AG=\\frac23AM")&&s.content_markdown.includes("GM=\\frac13AM")),"WX15-001 centroid ratio");
ok(byId["WX15-CEN-002"].solution_steps.some(s=>s.content_markdown.includes("OA=OB=OC"))&&byId["WX15-CEN-002"].solution_steps.some(s=>s.content_markdown.includes("d(I,AB)=d(I,BC)=d(I,CA)")),"WX15-002 center distinctions");
ok(byId["WX23-PRO-001"].solution_steps.some(s=>s.content_markdown.includes("\\frac{23}{40}=0{,}575")),"WX23-001 experimental probability");
ok(byId["WX23-PRO-002"].solution_steps.some(s=>s.content_markdown.includes("P(A)=\\frac8{12}=\\frac23"))&&byId["WX23-PRO-002"].solution_steps.some(s=>s.content_markdown.includes("\\frac{19}{30}")),"WX23-002 classical and experimental probability");

for(const x of data.exercises.filter(x=>x.topic_id==="CT14")){
  ok(x.figure_uri&&fs.existsSync(path.join("docs",x.figure_uri.replace(/^\.\.\//,""))),"geometry figure "+x.exercise_id);
}
const page=read("docs/luyen-tap/index.md");
ok(page.includes("data-written-exercise-library"),"library page mount");
ok(!page.includes("Pilot v1"),"library intro no longer pilot-labelled");
ok(!page.includes("Hiện pilot có"),"library intro has no stale fixed pilot count");
ok(page.includes("mở rộng dần theo từng chuyên đề"),"library intro uses durable expansion copy");
ok(data.published_scope?.batches?.every(x=>x.status==="PUBLISHED"),"all released written-library batches marked published");
const yaml=read("mkdocs.yml");
ok(yaml.includes("Thư viện bài tập: luyen-tap/index.md"),"nav entry");
ok(yaml.includes("written-exercise-library-v1.css"),"css wired");
ok(yaml.includes("written-exercise-library-v1.js"),"js wired");
const ui=read("docs/assets/javascripts/written-exercise-library-v1.js");
const uiCss=read("docs/assets/stylesheets/written-exercise-library-v1.css");
ok(ui.includes("written-help-actions")&&ui.includes("dataset.helpTarget")&&ui.includes("written-help-panel"),"compact three-action support UI wired");
ok(ui.includes("initTopicLibraryLink")&&ui.includes('luyen-tap/?topic='),"topic lesson deep link with topic auto-filter wired");
ok(uiCss.includes("grid-template-columns:repeat(3,minmax(0,1fr))"),"help actions use one three-column row");
ok(uiCss.includes(".written-topic-library-link"),"topic-to-library CTA styled");

console.log("PASS: written exercise catalog = 30 items / 15 topics / Base+Apply.");
console.log("PASS: rubric, remediation, geometry assets and no-readiness boundary validated.");
console.log("PASS: exact published conclusions and UI wiring validated.");
console.log("PASS: compact 3-action help row and topic-filter deep links validated.");
