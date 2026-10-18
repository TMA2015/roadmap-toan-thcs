/* R29: preserve and reconcile exact NotebookLM 40-item PASS claims.
 * This is a source-identity/answer-index check and targeted S1-citation HOLD.
 * It cannot independently prove S1 page facts or activate learner Skill credits.
 */
"use strict";
const fs=require("node:fs"),path=require("node:path");
const {inspect}=require("./math-v2-r27-mcq-source-review.js");
const {gitBlob}=require("./math-v2-source-locked-skill-audit-r22.js");
const REPORT="review-packets/math-phase4-r27-mcq-40/TEMP_R29_NOTEBOOKLM_VERDICT_ORIGINAL_20261018.md";
const REPORT_SHA="915f5006ca8d0003c6931484bdf93d39a3aa6f2c";
const referenceGroups=[
 {code:"CT02_ROUNDING_S1_PAGE_CORRECTION",
  prefix:"NUM02V1_",start:121,end:132,expected:12,
  reported:"Toan 6 KNTT Tap 2, Bai 30, pages 31-34",
  verify:"Bai 30 Lam tron va uoc luong starts at page 35; confirm exact S1 page refs"},
 {code:"CT02_ABSOLUTE_VALUE_S1_LESSON_CORRECTION",
  prefix:"NUM02V1_",start:145,end:147,expected:3,
  reported:"Toan 7 KNTT Tap 1, Bai 4, Gia tri tuyet doi",
  verify:"Toan 7 KNTT Bai 7 Tap hop cac so thuc covers absolute value; Bai 4 covers order of operations"},
 {code:"CT04_POLYNOMIAL_S1_PAGE_CORRECTION",
  prefix:"ALG04V2_",start:133,end:138,expected:6,
  reported:"Toan 7 KNTT Tap 2, Bai 28, pages 43-47",
  verify:"Bai 28 begins at page 39, with division lessons approx pages 39-43; verify exact S1 anchors"},
 {code:"CT12_PARABOLA_S1_LESSON_CORRECTION",
  prefix:"QUA12V1_",start:121,end:123,expected:3,
  reported:"Toan 9 KNTT Tap 2, Bai 16 and 17",
  verify:"Toan 9 KNTT Tap 2, Bai 18 y=ax^2 and Bai 19 quadratic equations; Bai 16 and 17 concern circles"}
];
function claimedId(q){return q.prefix;}
function audit({root=process.cwd(),readBytes=rel=>fs.readFileSync(path.join(root,rel)),source=inspect}={}){
 const requireOk=(yes,k)=>{if(!yes)throw Error("R29_"+k);};
 const r27=source({root});
 requireOk(r27.total===40&&r27.rows.length===40,"R27_BASELINE_DRIFT");
 const raw=readBytes(REPORT);
 requireOk(gitBlob(raw)===REPORT_SHA,"REVIEW_RECEIPT_SOURCE_CHANGED");
 const report=raw.toString("utf8");
 requireOk(report.includes("PACKET_ID|"+r27.packet_id)&&
   report.includes("ACADEMIC_CONTENT_VERDICT|PASS")&&
   /- TOTAL_REVIEWED:\s*40/.test(report)&&
   /- PASS:\s*40/.test(report)&&
   /- REVISE:\s*0/.test(report)&&
   /- INSUFFICIENT_EVIDENCE:\s*0/.test(report),
   "NOTEBOOKLM_SUMMARY_NOT_EXACT");
 const regexp=/^\s*\d+\.\s+\*\*\x60([A-Z]{3}\d{2}V\d+_\d{3})\x60\*\*/gm;
 const claims=[...report.matchAll(regexp)];
 requireOk(claims.length===40,"EXACT_40_NOTEBOOKLM_CLAIMS_REQUIRED");
 const official=new Map(r27.rows.map(q=>[q.id,q]));
 const seen=new Set(),rows=[],counts={matched_ids:0,
  matched_answer_indexes:0,claimed_pass:0,
  source_citation_holds:0,unflagged_not_independently_cleared:0};
 const correctionByCode=Object.create(null);
 for(let i=0;i<claims.length;i++){
  const match=claims[i],id=match[1],next=claims[i+1]?.index??report.length;
  const block=report.slice(match.index,next);
  requireOk(official.has(id)&&!seen.has(id),"UNKNOWN_OR_DUPLICATE_ID_"+id);
  const expected=official.get(id);
  const idx=block.match(/Option index\s*(\d+)/i);
  const pass=/\*\*Kết luận\*\*:\s*\*\*\x60PASS\x60\*\*/.test(block);
  requireOk(!!idx&&pass&&block.includes("Dẫn chứng S1"),
   "CLAIM_DETAILS_MISSING_"+id);
  requireOk(Number(idx[1])===expected.question.answer,
   "ANSWER_INDEX_DISAGREEMENT_"+id);
  seen.add(id);
  counts.matched_ids++;counts.matched_answer_indexes++;counts.claimed_pass++;
  let hold=null;
  for(const group of referenceGroups){
   const n=Number(id.split("_")[1]);
   if(id.startsWith(group.prefix)&&n>=group.start&&n<=group.end){
    requireOk(hold===null,"OVERLAPPING_S1_HOLDS_"+id);
    hold=group.code;
   }
  }
  if(hold){
   counts.source_citation_holds++;
   correctionByCode[hold]=(correctionByCode[hold]||0)+1;
  }else counts.unflagged_not_independently_cleared++;
  rows.push({
   question_id:id,source_record_sha256:expected.record_sha256,
   source_git_blob_sha:expected.source_git_blob_sha,
   report_answer_index:Number(idx[1]),source_answer_index:expected.question.answer,
   academic_claim:"NOTEBOOKLM_PASS_CLAIM",
   evidence_status:hold?"S1_CITATION_CORRECTION_HOLD":"AWAITING_FINAL_S1_RECONCILIATION",
   cited_S1_issue:hold,
   canonical_family_credit_authorized:false
  });
 }
 requireOk(seen.size===40&&counts.source_citation_holds===24&&
   counts.unflagged_not_independently_cleared===16,"WRONG_HOLD_DISTRIBUTION");
 for(const group of referenceGroups)
  requireOk(correctionByCode[group.code]===group.expected,
   "S1_REFERENCE_GROUP_COUNT_CHANGED_"+group.code);
 return Object.freeze({
  schema:"math-r29-notebooklm-verbatim-claim-reconciliation-r1",
  packet_id:r27.packet_id,original_receipt_sha:REPORT_SHA,
  original_verdict:"PASS_CLAIMED_BY_NOTEBOOKLM",
  current_academic_disposition:"S1_CITATION_CORRECTION_HOLD",
  summary:counts,
  reference_holds:referenceGroups.map(({code,reported,verify})=>({
   code,count:correctionByCode[code],reported,verify})),
  rows,authorization:{
   signed_S1_approval_granted:false,
   canonical_mapping_update_allowed:false,
   mastery_credit_allowed:false,readiness_credit_allowed:false,
   student_data_read:false,student_data_write:false,
   historical_regrade_or_backfill_allowed:false,
   runtime_cutover_allowed:false
  }
 });
}
module.exports={audit,REPORT,REPORT_SHA,referenceGroups};
if(require.main===module){
 const result=audit();
 console.log("PASS R29: 40 reported PASS claims, 40 exact key indexes, 24 S1-citation holds; NO Skill authorization");
 console.log(JSON.stringify({receipt_sha:result.original_receipt_sha,
  summary:result.summary,holds:result.reference_holds,
  disposition:result.current_academic_disposition,
  authorization:result.authorization},null,2));
}
