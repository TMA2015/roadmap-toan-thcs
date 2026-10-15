#!/usr/bin/env node
"use strict";
/* Enforce 75 immutable paper source headings before any archived block removal.
   This inventories source references only; it does not grade or migrate learners. */
const assert=require("node:assert/strict");
const fs=require("node:fs");
const read=p=>fs.readFileSync(p,"utf8");
const ledger=JSON.parse(read("docs/collaboration/math-four-topic-legacy-complete-inventory-r1.json"));
assert.equal(ledger.schema,"math-legacy-four-topic-complete-inventory-r1");
assert.equal(ledger.scope.unique_items,75);
const topics={"CT02":16,"CT03":12,"CT04":13,"CT21":34};
const ids=new Set(), files=new Map(), counts={};
let occurrences=0, w1=0, notYetReviewed=0;
const headingPattern=/^#{2,5}\s+((?:\d{2}-(?:G\d-WR|WR|M[1-4]|SUP|ENT|CH)-\d+))(?:\b|[ ·–])/gm;
for(const row of ledger.entries){
 assert.match(row.source_id,/^\d{2}-(?:G\d-WR|WR|M[1-4]|SUP|ENT|CH)-\d+$/);
 assert(!ids.has(row.source_id),"duplicate ledger source "+row.source_id);ids.add(row.source_id);
 assert(Object.hasOwn(topics,row.topic_id),"nonpilot topic "+row.topic_id);
 assert(row.source_id.startsWith(row.topic_id.slice(2)),"topic mismatch "+row.source_id);
 const file=row.source_file;
 if(!files.has(file)){
   const text=read(file);
   const found=[...text.matchAll(headingPattern)].map(m=>m[1]);
   files.set(file,{found,text});
 }
 const found=files.get(file).found;
 const actualOccurrences=found.filter(id=>id===row.source_id).length;
 assert.equal(actualOccurrences,row.source_heading_occurrences,"source heading count changed "+row.source_id);
 assert(actualOccurrences>=1,"original heading missing "+row.source_id);
 assert(files.get(file).text.includes(row.source_heading),"canonical authored heading drift "+row.source_id);
 occurrences+=actualOccurrences;counts[row.topic_id]=(counts[row.topic_id]||0)+1;
 if(row.review_wave==="W1_19_REPRESENTATIVE")w1++;
 if(row.review_status!=="ACADEMIC_APPROVED")notYetReviewed++;
 // Explicit independent receipt+approved destination+link+owner gate for any removal.
 if(row.removal_permission==="APPROVED"){
   assert.equal(row.review_status,"ACADEMIC_APPROVED","cannot retire unreviewed source "+row.source_id);
   assert(row.canonical_replacement_id && row.independent_academic_receipt && row.valid_historical_link===true && row.owner_accepted===true,
          "legacy removal lacks complete verified gates "+row.source_id);
 }else{
   assert.equal(row.removal_permission,"BLOCKED","unknown removal state "+row.source_id);
   assert.equal(row.old_page_visibility,"PRESERVE","unreviewed legacy source hidden "+row.source_id);
 }
}
assert.deepEqual(counts,topics,"pilot source coverage changed");
assert.equal(occurrences,ledger.scope.legacy_heading_occurrences);
assert.equal(w1,19);
assert.equal(notYetReviewed,75,"explicit independent W1 review receipt required before approval; update gate after owner acceptance");
for(const [file,{found}] of files){
 const unique=[...new Set(found)];
 const registered=ledger.entries.filter(row=>row.source_file===file).map(row=>row.source_id);
 assert.deepEqual(unique,registered,"source has new, missing or reordered problem headings: "+file);
}
console.log("PASS complete legacy inventory: 75/75 authored source IDs, 80 source heading occurrences, 19 W1 candidates and 56 pending triage; zero unauthorized retirements.");
console.log("BOUNDARY: cannot hide entire old paper section until all 75 have audited destinations and QA.");
