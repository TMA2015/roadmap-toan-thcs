"use strict";
/*
 * THPT Canonical Placement Contract v0.1 — METADATA-ONLY pilot.
 *
 * This does NOT copy question statements, answer keys, hints, student attempts,
 * or production mastery scores. Content remains at its original reviewed source.
 * Do not load assessment keys into the browser before Final Submit.
 */
const MODES=Object.freeze([
  "SGK_CORE","SGK_PRACTICE","SGK_CHAPTER_APPLICATION",
  "SGK_CHAPTER_READINESS","TOPIC_PRACTICE","TOPIC_READINESS",
  "SGK_WRITTEN","TOPIC_WRITTEN"
]);
const READINESS=new Set(["SGK_CHAPTER_READINESS","TOPIC_READINESS"]);
const ITEMS=Object.freeze([
  {item_id:"THPT-CORE-QF01",content_version:"B16-R4-POSTFIX",
   content_ref:"docs/thpt-preview/sgk/core/ham-so-bac-hai.md",
   kind:"INTERACTIVE",status:"REVIEWED_SNAPSHOT",is_anchor:false},
  {item_id:"PRACTICE-THPT-DEMO-01",content_version:"B16-R4-POSTFIX",
   content_ref:"docs/thpt-preview/chuyen-de/ham-so/luyen-tap.md",
   kind:"INTERACTIVE",status:"REVIEWED_SNAPSHOT",is_anchor:false},
  {item_id:"READINESS-THPT-DEMO-01",content_version:"B16-R4-POSTFIX",
   content_ref:"docs/thpt-preview/chuyen-de/ham-so/tu-kiem-tra.md",
   kind:"ASSESSMENT_DEMO_BUNDLE",status:"TECHNICAL_DEMO_ONLY",is_anchor:false},
  {item_id:"HPT-WRI-DEMO-01",content_version:"B16-R4-POSTFIX",
   content_ref:"docs/thpt-preview/thu-vien/tu-luan.md",
   kind:"WRITTEN",status:"REVIEWED_SNAPSHOT",is_anchor:false},
  {item_id:"HPT-WRI-DEMO-ANCHOR-01",content_version:"B16-R4-POSTFIX",
   content_ref:"docs/thpt-preview/thu-vien/tu-luan.md",
   kind:"WRITTEN",status:"REVIEWED_SNAPSHOT",is_anchor:true}
]);
/*
 * A placement is a reference to an item, NEVER another item record.
 * status "PLANNED" means architecture mapping only, not a live renderer.
 */
