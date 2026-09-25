#!/usr/bin/env node
"use strict";
const fs=require("fs"),errors=[];
const w=JSON.parse(fs.readFileSync("docs/assets/data/curriculum/topic13-learning-workspace.json","utf8"));
const m=JSON.parse(fs.readFileSync("docs/assets/data/practice/13-goc-va-duong-thang-micro-v1.json","utf8"));
const a=JSON.parse(fs.readFileSync("docs/assets/data/assessment/13-goc-va-duong-thang-core-v1.json","utf8"));
const man=JSON.parse(fs.readFileSync("docs/assets/data/practice/13-goc-va-duong-thang-v1.manifest.json","utf8"));
const cover=JSON.parse(fs.readFileSync("docs/assets/data/curriculum/geometry-core-coverage-v1.json","utf8")).topics.find(x=>x.id==="13-goc-va-duong-thang");
const p=fs.readFileSync("docs/kien-thuc/13-goc-va-duong-thang/bai-tap.md","utf8"),l=fs.readFileSync("docs/kien-thuc/13-goc-va-duong-thang/index.md","utf8"),s=fs.readFileSync("docs/kien-thuc/13-goc-va-duong-thang/tu-kiem-tra.md","utf8");
if(w.cards?.length!==5)errors.push("CĐ13: expected 5 cards");
if(m.question_count!==15||m.questions?.length!==15)errors.push("CĐ13: expected 15 micro");
const by=new Map(m.questions.map(q=>[q.id,q]));
for(const c of w.cards){const qs=c.micro_practice.map(id=>by.get(id)).filter(Boolean);if(qs.length!==3||qs.map(q=>q.micro_role).join(",")!=="base,trap,apply")errors.push(c.id+": micro roles");}
for(const q of m.questions){if(q.tags?.skill?.length!==1)errors.push(q.id+": exactly one skill");if(q.options?.length!==4||new Set(q.options).size!==4||!q.explanation||(q.hints||[]).length<2)errors.push(q.id+": micro quality");}
if(a.items?.length!==10||a.items.some(q=>q.type!=="mcq"||q.options?.length!==4||new Set(q.options).size!==4))errors.push("CĐ13: readiness");
if(a.policy?.feedback!=="after_submit"||a.policy?.hints!==false||a.policy?.tutor!==false||a.policy?.hard_gate!==false)errors.push("CĐ13: readiness policy");
if((p.match(/^####\s+13-WR-\d+/gm)||[]).length<8||!/Core-Support/.test(p)||!/Entrance10/.test(p)||!/Challenge/.test(p)||!/\?\?\?\s+example\s+"Xem lời giải"/.test(p))errors.push("CĐ13: Practice Room structure");
if(!l.includes("(bai-tap.md)")||!l.includes("(tu-kiem-tra.md)")||!l.includes("Tiên đề Euclid")||!l.includes("giả thiết")||!s.includes("data-readiness-check-v1"))errors.push("CĐ13: lesson/readiness gateways");
const core=new Set(cover.curriculum_core_skills),bank=new Set(Object.keys(man.skill_labels||{}));const missing=[...core].filter(x=>!bank.has(x));if(missing.length)errors.push("CĐ13 bank still missing Core: "+missing.join(","));
if(man.question_count!==156||!man.sources.includes("13-goc-va-duong-thang-v1-05.json"))errors.push("CĐ13 manifest count/source");
const ch=JSON.parse(fs.readFileSync("docs/assets/data/practice/13-goc-va-duong-thang-v1-05.json","utf8"));if(ch.questions?.length!==36)errors.push("CĐ13 gap chunk expected 36");
const cardSkills=w.cards.flatMap(c=>c.skills);if(new Set(cardSkills).size!==core.size||[...core].some(x=>!cardSkills.includes(x)))errors.push("CĐ13 cards must cover mapped Core exactly");
if(errors.length){console.error(errors.join("\n"));process.exit(1)}console.log("PASS: CĐ13 Golden Geometry rollout · 21 Core skills · 156 bank · 15 micro · 10 readiness");
