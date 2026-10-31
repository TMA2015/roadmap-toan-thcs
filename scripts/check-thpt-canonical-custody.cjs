"use strict";
// Read-only QA for private NotebookLM reviewed canonical sources.
// Run with three LOCAL paths; never print private item text or commit it.
const fs=require("node:fs");
const crypto=require("node:crypto");
const assert=require("node:assert/strict");
const [sourcePath,canonicalPath,manifestPath]=process.argv.slice(2);
if(!sourcePath||!canonicalPath||!manifestPath){
 console.error("Usage: node check-thpt-canonical-custody.cjs <Temp.md> <canonical.md> <manifest.json>");
 process.exit(2);
}
const sha=b=>crypto.createHash("sha256").update(b).digest("hex");
function utf8File(p){
 const bytes=fs.readFileSync(p),value=bytes.toString("utf8");
 assert.equal(Buffer.compare(Buffer.from(value,"utf8"),bytes),0,"Invalid UTF-8: "+p);
 assert(!bytes.subarray(0,3).equals(Buffer.from([0xef,0xbb,0xbf])),"BOM in "+p);
 assert(!bytes.includes(0),"NUL in "+p);
 return {bytes,value};
}
function exactBlock(text,id){
 const esc=id.replace(/[\W]/g,"\\$&");
 const re=new RegExp("^### \x60"+esc+"\x60[^\\n]*$","m");
 const m=re.exec(text);assert(m,"Missing item heading "+id);
 const rest=text.slice(m.index+m[0].length);
 const boundary=/^#{2,3} /m.exec(rest);
 return (m[0]+(boundary?rest.slice(0,boundary.index):rest)).trim();
}
function main(){
 const source=utf8File(sourcePath),canonical=utf8File(canonicalPath);
 const manifest=JSON.parse(fs.readFileSync(manifestPath,"utf8"));
 assert.equal(sha(source.bytes),manifest.source_sha256,"Source checksum mismatch");
 assert.equal(sha(canonical.bytes),manifest.canonical_sha256,"Canonical checksum mismatch");
 assert.equal(source.bytes.length,manifest.source_bytes,"Source byte count");
 assert.equal(canonical.bytes.length,manifest.canonical_bytes,"Canonical byte count");
 assert(source.value.includes(manifest.packet_id),"Source PACKET_ID mismatch");
 assert(canonical.value.includes(manifest.packet_id),"Canonical PACKET_ID mismatch");
 assert.equal(manifest.canonical_archive_status,"RESTORE_PASS","Archive restore gate not passed");
 const ids=manifest.item_ids;
 assert(Array.isArray(ids)&&ids.length>0,"Missing item list");
 assert.equal(ids.length,new Set(ids).size,"Duplicate canonical IDs in manifest");
 const blocks=manifest.item_blocks_sha256;
 for(const id of ids){
  const s=exactBlock(source.value,id),c=exactBlock(canonical.value,id);
  assert.equal(s,c,"Original item body changed for "+id);
  assert.equal(sha(Buffer.from(c,"utf8")),blocks[id],"Item digest mismatch for "+id);
  for(const tag of ["**Đề:**","**Đáp án:**","**Lời giải:**","**Rubric /"]){
   assert(c.includes(tag),"Missing "+tag+" on "+id);
  }
 }
 const discovered=[...canonical.value.matchAll(/^### \x60([^\x60]+)\x60/gm)].map(m=>m[1]);
 assert.deepEqual([...discovered].sort(),[...ids].sort(),"Unexpected item IDs in canonical source");
 assert.equal(manifest.outcome_ids.length,new Set(manifest.outcome_ids).size,"Duplicate outcomes");
 assert(manifest.academic_review?.overall==="PASS","Independent review verdict missing");
 assert.equal(manifest.release_authorization,"NO");
 assert.equal(manifest.mastery_activation,"NO");
 console.log("PASS academic-source-custody: "+ids.length+" canonical items; "+
  manifest.outcome_ids.length+" outcomes; source+canonical SHA256 and restored archive verified. No private content output.");
}
try{main();}catch(e){console.error("FAIL academic-source-custody: "+e.message);process.exit(1);}
