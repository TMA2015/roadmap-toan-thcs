#!/usr/bin/env node
"use strict";
// DELTA_A_UI: verify all reviewed display math is isolated from paragraphs.
const assert=require("node:assert/strict"),fs=require("node:fs"),path=require("node:path");
const root=path.resolve(__dirname,".."),read=p=>fs.readFileSync(path.join(root,p),"utf8");
const expected={15:1,16:4,17:4,18:8},built=process.argv.includes("--built");
for(const [lesson,expectedCount] of Object.entries(expected)){
 const source=read("docs/thpt-preview/sgk/chuong-vi/bai-"+lesson+".md");
 const blocks=[...source.matchAll(/(?:^|\n\n)\\\[\n([\s\S]*?)\n\\\](?=\n\n|$)/g)].map(m=>m[1].trim());
 assert.equal((source.match(/\\\[\n/g)||[]).length,expectedCount,"B"+lesson+": opening delimiters");
 assert.equal((source.match(/\n\\\]/g)||[]).length,expectedCount,"B"+lesson+": closing delimiters");
 assert.equal(blocks.length,expectedCount,"B"+lesson+": display math must have blank lines around it");
 if(built){
  const html=read("site/thpt-preview/sgk/chuong-vi/bai-"+lesson+"/index.html");
  const rendered=[...html.matchAll(/<div class="arithmatex">\\\[([\s\S]*?)\\\]<\/div>/g)].map(m=>m[1].trim());
  assert.equal(rendered.length,expectedCount,"B"+lesson+": math rendered as raw Markdown/TeX");
  assert(!html.includes("\n[\n"),"B"+lesson+": raw display bracket in published HTML");
  for(let i=0;i<blocks.length;i++){
   const text=rendered[i].replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&amp;/g,"&").replace(/&#39;/g,"'");
   assert.equal(text,blocks[i],"B"+lesson+": TeX expression changed during build at block "+(i+1));
  }
 }
 console.log("PASS B"+lesson+": "+expectedCount+" TeX display blocks"+(built?" in HTML":""));
}