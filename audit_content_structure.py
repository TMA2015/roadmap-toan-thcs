#!/usr/bin/env python3
"""Audit cấu trúc nội dung Roadmap Toán THCS.

Mục tiêu: phát hiện chỗ thiếu/không đồng nhất ở index.md, bai-tap.md và
 tu-kiem-tra.md. Công cụ này KHÔNG thay thế kiểm định học thuật thủ công.
"""
from __future__ import annotations

import argparse
import glob
import re
import unicodedata
from pathlib import Path

ROOT = Path(__file__).resolve().parent
KNOWLEDGE = ROOT / "docs" / "kien-thuc"
REPORT = ROOT / "docs" / "roadmap" / "audit-noi-dung-25-chuyen-de.md"

REQUIRED_INDEX = [
    ("Bản đồ", ["ban do kien thuc"]),
    ("Mục tiêu", ["muc tieu can dat", "muc tieu"]),
    ("Cốt lõi", ["kien thuc cot loi"]),
    ("Liên quan", ["kien thuc lien quan"]),
    ("Dạng bài", ["cac dang bai can nam vung", "dang bai can nam vung"]),
    ("Thi vào 10", ["dang bai thi vao lop 10", "thi vao lop 10"]),
    ("Lỗi sai", ["loi sai thuong gap"]),
    ("Luyện tập", ["luyen tap"]),
    ("Tự kiểm tra", ["tu kiem tra"]),
    ("Roadmap", ["lien ket roadmap"]),
    ("Hoàn thành", ["khi nao duoc coi la da hoan thanh", "dieu kien hoan thanh"]),
]


def norm(s: str) -> str:
    s = unicodedata.normalize("NFD", s)
    s = "".join(ch for ch in s if unicodedata.category(ch) != "Mn")
    s = s.lower().replace("đ", "d")
    s = re.sub(r"[^a-z0-9]+", " ", s).strip()
    return s


def headings(text: str, level: int = 2) -> list[str]:
    pat = re.compile(rf"^{'#' * level}\s+(.+)$", re.M)
    return [norm(x) for x in pat.findall(text)]


def has_any(hs: list[str], needles: list[str]) -> bool:
    return any(any(norm(n) in h for n in needles) for h in hs)


def question_count(text: str) -> int:
    # Mẫu mới: ## Câu 1 ...; mẫu cũ: 1. **1 điểm:** ...
    hq = {int(x) for x in re.findall(r"^##\s+Câu\s+(\d+)\b", text, re.M | re.I)}
    if hq:
        return len(hq)
    nq = {int(x) for x in re.findall(r"^(\d+)\.\s+\*\*[^\n]*điểm", text, re.M | re.I)}
    return len(nq)


def score_total(text: str) -> float | None:
    # Chỉ đọc phần đề, trước đáp án để không đếm điểm lần hai.
    cut = re.split(r"^#\s+Đáp án", text, maxsplit=1, flags=re.M | re.I)[0]
    vals = []
    for pat in [
        r"—\s*([0-9]+(?:[,.][0-9]+)?)\s*điểm",
        r"\*\*([0-9]+(?:[,.][0-9]+)?)\s*điểm:\*\*",
    ]:
        found = re.findall(pat, cut, re.I)
        if found:
            vals = found
            break
    if not vals:
        return None
    return round(sum(float(x.replace(",", ".")) for x in vals), 2)


