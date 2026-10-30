#!/usr/bin/env node
"use strict";
/* D6 fail-closed static-scope audit across G10 ChVI–IX.
 * Source-level and optional built-site checks. No private exam stems/keys.
 * This does NOT claim an authenticated exposure log, secure grading or UAT.
 */
const assert=require("node:assert/strict");
const fs=require("node:fs"),path=require("node:path"),vm=require("node:vm");
const root=path.resolve(__dirname,"..");
const read=p=>fs.readFileSync(path.join(root,p),"utf8");
const jsdir="docs/assets/javascripts/";
function load(pathname,globalName){
 const sandbox={window:{}};
 vm.runInNewContext(read(pathname),sandbox,{timeout:5000,filename:pathname});
 const bank=sandbox.window[globalName];
 assert(bank&&bank.validate().valid,"Invalid public formative bank: "+pathname);
 return bank.records.map(x=>x.item_id);
}
const chvi=require("../docs/assets/javascripts/thpt-chvi-reviewed-formative-v1.js");
assert(chvi.validate().valid);
const groups=[
 ["VI",chvi.items.map(x=>x.item_id)],
 ["VII",load(jsdir+"thpt-chvii-reviewed-formative-v1.js","THPT_CHVII_REVIEWED_FORMATIVE")],
 ["VIII",load(jsdir+"thpt-chviii-reviewed-formative-v1.js","THPT_CHVIII_REVIEWED_FORMATIVE")],
 ["IX",load(jsdir+"thpt-chix-reviewed-formative-v1.js","THPT_CHIX_REVIEWED_FORMATIVE")]
];
assert.deepEqual(groups.map(x=>x[1].length),[18,32,25,14]);
const sources=[
 ["VI","docs/thpt-preview/thu-vien/tu-luan.md",8],
 ["VII","docs/thpt-preview/thu-vien/tu-luan-chuong-vii.md",4],
 ["VIII","docs/thpt-preview/thu-vien/tu-luan-chuong-viii.md",3],
 ["IX","docs/thpt-preview/thu-vien/tu-luan-chuong-ix.md",2]
];
for(const [chapter,file,expected] of sources){
 const html=read(file);
 const ids=[...html.matchAll(/data-thpt-written-canonical="([^"]+)"/g)].map(x=>x[1]);
 assert.equal(ids.length,expected,"Written canonical count "+chapter);
 assert.equal(new Set(ids).size,expected,"Duplicate Written canonical "+chapter);
 groups.push([chapter+" Written",ids]);
}
const cumulative=[...read("docs/thpt-preview/sgk/chuong-vi/bai-tap-cuoi-chuong.md")
 .matchAll(/data-thpt-canonical-item="([^"]+)"/g)].map(x=>x[1]);
assert.equal(cumulative.length,8);
groups.push(["VI cumulative",cumulative]);
groups.push(["VI legacy B16",["THPT-CORE-QF01","PRACTICE-THPT-DEMO-01"]]);
const all=groups.flatMap(x=>x[1]);
assert.equal(all.length,116,"Expected 116 unique public canonical IDs across ChVI–IX");
assert.equal(new Set(all).size,116,"Cross-chapter public canonical item collision");
for(const id of all)
 assert(/^[A-Za-z0-9][A-Za-z0-9_-]{0,127}$/.test(id)&&
  !/-(?:R|RD)\d\d$/.test(id),"Bad or held-out public canonical ID "+id);
function walk(dir){
 if(!fs.existsSync(dir))return [];
 return fs.readdirSync(dir,{withFileTypes:true}).flatMap(x=>{
  const f=path.join(dir,x.name);
  return x.isDirectory()?walk(f):[f];
 });
}
const privateIds=/THPT-G10-(?:B(?:15|16|17|18)-R\d\d|CH(?:VII|VIII|IX)-(?:RD|READ-)\d\d)/;
const staticScope=[
 ...walk(path.join(root,"docs/thpt-preview")).filter(x=>/\.(?:md|html|js|json)$/i.test(x)),
 ...walk(path.join(root,"docs/assets/javascripts")).filter(x=>/^thpt-.*\.js$/.test(path.basename(x)))
];
for(const file of staticScope){
 const content=fs.readFileSync(file,"utf8");
 assert(!privateIds.test(content),"Held-out candidate ID exposed in THPT client: "+file);
 assert(!/data-mastery-credit=["']true/.test(content),
   "THPT page claims active mastery: "+file);
}
for(const chapter of ["vii","viii","ix"]){
 const page=read("docs/thpt-preview/sgk/chuong-"+chapter+"/tu-kiem-tra-chuong.md");
 assert(!/<(?:input|button)\b|data-thpt-secure-readiness|data-thpt-readiness/.test(page),
   "Protected chapter assessment accidentally activated: "+chapter);
}
const demo=read("docs/thpt-preview/sgk/chuong-vi/tu-kiem-tra-chuong.md");
assert(demo.includes("TECHNICAL_DEMO_ONLY")&&demo.includes("mastery_credit: false"));
const config=read("mkdocs.thpt-preview.yml");
for(const f of ["chuyen-de/ham-so/kien-thuc.md","chuyen-de/ham-so/luyen-tap.md",
 "chuyen-de/ham-so/tu-kiem-tra.md"])
 assert(config.includes(f),"Topic route missing: "+f);
assert(!config.includes("chuyen-de/ham-so/core.md"),"Topic must not have Core tab");
assert(!config.includes("thpt-protected-readiness-v1.js")&&
 !config.includes("thpt-formative-exposure-v1.js"),
 "Unapproved authenticated assessment/exposure bridge loaded in static client");
const built=process.argv.includes("--built");
if(built){
 const site=path.join(root,"site");
 assert(fs.existsSync(path.join(site,"thpt-preview/sgk/chuong-ix/bai-27/index.html")),
   "Built THPT site missing ChIX");
 const publicFiles=[
  ...walk(path.join(site,"thpt-preview")).filter(x=>/\.(?:html|js|json)$/i.test(x)),
  ...walk(path.join(site,"assets/javascripts")).filter(x=>/^thpt-.*\.js$/.test(path.basename(x)))
 ];
 for(const file of publicFiles){
  const content=fs.readFileSync(file,"utf8");
  assert(!privateIds.test(content),"Held-out ID leaked into assembled site: "+file);
  assert(!/data-mastery-credit=["']true/.test(content),"Built THPT page claims mastery: "+file);
 }
 for(const asset of ["thpt-protected-readiness-v1.js","thpt-formative-exposure-v1.js"])
  assert(!fs.existsSync(path.join(site,"assets/javascripts",asset)),
   "Unapproved private assessment bridge bundled into static Pages");
}
console.log("PASS THPT G10 ChVI–IX public isolation: 116 canonical IDs, 17 Written, "+
 "no held-out IDs in "+(built?"assembled Pages":"THPT source")+
 ", Chapter VI demo only, VII–IX Readiness inactive. "+
 "Authenticated exposure/secure grading/real-device UAT NOT TESTED.");
