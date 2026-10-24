/* R20 release gate: each canonical §6 exam/transfer row has only verified destinations.
 * Runs against real MkDocs output, not the source candidate. No student writes.
 */
"use strict";
const assert=require("node:assert/strict");
const fs=require("node:fs");
const path=require("node:path");
const hook=fs.readFileSync("hooks/entrance10_links_r20.py","utf8");
const planBlock=hook.match(/_ROWS = r"""([\s\S]*?)"""/);
assert(planBlock,"R20 row plans missing");
const plans=planBlock[1].trim().split("\n").map(row=>{
 const [topic,kind,body]=row.split("|");return {topic,kind,size:body.split(";").length};
});
assert.equal(plans.length,23,"All non-CT10 taught topics must have an explicit exam plan");
const exerciseBank=JSON.parse(fs.readFileSync("docs/assets/data/written-exercises/written-exercise-library-v1.json","utf8"));
const exerciseById=new Map(exerciseBank.exercises.map(x=>[x.exercise_id,x]));
const topicDir=fs.readdirSync("docs/kien-thuc").filter(x=>/^\d\d-/.test(x));
const slugById=new Map(topicDir.map(x=>["CT"+x.slice(0,2),x]));
const versions={CT02:"v4",CT03:"v4",CT04:"v6",CT21:"v2"};
const skills=new Map();
function manifest(topic){
 if(skills.has(topic))return skills.get(topic);
 const slug=slugById.get(topic);
 assert(slug,"Unknown Practice topic "+topic);
 const file=path.join("docs","assets","data","practice",slug+"-"+(versions[topic]||"v1")+".manifest.json");
 const labels=JSON.parse(fs.readFileSync(file,"utf8")).skill_labels;
 skills.set(topic,labels);return labels;
}
function htmlFor(topic){
 const slug=slugById.get(topic);
 assert(slug,"Unknown topic: "+topic);
 const name=path.join("site","kien-thuc",slug,"index.html");
 assert(fs.existsSync(name),"No official published page build for "+topic);
 return fs.readFileSync(name,"utf8");
}
let counted=0,verifiedPractice=0,verifiedWritten=0,pending=0;
for(const {topic,kind,size} of plans){
 const html=htmlFor(topic);
 const actionRows=(html.match(/class="math-knowledge-exam-actions"/g)||[]).length;
 const missing=(html.match(/class="math-topic-exam-pending"/g)||[]).length;
 assert.equal(actionRows+missing,size,"§6 row annotations missing/duplicated for "+topic+" ("+kind+")");
 const matches=[...html.matchAll(/<a\s+class="math-topic-exam-link (practice|written)"\s+href="([^"]+)"/g)];
 // The new classes may appear only in §6, so each live anchor is checked.
 assert(matches.length>=size-missing,"Missing §6 active link "+topic);
 const base="https://example.invalid/kien-thuc/"+slugById.get(topic)+"/";
 for(const [,role,raw] of matches){
   const url=new URL(raw.replaceAll("&amp;","&"),base);
   assert.equal(url.host,"example.invalid","Offsite destination");
   if(role==="practice"){
     assert(url.pathname.endsWith("/bai-tap/"),"Not a Practice activity: "+url);
     assert.equal(url.searchParams.get("mode"),"remediation","Practice mode missing");
     const skill=url.searchParams.get("focus");
     const target=(url.pathname.match(/\/kien-thuc\/(\d\d)-[^/]+\/bai-tap\/$/)||[])[1];
     assert(target,"Bad topic target "+url);
     assert(manifest("CT"+target)[skill],"Practice skill absent: "+target+"/"+skill);
     verifiedPractice++;
   }else{
     assert(url.pathname.endsWith("/luyen-tap/tu-luan/"),"Not canonical Written Library "+url);
     const id=decodeURIComponent(url.hash.slice(1)).toUpperCase();
     const item=exerciseById.get(id);
     assert(item && item.academic_review.status==="APPROVED","Phantom/unreviewed Written link "+id);
     assert.equal(url.searchParams.get("topic"),item.topic_id,"Wrong Written topic filter "+id);
     verifiedWritten++;
   }
 }
 pending+=missing;counted+=size;
 assert(!html.includes("Đọc bản mới"),"Old dual version chooser was reintroduced "+topic);
}
const ct10=htmlFor("CT10");
assert.equal((ct10.match(/class="math-topic-exam-pending"/g)||[]).length,4,"CT10 four honest pending exam types changed");
const ct10Actions=(ct10.match(/class="math-topic-exam-actions"/g)||[]).length;
assert.equal(ct10Actions,10,"CT10 R4 exam row count changed");
const ct10Practice=(ct10.match(/class="math-topic-exam-link practice"/g)||[]).length;
assert.equal(ct10Practice,6,"CT10 should retain six verified exam Practice actions");
console.log("PASS R20 §6 exam/transfer exact links:",plans.length,"topics + CT10 R4;",counted,"rows;",verifiedPractice,"validated Practice;",verifiedWritten,"approved Written;",pending,"honest pending");
