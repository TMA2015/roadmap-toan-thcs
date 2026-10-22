#!/usr/bin/env node
"use strict";
const fs=require("node:fs"),assert=require("node:assert/strict");
const read=p=>JSON.parse(fs.readFileSync(p,"utf8"));
const lock=read("scripts/data/w9-core-original-math-lock-r1.json");
const lib=read("docs/assets/data/written-exercises/written-exercise-library-v1.json");
const bank=read("docs/assets/data/practice/02-so-va-phep-tinh-micro-v1.json");
const ws=read("docs/assets/data/curriculum/topic02-learning-workspace.json");
const receipt=fs.readFileSync("review-packets/math-w9-core-coverage/02_NOTEBOOKLM_W9_S1_RECHECK_OWNER_RECEIPT_20261022.md","utf8");
const ui=fs.readFileSync("docs/assets/javascripts/written-exercise-library-v1.js","utf8");
const fnv=s=>{let h=2166136261;for(let i=0;i<s.length;i++){h^=s.charCodeAt(i);h=Math.imul(h,16777619)}return(h>>>0).toString(16).padStart(8,"0");};
const mathHash=x=>fnv(JSON.stringify(Object.fromEntries(lock.meta.math_fields.map(k=>[k,x[k]??null]))));
assert.equal(lock.meta.source_written_blob,"a8f19cea7f0f8b181e3cc1385ddbff13b75c252d");
assert.equal(lock.meta.source_num02_blob,"61c1e4ef1e2f0d44476c6f34f48fd7bbcce24622");
assert.equal(lock.historic_written_math.length,74);
assert.equal(lock.historic_micro.length,64);
assert.equal(lib.exercises.length,75);
assert.equal(lib.published_scope.exercise_count,74);
assert.equal(lib.candidate_scope.new_exercise_count,1);
assert.equal(lib.candidate_scope.owner_release_authorization,"NO_LIVE_RELEASE");
assert.deepEqual(lib.candidate_scope.exercise_ids,["WX02-NUM-004"]);
assert.equal(lib.auto_readiness_credit,false);
const byId=new Map(lib.exercises.map(e=>[e.exercise_id,e]));
assert.equal(byId.size,75);
for(const [id,digest] of lock.historic_written_math){
 const e=byId.get(id);assert(e,"lost canonical item "+id);
 assert.equal(mathHash(e),digest,"changed original problem/solution/rubric "+id);
}
const approved=[
["WX03-RAT-001",7,6],["WX03-RAT-002",7,6],["WX13-LIN-001",7,3],
["WX14-TRI-001",7,4],["WX14-TRI-002",7,4],["WX15-CEN-002",7,9],
["WX04-ALG-003",8,1],["WX05-IDN-001",8,2],["WX06-FAC-001",8,2],
["WX07-RAT-001",8,6],["WX16-QUAD-001",8,3],["WX17-SIM-001",8,4],
["WX09-SYS-003",9,1],["WX10-FUN-002",9,6],["WX11-RAD-001",9,3],
["WX12-QUA-001",9,6],["WX18-TRI-002",9,4],["WX19-CIR-002",9,9]
];
for(const [id,g,ch] of approved){
 const e=byId.get(id);assert(e,id+" missing");
 assert.deepEqual(e.kntt_placements.length,1);
 assert.equal(e.kntt_placements[0].grade,g,id);
 assert.equal(e.kntt_placements[0].chapter,ch,id);
 assert(e.kntt_placements[0].lesson.includes("Bài"),id);
 assert(receipt.includes(id),"no receipt for "+id);
}
const sta=byId.get("WX21-STA-001");
assert.deepEqual(sta.grade_overlay,[6]);
assert.equal(sta.kntt_placements[0].grade,6);
assert.equal(sta.kntt_placements[0].chapter,9);
assert.equal(sta.kntt_placements[0].lesson,"Bài 40 — Biểu đồ cột");
const added=byId.get("WX02-NUM-004");
assert(added,"new Written missing");
assert.equal(added.exercise_kind,"anchor");
assert.equal(added.level,"CORE_BASE");
assert.equal(added.learner_label,"Nền tảng");
assert.deepEqual(added.grade_overlay,[6]);
assert.equal(added.kntt_placements[0].chapter,3);
assert.deepEqual(added.skills,["gia-tri-tuyet-doi","so-nguyen-phep-tinh"]);
assert.equal(added.hint_steps.length,3);
assert.equal(added.rubric_total,5);
assert.equal(added.rubric.reduce((n,q)=>n+q.points,0),5);
assert(added.full_solution_markdown.includes("AB+BC=AC"));
assert.equal(added.academic_review.status,"APPROVED");
assert.equal(added.academic_review.release_gate,"OWNER_NO_LIVE_RELEASE");
assert.equal(added.academic_review.packet_id,lock.meta.receipt);
assert.equal(lib.exercises.filter(e=>e.kntt_placements?.length).length,27);
assert.equal(bank.question_count,67);
assert.equal(bank.questions.length,67);
const qmap=new Map(bank.questions.map(q=>[q.id,q]));
assert.equal(qmap.size,67);
for(const [id,digest] of lock.historic_micro)assert.equal(fnv(JSON.stringify(qmap.get(id))),digest,"changed original Micro "+id);
const addedMicro=bank.questions.slice(64);
assert.deepEqual(addedMicro.map(q=>q.id),["NUM02MICRO_065","NUM02MICRO_066","NUM02MICRO_067"]);
assert.deepEqual(addedMicro.map(q=>q.answer),[2,1,2]);
assert.deepEqual(addedMicro.map(q=>q.micro_role),["base","trap","apply"]);
for(const q of addedMicro){
 assert.equal(q.card_id,"num02-g6-core-3");
 assert.deepEqual(q.tags.skill,["gia-tri-tuyet-doi"]);
 assert.equal(q.tags.grade,6);assert.equal(q.tags.layer,"KNTT-Core");
 assert.equal(q.curriculum.book,"KNTT");
 assert.equal(q.options.length,4);assert.equal(new Set(q.options).size,4);
 assert.equal(q.authoring_review.packet_id,lock.meta.receipt);
}
const card=ws.cards.find(x=>x.id==="num02-g6-core-3");
assert.deepEqual(card.micro_practice.slice(0,10),lock.historic_num02_core3_ids);
assert.deepEqual(card.micro_practice.slice(10),addedMicro.map(q=>q.id));
for(const e of lib.exercises)for(const p of e.kntt_placements||[]){
 assert([6,7,8,9].includes(p.grade)&&p.chapter>0&&p.lesson.trim(),e.exercise_id+" malformed school mapping");
 assert(e.grade_overlay.includes(p.grade),e.exercise_id+" contradictory grade mapping");
}
for(const marker of ["kntt_placements","gradeSelect.addEventListener","chapterSelect.addEventListener","lessonSelect.addEventListener"])assert(ui.includes(marker));
assert(!ui.includes("grade_overlay.includes"),"school grade must not be inferred from grade_overlay");
assert(receipt.includes("AUTHORIZATION|NO_LIVE_RELEASE"));
console.log("PASS W9: 18 reviewed placements, 74 original Written mathematical payloads untouched; one gated new Written and 3 new Grade6 Micro; 64 Micro originals byte-content preserved.");
