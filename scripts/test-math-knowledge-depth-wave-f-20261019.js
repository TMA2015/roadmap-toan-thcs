#!/usr/bin/env node
"use strict";
const assert=require("node:assert/strict");
const fs=require("node:fs");
const path=require("node:path");
const crypto=require("node:crypto");
const root=path.resolve(__dirname,"..");
const read=p=>fs.readFileSync(path.join(root,p),"utf8");
const sha=s=>crypto.createHash("sha1")
  .update("blob "+Buffer.byteLength(s,"utf8")+"\0").update(s).digest("hex");

const cases=[
 {topic:"02",slug:"02-so-va-phep-tinh",
  oldSha:"612a5aa39ba27d6852e7b890c22aac613de1c574",
  newSha:"a5ab9fe7e0fbf8186928e6bb7357578b485b67b3",
  begin:"### 3.8A. Chọn ƯCLN hay BCNN — hiểu qua cùng hai số",
  end:"### 3.9. Phân số",
  checks:["24 bút xanh","36 bút đỏ","12 túi","72","ƯCLN","BCNN"]},
 {topic:"03",slug:"03-ti-le-ti-le-thuc",
  oldSha:"b501e304c0f4b9bda16205f80aef9ae6105c4319",
  newSha:"8276948e101e99ad73e5d3282b79678320a1e976",
  begin:"### 3.4A. Dãy tỉ số bằng nhau khi đề cho tổng có hệ số (mở rộng)",
  end:"### 3.5. Đại lượng tỉ lệ thuận",
  checks:["2x+3y","13k=26","x=4","y=6","chia cho 0"]},
 {topic:"04",slug:"04-bieu-thuc-dai-so",
  oldSha:"32b349af4d4e0091d3d45c5557195f9a6c2c7d44",
  newSha:"44f9bad016397ea7bdca398be050b9608adbcfc2",
  begin:"### 3.2A. Vì sao phải thu gọn trước khi xác định bậc?",
  end:"### 3.3. Các phép biến đổi quan trọng",
  checks:["4x^3-4x^3","3x^2-2x+1","bậc của","đa thức không"]},
 {topic:"05",slug:"05-7-hang-dang-thuc",
  oldSha:"476ab48a1451f38c01face72454f7874fdd8be3f",
  newSha:"6e34411e59ebf8589ba8ee14f2464edd5c0e822f",
  begin:"### Dạng 2A – Nhận diện hằng đẳng thức khi có hệ số phân số (mở rộng)",
  end:"### Dạng 3 – Phân tích hiệu hai bình phương",
  checks:["(x/2)^2","không thay thế chứng minh","hạng tử giữa","phân số"]},
 {topic:"06",slug:"06-phan-tich-da-thuc",
  oldSha:"9b33506c46235eec49b189c1b80a16ae261201f9",
  newSha:"866420ac8cda089354b3d0ef7b673828ae34313c",
  begin:"### 3.6A. Tách hạng tử khi hệ số của",
  end:"### 3.7. Phương pháp 4 – Phối hợp nhiều phương pháp",
  checks:["pq=ac","p=9","q=2","6x^2+11x+3","(3x+1)(2x+3)"]}
];
for(const item of cases){
 const text=read("docs/kien-thuc/"+item.slug+"/index.md");
 assert.equal(sha(text),item.newSha,"New Wave F source drift: CT"+item.topic);
 const start=text.indexOf(item.begin),end=text.indexOf(item.end,start+item.begin.length);
 assert.ok(start>=0&&end>start,"Missing Wave F section: CT"+item.topic);
 assert.equal(text.indexOf(item.begin,start+1),-1,"Duplicated new section: CT"+item.topic);
 const addition=text.slice(start,end);
 for(const token of item.checks)assert.ok(addition.includes(token),"CT"+item.topic+" lost "+token);
 assert.ok(!/^## /m.test(addition),"Wave F subsection broke main accordion: CT"+item.topic);
 assert.equal(sha(text.slice(0,start)+text.slice(end)),item.oldSha,
  "Historical knowledge source changed outside exact new section: CT"+item.topic);
}
const gcd=(a,b)=>b?gcd(b,a%b):a;
assert.equal(gcd(24,36),12);
assert.equal(24/gcd(24,36)*36,72);
const [x,y]=[4,6];
assert.equal(x/2,y/3);assert.equal(2*x+3*y,26);
for(const z of [-5,-2,0,1,4]){
 assert.equal(4*z**3-4*z**3+3*z**2-2*z+1,3*z**2-2*z+1);
 assert.ok(Math.abs((z/2-1)**2-(z**2/4-z+1))<1e-12);
 assert.equal(6*z**2+11*z+3,(3*z+1)*(2*z+3));
}
assert.equal(9+2,11);assert.equal(9*2,6*3);
console.log("PASS Knowledge Wave F: CT02-06 five frozen original lesson hashes, five bounded new sections, concept/example oracles, no new top-level accordion headings.");
