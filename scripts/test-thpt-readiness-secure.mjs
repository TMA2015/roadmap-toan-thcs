"use strict";
import assert from "node:assert/strict";
import fs from "node:fs";
import {createAssessmentService,AssessmentError} from "../services/thpt-readiness/assessment-service.mjs";
import worker from "../services/thpt-readiness/worker.mjs";

const item=(id,key=1)=>({item_id:id,prompt:"Tính đáp số của "+id,
  response_kind:"CHOICE",choices:["Sai","Đúng","Khác"],key,explanation:"Giải theo điều kiện và đối chiếu.",
  heldout:true,blocked:false});
function bank(id,scope,items){
 return {id,scope,version:"academic-reviewed-snapshot-v1",
   required_count:items.length,active:true,items};
}
class MemoryRepository{
 constructor(banks){this.banks=new Map(banks.map(b=>[b.id,b]));this.attempts=new Map();this.exposure=new Map();this.publicItems=new Map();this.events=new Map();this.seq=0;}
 async getBank(id){return this.banks.get(id)||null}
 async getPublicItem(itemId){return this.publicItems.get(itemId)||null}
 async findPublished(ids){return ids.filter(id=>this.publicItems.has(id))}
 async recordPublicExposure(uid,itemId,role,eventKind){
  if(!this.publicItems.get(itemId)?.active)
   throw new AssessmentError("UNREGISTERED_FORMATIVE_ITEM",404);
  const key=uid+":"+itemId;
  if(!this.exposure.has(key))this.exposure.set(key,role);
  this.events.set(key+":"+role+":"+eventKind,true);
 }

 async getAttempt(uid,bankId,version){
  return [...this.attempts.values()].find(a=>a.uid===uid&&a.bank_id===bankId&&a.bank_version===version)||null
 }
 async findAttempt(uid,id){const a=this.attempts.get(id);return a?.uid===uid?a:null}
 async findExposed(uid,ids){return ids.filter(id=>this.exposure.has(uid+":"+id))}
 async claim(uid,b){
  const prior=await this.getAttempt(uid,b.id,b.version);
  if(prior)return prior;
  if((await this.findExposed(uid,b.items.map(q=>q.item_id))).length)return null;
  const a={id:"A"+(++this.seq),uid,bank_id:b.id,bank_version:b.version,
    item_ids_json:JSON.stringify(b.items.map(q=>q.item_id)),submitted_at:null,
    result_json:null};
  this.attempts.set(a.id,a);
  for(const q of b.items)this.exposure.set(uid+":"+q.item_id,b.scope);
  return a;
 }
 async finalize(uid,id,result,answers){
  const a=await this.findAttempt(uid,id);
  if(a.submitted_at)return JSON.parse(a.result_json);
  a.submitted_at="now";a.result_json=JSON.stringify(result);
  a.responses_json=JSON.stringify(answers);
  return result;
 }
}
async function failure(fn,code){
 await assert.rejects(fn,e=>e instanceof AssessmentError&&e.code===code,
   "Expected fail-closed "+code);
}
const a=bank("G10_CHVI_SGK","SGK_CHAPTER",[item("Q-HIDDEN-01"),item("Q-HIDDEN-02",0)]);
const b=bank("TOPIC_FUNCTION_READY","TOPIC_READINESS",[item("Q-HIDDEN-02"),item("Q-HIDDEN-03")]);
const db=new MemoryRepository([a,b]);
const svc=createAssessmentService(db);
// Public formative exposures are authenticated and canonical-scoped; Topic reuse
// cannot count as unseen readiness, including after public item deactivation.
db.publicItems.set("PUBLIC-C01",{item_id:"PUBLIC-C01",active:true,
 allowed_scopes:["SGK_CORE"]});
await failure(()=>svc.recordExposure("learner_C","MISSING-ITEM","SGK_CORE",
 "QUESTION_SHOWN"),"UNREGISTERED_FORMATIVE_ITEM");
await failure(()=>svc.recordExposure("learner_C","PUBLIC-C01","TOPIC_PRACTICE",
 "QUESTION_SHOWN"),"UNREGISTERED_FORMATIVE_ITEM");
await failure(()=>svc.recordExposure("learner_C","PUBLIC-C01","SGK_CORE",
 "SILENT_ANSWER"),"INVALID_FORMATIVE_EXPOSURE");
const recorded=await svc.recordExposure("learner_C","PUBLIC-C01","SGK_CORE",
 "QUESTION_SHOWN");
