"""Narrow build-time transformations; source-locked paper Markdown stays unchanged.

Four pilot Practice pages publish only their reviewed interactive players during
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
    note = (
        "Các câu hỏi có thể thuộc nhiều lớp. Em chỉ chọn kỹ năng mình đã học; "
        "kết quả luyện tập không tự động tính là hoàn thành bài học theo lớp."
        if topic in {"CT02", "CT03", "CT21"}
        else "Em có thể chọn một kỹ năng để luyện riêng hoặc luyện hỗn hợp."
    )
    return f"""{banner}

<link rel="stylesheet" href="../../../assets/stylesheets/practice-engine.css">
<script src="../../../assets/javascripts/practice-rich-answer-v1.js" defer></script>
<script src="../../../assets/javascripts/practice-engine-v2.js" defer></script>

<h2 id="{anchor}">🎯 Luyện tập tương tác</h2>

Chọn đáp án hoặc nhập kết quả ngay trên trang. Sau khi trả lời, em có thể xem giải thích và luyện lại câu sai.

{note}

<div data-practice-bank-v2="../../../assets/data/practice/{manifest}" data-session-size="10"></div>

**Muốn luyện trình bày lời giải trên giấy?** Mở [Thư viện bài tập tự luận](../../../luyen-tap/?topic={topic}).

*Tiến độ được lưu trên thiết bị đang sử dụng; có thể sao lưu ở mục Tiến độ học tập.*
"""


def on_page_markdown(markdown, page, config, files):
    src_path = getattr(getattr(page, "file", None), "src_path", "") or ""
    if src_path in _PILOT_PRACTICE:
        return _interactive_only_pilot(markdown, src_path)
    if src_path.startswith("kien-thuc/") and src_path.endswith("/index.md"):
        return _unwrap_topic_actions(markdown)
    return markdown
