#!/usr/bin/env node
"use strict";
// UI-only regression guard for G10 SGK lesson headings and rendered display TeX.
// Does not inspect or modify item banks, held-out Readiness, scores or Mastery.
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const root = path.resolve(__dirname, "..");
const read = p => fs.readFileSync(path.join(root,p),"utf8");
const built = process.argv.includes("--built");
const listed = {
  i:[1,2], ii:[3,4], iii:[5,6],
  vii:[19,20,21], viii:[23,24,25], ix:[26,27]
};
const htmlDecode = value => value
 .replace(/&lt;/g,"<").replace(/&gt;/g,">")
 .replace(/&amp;/g,"&").replace(/&quot;/g,'"')
 .replace(/&#39;|&#x27;/g,"'");
for (const [chapter,nums] of Object.entries(listed)) for(const num of nums) {
  const base = "thpt-preview/sgk/chuong-"+chapter+"/bai-"+num;
  const source = read("docs/"+base+".md");
  const exampleSection = [19,20,21].includes(num) ? 3 : 2;
  assert(new RegExp("^## "+exampleSection+"\\. Ví dụ$","m").test(source),
    "B"+num+": student example heading should be 'Ví dụ' only");
  assert(!/Ví dụ giải mẫu|Ví dụ đã giải|Ví dụ mẫu có giải thích|Ví dụ từng bước|Ví dụ có kiểm tra/.test(source),
    "B"+num+": redundant example labels are not learner-facing");
  if(num === 1 || num === 2){
    const subs = [...source.matchAll(/^### (1\.\d+)\. /gm)].map(m=>m[1]);
    assert.deepEqual(subs,["1.1","1.2","1.3","1.4"],
      "B"+num+": four subsections must have hierarchical numbering");
  }
  if([3,5,6].includes(num)) {
    const mathBlocks = [...source.matchAll(/(?:^|\n\n)\\\[\n([\s\S]*?)\n\\\](?=\n\n|$)/g)].map(m=>m[1].trim());
    const open = (source.match(/^\\\[$/gm)||[]).length;
    const close = (source.match(/^\\\]$/gm)||[]).length;
    assert(open>0 && mathBlocks.length===open && close===open,
      "B"+num+": block TeX must be separated into Markdown paragraphs");
    if(built){
      const html=read("site/"+base+"/index.html");
      const rendered=[...html.matchAll(/<div class="arithmatex">\\\[([\s\S]*?)\\\]<\/div>/g)].map(m=>m[1].trim());
      assert.equal(rendered.length,mathBlocks.length,"B"+num+": TeX leaked as raw delimiters");
      for(let i=0;i<mathBlocks.length;i++)
        assert.equal(htmlDecode(rendered[i]),mathBlocks[i],
          "B"+num+": mathematical content changed in rendered formula "+(i+1));
    }
  }
  if(built){
    const html=read("site/"+base+"/index.html");
    assert(new RegExp("<h2[^>]*>"+exampleSection+"\\. Ví dụ(?:<|\\s)").test(html),
      "B"+num+": built heading incorrect");
  }
  console.log("PASS G10 SGK B"+String(num).padStart(2,"0")+": headings"+(built?" / built HTML":" / source"));
}
