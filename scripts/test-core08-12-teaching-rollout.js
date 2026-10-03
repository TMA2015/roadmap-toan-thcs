#!/usr/bin/env node
"use strict";
const fs=require("fs"),crypto=require("crypto"),assert=(v,m)=>{if(!v)throw Error(m)};
const read=p=>fs.readFileSync(p,"utf8"),json=p=>JSON.parse(read(p));
const gitSha=s=>crypto.createHash("sha1").update(Buffer.concat([Buffer.from("blob "+Buffer.byteLength(s)+"\0"),Buffer.from(s)])).digest("hex");
const specs=[
{n:"08",slug:"08-phuong-trinh-bat-phuong-trinh",b:"6b226a417d0bb2d6498b74d9206b85c942499a54",lesson:"15efa3e8f772c7648bf0ea2d734110c6bbc83d31",manifest:"08-phuong-trinh-bat-phuong-trinh-v1.manifest.json",count:16,declared:14,additional:[["EQ08MICRO_016","eq08-core-2","khu-mau-phuong-trinh"]]},
{n:"09",slug:"09-he-phuong-trinh",b:"39b7154b7da71b818a367fdfe1d869caaa1bbfbd",lesson:"c4f1c3d5ce291b80c2ba99a17019fd5ab655e401",manifest:"09-he-phuong-trinh-v1.manifest.json",count:17,declared:14,additional:[["SYS09MICRO_016","sys09-core-1","so-nghiem-he"],["SYS09MICRO_017","sys09-core-5","nang-suat-he"]]},
{n:"10",slug:"10-ham-so-do-thi",b:"5ed48b26af58f0104d18b2a1d04210773fb38434",lesson:"bbba2357371803f641410ad8b5cf61980d7c3081",manifest:"10-ham-so-do-thi-v1.manifest.json",count:15,declared:13,additional:[]},
{n:"11",slug:"11-can-thuc",b:"daa537d24635cb525f04b3b809022f40e2821dc9",lesson:"244f6f4267614cb3624a34928507431e3c8e5383",manifest:"11-can-thuc-v1.manifest.json",count:16,declared:12,additional:[["RAD11MICRO_016","rad11-core-4","truc-can-mau-don"]]},
{n:"12",slug:"12-phuong-trinh-bac-hai-viete",b:"925a9e487fd15803ba462a9639aff2c0973f3267",lesson:"93e05718230c48900129a5042e0537aeb8e3c398",manifest:"12-phuong-trinh-bac-hai-viete-v1.manifest.json",count:15,declared:10,additional:[]}
];
const js=read("docs/assets/javascripts/topic-workspace-v1.js"),shell=read("docs/assets/javascripts/knowledge-ui-v1.js"),yaml=read("mkdocs.yml"),auditPath="content-staging/reviews/MATH-CORE08-12-TEACH-SELF-AUDIT-20260929.md",audit=read(auditPath);
const routes=read("docs/assets/javascripts/topic-learning-routes-v1.js");
assert(audit.includes("SELF_AUDITED")&&audit.includes("not an independent")&&audit.includes("75"),"transparent bounded audit");
const expectedRoutes=specs.map(x=>x.slug);
for(const slug of expectedRoutes)assert(js.includes('"'+slug+'"')&&routes.includes('"'+slug+'"')&&yaml.includes("Core theo chặng: kien-thuc/"+slug+"/core/index.md"),"route "+slug);
let cards=0,questions=0,declared=0,covered=0,addition=0;
for(const t of specs){
 const root="docs/kien-thuc/"+t.slug+"/",bp="docs/assets/data/practice/"+t.slug+"-micro-v1.json",wp="docs/assets/data/curriculum/topic"+t.n+"-learning-workspace.json",p=read(bp),bank=JSON.parse(p),w=json(wp),lesson=read(root+"index.md"),page=read(root+"core/index.md"),labels=json("docs/assets/data/practice/"+t.manifest).skill_labels;
 assert(gitSha(lesson)===t.lesson,"source lesson changed "+t.slug);
 assert(bank.questions?.length===t.count&&bank.question_count===t.count&&w.cards?.length===5,"exact count "+t.slug);
 const reconstructed={...bank,question_count:15,questions:bank.questions.slice(0,15)};
 assert(gitSha(JSON.stringify(reconstructed,null,2)+"\n")===t.b,"original 15 question objects MUST be unchanged "+t.slug);
 assert(new Set(bank.questions.map(q=>q.id)).size===t.count,"IDs must be unique "+t.slug);
 assert(w.topic===t.slug&&w.micro_practice_bank==="assets/data/practice/"+t.slug+"-micro-v1.json","bank mapping "+t.slug);
 assert(page.includes('data-topic-core-entry="'+t.slug+'"')&&page.includes("không phải"),"formative Core route "+t.slug);
 assert(w.extensions.every(x=>x.gates_core===false),"Extension cannot gate "+t.slug);
 const byId=new Map(bank.questions.map(q=>[q.id,q]));
 let d=0,cov=0;
 for(const card of w.cards){
  const original=card.micro_practice.slice(0,3),qs=card.micro_practice.map(id=>byId.get(id)),copy=card.teaching_copy;
  assert(qs.length>=3&&qs.every(Boolean),"linked micro records "+card.id);
  assert(qs.slice(0,3).map(q=>q.micro_role).join(",")==="base,trap,apply"&&qs.slice(3).every(q=>q.micro_role==="coverage"),"original roles preserved "+card.id);
  assert(qs.every(q=>q.card_id===card.id&&q.tags?.skill?.length===1&&card.skills.includes(q.tags.skill[0])),"each item single declared primary skill "+card.id);
  assert(copy?.review_status==="SELF_AUDITED"&&copy.review_method==="SOURCE_LOCKED_BOUNDED_SELF_AUDIT"&&copy.academic_review_ref===auditPath,"accurate self-audit metadata "+card.id);
  assert(copy.source_reference===root+"index.md"&&JSON.stringify(copy.source_question_ids)===JSON.stringify(original),"lecture source question provenance "+card.id);
  assert(copy.source_sections.length>0&&copy.source_sections.every(s=>lesson.includes(s)),"actual source headings "+card.id);
  for(const v of [copy.key_idea,copy.worked_example?.problem,copy.worked_example?.solution,copy.misconception,copy.summary]){
    assert(typeof v==="string"&&v.trim().length>=20,"complete lecture section "+card.id);
    assert((v.match(/\\\(/g)||[]).length===(v.match(/\\\)/g)||[]).length,"balanced inline MathJax "+card.id);
    for(const ch of v)assert(ch.charCodeAt(0)>31||[9,10,13].includes(ch.charCodeAt(0)),"no hidden control chars "+card.id);
  }
  assert(!qs.some(q=>q.question===copy.worked_example.problem),"lecture example cannot be exact current question "+card.id);
  const assessed=new Set(qs.map(q=>q.tags.skill[0]));
  for(const skill of card.skills){assert(labels[skill],"manifest label for "+skill);d++;if(assessed.has(skill))cov++}
  cards++;
 }
 assert(d===t.declared&&cov===d,"dedicated formative coverage "+t.slug+" "+cov+"/"+d);
 if(t.n==="09"){
  const c=w.cards.find(c=>c.id==="sys09-core-4"),q=byId.get("SYS09MICRO_012");
  assert(c.skills.includes("so-nghiem-he")&&q.card_id===c.id&&q.tags.skill[0]==="so-nghiem-he","original Core4 question accurately declared, without mutating question");
 }
 for(const [id,cardId,skill] of t.additional){
  const q=byId.get(id),card=w.cards.find(c=>c.id===cardId);
  assert(q&&card&&q.micro_role==="coverage"&&card.micro_practice.at(-1)===id&&q.card_id===cardId&&q.tags.skill.length===1&&q.tags.skill[0]===skill,"targeted new item "+id);
  assert(q.tags.layer==="KNTT-Core"&&q.curriculum.level==="core"&&q.options?.length===4&&new Set(q.options).size===4&&q.answer===0&&q.hints?.length===2&&q.explanation&&q.authoring_review?.record===auditPath,"item structure "+id);
  assert(!(q.supporting_skills||[]).includes(skill),"supporting skills cannot repeat assessed skill "+id);
  addition++;
 }
 assert(JSON.stringify(bank.questions.slice(15).map(q=>q.id))===JSON.stringify(t.additional.map(x=>x[0])),"no unexpected new IDs "+t.slug);
 questions+=t.count;declared+=d;covered+=cov;
}
assert(cards===25&&questions===79&&addition===4&&declared===63&&covered===63,"full batch source-locked totals");
const eq=(a,b)=>Number.isFinite(a)&&Number.isFinite(b)&&Math.abs(a-b)<1e-9;
for(const x of [-5,-3,-2,-1,0,1,2,3,5,6,8]){
 assert(eq(2*(x+1)+3-(3*x-1),6-x),"08/1 linear reduction");
 if(x!==2)assert(eq((x*x-4)/(x-2),x+2),"08/2 quotient domain");
 assert(((-4*x+5<=13)===(x>=-2))&&((-3*x+2>=8)===(x<=-2)),"08/3-4 inequality direction");
 assert(eq((2*x-1)*(x+4),2*x*x+7*x-4),"reference distributive check");
 assert(eq((x-4)*(x+1),x*x-3*x-4),"reference factor check");
 assert(eq(-(-2)+4,6),"10/1 negative input");
 assert(eq((-3*x+6),(-3)*x+6),"10/3 slope intercept");
 assert(eq(-2*x*x,-2*(-x)*(-x)),"10/5 even symmetry");
 if(x>=2)assert(eq(Math.sqrt((x-5)**2)+Math.sqrt(3*x-6),Math.abs(x-5)+Math.sqrt(3*x-6)),"11/1 radical");
 assert(eq(Math.cbrt((x-1)**3),x-1),"11/5 cube root");
 assert(eq(2*x*(x-1)-(5-x),2*x*x-x-5),"12/1 normalized equation");
 assert(eq(2*x*x-4*x+2,2*(x-1)**2),"12/2 double root");
 assert(eq(x*x-4*x-5,(x-5)*(x+1)),"12/3 roots");
 assert(eq(2*x*x-7*x+3,(2*x-1)*(x-3)),"12/4 factor");
 assert(eq(x*x-3*x-10,(x+2)*(x-5)),"12/5 Vieta");
}
const systems=[
{a:(x,y)=>x+y===4&&2*x-y===5,x:3,y:1},
{a:(x,y)=>x+y===7&&2*x-y===2,x:3,y:4},
{a:(x,y)=>2*x+3*y===12&&4*x-3*y===6,x:3,y:2},
{a:(x,y)=>y===3*x-1&&x+y===7,x:2,y:5},
{a:(x,y)=>x+y===50&&3*x+y===90,x:20,y:30},
{a:(x,y)=>3*x+3*y===180&&x+2*y===100,x:20,y:40}
];systems.forEach((z,i)=>assert(z.a(z.x,z.y),"09 system oracle "+i));
assert(eq(50*5+30*3,340)&&eq(Math.sqrt(32),4*Math.sqrt(2))&&eq(Math.sqrt(98)/Math.sqrt(2),7),"08/5 and 11/2");
assert(eq(Math.sqrt(32*9),12*Math.sqrt(2))&&eq(-2*Math.sqrt(7),-Math.sqrt(28)),"11/3 absolute and sign");
assert(eq(Math.sqrt(18)+Math.sqrt(8),5*Math.sqrt(2))&&eq(3/Math.sqrt(5),3*Math.sqrt(5)/5)&&eq(1/(Math.sqrt(3)+1),(Math.sqrt(3)-1)/2),"11/4");
assert(eq(Math.cbrt(-125),-5)&&eq(2/Math.sqrt(7),2*Math.sqrt(7)/7),"11/5 and new Q16");
assert(eq(2/(2.5-3),2.5/(2.5-3)+1),"08 Q16 exact valid solution");
assert(3*20+3*40===180&&20+2*40===100,"09 new productivity key");
assert(3*1+6*2===15&&1+2*2===5,"09 new coincident-line key");
assert(25-4*2*2===9&&(-5/2+0)===-2.5,"12 Viète coefficients and discriminant");
console.log("PASS: 25 source-linked lectures; original 75 micro records frozen; four targeted items; 63/63 declared skill opportunities; worked-example independent numeric oracles.");
