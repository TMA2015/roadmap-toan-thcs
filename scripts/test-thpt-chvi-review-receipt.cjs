"use strict";
/* Metadata-only independent reconciliation, never a question-answer bank. */
const fs=require("node:fs");
const path=require("node:path");
const assert=require("node:assert/strict");
const root=path.resolve(__dirname,"..");
const receipt=fs.readFileSync(path.join(
 root,"prototypes/thpt/THPT_G10_CHVI_NOTEBOOKLM_ACADEMIC_VERDICT_RECEIPT_20261028.md"
),"utf8");
assert(receipt.includes("CHVI_NOTEBOOKLM_BATCH|REVIEWED"));
assert(receipt.includes("CHVI_REVIEWER_ACADEMIC_OVERALL|PASS"));
assert(receipt.includes("CHVI_REVIEWER_ACADEMIC_CLEARANCE|YES"));
assert(receipt.includes("CHVI_RELEASE_INTEGRATION|PENDING"));
assert(receipt.includes("CHVI_OWNER_MERGE_DEPLOY|NOT_AUTHORIZED"));
const rows=[...receipt.matchAll(/^\| \`([A-Za-z0-9-]+)\` \| (CORE_OR_PRACTICE|SGK_CHAPTER_READINESS_HELDOUT|WRITTEN_OR_ANCHOR) \| (REVIEWED_R4_PRIOR|REVIEWED_CHVI_BATCH_20261028) \|$/gm)];
const ids=rows.map(m=>m[1]);
assert.equal(ids.length,54,"Reviewer receipt must contain exactly 54 canonical IDs");
assert.equal(new Set(ids).size,54,"Reviewer receipt may not repeat a canonical item ID");
const count=role=>rows.filter(m=>m[2]===role).length;
assert.equal(count("CORE_OR_PRACTICE"),28);
assert.equal(count("SGK_CHAPTER_READINESS_HELDOUT"),18);
assert.equal(count("WRITTEN_OR_ANCHOR"),8);
assert.equal(rows.filter(m=>m[3]==="REVIEWED_R4_PRIOR").length,4);
const lessons=[15,16,17,18];
const outCounts=[5,5,5,4];
for(let i=0;i<lessons.length;i++){
 assert(receipt.includes("| B"+lessons[i]+" ·"),"Missing lesson outcome count "+lessons[i]);
 const safeCount=receipt.match(new RegExp("^\\| B"+lessons[i]+" ·[^\\n]*\\| "+outCounts[i]+" \\|$","m"));
 assert(safeCount,"Reviewer outcome reconciliation for B"+lessons[i]+" must remain "+outCounts[i]);
}
assert(receipt.includes("**19**"),"Outcome count must reflect 19 rather than mistaken prose 18");
assert(receipt.includes("DELTA_A_METADATA_ONLY"),"Receipt metadata correction must be scoped");
assert(!/\*\*Đề:\*\*|\*\*Đáp án:\*\*/.test(receipt),
 "Public reviewer receipt must not publish held-out questions or keys");
console.log("PASS THPT ChVI external NotebookLM receipt metadata: 54 unique IDs; 28+18+8; 4 old B16; 19 academic outcomes; no released readiness stems/keys.");
