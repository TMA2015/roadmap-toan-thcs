#!/usr/bin/env node
"use strict";
const assert=require("node:assert/strict");
const fs=require("node:fs");
const path=require("node:path");
const root=path.resolve(__dirname,"..");
const read=p=>fs.readFileSync(path.join(root,p),"utf8");
const grader=require("../docs/assets/javascripts/practice-rich-answer-v1.js");
const defs=[
  {slug:"02-so-va-phep-tinh",base:"v1",baseCount:147,id:"NUM02-RICH-W1-01-V1",source:"02-G6-WR-01",type:"numeric"},
  {slug:"03-ti-le-ti-le-thuc",base:"v1",baseCount:124,id:"RAT03-RICH-W1-01-V1",source:"03-M1-02",type:"rational"},
  {slug:"04-bieu-thuc-dai-so",base:"v2",baseCount:138,id:"ALG04-RICH-W1-01-V1",source:"04-WR-01",type:"numeric_fields"}
];
const questions=[];
for(const def of defs){
 const prior=JSON.parse(read("docs/assets/data/practice/"+def.slug+"-"+def.base+".manifest.json"));
 const current=JSON.parse(read("docs/assets/data/practice/"+def.slug+"-v3.manifest.json"));
 const filename=def.slug+"-rich-w1-v1.json";
 assert.equal(prior.question_count,def.baseCount);
 assert.equal(current.question_count,prior.question_count+1);
 assert.deepEqual(current.sources,prior.sources.concat(filename),"append only manifest sources");
 const d=JSON.parse(read("docs/assets/data/practice/"+filename));
 assert.equal(d.questions.length,1);
 const q=d.questions[0];
 assert.equal(q.id,def.id);assert.equal(q.source_item_id,def.source);assert.equal(q.response_type,def.type);
 assert.equal(grader.validate(q),true);
 assert(read("docs/kien-thuc/"+def.slug+"/bai-tap.md").includes(def.source),"original source must remain");
 if(def.slug==="04-bieu-thuc-dai-so")
  assert(read("docs/assets/javascripts/practice-auto-loader.js").includes('"04-bieu-thuc-dai-so": "04-bieu-thuc-dai-so-v6.manifest.json"'));
 else
  assert(read("docs/kien-thuc/"+def.slug+"/bai-tap.md").includes(def.slug+"-v4.manifest.json"));
 questions.push(q);
}
const [number,rational,fields]=questions;
for(const s of ["18","+18","18.0","18,0","36/2"]){
 assert.equal(grader.grade(number,[s]).status,"CORRECT","numeric "+s);
}
for(const s of ["17","-18","18.1"]){
 assert.equal(grader.grade(number,[s]).status,"INCORRECT",s);
}
for(const s of ["15/2","30/4","7.5","7,5","60/8"]){
 assert.equal(grader.grade(rational,[s]).status,"CORRECT","rational "+s);
}
assert.equal(grader.grade(rational,["7,4"]).status,"INCORRECT");
for(const s of ["","abc","1/0","1,2.3","Infinity"]){
 const out=grader.grade(rational,[s]);
 assert(["INVALID_INPUT","INCOMPLETE"].includes(out.status),"invalid "+s);
}
assert.equal(grader.grade(fields,["3","4","+7"]).status,"CORRECT");
assert.equal(grader.grade(fields,["3","4","7"]).status,"CORRECT");
assert.equal(grader.grade(fields,["3","4","-7"]).status,"INCORRECT","reject R2 wrong sign");
assert.equal(grader.grade(fields,["3","4",""]).status,"INCOMPLETE");
assert.equal(grader.grade(fields,["3","4","seven"]).status,"INVALID_INPUT");
assert.equal(new Set(questions.map(q=>q.id)).size,3);
const config=read("mkdocs.yml");
assert(config.includes("assets/javascripts/practice-rich-answer-v1.js"));
assert(config.includes("assets/stylesheets/practice-rich-answer-v1.css"));
const engine=read("docs/assets/javascripts/practice-engine-v2.js");
assert(engine.includes("this.record(question, correct, this.hintLevel, null, this.fullSolutionViewed)"));
assert(engine.includes("this.renderRichAnswerFields(question)"));
assert(engine.includes("if (!question.response_type) try {"),"legacy observers must not silently misclassify rich answers");
console.log("PASS W1 rich Practice pilot: 3 new immutable IDs, 3 unchanged old manifests, numeric/rational/3-field exact grading and invalid-input guard.");
