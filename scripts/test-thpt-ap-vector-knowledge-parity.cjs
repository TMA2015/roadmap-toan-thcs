#!/usr/bin/env node
"use strict";
const assert=require("node:assert/strict");
const fs=require("node:fs");
const path=require("node:path");

const checks=[
 ["bai-7.md",9,"bcee085f","8282bab6","f5f29b03",5],
 ["bai-8.md",10,"e7848abf","35c7ba92","9864ed0e",5],
 ["bai-10.md",24,"fe5bcbec","5c31ec21","3f51daea",4]
];
const hash=s=>{let h=2166136261;for(let i=0;i<s.length;i++)h=Math.imul(h^s.charCodeAt(i),16777619);return(h>>>0).toString(16).padStart(8,"0")};
const math=s=>[...s.matchAll(/\\\[([\s\S]*?)\\\]|\$([^$]+)\$/g)].map(m=>(m[1]??m[2]).trim());
for(const [name,count,mathSum,preSum,postSum,headings] of checks){
 const file=path.join(__dirname,"..","docs","thpt-preview","sgk","chuong-iv",name);
 const src=fs.readFileSync(file,"utf8");
 const start=src.indexOf("## 1. Kiến thức SGK"),end=src.indexOf("## 2. Ví dụ",start);
 assert(start>=0&&end>start,name+": missing SGK knowledge or examples");
 const middle=src.slice(start,end),formulas=math(middle);
 assert.equal(formulas.length,count,name+": unexpected math count");
 assert.equal(hash(JSON.stringify(formulas)),mathSum,name+": source math altered");
 assert.equal(hash(src.slice(0,start)),preSum,name+": lesson prefix altered");
 assert.equal(hash(src.slice(end)),postSum,name+": examples, SVG, HELP, canonical or lessons after knowledge altered");
 assert.equal((middle.match(/^### \d+\./gm)||[]).length,headings,name+": expected learner headings");
 assert(!/\bD1\.\d\b/.test(middle),name+": remove audit-only D1 headings from student UI");
}
console.log("PASS vector AP batch: 3 G10 knowledge pages, 43/43 unchanged math strings; original examples/SVG/HELP preserved; D1 audit headings hidden.");
