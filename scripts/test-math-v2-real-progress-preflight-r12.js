#!/usr/bin/env node
"use strict";
const assert=require("node:assert/strict");
const fs=require("node:fs");
const page=fs.readFileSync("docs/qa/math-v2-cutover-preflight.html","utf8");
const progress=fs.readFileSync("docs/tien-do-hoc-tap/index.md","utf8");
const backup=fs.readFileSync("docs/assets/javascripts/local-progress-backup-v1.js","utf8");
assert(page.includes('name="robots" content="noindex,nofollow"'));
assert(page.includes('src="../assets/javascripts/local-progress-backup-v1.js"'));
assert(page.includes("backup.buildBackup(localStorage)"));
assert(page.includes("backup.validateBackup(doc)"));
assert(page.includes("backup.collect(localStorage)"));
assert(page.includes('verified.schema!=="self-learning-math-local-backup-v1"'));
assert(page.includes("if(start!==end)"),"concurrent change guard missing");
assert(page.includes("if(exactSignature()!==signature)"),"stale backup download guard missing");
assert(!/localStorage\s*\.\s*(setItem|removeItem|clear)\s*\(/.test(page),
  "R12 MUST NEVER write or erase learner localStorage");
assert(!/indexedDB\s*\.\s*(open|deleteDatabase)\s*\(/.test(page),
  "R12 MUST NEVER open or erase any learner evidence DB");
assert(!/fetch\s*\(|XMLHttpRequest|sendBeacon\s*\(/.test(page),
  "R12 must not send student backup data to a server");
assert(progress.includes('../qa/math-v2-cutover-preflight.html'));
assert(backup.includes('const SCHEMA="self-learning-math-local-backup-v1"'));
assert(!page.includes('MathV2JournalR6'),"QA R11 evidence journal is not a real learner backup");
console.log("PASS Math R12: read-only real-progress preflight, scoped backup source, no storage writes/network/cutover.");
