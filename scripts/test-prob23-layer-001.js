#!/usr/bin/env node
"use strict";
const fs=require("fs"),path=require("path"),R=path.resolve(__dirname,".."),read=p=>JSON.parse(fs.readFileSync(path.join(R,p),"utf8")),txt=p=>fs.readFileSync(path.join(R,p),"utf8");
const m=read("docs/assets/data/practice/23-xac-suat-v1.manifest.json"),audit=read("docs/assets/data/curriculum/topic23-layer-audit-v1.json"),packet=read("docs/assets/data/collaboration/packets/PROB23-LEARN-GEMINI-AUTHOR-001.json"),questions=m.sources.flatMap(s=>read("docs/assets/data/practice/"+s).questions);
const errors=[],ok=(v,s)=>{if(!v)errors.push(s)},counts={},seen=new Set();
ok(m.question_count===120&&m.sources.length===4&&questions.length===120&&Object.keys(m.skill_labels).length===13,"bank manifest");
for(const q of questions){const layer=q.tags?.layer,skill=q.tags?.skill?.[0];ok(!!q.id&&!seen.has(q.id),"duplicate ID "+q.id);seen.add(q.id);ok(q.options?.length===4&&Number.isInteger(q.answer)&&q.answer>=0&&q.answer<4,"answer "+q.id);ok(q.tags?.topic==="23-xac-suat"&&q.tags.skill?.length===1&&!!m.skill_labels[skill],"skill "+q.id);ok(["KNTT-Core","Core-Support","Entrance10"].includes(layer),"layer "+q.id);const fallback=audit.core_skills.includes(skill)?"KNTT-Core":audit.core_support_skills.includes(skill)?"Core-Support":audit.entrance10_skills.includes(skill)?"Entrance10":null;ok(layer===(audit.item_layer_overrides?.[q.id]||fallback),"layer/skill "+q.id);counts[layer]=(counts[layer]||0)+1;}
for(const [layer,n] of Object.entries({"KNTT-Core":52,"Core-Support":30,"Entrance10":38}))ok(counts[layer]===n&&audit.counts[layer]===n&&packet.source_lock.layer_counts[layer]===n,"count "+layer);
ok(audit.primary_grades.join(",")==="6,7,8"&&audit.core_skills.length===6,"scope");
for(const id of ["PRO23V1__024","PRO23V1__025","PRO23V1__114"])ok(questions.find(q=>q.id===id)?.tags.layer==="Core-Support","advanced Core leak "+id);
ok(questions.find(q=>q.id==="PRO23V1__119")?.tags.layer==="Entrance10","union/intersection not Core");
for(const id of ["PRO23V1__043","PRO23V1__046","PRO23V1__047","PRO23V1__049","PRO23V1__050"]){const stem=questions.find(q=>q.id===id)?.question||"";ok(stem.includes("thẻ giống nhau")||stem.includes("cùng kích thước"),"uniformity unspecified "+id);}
for(let grade=6;grade<=9;grade++){const map=read("docs/assets/data/curriculum/kntt-grade"+grade+"-map.json");let n=0;for(const c of map.chapters||[])for(const l of c.lessons||[])if((l.roadmap||[]).some(r=>r.topic_id==="23-xac-suat"&&r.relation==="PRIMARY"))n++;ok(n===(grade===9?0:2),"grade map drift "+grade);}
ok(packet.scope.card_plan.length===5&&packet.scope.card_plan.every(c=>c.micro_ids.length===3&&c.skills.every(s=>audit.core_skills.includes(s))),"card scope");
ok(packet.scope.card_plan[0].skills.join(",")==="xac-suat-thuc-nghiem"&&packet.scope.proposed_unscored.includes("ket-qua-co-the"),"grade6 boundary");
const lesson=txt("docs/kien-thuc/23-xac-suat/index.md"),practice=txt("docs/kien-thuc/23-xac-suat/bai-tap.md"),self=txt("docs/kien-thuc/23-xac-suat/tu-kiem-tra.md");
ok(lesson.includes("lớp 6–8")&&lesson.includes("không tự động tính vào KNTT Core Readiness")&&!lesson.includes("Đạt tối thiểu **7/10**"),"lesson boundary");
ok(practice.includes("Core-Support/Entrance10")&&self.includes('data-readiness-check-v1')&&self.includes("không gồm sơ đồ cây")&&!self.includes("→ Nếu đạt:"),"practice/self gate");
const engine=txt("docs/assets/javascripts/practice-engine-v2.js");
ok(engine.includes('question.tags.layer !== "KNTT-Core"')&&engine.includes('this.difficultyLabel(question.difficulty)')&&engine.includes('.filter(Boolean).join(" · ")'),"practice non-Core label");
ok(read("docs/assets/data/practice/22-dai-luong-dac-trung-v1.manifest.json").primary_layer==="THPT-Bridge","CĐ22 label source");
if(errors.length){console.error(errors.join("\n"));process.exit(1)}
console.log("PASS: CĐ23 120 IDs, 52 Core / 30 Support / 38 Entrance10, grade maps, source-locked five-card plan and non-Core practice label.");
