#!/usr/bin/env node
"use strict";
// Release guard: CT17 Readiness question clarity, immutable identity and answer keys.
// The item count/skills must not be inflated to mask a content defect.
const assert=require("node:assert/strict");
const fs=require("node:fs");
const data=JSON.parse(fs.readFileSync("docs/assets/data/assessment/17-thales-dong-dang-core-v1.json","utf8"));
assert.equal(data.assessment_id,"GEO17-CORE-READY-V1");
assert.equal(data.items.length,10);
const ids=Array.from({length:10},(_,i)=>"GEO17READY_"+String(i+1).padStart(3,"0"));
assert.deepEqual(data.items.map(q=>q.id),ids);
const originalAnswers=[0,0,0,0,0,0,0,0,0,0];
assert.deepEqual(data.items.map(q=>q.answer),originalAnswers);
assert.equal(data.policy.hints,false);
assert.equal(data.policy.tutor,false);
assert.equal(data.policy.hard_gate,false);
const byId=Object.fromEntries(data.items.map(q=>[q.id,q]));
const conditions={
 GEO17READY_001:["tam giác ABC","D nằm giữa A và B","E nằm giữa A và C","DE∥BC"],
 GEO17READY_002:["tam giác ABC","D nằm giữa A và B","E nằm giữa A và C","AD/AB=AE/AC"],
 GEO17READY_004:["tam giác ABC","D thuộc cạnh BC","phân giác trong"],
 GEO17READY_006:["hai tam giác","hai cặp góc tương ứng bằng nhau"]
};
for(const [id,words] of Object.entries(conditions)){
 const q=byId[id];
 for(const word of words) assert(q.question.toLocaleLowerCase("vi").includes(word.toLocaleLowerCase("vi")),id+": missing "+word);
 assert(q.explanation.length>=38,id+": explanation incomplete");
 assert.equal(q.type,"mcq",id);
 assert.equal(q.options.length,4,id+": options");
}
console.log("PASS CT17: four exact geometric-premise fixes; all 10 IDs, answer keys, scoring/Readiness policy preserved.");
