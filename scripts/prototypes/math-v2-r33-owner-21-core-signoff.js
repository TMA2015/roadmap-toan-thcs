"use strict";
const fs=require("node:fs");
const {gitBlob}=require("./math-v2-source-locked-skill-audit-r22.js");
const {inspect}=require("./math-v2-r27-mcq-source-review.js");
const {audit:matrix}=require("./math-v2-r33-s1-proof-matrix.js");
const {audit:review}=require("./math-v2-r33-notebooklm-reviewer-intake.js");
const {audit:r34}=require("./math-v2-r34-owner-approved-wording-delta.js");
const FILE="review-packets/math-phase4-r27-mcq-40/TEMP_R33_OWNER_APPROVED_21_CORE_ITEM_ACADEMIC_SIGNOFF_20261018.json";
const PIN="56135833a3d8764169719dded28be6b9c0b29eed";
const CT12=["QUA12V1_121","QUA12V1_122","QUA12V1_123"];
const guard=(x,s)=>{if(!x)throw Error("R33_SIGNOFF_"+s);};
function audit({override}={}){
 const bytes=fs.readFileSync(FILE);
 guard(gitBlob(bytes)===PIN,"RECEIPT_CHANGED");
 const x=override||JSON.parse(bytes.toString("utf8"));
 guard(x.schema==="math-r33-owner-academic-21-core-signoff-v1"&&
  x.approved_count===21&&x.pending_count===3&&
  x.approval_type==="ITEM_LEVEL_ACADEMIC_SOURCE_AND_LAYER"&&
  x.auto_ingest_into_live_metadata===false&&
  x.academic_signoff_grants_runtime_skill_credit===false&&
  x.readiness_or_mastery_credit_authorized===false&&
  x.historical_learner_regrade_or_backfill_authorized===false&&
  x.release_or_merge_authorized_by_this_receipt===false,"BOUNDARIES_CHANGED");
 const s=inspect(),m=matrix(),n=review(),v=r34();
 guard(s.rows.length===40&&m.input_rows===24&&n.matching_core_ids===21&&
  v.current_record_sha256===x.r34_corrected_CT12_sha256,"ORIGINAL_SOURCE_CHANGED");
 const ids=[...Array.from({length:12},(_,i)=>"NUM02V1_"+(121+i)),
  ...Array.from({length:3},(_,i)=>"NUM02V1_"+(145+i)),
  ...Array.from({length:6},(_,i)=>"ALG04V2_"+(133+i))];
 guard(x.approved_items?.length===21&&x.CT12_pending_items?.length===3,
  "APPROVAL_TOTALS");
 const coreTypes={STRUCTURAL_CLONE:0,CONCEPT_BASE:0,EXACT_MATCH:0};
 const reviewer=JSON.parse(fs.readFileSync("review-packets/math-phase4-r27-mcq-40/TEMP_R33_NOTEBOOKLM_24_ITEM_VERDICT_RECEIPT_20261018.json","utf8"));
 for(let i=0;i<21;i++){
  const a=x.approved_items[i],r=s.rows.find(q=>q.id===ids[i]);
  const b=m.rows.find(q=>q.question_id===ids[i]),c=reviewer.rows.find(q=>q.id===ids[i]);
  guard(a?.item_id===ids[i]&&r&&b&&c&&
   a.owner_academic_verdict==="APPROVED"&&a.primary_layer_approved==="KNTT-Core"&&
   a.approval_scope==="ACADEMIC_SOURCE_AND_LAYER_ONLY"&&
   a.reviewer_verdict==="PASS"&&c.verdict==="PASS"&&c.layer==="KNTT-Core"&&
   a.evidence_type_approved===c.evidence_type&&
   a.source_file===r.source_file&&a.source_file===b.source_file&&
   a.historical_R27_source_blob_sha===r.source_git_blob_sha&&
   a.historical_R27_source_blob_sha===b.source_git_blob_sha&&
   a.question_stem_exact===r.question.question&&
   a.canonical_answer_index===r.question.answer&&
   a.canonical_option_count===4&&
   a.source_s1_locator.length>10,"ROW_"+ids[i]);
  coreTypes[a.evidence_type_approved]++;
 }
 guard(coreTypes.STRUCTURAL_CLONE===8&&coreTypes.CONCEPT_BASE===13&&
  coreTypes.EXACT_MATCH===0,"EVIDENCE_COUNTS");
 guard(x.CT12_pending_items.every((a,i)=>a.item_id===CT12[i]&&
  a.owner_academic_verdict==="PENDING"&&
  a.evidence_type_approved===null&&a.primary_layer_approved===null),
  "CT12_UNAUTHORIZED");
 return {academic_approved_ids:21,Core:21,evidence:coreTypes,pending:CT12,
  release_authorized:false,learner_writes:false,receipt_blob:PIN};
}
module.exports={audit,FILE,PIN,CT12};
if(require.main===module)console.log(JSON.stringify(audit(),null,2));
