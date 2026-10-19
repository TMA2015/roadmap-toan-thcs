#!/usr/bin/env node
"use strict";
const fs=require("node:fs"),path=require("node:path"),crypto=require("node:crypto"),assert=require("node:assert/strict");
const root=path.resolve(__dirname,"..");
const read=p=>fs.readFileSync(path.join(root,p),"utf8");
const sha=text=>crypto.createHash("sha1").update("blob "+Buffer.byteLength(text,"utf8")+"\0"+text).digest("hex");
const ct13=read("docs/kien-thuc/13-goc-va-duong-thang/index.md");
const ct14=read("docs/kien-thuc/14-tam-giac/index.md");
assert.equal(sha(ct13),"3438f2fa81dfaf9be6e48b0c71035386c09c0b73","CT13 visual teaching cue changed");
assert.equal(sha(ct14),"f9fae782453f7126b39f123d728188d49787c149","CT14 visual teaching cue changed");
const part=(text,start,end)=>{
 const a=text.indexOf(start),b=text.indexOf(end,a+start.length);
 assert.ok(a>=0&&b>a&&text.indexOf(start,a+1)<0,"Single academic subsection required");
 return text.slice(a,b);
};
const p13=part(ct13,"### 3.12A. Một mẫu chứng minh hoàn chỉnh","## 🔗 4. Kiến thức liên quan");
assert.ok(p13.includes("**Chỉ đánh dấu góc vuông tại \\(M\\)**"),"Given right angle must be marked at M");
assert.ok(p13.includes("Chưa đánh dấu góc vuông tại \\(N\\)"),"Conclusion must not be marked as given");
assert.ok(p13.includes("góc đồng vị"),"Proof diagram needs corresponding angle link");
const p14=part(ct14,"#### Hai trường hợp thường dùng thêm cho tam giác vuông","## 🔗 4. Kiến thức liên quan");
for(const text of ["góc vuông tại \`A\`, \`D\`","\`BC = EF\`","\`AB = DE\`","\`∠B = ∠E\`","dùng một hình khác","không gộp cả hai bộ điều kiện"])
 assert.ok(p14.includes(text.replaceAll("\\`","`")),"CT14 cue needs distinct corresponding conditions: "+text);
assert.ok(!/^## /m.test(p13)||!/^## /m.test(p14),"P2 cue must preserve accordion H2 boundaries");
console.log("PASS P2 CT13/CT14: diagram cues mark hypotheses, separate congruence cases and pin full lesson SHA.");
