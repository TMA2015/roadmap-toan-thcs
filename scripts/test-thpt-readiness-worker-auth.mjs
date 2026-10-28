"use strict";
/* Offline signed-JWT integration test for Cloudflare Worker authorization.
 * Synthetic key/token and disabled synthetic bank; NO real learner account,
 * no actual Firebase access or academic held-out assessment content.
 */
import assert from "node:assert/strict";
import worker from "../services/thpt-readiness/worker.mjs";
import {webcrypto} from "node:crypto";

const subtle=webcrypto.subtle;
const now=Math.floor(Date.now()/1000);
const project="synthetic-thpt-project";
const allowed="https://thpt.qa.example";
const base="https://worker.qa.example";
const kp=await subtle.generateKey({name:"RSASSA-PKCS1-v1_5",
  modulusLength:2048,publicExponent:new Uint8Array([1,0,1]),
  hash:"SHA-256"},true,["sign","verify"]);
const jwk=await subtle.exportKey("jwk",kp.publicKey);
jwk.kid="qa-only-key";jwk.alg="RS256";jwk.use="sig";
function b64url(bytes){
 return Buffer.from(bytes).toString("base64url");
}
async function sign(payload){
 const head=b64url(Buffer.from(JSON.stringify({alg:"RS256",typ:"JWT",kid:"qa-only-key"})));
 const body=b64url(Buffer.from(JSON.stringify(payload)));
 const data=head+"."+body;
 const sig=new Uint8Array(await subtle.sign("RSASSA-PKCS1-v1_5",kp.privateKey,
   new TextEncoder().encode(data)));
 return data+"."+b64url(sig);
}
const standard={
 aud:project,iss:"https://securetoken.google.com/"+project,
 sub:"synthetic_learner_A",iat:now-15,auth_time:now-100,exp:now+3600
};
const jwt=await sign(standard);
const realFetch=globalThis.fetch;
let jwksCalls=0;
globalThis.fetch=async url=>{
 assert.equal(url,"https://www.googleapis.com/service_accounts/v1/jwk/securetoken@system.gserviceaccount.com",
  "Worker must fetch only the expected official identity signing keys");
 jwksCalls++;
 return new Response(JSON.stringify({keys:[jwk]}),
  {status:200,headers:{"Content-Type":"application/json"}});
};
let dbReads=0, protectedBankReads=0, learnerAdmission="active";
const db={
 prepare(sql){
  dbReads++;
  return {
   bind(...args){
    return {
     async first(){
      if(sql.startsWith("SELECT id,scope,version,required_count,active FROM thpt_banks")){
       assert.equal(args[0],"SYNTHETIC-DISABLED-BANK");
       return {id:args[0],scope:"SGK_CHAPTER",version:"v1",required_count:2,active:0};
      }
      throw Error("Unexpected preflight D1 SQL: "+sql);
     },
     async all(){throw Error("Disabled bank should not fetch questions");}
    };
   }
  };
 }
};
const env={DB:db,FIREBASE_PROJECT_ID:project,ALLOWED_ORIGIN:allowed};
async function call({token=jwt,origin=allowed,body={bank_id:"SYNTHETIC-DISABLED-BANK"},
 method="POST",envOverride=env,path="/v1/assessment/start"}={}){
 const headers={"Content-Type":"application/json"};
 if(origin!==null)headers.Origin=origin;
 if(token!==null)headers.Authorization="Bearer "+token;
 return worker.fetch(new Request(base+path,{
  method,headers,...(method==="POST"?{body:JSON.stringify(body)}:{})
 }),envOverride);
}
try{
 const correct=await call();
 assert.equal(correct.status,503);
 assert.equal((await correct.json()).error,"BANK_NOT_AVAILABLE",
   "Verified Firebase JWT must reach disabled-bank gate (jwksCalls="+jwksCalls+", dbReads="+dbReads+")");
 assert.equal(jwksCalls,1,"Expected one synthetic public-key lookup");
 const forged=jwt.slice(0,-3)+"AAA";
 let res=await call({token:forged});
 assert.equal(res.status,401);
 assert.equal((await res.json()).error,"INVALID_TOKEN");
 res=await call({token:null});
 assert.equal(res.status,401);
 assert.equal((await res.json()).error,"AUTH_REQUIRED");
 res=await call({token:await sign({...standard,aud:"wrong-project"})});
 assert.equal(res.status,401);
 assert.equal((await res.json()).error,"INVALID_TOKEN");
 res=await call({token:await sign({...standard,exp:now-5})});
 assert.equal(res.status,401);
 assert.equal((await res.json()).error,"INVALID_TOKEN");
 res=await call({token:await sign({...standard,iat:now+600})});
 assert.equal(res.status,401);
 assert.equal((await res.json()).error,"INVALID_TOKEN");
 res=await call({origin:"https://attacker.qa.example"});
 assert.equal(res.status,403);
 assert.equal((await res.json()).error,"ORIGIN_DENIED");
 res=await call({origin:null,token:null});
 assert.equal(res.status,401,"No Origin header is not an auth bypass");
 const preflight=await call({method:"OPTIONS",token:null});
 assert.equal(preflight.status,204);
 assert.equal(preflight.headers.get("Access-Control-Allow-Origin"),allowed);
 res=await call({envOverride:{...env,ALLOWED_ORIGIN:allowed+"/path"}});
 assert.equal(res.status,503,"An allowed Origin containing a path is invalid");
 res=await call({envOverride:{...env,ALLOWED_ORIGIN:allowed+"?x=1"}});
 assert.equal(res.status,503,"An allowed Origin containing a query is invalid");
 res=await call({path:"/v1/admin/read-scores"});
 assert.equal(res.status,404);
 assert.equal((await res.json()).error,"ROUTE_NOT_FOUND");
 assert.equal(jwksCalls,1,"Signed verification should cache synthetic JWK by kid");
 console.log("PASS THPT Worker signed JWT QA: real RS256 signature, project/audience, expiration, future-issued, auth absent, blocked origin, strict origin settings, CORS and disabled-bank gate. Synthetic only; not production auth.");
}finally{
 globalThis.fetch=realFetch;
}
