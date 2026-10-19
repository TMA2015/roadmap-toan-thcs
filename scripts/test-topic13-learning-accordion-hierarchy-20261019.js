"use strict";
const assert=require("node:assert/strict");
const fs=require("node:fs");
const source=fs.readFileSync("docs/kien-thuc/13-goc-va-duong-thang/index.md","utf8");
const lines=source.split(/\r?\n/);
const h2=lines.filter(line=>/^##\s/.test(line));
const numbers=h2.map(line=>line.match(/(?:^|\s)(\d{1,2})\.\s/)).filter(Boolean).map(m=>Number(m[1]));
assert.deepEqual(numbers,[1,2,3,4,5,6,7,8,9,10,11],
  "only 11 numbered accordion parents should have H2 depth");
assert.equal(h2.length,12,"only accordion headings and the post-accordion navigation may use H2");
assert.ok(h2.at(-1).includes("Tiếp tục học"));

const start=source.indexOf("## ⚠️ 7. Lỗi sai thường gặp");
const end=source.indexOf("## 📝 8. Luyện tập",start);
assert.ok(start>=0&&end>start,"error accordion has a bounded chapter-7 block");
const errors=source.slice(start,end);
assert.equal((errors.match(/^### ❌ Lỗi \d+:/gm)||[]).length,7,
  "all seven frequent errors must be nested H3 under chapter 7");
assert.equal((errors.match(/^#### Cách tránh$/gm)||[]).length,2,
  "avoidance headings are subordinate to the individual errors");
assert.ok(errors.includes("Thấy hai góc bằng nhau là kết luận song song"));

for(const [startTitle,endTitle,minimum] of [
  ["## 📖 3. Kiến thức cốt lõi","## 🔗 4. Kiến thức liên quan",12],
  ["## 🧩 5. Các dạng bài cần nắm vững","## 🚀 6. Dạng bài thi vào lớp 10",10],
]){
  const a=source.indexOf(startTitle),b=source.indexOf(endTitle,a);
  assert.ok(a>=0&&b>a);
  assert.ok((source.slice(a,b).match(/^### /gm)||[]).length>=minimum,
    "nested explanation headers should remain inside the parent accordion");
}
const wrapper=fs.readFileSync("docs/assets/javascripts/topic-workspace-v1.js","utf8");
assert.ok(wrapper.includes('node.tagName==="H2"'),"accordion only terminates at same-level headings");
console.log("PASS topic 13 section hierarchy: 11 cards, 7 mistakes inside card #7 and properly nested examples.");
