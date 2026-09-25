#!/usr/bin/env node
"use strict";
const fs=require("fs"),path=require("path"),R=path.resolve(__dirname,"..");
const read=p=>{const full=path.join(R,p);return p.endsWith(".md")?fs.readFileSync(full,"utf8"):JSON.parse(fs.readFileSync(full,"utf8"))};
const packet=read("docs/assets/data/collaboration/packets/STA21-READY-GEMINI-AUTHOR-001.json");
const w=read("docs/assets/data/curriculum/topic21-learning-workspace.json"),m=read("docs/assets/data/practice/21-thong-ke-v1.manifest.json"),micro=read("docs/assets/data/practice/21-thong-ke-micro-v1.json");
if(w.cards.length!==5||m.question_count!==132||m.sources.length!==5||micro.questions.length!==15)throw Error("CĐ21 author source drift");
const skills=[...new Set(w.cards.flatMap(c=>c.skills))];if(skills.length!==9)throw Error("Card skill list drift");
if(packet.scope.item_plan.length!==12||packet.scope.item_plan.some(x=>!skills.includes(x.skill)||!m.skill_labels[x.skill]))throw Error("Item plan invalid");
const all=m.sources.flatMap(s=>read("docs/assets/data/practice/"+s).questions);
if(all.length!==132||new Set(all.map(x=>x.id)).size!==132)throw Error("Original bank integrity failure");
const grade_maps={};for(const grade of [6,7,8,9]){
const o=read("docs/assets/data/curriculum/kntt-grade"+grade+"-map.json");
grade_maps[grade]={status:o.status,primary_lessons:(o.chapters||[]).flatMap(c=>(c.lessons||[]).filter(l=>(l.roadmap||[]).some(r=>r.topic_id==="21-thong-ke"&&r.relation==="PRIMARY")).map(l=>({chapter:c.title||c.name,lesson:l}))),practice_alignment:o.practice_alignment?.["21-thong-ke"]||null};
}
if(!grade_maps[6].primary_lessons.length||!grade_maps[7].primary_lessons.length||!grade_maps[8].primary_lessons.length||grade_maps[9].primary_lessons.length)throw Error("Grade Core scope drift");
const resource={};for(const p of packet.source_lock.files)resource[p]=read(p);
const out={...packet,source_snapshot:{workspace:w,skill_labels:m.skill_labels,grade_maps,existing_practice_questions:all,existing_micro_questions:micro.questions,source_resources:resource}};
const target=process.argv[2]||path.join(R,"docs/assets/data/collaboration/exports/sta21-ready-gemini-author-001.json");
fs.mkdirSync(path.dirname(target),{recursive:true});fs.writeFileSync(target,JSON.stringify(out,null,2)+"\n");
console.log("PASS: CĐ21 Readiness author bundle; 12 item contracts, 9 skills, 132 practice and 15 micro");
