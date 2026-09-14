#!/usr/bin/env python3
from __future__ import annotations

import base64
import gzip
import json
from pathlib import Path

ROOT = Path(__file__).resolve().parents[2]
PAYLOAD_DIR = ROOT / "tools" / "practice-batch-09-12"
OUT_DIR = ROOT / "docs" / "assets" / "data" / "practice"
TOPICS = ("09", "10", "11", "12")


def load_payload(topic: str) -> dict:
    path = PAYLOAD_DIR / f"{topic}.json.gz.b64"
    raw = gzip.decompress(base64.b64decode(path.read_text(encoding="utf-8").strip()))
    return json.loads(raw.decode("utf-8"))


def main() -> None:
    OUT_DIR.mkdir(parents=True, exist_ok=True)
    written = []
    for topic in TOPICS:
        payload = load_payload(topic)
        manifest = payload["manifest"]
        chunks = payload["chunks"]
        slug = manifest["topic"]["id"]

        manifest_path = OUT_DIR / f"{slug}-v1.manifest.json"
        manifest_path.write_text(
            json.dumps(manifest, ensure_ascii=False, indent=2) + "\n",
            encoding="utf-8",
        )
        written.append(manifest_path)

        for index, chunk in enumerate(chunks, start=1):
            chunk_path = OUT_DIR / f"{slug}-v1-{index:02d}.json"
            chunk_path.write_text(
                json.dumps(chunk, ensure_ascii=False, separators=(",", ":")) + "\n",
                encoding="utf-8",
            )
            written.append(chunk_path)

    print(f"Generated {len(written)} Practice Bank files for Topics 09-12.")
    for path in written:
        print(path.relative_to(ROOT))


if __name__ == "__main__":
    main()
