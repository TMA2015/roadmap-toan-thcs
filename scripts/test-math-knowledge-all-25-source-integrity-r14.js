#!/usr/bin/env node
"use strict";
/**
 * R14 review-only source integrity gate for all 25 candidate knowledge pages.
 * Source: unchanged live index.md. Candidate: preview-composition-rN / CT10 preview-tabs-r6.
 * Checks structural + image-display parity; NOT a mathematical proof or a release decision.
 */
const fs=require("node:fs");
const path=require("node:path");
const assert=require("node:assert/strict");
const plans=[
 ["01-ban-do-chuong-trinh","r13"],["02-so-va-phep-tinh","r9"],
 ["03-ti-le-ti-le-thuc","r9"],["04-bieu-thuc-dai-so","r10"],
 ["05-7-hang-dang-thuc","r3"],["06-phan-tich-da-thuc","r9"],
 ["07-phan-thuc-dai-so","r10"],["08-phuong-trinh-bat-phuong-trinh","r10"],
 ["09-he-phuong-trinh","r9"],["10-ham-so-do-thi","tabs-r6"],
 ["11-can-thuc","r10"],["12-phuong-trinh-bac-hai-viete","r11"],
 ["13-goc-va-duong-thang","r11"],["14-tam-giac","r3"],
 ["15-duong-dong-quy","r11"],["16-tu-giac","r11"],
 ["17-thales-dong-dang","r12"],["18-he-thuc-luong","r12"],
 ["19-duong-tron","r12"],["20-hinh-hoc-tong-hop","r12"],
 ["21-thong-ke","r3"],["22-dai-luong-dac-trung","r13"],
 ["23-xac-suat","r3"],["24-bai-toan-thuc-te","r13"],
 ["25-tong-hop-on-thi-10","r13"]
];
// Fast referential integrity: candidates may link only to real approved Written records.
// Keep this in the existing 25-topic gate; no second academic review is required.
const writtenBank=JSON.parse(fs.readFileSync(
 path.join("docs","assets","data","written-exercises","written-exercise-library-v1.json"),"utf8"));
