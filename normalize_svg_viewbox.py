from __future__ import annotations

import re
from pathlib import Path

ROOT = Path(__file__).resolve().parent
ASSETS = ROOT / "docs" / "assets"
SVG_OPEN_RE = re.compile(r"<svg\b(?P<attrs>[^>]*)>", re.IGNORECASE | re.DOTALL)
ATTR_RE = re.compile(r"\b(?P<name>width|height)\s*=\s*(['\"])(?P<value>.*?)\2", re.IGNORECASE | re.DOTALL)
NUMBER_RE = re.compile(r"^\s*([0-9]+(?:\.[0-9]+)?)")


def numeric_dimension(attrs: str, name: str) -> str | None:
    for match in ATTR_RE.finditer(attrs):
        if match.group("name").lower() != name:
            continue
        number = NUMBER_RE.match(match.group("value"))
        if number:
            return number.group(1)
    return None


def normalize(path: Path) -> bool:
    text = path.read_text(encoding="utf-8")
    match = SVG_OPEN_RE.search(text)
    if not match:
        return False

    attrs = match.group("attrs")
    if re.search(r"\bviewBox\s*=", attrs, re.IGNORECASE):
        return False

    width = numeric_dimension(attrs, "width")
    height = numeric_dimension(attrs, "height")
    if not width or not height:
        print(f"SKIP: {path.relative_to(ROOT)} (cannot derive width/height)")
        return False

    replacement = f'<svg{attrs} viewBox="0 0 {width} {height}">'
    text = text[: match.start()] + replacement + text[match.end() :]
    path.write_text(text, encoding="utf-8")
    print(f"NORMALIZED: {path.relative_to(ROOT)} -> viewBox=\"0 0 {width} {height}\"")
    return True


def main() -> int:
    files = sorted(ASSETS.rglob("*.svg"))
    changed = sum(normalize(path) for path in files)
    print(f"SVG viewBox normalization complete: {changed} file(s) updated in build workspace.")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
