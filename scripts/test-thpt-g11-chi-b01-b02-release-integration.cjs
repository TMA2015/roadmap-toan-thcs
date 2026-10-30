"use strict";
const fs=require("node:fs"),vm=require("node:vm"),crypto=require("node:crypto"),assert=require("node:assert/strict");
const read=p=>fs.readFileSync(p,"utf8");
const blobHash=b=>crypto.createHash("sha1").update(Buffer.concat([Buffer.from("blob "+b.length+"\0"),b])).digest("hex");
const p="prototypes/thpt/content-drafts/THPT_G11_CHI_B01_B02_D1D6_AUTHORING_R01_SNAPSHOT.md";
const b=fs.readFileSync(p),hash="f0e737f2d07a27f233615345b60070319d5bd00f";
assert.equal(blobHash(b),hash,"Academic snapshot byte hash changed");
const src=b.toString("utf8");
const d3=src.slice(src.indexOf("## 4. D3"),src.indexOf("## 5. D4"));
const heads=[...d3.matchAll(/^### (THPT-G11-B(01|02)-[CP]\d{2}) — (SGK_CORE|SGK_PRACTICE) · ([A-Z0-9_-]+) · ([A-Z_]+)\s*$/gm)];
assert.equal(heads.length,16,"16 canonical formative only");
const field=(s,name)=>{const x=s.split("\n").find(line=>line.startsWith("**"+name+":**"));assert(x,"missing "+name);return x.slice(("**"+name+":**").length).trim()};
const expected=heads.map((m,i)=>{const text=d3.slice(m.index+m[0].length,i+1<heads.length?heads[i+1].index:d3.length);return{
 item_id:m[1],lesson:String(Number(m[2])),grade:"11",role:m[3]==="SGK_CORE"?"CORE":"PRACTICE",
 skill:m[4],stem:field(text,"Đề"),hint:field(text,"Gợi ý"),
 solution:"Đáp án: "+field(text,"Đáp án")+"\nLời giải: "+field(text,"Lời giải"),
 difficulty:m[5],exposure:"FORMATIVE_ONLY"
}});
const window={},context={window};
vm.runInNewContext(read("docs/assets/javascripts/thpt-g11-chi-reviewed-formative-v1.js"),context);
const bank=window.THPT_G11_CHI_REVIEWED_FORMATIVE;
assert(bank?.validate().valid,"G11 bank invalid");
assert.equal(JSON.stringify(bank.records),JSON.stringify(expected),"G11 runtime items differ from immutable academic source");
const prior=["thpt-chi-reviewed-formative-v1.js","thpt-chii-reviewed-formative-v1.js","thpt-chiii-reviewed-formative-v1.js","thpt-chiv-b07-b08-reviewed-formative-v1.js","thpt-chiv-b09-b11-reviewed-formative-v1.js","thpt-chvi-reviewed-formative-v1.js","thpt-chvii-reviewed-formative-v1.js","thpt-chviii-reviewed-formative-v1.js","thpt-chix-reviewed-formative-v1.js"].flatMap(n=>[...read("docs/assets/javascripts/"+n).matchAll(/"item_id"\s*:\s*"([^"]+)"/g)].map(x=>x[1]));
const ids=[...prior,...bank.records.map(x=>x.item_id)];
assert.equal(new Set(ids).size,ids.length,"Canonical public ID collision");
const written=read("docs/thpt-preview/thu-vien/tu-luan-g11-chuong-i-b01-b02.md");
for(const id of ["THPT-G11-CHI-W01","THPT-G11-CHI-W02-ANCHOR"])
 assert.equal(written.split('data-thpt-written-canonical="'+id+'"').length-1,1,"Written/Anchor must be single library");
const svg=[
["THPT_G11_B01_UNIT_CIRCLE_5PI6_D5_R01.svg","a75d70c2dbbedce6934f0f4521c159dd9045844e"],
["THPT_G11_B02_ANGLE_SUM_60_30_D5_R01.svg","b6cb63f72bbd7d93231c457baf19c4942114957b"]];
for(const [name,sha] of svg){const bytes=fs.readFileSync("docs/assets/images/thpt/"+name);assert.equal(blobHash(bytes),sha);assert(!/<script/i.test(bytes.toString()));}
for(const [n,numExamples,nPractice] of [[1,3,5],[2,4,7]]){
 const page=read("docs/thpt-preview/sgk/lop-11/chuong-i/bai-"+n+".md");
 assert(page.includes("## 1. Kiến thức SGK")&&page.includes("## 2. Ví dụ"));
 assert.equal((page.match(/^### Ví dụ \d+\./gm)||[]).length,numExamples);
 assert.equal((page.match(/data-thpt-help-id=/g)||[]).length,2);
 assert.equal(bank.forLesson(n,"core").length,2);
 assert.equal(bank.forLesson(n,"practice").length,nPractice);
 const hub=read("docs/thpt-preview/sgk/lop-11/chuong-i/luyen-tap.md");
 for(const role of ["core","practice"])assert(hub.includes('data-thpt-open-quiz="g11-b'+n+'-'+role+'"'));
}
const modal=read("docs/assets/javascripts/thpt-r4-preview.js");
assert(modal.includes("THPT_G11_CHI_REVIEWED_FORMATIVE"));
assert(modal.includes('const parsedG11='));
const blocked=read("docs/thpt-preview/sgk/lop-11/chuong-i/tu-kiem-tra-chuong.md");
assert(blocked.includes("CHƯA KÍCH HOẠT"));
assert(!/data-thpt-readiness|data-mastery-credit|data-scoring-engine/i.test(blocked));
if(process.argv.includes("--built")){
 for(const n of [1,2])assert(fs.existsSync("site/thpt-preview/sgk/lop-11/chuong-i/bai-"+n+"/index.html"));
 assert(fs.existsSync("site/thpt-preview/thu-vien/tu-luan-g11-chuong-i-b01-b02/index.html"));
}
console.log("PASS G11 B01–B02: 16 source-identical public canonical items, 2 Written, 2 original SVG, 4 D6, no Mastery/Readiness, all G10 bank IDs preserved");
