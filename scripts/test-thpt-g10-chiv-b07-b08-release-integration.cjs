"use strict";
const assert=require("node:assert/strict"),fs=require("node:fs"),vm=require("node:vm"),crypto=require("node:crypto");
const expected={
  "THPT-G10-B07-C01": "b6d1ad26",
  "THPT-G10-B07-C02": "87ac2f9b",
  "THPT-G10-B07-P01": "09c8dd25",
  "THPT-G10-B07-P02": "578fc854",
  "THPT-G10-B07-P03": "d967dd1d",
  "THPT-G10-B07-P04": "b12dcf05",
  "THPT-G10-B07-P05": "61c18f28",
  "THPT-G10-B07-P06": "21ccccea",
  "THPT-G10-B08-C01": "2d203884",
  "THPT-G10-B08-C02": "853e65df",
  "THPT-G10-B08-P01": "3a60c549",
  "THPT-G10-B08-P02": "b32d972c",
  "THPT-G10-B08-P03": "a27f848d",
  "THPT-G10-B08-P04": "2aa9e61f",
  "THPT-G10-B08-P05": "689bed99",
  "THPT-G10-B08-P06": "29bc90b0"
};
const fnv=s=>{let h=2166136261;for(let i=0;i<s.length;i++)h=Math.imul(h^s.charCodeAt(i),16777619)>>>0;return h.toString(16).padStart(8,"0")};
const ctx={window:{}};vm.runInNewContext(fs.readFileSync("docs/assets/javascripts/thpt-chiv-b07-b08-reviewed-formative-v1.js","utf8"),ctx);
const bank=ctx.window.THPT_CHIV_B07_B08_REVIEWED_FORMATIVE;assert(bank?.validate().valid);assert.equal(bank.records.length,16);assert.equal(bank.records.filter(x=>x.options).length,8);assert.equal(bank.records.filter(x=>!x.options).length,8);
assert.deepEqual(Object.keys(expected).sort(),Array.from(bank.records,x=>x.item_id).sort());
for(const it of bank.records){const match=it.solution.match(/^Đáp án: ([^\n]*)\nLời giải: ([\s\S]*)$/);assert(match,"missing solution "+it.item_id);const raw=[it.stem,it.options?.join(" | ")||"",match[1],it.hint,match[2]].join("\u241f");assert.equal(fnv(raw),expected[it.item_id],"Academic source changed "+it.item_id);assert.equal(it.exposure,"FORMATIVE_ONLY");}
for(const n of [7,8]){assert.equal(bank.forLesson(n,"core").length,2);assert.equal(bank.forLesson(n,"practice").length,6);const p=fs.readFileSync("docs/thpt-preview/sgk/chuong-iv/bai-"+n+".md","utf8");assert.equal((p.match(/data-thpt-help-id=/g)||[]).length,2);assert(p.includes("## 1. Kiến thức SGK"));assert(!/NotebookLM|ACADEMIC_REVIEWED|PILOT_PARTIAL/i.test(p));}
for(const [name,sha] of [["THPT_G10_B07_PARALLELOGRAM_EQUAL_OPPOSITE_D5_R01.svg","55ec9add04cb79da2cad7703b3897271e5b3436a"],["THPT_G10_B08_TRIANGLE_PARALLELOGRAM_SUM_D5_R01.svg","3d7550c8667ed8ea629563b8078ae3dfbc680135"]]){const bytes=fs.readFileSync("docs/assets/images/thpt/"+name);assert.equal(crypto.createHash("sha1").update(Buffer.concat([Buffer.from("blob "+bytes.length+"\0"),bytes])).digest("hex"),sha,"SVG source altered");}
const written=fs.readFileSync("docs/thpt-preview/thu-vien/tu-luan-chuong-iv-b07-b08.md","utf8");for(const id of ["THPT-G10-CHIV-W07","THPT-G10-CHIV-W08-ANCHOR"])assert(written.includes('data-thpt-written-canonical="'+id+'"'));
const ready=fs.readFileSync("docs/thpt-preview/sgk/chuong-iv/tu-kiem-tra-chuong.md","utf8");assert(!/data-thpt-readiness|answerKey|data-mastery-credit/.test(ready));console.log("PASS ChIV B07/B08 16/16 exact source item hashes, 8 MCQ+8 short, 2 original SVG, 2 Written and 4 D6; no Readiness or Mastery");
