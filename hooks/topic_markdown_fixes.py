"""Narrow build-time transformations; source-locked paper Markdown stays unchanged.

Thirteen pilot Practice pages publish only their reviewed interactive players during
the owner-approved content reclassification. Hiding old learner-visible paper
blocks is NOT academic retirement, bank migration, or history regrading.
"""
from __future__ import annotations

import re

_TOPIC_ACTIONS = re.compile(
    r'(?ms)(^## ➡️ Tiếp tục học\s*\n\s*)'
    r'<div class="topic-workspace-actions" markdown>\s*\n'
    r'(?P<body>.*?)'
    r'\n\s*</div>(?=\s*(?:\n---\s*)?\Z)'
)

_PILOT_PRACTICE = {
    "kien-thuc/02-so-va-phep-tinh/bai-tap.md":
        ("CT02", "02-so-va-phep-tinh-v4.manifest.json", "a-luyen-nhanh-tuong-tac"),
    "kien-thuc/03-ti-le-ti-le-thuc/bai-tap.md":
        ("CT03", "03-ti-le-ti-le-thuc-v4.manifest.json", "luyen-tap-tuong-tac"),
    "kien-thuc/04-bieu-thuc-dai-so/bai-tap.md":
        ("CT04", "04-bieu-thuc-dai-so-v6.manifest.json", "luyen-tap-tuong-tac"),
    "kien-thuc/21-thong-ke/bai-tap.md":
        ("CT21", "21-thong-ke-v2.manifest.json", "luyen-tap-tuong-tac"),
}


# Next wave: keep the original paper-source Markdown immutable while publishing
# only the existing reviewed interactive banks. A visibility change is not a
# math-content migration or an academic retirement of any source exercise.
_NEXT_PILOT_PRACTICE = {
    "kien-thuc/05-7-hang-dang-thuc/bai-tap.md":
        ("CT05", "05-7-hang-dang-thuc-v1.manifest.json", "7 Hằng đẳng thức đáng nhớ"),
    "kien-thuc/06-phan-tich-da-thuc/bai-tap.md":
        ("CT06", "06-phan-tich-da-thuc-v1.manifest.json", "Phân tích đa thức thành nhân tử"),
    "kien-thuc/07-phan-thuc-dai-so/bai-tap.md":
        ("CT07", "07-phan-thuc-dai-so-v1.manifest.json", "Phân thức đại số"),
    "kien-thuc/08-phuong-trinh-bat-phuong-trinh/bai-tap.md":
        ("CT08", "08-phuong-trinh-bat-phuong-trinh-v1.manifest.json", "Phương trình và bất phương trình"),
    "kien-thuc/09-he-phuong-trinh/bai-tap.md":
        ("CT09", "09-he-phuong-trinh-v1.manifest.json", "Hệ phương trình bậc nhất hai ẩn"),
    "kien-thuc/10-ham-so-do-thi/bai-tap.md":
        ("CT10", "10-ham-so-do-thi-v1.manifest.json", "Hàm số và đồ thị"),
    "kien-thuc/11-can-thuc/bai-tap.md":
        ("CT11", "11-can-thuc-v1.manifest.json", "Căn thức và biến đổi căn thức"),
    "kien-thuc/12-phuong-trinh-bac-hai-viete/bai-tap.md":
        ("CT12", "12-phuong-trinh-bac-hai-viete-v1.manifest.json", "Phương trình bậc hai & Viète"),
    "kien-thuc/13-goc-va-duong-thang/bai-tap.md":
        ("CT13", "13-goc-va-duong-thang-v1.manifest.json", "Góc và quan hệ giữa các đường thẳng"),
}


def _interactive_only_next_pilot(src_path: str) -> str:
    topic, manifest, title = _NEXT_PILOT_PRACTICE[src_path]
    # Match the approved first-paint layout on CT02/03/04/21 but do not
    # generate a second H2 above the player's native toolbar heading.
    return f"""# Luyện tập – Chuyên đề {topic[2:]}: {title}

<section class="practice-ui-v2-banner" data-practice-ui-v2="{topic}" aria-label="Chọn cách luyện tập">
  <p class="practice-ui-v2-kicker">CHUYÊN ĐỀ {topic[2:]} · HỌC VÀ THỰC HÀNH</p>
  <h2>Luyện tập trực tiếp</h2>
  <p>Trả lời ngay trên trang để nhận phản hồi và gợi ý khi cần. Đây không phải bài Tự kiểm tra độc lập.</p>
  <nav class="practice-ui-v2-actions" aria-label="Đi tới hoạt động">
    <a class="practice-ui-v2-primary" href="#luyen-tap-tuong-tac">Bắt đầu luyện trực tiếp →</a>
    <a href="../../../luyen-tap/tu-luan/?topic={topic}">Bài cần trình bày trên giấy</a>
    <a href="../tu-kiem-tra/">Tự kiểm tra không gợi ý</a>
  </nav>
</section>

<link rel="stylesheet" href="../../../assets/stylesheets/practice-engine.css">
<script src="../../../assets/javascripts/practice-rich-answer-v1.js" defer></script>
<script src="../../../assets/javascripts/practice-engine-v2.js" defer></script>

<div id="luyen-tap-tuong-tac" aria-hidden="true"></div>
<div data-practice-bank-v2="../../../assets/data/practice/{manifest}" data-session-size="10"></div>
"""

def _unwrap_topic_actions(markdown: str) -> str:
    def repl(match: re.Match[str]) -> str:
        body = match.group("body").rstrip()
        return f"{match.group(1)}{body}\n"

    return _TOPIC_ACTIONS.sub(repl, markdown)


def _interactive_only_pilot(markdown: str, src_path: str) -> str:
    topic, manifest, anchor = _PILOT_PRACTICE[src_path]
    cut = markdown.find("</section>")
    if cut < 0 or f'data-practice-ui-v2="{topic}"' not in markdown[:cut]:
        raise ValueError(f"Missing source-locked Practice entry for {topic}")
    banner = markdown[:cut + len("</section>")].rstrip()
    return f"""{banner}

<link rel="stylesheet" href="../../../assets/stylesheets/practice-engine.css">
<script src="../../../assets/javascripts/practice-rich-answer-v1.js" defer></script>
<script src="../../../assets/javascripts/practice-engine-v2.js" defer></script>

<div id="{anchor}" aria-hidden="true"></div>

<div data-practice-bank-v2="../../../assets/data/practice/{manifest}" data-session-size="10"></div>

**Muốn luyện trình bày lời giải trên giấy?** Mở [Thư viện bài tập tự luận](../../../luyen-tap/tu-luan/?topic={topic}).

*Tiến độ được lưu trên thiết bị đang sử dụng; có thể sao lưu ở mục Tiến độ học tập.*
"""


def on_page_markdown(markdown, page, config, files):
    src_path = getattr(getattr(page, "file", None), "src_path", "") or ""
    if src_path in _PILOT_PRACTICE:
        return _interactive_only_pilot(markdown, src_path)
    if src_path in _NEXT_PILOT_PRACTICE:
        return _interactive_only_next_pilot(src_path)
    if src_path.startswith("kien-thuc/") and src_path.endswith("/index.md"):
        return _unwrap_topic_actions(markdown)
    return markdown
