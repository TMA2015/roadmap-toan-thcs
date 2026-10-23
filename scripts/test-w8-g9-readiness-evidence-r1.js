#!/usr/bin/env node
"use strict";
// Official Grade9 Readiness candidate must isolate QA and every older assessment.
const assert=require("node:assert/strict"),fs=require("node:fs");
const Evidence=require("../docs/assets/javascripts/readiness-g9-evidence-v1.js");
const Backup=require("../docs/assets/javascripts/local-progress-backup-v1.js");
const Dashboard=require("../docs/assets/javascripts/math-progress-dashboard-v1.js");
const bank=JSON.parse(fs.readFileSync("docs/assets/data/assessment/23-xac-suat-g9-core-v1.json","utf8"));
class Storage{
 constructor(data={}){this.map=new Map(Object.entries(data));this.fail=false;}
 getItem(k){return this.map.has(k)?this.map.get(k):null;}
 setItem(k,v){if(this.fail)throw Error("quota");this.map.set(k,String(v));}
 removeItem(k){this.map.delete(k);}
}
const make=(label,score,role=Evidence.ROLE)=>({
 attempt_id:"G9-TEST-"+label,assessment_id:Evidence.ID,grade:9,form_version:bank.version,
 role,source_git_blob:bank.academic_review.source_git_blob,
 started_at:"2026-10-21T08:00:00.000Z",submitted_at:"2026-10-21T08:01:00.000Z",
 duration_seconds:60,total:10,answered:10,correct:score,accuracy:score/10,
 readiness_state:score>=8?"READY":"REVIEW_RECOMMENDED",
 items:bank.items.map((q,i)=>({id:q.id,selected:i%4,correct:i<score,skill:q.skill}))
});
(async()=>{
 const oldId="PROB23-CORE-READY-V1";
 const oldBucket={attempts:[{grade:6,correct:9,submitted_at:"2026-10-15T00:00:00Z"}],latest:{correct:9},best:{accuracy:.75}};
 const other={attempts:[{legacy:true}],notes:{keep:[1,2]}};
 const qa=make("QA",10,Evidence.LEGACY_QA_ROLE);
 const qaBucket={attempts:[qa],latest:qa,best:{accuracy:1,readiness_state:"READY",submitted_at:qa.submitted_at}};
 const initial={header:"preserve",assessments:{[oldId]:oldBucket,"GEO17-CORE-READY-V1":other,[Evidence.ID]:qaBucket}};
 const storage=new Storage({[Evidence.KEY]:JSON.stringify(initial)});
 assert.equal(Evidence.history(storage).attempts.length,0,"QA-only history is not official");
 assert.equal(Dashboard.summarize(storage).readiness.submitted,1,"QA must not count in official Readiness dashboard");
 const first=Evidence.save(storage,make("1",8));
 assert(first.ok&&!first.alreadySaved);
 const written=JSON.parse(storage.getItem(Evidence.KEY));
 assert.deepEqual(written.assessments[oldId],oldBucket);
 assert.deepEqual(written.assessments["GEO17-CORE-READY-V1"],other);
 assert.equal(written.header,"preserve");
 assert.deepEqual(written.assessments[Evidence.ID].attempts[0],qa,"historic QA attempt immutable");
 assert.equal(written.assessments[Evidence.ID].best.accuracy,.8,"QA 10/10 must not become official best");
 assert.deepEqual(written.assessments[Evidence.ID].legacy_qa_latest,qa);
 assert.deepEqual(written.assessments[Evidence.ID].legacy_qa_best,qaBucket.best);
 assert.equal(Dashboard.summarize(storage).readiness.submitted,2,"one old and one official Grade9 Readiness count");
 assert.equal(Evidence.history(storage).attempts.length,1);
 assert(Evidence.save(storage,make("1",8)).alreadySaved,"identical retry must be idempotent");
 assert.equal(Evidence.save(storage,make("1",7)).reason,"ATTEMPT_ID_CONFLICT","changed same-ID retry must fail");
 assert.equal(Evidence.save(storage,make("2",10)).totalAttempts,2);
 assert.equal(Evidence.save(storage,make("3",0)).totalAttempts,3);
 assert.equal(Evidence.history(storage).attempts.length,3,"never truncate official evidence");
 assert.equal(Evidence.history(storage).latest.correct,0);
 assert.equal(JSON.parse(storage.getItem(Evidence.KEY)).assessments[Evidence.ID].best.accuracy,1);
 const stable=storage.getItem(Evidence.KEY);
 assert.equal(Evidence.save(storage,make("newQA",10,Evidence.LEGACY_QA_ROLE)).reason,"INVALID_ATTEMPT");
 assert.equal(Evidence.save(storage,{...make("bad",8),grade:6}).reason,"INVALID_ATTEMPT");
 assert.equal(Evidence.save(storage,{...make("bad",8),items:[]}).reason,"INVALID_ATTEMPT");
 assert.equal(storage.getItem(Evidence.KEY),stable);
 const corrupt=new Storage({[Evidence.KEY]:"{bad"});
 assert.equal(Evidence.save(corrupt,make("new",8)).reason,"CORRUPT_EXISTING_DATA");
 assert.equal(corrupt.getItem(Evidence.KEY),"{bad");
 const malformed=new Storage({[Evidence.KEY]:JSON.stringify({assessments:{[Evidence.ID]:{attempts:[{grade:6}]}}})});
 assert.equal(Evidence.save(malformed,make("new",8)).reason,"INVALID_G9_HISTORY");
 const fail=new Storage({[Evidence.KEY]:JSON.stringify(initial)});fail.fail=true;
 assert.equal(Evidence.save(fail,make("new",8)).reason,"WRITE_FAILED");
 assert.equal(fail.getItem(Evidence.KEY),JSON.stringify(initial));
 assert(Backup.KEYS.includes(Evidence.KEY),"Grade9 store must be in existing backup allowlist");
 const backup=await Backup.buildBackup(storage,()=>"2026-10-21T08:02:00.000Z");
 await Backup.validateBackup(backup);
 const restored=new Storage();
 assert.equal(Backup.applyRestore(backup,restored).written,1);
 assert.equal(restored.getItem(Evidence.KEY),storage.getItem(Evidence.KEY),"backup must roundtrip bytes");
 assert.deepEqual(JSON.parse(restored.getItem(Evidence.KEY)).assessments[oldId],oldBucket);
 assert.deepEqual(Evidence.history(restored).attempts.map(a=>a.correct),[8,10,0]);
 const collide=new Storage({[Evidence.KEY]:JSON.stringify(initial)});
 assert.equal(Backup.applyRestore(backup,collide,"missing").written,0);
 assert.equal(collide.getItem(Evidence.KEY),JSON.stringify(initial));
 const player=fs.readFileSync("docs/assets/javascripts/readiness-g9-v1.js","utf8");
 assert(!player.includes("captureReadiness"),"never feed unscoped Core Mastery bridge");
 console.log("PASS W8 G9 independent evidence: QA excluded, 6-8 untouched, official 0/8/10, no truncate, SHA256 backup, conflict/quota/corrupt guards.");
})().catch(err=>{console.error(err);process.exitCode=1;});
