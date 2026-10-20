/* R37 — static author-slot-to-option-id binding DESIGN, not active learner code.
 * No Runtime R19, event/outbox or legacy progress writes. Source-lock fail closed.
 */
"use strict";
const fs=require("node:fs"),path=require("node:path"),crypto=require("node:crypto");
const {inspect,R34_WORDING,PINS}=require("./math-v2-r27-mcq-source-review.js");
const {gitBlob}=require("./math-v2-source-locked-skill-audit-r22.js");
const DIRECTORY="review-packets/math-phase4-r37-option-identity/";
const PROPOSAL=DIRECTORY+"TEMP_R37_40MCQ_160_STATIC_OPTION_BINDING_PROPOSAL_20261018.json";
const PIN="4c1f178bbc721b13c5039af997d129a1db22aa94";
const BANK="docs/assets/data/practice/";
const hex256=source=>crypto.createHash("sha256").update(source).digest("hex");
const fail=(condition,label)=>{if(!condition)throw Error("R37_"+label);};
const idFor=(itemId,authoredSlot)=>"OPT_"+itemId+"_V1_S"+authoredSlot;
function bindDisplayOptions(verifiedQuestion,permutation){
 fail(verifiedQuestion&&Array.isArray(verifiedQuestion.authored_choices)&&
  Array.isArray(permutation)&&permutation.length===4&&
  permutation.every(x=>Number.isInteger(x)&&x>=0&&x<4)&&
  new Set(permutation).size===4,"BAD_DISPLAY_PERMUTATION");
 return Object.freeze(permutation.map(position=>Object.freeze({
  option_id:verifiedQuestion.authored_choices[position].option_id,
  text:verifiedQuestion.authored_choices[position].text,
  correct:verifiedQuestion.authored_choices[position].correct
 })));
}
function selectByAuthoredOptionId(item,row){
 fail(item&&Array.isArray(item.authored_choices),"NO_OPTION_BINDING");
 const x=item.authored_choices.filter(c=>c.option_id===row);
 fail(x.length===1,"UNKNOWN_OR_DUPLICATE_OPTION_ID");
 return Object.freeze({item_id:item.item_id,source_sha256:item.current_source_sha256,
  option_id:x[0].option_id,correct:x[0].correct});
}
function audit({root=process.cwd(),readBytes=rel=>fs.readFileSync(path.join(root,rel)),override=null}={}){
 const raw=readBytes(PROPOSAL);
 fail(gitBlob(raw)===PIN,"PROPOSAL_BLOB_CHANGED");
 const p=override||JSON.parse(raw.toString("utf8"));
 fail(p.schema==="math-r37-r27-40-provisional-authored-option-bindings-v1"&&
  p.approval_status==="QA_STATIC_DESIGN_UNAPPROVED"&&
  p.packet_id==="MATH-R27-NEW-MCQ-40-20261018"&&
  p.identity_scheme==="OPT_<EXACT_ITEM_ID>_V1_S<AUTHORED_SLOT>"&&
  p.source_sha256_is_git_blob_sha1===false&&
  p.owner_option_identity_approved===false&&
  p.canonical_bank_metadata_modified===false&&
  p.production_r19_event_writer_authorized===false&&
  p.source_reviewed_skill_family_mapping_authorized===false&&
  p.real_learner_data_write_authorized===false&&
  p.history_backfill_authorized===false&&
  p.unique_items===40&&p.unique_options===160&&
  p.live_r34_stem_exception==="QUA12V1_121"&&
  p.live_r34_bank_git_blob===R34_WORDING.live_blob_sha,
  "UNAPPROVED_IDENTITY_AUTHORITY");
 const approvals=[
  ["review-packets/math-phase4-r27-mcq-40/TEMP_R33_OWNER_APPROVED_21_CORE_ITEM_ACADEMIC_SIGNOFF_20261018.json",
   "56135833a3d8764169719dded28be6b9c0b29eed","approved_items","item_id",21],
  ["review-packets/math-phase4-r27-mcq-40/TEMP_R33_OWNER_APPROVED_CT12_CONCEPT_BASE_ENTRANCE10_20261018.json",
   "35204f5baa654850c4b424dffb659bd89056b1be","approved_items","id",3],
  ["review-packets/math-phase4-r35-remaining-16/TEMP_R35_OWNER_APPROVED_16_KNTT_CORE_ACADEMIC_SIGNOFF_20261018.json",
   "100635e3f4ac6229fb39549368eedb9922304af5","approved_items","item_id",16]
 ];
 const ownerApproved=[];
 for(const [file,pin,key,idKey,count] of approvals){
  const bytes=readBytes(file);
  fail(gitBlob(bytes)===pin,"ACADEMIC_APPROVAL_PIN_CHANGED");
  const record=JSON.parse(bytes.toString("utf8"));
  fail(Array.isArray(record[key])&&record[key].length===count,
   "ACADEMIC_APPROVAL_COUNT_CHANGED");
  ownerApproved.push(...record[key].map(row=>row[idKey]));
 }
 fail(ownerApproved.length===40&&new Set(ownerApproved).size===40,
  "ACADEMIC_APPROVAL_PARTITION_CHANGED");
 const r27=inspect({root,readBytes});
 fail(r27.rows.length===40&&r27.total===40&&p.entries?.length===40&&
  r27.rows.every(row=>ownerApproved.includes(row.id)),
  "R27_SOURCE_SCOPE_CHANGED");
 const byId=new Map(r27.rows.map(x=>[x.id,x]));
 const allOptionIds=new Set(),records=[],fileCache=new Map(),currentDigests=new Set();
 for(const entry of p.entries){
  const prior=byId.get(entry.item_id);
  fail(prior&&prior.topic_id===entry.topic_id&&
   prior.source_file===entry.canonical_bank_file&&
   prior.source_git_blob_sha===entry.historical_bank_git_blob&&
   PINS[prior.source_file]===entry.historical_bank_git_blob,
   "UNPINNED_ITEM_"+entry.item_id);
  if(!fileCache.has(entry.canonical_bank_file)){
   const bytes=readBytes(BANK+entry.canonical_bank_file);
   const blob=gitBlob(bytes);
   const expected=entry.canonical_bank_file===R34_WORDING.source_file?
    R34_WORDING.live_blob_sha:entry.historical_bank_git_blob;
   fail(blob===expected,"CURRENT_BANK_CHUNK_CHANGED_"+entry.item_id);
   const q=JSON.parse(bytes.toString("utf8")).questions;
   fail(Array.isArray(q)&&new Set(q.map(r=>r.id)).size===q.length,
    "DUPLICATE_BANK_ID");
   fileCache.set(entry.canonical_bank_file,{blob,questions:new Map(q.map(r=>[r.id,r]))});
  }
  const chunk=fileCache.get(entry.canonical_bank_file);
  const current=chunk.questions.get(entry.item_id);
  fail(current&&Array.isArray(current.options)&&current.options.length===4&&
   Number.isInteger(current.answer)&&current.answer>=0&&current.answer<4,
   "CURRENT_OPTION_CONTRACT_CHANGED_"+entry.item_id);
  if(entry.item_id==="QUA12V1_121"){
   fail(current.question===R34_WORDING.approved&&
    prior.question.question===R34_WORDING.old&&
    JSON.stringify({...current,question:R34_WORDING.old})===JSON.stringify(prior.question),
    "R34_ONLY_STEM_MUST_CHANGE");
  }else{
   fail(JSON.stringify(current)===JSON.stringify(prior.question),
    "CURRENT_RECORD_DRIFT_"+entry.item_id);
  }
  fail(Array.isArray(entry.authored_choices)&&entry.authored_choices.length===4,
   "CANDIDATE_OPTION_COUNT_"+entry.item_id);
  const sourceSha=hex256(Buffer.from(JSON.stringify(current)));
  fail(sourceSha.length===64&&sourceSha!==chunk.blob,
   "R19_SOURCE_SHA256_INVALID_"+entry.item_id);
  for(let i=0;i<4;i++){
   const option=entry.authored_choices[i];
   fail(option.authored_slot===i&&option.option_id===idFor(entry.item_id,i)&&
    /^[A-Za-z0-9_-]{6,128}$/.test(option.option_id)&&
    option.text===current.options[i]&&
    option.correct===(i===current.answer)&&
    !allOptionIds.has(option.option_id),
    "OPTION_BINDING_CHANGED_"+entry.item_id+"_"+i);
   allOptionIds.add(option.option_id);
  }
  currentDigests.add(sourceSha);
  records.push(Object.freeze({
   ...entry,bank_current_git_blob:chunk.blob,
   current_source_sha256:sourceSha,
   option_identity_status:"QA_CANDIDATE_NOT_PERSISTED_OR_APPROVED"
  }));
 }
 fail(records.length===40&&new Set(records.map(x=>x.item_id)).size===40&&
  allOptionIds.size===160&&currentDigests.size===40&&
  records.filter(x=>x.item_id==="QUA12V1_121").length===1,
  "COVERAGE_OR_ID_COLLISION");
 const probe=records[0];
 const display=bindDisplayOptions(probe,[2,0,3,1]);
 const selection=selectByAuthoredOptionId(probe,display[1].option_id);
 fail(display[1].correct===true&&selection.correct===true&&
  display[0].option_id===probe.authored_choices[2].option_id,
  "SHUFFLE_IDENTITY_UNSAFE");
 return Object.freeze({
  schema:"math-r37-static-option-identity-review-v1",
  proposed_binding_sha:PIN,source_locked_items:40,proposed_authored_option_ids:160,
  unique_option_ids:160,R34_live_stem_preserved:1,
  initial_display_shuffle_id_binding_verified:true,
  canonical_source_sha256_per_item_in_R19_format:true,
  option_ids_authored_and_approved_in_live_bank:false,
  production_presentation_option_ids_verified:false,
  runtime_identity_writer_authorized:false,
  source_reviewed_family_assignment_authorized:false,
  skill_readiness_mastery_allowed:false,
  historical_learner_backfill_allowed:false,
  entries:records
 });
}
module.exports={audit,bindDisplayOptions,selectByAuthoredOptionId,idFor,PROPOSAL,PIN};
if(require.main===module){
 const z=audit();
 console.log(JSON.stringify({
  schema:z.schema,source_locked_items:z.source_locked_items,
  proposed_authored_option_ids:z.proposed_authored_option_ids,
  initial_display_shuffle_id_binding_verified:z.initial_display_shuffle_id_binding_verified,
  option_ids_authored_and_approved_in_live_bank:z.option_ids_authored_and_approved_in_live_bank,
  runtime_identity_writer_authorized:z.runtime_identity_writer_authorized
 },null,2));
}
