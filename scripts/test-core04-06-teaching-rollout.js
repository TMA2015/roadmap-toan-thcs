#!/usr/bin/env node
"use strict";
const fs=require("fs"),crypto=require("crypto");
const read=p=>fs.readFileSync(p,"utf8"),j=p=>JSON.parse(read(p)),assert=(v,m)=>{if(!v)throw Error(m)};
const paths=[
 {num:"04",slug:"04-bieu-thuc-dai-so",workspace:"topic04-learning-workspace.json",bank:"04-bieu-thuc-dai-so-micro-v1.json",manifest:"04-bieu-thuc-dai-so-v2.manifest.json",bankSha:"356e048b57389c828fa06ddbf0eb80fc8fc47226",declared:11},
 {num:"05",slug:"05-7-hang-dang-thuc",workspace:"topic05-learning-workspace.json",bank:"05-7-hang-dang-thuc-micro-v1.json",manifest:"05-7-hang-dang-thuc-v1.manifest.json",bankSha:"5d98b632888d6064ecf592762b0479a56253e50f",declared:12},
 {num:"06",slug:"06-phan-tich-da-thuc",workspace:"topic06-learning-workspace.json",bank:"06-phan-tich-da-thuc-micro-v1.json",manifest:"06-phan-tich-da-thuc-v1.manifest.json",bankSha:"c591e6e6467f436287647bbbf33eef8634c74c97",declared:9}
];
const gitSha=s=>crypto.createHash("sha1").update(Buffer.concat([Buffer.from("blob "+Buffer.byteLength(s)+"\0"),Buffer.from(s)])).digest("hex");
const js=read("docs/assets/javascripts/topic-workspace-v1.js"),shell=read("docs/assets/javascripts/knowledge-ui-v1.js"),yaml=read("mkdocs.yml");
const auditPath="content-staging/reviews/MATH-CORE04-06-TEACH-SELF-AUDIT-20260929.md",audit=read(auditPath);
assert(audit.includes("SELF_AUDITED")&&audit.includes("not an independent")&&audit.includes("15"),"honest review provenance");
assert(js.includes("const hasStandaloneCore="),"four-topic Core opt-in exists");
assert(shell.includes("const standaloneCore = ["),"four-step navigation opt-in exists");
let totalCards=0,totalQuestions=0;
for(const t of paths){
 const wp="docs/assets/data/curriculum/"+t.workspace,bp="docs/assets/data/practice/"+t.bank,
  mp="docs/assets/data/practice/"+t.manifest,root="docs/kien-thuc/"+t.slug+"/";
 const w=j(wp),bank=j(bp),manifest=j(mp),lesson=read(root+"index.md"),page=read(root+"core/index.md");
 assert(gitSha(read(bp))===t.bankSha,"original published question bank changed "+t.slug);
 assert(bank.questions.length===15&&new Set(bank.questions.map(q=>q.id)).size===15,"15 stable micro IDs "+t.slug);
 assert(w.topic===t.slug&&w.cards.length===5,"five Core cards "+t.slug);
 assert(yaml.includes("Core theo chặng: kien-thuc/"+t.slug+"/core/index.md"),"nav entry "+t.slug);
 assert(page.includes('data-topic-core-entry="'+t.slug+'"')&&page.includes("không phải"),"real formative Core route "+t.slug);
 assert(js.includes('"'+t.slug+'"')&&shell.includes('"'+t.slug+'"'),"route enablement "+t.slug);
 const byId=new Map(bank.questions.map(q=>[q.id,q]));let covered=0,declared=0;
 for(const card of w.cards){
  const qs=card.micro_practice.map(id=>byId.get(id)),copy=card.teaching_copy;
  assert(qs.length===3&&qs.every(Boolean),"three preserved micro items "+card.id);
  assert(qs.map(q=>q.micro_role).join(",")==="base,trap,apply","micro role stability "+card.id);
  assert(qs.every(q=>q.card_id===card.id&&q.tags.skill.length===1),"one assessed skill "+card.id);
  assert(copy?.review_status==="SELF_AUDITED"&&copy.review_method==="SOURCE_LOCKED_BOUNDED_SELF_AUDIT"&&copy.academic_review_ref===auditPath,"review method must be transparent "+card.id);
  assert(copy.source_reference===root+"index.md"&&JSON.stringify(copy.source_question_ids)===JSON.stringify(card.micro_practice),"teaching references exact source/IDs "+card.id);
  for(const x of [...copy.source_sections])assert(lesson.includes(x),"source section absent "+card.id+" "+x);
  for(const value of [copy.key_idea,copy.worked_example.problem,copy.worked_example.solution,copy.misconception,copy.summary]){
   assert(typeof value==="string"&&value.trim().length>=15,"missing teaching field "+card.id);
   assert((value.match(/\\\(/g)||[]).length===(value.match(/\\\)/g)||[]).length,"unbalanced inline math "+card.id);
  }
  assert(!qs.some(q=>q.question===copy.worked_example.problem),"worked problem must not reveal exact current question "+card.id);
  const seen=new Set(qs.map(q=>q.tags.skill[0]));
  for(const id of card.skills){assert(manifest.skill_labels[id],"missing source skill label "+id);if(seen.has(id))covered++}
  declared+=card.skills.length;totalCards++;
 }
 assert(declared===t.declared&&covered===declared,"declared/assessed coverage "+t.slug);
 totalQuestions+=bank.questions.length;
}
assert(totalCards===15&&totalQuestions===45,"rollout is fifteen teaching cards and original 45 questions");
// Independent numeric oracles for worked examples. Do not rely on the authored solution text.
const eq=(a,b)=>Math.abs(a-b)<1e-8;
for(const x of [-4,-2,0,1,3])for(const y of [-2,0,1,5]){
 assert(eq(2*x**3-2*x**3+4*x*y-1,4*x*y-1),"CĐ04 card1");
 assert(eq(4*x*x*y-3*x*y*y-x*x*y+2*x*y*y,3*x*x*y-x*y*y),"CĐ04 card2");
 assert(eq((3*x*x-2*x+4)-(x*x+x-5),2*x*x-3*x+9),"CĐ04 card3");
 assert(eq((2*x-1)*(x+4),2*x*x+7*x-4),"CĐ04 card4");
 if(x!==0)assert(eq((9*x**3-6*x*x+3*x)/(3*x),3*x*x-2*x+1),"CĐ04 card5");
 assert(eq((2*x+3)**2+(x-2)**2,5*x*x+8*x+13),"CĐ05 card1");
 assert(eq(9*x*x-16*y*y,(3*x-4*y)*(3*x+4*y)),"CĐ05 card2");
 assert(eq((2*x-1)**3,8*x**3-12*x*x+6*x-1),"CĐ05 card3");
 assert(eq(8*x**3+125,(2*x+5)*(4*x*x-10*x+25)),"CĐ05 card4");
 assert(eq((x+3)**2-(x-3)**2,12*x),"CĐ05 card5");
 assert(eq(6*x*(x-3)+9*(3-x),3*(x-3)*(2*x-3)),"CĐ06 card1");
 assert(eq(x**3+27,(x+3)*(x*x-3*x+9)),"CĐ06 card2");
 assert(eq(2*x*y+2*x+3*y*x+3*y,(2*x+3*y)*(y+1)),"CĐ06 card3 sampled with a=x,b=y,x=y,y=1");
 assert(eq(x**3+2*x*x-9*x-18,(x+2)*(x-3)*(x+3)),"CĐ06 card4");
 assert(eq((x-4)*(x+1),x*x-3*x-4),"CĐ06 card5");
}
console.log("PASS: 15 source-linked self-audited teaching copies, 45 original questions unchanged, 32/32 declared skill-card mappings and numeric examples.");
