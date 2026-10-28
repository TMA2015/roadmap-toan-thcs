"use strict";
/* SGK Chapter VI PUBLIC CONTENT PLACEMENT INDEX — metadata only.
 * 54 academic IDs: only 36 are publishable formative/Written. 18 held-out
 * assessment bodies/keys are intentionally excluded.
 * Topic placement is a candidate, NOT a cross-grade Topic Academic PASS.
 */
const reviewed=require("../../../docs/assets/javascripts/thpt-chvi-reviewed-formative-v1.js");
const VERSION="THPT-G10-CHVI-REVIEWED-20261028";
const FORMATIVE_REF="docs/assets/javascripts/thpt-chvi-reviewed-formative-v1.js";
const APP_REF="docs/thpt-preview/sgk/chuong-vi/bai-tap-cuoi-chuong.md";
const WRITTEN_REF="docs/thpt-preview/thu-vien/tu-luan.md";
const b16=[
 {item_id:"THPT-CORE-QF01",role:"SGK_CORE",
  source:"docs/thpt-preview/sgk/core/ham-so-bac-hai.md",lesson:"16"},
 {item_id:"PRACTICE-THPT-DEMO-01",role:"SGK_PRACTICE",
  source:"docs/thpt-preview/chuyen-de/ham-so/luyen-tap.md",lesson:"16"}
];
const practice=reviewed.items.map(item=>({
 item_id:item.item_id,lesson:item.lesson,
 role:item.role==="CORE"?"SGK_CORE":item.role==="APPLICATION"?"SGK_CHAPTER_APPLICATION":"SGK_PRACTICE",
 source:FORMATIVE_REF
}));
const cumulative=["A1","A2","A3","A4","B1","B2","B3","B4"].map(code=>({
 item_id:"THPT-G10-CHVI-APP-"+code,
 lesson:({A1:"15",A2:"16",A3:"17",A4:"17",B1:"18",B2:"18",B3:"16",B4:"17"})[code],
 role:"SGK_CHAPTER_APPLICATION",source:APP_REF
}));
const writtenIDs=[
 "HPT-WRI-DEMO-01","HPT-WRI-DEMO-ANCHOR-01",
 "HPT-G10-CHVI-WRI-15-01","HPT-G10-CHVI-WRI-15-02",
 "HPT-G10-CHVI-WRI-17-01","HPT-G10-CHVI-WRI-17-02",
 "HPT-G10-CHVI-WRI-18-01","HPT-G10-CHVI-WRI-18-02"
];
const anchorIDs=new Set([
 "HPT-WRI-DEMO-ANCHOR-01",
 "HPT-G10-CHVI-WRI-15-02","HPT-G10-CHVI-WRI-17-02",
 "HPT-G10-CHVI-WRI-18-02"
]);
const written=writtenIDs.map(id=>({
 item_id:id,lesson:id.includes("WRI-15-")?"15":id.includes("WRI-17-")?"17":
 id.includes("WRI-18-")?"18":"16",
 role:"SGK_WRITTEN",is_anchor:anchorIDs.has(id),source:WRITTEN_REF
}));
const canonical=Object.freeze([...practice,...b16,...cumulative,...written]
 .map(row=>Object.freeze({...row,content_version:VERSION,academic_scope:"SGK_CHVI",
  status:"REVIEWED_PUBLIC_PREVIEW_ONLY",mastery_credit:false})));
const placements=Object.freeze(canonical.flatMap(row=>{
 const r=[{placement_id:"SGK_CHVI:"+row.item_id,item_id:row.item_id,
    role:row.role,status:"PREVIEW_FORMATIVE_ONLY"}];
 // Potential reuse is a role, never a new item/answer/history record.
 if(row.role==="SGK_CORE"||row.role==="SGK_PRACTICE"||row.role==="SGK_CHAPTER_APPLICATION")
   r.push({placement_id:"TOPIC_PENDING:"+row.item_id,item_id:row.item_id,
     role:"TOPIC_PRACTICE",status:"PENDING_TOPIC_OUTCOME_REVIEW"});
 if(row.item_id==="THPT-G10-CHVI-APP-B3")
   r.push({placement_id:"SGK_WRITTEN_PENDING:"+row.item_id,item_id:row.item_id,
     role:"SGK_WRITTEN",status:"PENDING_WRITTEN_PLACEMENT_QA"});
 return r.map(x=>Object.freeze(x));
}));
function validate(){
 const errors=[],idSet=new Set(),placementSet=new Set();
 for(const item of canonical){
  if(idSet.has(item.item_id))errors.push("DUPLICATE_ITEM:"+item.item_id);
  idSet.add(item.item_id);
  if(!item.source)errors.push("MISSING_SOURCE:"+item.item_id);
  if(item.is_anchor&&item.role!=="SGK_WRITTEN")errors.push("ANCHOR_MUST_BE_WRITTEN");
  if(item.role.includes("READINESS"))errors.push("HELDOUT_EXPOSURE:"+item.item_id);
 }
 for(const p of placements){
  if(placementSet.has(p.placement_id))errors.push("DUPLICATE_PLACEMENT:"+p.placement_id);
  placementSet.add(p.placement_id);
  if(!idSet.has(p.item_id))errors.push("UNKNOWN_CANONICAL_ITEM:"+p.item_id);
 }
 return {valid:errors.length===0,errors,unique_ids:idSet.size,placements:placementSet.size};
}
module.exports=Object.freeze({
 VERSION,canonical,placements,validate,
 forItem:id=>canonical.find(item=>item.item_id===id),
 placementsFor:id=>placements.filter(x=>x.item_id===id)
});
