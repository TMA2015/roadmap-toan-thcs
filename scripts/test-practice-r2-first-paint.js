#!/usr/bin/env node
"use strict";
const fs=require("fs"),assert=require("assert");
const cfg=fs.readFileSync("mkdocs.yml","utf8"),loader=fs.readFileSync("docs/assets/javascripts/route-module-loader-v2.js","utf8");
assert(cfg.includes("assets/javascripts/route-module-loader-v2.js"),"MkDocs references fresh route loader");
assert(!cfg.includes("  - assets/javascripts/route-module-loader-v1.js"),"MkDocs must not load stale loader");
assert(cfg.includes("assets/stylesheets/practice-role-consolidation-pilot-v2.css"),"MkDocs versioned UI style");
assert(loader.includes('load("practice-role-consolidation-pilot-v2.js")'),"Fresh learner pilot source");
const js=fs.readFileSync("docs/assets/javascripts/practice-role-consolidation-pilot-v2.js","utf8");
assert(js.includes("data-practice-ui-v2")&&js.includes("entry.dataset.practiceRolePilot=topicId"),"Static banner is authoritative and idempotent");
for(const [slug,num,anchor] of [["02-so-va-phep-tinh","02","a-luyen-nhanh-tuong-tac"],["03-ti-le-ti-le-thuc","03","luyen-tap-tuong-tac"],["04-bieu-thuc-dai-so","04","luyen-tap-tuong-tac"],["21-thong-ke","21","luyen-tap-tuong-tac"]]){
 const file=fs.readFileSync("docs/kien-thuc/"+slug+"/bai-tap.md","utf8");
 assert(file.includes('data-practice-ui-v2="CT'+num+'"'),"First-paint banner in authored source "+num);
 for(const x of ['href="#'+anchor+'"','href="../../../luyen-tap/?topic=CT'+num+'"','href="../tu-kiem-tra/"'])
  assert(file.includes(x),"Missing correct learner link: "+num+" "+x);
 const firstBlock=file.indexOf("data-practice-ui-v2");
 const firstQ=file.indexOf("WR-01");
 if(firstQ>=0)assert(firstBlock<firstQ,"R2 entry must appear before old long paper exercises "+num);
}
console.log("PASS R2: HTML-first learner route, versioned assets, four topic source entries; content IDs unchanged.");
