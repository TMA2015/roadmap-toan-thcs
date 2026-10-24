#!/usr/bin/env node
"use strict";
/* R17 source-safe presentation: preserve exact approved full-page Markdown blobs. */
const assert=require("node:assert/strict");
const fs=require("node:fs");
const crypto=require("node:crypto");
const path=require("node:path");
const locks={
  "05-7-hang-dang-thuc":"6e34411e59ebf8589ba8ee14f2464edd5c0e822f",
  "14-tam-giac":"f9fae782453f7126b39f123d728188d49787c149",
  "21-thong-ke":"27b0938c5ee263a8c60dd73cf6d42d3d52d0d89a",
  "23-xac-suat":"1b69ae97f0597a3c7b521ecb315cf2a5d3d82187"
};
function sha(text){
 return crypto.createHash("sha1")
   .update("blob "+Buffer.byteLength(text,"utf8")+String.fromCharCode(0)+text)
   .digest("hex");
}
for(const [topic,hash] of Object.entries(locks)){
 const data=fs.readFileSync(path.join("docs","kien-thuc",topic,"index.md"),"utf8");
 assert.equal(sha(data),hash,"R17 may NOT modify SHA-locked source "+topic);
 console.log("PASS immutable official Knowledge source",topic);
}
const config=fs.readFileSync("mkdocs.yml","utf8");
const cssFile="assets/stylesheets/math-knowledge-source-safe-r17.css";
const jsFile="assets/javascripts/math-knowledge-source-safe-r17.js";
assert(config.includes("  - "+cssFile),"R17 CSS not registered");
assert(config.includes("  - "+jsFile),"R17 JS not registered");
const css=fs.readFileSync(path.join("docs",cssFile),"utf8");
const js=fs.readFileSync(path.join("docs",jsFile),"utf8");
for(const token of ["mk-r17-compare","mk-r17-logic-pairs"])assert(css.includes(token)&&js.includes(token));
for(const unsafe of [".remove(", ".innerHTML=", "localStorage", "indexedDB", "fetch(", "XMLHttpRequest", "firebase", "display:none", "visibility:hidden"]){
 assert(!js.includes(unsafe), "Unexpected side-effect in R17 JS: "+unsafe);
}
console.log("PASS R17 source SHA + content-preserving, opt-in CSS/JS.");
