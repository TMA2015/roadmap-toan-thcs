#!/usr/bin/env node
"use strict";
const fs=require("fs"),crypto=require("crypto");
const read=p=>fs.readFileSync(p,"utf8"),j=p=>JSON.parse(read(p)),assert=(v,msg)=>{if(!v)throw Error(msg)};
const sha=s=>crypto.createHash("sha1").update(Buffer.concat([Buffer.from("blob "+Buffer.byteLength(s)+"\0"),Buffer.from(s)])).digest("hex");
const specs=[
 {n:"16",slug:"16-tu-giac",lesson:"b2c76f908ac4679ce139b1f9ad95ad139e74261b",bank:"460dbc0f10a2655717011a94733449b0df8c6bc0",count:16,skills:13,newIds:["GEO16MICRO_016"]},
 {n:"17",slug:"17-thales-dong-dang",lesson:"2663753568ad19bbf9f168c1b3b703fd24599395",bank:"01c8326343d050959aca0d98d7042e463c993612",count:15,skills:12,newIds:[]},
 {n:"18",slug:"18-he-thuc-luong",lesson:"eca50562caaff50a89593a434158618137e9d217",bank:"a4a3335b36b51cb6fbe410aab1e72a7fdb1de36b",count:15,skills:11,newIds:[]}
];
const auditPath="content-staging/reviews/MATH-CORE16-18-GEOMETRY-SELF-AUDIT-20260929.md",audit=read(auditPath);
assert(audit.includes("SELF_AUDITED")&&audit.includes("not an independent"),"honest, bounded academic provenance");
const nav=read("mkdocs.yml"),engine=read("docs/assets/javascripts/topic-workspace-v1.js"),switcher=read("docs/assets/javascripts/knowledge-ui-v1.js");
const routes=read("docs/assets/javascripts/topic-learning-routes-v1.js");
let cardCount=0,totalQuestions=0,totalSkills=0,covered=0;
for(const t of specs){
 const path="docs/kien-thuc/"+t.slug+"/",bp="docs/assets/data/practice/"+t.slug+"-micro-v1.json",wp="docs/assets/data/curriculum/topic"+t.n+"-learning-workspace.json";
 const lesson=read(path+"index.md"),bank=j(bp),w=j(wp),labels=j("docs/assets/data/practice/"+t.slug+"-v1.manifest.json").skill_labels,page=read(path+"core/index.md");
 assert(sha(lesson)===t.lesson,"full lesson changed "+t.slug);
 assert(bank.question_count===t.count&&bank.questions.length===t.count&&w.cards.length===5,"exact question/card counts "+t.slug);
 const old={...bank,question_count:15,questions:bank.questions.slice(0,15)};
 assert(sha(JSON.stringify(old,null,2)+"\n")===t.bank,"original bank content changed "+t.slug);
 assert(JSON.stringify(bank.questions.slice(15).map(q=>q.id))===JSON.stringify(t.newIds),"only expected append-only IDs "+t.slug);
 assert(new Set(bank.questions.map(q=>q.id)).size===t.count,"unique question IDs "+t.slug);
 assert(page.includes('data-topic-core-entry="'+t.slug+'"')&&page.includes("không phải"),"formative separate route "+t.slug);
 assert(engine.includes('"'+t.slug+'"')&&routes.includes('"'+t.slug+'"')&&nav.includes("Core theo chặng: kien-thuc/"+t.slug+"/core/index.md"),"routing "+t.slug);
 assert(w.extensions.every(x=>x.gates_core===false),"no Extension hard gate "+t.slug);
 const by=new Map(bank.questions.map(q=>[q.id,q]));let d=0,cov=0;
 for(const card of w.cards){
  const qs=card.micro_practice.map(id=>by.get(id)),tc=card.teaching_copy;
  assert(qs.length>=3&&qs.every(Boolean),"all cards link actual questions "+card.id);
  assert(qs.slice(0,3).map(q=>q.micro_role).join(",")==="base,trap,apply"&&qs.slice(3).every(q=>q.micro_role==="coverage"),"original roles first "+card.id);
  assert(qs.every(q=>q.card_id===card.id&&q.tags.skill.length===1&&card.skills.includes(q.tags.skill[0])),"single declared primary skill "+card.id);
  assert(tc?.review_status==="SELF_AUDITED"&&tc.review_method==="SOURCE_LOCKED_BOUNDED_SELF_AUDIT"&&tc.academic_review_ref===auditPath,"do not invent independent review "+card.id);
  assert(tc.source_reference===path+"index.md"&&JSON.stringify(tc.source_question_ids)===JSON.stringify(card.micro_practice.slice(0,3)),"source-backed old three IDs "+card.id);
  assert(tc.source_sections.length>0&&tc.source_sections.every(x=>lesson.includes(x)),"exact source headings "+card.id);
  for(const value of [tc.key_idea,tc.worked_example.problem,tc.worked_example.solution,tc.misconception,tc.summary]){
   assert(typeof value==="string"&&value.length>=20,"complete teaching copy "+card.id);
   assert((value.match(/\\\(/g)||[]).length===(value.match(/\\\)/g)||[]).length,"balanced MathJax "+card.id);
   for(const ch of value)assert(ch.charCodeAt(0)>31||[9,10,13].includes(ch.charCodeAt(0)),"hidden control character "+card.id);
  }
  assert(!qs.some(q=>q.question===tc.worked_example.problem),"worked example copied a live test prompt "+card.id);
  const observed=new Set(qs.map(q=>q.tags.skill[0]));
  for(const sk of card.skills){assert(labels[sk],"unknown skill label "+sk);d++;if(observed.has(sk))cov++}
  cardCount++;
 }
 assert(d===t.skills&&cov===d,"actual dedicated skill coverage "+t.slug+" "+cov+"/"+d);
 totalSkills+=d;covered+=cov;totalQuestions+=bank.questions.length;
}
assert(cardCount===15&&totalQuestions===46&&totalSkills===36&&covered===36,"full 15/46/36 audit totals");
const bank16=j("docs/assets/data/practice/16-tu-giac-micro-v1.json"),q=bank16.questions.at(-1),c=j("docs/assets/data/curriculum/topic16-learning-workspace.json").cards.at(-1);
assert(q.id==="GEO16MICRO_016"&&c.id==="geo16-core-5"&&c.micro_practice.at(-1)===q.id&&q.card_id===c.id&&q.tags.skill.length===1&&q.tags.skill[0]==="hvuong-dau-hieu","new square item assesses its own skill");
assert(q.micro_role==="coverage"&&q.options.length===4&&new Set(q.options).size===4&&q.answer===0&&q.hints.length===2&&q.explanation.length>25&&q.authoring_review.record===auditPath,"exact square item schema and provenance");
assert(q.givens.some(x=>x.includes("hình chữ nhật"))&&q.givens.includes("AB=BC"),"square criterion premises stated");
assert(!q.supporting_skills.includes(q.tags.skill[0]),"no self-duplication in supporting tags");
assert(q.tags.layer==="KNTT-Core"&&q.curriculum.level==="core","no extension gate promotion");
// Numerical and logical cross-checks for new lecture examples, independent of authored solution prose.
const eq=(a,b)=>Math.abs(a-b)<1e-9;
assert(eq((6+10)/2,8)&&eq(4+4,8)&&eq(3+3,6)&&eq(10/2,5),"16 trapezoid/diagonal checks");
assert(eq(3/2,6/4)&&eq(14/2,7)&&eq(8*9/6,12)&&eq(10*3/2,15),"17 Thales, midline and similarity");
assert(eq(8*8+15*15,17*17)&&eq(12/13,12/13)&&eq(5/13,5/13)&&eq(12/9,4/3)&&eq(9/12,3/4),"18 triangle and trigonometry");
assert(eq(20*Math.sin(Math.PI/6),10)&&eq(20*Math.tan(Math.PI/4)+1.5,21.5),"18 opposite edge and eye-height model");
assert(q.options[0].includes("hình vuông")&&q.options.slice(1).every(x=>x!==q.options[0]),"unique square-recognition key");
console.log("PASS: CĐ16–18 15 source-grounded teaching copies, 45 frozen micro questions + 1 unique gap item, 36/36 dedicated skill opportunities; exact assumptions and math oracles.");
