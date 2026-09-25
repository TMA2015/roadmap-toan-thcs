#!/usr/bin/env node
"use strict";
const fs=require("fs"),path=require("path"),R=path.resolve(__dirname,"..");
const read=p=>{const s=fs.readFileSync(path.join(R,p),"utf8");return p.endsWith(".json")?JSON.parse(s):s};
const packet=read("docs/assets/data/collaboration/packets/STAT22-MAP-GEMINI-REVIEW-001.json");
const m=read("docs/assets/data/practice/22-dai-luong-dac-trung-v1.manifest.json"),q=m.sources.flatMap(s=>read("docs/assets/data/practice/"+s).questions);
if(m.question_count!==120||m.sources.length!==4||q.length!==120||new Set(q.map(x=>x.id)).size!==120)throw Error("CĐ22 bank drift");
const maps={};for(let g=6;g<=9;g++){const map=read("docs/assets/data/curriculum/kntt-grade"+g+"-map.json");const matches=[];for(const c of map.chapters||[])for(const l of c.lessons||[])if((l.roadmap||[]).some(x=>x.topic_id==="22-dai-luong-dac-trung"))matches.push({chapter:c.chapter||c.title,lesson:l});maps[g]={status:map.status,matches,practice_alignment:map.practice_alignment?.["22-dai-luong-dac-trung"]||null,grade9_audit:g===9?map.vertical_spine_audit||null:null};}
if(Object.values(maps).some(x=>x.matches.length))throw Error("Cross-grade 22 mapping changed; review packet assumptions");
const resources={};for(const p of packet.scope.source_lock)resources[p]=read(p);
const data={...packet,source_snapshot:{manifest:m,questions:q,grade_mapping_observations:maps,resources}};
const dest=process.argv[2]||path.join(R,"docs/assets/data/collaboration/exports/stat22-map-gemini-review-001.json");fs.mkdirSync(path.dirname(dest),{recursive:true});fs.writeFileSync(dest,JSON.stringify(data,null,2)+"\n");
console.log("PASS: source-locked STAT22 mapping review: 120 questions, 10 skills, grade 6–9 maps (no PRIMARY topic22 references)");
