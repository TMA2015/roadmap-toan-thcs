#!/usr/bin/env node
"use strict";
const assert=require("node:assert/strict"),fs=require("node:fs"),path=require("node:path");
const root=path.resolve(__dirname,"..");
const read=p=>fs.readFileSync(path.join(root,p),"utf8");
const topics=[["01","01-ban-do-chuong-trinh","### 3.8A. Tra cứu ngược"],["02","02-so-va-phep-tinh","### 3.8A. Chọn ƯCLN hay BCNN"],["03","03-ti-le-ti-le-thuc","### 3.4A. Dãy tỉ số bằng nhau"],["04","04-bieu-thuc-dai-so","### 3.2A. Vì sao phải thu gọn"],["05","05-7-hang-dang-thuc","### Dạng 2A – Nhận diện hằng đẳng thức"],["06","06-phan-tich-da-thuc","### 3.6A. Tách hạng tử"],["07","07-phan-thuc-dai-so","phân thức chia"],["10","10-ham-so-do-thi","### 3."],["14","14-tam-giac","#### Hai trường hợp thường dùng thêm"],["15","15-duong-dong-quy","#### Phân biệt đường cao và đường trung trực"],["16","16-tu-giac","### 3.6A. Trung tuyến ứng với cạnh huyền"],["17","17-thales-dong-dang","### 3.3A. Tính chất đường phân giác"],["18","18-he-thuc-luong","### 3.2A. Hiểu và suy ra hệ thức"],["19","19-duong-tron","### 3.4A. Góc có đỉnh"],["20","20-hinh-hoc-tong-hop","### 3.5A. Từ mục tiêu chứng minh"],["21","21-thong-ke","### 3.1A. Nhận diện kiểu dữ liệu"],["23","23-xac-suat","#### Hiểu sâu (mở rộng): Vì sao không thể chia đều"],["24","24-bai-toan-thuc-te","### 3.10A. Ví dụ kiểm tra nghiệm"],["25","25-tong-hop-on-thi-10","### 3.5A. Từ bước giải sai"]];
assert.equal(topics.length,19,"Knowledge integration must contain 19 unique upgraded topics");
assert.equal(new Set(topics.map(t=>t[0])).size,19,"Duplicate upgraded topic IDs");
for(const [num,slug,fragment] of topics){
 const lesson=read("docs/kien-thuc/"+slug+"/index.md");
 assert.ok(lesson.includes(fragment),"Missing Wave A–F learner content CT"+num+": "+fragment);
 assert.ok((lesson.match(/^## /gm)||[]).length>=11,"Main academic section lost CT"+num);
}
const svg=read("docs/assets/infographics/10/10-03-ham-bac-nhat-duong-thang.svg");
assert.ok(svg.includes("Nếu b = 0: B(1;a)."),"CT10 special case removed");
const g9=read("scripts/test-kntt-dimension-coverage-g9-v1.js");
for(const marker of ["historicalLongformText(lock)","historicalLongformSource(lock)","restoreHistoricalSource(lock.path,longform)"])assert.ok(g9.includes(marker),"Lost combined CT12/CT21/CT23 original-source reconstruction: "+marker);
const geometry=read("scripts/test-core16-18-geometry-rollout.js");
for(const t of ["waveCOriginal16(lesson)","CT17 Wave B source changed","historicalCt18(lesson)"])assert.ok(geometry.includes(t),"Lost combined CT16–18 source lock: "+t);
for(const letter of "abcdef"){
 const sources=[
 "docs/collaboration/math-knowledge-depth-wave-a-20261019.md",
 "docs/collaboration/math-knowledge-depth-wave-b-20261019.md",
 "docs/collaboration/math-knowledge-depth-wave-c-20261019.md",
 "docs/collaboration/math-knowledge-navigation-wave-d-20261019.md",
 "docs/collaboration/math-knowledge-depth-wave-e-20261019.md",
 "docs/collaboration/math-knowledge-depth-wave-f-20261019.md"];
 assert.ok(fs.existsSync(path.join(root,sources["abcdef".indexOf(letter)])),"Missing individual Wave provenance "+letter);
}
console.log("PASS: 19 knowledge topics A–F, preserved SVG, combined source locks CT16–18 and CT21/23, six review packets.");
