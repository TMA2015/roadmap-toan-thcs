#!/usr/bin/env node
"use strict";
const assert = require("node:assert/strict");
const fs = require("node:fs");
const vm = require("node:vm");
const source = fs.readFileSync("scripts/prototypes/math-v2-postcommit-reconciliation-r18.js","utf8");
const site = fs.readFileSync("mkdocs.yml","utf8");
const practice = fs.readFileSync("docs/assets/javascripts/practice-engine-v2.js","utf8");
const r16 = fs.readFileSync("scripts/prototypes/math-v2-unified-ledger-r16.js","utf8");
assert(!site.includes("math-v2-postcommit-reconciliation-r18"));
assert(!practice.includes("MathV2PostcommitReviewR18"));
assert(source.includes("legacy_replay_allowed:false"));
assert(source.includes("automatic_v1_credit_allowed:false"));
assert(source.includes("await ledger.read()"));
assert(r16.includes('const tx=db.transaction(STORES,"readonly")'));

const scope="QA_R16_R17_R18_NODE_CASE";
const key="QA_R15_"+"a".repeat(32), id="R16_"+"b".repeat(32);
const intent={learner_scope:scope,submission_key:key,event_id:id,
 item_id:"R18-QA-ITEM-01",kind:"answer_attempt",correct:true,
 occurred_at:"2026-10-17T13:00:00.000Z",state:"STAGED"};
const event={schema:"math-evidence-event-v2",event_id:id,
 learner_scope:scope,item_id:intent.item_id,kind:"answer_attempt",
 evidence_class:"FORMATIVE",correct:true,occurred_at:intent.occurred_at};
const outbox={learner_scope:scope,event_id:id,state:"PENDING"};
const rows={intents:[intent],events:[],outbox:[]};
const copy=x=>JSON.parse(JSON.stringify(x));
const win={MathV2UnifiedLedgerR16:{create:async ({enabled,learner_scope})=>{
 assert.equal(enabled,true);assert.equal(learner_scope,scope);
 return {read:async()=>copy(rows)};
}}};
vm.runInNewContext(source,{window:win});
(async()=>{
 const disabled=await win.MathV2PostcommitReviewR18.create();
 assert.equal(disabled.enabled,false);
 await assert.rejects(()=>win.MathV2PostcommitReviewR18.create({
   enabled:true,learner_scope:"REAL_LEARNER"}),/R18_QA_SCOPE_ONLY/);
 const r=await win.MathV2PostcommitReviewR18.create({enabled:true,learner_scope:scope});
 const missing=await r.inspect("QA_R18_MISSING");
 assert.equal(missing.status,"NOT_FOUND");
 let status=await r.inspect(key);
 assert.equal(status.status,"UNCOMMITTED_RETRY_SAME_TOKEN");
 assert.equal(status.v2_formative_credit,0);
 assert.equal(status.legacy_replay_allowed,false);
 let counts=await r.project();
 assert.equal(counts.formative_attempts,0);
 rows.intents[0].state="SAVED";rows.events.push(event);rows.outbox.push(outbox);
 status=await r.inspect(key);
 assert.equal(status.status,"COMMITTED_UI_UNCERTAIN");
 assert.equal(status.v2_formative_credit,1);
 assert.equal(status.automatic_v1_credit_allowed,false);
 counts=await r.project();
 assert.equal(counts.formative_attempts,1);
 assert.equal(counts.formative_correct,1);
 assert.equal(counts.legacy_writes,0);
 rows.events.push(copy(event));
 counts=await r.project();
 assert.equal(counts.formative_attempts,1);
 assert.equal(counts.duplicate_event_ids,1);
 rows.events.pop();
 rows.outbox[0].state="WRONG";
 assert.equal((await r.inspect(key)).status,"INCONSISTENT_FAIL_CLOSED");
 rows.outbox[0].state="PENDING";
 rows.events[0].correct=false;
 assert.equal((await r.inspect(key)).status,"INCONSISTENT_FAIL_CLOSED");
 rows.events[0].correct=true;
 assert.equal((await r.inspect(key)).status,"COMMITTED_UI_UNCERTAIN");
 rows.events.push({schema:"math-evidence-event-v2",
  event_id:"R16_"+"c".repeat(32),learner_scope:scope,
  item_id:"QA-READINESS",kind:"readiness_submission",
  evidence_class:"INDEPENDENT_ASSESSMENT",
  occurred_at:"2026-10-17T13:01:00.000Z"});
 rows.events.push({schema:"math-evidence-event-v2",
  event_id:"R16_"+"d".repeat(32),learner_scope:scope,
  item_id:"QA-WRITTEN",kind:"written_self_check",
  evidence_class:"SELF_REPORTED",
  occurred_at:"2026-10-17T13:02:00.000Z"});
 counts=await r.project();
 assert.equal(counts.formative_attempts,1);
 assert.equal(counts.readiness_submissions,1);
 assert.equal(counts.written_self_checks,1);
 assert.equal(counts.automatic_written_readiness_credit,0);
 console.log("PASS R18 read-only postcommit statuses, same-ID dedup, lanes and default-off");
})().catch(error=>{console.error(error);process.exitCode=1;});
