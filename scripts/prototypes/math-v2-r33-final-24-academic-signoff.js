"use strict";
const fs=require("node:fs");
const {gitBlob}=require("./math-v2-source-locked-skill-audit-r22.js");
const {inspect}=require("./math-v2-r27-mcq-source-review.js");
const {audit:core}=require("./math-v2-r33-owner-21-core-signoff.js");
const {audit:independent}=require("./math-v2-r33-notebooklm-reviewer-intake.js");
const {audit:r34}=require("./math-v2-r34-owner-approved-wording-delta.js");
const DIR="review-packets/math-phase4-r27-mcq-40/";
const FILE=DIR+"TEMP_R33_OWNER_APPROVED_CT12_CONCEPT_BASE_ENTRANCE10_20261018.json";
const CT12_PIN="35204f5baa654850c4b424dffb659bd89056b1be";
const CORE_FILE=DIR+"TEMP_R33_OWNER_APPROVED_21_CORE_ITEM_ACADEMIC_SIGNOFF_20261018.json";
const CORE_PIN="56135833a3d8764169719dded28be6b9c0b29eed";
const BANK="docs/assets/data/practice/12-phuong-trinh-bac-hai-viete-v1-05.json";
const EXPECTED=["QUA12V1_121","QUA12V1_122","QUA12V1_123"];
const check=(ok,msg)=>{if(!ok)throw Error("R33_FINAL_"+msg)};
function audit({override}={}){
 const bytes=fs.readFileSync(FILE);
 check(gitBlob(bytes)===CT12_PIN,"CT12_RECEIPT_CHANGED");
 check(gitBlob(fs.readFileSync(CORE_FILE))===CORE_PIN,"CORE_RECEIPT_CHANGED");
 const d=override||JSON.parse(bytes);
 check(d.schema==="math-r33-owner-academic-ct12-source-layer-signoff-v1"&&
  d.packet_id==="MATH-R27-NEW-MCQ-40-20261018"&&
  d.decision_scope==="EXACT_THREE_CT12_EVIDENCE_TYPE_AND_PRIMARY_CURRICULUM_LAYER_ONLY"&&
  d.approved_count===3&&d.approved_evidence_type==="CONCEPT_BASE"&&
  d.approved_primary_layer==="Entrance10"&&
  d.reviewer_structural_clone_claim_not_approved===true&&
  d.SGK_S1_same_manual_method_problem_verified===false&&
  d.nationwide_exam_frequency_established===false&&
  d.bank_content_edits_authorized===false&&
  d.canonical_metadata_auto_import_authorized===false&&
  d.production_skill_counter_authorized===false&&
  d.readiness_or_mastery_credit_authorized===false&&
  d.historical_learner_data_backfill_authorized===false&&
  d.merge_or_release_authorized_by_this_receipt===false,
  "SCOPE_OR_AUTHORITY_CHANGED");
 const c=core(),r=independent(),v=r34(),history=inspect();
 check(c.academic_approved_ids===21&&c.Core===21&&
  c.evidence.STRUCTURAL_CLONE===8&&c.evidence.CONCEPT_BASE===13&&
  r.input_ids===24&&r.reviewer_PASS===24&&
  history.rows.length===40&&
  v.current_record_sha256===d.corrected_R34_record_sha256&&
  v.approved_live_git_blob_sha===d.current_bank_blob_sha&&
  v.old_git_blob_sha===d.historical_R27_bank_blob_sha,
  "HISTORICAL_AND_CURRENT_RECEIPTS_DIVERGED");
 const bytesBank=fs.readFileSync(BANK);
 check(gitBlob(bytesBank)===d.current_bank_blob_sha&&
  d.current_bank_file===BANK,"LIVE_BANK_CHANGED");
 const questions=JSON.parse(bytesBank.toString("utf8")).questions;
 check(d.approved_items?.length===3&&questions.length===3&&
  new Set(d.approved_items.map(x=>x.id)).size===3,"CT12_ROW_COUNT");
 for(let i=0;i<3;i++){
  const row=d.approved_items[i],live=questions[i];
  const old=history.rows.find(x=>x.id===EXPECTED[i]);
  check(row.id===EXPECTED[i]&&live.id===EXPECTED[i]&&old&&
   row.stem===live.question&&row.approved_evidence_type==="CONCEPT_BASE"&&
   row.approved_primary_layer==="Entrance10"&&
   row.owner_decision==="APPROVED"&&row.runtime_skill_credit_authorized===false&&
   row.source_1_locator?.includes("Toán 9")&&row.reason?.length>55&&
   live.answer===old.question.answer&&
   JSON.stringify(live.options)===JSON.stringify(old.question.options)&&
   live.explanation===old.question.explanation,
   "CT12_ROW_SOURCE_OR_SCOPE_"+EXPECTED[i]);
  if(i===0)check(row.expected_item_sha256===v.current_record_sha256&&
   row.primary_review_source==="R34_CURRENT_CORRECTED","R34_ITEM_SHA_CHANGED");
  else check(row.expected_item_sha256===null&&
   row.primary_review_source==="R27_HISTORICAL_UNCHANGED"&&
   JSON.stringify(live)===JSON.stringify(old.question),"UNCHANGED_CT12_ITEM_CHANGED");
 }
 const signoffIds=JSON.parse(fs.readFileSync(CORE_FILE,"utf8")).approved_items.map(x=>x.item_id);
 check(signoffIds.length===21&&new Set([...signoffIds,...EXPECTED]).size===24,
  "APPROVED_ID_OVERLAP");
 const doc=fs.readFileSync(DIR+"TEMP_R33_FINAL_OWNER_24_ITEM_ACADEMIC_SOURCE_LAYER_DECISIONS_20261018.md","utf8");
 check(doc.includes("8 structural, 16 concept")&&
  doc.includes("21 Core, 3 Entrance10")&&
  doc.includes("does not")&&doc.includes("Skill"),
  "FINAL_RECORD_NOT_RECONCILED");
 return Object.freeze({total_owner_source_layer_approved:24,
  core_approved:21,Entrance10_approved:3,
  evidence_approved:{STRUCTURAL_CLONE:8,CONCEPT_BASE:16,EXACT_MATCH:0},
  CT12_ids:EXPECTED,bank_wording_preserved:true,academic_sources_only:true,
  runtime_skill_enabled:false,student_history_modified:false,
  merge_authorized:false,CT12_receipt_blob:CT12_PIN});
}
module.exports={audit,FILE,CT12_PIN,CORE_FILE,CORE_PIN};
if(require.main===module)console.log(JSON.stringify(audit(),null,2));
