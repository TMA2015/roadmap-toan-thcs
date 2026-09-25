#!/usr/bin/env node
"use strict";
const fs=require("fs"),errors=[];
const cov=JSON.parse(fs.readFileSync("docs/assets/data/curriculum/geometry-core-coverage-v1.json","utf8"));
for(const cfg of [
 {id:"14-tam-giac",count:140,gapChunk:"docs/assets/data/practice/14-tam-giac-v1-05.json",gapN:20},
 {id:"15-duong-dong-quy",count:124,gapChunk:"docs/assets/data/practice/15-duong-dong-quy-v1-05.json",gapN:4}
]){
 const n=cfg.id.slice(0,2), w=JSON.parse(fs.readFileSync(`docs/assets/data/curriculum/topic${n}-learning-workspace.json`,"utf8"));
 const m=JSON.parse(fs.readFileSync(`docs/assets/data/practice/${cfg.id}-micro-v1.json`,"utf8"));
 const a=JSON.parse(fs.readFileSync(`docs/assets/data/assessment/${cfg.id}-core-v1.json`,"utf8"));
 const man=JSON.parse(fs.readFileSync(`docs/assets/data/practice/${cfg.id}-v1.manifest.json`,"utf8"));
 const row=cov.topics.find(x=>x.id===cfg.id), core=row.curriculum_core_skills;
 if(w.cards?.length!==5)errors.push(cfg.id+": 5 cards required");
 const cardSkills=w.cards.flatMap(c=>c.skills);if(new Set(cardSkills).size!==core.length||core.some(x=>!cardSkills.includes(x)))errors.push(cfg.id+": card Core coverage");
 if(m.question_count!==15||m.questions?.length!==15)errors.push(cfg.id+": 15 micro");
 const by=new Map(m.questions.map(q=>[q.id,q]));for(const c of w.cards){const qs=c.micro_practice.map(id=>by.get(id)).filter(Boolean);if(qs.length!==3||qs.map(q=>q.micro_role).join(",")!=="base,trap,apply")errors.push(c.id+": micro roles");}
 for(const q of m.questions){if(q.tags?.skill?.length!==1||q.options?.length!==4||new Set(q.options).size!==4||!q.explanation||(q.hints||[]).length<2)errors.push(q.id+": quality");for(const [i] of Object.entries(q.option_evidence||{}))if(Number(i)===q.answer)errors.push(q.id+": correct option signal");}
 if(a.items?.length!==10||a.items.some(q=>q.type!=="mcq"||q.options?.length!==4||new Set(q.options).size!==4))errors.push(cfg.id+": readiness");
 if(a.policy?.feedback!=="after_submit"||a.policy?.hints!==false||a.policy?.tutor!==false||a.policy?.hard_gate!==false)errors.push(cfg.id+": readiness policy");
 const bank=Object.keys(man.skill_labels||{});const miss=core.filter(x=>!bank.includes(x));if(miss.length)errors.push(cfg.id+": bank Core gaps "+miss.join(","));
 if(man.question_count!==cfg.count||!man.sources.includes(`${cfg.id}-v1-05.json`))errors.push(cfg.id+": manifest count/source");
 const ch=JSON.parse(fs.readFileSync(cfg.gapChunk,"utf8"));if(ch.questions?.length!==cfg.gapN)errors.push(cfg.id+": gap chunk count");
 const p=fs.readFileSync(`docs/kien-thuc/${cfg.id}/bai-tap.md`,"utf8"),s=fs.readFileSync(`docs/kien-thuc/${cfg.id}/tu-kiem-tra.md`,"utf8"),l=fs.readFileSync(`docs/kien-thuc/${cfg.id}/index.md`,"utf8");
 if(!/\?\?\?\s+example\s+"Xem lời giải"/.test(p)||!s.includes("data-readiness-check-v1")||!l.includes("(bai-tap.md)")||!l.includes("(tu-kiem-tra.md)"))errors.push(cfg.id+": page gateways");
}
if(errors.length){console.error(errors.join("\n"));process.exit(1)}console.log(`PASS: Golden Geometry CĐ14-CĐ15 · CĐ14 13/13 Core · CĐ15 11/11 Core · global coverage ${cov.summary.exact_id_covered}/${cov.summary.total_curriculum_core_skills}`);
