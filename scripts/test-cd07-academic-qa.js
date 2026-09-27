"use strict";
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const crypto = require("node:crypto");
const base = path.resolve(__dirname, "..");
const read = file => fs.readFileSync(path.join(base, file), "utf8");
const json = file => JSON.parse(read(file));
const sha = body => crypto.createHash("sha1").update("blob " + Buffer.byteLength(body) + "\0").update(body).digest("hex");
const prefix = "docs/assets/data/practice/07-phan-thuc-dai-so-v1-";
const sources = [1,2,3,4].map(i => prefix + String(i).padStart(2,"0") + ".json");
const questions = sources.flatMap(file => json(file).questions.map(q => ({...q,source_file:path.basename(file)})));
const overlay = json("docs/assets/data/curriculum/primary-skill-overlay-draft-07-phan-thuc-dai-so-v1.json");
const queue = json("docs/assets/data/curriculum/primary-skill-review-queue-06-07-v1.json");
const byId = new Map(questions.map(q => [q.id,q]));
assert.equal(questions.length,120);
assert.equal(byId.size,120);
assert.equal(overlay.items.length,120);
for(const file of sources){
 const key=path.basename(file);
 assert.equal(sha(read(file)), overlay.source_files[key].github_blob_sha, key+" content drift");
 assert.equal(json(file).questions.length,30);
}
const trim = a => {while(a.length>1 && a.at(-1)===0n)a.pop();return a;};
const add = (a,b) => trim(Array.from({length:Math.max(a.length,b.length)},(_,i)=>(a[i]||0n)+(b[i]||0n)));
const neg = a => a.map(x=>-x);
const sub = (a,b) => add(a,neg(b));
const mul = (a,b) => {const out=Array(a.length+b.length-1).fill(0n);a.forEach((x,i)=>b.forEach((y,j)=>{out[i+j]+=x*y;}));return trim(out);};
const pow = (a,n) => {assert.ok(Number.isInteger(n)&&n>=0&&n<=12);let out=[1n];for(let i=0;i<n;i++)out=mul(out,a);return out;};
const peq = (a,b) => trim([...a]).join(",")===trim([...b]).join(",");
const P = n => [BigInt(n)];
const X = [0n,1n];
const rat = (n,d=P(1))=>({n,d});
const radd = (a,b)=>rat(add(mul(a.n,b.d),mul(b.n,a.d)),mul(a.d,b.d));
const rsub = (a,b)=>rat(sub(mul(a.n,b.d),mul(b.n,a.d)),mul(a.d,b.d));
const rmul = (a,b)=>rat(mul(a.n,b.n),mul(a.d,b.d));
const rdiv = (a,b)=>{assert.ok(!peq(b.n,P(0)),"divide by zero rational");return rat(mul(a.n,b.d),mul(a.d,b.n));};
const rpow = (a,n)=>rat(pow(a.n,n),pow(a.d,n));
const req=(a,b)=>peq(mul(a.n,b.d),mul(b.n,a.d));
const blocks=s=>[...s.matchAll(/\\\((.*?)\\\)/gs)].map(m=>m[1]);
function expandFracs(raw) {
 let output="",i=0;
 function arg(){
   if(raw[i]==="{"){
     let at=i+1,depth=1;i++;
     while(i<raw.length&&depth){if(raw[i]==="{")depth++;else if(raw[i]==="}")depth--;i++;}
     assert.equal(depth,0,"unclosed fraction argument");
     return expandFracs(raw.slice(at,i-1));
   }
   if(i<raw.length)return raw[i++];
   throw Error("missing fraction argument: "+raw);
 }
 while(i<raw.length){
   let macro=raw.startsWith("\\frac",i)?"\\frac":raw.startsWith("\\dfrac",i)?"\\dfrac":null;
   if(!macro){output+=raw[i++];continue;}
   i+=macro.length;
   const a=arg(),b=arg();
   output+="(("+a+")/("+b+"))";
 }
 return output;
}
function tokenize(src){
 let s=expandFracs(src).replace(/\\(?:left|right)/g,"")
   .replace(/\\(?:cdot|times)/g,"*").replace(/\\(?:,|;|!| )/g,"")
   .replace(/\^\{(\d+)\}/g,"^$1").replace(/\\[()]/g,"")
   .replace(/[{}]/g,c=>c==="{"?"(":")").replace(/\s+/g,"");
 const raw=s.match(/\d+|x|[()+\-*/^:]/g)||[];
 assert.equal(raw.join(""),s,"could not parse "+s);
 return raw;
}
function expr(s){
 let ts=tokenize(s),i=0,peek=()=>ts[i];
 function atom(){
   const t=ts[i++];
   if(t==="("){let a=sum();assert.equal(ts[i++],")","unbalanced expression "+s);return a;}
   if(t==="x")return rat(X);
   if(/^\d+$/.test(t||""))return rat(P(t));
   throw Error("unexpected "+t+" in "+s);
 }
 function power(){let a=atom();while(peek()==="^"){i++;const n=Number(ts[i++]);assert.ok(Number.isInteger(n));a=rpow(a,n);}return a;}
 function unary(){if(peek()==="+"){i++;return unary();}if(peek()==="-"){i++;let a=unary();return rat(neg(a.n),a.d);}return power();}
 function product(){let a=unary();while(["*", "/", ":"].includes(peek())||peek()==="("||peek()==="x"||/^\d+$/.test(peek()||"")){let op=peek();if(["*","/",":"].includes(op))i++;else op="*";let b=unary();a=op==="*"?rmul(a,b):rdiv(a,b);}return a;}
 function sum(){let a=product();while(peek()==="+"||peek()==="-"){let op=ts[i++],b=product();a=op==="+"?radd(a,b):rsub(a,b);}return a;}
 let out=sum();assert.equal(i,ts.length,"trailing tokens "+s);return out;
}
const at=(p,x)=>p.reduce((a,c,i)=>a+c*BigInt(x)**BigInt(i),0n);
const evalRat=(r,x)=>{const a=at(r.n,x),b=at(r.d,x);assert.notEqual(b,0n);return [a,b];};
const rootAt=(r,x)=>at(r.n,x)===0n;
const results={recognition:0,domain:0,equality:0,change_sign:0,factor:0,simplify:0,domain_preservation:0,common_denominator:0,add_sub:0,multiply:0,divide:0,composite:0,evaluate:0,integer:0};
const rows=[];
for(const q of questions){
 const n=Number(q.id.split("_").at(-1)), math=blocks(q.question), correct=blocks(q.options[q.answer])[0];
 assert.equal(q.answer,0,q.id+" answer index changed");
 assert.equal(q.options.length,4,q.id+" option count");
 assert.equal(new Set(q.options).size,4,q.id+" duplicate raw options");
 const row=overlay.items.find(x=>x.id===q.id);
 assert.ok(row,q.id+" overlay absent");
 assert.deepEqual(row.original_skill_tags,q.tags.skill,q.id+" skill tags drift");
 let kind;
 if(n<=8){
  kind="recognition";assert.match(q.options[0],/Phân thức đại số|Có thể xem là phân thức/);
  assert.ok(q.explanation.includes("mẫu 1"),q.id+" concept explanation absent");
 }else if(n<=24){
  kind="domain";const denominator=math[0].match(/\\(?:d?frac)(?:\{[^{}]*\}|.)((?:\{[^{}]*\}|.))/);
  const forbidden=[...q.options[0].matchAll(/x\\ne\s*(-?\d+)/g)].map(m=>Number(m[1]));
  assert.ok(forbidden.length>0,q.id+" no forbidden roots");
  const fraction=expr(math[0]);
  for(const root of forbidden) assert.equal(at(fraction.d,root),0n,q.id+" excluded point not denominator root");
  if(n<=16)assert.equal(forbidden.length,1);else assert.equal(forbidden.length,2);
 }else if(n<=30){
  kind="equality";const pieces=blocks(q.options[0]);assert.equal(pieces.length,2,q.id+" equality needs two expressions");
  assert.ok(req(expr(pieces[0]),expr(pieces[1])),q.id+" wrongly claims fraction equality");
  assert.match(q.options[0],/miền/);
 }else if(n<=38){
  kind="change_sign";
  const equalities=q.options.map(o=>{let sides=blocks(o)[0].split("=");assert.equal(sides.length,2);return req(expr(sides[0]),expr(sides[1]));});
  assert.deepEqual(equalities,[true,false,false,false],q.id+" sign answer not unique");
 }else if(n<=46){
  kind="factor";const original=expr(math[0]);
  const same=q.options.map(o=>req(original,expr(blocks(o)[0])));
  assert.deepEqual(same,[true,false,false,false],q.id+" invalid/nonunique factorization");
 }else if(n<=62){
  kind="simplify";const original=expr(math[0]);
  const same=q.options.map(o=>req(original,expr(blocks(o)[0])));
  assert.deepEqual(same,[true,false,false,false],q.id+" invalid/nonunique rational simplification");
 }else if(n<=70){
  kind="domain_preservation";
  const [l,r]=math[0].split("=");
  assert.ok(req(expr(l),expr(r)),q.id+" claimed cancellation incorrect");
  const forbidden=[...q.options[0].matchAll(/x\\ne\s*(-?\d+)/g)].map(m=>Number(m[1]));
  assert.equal(forbidden.length,1,q.id+" should preserve single exclusion");
  assert.equal(at(expr(l).d,forbidden[0]),0n,q.id+" preserved domain wrong");
 }else if(n<=80){
  kind="common_denominator";
  assert.equal(math.length,2);
  const den=mul(expr(math[0]).d,expr(math[1]).d);
  assert.ok(peq(expr(correct).n,den)||peq(expr(correct).n,neg(den)),q.id+" common denominator incorrect");
 }else if(n<=92){
  kind="add_sub";const original=expr(math[0]);
  const same=q.options.map(o=>req(original,expr(blocks(o)[0])));
  assert.deepEqual(same,[true,false,false,false],q.id+" add/sub answer not unique");
 }else if(n<=100){
  kind="multiply";const original=expr(math[0]);
  const same=q.options.map(o=>req(original,expr(blocks(o)[0])));
  assert.deepEqual(same,[true,false,false,false],q.id+" product answer not unique");
 }else if(n<=108){
  kind="divide";const original=expr(math[0]);
  const same=q.options.map(o=>req(original,expr(blocks(o)[0])));
  assert.deepEqual(same,[true,false,false,false],q.id+" quotient answer not unique");
 }else if(n<=114){
  kind="composite";const input=math[0].split("=").slice(1).join("=");
  const original=expr(input);
  const same=q.options.map(o=>req(original,expr(blocks(o)[0])));
  assert.deepEqual(same,[true,false,false,false],q.id+" composite result wrong");
  assert.equal(row.proposed_assessed_skill,null,q.id+" composite item must remain unapproved");
 }else if(n<=118){
  kind="evaluate";
  const input=math[0].split("=").slice(1).join("="),x=Number(math[1].split("=")[1]);
  assert.ok(Number.isInteger(x));
  const calculated=evalRat(expr(input),x),answer=expr(correct);
  assert.ok(peq(mul(calculated[0]?[calculated[0]]:P(0),answer.d),mul(P(calculated[1]),answer.n)),q.id+" evaluated answer wrong");
 }else{
  kind="integer";
  const first=math[0],frac=expr(first);
  const given=[...q.options[0].matchAll(/-?\d+/g)].map(m=>Number(m[0]));
  const expected=[];
  for(let x=-100;x<=100;x++){
   const denominator=at(frac.d,x);if(!denominator)continue;
   if(at(frac.n,x)%denominator===0n)expected.push(x);
  }
  assert.deepEqual(given,expected,q.id+" wrong integer solution set");
  assert.equal(row.proposed_assessed_skill,null,q.id+" extension must stay unapproved");
 }
 results[kind]++;
 rows.push({question_id:q.id,source_file:q.source_file,answer_qa:"exact_or_reasoned",group:kind,proposed_primary:row.proposed_assessed_skill,review_state:row.review_state});
}
assert.deepEqual(results,{recognition:8,domain:16,equality:6,change_sign:8,factor:8,simplify:16,domain_preservation:8,common_denominator:10,add_sub:12,multiply:8,divide:8,composite:6,evaluate:4,integer:2});
for(const flagged of queue.items.filter(x=>x.topic==="07-phan-thuc-dai-so")){
 const q=byId.get(flagged.question_id);
 assert.ok(q);
 assert.equal(flagged.question,q.question);
 assert.deepEqual(flagged.options,q.options);
 assert.equal(flagged.explanation,q.explanation);
 assert.equal(flagged.answer_index,q.answer);
 assert.equal(flagged.correct_option,q.options[q.answer]);
}
console.log("PASS CĐ07 exact rational polynomial arithmetic and semantic checks: "+JSON.stringify(results));
console.log("PASS all 120 IDs, 4 source SHA locks, 8 review-only cases and full-text queue");
