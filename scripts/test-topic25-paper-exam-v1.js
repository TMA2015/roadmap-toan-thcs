#!/usr/bin/env node
"use strict";
const fs=require("fs"),path=require("path"),R=path.resolve(__dirname,"..");
const read=p=>fs.readFileSync(path.join(R,p),"utf8");
const assert=(c,m)=>{if(!c)throw Error(m)};
const base="docs/kien-thuc/25-tong-hop-on-thi-10/";
const specs={"01":[2,2,3,4,0],"02":[2,2,3,4,0],"03":[2,2,2,3,2]};
const vals={"01":[2,2,1.5,3.5,1],"02":[2,2,2,3,1],"03":[2,2,2,3,1]};
const romans=["I","II","III","IV","V"],expectedAnswers={
 "01":["A=5\\sqrt2","x=8","x=14, y=26","\\frac{65}{8}","\\frac12","AH=\\sqrt{9\\cdot16}=12","P_{\\max}=25"],
 "02":["n\\in\\{0,2,3\\}","a=15,\\ b=21","=396","(-1;1)","(3;9)","AE=9","36 cm"],
 "03":["A=5\\sqrt2+2\\sqrt2-3\\sqrt2=4\\sqrt2","S=\\{1\\}","30 ngày","\\frac13","x_1^2+x_2^2=6^2-2\\cdot5=26","\\angle BEF","\\frac","2/6=1/3"]
};
for(const [no,counts] of Object.entries(specs)){
 const exam=read(base+"de-luyen-"+no+".md"),key=read(base+"de-luyen-"+no+"-dap-an.md");
 for(const [kind,content] of [["exam",exam],["key",key]]){
  assert(!/^\d+\.\s/m.test(content),"auto-renumber risk "+no+" "+kind);
  const got=Object.fromEntries(romans.map(x=>[x,[]]));let inSection=null;
  for(const line of content.split(/\r?\n/)){
   const m=line.match(/^#{2,3} Bài (I|II|III|IV|V)(?=[\s. –-]|$)/);
   if(m){inSection=m[1];continue;}
   if(line.startsWith("## Hướng dẫn chấm"))inSection=null;
   const q=line.match(/^\*\*Câu (\d+)\.\*\*/);
   if(q){assert(inSection,no+" "+kind+": label outside Bài");got[inSection].push(Number(q[1]));}
  }
  romans.forEach((r,i)=>assert(JSON.stringify(got[r])===JSON.stringify(Array.from({length:counts[i]},(_,k)=>k+1)),no+" "+kind+" Bài "+r+" wrong labels "+JSON.stringify(got[r])));
  assert(!/class=["']exam-engine/.test(content),no+" "+kind+" must be plain Markdown");
 }
 assert(exam.includes("không cần nhập")&&key.includes("## Hướng dẫn chấm theo từng ý"),no+" must be paper-only with key");
 assert(!/Luyện đề tương tác|đồng hồ JS|Nộp bài và chữa đề/.test(exam),no+" old mock UI copy");
 const pts=[...exam.matchAll(/^#{2,3} Bài (I|II|III|IV|V).*?\((\d+),(\d+) điểm\)/gm)]
  .map(m=>Number(m[2])+Number(m[3])/10);
 assert(JSON.stringify(pts)===JSON.stringify(vals[no]),no+" incorrect per-Bài points");
 const rows=[...key.matchAll(/^\| ((?:I|II|III|IV)\.\d+|V) \| (\d+),(\d{2}) \|/gm)]
  .map(m=>({id:m[1],pts:Number(m[2])+Number(m[3])/100}));
 assert(rows.length===counts.reduce((a,b)=>a+b,0)+(counts[4]===0?1:0),no+" rubric parts "+rows.length);
 const sum=rows.reduce((a,r)=>a+r.pts,0);
 assert(Math.abs(sum-10)<1e-9,no+" rubric "+sum+" !=10");
 romans.forEach((r,i)=>{const v=rows.filter(x=>x.id===r||x.id.startsWith(r+".")).reduce((a,x)=>a+x.pts,0);assert(Math.abs(v-vals[no][i])<1e-9,no+" rubric Bài "+r+" "+v);});
 assert(key.includes("| **Tổng** | **10,00**"),no+" rubric summary");
 for(const token of expectedAnswers[no])assert(key.includes(token),no+" key lacks reviewed result: "+token);
 console.log("PASS paper exam "+no+": explicit numbering, 5 Bài, "+rows.length+" rubric IDs, 10.00 points.");
}
const yml=read("mkdocs.yml");
assert(!yml.includes("  - assets/javascripts/topic25-exam-engine-v1.js"),"legacy timed exam must remain unloaded");
assert(read(base+"index.md").includes("không lưu điểm tự luận"),"overview must not promise exam persistence");
assert(read("content-staging/topic25/PAPER_EXAM_ACADEMIC_QA_20260928.md").includes("Chưa có ma trận"),"academic scope caveat");
console.log("PASS: paper-first academic pack, source/build safety contract.");
