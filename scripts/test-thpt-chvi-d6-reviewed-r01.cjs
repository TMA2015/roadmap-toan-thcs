"use strict";
const assert=require("node:assert/strict");
const fs=require("node:fs");
const crypto=require("node:crypto");
const path=require("node:path");
const base=path.join(__dirname,"..");
const help=require("../docs/assets/javascripts/thpt-chvi-d6-reviewed-r01.js");
const formative=require("../docs/assets/javascripts/thpt-chvi-reviewed-formative-v1.js");
const expected={
 "HELP-G10-B15-01":"0f21915a9d6ac6ab546b0b1a889447c6d0d06cff260193429f09b232fa328b95",
 "HELP-G10-B15-02":"a1f38c9f0e18176c431d8731378dbac824423d207d05aad2a9eb02b5c494f331",
 "HELP-G10-B16-01":"5c1703b571cc0ea9caffb1cf34f587862f808b9d9bc596b961d6e5774e1d380d",
 "HELP-G10-B16-02":"ca3024f51606d5635e838eb886c6f49d68be48471ea940232f5694defac3a236",
 "HELP-G10-B17-01":"8d9cdc059308dae67da0117712636dfcc8d0af9aaaed9639fdfcc703fe214f88",
 "HELP-G10-B17-02":"32c88d489baf3212661a9fd44b214ddc2b675116694b70b233fe971ccc17901a",
 "HELP-G10-B18-01":"c453dfe6b7b7e104e756af7b303c60263363f0065d5156ff4cb9608bfc13e9dd",
 "HELP-G10-B18-02":"01b234aea0e1a9786f85eed20e571f2be545ebab00061df18f4ebb2ec20760cf"
};
const labels=["TRIỆU CHỨNG","XÁC ĐỊNH LỖI","KIẾN THỨC CHỐT","TỰ SỬA","LUYỆN LẠI"];
function run(){
 const v=help.validate();assert(v.valid,v.errors?.join("; "));assert.equal(v.count,8);
 assert.equal(help.academic_scope,"SGK_CHVI_D6_PUBLIC_SUPPORT_ONLY");
 assert.equal(help.credit,false);
 assert.equal(help.cards.length,8);
 const unique=new Set(),outcomes=new Set();
 const itemIds=new Set(formative.items.map(x=>x.item_id));
 let steps=0,references=0;
 for(const c of help.cards){
  assert(!unique.has(c.help_id),"Duplicate HELPID");unique.add(c.help_id);
  assert(expected[c.help_id],"Unexpected card "+c.help_id);
  assert.equal(c.stages.length,5);
  assert.deepEqual(c.stages.map(s=>s.label),labels);
  const packet=c.help_id+"\n"+c.stages.map(s=>s.label+": "+s.text).join("\n");
  assert.equal(crypto.createHash("sha256").update(packet,"utf8").digest("hex"),expected[c.help_id],
   "Academic source stage content changed: "+c.help_id);
  assert.deepEqual(c.item_ids.length?c.item_ids:[],[...new Set(c.item_ids)],"duplicate link IDs");
  c.outcomes.forEach(x=>outcomes.add(x));
  for(const id of c.item_ids){assert(itemIds.has(id),"Unknown public canonical "+id);references++}
  steps+=c.stages.length;
 }
 for(const lesson of ["15","16","17","18"])assert.equal(help.forLesson(lesson).length,2);
 assert.equal(outcomes.size,19,"Reviewer 19 outcomes should all map");
 assert.equal(steps,40);assert.equal(references,17);
 const mkdocs=fs.readFileSync(path.join(base,"mkdocs.yml"),"utf8");
 const current=fs.readFileSync(path.join(base,"docs/assets/javascripts/thpt-r4-preview.js"),"utf8");
 const asset=fs.readFileSync(path.join(base,"docs/assets/javascripts/thpt-chvi-d6-reviewed-r01.js"),"utf8");
 assert(mkdocs.includes("assets/stylesheets/thpt-chvi-d6-reviewed-r01.css"));
 const a=mkdocs.indexOf("assets/javascripts/thpt-chvi-reviewed-formative-v1.js");
 const b=mkdocs.indexOf("assets/javascripts/thpt-chvi-d6-reviewed-r01.js");
 const c=mkdocs.indexOf("assets/javascripts/thpt-r4-preview.js");
 assert(a>=0&&a<b&&b<c,"D6 asset must load after bank, before R4");
 assert(current.includes("THPT_CHVI_D6_REVIEWED?.mount(modalBody"),"D6 must be mounted");
 assert(current.includes("lastViewedReviewed"),"Public question position must be preserved");
 assert(current.includes('if(!dlg.open)dlg.showModal()'),"Switching Core/Practice inside open modal must not reopen");
 for(const disallowed of [/localStorage\s*\./,/sessionStorage\s*\./,/fetch\s*\(/,/XMLHttpRequest/,/mastery[_-]?score\s*=/i]){
  assert(!disallowed.test(asset),"D6 module cannot store, send network requests or score mastery");
 }
 assert.equal(formative.validate().valid,true,"existing 18 reviewed public items remain valid");
 const readiness=fs.readFileSync(path.join(base,"docs/thpt-preview/sgk/chuong-vi/tu-kiem-tra-chuong.md"),"utf8");
 assert(readiness.includes("TECHNICAL_DEMO_ONLY"));
 assert(readiness.includes("mastery_credit: false"));
 console.log("PASS CHVI D6 authoring source parity: 8 cards / 40 original stages / 19 outcomes / 17 canonical return refs");
 console.log("PASS scope: only public ChVI practice, no readiness or mastery, no persistence/network");
}
if(require.main===module)run();
module.exports={run};
