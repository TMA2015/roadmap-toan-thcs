from pathlib import Path
import html
import json
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

    # Explicit stable anchors are allowed in Markdown source too.
    # This supports editorial IDs that survive changes to translated headings.
    for explicit in re.finditer(r'<a\\s+[^>]*?id=["\\\']([^"\\\']+)["\\\'][^>]*>', text, re.IGNORECASE):
        anchors.add(explicit.group(1))
    for explicit in re.finditer(r'\\{#([A-Za-z][A-Za-z0-9_.:-]*)\\}', text):
        anchors.add(explicit.group(1))

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


def is_academic_capstone(practice_text, self_text):
    return (
        "roadmap-academic-capstone-v2" in practice_text
        and "roadmap-academic-capstone-v2" in self_text
    )


def check_academic_capstone(num, folder, lesson_text, practice_text, self_text):
    required_practice = [
        "## A. Đại số",
        "## B. Phương trình, hệ và Viète",
        "## C. Hàm số và mô hình hóa",
        "## D. Thống kê và xác suất",
        "## E. Hình học",
        "## F. Vận dụng tổng hợp",
    ]
    for marker in required_practice:
        if marker not in practice_text:
            issues.append(f"{num:02d}: Academic Capstone thiếu mạch luyện -> {marker}")

    if "Đề luyện hoàn chỉnh" not in lesson_text or "Bài toán kinh điển" not in lesson_text:
        issues.append(f"{num:02d}: Academic Capstone thiếu gateway đề luyện/bài kinh điển")

    if "Tự đánh giá kỹ năng làm bài" not in lesson_text:
        issues.append(f"{num:02d}: Academic Capstone chưa tách kỹ năng thi")

    if not re.search(r"^#+\s+Câu\s+1\b", self_text, re.MULTILINE | re.IGNORECASE):
        issues.append(f"{num:02d}: Academic Capstone self-check thiếu câu hỏi học thuật")

    if "Đáp án và hướng dẫn chấm" not in self_text:
        issues.append(f"{num:02d}: Academic Capstone self-check thiếu đáp án/hướng dẫn chấm")

    if "Điểm này chỉ đo bài Toán hiện tại" not in self_text:
        issues.append(f"{num:02d}: Academic Capstone chưa tách điểm học thuật khỏi kỹ năng thi")

    for filename in ["bai-toan-kinh-dien.md", "de-luyen-01.md", "tu-danh-gia-ky-nang-thi.md"]:
        if not (folder / filename).exists():
            issues.append(f"{num:02d}: Academic Capstone thiếu {filename}")


# 6. Kiểm tra chuẩn trải nghiệm học tập của toàn bộ 25 Topic
#
# Có hai cấu trúc hợp lệ:
# - Legacy: bai-tap.md có Mức 1-4 + đáp án; tu-kiem-tra.md có đề + hướng dẫn chấm.
# - Golden Template: Learn -> Practice Room -> Core Readiness Check.
#   Topic opt-in khi tu-kiem-tra.md có data-readiness-check-v1.
#
# Golden Template KHÔNG được ép quay lại cấu trúc đề/đáp án tĩnh cũ; thay vào đó
# QA phải kiểm đúng feedback timing, Core boundary và assessment data.


def readiness_source(text):
    m = re.search(r'data-readiness-check-v1\s*=\s*["\']([^"\']+)["\']', text)
    return m.group(1).strip() if m else None


