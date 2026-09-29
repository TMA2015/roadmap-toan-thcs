#!/usr/bin/env node
"use strict";
const fs=require("fs"),path=require("path");
const root=path.resolve(__dirname,"..");
const read=p=>fs.readFileSync(path.join(root,p),"utf8");
const ok=(x,msg)=>{if(!x)throw Error(msg)};
const workspace=JSON.parse(read("docs/assets/data/curriculum/topic07-learning-workspace.json"));
const bank=JSON.parse(read("docs/assets/data/practice/07-phan-thuc-dai-so-micro-v1.json"));
const manifest=JSON.parse(read("docs/assets/data/practice/07-phan-thuc-dai-so-v1.manifest.json"));
const js=read("docs/assets/javascripts/topic-workspace-v1.js");
const css=read("docs/assets/stylesheets/topic-workspace.css");
const lesson=read("docs/kien-thuc/07-phan-thuc-dai-so/core/index.md");
const byId=new Map(bank.questions.map(q=>[q.id,q]));
ok(workspace.cards.length===5&&bank.questions.length===17&&byId.size===17,"five cards; fifteen original plus two new items");
const original=JSON.parse(read("content-staging/reviews/MATH-CORE07-TEACH-R1-20260929.json")).review_basis.existing_micro_questions;
ok(original.length===15&&bank.questions.slice(0,15).every((q,i)=>JSON.stringify(q)===JSON.stringify(original[i])),
   "the reviewed original 15 items must be byte-equivalent as JSON records");
ok(JSON.stringify(bank.questions.slice(15).map(q=>q.id))===JSON.stringify(["RAT07MICRO_016","RAT07MICRO_017"]),
   "only the two expected new IDs can be added");
const primary=q=>q.assessed_skill||q.primary_skill||(Array.isArray(q.tags?.skill)?q.tags.skill[0]:q.tags?.skill);
let total=0;
const coverage=[];
for(const card of workspace.cards){
 const questions=card.micro_practice.map(id=>byId.get(id));
 ok(questions.every(Boolean),"missing question in "+card.id);
 const assessed=new Set(questions.map(primary));
 ok(questions.every(q=>q.card_id===card.id),"cross-card question mapping");
 ok(questions.every(q=>Array.isArray(q.tags?.skill)&&q.tags.skill.length===1),"RAT07 micro has exactly one assessed skill per item");
 ok(questions.slice(0,3).map(q=>q.micro_role).join(",")==="base,trap,apply","the three original lesson roles remain");
 ok(questions.slice(3).every(q=>q.micro_role==="coverage"),"added formative items must be labelled coverage");
 const covered=card.skills.filter(id=>assessed.has(id));
 const missing=card.skills.filter(id=>!assessed.has(id));
 ok(card.skills.every(id=>manifest.skill_labels[id]),"missing source skill label "+card.id);
 coverage.push({card:card.id,declared:card.skills.length,covered:covered.length,missing});
 total+=questions.length;
}
ok(total===17,"five-card question links must total seventeen");
ok(coverage[0].covered===4&&coverage[0].declared===4&&coverage[0].missing.length===0,"Core 1 four skills have dedicated questions");
ok(coverage[1].covered===3&&coverage[1].declared===3&&coverage[1].missing.length===0,"Core 2 three skills have dedicated questions");
ok(coverage.slice(2).every(c=>c.covered===c.declared),"Core 3-5 coverage");
ok(coverage.reduce((n,c)=>n+c.declared,0)===11&&coverage.reduce((n,c)=>n+c.covered,0)===11,"11 of 11 declared skills have at least one dedicated formative item");
for(const required of ["coverageFor=(card,questions)","primarySkill=q=>","topic-core-teach-start","topic-core-practice-start","topic-core-modal-modes","topic-micro-assessed-skill","body.replaceChildren(tabs,sessions.get(card.id))","const sessions=new Map()","recordAnswer?.("])
 ok(js.includes(required),"UI invariant: "+required);
ok(!js.includes("topic-core-teaching-item"),"no separate inline teaching accordion");
ok(css.includes(".topic-core-modal-modes")&&css.includes(".topic-core-skill-chip")&&css.includes(".topic-core-card-actions"),"modal, skills and buttons styled");
ok(lesson.includes("hai nút")&&lesson.includes("không tính là đã luyện"),"learner wording accurately describes scope");
console.log("PASS: Core07 dual modal and primary-skill coverage: "+JSON.stringify(coverage));
