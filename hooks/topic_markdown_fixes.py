"""Narrow build-time fixes for legacy topic Markdown wrappers.

This hook preserves source-locked lesson files. It only unwraps the specific
"topic-workspace-actions" container before Markdown rendering so the links
inside are parsed normally. No mathematical or instructional content changes.
"""
from __future__ import annotations

import re

_TOPIC_ACTIONS = re.compile(
    r'(?ms)(^## ➡️ Tiếp tục học\s*\n\s*)'
    r'<div class="topic-workspace-actions" markdown>\s*\n'
    r'(?P<body>.*?)'
    r'\n\s*</div>(?=\s*(?:\n---\s*)?\Z)'
)


def _unwrap_topic_actions(markdown: str) -> str:
    def repl(match: re.Match[str]) -> str:
        body = match.group("body").rstrip()
        return f"{match.group(1)}{body}\n"

    return _TOPIC_ACTIONS.sub(repl, markdown)


def on_page_markdown(markdown, page, config, files):
    src_path = getattr(getattr(page, "file", None), "src_path", "") or ""
    if not (src_path.startswith("kien-thuc/") and src_path.endswith("/index.md")):
        return markdown
    return _unwrap_topic_actions(markdown)
