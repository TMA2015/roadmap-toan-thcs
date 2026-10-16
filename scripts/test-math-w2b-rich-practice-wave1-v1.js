#!/usr/bin/env node
"use strict";
const assert=require("node:assert/strict"),fs=require("node:fs");
const load=p=>JSON.parse(fs.readFileSync(p,"utf8"));
const dir="docs/assets/data/practice/";
const q=load(dir+"04-bieu-thuc-dai-so-rich-w2b-wave1-v1.json").questions[0];
const grade=require("../docs/assets/javascripts/practice-rich-answer-v1.js");
assert.equal(q.id,"ALG04-RICH-W2B-01-V1");
assert.deepEqual(q.answer_contract.fields.map(f=>f.expected),["0","0","-2","-2"]);
assert(grade.validate(q));
assert.equal(grade.grade(q,["0","0","-2","-2"]).status,"CORRECT");
assert.equal(grade.grade(q,["0","1","-2","-2"]).status,"INCORRECT");
assert.equal(grade.grade(q,["0","0","-2",""]).status,"INCOMPLETE");
console.log("PASS W2B four-field grading");
