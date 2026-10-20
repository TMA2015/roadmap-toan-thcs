/* Math Phase 4 R26: audit-only exact 59-item new Practice register.
 * Receipt evidence is specific to the item/packet, NOT a source-version
 * authorization for live Skill, independent Readiness or student mastery.
 */
"use strict";
const fs=require("node:fs"),path=require("node:path");
const {auditManifests}=require("./math-v2-practice-manifest-drift-r23.js");
const {gitBlob}=require("./math-v2-source-locked-skill-audit-r22.js");
const BANK="docs/assets/data/practice/";
const CUR="docs/assets/data/curriculum/taxonomy-v2-runtime/";
const W1="docs/collaboration/math-w1-conversion-closure-and-reuse-audit-20261015.md";
const W2A="review-packets/math-exercise-w2a-20261015/04_W2A_NOTEBOOKLM_OWNER_PASS_RECEIPT_20261015.md";
const W2B="review-packets/math-exercise-w2b-20261016/03_W2B_NOTEBOOKLM_OWNER_12_PASS_RECEIPT.md";
const CT09REVIEW="review-packets/academic-depth/ct09-p1c2/02_NOTEBOOKLM_CT09_P1C2_INTERACTIVE_R1_PASS_RECEIPT.md";
const CT09OWNER="review-packets/academic-depth/ct09-p1c2/04_CT09_P1C2_OWNER_QA_PASS.md";
const CT09EXT=CUR+"ct09-p1c2-extension-r1.json";
const richSources=Object.freeze({
 "NUM02-RICH-W1-01-V1":{source:"02-G6-WR-01",receipt:W1,wave:"W1"},
 "NUM02-RICH-W1-02-V1":{source:"02-G6-WR-03",receipt:W1,wave:"W1"},
 "RAT03-RICH-W1-01-V1":{source:"03-M1-02",receipt:W1,wave:"W1"},
 "RAT03-RICH-W1-02-V1":{source:"03-M3-01",receipt:W1,wave:"W1"},
 "ALG04-RICH-W1-01-V1":{source:"04-WR-01",receipt:W1,wave:"W1"},
 "ALG04-RICH-W1-02-V1":{source:"04-WR-03",receipt:W1,wave:"W1"},
 "STA21-RICH-W1-01-V1":{source:"21-M2-01",receipt:W1,wave:"W1"},
 "STA21-RICH-W1-02-V1":{source:"21-M3-01",receipt:W1,wave:"W1"},
 "ALG04-RICH-W2A-01-V1":{source:"04-WR-06",receipt:W2A,wave:"W2A",
  owner_receipt:"docs/collaboration/math-w2a-wave1-owner-preview-qa-20261015.md"},
 "ALG04-RICH-W2B-01-V1":{source:"04-WR-10",receipt:W2B,wave:"W2B",
  owner_receipt:"docs/collaboration/math-w2b-wave1-owner-preview-qa-20261016.md"}
});
const requireSafe=(condition,code)=>{if(!condition)throw Error("R26_"+code);};
function classify(item,{receiptText,ct09Row,extension,ct09ChunkSha}){
 const {q,topic_id,source_file}=item;
 const isRich=!!(q.response_type&&q.answer_contract);
 if(isRich){
   const known=richSources[q.id];
   requireSafe(!!known&&known.source===q.source_item_id,
     "RICH_WITHOUT_EXACT_SOURCE_PROVENANCE_"+q.id);
   const text=receiptText(known.receipt);
   const released=known.owner_receipt?receiptText(known.owner_receipt):text;
   requireSafe(text.includes(known.source)&&released.includes(q.id)&&
     released.includes(known.source),
     "RICH_RECEIPT_OR_RELEASE_REFERENCE_MISSING_"+q.id);
   return {kind:"RICH_TYPED",prior_review_status:"PRIOR_WAVE_REVIEW_OR_RELEASE_REFERENCED",
    receipt:known.receipt,owner_release_receipt:known.owner_receipt||null,
    source_item_id:known.source,
    wave:known.wave,exact_taxonomy_mapping_approved:false,
    stable_option_identity_approved:false,
    mastery_or_readiness_approved:false};
 }
 requireSafe(Array.isArray(q.options)&&q.options.length>=2&&
   Number.isInteger(q.answer)&&q.answer>=0&&q.answer<q.options.length,
   "MCQ_CONTRACT_INVALID_"+q.id);
 if(topic_id==="CT07" && q.id==="RAT07V1_121"){
   const rec="review-packets/math-content-cleanup/MATH-CT05-07-W3-P1-MCQ-R1-RESULT.md";
   const verdict=receiptText(rec);
   requireSafe(source_file==="07-phan-thuc-dai-so-v1-05.json" &&
     q.authoring_review?.status==="PASS" &&
     q.authoring_review?.packet_id===
       "MATH-CT05-07-W3-D1D6-P1-MINIMAL-DELTA-R0-20261020" &&
     verdict.includes("CANDIDATE_ID|P1-CT07-DIV-DOMAIN-R0") &&
     verdict.includes("OVERALL|PASS_FOR_AUTHORING_REVIEW"),
     "CT07_P1_INDEPENDENT_AUTHORING_RECEIPT_MISSING");
   return {kind:"MCQ",prior_review_status:"CT07_P1_AUTHORING_PASS_NO_CREDIT",
     receipt:rec,source_item_id:"07-WR-09",wave:"CT07_P1",
     exact_taxonomy_mapping_approved:false,stable_option_identity_approved:false,
     mastery_or_readiness_approved:false};
 }
 if(topic_id==="CT09"){
   const row=ct09Row.get(q.id);
   requireSafe(!!row&&source_file===extension.source_file.name &&
      row.source_blob===ct09ChunkSha &&
      row.family_id&&row.independent_credit_authorized===false &&
      extension.source_review.verdict==="PASS" &&
      q.tags?.skill?.join("|")===row.legacy_skill_tags.join("|"),
      "CT09_REVIEWED_EXTENSION_MISMATCH_"+q.id);
   const receipt=receiptText(CT09REVIEW),owner=receiptText(CT09OWNER);
   requireSafe(receipt.includes(q.id+" — PASS")&&
     owner.includes("CT09_P1C2 = OWNER_QA_PASS_CLOSED"),
     "CT09_EXISTING_VERDICT_NOT_VERIFIED_"+q.id);
   return {kind:"MCQ",prior_review_status:"CT09_P1C2_EXACT_SOURCE_REVIEWED",
    receipt:CT09REVIEW,source_item_id:null,wave:"CT09_P1C2",
    reviewed_family_id:row.family_id,
    evidence_class:row.evidence_class,
    exact_taxonomy_mapping_approved:true,
    stable_option_identity_approved:false,
    mastery_or_readiness_approved:false};
 }
 return {kind:"MCQ",prior_review_status:"NO_ITEM_SPECIFIC_REVIEW_RECEIPT_LINKED_BY_R26",
   receipt:null,source_item_id:null,wave:null,
   exact_taxonomy_mapping_approved:false,
   stable_option_identity_approved:false,
   mastery_or_readiness_approved:false};
}
function auditNewItems({root=process.cwd(),auditR23=auditManifests}={}){
 const repoRead=rel=>fs.readFileSync(path.join(root,rel));
 const json=rel=>JSON.parse(repoRead(rel).toString("utf8"));
 const r23=auditR23({root});
 requireSafe(r23.summary.historic_policy_rows===3114 &&
   r23.summary.candidate_questions===3174 &&
   r23.summary.new_unreviewed_ids===60 &&
   r23.summary.mcq_new_items===50 && r23.summary.rich_new_items===10 &&
   r23.summary.shared_policy_ids===3114 && r23.summary.missing_policy_ids===0,
   "BASE_CATALOG_CHANGED");
 const ext=json(CT09EXT);
 requireSafe(ext.source_review?.authorization==="CLEARED_FOR_CT09_P1C2_INTEGRATION_ONLY" &&
    ext.source_review?.receipt===CT09REVIEW &&
    ext.mastery_readiness_credit===false &&
    ext.backfill_existing_attempts===false &&
    ext.rows?.length===9,
    "CT09_EXTENSION_NOT_SOURCE_REVIEWED");
 const by09=new Map(ext.rows.map(q=>[q.question_id,q]));
 requireSafe(by09.size===9,"CT09_REVIEW_DUPLICATE");
 const receipts=new Map();
 const receiptText=rel=>{
  if(!receipts.has(rel))receipts.set(rel,repoRead(rel).toString("utf8"));
  return receipts.get(rel);
 };
 const output=[],seen=new Set();
 for(const t of r23.topics){
   const policy=json(CUR+t.topic_id.toLowerCase()+"-r1.json");
   const old=new Set(policy.rows.map(q=>q.question_id));
   const man=json(t.candidate_manifest);
   for(const filename of man.sources){
     const bytes=repoRead(BANK+filename);
     const hash=gitBlob(bytes);
     const chunk=JSON.parse(bytes.toString("utf8"));
     requireSafe(Array.isArray(chunk.questions),"BANK_MISSING_QUESTIONS_"+filename);
     for(const q of chunk.questions){
       if(old.has(q.id))continue;
       requireSafe(!seen.has(q.id),"REPEATED_NEW_ID_"+q.id);
       seen.add(q.id);
       const base={topic_id:t.topic_id,question_id:q.id,source_file:filename,
         source_git_blob_sha:hash,
         candidate_manifest:t.candidate_manifest,
         directly_linked_from_bai_tap:t.candidate_only===false,
         learner_currently_served_independently_verified:false};
       const info=classify({q,topic_id:t.topic_id,source_file:filename},
         {receiptText,ct09Row:by09,extension:ext,
          ct09ChunkSha:hash});
       output.push({...base,...info});
     }
   }
 }
 output.sort((a,b)=>a.topic_id.localeCompare(b.topic_id)||
   a.question_id.localeCompare(b.question_id));
 const groups=Object.create(null);
 for(const q of output){
   const key=q.topic_id,group=groups[key]||(groups[key]={
     total:0,mcq:0,rich:0,ct09_exact_reviewed:0,
     rich_prior_receipt_linked:0,other_mcq_without_item_receipt:0});
   group.total++;
   if(q.kind==="MCQ")group.mcq++;else group.rich++;
   if(q.prior_review_status==="CT09_P1C2_EXACT_SOURCE_REVIEWED")
     group.ct09_exact_reviewed++;
   if(q.prior_review_status==="PRIOR_WAVE_REVIEW_OR_RELEASE_REFERENCED")
     group.rich_prior_receipt_linked++;
   if(q.prior_review_status==="NO_ITEM_SPECIFIC_REVIEW_RECEIPT_LINKED_BY_R26")
     group.other_mcq_without_item_receipt++;
 }
 requireSafe(output.length===60 &&
    output.filter(q=>q.kind==="MCQ").length===50 &&
    output.filter(q=>q.kind==="RICH_TYPED").length===10 &&
    output.filter(q=>q.prior_review_status==="CT09_P1C2_EXACT_SOURCE_REVIEWED").length===9 &&
    output.filter(q=>q.prior_review_status==="PRIOR_WAVE_REVIEW_OR_RELEASE_REFERENCED").length===10 &&
    output.filter(q=>q.prior_review_status==="NO_ITEM_SPECIFIC_REVIEW_RECEIPT_LINKED_BY_R26").length===40,
     output.filter(q=>q.prior_review_status==="CT07_P1_AUTHORING_PASS_NO_CREDIT").length===1,
    "REVIEW_BUCKETS_CHANGED");
 requireSafe(Object.keys(groups).length===7,"NEW_TOPIC_DISTRIBUTION_CHANGED");
 return Object.freeze({
   schema:"math-phase4-r26-practice-new-item-register-qa-v1",
   status:"SOURCE_RECEIPT_CLASSIFICATION_QA_ONLY",
   source_r23:"scripts/prototypes/math-v2-practice-manifest-drift-r23.js",
   total:60,mcq:50,rich:10,
   known_ct09_exact_reviewed:9,rich_prior_review_or_release_linked:10,
   mcq_without_item_specific_receipt_link:40,
   topic_groups:groups,
   items:output,
   safeguards:{production_skill_counter_allowed:false,
     historical_mastery_backfill:false,learner_data_read:false,
     learner_data_write:false,synthetic_or_documentary_receipt_grants_credit:false,
     current_active_route_proven:false,stable_option_id_approved:false}
 });
}
module.exports={auditNewItems,classify,richSources};
if(require.main===module){
 const r=auditNewItems();
 console.log("PASS R26 60-item candidate register: one independently authoring-reviewed CT07 MCQ; no Skill credit");
 console.log(JSON.stringify(r,null,2));
}
