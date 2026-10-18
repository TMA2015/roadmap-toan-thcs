/* Math Phase 4 R28 -- review intake contract; no reviewer verdict supplied.
 * All source IDs/hashes are grounded in R27; this API cannot grant Skill
 * attribution, academic signoff, Readiness, Mastery or migration.
 */
"use strict";
const {inspect}=require("./math-v2-r27-mcq-source-review.js");
const {isDeepStrictEqual}=require("node:util");

const SCHEMA="math-r28-independent-review-verdict-v1";
const STATUSES=new Set(["NOT_REVIEWED","PASS","REVISE","INSUFFICIENT_EVIDENCE"]);
const LAYERS=new Set(["KNTT-Core","Core-Support","Entrance10",
 "Specialized-Challenge","THPT-Bridge"]);
const SOURCE_CLASSES=new Set(["S1","S2","S3","S4"]);
const NEED=["math_correct","unique_correct_option","distractors_valid",
 "explanation_correct"];
const requireOk=(ok,code)=>{if(!ok)throw Error("R28_"+code);};
const validText=x=>typeof x==="string"&&x.trim().length>0&&x.length<=4000;
const isObj=x=>x!==null&&typeof x==="object"&&!Array.isArray(x);
function template(source=inspect()){
 return {
  schema:SCHEMA,packet_id:source.packet_id,
  source_state:"R27_EXACT_BANK_CANDIDATE_NOT_ACADEMICALLY_APPROVED",
  reviewer:"NOT_SUBMITTED",submitted_receipt:null,
  verdicts:source.rows.map(q=>({
   question_id:q.id,source_git_blob_sha:q.source_git_blob_sha,
   source_record_sha256:q.record_sha256,
   verdict:"NOT_REVIEWED",review_layer:null,grade:null,
   S1_grade_and_lesson:null,source_references:[],
   math_correct:null,unique_correct_option:null,
   distractors_valid:null,explanation_correct:null,
   structure_distinctness:null,
   issue:null,proposed_fix:null
  }))
 };
}
function evaluate(review,source=inspect()){
 requireOk(isObj(review)&&review.schema===SCHEMA&&
  review.packet_id===source.packet_id&&
  review.source_state==="R27_EXACT_BANK_CANDIDATE_NOT_ACADEMICALLY_APPROVED"&&
  Array.isArray(review.verdicts),"ROOT_CONTRACT_MISMATCH");
 requireOk(review.verdicts.length===source.rows.length,
  "NOT_EXACT_40_ROWS");
 const reference=new Map(source.rows.map(q=>[q.id,q]));
 const seen=new Set(),counts={PASS:0,REVISE:0,
  INSUFFICIENT_EVIDENCE:0,NOT_REVIEWED:0};
 const problems=[];
 for(const entry of review.verdicts){
  requireOk(isObj(entry)&&typeof entry.question_id==="string"&&
   reference.has(entry.question_id)&&!seen.has(entry.question_id),
   "DUPLICATE_OR_UNKNOWN_ID");
  seen.add(entry.question_id);
  const item=reference.get(entry.question_id);
  requireOk(entry.source_git_blob_sha===item.source_git_blob_sha&&
   entry.source_record_sha256===item.record_sha256,
   "SOURCE_IDENTITY_CHANGED_"+entry.question_id);
  requireOk(STATUSES.has(entry.verdict),"INVALID_STATUS_"+entry.question_id);
  counts[entry.verdict]++;
  requireOk(Array.isArray(entry.source_references),
   "BAD_SOURCE_REFERENCES_"+entry.question_id);
  for(const ref of entry.source_references){
   requireOk(isObj(ref)&&SOURCE_CLASSES.has(ref.source_class)&&
    validText(ref.title)&&validText(ref.locator)&&validText(ref.supported_claim),
    "UNTRACED_SOURCE_"+entry.question_id);
  }
  if(entry.verdict==="NOT_REVIEWED"){
   requireOk(entry.review_layer===null&&entry.grade===null&&
    entry.S1_grade_and_lesson===null&&
    entry.source_references.length===0&&
    NEED.every(k=>entry[k]===null)&&
    entry.structure_distinctness===null&&entry.issue===null&&
    entry.proposed_fix===null,"DRAFT_HAS_REVIEW_CLAIMS_"+entry.question_id);
   continue;
  }
  requireOk(validText(review.reviewer)&&review.reviewer!=="NOT_SUBMITTED",
   "REVIEWER_NOT_DECLARED");
  requireOk(LAYERS.has(entry.review_layer)&&
   (Number.isInteger(entry.grade)&&entry.grade>=6&&entry.grade<=9||
    entry.grade==="NOT_VERIFIED")&&
   validText(entry.issue),"REVIEW_METADATA_MISSING_"+entry.question_id);
  if(entry.verdict==="PASS"){
   requireOk(entry.source_references.length>0&&
    NEED.every(k=>entry[k]===true)&&
    ["DISTINCT","NEAR_DUPLICATE_REVIEWED"].includes(entry.structure_distinctness),
    "PASS_NOT_SUPPORTED_"+entry.question_id);
   if(entry.review_layer==="KNTT-Core"||entry.review_layer==="Core-Support")
    requireOk(entry.source_references.some(x=>x.source_class==="S1")&&
     entry.grade!=="NOT_VERIFIED"&&validText(entry.S1_grade_and_lesson),
     "CORE_WITHOUT_S1_"+entry.question_id);
   if(entry.structure_distinctness==="NEAR_DUPLICATE_REVIEWED")
    requireOk(entry.issue.length>20,"CLONE_DISCUSSION_REQUIRED_"+entry.question_id);
  }else if(entry.verdict==="REVISE"){
   requireOk(validText(entry.proposed_fix),
    "REVISION_WITHOUT_FIX_"+entry.question_id);
  }else{
   requireOk(entry.source_references.length===0||
    entry.source_references.every(x=>SOURCE_CLASSES.has(x.source_class)),
    "UNUSABLE_SOURCE_"+entry.question_id);
  }
  if(entry.verdict!=="PASS")problems.push({
   question_id:entry.question_id,status:entry.verdict,reason:entry.issue});
 }
 requireOk(seen.size===source.rows.length,"MISSING_REVIEW_IDS");
 // A verdict that parses is still a claim, not an independent academic
 // approval. Human / NotebookLM provenance and signoff are separate.
 const allReviewed=counts.NOT_REVIEWED===0;
 return Object.freeze({
  schema:"math-r28-verdict-intake-diagnostic-v1",
  state:!allReviewed?"REVIEW_INCOMPLETE":"VERDICTS_PRESENT_REQUIRE_INDEPENDENT_RECONCILIATION",
  counts,covered:seen.size,expected:source.rows.length,
  non_pass_items:problems,
  provenance_claim:review.reviewer,
  external_receipt_present:validText(review.submitted_receipt),
  academic_pass_authorized:false,
  canonical_skill_mapping_authorized:false,
  production_skill_counter_authorized:false,
  mastery_or_readiness_authorized:false,
  historical_regrade_or_backfill_authorized:false,
  changes_to_questions:0,learner_data_writes:0
 });
}
module.exports={template,evaluate,SCHEMA};
if(require.main===module){
 const v=template();
 const result=evaluate(v);
 console.log(JSON.stringify({diagnostic:result,
  help:"The 40-item draft is intentionally NOT_REVIEWED. No NotebookLM output has been supplied."},null,2));
}
