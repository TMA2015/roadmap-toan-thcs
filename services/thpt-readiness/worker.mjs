/* Cloudflare Worker adapter (NOT DEPLOYED).
 * Requires D1 binding DB, verified Firebase ID tokens, private imported questions.
 * No actual held-out question/answer is committed in this repository.
 */
import {AssessmentError,createAssessmentService} from "./assessment-service.mjs";

const JWKS_URL="https://www.googleapis.com/service_accounts/v1/jwk/securetoken@system.gserviceaccount.com";
let cachedJWKS=null,validUntil=0;
const nowSeconds=()=>Math.floor(Date.now()/1000);
function fail(code,status){throw new AssessmentError(code,status);}
function parseB64(s){
 if(typeof s!=="string"||!/^[A-Za-z0-9_-]+$/.test(s))fail("INVALID_TOKEN",401);
 const chars=atob(s.replace(/-/g,"+").replace(/_/g,"/"));
 return Uint8Array.from(chars,c=>c.charCodeAt(0));
}
function parseJwtSegment(s){
 try{return JSON.parse(new TextDecoder().decode(parseB64(s)));}
 catch{fail("INVALID_TOKEN",401);}
}
async function firebaseUID(request,env){
 if(!env.FIREBASE_PROJECT_ID||!env.DB)fail("SERVER_NOT_CONFIGURED",503);
 const auth=request.headers.get("Authorization")||"";
 const m=/^Bearer ([A-Za-z0-9_.-]+)$/.exec(auth);
 if(!m||m[1].length>10000)fail("AUTH_REQUIRED",401);
 const token=m[1],parts=token.split(".");
 if(parts.length!==3)fail("INVALID_TOKEN",401);
 const header=parseJwtSegment(parts[0]),claims=parseJwtSegment(parts[1]);
 if(header.alg!=="RS256"||!header.kid||typeof header.kid!=="string"||
    header.kid.length>256)fail("INVALID_TOKEN",401);
 const now=nowSeconds(),project=env.FIREBASE_PROJECT_ID;
 if(claims.aud!==project||claims.iss!=="https://securetoken.google.com/"+project||
    !Number.isInteger(claims.exp)||claims.exp<=now||
    !Number.isInteger(claims.iat)||claims.iat>now||claims.iat<=0||
    !Number.isInteger(claims.auth_time)||claims.auth_time>now||
    typeof claims.sub!=="string"||claims.sub.length<1||claims.sub.length>128)
    fail("INVALID_TOKEN",401);
 if(!cachedJWKS||Date.now()>validUntil){
   let response;
   try{response=await fetch(JWKS_URL,{headers:{Accept:"application/json"}});}
   catch{fail("IDENTITY_PROVIDER_UNAVAILABLE",503);}
   if(!response.ok)fail("IDENTITY_PROVIDER_UNAVAILABLE",503);
   const body=await response.json();
   if(!Array.isArray(body.keys)||body.keys.length<1)
      fail("IDENTITY_PROVIDER_UNAVAILABLE",503);
   cachedJWKS=body.keys;validUntil=Date.now()+5*60*1000;
 }
 const key=cachedJWKS.find(k=>k.kid===header.kid&&k.kty==="RSA"&&
   (!k.alg||k.alg==="RS256")&&(!k.use||k.use==="sig"));
 if(!key)fail("INVALID_TOKEN",401);
 const cryptoKey=await crypto.subtle.importKey("jwk",key,
   {name:"RSASSA-PKCS1-v1_5",hash:"SHA-256"},false,["verify"]);
 const sigOk=await crypto.subtle.verify("RSASSA-PKCS1-v1_5",cryptoKey,
   parseB64(parts[2]),new TextEncoder().encode(parts[0]+"."+parts[1]));
 if(!sigOk)fail("INVALID_TOKEN",401);
 return claims.sub;
}

