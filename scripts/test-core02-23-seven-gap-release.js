#!/usr/bin/env node
"use strict";
const fs=require("fs"),path=require("path"),crypto=require("crypto");
const root=path.resolve(__dirname,"..");
const read=p=>fs.readFileSync(path.join(root,p),"utf8");
const json=p=>JSON.parse(read(p));
const ok=(x,m)=>{if(!x)throw Error("Seven-gap release: "+m)};
const blob=s=>crypto.createHash("sha1").update(Buffer.concat([Buffer.from("blob "+Buffer.byteLength(s)+"\0"),Buffer.from(s)])).digest("hex");

const b2=json("docs/assets/data/practice/02-so-va-phep-tinh-micro-v1.json");
const w2=json("docs/assets/data/curriculum/topic02-learning-workspace.json");
const b23=json("docs/assets/data/practice/23-xac-suat-micro-v1.json");
const w23=json("docs/assets/data/curriculum/topic23-learning-workspace.json");

ok(blob(JSON.stringify(b2.questions.slice(0,15)))==="675b1312713c3e040f6695fd20c68db3b49e656a","CĐ02 original 15 records changed");
ok(blob(JSON.stringify(b23.questions.slice(0,15)))==="8be2c67391b4efe86fbe2f9612fb98588e6d3240","CĐ23 original 15 records changed");
ok(b2.question_count===23&&b2.questions.length===23,"CĐ02 must have 23 items after reviewed Bài 30 append");
ok(b23.question_count===20&&b23.questions.length===20,"CĐ23 must have 20 items after pending Bài 42 lesson-local append");

const expected=[
["NUM02MICRO_016","num02-g6-core-1","luy-thua",6,2,"5⁴"],
["NUM02MICRO_017","num02-g6-core-2","phan-tich-thua-so-nguyen-to",6,0,"2·3²·5"],
["NUM02MICRO_018","num02-g6-core-2","bcnn",6,2,"36"],
["NUM02MICRO_019","num02-g6-core-3","gia-tri-tuyet-doi",6,2,"9"],
["NUM02MICRO_020","num02-g6-core-4","quy-dong-so-sanh-phan-so",6,1,"5/6 > 7/9"],
["PRO23MICRO_016","prob23-core-3","kiem-tra-xac-suat",7,1,"Kết quả không hợp lý vì xác suất phải nằm trong khoảng từ 0 đến 1"],
["PRO23MICRO_017","prob23-core-5","xac-suat-co-dien",8,0,"2/5"]
];
const all=[...b2.questions,...b23.questions],by=new Map(all.map(q=>[q.id,q]));
for(const [id,card,skill,grade,answer,text] of expected){
 const q=by.get(id);
 ok(q&&q.card_id===card,"card "+id);
 ok(q.micro_role==="coverage","micro_role "+id);
 ok(q.tags?.layer==="KNTT-Core"&&q.tags?.grade===grade&&q.tags?.skill?.length===1&&q.tags.skill[0]===skill,"scope/skill "+id);
 ok(q.answer===answer&&q.options?.length===4&&new Set(q.options).size===4&&q.options[answer]===text,"oracle/options "+id);
 ok(q.hints?.length===2&&q.explanation,"feedback "+id);
 ok(q.authoring_review?.packet==="MATH-CORE02-23-GAP-R1-20260930"&&q.authoring_review?.source_blob==="9695c998aade401f4c4129aa25ac6a8392a41b2b"&&q.authoring_review?.verdict==="PASS","review provenance "+id);
}
const card2=new Map(w2.cards.map(c=>[c.id,c])),card23=new Map(w23.cards.map(c=>[c.id,c]));
for(const [id,card,skill] of expected){
 const c=id.startsWith("NUM")?card2.get(card):card23.get(card);
 ok(c&&c.skills.includes(skill)&&c.micro_practice.includes(id),"workspace coverage "+id);
}
for(const w of [w2,w23]){
 for(const c of w.cards){
  const ids=c.micro_practice,base=ids.slice(0,3).map(id=>by.get(id));
  ok(base.map(q=>q?.micro_role).join(",")==="base,trap,apply","base/trap/apply preserved "+c.id);
  ok(ids.slice(3).every(id=>by.get(id)?.micro_role==="coverage"),"extra items coverage-only "+c.id);
 }
}
const skillCoverage=(w,b)=>{const q=new Map(b.questions.map(x=>[x.id,x]));return w.cards.flatMap(c=>c.skills.filter(s=>!c.micro_practice.some(id=>q.get(id)?.tags?.skill?.[0]===s)).map(s=>c.id+":"+s));};
ok(skillCoverage(w2,b2).length===0,"CĐ02 gap remains: "+skillCoverage(w2,b2).join(","));
ok(skillCoverage(w23,b23).length===0,"CĐ23 gap remains: "+skillCoverage(w23,b23).join(","));
ok(new Set(b2.questions.map(q=>q.id)).size===23&&new Set(b23.questions.map(q=>q.id)).size===20,"duplicate IDs");
console.log("PASS: prior 7/7 reviewed Core coverage items remain intact; original 30 micro records immutable; CĐ23 adds only the separately gated Bài 42 lesson-local candidate.");