def check_golden_template(num, folder, lesson_text, practice_text, self_text):
    # Learn page: mục 8/9 chỉ làm gateway sang hai không gian riêng.
    if "(bai-tap.md)" not in lesson_text:
        issues.append(f"{num:02d}: Golden Template thiếu gateway từ Bài học sang Practice Room")
    if "(tu-kiem-tra.md)" not in lesson_text:
        issues.append(f"{num:02d}: Golden Template thiếu gateway từ Bài học sang Readiness Check")

    # Practice Room: giữ luyện tương tác + tự luận với lời giải đóng mặc định.
    if not re.search(r"Luyện\s+tự\s+luận.*trình\s+bày", practice_text, re.IGNORECASE):
        issues.append(f"{num:02d}: Practice Room thiếu chế độ luyện tự luận/trình bày")
    if not re.search(r'^\?\?\?\s+example\s+["\']Xem lời giải["\']', practice_text, re.MULTILINE | re.IGNORECASE):
        issues.append(f"{num:02d}: Practice Room thiếu lời giải ẩn dạng details")
    if "Entrance10" not in practice_text or "Challenge" not in practice_text:
        issues.append(f"{num:02d}: Practice Room chưa tách rõ Core / Entrance10 / Challenge")

    # Readiness page: chỉ là shell; không lộ đáp án tĩnh trước Submit.
    source = readiness_source(self_text)
    if not source:
        issues.append(f"{num:02d}: Readiness Check thiếu data-readiness-check-v1")
        return

    if re.search(r"^#+\s+.*(?:Đáp án|Hướng dẫn chấm)", self_text, re.MULTILINE | re.IGNORECASE):
        issues.append(f"{num:02d}: Readiness Check còn lộ đáp án/hướng dẫn chấm tĩnh")

    clean_source = source.split("?", 1)[0].split("#", 1)[0].lstrip("/")
    assessment_path = (ROOT / clean_source).resolve()

    try:
        assessment_path.relative_to(ROOT.resolve())
    except ValueError:
        issues.append(f"{num:02d}: assessment data nằm ngoài docs -> {source}")
        return

    if not assessment_path.exists():
        issues.append(f"{num:02d}: thiếu assessment data -> {source}")
        return

    try:
        data = json.loads(assessment_path.read_text(encoding="utf-8"))
    except Exception as exc:
        issues.append(f"{num:02d}: assessment JSON không đọc được -> {exc}")
        return

    if data.get("schema") != "roadmap-readiness-assessment-v1":
        issues.append(f"{num:02d}: assessment schema không phải roadmap-readiness-assessment-v1")
    if data.get("layer") != "KNTT-Core":
        issues.append(f"{num:02d}: Core Readiness phải dùng layer KNTT-Core")

    policy = data.get("policy") or {}
    if policy.get("feedback") != "after_submit":
        issues.append(f"{num:02d}: Readiness phải feedback sau Submit")
    if policy.get("hints") is not False:
        issues.append(f"{num:02d}: Readiness phải tắt hints")
    if policy.get("tutor") is not False:
        issues.append(f"{num:02d}: Readiness phải tắt Tutor")
    if policy.get("hard_gate") is not False:
        issues.append(f"{num:02d}: Readiness không được hard gate")
    if not isinstance(policy.get("target_minutes"), (int, float)) or policy.get("target_minutes", 0) <= 0:
        issues.append(f"{num:02d}: Readiness thiếu target_minutes hợp lệ")

    readiness = data.get("readiness") or {}
    if readiness.get("hard_gate") is not False:
        issues.append(f"{num:02d}: readiness policy không được hard gate")
    threshold = readiness.get("ready_threshold")
    if not isinstance(threshold, (int, float)) or not 0 < threshold <= 1:
        issues.append(f"{num:02d}: ready_threshold không hợp lệ")

    items = data.get("items")
    if not isinstance(items, list) or not items:
        issues.append(f"{num:02d}: assessment thiếu câu hỏi")
        return

    ids = set()
    total_points = 0
    for item in items:
        item_id = item.get("id")
        if not item_id or item_id in ids:
            issues.append(f"{num:02d}: assessment có ID câu trống/trùng -> {item_id or '(trống)'}")
            continue
        ids.add(item_id)

        if item.get("type") != "mcq":
            issues.append(f"{num:02d}: Readiness v1 hiện chỉ hỗ trợ mcq -> {item_id}")
        if not item.get("skill"):
            issues.append(f"{num:02d}: assessment item thiếu assessed skill -> {item_id}")

        options = item.get("options")
        answer = item.get("answer")
        if not isinstance(options, list) or len(options) < 2:
            issues.append(f"{num:02d}: assessment item thiếu phương án -> {item_id}")
        elif not isinstance(answer, int) or not 0 <= answer < len(options):
            issues.append(f"{num:02d}: assessment item có answer không hợp lệ -> {item_id}")

        points = item.get("points", 0)
        if not isinstance(points, (int, float)) or points <= 0:
            issues.append(f"{num:02d}: assessment item có points không hợp lệ -> {item_id}")
        else:
            total_points += points

    if total_points <= 0:
        issues.append(f"{num:02d}: assessment không có thang điểm hợp lệ")


for num in range(1, 26):
    folder = topic_folder(num)
    if folder is None:
        continue

    lesson = folder / "index.md"
    practice = folder / "bai-tap.md"
    self_check = folder / "tu-kiem-tra.md"

    if not practice.exists():
        issues.append(f"{num:02d}: thiếu bai-tap.md")
        continue
    if not self_check.exists():
        issues.append(f"{num:02d}: thiếu tu-kiem-tra.md")
        continue

    lesson_text = lesson.read_text(encoding="utf-8") if lesson.exists() else ""
    practice_text = practice.read_text(encoding="utf-8")
    self_text = self_check.read_text(encoding="utf-8")

    # Golden Template được nhận diện bằng marker Readiness Engine.
    if readiness_source(self_text):
        check_golden_template(num, folder, lesson_text, practice_text, self_text)
        continue

    # Academic Capstone dùng cho Topic tổng hợp/thi: nội dung học thuật và kỹ năng thi tách riêng.
    if is_academic_capstone(practice_text, self_text):
        check_academic_capstone(num, folder, lesson_text, practice_text, self_text)
        continue

    # Legacy topics vẫn giữ QA cũ cho đến khi được migrate theo batch.
    for level in range(1, 5):
        if not re.search(rf"^#+\s+Mức\s+{level}\b", practice_text, re.MULTILINE | re.IGNORECASE):
            issues.append(f"{num:02d}: bai-tap.md thiếu Mức {level}")

        code_re = rf"\b{num:02d}-M{level}-\d{{2}}\b"
        if not re.search(code_re, practice_text):
            issues.append(f"{num:02d}: bai-tap.md thiếu mã bài Mức {level}")

    if not re.search(r"^#+\s+.*Đáp án", practice_text, re.MULTILINE | re.IGNORECASE):
        issues.append(f"{num:02d}: bai-tap.md thiếu phần Đáp án")

    if not re.search(r"Thời gian", self_text, re.IGNORECASE):
        issues.append(f"{num:02d}: tu-kiem-tra.md thiếu thời gian")

    if not re.search(r"Thang điểm", self_text, re.IGNORECASE):
        issues.append(f"{num:02d}: tu-kiem-tra.md thiếu thang điểm")

    has_heading_questions = re.search(
        r"^#+\s+Câu\s+\d+",
        self_text,
        re.MULTILINE | re.IGNORECASE,
    )
    has_numbered_questions = re.search(
        r"^\s*\d+\.\s+\S",
        self_text,
        re.MULTILINE,
    )
    if not (has_heading_questions or has_numbered_questions):
        issues.append(f"{num:02d}: tu-kiem-tra.md không đọc được câu hỏi")

    if not re.search(
        r"^#+\s+.*(?:Đáp án|Hướng dẫn chấm)",
        self_text,
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
