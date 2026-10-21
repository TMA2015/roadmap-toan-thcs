#!/usr/bin/env node
"use strict";
// QA-only Grade9 Readiness persistence: never mutate an old assessment bucket.
const assert=require("node:assert/strict");
const fs=require("node:fs");
const Evidence=require("../docs/assets/javascripts/readiness-g9-evidence-qa-v1.js");
const Backup=require("../docs/assets/javascripts/local-progress-backup-v1.js");
class Storage {
  constructor(data={}){this.map=new Map(Object.entries(data));this.fail=false;}
  getItem(k){return this.map.has(k)?this.map.get(k):null;}
  setItem(k,v){if(this.fail)throw Error("simulated quota");this.map.set(k,String(v));}
  removeItem(k){this.map.delete(k);}
}
const bank=JSON.parse(fs.readFileSync("docs/assets/data/qa/ct23-g9-readiness-candidate-v1.json","utf8"));
const make=(suffix,score)=>({
  attempt_id:"G9-TEST-"+suffix, assessment_id:bank.assessment_id, grade:9, form_version:bank.version,
  role:"independent_grade9_readiness_qa",source_git_blob:bank.academic_review.source_git_blob,
  started_at:"2026-10-21T08:00:00.000Z",submitted_at:"2026-10-21T08:01:00.000Z",
  duration_seconds:60,correct:score,total:10,answered:10,accuracy:score/10,
  readiness_state:score>=8?"READY":"REVIEW_RECOMMENDED",
  items:bank.items.map((q,i)=>({id:q.id,selected:i%4,correct:i<score,skill:q.skill}))
});
(async()=>{
  const OLD_ID="PROB23-CORE-READY-V1";
  const oldBucket={attempts:[{id:"legacy-6-8",score:7}],best:{accuracy:.7},latest:{id:"legacy-6-8"},other:"preserve"};
  const oldMore={attempts:[{foo:1}],notes:{a:[3,2,1]}};
  const base={assessment_title:"legacy",assessments:{[OLD_ID]:oldBucket, "GEO17-CORE-READY-V1":oldMore}};
  const storage=new Storage({[Evidence.KEY]:JSON.stringify(base)});
  assert.equal(Evidence.KEY,"toan-thcs-assessment-v1");
  assert.equal(Evidence.ID,bank.assessment_id);
  const first=Evidence.save(storage,make("1",8));
  assert(first.ok&&!first.alreadySaved);
  const after=JSON.parse(storage.getItem(Evidence.KEY));
  assert.deepEqual(after.assessments[OLD_ID],oldBucket,"Grade6–8 assessment logical content cannot change");
  assert.deepEqual(after.assessments["GEO17-CORE-READY-V1"],oldMore,"other topic cannot change");
  assert.equal(after.assessment_title,"legacy");
  assert.equal(after.assessments[Evidence.ID].latest.grade,9);
  assert.equal(after.assessments[Evidence.ID].best.accuracy,.8);
  assert.equal(Evidence.save(storage,make("1",8)).alreadySaved,true,"idempotent replay");
  assert.equal(Evidence.history(storage).attempts.length,1);
  assert.equal(Evidence.save(storage,make("2",10)).totalAttempts,2);
  assert.equal(Evidence.save(storage,make("3",0)).totalAttempts,3);
  assert.equal(Evidence.history(storage).attempts.length,3,"no silent truncation");
  assert.equal(Evidence.history(storage).latest.correct,0);
  const best=JSON.parse(storage.getItem(Evidence.KEY)).assessments[Evidence.ID].best;
  assert.equal(best.accuracy,1,"best from prior successful Grade9 submission retained");
  const current=storage.getItem(Evidence.KEY);
  assert.equal(Evidence.save(storage,{...make("bad",10),grade:6}).reason,"INVALID_ATTEMPT");
  assert.equal(storage.getItem(Evidence.KEY),current,"invalid attempt no mutation");
  const corrupted=new Storage({[Evidence.KEY]:"{malformed"});
  assert.equal(Evidence.save(corrupted,make("new",9)).reason,"CORRUPT_EXISTING_DATA");
  assert.equal(corrupted.getItem(Evidence.KEY),"{malformed");
  const malformedExisting=new Storage({[Evidence.KEY]:JSON.stringify({assessments:{[Evidence.ID]:{attempts:[{grade:6}]}}})});
  assert.equal(Evidence.save(malformedExisting,make("new",9)).reason,"INVALID_G9_HISTORY");
  const unknownStore=new Storage({[Evidence.KEY]:JSON.stringify({assessments:"not a map"})});
  assert.equal(Evidence.save(unknownStore,make("new",9)).reason,"INVALID_EXISTING_STORE");
  const failed=new Storage({[Evidence.KEY]:JSON.stringify(base)});failed.fail=true;
  assert.equal(Evidence.save(failed,make("new",9)).reason,"WRITE_FAILED");
  assert.equal(failed.getItem(Evidence.KEY),JSON.stringify(base));

  // Old backup implementation already includes the single assessment store key.
  assert(Backup.KEYS.includes(Evidence.KEY),"existing backup must include Grade9 result");
  const backup=await Backup.buildBackup(storage,()=>"2026-10-21T08:02:00.000Z");
  await Backup.validateBackup(backup);
  const fresh=new Storage();
  assert.equal(Backup.applyRestore(backup,fresh).written,1);
  assert.equal(fresh.getItem(Evidence.KEY),storage.getItem(Evidence.KEY),"backup roundtrip exact stored bytes");
  assert.equal(Evidence.history(fresh).attempts.length,3);
  assert.deepEqual(JSON.parse(fresh.getItem(Evidence.KEY)).assessments[OLD_ID],oldBucket);
  const collide=new Storage({[Evidence.KEY]:JSON.stringify(base)});
  assert.equal(Backup.applyRestore(backup,collide,"missing").written,0,"never auto overwrite existing");
  assert.equal(collide.getItem(Evidence.KEY),JSON.stringify(base));
  assert(!fs.readFileSync("docs/assets/javascripts/readiness-g9-qa-v1.js","utf8").includes("captureReadiness"),
    "no unscoped Readiness bridge");
  console.log("PASS G9 QA evidence: idempotent bucket, legacy isolation, 8/10 10/10 0/10, corrupt/invalid/quota guard and SHA-256 backup roundtrip.");
})().catch(err=>{console.error(err);process.exitCode=1;});
