#!/usr/bin/env node
"use strict";
const fs=require("fs"),read=p=>JSON.parse(fs.readFileSync(p,"utf8")),assert=(v,m)=>{if(!v)throw Error(m)};
const base="docs/assets/data/curriculum/topic07-learning-workspace.json";
const packet=read("content-staging/reviews/MATH-CORE07-TEACH-R1-20260929.json");
const workspace=read(base),bank=read("docs/assets/data/practice/07-phan-thuc-dai-so-micro-v1.json");
const expected=new Map(packet.cards.map(c=>[c.id,c]));
assert(workspace.cards.length===5 && expected.size===5 && bank.questions.length===15,"source locked five cards / fifteen items");
const questionIds=new Set(bank.questions.map(q=>q.id));
for(const card of workspace.cards){
 const source=expected.get(card.id),copy=card.teaching_copy;
 assert(source && copy,"missing teaching card "+card.id);
 assert(JSON.stringify(card.micro_practice)===JSON.stringify(source.question_ids),"micro ID drift "+card.id);
 assert(card.micro_practice.every(id=>questionIds.has(id)),"missing question "+card.id);
 for(const name of ["key_idea","misconception","summary","source_reference","review_status"])
   assert(typeof copy[name]==="string"&&copy[name].trim(),"missing "+name+" for "+card.id);
 assert(copy.worked_example?.problem?.trim()&&copy.worked_example?.solution?.trim(),"missing worked solution "+card.id);
 assert(copy.source_reference===source.source_reference&&JSON.stringify(copy.source_question_ids)===JSON.stringify(source.question_ids),"source provenance mismatch "+card.id);
 if(process.argv.includes("--release"))
   assert(copy.review_status==="APPROVED"&&typeof copy.academic_review_ref==="string"&&copy.academic_review_ref.trim(),"UNREVIEWED CORE TEACHING MUST NOT DEPLOY: "+card.id);
}
console.log("PASS: five source-locked Core07 teaching copies; "+(process.argv.includes("--release")?"release academic approval present":"candidate stage; independent review still required"));
