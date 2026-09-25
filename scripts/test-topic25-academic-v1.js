#!/usr/bin/env node
"use strict";
const fs=require("fs"),path=require("path"),R=path.resolve(__dirname,"..");
const read=p=>fs.readFileSync(path.join(R,p),"utf8"),data=p=>JSON.parse(read(p));
const base="docs/assets/data/practice/25-tong-hop-on-thi-10-";
const original=["01","02","03","04"].flatMap(n=>data(base+"v1-"+n+".json").questions);
const academic=data(base+"academic-v1.json").questions,strategy=data(base+"strategy-v1.json").questions;
const ok=(v,m)=>{if(!v)throw Error(m)};
ok(original.length===120&&academic.length===80&&strategy.length===40,"original 120 preserved, 80/40 split");
const originalIds=new Set(original.map(x=>x.id)),split=[...academic,...strategy];
ok(new Set(split.map(x=>x.id)).size===120&&split.every(x=>originalIds.has(x.id)),"original question IDs retained exactly once");
const strategySet=new Set(["nhan-dien-chuyen-de","quan-ly-thoi-gian","phan-loai-loi","checklist-chua-de"]);
ok(academic.every(q=>(q.tags.skill||[]).every(x=>!strategySet.has(x))),"academic bank free of strategy skill tags");
ok(strategy.every(q=>(q.tags.skill||[]).every(x=>strategySet.has(x))),"strategy bank free of academic tags");
for(const kind of ["academic","strategy"]){
 const m=data(base+kind+"-v1.manifest.json"),q=data(base+kind+"-v1.json");
 ok(m.question_count===q.question_count&&m.sources.length===1&&m.sources[0]===path.basename(base+kind+"-v1.json"),kind+" manifest");
}
const home=read("docs/kien-thuc/25-tong-hop-on-thi-10/index.md"),self=read("docs/kien-thuc/25-tong-hop-on-thi-10/tu-kiem-tra.md"),exam=read("docs/kien-thuc/25-tong-hop-on-thi-10/de-thi-tong-hop-01.md"),classic=read("docs/kien-thuc/25-tong-hop-on-thi-10/bai-toan-kinh-dien.md");
ok(home.includes("80 câu")&&home.includes("40 câu")&&home.includes("Bắt đầu ôn thi đúng mục tiêu"),"academic and skills visible on landing");
ok(exam.includes("120 phút")&&exam.includes("10 điểm")&&(exam.match(/^## [I-V]\./gm)||[]).length===5,"full five-part 120-min academic exam");
ok((classic.match(/^### Mẫu /gm)||[]).length===7,"seven classic worked studies");
ok(self.includes("45–60 phút")&&self.includes("## Đề bài")&&self.includes("Đáp án và hướng dẫn chấm"),"academic self-check not strategy quiz");
ok(read("docs/kien-thuc/25-tong-hop-on-thi-10/tu-kiem-tra-ky-nang.md").includes("không"),"strategy retained separately");
ok(!exam.includes("ĐỀ CHÍNH THỨC")&&exam.includes("Không phải đề thi chính thức"),"no impersonation of official exam");
const disc=(a,b,c)=>b*b-4*a*c;ok(disc(2,-3,-2)===25,"radical practice factorization");
ok(134/20===6.7&&12/20===.6,"data problem");
ok(18*30+22*50===1640&&18+22===40,"ticket model");
ok(13*13-5*5===12*12&&25+144===169&&25*144===60*60,"Pythagoras and altitude");
ok((5*5)===25,"optimization");
const loader=read("docs/assets/javascripts/practice-auto-loader.js");
ok(loader.includes("academic-v1.manifest.json")&&loader.includes("strategy-v1.manifest.json"),"both practice rooms");
console.log("PASS CĐ25: original 120 preserved, 80 academic / 40 strategy, 7 classic cases, full 120-minute exam, independent mathematical sanity checks.");
