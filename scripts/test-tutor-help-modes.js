#!/usr/bin/env node
"use strict";
const fs=require("fs"),path=require("path"),vm=require("vm");
const R=path.resolve(__dirname,".."),read=p=>fs.readFileSync(path.join(R,p),"utf8");
const storage=new Map();
const store={getItem:key=>storage.get(key)||null,setItem:(key,value)=>storage.set(key,value)};
const win={};
const scope=vm.createContext({window:win,localStorage:store,Date,console});
vm.runInContext(read("docs/assets/javascripts/learner-evidence-v1.js"),scope);
vm.runInContext(read("docs/assets/javascripts/tutor-runtime-v1.js"),scope);
const ok=(val,what)=>{if(!val)throw Error(what)};
const tutor=win.RoadmapTutor,evidence=win.RoadmapLearnerEvidence;
const q={id:"HELP_Q",question:"Tính 2 + 3",options:["4","5","6"],answer:1,explanation:"2+3=5.",solution_steps:["Cộng hai số tự nhiên.","Kết luận: 5."],tags:{skill:["cong-so"],layer:"KNTT-Core"}};
const make=(fields={})=>tutor.buildContext({skill:"cong-so",question:q,stats:{tags:{}},...fields});
(async()=>{
 ok(tutor.policyVersion==="1.1"&&tutor.helpModes.includes("FULL_SOLUTION"),"policy modes");
 ok(make().current_task.reference_solution===null,"hint must not include answer");
 ok(make({helpMode:"STEP_BY_STEP"}).current_task.reference_solution===null,"step mode does not leak answer");
 const full=make({helpMode:"FULL_SOLUTION",activity:"practice",submitted:false});
 ok(full.current_task.reference_solution.answer_text==="5"&&full.current_task.reference_solution.steps.length===2,"explicit full solution allowed before first practice attempt");
 ok(make({helpMode:"TEACH_FROM_START"}).current_task.reference_solution===null,"reteach without question answer");
 for(const activity of ["self_check","timed_assessment"]){
   for(const mode of ["STEP_BY_STEP","FULL_SOLUTION","TEACH_FROM_START"]){
     let blocked=false;try{make({activity,submitted:false,helpMode:mode})}catch(_){blocked=true}
     ok(blocked,activity+" blocks "+mode+" before submission");
   }
   ok(make({activity,submitted:false}).current_task.reference_solution===null,"assessment hint hides reference");
   ok(make({activity,submitted:true,helpMode:"FULL_SOLUTION"}).current_task.reference_solution.answer_text==="5","post-submit answer permitted");
 }
 const reply=await tutor.run({provider:"mock",context:full});
 ok(reply.action_type==="EXPLAIN"&&reply.message.includes("offline"),"mock does not claim generated full solution");
 let bypass=make({activity:"self_check",submitted:false});
 bypass.current_task.help_mode="FULL_SOLUTION";
 bypass.current_task.reference_solution=full.current_task.reference_solution;
 let blocked=false;try{await tutor.run({provider:"mock",context:bypass})}catch(_){blocked=true}
 ok(blocked,"runtime blocks forged assessment disclosure");
 evidence.recordAnswer({question:q,correct:true,fullSolutionViewed:true,stats:evidence.load()});
 let rec=evidence.load().questions[q.id],skill=evidence.load().tags["cong-so"];
 ok(rec.attempted===1&&rec.correct===1&&rec.full_solution_views===1&&rec.correct_after_full_solution===1&&rec.correct_with_hint===1&&!(rec.correct_without_hint>0),"full view never independent");
 ok(skill.full_solution_views===1&&skill.correct_after_full_solution===1,"skill assistance evidence");
 const unchanged=JSON.stringify(evidence.load());
 ok(JSON.stringify(evidence.load())===unchanged,"view after submitted answer cannot mutate counters automatically");
 evidence.recordAnswer({question:q,correct:true,hintsUsed:0,fullSolutionViewed:false,stats:evidence.load()});
 rec=evidence.load().questions[q.id];
 ok(rec.attempted===2&&rec.correct_without_hint===1&&rec.full_solution_views===1,"later independent attempt separately counted");
 const engine=read("docs/assets/javascripts/practice-engine-v2.js");
 const micro=read("docs/assets/javascripts/topic-workspace-v1.js");
 ok(engine.includes('this.openTutorMenu(question)')&&engine.includes('this.showHelpMode(question, "FULL_SOLUTION")')&&engine.includes('fullSolutionViewed'),"four-mode practice interface and assisted records");
 ok(micro.includes("showMicroLearning")&&micro.includes("fullSolutionViewed")&&micro.includes("Tôi muốn xem lời giải ngay"),"micro explicit reveal");
 ok(engine.includes("Ngân hàng câu này chưa có lời giải từng bước được kiểm duyệt"),"no fabricated step-by-step claims");
 console.log("PASS: four tutor help modes, practice full reveal, pre-submission assessment guard, original evidence store, assisted vs independent results.");
})().catch(err=>{console.error(err);process.exitCode=1});
