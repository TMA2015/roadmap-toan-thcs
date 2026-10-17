#!/usr/bin/env node
"use strict";
const assert=require("node:assert/strict"),fs=require("node:fs");
const gate=fs.readFileSync("scripts/prototypes/math-v2-practice-unified-ledger-gate-r17.js","utf8");
const ledger=fs.readFileSync("scripts/prototypes/math-v2-unified-ledger-r16.js","utf8");
const practice=fs.readFileSync("docs/assets/javascripts/practice-engine-v2.js","utf8");
const site=fs.readFileSync("mkdocs.yml","utf8");
assert(gate.includes('if (!cfg?.enabled) return;'),"R17 must be off by default");
assert(gate.includes("R17_QA_SCOPE_ONLY"),"QA synthetic learner scope only");
assert(gate.includes("const api=window.MathV2UnifiedLedgerR16;") &&
  gate.includes("const ledger=api.create({learner_scope:scope,enabled:true});"),
  "R17 must use the exact R16 singleton API with enabled QA scope");
assert(gate.includes("window.MathV2PracticeCommitGateR15=Object.freeze({"),
 "R17 must be test-only implementation of preexisting gated R15 hook");
assert(gate.includes("db.stage({")&&gate.includes("db.commit(token"),"R16 stage then atomic commit");
assert(gate.includes('x.state==="STAGED"'),"R17 restores unresolved intent by stable ID");
assert(gate.includes("qaExport:async()=> (await ledger).exportBackup()"),
 "R16 signed backup includes intents+events+outbox");
assert(gate.includes("qaImport:async(snapshot,opts)=> (await ledger).restore(snapshot,opts)"));
assert(ledger.includes('const tx=db.transaction(STORES,"readwrite")'),
 "R16 atomic journal must remain one cross-store transaction");
assert(practice.includes("window.MathV2PracticeCommitGateR15?.enabled === true")&&
  practice.includes("this.answer(selectedIndex, true);"),
 "practice must wait for commit before invoking original grading");
assert(!site.includes("math-v2-practice-unified-ledger-gate-r17")&&
  !site.includes("math-v2-unified-ledger-r16"),"R17/R16 must NOT auto-load in the student app");
const files=["docs/assets/javascripts/practice-engine-v2.js","docs/assets/javascripts/assessment-engine-v1.js"];
assert(!files.some(f=>fs.readFileSync(f,"utf8").includes("math-v2-practice-unified-ledger-gate-r17")),
  "no learner module may import the QA bridge");
console.log("PASS R17 source contract: real Practice gate uses isolated R16 atomic ledger, no automatic student activation.");
