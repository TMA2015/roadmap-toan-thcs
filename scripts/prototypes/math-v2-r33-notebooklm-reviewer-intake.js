"use strict";
const fs=require("node:fs"),path=require("node:path");
const {gitBlob}=require("./math-v2-source-locked-skill-audit-r22.js");
const {audit:matrix}=require("./math-v2-r33-s1-proof-matrix.js");
const {audit:r34}=require("./math-v2-r34-owner-approved-wording-delta.js");
const SOURCE="review-packets/math-phase4-r27-mcq-40/TEMP_R33_NOTEBOOKLM_24_ITEM_VERDICT_RECEIPT_20261018.json";
const BLOB="37334654683d18a915a770606601979d492e8031";
const CT12=["QUA12V1_121","QUA12V1_122","QUA12V1_123"];
const requireOk=(b,msg)=>{if(!b)throw Error("R33_REVIEW_"+msg)};
function audit({root=process.cwd(),readBytes=rel=>fs.readFileSync(path.join(root,rel)),override}={}){
 const bytes=readBytes(SOURCE);
 requireOk(gitBlob(bytes)===BLOB,"SOURCE_CHANGED");
 const o=override||JSON.parse(bytes.toString("utf8"));
 const m=matrix({root,readBytes}), live=r34({root,readBytes});
 requireOk(o.schema==="math-r33-notebooklm-reviewer-receipt-v1"&&
  o.packet==="MATH-R27-NEW-MCQ-40-20261018"&&
  o.original_file_sha256==="b5db437fd2c1b550c7bcfcfd9e5de0b9fb80057bb0dd3c7252c0a246efbf36c0"&&
  o.original_file_bytes===12429&&
  o.current_r34_question_sha256===live.current_record_sha256&&
  o.source_1_same_method_for_CT12_not_identified===true&&
  o.S3_most_official_exams_claim_unverified===true&&
  o.academic_owner_signoff===false&&
  o.production_layer_edit===false,"UNSUPPORTED_AUTHORITY_OR_SOURCE");
 requireOk(m.input_rows===24&&m.academic_S1_accepted===0&&
  Array.isArray(o.rows)&&o.rows.length===24&&o.reviewed_ids===24&&
  o.rows.every((r,i)=>r.id===m.rows[i].question_id&&
   r.verdict==="PASS"&&
   ["STRUCTURAL_CLONE","CONCEPT_BASE"].includes(r.evidence_type)&&
   ["KNTT-Core","Entrance10"].includes(r.layer)),
   "ITEMS_OR_SOURCE_MISMATCH");
 const n=o.rows.reduce((a,r)=>(a[r.evidence_type]++,a),{STRUCTURAL_CLONE:0,CONCEPT_BASE:0});
 requireOk(n.STRUCTURAL_CLONE===11&&n.CONCEPT_BASE===13&&
  o.table_type_counts.STRUCTURAL_CLONE===11&&o.table_type_counts.CONCEPT_BASE===13&&
  o.reported_type_counts.STRUCTURAL_CLONE===12&&o.reported_type_counts.CONCEPT_BASE===12&&
  o.verdict_counts_reported.PASS===24&&o.reported_layer_counts["KNTT-Core"]===21&&
  o.reported_layer_counts.Entrance10===3&&o.count_mismatch===true,
  "SOURCE_AGGREGATES_MISMATCH");
 const core=o.rows.filter(x=>x.layer==="KNTT-Core"),ct=o.rows.filter(x=>x.layer==="Entrance10");
 requireOk(core.length===21&&ct.length===3&&
  ct.every((r,i)=>r.id===CT12[i]),"GRADE_SCOPE_CHANGED");
 const editorial=readBytes("review-packets/math-phase4-r27-mcq-40/TEMP_R33_OWNER_EDITORIAL_24_ID_METADATA_DECISION_MATRIX_20261018.md").toString("utf8");
 const section=editorial.split("## Proposed per-item citation and classification")[1]?.split("## Do not silently import")[0]||"";
 const rows=section.split("\n").filter(x=>/^\| `(?:NUM02V1_|ALG04V2_|QUA12V1_)\d+` \|/.test(x)).map(line=>{
  const p=line.split("|").map(s=>s.trim());
  return {id:p[1].replace(/`/g,""),evidence:p[4].replace(/`/g,""),layer:p[5].replace(/`/g,"")};
 });
 requireOk(rows.length===24,"OLD_MATRIX_MISSING");
 const diff=o.rows.filter((r,i)=>{const old=rows[i];requireOk(old.id===r.id,"ITEM_ORDER_CHANGED");return r.evidence_type!==old.evidence||r.layer!==old.layer});
 requireOk(diff.length===3&&CT12.every(id=>diff.some(x=>x.id===id)),"NON_CT12_METADATA_DIFF");
 const summary=readBytes("review-packets/math-phase4-r27-mcq-40/TEMP_R33_NOTEBOOKLM_24_ITEM_VERDICT_RECONCILIATION_20261018.md").toString("utf8");
 requireOk(summary.includes("11 STRUCTURAL_CLONE")&&summary.includes("13 CONCEPT_BASE")&&
  summary.includes("ACADEMIC_PASS_AUTHORIZED"),"MISSING_RECONCILIATION");
 return {input_ids:24,reviewer_PASS:24,evidence_counts_from_table:n,header_count_conflict:true,
  matching_core_ids:21,CT12_provisional_ids:CT12,math_R34_SHA_verified:true,
  approved_academic_PASS:0,approved_layer_changes:0,student_data_writes:false};
}
module.exports={audit,SOURCE,BLOB};
if(require.main===module)console.log(JSON.stringify(audit(),null,2));
