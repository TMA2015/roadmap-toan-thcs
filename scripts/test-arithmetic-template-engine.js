"use strict";
const assert=require("node:assert/strict");
const fs=require("node:fs");
const path=require("node:path");
const root=path.resolve(__dirname,"..");
const read=p=>fs.readFileSync(path.join(root,p),"utf8");
const json=p=>JSON.parse(read(p));
const engine=require("../docs/assets/javascripts/arithmetic-template-engine-v1.js");
const catalog=json("docs/assets/data/curriculum/arithmetic-template-catalog-v1.json");
assert.ok(engine.catalogValid(catalog));
assert.equal(engine.BUILD,"arithmetic-template-engine-v1-20260927");
assert.deepEqual(engine.TEMPLATE_IDS,["INT_MIXED_ADD","FRACTION_UNLIKE_ADD","NUMERIC_DIFFERENCE_SQUARES"]);
assert.equal(catalog.policy.write_to_learner_storage,false);
assert.equal(catalog.policy.independent_credit,false);
function canonical(n,d=1){
  if(d===0)throw Error("test division by zero");
  const sign=d<0?-1:1;n*=sign;d*=sign;
  let a=Math.abs(n),b=Math.abs(d);
  while(b){const c=a%b;a=b;b=c;}
  return {n:n/a,d:d/a};
}
const totals={};
for(const template of catalog.templates){
  let signatures=new Set(),ids=new Set(),count=0;
  for(let seed=1;seed<=1500;seed++){
    const q=engine.generate(catalog,template.id,seed);
    const again=engine.generate(catalog,template.id,seed);
    assert.deepEqual(q,again,"determinism lost: "+template.id+"/"+seed);
    assert.equal(q.source_kind,"deterministic_authored_template");
    assert.equal(q.independent_credit,false);
    assert.equal(q.answer,0);
    assert.equal(q.template_id,template.id);
    assert.equal(q.template_version,1);
    assert.equal(q.seed,seed);
    assert.equal(q.options.length,4);
    assert.equal(q.diagnostics.length,4);
    assert.equal(q.diagnostics[0].code,null);
    assert.ok(q.question.startsWith("Tính"));
    assert.ok(q.explanation.length>70,"solution too short: "+q.id);
    assert.ok(q.explanation.includes("\\(")&&q.explanation.includes("\\)"),"missing worked mathematical expression");
    assert.equal(new Set(q.options).size,4,"duplicate displayed choice: "+q.id);
    let expected;
    if(template.id==="INT_MIXED_ADD"){
      const {a,b}=q.params;
      assert.ok(a<0&&a>=-12&&a<=-3&&b>0&&b>=2&&b<=12);
      expected=canonical(a+b);
      assert.ok(q.question.includes(String(a))&&q.question.includes(String(b)));
      assert.ok(q.explanation.includes(String(a+b)));
    }else if(template.id==="FRACTION_UNLIKE_ADD"){
      const {p,q:den1,r,s:den2}=q.params;
      assert.ok(p>0&&p<den1&&r>0&&r<den2&&den1!==den2);
      assert.ok(den1>=3&&den1<=9&&den2>=3&&den2<=9);
      expected=canonical(p*den2+r*den1,den1*den2);
      assert.ok(q.question.includes("\\frac{"+p+"}{"+den1+"}"));
      assert.ok(q.question.includes("\\frac{"+r+"}{"+den2+"}"));
      assert.ok(q.explanation.includes(String(p*den2+r*den1)));
      assert.ok(q.explanation.includes(String(den1*den2)));
    }else{
      const {a,b}=q.params;
      assert.ok(a>=8&&a<=24&&b>=2&&b<=10&&a-b>=2);
      expected=canonical(a*a-b*b);
      assert.ok(q.question.includes(a+"^2-"+b+"^2"));
      assert.ok(q.explanation.includes("("+a+"-"+b+")("+a+"+"+b+")"));
      assert.ok(q.explanation.includes(String(a*a-b*b)));
    }
    assert.deepEqual(q.correct_value,expected,"wrong math key: "+q.id);
    assert.equal(q.options[0],engine.renderValue(expected),"correct answer/solution render mismatch");
    for(let index=1;index<4;index++){
      assert.ok(q.diagnostics[index].code,"distractor needs error taxonomy "+q.id);
      assert.ok(q.diagnostics[index].reason.length>18);
      assert.notEqual(q.options[index],q.options[0]);
    }
    const keys=q.options.map(option=>option);
    assert.equal(new Set(keys).size,4);
    assert.ok(!ids.has(q.id));ids.add(q.id);
    signatures.add(q.signature);count++;
  }
  assert.ok(signatures.size>40,"not enough parameter diversity for "+template.id);
  const old=engine.generate(catalog,template.id,25);
  const next=engine.generateDistinct(catalog,template.id,25,new Set([old.signature]));
  assert.notEqual(next.item.signature,old.signature);
  assert.notEqual(next.item.id,old.id);
  assert.ok(![0,4294967296].includes(next.nextSeed));
  assert.ok(ids.has(old.id));
  totals[template.id]={tested:count,unique_parameters:signatures.size};
}
for(const bad of [0,-1,1.5,4294967296,Infinity,NaN])
  assert.throws(()=>engine.generate(catalog,engine.TEMPLATE_IDS[0],bad));
assert.throws(()=>engine.generate(catalog,"UNAPPROVED",1));
assert.throws(()=>engine.generate({...catalog,status:"unreviewed"},engine.TEMPLATE_IDS[0],1));
assert.throws(()=>engine.generate({...catalog,policy:{...catalog.policy,independent_credit:true}},engine.TEMPLATE_IDS[0],1));
assert.throws(()=>engine.generateDistinct(catalog,engine.TEMPLATE_IDS[0],1,[]));
assert.deepEqual(engine.rational(6,8),{n:3,d:4});
assert.deepEqual(engine.rational(-10,-5),{n:2,d:1});
assert.deepEqual(engine.rational(0,-5),{n:0,d:1});
assert.throws(()=>engine.rational(1,0));
const scripts=[
 "docs/assets/javascripts/arithmetic-template-engine-v1.js",
 "docs/assets/javascripts/arithmetic-template-preview-v1.js"
];
for(const file of scripts){
 const source=read(file);
 assert.ok(!/\b(?:localStorage|sessionStorage|indexedDB)\b|document\.cookie/.test(source),
   "no user data storage allowed: "+file);
 assert.ok(!/gemini|openai|api[_-]?key|generateContent|fetch\s*\(/i.test(
   file.endsWith("engine-v1.js")?source:""),"engine must make no remote calls or AI calls");
 assert.ok(!source.includes("recordAnswer")&&!source.includes("appendEvidence"));
}
assert.ok(read("mkdocs.yml").includes("assets/javascripts/arithmetic-template-engine-v1.js"));
assert.ok(read("mkdocs.yml").includes("assets/javascripts/arithmetic-template-preview-v1.js"));
assert.ok(read("mkdocs.yml").includes("thu-nghiem-sinh-cau-tuong-tu.md"));
console.log("PASS 4,500 source-template seeds: "+JSON.stringify(totals));
console.log("PASS exact answer math, parameter bounds, four distinct options, dynamic worked steps and error hints");
console.log("PASS seed reproducibility, new parameter signatures, safe catalog rejection and no storage/AI dependency");
console.log("PASSED arithmetic template engine regression.");
