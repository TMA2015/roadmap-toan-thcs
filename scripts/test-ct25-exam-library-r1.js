#!/usr/bin/env node
"use strict";
const fs=require("fs"),assert=require("assert");
const read=p=>fs.readFileSync("docs/kien-thuc/25-tong-hop-on-thi-10/"+p,"utf8");
const nav=fs.readFileSync("mkdocs.yml","utf8");
const hub=read("thu-vien-de-luyen.md");
assert(nav.includes("              - Đề luyện:\n")&&nav.includes("Thư viện đề luyện: kien-thuc/25-tong-hop-on-thi-10/thu-vien-de-luyen.md"),"navigation grouped");
assert(hub.includes("đề tự biên soạn")&&hub.includes("không phải đề thi chính thức"),"no misleading provenance");
assert(hub.includes("chưa đủ cơ sở để lọc theo năm"),"honest filter deferral");
for(const n of ["01","02","03"]){
  assert(hub.includes('href="../de-luyen-'+n+'/'),"source exam link "+n);
  assert(hub.includes('href="../de-luyen-'+n+'-dap-an/'),"source answer link "+n);
  assert(fs.existsSync("docs/kien-thuc/25-tong-hop-on-thi-10/de-luyen-"+n+".md"),"legacy exam remains "+n);
  assert(fs.existsSync("docs/kien-thuc/25-tong-hop-on-thi-10/de-luyen-"+n+"-dap-an.md"),"legacy answers remain "+n);
}
console.log("PASS CĐ25 practice exam hub and all six existing canonical exam/answer URLs.");
