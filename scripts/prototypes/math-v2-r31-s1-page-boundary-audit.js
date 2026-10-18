/* Math Phase 4 R31 — cross-check 24 NotebookLM S1 page claims with
 * independently observed textbook lesson page boundaries.
 * Secondary references are NOT authoritative academic S1 signoff.
 * Read-only CLI; no taxonomy updates, source rewrites or learner scores.
 */
"use strict";
const {getReceipt}=require("./math-v2-r30-notebooklm-s1-erratum-intake.js");
const {inspect}=require("./math-v2-r27-mcq-source-review.js");

const BOUNDS=Object.freeze({
 "NUM02V1_121-132":{
  book:"Toán 6 KNTT tập 2",lessons:[30],start:35,end:37,
  independent_public_crosschecks:[
   "https://www.vietjack.com/toan-6-ket-noi/bai-30-lam-tron-va-uoc-luong.jsp",
   "https://vietjack.com/toan-6-ket-noi/bai-31-mot-so-bai-toan-ve-ti-so-va-ti-so-phan-tram.jsp"
  ],
  note:"Bài 30 35–37; Bài 31 begins p38"
 },
 "NUM02V1_145-147":{
  book:"Toán 7 KNTT tập 1",lessons:[7],start:35,end:36,
  independent_public_crosschecks:[
   "https://www.vietjack.com/toan-7-kn/bai-7-tap-hop-cac-so-thuc.jsp",
   "https://fqa.vn/giai-bai-tap-sgk/bai-tap/bai-7-tap-hop-cac-so-thuc-e8113/1.html"
  ],
  note:"Bài 7 pp33–36, giá trị tuyệt đối tập trung pp35–36"
 },
 "ALG04V2_133-138":{
  book:"Toán 7 KNTT tập 2",lessons:[28],start:39,end:43,
  independent_public_crosschecks:[
   "https://www.vietjack.com/toan-7-kn/bai-28-phep-chia-da-thuc-mot-bien.jsp",
   "https://vndoc.com/toan-7-bai-28-phep-chia-da-thuc-mot-bien-285847"
  ],
  note:"Bài 28 pp39–43; overlap at p43 with end exercises"
 },
 "QUA12V1_121-123":{
  book:"Toán 9 KNTT tập 2",lessons:[18,19],start:4,end:17,
  independent_public_crosschecks:[
   "https://www.sachgiaokhoa247.com/sach-giao-khoa/lop-9-12/ket-noi-tri-thuc-voi-cuoc-song-3/chuong-vi-ham-so-yax2-a0-phuong-trinh-bac-hai-mot-an-2187/bai-18-ham-so-yax2-a0-7421.html",
   "https://loigiai.com.vn/sgk-toan-9-ket-noi-tri-thuc"
  ],
  note:"Bài 18 approx pp4–9 and Bài 19 pp10–17; p18+ Luyện tập chung / later"
 }
});
const requireOk=(cond,message)=>{if(!cond)throw Error("R31_"+message);};
const pageRange=text=>{
 const m=/\(Trang\s+(\d{1,3})(?:\s*[–-]\s*(\d{1,3}))?\)/.exec(text);
 requireOk(!!m,"MISSING_PAGE_RANGE_"+text);
 const first=Number(m[1]),last=m[2]?Number(m[2]):first;
 requireOk(first>0&&last>=first&&last<=300,"INVALID_PAGE_RANGE");
 return {first,last};
};
function scope(id){
 const n=Number(id.split("_")[1]);
 if(id.startsWith("NUM02V1_")&&n>=121&&n<=132)return "NUM02V1_121-132";
 if(id.startsWith("NUM02V1_")&&n>=145&&n<=147)return "NUM02V1_145-147";
 if(id.startsWith("ALG04V2_")&&n>=133&&n<=138)return "ALG04V2_133-138";
 if(id.startsWith("QUA12V1_")&&n>=121&&n<=123)return "QUA12V1_121-123";
 return null;
}
function audit({root=process.cwd(),readBytes}={}){
 const {rows:incoming,receipt_git_blob_sha}=getReceipt({root,readBytes});
 const source=inspect({root});
 const existing=new Map(source.rows.map(q=>[q.id,q]));
 const results=[],summary={
  total:0,page_bounds_conflicts:0,
  plausible_broad_ranges_unverified:0,
  exact_educational_S1_page_signoffs:0,
  math_answer_revisions:0,
  student_score_writes:0
 };
 const perGroup=Object.create(null);
 for(const row of incoming){
  const group=scope(row.question_id),bounds=BOUNDS[group];
  requireOk(!!group&&!!bounds&&existing.has(row.question_id),
   "UNKNOWN_ID_OR_GROUP_"+row.question_id);
  const claim=row.notebooklm_corrected_S1_claim,range=pageRange(claim);
  const part=/Toán (\d) KNTT tập (\d)/.exec(bounds.book);
  requireOk(!!part,"INVALID_REFERENCE_BOOK_SCHEMA");
  const textbookName="Toán "+part[1]+" T"+part[2]+" KNTT";
  const lessonOk=bounds.lessons.length===2?
   claim.includes("Bài "+bounds.lessons.join(" & ")):
   bounds.lessons.every(n=>claim.includes("Bài "+n));
  requireOk(lessonOk&&claim.includes(textbookName),
   "REPORTED_S1_BOOK_OR_LESSONS_CHANGED_"+row.question_id);
  // Exact page of the particular new MCQ isn't supplied as SGK exercise;
  // judge only whether a CANDIDATE range falls inside the public
  // textbook lesson/chapter bounds; no individual S1 proof is inferred.
  const outside=range.first<bounds.start||range.last>bounds.end;
  const status=outside?
   "SECONDARY_CROSSCHECK_PAGE_SPAN_CONFLICT_HOLD":
   "SECONDARY_CROSSCHECK_PLAUSIBLE_SPAN_NEEDS_PRIMARY_S1";
  summary.total++;
  if(outside)summary.page_bounds_conflicts++;
  else summary.plausible_broad_ranges_unverified++;
  const groupRow=perGroup[group]||(perGroup[group]={total:0,conflicts:0,plausible:0});
  groupRow.total++;if(outside)groupRow.conflicts++;else groupRow.plausible++;
  results.push({
   question_id:row.question_id,
   source_git_blob_sha:existing.get(row.question_id).source_git_blob_sha,
   source_record_sha256:existing.get(row.question_id).record_sha256,
   reported_reference:claim,
   reported_pages:range,
   publicly_observed_lesson_bounds:{book:bounds.book,lesson_numbers:bounds.lessons,
    start_page:bounds.start,end_page:bounds.end},
   independent_public_crosschecks:bounds.independent_public_crosschecks,
   secondary_check_status:status,
   S1_original_textbook_confirmed:false,
   academic_pass_authorized:false,canonical_skill_credit_authorized:false
  });
 }
 requireOk(summary.total===24&&
  summary.page_bounds_conflicts===7&&
  summary.plausible_broad_ranges_unverified===17,
  "EXPECTED_7_CONFLICTS_AND_17_PLAUSIBLE_CHANGED");
 const expected=new Set(["NUM02V1_132","NUM02V1_145","NUM02V1_146",
  "NUM02V1_147","QUA12V1_121","QUA12V1_122","QUA12V1_123"]);
 const conflicting=results.filter(x=>x.secondary_check_status===
  "SECONDARY_CROSSCHECK_PAGE_SPAN_CONFLICT_HOLD");
 requireOk(conflicting.length===expected.size&&
  conflicting.every(x=>expected.has(x.question_id)),
  "CONFLICT_ID_SET_CHANGED");
 requireOk(summary.exact_educational_S1_page_signoffs===0,
  "UNSAFE_AUTOMATIC_ACADEMIC_SIGNOFF");
 return Object.freeze({
  schema:"math-r31-public-secondary-s1-page-interval-audit-v1",
  academic_status:"ACADEMIC_HOLD_AWAIT_PRIMARY_S1_SOURCE_VERIFICATION",
  receipt_sha:receipt_git_blob_sha,summary,
  per_group:perGroup,rows:results,
  protections:{
   original_notebooklm_report_preserved:true,
   subsequent_erratum_preserved:true,
   student_data_not_accessed:true,
   primary_S1_signoff_performed:false,
   student_skill_counter_enabled:false,
   history_regraded:false,
   taxonomy_source_pins_rewritten:false
  }
 });
}
module.exports={audit,BOUNDS,pageRange,scope};
if(require.main===module){
 const r=audit();
 console.log("PASS R31: 7 exact S1 page-interval conflicts; 17 plausible but unverified; zero academic or Skill authorization");
 console.log(JSON.stringify({summary:r.summary,per_group:r.per_group,
  conflict_ids:r.rows.filter(x=>x.secondary_check_status.includes("CONFLICT"))
   .map(x=>x.question_id),protections:r.protections},null,2));
}
