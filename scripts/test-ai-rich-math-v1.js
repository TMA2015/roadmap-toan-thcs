#!/usr/bin/env node
"use strict";
const fs=require("fs"),path=require("path"),vm=require("vm"),root=path.resolve(__dirname,"..");
const source=fs.readFileSync(path.join(root,"docs/assets/javascripts/math-rich-text-v1.js"),"utf8");
class Element {
  constructor(tagName){this.tagName=tagName.toUpperCase();this.children=[];this._text="";this.className="";}
  set textContent(value){this.children=[];this._text=String(value);}
  get textContent(){return this._text+this.children.map(node=>node.textContent).join("");}
  appendChild(child){this.children.push(child);return child;}
  replaceChildren(...children){this._text="";this.children=children;}
}
const document={createElement:tag=>new Element(tag),createTextNode:value=>({tagName:"#TEXT",textContent:String(value)})};
const window={};
vm.runInNewContext(source,{document,window});
const render=window.RoadmapRichMath.render;
const ok=(condition,message)=>{if(!condition)throw Error(message)};
const nodes=(node,tag)=>[node,...(node.children||[]).flatMap(child=>nodes(child,tag))].filter(n=>n.tagName===tag.toUpperCase());
const example=[
 "1. **Điều kiện bài toán cho:** \\( (9m^3n^2+3m^2n):(3m^2n) \\).",
 "",
 "2. Ví dụ mẫu: $A = 2x^2 + 5x - x^2 + 3 - 2x$.",
 "- Hạng tử **đồng dạng** là $2x^2$ và $-x^2$.",
 "- Thu gọn được $A=x^2+3x+3$.",
 "",
 "$$",
 "\\frac{9m^3n^2}{3m^2n}=3mn",
 "$$"
].join("\n");
const box=document.createElement("div");
render(example,box);
ok(nodes(box,"OL").length===1 && nodes(box,"LI").length===4,"numbered and bullet steps should be structured");
ok(nodes(box,"STRONG").length===2,"Markdown emphasis should be formatted");
ok(nodes(box,"SPAN").filter(n=>n.className==="ai-math-inline").length>=4,"inline TeX delimiters");
ok(nodes(box,"DIV").some(n=>n.className==="ai-math-display" && n.textContent.includes("\\frac")),"display math");
ok(!box.textContent.includes("**Điều kiện") && !box.textContent.includes("$A"),"raw markup should be normalized");
ok(box.textContent.includes("\\[\\frac"),"display TeX should be MathJax compatible");
const malicious=document.createElement("div");
render("**Thử an toàn** <img src=x onerror=alert(1)> $x^2$",malicious);
ok(nodes(malicious,"IMG").length===0 && nodes(malicious,"SCRIPT").length===0,"never render AI-supplied HTML");
ok(malicious.textContent.includes("<img src=x"),"untrusted HTML remains literal text");
const bank=JSON.parse(fs.readFileSync(path.join(root,"docs/assets/data/practice/04-bieu-thuc-dai-so-v2-05.json"),"utf8"));
const item=bank.questions.find(q=>q.id==="ALG04V2_128");
ok(item&&item.explanation.startsWith("\\(")&&!item.explanation.startsWith("\\\\("),"math delimiters in authored explanation");
console.log("PASS: AI Markdown and TeX formatting, no HTML injection, corrected explanation.");
