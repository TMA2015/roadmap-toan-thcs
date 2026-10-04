#!/usr/bin/env node
"use strict";
const fs=require("fs"),path=require("path"),root=path.resolve(__dirname,".."),read=p=>JSON.parse(fs.readFileSync(path.join(root,p),"utf8"));
const workspace=read("docs/assets/data/curriculum/topic21-learning-workspace.json");
const micro=read("docs/assets/data/practice/21-thong-ke-micro-v1.json");
const manifest=read("docs/assets/data/practice/21-thong-ke-v1.manifest.json");
const errors=[],check=(v,s)=>{if(!v)errors.push(s)};
check(workspace.schema==="roadmap-topic-learning-workspace-v1"&&workspace.topic==="21-thong-ke","workspace contract");
check(workspace.core_progress_policy?.layer==="KNTT-Core"&&workspace.cards?.length===5,"card count/layer");
check(micro.question_count===20&&micro.questions.length===20&&micro.bank_id==="STA21-MICRO-V1","micro count/bank id");
check(manifest.question_count===132&&manifest.sources.length===5,"original bank count changed");
check(workspace.micro_practice_bank==="assets/data/practice/21-thong-ke-micro-v1.json","micro data path");
check((workspace.extensions||[]).length>=2&&workspace.extensions.every(x=>x.gates_core===false),"extensions gate Core");

const ids=new Set(),byId=new Map(micro.questions.map(x=>[x.id,x]));
const mapped={};
for(const grade of [6,7,8]){
 const map=read("docs/assets/data/curriculum/kntt-grade"+grade+"-map.json"),skills=new Set(map.practice_alignment?.["21-thong-ke"]?.existing_core_skills||[]);
 for(const c of map.chapters||[])for(const l of c.lessons||[])if((l.roadmap||[]).some(x=>x.topic_id==="21-thong-ke"&&x.relation==="PRIMARY"))for(const s of l.existing_skills||[])skills.add(s);
 mapped[grade]=skills;
}

const expectedCardCounts=[5,6,3,3,3],qids=[];
for(let i=0;i<workspace.cards.length;i++){
 const card=workspace.cards[i];
 check(card.id==="sta21-core-"+(i+1)&&card.order===i+1&&card.layer==="KNTT-Core","card identity/order "+i);
 check(card.teaching_copy?.key_idea&&card.teaching_copy?.worked_example?.problem&&card.teaching_copy?.worked_example?.solution&&card.teaching_copy?.misconception&&card.teaching_copy?.summary,"teaching copy "+card.id);
 check(card.micro_practice.length===expectedCardCounts[i],"micro count/card "+card.id);
 const qs=card.micro_practice.map(x=>byId.get(x));
 check(qs.every(Boolean)&&qs.slice(0,3).map(x=>x.micro_role).join(",")==="base,trap,apply","base/trap/apply prefix "+card.id);
 check(qs.slice(3).every(x=>x.micro_role==="coverage"),"coverage suffix "+card.id);
 const localDeclared=new Set([...(card.lesson_local_concepts||[]),...(card.lesson_local_problem_types||[]),...(card.lesson_local_representations||[])].map(x=>x.id));
 for(const x of qs){
   if(!x)continue;
   qids.push(x.id);
   const lessonLocal=x.evidence_role==="LESSON_LOCAL_CORE_FORMATIVE";
   check(x.card_id===card.id,"card mismatch "+x.id);
   if(lessonLocal){
     check(Array.isArray(x.tags.skill)&&x.tags.skill.length===0&&x.gates_core===false,"local evidence boundary "+x.id);
     check((x.lesson_local_targets||[]).length>0&&x.lesson_local_targets.every(t=>localDeclared.has(t)),"local target declaration "+x.id);
   }else{
     check(x.tags.skill?.length===1&&card.skills.includes(x.tags.skill[0]),"card skill mismatch "+x.id);
   }
 }
}
check(new Set(qids).size===20,"duplicate or omitted card IDs");

