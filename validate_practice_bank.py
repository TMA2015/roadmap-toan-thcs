#!/usr/bin/env python3
"""Validate Roadmap Toán THCS Practice Bank manifests and question chunks."""

from __future__ import annotations

import argparse
import json
from collections import Counter
from pathlib import Path
from typing import Any

ALLOWED_DIFFICULTIES = {"basic", "intermediate", "advanced"}


def load_json(path: Path) -> dict[str, Any]:
    try:
        return json.loads(path.read_text(encoding="utf-8"))
    except FileNotFoundError as exc:
        raise ValueError(f"Không tìm thấy tệp: {path}") from exc
    except json.JSONDecodeError as exc:
        raise ValueError(f"JSON lỗi tại {path}:{exc.lineno}:{exc.colno}: {exc.msg}") from exc


def validate_question(question: dict[str, Any], source: Path, skill_labels: set[str]) -> list[str]:
    errors: list[str] = []
    qid = question.get("id", "(không có id)")

    required = ["id", "question", "options", "answer", "tags", "difficulty", "explanation"]
    for field in required:
        if field not in question:
            errors.append(f"{source.name} · {qid}: thiếu trường `{field}`")

    options = question.get("options")
    if not isinstance(options, list) or len(options) != 4:
        errors.append(f"{source.name} · {qid}: `options` phải có đúng 4 phương án")
    elif len(set(map(str, options))) != 4:
        errors.append(f"{source.name} · {qid}: có phương án bị trùng")

    answer = question.get("answer")
    if not isinstance(answer, int) or not isinstance(options, list) or not 0 <= answer < len(options):
        errors.append(f"{source.name} · {qid}: `answer` không hợp lệ")

    difficulty = question.get("difficulty")
    if difficulty not in ALLOWED_DIFFICULTIES:
        errors.append(
            f"{source.name} · {qid}: difficulty phải là basic/intermediate/advanced, nhận `{difficulty}`"
        )

    tags = question.get("tags", {})
    if not isinstance(tags, dict):
        errors.append(f"{source.name} · {qid}: `tags` phải là object")
    else:
        if not tags.get("topic"):
            errors.append(f"{source.name} · {qid}: thiếu tags.topic")
        skills = tags.get("skill")
        if not isinstance(skills, list) or not skills:
            errors.append(f"{source.name} · {qid}: tags.skill phải là danh sách không rỗng")
        else:
            for skill in skills:
                if skill not in skill_labels:
                    errors.append(f"{source.name} · {qid}: skill `{skill}` chưa có trong skill_labels")
        if not tags.get("type"):
            errors.append(f"{source.name} · {qid}: thiếu tags.type")

    if not str(question.get("question", "")).strip():
        errors.append(f"{source.name} · {qid}: nội dung câu hỏi rỗng")
    if not str(question.get("explanation", "")).strip():
        errors.append(f"{source.name} · {qid}: explanation rỗng")

    return errors


def validate_manifest(manifest_path: Path) -> int:
    errors: list[str] = []
    manifest = load_json(manifest_path)

    if manifest.get("schema") != "practice-bank-manifest-v1":
        errors.append("Manifest phải có schema = practice-bank-manifest-v1")

    sources = manifest.get("sources")
    if not isinstance(sources, list) or not sources:
        errors.append("Manifest phải có danh sách sources không rỗng")
        sources = []

    skill_labels_obj = manifest.get("skill_labels")
    if not isinstance(skill_labels_obj, dict) or not skill_labels_obj:
        errors.append("Manifest phải có skill_labels không rỗng")
        skill_labels_obj = {}
    skill_labels = set(skill_labels_obj)

    questions: list[tuple[dict[str, Any], Path]] = []
    for source_name in sources:
        source_path = manifest_path.parent / source_name
        try:
            chunk = load_json(source_path)
        except ValueError as exc:
            errors.append(str(exc))
            continue

        if chunk.get("schema") != "practice-question-chunk-v1":
            errors.append(f"{source_path.name}: schema phải là practice-question-chunk-v1")

        chunk_questions = chunk.get("questions")
        if not isinstance(chunk_questions, list):
            errors.append(f"{source_path.name}: questions phải là danh sách")
            continue
        questions.extend((question, source_path) for question in chunk_questions if isinstance(question, dict))

    ids = [question.get("id") for question, _ in questions]
    duplicate_ids = [qid for qid, count in Counter(ids).items() if qid and count > 1]
    for qid in duplicate_ids:
        errors.append(f"ID bị trùng trong ngân hàng: {qid}")

    expected_count = manifest.get("question_count")
    if expected_count != len(questions):
        errors.append(f"question_count={expected_count}, nhưng thực tế tải được {len(questions)} câu")

    for question, source_path in questions:
        errors.extend(validate_question(question, source_path, skill_labels))

    skill_counts: Counter[str] = Counter()
    difficulty_counts: Counter[str] = Counter()
    for question, _ in questions:
        for skill in question.get("tags", {}).get("skill", []):
            skill_counts[skill] += 1
        difficulty_counts[question.get("difficulty", "(missing)")] += 1

    print(f"Manifest : {manifest_path}")
    print(f"Bank ID  : {manifest.get('bank_id', '(missing)')}")
    print(f"Số chunk : {len(sources)}")
    print(f"Số câu   : {len(questions)}")
    print("Độ khó   : " + ", ".join(f"{key}={value}" for key, value in sorted(difficulty_counts.items())))
    print("Kỹ năng  :")
    for skill, count in sorted(skill_counts.items()):
        print(f"  - {skill}: {count}")

    if errors:
        print("\n❌ KHÔNG ĐẠT")
        for error in errors:
            print(f"  - {error}")
        return 1

    print("\n✅ Practice Bank hợp lệ.")
    return 0


def main() -> int:
    parser = argparse.ArgumentParser(description="Validate Practice Bank manifest")
    parser.add_argument(
        "manifest",
        nargs="?",
        default="docs/assets/data/practice/04-bieu-thuc-dai-so-v2.manifest.json",
        help="Đường dẫn đến manifest JSON",
    )
    args = parser.parse_args()
    return validate_manifest(Path(args.manifest))


if __name__ == "__main__":
    raise SystemExit(main())
