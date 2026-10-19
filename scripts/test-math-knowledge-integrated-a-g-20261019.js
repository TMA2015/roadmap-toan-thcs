#!/usr/bin/env node
"use strict";
const assert=require("node:assert/strict"),fs=require("node:fs"),path=require("node:path");
const root=path.resolve(__dirname,"..");
const read=p=>fs.readFileSync(path.join(root,p),"utf8");
const slugs=fs.readdirSync(path.join(root,"docs/kien-thuc"),{withFileTypes:true})
 .filter(x=>x.isDirectory()&&/^\d{2}-/.test(x.name)).map(x=>x.name).sort();
assert.equal(slugs.length,25,"Exactly 25 topic knowledge directories expected");
const waveG=new Set(["08","09","11","12","13","22"]);
const waveAF=new Set(["01","02","03","04","05","06","07","10","14","15","16","17","18","19","20","21","23","24","25"]);
assert.equal(new Set([...waveG,...waveAF]).size,25,"All topics must be unique and covered");
for(const slug of slugs){
 const num=slug.slice(0,2),lesson=read("docs/kien-thuc/"+slug+"/index.md");
 assert.ok((lesson.match(/^## /gm)||[]).length>=10,"Knowledge accordion major sections missing CT"+num);
 assert.ok(waveG.has(num)||waveAF.has(num),"Unreviewed CT"+num);
}
const ct10=read("docs/assets/infographics/10/10-03-ham-bac-nhat-duong-thang.svg");
assert.ok(ct10.includes("Nếu b = 0: B(1;a)."),"CT10 special case not integrated");
const g9=read("scripts/test-kntt-dimension-coverage-g9-v1.js");
for(const marker of ["historicalLongformSource(lock)","historicalLongformText(lock)","restoreHistoricalSource(lock.path,longform)"])
 assert.ok(g9.includes(marker),"Combined Grade-9 CT12/21/23 historical check missing: "+marker);
const geo=read("scripts/test-core13-15-geometry-rollout.js");
assert.ok(geo.includes("originalCt13Headings(require(")&&geo.includes("waveCOriginal(t.n,lesson)"),"Combined CT13/14/15 academic/presentation baseline missing");
const other=read("scripts/test-core16-18-geometry-rollout.js");
for(const marker of ["waveCOriginal16(lesson)","CT17 Wave B source changed","historicalCt18(lesson)"])
 assert.ok(other.includes(marker),"Combined CT16–18 baseline missing: "+marker);
console.log("PASS: integrated 25 knowledge topics A–G, CT10 SVG, CT12/13/14/15/16/17/18/21/23 source locks, H2 accordion boundaries.");
