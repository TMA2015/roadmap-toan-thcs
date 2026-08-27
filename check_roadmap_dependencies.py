from pathlib import Path
import html
import re
import unicodedata
from urllib.parse import unquote

ROOT = Path("docs")
TOPICS = ROOT / "kien-thuc"
BLUEPRINT = ROOT / "roadmap" / "blueprint-25-chuyen-de.md"


def clean(s):
    return (
        s.strip()
        .replace("**", "")
        .replace("`", "")
        .replace("–", "-")
        .replace("—", "-")
    )


def parse_nums(value):
    value = clean(value)

    if value in {"", "-"}:
        return set()

    result = set()

    for part in value.split(","):
        part = part.strip()

        if re.fullmatch(r"\d{2}", part):
            result.add(int(part))

        elif re.fullmatch(r"\d{2}-\d{2}", part):
            a, b = map(int, part.split("-"))
            result.update(range(a, b + 1))

    return result


def parse_blueprint():
    text = BLUEPRINT.read_text(encoding="utf-8")
    data = {}

    for line in text.splitlines():
        if not re.match(r"^\|\s*\d{2}\s*\|", line):
            continue

        cols = [
            c.strip()
            for c in line.strip().strip("|").split("|")
        ]

        if len(cols) < 9:
            continue

        num = int(cols[0])

        data[num] = {
            "title": clean(cols[1]),
            "before": parse_nums(cols[5]),
            "after": parse_nums(cols[6]),
        }

    return data


def markdown_link_targets(text):
    """Lấy target của link Markdown thường, bỏ qua ảnh Markdown."""
    pattern = re.compile(r"(?<!!)\[[^\]]*\]\(([^)\n]+)\)")

    for raw in pattern.findall(text):
        target = raw.strip()

        if target.startswith("<") and ">" in target:
            target = target[1:target.index(">")]
        else:
            target = re.split(r"\s+[\"']", target, maxsplit=1)[0]

        if target:
            yield target


def split_internal_target(source, target):
    """Tách link nội bộ thành (Path, fragment); None nếu là link ngoài."""
    lower = target.lower()

    if (
        lower.startswith(("http://", "https://", "mailto:", "tel:", "data:", "javascript:"))
        or target.startswith("//")
    ):
        return None

    without_query = target.split("?", 1)[0]
    path_part, sep, fragment = without_query.partition("#")
    path_part = unquote(path_part).strip()
    fragment = unquote(fragment).strip() if sep else ""

    if not path_part:
        if fragment:
            return source.resolve(), fragment
        return None

    if path_part.startswith("/"):
        candidate = ROOT / path_part.lstrip("/")
    else:
        candidate = source.parent / path_part

    return candidate.resolve(), fragment


def strip_fenced_code(text):
    """Bỏ fenced code để các dòng # trong code không bị coi là heading."""
    return re.sub(
        r"^\s*(```|~~~).*?^\s*\1\s*$",
        "",
        text,
        flags=re.MULTILINE | re.DOTALL,
    )


def heading_slug(value):
    """Mô phỏng slugify mặc định của Python-Markdown TOC/MkDocs."""
    value = html.unescape(value)
    value = re.sub(r"<[^>]+>", "", value)
    value = re.sub(r"!?\[([^\]]*)\]\([^)]*\)", r"\1", value)
    value = re.sub(r"[`*_~]", "", value)
    value = unicodedata.normalize("NFKD", value)
    value = value.encode("ascii", "ignore").decode("ascii")
    value = re.sub(r"[^\w\s-]", "", value.lower())
    return re.sub(r"[-\s]+", "-", value).strip("-")


def markdown_anchors(path):
    """Trả về tập anchor được sinh từ heading Markdown trong một file."""
    text = strip_fenced_code(path.read_text(encoding="utf-8"))
    anchors = set()
    used = {}

    for line in text.splitlines():
        m = re.match(r"^\s{0,3}#{1,6}\s+(.+?)\s*#*\s*$", line)
        if not m:
            continue

        base = heading_slug(m.group(1))
        if not base:
            continue

        count = used.get(base, 0)
        anchor = base if count == 0 else f"{base}_{count}"
        used[base] = count + 1
        anchors.add(anchor)

    return anchors


def topic_folder(num):
    folders = sorted(TOPICS.glob(f"{num:02d}-*"))
    return folders[0] if len(folders) == 1 else None


bp = parse_blueprint()
issues = []

print("=== QA ROADMAP & LEARNING STRUCTURE ===")
print()


# 1. Topic tham chiếu có tồn tại không
for num, info in bp.items():
    for other in info["before"] | info["after"]:
        if other not in bp:
            issues.append(
                f"{num:02d}: tham chiếu Topic {other:02d} không tồn tại"
            )


# 2. Không tự tham chiếu
for num, info in bp.items():
    if num in info["before"]:
        issues.append(f"{num:02d}: tự tham chiếu trong cột Trước")

    if num in info["after"]:
        issues.append(f"{num:02d}: tự tham chiếu trong cột Sau")


# 3. Phát hiện vòng tiên quyết trực tiếp
for a, info in bp.items():
    for b in info["before"]:
        if b in bp and a in bp[b]["before"]:
            pair = tuple(sorted((a, b)))
            msg = f"Vòng tiên quyết trực tiếp: {pair[0]:02d} ↔ {pair[1]:02d}"
            if msg not in issues:
                issues.append(msg)


