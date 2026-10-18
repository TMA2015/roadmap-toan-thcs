#!/usr/bin/env node
"use strict";
const assert=require("node:assert/strict"),fs=require("node:fs");
const {audit,TARGETS,FLAGGED,RECEIPT,PIN,PRIMARY_RECEIPT,PRIMARY_PIN}=require("./prototypes/math-v2-r33-s1-proof-matrix.js");
const a=audit();
assert.equal(a.schema,"math-v2-r33-provisional-24-row-S1-evidence-matrix-v1");
assert.equal(a.input_rows,24);
assert.equal(a.flagged_priority_ids,16);
assert.equal(a.residual_primary_S1_ids,8);
assert.equal(a.academic_S1_accepted,0);
assert.equal(a.first_party_pages_directly_viewed,5);
assert.equal(a.first_party_page_observed_item_count,9);
assert.equal(a.items_still_without_first_party_page_basis,15);
assert.equal(a.primary_page_observation_receipt_pin,PRIMARY_PIN);
assert.deepEqual(a.rows.filter(x=>x.first_party_publisher_page_observed).map(x=>x.question_id),[
 "NUM02V1_145","NUM02V1_146","NUM02V1_147",
 "ALG04V2_133","ALG04V2_134","ALG04V2_135","ALG04V2_136","ALG04V2_137","ALG04V2_138"
]);
assert(a.rows.filter(x=>x.first_party_publisher_page_observed).every(x=>
 x.observed_primary_page_keys.length>0&&
 x.S1_observed_question_comparison.length>=35));
assert.equal(a.source_receipt_pin,PIN);
assert.equal(a.source_R27_originals_verified,true);
assert.equal(a.reviewer_R32_pass_claims_not_imported,true);
assert.deepEqual(a.rows.map(r=>r.question_id),TARGETS);
assert.deepEqual(a.rows.filter(r=>r.audit_priority.startsWith("P1"))
 .map(r=>r.question_id),FLAGGED);
assert(a.rows.every(r=>r.source_git_blob_sha.length===40&&r.exact_record_sha256.length===64));
assert(a.rows.every(r=>!r.primary_S1_verified&&
 r.final_citation_verdict==="INSUFFICIENT_EVIDENCE"&&
 r.approved_curriculum_layer===null&&
 !r.academic_pass_authorized&&!r.production_skill_counter_authorized&&!r.mastery_credit_authorized));
const original=JSON.parse(fs.readFileSync(RECEIPT,"utf8"));
const modified=structuredClone(original);
modified.observations[1].question_id=modified.observations[0].question_id;
assert.throws(()=>audit({override:modified}),/R33_PRIORITY_SET_CHANGED_OR_DUPLICATE/);
const promoted=structuredClone(original);
promoted.owner_academic_approval=true;
assert.throws(()=>audit({override:promoted}),/R33_UNSAFE_AUTHORIZATION_OR_SOURCE_CHANGE/);
const fakeS1=structuredClone(original);
fakeS1.observations[0].primary_S1_page_scan_verified=true;
assert.throws(()=>audit({override:fakeS1}),/R33_INVALID_OBSERVATION_OR_FAKE_S1/);
const fakeVerdict=structuredClone(original);
fakeVerdict.observations[0].academic_verdict="PASS";
assert.throws(()=>audit({override:fakeVerdict}),/R33_INVALID_OBSERVATION_OR_FAKE_S1/);
const primary=JSON.parse(fs.readFileSync(PRIMARY_RECEIPT,"utf8"));
const primaryFake=structuredClone(primary);
primaryFake.rows[0].academic_verdict_approved=true;
assert.throws(()=>audit({overridePrimary:primaryFake}),/R33_INVALID_PRIMARY_ITEM_OBSERVATION/);
const primaryDuplicate=structuredClone(primary);
primaryDuplicate.rows[1].question_id=primaryDuplicate.rows[0].question_id;
assert.throws(()=>audit({overridePrimary:primaryDuplicate}),/R33_INVALID_PRIMARY_ITEM_OBSERVATION/);
const primaryBadSource=structuredClone(primary);
primaryBadSource.printed_page_sources.T7T2_P45.observed_page_image="https://example.com/fake.png";
assert.throws(()=>audit({overridePrimary:primaryBadSource}),/R33_INVALID_PUBLISHER_PAGE_LOCATORS/);
assert.equal(a.safeguards.original_S1_pages_examined_for_subset,true);
assert.equal(a.safeguards.all_original_S1_citations_validated,false);
const src=fs.readFileSync("scripts/prototypes/math-v2-r33-s1-proof-matrix.js","utf8");
assert(!/localStorage|indexedDB|sessionStorage|sendBeacon/.test(src));
assert(!/writeFile|appendFile|unlinkSync|renameSync|rmSync/.test(src));
assert(!fs.readFileSync("mkdocs.yml","utf8").includes("math-v2-r33-s1-proof-matrix.js"));
assert(!fs.readFileSync("docs/assets/javascripts/practice-engine-v2.js","utf8")
 .includes("math-v2-r33-s1-proof-matrix.js"));
console.log("PASS R33: 24/24 IDs source-locked; 16 priority S2 flags, 8 routine S1 checks; "+
 "9 item links to 5 inspected official SGK pages; zero academic approval and learner mutation");
