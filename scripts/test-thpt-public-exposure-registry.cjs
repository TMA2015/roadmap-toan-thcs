"use strict";
// Review-only public canonical ID registry: no key, item stem or answer.
const assert=require("node:assert/strict");
const fs=require("node:fs");
const path=require("node:path");
const manifest=require("../prototypes/thpt/shared-items/thpt-g10-chvi-reviewed-public-placement-v1.cjs");
assert(manifest.validate().valid,"Reviewed public canonical placements invalid");
assert.equal(manifest.canonical.length,36,"Exactly 36 unique public records");
const ids=new Set(),rows=[];
for(const item of manifest.canonical){
  assert(!ids.has(item.item_id),"Duplicate canonical registry item "+item.item_id);
  assert(!item.item_id.match(/-R\d\d$/)&&!item.role.includes("READINESS"),
    "Held-out assessment ID cannot be inserted into public registry");
  ids.add(item.item_id);
  assert(["SGK_CORE","SGK_PRACTICE","SGK_CHAPTER_APPLICATION","SGK_WRITTEN"]
    .includes(item.role),"Pending Topic placement is not public");
  assert(/^[A-Za-z0-9_-]+$/.test(item.item_id));
  rows.push({item_id:item.item_id,role:item.role});
}
const sql=fs.readFileSync(path.join(__dirname,
 "../services/thpt-readiness/schema.sql"),"utf8");
assert(sql.includes("thpt_public_item_registry")&&sql.includes("thpt_exposure_events"));
assert.equal(rows.filter(r=>r.role==="SGK_WRITTEN").length,8);
// Produces metadata-only seed for authorized private D1 registry.
// Default active 0. No code path activates this seed or imports secret items.
const seed=rows.map(r=>
 "INSERT OR IGNORE INTO thpt_public_item_registry(item_id,allowed_scopes_json,active) "+
 "VALUES('"+r.item_id+"','[\""+r.role+"\"]',0);").join("\n")+"\n";
const digest=require("node:crypto").createHash("sha256").update(seed).digest("hex");
assert(!seed.includes("prompt")&&!seed.includes("key_index")&&!seed.includes("answer"));
if(process.argv.includes("--emit")){
  if(!process.argv.includes("--metadata-only"))throw Error("Metadata-only seed flag required");
  const target=path.join(__dirname,"../services/thpt-readiness/seed-public-metadata.sql");
  fs.writeFileSync(target,"-- PUBLIC CANONICAL IDs ONLY, default inactive. NO HELD-OUT ITEMS.\n"+seed);
  console.log("Generated metadata seed:",path.relative(process.cwd(),target));
}
console.log("PASS THPT public exposure seed: 36 source-derived canonical IDs, 8 Written, no pending Topic placements or protected keys; SHA256="+digest);
