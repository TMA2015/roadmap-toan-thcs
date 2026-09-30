"use strict";

const assert = require("node:assert/strict");
const crypto = require("node:crypto");
const fs = require("node:fs");
const path = require("node:path");

const root = path.resolve(__dirname, "..");
const read = (file) => fs.readFileSync(path.join(root, file));
const json = (file) => JSON.parse(read(file).toString("utf8"));
const gitBlobSha = (buffer) => crypto.createHash("sha1")
  .update(Buffer.concat([Buffer.from("blob " + buffer.length + "\0"), buffer])).digest("hex");

const app = require("../docs/assets/javascripts/canonical-evidence-pilot-v1.js");
const config = json("docs/assets/data/curriculum/canonical-evidence-beta-v4-config-v1.json");
const manifestPath = "docs/assets/data/curriculum/canonical-evidence-pilot-core07-r1.json";
const manifest = json(manifestPath);

assert.equal(app.KEY, "toan-thcs-canonical-evidence-v1");
assert.equal(app.BUILD, "canonical-evidence-beta-v4-20260930");
assert.equal(config.storage_key, app.KEY);
assert.equal(gitBlobSha(read(manifestPath)), config.reviewed_manifest_blob);
assert.deepEqual(config.immutable_existing_storage_keys, [
  "toan-thcs-practice-v1",
  "toan-thcs-assessment-v1",
  "toan-thcs-assessment-v2"
]);

const files = [...new Set(manifest.pilot_scope.selected_items.map((item) => item.source_file))];
const sources = Object.fromEntries(files.map((file) => {
  const full = "docs/assets/data/practice/" + file;
  const expected = manifest.pilot_scope.selected_items.find((item) => item.source_file === file).source_blob;
  assert.equal(gitBlobSha(read(full)), expected, file + " source blob changed");
  return [file, json(full).questions];
}));

const items = app.prepareItems(config, manifest, sources);
assert.equal(items.length, 12);
assert.equal(new Set(items.map((item) => item.id)).size, 12);
assert.deepEqual(items.map((item) => item.id), config.selected_item_ids);
assert.equal(new Set(items.map((item) => item.canonical_skill_id)).size, 3);

const unitKeys = new Set(items.map(app.evidenceUnitKey));
assert.equal(unitKeys.size, 7, "reviewed pilot must expose exactly seven evidence units");
assert.equal(items.filter((item) => item.clone_family).length, 10);
assert.equal(items.filter((item) => !item.clone_family).length, 2);
assert.equal(items.reduce((sum, item) => sum + item.supporting_skills.length, 0), 8);

let state = app.emptyState();
const q009 = items.find((item) => item.id === "RAT07V1_009");
const q010 = items.find((item) => item.id === "RAT07V1_010");
const q017 = items.find((item) => item.id === "RAT07V1_017");
const q115 = items.find((item) => item.id === "RAT07V1_115");
const q116 = items.find((item) => item.id === "RAT07V1_116");

let assessment = app.classifyAttempt(state, q009, "initial");
assert.deepEqual(assessment, {
  independent_evidence: true,
  assisted: false,
  attempt_kind: "first_unseen_unit",
  independent_reason: "first_unseen_unit"
});
let event = app.makeEvent(q009, false, assessment, config, "2026-09-30T00:00:00Z", "e1");
state = app.appendEvidence(state, event);
assert.equal(state.events[0].correct, false);
assert.equal(state.events[0].independent_evidence, true, "wrong first exposure is still independent negative evidence");

assessment = app.classifyAttempt(state, q010, "initial");
assert.deepEqual(assessment, {
  independent_evidence: false,
  assisted: false,
  attempt_kind: "new_question_same_clone",
  independent_reason: "clone_family_repeat"
});
state = app.appendEvidence(state,
  app.makeEvent(q010, true, assessment, config, "2026-09-30T00:01:00Z", "e2"));

const repeat = app.classifyAttempt(state, q009, "initial");
assert.equal(repeat.independent_evidence, false);
assert.equal(repeat.assisted, true);
assert.equal(repeat.independent_reason, "repeat_question");

const freshOtherUnit = app.classifyAttempt(state, q017, "initial");
assert.equal(freshOtherUnit.independent_evidence, true);
assert.equal(freshOtherUnit.independent_reason, "first_unseen_unit");

const retryBeforeSeen = app.classifyAttempt(state, q115, "retry_misses");
assert.equal(retryBeforeSeen.independent_evidence, false);
assert.equal(retryBeforeSeen.assisted, true);
assert.equal(retryBeforeSeen.independent_reason, "assisted");

const summary = app.descriptiveSummary(state);
assert.deepEqual(summary["dieu-kien-xac-dinh"], {
  attempts: 2,
  distinct_questions: 2,
  independent_units: 1,
  independent_correct: 0,
  independent_incorrect: 1
});
assert.equal(summary["phan-tich-tu-mau"], undefined, "supporting skill must never receive its own counter");

let singletonState = app.emptyState();
for (const [index, q] of [q115, q116].entries()) {
  const a = app.classifyAttempt(singletonState, q, "initial");
  assert.equal(a.independent_evidence, true);
  singletonState = app.appendEvidence(singletonState,
    app.makeEvent(q, true, a, config, "2026-09-30T00:0" + index + ":00Z", "s" + index));
}
assert.equal(app.descriptiveSummary(singletonState)["tinh-gia-tri-phan-thuc"].independent_units, 2);

const changedSources = structuredClone(sources);
changedSources[q009.source_file] = structuredClone(changedSources[q009.source_file]);
changedSources[q009.source_file].find((q) => q.id === q009.id).answer = 1;
assert.throws(() => app.prepareItems(config, manifest, changedSources), /Source drift/);

const jsSource = read("docs/assets/javascripts/canonical-evidence-pilot-v1.js").toString("utf8");
for (const oldKey of config.immutable_existing_storage_keys) {
  assert.equal(jsSource.includes(oldKey), false, "runtime must not reference old storage key " + oldKey);
}
assert.equal(config.policy.mastery_threshold, null);
assert.equal(config.policy.core_readiness_credit, false);
assert.equal(config.policy.historical_backfill, false);
assert.equal(config.policy.dual_write, false);
assert.equal(config.policy.practice_engine_integration, false);

let bounded = app.emptyState();
for (let i = 0; i < 505; i += 1) {
  const synthetic = { ...q115, question_id: "synthetic-" + i, id: "synthetic-" + i };
  const a = {
    independent_evidence: true, assisted: false,
    attempt_kind: "first_unseen_unit", independent_reason: "first_unseen_unit"
  };
  bounded = app.appendEvidence(bounded,
    app.makeEvent(synthetic, i % 2 === 0, a, config,
      "2026-09-30T01:00:00Z", "bounded-" + i));
}
assert.equal(bounded.events.length, 500);
assert.equal(bounded.events[0].question_id, "synthetic-5");

console.log("PASS 12/12 source-locked Beta v4 items; 3 skills; 7 evidence units.");
console.log("PASS clone-family de-dup, negative evidence, singleton evidence and supporting metadata-only.");
console.log("PASS isolated storage contract; no legacy/Readiness/Beta-v3 store reference in runtime.");
console.log("PASSED canonical evidence Beta v4 unit checks.");
