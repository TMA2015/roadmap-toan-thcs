/* R34 NotebookLM one-item independent-review intake.
 * Reporter PASS is review advice only: S1 structural and Entrance10 claims
 * remain unapproved. No learner, taxonomy or production writes.
 */
"use strict";
const fs=require("node:fs"),path=require("node:path");
const {gitBlob}=require("./math-v2-source-locked-skill-audit-r22.js");
const {audit:sourceAudit}=require("./math-v2-r34-owner-approved-wording-delta.js");
const REPORT="review-packets/math-phase4-r27-mcq-40/TEMP_R34_USER_SUBMITTED_NOTEBOOKLM_VERDICT_TRANSCRIPTION_20261018.json";
const REPORT_BLOB="46c49b058644bf7c6492645d1af814b83e7e3a12";
const RECONCILIATION="review-packets/math-phase4-r27-mcq-40/TEMP_R34_REVIEWER_PASS_S1_LAYER_RECONCILIATION_20261018.md";
const need=(ok,code)=>{if(!ok)throw Error("R34_REVIEW_"+code);};
function audit({root=process.cwd(),readBytes=rel=>fs.readFileSync(path.join(root,rel)),override=null}={}){
 const source=sourceAudit({root,readBytes});
 const raw=readBytes(REPORT);
 need(gitBlob(raw)===REPORT_BLOB,"REPORT_BLOB_CHANGED");
 const q=override||JSON.parse(raw.toString("utf8"));
 need(q.schema==="math-r34-notebooklm-user-submitted-single-item-verdict-transcription-v1"&&
  q.packet_id==="MATH-R34-QUA12V1_121-POST-REVISION-20261018"&&
  q.provenance_type==="USER_PASTED_NOTEBOOKLM_REPORT"&&
  q.original_report_file_attached===false&&
  q.report_filename_mentioned_in_user_text.endsWith("2026101.md")&&
  q.total_input_ids===1&&q.total_output_verdicts===1&&
  JSON.stringify(q.expected_ids)==='["QUA12V1_121"]'&&
  q.source_bank_blob_sha===source.approved_live_git_blob_sha&&
  q.source_record_sha256===source.current_record_sha256,
  "REPORT_SCOPE_OR_SOURCE_MISMATCH");
 const v=q.verdict;
 need(v?.item_id===source.item_id&&
  v.content_correctness==="PASS"&&
  v.answer_uniqueness==="PASS"&&
  v.explanation==="PASS"&&
  v.s1_citation==="PASS"&&
  v.evidence_type==="STRUCTURAL_CLONE"&&
  v.primary_layer_proposal==="Entrance10"&&
  v.overall_item_verdict==="PASS"&&v.requested_action==="NONE"&&
  typeof v.rationale==="string"&&v.rationale.includes("Đáp án duy nhất A")&&
  v.s1_page_and_activity.includes("GeoGebra"),
  "REVIEWER_FIELDS_MISMATCH");
 need(q.reported_supporting_claims?.old_question_two_correct_options_A_D_on_real_root_count===true&&
  q.reported_supporting_claims?.corrected_question_option_A_unique===true&&
  q.reported_supporting_claims?.four_original_options_unchanged===true&&
  q.reported_supporting_claims?.canonical_answer_index===0&&
  q.reported_supporting_claims?.authentic_exam_S3_corpus_provided===false&&
  q.reported_supporting_claims?.direct_same_reasoning_manual_SGK_exercise_identified===false&&
  q.reported_authorizations?.academic_pass_authorized===false&&
  q.reported_authorizations?.production_skill_counter_authorized===false&&
  q.reported_authorizations?.release_authorized===false&&
  q.intake_status==="REVIEWER_VERDICT_RECEIVED_NOT_OWNER_ACADEMICALLY_ACCEPTED"&&
  q.derived_decision_at_intake==="DO_NOT_AUTO_APPLY_EVIDENCE_TYPE_OR_ENTRANCE10"&&
  q.question_text_modified_by_this_receipt===false&&
  q.learner_data_modified===false&&q.taxonomy_modified===false,
  "UNAUTHORIZED_REVIEW_PROMOTION");
 const md=readBytes(RECONCILIATION).toString("utf8");
 need(md.includes("INSUFFICIENT_S3_EVIDENCE")&&
  md.includes("HOLD_DIRECT_STRUCTURAL_S1_EVIDENCE")&&
  md.includes("HOLD_AUTHENTIC_S3_AND_OWNER_LAYER_DECISION")&&
  md.includes("academic_pass_authorized=false")&&
  md.includes("production_skill_counter_authorized=false")&&
  md.includes("release_authorized=false"),
  "MISSING_RECONCILIATION_HOLDS");
 return Object.freeze({
  schema:"math-r34-notebooklm-reviewer-verdict-reconciliation-v1",
  reviewed_id:v.item_id,
  source_bank_blob_sha:source.approved_live_git_blob_sha,
  source_record_sha256:source.current_record_sha256,
  reviewer_content_verdict:"PASS_REPORTED_AND_MATH_CONFIRMED",
  reviewer_unique_answer_verdict:"PASS_REPORTED_AND_MATH_CONFIRMED",
  reviewer_s1_page_reference_claim:"PASS_REPORTED_CONCEPT_PAGES",
  reviewer_evidence_type_claim:v.evidence_type,
  approved_evidence_type:null,
  safer_editorial_evidence_type_candidate:"CONCEPT_BASE",
  reviewer_primary_layer_claim:v.primary_layer_proposal,
  approved_primary_layer:null,
  S3_frequency_verified:false,
  original_report_binary_available:false,
  academic_pass_authorized:false,
  production_skill_counter_authorized:false,
  deployment_authorized:false,
  immutable_R27_source_preserved:source.all_40_historical_R27_ids_source_locked,
  observed_live_bank_corrected:true,
  reporter_claim_does_not_override_source_boundaries:true
 });
}
module.exports={audit,REPORT,REPORT_BLOB,RECONCILIATION};
if(require.main===module){
 const r=audit();
 console.log(JSON.stringify(r,null,2));
}
