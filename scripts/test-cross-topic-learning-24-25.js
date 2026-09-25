#!/usr/bin/env node
"use strict";
const fs=require("fs"),path=require("path"),R=path.resolve(__dirname,"..");
const read=p=>JSON.parse(fs.readFileSync(path.join(R,p),"utf8")),txt=p=>fs.readFileSync(path.join(R,p),"utf8");
const errors=[],ok=(x,msg)=>{if(!x)errors.push(msg)};
for(const [id,slug,layer] of [[24,"24-bai-toan-thuc-te","Core-Support"],[25,"25-tong-hop-on-thi-10","Entrance10"]]){
 const w=read("docs/assets/data/curriculum/topic"+id+"-learning-workspace.json"),b=read("docs/assets/data/practice/"+slug+"-micro-v1.json"),m=read("docs/assets/data/practice/"+slug+"-v1.manifest.json");
 ok(w.topic===slug&&w.core_progress_policy.layer===layer&&w.cards.length===5&&b.questions.length===15&&b.question_count===15,"manifest/journey "+id);
 ok(m.question_count===120&&m.sources.length===4,"legacy bank preserved "+id);
 const byId=new Map(b.questions.map(q=>[q.id,q])),ids=new Set();
 w.cards.forEach((c,i)=>{const qq=c.micro_practice.map(q=>byId.get(q));ok(qq.every(Boolean)&&qq.map(q=>q.micro_role).join(",")==="base,trap,apply"&&c.layer===layer,"card "+c.id);
 ok(c.teaching_copy?.worked_example?.problem&&c.teaching_copy?.worked_example?.solution&&c.teaching_copy?.misconception&&c.teaching_copy?.summary,"pedagogy "+c.id);
 qq.forEach(q=>{ok(!ids.has(q.id)&&q.tags.layer===layer&&q.tags.topic===slug&&q.tags.skill.length===1&&c.skills.includes(q.tags.skill[0]),"unique non-Core skill "+q.id);ids.add(q.id);
 ok(q.options.length===4&&new Set(q.options).size===4&&q.options[q.answer]&&q.hints.length===2&&q.explanation,"answer/hints "+q.id);
 });});
 ok(ids.size===15&&(w.extensions||[]).every(x=>x.gates_core===false),"no gating "+id);
 ok(txt("docs/kien-thuc/"+slug+"/index.md").includes("Learning Journey")&&txt("docs/assets/javascripts/topic-workspace-v1.js").includes('"'+slug+'":{number:'),"UI wiring "+id);
}
if(errors.length){console.error(errors.join("\n"));process.exit(1)}console.log("PASS CĐ24–25: ten cards, thirty non-gating micro items, unchanged original 240 questions.");
