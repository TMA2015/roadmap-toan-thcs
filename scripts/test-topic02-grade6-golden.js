#!/usr/bin/env node
"use strict";
const fs=require("fs");
const path=require("path");
const root=path.resolve(__dirname,"..");
const read=p=>fs.readFileSync(path.join(root,p),"utf8");
const json=p=>JSON.parse(read(p));
const ok=(condition,message)=>{if(!condition)throw new Error("Topic02 Grade6: "+message)};
const slug="02-so-va-phep-tinh";
const workspace=json("docs/assets/data/curriculum/topic02-learning-workspace.json");
const bank=json("docs/assets/data/practice/02-so-va-phep-tinh-micro-v1.json");
const assessment=json("docs/assets/data/assessment/02-so-va-phep-tinh-core-v1.json");
const mapping=json("docs/assets/data/curriculum/kntt-grade6-map.json");
const older=json("docs/assets/data/practice/02-so-va-phep-tinh-v1.manifest.json");
const lesson=read("docs/kien-thuc/"+slug+"/index.md"),practice=read("docs/kien-thuc/"+slug+"/bai-tap.md"),check=read("docs/kien-thuc/"+slug+"/tu-kiem-tra.md"),classhub=read("docs/hoc-theo-lop/index.md"),runtime=read("docs/assets/javascripts/topic-workspace-v1.js");
ok(workspace.topic===slug && workspace.core_progress_policy.layer==="KNTT-Core" && workspace.cards.length===5,"source-mapped five-card Core pilot");
ok(bank.questions.length===15 && bank.question_count===15 && assessment.items.length===10,"15 micro and 10 readiness items");
ok(assessment.topic.id===slug && assessment.layer==="KNTT-Core" && assessment.assessment_id==="NUM02-G6-CORE-READY-V1","assessment identity and layer");
ok(assessment.policy.hints===false && assessment.policy.tutor===false && assessment.policy.feedback==="after_submit" && assessment.policy.hard_gate===false && assessment.readiness.hard_gate===false,"independent soft readiness");
ok(assessment.readiness.ready_threshold===0.8 && assessment.readiness.minimum_answered_ratio===0.8,"readiness policy");
ok(older.bank_id==="NUM02-V1" && older.question_count===120,"legacy IDs, 120-item bank preserved");
ok(workspace.grade_scope.length===1&&workspace.grade_scope[0]===6,"workspace scope grade 6");
const mapSkills=new Set(mapping.chapters.flatMap(c=>c.lessons).filter(l=>l.roadmap.some(t=>t.topic_id===slug)).flatMap(l=>l.skills));
ok(mapSkills.has("tap-hop") && mapSkills.has("so-thap-phan") && mapSkills.has("so-nguyen-truc-so"),"grade6 mapping was consulted");
const byId=new Map(bank.questions.map(q=>[q.id,q])),seen=new Set(),assessed=new Set();
const microAnswers=["7","24","20","423","29","12","5","12","3 °C","3/4","1/4","5/6","0,85","50","108 000 đồng"];
for (const [i,card] of workspace.cards.entries()){
 ok(card.layer==="KNTT-Core" && JSON.stringify(card.grades)==="[6]" && card.micro_practice.length===3,"card scope and three checks "+card.id);
 ok(card.kntt_lessons.length && card.kntt_lessons.every(x=>x.includes("Lớp 6")),"explicit class label "+card.id);
 ok(card.teaching_copy?.key_idea && card.teaching_copy?.worked_example?.solution && card.teaching_copy?.misconception,"explanation "+card.id);
 for (const [j,id] of card.micro_practice.entries()){
  const q=byId.get(id);ok(q && !seen.has(id),"unique referenced micro "+id);seen.add(id);
  ok(q.card_id===card.id && q.micro_role===["base","trap","apply"][j],"role / card mapping "+id);
  ok(q.tags.layer==="KNTT-Core" && q.tags.grade===6 && JSON.stringify(q.curriculum.grades)==="[6]","micro class scope "+id);
  ok(q.tags.skill.length===1 && card.skills.includes(q.tags.skill[0]),"one assessed skill "+id);
  ok(q.options.length===4 && new Set(q.options).size===4 && q.options[q.answer]===microAnswers[i*3+j],"micro answer / distractor "+id);
  ok(q.hints.length>=2 && q.explanation,"two-level hints and explanation "+id);
 }
}
ok(seen.size===15,"every micro is attached to exactly one card");
const readinessAnswers=["0","−2","315","31","−8","6","7/10","1/2","0,85","340 000 đồng"];
for (const [i,q] of assessment.items.entries()){
 ok(!assessed.has(q.id),"unique readiness ID "+q.id);assessed.add(q.id);
 ok(q.type==="mcq" && q.points===1 && assessment.skill_labels[q.skill] && JSON.stringify(q.curriculum.grades)==="[6]","grade6 single-skill readiness "+q.id);
 ok(q.options.length===4 && new Set(q.options).size===4 && q.options[q.answer]===readinessAnswers[i],"readiness answer "+q.id);
 ok(q.explanation,"post-submit explanation "+q.id);
}
ok(lesson.includes("## 📝 8. Luyện tập tiếp theo") && lesson.includes("Core Readiness lớp 6") && !lesson.includes("### Mini quiz"),"lesson gateways and no duplicate static quiz");
ok(practice.includes("Luyện tự luận & trình bày") && practice.includes('??? example "Xem lời giải"') && practice.includes('??? example "Xem đáp án nhanh'),"written practice has hidden solutions");
ok(check.includes('data-readiness-check-v1="assets/data/assessment/02-so-va-phep-tinh-core-v1.json"') && !check.includes("# Đáp án và hướng dẫn chấm"),"live independent assessment");
ok(/tự luận/i.test(read("docs/kien-thuc/02-so-va-phep-tinh/tu-kiem-tra-tu-luan.md")),"legacy written check preserved");
const panel=classhub.split('data-grade-panel="6"')[1].split('data-grade-panel="7"')[0];
ok((panel.match(/02-so-va-phep-tinh\/#core-journey/g)||[]).length>=5,"grade6 class hub opens the learning cards");
ok(runtime.includes('"02-so-va-phep-tinh":{') && runtime.includes("topic02-learning-workspace.json"),"runtime supports topic02");
console.log("PASS: Topic02 grade6 golden pilot: 5 cards, 15 micro, 10 readiness, source/skill scope, routes, legacy bank and answer-key regression.");
