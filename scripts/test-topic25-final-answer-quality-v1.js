#!/usr/bin/env node
"use strict";
const fs=require("fs"),path=require("path");
const root=path.resolve(__dirname,"..");
const directory=path.join(root,"docs/kien-thuc/25-tong-hop-on-thi-10");
const get=name=>fs.readFileSync(path.join(directory,name),"utf8");
const assert=(ok,msg)=>{if(!ok)throw Error(msg);};
const names=["bai-tap.md","bai-toan-kinh-dien.md","de-luyen-01-dap-an.md","tu-kiem-tra-dap-an.md"];
for(const name of names){
  const s=get(name);
  assert(!/(?:^|[, ])qquad\b/.test(s),name+": missing backslash on qquad");
  assert(!/\\{2}(?:overline|frac|sqrt|qquad)\b/.test(s),name+": duplicate TeX backslash");
  assert(!/\\\(sqrt\{/.test(s),name+": radical missing TeX backslash");
}
const key=get("de-luyen-01-dap-an.md");
assert(key.includes("\\overline{x}=\\frac{65}{8}"),"mean must typeset correctly");
assert(key.includes("## Rubric tự chấm theo từng ý"),"first exam key needs per-part rubric");
const rows=[...key.matchAll(/^\| (I\.[12]|II\.[12]|III\.[123]|IV\.[1234]|V) \| (\d+),(\d{2}) \|/gm)];
const total=rows.reduce((n,m)=>n+Number(m[2])+Number(m[3])/100,0);
assert(rows.length===12&&Math.abs(total-10)<1e-9,"rubric needs 12 graded parts totaling 10; got "+rows.length+" / "+total);
for(const match of key.matchAll(/\]\((\.\.\/[^)]+|[^:)]+\.md)\)/g)){
  const target=path.resolve(directory,match[1]);
  assert(fs.existsSync(target),"broken first-exam remediation link: "+match[1]);
}
assert(get("bai-toan-kinh-dien.md").includes("Mẫu \\(\\sqrt{x}+1>0\\)"),"classic radical notation");
assert(get("bai-tap.md").includes("y=x+2,\\qquad y=-x+6"),"academic functions notation");
const exam=get("de-luyen-01.md");
assert((exam.match(/^### Bài (?:I|II|III|IV|V)\b/gm)||[]).length===5,"complete five-problem first mock");
assert(get("tu-kiem-tra-dap-an.md").includes("\\overline{x}=7"),"self-check mean notation");
console.log("PASS: CĐ25 TeX cleanup, 10-point step rubric and verified remediation links.");
