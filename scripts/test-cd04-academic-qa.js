"use strict";
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const crypto = require("node:crypto");
const root = path.resolve(__dirname,"..");
const read = p => fs.readFileSync(path.join(root,p),"utf8");
const from = p => JSON.parse(read(p));
const sha = body => crypto.createHash("sha1").update("blob "+Buffer.byteLength(body)+"\0").update(body).digest("hex");
const prefix = "docs/assets/data/practice/04-bieu-thuc-dai-so-v2-";
const sources=Array.from({length:5},(_,i)=>prefix+String(i+1).padStart(2,"0")+".json");
const questions=sources.flatMap(src=>from(src).questions.map(q=>({...q,__source:path.basename(src)})));
const overlay=from("docs/assets/data/curriculum/primary-skill-overlay-draft-04-bieu-thuc-dai-so-v1.json");
const byId=new Map(questions.map(q=>[q.id,q]));
assert.equal(questions.length,132);
assert.equal(byId.size,132);

function normalize(s){
  s=s.replace(/\\(?:dfrac|frac)\{([^{}]*)\}\{([^{}]*)\}/g,"($1)/($2)")
    .replace(/\\(?:cdot|times)/g,"*")
    .replace(/\^\{([^{}]+)\}/g,"^($1)")
    .replace(/\s+/g,"").replace(/\\[()]/g,"");
  if(s.includes(":")){const i=s.lastIndexOf(":");if(s[i+1]!=="(")s=s.slice(0,i+1)+"("+s.slice(i+1)+")";}
  return s.replace(/[{}]/g,x=>x==="{"?"(":")");
}
function evaluate(source,vars){
  const s=normalize(source);
  const raw=s.match(/\d+(?:\.\d+)?|[a-zA-Z]|[()+\-*/^:]/g)||[];
  assert.equal(raw.join(""),s,"unparsed formula "+s);
  const tokens=[];
  for(let i=0;i<raw.length;i++){
    const curr=raw[i], prev=raw[i-1];
    if(i && (/^\d/.test(prev)||/[a-zA-Z)]/.test(prev)) && /[a-zA-Z(]/.test(curr))tokens.push("*");
    tokens.push(curr);
  }
  let at=0,peek=()=>tokens[at];
  function atom(){const v=tokens[at++];if(v==="("){const a=add();assert.equal(tokens[at++],")","missing close "+s);return a;}if(/^\d/.test(v))return Number(v);if(/^[a-zA-Z]$/.test(v)){assert.ok(Object.hasOwn(vars,v),"unknown variable "+v);return vars[v];}throw Error("invalid token "+v+" in "+s);}
  function pow(){let v=atom();if(peek()==="^"){at++;v=Math.pow(v,unary());}return v;}
  function unary(){if(peek()==="+"){at++;return unary();}if(peek()==="-"){at++;return -unary();}return pow();}
  function mul(){let v=unary();while(["*",":","/"].includes(peek())){let op=tokens[at++],w=unary();v=op==="*"?v*w:v/w;}return v;}
  function add(){let v=mul();while(["+","-"].includes(peek())){let op=tokens[at++],w=mul();v=op==="+"?v+w:v-w;}return v;}
  const result=add();assert.equal(at,tokens.length,"trailing token "+s);return result;
}
const tests=[
  {x:1.3,y:2.3,a:1.7,b:2.1,m:1.9,n:2.7},
  {x:-2.4,y:-1.6,a:-2,b:3,m:4,n:-1.5},
  {x:3.25,y:1.25,a:2.4,b:-3,m:2,n:1.2},
  {x:5,y:4,a:5,b:2,m:1.1,n:3}
];
const near=(a,b)=>Number.isFinite(a)&&Number.isFinite(b)&&Math.abs(a-b)<=1e-7*Math.max(1,Math.abs(a),Math.abs(b));
let algebra=0;
for(const q of questions){
  const id=Number(q.id.split("_").at(-1));
  assert.equal(q.answer,0,"source keys historically at index zero "+q.id);
  assert.equal(q.options.length,4);assert.equal(new Set(q.options).size,4);
  assert.deepEqual(overlay.items.find(x=>x.id===q.id)?.original_skill_tags,q.tags.skill,q.id+" tag drift");
  if(!((id>=21&&id<=88)||(id>=99&&id<=110)||(id>=121&&id<=132)))continue;
  const blocks=[...q.question.matchAll(/\\\((.*?)\\\)/gs)];
  assert.ok(blocks.length,"no math expression "+q.id);
  let cases=tests;
  if(id>=77&&id<=88){
    assert.ok(blocks[1],q.id+" missing substitution");
    const x=Number(blocks[1][1].split("=")[1]);assert.ok(Number.isFinite(x),q.id+" bad x");
    cases=tests.map(v=>({...v,x}));
  }
  const expected=cases.map(v=>evaluate(blocks[0][1],v));
  const candidates=q.options.map(o=>cases.map(v=>evaluate(o,v)));
  const equivalent=candidates.flatMap((actual,i)=>actual.every((val,k)=>near(val,expected[k]))?[i]:[]);
  assert.deepEqual(equivalent,[q.answer],q.id+" has wrong/multiple algebraically correct answer(s)");
  algebra++;
}
assert.equal(algebra,92);
console.log("PASS independent numeric-oracle equivalence for 92 algebra, substitution and division items (4 variable assignments each)");
const manual={
  // Concept questions 001–020, domain 089–098, word applications 111–120
  "ALG04V2_001":"-5","ALG04V2_002":"5","ALG04V2_003":"6","ALG04V2_004":"9",
  "ALG04V2_005":"- 4 x^{2} y","ALG04V2_006":"3 x^{3} - 2 x + 5",
  "ALG04V2_007":"5","ALG04V2_008":"-6","ALG04V2_009":"11","ALG04V2_010":"a^2b^5",
  "ALG04V2_011":"4","ALG04V2_012":"9",
  "ALG04V2_013":"- 2 x^{2} y","ALG04V2_014":"9 a b^{3}",
  "ALG04V2_015":"- m^{2} n^{2}","ALG04V2_016":"3 x y^{4}",
  "ALG04V2_017":"- 5 a^{3}","ALG04V2_018":"- 8 x^{2} y^{2}",
  "ALG04V2_019":"6 p q^{2}","ALG04V2_020":"- 7 m n",
  "ALG04V2_089":"x\\ne 2","ALG04V2_090":"x\\ne -3","ALG04V2_091":"x\\ne 3",
  "ALG04V2_092":"x\\ne -2","ALG04V2_093":"x\\ne 2","ALG04V2_094":"x\\ne 2",
  "ALG04V2_095":"x\\ne -2","ALG04V2_096":"x\\ne 3","ALG04V2_097":"x\\ne -2",
  "ALG04V2_098":"x\\ne 3",
  "ALG04V2_111":"6x+4","ALG04V2_112":"x^2+7x+10","ALG04V2_113":"5x+12",
  "ALG04V2_114":"10a+b","ALG04V2_115":"2x+4","ALG04V2_116":"4x+4",
  "ALG04V2_117":"3x-60","ALG04V2_118":"3x+15","ALG04V2_119":"x^2+4x+4",
  "ALG04V2_120":"3x+5"
};
const clean=s=>s.replace(/\\[()]/g,"").replace(/\s+/g,"").replace(/[{}]/g,"");
for(const [id,answer] of Object.entries(manual)){
  const q=byId.get(id);assert.ok(q,id+" missing manually checked item");
  assert.equal(clean(q.options[q.answer]),clean(answer),id+" answer changed from checked value");
}
assert.equal(Object.keys(manual).length,40);
console.log("PASS reviewed expected answer texts for remaining 40 concept, domain and applied-context items");
const conditions={
 ALG04V2_123:"xy",ALG04V2_125:"ab",ALG04V2_128:"mn",ALG04V2_129:"xy",ALG04V2_130:"ab"
};
for(const [id,variable] of Object.entries(conditions)){
  const q=byId.get(id);assert.ok(q.question.includes(variable+"\\ne 0"),id+" missing nonzero divisor");
  assert.ok(q.explanation.includes(variable+"\\ne0"),id+" explanation missing nonzero divisor");
}
for(const id of ["ALG04V2_111","ALG04V2_116","ALG04V2_117"]){
  assert.ok(byId.get(id).question.toLowerCase().includes("với \\(x"),id+" missing context condition");
}
console.log("PASS eight explicit domain/real-life assumption clarifications");
for(const filename of sources){
  const basename=path.basename(filename);
  assert.equal(overlay.source_files[basename].github_blob_sha,sha(read(filename)),basename+" content lock is stale");
}
console.log("PASS five exact Git content locks match the current 132 source items");
const engine=read("docs/assets/javascripts/practice-engine-v2.js");
assert.ok(engine.includes("displayOptions = shuffle(question.options.map"),"Practice Engine must shuffle source A-only keys");
assert.ok(engine.includes("selectedIndex === question.answer"),"Practice Engine must compare original option indices");
console.log("PASS source keys are index zero but engine shuffles options and checks original index");
console.log("PASSED CĐ04 academic QA checks: 132 items, 92 algebra-oracle + 40 reviewed, 8 assumption clarifications.");
