#!/usr/bin/env node
"use strict";
/*
  Read-only consistency gate for the 25 independent-check entry pages.
  Compare all explicitly claimed question counts to the actual assessment items.
  Never rewrite questions, render answer keys, or touch learner history.
*/
const assert=require("node:assert/strict");
const fs=require("node:fs");
const path=require("node:path");
const root=path.resolve(__dirname,"..");
const read=rel=>fs.readFileSync(path.join(root,rel),"utf8");
const nav=read("mkdocs.yml");
const targets=[...nav.matchAll(/^\s+- Tự kiểm tra:\s+(kien-thuc\/(\d\d)-[^ \n]+\/tu-kiem-tra\.md)\s*$/gm)].map(m=>({topic:m[2],page:"docs/"+m[1]}));
assert.equal(targets.length,25,"All 25 topic check pages must be inventoried");
const issues=[];
let interactive=0,paper=0,explicitClaims=0;
const rows=[];
for(const target of targets){
 const md=read(target.page);
 const match=md.match(/data-readiness-check-v1="(assets\/data\/assessment\/[^"]+\.json)"/);
 const intro=md.split(/<div data-readiness-check-v1/)[0];
 const claims=[...intro.matchAll(/\b(\d+)\s+câu\b/gi)].map(m=>Number(m[1]));
 if(!match){paper++;rows.push({topic:target.topic,mode:"paper",claimed:claims});continue;}
 interactive++;
 const jsonPath="docs/"+match[1];
 const data=JSON.parse(read(jsonPath));
 if(!Array.isArray(data.items)||data.items.length===0)issues.push(target.topic+": empty/invalid item bank");
 const size=data.items?.length ?? 0;
 for(const n of claims){
  explicitClaims++;
  if(n!==size)issues.push(target.topic+": page says "+n+" questions, source has "+size+" in "+jsonPath);
 }
 const ids=data.items.map(item=>item.id);
 if(new Set(ids).size!==ids.length)issues.push(target.topic+": repeated assessment item IDs");
 rows.push({topic:target.topic,mode:"interactive",sourceCount:size,claimed:claims});
}
assert.equal(interactive+paper,25,"Every topic accounted for");
assert.equal(interactive,21,"Review any change to 21 independent interactive checks");
assert.deepEqual(rows.filter(r=>r.mode==="paper").map(r=>r.topic),["01","22","24","25"],"Paper-only check roles require separate review");
console.log("Math check-source inventory: "+JSON.stringify({interactive,paper,explicitClaims}));
for(const r of rows)console.log([r.topic,r.mode,r.sourceCount??"paper",r.claimed.join(",")||"no count stated"].join(" | "));
if(issues.length)throw new Error("Assessment source-copy mismatch:\n"+issues.join("\n"));
console.log("PASS: all declared check counts match the immutable current question banks. No assessment selection/grade/history changes.");
