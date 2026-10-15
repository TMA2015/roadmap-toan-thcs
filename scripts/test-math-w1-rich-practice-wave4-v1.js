#!/usr/bin/env node
"use strict";
const assert=require("node:assert/strict");
const fs=require("node:fs");
const path=require("node:path");
const root=path.resolve(__dirname,"..");
const load=p=>JSON.parse(fs.readFileSync(path.join(root,p),"utf8"));
const read=p=>fs.readFileSync(path.join(root,p),"utf8");
const grader=require("../docs/assets/javascripts/practice-rich-answer-v1.js");
const dir="docs/assets/data/practice/";
const old=load(dir+"21-thong-ke-v1.manifest.json");
const active=load(dir+"21-thong-ke-v2.manifest.json");
assert.equal(old.question_count,132);
assert.equal(active.question_count,134);
assert.deepEqual(active.sources,old.sources.concat("21-thong-ke-rich-w1-wave4-v1.json"));
assert(read("docs/assets/javascripts/practice-auto-loader.js").includes('"21-thong-ke": "21-thong-ke-v2.manifest.json"'));
const q=load(dir+"21-thong-ke-rich-w1-wave4-v1.json").questions;
assert.equal(q.length,2);
const rows=[
 {id:"STA21-RICH-W1-01-V1",source:"21-M2-01",values:["6","7","8","9"],correct:["1","2","3","1"],incorrect:["1","2","2","2"],total:7},
 {id:"STA21-RICH-W1-02-V1",source:"21-M3-01",values:["6","7","8","9","10","Tổng"],correct:["1","2","4","2","1","10"],incorrect:["1","2","4","2","1","9"],total:10}
];
for(let i=0;i<rows.length;i++){
 const expect=rows[i],question=q[i];
 assert.equal(question.id,expect.id);
 assert.equal(question.source_item_id,expect.source);
 assert.equal(question.response_type,"numeric_fields");
 assert.equal(question.tags.layer,"Core-Support");
 assert.equal(question.tags.grade,9);
 assert.deepEqual(question.answer_contract.table_view.row_values,expect.values);
 assert.deepEqual(question.answer_contract.fields.map(f=>f.expected),expect.correct);
 assert.equal(grader.validate(question),true);
 assert.equal(grader.grade(question,expect.correct).status,"CORRECT");
 assert.equal(grader.grade(question,expect.correct.map(n=>n+".0")).status,"CORRECT");
 assert.equal(grader.grade(question,expect.incorrect).status,"INCORRECT");
 assert.equal(grader.grade(question,expect.correct.map((n,j)=>j===0?"":n)).status,"INCOMPLETE");
 assert.equal(grader.grade(question,expect.correct.map((n,j)=>j===0?"one":n)).status,"INVALID_INPUT");
 assert.equal(grader.grade(question,expect.correct.slice(0,-1)).status,"INCOMPLETE");
 assert(read("docs/kien-thuc/21-thong-ke/bai-tap.md").includes(expect.source),"original written source missing");
 const malformed=JSON.parse(JSON.stringify(question));
 malformed.answer_contract.table_view.row_values.pop();
 assert.equal(grader.validate(malformed),false,"table rows must match exact answer contract");
}
assert(!q.some(x=>x.source_item_id==="21-M4-01"),"R2a REVISE item must remain blocked");
const normal=old.sources.flatMap(file=>load(dir+file).questions);
assert.equal(normal.length,132);
assert.equal(new Set([...normal,...q].map(x=>x.id)).size,134);
console.log("PASS W1 wave4: two immutable frequency tables, exact row + total grading, invalid/incomplete guards, 132 MCQ preserved");
