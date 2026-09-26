#!/usr/bin/env node
"use strict";
const fs=require("fs"),path=require("path"),root=path.resolve(__dirname,"..");
const read=file=>fs.readFileSync(path.join(root,"docs/kien-thuc/25-tong-hop-on-thi-10",file),"utf8");
const fail=(v,msg)=>{if(!v)throw Error(msg)};
const home=read("index.md"),classic=read("bai-toan-kinh-dien.md");
fail((classic.match(/^## \d+\./gm)||[]).length===10,"ten classic anchor problems");
fail(classic.includes("\\angle BEF=\\angle BCF")&&classic.includes("dây \\(BF\\)"),"correct orthocenter circle anchor proof");
for(const i of [1,2,3]){
 const p=String(i).padStart(2,"0"),exam=read("de-luyen-"+p+".md"),key=read("de-luyen-"+p+"-dap-an.md");
 const headings=(exam.match(/^#{2,3} Bài (?:I|II|III|IV|V)[. –-]/gm)||[]).length;
 fail(headings===5,"exam "+p+" must have five questions, found "+headings);
 const pts=[...exam.matchAll(/^#{2,3} Bài [IVX]+.*\((\d+),(\d+) điểm\)/gm)].map(x=>Number(x[1])+Number(x[2])/10);
 const total=pts.reduce((a,b)=>a+b,0);
 fail(pts.length===5&&Math.abs(total-10)<1e-10,"exam "+p+" must total ten points: "+total);
 fail(exam.includes("120 phút")&&exam.includes("tự biên soạn"),"explicit original 120 minute source status "+p);
 fail(!exam.includes("## Đáp án và hướng dẫn chấm"),"answer key accidentally exposed under exam "+p);
 fail(key.includes("Đáp án và hướng dẫn chấm")&&key.includes("Bài V"),"complete separate answer key "+p);
 for(const [name,content] of [["exam",exam],["key",key]]){
  const opens=(content.match(/^\\\[$/gm)||[]).length,closes=(content.match(/^\\\]$/gm)||[]).length;
  fail(opens===closes,"unpaired display TeX in "+name+" "+p);
  fail(!/^\[$/m.test(content)&&!/^\]$/m.test(content),"raw unrendered display TeX in "+name+" "+p);
  fail(!/[\t\f]/.test(content),"bad control escape in "+name+" "+p);
 }
 fail(home.includes("de-luyen-"+p+"/")&&home.includes("de-luyen-"+p+".md"),"Topic25 exam card and plain link "+p);
}
const self=read("tu-kiem-tra.md"),selfKey=read("tu-kiem-tra-dap-an.md");
fail(self.includes("Đáp án và hướng dẫn chấm")&&!self.includes("## Câu 1\n\n1."),"self-check answers kept separate");
fail(selfKey.includes("Đáp án và hướng dẫn chấm")&&selfKey.includes("Bảng truy nguyên lỗi"),"self-check key and recovery");
const mock2=read("de-luyen-02-dap-an.md"),mock3=read("de-luyen-03-dap-an.md");
fail(mock2.includes("\\triangle ABD\\sim\\triangle AEB")&&mock2.includes("AE=9"),"tangent-secant reasoning");
fail(mock3.includes("\\angle BEF")&&mock3.includes("\\angle BCF")&&mock3.includes("dây) \\(BF\\)"),"orthocenter angles");
console.log("PASS: three 120-minute complete original capstone exams, separate keys, ten anchor problems, academic self-check and geometry.");