assert.equal(recorded.mastery_credit,false);
await svc.recordExposure("learner_C","PUBLIC-C01","SGK_CORE","HINT_OPENED");
await svc.recordExposure("learner_C","PUBLIC-C01","SGK_CORE","HINT_OPENED");
assert.equal(db.events.size,2,"Repeated hint must not create duplicate exposure event");
const onlySeen=bank("PUBLIC_ASSESSMENT","SGK_CHAPTER",[item("PUBLIC-C01")]);
db.banks.set(onlySeen.id,onlySeen);
await failure(()=>svc.start("learner_Z",onlySeen.id),"HELDOUT_ITEM_WAS_PUBLIC");
db.publicItems.get("PUBLIC-C01").active=false;
await failure(()=>svc.start("learner_D",onlySeen.id),"HELDOUT_ITEM_WAS_PUBLIC");
assert.equal(db.attempts.size,0,"Rejected public assessment must never create attempt");

const lateBank=bank("LATE_PUBLIC","SGK_CHAPTER",[item("LATE-BANK-Q01")]);
db.banks.set(lateBank.id,lateBank);
const lateAttempt=await svc.start("learner_Z",lateBank.id);
db.publicItems.set("LATE-BANK-Q01",{item_id:"LATE-BANK-Q01",active:false,
 allowed_scopes:["SGK_PRACTICE"]});
await failure(()=>svc.submit("learner_Z",lateAttempt.attempt_id,
 {"LATE-BANK-Q01":1}),"HELDOUT_ITEM_WAS_PUBLIC");
assert.equal(db.attempts.get(lateAttempt.attempt_id).submitted_at,null,
 "Previously revealed question must not be graded even after opening exam");
const opened=await svc.start("learner_A",a.id);
assert.equal(opened.questions.length,2);
assert.equal(opened.scope,"SGK_CHAPTER");
assert.equal(opened.mastery_credit,false);
assert.equal(opened.completed,false);
const str=JSON.stringify(opened);
for(const x of ["key","explanation","correct","answer","Giải theo điều kiện"]){
 assert(!str.includes(x),"Start must not leak scoring/solution: "+x);
}
assert.deepEqual(opened.questions.map(q=>q.item_id),["Q-HIDDEN-01","Q-HIDDEN-02"]);
const resumed=await svc.start("learner_A",a.id);
assert.equal(resumed.attempt_id,opened.attempt_id,"Resume must not create a second attempt");
assert.equal(db.attempts.size,1);
await failure(()=>svc.start("learner_A",b.id),"ASSESSMENT_ITEMS_PREVIOUSLY_SEEN");
await failure(()=>svc.submit("learner_B",opened.attempt_id,{"Q-HIDDEN-01":1,"Q-HIDDEN-02":0}),"ATTEMPT_NOT_FOUND");
await failure(()=>svc.submit("learner_A",opened.attempt_id,{"Q-HIDDEN-01":1}),"ALL_ANSWERS_REQUIRED");
await failure(()=>svc.submit("learner_A",opened.attempt_id,{"Q-HIDDEN-01":1,"Q-HIDDEN-02":7}),"INVALID_OR_MISSING_ANSWER");
assert.equal(db.attempts.get(opened.attempt_id).submitted_at,null,
 "Incomplete/invalid requests must not persist score");
const done=await svc.submit("learner_A",opened.attempt_id,{"Q-HIDDEN-01":1,"Q-HIDDEN-02":2});
assert.equal(done.completed,true);
assert.equal(done.score,1);
assert.equal(done.total,2);
assert.equal(done.mastery_credit,false);
assert.equal(done.details[0].correct_choice,1);
assert(done.details[0].explanation,"Explanations only returned after Final Submit");
assert.equal(db.attempts.get(opened.attempt_id).submitted_at,"now");
const retry=await svc.submit("learner_A",opened.attempt_id,{"Q-HIDDEN-01":0,"Q-HIDDEN-02":0});
assert.deepEqual(retry,done,"Duplicate submit must not change first grade");
await failure(()=>svc.start("learner_A",a.id),"ALREADY_SUBMITTED");
const other=await svc.start("learner_B",b.id);
assert.notEqual(other.attempt_id,opened.attempt_id,"Different learners have isolated attempts");
await failure(()=>svc.start("learner_B",a.id),"ASSESSMENT_ITEMS_PREVIOUSLY_SEEN");
const blocked=bank("BAD_SCOPE","SGK_CHAPTER",[item("Q-LEAKED")]);
blocked.items[0].blocked=true;
db.banks.set(blocked.id,blocked);
await failure(()=>svc.start("learner_C",blocked.id),"BANK_ITEM_UNSAFE_OR_UNSUPPORTED");
const partial=bank("BAD_COUNT","SGK_CHAPTER",[item("Q-A"),item("Q-B")]);
partial.required_count=18;db.banks.set(partial.id,partial);
await failure(()=>svc.start("learner_C",partial.id),"BANK_COUNT_MISMATCH");
const inactive=bank("INACTIVE","TOPIC_READINESS",[item("Q-Z")]);
inactive.active=false;db.banks.set(inactive.id,inactive);
await failure(()=>svc.start("learner_C",inactive.id),"BANK_NOT_AVAILABLE");
const subjective=bank("UNSUPPORTED","SGK_CHAPTER",[item("Q-FREE")]);
subjective.items[0].choices=[];
db.banks.set(subjective.id,subjective);
await failure(()=>svc.start("learner_C",subjective.id),"BANK_ITEM_UNSAFE_OR_UNSUPPORTED");
const corrupted=bank("CHANGED","SGK_CHAPTER",[item("Q-ORIGINAL")]);
db.banks.set(corrupted.id,corrupted);
const earlier=await svc.start("learner_D",corrupted.id);
corrupted.version="academic-reviewed-snapshot-v2";
await failure(()=>svc.submit("learner_D",earlier.attempt_id,{"Q-ORIGINAL":1}),
 "ASSESSMENT_VERSION_CHANGED");