function d1Repository(db){
 const one=async(sql,...args)=>(await db.prepare(sql).bind(...args).first())||null;
 return {
  async isLearnerAllowed(uid){
   const row=await one("SELECT active FROM thpt_allowed_learners WHERE uid=?",uid);
   return row?.active===1; // no row, revoked, or malformed -> deny
  },
  async getBank(id){
   const bank=await one("SELECT id,scope,version,required_count,active FROM thpt_banks WHERE id=?",id);
   if(!bank)return null;
   // Do not even read protected stems, answers or rubrics for inactive banks.
   if(bank.active!==1)return {id:bank.id,scope:bank.scope,
     version:bank.version,required_count:bank.required_count,
     active:false,items:[]};
   const items=(await db.prepare("SELECT item_id,prompt,response_kind,choices_json,key_index,explanation,rubric_ready,heldout,blocked FROM thpt_bank_items WHERE bank_id=? ORDER BY position")
     .bind(id).all()).results||[];
   return {id:bank.id,scope:bank.scope,version:bank.version,
     required_count:bank.required_count,active:bank.active===1,
     items:items.map(q=>({item_id:q.item_id,prompt:q.prompt,
       response_kind:q.response_kind,choices:JSON.parse(q.choices_json),
       key:q.key_index,explanation:q.explanation,rubric_ready:q.rubric_ready===1,
       heldout:q.heldout===1,blocked:q.blocked===1}))};
  },
  async getAttempt(uid,bankId,version){
   return one("SELECT * FROM thpt_attempts WHERE uid=? AND bank_id=? AND bank_version=?",
     uid,bankId,version);
  },
  async findAttempt(uid,id){
   return one("SELECT * FROM thpt_attempts WHERE uid=? AND id=?",uid,id);
  },
  async getPublicItem(id){
   const q=await one("SELECT item_id,allowed_scopes_json,active FROM thpt_public_item_registry WHERE item_id=?",id);
   if(!q)return null;
   return {item_id:q.item_id,allowed_scopes:JSON.parse(q.allowed_scopes_json),
     active:q.active===1};
  },
  async findPublished(ids){
   if(!ids.length)return [];
   const query="SELECT item_id FROM thpt_public_item_registry WHERE item_id IN ("+
     ids.map(()=>"?").join(",")+")";
   return (await db.prepare(query).bind(...ids).all()).results||[];
  },
  async recordPublicExposure(uid,itemId,scope,eventKind){
   const canRecord="EXISTS (SELECT 1 FROM thpt_public_item_registry WHERE item_id=? AND active=1)";
   const query="INSERT OR IGNORE INTO thpt_exposures (uid,item_id,source_scope) "+
     "SELECT ?,?,? WHERE "+canRecord;
   const events="INSERT OR IGNORE INTO thpt_exposure_events (uid,item_id,source_scope,event_kind) "+
     "SELECT ?,?,?,? WHERE "+canRecord;
   const results=await db.batch([
     db.prepare(query).bind(uid,itemId,scope,itemId),
     db.prepare(events).bind(uid,itemId,scope,eventKind,itemId)
   ]);
   // Re-check: if registry was disabled mid-transaction, no success reply.
   const verified=await one("SELECT 1 AS present FROM thpt_exposures WHERE uid=? AND item_id=?",uid,itemId);
   if(!verified||!Array.isArray(results))
     fail("EXPOSURE_NOT_PERSISTED",503);
  },
  async findExposed(uid,ids){
   if(ids.length===0)return [];
   const placeholders=ids.map(()=>"?").join(",");
   const q="SELECT item_id FROM thpt_exposures WHERE uid=? AND item_id IN ("+placeholders+")";
   return (await db.prepare(q).bind(uid,...ids).all()).results||[];
  },
  async claim(uid,bank){
   const attemptId=crypto.randomUUID(),itemIds=bank.items.map(q=>q.item_id);
   const placeholders=itemIds.map(()=>"?").join(",");
   // Single transactional D1 batch. The insert checks exposure at the time
   // of the write, not just at the earlier UI preflight; race -> fail closed.
   const query="INSERT INTO thpt_attempts (id,uid,bank_id,bank_version,item_ids_json) "+
     "SELECT ?,?,?,?,? WHERE NOT EXISTS "+
     "(SELECT 1 FROM thpt_exposures WHERE uid=? AND item_id IN ("+placeholders+")) "+
     "AND NOT EXISTS (SELECT 1 FROM thpt_public_item_registry "+
     "WHERE item_id IN ("+placeholders+")) "+
     "ON CONFLICT(uid,bank_id,bank_version) DO NOTHING";
   const statements=[db.prepare(query).bind(attemptId,uid,bank.id,bank.version,
     JSON.stringify(itemIds),uid,...itemIds,...itemIds)];
   for(const id of itemIds){
    statements.push(db.prepare(
     "INSERT OR IGNORE INTO thpt_exposures (uid,item_id,source_scope) "+
     "SELECT ?,?,? WHERE EXISTS (SELECT 1 FROM thpt_attempts WHERE id=? AND uid=?)")
     .bind(uid,id,bank.scope,attemptId,uid));
   }
   const results=await db.batch(statements);
   if(results[0]?.meta?.changes===1)
     return this.findAttempt(uid,attemptId);
   const prior=await this.getAttempt(uid,bank.id,bank.version);
   return prior||null;
  },
  async finalize(uid,attemptId,response,answers){
   const serialized=JSON.stringify(response);
   // Answers remain private in D1 and are not echoed to a public result;
   // rubric-based written grading must be separately approved.
   await db.prepare("UPDATE thpt_attempts SET result_json=?,responses_json=?,submitted_at=CURRENT_TIMESTAMP "+
    "WHERE id=? AND uid=? AND submitted_at IS NULL")
    .bind(serialized,JSON.stringify(answers),attemptId,uid).run();
   const stored=await this.findAttempt(uid,attemptId);
   if(!stored?.submitted_at||!stored.result_json)
     fail("FINAL_SUBMIT_NOT_PERSISTED",503);
   return JSON.parse(stored.result_json);
  }
 };
}
function json(body,status,origin,allowed){
 const headers={"Content-Type":"application/json; charset=utf-8",
   "Cache-Control":"no-store","Pragma":"no-cache",
   "X-Content-Type-Options":"nosniff","Vary":"Origin"};
 if(origin&&origin===allowed)headers["Access-Control-Allow-Origin"]=origin;
 return new Response(JSON.stringify(body),{status,headers});
}
export default {
 async fetch(request,env){
  const origin=request.headers.get("Origin"),allowed=env.ALLOWED_ORIGIN||"";
  try{
   // Require an exact HTTPS origin, not a URL with path, query or spoofed prefix.
   let trustedOrigin=false;
   try{
     const parsed=new URL(allowed);
     trustedOrigin=parsed.protocol==="https:"&&parsed.origin===allowed&&
       !!parsed.hostname&&parsed.username===""&&parsed.password==="";
   }catch{}
   if(!trustedOrigin||!env.DB||!env.FIREBASE_PROJECT_ID)
      fail("SERVER_NOT_CONFIGURED",503);
   if(origin&&origin!==allowed)fail("ORIGIN_DENIED",403);
   if(request.method==="OPTIONS"){
    return new Response(null,{status:204,headers:{
      "Access-Control-Allow-Origin":allowed,
      "Access-Control-Allow-Headers":"Authorization, Content-Type",
      "Access-Control-Allow-Methods":"POST, OPTIONS",
      "Cache-Control":"no-store","Vary":"Origin"
    }});
   }
   if(request.method!=="POST")fail("METHOD_NOT_ALLOWED",405);
   const url=new URL(request.url);
   if(!["/v1/assessment/start","/v1/assessment/submit",
         "/v1/exposure/record"].includes(url.pathname))
      fail("ROUTE_NOT_FOUND",404);
   const uid=await firebaseUID(request,env);
   const length=Number(request.headers.get("Content-Length")||0);
   if(length>16384)fail("BODY_TOO_LARGE",413);
   let payload;
   try{
    const raw=await request.text();
    if(raw.length>16384)fail("BODY_TOO_LARGE",413);
    payload=JSON.parse(raw);
    if(!payload||typeof payload!=="object"||Array.isArray(payload))
       fail("INVALID_BODY",400);
   }catch(e){if(e instanceof AssessmentError)throw e;fail("INVALID_BODY",400);}
   const service=createAssessmentService(d1Repository(env.DB));
   const output=url.pathname==="/v1/exposure/record"?
      await service.recordExposure(uid,payload.item_id,payload.role,payload.event_kind):
      url.pathname.endsWith("/start")?
      await service.start(uid,payload.bank_id):
      await service.submit(uid,payload.attempt_id,payload.answers);
   return json(output,200,origin,allowed);
  }catch(e){
   const err=e instanceof AssessmentError?e:new AssessmentError("SERVICE_UNAVAILABLE",503);
   return json({error:err.code},err.status,origin,allowed);
  }
 }
};
