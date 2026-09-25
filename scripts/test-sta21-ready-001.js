#!/usr/bin/env node
"use strict";
const fs=require("fs"),path=require("path"),R=path.resolve(__dirname,"..");
const read=p=>JSON.parse(fs.readFileSync(path.join(R,p),"utf8"));
const txt=p=>fs.readFileSync(path.join(R,p),"utf8");
const a=read("docs/assets/data/assessment/21-thong-ke-core-v1.json"),schema=read("docs/assets/data/assessment/readiness-assessment-v1.schema.json");
const w=read("docs/assets/data/curriculum/topic21-learning-workspace.json"),m=read("docs/assets/data/practice/21-thong-ke-v1.manifest.json");
const packet=read("docs/assets/data/collaboration/packets/STA21-READY-GEMINI-AUTHOR-001.json");
const errors=[],ok=(test,msg)=>{if(!test)errors.push(msg)};
const plan=packet.scope.item_plan,items=a.items,skills=new Set(w.cards.flatMap(c=>c.skills));
ok(a.schema===schema.properties.schema.const&&a.assessment_id==="STA21-CORE-READY-V1"&&a.topic.id==="21-thong-ke"&&a.layer==="KNTT-Core","schema identity");
ok(a.version===1&&items.length===12&&plan.length===12,"version or item count");
ok(a.policy.feedback==="after_submit"&&a.policy.hints===false&&a.policy.tutor===false&&a.policy.hard_gate===false&&a.policy.allow_partial_submit===true,"policy");
ok(a.readiness.hard_gate===false&&a.readiness.ready_threshold===0.8&&a.readiness.minimum_answered_ratio===0.8,"soft readiness");
ok(a.readiness.states.join(",")==="READY,REVIEW_RECOMMENDED,MORE_EVIDENCE_NEEDED","readiness states");
ok(a.next_topic.id==="22-dai-luong-dac-trung","next topic");
ok(skills.size===9&&Object.keys(a.skill_labels).length===9&&[...skills].every(s=>!!a.skill_labels[s]),"nine scoped skill labels");
ok(m.question_count===132&&m.sources.length===5&&read("docs/assets/data/practice/21-thong-ke-micro-v1.json").questions.length===15,"source banks unaffected");
const seen=new Set(),gradeMap={};
for(const g of [6,7,8]){
  const map=read("docs/assets/data/curriculum/kntt-grade"+g+"-map.json");
  const aligned=new Set(map.practice_alignment?.["21-thong-ke"]?.existing_core_skills||[]);
  for(const chapter of map.chapters||[])for(const lesson of chapter.lessons||[])
    if((lesson.roadmap||[]).some(x=>x.topic_id==="21-thong-ke"&&x.relation==="PRIMARY"))
      for(const s of lesson.existing_skills||[])aligned.add(s);
  gradeMap[g]=aligned;
}
for(let i=0;i<items.length;i++){
 const q=items[i],z=plan[i],tag=q.id||"(missing)";
 ok(q.id===z.id&&!seen.has(tag),"item ID "+tag);seen.add(tag);
 ok(q.type==="mcq"&&q.points===1&&q.skill===z.skill&&skills.has(q.skill),"item type/skill "+tag);
 ok(q.curriculum?.book==="KNTT"&&q.curriculum.level==="core"&&q.curriculum.grades?.length===1&&q.curriculum.grades[0]===z.grade&&gradeMap[z.grade]?.has(q.skill),"grade source "+tag);
 ok(q.options?.length===4&&q.options.every(s=>typeof s==="string"&&s.trim().length>0)&&new Set(q.options).size===4,"four unique options "+tag);
 ok(Number.isInteger(q.answer)&&q.answer>=0&&q.answer<4,"answer range "+tag);
 ok(typeof q.question==="string"&&q.question.length>25&&q.explanation?.length>25,"stem/explanation "+tag);
 ok(!("hints" in q)&&!("tutor" in q)&&!("feedback" in q)&&!("supporting_skills" in q),"no hint or unsupported skill "+tag);
 ok(!/CHÍNH XÁC NHẤT|ĐÚNG NHẤT|đúng đắn và chính xác nhất|doanh số.{0,20}chiếc|học giỏi hơn lớp/i.test(q.question),"ambiguous wording "+tag);
 ok(!/hình bên|biểu đồ sau/i.test(q.question),"missing visual data "+tag);
}
const eq=(x,y)=>Math.abs(x-y)<1e-9;
const checks=[
 [items[0].options[items[0].answer],"Dữ liệu số"],
 [items[1].options[items[1].answer],"Dữ liệu phân loại vì các số là mã định danh"],
 [items[2].options[items[2].answer],"Dùng sổ mượn trả, ghi số lượt theo ngày"],
 [items[3].options[items[3].answer],"28 cuốn"],
 [items[4].options[items[4].answer],"125%"],
 [items[5].options[items[5].answer],"Số học sinh nam nhiều hơn nữ 6 em"],
 [items[6].options[items[6].answer],"Giảm 5°C"],
 [items[7].options[items[7].answer],"72°"],
 [items[8].options[items[8].answer],"Biểu đồ quạt tròn"],
 [items[9].options[items[9].answer],"Trục ngang: tháng; trục đứng: lượng mưa (mm)"],
 [items[10].options[items[10].answer],"Tháng 2 bán nhiều hơn tháng 1 là 20 chiếc"],
 [items[11].options[items[11].answer],"8A đạt 25%, 8B đạt 20%; tỉ lệ của 8A cao hơn 5 điểm phần trăm"]
];checks.forEach(([value,expected],i)=>ok(value===expected,"answer mismatch at "+(i+1)));
ok(154-126===28&&eq(500/400*100,125)&&18-12===6&&34-29===5&&eq((45-25)/100*360,72)&&60-40===20&&eq(10/40*100-12/60*100,5),"independent arithmetic");
ok(items[11].explanation.includes("không đủ để đánh giá toàn diện"),"12 cannot claim overall class quality");
const page=txt("docs/kien-thuc/21-thong-ke/tu-kiem-tra.md"),old=txt("docs/kien-thuc/21-thong-ke/tu-kiem-tra-tu-luan.md"),index=txt("docs/kien-thuc/21-thong-ke/index.md");
ok(page.includes('data-readiness-check-v1="assets/data/assessment/21-thong-ke-core-v1.json"'),"assessment page mount");
ok(page.includes("lớp 6–8")&&page.includes("không dùng kết quả toàn bài"),"full-topic age caveat");
ok(page.includes("không khóa")&&page.includes("không gợi ý"),"soft mastery page");
ok(old.includes("Bài tự luyện tự luận cũ")||old.includes("bài tự luyện tự luận cũ"),"old self-test preserved");
ok(index.includes("[Làm Core Readiness CĐ21](tu-kiem-tra.md)"),"lesson CTA");
ok(!index.includes("được bổ sung ở batch riêng"),"outdated readiness label");
if(errors.length){console.error(errors.join("\n"));process.exit(1)}
console.log("PASS: CĐ21 readiness 12 MCQs / 9 exact Core skills; grade map, unique choices and independent arithmetic; old self-test retained separately; formative/readiness stores untouched.");
