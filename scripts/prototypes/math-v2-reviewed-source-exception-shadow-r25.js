/* Phase 4 R25: source-pinned legacy taxonomy reconciliation, QA-only.
 * Existing CT08 notation and CT09 additive delivery metadata locks permit
 * an EXPLANATION of source drift, NOT a learner counters or mastery cutover.
 */
"use strict";
const fs=require("node:fs"),path=require("node:path");
const {isDeepStrictEqual}=require("node:util");
const {audit,gitBlob}=require("./math-v2-source-locked-skill-audit-r22.js");
const {auditManifests}=require("./math-v2-practice-manifest-drift-r23.js");
const INDEX="docs/assets/data/curriculum/taxonomy-v2-runtime/index-r1.json";
const CUR="docs/assets/data/curriculum/taxonomy-v2-runtime/";
const BANK="docs/assets/data/practice/";
const LOCK08="review-packets/academic-depth/ct08-p1a/01_CT08_P1A_NOTATION_ACADEMIC_LOCK_R1.json";
const LOCK09="review-packets/academic-depth/ct09-p1c1/01_CT09_PRACTICE_ACADEMIC_LOCK_R1.json";
const OWNER09="review-packets/academic-depth/ct09-p1c2/04_CT09_P1C2_OWNER_QA_PASS.md";
// A SHA changed again, even by a space, requires deliberate new review.
// These 5 SHAs are QA receipts only; immutable I3G historical policy remains OFF.
const CURRENT=Object.freeze({
 "08-phuong-trinh-bat-phuong-trinh-v1-02.json":"0eda14ac65f06d0cd5d281893ab70d395f3bab37",
 "09-he-phuong-trinh-v1-01.json":"a7e9b39e85d0b52449661e101d2b3ad2106b9f18",
 "09-he-phuong-trinh-v1-02.json":"b6dc363399cc9f030256b93251e5e9faf449df87",
 "09-he-phuong-trinh-v1-03.json":"0ba5cb4b23d0b668c5f0ce83a1efd70883c0e7bc",
 "09-he-phuong-trinh-v1-04.json":"e980933d5a432d86084f0c471fd5ce1b1fc9c2da"
});
function changes(oldRecord,newRecord){
 return [...new Set([...Object.keys(oldRecord),...Object.keys(newRecord)])]
  .filter(k=>!isDeepStrictEqual(oldRecord[k],newRecord[k])).sort();
}
function need(ok,why){if(!ok)throw Error("R25_"+why);}
function reconcile({root=process.cwd(),readBytes=(rel)=>fs.readFileSync(path.join(root,rel))}={}){
 const json=rel=>JSON.parse(readBytes(rel).toString("utf8"));
 const base=audit({root,readBytes});
 need(base.policy_questions_checked===3114,"BASE_COVERAGE_INVALID");
 need(base.family_candidate_rows===2750 &&
   base.no_family_rows===214 && base.held_rows===150,
   "BASELINE_DRIFT_NOT_REVIEWED");
 const candidate=auditManifests({root});
 // Academic-authoring PASS + Owner publication approval permit one visible
 // Practice MCQ, never historical source-policy/Skill/Mastery credit.
 const add=json(BANK+"07-phan-thuc-dai-so-v1-05.json").questions;
 need(add.length===1 && add[0].id==="RAT07V1_121" &&
   add[0].authoring_review?.status==="PASS" &&
   add[0].authoring_review?.packet_id===
     "MATH-CT05-07-W3-D1D6-P1-MINIMAL-DELTA-R0-20261020" &&
   readBytes("review-packets/math-content-cleanup/MATH-CT05-07-W3-P1-MCQ-R1-RESULT.md")
    .toString("utf8").includes("OVERALL|PASS_FOR_AUTHORING_REVIEW"),
   "CT07_P1_ONE_APPROVED_MCQ_NOT_VERIFIED");
 need(candidate.summary.historic_policy_rows===3114&&
   candidate.summary.shared_policy_ids===3114&&
   candidate.summary.candidate_questions===3174&&
   candidate.summary.new_unreviewed_ids===60&&
   candidate.summary.mcq_new_items===50&&
   candidate.summary.rich_new_items===10,
   "NEW_PRACTICE_CATALOG_DRIFT_NOT_REVIEWED");
 const index=json(INDEX),lock08=json(LOCK08),lock09=json(LOCK09);
 need(lock08.status==="NOTEBOOKLM_R1_APPROVED_NOTATION_ONLY_EXCEPTION" &&
   lock08.authorization==="CLEARED_FOR_CT08_P1_IMPLEMENTATION_ONLY",
   "CT08_ACADEMIC_NOTATION_LOCK_ABSENT");
 need(isDeepStrictEqual(lock08.allowed_question_ids,
   ["EQ08V1_047","EQ08V1_048","EQ08V1_049","EQ08V1_050"]),
   "CT08_EXTRA_ID_REQUESTED");
 need(isDeepStrictEqual([...lock08.allowed_changed_fields].sort(),
   ["explanation","question"]),"CT08_CHANGED_FIELDS_NOT_ALLOWED");
 need(lock09.schema==="ct09-p1c1-academic-payload-lock-r1" &&
   isDeepStrictEqual(lock09.allowed_additive_question_fields,["variant_group"]) &&
   lock09.question_count===120,"CT09_PAYLOAD_LOCK_ABSENT");
 need(readBytes(OWNER09).toString("utf8").includes("CT09_P1C2 = OWNER_QA_PASS_CLOSED"),
   "CT09_OWNER_PASS_MISSING");
 const policy08=json(CUR+"ct08-r1.json"),policy09=json(CUR+"ct09-r1.json");
 const allPolicies=new Map(index.topics.map(x=>[x.topic_id,json(x.policy_path)]));
 const changedFiles=[],detail=[];
 let unchanged=0,reviewedNotation=0,reviewedGrouping=0;
 for(const [topic,p] of allPolicies){
   for(const [filename,decl] of Object.entries(p.source_files)){
     const raw=readBytes(decl.path),sha=gitBlob(raw);
     if(sha===decl.blob_sha)continue;
     need(topic==="CT08"||topic==="CT09","UNKNOWN_CHANGED_TOPIC_"+topic);
     need(!!CURRENT[filename]&&CURRENT[filename]===sha,
       "CHANGED_SOURCE_NOT_PINNED_"+filename);
     need(decl.path===BANK+filename,"SOURCE_PATH_CHANGED_"+filename);
     const current=json(BANK+filename).questions;
     const lock=topic==="CT08"?lock08:lock09;
     const oldPack=topic==="CT08"?lock08.audited_questions:lock09.sources[filename]?.questions;
     const oldBlob=topic==="CT08"?lock08.audited_blob_sha:
       lock09.sources[filename]?.audited_blob_sha;
     need(Array.isArray(current)&&Array.isArray(oldPack)&&
          current.length===oldPack.length&&current.length===decl.question_count,
       "ITEM_COVERAGE_CHANGED_"+filename);
     need(oldBlob===decl.blob_sha,"HISTORICAL_SOURCE_MISMATCH_"+filename);
     const byId=new Map(oldPack.map(q=>[q.id,q]));
     need(byId.size===oldPack.length,"DUPLICATE_HISTORICAL_ID_"+filename);
     const rows=new Map(p.rows.filter(row=>row.source_file===filename)
       .map(row=>[row.question_id,row]));
     need(rows.size===decl.question_count,"POLICY_ROWS_NOT_COMPLETE_"+filename);
     let same=0,notation=0,grouping=0;
     for(const q of current){
       const prior=byId.get(q.id),row=rows.get(q.id);
       need(!!prior&&!!row,"QUESTION_ID_CONFLICT_"+q.id);
       need(row.source_blob===oldBlob&&
         row.policy_disposition==="FAMILY_LINK_REVIEWED"&&
         typeof row.family_id==="string"&&
         row.runtime_enabled===false&&row.independent_credit_authorized===false,
         "POLICY_NOT_REVIEWED_"+q.id);
       const diff=changes(prior,q);
       if(topic==="CT08"){
         if(!diff.length){same++;unchanged++;continue;}
         const replacement=lock08.reviewed_replacements?.[q.id];
         need(lock08.allowed_question_ids.includes(q.id)&&
           !!replacement&&isDeepStrictEqual(diff,["explanation","question"])&&
           isDeepStrictEqual(q,{...prior,...replacement}),
           "CT08_UNREVIEWED_ITEM_DELTA_"+q.id);
         notation++;reviewedNotation++;
       } else {
         need(isDeepStrictEqual(diff,["variant_group"]) &&
           typeof q.variant_group==="string"&&q.variant_group.startsWith("SYS09-"),
           "CT09_UNREVIEWED_ITEM_DELTA_"+q.id);
         grouping++;reviewedGrouping++;
       }
     }
     detail.push({topic_id:topic,source_file:filename,historical_sha:decl.blob_sha,
       inspected_current_sha:sha,item_count:current.length,
       unchanged:same,notation_only:notation,variant_metadata_only:grouping,
       learner_authorized:false});
     changedFiles.push(filename);
   }
 }
 need(changedFiles.length===5 &&
  isDeepStrictEqual(changedFiles.sort(),Object.keys(CURRENT).sort()),
  "CHANGED_FILES_SET_UNEXPECTED");
 need(unchanged===26&&reviewedNotation===4&&reviewedGrouping===120,
   "DELTA_TOTALS_UNEXPECTED");
 need(reviewedNotation+reviewedGrouping+unchanged===base.held_rows,
   "RECONCILIATION_COVERAGE_UNEXPECTED");
 need(policy08.runtime_enabled===false&&policy09.runtime_enabled===false,
   "TAXONOMY_PROTECTION_CHANGED");
 return Object.freeze({
   schema:"math-r25-approved-source-delta-shadow-qa-v1",
   status:"REVIEWED_EXCEPTION_READ_ONLY_NO_CUTOVER",
   original_r22:{source_locked_family:2750,formative_no_family:214,
     source_hold:150},
   source_verified_reviewed_exception:{unchanged,reviewed_notation:reviewedNotation,
     reviewed_additive_group_metadata:reviewedGrouping,total:150},
   shadow_family_candidate_count:2750+150,
   formative_no_family:214,
   hold_for_policy_pin_regeneration:150,
   new_catalog_items_excluded:60,
   source_files:detail,
   guards:{learner_data_read:false,learner_data_written:false,
     revised_taxonomy_policy_written:false,new_source_pins_authorized:false,
     skill_mastery_credited:false,readiness_credited:false,
     historical_backfill_allowed:false,production_cutover_allowed:false}
 });
}
module.exports={reconcile};
if(require.main===module){
 const r=reconcile();
 console.log("PASS R25 reviewed exception shadow QA (no learner authorization)");
 console.log(JSON.stringify(r,null,2));
}
