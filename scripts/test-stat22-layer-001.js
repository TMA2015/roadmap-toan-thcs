#!/usr/bin/env node
"use strict";
const fs=require("fs"),path=require("path"),ROOT=path.resolve(__dirname,".."),load=p=>JSON.parse(fs.readFileSync(path.join(ROOT,p),"utf8")),txt=p=>fs.readFileSync(path.join(ROOT,p),"utf8");
const dir="docs/assets/data/practice/",m=load(dir+"22-dai-luong-dac-trung-v1.manifest.json"),audit=load("docs/assets/data/curriculum/topic22-layer-audit-v1.json");
const errors=[],check=(ok,msg)=>{if(!ok)errors.push(msg)};
check(m.primary_layer==="THPT-Bridge"&&m.core_readiness_eligible===false,"manifest must be optional Bridge");
check(m.question_count===120&&m.sources.length===4&&audit.skills.length===10,"count/skills");
check(audit.topic_primary_layer==="THPT-Bridge"&&audit.core_readiness_eligible===false,"audit layer");
check(audit.grade4_prerequisite?.skill==="trung-binh-tho"&&audit.grade4_prerequisite?.source.includes("Bài 46"),"basic average Grade 4 prerequisite not recorded");
const q=m.sources.flatMap(s=>load(dir+s).questions),ids=new Set();
check(q.length===120,"bank 120");
for(const x of q){check(!!x.id&&!ids.has(x.id),"duplicate ID "+x.id);ids.add(x.id);
 check(x.tags?.topic==="22-dai-luong-dac-trung"&&x.tags.layer==="THPT-Bridge","missing Bridge tag "+x.id);
 check(x.tags?.skill?.length===1&&m.skill_labels[x.tags.skill[0]]&&audit.skills.some(s=>s.id===x.tags.skill[0]&&s.topic_layer==="THPT-Bridge"),"unknown skill "+x.id);
 check(x.options?.length===4&&Number.isInteger(x.answer)&&x.answer>=0&&x.answer<4&&x.explanation,"question shape "+x.id)}
for(let g=6;g<=9;g++){const map=load("docs/assets/data/curriculum/kntt-grade"+g+"-map.json");for(const c of map.chapters||[])for(const l of c.lessons||[])
 check(!(l.roadmap||[]).some(r=>r.topic_id==="22-dai-luong-dac-trung"&&r.relation==="PRIMARY"),"unexpected Grade-"+g+" Core mapping");}
const lesson=txt("docs/kien-thuc/22-dai-luong-dac-trung/index.md"),practice=txt("docs/kien-thuc/22-dai-luong-dac-trung/bai-tap.md"),self=txt("docs/kien-thuc/22-dai-luong-dac-trung/tu-kiem-tra.md");
check(lesson.includes("THPT-Bridge")&&lesson.includes("Toán 4")&&lesson.includes("không khóa tiến độ"),"lesson not bridge-labeled");
check(!lesson.includes("Lớp trọng tâm:** 7–9")&&!lesson.includes("Đạt tối thiểu **7/10**"),"legacy Core gate");
check(practice.includes("THPT-Bridge")&&self.includes("THPT-Bridge")&&self.includes("không phải Core Readiness"),"practice/self test scope missing");
check(!self.includes("→ Nếu đạt:")&&!self.includes("trước khi chuyển tiếp"),"hard gate remains in self check");
const engine=txt("docs/assets/javascripts/practice-engine-v2.js");
check(engine.includes('question?.tags?.layer || "KNTT-Core"'),"Practice Engine fallback changed; revalidate Bridge tag integration");
if(errors.length){console.error(errors.join("\n"));process.exit(1)}
console.log("PASS: 120 CĐ22 items tagged THPT-Bridge, Grade-4 basic mean caveat, no THCS Readiness or progression hard gate.");
