/* Phase 4 R27: exact 40 new-MCQ review inventory, QA only.
 * Repository source SHA verification. Source tags != reviewed Skill credits.
 * No learner storage, scoring, migration or published Practice integration.
 */
"use strict";
const fs=require("node:fs"),path=require("node:path"),crypto=require("node:crypto");
const {isDeepStrictEqual}=require("node:util");
const {auditNewItems}=require("./math-v2-new-item-evidence-register-r26.js");
const {gitBlob}=require("./math-v2-source-locked-skill-audit-r22.js");
const BANK="docs/assets/data/practice/";
const PINS=Object.freeze({
 "02-so-va-phep-tinh-v1-05.json":"74e9be4dedcc5c39376455a1c428f1f3ed2bceae",
 "02-so-va-phep-tinh-v1-06.json":"c39c177609cd5440de98b81461896c80f7166121",
 "02-so-va-phep-tinh-v1-07.json":"71b6fe79a5a5778dd9dcdefa00681e6f73f8b23e",
 "03-ti-le-ti-le-thuc-v1-05.json":"759fd83900fa5b64d5db7f6deb2197c343c46732",
 "04-bieu-thuc-dai-so-v2-06.json":"34e52b7900f77815e0bff79ba82fdb491d6794b3",
 "12-phuong-trinh-bac-hai-viete-v1-05.json":"22c73f3d24020a7db1ead9b8b90c6488c8379ce0"
});
/* R34 approved live wording delta. R27 remains an IMMUTABLE historical snapshot:
 * reconstruct the old bytes only when the NEW bank is exactly the approved
 * single-string edit and both Git blob SHAs match. Never rewrite R27's PINS.
 */
