#!/usr/bin/env node
"use strict";
const assert=require("node:assert/strict"),fs=require("node:fs");
const {audit,TARGETS,FLAGGED,RECEIPT,PIN,PRIMARY_RECEIPT,PRIMARY_PIN,G9_CONCEPT_RECEIPT,G9_CONCEPT_PIN,USER_S1_RECEIPT,USER_S1_PIN,G6_PDF_SHA256,G9_PDF_SHA256}=require("./prototypes/math-v2-r33-s1-proof-matrix.js");
const a=audit();
assert.equal(a.schema,"math-v2-r33-provisional-24-row-S1-evidence-matrix-v1");
assert.equal(a.input_rows,24);
const editorialPath="review-packets/math-phase4-r27-mcq-40/TEMP_R33_OWNER_EDITORIAL_24_ID_METADATA_DECISION_MATRIX_20261018.md";
const editorial=fs.readFileSync(editorialPath,"utf8");
assert(editorial.includes("EDITORIAL_CANDIDATE_NOT_ACADEMICALLY_APPROVED"));
const editorialRows=editorial.split("\n")
 .filter(line=>/^\| `(?:NUM02V1_|ALG04V2_|QUA12V1_)\d+` \|/.test(line))
 .map(line=>{
  const cells=line.split("|").map(x=>x.trim());
  return {id:cells[1].replace(/`/g,""),evidence:cells[4].replace(/`/g,""),
   layer:cells[5].replace(/`/g,"")};
 });
assert.equal(editorialRows.length,24,"24 editorial rows");
assert.deepEqual(editorialRows.map(x=>x.id),TARGETS,"editorial item order");
assert.equal(new Set(editorialRows.map(x=>x.id)).size,24,"editorial item uniqueness");
assert.equal(editorialRows.filter(x=>x.evidence==="STRUCTURAL_CLONE").length,8);
assert.equal(editorialRows.filter(x=>x.evidence==="CONCEPT_BASE").length,16);
assert.equal(editorialRows.filter(x=>x.evidence==="EXACT_MATCH").length,0);
assert.equal(editorialRows.filter(x=>x.layer==="KNTT-Core").length,21);
assert.deepEqual(editorialRows.filter(x=>x.layer==="LAYER_HOLD").map(x=>x.id),
 ["QUA12V1_121","QUA12V1_122","QUA12V1_123"]);
assert(editorial.includes("academic_pass_authorized=false")&&
 editorial.includes("production_skill_counter_authorized=false")&&
 editorial.includes("production_release_authorized=false"));
assert.equal(a.flagged_priority_ids,16);
assert.equal(a.residual_primary_S1_ids,8);
assert.equal(a.academic_S1_accepted,0);
assert.equal(a.uploaded_primary_S1_receipt_pin,USER_S1_PIN);
assert.deepEqual(a.uploaded_primary_S1_PDF_sha256,[G6_PDF_SHA256,G9_PDF_SHA256]);
assert.equal(a.attached_primary_S1_page_observed_item_count,15);
assert.equal(a.direct_S1_page_observed_coverage_count,24);
assert.equal(a.user_uploaded_PDF_binary_available_to_public_CI,false);
assert(a.rows.every(x=>x.user_attached_original_SGK_page_observed||
 x.first_party_publisher_page_observed));
assert.equal(a.rows.filter(x=>x.user_attached_original_SGK_page_observed).length,15);
assert(a.rows.filter(x=>x.user_attached_original_SGK_page_observed).every(x=>
 x.user_attached_SGK_pdf_pages.length>0&&
 x.evidence_type_candidate_not_approved_from_uploaded_source.length>0&&
 x.user_attached_SGK_item_comparison.length>60));
assert.equal(a.safeguards.user_uploaded_S1_pages_examined_for_remaining_15,true);
assert.equal(a.safeguards.all_24_items_have_some_direct_S1_page_basis,true);
assert.equal(a.safeguards.all_original_S1_citations_validated,false);
assert.equal(a.first_party_pages_directly_viewed,5);
assert.equal(a.first_party_page_observed_item_count,9);
assert.equal(a.items_still_without_first_party_page_basis,15);
assert.equal(a.primary_page_observation_receipt_pin,PRIMARY_PIN);
assert.equal(a.G9_foundational_page_only_item_count,3);
assert.equal(a.no_publisher_page_observed_item_count,12);
assert.equal(a.first_party_page_observed_item_count+a.G9_foundational_page_only_item_count+a.no_publisher_page_observed_item_count,24);
assert.equal(a.G9_foundational_page_receipt_pin,G9_CONCEPT_PIN);
assert.deepEqual(a.rows.filter(x=>x.publisher_G9_foundational_page_only_observed)
 .map(x=>x.question_id),["QUA12V1_121","QUA12V1_122","QUA12V1_123"]);
assert(a.rows.filter(x=>x.publisher_G9_foundational_page_only_observed).every(x=>
 !x.first_party_publisher_page_observed&&x.final_citation_verdict==="INSUFFICIENT_EVIDENCE"));
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
const g9=JSON.parse(fs.readFileSync(G9_CONCEPT_RECEIPT,"utf8"));
const fakeG9=structuredClone(g9);
fakeG9.curriculum_layer_approved="KNTT-Core";
assert.throws(()=>audit({overrideG9Concept:fakeG9}),/R33_INVALID_G9_CONCEPT_OBSERVATION/);
const fakeG9Pass=structuredClone(g9);
fakeG9Pass.per_item_final_S1_verdict="PASS";
assert.throws(()=>audit({overrideG9Concept:fakeG9Pass}),/R33_INVALID_G9_CONCEPT_OBSERVATION/);
const fakeG9Lesson=structuredClone(g9);
fakeG9Lesson.page_source_comprehensive_for_lesson=true;
assert.throws(()=>audit({overrideG9Concept:fakeG9Lesson}),/R33_INVALID_G9_CONCEPT_OBSERVATION/);
const uploaded=JSON.parse(fs.readFileSync(USER_S1_RECEIPT,"utf8"));
const incorrect=structuredClone(uploaded);
incorrect.rows[0].pdf_pages=[35];
assert.throws(()=>audit({overrideUserS1:incorrect}),/R33_INVALID_ATTACHED_S1_ITEM_LOCATORS/);
const fakeApproval=structuredClone(uploaded);
fakeApproval.academic_pass_authorized=true;
assert.throws(()=>audit({overrideUserS1:fakeApproval}),/R33_INVALID_ATTACHED_S1_RECEIPT/);
const corruptPdfDigest=structuredClone(uploaded);
corruptPdfDigest.source_files.G6T2.sha256="0".repeat(64);
assert.throws(()=>audit({overrideUserS1:corruptPdfDigest}),/R33_ATTACHMENT_PDF_FILE_METADATA_CHANGED/);
const dup=structuredClone(uploaded);
dup.rows[1].question_id=dup.rows[0].question_id;
assert.throws(()=>audit({overrideUserS1:dup}),/R33_INVALID_ATTACHED_S1_ITEM_LOCATORS/);
const autoLayer=structuredClone(uploaded);
autoLayer.rows[14].curricular_layer_decision="Entrance10";
assert.throws(()=>audit({overrideUserS1:autoLayer}),/R33_INVALID_ATTACHED_S1_ITEM_LOCATORS/);
const src=fs.readFileSync("scripts/prototypes/math-v2-r33-s1-proof-matrix.js","utf8");
assert(!/localStorage|indexedDB|sessionStorage|sendBeacon/.test(src));
assert(!/writeFile|appendFile|unlinkSync|renameSync|rmSync/.test(src));
assert(!fs.readFileSync("mkdocs.yml","utf8").includes("math-v2-r33-s1-proof-matrix.js"));
assert(!fs.readFileSync("docs/assets/javascripts/practice-engine-v2.js","utf8")
 .includes("math-v2-r33-s1-proof-matrix.js"));
console.log("PASS R33: 24/24 IDs source-locked; 16 priority S2 flags, 8 routine S1 checks; "+
 "24/24 S1 page bases across publisher and user PDFs (15 new); zero academic approval and learner mutation");
