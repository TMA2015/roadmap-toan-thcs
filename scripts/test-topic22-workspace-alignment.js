"use strict";

const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");

const ROOT = path.resolve(__dirname, "..");
const js = fs.readFileSync(path.join(ROOT, "docs/assets/javascripts/topic-workspace-v1.js"), "utf8");
const page = fs.readFileSync(path.join(ROOT, "docs/kien-thuc/22-dai-luong-dac-trung/index.md"), "utf8");

assert.ok(js.includes('"22-dai-luong-dac-trung":{'));
assert.ok(js.includes('bridgeOnly:true'));
assert.ok(js.includes('THPT-Bridge'));
assert.ok(js.includes('primaryLearningHref=config.bridgeOnly?"#core"'));
assert.ok(js.includes('primaryLearningLabel=config.bridgeOnly?"📖 Kiến thức chuyển tiếp"'));
assert.ok(js.includes('if(config.bridgeOnly){'));
assert.ok(js.includes('const findHeading=(label,ordinal)=>'));
assert.ok(js.includes('new RegExp("(?:^|\\s)"+ordinal+"\\.\\s")'));

for (const heading of [
  "## 🧭 1. Bản đồ kiến thức",
  "## 🎯 2. Mục tiêu cần đạt",
  "## 📖 3. Kiến thức chuyển tiếp Toán 10",
  "## 🔗 4. Kiến thức liên quan",
  "## 🧩 5. Các dạng bài cần nắm vững",
  "## 🚀 6. Bài tập chuyển tiếp lên Toán 10",
  "## ⚠️ 7. Lỗi sai thường gặp",
  "## 📝 8. Luyện tập",
  "## ✅ 9. Tự kiểm tra",
  "## 🔄 10. Liên kết Roadmap",
  "## 🏁 11. Điều kiện hoàn thành",
]) assert.ok(page.includes(heading), "missing numbered CĐ22 heading: " + heading);

console.log("PASS Topic 22 uses the shared learner workspace without inventing a KNTT-Core journey.");
