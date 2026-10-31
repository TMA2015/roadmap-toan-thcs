"use strict";
const assert=require("node:assert/strict");
const fs=require("node:fs");
const paths={
 "chuong-i.md":[1,2],
 "chuong-ii.md":[3,4],
 "chuong-iii.md":[5,6],
 "chuong-iv.md":[7,8,9,10,11],
 "chuong-vi.md":[15,16,17,18],
 "chuong-vii.md":[19,20,21,22],
 "chuong-viii.md":[23,24,25],
 "chuong-ix.md":[26,27],
 "lop-11/chuong-i.md":[1,2]
};
let checked=0;
for(const [name,lessons] of Object.entries(paths)){
 const p="docs/thpt-preview/sgk/"+name;
 const src=fs.readFileSync(p,"utf8");
 assert(src.includes('class="thpt-r4-screen"')&&src.includes('data-thpt-r4'),p+" Golden shell");
 assert(src.includes('class="thpt-r4-eyebrow"')&&src.includes('class="thpt-r4-lead"'),p+" Golden heading");
 assert.equal((src.match(/class="thpt-r4-grid"/g)||[]).length,1,p+" requires exactly one ChVII grid");
 assert.equal((src.match(/class="thpt-r4-tile"/g)||[]).length,lessons.length,p+" lesson count");
 assert(!src.includes('class="thpt-r4-topic-grid"'),p+" no legacy alternate grid");
 const grid=src.match(/<div class="thpt-r4-grid">([\s\S]*?)<\/div>/);
 assert(grid,p+" grid closed");
 const cards=[...grid[1].matchAll(/<a class="thpt-r4-tile" href="bai-(\d+)\/"><span[^>]*>(\d+)<\/span><strong>([^<]*)<\/strong><small>([^<]*)<\/small><em>Học kiến thức →<\/em><\/a>/g)];
 assert.deepEqual(cards.map(x=>Number(x[1])),lessons,p+" wrong lesson routes");
 assert(cards.every(x=>x[1]===x[2]&&x[3]&&x[4]),p+" card number/title/description");
 const nav=src.match(/<(?:nav|div) class="thpt-r4-lesson-tabs"[^>]*>([\s\S]*?)<\/(?:nav|div)>/);
 assert(nav,p+" existing practice/assessment action row");
 const navlinks=[...nav[1].matchAll(/<a href="([^"]+)"/g)].map(x=>x[1]);
 assert(navlinks.includes("luyen-tap/")&&navlinks.includes("tu-kiem-tra-chuong/"),p+" original chapter actions");
 const all=[...src.matchAll(/<a\b[^>]*href="([^"]+)"/g)].map(x=>x[1]);
 assert.equal(new Set(all).size,all.length,p+" duplicate link");
 assert.equal(all.length,lessons.length+navlinks.length,p+" unexpected extra button");
 if(process.argv.includes("--built")){
  const target="site/thpt-preview/sgk/"+name.replace(/\.md$/,"/index.html");
  assert(fs.existsSync(target),target+" missing from one-site output");
 }
 checked++;
}
const pending="docs/thpt-preview/sgk/chuong-v.md";
if(fs.existsSync(pending)){
 const s=fs.readFileSync(pending,"utf8");
 assert(s.includes('class="thpt-r4-grid"')&&s.includes('class="thpt-r4-lesson-tabs"'),"ChV B13–14 release candidate must remain Golden VII");
}
console.log("PASS "+checked+" published chapter overviews: exact Golden VII cards, retained chapter action links, no extra buttons");
