#!/usr/bin/env node
"use strict";
// UI-only: verify 100% of B17/B18 display AND inline formula content reaches built HTML.
const assert=require("node:assert/strict"),fs=require("node:fs"),path=require("node:path");
const root=path.resolve(__dirname,".."),read=p=>fs.readFileSync(path.join(root,p),"utf8");
const displayExpected={15:1,16:4,17:4,18:8},inlineExpected={17:130,18:59};
const built=process.argv.includes("--built");
const decode=text=>text.replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&amp;/g,"&").replace(/&quot;/g,'"').replace(/&#39;/g,"'");
for(const [lesson,count] of Object.entries(displayExpected)){
 const source=read("docs/thpt-preview/sgk/chuong-vi/bai-"+lesson+".md");
 const displays=[...source.matchAll(/(?:^|\n\n)\\\[\n([\s\S]*?)\n\\\](?=\n\n|$)/g)].map(m=>m[1].trim());
 assert.equal((source.match(/\\\[\n/g)||[]).length,count,"B"+lesson+": display math opening delimiters");
 assert.equal((source.match(/\n\\\]/g)||[]).length,count,"B"+lesson+": display math closing delimiters");
 assert.equal(displays.length,count,"B"+lesson+": display TeX must be on own separated Markdown block");
 const fullInline=[...source.matchAll(/\\\(([\s\S]*?)\\\)/g)].map(m=>m[1]);
 if(lesson in inlineExpected){
  assert.equal(fullInline.length,inlineExpected[lesson],"B"+lesson+": full-page inline math count drift");
  const answer=source.slice(source.indexOf("<details><summary>"),source.indexOf("</details>")+10);
  assert.equal((answer.match(/<span class="arithmatex">\\\(/g)||[]).length,9,
   "B"+lesson+": all 9 hidden answer formulas must be wrapped");
 }
 if(built){
  const html=read("site/thpt-preview/sgk/chuong-vi/bai-"+lesson+"/index.html");
  const rendered=[...html.matchAll(/<div class="arithmatex">\\\[([\s\S]*?)\\\]<\/div>/g)].map(m=>m[1].trim());
  assert.equal(rendered.length,count,"B"+lesson+": raw display block leaked into HTML");
  assert(!html.includes("\n[\n"),"B"+lesson+": lost MathJax display delimiter");
  for(let i=0;i<displays.length;i++)assert.equal(decode(rendered[i]),displays[i],
   "B"+lesson+": display TeX content changed at "+(i+1));
  if(lesson in inlineExpected){
   const start=html.indexOf('<article class="md-content__inner md-typeset">');
   const end=html.indexOf("</article>",start);
   assert(start>=0&&end>start,"B"+lesson+": article not built");
   const article=html.slice(start,end);
   const htmlInline=[...article.matchAll(/<span class="arithmatex">\\\(([\s\S]*?)\\\)<\/span>/g)].map(m=>m[1]);
   assert.equal(htmlInline.length,fullInline.length,
    "B"+lesson+": one or more inline TeX formulas remain plain visible text");
   for(let i=0;i<fullInline.length;i++)assert.equal(decode(htmlInline[i]),fullInline[i],
    "B"+lesson+": altered TeX expression at inline "+(i+1));
   const outside=article.replace(/<(?:span|div) class="arithmatex">[\s\S]*?<\/(?:span|div)>/g,"");
   assert(!/\\(?:sqrt|iff|Delta|frac|ge|le|infty|begin\{|mathbb|boxed)\b/.test(outside),
    "B"+lesson+": unrendered TeX commands outside math wrappers");
   const startAnswer=article.indexOf("<details><summary>"),endAnswer=article.indexOf("</details>",startAnswer);
   assert(startAnswer>=0&&endAnswer>startAnswer,"B"+lesson+": written answers must remain available");
   const answer=article.slice(startAnswer,endAnswer);
   assert.equal((answer.match(/<li>/g)||[]).length,3,"B"+lesson+": original 3 written solutions lost");
   assert.equal((answer.match(/<span class="arithmatex">/g)||[]).length,9,
    "B"+lesson+": hidden answers have unrendered TeX");
  }
 }
 console.log("PASS B"+lesson+": "+count+" display and "+fullInline.length+" inline formula source"+(built?" / built HTML":""));
}