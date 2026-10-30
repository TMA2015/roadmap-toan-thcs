"use strict";
const assert=require("node:assert/strict");
const fs=require("node:fs");const vm=require("node:vm");
/* Frozen source 95a554e31a613b8e215679fe6790738473d598df; per-item fingerprints recomputed against full reviewed item stem/answer/solution/hint/skill/role. */
const expected={
  "THPT-G10-B01-C01": "3e2bd213",
  "THPT-G10-B01-C02": "4f32a1fd",
  "THPT-G10-B01-P01": "c670ebad",
  "THPT-G10-B01-P02": "424ecc5c",
  "THPT-G10-B01-P03": "80c711f8",
  "THPT-G10-B01-P04": "a5ba5f0d",
  "THPT-G10-B01-P05": "3fc29a12",
  "THPT-G10-B01-P06": "30668e6a",
  "THPT-G10-B02-C01": "ef4c2057",
  "THPT-G10-B02-C02": "4fb2d09c",
  "THPT-G10-B02-P01": "f59b4893",
  "THPT-G10-B02-P02": "24d19c3e",
  "THPT-G10-B02-P03": "e0cd217b",
  "THPT-G10-B02-P04": "97a309fd",
  "THPT-G10-B02-P05": "75a5d7e1",
  "THPT-G10-B02-P06": "bbe40641"
};
const fnv=s=>{let h=2166136261;for(let i=0;i<s.length;i++)h=Math.imul(h^s.charCodeAt(i),16777619)>>>0;return h.toString(16).padStart(8,"0")};
const w={};vm.runInNewContext(fs.readFileSync("docs/assets/javascripts/thpt-chi-reviewed-formative-v1.js","utf8"),{window:w});const bank=w.THPT_CHI_REVIEWED_FORMATIVE;
assert(bank&&bank.validate().valid,"G10 ChI canonical bank must validate");
assert.equal(bank.records.length,16);assert.equal(Object.keys(expected).length,16);
const basic=r=>({item_id:r.item_id,lesson:r.lesson,role:r.role,skill:r.skill,stem:r.stem,solution:r.solution,hint:r.hint,exposure:r.exposure});
for(const r of bank.records){assert.equal(fnv(JSON.stringify(basic(r))),expected[r.item_id],"Reviewed item drift "+r.item_id);}
for(const n of [1,2]){assert.equal(bank.forLesson(n,"core").length,2);assert.equal(bank.forLesson(n,"practice").length,6);
 const md=fs.readFileSync("docs/thpt-preview/sgk/chuong-i/bai-"+n+".md","utf8");
 const helps=[...md.matchAll(/data-thpt-help-id="(HELP-G10-B0[12]-\d\d)"/g)].map(x=>x[1]);assert.equal(helps.length,2,"Two D6 cards per lesson");
 assert(helps.every(id=>id.includes("B0"+n)));
 for(const x of md.matchAll(/data-thpt-formative-id="(THPT-G10-B0[12]-[CP]\d\d)" href="\.\.\/luyen-tap\/\?item=([^"]+)"/g)){assert.equal(x[1],x[2]);assert(expected[x[1]],"D6 canonical link missing bank item "+x[1]);}
 const fig=n===1?"THPT_G10_B01_IMPLICATION_DIVISIBILITY_D5_R01.svg":"THPT_G10_B02_VENN_TWO_CLUBS_D5_R01.svg";
 assert(md.includes("assets/images/thpt/"+fig));const svg=fs.readFileSync("docs/assets/images/thpt/"+fig,"utf8");assert(svg.includes("<svg")&&svg.includes("viewBox=")&&svg.includes("<title")&&svg.includes("<desc"));
 assert(!/(NotebookLM|REVIEWED D\d|ACADEMIC_REVIEW_PENDING|candidate|snapshot)/i.test(md),"Reviewer-only status leaked into student page");
}
const lib=fs.readFileSync("docs/thpt-preview/thu-vien/tu-luan-chuong-i.md","utf8");const wids=[...lib.matchAll(/data-thpt-written-canonical="(THPT-G10-CHI-W[\w-]+)"/g)].map(x=>x[1]);
assert.deepEqual(wids,["THPT-G10-CHI-W01","THPT-G10-CHI-W02-ANCHOR"]);
assert.equal((lib.match(/<details>/g)||[]).length,2);
const all=[...new Set(bank.records.map(x=>x.item_id)),...wids];assert.equal(new Set(all).size,18);
for(const path of ["docs/assets/javascripts/thpt-chvi-reviewed-formative-v1.js","docs/assets/javascripts/thpt-chvii-reviewed-formative-v1.js","docs/assets/javascripts/thpt-chviii-reviewed-formative-v1.js","docs/assets/javascripts/thpt-chix-reviewed-formative-v1.js"]){const text=fs.readFileSync(path,"utf8");assert(all.every(id=>!text.includes('item_id": "'+id+'"')),"Canonical ID collision with "+path);}
const nav=fs.readFileSync("mkdocs.thpt-preview.yml","utf8");assert(nav.includes("thpt-chi-reviewed-formative-v1.js")&&nav.includes("thpt-preview/sgk/chuong-i/bai-1.md")&&nav.includes("thpt-preview/thu-vien/tu-luan-chuong-i.md"));
const rt=fs.readFileSync("docs/assets/javascripts/thpt-r4-preview.js","utf8");assert(rt.includes("THPT_CHI_REVIEWED_FORMATIVE")&&rt.includes("Number(lesson)<=2"));
const quiz=fs.readFileSync("docs/thpt-preview/sgk/chuong-i/tu-kiem-tra-chuong.md","utf8");assert(quiz.includes("chưa mở")&&!/THPT-G10-CHI-RD\d\d/.test(quiz+lib+fs.readFileSync("docs/assets/javascripts/thpt-chi-reviewed-formative-v1.js","utf8")));
console.log("PASS G10 ChI: 16/16 reviewed exact items, 2 Written, 4 D6, 2 accessible D5, canonical uniqueness, inactive assessment");
