#!/usr/bin/env python3
from pathlib import Path
import re

ROOT = Path("docs/kien-thuc")

# Regression for the raw-Markdown leak reported in "Tiếp tục học".
bad_wrappers = []
for path in sorted(ROOT.glob("[0-9][0-9]-*/index.md")):
    text = path.read_text(encoding="utf-8")
    if '<div class="topic-workspace-actions" markdown>' in text:
        bad_wrappers.append(str(path))
if bad_wrappers:
    raise SystemExit("Raw Markdown action wrapper still present: " + ", ".join(bad_wrappers))

# Practice footer contract:
# previous topic first -> same-topic navigation in the middle -> next topic last.
practice_pages = sorted(ROOT.glob("[0-9][0-9]-*/bai-tap.md"))
checked = 0
for path in practice_pages:
    m = re.match(r"(\d\d)-", path.parent.name)
    if not m:
        continue
    topic = int(m.group(1))
    text = path.read_text(encoding="utf-8")
    if topic == 1:
        continue
    if topic == 25:
        markers = [
            "**← Chuyên đề trước:**",
            "**← Học kiến thức:**",
            "**→ Tự kiểm tra học thuật:**",
        ]
        positions = [text.rfind(marker) for marker in markers]
        if any(pos < 0 for pos in positions) or positions != sorted(positions):
            raise SystemExit(f"CĐ25 Practice links violate navigation order: {path}")
        checked += 1
        continue

    markers = [
        "**← Chuyên đề trước:**",
        "**← Học kiến thức:**",
        "**→ Tự kiểm tra:**",
        "**→ Chuyên đề tiếp theo:**",
    ]
    positions = [text.rfind(marker) for marker in markers]
    if any(pos < 0 for pos in positions):
        raise SystemExit(f"Missing standardized Practice navigation marker in {path}: {markers}")
    if positions != sorted(positions):
        raise SystemExit(f"Practice links violate previous -> same-topic -> next order: {path}")
    checked += 1

if checked != 24:
    raise SystemExit(f"Expected to validate 24 Practice pages CĐ02–25, got {checked}")

print("PASS: no raw topic-workspace action wrappers remain.")
print("PASS: Practice roadmap links follow previous -> same-topic -> next across CĐ02–25.")
