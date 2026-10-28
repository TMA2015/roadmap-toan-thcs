/* SECURE THPT assessment domain. Server-only; never bundled into MkDocs.
 * No graded Readiness may be activated until private bank, auth and QA pass.
 */
const ID=/^[A-Za-z0-9][A-Za-z0-9_-]{0,127}$/;
export class AssessmentError extends Error{
 constructor(code,status=409){super(code);this.code=code;this.status=status;}
}
function verifyId(value,label){
 if(typeof value!=="string"||!ID.test(value))
   throw new AssessmentError("INVALID_"+label,400);
 return value;
}
function verifyBank(bank){
 if(!bank||bank.active!==true)throw new AssessmentError("BANK_NOT_AVAILABLE",503);
 if(!["SGK_CHAPTER","TOPIC_READINESS"].includes(bank.scope))
   throw new AssessmentError("INVALID_ASSESSMENT_SCOPE",503);
 const items=bank.items;
 if(!Array.isArray(items)||items.length!==bank.required_count||items.length<1||items.length>60)
   throw new AssessmentError("BANK_COUNT_MISMATCH",503);
 const ids=new Set();
 for(const q of items){
   verifyId(q.item_id,"ITEM");
   if(ids.has(q.item_id))throw new AssessmentError("DUPLICATE_CANONICAL_ID",503);
   ids.add(q.item_id);
   if(q.heldout!==true||q.blocked===true||typeof q.prompt!=="string"||
      q.prompt.length<1||q.prompt.length>4000||
      !["CHOICE","TEXT"].includes(q.response_kind)||
      !Array.isArray(q.choices))
      throw new AssessmentError("BANK_ITEM_UNSAFE_OR_UNSUPPORTED",503);
   if(q.response_kind==="CHOICE"&&
      (q.choices.length<2||q.choices.length>8||
       !q.choices.every(t=>typeof t==="string"&&t.length>0&&t.length<1000)||
       !Number.isInteger(q.key)||q.key<0||q.key>=q.choices.length||
       typeof q.explanation!=="string"||!q.explanation))
       throw new AssessmentError("BANK_ITEM_UNSAFE_OR_UNSUPPORTED",503);
   if(q.response_kind==="TEXT"&&
      (q.choices.length!==0||q.key!==null||!q.rubric_ready))
       throw new AssessmentError("TEXT_RUBRIC_NOT_READY",503);
 }
 return bank;
}
const visible=bank=>bank.items.map(q=>({
 item_id:q.item_id,prompt:q.prompt,response_kind:q.response_kind,
 choices:q.choices.slice()
}));
const activeView=(a,bank)=>({
 attempt_id:a.id,bank_id:bank.id,scope:bank.scope,
 content_version:bank.version,questions:visible(bank),
 completed:false,mastery_credit:false // require independently audited mastery engine
});
const FORMATIVE_ROLES=new Set([
 "SGK_CORE","SGK_PRACTICE","SGK_CHAPTER_APPLICATION",
 "SGK_WRITTEN","TOPIC_PRACTICE"
]);
const EXPOSURE_EVENTS=new Set(["QUESTION_SHOWN","HINT_OPENED","SOLUTION_OPENED"]);
export function createAssessmentService(repo){
 return Object.freeze({
  async recordExposure(uid,itemId,role,eventKind){
   verifyId(uid,"LEARNER");verifyId(itemId,"ITEM");
   if(!FORMATIVE_ROLES.has(role)||!EXPOSURE_EVENTS.has(eventKind))
     throw new AssessmentError("INVALID_FORMATIVE_EXPOSURE",400);
   const publicItem=await repo.getPublicItem(itemId);
   if(!publicItem||!publicItem.active||
      !publicItem.allowed_scopes.includes(role))
     throw new AssessmentError("UNREGISTERED_FORMATIVE_ITEM",404);
   await repo.recordPublicExposure(uid,itemId,role,eventKind);
   return {recorded:true,item_id:itemId,role,event_kind:eventKind,mastery_credit:false};
  },
  async start(uid,bankId){
   verifyId(uid,"LEARNER");verifyId(bankId,"BANK");
   const bank=verifyBank(await repo.getBank(bankId));
   const prior=await repo.getAttempt(uid,bankId,bank.version);
   if(prior){
    if(prior.submitted_at)throw new AssessmentError("ALREADY_SUBMITTED",409);
    return activeView(prior,bank); // resume same exposure, not a new test
   }
   const publicItems=await repo.findPublished(bank.items.map(q=>q.item_id));
   if(publicItems.length)
     throw new AssessmentError("HELDOUT_ITEM_WAS_PUBLIC",409);
   const seen=await repo.findExposed(uid,bank.items.map(q=>q.item_id));
   if(seen.length)throw new AssessmentError("ASSESSMENT_ITEMS_PREVIOUSLY_SEEN",409);
   const result=await repo.claim(uid,bank);
   if(!result)throw new AssessmentError("ASSESSMENT_EXPOSURE_CONFLICT",409);
   if(result.submitted_at)throw new AssessmentError("ALREADY_SUBMITTED",409);
   return activeView(result,bank);
  },
  async submit(uid,attemptId,answers){
   verifyId(uid,"LEARNER");verifyId(attemptId,"ATTEMPT");
   const a=await repo.findAttempt(uid,attemptId);
   if(!a)throw new AssessmentError("ATTEMPT_NOT_FOUND",404);
   if(a.submitted_at){
    // Idempotent retry: no new grade and no repeated mastery grant.
    return JSON.parse(a.result_json);
   }
   const bank=verifyBank(await repo.getBank(a.bank_id));
   if(bank.version!==a.bank_version ||
      JSON.stringify(bank.items.map(q=>q.item_id))!==a.item_ids_json)
      throw new AssessmentError("ASSESSMENT_VERSION_CHANGED",503);
   // Fail closed if an exam item was made public after this attempt started.
   if((await repo.findPublished(bank.items.map(q=>q.item_id))).length)
     throw new AssessmentError("HELDOUT_ITEM_WAS_PUBLIC",409);
   if(!answers||typeof answers!=="object"||Array.isArray(answers)||
      Object.keys(answers).length!==bank.items.length)
      throw new AssessmentError("ALL_ANSWERS_REQUIRED",400);
   for(const q of bank.items){
    const answer=answers[q.item_id];
    if(!Object.hasOwn(answers,q.item_id)||
      (q.response_kind==="CHOICE"&&
       (!Number.isInteger(answer)||answer<0||answer>=q.choices.length))||
      (q.response_kind==="TEXT"&&
       (typeof answer!=="string"||!answer.trim()||answer.length>2000)))
       throw new AssessmentError("INVALID_OR_MISSING_ANSWER",400);
   }
   // Any real written/short-answer question requires the independently
   // approved rubric evaluator. Never guess a grade or reveal a worked key.
   if(bank.items.some(q=>q.response_kind==="TEXT")){
     const response={attempt_id:a.id,completed:true,score:null,
       total:bank.items.length,manual_review_required:true,details:[],
       mastery_credit:false,credit_status:"PENDING_MANUAL_RUBRIC_REVIEW"};
     return await repo.finalize(uid,a.id,response,answers);
   }
   const details=bank.items.map(q=>({
     item_id:q.item_id,correct:answers[q.item_id]===q.key,
     correct_choice:q.key,explanation:q.explanation
   }));
   const score=details.filter(d=>d.correct).length;
   const response={attempt_id:a.id,completed:true,score,total:details.length,
     details,manual_review_required:false,mastery_credit:false,
     credit_status:"PENDING_PRODUCTION_SCORING_AUDIT"};
   return await repo.finalize(uid,a.id,response,answers);
  }
 });
}
