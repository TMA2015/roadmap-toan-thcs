/* R38 correction V2 — capture 40 independent NotebookLM mapping claims.
 * Only checks reviewer report against current 131-family registry and R38
 * original pinned MCQs. NEVER promotes reviewer claims to production.
 */
"use strict";
const fs=require("node:fs"),path=require("node:path");
const {gitBlob}=require("./math-v2-source-locked-skill-audit-r22.js");
const {audit:originalR38}=require("./math-v2-r38-40mcq-skill-family-compatibility.js");
const FILE="review-packets/math-phase4-r38-family-compatibility/TEMP_R38_NOTEBOOKLM_CORRECTION_V2_40_VERDICT_INTAKE_20261018.json";
const PIN="b9208d49e59eb7705f16b641ebad28d0fa6154ae";
const BASE_FILE="review-packets/math-phase4-r38-family-compatibility/TEMP_R38_40MCQ_CANDIDATE_SKILL_FAMILY_REVIEW_20261018.json";
const BASE_PIN="5fb3e14814a349af6dc0be3ccdd57fc51cc7ebad";
const REG_FILE="docs/assets/data/curriculum/skill-taxonomy-v2-registry-r1.json";
const REG_PIN="90e58fa666a0cea4ae41ff7ef82a3cbf80ca11e4";
const ORIGINAL_REPORT_SHA256="94c9a7fc256c2e0940a9e989a0bc7d5a5ddfece825dd646dbb9da2cb506d0a26";
const fail=(ok,code)=>{if(!ok)throw Error("R38_V2_"+code)};
function expectedFamily(id){
 const n=Number(id.split("_").at(-1));
 if(id.startsWith("NUM02V1_")){
  if(n>=121&&n<=132)return "NUM-SETS";
  if(n>=133&&n<=136)return "NUM-FRACTION-OPS";
  if(n===137)return "NUM-ORDER";
  if(n===138)return "NUM-POWER";
  if(n>=139&&n<=141)return "NUM-SETS";
  if(n>=142&&n<=144)return "NEW_FAMILY_PROPOSAL";
  if(n>=145&&n<=147)return "NUM-ABS";
 }
 if(id.startsWith("RAT03V1_")&&n>=121&&n<=124)
  return n===121||n===123?"RATIO-DIRECT":"RATIO-BASIC";
 if(id.startsWith("ALG04V2_")&&n>=133&&n<=138)return "ALG-DIV-MONOMIAL";
 if(id.startsWith("QUA12V1_")&&n>=121&&n<=123)return "QUAD-GRAPH";
 return null;
}
function audit({root=process.cwd(),readBytes=rel=>fs.readFileSync(path.join(root,rel)),override=null}={}){
 const packet=readBytes(FILE),base=readBytes(BASE_FILE),registryBytes=readBytes(REG_FILE);
 fail(gitBlob(packet)===PIN,"PACKET_SOURCE_BLOB_CHANGED");
 fail(gitBlob(base)===BASE_PIN&&gitBlob(registryBytes)===REG_PIN,"REFERENCE_SOURCE_BLOB_CHANGED");
 const p=override||JSON.parse(packet);
 const c=JSON.parse(base),reg=JSON.parse(registryBytes),live=new Map(reg.families.map(x=>[x.family_id,x]));
 const old=originalR38({root,readBytes});
 fail(old.academically_approved_questions===40&&old.approved_assessed_family_mappings===0&&
  old.learner_credit_authorized===false,"OLD_REVIEW_SCOPE_CHANGED");
 fail(p.schema==="math-r38-notebooklm-correction-v2-40-reviewed-family-claims-intake-v1"&&
  p.packet_id==="MATH-R38-R27-40-SKILL-FAMILY-CORRECTION-20261018"&&
  p.report_original_utf8_sha256===ORIGINAL_REPORT_SHA256&&
  p.report_original_upload_filename==="Văn bản đã dán (1)(20261018-150649).txt"&&
  p.report_original_bytes===25977&&p.report_original_lines===231&&
  p.report_has_multiple_concatenated_drafts===true&&
  p.report_first_two_drafts_incomplete_or_cut===true&&
  p.report_final_complete_40_row_table_line_range==="154-193"&&
  p.transcription_is_not_byte_identical_original_report===true&&
  p.original_40_item_candidate_packet_git_blob===BASE_PIN&&
  p.authoritative_registry_git_blob===REG_PIN&&
  p.report_verdicts_as_submitted.PASS===6&&p.report_verdicts_as_submitted.REVISE===34&&
  p.report_verdicts_as_submitted.INSUFFICIENT_EVIDENCE===0&&
  p.outcome_partition.PASS_EXISTING_UNCHANGED===6&&
  p.outcome_partition.REVISE_TO_EXISTING===31&&
  p.outcome_partition.REVISE_NEW_FAMILY_OR_HOLD===3&&
  p.valid_existing_family_references===37&&
  p.new_family_proposal_unresolved_count===3&&
  p.grade7_square_root_proposed_family_name==="NUM-SQUARE-ROOT-INTRO"&&
  p.new_family_approved===false&&p.item_curriculum_layer_changed===false&&
  p.canonical_taxonomy_changed===false&&p.canonical_bank_changed===false&&
  p.runtime_skill_readiness_mastery_enabled===false&&
  p.student_history_backfill_enabled===false&&
  p.owner_item_to_family_mapping_approval_granted===false&&
  p.release_merge_permission_granted===false,
  "PROVENANCE_OR_AUTHORITY_CHANGED");
 fail(live.size===131&&
  !live.has("NUM-SQUARE-ROOT-INTRO")&&
  !live.has("NEW_FAMILY_PROPOSAL")&&
  reg.runtime_enabled===false&&reg.learner_data_write_enabled===false,
  "REGISTRY_OR_RUNTIME_BOUNDARY_CHANGED");
 fail(p.per_item_verdict_claims?.length===40&&c.rows.length===40,"ITEM_COUNT_CHANGED");
 const tallies={PASS:0,REVISE:0},famCounts={},seen=new Set();
 let valid=0,proposed=0;
 for(let i=0;i<40;i++){
  const row=p.per_item_verdict_claims[i],src=c.rows[i];
  const family=expectedFamily(src.item_id),verdict=
   src.item_id.startsWith("QUA12V1_")||
   (src.item_id.startsWith("NUM02V1_")&&Number(src.item_id.split("_").at(-1))>=145)
     ?"PASS":"REVISE";
  fail(row.item_id===src.item_id&&row.topic_id===src.topic_id&&
   row.existing_approved_curriculum_layer===src.approved_academic_layer&&
   row.submitted_family_id_or_proposal===family&&
   row.submitted_verdict===verdict&&row.submitted_role==="ASSESSED_SKILL"&&
   row.independent_mapping_review_claim===true&&
   row.authoritative_family_mapping_approved===false&&row.production_credit_authorized===false&&
   !seen.has(row.item_id),"PER_ITEM_REVIEW_CLAIM_CHANGED_"+src.item_id);
  seen.add(row.item_id);
  const exists=family!=="NEW_FAMILY_PROPOSAL";
  fail(row.family_id_exists_in_current_registry===exists,"REGISTRY_EXISTENCE_CHANGED_"+src.item_id);
  fail(row.family_review_status===(exists?
    "ITEM_ROLE_REVIEW_PENDING_OWNER":"NEW_G7_SQUARE_ROOT_FAMILY_OR_HOLD_NEEDS_OWNER_DECISION"),
    "FAMILY_APPROVAL_SCOPE_CHANGED_"+src.item_id);
  if(exists){
   const target=live.get(family);
   fail(target&&target.topics.includes(src.topic_id)&&
    target.layer===src.approved_academic_layer,"FAMILY_TOPIC_OR_LAYER_INCOMPATIBLE_"+src.item_id);
   valid++;
  }else{
   fail(src.item_id==="NUM02V1_142"||src.item_id==="NUM02V1_143"||src.item_id==="NUM02V1_144",
    "UNEXPECTED_FAMILY_PROPOSAL_"+src.item_id);
   proposed++;
  }
  tallies[verdict]++;
  famCounts[family]=(famCounts[family]||0)+1;
 }
 fail(seen.size===40&&valid===37&&proposed===3&&tallies.PASS===6&&tallies.REVISE===34&&
  Object.keys(famCounts).length===10&&
  Object.entries(p.family_id_distribution).every(([k,v])=>famCounts[k]===v),
  "VERDICT_DISTRIBUTION_CHANGED");
 return Object.freeze({schema:"math-r38-notebooklm-family-correction-v2-intake-audit-v1",
  original_NLM_v2_report_sha256:ORIGINAL_REPORT_SHA256,
  verified_40_independent_claims:true,reviewer_PASS:6,reviewer_REVISE:34,
  reviewer_corrected_to_existing_family:31,
  proposed_existing_family_references:37,
  unresolved_grade7_square_root_family:3,
  owner_approved_item_to_family_mappings:0,
  live_taxonomy_writes:false,runtime_skill_credit_enabled:false,
  learner_history_changed:false,merge_authorized:false});
}
module.exports={audit,FILE,PIN,ORIGINAL_REPORT_SHA256};
if(require.main===module)console.log(JSON.stringify(audit(),null,2));
