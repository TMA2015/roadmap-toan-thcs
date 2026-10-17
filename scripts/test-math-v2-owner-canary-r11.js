#!/usr/bin/env node
"use strict";
const fs=require("node:fs");
const assert=require("node:assert/strict");
const pairs=[
 ["scripts/prototypes/math-v2-idb-journal-r6.js","docs/qa/math-v2-canary/math-v2-idb-journal-r6.js"],
 ["scripts/prototypes/math-v2-journal-first-submit-r8.js","docs/qa/math-v2-canary/math-v2-journal-first-submit-r8.js"],
 ["scripts/prototypes/math-v2-journal-dashboard-projection-r9.js","docs/qa/math-v2-canary/math-v2-journal-dashboard-projection-r9.js"],
 ["scripts/prototypes/math-v2-journal-backup-r10.js","docs/qa/math-v2-canary/math-v2-journal-backup-r10.js"]
];
const html=fs.readFileSync("docs/qa/math-v2-owner-canary.html","utf8");
const config=fs.readFileSync("mkdocs.yml","utf8");
for(const [source,target] of pairs){
 assert.equal(fs.readFileSync(target,"utf8"),fs.readFileSync(source,"utf8"),"R11 published QA mirror diverged: "+source);
 assert(html.includes('src="./math-v2-canary/'+target.split("/").pop()+'"'),"Page missing "+target);
 assert(!config.includes('qa/math-v2-canary/'+target.split("/").pop()),"QA module must never join global learner scripts");
}
assert(html.includes('name="robots" content="noindex,nofollow"'));
assert(html.includes('SCOPE="QA_OWNER_R11"'));
assert(html.includes("window.MathV2JournalFirstR8.create"));
assert(html.includes("window.MathV2JournalBackupR10.create"));
assert(html.includes("window.MathV2JournalDashboardR9.project"));
assert(html.includes('data-kind="info"'));
assert(!config.includes("qa/math-v2-owner-canary.html"),"QA page must not be in main navigation");
console.log("PASS Math R11: exact-source-mirrored R6/R8/R9/R10 QA-only modules; no global loader/nav integration.");
