#!/usr/bin/env node
"use strict";
const assert=require("node:assert/strict");
const fs=require("node:fs");
const Core=require("../docs/assets/javascripts/local-progress-backup-v1.js");
const Dashboard=require("../docs/assets/javascripts/math-progress-dashboard-v1.js");

class MemoryStorage {
  constructor(initial={}){this.map=new Map(Object.entries(initial));this.failKey=null;}
  getItem(k){return this.map.has(k)?this.map.get(k):null;}
  setItem(k,v){if(this.failKey===k)throw Error("simulated_quota_error");this.map.set(k,String(v));}
  removeItem(k){this.map.delete(k);}
}
const json=o=>JSON.stringify(o);
const samples={
  "toan-thcs-practice-v1":json({questions:{"Q-01":{attempted:2,correct:1},"Q-02":{attempted:1,correct:1}},tags:{"NUM-ORDER":{attempted:3,correct:2}}}),
  "toan-thcs-assessment-v1":json({assessments:{"A-01":{attempts:[{submitted_at:"2026-10-11T10:00:00Z",correct:3,total:5}]}}}),
  "toan-thcs-taxonomy-v2-evidence-v1":json({schema:"taxonomy-v2-evidence-store-v1",recent_events:[],seen_questions:{},independent_units:{"unit01":{family_id:"NUM-ORDER",correct:true}}}),
  "toan-thcs-canonical-evidence-v2":json({schema:"canonical-skill-evidence-store-v2",recent_events:[],seen_questions:{},independent_units:{}}),
  "toan-thcs-remediation-v1":json({events:[]}),
  "roadmap:exam-history-v1":json([]),
  "roadmap.home.style.v1":"playful",
  "roadmap.ui.focus.v1":"1"
};
(async()=>{
  const original=new MemoryStorage(samples);
  const backup=await Core.buildBackup(original,()=> "2026-10-11T12:00:00.000Z");
  assert.equal(backup.schema,"self-learning-math-local-backup-v1");
  assert.equal(backup.app,"self-learning-math");
  assert.equal(Object.keys(backup.entries).length,Object.keys(samples).length);
  await Core.validateBackup(JSON.parse(JSON.stringify(backup)));
  const migrated=new MemoryStorage();
  const plan=Core.planRestore(backup,migrated);
  assert.equal(plan.add.length,Object.keys(samples).length);
  assert.equal(plan.replace.length,0);
  assert.equal(Core.applyRestore(backup,migrated).written,Object.keys(samples).length);
  assert.deepEqual(Object.fromEntries(migrated.map),samples);

  // Adding to a device with existing work does not overwrite history.
  const existing=new MemoryStorage({...samples,"toan-thcs-practice-v1":json({questions:{existing:{attempted:7,correct:7}},tags:{}})});
  const old=existing.getItem("toan-thcs-practice-v1");
  const skipped=Core.applyRestore(backup,existing,"missing");
  assert.equal(skipped.written,0);
  assert.deepEqual(skipped.conflicts,["toan-thcs-practice-v1"]);
  assert.equal(skipped.identical.length,Object.keys(samples).length-1);
  assert.equal(existing.getItem("toan-thcs-practice-v1"),old);
  assert.equal(Core.planRestore(backup,existing,"replace").replace.length,1);
  assert.throws(()=>Core.applyRestore(backup,existing,"replace",false),/Phải sao lưu/);
  const beforeOverwrite=await Core.buildBackup(existing);
  await Core.validateBackup(beforeOverwrite);
  assert.equal(Core.applyRestore(backup,existing,"replace",true).written,1);
  assert.equal(existing.getItem("toan-thcs-practice-v1"),samples["toan-thcs-practice-v1"]);

  // Tampering and unexpected keys cannot reach the write stage.
  const tampered=JSON.parse(JSON.stringify(backup));
  tampered.entries["toan-thcs-practice-v1"]=json({questions:{"HACK":{}},tags:{}});
  await assert.rejects(()=>Core.validateBackup(tampered),/SHA-256/);
  const alien=JSON.parse(JSON.stringify(backup));alien.entries["unapproved-key"]="{}";
  await assert.rejects(()=>Core.validateBackup(alien),/không được hỗ trợ/);
  const malformed=new MemoryStorage({...samples,"toan-thcs-assessment-v1":"{broken"});
  await assert.rejects(()=>Core.buildBackup(malformed),/Không đọc được/);

  // Storage quota errors: no silent partial restore when already-written keys can be rolled back.
  const fail=new MemoryStorage();
  fail.failKey="toan-thcs-assessment-v1";
  assert.throws(()=>Core.applyRestore(backup,fail),/Đã hoàn nguyên/);
  assert.equal(fail.map.size,0);

  const d=Dashboard.summarize(new MemoryStorage(samples));
  assert.equal(d.practice.attempted,3);
  assert.equal(d.practice.correct,2);
  assert.equal(d.practice.unique_questions,2);
  assert.equal(d.readiness.submitted,1);
  assert.equal(d.independent.units,1);
  assert.equal(d.independent.correct,1);
  assert.equal(d.independent.families,1);
  assert.equal(Dashboard.summarize(new MemoryStorage()).practice.attempted,0);
  assert.equal(Dashboard.summarize(new MemoryStorage()).source_states.practice,"empty");
  assert.equal(Dashboard.summarize(new MemoryStorage()).source_states.readiness,"empty");
  // No source-lane migration or weekly activity inferred from cumulative legacy counters.
  assert.equal(Dashboard.summarize(migrated).practice.attempted,3);
  assert.equal(migrated.getItem("toan-thcs-practice-v1"),samples["toan-thcs-practice-v1"]);
  assert.equal(Dashboard.summarize(malformed).source_states.readiness,"invalid");

  const page=fs.readFileSync("docs/tien-do-hoc-tap/index.md","utf8");
  const nav=fs.readFileSync("mkdocs.yml","utf8");
  assert.ok(page.includes("data-math-progress-dashboard"));
  assert.ok(page.includes("data-math-progress-backup"));
  assert.ok(page.includes('<h2 id="math-progress-continue-title">Tiếp tục học</h2>'));
  assert.ok(page.includes('<h2 id="math-progress-backup-title">Sao lưu và khôi phục tiến độ</h2>'));
  assert.ok(page.includes('<a href="../hoc-theo-lop/"><strong>Học theo lớp 6–9</strong></a>'));
  assert.ok(!page.includes("## Tiếp tục học"));
  assert.ok(!page.includes("[**Học theo lớp"));
  assert.ok(nav.includes("Tiến độ học tập: tien-do-hoc-tap/index.md"));
  assert.ok(!fs.readFileSync("docs/assets/javascripts/math-progress-dashboard-v1.js","utf8").includes("setItem("));
  console.log("PASS: versioned SHA-256 backup, allowlist, cross-device restore, conflict preview/replace gate, corruption reject and quota rollback.");
  console.log("PASS: dashboard descriptively reads separate Practice, Readiness and independent evidence without writing or regrading.");
})().catch(e=>{console.error(e);process.exitCode=1;});