const PLACEMENTS=Object.freeze([
  {placement_id:"B16-SGK-CORE",item_id:"THPT-CORE-QF01",
   mode:"SGK_CORE",scope_ref:"G10_CHVI_B16",status:"LIVE_PILOT"},
  {placement_id:"B16-TOPIC-BEGINNER",item_id:"THPT-CORE-QF01",
   mode:"TOPIC_PRACTICE",scope_ref:"HAM_SO_PARABOLA_G10_PILOT",level:"CO_BAN",
   status:"LINK_ONLY"},
  {placement_id:"B16-SGK-PRACTICE",item_id:"PRACTICE-THPT-DEMO-01",
   mode:"SGK_PRACTICE",scope_ref:"G10_CHVI_B16",status:"LIVE_PILOT"},
  {placement_id:"B16-TOPIC-PRACTICE",item_id:"PRACTICE-THPT-DEMO-01",
   mode:"TOPIC_PRACTICE",scope_ref:"HAM_SO_PARABOLA_G10_PILOT",
   level:"LUYEN_TAP",status:"LIVE_PILOT"},
  {placement_id:"B16-TOPIC-READINESS-DEMO",item_id:"READINESS-THPT-DEMO-01",
   mode:"TOPIC_READINESS",scope_ref:"HAM_SO_PARABOLA_G10_PILOT",
   assessment_scope:"TOPIC",status:"TECHNICAL_DEMO_ONLY",mastery_credit:false},
  {placement_id:"B16-SGK-WRITTEN",item_id:"HPT-WRI-DEMO-01",
   mode:"SGK_WRITTEN",scope_ref:"G10_CHVI_B16",status:"LIVE_PILOT"},
  {placement_id:"B16-TOPIC-WRITTEN",item_id:"HPT-WRI-DEMO-01",
   mode:"TOPIC_WRITTEN",scope_ref:"HAM_SO_PARABOLA_G10_PILOT",status:"PLANNED"},
  {placement_id:"B16-SGK-ANCHOR",item_id:"HPT-WRI-DEMO-ANCHOR-01",
   mode:"SGK_WRITTEN",scope_ref:"G10_CHVI_B16",status:"LIVE_PILOT"},
  {placement_id:"B16-TOPIC-ANCHOR",item_id:"HPT-WRI-DEMO-ANCHOR-01",
   mode:"TOPIC_WRITTEN",scope_ref:"HAM_SO_PARABOLA_G10_PILOT",status:"PLANNED"}
]);
function validateCatalog(items=ITEMS,placements=PLACEMENTS){
 const errors=[],ids=new Set(),placementIDs=new Set(),itemMap=new Map();
 for(const item of items){
  if(!item.item_id||ids.has(item.item_id))errors.push("DUPLICATE_OR_EMPTY_ITEM_ID:"+item.item_id);
  ids.add(item.item_id);itemMap.set(item.item_id,item);
  if(!item.content_ref||!item.content_version)errors.push("MISSING_CANONICAL_SOURCE:"+item.item_id);
  if(item.is_anchor&&item.kind!=="WRITTEN")errors.push("ANCHOR_NOT_WRITTEN:"+item.item_id);
  if("answer_key" in item||"attempts" in item||"mastery" in item)
   errors.push("METADATA_CONTAINS_PROTECTED_DATA:"+item.item_id);
 }
 for(const place of placements){
  if(!place.placement_id||placementIDs.has(place.placement_id))
   errors.push("DUPLICATE_OR_EMPTY_PLACEMENT_ID:"+place.placement_id);
  placementIDs.add(place.placement_id);
  if(!itemMap.has(place.item_id))errors.push("UNKNOWN_ITEM:"+place.placement_id);
  if(!MODES.includes(place.mode))errors.push("UNKNOWN_MODE:"+place.placement_id);
  if(!place.scope_ref)errors.push("MISSING_SCOPE:"+place.placement_id);
  const item=itemMap.get(place.item_id);
  if(item&&item.kind==="WRITTEN"&&!place.mode.endsWith("_WRITTEN"))
   errors.push("WRITTEN_WRONG_MODE:"+place.placement_id);
  if(item&&item.kind==="ASSESSMENT_DEMO_BUNDLE"&&
    (!READINESS.has(place.mode)||place.mastery_credit!==false))
   errors.push("DEMO_READINESS_MUST_BE_NO_CREDIT:"+place.placement_id);
  if(READINESS.has(place.mode)&&place.status==="LIVE_PRODUCTION"&&
     (!place.assessment_scope||!place.outcome_ids?.length))
   errors.push("PRODUCTION_READINESS_MISSING_COVERAGE:"+place.placement_id);
 }
 return {valid:errors.length===0,errors,unique_item_count:ids.size,
  placement_count:placementIDs.size};
}
function placementsFor(itemID,placements=PLACEMENTS){
 return placements.filter(place=>place.item_id===itemID);
}
/*
 * Safety preflight, not a production grading engine. An item may appear in both
 * assessment scopes if separately justified, but re-exposure cannot count as
 * fresh independent evidence. "history" here is a parameter, never persisted.
 */
function readinessPreflight({item,placement,history=[],requiredOutcomes=[]}){
 const reasons=[];
 if(!item||!placement||item.item_id!==placement.item_id)
  return {eligible:false,reasons:["MISSING_OR_MISMATCHED_ITEM_PLACEMENT"]};
 if(!READINESS.has(placement.mode))reasons.push("NOT_READINESS_ROLE");
 if(item.status!=="ACADEMICALLY_ELIGIBLE_FOR_ASSESSMENT")
  reasons.push("ITEM_NOT_CLEARED_FOR_ASSESSMENT");
 if(placement.status!=="APPROVED_ASSESSMENT_PLACEMENT")
  reasons.push("PLACEMENT_NOT_APPROVED");
 if(!placement.assessment_scope||!placement.assessment_id)
  reasons.push("MISSING_ASSESSMENT_SCOPE");
 if(!requiredOutcomes.length||!requiredOutcomes.every(id=>placement.outcome_ids?.includes(id)))
  reasons.push("COVERAGE_NOT_DEMONSTRATED");
 if(history.some(entry=>entry.item_id===item.item_id&&
    (entry.presented||entry.attempted||entry.hint_seen||
     entry.solution_seen||entry.final_submitted)))
  reasons.push("EXACT_ITEM_PREVIOUSLY_EXPOSED");
 return {eligible:reasons.length===0,reasons};
}
module.exports={MODES,ITEMS,PLACEMENTS,validateCatalog,placementsFor,readinessPreflight};
