#!/usr/bin/env node
"use strict";
const assert=require("node:assert/strict");
const fs=require("node:fs");
const {join}=require("node:path");
const root=join(__dirname,"..");

const checks=[
  {
    file:"docs/thpt-preview/sgk/lop-11/chuong-i/bai-2.md",
    mathCount:16,mathHash:"418a504f",prefixHash:"c7ded31c",suffixHash:"e3c3e02a",
    groups:["### 1. Công thức cộng và trừ","### 2. Công thức nhân đôi",
      "### 3. Tích thành tổng","### 4. Tổng thành tích"],
    required:["**Điều kiện áp dụng:**","**Lỗi cần tránh:**","**Điểm cần nhớ:**"]
  },
  {
    file:"docs/thpt-preview/sgk/chuong-iv/bai-9.md",
    mathCount:30,mathHash:"46521aca",prefixHash:"7c101ff6",suffixHash:"5683de9b",
    groups:["### 1. Định nghĩa và trường hợp đặc biệt","### 2. Tính chất",
      "### 3. Trung điểm và trọng tâm","### 4. Ứng dụng"],
    required:["**Độ dài:**","**Hướng:**","**Trường hợp đặc biệt:**",
      "**Các quy tắc cơ bản:**","**Trung điểm:**","**Trọng tâm:**"]
  }
];
const fnv=s=>{
  let h=2166136261;
  for(let i=0;i<s.length;i++)h=Math.imul(h^s.charCodeAt(i),16777619);
  return (h>>>0).toString(16).padStart(8,"0");
};
const math=s=>[...s.matchAll(/\\\(([\s\S]*?)\\\)|\\\[([\s\S]*?)\\\]|\$([^$]+)\$/g)]
  .map(x=>(x[1]??x[2]??x[3]).trim());
for(const check of checks){
  const src=fs.readFileSync(join(root,check.file),"utf8");
  const start=src.indexOf("## 1. Kiến thức SGK");
  const end=src.indexOf("## 2. Ví dụ",start);
  assert(start>=0&&end>start,check.file+": knowledge section missing");
  const middle=src.slice(start,end);
  const formulas=math(middle);
  assert.equal(formulas.length,check.mathCount,check.file+": math expression count changed");
  assert.equal(fnv(JSON.stringify(formulas)),check.mathHash,
    check.file+": source-locked math sequence changed, classify delta before proceeding");
  assert.equal(fnv(src.slice(0,start)),check.prefixHash,check.file+": lesson header changed");
  assert.equal(fnv(src.slice(end)),check.suffixHash,
    check.file+": examples, SVG, HELP, links or solutions changed");
  for(const h of check.groups)assert(middle.includes(h),check.file+": missing "+h);
  for(const h of check.required)assert(middle.includes(h),check.file+": missing "+h);
  if(check.file.includes("chuong-iv/bai-9.md")){
    assert(!/\bD1\.\d\b/.test(middle),"Audit-only D1.x labels must not be student headings");
  }
}
console.log("PASS AP pilot source parity: 2 lessons, 46/46 unchanged math expressions; examples, SVGs, HELP and lessons outside Knowledge unchanged; presentation headings present. Browser AP3/AP5 remains separate.");