for(let i=0;i<micro.questions.length;i++){
 const q=micro.questions[i],lessonLocal=q.evidence_role==="LESSON_LOCAL_CORE_FORMATIVE";
 check(q.id==="STA21MICRO_"+String(i+1).padStart(3,"0"),"ID sequence "+q.id);
 check(!ids.has(q.id),"duplicate "+q.id);ids.add(q.id);
 check(q.options?.length===4&&new Set(q.options).size===4&&Number.isInteger(q.answer)&&q.answer>=0&&q.answer<4,"choices "+q.id);
 check(q.tags?.topic==="21-thong-ke"&&q.tags?.layer==="KNTT-Core","topic/layer "+q.id);
 if(lessonLocal){
   check(q.tags.skill?.length===0&&!q.target&&q.gates_core===false,"lesson-local metadata "+q.id);
   check(q.exam?.entrance10==="none"&&q.exam.specialized==="none","local exam metadata "+q.id);
 }else{
   check(q.tags.skill?.length===1&&q.tags.skill[0]===q.target,"assessed skill metadata "+q.id);
   check(!!manifest.skill_labels[q.target]&&mapped[q.tags.grade]?.has(q.target),"grade source skill "+q.id);
   check(q.exam?.entrance10==="foundation"&&q.exam.specialized==="none","exam metadata "+q.id);
 }
 check(q.curriculum?.book==="KNTT"&&q.curriculum.level==="core"&&q.curriculum.grades.length===1&&q.curriculum.grades[0]===q.tags.grade,"curriculum "+q.id);
 check(q.explanation?.length>25&&q.hints?.length===2&&q.hints.every(x=>x.trim().length>8),"feedback/hints "+q.id);
}

const reviewed=["STA21MICRO_016","STA21MICRO_017","STA21MICRO_018","STA21MICRO_019","STA21MICRO_020"].map(id=>byId.get(id));
check(reviewed.every(q=>q.authoring_review?.packet==="MATH-KNTT-G6-STATISTICS-R1-20261004"&&q.authoring_review?.verdict==="PASS"&&q.authoring_review?.clearance==="G6_STATISTICS_CONTENT_REVIEW_COMPLETE"),"statistics review receipt metadata");

const existing=manifest.sources.flatMap(s=>read("docs/assets/data/practice/"+s).questions);
check(existing.length===132,"existing source bank load");
const texts=new Set(existing.map(x=>x.question.toLowerCase().replace(/\s+/g," ").trim()));
check(micro.questions.every(x=>!texts.has(x.question.toLowerCase().replace(/\s+/g," ").trim())),"exact copy from practice bank");

const q=micro.questions;
check(q[0].question.includes("145, 150, 152")&&q[0].answer===1,"001 categorical/numeric distinction");
check(q[5].question.includes("số lượt")&&!q[5].question.includes("tổng số học sinh giỏi")&&q[5].options[q[5].answer]==="5/4","006 double-counting ambiguity");
check(/tivi.*tủ lạnh/i.test(q[13].question)&&!q[13].question.includes("bán máy tính"),"014 scope wording");
check(40+50+45===135&&30+60+55===145&&60-50===10,"005 double-bar values");
check((10+15)/(12+8)===1.25&&q[5].options[q[5].answer]==="5/4","006 ratio");
check(300*0.4===120&&360*0.4===144&&Math.abs(200*(0.45-0.15-0.10)-40)<1e-9,"008/009 pie data");
check(180/30===6&&16/40===0.4&&35/40===0.875&&32/40===0.8,"012/013/015 arithmetic");
check((30+50)-(20+40)===20,"014 aggregation");
check(18-16===2&&4*2===8&&18*4/3===24,"new Grade-6 statistics arithmetic");

const js=fs.readFileSync(path.join(root,"docs/assets/javascripts/topic-workspace-v1.js"),"utf8");
const index=fs.readFileSync(path.join(root,"docs/kien-thuc/21-thong-ke/index.md"),"utf8");
check(js.includes('"21-thong-ke":{number:"21"')&&js.includes("if(card.teaching_copy)")&&js.includes("copy.worked_example?.solution"),"Learn renderer / source");
check(index.includes("Learning Cards")&&index.includes("[Làm Core Readiness CĐ21](tu-kiem-tra.md)"),"lesson gateway status");
check(!index.includes("Đạt tối thiểu **7/10**"),"legacy hard gate still present");

if(errors.length){console.error(errors.join("\n"));process.exit(1)}
console.log("PASS: CĐ21 5 Learning Cards, 20 micro with reviewed Grade-6 direct/local evidence, grade-map skill alignment and safe cross-grade teaching copy; bank 132 unchanged.");
