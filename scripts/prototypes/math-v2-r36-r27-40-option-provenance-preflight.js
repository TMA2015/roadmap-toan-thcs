/* R36: inspect R27's 40 academically accepted MCQs as CURRENT practice,
 * checking compiled taxonomy membership and exact-option identity blockers.
 * Read-only QA; never grants Skill/Readiness/Mastery or learner credit.
 */
"use strict";
const fs=require("node:fs"),path=require("node:path"),crypto=require("node:crypto");
const {inspect,R34_WORDING}=require("./math-v2-r27-mcq-source-review.js");
const {auditManifests}=require("./math-v2-practice-manifest-drift-r23.js");
const {gitBlob}=require("./math-v2-source-locked-skill-audit-r22.js");
const BANK="docs/assets/data/practice/";
const CUR="docs/assets/data/curriculum/";
const DIR="review-packets/math-phase4-r27-mcq-40/";
const REV21=DIR+"TEMP_R33_OWNER_APPROVED_21_CORE_ITEM_ACADEMIC_SIGNOFF_20261018.json";
const REV3=DIR+"TEMP_R33_OWNER_APPROVED_CT12_CONCEPT_BASE_ENTRANCE10_20261018.json";
const REV16="review-packets/math-phase4-r35-remaining-16/TEMP_R35_OWNER_APPROVED_16_KNTT_CORE_ACADEMIC_SIGNOFF_20261018.json";
const PINS=Object.freeze({
 [REV21]:"56135833a3d8764169719dded28be6b9c0b29eed",
 [REV3]:"35204f5baa654850c4b424dffb659bd89056b1be",
 [REV16]:"100635e3f4ac6229fb39549368eedb9922304af5"
});
const sha256=b=>crypto.createHash("sha256").update(b).digest("hex");
const assert=(x,c)=>{if(!x)throw Error("R36_"+c)};
function audit({root=process.cwd(),registryOverride=null}={}){
 const read=rel=>fs.readFileSync(path.join(root,rel));
 const original=inspect({root});
 const manifests=auditManifests({root});
 const receipts={};
 for(const [rel,pin] of Object.entries(PINS)){
  const bytes=read(rel);assert(gitBlob(bytes)===pin,"APPROVAL_PIN_CHANGED_"+rel);
  receipts[rel]=JSON.parse(bytes);
 }
 const ids21=receipts[REV21].approved_items.map(x=>x.item_id);
 const ids3=receipts[REV3].approved_items.map(x=>x.id);
 const ids16=receipts[REV16].approved_items.map(x=>x.item_id);
 const approvedIds=[...ids21,...ids3,...ids16];
 assert(ids21.length===21&&ids3.length===3&&ids16.length===16&&
  new Set(approvedIds).size===40&&original.rows.length===40&&
  original.rows.every(x=>approvedIds.includes(x.id)),"40_SCOPE_CHANGED");
 assert(receipts[REV21].auto_ingest_into_live_metadata===false&&
  receipts[REV3].canonical_metadata_auto_import_authorized===false&&
  receipts[REV16].canonical_runtime_taxonomy_edit_authorized===false,
  "RUNTIME_METADATA_AUTO_IMPORT_PROHIBITED");
 const registry=registryOverride||JSON.parse(read(CUR+"skill-taxonomy-v2-registry-r1.json"));
 const index=JSON.parse(read(CUR+"taxonomy-v2-runtime/index-r1.json"));
 assert(registry.runtime_enabled===false&&registry.learner_data_write_enabled===false&&
  registry.mastery_thresholds_enabled===false&&registry.readiness_enabled===false&&
  index.runtime_enabled===false&&index.independent_credit_authorized===false&&
  index.learner_data_write_enabled===false&&index.history_backfill_enabled===false,
  "RUNTIME_GUARD_REMOVED");
 const policy=new Set();
 for(const topic of index.topics){
  const p=JSON.parse(read(topic.policy_path));
  for(const r of p.rows)policy.add(r.question_id);
 }
 const byTopic=new Map(manifests.topics.map(x=>[x.topic_id,x]));
 const cache=new Map(),rows=[],optionCount={missing_explicit_option_ids:0,present_stable_option_ids:0};
 for(const h of original.rows){
  if(!cache.has(h.source_file)){
   const bytes=read(BANK+h.source_file);
   const chunks=JSON.parse(bytes.toString("utf8"));
   cache.set(h.source_file,{
    sha:gitBlob(bytes),questions:new Map(chunks.questions.map(q=>[q.id,q]))
   });
  }
  const bank=cache.get(h.source_file),live=bank.questions.get(h.id);
  assert(live&&live.id===h.id,"CURRENT_ID_MISSING_"+h.id);
  const isR34=h.id===R34_WORDING.question_id;
  if(isR34){
   assert(live.question===R34_WORDING.approved&&
    h.question.question===R34_WORDING.old&&
    bank.sha===R34_WORDING.live_blob_sha&&
    JSON.stringify({...live,question:h.question.question})===JSON.stringify(h.question),
    "R34_APPROVED_WORDING_BRIDGE_CHANGED");
  }else{
   // The R34 bank blob changes for every sibling in that three-item chunk.
  // Each sibling record itself must remain exactly equal to its historical R27 record.
  assert((bank.sha===h.source_git_blob_sha||
    (h.source_file===R34_WORDING.source_file&&bank.sha===R34_WORDING.live_blob_sha))&&
    JSON.stringify(live)===JSON.stringify(h.question),
    "CURRENT_SOURCE_CHANGED_"+h.id);
  }
  const options=live.options;
  assert(Array.isArray(options)&&options.length===4&&options.every(o=>typeof o==="string")&&
   Number.isInteger(live.answer)&&live.answer>=0&&live.answer<4,
   "POSITIONAL_OPTION_CONTRACT_CHANGED_"+h.id);
  const explicit=Array.isArray(live.option_ids)&&live.option_ids.length===4&&
   live.option_ids.every(x=>typeof x==="string"&&x.length>=6)&&
   new Set(live.option_ids).size===4;
  if(explicit)optionCount.present_stable_option_ids++;
  else optionCount.missing_explicit_option_ids++;
  const m=byTopic.get(h.topic_id);
  assert(m&&m.current_counts.new_unreviewed_ids>0,
   "LATEST_CANDIDATE_MANIFEST_NOT_TRACKED_"+h.id);
  const row={id:h.id,topic:h.topic_id,source_file:h.source_file,
   historical_blob:h.source_git_blob_sha,live_blob:bank.sha,
   historical_record_sha256:h.record_sha256,
   current_record_sha256:sha256(Buffer.from(JSON.stringify(live))),
   approved_academic:true,
   approved_layer:ids3.includes(h.id)?"Entrance10":"KNTT-Core",
   exact_R34_wording_delta:isR34,
   indexed_in_3114_historical_policy:policy.has(h.id),
   stable_option_ids_authored:explicit,
   positional_answer_index:live.answer,
   latest_version_manifest_candidate:m.candidate_manifest,
   latest_manifest_is_live_confirmed:!m.candidate_only};
  rows.push(row);
 }
 assert(rows.length===40&&optionCount.missing_explicit_option_ids===40&&
  optionCount.present_stable_option_ids===0&&
  rows.every(x=>!x.indexed_in_3114_historical_policy)&&
  rows.filter(x=>x.exact_R34_wording_delta).length===1&&
  rows.filter(x=>x.approved_layer==="Entrance10").length===3,
  "STABLE_ID_OR_HISTORICAL_POLICY_STATUS_CHANGED");
 return Object.freeze({schema:"math-r36-r27-40-current-provenance-and-option-identity-preflight-v1",
  academic_approved_ids:40,matched_live_bank_items:40,
  R34_approved_delta_items:1,unmatched_historical_policy_items:40,
  ...optionCount,latest_version_manifest_not_proven_live:rows.filter(x=>!x.latest_manifest_is_live_confirmed).length,
  canonical_option_id_approval:false,option_reorder_safe_event_capture:false,
  R19_exact_option_id_storage_ready:false,skill_family_assignment_authorized:false,
  learner_skill_readiness_mastery_activation:false,history_backfill:false,
  rows});
}
module.exports={audit};
if(require.main===module)console.log(JSON.stringify(audit(),null,2));
