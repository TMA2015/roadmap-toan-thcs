/* R38 — candidate item -> reviewed Skill Family compatibility, QA ONLY.
 * Academic item layer approval does NOT approve a Family role, assessment
 * blueprint or learner credit. Strictly source-locked; no writes.
 */
"use strict";
const fs=require("node:fs"),path=require("node:path");
const {inspect,R34_WORDING}=require("./math-v2-r27-mcq-source-review.js");
const {gitBlob}=require("./math-v2-source-locked-skill-audit-r22.js");
const FILE="review-packets/math-phase4-r38-family-compatibility/TEMP_R38_40MCQ_CANDIDATE_SKILL_FAMILY_REVIEW_20261018.json";
const PIN="5fb3e14814a349af6dc0be3ccdd57fc51cc7ebad";
const REGISTRY="docs/assets/data/curriculum/skill-taxonomy-v2-registry-r1.json";
const REGISTRY_PIN="90e58fa666a0cea4ae41ff7ef82a3cbf80ca11e4";
const R33A="review-packets/math-phase4-r27-mcq-40/TEMP_R33_OWNER_APPROVED_21_CORE_ITEM_ACADEMIC_SIGNOFF_20261018.json";
const R33B="review-packets/math-phase4-r27-mcq-40/TEMP_R33_OWNER_APPROVED_CT12_CONCEPT_BASE_ENTRANCE10_20261018.json";
const R35="review-packets/math-phase4-r35-remaining-16/TEMP_R35_OWNER_APPROVED_16_KNTT_CORE_ACADEMIC_SIGNOFF_20261018.json";
const PINS=[[R33A,"56135833a3d8764169719dded28be6b9c0b29eed"],
 [R33B,"35204f5baa654850c4b424dffb659bd89056b1be"],
 [R35,"100635e3f4ac6229fb39549368eedb9922304af5"]];
const BADGE={
 EXACT:"EXACT_LEGACY_CANDIDATE_ONLY",
 SUB:"SUBSKILL_ONLY_REVIEW",
 ROOT:"NO_ASSESSED_FAMILY_HOLD",
 RATIO:"LAYER_CONFLICT_ITEM_SPLIT_REVIEW"
};
const SOURCE_GROUPS={
 "CT02|lam-tron-so":["NUM-SETS",BADGE.SUB,12],
 "CT02|phep-tinh-so-huu-ti":["NUM-FRACTION-OPS",BADGE.SUB,6],
 "CT02|so-vo-ti":["NUM-SETS",BADGE.SUB,3],
 "CT02|can-bac-hai-so-hoc":[null,BADGE.ROOT,3],
 "CT02|gia-tri-tuyet-doi":["NUM-ABS",BADGE.EXACT,3],
 "CT03|mo-hinh-ti-le":["ITEM_SPLIT",BADGE.RATIO,4],
 "CT04|chia-da-thuc-mot-bien":["ALG-DIV-MONOMIAL",BADGE.SUB,6],
 "CT12|lien-he-do-thi":["QUAD-GRAPH",BADGE.EXACT,3]
};
const ratioFamily=id=>
 ["RAT03V1_121","RAT03V1_123"].includes(id)?"RATIO-DIRECT":
 ["RAT03V1_122","RAT03V1_124"].includes(id)?"RATIO-BASIC":null;
