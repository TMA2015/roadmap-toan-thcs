#!/usr/bin/env node
"use strict";
const fs=require("fs"),path=require("path");
const base=path.resolve(__dirname,"..");
const read=p=>fs.readFileSync(path.join(base,p),"utf8"),json=p=>JSON.parse(read(p));
const ok=(cond,reason)=>{if(!cond)throw Error("Topic25 Gemini R3: "+reason)};
const source="5f74d7c377bc94f2688a9b5ee431d90c88af0536";
const report=json("review-packets/topic25/GEMINI_TARGETED_R3_RESULT_2026-09-26.normalized.json");
const packet=read("review-packets/topic25/GEMINI_REVIEW_PACKET_2026-09-26_TARGETED_R3.txt");
const targets=[...packet.matchAll(/^========== BEGIN TARGET SOURCE FILE: (.*?) \(git blob ([a-f0-9]+)\) ==========$/gm)].map(m=>m[1]);
const contexts=[...packet.matchAll(/^========== BEGIN CONTEXT SOURCE FILE: (.*?) \(git blob ([a-f0-9]+)\) ==========$/gm)].map(m=>m[1]);
const listed=report.target_files_reviewed.map(x=>x.path);
ok(report.record_type==="normalized_user_supplied_gemini_review_result"&&report.notice.includes("not a byte-for-byte copy"),"honest user-message provenance");
ok(report.packet_id==="TOPIC25-GEMINI-TARGETED-R3-20260926"&&report.source_commit===source&&report.verdict==="APPROVE","locked result identity");
ok(packet.includes("SOURCE COMMIT (FROZEN): "+source),"packet source-lock");
ok(targets.length===9&&new Set(targets).size===9&&contexts.length===8,"nine unique targets and eight contexts");
ok(listed.length===9&&new Set(listed).size===9&&listed.every(x=>targets.includes(x)),"all nine report targets map to snapshot");
ok(report.target_files_reviewed.every(x=>x.status==="PASS"&&x.evidence_summary),"each target has evidence");
ok(report.context_files_read.length===5&&report.context_files_read.every(x=>contexts.includes(x)),"context scope is explicitly limited to five");
ok(Array.isArray(report.critical_corrections)&&report.critical_corrections.length===0,"no proposed math corrections");
for(const p of targets.concat(contexts))ok(fs.existsSync(path.join(base,p)),"source path exists: "+p);
const cat=json("docs/assets/data/anchors/anchor-catalog-v1.json");
ok(cat.anchors.length===11&&cat.representative_ids.length===10,"catalog ID/representative invariant");
for(const n of ["006","007","010"]){
 const a=cat.anchors.find(x=>x.id==="A25-"+n);
 ok(a&&a.deep_dive_review?.includes("gemini_R3_source_locked_pass_"+source),"new deep-page review state "+n);
}
ok(cat.anchors.find(x=>x.id==="A25-011")?.independent_math_review?.includes(source),"A25-011 review state");
for(const n of ["004","008","009"])ok(cat.anchors.find(x=>x.id==="A25-"+n)?.figure_review?.includes(source),"figure review state "+n);
for(const e of json("docs/assets/data/exams/topic25-exams-v1.json").exams){
 let total=0;
 ok(e.total_points===10&&e.duration_minutes===120,"exam header "+e.id);
 for(const item of e.items){total+=item.points;ok(Math.abs(item.criteria.reduce((sum,c)=>sum+c.points,0)-item.points)<1e-9,"item rubric "+e.id+"/"+item.id);}
 ok(Math.abs(total-10)<1e-9,"exam total "+e.id);
}
const task=json("docs/assets/data/collaboration/task-registry.json").tasks;
for(const id of ["TOPIC25-INDEPENDENT-MATH-REVIEW-001","TOPIC25-R2-SOURCE-COVERAGE-001"])
 ok(task.find(t=>t.id===id)?.status==="DONE","closed task "+id);
const ctx=json("docs/assets/data/collaboration/project-context.json");
ok(ctx.version==="1.0.57"&&ctx.current_state.topic25_followup.startsWith("CLOSED:"),"handoff version and closure");
const note=read("review-packets/topic25/REVIEW_INTEGRATION_R3_2026-09-26.md");
ok(note.includes("9/9")&&note.includes("5/8")&&note.includes("60000.426088"),"coverage and SVG rounding documented");
console.log("PASS: Topic25 R3 source scope (9 target PASS, 5 context listed), math rubric, metadata, task closure, provenance and handoff.");
