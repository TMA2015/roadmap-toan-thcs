#!/usr/bin/env node
"use strict";
const fs=require("fs"),path=require("path"),root=path.resolve(__dirname,"..");
const read=p=>fs.readFileSync(path.join(root,p),"utf8"),check=(x,msg)=>{if(!x)throw Error(msg)};
const folder="docs/kien-thuc/25-tong-hop-on-thi-10/";
const lesson=read("docs/assets/javascripts/topic-workspace-v1.js");
const loader=read("docs/assets/javascripts/practice-auto-loader.js");
const practice=read(folder+"bai-tap.md"),self=read(folder+"tu-kiem-tra.md");

const nav=read("mkdocs.yml"),overview=read(folder+"index.md");
check(lesson.includes('const topicRoot="/kien-thuc/"+config.slug+"/"')&&lesson.includes('const isCapstone=config.number==="25"')&&lesson.includes("if(!isCapstone){"),"hero/nav must stay only on topic landing pages and no sticky quick nav for CĐ25");
check(lesson.includes('if(target?.tagName==="DETAILS")target.open=true'),"anchors open the relevant collapsed section");
check(loader.includes('slug === "25-tong-hop-on-thi-10" ? "A. 🎯 Luyện tập tương tác"'),"CĐ25 interactive lane is A");
check(practice.includes("## B. Bài tập tự luận bổ sung")&&[..."ABCDEF"].every(x=>practice.includes("### Nhóm "+x+". ")), "paper exercises B and six distinct topic strands");
check([..."ABCDEF"].every(x=>practice.includes("#### 25-"+x+"1")), "legacy exercise IDs preserved under groups");
check(self.includes("## Sau khi tự làm xong – đối chiếu và tự chấm")&&!self.includes("Sau khi nộp bài")&&self.includes("chưa nhận bài viết tay"),"paper-based self-check truthful UX");
check(!overview.includes("Đạt tối thiểu **7/10**"),"no hard-gated score from self-check");
for(const p of ["kho-bai-mo-neo","bai-toan-kinh-dien","de-luyen-01","de-luyen-02","de-luyen-03","tu-danh-gia-ky-nang-thi"]){
 check(nav.includes("kien-thuc/25-tong-hop-on-thi-10/"+p+".md"),"sidebar missing "+p);
 check(fs.existsSync(path.join(root,folder,p+".md")),"route source missing "+p);
}
check(!nav.includes("  - assets/javascripts/topic25-exam-engine-v1.js"),"no exam JS is loaded");
for(const n of ["01","02","03"]){
 const file=read(folder+"de-luyen-"+n+".md"),key=read(folder+"de-luyen-"+n+"-dap-an.md");
 check(file.includes("không cần nhập")&&key.includes("## Hướng dẫn chấm theo từng ý"),"paper-first mock "+n);
}
console.log("PASS: Topic25 distinct routes, student-facing wording, navigation and paper-only exams and step rubrics; old item IDs/routes retained.");
