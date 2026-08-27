from pathlib import Path
import re

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


bp = parse_blueprint()
issues = []

print("=== QA DEPENDENCY & LINK ROADMAP ===")
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
        issues.append(
            f"{num:02d}: tự tham chiếu trong cột Trước"
        )

    if num in info["after"]:
        issues.append(
            f"{num:02d}: tự tham chiếu trong cột Sau"
        )


# 3. Phát hiện vòng tiên quyết trực tiếp
for a, info in bp.items():
    for b in info["before"]:
        if b in bp and a in bp[b]["before"]:
            pair = tuple(sorted((a, b)))
            msg = (
                f"Vòng tiên quyết trực tiếp: "
                f"{pair[0]:02d} ↔ {pair[1]:02d}"
            )
            if msg not in issues:
                issues.append(msg)


# 4. Kiểm tra link index.md trong toàn bộ mục 10
link_re = re.compile(
    r"\[[^\]]+\]\((\.\./\d{2}-[^/)]+/index\.md)\)"
)

for num in range(1, 26):
    folders = sorted(TOPICS.glob(f"{num:02d}-*"))

    if len(folders) != 1:
        issues.append(
            f"{num:02d}: không xác định duy nhất thư mục Topic"
        )
        continue

    path = folders[0] / "index.md"

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
        issues.append(
            f"{num:02d}: không đọc được mục 10"
        )
        continue

    section = m.group(1)

    for rel in link_re.findall(section):
        target = (path.parent / rel).resolve()

        if not target.exists():
            issues.append(
                f"{num:02d}: link hỏng trong mục 10 -> {rel}"
            )


if issues:
    print(f"CHECK: {len(issues)} vấn đề")
    print()

    for x in issues:
        print("-", x)
else:
    print("PASS: dependency và link Roadmap đều hợp lệ.")

print()
print("Script chỉ đọc dữ liệu, không sửa file.")