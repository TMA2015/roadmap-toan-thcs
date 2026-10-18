/* Math R33 — source-locked, read-only priority S1 evidence repair matrix.
 * Secondary website crosschecks are not original-SGK S1 academic verification.
 * IMPORTANT: never writes questions, score evidence, or learner data.
 */
"use strict";
const fs=require("node:fs"),path=require("node:path");
const {gitBlob}=require("./math-v2-source-locked-skill-audit-r22.js");
const {inspect}=require("./math-v2-r27-mcq-source-review.js");
const {audit:baselineR31}=require("./math-v2-r31-s1-page-boundary-audit.js");
const RECEIPT="review-packets/math-phase4-r27-mcq-40/TEMP_R33_SECONDARY_EVIDENCE_FLAGS_20261018.json";
const PIN="2dbf86359c541c71a4b37e4f9be30c15391ff8b1";
const PRIMARY_RECEIPT="review-packets/math-phase4-r27-mcq-40/TEMP_R33_NXBGD_ORIGINAL_PAGE_OBSERVATIONS_20261018.json";
const PRIMARY_PIN="1acde19b575a177e33fc00c3b66854b730f329d7";
const G9_CONCEPT_RECEIPT="review-packets/math-phase4-r27-mcq-40/TEMP_R33_G9_P5_PUBLISHER_CONCEPT_ONLY_OBSERVATION_20261018.json";
const G9_CONCEPT_PIN="bcc33ddd7b51caeadcfa59ae8bf3f9baa8033b41";
const TARGETS=Object.freeze([
 ...Array.from({length:12},(_,i)=>"NUM02V1_"+(121+i)),
 ...Array.from({length:3},(_,i)=>"NUM02V1_"+(145+i)),
 ...Array.from({length:6},(_,i)=>"ALG04V2_"+(133+i)),
 ...Array.from({length:3},(_,i)=>"QUA12V1_"+(121+i))
]);
const FLAGGED=Object.freeze([
 "NUM02V1_127","NUM02V1_128","NUM02V1_129","NUM02V1_130","NUM02V1_132",
 "NUM02V1_145","NUM02V1_146","NUM02V1_147",
 "ALG04V2_133","ALG04V2_134","ALG04V2_135","ALG04V2_136","ALG04V2_137",
 "QUA12V1_121","QUA12V1_122","QUA12V1_123"
]);
const requireOk=(ok,what)=>{if(!ok)throw Error("R33_"+what);};
function audit({root=process.cwd(),readBytes=rel=>fs.readFileSync(path.join(root,rel)),
 override=null,overridePrimary=null,overrideG9Concept=null}={}){
 const source=inspect({root});
 const prev=baselineR31({root});
 const raw=readBytes(RECEIPT);
 requireOk(gitBlob(raw)===PIN,"SECONDARY_FLAG_RECEIPT_CHANGED");
 const r=override||JSON.parse(raw.toString("utf8"));
 requireOk(r.schema==="math-r33-secondary-evidence-repair-observations-v1"&&
  r.packet_id===source.packet_id&&r.evidence_authority==="SECONDARY_PUBLIC_REFERENCE_ONLY"&&
  r.review_status==="S1_PRIMARY_UNVERIFIED","BAD_RECEIPT_HEADER");
 requireOk(r.external_references_not_S1_signoff===true&&
  r.owner_academic_approval===false&&r.production_counter_authorized===false&&
  r.original_R27_items_modified===false&&r.reviewer_R32_claims_automatically_accepted===false,
  "UNSAFE_AUTHORIZATION_OR_SOURCE_CHANGE");
 requireOk(Array.isArray(r.observations)&&r.observations.length===16,
  "NOT_16_PRIORITY_OBSERVATIONS");
 const unique=new Set(r.observations.map(x=>x.question_id));
 requireOk(unique.size===16&&FLAGGED.every(id=>unique.has(id)),
  "PRIORITY_SET_CHANGED_OR_DUPLICATE");
 const r31ids=new Set(prev.rows.map(x=>x.question_id));
 const bank=new Map(source.rows.map(x=>[x.id,x]));
 requireOk(TARGETS.length===24&&r31ids.size===24&&
  TARGETS.every(id=>r31ids.has(id)&&bank.has(id)),"R27_R31_TARGETS_DIVERGED");
 const flagMap=new Map();
 for(const x of r.observations){
  requireOk(typeof x.concern==="string"&&x.concern.length>=30&&
   typeof x.editorial_candidate_not_approved==="string"&&
   x.editorial_candidate_not_approved.length>=20&&
   Array.isArray(x.secondary_reference_urls)&&x.secondary_reference_urls.length>0&&
   x.secondary_reference_urls.every(u=>/^https:\/\/[a-z0-9.-]+\//.test(u))&&
   x.primary_S1_page_scan_verified===false&&
   x.academic_verdict==="INSUFFICIENT_EVIDENCE_FOR_R33_SIGNOFF",
   "INVALID_OBSERVATION_OR_FAKE_S1_"+x.question_id);
  flagMap.set(x.question_id,x);
 }
 // Verified provenance of individual publisher page observations, not blanket academic PASS.
 const primaryBytes=readBytes(PRIMARY_RECEIPT);
 requireOk(gitBlob(primaryBytes)===PRIMARY_PIN,"PRIMARY_PAGE_RECEIPT_CHANGED");
 const primary=overridePrimary||JSON.parse(primaryBytes.toString("utf8"));
 requireOk(primary.schema==="math-r33-nxbgd-original-page-observation-v1"&&
  primary.packet_id===source.packet_id&&
  primary.source_class==="S1_PUBLISHER_EBOOK_PAGE_OBSERVED"&&
  primary.primary_observed_page_count===5&&
  primary.items_with_first_party_page_basis===9&&
  primary.remaining_24_target_ids_without_first_party_page_basis===15&&
  primary.source_images_redistributed===false&&
  primary.academic_pass_authorized===false&&primary.layer_change_authorized===false&&
  primary.production_skill_counter_authorized===false&&
  primary.original_questions_changed===false,"INVALID_PRIMARY_OBSERVATION_METADATA");
 const pages=primary.printed_page_sources;
 const expectedPages={"T7T1_P36":36,"T7T2_P41":41,"T7T2_P42":42,"T7T2_P43":43,"T7T2_P45":45};
 requireOk(Object.keys(pages).length===5&&
  Object.entries(expectedPages).every(([k,n])=>{
   const p=pages[k];return p?.printed_page===n&&p.primary_page_viewed===true&&
    p.book_viewer.startsWith("https://taphuan.nxbgd.vn/tap-huan/doc-sach/")&&
    p.observed_page_image.startsWith("https://cdn3.olm.vn/upload/taphuan/")&&
    typeof p.observed_section==="string"&&p.observed_section.length>=15;
  }),"INVALID_PUBLISHER_PAGE_LOCATORS");
 const expectedObservedIds=[
  "NUM02V1_145","NUM02V1_146","NUM02V1_147",
  "ALG04V2_133","ALG04V2_134","ALG04V2_135",
  "ALG04V2_136","ALG04V2_137","ALG04V2_138"];
 requireOk(primary.rows.length===9&&
  new Set(primary.rows.map(x=>x.question_id)).size===9&&
  expectedObservedIds.every(id=>primary.rows.some(x=>x.question_id===id))&&
  primary.rows.every(x=>x.primary_page_observed===true&&
   x.exact_item_match_approved===false&&
   x.academic_verdict_approved===false&&
   x.curriculum_layer_approved===false&&
   typeof x.observed_comparison==="string"&&x.observed_comparison.length>=35&&
   typeof x.evidence_interpretation_candidate==="string"&&
   x.source_keys.length>0&&x.source_keys.every(k=>Object.hasOwn(pages,k))),
  "INVALID_PRIMARY_ITEM_OBSERVATION");
 const primaryMap=new Map(primary.rows.map(x=>[x.question_id,x]));
 const g9Raw=readBytes(G9_CONCEPT_RECEIPT);
 requireOk(gitBlob(g9Raw)===G9_CONCEPT_PIN,"G9_CONCEPT_RECEIPT_CHANGED");
 const g9=overrideG9Concept||JSON.parse(g9Raw.toString("utf8"));
 const g9Ids=["QUA12V1_121","QUA12V1_122","QUA12V1_123"];
 requireOk(g9.schema==="math-r33-grade9-primary-concept-partial-evidence-v1"&&
  g9.packet_id===source.packet_id&&
  g9.publisher_book_url==="https://taphuan.nxbgd.vn/tap-huan/doc-sach/sgk-toan-9-tap-hai.4714699696"&&
  g9.page_image_url==="https://cdn3.olm.vn/upload/taphuan/2026/0413/4714699696-page-6-1776054368832.png"&&
  g9.printed_page_number===5&&g9.lesson.startsWith("Bài 18")&&
  g9.page_viewed_through_publisher===true&&
  g9.page_source_comprehensive_for_lesson===false&&
  g9.claim_is_only_foundational_theory===true&&
  Array.isArray(g9.affected_ids)&&g9.affected_ids.length===3&&
  new Set(g9.affected_ids).size===3&&g9Ids.every(id=>g9.affected_ids.includes(id))&&
  g9.curriculum_layer_approved===null&&
  g9.per_item_final_S1_verdict==="INSUFFICIENT_EVIDENCE"&&
  g9.academic_pass_authorized===false&&
  g9.original_item_mutation_authorized===false&&
  g9.learner_credit_authorized===false&&
  g9.source_images_redistributed===false,
  "INVALID_G9_CONCEPT_OBSERVATION");
 const g9PartialSet=new Set(g9.affected_ids);
 const rows=TARGETS.map(id=>{
  const q=bank.get(id),flag=flagMap.get(id),observation=primaryMap.get(id);
  return {
   question_id:id,source_file:q.source_file,
   source_git_blob_sha:q.source_git_blob_sha,
   exact_record_sha256:q.record_sha256,
   audit_priority:flag?"P1_TARGETED_DISCREPANCY":"P2_PRIMARY_S1_PROOF_STILL_REQUIRED",
   secondary_observation:flag?.concern||null,
   editorial_candidate_not_approved:flag?.editorial_candidate_not_approved||null,
   reference_urls_secondary_only:flag?.secondary_reference_urls||[],
   first_party_publisher_page_observed:!!observation,
   publisher_G9_foundational_page_only_observed:g9PartialSet.has(id),
   observed_primary_page_keys:observation?.source_keys||[],
   S1_observed_question_comparison:observation?.observed_comparison||null,
   proposed_evidence_type_not_approved:observation?.evidence_interpretation_candidate||null,
   primary_S1_verified:false,final_citation_verdict:"INSUFFICIENT_EVIDENCE",
   approved_curriculum_layer:null,academic_pass_authorized:false,
   production_skill_counter_authorized:false,mastery_credit_authorized:false
  };
 });
 return Object.freeze({
  schema:"math-v2-r33-provisional-24-row-S1-evidence-matrix-v1",
  packet_id:source.packet_id,source_receipt_pin:PIN,
  input_rows:24,flagged_priority_ids:16,residual_primary_S1_ids:8,
  first_party_page_observed_item_count:9,
  first_party_pages_directly_viewed:5,
  items_still_without_first_party_page_basis:15,
  primary_page_observation_receipt_pin:PRIMARY_PIN,
  G9_foundational_page_only_item_count:g9PartialSet.size,
  no_publisher_page_observed_item_count:TARGETS.filter(id=>!primaryMap.has(id)&&!g9PartialSet.has(id)).length,
  G9_foundational_page_receipt_pin:G9_CONCEPT_PIN,
  academic_S1_accepted:0,reviewer_R32_pass_claims_not_imported:true,
  source_R27_originals_verified:source.total===40,
  rows,
  safeguards:{original_items_changed:false,option_keys_changed:false,
   taxonomy_modified:false,student_history_written:false,
   mastery_or_readiness_awarded:false,automatic_curriculum_relayer:false,
   original_S1_pages_examined_for_subset:true,
   all_original_S1_citations_validated:false,final_release_authorized:false}
 });
}
module.exports={audit,TARGETS,FLAGGED,RECEIPT,PIN,PRIMARY_RECEIPT,PRIMARY_PIN,G9_CONCEPT_RECEIPT,G9_CONCEPT_PIN};
if(require.main===module){
 const r=audit();
 console.log(JSON.stringify({schema:r.schema,status:"R33_24_ROWS_S1_AWAITED",
  targets:r.input_rows,priority:r.flagged_priority_ids,
  routine:r.residual_primary_S1_ids,first_party_observed:r.first_party_page_observed_item_count,g9_partial:r.G9_foundational_page_only_item_count,academic_S1_accepted:r.academic_S1_accepted,
  safeguards:r.safeguards},null,2));
}
