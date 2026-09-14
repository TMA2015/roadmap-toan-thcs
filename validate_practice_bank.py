#!/usr/bin/env python3
"""Validate Roadmap Toán THCS Practice Bank manifests and question chunks."""

from __future__ import annotations

import argparse
import json
from collections import Counter
from pathlib import Path
from typing import Any

ALLOWED_DIFFICULTIES = {"basic", "intermediate", "advanced"}
DEFAULT_GLOB = "docs/assets/data/practice/*.manifest.json"


def load_json(path: Path) -> dict[str, Any]:
    try:
        return json.loads(path.read_text(encoding="utf-8"))
    except FileNotFoundError as exc:
        raise ValueError(f"Không tìm thấy tệp: {path}") from exc
    except json.JSONDecodeError as exc:
        raise ValueError(f"JSON lỗi tại {path}:{exc.lineno}:{exc.colno}: {exc.msg}") from exc


def validate_question(
    question: dict[str, Any],
    source: Path,
    skill_labels: set[str],
) -> list[str]:
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


def validate_skill_groups(
    skill_groups: Any,
    skill_labels: set[str],
) -> tuple[list[str], list[str]]:
    errors: list[str] = []
    ordered_skills: list[str] = []

    if not isinstance(skill_groups, list) or not skill_groups:
        return ["Manifest phải có skill_groups không rỗng để xác định lộ trình kỹ năng"], ordered_skills

    group_ids: list[str] = []
    seen_skills: set[str] = set()

    for index, group in enumerate(skill_groups, start=1):
        if not isinstance(group, dict):
            errors.append(f"skill_groups[{index}] phải là object")
            continue

        group_id = group.get("id")
        group_label = group.get("label")
        skills = group.get("skills")

        if not isinstance(group_id, str) or not group_id.strip():
            errors.append(f"skill_groups[{index}] thiếu id hợp lệ")
        else:
            group_ids.append(group_id)

        if not isinstance(group_label, str) or not group_label.strip():
            errors.append(f"skill_groups[{index}] thiếu label hợp lệ")

        if not isinstance(skills, list) or not skills:
            errors.append(f"skill_groups[{index}].skills phải là danh sách không rỗng")
            continue

        for skill in skills:
            if skill not in skill_labels:
                errors.append(f"skill_groups[{index}] chứa skill lạ `{skill}`")
                continue
            if skill in seen_skills:
                errors.append(f"skill `{skill}` xuất hiện ở nhiều skill_groups")
                continue
            seen_skills.add(skill)
            ordered_skills.append(skill)

    for group_id, count in Counter(group_ids).items():
        if count > 1:
            errors.append(f"skill_groups có id bị trùng: `{group_id}`")

    missing = sorted(skill_labels - seen_skills)
    for skill in missing:
        errors.append(f"skill_labels có skill chưa được xếp vào skill_groups: `{skill}`")

    return errors, ordered_skills