def audit_topic(folder: Path) -> dict:
    number = folder.name[:2]
    index_path = folder / "index.md"
    practice_path = folder / "bai-tap.md"
    test_path = folder / "tu-kiem-tra.md"
    index = index_path.read_text(encoding="utf-8") if index_path.exists() else ""
    practice = practice_path.read_text(encoding="utf-8") if practice_path.exists() else ""
    test = test_path.read_text(encoding="utf-8") if test_path.exists() else ""

    ih = headings(index, 2)
    index_hits = {label: has_any(ih, needles) for label, needles in REQUIRED_INDEX}

    codes = re.findall(rf"^###\s+{number}-M([1-4])-\d+\b", practice, re.M)
    per_level = {m: codes.count(str(m)) for m in range(1, 5)}
    manifests = glob.glob(str(ROOT / "docs" / "assets" / "data" / "practice" / f"{number}-*.manifest.json"))

    test_norm = norm(test)
    qcount = question_count(test)
    stotal = score_total(test)

    row = {
        "number": number,
        "slug": folder.name,
        "title": re.sub(r"^#\s+", "", index.splitlines()[0]).strip() if index else folder.name,
        "index_sections": sum(index_hits.values()),
        "index_missing": [k for k, v in index_hits.items() if not v],
        "practice_count": len(codes),
        "per_level": per_level,
        "practice_bank": bool(manifests) if number != "01" else True,
        "practice_answers": "dap an" in norm(practice),
        "practice_guidance": "huong dan chon loc" in norm(practice),
        "practice_progress": "theo doi tien do" in norm(practice),
        "practice_links": "lien ket roadmap" in norm(practice) or ("tu kiem tra" in norm(practice) and "hoc bai" in norm(practice)),
        "test_questions": qcount,
        "test_score": stotal,
        "test_answers": "dap an" in test_norm,
        "test_rating": "thang tu danh gia" in test_norm,
        "test_trace": "bang truy nguyen loi" in test_norm,
        "test_checklist": "checklist sau khi cham" in test_norm,
        "test_links": "lien ket roadmap" in test_norm or ("luyen tap" in test_norm and "hoc bai" in test_norm),
    }

    issues = []
    if row["index_sections"] < len(REQUIRED_INDEX):
        issues.append("index thiếu mục chuẩn")
    if number != "01" and not row["practice_bank"]:
        issues.append("chưa có Practice Bank")
    if number != "01" and any(per_level[m] == 0 for m in range(1, 5)):
        issues.append("tự luận thiếu mức")
    if number != "01" and row["practice_count"] < 12:
        issues.append("tự luận chọn lọc còn mỏng")
    if number != "01" and not row["practice_answers"]:
        issues.append("thiếu đáp án nhanh")
    if number != "01" and not row["practice_guidance"]:
        issues.append("thiếu hướng dẫn chọn lọc")
    if number != "01" and not row["practice_progress"]:
        issues.append("thiếu theo dõi tiến độ")
    if number != "01" and not (8 <= qcount <= 12):
        issues.append("tự kiểm tra không ở mức 8–12 câu")
    if number != "01" and stotal is not None and abs(stotal - 10) > 0.01:
        issues.append(f"tổng điểm tự kiểm tra={stotal:g}")
    if number != "01" and not row["test_answers"]:
        issues.append("tự kiểm tra thiếu đáp án")
    if number != "01" and not row["test_rating"]:
        issues.append("thiếu thang tự đánh giá")
    if number != "01" and not row["test_trace"]:
        issues.append("thiếu bảng truy nguyên lỗi")
    if number != "01" and not row["test_checklist"]:
        issues.append("thiếu checklist sau chấm")
    row["issues"] = issues

    if number == "01":
        row["status"] = "Tổng quan – audit riêng"
    elif any(x in issues for x in ["index thiếu mục chuẩn", "chưa có Practice Bank", "tự kiểm tra thiếu đáp án"]):
        row["status"] = "🔴 Ưu tiên cao"
    elif len(issues) >= 3:
        row["status"] = "🟠 Cần chuẩn hóa"
    elif issues:
        row["status"] = "🟡 Bổ sung nhẹ"
    else:
        row["status"] = "🟢 Tốt"
    return row


def make_report(rows: list[dict]) -> str:
    out = [
        "# Audit nội dung 25 chuyên đề – vòng cấu trúc",
        "",
        "> Báo cáo tự động kiểm tra **độ đầy đủ cấu trúc**, không thay thế việc đọc đề, kiểm tra đáp án và kiểm định học thuật thủ công.",
        "> Mô hình đánh giá hiện tại ưu tiên: **bài học 11 mục + Practice Bank 120 câu + tự luận chọn lọc + tự kiểm tra có truy nguyên lỗi**.",
        "",
        "## Bảng tổng hợp",
        "",
        "| # | Chuyên đề | Index | Tự luận M1/M2/M3/M4 | Tự kiểm tra | Truy nguyên lỗi | Trạng thái |",
        "|---:|---|---:|---|---:|:---:|---|",
    ]
    for r in rows:
        levels = "/".join(str(r["per_level"][m]) for m in range(1, 5))
        score = "?" if r["test_score"] is None else f"{r['test_score']:g}đ"
        q = "—" if r["number"] == "01" else f"{r['test_questions']} câu · {score}"
        trace = "—" if r["number"] == "01" else ("✅" if r["test_trace"] else "❌")
        out.append(f"| {r['number']} | {r['title'].replace('|', '/')} | {r['index_sections']}/11 | {levels} | {q} | {trace} | {r['status']} |")

    out += ["", "## Vấn đề phát hiện theo chuyên đề", ""]
    for r in rows:
        if r["number"] == "01":
            out.append(f"- **01:** trang tổng quan; không áp dụng cùng tiêu chí Practice Bank như 02–25.")
        elif r["issues"]:
            out.append(f"- **{r['number']}:** " + "; ".join(r["issues"]) + ".")
        else:
            out.append(f"- **{r['number']}:** không phát hiện thiếu cấu trúc theo bộ tiêu chí tự động.")

    out += [
        "",
        "## Cách dùng báo cáo",
        "",
        "1. Xử lý các chuyên đề có lỗi cấu trúc trước.",
        "2. Sau đó đọc thủ công từng nhóm để kiểm tra độ phủ kiến thức, độ khó, tính đúng của đáp án và chất lượng diễn đạt.",
        "3. Không tăng số lượng bài tự luận một cách máy móc: Practice Bank đã đảm nhiệm luyện lặp; bài tự luận nên ưu tiên trình bày, suy luận và lỗi điển hình.",
        "4. Mỗi đợt chỉnh sửa phải chạy lại `validate_practice_bank.py`, audit này và `mkdocs build --strict`.",
        "",
        "---",
        "",
        "Sinh bởi `audit_content_structure.py`.",
    ]
    return "\n".join(out) + "\n"


def main() -> None:
    parser = argparse.ArgumentParser()
    parser.add_argument("--write", action="store_true", help="ghi báo cáo Markdown vào docs/roadmap")
    args = parser.parse_args()
    folders = sorted(p for p in KNOWLEDGE.glob("[0-9][0-9]-*") if p.is_dir())
    rows = [audit_topic(p) for p in folders]
    report = make_report(rows)
    print(report)
    if args.write:
        REPORT.write_text(report, encoding="utf-8")
        print(f"Wrote: {REPORT.relative_to(ROOT)}")


if __name__ == "__main__":
    main()
