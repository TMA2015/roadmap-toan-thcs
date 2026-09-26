"use strict";
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const crypto = require("node:crypto");
const root = path.resolve(__dirname, "..");
const read = file => fs.readFileSync(path.join(root,file), "utf8");
const json = file => JSON.parse(read(file));
const blob = content => crypto.createHash("sha1").update("blob " + Buffer.byteLength(content) + "\0").update(content).digest("hex");
const prefix="docs/assets/data/practice/06-phan-tich-da-thuc-v1-";
const sources=[1,2,3,4].map(i=>prefix+String(i).padStart(2,"0")+".json");
const questions=sources.flatMap(file=>json(file).questions.map(q=>({...q,source_file:path.basename(file)})));
const overlay=json("docs/assets/data/curriculum/primary-skill-overlay-draft-06-phan-tich-da-thuc-v1.json");
const byId=new Map(questions.map(q=>[q.id,q]));
assert.equal(questions.length,120);
assert.equal(byId.size,120);
assert.equal(overlay.items.length,120);
for(const file of sources){
 const key=path.basename(file);
 assert.equal(blob(read(file)),overlay.source_files[key].github_blob_sha,"stale source blob: "+key);
 assert.equal(json(file).questions.length,30,key+" count");
}
// Exact integer coefficient polynomial arithmetic, rather than comparing a few floating samples.
const trim=a=>{while(a.length>1&&a.at(-1)===0n)a.pop();return a;};
const add=(a,b)=>trim(Array.from({length:Math.max(a.length,b.length)},(_,i)=>(a[i]||0n)+(b[i]||0n)));
const neg=a=>a.map(x=>-x);
const sub=(a,b)=>add(a,neg(b));
const mul=(a,b)=>{let out=Array(a.length+b.length-1).fill(0n);a.forEach((x,i)=>b.forEach((y,j)=>{out[i+j]+=x*y}));return trim(out)};
const pow=(a,n)=>{assert.ok(Number.isInteger(n)&&n>=0&&n<=8);let out=[1n];for(let i=0;i<n;i++)out=mul(out,a);return out;};
const equal=(a,b)=>trim([...a]).join(",")===trim([...b]).join(",");
const tex=s=>s.replace(/\\(?:left|right)/g,"").replace(/\\(?:cdot|times)/g,"*")
  .replace(/\\(?:,|;|!| )/g,"").replace(/\^\{(\d+)\}/g,"^$1")
  .replace(/\\[()]/g,"").replace(/[{}]/g,c=>c==="{"?"(":")").replace(/\s+/g,"");
