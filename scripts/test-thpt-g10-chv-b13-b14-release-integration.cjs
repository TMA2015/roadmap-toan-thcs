"use strict";
const assert=require("node:assert/strict"),fs=require("node:fs"),vm=require("node:vm"),crypto=require("node:crypto");
const read=p=>fs.readFileSync(p,"utf8");
const gitBlob=b=>crypto.createHash("sha1").update(Buffer.concat([Buffer.from("blob "+b.length+"\0"),b])).digest("hex");
const sourcePath="prototypes/thpt/content-drafts/THPT_G10_CHV_B12_B14_D1D6_AUTHORING_R01_SNAPSHOT.md";
const raw=fs.readFileSync(sourcePath);
assert.equal(gitBlob(raw),"49502fe39cf0a67f6a3e973a77f94164150637a7","Immutable reviewed R01 source unexpectedly changed");
const source=raw.toString("utf8");
const part=source.slice(source.indexOf("## 5. D3"),source.indexOf("## 6. D4"));
const headings=[...part.matchAll(/^### \d{2}\. `(THPT-G10-B1[34]-[CP]\d{2})`/gm)];
assert.equal(headings.length,16,"Require 16 original reviewed B13-B14 formative IDs");
const field=(s,k)=>{const line=s.split("\n").find(x=>x.startsWith("- **"+k+":** "));assert(line,"missing "+k);return line.slice(("- **"+k+":** ").length).trim()};
const math=s=>s.replace(/\\\((.*?)\\\)/g,(_,m)=>"$"+m+"$").replace(/\\\[([\s\S]*?)\\\]/g,(_,m)=>"$$"+m+"$$");
const expected=headings.map((m,i)=>{
 const b=part.slice(m.index,headings[i+1]?.index||part.length),id=m[1],meta=field(b,"LESSON_ID");
 const lesson=(meta.match(/`G10-B(\d{2})`/)||[])[1],role=(meta.match(/`SGK_(CORE|PRACTICE)`/)||[])[1];
 const skill=(meta.match(/OUTCOME_ID:\*\* `([^`]+)/)||[])[1],difficulty=(meta.match(/DIFFICULTY:\*\* `([^`]+)/)||[])[1],opts=fieldOrEmpty(b,"OPTIONS").split(" | ").filter(Boolean).map(math);
 const record={item_id:id,lesson:String(Number(lesson)),role:role==="CORE"?"CORE":"PRACTICE",skill,stem:math(field(b,"STEM")),...(opts.length?{options:opts,answerKey:(field(b,"KEY_CHOICE").match(/`([A-D])`/)||[])[1]}:{}),solution:"Đáp án: "+math(field(b,"KEY"))+"\nLời giải: "+math(field(b,"WORKED_SOLUTION")),hint:math(field(b,"HINT_PUBLIC_ONLY")),exposure:"FORMATIVE_ONLY",difficulty};
 return record;
});
function fieldOrEmpty(s,k){const line=s.split("\n").find(x=>x.startsWith("- **"+k+":** "));return line?line.slice(("- **"+k+":** ").length).trim():""}
const ctx={window:{}};vm.runInNewContext(read("docs/assets/javascripts/thpt-chv-b13-b14-reviewed-formative-v1.js"),ctx);
const bank=ctx.window.THPT_CHV_B13_B14_REVIEWED_FORMATIVE;
assert(bank?.validate().valid,"Invalid scoped B13-B14 canonical bank");
assert.equal(JSON.stringify(bank.records),JSON.stringify(expected),"Runtime not exactly equivalent to reviewed R01 for B13-B14");
const others=["thpt-chi-reviewed-formative-v1.js","thpt-chii-reviewed-formative-v1.js","thpt-chiii-reviewed-formative-v1.js","thpt-chiv-b07-b08-reviewed-formative-v1.js","thpt-chiv-b09-b11-reviewed-formative-v1.js","thpt-chvi-reviewed-formative-v1.js","thpt-chvii-reviewed-formative-v1.js","thpt-chviii-reviewed-formative-v1.js","thpt-chix-reviewed-formative-v1.js","thpt-g11-chi-reviewed-formative-v1.js"];
const prior=others.flatMap(x=>[...read("docs/assets/javascripts/"+x).matchAll(/"item_id"\s*:\s*"([^"]+)"/g)].map(m=>m[1]));
assert.equal(new Set([...prior,...expected.map(x=>x.item_id)]).size,prior.length+16,"Canonical collision against existing G10/G11 bank");
const figureSource=source.slice(source.indexOf("## 7. D5"),source.indexOf("## 8. D6"));
for(const n of [13,14]){
 const figName=n===13?"THPT_G10_B13_QUARTILES_D5_R01.svg":"THPT_G10_B14_DISPERSION_D5_R01.svg";
 const offset=figureSource.indexOf("### `FIG-G10-B"+n+"-01`");
 assert(offset>=0,"Missing original frozen D5 figure "+n);
 const begin=figureSource.indexOf("```xml\n",offset)+7,end=figureSource.indexOf("\n```",begin);
 assert(begin>6&&end>begin);
 assert.equal(read("docs/assets/images/thpt/"+figName),figureSource.slice(begin,end).trim()+"\n","D5 SVG differs from original R01");
 const page=read("docs/thpt-preview/sgk/chuong-v/bai-"+n+".md");
 assert(page.includes("## 1. Kiến thức SGK")&&page.includes("## 2. Ví dụ")&&page.includes(figName));
 assert.equal((page.match(/^### Ví dụ [123]\./gm)||[]).length,3);
 assert.equal((page.match(/data-thpt-help-id=/g)||[]).length,2);
 for(const role of ["core","practice"])assert(read("docs/thpt-preview/sgk/chuong-v/luyen-tap.md").includes('data-thpt-open-quiz="b'+n+'-'+role+'"'));
 assert.equal(bank.forLesson(n,"core").length,2);
 assert.equal(bank.forLesson(n,"practice").length,6);
}
const written=read("docs/thpt-preview/thu-vien/tu-luan-chuong-v-b13-b14.md");
for(const id of ["THPT-G10-CHV-W13","THPT-G10-CHV-W14-ANCHOR"])assert.equal(written.split('data-thpt-written-canonical="'+id+'"').length-1,1);
assert(written.includes("không ghi điểm hay Skill Mastery"));
const root=read("docs/assets/javascripts/thpt-r4-preview.js");
assert.equal(root.split("THPT_CHV_B13_B14_REVIEWED_FORMATIVE").length-1,2);
assert(root.includes("Number(lesson)<=14?\"V\""));
assert(!/data-thpt-readiness|data-mastery-credit/.test(read("docs/thpt-preview/sgk/chuong-v/tu-kiem-tra-chuong.md")));
assert(read("docs/thpt-preview/sgk/chuong-v.md").includes('href="bai-12/"')&&read("docs/thpt-preview/sgk/chuong-v.md").includes("Tự kiểm tra · chưa kích hoạt"));
if(process.argv.includes("--built")){
 for(const n of [13,14])assert(fs.existsSync("site/thpt-preview/sgk/chuong-v/bai-"+n+"/index.html"));
 assert(fs.existsSync("site/thpt-preview/thu-vien/tu-luan-chuong-v-b13-b14/index.html"));
}
console.log("PASS G10 ChV B13-B14: 16/16 R01 source-equivalent public canonical, 2 exact SVG, 4 HELP, 2 Written/Anchor, inactive Readiness, no Mastery");
