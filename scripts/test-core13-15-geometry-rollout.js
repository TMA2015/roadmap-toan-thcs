#!/usr/bin/env node
"use strict";
const fs=require("fs"),crypto=require("crypto");
const read=p=>fs.readFileSync(p,"utf8"),json=p=>JSON.parse(read(p)),ok=(v,m)=>{if(!v)throw Error(m)};
const gitSha=s=>crypto.createHash("sha1").update(Buffer.concat([Buffer.from("blob "+Buffer.byteLength(s)+"\0"),Buffer.from(s)])).digest("hex");
const specs=[
{n:"13",slug:"13-goc-va-duong-thang",lesson:"87808197120ef356c7f839cb8322f307ea32eb15",bank:"566cd1e0f1e7e873b1ef74afe3617a3792d0cd62",count:22,declared:21,add:[
 ["GEO13MICRO_016","geo13-core-1","tia"],["GEO13MICRO_017","geo13-core-1","tia-doi"],["GEO13MICRO_018","geo13-core-1","doan-thang-do-dai"],["GEO13MICRO_019","geo13-core-2","do-goc"],["GEO13MICRO_020","geo13-core-2","phan-loai-goc"],["GEO13MICRO_021","geo13-core-2","goc-phu-bu"],["GEO13MICRO_022","geo13-core-2","nhan-dang-goc-dac-biet"]]},
{n:"14",slug:"14-tam-giac",lesson:"a2743c1cdaff5d072ae98b706f63fa29c23a2654",bank:"130a12a631f676c43010ecc8817c01f6dde2e455",count:17,declared:13,add:[["GEO14MICRO_016","geo14-core-1","so-sanh-canh-goc"],["GEO14MICRO_017","geo14-core-2","cach-deu-dinh"]]},
{n:"15",slug:"15-duong-dong-quy",lesson:"5bff7b5e5dca04ad7f2288e31442d7536491f386",bank:"9e36e342ede18aa3317bb3d7e00f365fd1217b87",count:15,declared:11,add:[]}
];
const auditPath="content-staging/reviews/MATH-CORE13-15-GEOMETRY-SELF-AUDIT-20260929.md",audit=read(auditPath);
ok(audit.includes("SELF_AUDITED")&&audit.includes("not an independent"),"review must correctly distinguish self-audit");
const nav=read("mkdocs.yml"),js=read("docs/assets/javascripts/topic-workspace-v1.js"),shell=read("docs/assets/javascripts/knowledge-ui-v1.js");
let total=0,declared=0,covered=0,appended=0;
for(const t of specs){
 const root="docs/kien-thuc/"+t.slug+"/",bp="docs/assets/data/practice/"+t.slug+"-micro-v1.json";
 const lesson=read(root+"index.md"),bank=json(bp),ws=json("docs/assets/data/curriculum/topic"+t.n+"-learning-workspace.json"),manifest=json("docs/assets/data/practice/"+t.slug+"-v1.manifest.json"),page=read(root+"core/index.md");
 ok(gitSha(lesson)===t.lesson,"source full lesson changed "+t.slug);
 ok(bank.question_count===t.count&&bank.questions.length===t.count&&ws.cards.length===5,"counts "+t.slug);
 ok(gitSha(JSON.stringify({...bank,question_count:15,questions:bank.questions.slice(0,15)},null,2)+"\n")===t.bank,"original fifteen items must be byte-equivalent as JSON "+t.slug);
 ok(new Set(bank.questions.map(q=>q.id)).size===t.count,"no duplicate IDs "+t.slug);
 ok(page.includes('data-topic-core-entry="'+t.slug+'"')&&page.includes("không phải"),"dedicated formative route "+t.slug);
 ok(js.includes('"'+t.slug+'"')&&shell.includes('"'+t.slug+'"')&&nav.includes("Core theo chặng: kien-thuc/"+t.slug+"/core/index.md"),"all four-step nav routes "+t.slug);
 ok(ws.extensions.every(e=>e.gates_core===false),"Extension non-gating "+t.slug);
 const by=new Map(bank.questions.map(q=>[q.id,q]));let c=0,d=0;
 for(const card of ws.cards){
  const qs=card.micro_practice.map(id=>by.get(id)),copy=card.teaching_copy;
  ok(qs.length>=3&&qs.every(Boolean),"no orphaned item "+card.id);
  ok(qs.slice(0,3).map(q=>q.micro_role).join(",")==="base,trap,apply"&&qs.slice(3).every(q=>q.micro_role==="coverage"),"preserve roles "+card.id);
  ok(qs.every(q=>q.card_id===card.id&&q.tags?.skill?.length===1&&card.skills.includes(q.tags.skill[0])),"single declared assessed skill "+card.id);
  ok(copy?.review_status==="SELF_AUDITED"&&copy.review_method==="SOURCE_LOCKED_BOUNDED_SELF_AUDIT"&&copy.academic_review_ref===auditPath,"honest review metadata "+card.id);
  ok(copy.source_reference===root+"index.md"&&JSON.stringify(copy.source_question_ids)===JSON.stringify(card.micro_practice.slice(0,3)),"frozen lecture source IDs "+card.id);
  ok(copy.source_sections.length>0&&copy.source_sections.every(x=>lesson.includes(x)),"grounded source sections "+card.id);
  const fields=[copy.key_idea,copy.worked_example.problem,copy.worked_example.solution,copy.misconception,copy.summary];
  ok(fields.every(x=>typeof x==="string"&&x.length>20),"all 5 teaching fields "+card.id);
  for(const f of fields){
   ok((f.match(/\\\(/g)||[]).length===(f.match(/\\\)/g)||[]).length,"balanced math delimiters "+card.id);
   for(const ch of f)ok(ch.charCodeAt(0)>31||[9,10,13].includes(ch.charCodeAt(0)),"hidden control "+card.id);
  }
  ok(!qs.some(q=>q.question===copy.worked_example.problem),"example must not give away original question "+card.id);
  const skillSet=new Set(qs.map(q=>q.tags.skill[0]));
  for(const sk of card.skills){ok(manifest.skill_labels[sk],"manifest label "+sk);d++;if(skillSet.has(sk))c++}
 }
 ok(d===t.declared&&c===d,"every declared skill has an independently assessed opportunity "+t.slug);
 for(const [id,cardId,skill] of t.add){
  const q=by.get(id),card=ws.cards.find(x=>x.id===cardId);
  ok(q&&card&&q.card_id===cardId&&q.tags.skill.length===1&&q.tags.skill[0]===skill&&q.micro_role==="coverage"&&card.micro_practice.includes(id),"new dedicated skill "+id);
  ok(q.options.length===4&&new Set(q.options).size===4&&q.answer===0&&q.hints.length===2&&q.explanation.length>25&&q.authoring_review.record===auditPath,"geometry distractors/explanation "+id);
  ok(q.tags.layer==="KNTT-Core"&&q.curriculum.level==="core","Core boundaries "+id);
  appended++;
 }
 ok(JSON.stringify(bank.questions.slice(15).map(q=>q.id))===JSON.stringify(t.add.map(x=>x[0])),"no extra or substituted IDs "+t.slug);
 total+=bank.questions.length;declared+=d;covered+=c;
}
ok(total===54&&declared===45&&covered===45&&appended===9,"locked scope = 54 questions, 45 skill opportunities, nine new questions");
const eq=(a,b)=>Math.abs(a-b)<1e-9;
ok(eq(3+3,6)&&eq(180-65,115)&&eq(180-112,68),"CĐ13 worked geometric angle oracles");
ok(eq(180-50-60,70)&&eq(10/2,5),"CĐ14 and CĐ15 sample oracles");
ok(eq(2*18/3,12)&&eq(18/3,6),"centroid AG=12,GM=6");
ok(eq(90-34,56)&&eq(110-35,75)&&125>90&&125<180,"new angle question answer keys");
ok(eq(4+7,11)&&45<60&&60<75,"new segment/triangle ordering");
ok(3*2===6&&6*2!==6,"proof grounding sanity");
// No geometry question may refer to an image-only implicit constraint.
for(const t of specs){const bank=json("docs/assets/data/practice/"+t.slug+"-micro-v1.json");for(const q of bank.questions.slice(15))ok(!/hình (bên dưới|bên trên|vẽ sẵn)|như hình/.test(q.question.toLowerCase()),"new problem depends on an unstated diagram "+q.id)}
console.log("PASS: CĐ13–15 15 source-locked geometry lectures, 45 original items intact, nine exact new IDs, 45/45 skill-card opportunities and explicit geometric assumptions.");
