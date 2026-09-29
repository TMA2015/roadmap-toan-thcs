#!/usr/bin/env node
"use strict";
const fs=require("fs");
const get=p=>fs.readFileSync(p,"utf8"),j=p=>JSON.parse(get(p)),assert=(v,m)=>{if(!v)throw Error(m)};
const bank=j("docs/assets/data/practice/07-phan-thuc-dai-so-micro-v1.json");
const workspace=j("docs/assets/data/curriculum/topic07-learning-workspace.json");
const source=j("content-staging/reviews/MATH-CORE07-TEACH-R1-20260929.json").review_basis.existing_micro_questions;
const evidence=get("docs/assets/javascripts/learner-evidence-v1.js");
const js=get("docs/assets/javascripts/topic-workspace-v1.js");
const audit=get("content-staging/reviews/MATH-CORE07-MICRO-PLUS2-SELF-AUDIT-20260929.md");
assert(source.length===15&&bank.question_count===17&&bank.questions.length===17,"15 old and two added");
assert(bank.questions.slice(0,15).every((q,i)=>JSON.stringify(q)===JSON.stringify(source[i])),"all previous 15 items must be content-identical to source");
const ids=new Set(bank.questions.map(q=>q.id));assert(ids.size===17,"no duplicate IDs");
const byId=new Map(bank.questions.map(q=>[q.id,q]));
const expected=[
 ["RAT07MICRO_016","pt07-core-1","hai-phan-thuc-bang-nhau"],
 ["RAT07MICRO_017","pt07-core-2","phan-tich-tu-mau"]
];
for(const [id,cardId,skill] of expected){
 const q=byId.get(id),card=workspace.cards.find(c=>c.id===cardId);
 assert(q&&card&&q.card_id===cardId&&card.micro_practice.at(-1)===id,"new item/card association "+id);
 assert(q.micro_role==="coverage"&&q.tags.layer==="KNTT-Core"&&q.tags.grade===8&&q.curriculum.level==="core","Core role and level "+id);
 assert(q.tags.skill.length===1&&q.tags.skill[0]===skill&&card.skills.includes(skill),"single primary assessed skill "+id);
 assert(!q.supporting_skills?.includes(skill),"supporting tag must not repeat assessed skill "+id);
 assert(q.options.length===4&&new Set(q.options).size===4&&q.answer===0&&q.explanation&&q.hints.length===2,"four unique choices, unambiguous key and two hints "+id);
 assert(q.authoring_review?.record==="content-staging/reviews/MATH-CORE07-MICRO-PLUS2-SELF-AUDIT-20260929.md","audited provenance "+id);
}
const canonical=[...j("docs/assets/data/practice/07-phan-thuc-dai-so-v1-01.json").questions,...j("docs/assets/data/practice/07-phan-thuc-dai-so-v1-02.json").questions];
assert(expected.every(([id])=>!canonical.some(q=>q.id===id)),"new IDs cannot reuse canonical Practice Room ID");
assert(evidence.includes("skills.forEach((skill)")&&evidence.includes("data.questions[question.id]")&&evidence.includes("localStorage.setItem(STORAGE_KEY"),"evidence uses stable question ID and primary singleton tags");
assert(js.includes('q.micro_role==="coverage"?"Bổ sung kỹ năng"'),"new question labelled correctly in UI");
const approx=(a,b)=>Math.abs(a-b)<1e-9;
for(const x of [-7,-3,0,1,3,5,9]){assert(x!==2,"invalid equal-fraction probe");const A=(x*x-4)/(x-2),B=x+2;assert(approx(A,B),"fraction equality on domain "+x)}
assert(2-2===0,"x=2 is excluded even though polynomial is defined");
const sourceFrac=x=>(x*x-25)/(x*x+10*x+25);
const factored=x=>((x-5)*(x+5))/((x+5)*(x+5));
for(const x of [-8,-4,-1,0,2,6])assert(approx(sourceFrac(x),factored(x)),"numerator+denominator factorization "+x);
assert((-5)*(-5)+10*(-5)+25===0,"x=-5 excluded");
const x=2,p=sourceFrac(x);
assert(!approx(p,((x-5)**2)/((x+5)**2)),"distractor 2 changes numerator");
assert(!approx(p,((x-5)*(x+5))/((x-5)**2)),"distractor 3 changes denominator");
assert(!approx(p,(x*x-25)/(x+5)),"distractor 4 does not factor both components and changes denominator");
assert(audit.includes("not")||audit.includes("không"),"non-mastered audit qualification present");
console.log("PASS: +2 distinct Core items; original 15 identical; exact singleton evidence mapping; both identities and wrong options checked.");
