#!/usr/bin/env node
"use strict";
/* Safe repo-name migration: old + new PROJECT PAGE PATHS, same hostname/origin.
 * This is a preflight on the existing repo, NOT approval for a rename/deploy.
 * No student accounts, no renamed storage schema, no new backend.
 */
const assert=require("node:assert/strict");
const fs=require("node:fs");
const path=require("node:path");
const root=path.resolve(__dirname,"..");
const read=p=>fs.readFileSync(path.join(root,p),"utf8");
const oldName="roadmap-toan-thcs",newName="self-learning-math";
const scripts=path.join(root,"docs/assets/javascripts");
const assets=fs.readdirSync(scripts).filter(n=>n.endsWith(".js"));
let routeAware=0;
for(const name of assets){
 const code=fs.readFileSync(path.join(scripts,name),"utf8");
 if(!code.includes(oldName))continue;
 routeAware++;
 assert(code.includes(newName),
   "ACTIVE runtime still hardcodes ONLY the old GitHub Pages repository name: "+name);
}
assert(routeAware>=9,"Route prefix review missed previously identified runtime files");
for(const p of ["sticky-nav-v1.js","floating-ai-tutor-v1.js",
  "route-module-loader-v2.js","route-module-loader-v1.js",
  "anchor-library-v1.js","anchor-topic-related-v1.js",
  "model-examples-library-v1.js","topic25-exam-engine-v1.js",
  "written-exercise-library-v1.js"]){
 const code=fs.readFileSync(path.join(scripts,p),"utf8");
 assert(code.includes(oldName)&&code.includes(newName),
   "Must support both legacy/new routes in "+p);
}
const config=read("docs/assets/javascripts/firebase-gemini-config.js");
const provider=read("docs/assets/javascripts/firebase-gemini-v1.js");
assert(config.includes("roadmap-toan-ai")&&provider.includes("roadmap-toan-ai"),
 "Do not silently replace or re-provision existing Firebase Gemini AI transport");
assert(provider.includes('location.hostname !== "tma2015.github.io"'),
 "GitHub Pages hostname/App Check source boundary must stay unchanged");
assert(provider.includes("ReCaptchaEnterpriseProvider"),
 "App Check integration must remain active");
assert(!provider.includes("firebase-auth")&&!provider.includes("firebase-firestore"),
 "Repo rename must not introduce learner auth or a database");
const storage=read("docs/assets/javascripts/local-progress-backup-v1.js");
assert(storage.includes("toan-thcs-practice-v1")&&storage.includes("roadmap:exam-history-v1"),
 "Do not rename localStorage/IndexedDB/history keys during repository rename");
const main=read("mkdocs.yml"),preview=read("mkdocs.thpt-preview.yml");
const deploy=read(".github/workflows/deploy.yml");
assert(main.includes("site_name: Self-Learning Math"),"Public brand already is Self-Learning Math");
assert(!/site_url:\s*https?:\/\/\S*roadmap-toan-thcs/.test(main),
 "MkDocs must not hardcode old Pages URL");
assert(preview.includes("INHERIT: mkdocs.yml")&&preview.includes("thpt-preview/home.md"),
 "THPT must use the same MkDocs platform and separate R4 navigation");
assert(deploy.includes("assemble-thpt-site.cjs")&&deploy.includes("ghp-import"),
 "Keep a single verified GitHub Pages artifact");
assert(read("docs/thpt-preview/index.md").includes("Chọn hành trình Toán"),
 "Programme cover must remain accessible after rename");
const styles=path.join(root,"docs/assets/stylesheets");
for(const name of fs.readdirSync(styles).filter(n=>n.endsWith(".css"))){
 const code=fs.readFileSync(path.join(styles,name),"utf8");
 assert(!code.includes("/roadmap-toan-thcs/"),
   "CSS hardcodes old project path: "+name);
}
// Published learner pages may not point specifically to the old Pages URL.
// Historic review/checkpoint files are excluded deliberately.
const liveDirs=["docs/kien-thuc","docs/thpt-preview","docs/hoc-theo-lop",
 "docs/luyen-tap","docs/ai","docs/ban-do-ky-nang","docs/roadmap","docs/tien-do-hoc-tap"];
const liveFiles=["docs/index.md"];
const walk=dir=>{
 if(!fs.existsSync(dir))return [];
 return fs.readdirSync(dir,{withFileTypes:true}).flatMap(ent=>
   ent.isDirectory()?walk(path.join(dir,ent.name)):
   ent.isFile()&&ent.name.endsWith(".md")?[path.join(dir,ent.name)]:[]);
};
for(const d of liveDirs)liveFiles.push(...walk(path.join(root,d)).map(p=>path.relative(root,p)));
let oldPublishedLinks=0;
for(const p of liveFiles){
 const source=read(p);
 const bad=/(?:href\s*=\s*["']|src\s*=\s*["']|\]\()\s*(?:https:\/\/tma2015\.github\.io)?\/roadmap-toan-thcs\//gi;
 const matches=[...source.matchAll(bad)];
 if(matches.length){oldPublishedLinks+=matches.length;console.error("Old absolute learner link: "+p+" ("+matches.length+")");}
}
assert.equal(oldPublishedLinks,0,"Replace absolute old-path learner-facing links before rename");
console.log("PASS rename preflight: "+assets.length+" JS runtime files, "+routeAware+
 " dual-prefix modules, "+liveFiles.length+" learner pages, shared Gemini origin, old storage schemas, same MkDocs + GitHub Pages.");
console.log("NOTE: This is compatibility QA, not an actual GitHub rename, live Gemini call, redirect, or final owner UAT.");
