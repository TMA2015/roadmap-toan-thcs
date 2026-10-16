#!/usr/bin/env node
"use strict";
const assert=require("node:assert/strict"),fs=require("node:fs"),path=require("node:path");
const root=path.resolve(__dirname,".."),dir="docs/assets/data/practice/";
const read=p=>fs.readFileSync(path.join(root,p),"utf8"),json=p=>JSON.parse(read(p));
const old=json(dir+"04-bieu-thuc-dai-so-v4.manifest.json");
const next=json(dir+"04-bieu-thuc-dai-so-v5.manifest.json");
const chunk=json(dir+"04-bieu-thuc-dai-so-rich-w2a-wave1-v1.json");
const grader=require("../docs/assets/javascripts/practice-rich-answer-v1.js");
assert.equal(old.question_count,140);
assert.equal(next.question_count,141);
assert.deepEqual(next.sources,old.sources.concat("04-bieu-thuc-dai-so-rich-w2a-wave1-v1.json"));
assert.equal(chunk.questions.length,1);
const q=chunk.questions[0];
assert.equal(q.id,"ALG04-RICH-W2A-01-V1");
assert.equal(q.source_item_id,"04-WR-06");
assert.equal(q.response_type,"numeric_fields");
assert.deepEqual(q.answer_contract.fields.map(x=>x.expected),["2","-5","-3"]);
assert(grader.validate(q));
for(const a of [["2","-5","-3"],["4/2","-10/2","-3,0"],["2.0","-5.00","-6/2"]])
 assert.equal(grader.grade(q,a).status,"CORRECT",a.join(","));
for(const a of [["2","-7","-3"],["2","5","-3"],["2","-5","3"]])
 assert.equal(grader.grade(q,a).status,"INCORRECT",a.join(","));
assert.equal(grader.grade(q,["2","-5",""]).status,"INCOMPLETE");
assert.equal(grader.grade(q,["2","-5","abc"]).status,"INVALID_INPUT");
assert.equal(grader.grade(q,["2","-5","1/0"]).status,"INVALID_INPUT");
const paper=read("docs/kien-thuc/04-bieu-thuc-dai-so/bai-tap.md");
assert(paper.includes("04-WR-06")&&paper.includes("(2x+1)(x-3)"));
const loader=read("docs/assets/javascripts/practice-auto-loader.js");
assert(loader.includes('"04-bieu-thuc-dai-so": "04-bieu-thuc-dai-so-v6.manifest.json"'));
const prior1=json(dir+"04-bieu-thuc-dai-so-rich-w1-v1.json").questions[0];
const prior2=json(dir+"04-bieu-thuc-dai-so-rich-w1-wave3-v1.json").questions[0];
assert.equal(prior1.id,"ALG04-RICH-W1-01-V1");
assert.equal(prior2.id,"ALG04-RICH-W1-02-V1");
assert.equal(new Set([prior1.id,prior2.id,q.id]).size,3);
console.log("PASS W2A wave1: distinct polynomial multiplication, exact coefficients, preserved paper, old rich variants and MCQ v4 sources");
