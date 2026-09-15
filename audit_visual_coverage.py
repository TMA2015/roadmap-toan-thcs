#!/usr/bin/env python3
"""Audit định lượng độ phủ hình minh họa của Roadmap Toán THCS.

Script chỉ phát hiện lỗi kỹ thuật và thống kê số lượng. Kết luận sư phạm
(đủ hình / nên bổ sung / ưu tiên cao) vẫn cần đọc nội dung thủ công.
"""

from __future__ import annotations

import json
import re
from pathlib import Path

ROOT = Path("docs/kien-thuc")
PRACTICE = Path("docs/assets/data/practice")
IMAGE_SUFFIXES = {".svg", ".png", ".jpg", ".jpeg", ".webp", ".gif"}

MD_IMAGE = re.compile(r"!\[([^\]]*)\]\(([^)\s]+)(?:\s+['\"][^'\"]*['\"])?\)")
HTML_IMAGE = re.compile(r"<img\b([^>]*)>", re.IGNORECASE)
SRC_ATTR = re.compile(r"\bsrc=['\"]([^'\"]+)['\"]", re.IGNORECASE)
ALT_ATTR = re.compile(r"\balt=['\"]([^'\"]*)['\"]", re.IGNORECASE)


def topic_folder(num: int) -> Path | None:
    folders = sorted(ROOT.glob(f"{num:02d}-*"))
    return folders[0] if len(folders) == 1 else None


def local_ref_exists(source: Path, ref: str) -> bool:
    ref = ref.strip()
    if ref.startswith(("http://", "https://", "//", "data:")):
        return True
    ref = ref.split("#", 1)[0].split("?", 1)[0]
    if not ref:
        return True
    return (source.parent / ref).resolve().is_file()


def practice_diagram_count(folder_name: str) -> int:
    total = 0
    for manifest_path in sorted(PRACTICE.glob(f"{folder_name}-v*.manifest.json")):
        manifest = json.loads(manifest_path.read_text(encoding="utf-8"))
        for source_name in manifest.get("sources", []):
            chunk_path = PRACTICE / source_name
            if not chunk_path.is_file():
                continue
            chunk = json.loads(chunk_path.read_text(encoding="utf-8"))
            total += sum(1 for q in chunk.get("questions", []) if q.get("diagram"))
    return total


def inspect_markdown(path: Path) -> tuple[int, int, list[str]]:
    if not path.is_file():
        return 0, 0, []
    text = path.read_text(encoding="utf-8")
    image_count = 0
    empty_alt = 0
    broken: list[str] = []

    for alt, ref in MD_IMAGE.findall(text):
        image_count += 1
        if not alt.strip():
            empty_alt += 1
        if not local_ref_exists(path, ref):
            broken.append(ref)

    for attrs in HTML_IMAGE.findall(text):
        src_match = SRC_ATTR.search(attrs)
        if not src_match:
            continue
        image_count += 1
        alt_match = ALT_ATTR.search(attrs)
        if alt_match is None or not alt_match.group(1).strip():
            empty_alt += 1
        ref = src_match.group(1)
        if not local_ref_exists(path, ref):
            broken.append(ref)

    return image_count, empty_alt, broken


def main() -> int:
    print("=== AUDIT VISUAL COVERAGE 01-25 ===")
    print("Topic | Lesson | Practice | Empty ALT | Broken refs")
    print("------|--------|----------|-----------|------------")

    failures: list[str] = []
    total_lesson = 0
    total_practice = 0

    for num in range(1, 26):
        folder = topic_folder(num)
        if folder is None:
            failures.append(f"{num:02d}: không xác định đúng một thư mục chuyên đề")
            print(f"{num:02d} | - | - | - | folder")
            continue

        lesson_count, empty_alt, broken = inspect_markdown(folder / "index.md")
        practice_count = practice_diagram_count(folder.name)
        total_lesson += lesson_count
        total_practice += practice_count

        if empty_alt:
            failures.append(f"{num:02d}: {empty_alt} hình trong bài học thiếu ALT")
        for ref in broken:
            failures.append(f"{num:02d}: link hình hỏng `{ref}`")

        print(
            f"{num:02d} | {lesson_count} | {practice_count} | "
            f"{empty_alt} | {len(broken)}"
        )

    visual_assets = [
        p for p in Path("docs/assets").rglob("*")
        if p.is_file() and p.suffix.lower() in IMAGE_SUFFIXES
    ]

    print()
    print(f"Lesson image refs 01-25 : {total_lesson}")
    print(f"Practice diagrams 01-25 : {total_practice}")
    print(f"Visual assets trong docs/assets: {len(visual_assets)}")
    print()

    if failures:
        print("❌ VISUAL QA KHÔNG ĐẠT")
        for item in failures:
            print(f"  - {item}")
        return 1

    print("✅ Không phát hiện ALT rỗng hoặc link hình hỏng trong 25 trang bài học.")
    print("Lưu ý: số lượng hình không thay thế audit sư phạm thủ công.")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
