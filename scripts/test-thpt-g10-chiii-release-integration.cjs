"use strict";
const assert=require("node:assert/strict"),fs=require("node:fs"),vm=require("node:vm"),crypto=require("node:crypto");
/* Snapshot G10 ChIII B05–B06 source Git blob 6320aeaa89bd51c514b07461e01fad5e3aca833f; original item content hashed without duplicating body. */
const expected={
  "THPT-G10-B05-C01": "dc59fc2b",
  "THPT-G10-B05-C02": "d351b450",
  "THPT-G10-B05-P01": "0e8f1c5b",
  "THPT-G10-B05-P02": "3c97d201",
  "THPT-G10-B05-P03": "34277541",
  "THPT-G10-B05-P04": "b658ad87",
  "THPT-G10-B05-P05": "ac009028",
  "THPT-G10-B05-P06": "f1d21981",
  "THPT-G10-B06-C01": "dfc4a3bb",
  "THPT-G10-B06-C02": "69e739a5",
  "THPT-G10-B06-P01": "0e439566",
  "THPT-G10-B06-P02": "5cf7008b",
  "THPT-G10-B06-P03": "bfb4461a",
  "THPT-G10-B06-P04": "c1e385cf",
  "THPT-G10-B06-P05": "e7c373d6",
  "THPT-G10-B06-P06": "6fa31be3"
};
const fnv=s=>{let h=2166136261;for(let i=0;i<s.length;i++)h=Math.imul(h^s.charCodeAt(i),16777619)>>>0;return h.toString(16).padStart(8,"0")};
const ctx={window:{}};vm.runInNewContext(fs.readFileSync("docs/assets/javascripts/thpt-chiii-reviewed-formative-v1.js","utf8"),ctx);
const bank=ctx.window.THPT_CHIII_REVIEWED_FORMATIVE;assert(bank?.validate().valid);
assert.equal(bank.records.length,16);assert.equal(bank.records.filter(x=>x.options).length,7);assert.equal(bank.records.filter(x=>!x.options).length,9);
for(const it of bank.records){const sol=it.solution.match(/^Đáp án: ([^\n]*)\nLời giải: ([\s\S]*)$/);assert(sol,"Answer/solution missing "+it.item_id);const key=[it.stem,it.options?.join(" | ")||"",sol[1],it.hint,sol[2]].join("\u241f");assert.equal(fnv(key),expected[it.item_id],"Original reviewed item changed "+it.item_id);assert.equal(it.exposure,"FORMATIVE_ONLY");}
assert.equal(new Set(bank.records.map(x=>x.item_id)).size,16);for(const lesson of [5,6]){assert.equal(bank.forLesson(lesson,"core").length,2);assert.equal(bank.forLesson(lesson,"practice").length,6);}
for(const [file,sha] of [["THPT_G10_B05_SEMICIRCLE_120_D5_R01.svg","6fd343ea37fdd1f737a17da245c18b7b82b3bc4d"],["THPT_G10_B06_COSINE_AREA_TRIANGLE_D5_R01.svg","0dd2f62277ae264fb4f6d6c99699d5a984a0b562"]]){const data=fs.readFileSync("docs/assets/images/thpt/"+file);const git=crypto.createHash("sha1").update(Buffer.concat([Buffer.from("blob "+data.length+"\0"),data])).digest("hex");assert.equal(git,sha,"Original D5 SVG changed: "+file);}
const written=fs.readFileSync("docs/thpt-preview/thu-vien/tu-luan-chuong-iii.md","utf8");for(const id of ["THPT-G10-CHIII-W05","THPT-G10-CHIII-W06-ANCHOR"])assert(written.includes('data-thpt-written-canonical="'+id+'"'));
for(const n of [5,6]){const page=fs.readFileSync("docs/thpt-preview/sgk/chuong-iii/bai-"+n+".md","utf8");assert.equal((page.match(/data-thpt-help-id=/g)||[]).length,2);assert(page.includes("## 1. Kiến thức và ví dụ"));assert(page.includes("Hình minh họa"));assert(!/NotebookLM|ACADEMIC_REVIEWED|PILOT_PARTIAL/.test(page));}
const ready=fs.readFileSync("docs/thpt-preview/sgk/chuong-iii/tu-kiem-tra-chuong.md","utf8");assert(!/data-thpt-readiness|data-mastery-credit|answerKey/.test(ready));
console.log("PASS G10 ChIII frozen source fingerprints 16/16, 7 MCQ + 9 short-answer, 2 exact D5 SVG, 2 Written and 4 D6 HELP, no Readiness/Mastery");
