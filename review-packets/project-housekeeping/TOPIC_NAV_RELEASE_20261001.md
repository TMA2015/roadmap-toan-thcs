# Topic navigation/rendering fix — production release receipt

Date: 2026-10-01

Owner-observed defects addressed:
- raw Markdown leakage in the "Tiếp tục học" area;
- inconsistent Practice footer navigation order.

Implementation:
- source-locked lesson files remain unchanged;
- `attr_list` is enabled for Material-style button attributes;
- narrow MkDocs hook `hooks/topic_markdown_fixes.py` unwraps only the affected continuation container at build time;
- `md_in_html` is deliberately not enabled globally;
- Practice footer navigation is standardized across CĐ02–25 as previous topic → same-topic learning/self-check → next topic; CĐ25 remains capstone;
- regression `scripts/test-topic-roadmap-navigation.py` validates source contract and built HTML.

Release provenance:
- PR #232;
- exact tested HEAD `891c1dea7eda264f1da918590ddf1c7ad1aa8fb2`;
- Roadmap PR Quality `36821844162` SUCCESS;
- Skill assessment pilot QA `36821844031` SUCCESS;
- G Learning branding QA `36821844317` SUCCESS;
- production merge `a1dce90e0436351ea109bd6dbe4c6697dafcff3f`;
- Deploy MkDocs `36822248798` SUCCESS.

Current gate:
- owner production spot-QA of one affected topic continuation block and the reordered Practice footer.
