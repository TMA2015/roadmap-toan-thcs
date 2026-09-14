#!/usr/bin/env python3
from __future__ import annotations

import base64
import gzip
import json
from pathlib import Path

ROOT = Path(__file__).resolve().parents[2]
PRACTICE = ROOT / "docs" / "assets" / "data" / "practice"
PAYLOAD = Path(__file__).with_name("payload.json.gz.b64")


def main() -> None:
    raw = gzip.decompress(base64.b64decode(PAYLOAD.read_text(encoding="utf-8").strip()))
    payload = json.loads(raw.decode("utf-8"))

    for key in ("06", "07", "08"):
        item = payload[key]
        slug = item["slug"]
        bank_id = item["bank"]
        title = item["title"]
        questions = item["questions"]
        if len(questions) != 120:
            raise SystemExit(f"{slug}: expected 120 questions, got {len(questions)}")

        manifest_path = PRACTICE / f"{slug}-v1.manifest.json"
        manifest = json.loads(manifest_path.read_text(encoding="utf-8"))
        sources: list[str] = []

        for index in range(4):
            source = f"{slug}-v1-{index + 1:02d}.json"
            chunk = {
                "version": 2,
                "schema": "practice-question-chunk-v1",
                "bank_id": f"{bank_id}-{index + 1:02d}",
                "topic": {"id": slug, "title": title},
                "questions": questions[index * 30 : (index + 1) * 30],
            }
            (PRACTICE / source).write_text(
                json.dumps(chunk, ensure_ascii=False, separators=(",", ":")) + "\n",
                encoding="utf-8",
            )
            sources.append(source)

        manifest["sources"] = sources
        manifest_path.write_text(
            json.dumps(manifest, ensure_ascii=False, indent=2) + "\n",
            encoding="utf-8",
        )
        print(f"Generated {slug}: 4 chunks, 120 questions")


if __name__ == "__main__":
    main()
