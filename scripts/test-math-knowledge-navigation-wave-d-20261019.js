#!/usr/bin/env node
"use strict";
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const crypto = require("node:crypto");
const root = path.resolve(__dirname, "..");
const read = p => fs.readFileSync(path.join(root, p), "utf8");
const blob = s => crypto.createHash("sha1").update("blob " + Buffer.byteLength(s,"utf8") + "\0" + s).digest("hex");

const cases = [
  {
    topic:"01",
    path:"docs/kien-thuc/01-ban-do-chuong-trinh/index.md",
    newSha:"e18d6c8ca6160b71552e4ac61f622c2add8cbda0",
    oldSha:"fd8797b765c10d974c3491e84ee40dafbd0fcb7f",
    start:"### 3.8A. Tra cứu ngược — khi chưa hiểu, nên mở chuyên đề nào?",
    end:"\n---\n\n## 🔗 4. Kiến thức liên quan",
    beforeStart:2,
    minimumLinks:12
  },
  {
    topic:"25",
    path:"docs/kien-thuc/25-tong-hop-on-thi-10/index.md",
    newSha:"2e1cdaa20d577b822fe1098772a94f931a0cb1c0",
    oldSha:"eaf0c907c9420e146ddde1a3c93c1552d89b9ecf",
    start:"### 3.5A. Từ bước giải sai đến đúng chuyên đề cần học lại",
    end:"### 3.6. Chiến lược làm bài",
    beforeStart:0,
    minimumLinks:14
  }
];

for (const c of cases) {
  const source=read(c.path);
  assert.equal(blob(source),c.newSha,"Wave D edited source outside reviewed scope: "+c.topic);
  const start=source.indexOf(c.start);
  const end=source.indexOf(c.end,start+c.start.length);
  assert.ok(start>=0&&end>start,"Missing teaching/navigation section: "+c.topic);
  assert.equal(source.indexOf(c.start,start+1),-1,"Duplicate teaching section: "+c.topic);
  const original=source.slice(0,start-c.beforeStart)+source.slice(end);
  assert.equal(blob(original),c.oldSha,"Frozen historical source changed: "+c.topic);
  const appendix=source.slice(start,end);
  const links=[...appendix.matchAll(/\]\((\.\.\/[^)#\s]+\.md)\)/g)].map(m=>m[1]);
  assert.ok(links.length>=c.minimumLinks,"Too few learner lookup routes: "+c.topic);
  for (const href of links) {
    const target=path.join(path.dirname(c.path),href);
    assert.ok(fs.existsSync(path.join(root,target)),"Broken knowledge link "+c.topic+": "+href);
  }
  assert.ok(!/^## /m.test(appendix),"Do not add a major heading that breaks learning accordions: "+c.topic);
  if(c.topic==="01"){
    assert.ok(appendix.includes("x\\ne0,2")&&appendix.includes("(x+2)/x"),"Original-domain example lost");
    assert.ok(appendix.includes("mở chuyên đề")&&appendix.includes("gợi ý tra cứu"),"CT01 learner lookup reasoning missing");
  } else {
    assert.ok(appendix.includes("y=2x")&&appendix.includes("A(1;2)")&&appendix.includes("y=-3x"),"Graph error-log teaching example changed");
    assert.ok(appendix.includes("không phải thống kê"),"Do not invent Entrance10 exam frequencies");
  }
}
console.log("PASS: Knowledge Wave D CT01/CT25 direct links, worked lookup examples, exact historical SHA restoration and accordion-safe headings.");
