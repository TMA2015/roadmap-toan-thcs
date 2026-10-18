/* R34 — owner-approved minimal MCQ wording delta, source-locked QA only.
 * Live Practice bank updates one question string; historical R27–R33 review
 * source is reconstructed only from two exact pinned blobs. No learner writes.
 */
"use strict";
const fs=require("node:fs"),path=require("node:path"),crypto=require("node:crypto");
const {gitBlob}=require("./math-v2-source-locked-skill-audit-r22.js");
const {inspect:R27,PINS,R34_WORDING,historicalBytesForR27}=
 require("./math-v2-r27-mcq-source-review.js");
const FILE="docs/assets/data/practice/"+R34_WORDING.source_file;
const FINGERPRINT=q=>crypto.createHash("sha256").update(JSON.stringify(q)).digest("hex");
const assertOk=(yes,code)=>{if(!yes)throw Error("R34_"+code);};
function audit({root=process.cwd(),readBytes=rel=>fs.readFileSync(path.join(root,rel))}={}){
 const liveBytes=readBytes(FILE);
 const liveSha=gitBlob(liveBytes);
 assertOk(liveSha===R34_WORDING.live_blob_sha,"LIVE_BLOB_CHANGED");
 const historical=historicalBytesForR27(R34_WORDING.source_file,liveBytes);
 assertOk(historical.source_reconstructed&&
  historical.live_sha===R34_WORDING.live_blob_sha&&
  gitBlob(historical.bytes)===PINS[R34_WORDING.source_file],"ORIGINAL_HISTORY_NOT_RESTORED");
 const oldChunk=JSON.parse(historical.bytes.toString("utf8"));
 const newChunk=JSON.parse(liveBytes.toString("utf8"));
 assertOk(newChunk.questions.length===3&&oldChunk.questions.length===3,
  "BANK_CARDINALITY");
 const oldById=new Map(oldChunk.questions.map(x=>[x.id,x]));
 const currentById=new Map(newChunk.questions.map(x=>[x.id,x]));
 assertOk(oldById.size===3&&currentById.size===3&&
  [...oldById.keys()].every(id=>currentById.has(id)),"ITEM_IDS_CHANGED");
 const old=oldById.get(R34_WORDING.question_id),current=currentById.get(R34_WORDING.question_id);
 assertOk(old?.question===R34_WORDING.old&&current?.question===R34_WORDING.approved,
  "UNAPPROVED_QUESTION_TEXT");
 const expectedCurrent={...old,question:R34_WORDING.approved};
 assertOk(JSON.stringify(current)===JSON.stringify(expectedCurrent),
  "OTHER_FIELDS_CHANGED");
 assertOk(newChunk.questions.every(q=>q.id===R34_WORDING.question_id||
  JSON.stringify(q)===JSON.stringify(oldById.get(q.id))),"SIBLING_ITEM_CHANGED");
 const m=JSON.parse(liveBytes.toString("utf8"));
 m.questions=m.questions.map(x=>x.id===R34_WORDING.question_id?
  {...x,question:R34_WORDING.old}:x);
 assertOk(JSON.stringify(m)===JSON.stringify(oldChunk),
  "NON_ITEM_BANK_CONTENT_CHANGED");
 assertOk(current.answer===0&&old.answer===0&&
  current.options.length===4&&
  JSON.stringify(current.options)===JSON.stringify(old.options)&&
  current.options[0]==="x²−3x−4=0"&&current.options[3]==="x²+3x−4=0",
  "OPTION_ORDER_OR_KEY_CHANGED");
 const eqDisc=(a,b,c)=>b*b-4*a*c;
 assertOk(eqDisc(1,-3,-4)===25&&eqDisc(1,3,-4)===25,
  "ORIGINAL_AMBIGUITY_NOT_ESTABLISHED");
 assertOk(current.question.startsWith("Phương trình hoành độ giao điểm ")&&
  current.explanation===old.explanation,"ANSWER_RATIONALE_CHANGED");
 const baseline=R27({root,readBytes});
 assertOk(baseline.total===40&&baseline.rows.length===40&&
  baseline.rows.find(x=>x.id===R34_WORDING.question_id).record_sha256===FINGERPRINT(old)&&
  baseline.rows.find(x=>x.id===R34_WORDING.question_id).source_git_blob_sha===
    PINS[R34_WORDING.source_file],"R27_HISTORICAL_IDENTITY_CHANGED");
 assertOk(FINGERPRINT(current)!==FINGERPRINT(old),"RECORD_FINGERPRINT_NOT_ADVANCED");
 return Object.freeze({
  schema:"math-r34-owner-approved-wording-delta-v1",
  item_id:R34_WORDING.question_id,
  bank_file:FILE,
  old_git_blob_sha:PINS[R34_WORDING.source_file],
  approved_live_git_blob_sha:liveSha,
  old_record_sha256:FINGERPRINT(old),
  current_record_sha256:FINGERPRINT(current),
  old_question:old.question,approved_question:current.question,
  answer_index:current.answer,options:current.options,
  all_4_options_unchanged:true,other_2_questions_unchanged:true,
  all_40_historical_R27_ids_source_locked:true,
  prior_authoring_review_field_is_historical_not_new_academic_pass:true,
  content_wording_approved_by_owner:true,
  revised_item_academic_pass_after_change:false,
  CT12_primary_curriculum_layer_approved:false,
  student_history_changed:false,
  skills_readiness_mastery_or_credit_changed:false,
  production_deployment_authorized:false
 });
}
module.exports={audit,FILE,FINGERPRINT};
if(require.main===module){
 const r=audit();
 console.log(JSON.stringify({status:"R34_APPROVED_WORDING_QA_ONLY",
  item:r.item_id,old_blob:r.old_git_blob_sha,new_blob:r.approved_live_git_blob_sha,
  old_record_sha256:r.old_record_sha256,
  current_record_sha256:r.current_record_sha256,
  answer_index:r.answer_index,options_unchanged:r.all_4_options_unchanged,
  history_preserved:r.all_40_historical_R27_ids_source_locked,
  academic_pass:r.revised_item_academic_pass_after_change},null,2));
}
