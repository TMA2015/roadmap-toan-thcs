#!/usr/bin/env node
"use strict";
const assert=require("node:assert/strict"),fs=require("node:fs"),path=require("node:path");
const root=path.resolve(__dirname,"../prototypes/thpt/release-queue");
const A=["A1_SOURCE_SNAPSHOT","A2_SGK_SBT_SCOPE","A3_NOTEBOOKLM_VERDICT","A4_ITEM_OUTCOME_IDS","A5_D1_D6_SCOPE","A6_DELTA_RESOLVED","A7_PUBLIC_PRIVATE_BOUNDARY"];
const R=["R1_INTEGRATED_CURRENT_MAIN","R2_EXACT_HEAD_CI","R3_CLEAN_STUDENT_UI","R4_ASSESSMENT_SAFETY","R5_OWNER_APPROVAL"];
const P=["P1_DEPLOY_RECEIPT","P2_DEVICE_UAT"];
const read=p=>fs.readFileSync(path.join(root,p),"utf8");
const entries=[];
for(const dir of ["inventory","ready"]){
 for(const file of fs.readdirSync(path.join(root,dir)).filter(f=>f.endsWith(".md")&&f!=="README.md")){
  const source=read(dir+"/"+file);
  const field=name=>{const m=source.match(new RegExp("^"+name+": (.+)$","m"));assert(m,dir+"/"+file+" missing "+name);return m[1].trim()};
  const id=field("PACKET_ID"),state=field("STATE"),lane=field("LEARNING_PATH");
  assert.equal(file,id+".md","Packet name mismatch");
  assert(["SGK_CHAPTER","TOPIC"].includes(lane),"Unknown path "+id);
  assert(["PUBLIC_FORMATIVE_ONLY","FULL_LEARNING_PATH"].includes(field("RELEASE_SCOPE")),"Unknown scope "+id);
  assert(/^[0-9a-f]{40}$/.test(field("SOURCE_COMMIT")),"Invalid source commit "+id);
  assert(field("REVIEW_RECEIPT").length>20&&field("CURRENT_PR").length>3,"Untraceable packet "+id);
  const passed={};
  for(const key of [...A,...R,...P]){
   const m=source.match(new RegExp("^- \\[([ x])\\] "+key+" — (.+)$","m"));
   assert(m,"Missing checklist item "+key+" in "+id);
   assert(m[2].trim().length>20,"Evidence description too short for "+key+" in "+id);
   passed[key]=m[1]==="x";
  }
  const authored=A.every(k=>passed[k]),released=R.every(k=>passed[k]);
  if(dir==="ready"){
   assert(["CONTENT_READY","RELEASE_READY"].includes(state),"ready/ contains non-ready state "+id);
   assert(authored,"Not all academic gates PASS for READY packet "+id);
   if(state==="RELEASE_READY")assert(released,"Release lacks full R1–R5 "+id);
  }else assert(["PUBLISHED_SCOPED","INVENTORY","ACADEMIC_PARTIAL","INTEGRATING","HOLD"].includes(state),"Invalid inventory state "+id);
  if(state==="PUBLISHED_SCOPED")assert(passed.P1_DEPLOY_RECEIPT,"Published packet lacks release receipt "+id);
  entries.push({id,state,lane,dir});
 }
}
assert(entries.length>0,"Expected nonempty release inventory");
assert(new Set(entries.map(p=>p.id)).size===entries.length,"Duplicate PACKET_ID");
const index=read("REGISTER.md");
const rows=[...index.matchAll(/^\| \[([A-Z0-9-]+)\]\((inventory|ready)\/([A-Z0-9-]+)\.md\) \| ([A-Z_]+) \| ([A-Z_]+) \|/gm)];
assert.equal(rows.length,entries.length,"REGISTER rows differ from packet files");
for(const [_,id,dir,file,lane,state] of rows){
 assert.equal(id,file,"Index links wrong file");
 assert(entries.some(p=>p.id===id&&p.dir===dir&&p.lane===lane&&p.state===state),"Stale REGISTER metadata for "+id);
}
const ready=entries.filter(p=>p.dir==="ready");
if(!ready.length)assert(read("ready/README.md").includes("Hiện chưa có gói CONTENT_READY"),"READY summary stale");
console.log("PASS "+entries.length+" canonical packet manifests; "+ready.length+" CONTENT_READY; checklist and REGISTER consistent. No deploy.");
