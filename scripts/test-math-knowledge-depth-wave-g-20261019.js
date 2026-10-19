#!/usr/bin/env node
"use strict";
const assert=require("node:assert/strict");
const crypto=require("node:crypto");
const fs=require("node:fs");
const path=require("node:path");
const root=path.resolve(__dirname,"..");
const read=relativePath=>fs.readFileSync(path.join(root,relativePath),"utf8");
const blob=text=>crypto.createHash("sha1").update("blob "+Buffer.byteLength(text,"utf8")+"\0"+text).digest("hex");
const cases=[
  {
    "topic": "08",
    "slug": "08-phuong-trinh-bat-phuong-trinh",
    "oldSha": "4095b989dbe7aacc4c76ad41121b03524dd6765f",
    "newSha": "f17b2d4ddee59fd096760b4bc3df0b8698899223",
    "start": "### 3.5A. Vì sao không được nhân với biểu thức chưa biết dấu? (mở rộng)",
    "end": "### 3.6. Ứng dụng – lập bất phương trình từ bài toán",
    "checks": [
      "x\\ne1",
      "x-1>0",
      "x>1",
      "x=0",
      "đổi chiều"
    ]
  },
  {
    "topic": "09",
    "slug": "09-he-phuong-trinh",
    "oldSha": "07fec7c41abda3714e9ce528076d4930d507d5a3",
    "newSha": "710fa479fda50a9fd87b8c4c90e0c7297ad04d9b",
    "start": "### 3.4A. Một hệ, hai phương pháp — hiểu cách chọn và kiểm tra",
    "end": "### 3.5. Số nghiệm của hệ",
    "checks": [
      "**Thế**",
      "**Cộng đại số**",
      "3x=9",
      "(3;2)"
    ]
  },
  {
    "topic": "11",
    "slug": "11-can-thuc",
    "oldSha": "244f6f4267614cb3624a34928507431e3c8e5383",
    "newSha": "dbee35c82c1c65ee0b439bde2e453c8ab6bd9d61",
    "start": "### 3.3B. Nhận diện hằng đẳng thức trong căn lồng căn (mở rộng)",
    "end": "### 3.4. Khai phương một tích",
    "checks": [
      "5+2\\sqrt6",
      "\\sqrt2+\\sqrt3",
      "\\sqrt{A^2}=|A|",
      "CĐ05"
    ]
  },
  {
    "topic": "12",
    "slug": "12-phuong-trinh-bac-hai-viete",
    "oldSha": "93e05718230c48900129a5042e0537aeb8e3c398",
    "newSha": "5fac90056006eaf52bc52c28ca83152c30c27c0a",
    "start": "### Dạng 5A – Vì sao phải có",
    "end": "### Dạng 6 – Tìm tham số từ điều kiện về nghiệm",
    "checks": [
      "P\\ne0",
      "x^2-5x=0",
      "S=5",
      "P=0",
      "1/0"
    ]
  },
  {
    "topic": "13",
    "slug": "13-goc-va-duong-thang",
    "oldSha": "de46a556f863f76474e2d226428a74ba865bb069",
    "newSha": "6c11f4fa4860960b553858fe1237976543b7d74c",
    "start": "### 3.12A. Một mẫu chứng minh hoàn chỉnh: giả thiết, kết luận, căn cứ",
    "end": "## 🔗 4. Kiến thức liên quan",
    "checks": [
      "**Giả thiết (GT)**",
      "**Kết luận (KL)**",
      "90^\\circ",
      "c\\perp b",
      "song song"
    ]
  },
  {
    "topic": "22",
    "slug": "22-dai-luong-dac-trung",
    "oldSha": "5ba937cc691fc2f1e2ad6ca8108e4c75ad0e4d64",
    "newSha": "bf5fe34b54ce07294c97beb9a4209ff0a543e0db",
    "start": "### 3.6A. Phương sai và độ lệch chuẩn — nhìn sâu hơn số trung bình (mở rộng Toán 10)",
    "end": "### 3.7. Chọn đại lượng nào?",
    "checks": [
      "s^2=",
      "\\bar x",
      "chỉ biết số trung bình chưa đủ",
      "tự chọn chuẩn bị Toán 10",
      "n-1"
    ]
  }
];
const byPath=new Map(cases.map(c=>["docs/kien-thuc/"+c.slug+"/index.md",c]));
function restoreHistoricalSource(relativePath,content){
 const c=byPath.get(relativePath);
 if(!c)return content;
 assert.equal(blob(content),c.newSha,"Wave G full source drift CT"+c.topic);
 const i=content.indexOf(c.start),j=content.indexOf(c.end,i+c.start.length);
 assert.ok(i>=0&&j>i&&content.indexOf(c.start,i+1)===-1,"Wave G section missing or duplicated CT"+c.topic);
 const appendix=content.slice(i,j);
 for(const token of c.checks)assert.ok(appendix.includes(token),"Missing Wave G teaching evidence CT"+c.topic+": "+token);
 assert.ok(!/^## /m.test(appendix),"New H2 would break learner accordion CT"+c.topic);
 const historical=content.slice(0,i)+content.slice(j);
 assert.equal(blob(historical),c.oldSha,"Historical knowledge page changed outside Wave G CT"+c.topic);
 return historical;
}
function checkWaveG(){
 assert.equal(cases.length,6);
 for(const c of cases){
  const relativePath="docs/kien-thuc/"+c.slug+"/index.md";
  restoreHistoricalSource(relativePath,read(relativePath));
 }
 // Independent arithmetic and domain checks for pedagogical examples.
 const answerSet=[-2,0,0.5,1.5,2,8].filter(x=>x!==1&&x/(x-1)>1);
 assert.deepEqual(answerSet,[1.5,2,8],"CT08 inequality solution set check");
 assert.equal(3+2,5);assert.equal(2*3-2,4);
 assert.ok(Math.abs((Math.sqrt(2)+Math.sqrt(3))**2-(5+2*Math.sqrt(6)))<1e-12);
 assert.equal(0*5,0);assert.equal(0+5,5);
 const a=[5,5,7,7],b=[4,4,8,8],variance=s=>s.reduce((t,x)=>t+(x-6)**2,0)/s.length;
 assert.equal(variance(a),1);assert.equal(variance(b),4);
 console.log("PASS: Wave G 6 topic content locks, old frozen SHA, correct math, no H2 accordion changes.");
}
if(require.main===module)checkWaveG();
module.exports={restoreHistoricalSource,checkWaveG};
