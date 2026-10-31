"use strict";
const assert=require("node:assert/strict"),fs=require("node:fs"),vm=require("node:vm"),crypto=require("node:crypto");
const read=p=>fs.readFileSync(p,"utf8");
const blob=p=>{const b=fs.readFileSync(p);return crypto.createHash("sha1").update(Buffer.concat([Buffer.from("blob "+b.length+"\0"),b])).digest("hex")};
const sourcePath="prototypes/thpt/content-drafts/THPT_G10_CHV_B12_B14_D1D6_AUTHORING_R01_SNAPSHOT.md";
assert.equal(blob(sourcePath),"49502fe39cf0a67f6a3e973a77f94164150637a7","Immutable reviewed R01 source changed");
const src=read(sourcePath),part=src.slice(src.indexOf("## 5. D3"),src.indexOf("## 6. D4"));
const heads=[...part.matchAll(/^### \d{2}\. \x60(THPT-G10-B\d{2}-[CP]\d{2})\x60/gm)];
const field=(s,k)=>{const line=s.split("\n").find(x=>x.startsWith("- **"+k+":** "));return line?line.slice(("- **"+k+":** ").length).trim():""};
const math=s=>s.replace(/\\\((.*?)\\\)/g,(_,m)=>"$"+m+"$").replace(/\\\[([\s\S]*?)\\\]/g,(_,m)=>"$$"+m+"$$");
const expected=heads.filter(m=>m[1].startsWith("THPT-G10-B12-")).map(m=>{
 const i=heads.findIndex(h=>h.index===m.index),b=part.slice(m.index,heads[i+1]?.index||part.length);
 const meta=field(b,"LESSON_ID"),role=(meta.match(/\x60SGK_(CORE|PRACTICE)\x60/)||[])[1];
 const skill=(meta.match(/OUTCOME_ID:\*\* \x60([^\x60]+)/)||[])[1],difficulty=(meta.match(/DIFFICULTY:\*\* \x60([^\x60]+)/)||[])[1];
 const opts=field(b,"OPTIONS").split(" | ").filter(Boolean).map(math);
 return {item_id:m[1],lesson:"12",role:role==="CORE"?"CORE":"PRACTICE",skill,stem:math(field(b,"STEM")),
 ...(opts.length?{options:opts,answerKey:(field(b,"KEY_CHOICE").match(/\x60([A-D])\x60/)||[])[1]}:{}),
 solution:"Đáp án: "+math(field(b,"KEY"))+"\nLời giải: "+math(field(b,"WORKED_SOLUTION")),
 hint:math(field(b,"HINT_PUBLIC_ONLY")),exposure:"FORMATIVE_ONLY",difficulty};
});
assert.equal(expected.length,8);
const ctx={window:{}};vm.runInNewContext(read("docs/assets/javascripts/thpt-chv-b12-reviewed-formative-r02.js"),ctx);
const bank=ctx.window.THPT_CHV_B12_REVIEWED_FORMATIVE;
assert(bank?.validate().valid,"B12 canonical bank invalid");
assert.equal(JSON.stringify(bank.records),JSON.stringify(expected),"B12 data not equal to independently reviewed R01 source");
assert.equal(bank.forLesson("12","core").length,2);assert.equal(bank.forLesson("12","practice").length,6);
assert.equal(blob("docs/assets/javascripts/thpt-chv-b13-b14-reviewed-formative-v1.js"),"ddd5ec947029f644865110f2f381047214499e3e","Published B13/14 bank altered");
const ctx13={window:{}};vm.runInNewContext(read("docs/assets/javascripts/thpt-chv-b13-b14-reviewed-formative-v1.js"),ctx13);
const bank13=ctx13.window.THPT_CHV_B13_B14_REVIEWED_FORMATIVE;
assert(bank13.validate().valid);
assert.equal(new Set([...bank.records,...bank13.records].map(x=>x.item_id)).size,24,"Canonical collision B12 vs B13/14");
const page=read("docs/thpt-preview/sgk/chuong-v/bai-12.md");
assert.equal((page.match(/^### Ví dụ [123]\./gm)||[]).length,3);
for(const name of ["Đúng/gần đúng và số quy tròn","Sai số tuyệt đối, độ chính xác","Sai số tương đối","Giới hạn độ chính xác và quy tròn"])assert(page.includes(name),"missing theory "+name);
const fig="docs/assets/images/thpt/THPT_G10_B12_ERROR_INTERVAL_D5_R02_REVIEWED.svg";
assert.equal(blob(fig),"fede1bb23334ff7bd66a6f5a6adc39cf856c5d52","Source locked FIG01 R02 differs");
const svg=read(fig);
assert(svg.includes("a = 20,0 cm")&&svg.includes("19,9 ≤ ā ≤ 20,1 cm")&&svg.includes("Vùng có thể chứa số đúng ā"));
assert(!svg.includes("ā = 20,0 cm"),"Old incorrect R01 SVG slipped in");
assert(page.includes('data-thpt-fig-id="FIG-G10-B12-01"')&&page.includes("THPT_G10_B12_ERROR_INTERVAL_D5_R02_REVIEWED.svg"));
const overlays=[
 ["01","2cecaba020881a560bc33251c38d55cc10a05516","THPT-G10-B12-C02"],
 ["02","913400d6aff63befac95a8a47a00870663dd0096","THPT-G10-B12-P06"]
];
for(const [num,sha,id] of overlays){
 const overlay="prototypes/thpt/content-drafts/THPT_G10_CHV_B12_D6_HELP"+num+"_R02_CANONICAL_SOURCE_OVERLAY_20261030.md";
 assert.equal(blob(overlay),sha,"Reviewed R02 HELP source altered");
 const raw=read(overlay),hi=raw.indexOf("### \x60HELP-G10-B12-"+num+"\x60"),end=raw.indexOf("\n## ",hi+4);
 assert(hi>0,"Missing HELP R02");
 const steps=[...raw.slice(hi,end>0?end:undefined).matchAll(/^- \*\*(\d)\. ([^*]+):\*\* (.+)$/gm)];
 assert.equal(steps.length,5,"Incomplete R02 D6");
 assert(page.includes('data-thpt-help-id="HELP-G10-B12-'+num+'"'));
 assert.equal(page.split('data-thpt-help-id="HELP-G10-B12-'+num+'"').length-1,1,"Duplicate helper");
 assert(page.includes("?item="+id),"Broken linked canonical practice");
 for(const m of steps)assert(page.includes(m[2]),"Missing reviewed stage "+num+" "+m[2]);
}
const written=read("docs/thpt-preview/thu-vien/tu-luan-chuong-v-b13-b14.md");
for(const id of ["THPT-G10-CHV-W12","THPT-G10-CHV-W13","THPT-G10-CHV-W14-ANCHOR"])
 assert.equal(written.split('data-thpt-written-canonical="'+id+'"').length-1,1);
const w12=src.slice(src.indexOf("### \x60THPT-G10-CHV-W12\x60"),src.indexOf("### \x60THPT-G10-CHV-W13\x60"));
assert(written.includes(field(w12,"STEM")),"W12 exact stem not preserved");
const overview=read("docs/thpt-preview/sgk/chuong-v.md"),practice=read("docs/thpt-preview/sgk/chuong-v/luyen-tap.md");
assert.equal((overview.match(/class="thpt-r4-tile"/g)||[]).length,3,"Golden VII 3 lesson tiles");
assert.equal((practice.match(/data-thpt-open-quiz=/g)||[]).length,6,"Expected 3x2 lesson practice placements");
for(const k of ["b12-core","b12-practice"])assert(practice.includes('data-thpt-open-quiz="'+k+'"'));
const root=read("docs/assets/javascripts/thpt-r4-preview.js");
assert.equal(root.split("THPT_CHV_B12_REVIEWED_FORMATIVE").length-1,2);
assert(root.includes('"12":"Số gần đúng và sai số"'));
assert(root.includes("|11|12|13|14|19|"),"B12 canonical D6 deep-link allowlist not active");
for(const p of ["mkdocs.yml","mkdocs.thpt-preview.yml"])assert(read(p).includes("assets/javascripts/thpt-chv-b12-reviewed-formative-r02.js"),"Missing B12 script in "+p);
const readiness=read("docs/thpt-preview/sgk/chuong-v/tu-kiem-tra-chuong.md");
assert(readiness.includes("chưa kích hoạt")&&!readiness.includes("data-mastery-credit"));
if(process.argv.includes("--built")){
 for(const p of ["site/thpt-preview/sgk/chuong-v/bai-12/index.html","site/thpt-preview/sgk/chuong-v/luyen-tap/index.html"])
  assert(fs.existsSync(p),"Missing built public page "+p);
}
console.log("PASS G10 ChV B12 R1: source 8/8, FIG01 R02 exact, HELP01/02 R02 5-step/ID, Written, Golden VII, 24 total IDs, inactive Readiness");
