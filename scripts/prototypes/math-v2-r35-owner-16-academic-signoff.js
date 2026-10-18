/* R35: authorial approval of 16 exact original R27 MCQs — academic metadata only. */
"use strict";
const fs=require("node:fs"),path=require("node:path");
const {gitBlob}=require("./math-v2-source-locked-skill-audit-r22.js");
const {inspect}=require("./math-v2-r27-mcq-source-review.js");
const {audit:preflight}=require("./math-v2-r35-remaining-16-s1-preflight.js");
const {audit:reviewer}=require("./math-v2-r35-notebooklm-16-verdict-intake.js");
const FILE="review-packets/math-phase4-r35-remaining-16/TEMP_R35_OWNER_APPROVED_16_KNTT_CORE_ACADEMIC_SIGNOFF_20261018.json";
const PIN="100635e3f4ac6229fb39549368eedb9922304af5";
const SOURCE_NOTE="review-packets/math-phase4-r35-remaining-16/TEMP_R35_OWNER_16_ACADEMIC_FINAL_RECONCILIATION_20261018.md";
const BASE="review-packets/math-phase4-r27-mcq-40/";
const guard=(ok,flag)=>{if(!ok)throw Error("R35_SIGNOFF_"+flag)};
function audit({root=process.cwd(),readBytes=rel=>fs.readFileSync(path.join(root,rel)),override=null}={}){
 const raw=readBytes(FILE);
 guard(gitBlob(raw)===PIN,"APPROVAL_RECEIPT_CHANGED");
 const x=override||JSON.parse(raw.toString("utf8"));
 guard(x.schema==="math-r35-owner-academic-16-item-source-layer-signoff-v1"&&
  x.packet_id==="MATH-R35-R27-REMAINING-16-20261018"&&
  x.decision_date==="2026-10-18"&&
  x.approval_scope==="SOURCE_EVIDENCE_TYPE_AND_PRIMARY_LAYER_ONLY_EXACT_16_R35_IDS"&&
  x.owner_intent_context.includes("replied 'tiếp tục'")&&
  x.approved_count===16&&
  x.source_generation==="R27_ORIGINAL_40_20261018"&&
  x.r35_source_packet_blob==="0099681bc28c412a5a10454cf9d76036fcf7306f"&&
  x.reviewer_intake_blob==="eb5d033cfcb600afbe0b0cb8ab5ca349ff0f7318"&&
  x.num02v1_144_label_resolution==="STRUCTURAL_CLONE_PER_DETAILED_ROW"&&
  x.report_original_conflict_maintained===true&&
  x.S1_pages_directly_observed_subset_not_entire_16===true&&
  x.all_16_direct_independent_task_comparisons_completed===false&&
  x.canonical_bank_edit_authorized===false&&
  x.canonical_runtime_taxonomy_edit_authorized===false&&
  x.skill_readiness_mastery_credit_authorized===false&&
  x.history_backfill_authorized===false&&
  x.release_or_merge_authorized===false,
  "SCOPE_OR_BOUNDARIES_CHANGED");
 const f=preflight({root,readBytes}),n=reviewer({root,readBytes}),old=inspect({root,readBytes});
 guard(f.exact_historical_R27_source_rows===16&&
  f.prior_owner_approved_excluded===24&&
  n.reviewer_pass===16&&
  n.owner_accepted_academic_pass===0&&
  old.total===40,
  "BASELINE_REVIEW_CHANGED");
 const c21=JSON.parse(readBytes(BASE+"TEMP_R33_OWNER_APPROVED_21_CORE_ITEM_ACADEMIC_SIGNOFF_20261018.json"));
 const c3=JSON.parse(readBytes(BASE+"TEMP_R33_OWNER_APPROVED_CT12_CONCEPT_BASE_ENTRANCE10_20261018.json"));
 const prev=[...c21.approved_items.map(y=>y.item_id),...c3.approved_items.map(y=>y.id)];
 guard(prev.length===24&&new Set(prev).size===24,"PREVIOUS_24_CHANGED");
 const byId=new Map(old.rows.map(y=>[y.id,y]));
 const reviewerRows=JSON.parse(readBytes("review-packets/math-phase4-r35-remaining-16/TEMP_R35_NOTEBOOKLM_16_VERDICT_CLAIMS_TRANSCRIPTION_20261018.json")).rows;
 const counts={STRUCTURAL_CLONE:0,CONCEPT_BASE:0,EXACT_MATCH:0};
 guard(Array.isArray(x.approved_items)&&x.approved_items.length===16&&
  x.approved_primary_layer_counts?.["KNTT-Core"]===16,
  "APPROVED_COUNTS_WRONG");
 for(let i=0;i<16;i++){
  const a=x.approved_items[i],orig=byId.get(a.item_id),report=reviewerRows[i];
  guard(a.item_id===f.rows[i].id&&orig&&report?.item_id===a.item_id&&
   !prev.includes(a.item_id)&&
   a.academic_verdict==="OWNER_APPROVED"&&
   a.approved_primary_layer==="KNTT-Core"&&
   a.approved_evidence_type===report.evidence_type_in_table&&
   a.reported_S1_locator===report.sgk_locator_claim&&
   a.historical_question===orig.question.question&&
   a.historical_bank_filename===orig.source_file&&
   a.historical_bank_blob===orig.source_git_blob_sha&&
   a.correct_answer_index===orig.question.answer&&
   a.option_count===orig.question.options.length&&
   a.option_count===4,
  "SOURCE_OR_APPROVAL_ROW_"+a.item_id);
  counts[a.approved_evidence_type]++;
 }
 guard(new Set([...prev,...x.approved_items.map(z=>z.item_id)]).size===40&&
  counts.STRUCTURAL_CLONE===14&&counts.CONCEPT_BASE===2&&counts.EXACT_MATCH===0&&
  JSON.stringify(counts)===JSON.stringify(x.evidence_type_distribution)&&
  x.report_conflicting_summary.STRUCTURAL_CLONE===13&&
  x.report_conflicting_summary.CONCEPT_BASE===3,
  "PARTITION_OR_TYPE_COUNTS_CHANGED");
 const q=x.approved_items.find(a=>a.item_id==="NUM02V1_144");
 guard(q?.approved_evidence_type==="STRUCTURAL_CLONE"&&
  q.original_S1_same_task_independently_verified===true&&
  q.same_task_S1_certification_scope==="NXBGD_TOAN_7_T1_P30_LUYEN_TAP_1A_SQRT16"&&
  x.primary_source_144.includes("p30"),
  "144_PRIMARY_S1_PROOF_CHANGED");
 const note=readBytes(SOURCE_NOTE).toString("utf8");
 guard(note.includes("14")&&note.includes("16")&&
  note.includes("all 16")&&note.includes("SEPARATE DECISION REQUIRED"),
  "RECONCILIATION_NOTE_CHANGED");
 return Object.freeze({schema:x.schema,
  new_owner_academic_pass:16,primary_layer:"KNTT-Core",
  new_evidence_types:counts,all_R27_original_40_accounted:true,
  historical_24_owner_decisions_preserved:true,
  reviewer_header_conflict_retained:true,
  all_16_original_S1_direct_comparisons_completed:false,
  canonical_bank_changes:false,runtime_skill_credit:false,
  learner_history_or_mastery_writes:false,merging_authorized:false});
}
module.exports={audit,FILE,PIN,SOURCE_NOTE};
if(require.main===module)console.log(JSON.stringify(audit(),null,2));
