"use strict";
const assert=require("node:assert/strict");
const fs=require("node:fs");
const path=require("node:path");
const crypto=require("node:crypto");
const root=path.resolve(__dirname,"..");
const read=p=>fs.readFileSync(path.join(root,p),"utf8");
const json=p=>JSON.parse(read(p));
const sha=body=>crypto.createHash("sha1").update("blob "+Buffer.byteLength(body)+"\0").update(body).digest("hex");
const prefix="docs/assets/data/practice/05-7-hang-dang-thuc-v1-";
const files=[1,2,3,4].map(i=>prefix+String(i).padStart(2,"0")+".json");
const questions=files.flatMap(f=>json(f).questions.map(q=>({...q,__source:path.basename(f)})));
const overlay=json("docs/assets/data/curriculum/primary-skill-overlay-draft-05-7-hang-dang-thuc-v1.json");
const byId=new Map(questions.map(q=>[q.id,q]));
assert.equal(questions.length,120);
assert.equal(byId.size,120);
assert.equal(overlay.items.length,120);
for(const file of files){
 const source=path.basename(file);
 assert.equal(sha(read(file)),overlay.source_files[source].github_blob_sha,"stale source lock: "+source);
}
const samples=[
 {x:1.31,y:2.17,a:1.53,b:2.37,A:1.53,B:2.37},
 {x:-2.43,y:1.19,a:-2.53,b:3.61,A:-2.53,B:3.61},
 {x:3.27,y:-1.79,a:4.41,b:-1.93,A:4.41,B:-1.93},
 {x:5.13,y:3.47,a:2.13,b:4.23,A:2.13,B:4.23},
 {x:-4.17,y:-2.81,a:-1.71,b:-3.29,A:-1.71,B:-3.29}
];
const near=(a,b)=>Number.isFinite(a)&&Number.isFinite(b)&&Math.abs(a-b)<1e-8*Math.max(1,Math.abs(a),Math.abs(b));
const blocks=s=>[...s.matchAll(/\\\((.*?)\\\)/gs)].map(m=>m[1]);
function normalize(src){
 let s=src.replace(/\\(?:dfrac|frac)\{([^{}]+)\}\{([^{}]+)\}/g,"($1)/($2)")
   .replace(/\\(?:cdot|times)/g,"*").replace(/\^\{([^{}]+)\}/g,"^($1)")
   .replace(/\\ /g,"").replace(/\s+/g,"").replace(/\\[()]/g,"").replace(/[{}]/g,c=>c==="{"?"(":")");
 return s;
}
function evaluate(source,vars){
 const s=normalize(source);
 const ts0=s.match(/\d+(?:\.\d+)?|[a-zA-Z]|[()+\-*/^:]/g)||[];
 assert.equal(ts0.join(""),s,"unparsed expression "+s);
 let ts=[];
 for(let i=0;i<ts0.length;i++){
  let p=ts0[i-1],t=ts0[i];
  if(i&&(/^\d/.test(p)||/[a-zA-Z)]/.test(p))&&/[a-zA-Z(]/.test(t))ts.push("*");
  ts.push(t);
 }
 let i=0,peek=()=>ts[i];
 function atom(){let t=ts[i++];if(t==="("){let v=add();assert.equal(ts[i++],")","missing ) in "+s);return v;}
 if(/^\d/.test(t))return Number(t);if(/^[a-zA-Z]$/.test(t)){assert.ok(Object.hasOwn(vars,t),"unknown var "+t);return vars[t];}
 throw Error("unexpected token "+t+" in "+s);}
 function pow(){let v=atom();if(peek()==="^"){i++;v=Math.pow(v,unary());}return v;}
 function unary(){if(peek()==="+"){i++;return unary()}if(peek()==="-"){i++;return -unary()}return pow()}
 function mul(){let v=unary();while(["*","/",":"].includes(peek())){let t=ts[i++],w=unary();v=t==="*"?v*w:v/w;}return v;}
 function add(){let v=mul();while(["+","-"].includes(peek())){let t=ts[i++],w=mul();v=t==="+"?v+w:v-w;}return v;}
 let v=add();assert.equal(i,ts.length,"trailing tokens in "+s);return v;
}
const eq=(a,b)=>samples.every(v=>near(evaluate(a,v),evaluate(b,v)));
const variantChecks=[];
const manualChecks=[];
for(const q of questions){
 const n=Number(q.id.split("_").at(-1));
 assert.equal(q.answer,0,q.id+" source index changed");
 assert.equal(q.options.length,4);
 assert.equal(new Set(q.options).size,4,q.id+" duplicate choices");
 const overlayRow=overlay.items.find(x=>x.id===q.id);
 assert.ok(overlayRow,q.id+" missing overlay");
 assert.deepEqual(overlayRow.original_skill_tags,q.tags.skill,q.id+" tags changed");
 const math=blocks(q.question);
 const equivalents=[];
 const formula=((n>=1&&n<=68)||(n>=75&&n<=78)||(n>=85&&n<=110));
 if(formula){
  const target=(n>=109&&n<=110)?math.at(-1):math[0];
  assert.ok(target,q.id+" no target expression");
  for(let index=0;index<4;index++)if(eq(target,blocks(q.options[index])[0]))equivalents.push(index);
  assert.deepEqual(equivalents,[q.answer],q.id+" answer or duplicate-equivalent distractor");
  variantChecks.push(q.id);
 }else if(n>=69&&n<=74){
  assert.ok(math.length>=2,q.id+" missing k equation");
  assert.ok(math.length>=3 && math[0]==="k",q.id+" missing k label");
  const expr=math[1],goal=math[2];
  for(let index=0;index<4;index++){
    const val=Number(blocks(q.options[index])[0]);
    assert.ok(Number.isFinite(val),q.id+" invalid k");
    if(samples.every(v=>near(evaluate(expr,{...v,k:val}),evaluate(goal,v))))equivalents.push(index);
  }
  assert.deepEqual(equivalents,[q.answer],q.id+" wrong k");
  variantChecks.push(q.id);
 }else if(n>=79&&n<=84){
  const choices=[
   "A=2x,B=3y","A=3x,B=5","A=2x,B=5",
   "A=2x,B=3","A=3x,B=4","A=x,B=2y"
  ];
  assert.equal(normalize(blocks(q.options[q.answer])[0]),normalize(choices[n-79]),q.id+" A/B roles changed");
  if(n===80)assert.ok(q.question.includes("(A-B)^2"),"subtraction-form ambiguity reintroduced");
  manualChecks.push(q.id);
 }else if(n>=111&&n<=115){
  const target=math[0];assert.ok(target?.includes("="),q.id+" missing equation");
  if(n===113){
   assert.ok(q.options[q.answer].includes("\\pm5"),"missing complete solution set");
   assert.ok(eq("x^2-25","0")===false,"sanity: polynomial not identically 0");
   assert.ok(near(evaluate("x^2-25",{x:5}),0)&&near(evaluate("x^2-25",{x:-5}),0));
   assert.ok(!near(evaluate("x^2-25",{x:25}),0));
  }else{
   let [lhs,rhs]=target.split("=");
   for(let index=0;index<4;index++){
    const x=Number(blocks(q.options[index])[0].replace(/x=/g,""));
    assert.ok(Number.isFinite(x),q.id+" invalid candidate x");
    if(near(evaluate(lhs,{x}),evaluate(rhs,{x})))equivalents.push(index);
   }
   assert.deepEqual(equivalents,[q.answer],q.id+" incorrect numerical root");
  }
  manualChecks.push(q.id);
 }else if(n>=116&&n<=118){
  for(let index=0;index<4;index++){
   const formula=blocks(q.options[index])[0].split("=");
   assert.equal(formula.length,2);
   if(eq(formula[0],formula[1]))equivalents.push(index);
  }
  assert.deepEqual(equivalents,[q.answer],q.id+" identity is invalid/nonunique");
  assert.equal(overlayRow.proposed_assessed_skill,null,q.id+" must not treat selecting formula as written proof");
  manualChecks.push(q.id);
 }else if(n===119){
  assert.equal(q.options[q.answer],"Khai triển hai bình phương rồi thu gọn");
  assert.equal(overlayRow.proposed_assessed_skill,null,"method selection is not written proof");
  assert.ok(q.explanation.includes("4ab"),"worked expansion missing");
  manualChecks.push(q.id);
 }else if(n===120){
  assert.equal(overlayRow.proposed_assessed_skill,"hieu-hai-binh-phuong");
  const first=blocks(q.options[q.answer])[0];
  assert.ok(eq("x^4-16",first),"first step factorization incorrect");
  assert.ok(q.explanation.includes("(x-2)(x+2)(x^2+4)"),"complete factorization not explained");
  assert.ok(q.question.includes("ĐẦU TIÊN"),"question must ask first step explicitly");
  manualChecks.push(q.id);
 }else throw Error("uncovered ID "+q.id);
}
assert.equal(variantChecks.length,104,"algebraic oracle count drift");
assert.equal(manualChecks.length,16,"concept/equation proof method count drift");
const reviewedQuestions=questions.filter(q=>Number(q.id.split("_").at(-1))>=116);
assert.equal(reviewedQuestions.length,5);
for(const q of reviewedQuestions){
 assert.ok(q.explanation.length>115,q.id+" needs worked explanation, not generic text");
}
const oldQueue=json("docs/assets/data/curriculum/primary-skill-review-queue-04-05-v1.json");
for(const item of oldQueue.items.filter(item=>item.topic==="05-7-hang-dang-thuc")){
 const q=byId.get(item.question_id);
 assert.deepEqual({question:item.question,options:item.options,answer_index:item.answer_index,explanation:item.explanation},
 {question:q.question,options:q.options,answer_index:q.answer,explanation:q.explanation},item.question_id+" stale review queue");
}
const originalManifest=json("docs/assets/data/practice/05-7-hang-dang-thuc-v1.manifest.json");
assert.equal(originalManifest.question_count,120);
assert.equal(new Set(questions.map(q=>q.id)).size,120);
console.log("PASS CĐ05 formula oracle and unique correct options: "+variantChecks.length+" cases / 5 sample variable sets");
console.log("PASS CĐ05 coefficient, A/B, equation, proof/method QA: "+manualChecks.length+" cases");
console.log("PASS CĐ05 five flagged cases retain limited assessment claims and have specific explanations");
console.log("PASS CĐ05 full-text review queue/source hashes and 120 original IDs/tags retained");
const ledger=json("docs/assets/data/curriculum/cd05-academic-qa-ledger-v1.json");
assert.equal(ledger.schema,"cd05-academic-qa-ledger-v1");
assert.deepEqual(ledger.counts,{total:120,numeric_group:104,logic_group:16,
 identity_recognition_or_method_only:4,first_step_only:1,method_not_observable:15});
assert.deepEqual(ledger.items.map(q=>q.question_id),overlay.items.map(q=>q.id));
for(const item of ledger.items){
 const q=byId.get(item.question_id);
 assert.equal(item.source_file,q.__source);
 assert.equal(item.candidate_primary,overlay.items.find(x=>x.id===q.id).proposed_assessed_skill);
}
console.log("PASS CĐ05 ledger 120/120 source mappings and honest proof/method limitations");
console.log("PASSED CĐ05 academic QA: 120/120 with two explicit QA methods.");
