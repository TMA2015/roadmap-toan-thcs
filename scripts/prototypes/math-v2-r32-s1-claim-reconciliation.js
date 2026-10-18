/* Math R32: read-only reconciliation of transcribed NotebookLM reviewer claims.
 * WARNING: transcribed reviewer verdict != independent primary-S1 approval.
 * All bank blobs and per-record hashes are validated by R27.inspect().
 */
"use strict";
const fs=require("node:fs"),path=require("node:path");
const {gitBlob}=require("./math-v2-source-locked-skill-audit-r22.js");
const {inspect}=require("./math-v2-r27-mcq-source-review.js");
const {audit:priorR31}=require("./math-v2-r31-s1-page-boundary-audit.js");
const P="review-packets/math-phase4-r27-mcq-40/TEMP_R32_USER_SUBMITTED_S1_CLAIMS_TRANSCRIPTION_20261018.json";
const PIN="e396a2da2aa2e7a8af7f376c24c17c87c6c470f6";
const fail=(ok,why)=>{if(!ok)throw Error("R32_"+why)};
const ids=[
 ...Array.from({length:12},(_,i)=>"NUM02V1_"+(121+i)),
 ...Array.from({length:3},(_,i)=>"NUM02V1_"+(145+i)),
 ...Array.from({length:6},(_,i)=>"ALG04V2_"+(133+i)),
 ...Array.from({length:3},(_,i)=>"QUA12V1_"+(121+i))
];
const flags=Object.freeze({
 NUM02V1_127:["STRUCTURAL_CLONE_EXERCISE_SCOPE_RECHECK"],
 NUM02V1_128:["STRUCTURAL_CLONE_EXERCISE_SCOPE_RECHECK"],
 NUM02V1_129:["STRUCTURAL_CLONE_EXERCISE_SCOPE_RECHECK"],
 NUM02V1_130:["STRUCTURAL_CLONE_EXERCISE_SCOPE_RECHECK"],
 NUM02V1_132:["EXTRA_PAGE_38_BAI31","INVERSE_ROUNDING_VS_EXERCISE_7_12"],
 NUM02V1_145:["REASON_TRUNCATED"],
 NUM02V1_146:["REASON_TRUNCATED"],
 NUM02V1_147:["REASON_TRUNCATED","EXACT_MATCH_MISMATCH_SGK_2_18_USES_2_5_NOT_4"],
 ALG04V2_133:["REFERENCE_7_32_PAGE_43_OUTSIDE_CLAIM"],
 ALG04V2_134:["REFERENCE_7_39_PAGE_45_OUTSIDE_CLAIM"],
 ALG04V2_135:["REFERENCE_7_32_PAGE_43_OUTSIDE_CLAIM"],
 ALG04V2_136:["REFERENCE_7_39_PAGE_45_NOT_43","EXACT_MATCH_EXPRESSION_ONLY_MC_FORMAT_DIFFERS"],
 ALG04V2_137:["REFERENCE_7_32_PAGE_43_OUTSIDE_CLAIM"],
 QUA12V1_121:["ENTRANCE10_LAYER_PROPOSAL_S1_SIGNOFF_HOLD"],
 QUA12V1_122:["ENTRANCE10_LAYER_PROPOSAL_S1_SIGNOFF_HOLD"],
 QUA12V1_123:["ENTRANCE10_LAYER_PROPOSAL_S1_SIGNOFF_HOLD","TANGENCY_NOT_PROVEN_BY_GEOGEBRA_INTERSECT_TASK"]
});
function audit({root=process.cwd(),readBytes=rel=>fs.readFileSync(path.join(root,rel)),override}={}){
 const source=inspect({root}); // verifies six immutable original bank blobs and 40 SHA-256 fingerprints
 const r31=priorR31({root});
 const raw=readBytes(P);
 fail(gitBlob(raw)===PIN,"RECEIPT_TRANSCRIPTION_CHANGED");
 const review=override||JSON.parse(raw.toString("utf8"));
 fail(review.schema==="math-r32-human-pasted-claim-transcription-v1"&&
  review.packet_id===source.packet_id&&
  review.review_type==="PRIMARY_S1_ITEM_LEVEL_VERIFICATION","INVALID_RECEIPT_METADATA");
 fail(review.original_notebooklm_document_sha===null&&
  review.source_page_evidence_authenticated===false&&
  review.academic_pass_authorized===false&&
  review.production_skill_counter_authorized===false&&
  review.historical_mastery_backfill===false,"UNSAFE_AUTHORIZATION");
 const byId=new Map(source.rows.map(x=>[x.id,x]));
 fail(review.rows.length===24&&r31.rows.length===24,"WRONG_REVIEW_SIZE");
 const claimIds=review.rows.map(x=>x.question_id);
 fail(new Set(claimIds).size===24&&ids.every(id=>claimIds.includes(id)),
  "MISSING_DUPLICATE_OR_UNEXPECTED_ID");
 const totals={PASS:0,REVISE:0,INSUFFICIENT_EVIDENCE:0,NOT_REVIEWED:0};
 const result=review.rows.map(x=>{
  const baseline=byId.get(x.question_id);
  fail(!!baseline&&Object.hasOwn(totals,x.verdict),"UNKNOWN_ROW_OR_VERDICT_"+x.question_id);
  totals[x.verdict]++;
  const isQua=x.question_id.startsWith("QUA12V1_");
  const g=x.question_id.startsWith("NUM02V1_")&&Number(x.question_id.split("_")[1])<=132?6:
   isQua?9:7;
  const volume=isQua?2:x.question_id.startsWith("NUM02V1_145")||
   x.question_id==="NUM02V1_146"||x.question_id==="NUM02V1_147"?1:2;
  fail(x.grade===g&&x.volume===volume&&x.source==="SGK KNTT","WRONG_GRADE_VOLUME_"+x.question_id);
  fail((isQua?x.review_layer==="Entrance10"&&x.verdict==="REVISE":
   x.review_layer==="KNTT-Core"&&x.verdict==="PASS"),"UNEXPECTED_LAYER_CLAIM_"+x.question_id);
  const known=flags[x.question_id]||[];
  return {
   question_id:x.question_id,source_blob_sha:baseline.source_git_blob_sha,
   record_sha256:baseline.record_sha256,
   reviewer_claimed_verdict:x.verdict,claimed_layer:x.review_layer,
   claimed_page:x.page,claimed_section:x.section_or_activity,
   reviewer_evidence_type:x.evidence_type,
   secondary_crosscheck_flags:known,
   academic_S1_verified_by_repository:false,
   academic_pass_authorized:false,
   learner_skill_credit_authorized:false
  };
 });
 fail(JSON.stringify(totals)===JSON.stringify(review.reviewer_claimed_verdict_totals),
  "REVIEWER_SUMMARY_MISMATCH");
 fail(totals.PASS===21&&totals.REVISE===3,"UNEXPECTED_21_3_PARTITION");
 const r31Set=new Set(r31.rows.map(x=>x.question_id));
 fail(result.every(x=>r31Set.has(x.question_id)),"R31_SCOPE_CHANGED");
 fail(review.reason_field_integrity.NUM02V1_145==="TRUNCATED_IN_PASTED_TABLE"&&
  review.reason_field_integrity.NUM02V1_146==="TRUNCATED_IN_PASTED_TABLE"&&
  review.reason_field_integrity.NUM02V1_147==="TRUNCATED_IN_PASTED_TABLE",
  "HIDDEN_TRUNCATED_SOURCE");
 return {
  schema:"math-v2-r32-provisional-primary-S1-claim-risk-intake-v1",
  status:"ACADEMIC_HOLD_R32_RECEIPT_RECONCILIATION_REQUIRED",
  original_R27_rows:40,received_claim_rows:24,
  reviewer_claimed_counts:totals,original_out_of_scope:16,
  flagged_count:result.filter(x=>x.secondary_crosscheck_flags.length>0).length,
  accepted_academic_pass_count:0,
  accepted_layer_promotions:0,
  source_receipt_git_blob_sha:PIN,
  rows:result,
  protections:{practice_items_changed:false,option_indexes_changed:false,
   learner_history_read:false,learner_history_written:false,
   taxonomy_modified:false,readiness_or_mastery_credited:false,
   S1_primary_scan_independently_inspected:false,
   automatic_citation_replacements:false}
 };
}
module.exports={audit,flags,ids,P,PIN};
if(require.main===module){
 const result=audit();
 console.log(JSON.stringify({status:result.status,counts:result.reviewer_claimed_counts,
  flagged_count:result.flagged_count,academic_pass:result.accepted_academic_pass_count,
  protections:result.protections},null,2));
}
