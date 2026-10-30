"use strict";
const assert=require("node:assert/strict"),fs=require("node:fs"),vm=require("node:vm"),crypto=require("node:crypto");
const text=p=>fs.readFileSync(p,"utf8");
const blob=bytes=>crypto.createHash("sha1").update(Buffer.concat([Buffer.from("blob "+bytes.length+"\0"),bytes])).digest("hex");
const sourcePath="prototypes/thpt/content-drafts/THPT_G10_CHIV_B09_B11_D1D6_AUTHORING_R01_SNAPSHOT.md";
const sourceBytes=fs.readFileSync(sourcePath);
assert.equal(blob(sourceBytes),"a9f6fab820559a8da98a5a42cd9902dbf9891f34","Academic source snapshot changed");
const source=sourceBytes.toString("utf8");
const section=source.slice(source.indexOf("## 5. D3 —"),source.indexOf("## 6. D4 —"));
const heading=/^### \x60(THPT-G10-B(09|10|11)-[CP]\d{2})\x60 — B\d+ \| \x60(SGK_CORE|SGK_PRACTICE)\x60 \| \x60([^\x60]+)\x60 \| \x60(MCQ|SHORT)\x60 \| \x60([^\x60]+)\x60 \| \x60content_version=1\x60/gm;
const hits=[...section.matchAll(heading)];assert.equal(hits.length,24);
const field=(s,label)=>{const line=s.split("\n").find(x=>x.startsWith("**"+label+":**"));assert(line,"missing "+label);return line.slice(("**"+label+":**").length).trim()};
const expected=hits.map((h,i)=>{
 const b=section.slice(h.index+h[0].length,i+1<hits.length?hits[i+1].index:section.length);
 const key=field(b,"Đáp án");
 const obj={item_id:h[1],lesson:String(Number(h[2])),role:h[3]==="SGK_CORE"?"CORE":"PRACTICE",skill:h[4],stem:field(b,"Câu hỏi")};
 if(h[5]==="MCQ"){
  const raw=field(b,"Lựa chọn"),options=[...raw.matchAll(/(?:^|;\s+)([A-D])\.\s/g)];
  assert.equal(options.length,4,"Source options: "+h[1]);
  obj.options=options.map((m,k)=>m[1]+". "+raw.slice(m.index+m[0].length,k+1<4?options[k+1].index:raw.length).replace(/;\s*$/,"").trim());
  obj.answerKey=key;
 }
 obj.solution="Đáp án: "+key+"\nLời giải: "+field(b,"Lời giải");
 obj.hint=field(b,"Hint chỉ dùng sau/ngoài kiểm tra");obj.exposure="FORMATIVE_ONLY";obj.difficulty=h[6];
 return obj;
});
const context={window:{}};
vm.runInNewContext(text("docs/assets/javascripts/thpt-chiv-b09-b11-reviewed-formative-v1.js"),context);
const bank=context.window.THPT_CHIV_B09_B11_REVIEWED_FORMATIVE;
assert(bank?.validate().valid,"Invalid new bank");
assert.equal(JSON.stringify(bank.records),JSON.stringify(expected),"Runtime items differ from reviewed snapshot");
const figures=[
["THPT_G10_B09_SCALAR_MULTIPLE_VECTORS_D5_R01.svg","8670fd4815f89a1f56e824cdab2d2d3696299422"],
["THPT_G10_B10_COORDINATES_DIFFERENCE_D5_R01.svg","fb293bfb7c89b1247ebea310a1f97e04ea1ebab0"],
["THPT_G10_B11_DOT_PRODUCT_OBTUSE_D5_R01.svg","9b16fbab2be9be385076b759675e98241811ac7f"]];
for(const [name,hash] of figures){
 const bytes=fs.readFileSync("docs/assets/images/thpt/"+name);
 assert.equal(blob(bytes),hash,"Changed D5 SVG: "+name);
 assert(!bytes.toString("utf8").includes("<script"));
}
for(const n of [9,10,11]){
 assert.equal(bank.forLesson(n,"core").length,2);assert.equal(bank.forLesson(n,"practice").length,6);
 const p=text("docs/thpt-preview/sgk/chuong-iv/bai-"+n+".md");
 assert(p.includes("## 1. Kiến thức SGK")&&p.includes("## 2. Ví dụ"));
 assert.equal((p.match(/^### Ví dụ \d+\./gm)||[]).length,3);
 assert.equal((p.match(/data-thpt-help-id=/g)||[]).length,2);
 for(const kind of ["core","practice"])assert(text("docs/thpt-preview/sgk/chuong-iv/luyen-tap.md").includes('data-thpt-open-quiz="b'+n+'-'+kind+'"'));
}
const written=text("docs/thpt-preview/thu-vien/tu-luan-chuong-iv-b09-b11.md");
for(const id of ["THPT-G10-CHIV-W09","THPT-G10-CHIV-W10","THPT-G10-CHIV-W11-ANCHOR"])
 assert.equal(written.split('data-thpt-written-canonical="'+id+'"').length-1,1);
const banks=["thpt-chi-reviewed-formative-v1.js","thpt-chii-reviewed-formative-v1.js",
"thpt-chiii-reviewed-formative-v1.js","thpt-chiv-b07-b08-reviewed-formative-v1.js",
"thpt-chvi-reviewed-formative-v1.js","thpt-chvii-reviewed-formative-v1.js",
"thpt-chviii-reviewed-formative-v1.js","thpt-chix-reviewed-formative-v1.js"];
const existing=banks.flatMap(name=>[...text("docs/assets/javascripts/"+name).matchAll(/"item_id"\s*:\s*"([^"]+)"/g)].map(m=>m[1]));
assert.equal(new Set(existing).size,existing.length);
assert.equal(new Set([...existing,...bank.records.map(x=>x.item_id)]).size,existing.length+24,"Duplicate canonical ID");
assert(!/data-thpt-readiness|data-mastery-credit/.test(text("docs/thpt-preview/sgk/chuong-iv/tu-kiem-tra-chuong.md")));
if(process.argv.includes("--built")){
 for(const n of [9,10,11])assert(fs.existsSync("site/thpt-preview/sgk/chuong-iv/bai-"+n+"/index.html"));
 assert(fs.existsSync("site/thpt-preview/thu-vien/tu-luan-chuong-iv-b09-b11/index.html"));
}
console.log("PASS: B09–B11 24 source-identical public items, 3 original SVG, 3 canonical Written, 6 D6, 0 ID overlap, no Readiness/Mastery");