def validate_manifest(manifest_path: Path) -> tuple[int, set[str]]:
    errors: list[str] = []
    question_ids: set[str] = set()

    try:
        manifest = load_json(manifest_path)
    except ValueError as exc:
        print(f"\nManifest : {manifest_path}")
        print("\n❌ KHÔNG ĐẠT")
        print(f"  - {exc}")
        return 1, question_ids

    if manifest.get("schema") != "practice-bank-manifest-v1":
        errors.append("Manifest phải có schema = practice-bank-manifest-v1")

    bank_id = manifest.get("bank_id")
    if not isinstance(bank_id, str) or not bank_id.strip():
        errors.append("Manifest phải có bank_id không rỗng")

    topic = manifest.get("topic")
    if not isinstance(topic, dict) or not topic.get("id") or not topic.get("title"):
        errors.append("Manifest phải có topic.id và topic.title")

    session_size = manifest.get("session_size")
    if not isinstance(session_size, int) or session_size <= 0:
        errors.append("session_size phải là số nguyên dương")

    sources = manifest.get("sources")
    if not isinstance(sources, list) or not sources:
        errors.append("Manifest phải có danh sách sources không rỗng")
        sources = []

    if len(sources) != len(set(map(str, sources))):
        errors.append("Manifest có source bị trùng")

    skill_labels_obj = manifest.get("skill_labels")
    if not isinstance(skill_labels_obj, dict) or not skill_labels_obj:
        errors.append("Manifest phải có skill_labels không rỗng")
        skill_labels_obj = {}
    skill_labels = set(skill_labels_obj)

    group_errors, ordered_skills = validate_skill_groups(manifest.get("skill_groups"), skill_labels)
    errors.extend(group_errors)

    questions: list[tuple[dict[str, Any], Path]] = []
    chunk_ids: list[str] = []
    manifest_topic_id = topic.get("id") if isinstance(topic, dict) else None

    for source_name in sources:
        source_path = manifest_path.parent / str(source_name)
        try:
            chunk = load_json(source_path)
        except ValueError as exc:
            errors.append(str(exc))
            continue

        if chunk.get("schema") != "practice-question-chunk-v1":
            errors.append(f"{source_path.name}: schema phải là practice-question-chunk-v1")

        chunk_id = chunk.get("bank_id")
        if not isinstance(chunk_id, str) or not chunk_id.strip():
            errors.append(f"{source_path.name}: thiếu bank_id")
        else:
            chunk_ids.append(chunk_id)

        chunk_topic = chunk.get("topic")
        if (
            manifest_topic_id
            and isinstance(chunk_topic, dict)
            and chunk_topic.get("id")
            and chunk_topic.get("id") != manifest_topic_id
        ):
            errors.append(
                f"{source_path.name}: topic.id `{chunk_topic.get('id')}` "
                f"không khớp manifest `{manifest_topic_id}`"
            )

        chunk_questions = chunk.get("questions")
        if not isinstance(chunk_questions, list):
            errors.append(f"{source_path.name}: questions phải là danh sách")
            continue

        for question in chunk_questions:
            if not isinstance(question, dict):
                errors.append(f"{source_path.name}: có phần tử question không phải object")
                continue
            questions.append((question, source_path))

    duplicate_chunk_ids = [cid for cid, count in Counter(chunk_ids).items() if cid and count > 1]
    for cid in duplicate_chunk_ids:
        errors.append(f"Chunk bank_id bị trùng: {cid}")

    ids = [question.get("id") for question, _ in questions]
    duplicate_ids = [qid for qid, count in Counter(ids).items() if qid and count > 1]
    for qid in duplicate_ids:
        errors.append(f"ID bị trùng trong ngân hàng: {qid}")

    question_ids = {str(qid) for qid in ids if qid}

    content_signatures: list[tuple[str, tuple[str, ...], str]] = []
    for question, _ in questions:
        prompt = str(question.get("question", "")).strip()
        options = question.get("options")
        if prompt and isinstance(options, list) and len(options) == 4:
            content_signatures.append(
                (prompt, tuple(map(str, options)), str(question.get("id", "(missing)")))
            )

    signature_counts = Counter((prompt, options) for prompt, options, _ in content_signatures)
    for (prompt, options), count in signature_counts.items():
        if count <= 1:
            continue
        duplicate_qids = [
            qid
            for item_prompt, item_options, qid in content_signatures
            if item_prompt == prompt and item_options == options
        ]
        errors.append(
            "Câu hỏi trùng nội dung và phương án: " + ", ".join(duplicate_qids)
        )

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

    unused_skills = sorted(skill_labels - set(skill_counts))
    for skill in unused_skills:
        errors.append(f"skill_labels có skill chưa được câu nào sử dụng: `{skill}`")

    print(f"\nManifest : {manifest_path}")
    print(f"Bank ID  : {manifest.get('bank_id', '(missing)')}")
    print(f"Số chunk : {len(sources)}")
    print(f"Số câu   : {len(questions)}")
    print("Độ khó   : " + ", ".join(f"{key}={value}" for key, value in sorted(difficulty_counts.items())))
    print("Kỹ năng theo lộ trình:")
    print_order = ordered_skills or sorted(skill_counts)
    for skill in print_order:
        print(f"  - {skill}: {skill_counts.get(skill, 0)}")

    if errors:
        print("\n❌ KHÔNG ĐẠT")
        for error in errors:
            print(f"  - {error}")
        return 1, question_ids

    print("\n✅ Practice Bank hợp lệ.")
    return 0, question_ids


def discover_manifests() -> list[Path]:
    return sorted(Path(".").glob(DEFAULT_GLOB))


def main() -> int:
    parser = argparse.ArgumentParser(
        description="Validate one or all Roadmap Toán THCS Practice Bank manifests"
    )
    parser.add_argument(
        "manifests",
        nargs="*",
        help=(
            "Đường dẫn manifest JSON. Nếu bỏ trống, chương trình tự kiểm tra "
            f"tất cả manifest khớp `{DEFAULT_GLOB}`."
        ),
    )
    args = parser.parse_args()

    manifest_paths = [Path(item) for item in args.manifests] if args.manifests else discover_manifests()
    if not manifest_paths:
        print(f"❌ Không tìm thấy manifest nào theo `{DEFAULT_GLOB}`.")
        return 1

    failed = 0
    seen_ids: dict[str, Path] = {}
    cross_bank_duplicates: list[tuple[str, Path, Path]] = []

    for manifest_path in manifest_paths:
        result, ids = validate_manifest(manifest_path)
        failed += result
        for qid in ids:
            previous = seen_ids.get(qid)
            if previous and previous != manifest_path:
                cross_bank_duplicates.append((qid, previous, manifest_path))
            else:
                seen_ids[qid] = manifest_path

    if cross_bank_duplicates:
        print("\n❌ ID câu hỏi bị trùng giữa các ngân hàng:")
        for qid, first, second in cross_bank_duplicates:
            print(f"  - {qid}: {first} ↔ {second}")
        failed += 1

    print("\n" + "=" * 64)
    if failed:
        print(f"❌ Có {failed} nhóm lỗi. Chưa nên phát hành Practice Bank.")
        return 1

    print(f"✅ Tất cả {len(manifest_paths)} Practice Bank đều hợp lệ.")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
