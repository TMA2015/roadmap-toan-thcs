#!/usr/bin/env node
"use strict";
const fs=require("fs"),path=require("path"),R=path.resolve(__dirname,".."),load=p=>{const s=fs.readFileSync(path.join(R,p),"utf8");return p.endsWith(".json")?JSON.parse(s):s};
const packet=load("docs/assets/data/collaboration/packets/PROB23-LEARN-GEMINI-AUTHOR-001.json"),m=load("docs/assets/data/practice/23-xac-suat-v1.manifest.json"),audit=load("docs/assets/data/curriculum/topic23-layer-audit-v1.json");
const qs=m.sources.flatMap(s=>load("docs/assets/data/practice/"+s).questions);
if(m.question_count!==120||qs.length!==120||new Set(qs.map(q=>q.id)).size!==120||packet.scope.card_plan.length!==5)throw Error("PROB23 source count drift");
const counts={};qs.forEach(q=>{const layer=q.tags?.layer;counts[layer]=(counts[layer]||0)+1;});
for(const [layer,n] of Object.entries(packet.source_lock.layer_counts))if(counts[layer]!==n)throw Error("PROB23 layer drift "+layer);
if(audit.primary_grades.join(",")!=="6,7,8"||audit.core_skills.length!==6)throw Error("PROB23 Core audit drift");
const maps={};for(let g=6;g<=9;g++){const o=load("docs/assets/data/curriculum/kntt-grade"+g+"-map.json");
const matches=(o.chapters||[]).flatMap(c=>(c.lessons||[]).filter(l=>(l.roadmap||[]).some(r=>r.topic_id==="23-xac-suat"&&r.relation==="PRIMARY")).map(l=>({chapter:c.title||c.name,lesson:l})));
maps[g]={status:o.status,primary_lessons:matches,practice_alignment:o.practice_alignment?.["23-xac-suat"]||null};}
if(!maps[6].primary_lessons.length||!maps[7].primary_lessons.length||!maps[8].primary_lessons.length||maps[9].primary_lessons.length)throw Error("PROB23 grade map drift");
const whitelist=new Set(audit.core_skills);for(const c of packet.scope.card_plan)for(const skill of c.skills)if(!whitelist.has(skill)||!m.skill_labels[skill])throw Error("Unapproved scored skill "+skill);
for(const c of packet.scope.card_plan){if(c.micro_ids.length!==3||!maps[c.grade].primary_lessons.length)throw Error("Card plan drift "+c.id);}
const sources={};for(const p of packet.source_lock.files)sources[p]=load(p);
const dest=process.argv[2]||path.join(R,"docs/assets/data/collaboration/exports/prob23-learn-gemini-author-001.json");
fs.mkdirSync(path.dirname(dest),{recursive:true});fs.writeFileSync(dest,JSON.stringify({...packet,source_snapshot:{manifest:m,layer_audit:audit,grade_maps:maps,existing_questions:qs,source_resources:sources}},null,2)+"\n");
console.log("PASS: CĐ23 source-locked Gemini Learn bundle: 5 cards, 15 planned micro, 120 existing questions; Core/Support/Entrance10 "+JSON.stringify(counts));
