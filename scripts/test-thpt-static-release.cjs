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
for(const config of [main,preview]){
 for(const forbidden of ["thpt-protected-readiness-v1.js","thpt-formative-exposure-v1.js",
   "services/thpt-readiness","test-thpt-readiness-worker-auth",
   "test-thpt-readiness-d1-schema","test-thpt-readiness-secure"]){
  assert(!config.includes(forbidden),"Unapproved private assessment dependency: "+forbidden);
 }
}
// Negative tests in CI may mention old filenames deliberately to ensure
// absence from the built output; that is not a runtime dependency.
assert(quality.includes("test ! -e site/assets/javascripts/thpt-protected-readiness-v1.js"),
 "CI should assert that the retired backend client is absent from static output");
assert(!browser.includes("THPT_PROTECTED_AUTH"),"Browser regression still exercises learner accounts");
const readiness=read("docs/thpt-preview/sgk/chuong-vi/tu-kiem-tra-chuong.md");
assert(readiness.includes('data-g10-chapter-selfcheck="CHVI"')&&readiness.includes("Final Submit")&&
 readiness.includes("không tự động ghi điểm thành thạo"),
 "G10 ChVI self-check must use reviewed Final Submit route with no Mastery writes");
const releaseRunner=read("docs/assets/javascripts/thpt-g10-reviewed-selfcheck-v1.js");
assert(releaseRunner.includes("mastery_credit")&&releaseRunner.includes("persist_results")&&
 !releaseRunner.includes("localStorage.setItem")&&!releaseRunner.includes("sessionStorage.setItem"),
 "Readiness client must keep storage/Mastery disabled");
assert(read("docs/assets/javascripts/thpt-r4-preview.js").includes("thpt-r4-route"),
 "THPT-only R4 scoping removed");
console.log("PASS THPT GitHub Pages first-phase static release: routes/assets, Gemini retained, no student auth/backend, G10 reviewed self-check no-Mastery scope.");