const writtenById=new Map(writtenBank.exercises.map(x=>[x.exercise_id.toLowerCase(),x]));
assert.equal(writtenById.size,writtenBank.exercises.length,"Duplicate canonical Written ID");
let verifiedWrittenLinks=0;
function checkWrittenLinks(candidate,topic){
 const html=[...candidate.matchAll(/\bhref\s*=\s*["']([^"']+)["']/g)].map(m=>m[1]);
 const md=[...candidate.matchAll(/\]\(([^)]+)\)/g)].map(m=>m[1]);
 for(const raw of [...html,...md]){
   const href=raw.replaceAll("&amp;","&");
   if(!href.includes("luyen-tap/tu-luan/"))continue;
   const hash=href.match(/#(wx\d{2}-[a-z0-9-]+)/i);
   if(!hash)continue; // A general Written-library link is legitimate.
   const id=hash[1].toLowerCase();
   const item=writtenById.get(id);
   assert(item,"Preview has noncanonical Written link "+id+" in "+topic);
   const expected="CT"+topic.slice(0,2);
   assert.equal(item.topic_id,expected,"Written link is attached to wrong topic: "+id);
   const filter=href.match(/[?&]topic=(CT\d{2})/i);
   if(filter)assert.equal(filter[1].toUpperCase(),expected,"Written topic filter mismatch for "+id);
   assert.equal(item.academic_review?.status,"APPROVED","Written destination not academically approved: "+id);
   verifiedWrittenLinks++;
 }
}
function heads(s){
 return [...s.matchAll(/^#{2,5} ([^\n]+)$/gm)].map(x=>x[1]).filter(x=>!x.startsWith("Infographic"));
}
function imgs(s){
 return [...s.matchAll(/!\[[^\]]*\]\(([^)]+)\)|<img\b[^>]*src="([^"]+)"/g)]
   .map(m=>(m[1]||m[2]).split(/[/?#]/).filter(Boolean).at(-1));
}
let sourceImages=0,keptImages=0,hiddenImages=0,newImages=0;
const receipt=[];
for(const [topic,revision] of plans){
 const d=path.join("docs","kien-thuc",topic);
 const source=fs.readFileSync(path.join(d,"index.md"),"utf8");
 const candidateFile=revision==="tabs-r6"?"preview-tabs-r6.md":`preview-composition-${revision}.md`;
 const candidate=fs.readFileSync(path.join(d,candidateFile),"utf8");
 const origHeads=heads(source),candHeads=heads(candidate);
 if(topic==="02-so-va-phep-tinh"){
   const converted=["Cộng hai số cùng dấu","Cộng hai số khác dấu","Nhân và chia"];
   assert.deepEqual(candHeads,origHeads.filter(x=>!converted.includes(x)),
     "CT02 should convert exactly three short H4 labels to table headers, no other heading");
   for(const label of converted)assert(candidate.includes(label),"CT02 missing table label "+label);
   for(const example of ["(-4)+(-7)=-11","8+(-13)=-5","(-18):6=-3"])
      assert(candidate.includes(example),"CT02 math example lost: "+example);
 }else if(revision==="tabs-r6"){
   const normalized=candidate.replace(/^    /gm,"");
   const theory=origHeads.filter(x=>/^3\.[1-8]\. /.test(x));
   const methods=origHeads.filter(x=>/^Dạng (?:[1-9]|10|11)\s*[–-]/.test(x));
   assert.equal(theory.length,8,"CT10 main source theory count drift");
   assert.equal(methods.length,11,"CT10 main source method count drift");
   for(const name of [...theory,...methods]){
     const target=name.replaceAll("`y = ax²`",String.raw`\(y = ax^2\)`);
     assert(normalized.includes(target),"CT10 tabbed content missing "+name);
   }
   assert.equal((candidate.match(/^=== "/gm)||[]).length,10,"CT10 must have five + five tabs");
   assert(candidate.includes("2x-4=0\\Rightarrow x=2"),"CT10 intermediate result x=2 lost");
   assert.equal((candidate.match(/class="math-topic-pending"/g)||[]).length,2,
     "CT10 two unverified methods must not have fake clickable links");
 }else{
   assert.deepEqual(candHeads,origHeads,"Full heading order changed in "+topic);
 }
 checkWrittenLinks(candidate,topic);
 // R24 CT04 old infographic 04-03 has an actual fifth problem family:
 // modelling an expression from words. Its 1200x1450 text poster is hidden;
 // retain the unique learning steps and all three source examples in native §5.
 // Do not fabricate a separate exercise type or Practice/Written destination.
 if(topic==="04-bieu-thuc-dai-so"){
   const svg=fs.readFileSync(path.join("docs","assets","infographics","04",
     "04-03-dang-bai-trong-tam.svg"),"utf8");
   for(const phrase of ["Lập biểu thức từ lời văn",
      "Chọn biến và nêu ý nghĩa", "Chuyển từng quan hệ thành phép toán",
      "Kiểm tra đơn vị và tính hợp lí", "Hai số liên tiếp: n, n + 1",
      "Chu vi HCN: P = 2(a + b)", "Quãng đường: s = v·t"]){
     assert(svg.includes(phrase),"CT04 infographic source changed; re-audit "+phrase);
   }
   for(const phrase of ["**Lập biểu thức từ lời văn (mở rộng).**",
     "Chọn biến và nêu ý nghĩa", "chuyển từng quan hệ thành phép toán",
     "**đơn vị, điều kiện và tính hợp lí**", "`n` và `n + 1`",
     "`P = 2(a + b)`", "`s = v·t`"]){
     assert(candidate.includes(phrase),"CT04 unique poster knowledge lost: "+phrase);
   }
   const sec5=candidate.split("## 🧩 5. Các dạng bài cần nắm vững")[1]?.split("## 🚀 6. Dạng bài thi vào lớp 10")[0];
   assert(sec5?.includes("**Lập biểu thức từ lời văn (mở rộng).**"),
     "CT04 modelling guidance must stay in §5");
   assert(!sec5.includes("luyen-tap/tu-luan/") && !sec5.includes("Luyện ngay"),
     "CT04 infographic-only modelling must not invent Practice/Written deep links");
 }
 // R22 targeted infographic editorial parity: the CT05 text-only posters are
 // hidden from the learner view, but their unique recognition/decision cues
 // must remain readable in the native HTML content. This is NOT a blanket
 // scholarly approval of all 80 hidden infographic instances.
 if(topic==="05-7-hang-dang-thuc"){
   const svgMethod=fs.readFileSync(path.join("docs","assets","infographics","05",
     "05-04-dang-bai-loi-sai.svg"),"utf8");
   const svgCubes=fs.readFileSync(path.join("docs","assets","infographics","05",
     "05-03-nhom-lap-phuong.svg"),"utf8");
   assert(svgMethod.includes("Quy trình:"),"CT05 source method poster changed; re-audit");
   assert(svgCubes.includes("Hai hạng tử"),"CT05 source cube poster changed; re-audit");
   assert(candidate.includes("**Quy trình chọn công thức:** Nhìn cấu trúc"),
     "CT05 method-selection workflow from hidden poster was lost");
   assert(candidate.includes("**Hai hạng tử là lập phương**"),
     "CT05 two-term cube recognition from hidden poster was lost");
   assert(candidate.includes("**Bốn hạng tử có hệ số theo mẫu 1–3–3–1**"),
     "CT05 four-term cube recognition from hidden poster was lost");
   assert(candidate.includes("**Chú ý:** Đây chỉ là dấu hiệu gợi ý"),
     "CT05 cube recognition must not be mistaken for sufficient proof");
 }
 // R22 scoped checks: retain the only instructional details that were
 // conveyed by CT21/CT23 text-heavy infographic posters, without re-displaying
 // those posters or weakening the original equiprobability condition.
 if(topic==="21-thong-ke"){
   const svg=fs.readFileSync(path.join("docs","assets","infographics","21",
     "21-03-bieu-do-chat-luong-loi-sai.svg"),"utf8");
   assert(svg.includes("Không suy luận vượt quá điều dữ liệu thực sự cho biết"),
     "CT21 source infographic changed; re-audit before release");
   assert(candidate.includes("**không suy luận vượt quá phạm vi khảo sát**"),
     "CT21 infographic-only interpretation caution missing in native reading");
   assert(candidate.includes("**tên, trục, đơn vị, thang chia**"),
     "CT21 chart-reading checks missing in native reading");
 }
 if(topic==="23-xac-suat"){
   const svg=fs.readFileSync(path.join("docs","assets","infographics","23",
     "23-02-khong-gian-mau-bien-co.svg"),"utf8");
   assert(svg.includes("Các kết quả có thật sự đồng khả năng không"),
     "CT23 source infographic changed; re-audit before release");
   assert(candidate.includes("**Kiểm tra trước khi dùng công thức cổ điển:**"),
     "CT23 hidden poster checks missing in native reading");
   assert(candidate.includes("**đếm trùng**") && candidate.includes("**đồng khả năng**"),
     "CT23 sample-space and equiprobability checks lost");
   assert(candidate.includes("**chưa đủ** để dùng"),
     "CT23 must distinguish complete enumeration from equiprobability");
 }
 // R23 source-to-HTML parity: two additional hidden text-heavy posters contain
 // useful *questions / modelling categories* not represented explicitly before.
 // Preserve those ideas as compact native text, not another poster image.
 if(topic==="07-phan-thuc-dai-so"){
   const svg=fs.readFileSync(path.join("docs","assets","infographics","07",
     "07-04-dang-bai-loi-sai.svg"),"utf8");
   assert(svg.includes("Em có thể giải thích vì sao một giá trị bị loại"),
     "CT07 source reflection prompts changed; re-audit");
   assert(candidate.includes("**Tự đối chiếu tư duy trước khi luyện tập**"),
     "CT07 useful old-poster reflection prompts missing");
   assert(candidate.includes("**vẫn bị loại sau khi rút gọn**") &&
     candidate.includes("**rút gọn trước**"),
     "CT07 lost original-domain and method-choice prompts");
 }
 if(topic==="09-he-phuong-trinh"){
   const svg=fs.readFileSync(path.join("docs","assets","infographics","09",
     "09-03-bai-toan-thuc-te-loi-sai.svg"),"utf8");
   assert(svg.includes("Số học, tuổi, mua bán, phần trăm") &&
     svg.includes("Hình học và hai đại lượng"),
     "CT09 original problem-family poster changed; re-audit");
   assert(candidate.includes("**số học**, **tuổi** và **hình học**"),
     "CT09 modelling families from hidden poster missing");
   assert(candidate.includes("**tại cùng một thời điểm**") &&
     candidate.includes("**cùng đơn vị**"),
     "CT09 age/geometry interpretation cues missing");
 }
 const src=imgs(source),dst=imgs(candidate);
 const kept=src.filter(x=>dst.includes(x)),hidden=src.filter(x=>!dst.includes(x));
 const added=dst.filter(x=>!src.includes(x));
 sourceImages+=src.length;keptImages+=kept.length;hiddenImages+=hidden.length;newImages+=added.length;
 receipt.push({topic,revision,src:src.length,kept:kept.length,hidden:hidden.length,added:added.length});
 if(topic==="01-ban-do-chuong-trinh"){
    assert(!candidate.includes('class="math-related-practice"'),"No invented CT01 practice");
    const original=fs.readFileSync(path.join("docs","assets","infographics","01","01-overview.svg"),"utf8");
    const derived=fs.readFileSync(path.join("docs","assets","infographics","01","01-overview-r2.svg"),"utf8");
    assert.equal(original.match(/Đạt ≥ 80% → đi tiếp/g)?.length,1,"CT01 original threshold lock changed");
    assert.equal(derived,original.replace("Đạt ≥ 80% → đi tiếp","Đạt tiêu chí → đi tiếp"),
      "CT01 learner diagram must differ ONLY by obsolete threshold label");
    assert(candidate.includes("01-overview-r2.svg")&&!candidate.includes("01-overview.svg)"),
      "CT01 canonical page must show revised map only");
  }
 if(["22-dai-luong-dac-trung","25-tong-hop-on-thi-10"].includes(topic))
   assert(!candidate.includes('href="../../../luyen-tap/tu-luan/'),"Do not invent canonical Written for "+topic);
}
// R41 #578 source-to-native ledger audits six additional duplicate text posters.
// Source placements and authored SVGs stay unchanged; only presentation count changes.
assert(fs.existsSync("docs/collaboration/math-thcs-infographic-crosswalk-r41-20261026.csv"),
  "R41 99-row source-to-native review ledger missing");
assert.deepEqual([sourceImages,keptImages,hiddenImages,newImages],[159,72,87,3],
  "R41 image-display inventory changed: re-audit original source and ledger before release");
console.log("PASS source-checked candidate Written deep links",verifiedWrittenLinks,"approved links");
console.log("PASS R14 25 source candidates / CT02 semantic reflow / CT10 5+5 tabs");
console.log(JSON.stringify({total:plans.length,sourceImages,keptImages,hiddenImages,newImages,receipt}));
