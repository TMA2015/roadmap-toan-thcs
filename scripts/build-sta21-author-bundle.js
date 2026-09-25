#!/usr/bin/env node
"use strict";
const fs=require("fs"),path=require("path");const ROOT=path.resolve(__dirname,"..");
const packet=JSON.parse(fs.readFileSync(path.join(ROOT,"docs/assets/data/collaboration/packets/STA21-GEMINI-AUTHOR-001.json"),"utf8"));
const read=p=>JSON.parse(fs.readFileSync(path.join(ROOT,p),"utf8"));
const files=packet.source_lock.source_of_truth;const sources={};for(const p of files)sources[p]=read(p);
const manifest=sources["docs/assets/data/practice/21-thong-ke-v1.manifest.json"];if(manifest.question_count!==132||manifest.sources.length!==5)throw Error("CĐ21 bank source drift");
const oldSources=packet.source_lock.source_of_truth.filter(p=>/21-thong-ke-v1-0[1-4]\.json$/.test(p));if(oldSources.length!==4)throw Error("Historical source lock");const questions=oldSources.flatMap(p=>sources[p].questions||[]);if(questions.length!==packet.source_lock.existing_bank_count)throw Error("Historical source count drift");
const ids=questions.map(q=>q.id);if(new Set(ids).size!==ids.length)throw Error("Duplicate source bank IDs");
for(const t of packet.scope.skills)if(!manifest.skill_labels[t.id])throw Error("Unrecognized skill "+t.id);
const curriculum={};for(const grade of [6,7,8]){const p="docs/assets/data/curriculum/kntt-grade"+grade+"-map.json",o=sources[p];curriculum[grade]={status:o.status,primary_lessons:(o.chapters||[]).flatMap(c=>(c.lessons||[]).filter(l=>(l.roadmap||[]).some(r=>r.topic_id==="21-thong-ke"&&r.relation==="PRIMARY")).map(l=>({chapter:c.title||c.name,lesson:l}))),practice_alignment:o.practice_alignment?.["21-thong-ke"]||null};}
const data={...packet,source_snapshot:{manifest:{...manifest,question_count:questions.length,sources:oldSources.map(p=>p.split("/").pop())},core_curriculum:curriculum,existing_questions:questions,example_question:questions[0],golden_template:sources["docs/assets/data/curriculum/golden-template-v1.json"]}};
const dest=process.argv[2]||path.join(ROOT,"docs/assets/data/collaboration/exports/sta21-gemini-author-001.json");fs.mkdirSync(path.dirname(dest),{recursive:true});fs.writeFileSync(dest,JSON.stringify(data,null,2)+"\n");console.log("PASS: source-locked CĐ21 author bundle; "+questions.length+" source questions; "+packet.scope.skills.length+" skill IDs");
