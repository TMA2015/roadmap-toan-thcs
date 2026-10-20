#!/usr/bin/env node
"use strict";
const assert=require("node:assert/strict"),fs=require("node:fs");
const {audit,FILE,PIN,REGISTRY_PIN,SOURCE_GROUPS}=
 require("./prototypes/math-v2-r38-40mcq-skill-family-compatibility.js");
const {gitBlob}=require("./prototypes/math-v2-source-locked-skill-audit-r22.js");
const r=audit();
assert.equal(gitBlob(fs.readFileSync(FILE)),PIN);
assert.equal(gitBlob(fs.readFileSync("docs/assets/data/curriculum/skill-taxonomy-v2-registry-r1.json")),REGISTRY_PIN);
assert.equal(r.academically_approved_questions,40);
assert.equal(r.exact_family_candidates_not_approved,6);
assert.equal(r.diagnostic_subskill_only_needing_review,27);
assert.equal(r.arithmetic_square_root_family_gap,3);
assert.equal(r.CT03_legacy_Entrance10_to_Core_layer_conflicts,4);
assert.equal(Object.keys(SOURCE_GROUPS).length,8);
assert.deepEqual(r.proposed_ratio_split,{
 RATIO_DIRECT:["RAT03V1_121","RAT03V1_123"],
 RATIO_BASIC:["RAT03V1_122","RAT03V1_124"]
});
assert.equal(r.option_id_runtime_ready,false);
assert.equal(r.approved_assessed_family_mappings,0);
assert.equal(r.learner_credit_authorized,false);
assert.equal(r.history_migration_authorized,false);
assert.equal(r.no_canonical_registry_or_bank_writes,true);
const original=JSON.parse(fs.readFileSync(FILE,"utf8"));
const fakeApproved=structuredClone(original);
fakeApproved.reviewed_family_mapping_approved_count=1;
assert.throws(()=>audit({override:fakeApproved}),/R38_AUTHORITY_SCOPE_CHANGED/);
const wrongCore=structuredClone(original);
wrongCore.rows.find(x=>x.item_id==="RAT03V1_121").review_candidate_family_id="RATIO-MODEL";
assert.throws(()=>audit({override:wrongCore}),/R38_CANDIDATE_FAMILY_CHANGED_/);
const forgedRoot=structuredClone(original);
forgedRoot.rows.find(x=>x.item_id==="NUM02V1_144").review_candidate_family_id="NUM-SETS";
assert.throws(()=>audit({override:forgedRoot}),/R38_CANDIDATE_FAMILY_CHANGED_/);
const swapped=structuredClone(original);
[swapped.rows[0],swapped.rows[1]]=[swapped.rows[1],swapped.rows[0]];
assert.throws(()=>audit({override:swapped}),/R38_ITEM_OR_ACADEMIC_DRIFT_/);
const wrongLayer=structuredClone(original);
wrongLayer.rows.find(x=>x.item_id==="QUA12V1_121").approved_academic_layer="KNTT-Core";
assert.throws(()=>audit({override:wrongLayer}),/R38_ITEM_OR_ACADEMIC_DRIFT_/);
const source=fs.readFileSync("scripts/prototypes/math-v2-r38-40mcq-skill-family-compatibility.js","utf8");
assert(!/localStorage|indexedDB|sessionStorage|sendBeacon|writeFile|appendFile|renameSync|unlinkSync/.test(source));
console.log("PASS R38: 40 owner academically approved, 6 exact old family candidates, 27 subskill review, 3 root holds, 4 CT03 layer conflicts; 0 reviewed Family authorizations");