const R34_WORDING=Object.freeze({
 source_file:"12-phuong-trinh-bac-hai-viete-v1-05.json",
 question_id:"QUA12V1_121",
 old:"Số giao điểm của parabol y=x² và đường thẳng y=3x+4 bằng số nghiệm thực của phương trình nào?",
 approved:"Phương trình hoành độ giao điểm của parabol y=x² và đường thẳng y=3x+4 là phương trình nào?",
 live_blob_sha:"89b50fb32c6ebd04d57e41f6c2d5ae1f70384c08"
});
function historicalBytesForR27(filename,liveBytes){
 const sha=gitBlob(liveBytes);
 if(sha===PINS[filename])return {bytes:liveBytes,live_sha:sha,source_reconstructed:false};
 fail(filename===R34_WORDING.source_file&&sha===R34_WORDING.live_blob_sha,
  "CHANGED_BANK_"+filename);
 const text=liveBytes.toString("utf8");
 const approvedQuote=JSON.stringify(R34_WORDING.approved);
 fail(text.split(approvedQuote).length===2,"APPROVED_DELTA_OCCURRENCE_INVALID");
 const restored=Buffer.from(text.replace(approvedQuote,JSON.stringify(R34_WORDING.old)));
 fail(gitBlob(restored)===PINS[filename],
  "APPROVED_DELTA_DOES_NOT_RESTORE_R27_ORIGINAL");
 const live=JSON.parse(text),q=live.questions.find(x=>x.id===R34_WORDING.question_id);
 fail(q&&q.question===R34_WORDING.approved,"APPROVED_DELTA_ID_MISSING");
 return {bytes:restored,live_sha:sha,source_reconstructed:true};
}
const EXPECTED_GROUPS=Object.freeze({
 "CT02|lam-tron-so":12,"CT02|phep-tinh-so-huu-ti":6,
 "CT02|so-vo-ti":3,"CT02|can-bac-hai-so-hoc":3,
 "CT02|gia-tri-tuyet-doi":3,"CT03|mo-hinh-ti-le":4,
 "CT04|chia-da-thuc-mot-bien":6,"CT12|lien-he-do-thi":3
});
const fail=(ok,code)=>{if(!ok)throw Error("R27_"+code);};
const fingerprint=q=>crypto.createHash("sha256").update(JSON.stringify(q)).digest("hex");
function inspect({root=process.cwd(),readBytes=rel=>fs.readFileSync(path.join(root,rel)),
 auditR26=auditNewItems}={}){
 const r26=auditR26({root});
 fail(r26.total===60&&r26.mcq_without_item_specific_receipt_link===40,"BASELINE_CHANGED");
 const pending=r26.items.filter(q=>q.prior_review_status===
  "NO_ITEM_SPECIFIC_REVIEW_RECEIPT_LINKED_BY_R26");
 fail(pending.length===40,"NEED_40_ROWS");
 const sources=new Map(),groups=Object.create(null),rows=[],seen=new Set();
 for(const i of pending){
  fail(i.kind==="MCQ"&&i.receipt===null,"WRONG_EVIDENCE_LANE_"+i.question_id);
  fail(Object.hasOwn(PINS,i.source_file),"UNPINNED_BANK_"+i.source_file);
  if(!sources.has(i.source_file)){
   const currentRaw=readBytes(BANK+i.source_file);
   const historical=historicalBytesForR27(i.source_file,currentRaw);
   const sha=gitBlob(historical.bytes);
   fail(sha===PINS[i.source_file],"CHANGED_BANK_"+i.source_file);
   const questions=JSON.parse(historical.bytes.toString("utf8")).questions;
   fail(Array.isArray(questions),"INVALID_BANK_"+i.source_file);
   const byId=new Map(questions.map(q=>[q.id,q]));
   fail(byId.size===questions.length,"DUPLICATE_SOURCE_IDS_"+i.source_file);
   sources.set(i.source_file,{sha,byId,live_sha:historical.live_sha,source_reconstructed:historical.source_reconstructed});
  }
  const bank=sources.get(i.source_file),q=bank.byId.get(i.question_id);
  // R26 sees the *current* live manifest bytes; R27 sees the original review
  // snapshot. Both are separately pinned, and they must never be conflated.
  fail(bank.live_sha===i.source_git_blob_sha,"R26_SHA_DISAGREES_"+i.question_id);
  fail(q&&!seen.has(q.id),"ITEM_MISSING_OR_DUPLICATED_"+i.question_id);
  seen.add(q.id);
  fail(typeof q.question==="string"&&!!q.question.trim()&&
   Array.isArray(q.options)&&q.options.length===4&&
   new Set(q.options).size===4&&
   q.options.every(x=>typeof x==="string"&&!!x.trim())&&
   Number.isInteger(q.answer)&&q.answer>=0&&q.answer<4&&
   typeof q.explanation==="string"&&!!q.explanation.trim()&&
   Array.isArray(q.tags?.skill)&&q.tags.skill.length===1,
   "BAD_MCQ_OR_LEGACY_TAG_"+q.id);
  const key=i.topic_id+"|"+q.tags.skill[0];
  fail(Object.hasOwn(EXPECTED_GROUPS,key),"UNKNOWN_SOURCE_SKILL_TAG_"+q.id);
  groups[key]=(groups[key]||0)+1;
  rows.push({
   topic_id:i.topic_id,id:q.id,source_file:i.source_file,
   source_git_blob_sha:bank.sha,record_sha256:fingerprint(q),
   source_legacy_skill_tag_not_reviewed:q.tags.skill[0],
   reviewed_family_id:null,academic_verdict:"NOT_LINKED_BY_R26",
   live_route_verified:false,stable_option_identity_verified:false,
   independent_credit_authorized:false,
   review_requested:["correctness","domain","one_correct_option","distractors",
    "S1_grade_placement","problem_structure","reviewed_family_role",
    "immutable_option_identity"],
   question:JSON.parse(JSON.stringify(q))
  });
 }
 fail(rows.length===40&&seen.size===40&&sources.size===6,"MISSING_COVERAGE");
 fail(isDeepStrictEqual(Object.fromEntries(Object.entries(groups).sort()),
  EXPECTED_GROUPS),"CHANGED_TAG_COUNTS");
 rows.sort((a,b)=>a.topic_id.localeCompare(b.topic_id)||a.id.localeCompare(b.id));
 return Object.freeze({
  schema:"math-r27-exact-40-mcq-review-candidate-v1",
  packet_id:"MATH-R27-NEW-MCQ-40-20261018",
  status:"PREPARED_FOR_INDEPENDENT_REVIEW_NOT_APPROVED",
  total:40,topics:4,source_files:6,source_pins:PINS,source_tag_groups:groups,
  rows,
  protections:{learner_data_read:false,learner_data_write:false,
   historical_backfill:false,production_skill_counter_allowed:false,
   academic_clearance_issued:false,S1_placement_verified:false,
   mastery_credited:false,readiness_credited:false}
 });
}
function renderPacket(result){
 const BT=String.fromCharCode(96);
 const tick=x=>BT+x+BT;
 const lines=[
  "# R27 — 40 câu trắc nghiệm: nguồn kiểm duyệt học thuật độc lập",
  "",
  "**Packet ID:** "+tick(result.packet_id),
  "**Trạng thái:** "+tick(result.status),
  "**Phạm vi:** 40 câu ngoài 3.114 ID chính sách Skill lịch sử.",
  "",
  "## Hướng dẫn cho NotebookLM",
  "",
  "- Chỉ định S1 SGK/SBT KNTT và chương trình chính thức để xác minh Core, lớp, bài; không suy ra S1 chỉ từ nhãn nguồn.",
  "- Đánh giá từng mã: đúng toán, điều kiện/miền xác định, một đáp án đúng duy nhất, đáp án nhiễu, lời giải, loại kỹ năng và cấu trúc trùng lặp.",
  "- Phân biệt KNTT-Core, Core-Support, Entrance10, Specialized-Challenge và THPT-Bridge.",
  "- Nếu thiếu nguồn S1 hoặc chưa có bằng chứng quyết định, kết luận INSUFFICIENT_EVIDENCE. Không tự cấp PASS.",
  "- Mỗi câu phải nhận PASS, REVISE hoặc INSUFFICIENT_EVIDENCE; trả đầy đủ 40/40 ID với lý do và đề xuất sửa cụ thể.",
  "- Đừng coi nhãn tags.skill là Family/Skill đã duyệt; không bật bộ đếm, Readiness, Mastery, hồi tố hay đổi ID.",
  "",
  "## Danh mục file nguồn (Git blob SHA)",
  "",
  ...Object.entries(result.source_pins).map(([f,h])=>"- "+tick(f)+": "+tick(h)),
  "",
  "## Nội dung nguyên văn từ ngân hàng hiện tại",
  ""
 ];
 for(const q of result.rows)lines.push(
  "### "+q.id+" — "+q.topic_id,
  "",
  "**File:** "+tick(q.source_file)+"  ",
  "**Source SHA:** "+tick(q.source_git_blob_sha)+"  ",
  "**Nhãn nguồn chưa duyệt:** "+tick(q.source_legacy_skill_tag_not_reviewed),
  "",
  BT.repeat(3)+"json",
  JSON.stringify(q.question,null,2),
  BT.repeat(3),
  ""
 );
 return lines.join("\n")+"\n";
}
module.exports={inspect,renderPacket,PINS,EXPECTED_GROUPS,R34_WORDING,historicalBytesForR27};
if(require.main===module){
 const inventory=inspect();
 if(process.argv.includes("--packet"))process.stdout.write(renderPacket(inventory));
 else process.stdout.write(JSON.stringify({total:inventory.total,
  groups:inventory.source_tag_groups,source_pins:inventory.source_pins,
  protections:inventory.protections},null,2)+"\n");
}
