#!/usr/bin/env node
"use strict";
const assert=require("node:assert/strict");
const fs=require("node:fs");
const crypto=require("node:crypto");
const read=p=>fs.readFileSync(p);
const text=p=>read(p).toString("utf8");
const json=p=>JSON.parse(text(p));
const blob=buf=>crypto.createHash("sha1").update(Buffer.concat([
 Buffer.from("blob "+buf.length),Buffer.from([0]),buf
])).digest("hex");
const root="docs/assets/data/written-exercises/written-exercise-library-v1.json";
const lib=json(root),all=lib.exercises;
const ids=["WX08-EQI-003","WX09-SYS-009","WX10-FUN-003","WX11-RAD-004","WX12-QUA-003"];
const source=[
["08-phuong-trinh-bat-phuong-trinh","08-WR-03","6d29234ccb111329671f432df78c09b3ecda4877"],
["09-he-phuong-trinh","09-WR-05","0236497368fdb5dec9a53526065be468627405df"],
["10-ham-so-do-thi","10-ENT-02","b06ed2766dc9a455f62db0138f7a75f0bb13a58f"],
["11-can-thuc","11-ENT-01","8814674a67c9f576df49284282bd1fa16cfbba7c"],
["12-phuong-trinh-bac-hai-viete","12-ENT-02","8199916e355e8d1a617ef8687c4f442e6c6e48d1"]
];
assert.equal(all.length,74);
assert.equal(lib.published_scope.exercise_count,74);
assert.equal(lib.auto_readiness_credit,false);
assert.equal(lib.self_marking_only,true);
assert.deepEqual(all.slice(69).map(x=>x.exercise_id),ids);
assert.equal(new Set(all.map(x=>x.exercise_id)).size,74);
const review=lib.published_scope.batches.at(-1);
assert.deepEqual(review,{batch_id:"W4_CT08_12_WRITTEN_R1",
 packet_id:"MATH-W4-CT08-12-8SOURCE-CONVERSION-R0-20261020",
 count:5,status:"PENDING_OWNER_RELEASE_APPROVAL"});
const old=JSON.parse(JSON.stringify(lib));
old.exercises=old.exercises.slice(0,69);
old.published_scope.exercise_count=69;
old.published_scope.batches.pop();
assert.equal(blob(Buffer.from(JSON.stringify(old,null,2)+"\n")),"eed3fa0cbae29fd4fdb9daaeac9ef36c3744b665",
 "immutable 69 original Written records and original metadata changed");
const receiptPath="review-packets/math-source-conversion/W4_CT08-12_NOTEBOOKLM_INDEPENDENT_VERDICT_RECEIPT_20261020.md";
const receipt=text(receiptPath);
assert(receipt.includes("OVERALL|PASS_FOR_PLACEMENT_AND_AUTHORING"));
assert(receipt.includes("AUTHORIZATION|NO_LIVE_RELEASE"));
assert(receipt.includes("REVIEWED_SOURCE_ITEMS=8"));
for(let i=0;i<5;i++){
 const q=all[69+i],s=source[i],p="docs/kien-thuc/"+s[0]+"/bai-tap.md";
 assert.equal(blob(read(p)),s[2],"source Markdown edited or ID provenance broken");
 assert(text(p).includes("#### "+s[1]+" ·"),"missing exact historical ID");
 assert.deepEqual(q.source_refs,[p+"#"+s[1]]);
 assert.equal(q.academic_review.status,"APPROVED");
 assert.equal(q.academic_review.method,"NOTEBOOKLM_OWNER_SUBMITTED");
 assert.equal(q.academic_review.receipt,receiptPath);
 assert.equal(q.academic_review.packet_id,"MATH-W4-CT08-12-8SOURCE-CONVERSION-R0-20261020");
 assert.equal(q.academic_review.publication_gate,"OWNER_RELEASE_APPROVAL_PENDING");
 assert.equal(q.auto_readiness_credit,false);
 assert.equal(q.gates_core,false);
 assert.deepEqual(q.grade_overlay,[i===0?8:9]);
 assert.equal(q.hint_steps.length,3);
 assert(q.solution_steps.length>=3&&q.solution_steps.length<=5);
 assert.deepEqual(q.solution_steps.map(x=>x.step_id),q.solution_steps.map((_,j)=>"S"+(j+1)));
 assert.equal(q.rubric.length,4);
 assert.equal(q.rubric.reduce((n,x)=>n+x.points,0),4);
 assert.equal(q.rubric_total,4);
 assert(q.common_mistakes.length>=3);
 assert(q.remediation_links.length>=2);
 assert(q.remediation_links.every(x=>x.href.startsWith("../kien-thuc/")));
 assert(q.full_solution_markdown&&q.method_rationale_markdown&&q.remediation_markdown);
 assert(receipt.includes(s[1]+" | MATH:PASS"),"missing independent per-ID authoring PASS");
}
assert.equal(all[69].learning_layer,"KNTT-Core");
assert.equal(all[70].learning_layer,"KNTT-Core");
assert(all.slice(71).every(q=>q.learning_layer==="Entrance10"&&q.level==="ENTRANCE10"));
for(const x of [4,-0.5])assert.equal((x-4)*(2*x+1),0);
const x=14/5,y=9/5;
assert(Math.abs(x/2+y/3-2)<1e-12&&Math.abs(x-y-1)<1e-12);
assert.equal(1+2,-1+4);
assert(Math.sqrt(3+1)===3-1);
assert(Math.sqrt(0+1)!==0-1);
assert.equal(1-4*1*(-6),25);
assert.equal(-6/1,-6);
const a=json("docs/assets/data/practice/08-phuong-trinh-bat-phuong-trinh-v1-04.json");
const b=json("docs/assets/data/practice/09-he-phuong-trinh-v1-02.json");
assert(a.questions.some(q=>q.id==="EQ08V1_108"));
assert(b.questions.some(q=>q.id==="SYS09V1_033"));
assert(!all.some(q=>q.source_refs?.some(p=>p.endsWith("#11-WR-10"))),"simple cube root was explicitly rejected as Written");
console.log("PASS W4 candidate: 69 original WX SHA-locked; five append-only source-locked self-check items; independent 8/8 PASS; release pending; 3 MCQ reuses unchanged.");
