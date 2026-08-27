from pathlib import Path
import re
from collections import defaultdict

ROOT = Path("docs/kien-thuc")


def topic_folder(num):
    folders = sorted(ROOT.glob(f"{num:02d}-*"))
    return folders[0] if len(folders) == 1 else None


def exercise_codes(text, num, level=None):
    if level is None:
        pattern = rf"\b{num:02d}-M[1-4]-\d{{2}}\b"
    else:
        pattern = rf"\b{num:02d}-M{level}-\d{{2}}\b"
    return sorted(set(re.findall(pattern, text)))


def answer_section(text):
    """Lấy phần từ heading có chữ Đáp án tới cuối file."""
    lines = text.splitlines()
    for i, line in enumerate(lines):
        if re.match(r"^#+\s+.*Đáp án", line, re.IGNORECASE):
            return "\n".join(lines[i + 1 :])
    return ""


def normalized_problem_blocks(text, num):
    """Lấy nội dung gần từng mã bài để phát hiện trùng hoàn toàn trong cùng Topic."""
    pattern = re.compile(
        rf"^#+\s+({num:02d}-M[1-4]-\d{{2}})\s*$\n(.*?)(?=^#+\s+{num:02d}-M[1-4]-\d{{2}}\s*$|^#+\s+Mức\s+[1-4]\b|^#+\s+.*Đáp án|\Z)",
        re.MULTILINE | re.IGNORECASE | re.DOTALL,
    )
    result = []
    for code, body in pattern.findall(text):
        body = re.sub(r"\s+", " ", body).strip().lower()
        body = re.sub(r"\*\*.*?\*\*", "", body)
        if body:
            result.append((code, body))
    return result


def count_answered_codes(text, codes):
    answers = answer_section(text)
    return {code for code in codes if code in answers}


print("=== AUDIT PRACTICE QUALITY 01-25 ===")
print()
print("Topic | M1 | M2 | M3 | M4 | Total | Answered | Flags")
print("------|----|----|----|----|-------|----------|------")

flagged = []

for num in range(1, 26):
    folder = topic_folder(num)
    flags = []

    if folder is None:
        print(f"{num:02d} | - | - | - | - | - | - | folder")
        flagged.append((num, ["không xác định thư mục"]))
        continue

    path = folder / "bai-tap.md"
    if not path.exists():
        print(f"{num:02d} | - | - | - | - | - | - | missing")
        flagged.append((num, ["thiếu bai-tap.md"]))
        continue

    text = path.read_text(encoding="utf-8")
    all_codes = exercise_codes(text, num)
    counts = [len(exercise_codes(text, num, level)) for level in range(1, 5)]
    total = len(all_codes)
    answered = count_answered_codes(text, all_codes)

    # Cờ định lượng thận trọng: chỉ dùng để chọn Topic cần đọc kỹ, không kết luận chất lượng.
    if total < 12:
        flags.append("ít-bài")
    if min(counts) < 2:
        flags.append("mức-mỏng")
    if max(counts) >= 3 * max(1, min(counts)):
        flags.append("lệch-mức")
    if len(answered) < len(all_codes):
        flags.append(f"thiếu-đáp-án:{len(all_codes)-len(answered)}")

    by_body = defaultdict(list)
    for code, body in normalized_problem_blocks(text, num):
        by_body[body].append(code)
    duplicates = [codes for codes in by_body.values() if len(codes) > 1]
    if duplicates:
        flags.append(f"trùng:{sum(len(x)-1 for x in duplicates)}")

    flag_text = ",".join(flags) if flags else "OK"
    print(
        f"{num:02d} | {counts[0]} | {counts[1]} | {counts[2]} | {counts[3]} | "
        f"{total} | {len(answered)}/{len(all_codes)} | {flag_text}"
    )

    if flags:
        flagged.append((num, flags))

print()
if flagged:
    print("TOPIC CẦN ĐỌC KỸ:")
    for num, flags in flagged:
        print(f"- {num:02d}: {', '.join(flags)}")
else:
    print("Không có Topic nào bị gắn cờ định lượng.")

print()
print("Lưu ý: đây là audit định lượng để chọn mẫu đọc học thuật; script không sửa file và không chặn deploy.")
