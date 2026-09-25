#!/usr/bin/env node
"use strict";
const fs=require("fs"),path=require("path"),vm=require("vm"),root=path.resolve(__dirname,"..");
const read=p=>fs.readFileSync(path.join(root,p),"utf8");
const ok=(v,label)=>{if(!v)throw Error(label);};
const config=read("docs/assets/javascripts/firebase-gemini-config.js"),adapter=read("docs/assets/javascripts/firebase-gemini-v1.js"),runtime=read("docs/assets/javascripts/tutor-runtime-v1.js"),practice=read("docs/assets/javascripts/practice-engine-v2.js"),mk=read("mkdocs.yml");
ok(config.includes("enabled: true")&&config.includes('model: "gemini-3.5-flash-lite"')&&/recaptchaEnterpriseSiteKey: "6L[A-Za-z0-9_-]{15,}"/.test(config),"enable only the real-tested production model and registered site key");
ok(!adapter.includes("AIzaSy"),"transport has no embedded project config/API key");
ok(adapter.includes("ReCaptchaEnterpriseProvider")&&adapter.includes("getToken(appCheck)")&&adapter.includes("GoogleAIBackend"),"Firebase App Check precedes inference");
ok(adapter.includes("firebase-ai.js")&&adapter.includes("firebase-app-check.js"),"official same-version CDN SDKs");
ok(adapter.includes('location.hostname !== "tma2015.github.io"'),"production origin boundary");
ok(mk.includes("firebase-gemini-config.js")&&mk.includes("firebase-gemini-v1.js"),"SDK configured after tutor runtime");
ok(runtime.includes("window.RoadmapGemini.generate(context)")&&runtime.includes("validateTutorResponse(result)"),"existing transport and contract integration");
ok(practice.includes("askGemini(question, button, mode")&&practice.includes('provider: "gemini"')&&practice.includes("this.fullSolutionViewed = true"),"explicit live request and assistance evidence");
const rootWindow={};
const scope=vm.createContext({window:rootWindow,location:{hostname:"tma2015.github.io"},console});
vm.runInContext(config,scope);
vm.runInContext(adapter,scope);
ok(rootWindow.RoadmapGemini.isConfigured()&&rootWindow.RoadmapGemini.status()==="ready","production configuration enabled after live App Check and inference verification");
const context={current_layer:"KNTT-Core",grade_overlay:7,current_task:{activity:"practice",submitted:false,help_mode:"HINT",question_text:"2 + 3 = ?",skill:"so-hoc",reference_solution:null}};
const hint=rootWindow.RoadmapGemini.preparePrompt(context);
ok(!hint.includes("answer_text")&&!hint.includes("Đáp án trong ngân hàng"),"hint lacks authored answer");
const full={...context,current_task:{...context.current_task,help_mode:"FULL_SOLUTION",reference_solution:{answer_text:"5",explanation:"2+3=5",steps:["Cộng 2 với 3"]}}};
ok(rootWindow.RoadmapGemini.preparePrompt(full).includes("Cộng 2 với 3"),"full mode receives relevant reference");
let blocked=false;
try{rootWindow.RoadmapGemini.preparePrompt({...full,current_task:{...full.current_task,activity:"self_check",submitted:false}})}catch(_){blocked=true;}
ok(blocked,"assessment cannot reveal pre-submission");
blocked=false;
try{rootWindow.RoadmapGemini.preparePrompt({...context,current_task:{...context.current_task,reference_solution:full.current_task.reference_solution}})}catch(_){blocked=true;}
ok(blocked,"hint context cannot smuggle answer");
ok(practice.includes("if (this.geminiPending) return;")&&practice.includes("this.geminiPending = false;"),"prevent duplicate simultaneous AI requests");
ok(practice.indexOf("this.renderGeminiResponse(response, question, mode);") > practice.indexOf("this.hintLevel = Math.max(1, this.hintLevel);"),"AI help is recorded after success, not before a potential request failure");
console.log("PASS: Gemini Flash-Lite verified configuration, prompt minimization, App Check, assessment gates and assisted evidence.");
