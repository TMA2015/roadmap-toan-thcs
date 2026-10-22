#!/usr/bin/env node
"use strict";
const assert=require("node:assert/strict");
const fs=require("node:fs");
const crypto=require("node:crypto");
const read=p=>fs.readFileSync(p,"utf8");
const data=JSON.parse(read("docs/assets/data/written-exercises/written-exercise-library-v1.json"));
const xs=data.exercises;
const receipt=read("review-packets/math-content-cleanup/MATH-CT05-07-W3B-WR-AUTHORING-R1_NOTEBOOKLM_VERDICT_RECEIPT.md");
assert(receipt.includes("PACKET_ID|MATH-CT05-07-W3B-WR-AUTHORING-R1"));
assert(receipt.includes("EXPECTED=2")&&receipt.includes("REVIEWED=2"));
assert(receipt.includes("OVERALL|PASS_FOR_AUTHORING_REVIEW"));
assert(xs.length>=67,"W3B original two published anchors must survive future append-only releases");
assert(data.published_scope?.exercise_count>=67,"published count must preserve W3B 65+2");
assert.equal(data.auto_readiness_credit,false);
assert.equal(data.self_marking_only,true);
// Reconstruct W3B's exact immutable 65-item baseline, undoing ONLY the
// independently S1-reviewed W9 classroom placement metadata (not old math).
const original65=JSON.parse(JSON.stringify(xs.slice(0,65)));
const W9placementIds=new Set([
 "WX03-RAT-001","WX03-RAT-002","WX13-LIN-001","WX14-TRI-001",
 "WX14-TRI-002","WX15-CEN-002","WX04-ALG-003","WX05-IDN-001",
 "WX06-FAC-001","WX07-RAT-001","WX16-QUAD-001","WX17-SIM-001",
 "WX09-SYS-003","WX10-FUN-002","WX11-RAD-001","WX12-QUA-001",
 "WX18-TRI-002","WX19-CIR-002"
]);
for(const e of original65){
 if(W9placementIds.has(e.exercise_id))delete e.kntt_placements;
 if(e.exercise_id==="WX21-STA-001"){e.grade_overlay=[8];e.kntt_placements=[{grade:6,chapter:9,lesson:"Bài 38–41 — Dữ liệu, bảng thống kê, biểu đồ tranh, biểu đồ cột và cột kép"}];}
}
const historical=JSON.stringify(original65);
// Pinned FNV1a64 fingerprint of every field of the 65 pre-W3B canonical entries.
// The old records, identities and source_refs must remain byte-equivalent in JSON form.
let h=0xcbf29ce484222325n;
for(let i=0;i<historical.length;i++)
 h=BigInt.asUintN(64,(h^BigInt(historical.charCodeAt(i)))*0x100000001b3n);
assert.equal(h.toString(16).padStart(16,"0"),"9d6647fc5958345d","historical canonical 65 records drifted");
assert.deepEqual(xs.slice(65,67).map(x=>x.exercise_id),["WX05-ENT-002","WX05-CH-001"],"reviewed W3B append IDs and original order");
assert.equal(new Set(xs.map(x=>x.exercise_id)).size,xs.length,"canonical IDs must be unique");
const batch=data.published_scope?.batches?.find(x=>x.batch_id==="CT05_07_W3B_WR_AUTHORING_R1");
assert.deepEqual(batch,{batch_id:"CT05_07_W3B_WR_AUTHORING_R1",packet_id:"MATH-CT05-07-W3B-WR-AUTHORING-R1",count:2,status:"PUBLISHED"});
for(const [id,source,hints,layer,level,label] of [
 ["WX05-ENT-002","05-ENT-02",2,"Entrance10","ENTRANCE10","Ôn thi vào 10"],
 ["WX05-CH-001","05-CH-01",3,"Specialized-Challenge","CHALLENGE","Thử thách"]
]){
 const x=xs.find(y=>y.exercise_id===id);
 assert(x&&x.exercise_kind==="anchor",id+" anchor missing");
 assert.equal(x.topic_id,"CT05");
 assert.equal(x.learning_layer,layer);
 assert.equal(x.level,level);
 assert.equal(x.learner_label,label);
 assert.equal(x.gates_core,false);
 assert.equal(x.auto_readiness_credit,false);
 assert.deepEqual(x.source_refs,["docs/kien-thuc/05-7-hang-dang-thuc/bai-tap.md#"+source]);
 assert.equal(x.academic_review?.status,"APPROVED");
 assert.equal(x.academic_review?.packet_id,"MATH-CT05-07-W3B-WR-AUTHORING-R1");
 assert.equal(x.academic_review?.method,"NOTEBOOKLM_OWNER_SUBMITTED");
 assert.equal(x.academic_review?.receipt,"review-packets/math-content-cleanup/MATH-CT05-07-W3B-WR-AUTHORING-R1_NOTEBOOKLM_VERDICT_RECEIPT.md");
 assert.equal(x.hint_steps.length,hints);
 assert(x.hint_steps.every(s=>typeof s==="string"&&s.length>=20),"nonempty reviewed hints "+id);
 assert.equal(x.solution_steps.length,4,"reviewed four solution steps "+id);
 assert(x.full_solution_markdown.includes("1.")&&x.full_solution_markdown.includes("4."),"worked solution "+id);
 assert(x.method_rationale_markdown&&x.remediation_markdown,"pedagogical guidance "+id);
 assert.equal(x.rubric.length,4,"four reviewed rubric rows "+id);
 assert.equal(x.rubric_total,4);
 assert.equal(x.rubric.reduce((v,r)=>v+r.points,0),4);
 assert.equal(x.common_mistakes.length,3);
 assert(x.remediation_links.every(l=>l.href.startsWith("../kien-thuc/")),"safe internal remediation "+id);
}
const ent=xs[65],challenge=xs[66];
assert(ent.problem_markdown.includes("xy=21")&&ent.full_solution_markdown.includes("100-42=58"),"Entrance10 answer 58");
assert(challenge.problem_markdown.includes("a+b+c=0")&&challenge.full_solution_markdown.includes("-3ab(a+b)")&&challenge.full_solution_markdown.includes("3abc"),"Challenge conditional cube proof");
assert.equal(10**2-2*21,58);
assert.equal(7**3+3**3+(-10)**3,3*7*3*(-10));
const ui=read("docs/assets/javascripts/written-exercise-library-v1.js");
assert(ui.includes("Gợi ý 1/${x.hint_steps.length}"),"Dynamic 2/3 staged hint button missing");
assert(!ui.includes('"Gợi ý 1/3"'),"Hardcoded three hints must not mask reviewed two-hint item");
console.log("PASS W3B written release: 65 original exercises immutably preserved, exact 2 approved anchors, 2/3 hints, 4pt rubrics, optional only, no automated credit");
