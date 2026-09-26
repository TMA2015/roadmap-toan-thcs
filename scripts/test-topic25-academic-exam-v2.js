#!/usr/bin/env node
"use strict";
const fs=require("fs"),path=require("path"),R=path.resolve(__dirname,".."),read=p=>fs.readFileSync(path.join(R,p),"utf8");
const index=read("docs/kien-thuc/25-tong-hop-on-thi-10/index.md");
const practice=read("docs/kien-thuc/25-tong-hop-on-thi-10/bai-tap.md");
const check=read("docs/kien-thuc/25-tong-hop-on-thi-10/tu-kiem-tra.md");
const classic=read("docs/kien-thuc/25-tong-hop-on-thi-10/bai-toan-kinh-dien.md");
const mock=read("docs/kien-thuc/25-tong-hop-on-thi-10/de-luyen-01.md");
const skills=read("docs/kien-thuc/25-tong-hop-on-thi-10/tu-danh-gia-ky-nang-thi.md");
const data=JSON.parse(read("docs/assets/data/curriculum/topic25-learning-workspace.json"));
const ok=(v,m)=>{if(!v)throw Error(m)};
ok(index.includes("Luyện học thuật")&&index.includes("Bài toán kinh điển")&&index.includes("Đề luyện hoàn chỉnh số 1")&&index.includes("Kỹ năng thi — tách khỏi điểm học thuật"),"topic25 four lanes");
ok(practice.includes("## A. Đại số")&&practice.includes("## D. Thống kê và xác suất")&&practice.includes("## E. Hình học"),"academic practice strands");
ok(!practice.includes("Mức 1 – Nhận biết")&&!practice.includes("Sổ lỗi sai nên ghi"),"strategy prompts removed from academic exercise bank");
ok(check.includes("Câu 1 – Đại số")&&check.includes("Câu 4 – Hình học")&&check.includes("Điểm này chỉ đo bài Toán hiện tại"),"academic self-check");
ok(skills.includes("Không dùng điểm ở đây để kết luận năng lực Toán"),"exam skills separated");
const examSection=mock.split("## Đáp án và hướng dẫn chấm")[0];
const examHeadings=examSection.match(/^### Bài (?:I|II|III|IV|V)\s+[–-]/gm)||[];
ok(examHeadings.length===5,"five-problem mock: actual "+examHeadings.length);
ok(mock.includes(String.raw`\triangle ABH\sim\triangle CAH\`),"geometry similarity is correctly ordered");
for(const [name,body] of [["classics",classic],["practice",practice],["self-check",check],["mock",mock]]){
  const opens=(body.match(/^\\\[$/gm)||[]).length, closes=(body.match(/^\\\]$/gm)||[]).length;
  ok(opens>0&&opens===closes,"unpaired display math: "+name+" ("+opens+"/"+closes+")");
  ok(!/^\[$/m.test(body)&&!/^\]$/m.test(body),"raw bracket math: "+name);
  ok(!/[\t\f]/.test(body),"control escapes: "+name);
}
ok(mock.includes("120 phút")&&mock.includes("không sao chép đề chính thức"),"mock scope and provenance");
ok(classic.includes("Viète")&&classic.includes("đường cao trong tam giác vuông")&&classic.includes("Tối ưu đại số"),"classic algebra/geometry archetypes");
ok(data.cards.length===5&&data.cards.slice(0,3).every(x=>x.learning_kind==="academic")&&data.cards.slice(3).every(x=>x.learning_kind==="exam_skill"),"workspace academic first, exam skills second");
ok(data.cards.flatMap(x=>x.micro_practice||[]).length===15,"existing 15 micro items retained");
console.log("PASS: Topic25 separates academic content, classic archetypes, full mock, academic self-check and exam skills.");
