#!/usr/bin/env node
"use strict";
const fs=require("fs"),path=require("path"),R=path.resolve(__dirname,".."),read=p=>JSON.parse(fs.readFileSync(path.join(R,p),"utf8")),txt=p=>fs.readFileSync(path.join(R,p),"utf8"),ok=(x,m)=>{if(!x)throw Error(m)};
const w=read("docs/assets/data/curriculum/topic23-learning-workspace.json"),b=read("docs/assets/data/practice/23-xac-suat-micro-v1.json"),m=read("docs/assets/data/practice/23-xac-suat-v1.manifest.json"),audit=read("docs/assets/data/curriculum/topic23-layer-audit-v1.json"),packet=read("docs/assets/data/collaboration/packets/PROB23-LEARN-GEMINI-AUTHOR-001.json");
ok(w.schema==="roadmap-topic-learning-workspace-v1"&&w.topic==="23-xac-suat"&&w.cards.length===5&&w.core_progress_policy.layer==="KNTT-Core","workspace schema");
ok(b.question_count===15&&b.questions.length===15&&b.bank_id==="PROB23-MICRO-V1"&&w.micro_practice_bank==="assets/data/practice/23-xac-suat-micro-v1.json","bank schema");
ok(w.extensions.length>=2&&w.extensions.every(x=>x.gates_core===false&&x.layer!=="KNTT-Core"),"extensions should not gate");
const byId=new Map(b.questions.map(x=>[x.id,x])),seen=new Set(),gradeMap={};
for(let grade=6;grade<=8;grade++){const map=read("docs/assets/data/curriculum/kntt-grade"+grade+"-map.json");const skills=new Set(map.practice_alignment?.["23-xac-suat"]?.existing_core_skills||map.practice_alignment?.["23-xac-suat"]?.grade8_core_include||[]);
for(const chapter of map.chapters||[])for(const l of chapter.lessons||[])if((l.roadmap||[]).some(r=>r.topic_id==="23-xac-suat"&&r.relation==="PRIMARY"))for(const s of [...(l.existing_skills||[]),...(l.skills||[])])skills.add(s);
gradeMap[grade]=skills;}
let inCards=[];
for(let i=0;i<5;i++){const c=w.cards[i],p=packet.scope.card_plan[i],copy=c.teaching_copy;ok(c.id===p.id&&c.order===i+1&&c.layer==="KNTT-Core"&&c.micro_practice.length===3&&c.skills.join(",")===p.skills.join(","),"card identity "+i);ok(copy?.key_idea&&copy?.worked_example?.problem&&copy?.worked_example?.solution&&copy.misconception&&copy.summary,"teaching content "+c.id);
const qs=c.micro_practice.map(id=>byId.get(id));ok(qs.every(Boolean)&&qs.map(x=>x.micro_role).join(",")==="base,trap,apply","role sequence "+c.id);qs.forEach((x,j)=>{ok(x.id===p.micro_ids[j]&&x.card_id===c.id&&c.skills.includes(x.target),"item in card "+x.id);inCards.push(x.id)});}
ok(new Set(inCards).size===15,"card references duplicated");
for(let i=0;i<15;i++){const q=b.questions[i],id="PRO23MICRO_"+String(i+1).padStart(3,"0");ok(q.id===id&&!seen.has(q.id),"item ID "+id);seen.add(q.id);ok(q.options?.length===4&&q.options.every(x=>typeof x==="string"&&x.trim())&&new Set(q.options).size===4&&Number.isInteger(q.answer)&&q.answer>=0&&q.answer<4,"choices "+id);
ok(q.tags.topic==="23-xac-suat"&&q.tags.layer==="KNTT-Core"&&q.tags.skill.length===1&&q.tags.skill[0]===q.target&&!!m.skill_labels[q.target]&&audit.core_skills.includes(q.target),"skill "+id);
ok(q.curriculum.book==="KNTT"&&q.curriculum.level==="core"&&q.curriculum.grades.length===1&&q.curriculum.grades[0]===q.tags.grade&&gradeMap[q.tags.grade]?.has(q.target),"grade map "+id);
ok(q.hints?.length===2&&q.hints.every(h=>h.trim().length>8)&&q.explanation.length>30&&q.exam.entrance10==="foundation"&&q.exam.specialized==="none","feedback/metadata "+id);
ok(!/phù hợp nhất|đúng đắn nhất|câu hình bên|quan sát hình sau/i.test(q.question),"unclear wording "+id);}
const orig=m.sources.flatMap(s=>read("docs/assets/data/practice/"+s).questions);ok(orig.length===120&&m.question_count===120&&new Set(orig.map(x=>x.id)).size===120,"original bank changed");const canonical=x=>x.toLowerCase().replace(/\s+/g," ").trim(),old=new Set(orig.map(x=>canonical(x.question)));ok(b.questions.every(x=>!old.has(canonical(x.question))),"identical question from original bank");
ok(b.questions[0].options[b.questions[0].answer]==="3/8"&&18/48===3/8,"001");
ok(b.questions[1].options[b.questions[1].answer]==="11/20"&&(40-18)/40===11/20,"002");
ok(b.questions[2].options[b.questions[2].answer]==="7/10"&&(20+15)/50===7/10,"003");
ok(b.questions[3].options[b.questions[3].answer]==="{2; 4}","004");
ok(b.questions[4].options[b.questions[4].answer]==="Biến cố không thể"&&b.questions[5].options[b.questions[5].answer]==="Biến cố chắc chắn","005/006");
ok(b.questions[6].options[b.questions[6].answer]==="1/3"&&2/6===1/3,"007");
ok(b.questions[7].options[b.questions[7].answer]==="1/2"&&3/6===1/2,"008");
ok(b.questions[8].options[b.questions[8].answer]==="7/12"&&(4+3)/12===7/12,"009");
ok(b.questions[9].options[b.questions[9].answer].includes("Bốc kín")&&b.questions[10].options[b.questions[10].answer]==="{6; 8}"&&b.questions[11].options[b.questions[11].answer]==="2","010-012");
ok(b.questions[12].options[b.questions[12].answer].includes("7/20")&&b.questions[13].options[b.questions[13].answer]==="0,4"&&(30-18)/30===.4,"013/014");
ok(b.questions[14].options[b.questions[14].answer].includes("29/50")&&(8+21)/(20+30)===.58,"015 aggregate experiments");
ok(!b.questions[14].question.includes("dự kiến sẽ ném")&&b.questions[14].target==="kiem-tra-xac-suat","no expectation outside Core");
ok(w.cards[0].skills.join(",")==="xac-suat-thuc-nghiem"&&!b.questions.slice(0,3).some(x=>x.target==="ket-qua-co-the"),"unapproved grade6 skills");
const js=txt("docs/assets/javascripts/topic-workspace-v1.js"),lesson=txt("docs/kien-thuc/23-xac-suat/index.md");
ok(js.includes('"23-xac-suat":{number:"23"')&&js.includes("if(card.teaching_copy)"),"UI mount missing");
ok(lesson.includes("5 Learning Cards KNTT Core")&&lesson.includes("Readiness Core sẽ được biên soạn")&&!lesson.includes("Đạt tối thiểu **7/10**"),"lesson gateway");
console.log("PASS: CĐ23 five grade-mapped Learning Cards, 15 micro items, independent math and direct-language checks, 120 Practice Bank intact. Roles Base/Trap/Apply.");
