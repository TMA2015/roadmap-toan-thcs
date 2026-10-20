/* R38 independent NotebookLM intake against the actual 131-Family registry.
 * Input is a structured transcription of the user's pasted report; does not
 * certify a nonexistent proposed family or grant learner Skill credit.
 */
"use strict";
const fs=require("node:fs"),path=require("node:path");
const {gitBlob}=require("./math-v2-source-locked-skill-audit-r22.js");
const {audit:baseline}=require("./math-v2-r38-40mcq-skill-family-compatibility.js");
const RECEIPT="review-packets/math-phase4-r38-family-compatibility/TEMP_R38_USER_NOTEBOOKLM_40_ID_FAMILY_VERDICT_TRANSCRIPTION_20261018.json";
const PIN="b3ae2c4b450d6de9f4de56dc5e077d5914168825";
const CANDIDATES="review-packets/math-phase4-r38-family-compatibility/TEMP_R38_40MCQ_CANDIDATE_SKILL_FAMILY_REVIEW_20261018.json";
const CANDIDATES_PIN="5fb3e14814a349af6dc0be3ccdd57fc51cc7ebad";
const REGISTRY="docs/assets/data/curriculum/skill-taxonomy-v2-registry-r1.json";
const REGISTRY_PIN="90e58fa666a0cea4ae41ff7ef82a3cbf80ca11e4";
const SOURCE_SHA256="6a8b0310e7454cae10ce015d694cbc10977f7a717f74e85d115f82f7c10459cb";
const invalidPassFamilyCounts=Object.freeze({
 "NUM-ROUNDING":12,"NUM-RATIONAL-OPS":6,"NUM-IRRATIONAL":3,
 "ALG-DIV-POLYNOMIAL":6
});
const reject=(ok,name)=>{if(!ok)throw Error("R38_NLM_"+name)};
function reported(id){
 const n=Number(id.split("_").at(-1));
 if(id.startsWith("NUM02V1_")){
  if(n>=121&&n<=132)return ["NUM-ROUNDING","PASS"];
  if(n>=133&&n<=138)return ["NUM-RATIONAL-OPS","PASS"];
  if(n>=139&&n<=141)return ["NUM-IRRATIONAL","PASS"];
  if(n>=142&&n<=144)return ["NUM-SQUARE-ROOT-INTRO","REVISE"];
  if(n>=145&&n<=147)return ["NUM-ABS","PASS"];
 }
 if(id.startsWith("RAT03V1_")&&n>=121&&n<=124)
  return [n===121||n===123?"RATIO-DIRECT":"RATIO-SCALE","REVISE"];
 if(id.startsWith("ALG04V2_")&&n>=133&&n<=138)
  return ["ALG-DIV-POLYNOMIAL","PASS"];
 if(id.startsWith("QUA12V1_")&&n>=121&&n<=123)
  return ["QUAD-GRAPH","PASS"];
 return null;
}
function audit({root=process.cwd(),readBytes=rel=>fs.readFileSync(path.join(root,rel)),override=null}={}){
 const raw=readBytes(RECEIPT),bank=readBytes(CANDIDATES),book=readBytes(REGISTRY);
 reject(gitBlob(raw)===PIN,"REPORT_TRANSCRIPTION_PIN_CHANGED");
 reject(gitBlob(bank)===CANDIDATES_PIN,"ORIGINAL_R38_CANDIDATES_CHANGED");
 reject(gitBlob(book)===REGISTRY_PIN,"SKILL_FAMILY_REGISTRY_CHANGED");
 const receipt=override||JSON.parse(raw.toString("utf8"));
 const original=JSON.parse(bank.toString("utf8"));
 const registry=JSON.parse(book.toString("utf8"));
 const preview=baseline({root,readBytes});
 reject(preview.academically_approved_questions===40&&
  preview.approved_assessed_family_mappings===0&&
  preview.learner_credit_authorized===false,
  "BASELINE_POLICY_OR_AUTHORITY_CHANGED");
 reject(receipt.schema==="math-r38-notebooklm-owner-pasted-40-item-verdict-intake-v1"&&
  receipt.packet_id==="MATH-R38-R27-40-SKILL-FAMILY-PREFLIGHT-20261018"&&
  receipt.original_text_sha256===SOURCE_SHA256&&
  receipt.original_text_bytes===15944&&receipt.original_text_lines===130&&
  receipt.exact_original_text_in_repository===false&&
  receipt.source_kind==="OWNER_PASTED_NOTEBOOKLM_TEXT"&&
  receipt.report_claims.PASS===33&&receipt.report_claims.REVISE===7&&
  receipt.report_claims.INSUFFICIENT_EVIDENCE===0&&
  receipt.reported_assessed_family_mapping_authorized===0&&
  receipt.runtime_credit_authorized===false&&
  receipt.canonical_bank_taxonomy_edit_authorized===false&&
  receipt.history_backfill_authorized===false&&
  receipt.release_merge_authorized===false,
  "REPORT_CLAIMS_OR_AUTHORIZATION_CHANGED");
 const liveFamilies=new Map(registry.families.map(x=>[x.family_id,x]));
 reject(liveFamilies.size===131&&
  !liveFamilies.has("NUM-SQUARE-ROOT-INTRO")&&
  !liveFamilies.has("NUM-REAL-SETS")&&
  !liveFamilies.has("RATIO-SCALE")&&
  liveFamilies.has("RATIO-BASIC")&&
  liveFamilies.has("RATIO-DIRECT")&&
  receipt.report_alternative_notes.root_intro_fallback==="NUM-REAL-SETS"&&
  receipt.report_alternative_notes.ratio_scale_fallback==="RATIO-BASIC",
  "REGISTRY_FAMILY_ALTERNATIVES_MISREPRESENTED");
 const rows=receipt.per_item_rows;
 reject(Array.isArray(rows)&&rows.length===40&&original.rows.length===40&&
  new Set(rows.map(x=>x.id)).size===40,"ITEM_COUNT_DUPLICATE_OR_MISSING");
 const counts={PASS:0,REVISE:0,INSUFFICIENT_EVIDENCE:0};
 const familyCounts={},byStatus={
  PASS_EXISTING:0,PASS_MISSING:0,REVISE_EXISTING:0,REVISE_MISSING:0
 };
 const missing=new Set(),incorrectlyMarkedPass=[];
 for(let i=0;i<40;i++){
  const item=rows[i],baselineItem=original.rows[i],expect=reported(baselineItem.item_id);
  reject(expect&&item.id===baselineItem.item_id&&
   item.reported_family_id===expect[0]&&
   item.reviewer_verdict===expect[1]&&
   item.reported_role==="ASSESSED_SKILL"&&
   item.reported_primary_layer===baselineItem.approved_academic_layer&&
   item.owner_family_mapping_approved===false,
   "ITEM_REVIEW_CLAIM_CHANGED_"+baselineItem.item_id);
  counts[item.reviewer_verdict]++;
  familyCounts[item.reported_family_id]=(familyCounts[item.reported_family_id]||0)+1;
  const present=liveFamilies.has(item.reported_family_id);
  if(!present)missing.add(item.reported_family_id);
  const key=item.reviewer_verdict+"_"+(present?"EXISTING":"MISSING");
  byStatus[key]++;
  if(!present&&item.reviewer_verdict==="PASS")incorrectlyMarkedPass.push(item.id);
  if(present)
   reject(liveFamilies.get(item.reported_family_id).layer===
    baselineItem.approved_academic_layer,
    "REVIEWER_FAMILY_LAYER_MISMATCH_"+item.id);
 }
 reject(counts.PASS===33&&counts.REVISE===7&&
  JSON.stringify(receipt.reported_family_ids_counts)===JSON.stringify(familyCounts)&&
  byStatus.PASS_EXISTING===6&&byStatus.PASS_MISSING===27&&
  byStatus.REVISE_EXISTING===2&&byStatus.REVISE_MISSING===5&&
  missing.size===6&&
  Object.entries(invalidPassFamilyCounts).every(([family,num])=>
   familyCounts[family]===num&&!liveFamilies.has(family)),
  "MISSING_FAMILY_COUNTS_CHANGED");
 reject(original.rows.filter(x=>x.topic_id==="CT03").length===4&&
  original.rows.filter(x=>x.topic_id==="CT03").every(x=>
   x.approved_academic_layer==="KNTT-Core"&&
   x.review_candidate_family_layer==="KNTT-Core"),
  "GRADE7_CORE_ALREADY_APPROVED");
 reject(original.rows.filter(x=>x.topic_id==="CT04").every(x=>
  x.review_candidate_family_id==="ALG-DIV-MONOMIAL")&&
  liveFamilies.get("ALG-DIV-MONOMIAL").diagnostic_subskills.includes("chia-da-thuc-mot-bien"),
  "POLYNOMIAL_DIAGNOSTIC_ALIAS_CHANGED");
 return Object.freeze({
  schema:"math-r38-independent-report-registry-reconciliation-v1",
  submitted_verdict_counts:counts,
  proposed_families_missing_in_registry:[...missing].sort(),
  reviewer_PASS_with_nonexistent_family_ids:27,
  reviewer_PASS_with_existing_family_ids:6,
  reviewer_REVISE_with_nonexistent_family_ids:5,
  reviewer_REVISE_with_existing_family_ids:2,
  missing_family_references_total:32,
  invalid_PASS_item_ids:incorrectlyMarkedPass,
  existing_ratio_alternative:"RATIO-BASIC",
  new_square_root_family_approved:false,
  academic_family_mappings_approved:0,
  canonical_registry_changed:false,
  runtime_skill_credit_authorized:false,
  historical_learner_backfill_authorized:false
 });
}
module.exports={audit,RECEIPT,PIN,REGISTRY_PIN,SOURCE_SHA256};
if(require.main===module)console.log(JSON.stringify(audit(),null,2));
