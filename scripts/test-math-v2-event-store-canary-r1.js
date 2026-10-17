#!/usr/bin/env node
"use strict";
const assert=require("node:assert/strict");
const Store=require("./prototypes/math-v2-event-store-canary-r1.js");
const Reducer=require("./prototypes/math-unified-counter-v2-shadow-r1.js");
class MemoryStorage{
  constructor(){this.data=new Map();this.mode="normal";this.writes=[];}
  getItem(key){return this.data.has(key)?this.data.get(key):null;}
  setItem(key,value){
    if(this.mode==="quota")throw Error("simulated quota");
    this.writes.push(key);
    if(this.mode==="corrupt_once"){this.mode="normal";this.data.set(key,"CORRUPT");return;}
    this.data.set(key,String(value));
  }
  removeItem(key){this.data.delete(key);}
}
const scope="FAMILY_DEMO_001";
const event=(event_id,kind,extra={})=>({
 schema:"math-evidence-event-v2",event_id,learner_scope:scope,
 item_id:"MATH-QUESTION-001",kind,evidence_class:Reducer.classes[kind],
 occurred_at:"2026-10-17T09:00:00+07:00",...extra
});
const storage=new MemoryStorage();
const disabled=Store.createCanary(storage,{enabled:false,learner_scope:scope});
assert.equal(disabled.read().events.length,0);
assert.throws(()=>disabled.append(event("EVENT_001",Reducer.TYPES.ANSWER,{correct:true})),/CANARY_FLAG_DISABLED/);
assert.equal(storage.data.size,0);
const active=Store.createCanary(storage,{enabled:true,learner_scope:scope});
const answer=event("EVENT_001",Reducer.TYPES.ANSWER,{correct:true});
const check=event("EVENT_002",Reducer.TYPES.READINESS);
const written=event("EVENT_003",Reducer.TYPES.WRITTEN);
assert.equal(active.append(answer).written,true);
assert.equal(active.append(check).written,true);
assert.equal(active.append(written).written,true);
assert.equal(active.append({...answer}).duplicate,true);
assert.equal(storage.writes.length,3,"idempotent retry cannot rewrite");
assert.deepEqual([...storage.data.keys()],[Store.KEY],"legacy stores never touched");
assert.deepEqual(active.summarize().formative,{answers:1,correct:1});
assert.deepEqual(active.summarize().readiness,{submissions:1});
assert.equal(active.summarize().written.self_checks,1);
assert.equal(active.summarize().written.assessment_credit,0);
const reloaded=Store.createCanary(storage,{enabled:true,learner_scope:scope});
assert.equal(reloaded.summarize().accepted,3,"reload preserves new canary events");
const untouched=storage.getItem(Store.KEY),writeCount=storage.writes.length;
assert.throws(()=>active.append({...answer,correct:false}),/CONFLICTING_EVENT_ID/);
assert.throws(()=>active.append({...answer,event_id:"EVENT_004",learner_scope:"OTHER_SCOPE"}),/CROSS_LEARNER_EVENT/);
assert.equal(storage.getItem(Store.KEY),untouched);
assert.equal(storage.writes.length,writeCount);
storage.mode="quota";
assert.throws(()=>active.append(event("EVENT_005",Reducer.TYPES.REMEDIATION)),/CANARY_WRITE_ABORTED/);
assert.equal(storage.getItem(Store.KEY),untouched,"quota rejection leaves existing events untouched");
storage.mode="silent_corrupt";
assert.throws(()=>active.append(event("EVENT_006",Reducer.TYPES.EXAM)),/CANARY_WRITE_ABORTED/);
assert.equal(storage.getItem(Store.KEY),untouched,"corrupt readback rolled back");
storage.mode="normal";
const backup=active.exportBackup("2026-10-17T09:30:00+07:00");
assert.equal(active.verifyBackup(backup).events.length,3);
const tampered=JSON.parse(JSON.stringify(backup));
tampered.snapshot.events[0].correct=false;
assert.throws(()=>active.verifyBackup(tampered),/CANARY_BACKUP_SHA_MISMATCH/);
const second=new MemoryStorage();
const importer=Store.createCanary(second,{enabled:true,learner_scope:scope});
assert.equal(importer.restore(backup).restored,3);
assert.deepEqual(importer.summarize(),active.summarize(),"cross-device opt-in restore roundtrip");
assert.throws(()=>importer.restore(backup),/CANARY_RESTORE_CONFLICT/);
assert.throws(()=>importer.restore(backup,{replace:true}),/BACKUP_ACKNOWLEDGEMENT_REQUIRED/);
assert.equal(importer.restore(backup,{replace:true,backupAcknowledged:true}).restored,3);
const foreign=Store.createCanary(new MemoryStorage(),{enabled:true,learner_scope:"OTHER_SCOPE"});
assert.throws(()=>foreign.restore(backup),/INVALID_CANARY_SNAPSHOT/);
const broken=new MemoryStorage();
broken.data.set(Store.KEY,"{bad-json");
assert.throws(()=>Store.createCanary(broken,{enabled:true,learner_scope:scope}).read(),/INVALID_CANARY_JSON/);
assert.equal(Store.createCanary(storage,{enabled:true,learner_scope:scope}).summarize().legacy_imported,false);
console.log("PASS Math Phase4 canary R3: flag-off guard, new-event counts, idempotent replay, conflict rejection, reload, SHA-256 backup, conflict-gated restore, quota and readback rollback; legacy untouched.");
