"use strict";

const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");

const ROOT = path.resolve(__dirname, "..");
const page = fs.readFileSync(path.join(ROOT, "docs/kien-thuc/09-he-phuong-trinh/index.md"), "utf8");

// Source-ground learner framing.
assert.ok(page.includes("Tham số nhẹ / hệ số chưa biết (Core-Support)"));
assert.ok(page.includes("Biện luận hệ theo tham số (Entrance10)"));
assert.ok(page.includes("Đây không phải yêu cầu bắt buộc để hoàn thành KNTT Core"));

// Deep self-study examples.
assert.ok(page.includes("Ví dụ sâu – nhìn nghiệm hệ trên đồ thị rồi kiểm tra lại bằng đại số"));
assert.ok(page.includes("Ví dụ sâu – từ dữ kiện thực tế đến hai phương trình"));
assert.ok(page.includes("16 quyển sổ và 12 bút chì"));
assert.ok(page.includes("Máy tính cầm tay dùng để hỗ trợ, không thay thế phương pháp"));

// Exam claims must be corpus-described, not star-ranked.
assert.ok(page.includes("mẫu rất nhỏ gồm hai đề"));
assert.ok(page.includes("2025–2026"));
assert.ok(page.includes("2/2 đề"));
assert.ok(page.includes("2023–2024"));
assert.ok(!page.includes("### Giải hệ trực tiếp – ⭐"));
assert.ok(!page.includes("### Hệ có tham số – ⭐"));
assert.ok(!page.includes("### Lập hệ từ bài toán thực tế – ⭐"));
assert.ok(!page.includes("### Kết hợp hệ phương trình với hàm số – ⭐"));

// Preserve next-stage boundaries.
assert.ok(page.includes("Core-Support"));
assert.ok(page.includes("Entrance10"));

console.log("PASS CT09 P1-A source-ground framing and theory-depth checks.");
