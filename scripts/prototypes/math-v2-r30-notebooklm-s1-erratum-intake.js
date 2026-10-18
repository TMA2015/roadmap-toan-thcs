/* Math Phase 4 R30 -- read-only human supplied NotebookLM S1 erratum receipt.
 * Maps 24 explicit citation REVISE claims to an R28 40-ID provisional draft.
 * RETAINS 16 untouched as NOT_REVIEWED in R28 structured intake; their 16
 * original PASS claims are preserved independently in R29, never discarded.
 * Never creates KNTT S1 citations itself, awards credit, or writes learner data.
 */
"use strict";
const fs=require("node:fs"),path=require("node:path");
const {gitBlob}=require("./math-v2-source-locked-skill-audit-r22.js");
const {audit:baselineR29}=require("./math-v2-r29-notebooklm-receipt-audit.js");
const {inspect}=require("./math-v2-r27-mcq-source-review.js");
const {template,evaluate}=require("./math-v2-r28-verdict-intake-gate.js");

const ERRATUM="review-packets/math-phase4-r27-mcq-40/TEMP_R30_NOTEBOOKLM_S1_ERRATUM_ORIGINAL_20261018.md";
const ERRATUM_BLOB_SHA="8fdae400b1a2ef33d9e3c296be8b30ab697e0093";
const EXPECTED_GROUPS=Object.freeze({
 "NUM02V1_121-132":12,"NUM02V1_145-147":3,
 "ALG04V2_133-138":6,"QUA12V1_121-123":3
});
function need(ok,message){if(!ok)throw Error("R30_"+message);}
function target(id){
 const match=/^(NUM02V1|ALG04V2|QUA12V1)_(\d{3})$/.exec(id);
 if(!match)return null;
 const n=Number(match[2]);
 if(match[1]==="NUM02V1"&&n>=121&&n<=132)return "NUM02V1_121-132";
 if(match[1]==="NUM02V1"&&n>=145&&n<=147)return "NUM02V1_145-147";
 if(match[1]==="ALG04V2"&&n>=133&&n<=138)return "ALG04V2_133-138";
 if(match[1]==="QUA12V1"&&n>=121&&n<=123)return "QUA12V1_121-123";
 return null;
}
function getReceipt({root=process.cwd(),readBytes=rel=>fs.readFileSync(path.join(root,rel))}={}){
 const raw=readBytes(ERRATUM);
 need(gitBlob(raw)===ERRATUM_BLOB_SHA,"RECEIPT_WAS_ALTERED");
 const text=raw.toString("utf8");
 need(text.includes("PACKET_ID|MATH-R27-NEW-MCQ-40-20261018")&&
  text.includes("REVIEW_TYPE|TARGETED_S1_CITATION_ERRATUM_REVIEW")&&
  text.includes("OVERALL_ERRATUM_VERDICT|REVISIONS_REQUIRED")&&
  /TOTAL_TARGETED_IDS:\s*24/.test(text)&&
  /CITATION_REVISIONS_DONE:\s*24/.test(text)&&
  /UNTOUCHED_OUT_OF_SCOPE_IDS:\s*16/.test(text)&&
  /QUESTION_TEXT_MODIFIED:\s*0/.test(text)&&
  /ANSWER_KEY_INDEX_MODIFIED:\s*0/.test(text)&&
  /ACADEMIC_PASS_AUTHORIZED:\s*FALSE/.test(text)&&
  /PRODUCTION_SKILL_COUNTER_AUTHORIZED:\s*FALSE/.test(text),
  "INCONSISTENT_PACKET_SUMMARY");
 const rowLines=text.split(/\r?\n/).filter(l=>/^\|\s*\d{1,2}\s*\|/.test(l));
 need(rowLines.length===24,"NOT_24_TABLE_ROWS");
 const rows=[],seen=new Set(),groupCounts=Object.create(null);
 for(const line of rowLines){
   // A markdown math expression can contain a literal | in |x|,
   // so parse fixed metadata columns from the RIGHT instead of assuming
   // exactly 7 pipe-separated fields.
   const parts=line.trim().replace(/^\||\|$/g,"").split("|").map(x=>x.trim());
   need(parts.length>=7,"MALFORMED_RECEIPT_ROW");
   const order=Number(parts[0]);
   const id=parts[1].replace(/\*/g,"").trim();
   const group=target(id);
   need(!!group&&!seen.has(id),"UNKNOWN_OR_DUPLICATE_ID_"+id);
   const oldEvidence=parts[parts.length-4];
   const revisedS1=parts[parts.length-3].replace(/\*\*/g,"").trim();
   const layer=parts[parts.length-2].replace(/\*\*/g,"").trim();
   const verdict=parts[parts.length-1].replace(/\*\*/g,"").trim();
   need(order===rows.length+1&&
    oldEvidence.length>10&&revisedS1.length>20&&
    /^SGK Toán [679] T[12] KNTT, Bài /.test(revisedS1)&&
    /^KNTT-Core Lớp [679]$/.test(layer)&&
    /^REVISE \(/.test(verdict),
    "INVALID_CITATION_REVIEW_ROW_"+id);
   const grade=Number(layer.at(-1));
   const expectedGrade=id.startsWith("QUA12V1")?9:
    group==="NUM02V1_121-132"?6:7;
   need(grade===expectedGrade,"GRADE_CONFLICT_"+id);
   seen.add(id);
   groupCounts[group]=(groupCounts[group]||0)+1;
   rows.push({question_id:id,row_number:order,
    original_S1_claim:oldEvidence,notebooklm_corrected_S1_claim:revisedS1,
    note:verdict,review_layer:"KNTT-Core",reported_grade:grade,
    claim_status:"REPORTED_CITATION_REVISION_NOT_INDEPENDENTLY_S1_VERIFIED",
    content_edits_authorized:false});
 }
 for(const [g,n] of Object.entries(EXPECTED_GROUPS))
  need(groupCounts[g]===n,"GROUP_COVERAGE_CHANGED_"+g);
 return {receipt_path:ERRATUM,receipt_git_blob_sha:ERRATUM_BLOB_SHA,
  rows,group_counts:groupCounts};
}
function intake(opts={}){
 const r27=inspect({root:opts.root});
 const r29=baselineR29({root:opts.root});
 const receipt=getReceipt(opts);
 need(r29.summary.matched_ids===40&&
  r29.summary.matched_answer_indexes===40&&
  r29.summary.claimed_pass===40&&
  r29.summary.source_citation_holds===24,"R29_BASELINE_CHANGED");
 const holds=new Set(r29.rows.filter(x=>x.cited_S1_issue!==null)
  .map(x=>x.question_id));
 const correctionIds=new Set(receipt.rows.map(x=>x.question_id));
 need(holds.size===24&&correctionIds.size===24&&
  [...holds].every(id=>correctionIds.has(id)),
  "RECEIPT_SCOPE_NOT_R29_HOLDS");
 const draft=template(r27);
 draft.reviewer="NOTEBOOKLM_R29_S1_TARGETED_ERRATUM_UNVERIFIED";
 draft.submitted_receipt=receipt.receipt_path;
 const indexed=new Map(draft.verdicts.map(v=>[v.question_id,v]));
 for(const row of receipt.rows){
  const entry=indexed.get(row.question_id);
  need(!!entry,"R28_UNKNOWN_ID_"+row.question_id);
  entry.verdict="REVISE"; // citation-only, NOT maths regrade
  entry.review_layer=row.review_layer;
  entry.grade=row.reported_grade;
  entry.S1_grade_and_lesson=row.notebooklm_corrected_S1_claim;
  // no book scan / literal S1 locator is present in the receipt;
  // DO NOT fabricate a source_references/S1 verification.
  entry.issue="NotebookLM R29 correction to previously inaccurate bibliographic S1 claim: "+
    row.original_S1_claim+"; page locator still needs independent S1 check.";
  entry.proposed_fix="Citation metadata only (no question edits): "+
    row.notebooklm_corrected_S1_claim;
 }
 const diagnostic=evaluate(draft,r27);
 need(diagnostic.covered===40&&diagnostic.counts.REVISE===24&&
  diagnostic.counts.NOT_REVIEWED===16&&diagnostic.counts.PASS===0&&
  diagnostic.academic_pass_authorized===false&&
  diagnostic.production_skill_counter_authorized===false,
  "R28_DIAGNOSTIC_NOT_FAIL_CLOSED");
 return {
  schema:"math-v2-r30-targeted-erratum-intake-v1",
  packet_id:r27.packet_id,receipt_path:receipt.receipt_path,
  receipt_git_blob_sha:receipt.receipt_git_blob_sha,
  original_notebooklm_pass_claims_preserved:40,
  receipt_revision_claims:24,out_of_scope_original_claims_preserved:16,
  correction_rows:receipt.rows,
  r28_provisional_intake:draft,r28_provisional_diagnostic:diagnostic,
  status:"RECEIPT_IMPORTED__R28_PENDING_S1_PROOF_AND_OWNER",
  limits:{academic_pass_granted:false,
   editorial_S1_locator_independently_verified:false,
   learner_score_changed:false,production_skill_counter_enabled:false,
   canonical_skill_mapping_changed:false,historical_mastery_backfilled:false}
 };
}
module.exports={intake,getReceipt,target,ERRATUM,ERRATUM_BLOB_SHA,EXPECTED_GROUPS};
if(require.main===module){
 const result=intake();
 if(process.argv.includes("--r28-json"))
  process.stdout.write(JSON.stringify(result.r28_provisional_intake,null,2)+"\n");
 else if(process.argv.includes("--corrections-json"))
  process.stdout.write(JSON.stringify(result.correction_rows,null,2)+"\n");
 else console.log(JSON.stringify({schema:result.schema,status:result.status,
  revision_claims:result.receipt_revision_claims,
  untouched_claims:result.out_of_scope_original_claims_preserved,
  group_counts:getReceipt().group_counts,
  diagnostic:result.r28_provisional_diagnostic,limits:result.limits},null,2));
}
