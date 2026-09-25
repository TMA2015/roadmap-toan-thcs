#!/usr/bin/env node
"use strict";
const fs=require("fs"),path=require("path");
const ROOT=path.resolve(__dirname,"..");
const OUT=path.resolve(process.argv[2]||path.join(ROOT,"geometry-architecture-review-bundle.json"));
const read=rel=>({path:rel,content:fs.readFileSync(path.join(ROOT,rel),"utf8")});
const files=[
 "docs/assets/data/curriculum/geometry-architecture-v1.json",
 "docs/assets/data/curriculum/geometry-core-coverage-v1.json",
 "docs/assets/data/curriculum/geometry-diagram-spec-v1.schema.json",
 "docs/assets/data/curriculum/golden-template-v1.json",
 "docs/assets/data/curriculum/kntt-grade6-map.json",
 "docs/assets/data/curriculum/kntt-grade7-map.json",
 "docs/assets/data/curriculum/kntt-grade8-map.json",
 "docs/assets/data/curriculum/kntt-grade9-map.json",
 "docs/roadmap/audit-hoc-thuat-13-20-v1.md",
 "content-staging/templates/geometry-item.md",
 "content-staging/benchmarks/geometry-001-rectangle-midpoints.md",
 "content-staging/benchmarks/geometry-001-rectangle-midpoints.json",
 "docs/assets/data/collaboration/packets/GEO-ARCH-V1-GEMINI-REVIEW-001.json",
 ...["13-goc-va-duong-thang","14-tam-giac","15-duong-dong-quy","16-tu-giac","17-thales-dong-dang","18-he-thuc-luong","19-duong-tron","20-hinh-hoc-tong-hop"].map(s=>`docs/assets/data/practice/${s}-v1.manifest.json`)
];
const bundle={
 schema:"roadmap-geometry-architecture-review-bundle-v1",
 packet_id:"GEO-ARCH-V1-GEMINI-REVIEW-001",
 generated_on:new Date().toISOString(),
 source_policy:"Embedded repository files are authoritative. Review must quote exact current source text and exact skill IDs.",
 sources:files.map(read)
};
fs.mkdirSync(path.dirname(OUT),{recursive:true});
fs.writeFileSync(OUT,JSON.stringify(bundle,null,2)+"\n");
console.log(`Wrote ${OUT} with ${bundle.sources.length} sources`);
