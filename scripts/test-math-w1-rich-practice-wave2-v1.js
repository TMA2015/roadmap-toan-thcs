#!/usr/bin/env node
"use strict";
const assert=require("node:assert/strict");
const fs=require("node:fs");
const path=require("node:path");
const root=path.resolve(__dirname,"..");
const load=p=>JSON.parse(fs.readFileSync(path.join(root,p),"utf8"));
const grader=require("../docs/assets/javascripts/practice-rich-answer-v1.js");
for(const [slug,id,source,kind,expected] of [
 ["02-so-va-phep-tinh","NUM02-RICH-W1-02-V1","02-G6-WR-03","rational","11/30"],
 ["03-ti-le-ti-le-thuc","RAT03-RICH-W1-02-V1","03-M3-01","numeric","3.6"]
]){
 const dir="docs/assets/data/practice/";
 const m3=load(dir+slug+"-v3.manifest.json");
 const m4=load(dir+slug+"-v4.manifest.json");
 assert.equal(m4.question_count,m3.question_count+1);
 assert.deepEqual(m4.sources,m3.sources.concat(slug+"-rich-w1-wave2-v1.json"));
 const q=load(dir+slug+"-rich-w1-wave2-v1.json").questions[0];
 assert.equal(q.id,id);
 assert.equal(q.source_item_id,source);
 assert.equal(q.response_type,kind);
 assert.equal(q.answer_contract.expected,expected);
 assert(grader.validate(q));
 const page=fs.readFileSync(path.join(root,"docs/kien-thuc",slug,"bai-tap.md"),"utf8");
 assert(page.includes(slug+"-v4.manifest.json"));
 assert(page.includes(source),"legacy source remains");
 const good=kind==="rational"?["11/30","22/60","33/90"]:["3.6","3,6","36/10","3.60"];
 const bad=kind==="rational"?["11/15","-11/30"]:["3.7","3600","360000"];
 for(const s of good)assert.equal(grader.grade(q,[s]).status,"CORRECT",id+" "+s);
 for(const s of bad)assert.equal(grader.grade(q,[s]).status,"INCORRECT",id+" "+s);
 for(const s of ["","1/0","abc","3,6 km"])assert(["INVALID_INPUT","INCOMPLETE"].includes(grader.grade(q,[s]).status),s);
}
console.log("PASS W1 wave2: source-locked immutable v4 manifests, exact answer grading, numeric-km guard and original paper sources preserved");
