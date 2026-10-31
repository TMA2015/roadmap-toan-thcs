#!/usr/bin/env node
"use strict";
const assert=require("node:assert/strict");
const fs=require("node:fs");
const path=require("node:path");
const page=fs.readFileSync(path.join(__dirname,"../docs/thpt-preview/sgk/lop-11/chuong-i/bai-1.md"),"utf8");
const start=page.indexOf("## 1. Kiến thức SGK"),end=page.indexOf("## 2. Ví dụ",start);
assert(start>=0&&end>start,"G11 B01 expected knowledge block");
const fnv=s=>{let h=2166136261;for(let i=0;i<s.length;i++)h=Math.imul(h^s.charCodeAt(i),16777619);return (h>>>0).toString(16).padStart(8,"0")};
const math=s=>[...s.matchAll(/\\\(([\s\S]*?)\\\)|\\\[([\s\S]*?)\\\]/g)].map(x=>(x[1]??x[2]).trim());
const knowledge=page.slice(start,end),formulas=math(knowledge);
assert.equal(formulas.length,27,"G11 B01 knowledge expression count");
assert.equal(fnv(JSON.stringify(formulas)),"2682a78b","Source-order math changed: classify academic delta");
assert.equal(fnv(page.slice(0,start)),"2e140b61","Lesson header changed");
assert.equal(fnv(page.slice(end)),"987319a3","Examples, SVG, HELP, links, Written or other content changed");
for(const name of [
"### 1. Góc lượng giác và số đo",
"### 2. Radian và độ dài cung",
"### 3. Đường tròn lượng giác",
"### 4. Tang, côtang và điều kiện xác định",
"### 5. Các góc liên quan đặc biệt",
"**Các góc cùng tia cuối.**",
"**Đổi giữa độ và radian:**",
"**Hệ thức cơ bản (đúng với mọi α):**",
"**Điều kiện:**",
"**Góc phụ:**"
])assert(knowledge.includes(name),"AP teaching group missing: "+name);
for(const key of ["s=R|α|","M=(cos α,sin α)","sin²α+cos²α=1","tan α=sin α/cos α","cot α=cos α/sin α"])
 assert(knowledge.includes("\\[\n"+key+"\n\\]"),"Display formula missing: "+key);
assert(!/\\bD1\\.\\d\\b/.test(knowledge),"Technical outcome labels in student Knowledge");
assert(!/data-thpt-readiness|data-mastery-credit|data-scoring-engine/.test(page),"Protected assessment activated");
console.log("PASS G11 B01 AP1/AP2/AP4 source: 27/27 unchanged math expressions, protected examples/SVG/HELP exact, no learner scoring; browser AP3/AP5 checked separately.");
