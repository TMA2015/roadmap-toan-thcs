"use strict";

const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");

const ROOT = path.resolve(__dirname, "..");
const json = (file) => JSON.parse(fs.readFileSync(path.join(ROOT, file), "utf8"));
const obs = require("../docs/assets/javascripts/canonical-evidence-observer-v2.js");

const policy = json("docs/assets/data/curriculum/canonical-evidence-runtime-policy-04-07-v1.json");
const manifest = json("docs/assets/data/curriculum/canonical-evidence-g2-proven-skills-r1.json");
const validated = obs.validatePolicy(policy);

assert.equal(policy.state, "G2_PROVEN_SKILLS_STAGED_NOT_PRODUCTION_RELEASED");
assert.equal(policy.rows.length, 101);
assert.equal(manifest.rows.length, 101);
assert.equal(manifest.rows.filter(r => r.scope_stage === "G1_EXISTING_ACTIVE").length, 27);
assert.equal(manifest.rows.filter(r => r.scope_stage === "G2_DELTA_REVIEW").length, 74);
assert.equal(new Set(policy.rows.map(r => r.canonical_skill_id)).size, 7);
assert.equal(new Set(policy.rows.map(obs.evidenceUnitKey)).size, 23);
assert.equal(policy.production_store.key, "toan-thcs-canonical-evidence-v2");
assert.equal(policy.production_store.beta_v1_mode, "FROZEN_READ_ONLY_PROVENANCE");
assert.equal(policy.runtime_rules.normal_learner_ui_change, false);
assert.equal(policy.runtime_rules.mastery_threshold, null);
assert.equal(policy.runtime_rules.core_readiness_credit, false);

const policyById = new Map(policy.rows.map(r => [r.question_id, r]));
assert.equal(policyById.size, 101);
for (const m of manifest.rows) {
  const r = policyById.get(m.question_id);
  assert.ok(r, "policy missing " + m.question_id);
  for (const f of ["normalized_topic_key","canonical_skill_id","evidence_class","source_file","source_blob","phase_d_overlay_blob"]) {
    assert.equal(r[f], m[f], m.question_id + " " + f + " drift");
  }
  assert.equal(r.clone_family || null, m.clone_family || null, m.question_id + " clone drift");
  assert.deepEqual(r.supporting_skills || [], m.supporting_skills || [], m.question_id + " supporting drift");
  assert.deepEqual(r.legacy_skill_tags || [], m.legacy_skill_tags || [], m.question_id + " legacy-tag drift");
  assert.equal(
    r.capture_status,
    m.scope_stage === "G1_EXISTING_ACTIVE" ? "G1_CANARY_ACTIVE" : "G2_PROVEN_SKILLS_ACTIVE",
    m.question_id + " rollout status drift"
  );
}

let store = obs.emptyStore();
const q050 = validated.rows.get("RAT07V1_050");
const q058 = validated.rows.get("RAT07V1_058");
let rec = obs.recordAttemptToStore(store, q050, { correct:false, hintsUsed:0, fullSolutionViewed:false }, policy, "2026-09-30T12:00:00Z", "g2-1");
store = rec.store;
assert.equal(rec.event.independent_evidence, true);
assert.equal(rec.event.correct, false);
let a = obs.classifyAttempt(store, q058, { hintsUsed:0, fullSolutionViewed:false });
assert.equal(a.independent_evidence, false);
assert.equal(a.independent_reason, "clone_family_repeat");

store = obs.emptyStore();
const q117 = validated.rows.get("RAT07V1_117");
const q118 = validated.rows.get("RAT07V1_118");
rec = obs.recordAttemptToStore(store, q117, { correct:true, hintsUsed:0, fullSolutionViewed:false }, policy, "2026-09-30T12:01:00Z", "g2-2");
store = rec.store;
a = obs.classifyAttempt(store, q118, { hintsUsed:0, fullSolutionViewed:false });
assert.equal(a.independent_evidence, true);
assert.notEqual(obs.evidenceUnitKey(q117), obs.evidenceUnitKey(q118));

store = obs.emptyStore();
const q011 = validated.rows.get("RAT07V1_011");
const q091 = validated.rows.get("ALG04V2_091");
rec = obs.recordAttemptToStore(store, q011, { correct:true, hintsUsed:0, fullSolutionViewed:false }, policy, "2026-09-30T12:02:00Z", "g2-3");
store = rec.store;
a = obs.classifyAttempt(store, q091, { hintsUsed:0, fullSolutionViewed:false });
assert.equal(q011.canonical_skill_id, q091.canonical_skill_id);
assert.notEqual(q011.normalized_topic_key, q091.normalized_topic_key);
assert.equal(a.independent_evidence, true);

console.log("PASS G2 manifest-policy reconciliation: 101 = 27 G1 + 74 delta.");
console.log("PASS G2 boundary: 7 proven skills, 23 topic-scoped independent units.");
console.log("PASS G2 delta semantics: clone repeat, standalone units, cross-topic independence, negative evidence.");
