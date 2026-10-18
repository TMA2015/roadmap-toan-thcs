/* R35 reviewer intake: exact 16 NotebookLM PASS claims, discrepancy held (read-only). */
"use strict";
const fs=require("node:fs"),path=require("node:path");
const {gitBlob}=require("./math-v2-source-locked-skill-audit-r22.js");
const {audit:sourceAudit,EXPECTED}=require("./math-v2-r35-remaining-16-s1-preflight.js");
const FILE="review-packets/math-phase4-r35-remaining-16/TEMP_R35_NOTEBOOKLM_16_VERDICT_CLAIMS_TRANSCRIPTION_20261018.json";
const PIN="eb5d033cfcb600afbe0b0cb8ab5ca349ff0f7318";
const REPORT="review-packets/math-phase4-r35-remaining-16/TEMP_R35_NOTEBOOKLM_16_PASS_EVIDENCE_RECONCILIATION_20261018.md";
const guard=(x,m)=>{if(!x)throw Error("R35_INTAKE_"+m)};
function audit({root=process.cwd(),readBytes=rel=>fs.readFileSync(path.join(root,rel)),override}={}){
 const raw=readBytes(FILE),prev=sourceAudit({root,readBytes});
 guard(gitBlob(raw)===PIN,"RECEIPT_BLOB_CHANGED");
 const doc=override||JSON.parse(raw.toString("utf8"));
 guard(doc.schema==="math-r35-notebooklm-user-pasted-verdict-transcription-v1"&&
  doc.packet_id==="MATH-R35-R27-REMAINING-16-20261018"&&
  doc.source_type==="USER_PASTED_NOTEBOOKLM_REPORT"&&
  doc.original_file_bytes_available===false&&
  doc.reviewer_total_input_ids===16&&doc.reviewer_total_output_verdicts===16&&
  doc.reviewer_verdict_counts.PASS===16&&
  doc.reviewer_verdict_counts.REVISE===0&&
  doc.reviewer_verdict_counts.INSUFFICIENT_EVIDENCE===0&&
  doc.owner_final_academic_signoff===false&&doc.academic_pass_authorized===false&&
  doc.canonical_source_type_layer_writes_authorized===false&&
  doc.production_skill_counter_authorized===false&&
  doc.historical_mastery_backfill_authorized===false&&
  doc.deploy_release_merge_authorized===false&&
  doc.source_question_options_answer_edit_authorized===false,
  "SCHEMA_OR_PROTECTION_CHANGED");
 const rows=doc.rows;
 guard(Array.isArray(rows)&&rows.length===16&&
  new Set(rows.map(x=>x.item_id)).size===16&&
  rows.every((x,i)=>x.item_id===EXPECTED[i]&&x.reviewer_verdict==="PASS"&&
   x.reviewer_layer_claim==="KNTT-Core"&&x.reviewer_answer_index===0&&
   x.academic_owner_approved===false&&
   (x.evidence_type_in_table==="STRUCTURAL_CLONE"||x.evidence_type_in_table==="CONCEPT_BASE")&&
   x.sgk_locator_claim.startsWith("T")&&x.sgk_locator_claim.length>12&&
   prev.rows[i].id===x.item_id&&prev.rows[i].original_answer===x.reviewer_answer_index),
  "ITEM_SET_OR_SOURCE_CHANGED");
 const counts=rows.reduce((n,r)=>(n[r.evidence_type_in_table]++,n),
  {STRUCTURAL_CLONE:0,CONCEPT_BASE:0,EXACT_MATCH:0});
 guard(counts.STRUCTURAL_CLONE===14&&counts.CONCEPT_BASE===2&&
  doc.computed_per_row_evidence_counts.STRUCTURAL_CLONE===14&&
  doc.computed_per_row_evidence_counts.CONCEPT_BASE===2&&
  doc.computed_per_row_evidence_counts.EXACT_MATCH===0&&
  doc.reviewer_reported_summary_evidence.STRUCTURAL_CLONE===13&&
  doc.reviewer_reported_summary_evidence.CONCEPT_BASE===3&&
  doc.reviewer_reported_summary_evidence.EXACT_MATCH===0&&
  doc.reported_summary_row_mismatch===true,
  "EVIDENCE_AGGREGATE_CONFLICT_NOT_PRESERVED");
 const conflicted=rows.filter(x=>x.item_id==="NUM02V1_144");
 guard(conflicted.length===1&&conflicted[0].evidence_type_in_table==="STRUCTURAL_CLONE"&&
  JSON.stringify(doc.reviewer_reported_summary_concept_ids)===
   JSON.stringify(["NUM02V1_139","NUM02V1_140","NUM02V1_144"])&&
  doc.reviewer_reported_layer_counts["KNTT-Core"]===16,
  "144_EXACT_CONFLICT_NOT_PRESERVED");
 const narrative=readBytes(REPORT).toString("utf8");
 guard(narrative.includes("14")&&narrative.includes("13")&&
  narrative.includes("NUM02V1_144")&&narrative.includes("NOT AUTHORIZED"),
  "RECONCILIATION_MISSING");
 return Object.freeze({
  schema:"math-r35-notebooklm-16-independent-review-intake-v1",
  source_sha:PIN,reviewer_pass:16,original_R27_rows_unchanged:16,
  prior_R33_owner_approved_excluded:24,
  detail_counts:counts,
  reviewer_summary_counts:{STRUCTURAL_CLONE:13,CONCEPT_BASE:3,EXACT_MATCH:0},
  evidence_type_disputed:["NUM02V1_144"],
  owner_accepted_academic_pass:0,authorized_layer_promotions:0,
  runtime_credit_authorized:false,student_history_write_authorized:false,
  deployment_authorized:false
 });
}
module.exports={audit,FILE,PIN,REPORT};
if(require.main===module)console.log(JSON.stringify(audit(),null,2));
