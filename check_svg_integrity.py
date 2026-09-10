from __future__ import annotations

from pathlib import Path
import sys
import xml.etree.ElementTree as ET

ROOT = Path("docs/assets")


def main() -> int:
    svg_files = sorted(ROOT.rglob("*.svg"))
    if not svg_files:
        print(f"ERROR: no SVG files found under {ROOT}")
        return 1

    errors: list[str] = []

    for path in svg_files:
        try:
            tree = ET.parse(path)
        except ET.ParseError as exc:
            errors.append(f"{path}: invalid XML/SVG: {exc}")
            continue
        except OSError as exc:
            errors.append(f"{path}: cannot read file: {exc}")
            continue

        root = tree.getroot()
        if root.tag not in {"svg", "{http://www.w3.org/2000/svg}svg"}:
            errors.append(f"{path}: root element is not <svg> (found {root.tag!r})")

        # A viewBox is strongly preferred for responsive rendering in MkDocs/browser.
        # We keep this as a warning so older supporting diagrams are not blocked.
        if "viewBox" not in root.attrib:
            print(f"WARNING: {path}: missing viewBox")

    if errors:
        print("SVG integrity check FAILED:\n")
        for error in errors:
            print(f" - {error}")
        print(f"\nChecked {len(svg_files)} SVG files; {len(errors)} error(s) found.")
        return 1

    print(f"SVG integrity check PASSED: {len(svg_files)} SVG files are valid XML/SVG.")
    return 0


if __name__ == "__main__":
    sys.exit(main())