# 4. Kiểm tra link index.md trong toàn bộ mục 10
link_re = re.compile(
    r"\[[^\]]+\]\((\.\./\d{2}-[^/)]+/index\.md)\)"
)

for num in range(1, 26):
    folder = topic_folder(num)

    if folder is None:
        issues.append(f"{num:02d}: không xác định duy nhất thư mục Topic")
        continue

    path = folder / "index.md"

    if not path.exists():
        issues.append(f"{num:02d}: thiếu index.md")
        continue

    text = path.read_text(encoding="utf-8")

    m = re.search(
        r"^##\s+.*?10\.\s+Liên kết Roadmap\s*$"
        r"(.*?)"
        r"(?=^##\s+.*?11\.\s+Điều kiện hoàn thành\s*$)",
        text,
        re.MULTILINE | re.DOTALL,
    )

    if not m:
        issues.append(f"{num:02d}: không đọc được mục 10")
        continue

    for rel in link_re.findall(m.group(1)):
        target = (path.parent / rel).resolve()
        if not target.exists():
            issues.append(f"{num:02d}: link hỏng trong mục 10 -> {rel}")


# 5. Kiểm tra toàn bộ link Markdown nội bộ và anchor trong docs/
docs_root = ROOT.resolve()
anchor_cache = {}

for source in sorted(ROOT.rglob("*.md")):
    text = source.read_text(encoding="utf-8")

    for raw_target in markdown_link_targets(text):
        resolved = split_internal_target(source, raw_target)

        if resolved is None:
            continue

        target, fragment = resolved

        try:
            target.relative_to(docs_root)
        except ValueError:
            issues.append(f"{source.as_posix()}: link ra ngoài docs -> {raw_target}")
            continue

        target_file = target / "index.md" if target.is_dir() else target

        if not target_file.exists():
            issues.append(f"{source.as_posix()}: link nội bộ hỏng -> {raw_target}")
            continue

        if fragment and target_file.suffix.lower() == ".md":
            if target_file not in anchor_cache:
                anchor_cache[target_file] = markdown_anchors(target_file)

            if fragment not in anchor_cache[target_file]:
                issues.append(f"{source.as_posix()}: anchor không tồn tại -> {raw_target}")


# 6. Kiểm tra chuẩn trải nghiệm học tập của toàn bộ 25 Topic
#    Bài tập: đủ Mức 1-4, có mã bài theo từng mức, có phần đáp án.
#    Tự kiểm tra: có thời gian, thang điểm, câu hỏi và đáp án/hướng dẫn chấm.
for num in range(1, 26):
    folder = topic_folder(num)
    if folder is None:
        continue

    practice = folder / "bai-tap.md"
    self_check = folder / "tu-kiem-tra.md"

    if not practice.exists():
        issues.append(f"{num:02d}: thiếu bai-tap.md")
    else:
        text = practice.read_text(encoding="utf-8")

        for level in range(1, 5):
            if not re.search(rf"^#+\s+Mức\s+{level}\b", text, re.MULTILINE | re.IGNORECASE):
                issues.append(f"{num:02d}: bai-tap.md thiếu Mức {level}")

            code_re = rf"\b{num:02d}-M{level}-\d{{2}}\b"
            if not re.search(code_re, text):
                issues.append(f"{num:02d}: bai-tap.md thiếu mã bài Mức {level}")

        if not re.search(r"^#+\s+.*Đáp án", text, re.MULTILINE | re.IGNORECASE):
            issues.append(f"{num:02d}: bai-tap.md thiếu phần Đáp án")

    if not self_check.exists():
        issues.append(f"{num:02d}: thiếu tu-kiem-tra.md")
    else:
        text = self_check.read_text(encoding="utf-8")

        if not re.search(r"Thời gian", text, re.IGNORECASE):
            issues.append(f"{num:02d}: tu-kiem-tra.md thiếu thời gian")

        if not re.search(r"Thang điểm", text, re.IGNORECASE):
            issues.append(f"{num:02d}: tu-kiem-tra.md thiếu thang điểm")

        has_heading_questions = re.search(
            r"^#+\s+Câu\s+\d+",
            text,
            re.MULTILINE | re.IGNORECASE,
        )
        has_numbered_questions = re.search(
            r"^\s*\d+\.\s+\S",
            text,
            re.MULTILINE,
        )
        if not (has_heading_questions or has_numbered_questions):
            issues.append(f"{num:02d}: tu-kiem-tra.md không đọc được câu hỏi")

        if not re.search(
            r"^#+\s+.*(?:Đáp án|Hướng dẫn chấm)",
            text,
            re.MULTILINE | re.IGNORECASE,
        ):
            issues.append(f"{num:02d}: tu-kiem-tra.md thiếu đáp án/hướng dẫn chấm")


if issues:
    print(f"CHECK: {len(issues)} vấn đề")
    print()

    for x in issues:
        print("-", x)

    print()
    print("Script chỉ đọc dữ liệu, không sửa file.")
    raise SystemExit(1)

print("PASS: dependency, link, anchor và cấu trúc học tập đều hợp lệ.")
print()
print("Script chỉ đọc dữ liệu, không sửa file.")
