#!/usr/bin/env node
"use strict";
const fs=require("fs"),read=p=>JSON.parse(fs.readFileSync(p,"utf8")),assert=(v,m)=>{if(!v)throw Error(m)};
const base="docs/assets/data/curriculum/topic07-learning-workspace.json";
const packet=read("content-staging/reviews/MATH-CORE07-TEACH-R1-20260929.json");
const workspace=read(base),bank=read("docs/assets/data/practice/07-phan-thuc-dai-so-micro-v1.json");
const expected=new Map(packet.cards.map(c=>[c.id,c]));
assert(workspace.cards.length===5 && expected.size===5 && bank.questions.length===17,"five reviewed teaching copies; original fifteen plus two self-audited items");
const questionIds=new Set(bank.questions.map(q=>q.id));
for(const card of workspace.cards){
 const source=expected.get(card.id),copy=card.teaching_copy;
 assert(source && copy,"missing teaching card "+card.id);
 assert(JSON.stringify(card.micro_practice.slice(0,source.question_ids.length))===JSON.stringify(source.question_ids),"original three source-locked IDs drift "+card.id);
 assert(JSON.stringify(copy.source_question_ids)===JSON.stringify(source.question_ids),"approved lecture provenance drift "+card.id);
 assert(card.micro_practice.every(id=>questionIds.has(id)),"missing question "+card.id);
 for(const name of ["key_idea","misconception","summary","source_reference","review_status"])
   assert(typeof copy[name]==="string"&&copy[name].trim(),"missing "+name+" for "+card.id);
 assert(copy.worked_example?.problem?.trim()&&copy.worked_example?.solution?.trim(),"missing worked solution "+card.id);
 assert(copy.source_reference===source.source_reference&&JSON.stringify(copy.source_question_ids)===JSON.stringify(source.question_ids),"source provenance mismatch "+card.id);
 if(process.argv.includes("--release")){
   const ref="content-staging/reviews/MATH-CORE07-TEACH-R2-REVIEW-RESULT-20260929.md";
   assert(copy.review_status==="APPROVED"&&copy.academic_review_ref===ref,"UNREVIEWED CORE TEACHING MUST NOT DEPLOY: "+card.id);
   assert(copy.review_source_packet==="MATH-CORE07-TEACH-R2-20260929-NOTEBOOKLM.txt"&&copy.review_source_blob_sha==="446f984a1e38f260fec3e8568712c8fda4bbfa23","R2 source mismatch: "+card.id);
   const review=fs.readFileSync(ref,"utf8");
   assert(review.includes("**Verdict:** PASS")&&review.includes("metadata/date mismatch")&&review.includes(card.id),"Missing sourced R2 review approval: "+card.id);
 }
}
const byId=new Map(workspace.cards.map(c=>[c.id,c.teaching_copy]));
const checkText=(id,field,expected)=>{
 const copy=byId.get(id),value=field==="solution"?copy.worked_example.solution:copy.key_idea;
 assert(value.includes(expected),"R1 correction regressed: "+id+" "+field);
};
checkText("pt07-core-1","key_idea","A\\cdot D=B\\cdot C");
checkText("pt07-core-1","key_idea","D\\ne0");
checkText("pt07-core-2","key_idea","\\frac{A}{-B}=\\frac{-A}{B}=-\\frac{A}{B}");
checkText("pt07-core-3","key_idea","nhân tử phụ");
checkText("pt07-core-3","solution","\\frac{2\\cdot x(x-2)}{(x+2)\\cdot x(x-2)}");
checkText("pt07-core-5","key_idea","phân thức chia (số chia)");
checkText("pt07-core-5","solution","x+1\\ne0");
assert(!byId.get("pt07-core-5").key_idea.includes("phân thức bị chia")&&!byId.get("pt07-core-5").worked_example.solution.includes("phân thức bị chia"),"divisor terminology regression");
const r2=fs.readFileSync("content-staging/reviews/MATH-CORE07-TEACH-R2-20260929-NOTEBOOKLM.txt","utf8");
assert((r2.match(/^THẺ [1-5]: pt07-core-/gm)||[]).length===5,"R2 packet must contain five revisions");
assert((r2.match(/^CÂU \d+ — RAT07MICRO_/gm)||[]).length===15,"R2 packet must contain fifteen source questions");
assert(r2.includes("A\\cdot D=B\\cdot C")&&r2.includes("R1 — Lời giải:")&&r2.includes("R2 — Lời giải:"),"R2 must compare old/new math and solutions");
console.log("PASS: five source-locked Core07 teaching copies; "+(process.argv.includes("--release")?"R2 academic approval and source provenance verified":"candidate structure and corrections verified"));
