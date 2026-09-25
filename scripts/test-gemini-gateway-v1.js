#!/usr/bin/env node
"use strict";
const fs=require("fs"),path=require("path"),assert=require("assert/strict");
const root=path.resolve(__dirname,"..");
const src=fs.readFileSync(path.join(root,"workers/gemini-tutor/src/index.js"),"utf8");
const cfg=JSON.parse(fs.readFileSync(path.join(root,"docs/assets/data/tutor-provider-config.json"),"utf8"));
assert.equal(cfg.enabled,false,"public Gemini remains disabled until owner adds secrets");
const ok=(v,m)=>{if(!v)throw Error(m)};
(async()=>{
 const worker=(await import("data:text/javascript;base64,"+Buffer.from(src).toString("base64"))).default;
 const oldFetch=global.fetch;let googleRequest=null,turnstileCalls=0;
 const limiter={limit:async()=>({success:true})};
 const env={ALLOWED_ORIGIN:"https://tma2015.github.io",TURNSTILE_HOSTNAME:"tma2015.github.io",GEMINI_MODEL:"gemini-3.8-flash",GEMINI_API_KEY:"UNIT_TEST_SECRET",TURNSTILE_SECRET:"UNIT_TEST_TURNSTILE",USER_RATE_LIMITER:limiter,SITE_RATE_LIMITER:limiter};
 global.fetch=async(url,options)=>{
  if(String(url).includes("siteverify")){turnstileCalls++;return new Response(JSON.stringify({success:true,hostname:"tma2015.github.io",action:"tutor"}),{status:200})}
  googleRequest={url:String(url),headers:options.headers,body:JSON.parse(options.body)};
  return new Response(JSON.stringify({candidates:[{content:{parts:[{text:"Lời giải toán kiểm thử."}]}}]}),{status:200});
 };
 const q={text:"Tính 2+3?",options:["4","5"],answer_index:1,explanation:"2+3=5.",solution_steps:["Cộng 2 và 3."]};
 const make=(mode="HINT",activity="practice",submitted=false,origin="https://tma2015.github.io")=>new Request("https://tutor.example/v1/tutor",{method:"POST",headers:{"Origin":origin,"content-type":"application/json","CF-Connecting-IP":"203.0.113.7"},body:JSON.stringify({mode,activity,submitted,question:q,turnstileToken:"UNIT_TEST_TOKEN"})});
 try{
  let r=await worker.fetch(make("HINT","practice",false,"https://evil.example"),env);
  ok(r.status===403&&turnstileCalls===0,"origin refusal before provider");
  r=await worker.fetch(make("FULL_SOLUTION","self_check",false),env);
  ok(r.status===403&&turnstileCalls===0,"assessment answer prevented before verification/provider");
  r=await worker.fetch(make(),{...env,GEMINI_API_KEY:null});
  ok(r.status===503,"no key fails closed");
  r=await worker.fetch(make(),env);
  ok(r.status===200,"validated hint request");
  ok(!googleRequest.body.contents[0].parts[0].text.includes("answer_index"),"hint does not send answer to Gemini");
  ok(googleRequest.headers["x-goog-api-key"]==="UNIT_TEST_SECRET","secret stays in Worker upstream header");
  r=await worker.fetch(make("FULL_SOLUTION"),env);
  ok(r.status===200&&googleRequest.body.contents[0].parts[0].text.includes("answer_index"),"explicit full reveal sends reference only to provider");
  r=await worker.fetch(make("FULL_SOLUTION","self_check",true),env);
  ok(r.status===200,"post-submission explanation allowed");
  r=await worker.fetch(make("HINT"),{...env,USER_RATE_LIMITER:{limit:async()=>({success:false})}});
  ok(r.status===429,"rate limit before calling provider");
  global.fetch=async()=>new Response(JSON.stringify({success:false,hostname:"tma2015.github.io",action:"tutor"}),{status:200});
  r=await worker.fetch(make(),env);
  ok(r.status===403,"invalid Turnstile blocked");
  console.log("PASS Gemini gateway: disabled by default, origin, secret, assessment, Turnstile, rate-limit and conditional answer disclosure.");
 }finally{global.fetch=oldFetch}
})().catch(e=>{console.error(e);process.exitCode=1});