const fail=(condition,error)=>{if(!condition)throw Error("R38_"+error);};
function audit({root=process.cwd(),readBytes=rel=>fs.readFileSync(path.join(root,rel)),override=null}={}){
 const raw=readBytes(FILE);fail(gitBlob(raw)===PIN,"CANDIDATE_PACKET_SHA_CHANGED");
 const obj=override||JSON.parse(raw.toString("utf8"));
 fail(obj.schema==="math-r38-r27-40-source-to-reviewed-family-candidate-v1"&&
  obj.packet_id==="MATH-R38-R27-40-FAMILY-PREFLIGHT-20261018"&&
  obj.registry_git_blob_sha===REGISTRY_PIN&&
  obj.review_status==="ALL_CANDIDATE_ASSOCIATIONS_UNAPPROVED"&&
  obj.academic_approved_items===40&&
  obj.reviewed_family_mapping_approved_count===0&&
  obj.independent_skill_credit_approved_count===0&&
  obj.live_taxonomy_edited===false&&
  obj.learner_history_edited===false&&
  obj.production_skill_readiness_mastery_enabled===false,
  "AUTHORITY_SCOPE_CHANGED");
 const regBytes=readBytes(REGISTRY);
 fail(gitBlob(regBytes)===REGISTRY_PIN,"REVIEWED_REGISTRY_CHANGED");
 const registry=JSON.parse(regBytes);
 const index=JSON.parse(readBytes("docs/assets/data/curriculum/taxonomy-v2-runtime/index-r1.json"));
 fail(registry.runtime_enabled===false&&
  registry.learner_data_write_enabled===false&&
  registry.readiness_enabled===false&&
  registry.mastery_thresholds_enabled===false&&
  index.runtime_enabled===false&&index.independent_credit_authorized===false,
  "RUNTIME_PROTECTION_CHANGED");
 const receipts=PINS.map(([rel,sha])=>{const bytes=readBytes(rel);
  fail(gitBlob(bytes)===sha,"OWNER_APPROVAL_SHA_CHANGED");return JSON.parse(bytes);});
 const owner=new Map([
  ...receipts[0].approved_items.map(z=>[z.item_id,{layer:z.primary_layer_approved,evidence:z.evidence_type_approved}]),
  ...receipts[1].approved_items.map(z=>[z.id,{layer:z.approved_primary_layer,evidence:z.approved_evidence_type}]),
  ...receipts[2].approved_items.map(z=>[z.item_id,{layer:z.approved_primary_layer,evidence:z.approved_evidence_type}])
 ]);
 const r27=inspect({root,readBytes}),rows=obj.rows;
 fail(owner.size===40&&r27.rows.length===40&&rows?.length===40&&
  obj.approved_R33_signoff_receipt_git_blobs[0]===PINS[0][1]&&
  obj.approved_R33_signoff_receipt_git_blobs[1]===PINS[1][1]&&
  obj.approved_R35_signoff_receipt_git_blob===PINS[2][1],
  "APPROVED_ITEM_SOURCE_CHANGED");
 const cache=new Map(),seen=new Set(),groups=new Map(),tallies={};
 for(let i=0;i<40;i++){
  const old=r27.rows[i],now=rows[i],o=owner.get(old.id);
  fail(o&&now.item_id===old.id&&now.topic_id===old.topic_id&&
   now.legacy_skill_tag===old.source_legacy_skill_tag_not_reviewed&&
   now.approved_academic_layer===o.layer&&
   now.approved_evidence_type===o.evidence&&
   now.historical_bank_git_sha1===old.source_git_blob_sha&&
   now.approved_family_mapping===false&&now.production_credit_authorized===false&&
   !seen.has(now.item_id),"ITEM_OR_ACADEMIC_DRIFT_"+old.id);
  seen.add(old.id);
  const group=now.topic_id+"|"+now.legacy_skill_tag;
  const config=SOURCE_GROUPS[group];
  fail(!!config,"UNRECOGNIZED_LEGACY_GROUP_"+group);
  groups.set(group,(groups.get(group)||0)+1);
  const familyId=config[0]==="ITEM_SPLIT"?ratioFamily(now.item_id):config[0];
  fail(now.candidate_status===config[1]&&
   now.review_candidate_family_id===familyId,"CANDIDATE_FAMILY_CHANGED_"+old.id);
  const legacy=registry.legacy_mappings.filter(x=>
   x.topic_id===now.topic_id&&x.legacy_id===now.legacy_skill_tag&&x.role==="ASSESSED_SKILL");
  const family=familyId?registry.families.find(x=>x.family_id===familyId):null;
  if(config[1]===BADGE.ROOT){
   fail(family===null&&now.review_candidate_family_layer===null&&
    !registry.families.some(f=>f.topics.includes(now.topic_id)&&
     f.diagnostic_subskills?.includes(now.legacy_skill_tag)),
    "ROOT_SKILL_FAMILY_GAP_CHANGED");
  }else{
   fail(family&&family.layer===o.layer&&family.topics.includes(now.topic_id)&&
    now.review_candidate_family_layer===family.layer,
    "PROPOSED_FAMILY_LAYER_CHANGED_"+old.id);
   if(config[1]===BADGE.SUB)fail(legacy.length===0&&
    family.diagnostic_subskills.includes(now.legacy_skill_tag),
    "SUBSKILL_PROPOSAL_NO_LONGER_SUBSKILL_ONLY_"+old.id);
   if(config[1]===BADGE.EXACT)fail(legacy.length===1&&
    legacy[0].family_id===familyId&&legacy[0].layer===o.layer,
    "EXACT_ASSESSED_FAMILY_CANDIDATE_CHANGED_"+old.id);
   if(config[1]===BADGE.RATIO)fail(legacy.length===1&&
    legacy[0].family_id==="RATIO-MODEL"&&legacy[0].layer==="Entrance10"&&
    o.layer==="KNTT-Core",
    "CT03_LAYER_CONFLICT_LOST_"+old.id);
  }
  if(!cache.has(old.source_file)){
   const buffer=readBytes("docs/assets/data/practice/"+old.source_file);
   cache.set(old.source_file,{sha:gitBlob(buffer),items:
    new Map(JSON.parse(buffer).questions.map(x=>[x.id,x]))});
  }
  const current=cache.get(old.source_file),q=current.items.get(old.id);
  const expectedSha=old.id.startsWith("QUA12")?
   R34_WORDING.live_blob_sha:old.source_git_blob_sha;
  fail(current.sha===expectedSha&&q&&
   now.current_bank_git_sha1===current.sha&&
   now.current_question===q.question&&
   JSON.stringify(now.options)===JSON.stringify(q.options)&&
   now.answer_index===q.answer&&now.explanation===q.explanation,
   "CURRENT_BANK_MISMATCH_"+old.id);
  if(old.id===R34_WORDING.question_id)
   fail(q.question===R34_WORDING.approved,"R34_QUESTION_REGRESSED");
  tallies[config[1]]=(tallies[config[1]]||0)+1;
 }
 for(const [group,rule] of Object.entries(SOURCE_GROUPS))
  fail(groups.get(group)===rule[2],"ITEM_GROUP_COUNT_CHANGED_"+group);
 for(const [category,count] of Object.entries({
  [BADGE.EXACT]:6,[BADGE.SUB]:27,[BADGE.ROOT]:3,[BADGE.RATIO]:4
 }))fail(tallies[category]===count&&obj.review_group_counts[category]===count,
  "REVIEW_QUEUE_PARTITION_CHANGED_"+category);
 return Object.freeze({schema:"math-r38-reviewed-family-compatibility-audit-v1",
  academically_approved_questions:40,
  exact_family_candidates_not_approved:6,
  diagnostic_subskill_only_needing_review:27,
  arithmetic_square_root_family_gap:3,
  CT03_legacy_Entrance10_to_Core_layer_conflicts:4,
  proposed_ratio_split:{
   RATIO_DIRECT:["RAT03V1_121","RAT03V1_123"],
   RATIO_BASIC:["RAT03V1_122","RAT03V1_124"]
  },option_id_runtime_ready:false,approved_assessed_family_mappings:0,
  learner_credit_authorized:false,history_migration_authorized:false,
  no_canonical_registry_or_bank_writes:true});
}
module.exports={audit,FILE,PIN,REGISTRY_PIN,SOURCE_GROUPS};
if(require.main===module)console.log(JSON.stringify(audit(),null,2));
