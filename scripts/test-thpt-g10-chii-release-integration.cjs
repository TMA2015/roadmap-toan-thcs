"use strict";
const assert=require("node:assert/strict"),fs=require("node:fs"),vm=require("node:vm");
/* Source reviewed snapshot Git blob acea9776d1c7534a4cd0cd28e98db26dedf0c122, 16 C/P MCQ with all four original options and hidden answer key. */
const expected={
  "THPT-G10-B03-C01": "4b840fd3",
  "THPT-G10-B03-C02": "3ae54ede",
  "THPT-G10-B03-P01": "8fba8444",
  "THPT-G10-B03-P02": "3143bb96",
  "THPT-G10-B03-P03": "f85101bb",
  "THPT-G10-B03-P04": "95b7aebd",
  "THPT-G10-B03-P05": "3bab04e9",
  "THPT-G10-B03-P06": "102c76ba",
  "THPT-G10-B04-C01": "6bc650bf",
  "THPT-G10-B04-C02": "6584c700",
  "THPT-G10-B04-P01": "7e1b3883",
  "THPT-G10-B04-P02": "faf9e96a",
  "THPT-G10-B04-P03": "bfdbcb2a",
  "THPT-G10-B04-P04": "78c64873",
  "THPT-G10-B04-P05": "52012daf",
  "THPT-G10-B04-P06": "a64e3b97"
};
const fnv=s=>{let h=2166136261;for(let i=0;i<s.length;i++)h=Math.imul(h^s.charCodeAt(i),16777619)>>>0;return h.toString(16).padStart(8,"0")};
const ctx={window:{}};vm.runInNewContext(fs.readFileSync("docs/assets/javascripts/thpt-chii-reviewed-formative-v1.js","utf8"),ctx);const bank=ctx.window.THPT_CHII_REVIEWED_FORMATIVE;
assert(bank?.validate().valid);assert.equal(bank.records.length,16);assert.equal(Object.keys(expected).length,16);
for(const item of bank.records){assert.equal(fnv(JSON.stringify(item)),expected[item.item_id],"Review source drift "+item.item_id);assert.equal(item.options.length,4);assert(item.options.every((t,i)=>t.startsWith("ABCD"[i]+".")))}
for(const n of [3,4]){assert.equal(bank.forLesson(n,"core").length,2);assert.equal(bank.forLesson(n,"practice").length,6);
 const md=fs.readFileSync("docs/thpt-preview/sgk/chuong-ii/bai-"+n+".md","utf8");assert.equal((md.match(/data-thpt-help-id="HELP-G10-B0[34]-\d\d"/g)||[]).length,2);
 for(const m of md.matchAll(/data-thpt-formative-id="(THPT-G10-B0[34]-[CP]\d\d)" href="\.\.\/luyen-tap\/\?item=([^"]+)"/g)){assert.equal(m[1],m[2]);assert(expected[m[1]]);}
 const fig=n===3?"THPT_G10_B03_HALFPLANES_D5_R01.svg":"THPT_G10_B04_FEASIBLE_POLYGON_D5_R01.svg";assert(md.includes("assets/images/thpt/"+fig));const svg=fs.readFileSync("docs/assets/images/thpt/"+fig,"utf8");for(const x of ["<svg","viewBox=","<title","<desc"])assert(svg.includes(x));
 assert(!/(NotebookLM|REVIEWED D\d|ACADEMIC_REVIEW_PENDING|candidate)/i.test(md));
}
const lib=fs.readFileSync("docs/thpt-preview/thu-vien/tu-luan-chuong-ii.md","utf8");const ws=[...lib.matchAll(/data-thpt-written-canonical="(THPT-G10-CHII-W[\w-]+)"/g)].map(x=>x[1]);assert.equal(ws.length,2);assert.equal(new Set(ws).size,2);assert.deepEqual(ws,["THPT-G10-CHII-W03","THPT-G10-CHII-W04-ANCHOR"]);
for(const js of ["thpt-chvi","thpt-chvii","thpt-chviii","thpt-chix","thpt-chi"]){const path="docs/assets/javascripts/"+js+"-reviewed-formative-v1.js";if(!fs.existsSync(path))continue;const t=fs.readFileSync(path,"utf8");for(const id of [...Object.keys(expected),...ws])assert(!t.includes('"item_id": "'+id+'"'),"Canonical collision "+id);}
const nav=fs.readFileSync("mkdocs.thpt-preview.yml","utf8");assert(nav.includes("thpt-chii-reviewed-formative-v1.js")&&nav.includes("sgk/chuong-ii/bai-3.md")&&nav.includes("tu-luan-chuong-ii.md"));
const rt=fs.readFileSync("docs/assets/javascripts/thpt-r4-preview.js","utf8");assert(rt.includes("THPT_CHII_REVIEWED_FORMATIVE")&&rt.includes("thpt-r4-formative-options"));
const idle=fs.readFileSync("docs/thpt-preview/sgk/chuong-ii/tu-kiem-tra-chuong.md","utf8");assert(idle.includes("chưa mở")&&!/THPT-G10-CHII-RD\d\d/.test(idle+lib+fs.readFileSync("docs/assets/javascripts/thpt-chii-reviewed-formative-v1.js","utf8")));
console.log("PASS G10 ChII R1: 16/16 exact MCQ source choices & answers, 2 Written, 2 SVG, 4 D6, 0 duplicate or protected Readiness");
