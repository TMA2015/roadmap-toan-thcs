#!/usr/bin/env node
"use strict";
// Public Math CI must never spend private English workflow minutes or occupy
// shared GitHub Actions artifact storage. Guard only this repository's YAML.
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");

const ROOT = path.resolve(__dirname, "..");
const workflows = path.join(ROOT, ".github", "workflows");
const names = fs.readdirSync(workflows)
  .filter(name => /\.ya?ml$/.test(name)).sort();
assert(names.length > 0, "Missing Math workflows");

for (const name of names) {
  const yaml = fs.readFileSync(path.join(workflows, name), "utf8");
  assert(!/self-learning-english|ai-english-tutor/i.test(yaml),
    name + ": private English repository referenced");
  assert(!/uses:\s*[^\s#]+\/\.github\/workflows\/[^\s#]+/i.test(yaml),
    name + ": repository-external reusable workflow must be reviewed first");
  // Standard GitHub-hosted runner minutes are free on public repositories.
  const runners = [...yaml.matchAll(/^\s*runs-on:\s*([^\r\n#]+)/gm)]
    .map(match => match[1].trim().replace(/[\x22\x27]/g, ""));
  assert(runners.length > 0, name + ": runners are not defined");
  assert(runners.every(label => label === "ubuntu-latest"),
    name + ": non-standard runner could consume private quota or incur fees");
  assert(!/actions\/(?:upload-artifact|cache|download-artifact)@/i.test(yaml),
    name + ": prevent automatic use of shared artifact/cache quota");
  assert(!/\b(?:upload-artifact|upload-pages-artifact|save-cache|restore-cache)@/i.test(yaml),
    name + ": upload/cache action requires an explicit quota-safe design");
}
const prQa = fs.readFileSync(path.join(workflows, "qa-pr.yml"), "utf8");
assert(prQa.includes("python scripts/test-math-progress-backup-v1-browser.py"),
  "Existing Math browser QA unexpectedly removed");
assert(prQa.includes("python scripts/test-b1-save-failure-r2-browser.py"),
  "B1 R2 Math storage QA unexpectedly removed");
assert(prQa.includes("python scripts/capture-ui-previews.py"),
  "Keep visual capture locally in CI without uploading artifacts");
console.log("PASS Math Actions isolation: "+names.length+
  " Math-only standard-runner workflows; no shared artifact/cache uploads.");
console.log("BOUNDARY: this verifies the repository workflow source only, not an account billing statement.");
