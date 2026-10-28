"use strict";
/* Static Math release guard: no learner accounts, no login-bound assessment,
 * no Worker/D1 backend. Keep Gemini AI transport and accepted THCS shell.
 */
const fs=require("node:fs");
const path=require("node:path");
const assert=require("node:assert/strict");
const root=path.resolve(__dirname,"..");
const read=p=>fs.readFileSync(path.join(root,p),"utf8");
const main=read("mkdocs.yml");
const preview=read("mkdocs.thpt-preview.yml");
const quality=read(".github/workflows/thpt-r4-preview-quality.yml");
const browser=read("scripts/test-thpt-r4-preview-browser.js");
for(const p of [
 "thpt-preview/index.md",
 "thpt-preview/home.md",
 "thpt-preview/sgk/chuong-vi/bai-15.md",
 "thpt-preview/sgk/chuong-vi/bai-16.md",
 "thpt-preview/sgk/chuong-vi/bai-17.md",
 "thpt-preview/sgk/chuong-vi/bai-18.md",
 "thpt-preview/sgk/chuong-vi/tu-kiem-tra-chuong.md",
 "thpt-preview/chuyen-de/ham-so/kien-thuc.md",
 "thpt-preview/chuyen-de/ham-so/luyen-tap.md",
 "thpt-preview/chuyen-de/ham-so/tu-kiem-tra.md"
])assert(main.includes(p),"THPT main navigation is missing "+p);
for(const asset of [
 "assets/stylesheets/thpt-r4-preview.css",
 "assets/javascripts/thpt-chvi-reviewed-formative-v1.js",
 "assets/javascripts/thpt-r4-preview.js",
 "assets/javascripts/firebase-gemini-v1.js"
])assert(main.includes(asset),"Required static asset missing: "+asset);
for(const config of [main,preview,quality]){
 for(const forbidden of ["thpt-protected-readiness-v1.js","thpt-formative-exposure-v1.js",
   "services/thpt-readiness","test-thpt-readiness-worker-auth",
   "test-thpt-readiness-d1-schema","test-thpt-readiness-secure"]){
  assert(!config.includes(forbidden),"Unapproved private assessment dependency: "+forbidden);
 }
}
assert(!browser.includes("THPT_PROTECTED_AUTH"),"Browser regression still exercises learner accounts");
const readiness=read("docs/thpt-preview/sgk/chuong-vi/tu-kiem-tra-chuong.md");
assert(readiness.includes("TECHNICAL_DEMO_ONLY")&&readiness.includes("mastery_credit: false"),
 "Unreviewed demo must remain clearly non-credit");
assert(read("docs/assets/javascripts/thpt-r4-preview.js").includes("thpt-r4-route"),
 "THPT-only R4 scoping removed");
console.log("PASS THPT GitHub Pages first-phase static release: routes/assets, Gemini retained, no student auth/backend, Readiness demo clearly no credit.");
