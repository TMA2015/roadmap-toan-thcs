"use strict";
const assert=require("node:assert/strict");
const fs=require("node:fs");
const path=require("node:path");
const {
 ITEMS,PLACEMENTS,validateCatalog,placementsFor,readinessPreflight
}=require("../prototypes/thpt/shared-items/placement-contract-v0.1.cjs");

function run(){
 const qa=validateCatalog();
 assert.equal(qa.valid,true,"Placement contract invalid: "+qa.errors.join("; "));
 assert.equal(qa.unique_item_count,5,"R4 source receipt has five distinct reviewed item IDs");
 assert.equal(qa.placement_count,9,"Expected pilot placements changed unexpectedly");
 const repoRoot=path.join(__dirname,"..");
 for(const item of ITEMS){
  assert(fs.existsSync(path.join(repoRoot,item.content_ref)),
    "Canonical source missing: "+item.content_ref);
 }
 assert.equal(placementsFor("THPT-CORE-QF01").length,2,
  "SGK Core + Topic beginner Practice must reference one item");
 assert.deepEqual(new Set(placementsFor("THPT-CORE-QF01").map(x=>x.mode)),
   new Set(["SGK_CORE","TOPIC_PRACTICE"]));
 assert.deepEqual(new Set(placementsFor("PRACTICE-THPT-DEMO-01").map(x=>x.mode)),
   new Set(["SGK_PRACTICE","TOPIC_PRACTICE"]));
 const demo=placementsFor("READINESS-THPT-DEMO-01");
 assert.equal(demo.length,1);
 assert.equal(demo[0].mastery_credit,false,"Technical pilot must not award mastery");
 assert.equal(ITEMS.find(x=>x.item_id==="HPT-WRI-DEMO-ANCHOR-01").is_anchor,true,
   "Written Anchor is a tag on Written, not a separate bank");
 assert.equal(validateCatalog([ITEMS[0],ITEMS[0]],[]).valid,false,
   "Duplicate canonical item IDs must be rejected");
 assert.equal(validateCatalog(ITEMS,[...PLACEMENTS,PLACEMENTS[0]]).valid,false,
   "Duplicate placement IDs must be rejected");
 assert.equal(validateCatalog(ITEMS,[...PLACEMENTS,{
   placement_id:"BAD",item_id:"unknown",mode:"TOPIC_PRACTICE",scope_ref:"TOPIC"
 }]).valid,false,"Unknown referenced question must be rejected");

 // Synthetic test ONLY — no actual assessment-ready question was authored.
 const syntheticItem={item_id:"SYNTHETIC-HOLDOUT-NOT-REAL",
   status:"ACADEMICALLY_ELIGIBLE_FOR_ASSESSMENT"};
 const chapter={
   item_id:syntheticItem.item_id,placement_id:"SYNTH-SGK",
   mode:"SGK_CHAPTER_READINESS",status:"APPROVED_ASSESSMENT_PLACEMENT",
   assessment_scope:"SGK_CHAPTER",assessment_id:"SYNTH-CHVI",
   outcome_ids:["out-1"]
 };
 const topic={...chapter,placement_id:"SYNTH-TOPIC",
   mode:"TOPIC_READINESS",assessment_scope:"TOPIC",
   assessment_id:"SYNTH-HAMSO"};
 assert.equal(readinessPreflight({
   item:syntheticItem,placement:chapter,history:[],requiredOutcomes:["out-1"]
 }).eligible,true,"Held-out item can be eligible for SGK readiness");
 assert.equal(readinessPreflight({
   item:syntheticItem,placement:topic,history:[],requiredOutcomes:["out-1"]
 }).eligible,true,"Same ID can also qualify for Topic readiness based on scope");
 const afterExposure=readinessPreflight({
   item:syntheticItem,placement:topic,
   history:[{item_id:syntheticItem.item_id,solution_seen:true}],
   requiredOutcomes:["out-1"]});
 assert.equal(afterExposure.eligible,false,
   "Question revealed in SGK must not certify independent Topic readiness");
 assert(afterExposure.reasons.includes("EXACT_ITEM_PREVIOUSLY_EXPOSED"));
 assert.equal(readinessPreflight({
   item:syntheticItem,placement:chapter,history:[],
   requiredOutcomes:["out-1","not-covered"]
 }).eligible,false,"Chapter outcome mismatch must prevent readiness credit");
 assert.equal(readinessPreflight({
   item:ITEMS[2],placement:demo[0],history:[],requiredOutcomes:["out-1"]
 }).eligible,false,"Technical demo must never provide readiness mastery");

 console.log("PASS THPT canonical shared item / placement / scope / exposure safety:",
  qa.unique_item_count,"canonical item records,",
  qa.placement_count,"role placements (metadata-only).");
}
if(require.main===module)run();
module.exports={run};
