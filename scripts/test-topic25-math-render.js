#!/usr/bin/env node
"use strict";
// CĐ25 source and built HTML regression for display-math Markdown boundaries.
const fs = require("fs"), path = require("path");
const root = path.resolve(__dirname, "..");
const rel = "docs/kien-thuc/25-tong-hop-on-thi-10";
const folder = path.join(root, rel);
const built = process.argv.includes("--built");
const check = (ok, message) => { if (!ok) throw Error(message); };
let files = 0, blocks = 0;
for (const file of fs.readdirSync(folder).filter(x => x.endsWith(".md") && !x.startsWith("qa-"))) {
  const source = fs.readFileSync(path.join(folder, file), "utf8");
  const lines = source.split(/\r?\n/);
  let inside = false, count = 0;
  lines.forEach((line, i) => {
    const v = line.trim();
    const open = line.includes("\\[");
    const close = line.includes("\\]");
    if (!open && !close) return;
    check(v === "\\[" || v === "\\]", file + ":" + (i + 1) + " display math must use a standalone delimiter");
    if (open) {
      check(!inside, file + ":" + (i + 1) + " nested display math");
      check(i === 0 || lines[i - 1].trim() === "", file + ":" + (i + 1) + " missing blank before \\[");
      inside = true; count++;
    } else {
      check(inside, file + ":" + (i + 1) + " unmatched \\]");
      check(i + 1 === lines.length || lines[i + 1].trim() === "", file + ":" + (i + 1) + " missing blank after \\]");
      inside = false;
    }
  });
  check(!inside, file + ": missing closing display delimiter");
  if (!count) continue;
  files++; blocks += count;
  if (built) {
    const slug = file === "index.md" ? "" : file.slice(0, -3) + "/";
    const htmlPath = path.join(root, "site/kien-thuc/25-tong-hop-on-thi-10", slug, "index.html");
    check(fs.existsSync(htmlPath), "missing built route " + htmlPath);
    const html = fs.readFileSync(htmlPath, "utf8");
    const matches = html.match(/<div\b[^>]*class=["'][^"']*\barithmatex\b[^"']*["'][^>]*>/g) || [];
    check(matches.length >= count, file + ": " + count + " source displays, only " + matches.length + " HTML arithmatex display wrappers");
  }
}
check(files >= 15 && blocks >= 100, "unexpectedly small CĐ25 math coverage");
console.log("PASS: CĐ25 " + files + " Markdown routes, " + blocks + " well-delimited display-math blocks" + (built ? " and built HTML wrappers." : "."));
