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
ok(workspace.cards.length===5&&bank.questions.length===15&&byId.size===15,"original reviewed cards/items remain unchanged");
const primary=q=>q.assessed_skill||q.primary_skill||(Array.isArray(q.tags?.skill)?q.tags.skill[0]:q.tags?.skill);
let total=0;
const coverage=[];
for(const card of workspace.cards){
 const questions=card.micro_practice.map(id=>byId.get(id));
 ok(questions.every(Boolean),"missing question in "+card.id);
 const assessed=new Set(questions.map(primary));
 ok(questions.every(q=>q.card_id===card.id),"cross-card question mapping");
 ok(questions.every(q=>Array.isArray(q.tags?.skill)&&q.tags.skill.length===1),"RAT07 micro has exactly one assessed skill per item");
 const covered=card.skills.filter(id=>assessed.has(id));
 const missing=card.skills.filter(id=>!assessed.has(id));
 ok(card.skills.every(id=>manifest.skill_labels[id]),"missing source skill label "+card.id);
 coverage.push({card:card.id,declared:card.skills.length,covered:covered.length,missing});
 total+=questions.length;
}
ok(total===15,"no fabricated questions");
ok(coverage[0].covered===3&&coverage[0].declared===4&&JSON.stringify(coverage[0].missing)===JSON.stringify(["hai-phan-thuc-bang-nhau"]),"Core 1 gap reported accurately");
ok(coverage[1].covered===2&&coverage[1].declared===3&&JSON.stringify(coverage[1].missing)===JSON.stringify(["phan-tich-tu-mau"]),"Core 2 supporting skill not miscounted as assessed");
ok(coverage.slice(2).every(c=>c.covered===c.declared),"Core 3-5 coverage");
for(const required of ["coverageFor=(card,questions)","primarySkill=q=>","topic-core-teach-start","topic-core-practice-start","topic-core-modal-modes","topic-micro-assessed-skill","body.replaceChildren(tabs,sessions.get(card.id))","const sessions=new Map()","recordAnswer?.("])
 ok(js.includes(required),"UI invariant: "+required);
ok(!js.includes("topic-core-teaching-item"),"no separate inline teaching accordion");
ok(css.includes(".topic-core-modal-modes")&&css.includes(".topic-core-skill-chip")&&css.includes(".topic-core-card-actions"),"modal, skills and buttons styled");
ok(lesson.includes("hai nút")&&lesson.includes("không tính là đã luyện"),"learner wording accurately describes scope");
console.log("PASS: Core07 dual modal and primary-skill coverage: "+JSON.stringify(coverage));
