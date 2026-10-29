#!/usr/bin/env node
"use strict";
// DELTA_A_UI: verify all reviewed display math is isolated from paragraphs.
const assert=require("node:assert/strict"),fs=require("node:fs"),path=require("node:path");
const root=path.resolve(__dirname,".."),read=p=>fs.readFileSync(path.join(root,p),"utf8");
const expected={15:1,16:4,17:4,18:8},built=process.argv.includes("--built");
for(const [lesson,expectedCount] of Object.entries(expected)){
 const source=read("docs/thpt-preview/sgk/chuong-vi/bai-"+lesson+".md");
 const blocks=[...source.matchAll(/(?:^|\n\n)\\\[\n([\s\S]*?)\n\\\](?=\n\n|$)/g)].map(m=>m[1].trim());
 assert.equal((source.match(/\\\[\n/g)||[]).length,expectedCount,"B"+lesson+": opening delimiters");
 assert.equal((source.match(/\n\\\]/g)||[]).length,expectedCount,"B"+lesson+": closing delimiters");
 assert.equal(blocks.length,expectedCount,"B"+lesson+": display math must have blank lines around it");
 const inline=[...source.matchAll(/\\\\\(([\\s\\S]*?)\\\\\)/g)].map(m=>m[1]);
 if(lesson==="17"||lesson==="18"){
  assert.equal(inline.length,lesson==="17"?130:59,"B"+lesson+": full-page inline formula count changed");
  const hidden=source.slice(source.indexOf("<details><summary>"),source.indexOf("</details>")+10);
  assert.equal((hidden.match(/<span class="arithmatex">\\\\\(/g)||[]).length,9,
   "B"+lesson+": 9 hidden answer formulas must be individually wrapped for MathJax");
 }
 if(built){
  const html=read("site/thpt-preview/sgk/chuong-vi/bai-"+lesson+"/index.html");
  const start=html.indexOf('<article class="md-content__inner md-typeset">');
  const end=html.indexOf("</article>",start);
  assert(start>0&&end>start,"B"+lesson+": compiled lesson article missing");
  const article=html.slice(start,end);
  const htmlInline=[...article.matchAll(/<span class="arithmatex">\\\\\(([\\s\\S]*?)\\\\\)<\\/span>/g)].map(m=>m[1]);
  const decode=t=>t.replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&amp;/g,"&").replace(/&quot;/g,'"').replace(/&#39;/g,"'");
  assert.equal(htmlInline.length,inline.length,"B"+lesson+": inline formula omitted during Markdown/HTML parsing");
  for(let i=0;i<inline.length;i++)
   assert.equal(decode(htmlInline[i]),inline[i],"B"+lesson+": formula mismatch in full article at inline "+(i+1));
  const outside=article.replace(/<(?:span|div) class="arithmatex">[\\s\\S]*?<\\/(?:span|div)>/g,"");
  assert(!/\\\\(?:sqrt|iff|Delta|frac|ge|le|infty|begin\\{|mathbb|boxed)\\b/.test(outside),
   "B"+lesson+": stray visible TeX left outside MathJax wrappers");
  if(lesson==="17"||lesson==="18"){
   assert.equal((article.match(/<details><summary>/g)||[]).length,1,"B"+lesson+": answer details disclosure changed");
   const answer=article.slice(article.indexOf("<details><summary>"),article.indexOf("</details>")+10);
   assert.equal((answer.match(/<span class="arithmatex">/g)||[]).length,9,
     "B"+lesson+": hidden answers must have all nine rendered formula wrappers");
  }

  const rendered=[...html.matchAll(/<div class="arithmatex">\\\[([\s\S]*?)\\\]<\/div>/g)].map(m=>m[1].trim());
  assert.equal(rendered.length,expectedCount,"B"+lesson+": math rendered as raw Markdown/TeX");
  assert(!html.includes("\n[\n"),"B"+lesson+": raw display bracket in published HTML");
  for(let i=0;i<blocks.length;i++){
   const text=rendered[i].replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&amp;/g,"&").replace(/&#39;/g,"'");
   assert.equal(text,blocks[i],"B"+lesson+": TeX expression changed during build at block "+(i+1));
  }
 }
 console.log("PASS B"+lesson+": "+expectedCount+" TeX display blocks"+(built?" in HTML":""));
}