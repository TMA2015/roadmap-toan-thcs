#!/usr/bin/env node
"use strict";
const fs=require("fs"),path=require("path"),R=path.resolve(__dirname,".."),read=p=>fs.readFileSync(path.join(R,p),"utf8");
const css=read("docs/assets/stylesheets/topic-workspace.css"),items=JSON.parse(read("docs/assets/data/practice/21-thong-ke-micro-v1.json")).questions,guide=read("docs/huong-dan/chuan-ngon-ngu-de-toan-v1.md"),js=read("docs/assets/javascripts/topic-workspace-v1.js"),errors=[];
const ok=(cond,msg)=>{if(!cond)errors.push(msg)};
ok(css.includes("grid-template-columns:1.65rem minmax(0,1fr)"),"lesson header must use shrinkable grid column");
ok(css.includes(".topic-core-card-lesson{display:block;min-width:0;max-width:100%")&&css.includes("white-space:normal;overflow-wrap:break-word"),"lesson label must wrap");
for(const [n,count] of [[24,2],[34,3],[48,4],[64,5]])ok(css.includes("@container corejourney (min-width:"+n+"rem)")&&css.includes("grid-template-columns:repeat("+count+",minmax(0,1fr))"),"missing responsive "+n+"rem");
ok(!css.includes("@container corejourney (min-width:32rem)"),"old 5-column compact breakpoint remains");
ok(js.includes('"21-thong-ke":{number:"21"'),"CĐ21 UI config lost");
ok(items.length===15&&guide.includes("## 12 quy tắc bắt buộc"),"wording policy not installed");
for(let i=0;i<items.length;i++){const q=items[i],body=[q.question,...q.options,q.explanation,...q.hints].join(" ");
ok(q.id==="STA21MICRO_"+String(i+1).padStart(3,"0"),"ID "+i);
ok(q.options.length===4&&new Set(q.options).size===4&&Number.isInteger(q.answer)&&q.answer>=0&&q.answer<=3,"MCQ shape "+q.id);
ok(!/ĐÚNG NHẤT|đúng đắn và chính xác nhất|CHẮC CHẮN ĐÚNG|doanh số.{0,30}chiếc|bán máy tính trong 2 tháng.*tivi/i.test(body),"ambiguous wording "+q.id);
ok(!/biểu đồ sau|hình bên dưới/i.test(q.question),"requires absent illustration "+q.id)}
ok(items[2].options[1].includes("Hỏi từng cầu thủ")&&items[2].question.includes("đúng"),"collecting method item drift");
ok(items[5].question.includes("số lượt")&&!items[5].question.includes("số học sinh giỏi cả hai"),"unique-vs-events ambiguity");
ok(items[13].options[0].includes("10 chiếc tivi")&&items[13].answer===2,"count/revenue mismatch");
ok(items[14].question.includes("40 học sinh")&&items[14].answer===0,"sample and answer mismatch");
if(errors.length){console.error(errors.join("\n"));process.exit(1)}
console.log("PASS: responsive lesson captions and 15 direct-language MCQs; math answer indexes retained");
