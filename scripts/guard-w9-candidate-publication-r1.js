#!/usr/bin/env node
"use strict";
// Production deployment preflight: never publish an owner-gated Written draft.
// --candidate-check asserts W9 draft is deliberately nonreleasable (PR QA).
// --deploy is a fail-closed check used BEFORE mkdocs gh-deploy on main.
const fs=require("node:fs");
const assert=require("node:assert/strict");
const file="docs/assets/data/written-exercises/written-exercise-library-v1.json";
const data=JSON.parse(fs.readFileSync(file,"utf8"));
const total=data.exercises.length;
const published=data.published_scope?.exercise_count;
const candidate=data.candidate_scope;
const pendingCount=candidate?.new_exercise_count||0;
if(process.argv.includes("--candidate-check")){
  assert.equal(total,75,"W9 candidate bank must contain 75 original+new");
  assert.equal(published,74,"the prior 74 are still the published baseline");
  assert.equal(pendingCount,1,"exact one W9 new Written is unapproved");
  assert.deepEqual(candidate.exercise_ids,["WX02-NUM-004"]);
  assert.equal(candidate.owner_release_authorization,"NO_LIVE_RELEASE");
  console.log("PASS W9 production hold: 74 published original Written; 1 unapproved candidate excluded from publication declaration.");
} else if(process.argv.includes("--deploy")){
  // A mismatched count means the JSON would expose more content than
  // the Owner has declared released. Even a syntactically valid PR must
  // NOT be deployed while the staged candidate remains present.
  assert.equal(pendingCount,0,
    "BLOCKED W9 DEPLOY: pending Written candidate exists; obtain explicit Owner authorization and finalize release metadata.");
  assert.equal(published,total,
    "BLOCKED W9 DEPLOY: published_scope does not match the number of visible Written items.");
  assert(!candidate||candidate.owner_release_authorization!=="NO_LIVE_RELEASE",
    "BLOCKED W9 DEPLOY: Owner has not authorized candidate release.");
  console.log("PASS W9 production gate: no pending Written items; all published counts match.");
} else {
  console.error("Usage: node scripts/guard-w9-candidate-publication-r1.js --candidate-check | --deploy");
  process.exitCode=2;
}