const blocks=s=>[...s.matchAll(/\\\((.*?)\\\)/gs)].map(m=>m[1]);
function polynomial(source){
 const normalized=tex(source),ts=normalized.match(/\d+|[xn]|[()+\-*^]/g)||[];
 assert.equal(ts.join(""),normalized,"unparsed TeX "+normalized);
 let i=0;const next=()=>ts[i];
 function atom(){
  const token=ts[i++];
  if(token==="("){const v=plus();assert.equal(ts[i++],")","missing ) "+normalized);return v}
  if(token==="x"||token==="n")return [0n,1n];
  if(/^\d+$/.test(token||""))return [BigInt(token)];
  throw Error("unknown token "+token+" in "+normalized);
 }
 function power(){
  let p=atom();
  while(next()==="^"){i++;let exponent=ts[i++];assert.match(exponent,/^\d+$/);p=pow(p,Number(exponent));}
  return p;
 }
 function unary(){
  if(next()==="+"){i++;return unary()}
  if(next()==="-"){i++;return neg(unary())}
  return power();
 }
 function product(){
  let p=unary();
  while(next()==="*"||next()==="("||next()==="x"||next()==="n"||/^\d+$/.test(next()||"")){
   if(next()==="*")i++;
   p=mul(p,unary());
  }
  return p;
 }
 function plus(){
  let p=product();
  while(next()==="+"||next()==="-"){let op=ts[i++],other=product();p=op==="+"?add(p,other):sub(p,other)}
  return p;
 }
 const result=plus();assert.equal(i,ts.length,"trailing tokens "+normalized);return result;
}
function gcd(a,b){a=a<0n?-a:a;b=b<0n?-b:b;while(b){let t=a%b;a=b;b=t}return a;}
const checked={factorization:0,identity:0,equations:0,divisibility:0,numerical:0};
let equivalent_but_not_factorized=[];
const greatest={};
for(const q of questions){
 const n=Number(q.id.split("_").at(-1)),math=blocks(q.question);
 assert.equal(q.answer,0,"source key moved "+q.id);
 assert.equal(q.options.length,4,q.id);
 assert.equal(new Set(q.options).size,4,q.id+" duplicate option");
 const row=overlay.items.find(x=>x.id===q.id);
 assert.ok(row,"missing overlay "+q.id);
 assert.deepEqual(row.original_skill_tags,q.tags.skill,q.id+" tag drift");
 if(n<=92){
   const target=polynomial(math[0]);
   const options=q.options.map(o=>polynomial(blocks(o)[0]));
   assert.ok(equal(target,options[q.answer]),q.id+" correct choice algebraically wrong");
   const eqIndices=options.flatMap((v,i)=>equal(target,v)?[i]:[]);
   // Equivalent expressions are not necessarily factorizations; compare actual task.
   for(const i of eqIndices.filter(i=>i!==q.answer)){
     const raw=tex(blocks(q.options[i])[0]);
     assert.ok(n<=76||n>=77&&n<=92,q.id+" unexpected equivalent distractor "+i);
     assert.ok(n<=76?/\)[+-]/.test(raw):raw.includes("x^2"),
       q.id+" equivalent alternate might also satisfy requested factorization");
     equivalent_but_not_factorized.push({id:q.id,option:i,kind:n<=76?"unfactored_expression":"partial_factorization"});
   }
   if(n<=12){
     const coefficients=target.filter(v=>v!==0n);
     const factor=coefficients.reduce((a,b)=>gcd(a,b),0n);
     const exponent=target.findIndex(v=>v!==0n);
     const required=factor.toString()+(exponent?"x"+(exponent===1?"":"^"+exponent):"");
     const actual=tex(blocks(q.options[q.answer])[0]);
     assert.ok(actual.startsWith(required+"("),q.id+" not the greatest common monomial "+required+"; got "+actual);
     greatest[q.id]=required;
   }
   if(n>=77&&n<=92){
     const correct=tex(blocks(q.options[q.answer])[0]);
     assert.ok(!correct.includes("x^2"),q.id+" answer not fully factored into linear factors");
     assert.ok(correct.includes(")(")||correct.includes(")^2"),q.id+" no factorized form");
   }
   checked.factorization++;
 }else if(n<=100){
   let trueCount=0;
   for(let i=0;i<4;i++){
     const expression=blocks(q.options[i])[0],split=expression.split("=");
     assert.equal(split.length,2,q.id+" invalid identity");
     if(equal(polynomial(split[0]),polynomial(split[1]))){trueCount++;assert.equal(i,q.answer,q.id+" another valid identity")}
   }
   assert.equal(trueCount,1,q.id+" multiple/zero correct identities");
   checked.identity++;
 }else if(n<=112){
   const equation=polynomial(math[0]);
   assert.equal(math[1].replace(/\s/g,""),"=0");
   assert.equal(equation.length,3,q.id+" expected quadratic");
   const A=Number(equation[2]),B=Number(equation[1]),C=Number(equation[0]);
   const d=B*B-4*A*C,s=Math.sqrt(d);
   assert.ok(Number.isInteger(s)&&d>=0,q.id+" unsupported roots");
   const roots=[(-B-s)/(2*A),(-B+s)/(2*A)].sort((a,b)=>a-b);
   assert.ok(roots.every(Number.isInteger),q.id+" needs integer solutions");
   let matches=[];
   q.options.forEach((option,i)=>{
     const candidates=[...option.matchAll(/x=(-?\d+)/g)].map(match=>Number(match[1])).sort((a,b)=>a-b);
     if(candidates.length===2&&candidates.join(",")===roots.join(","))matches.push(i);
   });
   assert.deepEqual(matches,[q.answer],q.id+" solution-set options mismatch");
   assert.ok(!q.explanation.includes("x--"),q.id+" malformed minus sign");
   assert.ok(q.explanation.includes("tính chất tích bằng 0"),q.id+" no reasoning");
   checked.equations++;
 }else if(n<=116){
   const target=polynomial(math.find(x=>x.includes("n^")));
   const answer=blocks(q.options[q.answer])[0].split("=");
   assert.equal(answer.length,2,q.id+" missing factorization");
   assert.ok(equal(polynomial(answer[0]),polynomial(answer[1])),q.id+" incorrect divisibility factorization");
   const modulus=n===115?6:2;
   for(let residue=0;residue<modulus;residue++){
     const value=target.reduce((sum,coefficient,exp)=>sum+coefficient*BigInt(residue)**BigInt(exp),0n);
     assert.equal(value%BigInt(modulus),0n,q.id+" divisibility fails for residue "+residue);
   }
   if(n===116){
     let trap=blocks(q.options[2])[0].split("=");
     assert.ok(!equal(polynomial(trap[0]),polynomial(trap[1])),"false distractor became a true identity");
   }
   assert.ok(q.explanation.includes("nguyên")||q.explanation.includes("liên tiếp"),q.id+" missing parity/divisibility logic");
   assert.equal(row.proposed_assessed_skill,null,"context application must remain under review");
   checked.divisibility++;
 }else {
   const numeric=polynomial(math[0]);
   assert.equal(numeric.length,1,q.id+" expression is not numeric");
   let matches=q.options.flatMap((choice,i)=>equal(polynomial(blocks(choice)[0]),numeric)?[i]:[]);
   assert.deepEqual(matches,[q.answer],q.id+" wrong numeric result");
   assert.equal(row.proposed_assessed_skill,null,"method not observed from numeric answer");
   checked.numerical++;
 }
}
assert.deepEqual(checked,{factorization:92,identity:8,equations:12,divisibility:4,numerical:4});
for(const id of ["FAC06V1_004","FAC06V1_007","FAC06V1_011","FAC06V1_012"])assert.ok(greatest[id]);
assert.equal(overlay.items.filter(x=>x.review_state!=="pattern_candidate_only").length,24);
assert.equal(overlay.items.filter(x=>x.proposed_assessed_skill===null).length,24);
const queue=json("docs/assets/data/curriculum/primary-skill-review-queue-06-07-v1.json");
for(const row of queue.items.filter(x=>x.topic==="06-phan-tich-da-thuc")){
 const q=byId.get(row.question_id);
 assert.equal(row.source_file,q.source_file);
 assert.deepEqual(row.original_skill_tags,q.tags.skill);
 assert.deepEqual(row.options,q.options);
 assert.equal(row.explanation,q.explanation);
 assert.equal(row.question,q.question);
}
const legacy=read("docs/assets/javascripts/practice-engine-v2.js");
assert.ok(!legacy.includes("cd06-academic-qa-ledger"));
console.log("PASS exact BigInt polynomial identity and source-key QA: "+JSON.stringify(checked));
console.log("PASS greatest common monomials for all 12 dedicated questions: "+JSON.stringify(greatest));
console.log("PASS equivalent-but-unfactored partial distractors observed: "+equivalent_but_not_factorized.length);
console.log("PASS 24 CĐ06 flags remain undecided; unchanged tags and full-text queue in sync");
console.log("PASSED CĐ06 source mathematical QA: 120/120; no runtime or learner-state migration.");
