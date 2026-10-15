#!/usr/bin/env node
"use strict";
// Source-locked W1 wave3: one structurally useful typed variant, no clone inflation.
const assert=require("node:assert/strict");
const fs=require("node:fs");
const path=require("node:path");
const root=path.resolve(__dirname,"..");
const read=p=>fs.readFileSync(path.join(root,p),"utf8");
const load=p=>JSON.parse(read(p));
const grader=require("../docs/assets/javascripts/practice-rich-answer-v1.js");
const dir="docs/assets/data/practice/";
const prior=load(dir+"04-bieu-thuc-dai-so-v3.manifest.json");
const current=load(dir+"04-bieu-thuc-dai-so-v4.manifest.json");
const wave=load(dir+"04-bieu-thuc-dai-so-rich-w1-wave3-v1.json");
assert.equal(prior.question_count,139);
assert.equal(current.question_count,140);
assert.deepEqual(current.sources,prior.sources.concat("04-bieu-thuc-dai-so-rich-w1-wave3-v1.json"));
assert.equal(wave.questions.length,1);
const q=wave.questions[0];
assert.equal(q.id,"ALG04-RICH-W1-02-V1");
assert.equal(q.source_item_id,"04-WR-03");
assert.equal(q.response_type,"numeric_fields");
assert.deepEqual(q.answer_contract.fields.map(f=>f.expected),["1","-5","4"]);
assert(grader.validate(q),"source-locked exact typed-fields grading contract");
for(const row of [["1","-5","4"],["1.0","-10/2","+4"],["2/2","-5,0","4.00"]])
  assert.equal(grader.grade(q,row).status,"CORRECT",JSON.stringify(row));
for(const row of [["1","5","4"],["1","-5","-4"],["2","-5","4"]])
  assert.equal(grader.grade(q,row).status,"INCORRECT",JSON.stringify(row));
assert.equal(grader.grade(q,["1","-5",""]).status,"INCOMPLETE");
assert.equal(grader.grade(q,["1","five","4"]).status,"INVALID_INPUT");
assert.equal(grader.grade(q,["1","1/0","4"]).status,"INVALID_INPUT");
assert.equal(grader.grade(q,["1","-5"]).status,"INCOMPLETE");
assert(read("docs/kien-thuc/04-bieu-thuc-dai-so/bai-tap.md").includes("04-WR-03"));
assert(read("docs/assets/javascripts/practice-auto-loader.js").includes('"04-bieu-thuc-dai-so": "04-bieu-thuc-dai-so-v4.manifest.json"'));
const all=load(dir+"03-ti-le-ti-le-thuc-v1-02.json").questions;
const duplicate=all.find(x=>x.id==="RAT03V1_045");
assert(duplicate&&duplicate.question.includes("1440")&&duplicate.question.includes("3:4:5"),
 "03-M4-01 is already substantially present as existing MCQ; do not clone as new item");
assert.equal(load(dir+"03-ti-le-ti-le-thuc-v4.manifest.json").question_count,126);
console.log("PASS W1 wave3: CĐ04 exact 3-field coefficients; preserve history; reject redundant CĐ03 duplicate");