// Actual reviewer-approved ChVI Readiness is open-response in several places.
// Accept genuine written answers only as protected pending-rubric work; do NOT
// pretend the generic multiple-choice scorer has graded the student's proof.
const shortWritten=bank("G10_CHVI_WRITTEN","SGK_CHAPTER",[{
 item_id:"SYNTHETIC-WRITTEN-01",prompt:"Giải thích nghiệm và miền xác định.",
 response_kind:"TEXT",choices:[],key:null,explanation:null,rubric_ready:true,
 heldout:true,blocked:false
}]);
db.banks.set(shortWritten.id,shortWritten);
const wx=await svc.start("learner_writer",shortWritten.id);
assert(!JSON.stringify(wx).includes("rubric_ready"));
assert(wx.questions[0].response_kind==="TEXT");
await failure(()=>svc.submit("learner_writer",wx.attempt_id,
 {"SYNTHETIC-WRITTEN-01":"   "}),"INVALID_OR_MISSING_ANSWER");
const writtenResult=await svc.submit("learner_writer",wx.attempt_id,
 {"SYNTHETIC-WRITTEN-01":"Miền x ≥ 0 và kiểm lại trong phương trình gốc."});
assert.equal(writtenResult.completed,true);
assert.equal(writtenResult.score,null,"Never assign automatic grade to unreviewed free text");
assert.equal(writtenResult.manual_review_required,true);
assert.equal(writtenResult.details.length,0,"Do not reveal rubric/solution to pending written evaluation");
assert.equal(writtenResult.mastery_credit,false);
assert(db.attempts.get(wx.attempt_id).responses_json.includes("Miền x"),
 "Written answer must be stored for protected later review");
const repeatedWritten=await svc.submit("learner_writer",wx.attempt_id,
 {"SYNTHETIC-WRITTEN-01":"Different text"});
assert.deepEqual(repeatedWritten,writtenResult,"Final Submit is immutable for written too");
assert(!db.attempts.get(wx.attempt_id).responses_json.includes("Different text"),
 "Retry must not overwrite prior saved written response");

// Worker fail-closed even before identity provider or DB is configured.
const request=new Request("https://example.test/v1/assessment/start",{
 method:"POST",headers:{"Content-Type":"application/json"},
 body:JSON.stringify({bank_id:"G10_CHVI_SGK"})
});
const unavailable=await worker.fetch(request,{});
assert.equal(unavailable.status,503,"Worker must not run without real auth/db/site settings");
assert.equal((await unavailable.json()).error,"SERVER_NOT_CONFIGURED");
const originDenied=await worker.fetch(new Request("https://example.test/v1/assessment/start",{
 method:"POST",headers:{Origin:"https://unauthorized.example"}
}),{ALLOWED_ORIGIN:"https://approved.example",DB:{},FIREBASE_PROJECT_ID:"not-real"});
assert.equal(originDenied.status,403);
assert.equal((await originDenied.json()).error,"ORIGIN_DENIED");

// Contract checks: original held-out real item bodies MUST NOT be committed.
const publicSource=[
 "services/thpt-readiness/assessment-service.mjs",
 "services/thpt-readiness/worker.mjs",
 "services/thpt-readiness/schema.sql"
].map(x=>fs.readFileSync(new URL("../"+x,import.meta.url),"utf8")).join("\n");
for(const phrase of ["THPT-G10-B15-R01","THPT-G10-B16-R01","THPT-G10-B17-R01",
 "THPT-G10-B18-R01"]){
 assert(!publicSource.includes(phrase),"Held-out real exam ID found in public source "+phrase);
}
assert(!publicSource.includes("√(x+5)=x−1"),
 "Don't silently move approved formative answer into held-out bank");
console.log("PASS THPT secure Readiness preflight: private keys until Final Submit; learner isolation; shared practice exposure and permanently published-ID exclusion; bank count/version lock; idempotent choice and written submission; pending written rubric without fake grades; zero mastery; unconfigured worker denied. NOT a real D1 deployment.");
